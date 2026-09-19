/**
 * FinPlan Pro — Google Apps Script
 *
 * COMO INSTALAR:
 * 1. Abra a planilha "Claude Infinnson"
 * 2. Menu Extensions > Apps Script
 * 3. Cole todo este código substituindo o que estiver lá
 * 4. Salve (Ctrl+S)
 * 5. Clique em "Deploy" > "New deployment"
 * 6. Tipo: Web app
 * 7. Execute as: Me (a conta Google dona da planilha)
 * 8. Who has access: ⚠️ "Anyone, even anonymous"  ← OBRIGATÓRIO para funcionar no browser
 *    (A URL gerada tem 65 chars aleatórios — é a "senha". Ninguém vai adivinhar.)
 * 9. Deploy > Authorize > Copy the Web app URL
 * 10. Cole essa URL no app (botão "↻ Sync Sheets" > primeira vez pede a URL)
 *
 * SE JÁ DEPLOYOU COM "Only myself":
 * Deploy > Manage deployments > ✏️ editar > mudar "Who has access" > nova versão > Deploy
 *
 * PARA ATUALIZAR O CÓDIGO após mudanças:
 * Deploy > Manage deployments > ✏️ editar > nova versão > Deploy
 */

/* ════════════════════════════════════════════════════════════════
 *  ESCRITA — Fechamento Mensal da carteira XP   [adicionado]
 *  Grava 1 linha-resumo por mês numa aba dedicada "Carteira XP".
 *  NÃO lê nem altera nenhuma outra aba — totalmente isolado do planejamento.
 *
 *  APÓS COLAR ESTE CÓDIGO, RE-DEPLOYE:
 *  Deploy > Manage deployments > ✏️ editar > Version: New version > Deploy
 *  (a URL /exec continua a mesma)
 * ════════════════════════════════════════════════════════════════ */
const CARTEIRA_SHEET   = 'Carteira XP';
const CARTEIRA_HEADERS = ['Mês', 'Data da posição', 'Patrimônio líquido', 'Total aplicado',
                          'Aporte no mês', 'Nº ativos', 'Atualizado em', 'Snapshot (JSON)'];

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    if (payload.type !== 'carteira-snapshot' || !payload.snapshot || !payload.snapshot.key)
      return jsonpOrJson(e, { ok: false, error: 'payload inválido' });
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    upsertCarteira(getOrCreateCarteira(ss), payload.snapshot);
    return jsonpOrJson(e, { ok: true, mes: payload.snapshot.key });
  } catch (err) {
    return jsonpOrJson(e, { ok: false, error: String((err && err.message) || err) });
  }
}

function getOrCreateCarteira(ss) {
  let sh = ss.getSheetByName(CARTEIRA_SHEET);
  if (!sh) {
    sh = ss.insertSheet(CARTEIRA_SHEET);
    sh.getRange(1, 1, 1, CARTEIRA_HEADERS.length).setValues([CARTEIRA_HEADERS]).setFontWeight('bold');
    sh.setFrozenRows(1);
  }
  return sh;
}

function upsertCarteira(sh, snap) {
  const row = [snap.key, snap.dateStr, snap.totLiq, snap.totApl, snap.aplMes,
               snap.nAtivos, new Date(), JSON.stringify(snap)];
  const last = sh.getLastRow();
  let target = -1;
  if (last >= 2) {
    const keys = sh.getRange(2, 1, last - 1, 1).getValues();
    for (let i = 0; i < keys.length; i++) if (String(keys[i][0]) === String(snap.key)) { target = i + 2; break; }
  }
  sh.getRange(target > 0 ? target : last + 1, 1, 1, row.length).setValues([row]);
  const n = sh.getLastRow();
  if (n > 2) sh.getRange(2, 1, n - 1, sh.getLastColumn()).sort({ column: 1, ascending: true });
}

