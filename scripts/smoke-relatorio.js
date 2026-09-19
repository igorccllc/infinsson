// Smoke test do RELATÓRIO sem browser. Ver docs/INSIGHTS.md, seção R7.
//   node scripts/smoke-relatorio.js <full|nomobills|notargets|shorthist|emptyport|goals|debts|xss|histcache|histcache-velho|mobills14|mobills4>
// (rodar a partir da raiz do projeto)
// buildReport() não toca o DOM, então roda em Node com stubs mínimos.
// Grava out-<cenário>.html (autocontido) e falha se aparecer NaN/undefined/Infinity no HTML.
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');   // script mora em scripts/ — raiz do projeto é um nível acima
const code = fs.readFileSync(path.join(ROOT, 'src/app.js'), 'utf8');

// ── Mobills sintético (mesmo gerador usado no browser) ──
function seedMobills() {
  let s = 20260902;
  const rnd = () => (s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  const CATS = [
    ['Mercado',1400,.25,false,'Cartao Nubank'],['Lanches',180,.5,false,'Cartao Nubank'],['Almoco',320,.3,false,'Pix'],
    ['Janta',260,.4,false,'Cartao Nubank'],['Internet',120,.02,true,'Debito Automatico'],['Celesc',210,.3,true,'Debito Automatico'],
    ['Condominio',780,.03,true,'Debito Automatico'],['Petit/Eevee',190,.4,false,'Cartao Nubank'],['Outros Casa',240,.8,false,'Pix'],
    ['Roupa',210,.9,false,'Cartao Nubank'],['Remedios',90,.7,false,'Dinheiro'],['Education',400,.5,true,'Cartao Nubank'],
    ['Cerveja',150,.6,false,'Dinheiro'],['Bar',280,.7,false,'Cartao Nubank'],['Show/teatro/festa',200,1.2,false,'Cartao Nubank'],
    ['Uber',190,.5,false,'Cartao Nubank'],['Gasolina',380,.3,false,'Cartao Nubank'],['Estacionamento e Outros',70,.6,false,'Pix'],
    ['Outros Compras',260,1.1,false,'Cartao Nubank'],['Presente',150,1.3,false,'Cartao Nubank'],['Bar GF',190,.7,false,'Cartao Nubank'],
    ['Janta GF',300,.5,false,'Cartao Nubank'],['Presente GF',180,1.4,false,'Cartao Nubank'],['Shampoo',45,.5,false,'Cartao Nubank'],
    ['Cabelereiro',90,.3,false,'Dinheiro'],['Academia/Tenis',160,.05,true,'Debito Automatico'],['Unimed',620,.02,true,'Debito Automatico'],
    ['Dentista',250,1.5,false,'Pix'],['IPVA',0,0,false,'Pix'],['Manutencao',180,1.2,false,'Pix'],['Seguro',240,.05,true,'Debito Automatico'],
    ['Contabilidade',320,.02,true,'Debito Automatico'],['INSS/MEI',75,.01,true,'Debito Automatico'],['DAS/DARF',1180,.15,true,'Pix'],
    ['Medicamentos',110,.8,false,'Cartao Nubank'],['Celular',65,.05,true,'Debito Automatico'],['Tarifas Bancarias',30,.4,true,'Debito Automatico'],
    ['Passagens',0,0,false,'Cartao Nubank'],['Hospedagem',0,0,false,'Cartao Nubank'],['(-) Outros',0,0,false,'Pix'],['(-) AP',3180,.01,true,'Debito Automatico'],
  ];
  const months = [];
  for (let i = 23; i >= 0; i--) { const d = new Date(2026, 3 - i, 1); months.push(d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')); }
  const rows = [];
  months.forEach((m, mi) => {
    const mm = Number(m.slice(5)); const creep = 1 + mi*0.004;
    CATS.forEach(([cat, base, dev, fix, met]) => {
      let amount = base * creep * 0.55;
      if (cat === 'IPVA') amount = mm === 1 ? 1450 : 0;
      if (cat === '(-) AP') amount = 3180;
      if (cat === 'Passagens') amount = (mm === 7 || mm === 12) ? 2400 : 0;
      if (cat === 'Hospedagem') amount = (mm === 7 || mm === 12) ? 1800 : 0;
      if (cat === '(-) Outros') amount = (mi % 7 === 3) ? 2600 : 0;
      if (cat === 'Show/teatro/festa' && mi >= 21) amount = base*2.2*0.55;
      if (cat === 'Uber' && mi >= 21) amount = base*(1.25+(mi-21)*0.22)*0.55;
      if (cat === 'Cerveja' && mi >= 21) amount = base*(0.9-(mi-21)*0.22)*0.55;
      if (amount <= 0) return;
      const n = fix ? 1 : 1 + Math.floor(rnd()*3);
      for (let k = 0; k < n; k++) {
        const jitter = 1 + (rnd()-.5)*2*dev;
        const val = Math.round((amount/n)*Math.max(.15,jitter)*100)/100;
        if (val > 0) rows.push({ d:m, cat, val:-val, met, fix });
      }
    });
  });
  return rows;
}

const SCEN = process.argv[2] || 'full';
const store = {};
if (SCEN === 'full' || SCEN === 'goals' || SCEN === 'debts' || SCEN === 'xss') {
  store.finplan_mobills = JSON.stringify(seedMobills());
}
// Mobills truncado para os últimos N meses: exercita a janela 6v6 (sem 24 meses
// não dá para comparar 12 contra 12) e o estado vazio por histórico curto.
if (SCEN === 'mobills14' || SCEN === 'mobills4') {
  const keep = SCEN === 'mobills14' ? 14 : 4;
  const all = seedMobills();
  const meses = [...new Set(all.map(r => r.d))].sort().slice(-keep);
  store.finplan_mobills = JSON.stringify(all.filter(r => meses.includes(r.d)));
  store.__mesesMobills = keep;
}

// Cache do histórico (chave finplan_historical). Escrito antes do eval porque
// hydrateHistorical() roda no momento em que o app.js é avaliado.
// histcache: cache com 2 meses ADIANTE do embutido -> tem de reidratar.
// histcache-velho: cache truncado, mais VELHO que o embutido -> tem de ser ignorado.
if (SCEN === "histcache" || SCEN === "histcache-velho") {
  const src = fs.readFileSync(path.join(ROOT, "src/app.js"), "utf8");
  const lit = src.match(/const HISTORICAL = \[([\s\S]*?)\n\];/)[1];
  const baked = eval("[" + lit + "]");
  if (SCEN === "histcache") {
    baked.push({ d:"2026-05", pat:1712000, pl:1436000, rec:24100, gas:7010, apo:19800, rent:1.42, txp:70.9 });
    baked.push({ d:"2026-06", pat:1749500, pl:1468300, rec:25300, gas:6890, apo:21400, rent:0.83, txp:72.8 });
    store.__esperado = { linhas: baked.length, ultimo: "2026-06", reidrata: true };
  } else {
    baked.splice(50);
    store.__esperado = { linhas: 101, ultimo: "2026-04", reidrata: false };
  }
  store.finplan_historical = JSON.stringify(baked.filter(r => r && r.d));
}

global.localStorage = {
  getItem: k => (k in store ? store[k] : null),
  setItem: (k, v) => { store[k] = String(v); },
  removeItem: k => { delete store[k]; },
};
global.window = { addEventListener(){}, removeEventListener(){} };
global.navigator = { serviceWorker: { addEventListener(){}, register(){ return { then(){ return { catch(){} } } } } } };
global.document = {
  addEventListener(){}, removeEventListener(){},
  getElementById(){ return null }, querySelector(){ return null }, querySelectorAll(){ return [] },
  createElement(){ return { style:{}, classList:{ add(){}, remove(){}, contains(){return false} }, appendChild(){}, remove(){} } },
  body: { appendChild(){} },
};
global.performance = { now: () => 0 };
global.requestAnimationFrame = fn => fn();
global.Chart = function(){}; global.Chart.register = () => {};
global.Intl = Intl;

eval(code + `
;global.__api = { loadState, refreshMobillsFilter, loadSecoesDyn, buildReport, computeInsights,
  validateMobillsVsHistorical, _rpCtx, S: () => S, HISTORICAL, MOBILLS: () => MOBILLS,
  HISTORICAL_FROM_CACHE: () => HISTORICAL_FROM_CACHE,
  coastFIYears, weightedReturnReal, investableWealth, fiNumber, currentAge, MOBILLS_RAW: () => MOBILLS_RAW };
`);

const api = global.__api;
api.loadState();
api.loadSecoesDyn();
api.refreshMobillsFilter();

// Cenários de degradação
const S = api.S();
if (SCEN === 'goals') {
  S.goals = [
    { id:'g1', name:'Entrada do apê', valor:250000, dataAlvo:'2028-06', inflacaoReal:2, prioridade:'alta' },
    { id:'g2', name:'Intercâmbio', valor:80000, dataAlvo:'2027-01', inflacaoReal:0, prioridade:'média' },
  ];
}
if (SCEN === 'debts') {
  S.debts = [{ id:'d1', name:'Financiamento do apê', tipo:'sac', saldo:370000, parcelas:169, taxaMes:0.97, dataRef:'2026-01' }];
  S.protection = { ...S.protection, dependentes:2, seguroVida:200000, seguroInvalidez:0 };
}
if (SCEN === 'nomobills') { /* store sem mobills */ }
if (SCEN === 'xss') {
  // Nome vindo da planilha/Mobills com HTML dentro: tem de sair escapado.
  const HOSTILE = '<img src=x onerror=alert(1)>Mercado';
  api.MOBILLS_RAW().forEach(r => { if (r.cat === 'Mercado') r.cat = HOSTILE; });
  api.refreshMobillsFilter();
  S.portfolio[0].name = '<script>alert(2)</' + 'script>CDI';
  S.profile.name = '<b>Meu</b> Plano <iframe src=x>';
  S.goals = [{ id:'g1', name:'<svg onload=alert(3)>Ape', valor:100000, dataAlvo:'2028-01', inflacaoReal:0, prioridade:'<i>alta</i>' }];
  S.debts = [{ id:'d1', name:'<marquee>Fin', tipo:'sac', saldo:100000, parcelas:60, taxaMes:1, dataRef:'2026-01' }];
}
if (SCEN === 'notargets') { S.targetAllocation = {}; }
if (SCEN === 'shorthist')  { api.HISTORICAL.splice(0, api.HISTORICAL.length - 4); }
if (SCEN === 'emptyport')  { S.portfolio = []; }

try { api.validateMobillsVsHistorical(); } catch (e) { console.log('validateMobills:', e.message); }

const errs = [];
const origErr = console.error, origWarn = console.warn;
console.error = (...a) => { errs.push('ERROR ' + a.map(String).join(' ')); };
console.warn  = (...a) => { errs.push('WARN  ' + a.map(String).join(' ')); };

let html = '';
try {
  html = api.buildReport();
} catch (e) {
  console.error = origErr;
  console.error('buildReport EXPLODIU:', e);
  process.exit(1);
}
console.error = origErr; console.warn = origWarn;

const out = path.join(ROOT, 'out-' + SCEN + '.html');
fs.writeFileSync(out, '<!doctype html><meta charset="utf-8"><title>rel</title><style>' +
  fs.readFileSync(path.join(ROOT, 'src/style.css'), 'utf8') +
  '</style><body style="background:#e9ebef"><div class="rp-overlay" style="position:static"><div class="rp-doc">' + html + '</div></div>');

const nSecs = (html.match(/class="rp-sec"/g) || []).length;
console.log('== cenário: ' + SCEN + ' ==');
console.log('html:', html.length, 'chars |', nSecs, 'seções | arquivo:', path.basename(out));
console.log('NaN:', (html.match(/NaN/g) || []).length,
            '| undefined:', (html.match(/undefined/g) || []).length,
            '| Infinity:', (html.match(/Infinity/g) || []).length,
            '| "null":', (html.match(/>null|null</g) || []).length,
            '| R\$ -:', (html.match(/R\$ -/g) || []).length,
            '| [object:', (html.match(/\[object/g) || []).length);
// Cenário xss: nenhum HTML cru vindo de dado do usuário pode sobreviver.
if (SCEN === 'xss') {
  const probes = ['<img src=x onerror', '<script>alert(2)', '<svg onload=alert(3)', '<iframe src=x', '<marquee>'];
  const leaks = probes.filter(p => html.includes(p));
  console.log('escaping:', leaks.length ? 'FALHOU — vazou ' + leaks.join(', ') : 'PASSOU — nada cru');
  if (leaks.length) process.exitCode = 1;
}
// Cenários de cache do histórico: a foto do build não pode vencer um cache mais novo,
// nem um cache velho/corrompido pode arrastar a foto do build para trás.
if (SCEN === "histcache" || SCEN === "histcache-velho") {
  const esp = store.__esperado;
  const H = api.HISTORICAL;
  const ok = H.length === esp.linhas && H[H.length-1].d === esp.ultimo && api.HISTORICAL_FROM_CACHE() === esp.reidrata;
  console.log("cache do histórico:", ok ? "PASSOU" : "FALHOU",
    "— linhas " + H.length + "/" + esp.linhas,
    "| último " + H[H.length-1].d + "/" + esp.ultimo,
    "| reidratou " + api.HISTORICAL_FROM_CACHE() + "/" + esp.reidrata);
  if (SCEN === "histcache") {
    const r = H[H.length-1];
    const normOk = r.rent === 0.83 && r.txp === 72.8;   // nao pode ser multiplicado por 100 de novo
    console.log("normalização:", normOk ? "PASSOU — rent/txp intactos" : "FALHOU — rent=" + r.rent + " txp=" + r.txp);
    if (!normOk) process.exitCode = 1;
  }
  if (!ok) process.exitCode = 1;
}
// Janela da seção de variação: 24+ meses -> 12v12; 12-23 -> 6v6; menos -> estado vazio.
// Escopa na propria secao: frases parecidas aparecem na secao 6 e no proprio aviso.
if (SCEN === "mobills14" || SCEN === "mobills4") {
  const i = html.indexOf('id="rp-gastos-variacao"');
  const bloco = i < 0 ? '' : html.slice(i, html.indexOf('</section>', i));
  const tem = t => bloco.includes(t);
  let ok, oQue;
  if (SCEN === "mobills14") {
    ok = tem("sensível a sazonalidade") && !tem("imune a sazonalidade") && tem("6 contra 6");
    oQue = "janela 6v6 com aviso de sazonalidade";
  } else {
    ok = tem("Histórico curto demais para comparar") && !tem("Maiores altas") && !tem("Consolidado por seção");
    oQue = "estado vazio, sem tabelas";
  }
  console.log("variação de gastos (" + store.__mesesMobills + " meses):",
    ok ? "PASSOU — " + oQue : "FALHOU — bloco tem " + bloco.length + " chars: " + bloco.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").slice(0, 220));
  if (!ok) process.exitCode = 1;
}
// Coast FI: a seção 9 mostra o mesmo fato de dois jeitos — "coasta em N anos"
// (resolve o TEMPO) e "bastaria ter R$ X hoje" (resolve o VALOR). Saem da mesma
// equação, então têm de concordar sempre: estar acima do limiar em reais é
// equivalente a coastar em menos anos do que faltam até aposentar.
if (SCEN === 'full') {
  const anos = api.coastFIYears();
  const r = api.weightedReturnReal() / 100;
  const t = Math.max(0, (S.assumptions.retirementAge || 60) - api.currentAge());
  if (anos != null && anos > 0 && r > 0 && t > 0) {
    const alvo = api.fiNumber() / Math.pow(1 + r, t);
    const w0 = api.investableWealth();
    const passouEmReais = w0 >= alvo;
    const passouEmAnos  = anos <= t;
    const ok = passouEmReais === passouEmAnos;
    // o limiar tambem tem de reproduzir o numero de anos: ln(meta/alvo)/ln(1+r) == t
    const tDoAlvo = Math.log(api.fiNumber() / alvo) / Math.log(1 + r);
    const ok2 = Math.abs(tDoAlvo - t) < 0.01;
    console.log('coast FI:', ok && ok2 ? 'PASSOU' : 'FALHOU',
      '— coasta em ' + anos.toFixed(2) + ' anos, faltam ' + t +
      ' | limiar ' + Math.round(alvo) + ' vs ' + Math.round(w0) +
      ' | acima-em-reais=' + passouEmReais + ' acima-em-anos=' + passouEmAnos +
      ' | t(limiar)=' + tDoAlvo.toFixed(3));
    if (!ok || !ok2) process.exitCode = 1;
  } else {
    console.log('coast FI: pulado (coast=' + anos + ', r=' + r.toFixed(4) + ', t=' + t + ')');
  }
}
if (errs.length) { console.log('--- console durante o build ---'); errs.forEach(e => console.log('  ' + e)); }
else console.log('console: limpo');