// Roda um extrator isolado: se ESTE falhar/travar, os demais ainda voltam no payload
// (antes, um erro em qualquer aba derrubava a resposta inteira — daí o "erro constante").
function safeExtract(label, fn) {
  try {
    return fn();
  } catch (err) {
    console.error('[sync] falhou em ' + label + ': ' + err.message);
    return null;
  }
}

// Mede quanto cada etapa gasta — DIAGNÓSTICO TEMPORÁRIO. O resultado vem no
// campo "_timing" da resposta (ms por etapa) para achar o gargalo real sem
// mais tentativa-e-erro. Remover depois de resolvido.
function timed(label, timing, fn) {
  const t0 = Date.now();
  const out = fn();
  timing[label] = Date.now() - t0;
  return out;
}

function doGet(e) {
  const timing = {};
  const tStart = Date.now();
  try {
    const ss   = timed('_findSheets_total', timing, () => {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      return ss;
    });

    const hist = timed('find_historical', timing, () => findSheetByHeader(ss, ['Datas', 'Patrimonio', 'Aporte', 'Receita']));
    const bal  = timed('find_balanceamento', timing, () => findSheetByName(ss, 'Balanceamento') || findBalanceAbsoluteSheet(ss));
    const mob  = timed('find_mobills', timing, () => findMobillsSheet(ss));
    const flx  = timed('find_fluxo', timing, () => findSheetByName(ss, 'Fluxo de Caixa'));
    const fin  = timed('find_financiamento', timing, () => findSheetByName(ss, 'Financiamento'));

    // Linhas visíveis do Fluxo de Caixa são calculadas UMA vez e reaproveitadas
    // pelo fluxoGrid e pelo fluxoBold (antes cada um escaneava isRowHiddenByUser
    // por conta própria — dobrava o custo dessa checagem, que já é cara).
    const flxVisibleRows = flx ? timed('flx_visible_rows', timing, () => getVisibleRows(flx, 300)) : null;

    const result = {
      historical:    hist ? timed('extract_historical',    timing, () => safeExtract('historical',    () => extractHistorical(hist)))                    : [],
      portfolio:     bal  ? timed('extract_portfolio',     timing, () => safeExtract('portfolio',      () => extractPortfolio(bal)))                      : null,
      mobills:       mob  ? timed('extract_mobills',       timing, () => safeExtract('mobills',        () => extractMobills(mob)))                        : [],
      fluxo:         flx  ? timed('extract_fluxo',         timing, () => safeExtract('fluxo',          () => extractFluxoSecoes(flx)))                    : null,
      fluxoGrid:     flx  ? timed('extract_fluxoGrid',     timing, () => safeExtract('fluxoGrid',      () => extractGrid(flx, 300, 250, flxVisibleRows))) : null,
      fluxoBold:     flx  ? timed('extract_fluxoBold',     timing, () => safeExtract('fluxoBold',      () => extractColABold(flx, 300, flxVisibleRows)))  : null,
      financiamento: fin  ? timed('extract_financiamento', timing, () => safeExtract('financiamento',  () => extractFinanciamento(fin)))                  : null,
      updatedAt:  new Date().toISOString(),
      // Carimbo de versão — só pra confirmar que o deploy pegou o código novo (apoPL/apoImv).
      // Remover depois que o sync de aporte estiver estável.
      _ver: 'sync-apoPL-v1'
    };

    timing._total = Date.now() - tStart;
    result._timing = timing;

    return jsonpOrJson(e, result);

  } catch (err) {
    timing._total = Date.now() - tStart;
    return jsonpOrJson(e, { error: err.message, _timing: timing });
  }
}

// Suporta JSONP (?callback=fn) — bypassa CORS em apps estáticos
function jsonpOrJson(e, data) {
  const cb = e && e.parameter && e.parameter.callback;
  const body = JSON.stringify(data);
  if (cb) {
    return ContentService
      .createTextOutput(cb + '(' + body + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService
    .createTextOutput(body)
    .setMimeType(ContentService.MimeType.JSON);
}

/* ── Detecta aba pelo conteúdo dos headers ─────────────────── */
function findSheetByHeader(ss, keywords) {
  for (const sheet of ss.getSheets()) {
    try {
      const row = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      const headers = row.map(h => normalize(String(h)));
      const found = keywords.filter(k => headers.some(h => h.includes(normalize(k))));
      if (found.length >= 2) return sheet;
    } catch (e) { /* skip */ }
  }
  return null;
}

/* ── Detecta aba de Balanceamento com valores ABSOLUTOS ─────────── */
function findBalanceAbsoluteSheet(ss) {
  let best = null;
  let bestCDI = 0;

  for (const sheet of ss.getSheets()) {
    try {
      const data = sheet.getDataRange().getValues();
      if (data.length < 2) continue;

      // Tenta row 0 ou row 1 como header (alguns sheets têm linha de título extra)
      for (let headerRow = 0; headerRow <= 1; headerRow++) {
        if (headerRow >= data.length) continue;
        const headers = data[headerRow].map(h => normalize(String(h)));

        // Aceita 'cdi' como match exato ou substring
        const cdiIdx = headers.findIndex(h => h === 'cdi' || h.trim() === 'cdi');
        if (cdiIdx < 0) continue;

        // Última linha com valor real de CDI (ignora linhas futuras zeradas)
        let lastIdx = data.length - 1;
        while (lastIdx > headerRow && parseNum(data[lastIdx][cdiIdx]) === 0) lastIdx--;

        const cdiVal = parseNum(data[lastIdx][cdiIdx]);

        // Fica com a aba cujo CDI for maior (valores absolutos > percentuais)
        if (cdiVal > bestCDI) {
          bestCDI = cdiVal;
          best = sheet;
        }
      }
    } catch (e) { /* skip */ }
  }

  return best; // null se nenhuma aba tiver CDI
}

/* ── Extrai histórico da aba principal ─────────────────────── */
function extractHistorical(sheet) {
  const data    = sheet.getDataRange().getValues();
  const headers = data[0].map(h => normalize(String(h)));

  const iDate = findCol(headers, ['datas', 'data']);
  const iPat  = findCol(headers, ['patrimonio']) ;
  const iPL   = findCol(headers, ['patrimonio liquido', 'patrimônio líquido', 'liquido']);
  const iApo  = findCol(headers, ['aporte']);
  const iRec  = findCol(headers, ['receita']);
  const iGas  = findCol(headers, ['gastos totais', 'gastos']);
  // Colunas adicionais (D, F, G, J, K, L) — trazidas para a tabela do Histórico
  const iCres = findCol(headers, ['crescimento']);
  const iRent = findCol(headers, ['rentabilidade']);
  const iTxp  = findCol(headers, ['taxa de poupanca']);
  const iGasR = findCol(headers, ['gastos recorrentes']);
  const iGasN = findCol(headers, ['gastos nao-recorrentes', 'nao-recorrentes']);
  const iTax  = findCol(headers, ['taxes']);
  // Split do Aporte total (col. E) — quanto foi pra patrimônio líquido vs. imóvel (F/G).
  // Sem isso, "resultado de mercado" (Δpl − aporte) descontava aporte em imóvel de um Δ
  // que já exclui imóvel, e inflava a rentabilidade negativa. iApo (acima) continua
  // apontando pra "Aporte Total" por ser a primeira coluna com "aporte" no cabeçalho.
  const iApoPL  = findCol(headers, ['aporte pl']);
  const iApoImv = findCol(headers, ['aporte imovel']);

  // Para Patrimônio (sem "líquido"), pegar a primeira coluna que match "patrimonio" excluindo "liquido"
  const iPatOnly = headers.findIndex((h, i) =>
    h.includes('patrimonio') && !h.includes('liquido') && i !== iPL
  );

  // Célula vazia → null (para o app mostrar "—" em vez de zero forçado)
  const numOrNull = (row, i) => {
    if (i < 0) return null;
    const v = row[i];
    if (v === '' || v === null || v === undefined) return null;
    return parseNum(v);
  };

  return data.slice(1)
    .filter(row => row[iDate] && (parseNum(row[iPatOnly >= 0 ? iPatOnly : iPat]) > 0))
    .map(row => ({
      d:   toYYYYMM(row[iDate]),
      pat: parseNum(row[iPatOnly >= 0 ? iPatOnly : iPat]),
      pl:  parseNum(row[iPL]),
      apo: parseNum(row[iApo]),
      rec: parseNum(row[iRec]),
      gas: parseNum(row[iGas]),
      cres:    numOrNull(row, iCres),   // D  Crescimento Patrimônio (%)
      rent:    numOrNull(row, iRent),   // F  Rentabilidade (%)
      txp:     numOrNull(row, iTxp),    // G  Taxa de Poupança (%)
      gasRec:  numOrNull(row, iGasR),   // J  Gastos Recorrentes (R$)
      gasNRec: numOrNull(row, iGasN),   // K  Gastos Não-Recorrentes (R$)
      taxes:   numOrNull(row, iTax),    // L  Taxes (R$)
      apoPL:   numOrNull(row, iApoPL),  // F  Aporte PL (R$) — null nos meses sem o split
      apoImv:  numOrNull(row, iApoImv)  // G  Aporte Imóvel (R$)
    }))
    .filter(r => r.d && r.pat > 0);
}

/* Linhas visíveis (0-indexadas) até maxRows — pula linhas OCULTAS pelo usuário (filtro/hide manual).
 * isRowHiddenByUser não tem versão em lote (1 chamada de API por linha) — por isso o
 * resultado é cacheado por alguns minutos: syncs repetidos (o uso normal) reaproveitam
 * sem re-escanear linha por linha. */
function getVisibleRows(sheet, maxRows) {
  const last = Math.min(maxRows || 300, sheet.getLastRow());
  const cache = CacheService.getScriptCache();
  const key = 'vrows_' + sheet.getSheetId() + '_' + last;
  const hit = cache.get(key);
  if (hit) return JSON.parse(hit);

  const rows = [];
  for (let r = 1; r <= last; r++) {
    if (!sheet.isRowHiddenByUser(r)) rows.push(r - 1);
  }
  try { cache.put(key, JSON.stringify(rows), 900); } catch (e) { /* payload grande — segue sem cache */ }
  return rows;
}

/* Colunas visíveis (0-indexadas) até maxCols — mesma lógica/cache do getVisibleRows,
 * mas para isColumnHiddenByUser (também sem versão em lote). */
function getVisibleCols(sheet, maxCols) {
  const cache = CacheService.getScriptCache();
  const key = 'vcols_' + sheet.getSheetId() + '_' + maxCols;
  const hit = cache.get(key);
  if (hit) return JSON.parse(hit);

  const cols = [];
  for (let c = 1; c <= maxCols; c++) {
    if (!sheet.isColumnHiddenByUser(c)) cols.push(c - 1);
  }
  try { cache.put(key, JSON.stringify(cols), 900); } catch (e) { /* payload grande — segue sem cache */ }
  return cols;
}

/* ── Espelho de grade crua: pula linhas e colunas OCULTAS, datas → "YYYY-MM-DD".
 * Usado por Financiamento e Fluxo de Caixa (o app decide cabeçalho/formato).
 * `visibleRowsPrecalc` permite reaproveitar um cálculo já feito (ver doGet). */
function extractGrid(sheet, maxRows, maxCols, visibleRowsPrecalc) {
  const data = sheet.getDataRange().getValues();
  const nCols = Math.min(maxCols || 250, data[0] ? data[0].length : 0);
  const visiveis = getVisibleCols(sheet, nCols);
  const visibleRows = visibleRowsPrecalc || getVisibleRows(sheet, maxRows);
  return visibleRows.map(function(r) {
    const row = data[r];
    return visiveis.map(function(i) {
      const v = row[i];
      if (v instanceof Date) {
        return v.getFullYear() + '-' +
               String(v.getMonth() + 1).padStart(2, '0') + '-' +
               String(v.getDate()).padStart(2, '0');
      }
      return v;
    });
  });
}

function extractFinanciamento(sheet) {
  return extractGrid(sheet, 500, 30);
}

/* Negrito da coluna A por linha (macro-contas/seções são negrito) — alinha 1:1 com extractGrid
 * (mesmas linhas visíveis, na mesma ordem, então os índices batem entre os dois arrays) */
function extractColABold(sheet, maxRows, visibleRowsPrecalc) {
  const visibleRows = visibleRowsPrecalc || getVisibleRows(sheet, maxRows);
  if (!visibleRows.length) return [];
  const n = Math.min(maxRows || 300, sheet.getLastRow());
  const w = sheet.getRange(1, 1, n, 1).getFontWeights();
  return visibleRows.map(function(r) { return w[r][0] === 'bold'; });
}

/* ── Extrai a estrutura Seção/Categoria da aba "Fluxo de Caixa" ──
 * A partir da linha 23 ("Alimentação"): linhas em NEGRITO são seções,
 * linhas normais são as categorias da seção corrente.
 * Envia cru (nome + flag bold) — o app monta o agrupamento.      */
function extractFluxoSecoes(sheet) {
  const START = 23;
  const last = sheet.getLastRow();
  if (last < START) return [];
  const n = last - START + 1;
  const vals  = sheet.getRange(START, 1, n, 2).getValues();       // cols A e B
  const bolds = sheet.getRange(START, 1, n, 2).getFontWeights();
  const out = [];
  for (let i = 0; i < n; i++) {
    const name = String(vals[i][0] !== '' ? vals[i][0] : vals[i][1]).trim();
    if (!name) continue;
    out.push({
      r:    START + i,
      name: name,
      bold: bolds[i][0] === 'bold' || bolds[i][1] === 'bold'
    });
  }
  return out;
}

/* ── Extrai alocação (última linha com dados) ──────────────── */
function extractPortfolio(sheet) {
  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return null;

  // Procura header com 'CDI' nas primeiras 5 linhas
  let hRow = -1, headers = [];
  for (let r = 0; r < Math.min(5, data.length); r++) {
    const h = data[r].map(v => normalize(String(v)));
    if (h.some(c => c === 'cdi')) { hRow = r; headers = h; break; }
  }
  if (hRow < 0) return null;

  // Encontra última linha com CDI > 0 (ignora linhas futuras zeradas)
  const cdiIdx = headers.findIndex(h => h === 'cdi');
  let lastIdx = data.length - 1;
  while (lastIdx > hRow && parseNum(data[lastIdx][cdiIdx]) === 0) lastIdx--;
  if (lastIdx <= hRow) return null;

  const row = data[lastIdx];

  const get = (keys) => {
    const i = findCol(headers, keys);
    return i >= 0 ? parseNum(row[i]) : 0;
  };

  return {
    CDI:         get(['cdi']),
    IPCA:        get(['ipca']),
    PRE:         get(['pre', 'pré']),
    Caixa:       get(['dinheiro', 'caixa', 'cash']),
    Acoes:       get(['acoes', 'ações']),
    FIIs:        get(['fiis', 'fii']),
    FundosAcoes: get(['fundos acoes', 'fundos ações', 'fundo']),
    Multimercado:get(['multimercado', 'multi']),
    Cripto:      get(['cripto', 'crypto'])
  };
}

/* ── Encontra aba por nome (case-insensitive) ─────────────── */
function findSheetByName(ss, name) {
  const n = normalize(name);
  for (const sheet of ss.getSheets()) {
    if (normalize(sheet.getName()) === n) return sheet;
  }
  return null;
}

/* ── Detecta aba Mobills pelo conteúdo dos headers ─────────── */
function findMobillsSheet(ss) {
  for (const sheet of ss.getSheets()) {
    try {
      const data = sheet.getDataRange().getValues();
      // Headers podem estar nas primeiras 5 linhas
      for (let r = 0; r < Math.min(5, data.length); r++) {
        const headers = data[r].map(h => normalize(String(h)));
        const hasData = headers.some(h => h === 'data');
        const hasValor = headers.some(h => h === 'valor');
        const hasNatureza = headers.some(h => h === 'natureza' || h === 'categoria');
        const hasNome = headers.some(h => h === 'nome');
        if (hasData && hasValor && hasNatureza && hasNome) {
          return { sheet: sheet, headerRow: r };
        }
      }
    } catch (e) { /* skip */ }
  }
  return null;
}

/* ── Extrai lançamentos da aba Mobills ─────────────────────── */
function extractMobills(info) {
  const data    = info.sheet.getDataRange().getValues();
  const hRow    = info.headerRow;
  const headers = data[hRow].map(h => normalize(String(h)));

  const iDate = findCol(headers, ['data']);
  const iVal  = findCol(headers, ['valor']);
  const iName = findCol(headers, ['nome', 'descricao', 'descrição']);
  const iNat  = findCol(headers, ['natureza', 'categoria', 'tipo']);
  const iFix  = findCol(headers, ['recorrente']);
  const iMet  = findCol(headers, ['metodo', 'método']);

  if (iDate < 0 || iVal < 0) return [];

  return data.slice(hRow + 1)
    .filter(row => {
      if (!row[iDate] || parseNum(row[iVal]) === 0) return false;
      const nat = String(row[iNat] || '').trim();
      if (!nat || nat === 'TRUE' || nat === 'FALSE' || nat === 'Cartao') return false;
      return true;
    })
    .map(row => ({
      d:    toYYYYMM(row[iDate]),
      dt:   toYYYYMMDD(row[iDate]),   // data completa (dia) — usada na tabela de Gastos
      val:  parseNum(row[iVal]),
      name: String(row[iName] || '').trim(),
      cat:  String(row[iNat]  || '').trim(),
      fix:  iFix >= 0 ? (row[iFix] === true || String(row[iFix]).toUpperCase() === 'TRUE') : null,
      met:  iMet >= 0 ? String(row[iMet] || '').trim() : null,   // Método de pagamento (cartão, pix, ifood...)
    }))
    .filter(r => r.d);
}

/* ── Helpers ────────────────────────────────────────────────── */
function normalize(s) {
  return s.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .trim();
}

function findCol(headers, keys) {
  for (const key of keys) {
    const i = headers.findIndex(h => h.includes(key));
    if (i >= 0) return i;
  }
  return -1;
}

function parseNum(v) {
  if (!v && v !== 0) return 0;
  if (typeof v === 'number') return v;
  const s = String(v).replace(/[R$\s]/g, '').replace(/\./g, '').replace(',', '.');
  const n = parseFloat(s);
  return isNaN(n) ? 0 : n;
}

function toYYYYMM(v) {
  if (v instanceof Date) {
    const y = v.getFullYear();
    const m = String(v.getMonth() + 1).padStart(2, '0');
    return `${y}-${m}`;
  }
  const s = String(v).trim();
  // DD/MM/YYYY
  const m1 = s.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (m1) return `${m1[3]}-${m1[2]}`;
  // YYYY-MM
  const m2 = s.match(/^(\d{4})-(\d{2})/);
  if (m2) return `${m2[1]}-${m2[2]}`;
  return null;
}

// Data completa "YYYY-MM-DD" (preserva o dia)
function toYYYYMMDD(v) {
  if (v instanceof Date) {
    return v.getFullYear() + '-' +
           String(v.getMonth() + 1).padStart(2, '0') + '-' +
           String(v.getDate()).padStart(2, '0');
  }
  const s = String(v).trim();
  const m1 = s.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);      // DD/MM/YYYY
  if (m1) return `${m1[3]}-${m1[2]}-${m1[1]}`;
  const m2 = s.match(/^(\d{4})-(\d{2})-(\d{2})/);          // YYYY-MM-DD
  if (m2) return `${m2[1]}-${m2[2]}-${m2[3]}`;
  return null;
}
