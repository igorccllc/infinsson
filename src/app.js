/* ═══════════════════════════════════════════════════════════
   FINPLAN PRO — Motor de Planejamento Financeiro
   ═══════════════════════════════════════════════════════════ */

// ── 1. DADOS HISTÓRICOS ───────────────────────────────────
const HISTORICAL = [
  {d:'2017-12',pat:80798,pl:80798,rec:2000,gas:2247,apo:80635},
  {d:'2018-01',pat:79550,pl:79550,rec:2000,gas:1365,apo:-1925},
  {d:'2018-02',pat:79786,pl:79786,rec:2000,gas:1157,apo:-189},
  {d:'2018-03',pat:78066,pl:78066,rec:6768,gas:1718,apo:-1951},
  {d:'2018-04',pat:92897,pl:92897,rec:2000,gas:1468,apo:14456},
  {d:'2018-05',pat:92901,pl:92901,rec:3600,gas:1571,apo:-368},
  {d:'2018-06',pat:100893,pl:100893,rec:13160,gas:1462,apo:7564},
  {d:'2018-07',pat:114111,pl:114111,rec:3160,gas:1716,apo:12856},
  {d:'2018-08',pat:116967,pl:116967,rec:3269,gas:1278,apo:2744},
  {d:'2018-09',pat:120030,pl:120030,rec:3663,gas:1439,apo:2060},
  {d:'2018-10',pat:125135,pl:125135,rec:3998,gas:1135,apo:2683},
  {d:'2018-11',pat:128146,pl:128146,rec:4163,gas:1510,apo:2785},
  {d:'2018-12',pat:131210,pl:131210,rec:4636,gas:1414,apo:3283},
  {d:'2019-01',pat:140045,pl:140045,rec:5186,gas:2437,apo:4557},
  {d:'2019-02',pat:141414,pl:141414,rec:5186,gas:3105,apo:3592},
  {d:'2019-03',pat:144488,pl:144488,rec:4186,gas:1590,apo:2677},
  {d:'2019-04',pat:144539,pl:144539,rec:4936,gas:1791,apo:1836},
  {d:'2019-05',pat:148680,pl:148680,rec:4990,gas:6208,apo:2064},
  {d:'2019-06',pat:155723,pl:155723,rec:7480,gas:7823,apo:2027},
  {d:'2019-07',pat:160982,pl:160982,rec:6480,gas:3063,apo:3862},
  {d:'2019-08',pat:161457,pl:161457,rec:6330,gas:8661,apo:1233},
  {d:'2019-09',pat:165121,pl:165121,rec:5780,gas:5920,apo:2909},
  {d:'2019-10',pat:172155,pl:172155,rec:10790,gas:12812,apo:5650},
  {d:'2019-11',pat:188775,pl:188775,rec:22790,gas:1634,apo:21933},
  {d:'2019-12',pat:200477,pl:200477,rec:5890,gas:2076,apo:4852},
  {d:'2020-01',pat:205267,pl:205267,rec:5790,gas:1739,apo:4677},
  {d:'2020-02',pat:198364,pl:198364,rec:5790,gas:1794,apo:3460},
  {d:'2020-03',pat:168095,pl:168095,rec:5790,gas:1301,apo:4399},
  {d:'2020-04',pat:186553,pl:186553,rec:6230,gas:1140,apo:4803},
  {d:'2020-05',pat:198268,pl:198268,rec:5830,gas:1199,apo:4506},
  {d:'2020-06',pat:207917,pl:207917,rec:5830,gas:6091,apo:2072},
  {d:'2020-07',pat:224016,pl:224016,rec:6330,gas:771,apo:5558},
  {d:'2020-08',pat:216593,pl:216593,rec:6330,gas:1264,apo:5303},
  {d:'2020-09',pat:208667,pl:208667,rec:6330,gas:2037,apo:4268},
  {d:'2020-10',pat:207456,pl:207456,rec:6330,gas:1987,apo:4637},
  {d:'2020-11',pat:226979,pl:226979,rec:6330,gas:12034,apo:-904},
  {d:'2020-12',pat:241527,pl:241527,rec:6330,gas:2462,apo:4082},
  {d:'2021-01',pat:239085,pl:239085,rec:6320,gas:2359,apo:3409},
  {d:'2021-02',pat:237700,pl:237700,rec:7850,gas:1729,apo:5990},
  {d:'2021-03',pat:252895,pl:252895,rec:7850,gas:2025,apo:3749},
  {d:'2021-04',pat:266907,pl:266907,rec:7988,gas:1628,apo:6550},
  {d:'2021-05',pat:282613,pl:282613,rec:7868,gas:1075,apo:6261},
  {d:'2021-06',pat:296124,pl:296124,rec:7868,gas:1906,apo:4482},
  {d:'2021-07',pat:291430,pl:291430,rec:7868,gas:2180,apo:10771},
  {d:'2021-08',pat:287031,pl:287031,rec:9528,gas:1677,apo:7975},
  {d:'2021-09',pat:284662,pl:284662,rec:9848,gas:1979,apo:7226},
  {d:'2021-10',pat:278809,pl:278809,rec:11298,gas:4217,apo:9265},
  {d:'2021-11',pat:275467,pl:275467,rec:11298,gas:2086,apo:9315},
  {d:'2021-12',pat:283987,pl:283987,rec:11871,gas:3395,apo:8669},
  {d:'2022-01',pat:305864,pl:305864,rec:14498,gas:1957,apo:11798},
  {d:'2022-02',pat:320309,pl:320309,rec:15528,gas:3743,apo:14887},
  {d:'2022-03',pat:347087,pl:347087,rec:15498,gas:7877,apo:8025},
  {d:'2022-04',pat:338246,pl:338246,rec:15550,gas:5899,apo:10389},
  {d:'2022-05',pat:351001,pl:351001,rec:15550,gas:6077,apo:9374},
  {d:'2022-06',pat:328616,pl:328616,rec:19784,gas:8444,apo:12022},
  {d:'2022-07',pat:359934,pl:359934,rec:26486,gas:6698,apo:20775},
  {d:'2022-08',pat:392960,pl:392960,rec:22708,gas:5932,apo:16268},
  {d:'2022-09',pat:413675,pl:413675,rec:25224,gas:5858,apo:19030},
  {d:'2022-10',pat:437239,pl:437239,rec:27868,gas:13529,apo:20723},
  {d:'2022-11',pat:437578,pl:437578,rec:29448,gas:6058,apo:21840},
  {d:'2022-12',pat:457812,pl:457812,rec:22334,gas:13205,apo:17998},
  {d:'2023-01',pat:487908,pl:487908,rec:16051,gas:5090,apo:8140},
  {d:'2023-02',pat:474494,pl:474494,rec:13956,gas:4483,apo:7460},
  {d:'2023-03',pat:484734,pl:484734,rec:14926,gas:8342,apo:8231},
  {d:'2023-04',pat:489642,pl:489642,rec:14582,gas:5569,apo:7568},
  {d:'2023-05',pat:514963,pl:514963,rec:14294,gas:6691,apo:4645},
  {d:'2023-06',pat:558412,pl:558412,rec:25924,gas:5400,apo:19666},
  {d:'2023-07',pat:573670,pl:573670,rec:13608,gas:8106,apo:5819},
  {d:'2023-08',pat:563955,pl:563955,rec:14424,gas:6305,apo:7131},
  {d:'2023-09',pat:567603,pl:567603,rec:23968,gas:8711,apo:8659},
  {d:'2023-10',pat:573194,pl:573194,rec:32770,gas:12959,apo:11433},
  {d:'2023-11',pat:630921,pl:630921,rec:29360,gas:12378,apo:23914},
  {d:'2023-12',pat:673206,pl:673206,rec:29563,gas:5917,apo:21553},
  {d:'2024-01',pat:686354,pl:686354,rec:29879,gas:6082,apo:21394},
  {d:'2024-02',pat:719690,pl:719690,rec:29998,gas:5090,apo:21186},
  {d:'2024-03',pat:800174,pl:800174,rec:68506,gas:5819,apo:70035},
  {d:'2024-04',pat:819389,pl:819389,rec:28453,gas:21627,apo:23804},
  {d:'2024-05',pat:835729,pl:835729,rec:30767,gas:4607,apo:21516},
  {d:'2024-06',pat:850481,pl:787772,rec:28713,gas:5695,apo:20720},
  {d:'2024-07',pat:890981,pl:812297,rec:33519,gas:5819,apo:26273},
  {d:'2024-08',pat:939559,pl:846817,rec:27244,gas:4232,apo:22631},
  {d:'2024-09',pat:987104,pl:881516,rec:55861,gas:3405,apo:50476},
  {d:'2024-10',pat:996626,pl:882700,rec:23752,gas:13401,apo:14578},
  {d:'2024-11',pat:985685,pl:867930,rec:24815,gas:16865,apo:17734},
  {d:'2024-12',pat:1001008,pl:872252,rec:46134,gas:10381,apo:36830},
  {d:'2025-01',pat:1024971,pl:889754,rec:17393,gas:12126,apo:9296},
  {d:'2025-02',pat:1069153,pl:913981,rec:43458,gas:9796,apo:41112},
  {d:'2025-03',pat:1108834,pl:944872,rec:22177,gas:9651,apo:15875},
  {d:'2025-04',pat:1147573,pl:975830,rec:25451,gas:10506,apo:17713},
  {d:'2025-05',pat:1192445,pl:1011932,rec:25304,gas:10135,apo:16690},
  {d:'2025-06',pat:1221846,pl:1034574,rec:28330,gas:10617,apo:20804},
  {d:'2025-07',pat:1221882,pl:1030557,rec:28900,gas:11345,apo:20286},
  {d:'2025-08',pat:1299528,pl:1094156,rec:63297,gas:17292,apo:52281},
  {d:'2025-09',pat:1335051,pl:1125140,rec:27866,gas:7087,apo:18497},
  {d:'2025-10',pat:1365721,pl:1149277,rec:31985,gas:7354,apo:24320},
  {d:'2025-11',pat:1443676,pl:1224713,rec:33338,gas:7852,apo:65157},
  {d:'2025-12',pat:1554246,pl:1304770,rec:26491,gas:8244,apo:114524},
  {d:'2026-01',pat:1632271,pl:1378292,rec:152000,gas:18477,apo:22968},
  {d:'2026-02',pat:1659458,pl:1399491,rec:28833,gas:5353,apo:27324},
  {d:'2026-03',pat:1669375,pl:1405428,rec:24751,gas:6640,apo:16152},
  {d:'2026-04',pat:1675190,pl:1405079,rec:22421,gas:6693,apo:13500},
];

// ── 1b. DADOS MOBILLS (populado via sync) ─────────────────
let MOBILLS_RAW = JSON.parse(localStorage.getItem('finplan_mobills') || '[]');
let MOBILLS = MOBILLS_RAW;   // view sem os itens ignorados (ver refreshMobillsFilter); MOBILLS_RAW guarda o bruto

// ── 2. ESTADO PADRÃO ──────────────────────────────────────
const STORAGE_KEY = 'finplanpro_v1';

const DEFAULT_STATE = {
  profile: { birthYear: 1992, name: 'Meu Planejamento' },

  portfolio: [
    { id:'p1', name:'CDI',          cat:'rf',   value:488793, ret:13.5, color:'#4f8ef7' },
    { id:'p2', name:'PRÉ',          cat:'rf',   value:237700, ret:13.0, color:'#38bdf8' },
    { id:'p3', name:'IPCA+',        cat:'rf',   value:184495, ret:12.5, color:'#818cf8' },
    { id:'p4', name:'Ações',        cat:'rv',   value:332454, ret:12.0, color:'#22c55e' },
    { id:'p5', name:'FIIs',         cat:'fii',  value:93534,  ret:10.0, color:'#fbbf24' },
    { id:'p6', name:'Fundos Ações', cat:'rv',   value:60239,  ret:12.0, color:'#a78bfa' },
    { id:'p7', name:'Cripto',       cat:'rv',   value:3600,   ret:20.0, color:'#f97316' },
    { id:'p8', name:'Caixa',        cat:'cash', value:4265,   ret:13.5, color:'#64748b' },
  ],

  incomes: [
    { id:'i1', name:'Salário / Pró-labore', amount:22421, growthRate:0, active:true, work:true },
    { id:'i2', name:'Dividendos / FIIs',    amount:1500,  growthRate:0, active:true, work:true },
  ],

  expenses: [
    { id:'e1', name:'Despesas Recorrentes', cat:'moradia', amount:5208, growthRate:0, active:true },
    { id:'e2', name:'Impostos / Previdência', cat:'impostos', amount:1485, growthRate:0, active:true },
  ],

  events: [],

  assumptions: {
    birthYear:        1992,
    projectionYears:  30,
    ipca:             5.5,
    selic:            13.75,
    cdi:              13.65,
    incomeGrowth:     5.0,
    expenseGrowth:    5.5,
    retirementAge:        60,   // idade em que a renda do trabalho cessa
    incomeGrowthCapYears: 10,   // anos de crescimento da renda; depois congela (0 = sem limite)
    retireAtFI:           false, // opcional: renda do trabalho cessa ao atingir a FI (o que vier antes da idade)
  },

  scenarios: [
    { id:'pessimista', name:'Pessimista', retDelta:-3,  incDelta:-2, expDelta:+2, color:'#f87171' },
    { id:'base',       name:'Base',       retDelta:0,   incDelta:0,  expDelta:0,  color:'#4f8ef7' },
    { id:'otimista',   name:'Otimista',   retDelta:+3,  incDelta:+3, expDelta:-1, color:'#22c55e' },
  ],

  fi: {
    targetMonthlyIncome: 25000,
    withdrawalRate:      4.0,
    mode:                'swr',  // 'swr' = regra dos 4% | 'perpetuidade' = vive do juro real (principal preservado)
    realRate:            5.0,    // juro real esperado (% a.a.) para o modo perpetuidade
  },

  budgets: {},
  pacingOverrides: {},
  targetAllocation: {
    p1: 30, p2: 15, p3: 15, p4: 25, p5: 7, p6: 5, p7: 2, p8: 1,
  },
  rebalanceBand: { abs: 5, rel: 25 },
  expenseExclude: ['(-) AP'],   // categorias/termos do Mobills que NÃO contam como gasto (financiamentos etc.)

  simulator: {
    tab:        'rentabilidade',
    valor:      100000,
    meses:      60,
    cdi:        13.65,
    ipca:       5.5,
    selic:      13.75,
    pctCDB:     110,
    pctLCI:     95,
    pctTSelic:  100,
    spreadIPCA: 6.0,
  },

  quitar: {
    valor:    100000,
    saldo:    100000,
    taxaFin:  18.0,
    prazo:    60,
    pctCDI:   100,
  },

  amort: {
    saldo:      370000,
    parcelas:   169,
    taxaMes:    0.97,
    aporte:     50000,
    prazoMeses: 36,
    tipoInv:    'cdi',
    pctCDI:     105,
    cdi:        13.65,
    taxaInv:    14.0,
    spread:     8.5,
    selic:      14.0,
    ipca:       5.5,
  },
};

// ── 3. STATE MANAGER ─────────────────────────────────────
let S = {};

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    S = saved ? deepMerge(DEFAULT_STATE, JSON.parse(saved)) : JSON.parse(JSON.stringify(DEFAULT_STATE));
  } catch(e) {
    S = JSON.parse(JSON.stringify(DEFAULT_STATE));
  }
  // Migração: substitui portfólio fictício antigo pelos dados reais da planilha
  if (S.portfolio.length === 5 && S.portfolio[0]?.id === 'p1' && S.portfolio[0]?.name === 'Renda Fixa') {
    S.portfolio = DEFAULT_STATE.portfolio.map(a => ({...a}));
    saveState();
  }
  // Migração: corrige cenário Base com retDelta != 0
  const baseSc = S.scenarios.find(s => s.id === 'base');
  if (baseSc && baseSc.retDelta !== 0) {
    baseSc.retDelta = 0;
    saveState();
  }
  // Migração: remove o "Personalizado" descontinuado (agora os 3 presets são editáveis + reset)
  const ci = S.scenarios.findIndex(s => s.id === 'custom');
  if (ci >= 0) { S.scenarios.splice(ci, 1); saveState(); }
  // Migração: modelo real. Crescimento passa a ser REAL (acima da inflação) — zera os nominais antigos.
  if (!S._realModel) {
    S.incomes.forEach(i => { i.growthRate = 0; });
    S.expenses.forEach(e => { e.growthRate = 0; });
    S._realModel = true;
    saveState();
  }
  // Migração: flag "work" (renda cessa na aposentadoria) — default true p/ itens antigos.
  if (S.incomes.some(i => i.work === undefined)) {
    S.incomes.forEach(i => { if (i.work === undefined) i.work = true; });
    saveState();
  }
  // Migração: opção "aposentar ao atingir a FI" — default false (não atropela a idade escolhida).
  if (S.assumptions.retireAtFI === undefined) {
    S.assumptions.retireAtFI = false;
    saveState();
  }
  // Migração: simulador de investimentos.
  if (!S.simulator) {
    S.simulator = {
      tab: 'rentabilidade',
      valor: 100000, meses: 60,
      cdi:   S.assumptions.cdi   || 13.65,
      ipca:  S.assumptions.ipca  || 5.5,
      selic: S.assumptions.selic || 13.75,
      pctCDB: 110, pctLCI: 95, pctTSelic: 100, spreadIPCA: 6.0,
    };
    saveState();
  }
  if (S.simulator.tab === undefined) { S.simulator.tab = 'rentabilidade'; saveState(); }
  // Migração: bloco quitar vs investir.
  if (!S.quitar) {
    S.quitar = { valor: 100000, saldo: 100000, taxaFin: 18.0, prazo: 60, pctCDI: 100 };
    saveState();
  }
  // Migração: simulador de amortização SAC.
  if (!S.amort) {
    S.amort = { saldo: 370000, parcelas: 169, taxaMes: 0.97, aporte: 50000, prazoMeses: 36, tipoInv: 'cdi', pctCDI: 105, cdi: 13.65, taxaInv: 14.0, spread: 8.5, selic: 14.0, ipca: 5.5 };
    saveState();
  }
  if (S.amort && S.amort.pctCDI === undefined) {
    S.amort.pctCDI = 105; S.amort.cdi = 13.65;
    saveState();
  }
  // Migração: modo de SWR (regra dos 4% vs perpetuidade real).
  if (S.fi.mode === undefined)     { S.fi.mode = 'swr'; saveState(); }
  if (S.fi.realRate === undefined) { S.fi.realRate = 5.0; saveState(); }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(S));
}

// Filtra do Mobills os itens que você NÃO considera gasto (financiamentos, transferências...).
function isExcludedExpense(r) {
  const ex = (S && S.expenseExclude) || [];
  if (!ex.length) return false;
  const cat  = String(r.cat  || '').trim().toLowerCase();
  const name = String(r.name || '').trim().toLowerCase();
  return ex.some(e => {
    const k = String(e).trim().toLowerCase();
    return k && (cat === k || cat.includes(k) || name.includes(k));
  });
}
function refreshMobillsFilter() {
  MOBILLS = MOBILLS_RAW.filter(r => !isExcludedExpense(r));
}
function addExpenseExclude() {
  const v = prompt('Categoria ou termo a ignorar nos gastos (ex: (-) AP):');
  if (!v || !v.trim()) return;
  const t = v.trim();
  if (!S.expenseExclude) S.expenseExclude = [];
  if (!S.expenseExclude.some(e => e.toLowerCase() === t.toLowerCase())) S.expenseExclude.push(t);
  saveState(); refreshMobillsFilter(); validateMobillsVsHistorical(); renderExpenses();
}
function removeExpenseExclude(i) {
  if (!S.expenseExclude) return;
  S.expenseExclude.splice(i, 1);
  saveState(); refreshMobillsFilter(); validateMobillsVsHistorical(); renderExpenses();
}

function deepMerge(def, saved) {
  const out = JSON.parse(JSON.stringify(def));
  if (!saved) return out;
  for (const k in saved) {
    if (Array.isArray(saved[k])) { out[k] = saved[k]; }
    else if (saved[k] && typeof saved[k] === 'object') { out[k] = deepMerge(def[k] || {}, saved[k]); }
    else { out[k] = saved[k]; }
  }
  return out;
}

// ── 3b. GOOGLE SHEETS SYNC ───────────────────────────────
const SYNC_KEY = 'finplan_sync_url';

function getSyncUrl()       { return localStorage.getItem(SYNC_KEY) || ''; }
function setSyncUrl(url)    { localStorage.setItem(SYNC_KEY, url.trim()); }

async function jsonpFetch(url) {
  // Tenta fetch direto (funciona com Apps Script "Anyone, even anonymous")
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const text = await res.text();
  // Se vier JSON puro
  try { return JSON.parse(text); } catch (_) {}
  // Se vier JSONP wrappado: _fpSyncXXX({...})
  const m = text.match(/\w+\((\{[\s\S]*\})\)/);
  if (m) return JSON.parse(m[1]);
  throw new Error('Resposta inesperada do servidor: ' + text.slice(0, 120));
}

async function syncFromSheets(silent = false) {
  const url = getSyncUrl();
  if (!url) {
    if (!silent) promptSyncUrl();
    return;
  }

  updateSyncBtn('syncing');
  try {
    const data = await jsonpFetch(url);
    if (data.error) throw new Error(data.error);

    console.log('[Sync] historical rows:', data.historical?.length);
    console.log('[Sync] portfolio:', JSON.stringify(data.portfolio));

    let changed = false;

    // ── Atualiza histórico ──────────────────────────────
    if (Array.isArray(data.historical) && data.historical.length > 0) {
      // Substitui o array global HISTORICAL
      HISTORICAL.length = 0;
      data.historical.forEach(r => HISTORICAL.push(r));
      changed = true;
    }

    // ── Atualiza portfólio (preserva ret e color) ───────
    if (data.portfolio) {
      const p = data.portfolio;
      const totalFromSync = (p.CDI||0)+(p.PRE||0)+(p.IPCA||0)+(p.Acoes||0)+(p.FIIs||0)+(p.FundosAcoes||0)+(p.Cripto||0)+(p.Caixa||0);

      // Sanity check: soma total deve ser > R$10.000 (valores absolutos, não percentuais)
      if (totalFromSync < 10000) {
        console.warn('Sync: portfólio retornou valores percentuais (<1), ignorando.', p);
      } else {
        const map = {
          p1: p.CDI,  p2: p.PRE,  p3: p.IPCA,
          p4: p.Acoes, p5: p.FIIs, p6: p.FundosAcoes,
          p7: p.Cripto, p8: p.Caixa, p9: p.Multimercado,
        };
        S.portfolio.forEach(a => {
          if (map[a.id] !== undefined && map[a.id] > 0) {
            a.value = map[a.id];
            changed = true;
          }
        });
      }
      // Adiciona Multimercado se tiver valor e não existir
      if ((p.Multimercado || 0) > 0 && !S.portfolio.find(a => a.id === 'p9')) {
        S.portfolio.push({ id:'p9', name:'Multimercado', cat:'rv', value: p.Multimercado, ret:12.0, color:'#06b6d4' });
        changed = true;
      }
    }

    // ── Atualiza Mobills ──────────────────────────────────
    if (Array.isArray(data.mobills) && data.mobills.length > 0) {
      MOBILLS_RAW = data.mobills;
      localStorage.setItem('finplan_mobills', JSON.stringify(MOBILLS_RAW));
      refreshMobillsFilter();
      console.log('[Sync] mobills rows:', MOBILLS.length, '/', MOBILLS_RAW.length, 'brutos');
      changed = true;
      validateMobillsVsHistorical();
    }

    if (changed) {
      saveState();
      renderPage(activePage);
    }

    const now = new Date().toLocaleTimeString('pt-BR', { hour:'2-digit', minute:'2-digit' });
    localStorage.setItem('finplan_last_sync', now);
    updateSyncBtn('ok', now);

  } catch (err) {
    console.error('Sync error:', err);
    updateSyncBtn('error');
    if (!silent) promptSyncUrl(err.message);
  }
}

// Checa se os gastos do Mobills batem com a coluna Gastos do histórico.
// Divergência > 15% num mês fechado indica lançamento faltando na planilha.
function validateMobillsVsHistorical() {
  const byMonth = {};
  MOBILLS.forEach(r => { byMonth[r.d] = (byMonth[r.d] || 0) + Math.abs(r.val); });

  const divergences = [];
  // Ignora o mês corrente (ainda aberto) — compara só meses fechados
  const closedMonths = HISTORICAL.slice(0, -1);
  closedMonths.forEach(h => {
    const mob = byMonth[h.d];
    if (mob === undefined || !h.gas) return; // mês sem dados Mobills, nada a comparar
    const diff = Math.abs(mob - h.gas) / h.gas * 100;
    if (diff > 15) divergences.push({ d: h.d, hist: h.gas, mobills: mob, diff });
  });

  if (divergences.length) {
    console.warn('[Sync] Divergência Mobills × Histórico em', divergences.length, 'meses:',
      divergences.map(x => `${x.d}: hist ${Math.round(x.hist)} vs mobills ${Math.round(x.mobills)} (${x.diff.toFixed(0)}%)`).join(' · '));
  }
  window._mobillsDivergences = divergences; // exposto para a página de gastos exibir
}

function updateSyncBtn(state, time) {
  const btn = document.getElementById('sync-btn');
  if (!btn) return;
  const labels = { syncing: '⟳ Sincronizando…', ok: `✓ Sincronizado ${time||''}`, error: '✕ Erro no sync' };
  const colors = { syncing: 'var(--text-muted)', ok: 'var(--green)', error: 'var(--red)' };
  btn.textContent   = labels[state] || '⟳ Sync';
  btn.style.color   = colors[state] || '';
  btn.disabled      = state === 'syncing';
}

function promptSyncUrl(errorMsg) {
  const cur = getSyncUrl();
  openModal('Configurar Sync com Google Sheets', `
    ${errorMsg ? `<div style="color:var(--red);font-size:12px;margin-bottom:12px;padding:8px 12px;background:var(--red-dim);border-radius:6px">⚠️ ${errorMsg}</div>` : ''}
    <p style="font-size:13px;color:var(--text-muted);margin-bottom:12px">
      Cole a URL gerada no <strong>Deploy > Web App</strong> do Apps Script.<br>
      Certifique-se que "Who has access" está como <strong>Anyone, even anonymous</strong>.
    </p>
    <input id="sync-url-input" type="text"
      style="width:100%;padding:10px 12px;background:var(--surface-2);border:1px solid var(--border-2);border-radius:6px;color:var(--text);font-size:12px;margin-bottom:8px"
      placeholder="https://script.google.com/macros/s/…/exec"
      value="${cur || ''}">
    <div style="font-size:11px;color:var(--text-muted);margin-bottom:14px">
      A URL deve terminar em <code style="color:var(--accent)">/exec</code> e o deployment precisa estar como
      <strong>Anyone, even anonymous</strong>.
      <span id="sync-test-link" style="margin-left:6px"></span>
    </div>
    <div style="display:flex;gap:8px;justify-content:flex-end">
      <button class="btn btn-secondary btn-sm" onclick="testSyncUrl()">🔗 Testar URL</button>
      <button class="btn btn-secondary btn-sm" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary btn-sm" onclick="confirmSyncUrl()">Salvar e Sincronizar</button>
    </div>
  `);
  setTimeout(() => {
    const inp = document.getElementById('sync-url-input');
    if (inp) { inp.focus(); inp.select(); }
  }, 50);
}

function testSyncUrl() {
  const inp = document.getElementById('sync-url-input');
  const url = inp ? inp.value.trim() : '';
  if (!url) return;
  window.open(url, '_blank');
}

function confirmSyncUrl() {
  const inp = document.getElementById('sync-url-input');
  const url = inp ? inp.value.trim() : '';
  if (!url || !url.includes('script.google.com')) {
    inp.style.borderColor = 'var(--red)';
    return;
  }
  setSyncUrl(url);
  closeModal();
  syncFromSheets();
}

// ── 4. ENGINE DE PROJEÇÃO ─────────────────────────────────

function weightedReturn() {
  const total = S.portfolio.reduce((s,a) => s + a.value, 0);
  if (!total) return 10;
  return S.portfolio.reduce((s,a) => s + a.ret * (a.value / total), 0);
}
// Retorno REAL (acima da inflação) — base das projeções em valores de hoje.
function weightedReturnReal() {
  const ipca = S.assumptions.ipca || 5.5;
  return ((1 + weightedReturn() / 100) / (1 + ipca / 100) - 1) * 100;
}

function currentWealth() {
  return S.portfolio.reduce((s,a) => s + a.value, 0) || HISTORICAL[HISTORICAL.length-1].pl;
}

// Patrimônio Total (inclui imóveis e ativos não investíveis)
function totalWealth() {
  return HISTORICAL[HISTORICAL.length-1].pat;
}

// Patrimônio Investível (carteira financeira, exclui imóvel) — base da FI.
// Soma o portfólio sem a categoria 'imovel' (= Patrimônio Líquido); cai pro PL histórico se a carteira estiver vazia.
function investableWealth() {
  const port = S.portfolio.reduce((s,a) => s + (a.cat === 'imovel' ? 0 : a.value), 0);
  return port || HISTORICAL[HISTORICAL.length-1].pl;
}

function projectPath(months, startWealth, annualReturn, incDelta, expDelta) {
  const monthlyRate = Math.pow(1 + annualReturn / 100, 1/12) - 1;
  const A = S.assumptions;
  const age0  = currentAge();
  const retAge = A.retirementAge > 0 ? A.retirementAge : Infinity;
  const capY   = A.incomeGrowthCapYears > 0 ? A.incomeGrowthCapYears : Infinity;
  const fiNum  = fiNumber();                  // patrimônio que dispensa a renda do trabalho
  const path = [];
  let w = startWealth;
  let fiReached = false;                       // latch: uma vez aposentado pela FI, não volta a trabalhar

  for (let m = 0; m < months; m++) {
    const y = m / 12;
    if (A.retireAtFI && w >= fiNum) fiReached = true;
    const retired = (age0 + y) >= retAge || fiReached;  // renda do trabalho cessa (idade ou FI)
    const gY = Math.min(y, capY);             // crescimento da renda congela após o teto

    const income = S.incomes
      .filter(i => i.active)
      .reduce((s,i) => {
        if (retired && i.work !== false) return s;   // trabalho para; renda passiva (work:false) continua
        return s + i.amount * Math.pow(1 + (i.growthRate + incDelta) / 100, gY);
      }, 0);

    const expense = S.expenses
      .filter(e => e.active)
      .reduce((s,e) => s + e.amount * Math.pow(1 + (e.growthRate + expDelta) / 100, y), 0);

    const savings  = income - expense;
    const ret      = w * monthlyRate;

    const evImpact = S.events
      .filter(ev => ev.monthOffset === m)
      .reduce((s,ev) => s + ev.impact, 0);

    w = Math.max(0, w + ret + savings + evImpact);
    path.push({ m, w, income, expense, savings, ret });
  }
  return path;
}

function buildScenarioPaths(months) {
  const base = weightedReturnReal();   // projeção em valores de hoje (real)
  const w0   = investableWealth();     // FI parte do patrimônio investível (exclui imóvel)
  return S.scenarios.map(sc => ({
    ...sc,
    path: projectPath(months, w0, base + sc.retDelta, sc.incDelta, sc.expDelta),
  }));
}

// Retorna o mês seguinte ao último dado histórico (ponto de partida das projeções)
function projectionStart() {
  const d = HISTORICAL[HISTORICAL.length - 1].d; // "YYYY-MM"
  const [y, m] = d.split('-').map(Number);
  return { str: addMonths(d, 1), date: new Date(y, m, 1) }; // m já é 1-based → vira 0-based = mês seguinte
}

function findFIDate(path) {
  const fiNum = fiNumber();
  const today = projectionStart().date;
  for (const p of path) {
    if (p.w >= fiNum) {
      const d = new Date(today);
      d.setMonth(d.getMonth() + p.m);
      return { date: d, months: p.m, wealth: p.w };
    }
  }
  return null;
}

// ── 5. HELPERS ────────────────────────────────────────────
function fmt(v, d=0) {
  return new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:d}).format(v);
}
function fmtK(v) {
  if (v >= 1e6) return 'R$ ' + (v/1e6).toFixed(2).replace('.',',') + ' M';
  if (v >= 1e3) return 'R$ ' + (v/1e3).toFixed(0) + ' k';
  return fmt(v);
}
function fmtPct(v) { return v.toFixed(1).replace('.',',') + '%'; }
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2); }
function monthLabel(str) {
  const [y,m] = str.split('-');
  const ns = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  return ns[parseInt(m)-1] + '/' + y.slice(2);
}
function addMonths(dateStr, n) {
  const [y,m] = dateStr.split('-').map(Number);
  const d = new Date(y, m-1+n, 1);
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0');
}
// Taxa ativa do modelo FI: regra dos 4% (SWR) ou juro real (perpetuidade).
function fiRate() {
  return S.fi.mode === 'perpetuidade' ? (S.fi.realRate || 5) : (S.fi.withdrawalRate || 4);
}
function fiNumber() {
  return (S.fi.targetMonthlyIncome * 12) / (fiRate() / 100);
}
function currentAge() {
  return 2026 - S.profile.birthYear;
}
// Taxa de poupança honesta: (receita - gastos) / receita.
// Não usa aporte — aporte inclui rendimento reinvestido e estoura >100%.
function savingsRate(h) {
  return h.rec > 0 ? ((h.rec - h.gas) / h.rec) * 100 : 0;
}

// ── 5b. ANALYTICS ENGINE ──────────────────────────────────

// CDI médio anual aproximado (% a.a.) — benchmark histórico
const CDI_YEARLY = { 2017:9.9, 2018:6.4, 2019:5.9, 2020:2.8, 2021:4.4, 2022:12.4, 2023:13.0, 2024:10.9, 2025:14.7, 2026:13.6 };

// Retorno mensal realizado da carteira: (Δpatrimônio - aporte) / patrimônio anterior.
// Aproximação: o aporte do mês carrega ruído (rendimento reinvestido, imóvel),
// mas na média de 12m+ converge para o retorno de mercado da carteira.
function realizedReturns() {
  const out = [];
  for (let i = 1; i < HISTORICAL.length; i++) {
    const prev = HISTORICAL[i-1], cur = HISTORICAL[i];
    if (!prev.pat) continue;
    out.push({ d: cur.d, r: (cur.pat - prev.pat - (cur.apo || 0)) / prev.pat });
  }
  return out;
}

// Matriz de rentabilidade mensal: { years:[...], grid:{ano:{mês0-11: r}}, maxAbs }.
// r em decimal (ex: 0.0306 = 3,06%). maxAbs escala a intensidade da cor.
function returnsMatrix() {
  const grid = {}, yearsSet = new Set();
  let maxAbs = 0;
  for (const x of realizedReturns()) {
    const [y, m] = x.d.split('-').map(Number);
    yearsSet.add(y);
    (grid[y] = grid[y] || {})[m - 1] = x.r;
    maxAbs = Math.max(maxAbs, Math.abs(x.r));
  }
  return { years: [...yearsSet].sort((a, b) => a - b), grid, maxAbs: maxAbs || 0.01 };
}

// Contagem de meses positivos/negativos para Rentabilidade, Patrimônio e Aporte.
function monthsSummary() {
  const rent = { pos: 0, neg: 0 }, pat = { pos: 0, neg: 0 }, apo = { pos: 0, neg: 0 };
  for (const x of realizedReturns()) { if (x.r > 0) rent.pos++; else if (x.r < 0) rent.neg++; }
  for (let i = 1; i < HISTORICAL.length; i++) {
    const d = HISTORICAL[i].pat - HISTORICAL[i - 1].pat;
    if (d > 0) pat.pos++; else if (d < 0) pat.neg++;
  }
  for (const h of HISTORICAL) { if ((h.apo || 0) > 0) apo.pos++; else if ((h.apo || 0) < 0) apo.neg++; }
  return { rent, pat, apo };
}

// Cor de fundo da célula da matriz: verde (r>=0) / vermelho (r<0), alpha pela magnitude.
function heatColor(r, maxAbs) {
  if (r === undefined || r === null) return '';
  const rgb = r >= 0 ? '52,211,153' : '248,113,113';
  const alpha = (0.08 + (Math.abs(r) / maxAbs) * 0.55).toFixed(3);
  return `rgba(${rgb},${alpha})`;
}

// TWR anualizado numa janela de N meses (sem N = série completa), em % a.a.
function twr(monthsWindow) {
  const rs = realizedReturns();
  const slice = monthsWindow ? rs.slice(-monthsWindow) : rs;
  if (!slice.length) return 0;
  const acc = slice.reduce((p, x) => p * (1 + x.r), 1);
  return (Math.pow(Math.max(acc, 0.01), 12 / slice.length) - 1) * 100;
}

// CDI anualizado na mesma janela, em % a.a.
function cdiAnnualized(monthsWindow) {
  const rs = realizedReturns();
  const slice = monthsWindow ? rs.slice(-monthsWindow) : rs;
  if (!slice.length) return 0;
  const acc = slice.reduce((p, x) => {
    const y = parseInt(x.d.slice(0, 4));
    return p * Math.pow(1 + (CDI_YEARLY[y] ?? 10) / 100, 1/12);
  }, 1);
  return (Math.pow(acc, 12 / slice.length) - 1) * 100;
}

// ── 5c. SIMULADOR DE INVESTIMENTOS ───────────────────────

// Alíquota IR regressiva (sobre o ganho de renda fixa tributável).
function irRate(dias) {
  if (dias <= 180) return 0.225;
  if (dias <= 360) return 0.20;
  if (dias <= 720) return 0.175;
  return 0.15;
}

// Rentabilidade anual da poupança (% a.a., TR ≈ 0).
function poupancaRate(selic) {
  return selic > 8.5 ? (Math.pow(1.005, 12) - 1) * 100 : selic * 0.7;
}

// Calcula os 5 produtos e retorna array pronto para tabela/gráfico.
function simulate() {
  const { valor, meses, cdi, ipca, selic, pctCDB, pctLCI, pctTSelic, spreadIPCA } = S.simulator;
  const anos  = meses / 12;
  const dias  = meses * 30;
  const aliq  = irRate(dias);

  const produtos = [
    { key:'cdb',    nome:'CDB / RDB',        sub:`${pctCDB}% CDI`,          taxa: cdi * pctCDB / 100,                               isento: false },
    { key:'lci',    nome:'LCI / LCA',         sub:`${pctLCI}% CDI`,          taxa: cdi * pctLCI / 100,                               isento: true  },
    { key:'tselic', nome:'Tesouro Selic',      sub:`${pctTSelic}% Selic`,     taxa: selic * pctTSelic / 100,                          isento: false },
    { key:'poupa',  nome:'Poupança',           sub:'Regra 70% Selic',         taxa: poupancaRate(selic),                              isento: true  },
    { key:'tipca',  nome:'Tesouro IPCA+',      sub:`IPCA + ${spreadIPCA}%`,   taxa: ((1 + ipca/100)*(1 + spreadIPCA/100) - 1) * 100,  isento: false },
  ];

  const results = produtos.map(p => {
    const montBruto = valor * Math.pow(1 + p.taxa / 100, anos);
    const ganho     = montBruto - valor;
    const ir        = p.isento ? 0 : ganho * aliq;
    const montLiq   = montBruto - ir;
    const brutoPct  = (montBruto / valor - 1) * 100;
    const liqPct    = (montLiq   / valor - 1) * 100;
    const realPct   = ((1 + liqPct/100) / Math.pow(1 + ipca/100, anos) - 1) * 100;
    return { ...p, montBruto, ganho, ir, montLiq, brutoPct, liqPct, realPct };
  });

  const melhor = results.reduce((a, b) => b.montLiq > a.montLiq ? b : a);
  melhor.best = true;
  return results;
}

// Volatilidade anual estimada por classe (% a.a.) — para Monte Carlo
const VOL_BY_CAT = { rf: 2.5, rv: 18, fii: 12, cash: 0.5 };

function portfolioVol() {
  const total = S.portfolio.reduce((s, a) => s + a.value, 0);
  if (!total) return 8;
  // Vol ponderada sem correlações — superestima um pouco (conservador)
  return S.portfolio.reduce((s, a) => s + (VOL_BY_CAT[a.cat] ?? 10) * (a.value / total), 0);
}

function randn() {
  let u = 0, v = 0;
  while (!u) u = Math.random();
  while (!v) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

// Monte Carlo: distribuição da data de FI com retornos estocásticos
function monteCarloFI(nSims = 500, maxYears = 40) {
  const months = maxYears * 12;
  const fiNum = fiNumber();
  const w0 = totalWealth();
  const muM = Math.pow(1 + weightedReturnReal() / 100, 1/12) - 1;
  const volM = (portfolioVol() / 100) / Math.sqrt(12);

  // Pré-computa poupança mensal projetada (igual ao projectPath determinístico)
  const A = S.assumptions, age0 = currentAge();
  const retAge = A.retirementAge > 0 ? A.retirementAge : Infinity;
  const capY   = A.incomeGrowthCapYears > 0 ? A.incomeGrowthCapYears : Infinity;
  const sav = [];
  for (let m = 0; m < months; m++) {
    const y = m / 12;
    const retired = (age0 + y) >= retAge;
    const gY = Math.min(y, capY);
    const inc = S.incomes.filter(i => i.active).reduce((s, i) => (retired && i.work !== false) ? s : s + i.amount * Math.pow(1 + i.growthRate/100, gY), 0);
    const exp = S.expenses.filter(e => e.active).reduce((s, e) => s + e.amount * Math.pow(1 + e.growthRate/100, y), 0);
    sav.push(inc - exp);
  }

  const hits = [];
  for (let s = 0; s < nSims; s++) {
    let w = w0;
    for (let m = 0; m < months; m++) {
      w = Math.max(0, w * (1 + muM + volM * randn()) + sav[m]);
      if (w >= fiNum) { hits.push(m); break; }
    }
  }

  if (!hits.length) return null;
  hits.sort((a, b) => a - b);
  const pct = q => hits[Math.min(hits.length - 1, Math.floor(q * hits.length))];
  const horizon = S.assumptions.projectionYears * 12;
  return {
    p10: pct(0.10), p50: pct(0.50), p90: pct(0.90),
    probInHorizon: hits.filter(m => m <= horizon).length / nSims * 100,
    sims: nSims,
  };
}

// Projeção em termos reais: desconta IPCA de retorno e crescimentos.
// Meta FI permanece em dinheiro de hoje.
function realBasePath(months) {
  const ipca = S.assumptions.ipca || 5.5;
  const realRet = ((1 + weightedReturn()/100) / (1 + ipca/100) - 1) * 100;
  return projectPath(months, totalWealth(), realRet, -ipca, -ipca);
}

// Runway: meses de gastos cobertos pelos ativos líquidos (carteira investida)
function runwayMonths() {
  const liquid = S.portfolio.reduce((s, a) => s + a.value, 0);
  const last12 = HISTORICAL.slice(-12);
  const avgGas = last12.reduce((s, h) => s + h.gas, 0) / Math.max(1, last12.length);
  return avgGas > 0 ? liquid / avgGas : 0;
}

// Coast FI: anos até a meta se parar de aportar hoje (juros reais sozinhos)
function coastFIYears() {
  const ipca = S.assumptions.ipca || 5.5;
  const rReal = (1 + weightedReturn()/100) / (1 + ipca/100) - 1;
  const w0 = totalWealth(), fin = fiNumber();
  if (w0 >= fin) return 0;
  if (rReal <= 0) return null;
  return Math.log(fin / w0) / Math.log(1 + rReal);
}

// Cobertura: % dos gastos médios que a renda passiva estimada já paga
function passiveCoverage() {
  const passiveMonthly = S.portfolio.reduce((s, a) => s + a.value * (a.ret/100) / 12, 0);
  const last12 = HISTORICAL.slice(-12);
  const avgGas = last12.reduce((s, h) => s + h.gas, 0) / Math.max(1, last12.length);
  return { passiveMonthly, avgGas, pct: avgGas > 0 ? passiveMonthly / avgGas * 100 : 0 };
}

// ── 6. NAVEGAÇÃO ──────────────────────────────────────────
let activePage = 'dashboard';
let activeCharts = {};

function navigate(page) {
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  document.querySelector(`[data-page="${page}"]`).classList.add('active');
  document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  activePage = page;
  destroyCharts();
  renderPage(page);
}

function destroyCharts() {
  Object.values(activeCharts).forEach(c => { try { c.destroy(); } catch(e){} });
  activeCharts = {};
}

function renderPage(p) {
  const map = {
    dashboard:   renderDashboard,
    timeline:    renderTimeline,
    scenarios:   renderScenarios,
    portfolio:   renderPortfolio,
    cashflow:    renderCashflow,
    assumptions: renderAssumptions,
    expenses:    renderExpenses,
    fi:          renderFI,
    history:     renderHistory,
    simulador:   renderSimulador,
  };
  map[p]?.();
}

// ── 7. DASHBOARD ──────────────────────────────────────────
// ── SIMULADOR DE INVESTIMENTOS ────────────────────────────

function _simParamInput(key, label, val, min, max, step, unit) {
  return `
    <div class="sim-param-row">
      <label class="sim-param-label">${label}</label>
      <div class="sim-param-field">
        <input type="number" class="sim-num-input" min="${min}" max="${max}" step="${step}"
          value="${val}" data-sim-key="${key}"
          oninput="simNumInput(this)">
        <span class="sim-prod-unit">${unit}</span>
      </div>
    </div>`;
}

function _simSlider(key, label, val, min, max, step, fmtFn) {
  return `
    <div class="slider-group">
      <div class="slider-label-row">
        <span class="slider-lbl">${label}</span>
        <span class="slider-val" id="sv-${key}">${fmtFn(val)}</span>
      </div>
      <input type="range" class="sc-slider" min="${min}" max="${max}" step="${step}"
        value="${val}" data-sim-key="${key}"
        oninput="simSliderInput(this)" onchange="simSliderCommit(this)">
    </div>`;
}

function _buildSimResults() {
  const results = simulate();
  const { valor, meses } = S.simulator;

  const rows = results.map(r => {
    const realCls = r.realPct >= 0 ? 'green' : 'red';
    const irCell  = r.isento
      ? `<span style="color:var(--green);font-size:11px">Isento IR</span>`
      : `<span style="color:var(--red);font-size:11px">IR ${(irRate(meses*30)*100).toFixed(1)}%</span> ${fmt(r.ir)}`;
    const bestBadge = r.best ? `<span class="sim-badge">&#9733; Melhor</span>` : '';
    return `
      <tr class="${r.best ? 'sim-best' : ''}">
        <td><strong>${r.nome}</strong><br><span style="font-size:11px;color:var(--text-dim)">${r.sub}</span>${bestBadge}</td>
        <td class="r">${fmtPct(r.brutoPct)}</td>
        <td class="r">${irCell}</td>
        <td class="r">${fmtPct(r.liqPct)}</td>
        <td class="r ${realCls}">${r.realPct >= 0 ? '+' : ''}${fmtPct(r.realPct)}</td>
        <td class="r ${r.best ? 'accent bold' : ''}">${fmt(r.montLiq)}</td>
      </tr>`;
  }).join('');

  return `
    <table>
      <thead><tr>
        <th>Produto</th>
        <th class="r">Bruto %</th>
        <th class="r">IR / IOF</th>
        <th class="r">Líquido %</th>
        <th class="r">Real (−IPCA)</th>
        <th class="r">R$ Líquido</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function _simProductRow(key, label, sub, inputKey, inputVal, unit) {
  return `
    <div class="sim-prod-row">
      <div class="sim-prod-name">
        <span>${label}</span>
        ${sub ? `<span class="sim-prod-sub">${sub}</span>` : ''}
      </div>
      ${inputKey ? `
        <div class="sim-prod-input">
          <input type="number" class="sim-num-input" value="${inputVal}" step="0.5"
            data-sim-key="${inputKey}" oninput="simNumInput(this)" onchange="simSliderCommit(this)">
          <span class="sim-prod-unit">${unit}</span>
        </div>` : `<span class="sim-prod-auto">auto</span>`}
    </div>`;
}

// ── SIMULADOR HUB ────────────────────────────────────────────

const SIM_TABS = [
  { id: 'rentabilidade', label: 'Rentabilidade Real' },
  { id: 'quitar',        label: 'Quitar vs Investir' },
  { id: 'amort',         label: 'Amortizar vs Investir (SAC)' },
];

function _simTabBar() {
  // retorna apenas o conteúdo interno (sem o wrapper div) — quem chama decide se usa innerHTML ou outerHTML
  return `<div class="sc-detail-tabs" style="margin-bottom:18px">` +
    SIM_TABS.map(t => {
      const active = S.simulator.tab === t.id;
      const style = active
        ? 'background:var(--accent);color:#fff;border-color:var(--accent)'
        : '';
      return `<button class="sc-tab" style="${style}" onclick="switchSimTab('${t.id}')">${t.label}</button>`;
    }).join('') +
  `</div>`;
}

function switchSimTab(id) {
  S.simulator.tab = id;
  saveState();
  if (activeCharts.sim)   { activeCharts.sim.destroy();   delete activeCharts.sim; }
  if (activeCharts.quitar){ activeCharts.quitar.destroy(); delete activeCharts.quitar; }
  if (activeCharts.amort) { activeCharts.amort.destroy();  delete activeCharts.amort; }
  const bar = document.getElementById('sim-tab-bar');
  if (bar) bar.innerHTML = _simTabBar();
  renderSimTabContent(id);
}

function renderSimTabContent(id) {
  const el = document.getElementById('sim-tab-content');
  if (!el) return;
  if (id === 'rentabilidade') {
    el.innerHTML = _buildRentabilidadeTab();
    setTimeout(_simDrawChart, 0);
  } else if (id === 'amort') {
    el.innerHTML = _buildAmortTab();
    setTimeout(_amortDrawChart, 0);
  } else {
    el.innerHTML = _buildQuitarTab();
    setTimeout(_simDrawQuitarChart, 0);
  }
}

function renderSimulador() {
  const el = document.getElementById('page-simulador');
  el.innerHTML = `
    <div class="page-header">
      <div>
        <div class="page-title">Simuladores</div>
        <div class="page-subtitle">Compare produtos e decisões financeiras</div>
      </div>
    </div>
    <div id="sim-tab-bar">${_simTabBar()}</div>
    <div id="sim-tab-content"></div>
  `;
  renderSimTabContent(S.simulator.tab);
}

function _buildRentabilidadeTab() {
  const sim = S.simulator;
  return `
    <div class="sim-layout">
      <div class="sim-params-panel card">
        <div class="sim-section-title">PARÂMETROS DE MERCADO</div>
        <div class="sim-valor-row">
          <label class="form-label">Valor a investir (R$)</label>
          <input type="number" class="form-input sim-valor-input" value="${sim.valor}" min="1000" step="1000"
            data-sim-key="valor" oninput="simNumInput(this)" onchange="simSliderCommit(this)">
        </div>
        ${_simParamInput('meses', 'Prazo',               sim.meses, 1,   120, 1,    'meses')}
        ${_simParamInput('cdi',   'CDI anual atual',     sim.cdi,   0.5, 30,  0.25, '% a.a.')}
        ${_simParamInput('ipca',  'IPCA anual',          sim.ipca,  0,   20,  0.25, '% a.a.')}
        ${_simParamInput('selic', 'Selic anual',         sim.selic, 0.5, 30,  0.25, '% a.a.')}
        <div class="sim-section-title" style="margin-top:18px">PRODUTOS PARA COMPARAR</div>
        ${_simProductRow('cdb',    'CDB / RDB',         null,        'pctCDB',     sim.pctCDB,     '% CDI')}
        ${_simProductRow('lci',    'LCI / LCA',         'Isento IR', 'pctLCI',     sim.pctLCI,     '% CDI')}
        ${_simProductRow('tselic', 'Tesouro Selic',     null,        'pctTSelic',  sim.pctTSelic,  '% Selic')}
        ${_simProductRow('poupa',  'Poupança',          'Isento IR', null,          null,           '')}
        ${_simProductRow('tipca',  'Tesouro IPCA+',     null,        'spreadIPCA', sim.spreadIPCA, 'spread %')}
        <div class="sim-footer-note">
          IR regressivo: ≤180d 22,5% · ≤360d 20% · ≤720d 17,5% · &gt;720d 15%.<br>
          LCI/LCA e Poupança: isentos de IR.
        </div>
      </div>
      <div class="sim-results-panel">
        <div class="card">
          <div class="flex-between mb-8">
            <div class="card-title" style="margin-bottom:0">Comparativo de Rentabilidade</div>
            <span id="sim-header-badge" class="sim-header-badge">${sim.meses} meses · ${fmt(sim.valor)}</span>
          </div>
          <div class="table-wrap" id="sim-table-wrap">
            ${_buildSimResults()}
          </div>
        </div>
        <div class="card mt-16">
          <div class="chart-wrap chart-med"><canvas id="ch-sim"></canvas></div>
        </div>
      </div>
    </div>`;
}

function _simDrawChart() {
  if (activeCharts.sim) { activeCharts.sim.destroy(); delete activeCharts.sim; }
  const ctx = document.getElementById('ch-sim');
  if (!ctx) return;
  const results = simulate();
  activeCharts.sim = makeBarChart('ch-sim', results.map(r => r.nome), [
    { label:'Retorno bruto',       data: results.map(r => +r.brutoPct.toFixed(2)), backgroundColor:'#4f8ef755', borderColor:'#4f8ef7', borderWidth:1.5 },
    { label:'Retorno líquido',     data: results.map(r => +r.liqPct.toFixed(2)),   backgroundColor:'#22c55e55', borderColor:'#22c55e', borderWidth:1.5 },
    { label:'Retorno real (−IPCA)',data: results.map(r => +r.realPct.toFixed(2)),  backgroundColor:'#fbbf2455', borderColor:'#fbbf24', borderWidth:1.5 },
  ]);
}

function _simRefreshResults() {
  const wrap = document.getElementById('sim-table-wrap');
  if (wrap) wrap.innerHTML = _buildSimResults();
  const badge = document.getElementById('sim-header-badge');
  if (badge) badge.textContent = `${S.simulator.meses} meses · ${fmt(S.simulator.valor)}`;
  _simDrawChart();
}

// Handler dos sliders (legado — mantido para compatibilidade).
function simSliderInput(el) {
  const key = el.dataset.simKey;
  const val = parseFloat(el.value);
  const span = document.getElementById('sv-' + key);
  if (!span) return;
  if (key === 'meses') span.textContent = val + ' meses';
  else span.textContent = val.toFixed(2).replace('.', ',') + '%';
}

function simSliderCommit(el) {
  const key = el.dataset.simKey;
  const val = parseFloat(el.value);
  if (!key || isNaN(val)) return;
  S.simulator[key] = val;
  saveState();
  _simRefreshResults();
}

// Handler dos inputs numéricos (rentabilidade).
function simNumInput(el) {
  const key = el.dataset.simKey;
  const val = parseFloat(el.value);
  if (!key || isNaN(val)) return;
  S.simulator[key] = val;
  saveState();
  _simRefreshResults();
}

// ── QUITAR VS INVESTIR — ENGINE ───────────────────────────────

function simQuitarInvestir() {
  const q   = S.quitar;
  const cdi = S.simulator.cdi;
  const L   = q.valor;
  const S0  = q.saldo;
  const j   = q.taxaFin;
  const N   = q.prazo;
  const pct = q.pctCDI;

  const jm = Math.pow(1 + j / 100, 1 / 12) - 1;
  const gm = Math.pow(1 + (cdi * pct / 100) / 100, 1 / 12) - 1;

  // Parcela Price sobre saldo original e sobre saldo após amortização
  const P     = jm > 0 ? S0 * jm / (1 - Math.pow(1 + jm, -N)) : S0 / N;
  const novoS = Math.max(0, S0 - L);
  const novoP = (novoS > 0 && jm > 0) ? novoS * jm / (1 - Math.pow(1 + jm, -N)) : (novoS > 0 ? novoS / N : 0);
  const freed  = P - novoP;           // parcela liberada (modo reduz-parcela)
  const excess = Math.max(0, L - S0); // excedente se L > S0

  // ── Simulação A: INVESTIR ─────────────────────────────────
  // Paga a parcela P normalmente, investe L no CDB.
  let invA = L, basisA = L, debtA = S0;
  let jurosOrigTotal = 0;
  const pathInvestir = [];
  const pathCDBNet   = [];   // ganho líquido acumulado do CDB (para gráfico simples)

  // ── Simulação B: AMORTIZAR — reduz PRAZO ─────────────────
  // Mantém parcela P, dívida encurta; quando quita, investe P/mês.
  let invB = excess, basisB = excess, debtB = novoS;
  let jurosPrazoTotal = 0, mesQuita = novoS <= 0 ? 0 : N;
  const pathPrazo    = [];
  const pathEconPrazo= [];   // juros economizados acumulados (para gráfico simples)

  // ── Simulação C: AMORTIZAR — reduz PARCELA ───────────────
  // Mantém prazo N, parcela cai para novoP; freed reinvestido mensalmente.
  let invC = excess, basisC = excess, debtC = novoS;
  let jurosParcTotal = 0;
  let invFreed = 0, basisFreed = 0; // acumulador isolado para o freed reinvestido (sem excess)
  const pathParcela   = [];
  const pathEconParc  = [];   // juros economizados + ganho do freed reinvestido (para gráfico)

  for (let m = 0; m < N; m++) {
    const aliqM = irRate((m + 1) * 30);

    // A: Investir
    invA *= (1 + gm);
    jurosOrigTotal += debtA * jm;
    debtA = Math.max(0, debtA * (1 + jm) - P);
    pathInvestir.push(+(invA - Math.max(0, invA - basisA) * aliqM - debtA).toFixed(2));

    // B: Amortizar prazo
    invB *= (1 + gm);
    if (debtB > 0) {
      jurosPrazoTotal += debtB * jm;
      const nd = debtB * (1 + jm) - P;
      if (nd <= 0) {
        invB += -nd; basisB += -nd;   // sobra do pagamento final vai pro CDB
        debtB = 0;
        if (mesQuita === N) mesQuita = m + 1;
      } else {
        debtB = nd;
      }
    } else {
      invB += P; basisB += P;          // parcela inteira reinvestida após quitação
    }
    pathPrazo.push(+(invB - Math.max(0, invB - basisB) * aliqM - debtB).toFixed(2));

    // C: Amortizar parcela
    invC *= (1 + gm);
    invC += freed; basisC += freed;
    invFreed *= (1 + gm); invFreed += freed; basisFreed += freed; // freed isolado
    if (debtC > 0) jurosParcTotal += debtC * jm;
    debtC = Math.max(0, debtC * (1 + jm) - novoP);
    pathParcela.push(+(invC - Math.max(0, invC - basisC) * aliqM - debtC).toFixed(2));

    // Paths simples para o gráfico
    const ganhoMCDB    = invA - basisA;
    const ganhoMFreed  = Math.max(0, invFreed - basisFreed);
    pathCDBNet.push(+(ganhoMCDB - ganhoMCDB * aliqM).toFixed(2));
    pathEconPrazo.push(+(jurosOrigTotal - jurosPrazoTotal).toFixed(2));
    // parcela: juros economizados + rendimento líquido do freed reinvestido
    pathEconParc.push(+((jurosOrigTotal - jurosParcTotal) + (ganhoMFreed - ganhoMFreed * aliqM)).toFixed(2));
  }

  const aliqFinal = irRate(N * 30);

  const brutoCDB   = invA - basisA;
  const irCDB      = brutoCDB * aliqFinal;
  const liquidoCDB = brutoCDB - irCDB;

  const economiaPrazo   = jurosOrigTotal - jurosPrazoTotal;
  const economiaParcela = jurosOrigTotal - jurosParcTotal;

  const ganhoB = invB - basisB;
  const ganhoC = invC - basisC;
  const ganhoPrazo    = ganhoB - ganhoB * aliqFinal;
  const ganhoParcela  = ganhoC - ganhoC * aliqFinal;

  const nwInvestir = pathInvestir[N - 1];
  const nwPrazo    = pathPrazo[N - 1];
  const nwParcela  = pathParcela[N - 1];

  const nwBestAmort = Math.max(nwPrazo, nwParcela);
  const winner = nwInvestir >= nwBestAmort
    ? 'investir'
    : (nwPrazo >= nwParcela ? 'prazo' : 'parcela');
  const diff = winner === 'investir'
    ? nwInvestir - nwBestAmort
    : nwBestAmort - nwInvestir;

  const gBrutoAnual = (Math.pow(1 + gm, 12) - 1) * 100;
  const gNetAnual   = gBrutoAnual * (1 - aliqFinal);

  return {
    P, novoP, freed, mesQuita,
    brutoCDB, irCDB, liquidoCDB,
    jurosOrig: jurosOrigTotal, economiaPrazo, economiaParcela,
    ganhoPrazo, ganhoParcela,
    nwInvestir, nwPrazo, nwParcela,
    pathInvestir, pathPrazo, pathParcela,
    pathCDBNet, pathEconPrazo, pathEconParc,
    jAnual: j, gBrutoAnual, gNetAnual,
    winner, diff,
  };
}

// Handler dos inputs da aba quitar.
function quitarInput(el) {
  const key = el.dataset.qKey;
  const val = parseFloat(el.value);
  if (!key || isNaN(val)) return;
  S.quitar[key] = val;
  saveState();
  _quitarRefresh();
}

function _quitarRefresh() {
  const wrap = document.getElementById('quitar-results');
  if (wrap) wrap.innerHTML = _buildQuitarResults();
  _simDrawQuitarChart();
}

function _buildQuitarResults() {
  const r = simQuitarInvestir();
  const q = S.quitar;
  const aliqPct = (irRate(q.prazo * 30) * 100).toFixed(1);

  const row = (label, val, cls) =>
    `<div class="qi-row"><span class="qi-label">${label}</span><span class="qi-val ${cls||''}">${val}</span></div>`;

  const winLabels = { investir: 'Investir no CDB', prazo: 'Amortizar (reduz prazo)', parcela: 'Amortizar (reduz parcela)' };
  const winIcons  = { investir: '📈', prazo: '🏦', parcela: '🏦' };
  const isAmort   = r.winner !== 'investir';

  const cardInvestir = `
    <div class="sim-result-card ${r.winner === 'investir' ? 'card-winner' : ''}">
      <div class="src-label">📈 Investir no CDB</div>
      ${row('Capital aplicado',  fmt(q.valor))}
      ${row('Juros brutos',      fmt(r.brutoCDB), 'green')}
      ${row('IR (' + aliqPct + '%)', '−' + fmt(r.irCDB), 'red')}
      ${row('Rendimento líquido', fmt(r.liquidoCDB))}
      <div class="qi-divider"></div>
      ${row('Patrimônio líquido', fmt(r.nwInvestir), r.winner === 'investir' ? 'accent bold' : 'bold')}
    </div>`;

  const cardPrazo = `
    <div class="sim-result-card ${r.winner === 'prazo' ? 'card-winner' : ''}">
      <div class="src-label">🏦 Amortizar — Reduz Prazo</div>
      ${row('Abatido',             fmt(Math.min(q.valor, q.saldo)))}
      ${row('Quita em',            r.mesQuita === 0 ? 'imediatamente' : 'mês ' + r.mesQuita + ' de ' + q.prazo)}
      ${row('Juros economizados',  fmt(r.economiaPrazo), 'green')}
      ${row('Rendim. reinvestido', fmt(r.ganhoPrazo), 'green')}
      <div class="qi-divider"></div>
      ${row('Patrimônio líquido',  fmt(r.nwPrazo), r.winner === 'prazo' ? 'accent bold' : 'bold')}
    </div>`;

  const cardParcela = `
    <div class="sim-result-card ${r.winner === 'parcela' ? 'card-winner' : ''}">
      <div class="src-label">🏦 Amortizar — Reduz Parcela</div>
      ${row('Abatido',             fmt(Math.min(q.valor, q.saldo)))}
      ${row('Parcela', fmt(r.P) + ' → ' + fmt(r.novoP) + '/mês')}
      ${row('Juros economizados',  fmt(r.economiaParcela), 'green')}
      ${row('Rendim. reinvestido', fmt(r.ganhoParcela), 'green')}
      <div class="qi-divider"></div>
      ${row('Patrimônio líquido',  fmt(r.nwParcela), r.winner === 'parcela' ? 'accent bold' : 'bold')}
    </div>`;

  return `
    <div class="sim-verdict ${isAmort ? 'verdict-quitar' : 'verdict-investir'}">
      <div class="verdict-icon">${winIcons[r.winner]}</div>
      <div class="verdict-body">
        <div class="verdict-title">${winLabels[r.winner]} é melhor por <strong>${fmt(r.diff)}</strong></div>
        <div class="verdict-detail">Taxa ${r.jAnual.toFixed(1)}% a.a. vs CDB líquido ~${r.gNetAnual.toFixed(1)}% a.a. · ${q.prazo} meses · mesmo orçamento (${fmt(r.P)}/mês)</div>
      </div>
    </div>
    <div class="sim-result-cards">${cardInvestir}${cardPrazo}${cardParcela}</div>
    <div class="sim-footer-note" style="margin-top:8px">Todos os cenários partem do mesmo valor disponível (${fmt(q.valor)}) e mantêm o mesmo orçamento mensal. IR regressivo sobre ganho do CDB.</div>`;
}

function _buildQuitarTab() {
  const q = S.quitar;
  return `
    <div class="sim-layout">
      <div class="sim-params-panel card">
        <div class="sim-section-title">FINANCIAMENTO</div>
        ${_simParamInput2('saldo',   'Saldo devedor',         q.saldo,   1000, 5000000, 1000, 'R$')}
        ${_simParamInput2('taxaFin', 'Taxa anual',            q.taxaFin, 0.1,  40,      0.1,  '% a.a.')}
        ${_simParamInput2('prazo',   'Prazo restante',        q.prazo,   1,    360,     1,    'meses')}
        <div class="sim-section-title" style="margin-top:18px">AMORTIZAÇÃO / INVESTIMENTO</div>
        ${_simParamInput2('valor',   'Valor disponível',      q.valor,   1000, 5000000, 1000, 'R$')}
        ${_simParamInput2('pctCDI',  'CDB % do CDI',          q.pctCDI,  50,   200,     1,    '% CDI')}
        <div class="sim-param-row">
          <span class="sim-param-label">CDI anual</span>
          <div class="sim-param-field">
            <input type="number" class="sim-num-input" value="${S.simulator.cdi}" min="0.5" max="30" step="0.25"
              data-sim-key="cdi" oninput="simNumInput(this)">
            <span class="sim-prod-unit">% a.a.</span>
          </div>
        </div>
        <div class="sim-footer-note">
          Amortização reduz a parcela, mantém o prazo.<br>
          IR regressivo sobre o ganho do CDB.
        </div>
      </div>
      <div class="sim-results-panel">
        <div id="quitar-results">
          ${_buildQuitarResults()}
        </div>
        <div class="card mt-16">
          <div class="card-title">Ganho líquido do CDB vs juros economizados (acumulado)</div>
          <div class="chart-wrap chart-med"><canvas id="ch-quitar"></canvas></div>
        </div>
      </div>
    </div>`;
}

function _simParamInput2(key, label, val, min, max, step, unit) {
  return `
    <div class="sim-param-row">
      <span class="sim-param-label">${label}</span>
      <div class="sim-param-field">
        <input type="number" class="sim-num-input" value="${val}" min="${min}" max="${max}" step="${step}"
          data-q-key="${key}" oninput="quitarInput(this)">
        <span class="sim-prod-unit">${unit}</span>
      </div>
    </div>`;
}

function _simDrawQuitarChart() {
  if (activeCharts.quitar) { activeCharts.quitar.destroy(); delete activeCharts.quitar; }
  const ctx = document.getElementById('ch-quitar');
  if (!ctx) return;
  const r = simQuitarInvestir();
  const N = S.quitar.prazo;
  const step = Math.max(1, Math.floor(N / 24));
  const labels = r.pathCDBNet.map((_, i) => (i + 1) % step === 0 || i === N - 1 ? `M${i + 1}` : '');
  const datasets = [
    { label: 'CDB — ganho líquido',         data: r.pathCDBNet,   borderColor: '#22c55e', backgroundColor: '#22c55e15', tension: 0.3, pointRadius: 0, borderWidth: 2 },
    { label: 'Amortizar prazo — jrs. econ.', data: r.pathEconPrazo, borderColor: '#4f8ef7', backgroundColor: '#4f8ef715', tension: 0.3, pointRadius: 0, borderWidth: 2 },
  ];
  // Só mostra a linha de parcela se for diferente da de prazo (evita linhas sobrepostas)
  const samePath = r.pathEconPrazo.every((v, i) => Math.abs(v - r.pathEconParc[i]) < 1);
  if (!samePath) {
    datasets.push({ label: 'Amortizar parcela — jrs. econ.', data: r.pathEconParc, borderColor: '#a78bfa', backgroundColor: '#a78bfa15', tension: 0.3, pointRadius: 0, borderWidth: 2 });
  }
  activeCharts.quitar = makeLineChart('ch-quitar', { labels, datasets });
}

// ── AMORTIZAR VS INVESTIR (SAC) — ENGINE ─────────────────────

function simAmort() {
  const a = S.amort;
  const N  = a.prazoMeses;   // horizonte = prazo do investimento
  const jm = a.taxaMes / 100;

  // Taxa mensal do investimento
  let gm;
  if (a.tipoInv === 'cdi') {
    gm = Math.pow(1 + (a.cdi * a.pctCDI / 100) / 100, 1 / 12) - 1;
  } else if (a.tipoInv === 'selic') {
    gm = Math.pow(1 + a.selic / 100, 1 / 12) - 1;
  } else if (a.tipoInv === 'pre') {
    gm = Math.pow(1 + a.taxaInv / 100, 1 / 12) - 1;
  } else {
    // IPCA+: taxa real composta com IPCA mensal
    const ipcaMes = Math.pow(1 + a.ipca / 100, 1 / 12) - 1;
    const realMes = Math.pow(1 + a.spread / 100, 1 / 12) - 1;
    gm = (1 + ipcaMes) * (1 + realMes) - 1;
  }

  // Parcela SAC original: amortização fixa + juros sobre saldo
  const amortFixa = a.saldo / a.parcelas;

  // ── CENÁRIO A: Investir ───────────────────────────────────
  // Aplica o aporte X, não amortiza nada extra.
  // Resultado = rendimento líquido (após IR) ao fim de N meses.
  let invA = a.aporte, basisA = a.aporte;
  const pathInvestir = [];

  // ── CENÁRIO B: Amortizar Prazo ────────────────────────────
  // Abate o aporte no saldo devedor (SAC), recalcula quantas parcelas
  // foram eliminadas. Mede apenas os juros economizados no período N.
  // Sem reinvestimento de parcelas liberadas.
  let saldoB = Math.max(0, a.saldo - a.aporte);
  let jurosOrigAcum = 0, jurosBPrazoAcum = 0;
  let parcelasElim = 0;
  {
    // Conta parcelas eliminadas: parcelas do SAC original que sobram
    // além do saldo pós-amortização (saldo cai mais rápido pois amortização fixa é a mesma mas sobre saldo menor)
    // Nova amortização fixa: saldoB / parcelas restantes efetivas
    // Como SAC: amort fixa = saldo/n remanescente. Após aporte, o saldo cai mais depressa.
    // Para simplificar: comparamos o número de parcelas até o saldo zerar.
    let sSimOrig = a.saldo;
    let sSimB    = saldoB;
    let nOrig = 0, nB = 0;
    const amortFixaOrig = a.saldo / a.parcelas;
    for (let m = 0; m < a.parcelas * 2; m++) {
      if (sSimOrig > 0) { sSimOrig = Math.max(0, sSimOrig - amortFixaOrig); nOrig = m + 1; }
      if (sSimB > 0)    { sSimB    = Math.max(0, sSimB    - amortFixaOrig); nB    = m + 1; }
      if (sSimOrig <= 0 && sSimB <= 0) break;
    }
    parcelasElim = Math.max(0, nOrig - nB);
  }
  const pathPrazo = [];

  // ── CENÁRIO C: Amortizar Parcela ──────────────────────────
  // Abate o aporte no saldo, mantém o prazo (a.parcelas).
  // Nova amortização fixa = saldoC / a.parcelas (mesma quantidade de parcelas).
  const saldoC     = Math.max(0, a.saldo - a.aporte);
  const amortFixaC = saldoC > 0 ? saldoC / a.parcelas : 0;
  let   sSimC      = saldoC;
  // Parcela SAC mês 1: amort fixa + juros sobre saldo inicial.
  const parcelaOrigM1 = amortFixa  + a.saldo * jm;
  const parcelaNovM1  = amortFixaC + saldoC  * jm;

  // Reinvestimento mensal do delta liberado (cada aporte tem prazo diferente → IR individual)
  const aportesMensais = [];
  let invC = 0, basisC = 0;
  let jurosCParcAcum = 0; // juros pagos no cenário C (para calcular economia)

  const pathParcela = [];

  // Simula os N meses (sOrig compartilhado entre B e C — mesma tabela original)
  let sOrig   = a.saldo;
  let sBprazo = saldoB;
  for (let m = 0; m < N; m++) {
    // A: aporte rende — chart mostra só o lucro líquido (sem incluir o capital X)
    invA *= (1 + gm);
    const aliqM = irRate((m + 1) * 30);
    pathInvestir.push(+((invA - basisA) * (1 - aliqM)).toFixed(2));

    // Juros originais acumulados (SAC) — compartilhado entre B e C
    const jurosOrigMes = sOrig > 0 ? sOrig * jm : 0;
    if (sOrig > 0) {
      jurosOrigAcum += jurosOrigMes;
      sOrig = Math.max(0, sOrig - amortFixa);
    }

    // B: juros do cenário pós-amortização prazo
    if (sBprazo > 0) {
      jurosBPrazoAcum += sBprazo * jm;
      sBprazo = Math.max(0, sBprazo - amortFixa);
    }
    pathPrazo.push(+(jurosOrigAcum - jurosBPrazoAcum).toFixed(2));

    // C: acumula juros pagos no novo schedule
    const jurosNovoMes = sSimC > 0 ? sSimC * jm : 0;
    if (sSimC > 0) {
      jurosCParcAcum += jurosNovoMes;
      sSimC = Math.max(0, sSimC - amortFixaC);
    }

    // Delta liberado = diferença entre parcelas SAC deste mês → reinvestido
    const deltaReal = (amortFixa + jurosOrigMes) - (amortFixaC + jurosNovoMes);
    if (deltaReal > 0) {
      aportesMensais.push({ valor: deltaReal, mes: m });
      invC   += deltaReal;
      basisC += deltaReal;
    }
    invC *= (1 + gm);

    // IR individual por prazo de cada aporte no portfólio C
    let irTotalC = 0;
    aportesMensais.forEach(ap => {
      const meses = m - ap.mes + 1;
      irTotalC += ap.valor * (Math.pow(1 + gm, meses) - 1) * irRate(meses * 30);
    });

    // Ganho C = juros economizados (saldo menor) + rendimento líquido do reinvestimento
    const econParcAcumM = jurosOrigAcum - jurosCParcAcum;
    const rendInvCM     = (invC - basisC) - irTotalC;
    pathParcela.push(+(econParcAcumM + rendInvCM).toFixed(2));
  }

  // Resultados finais
  const aliqFinal    = irRate(N * 30);
  const rendLiqA     = (invA - basisA) * (1 - aliqFinal);
  const econPrazoFinal   = pathPrazo[N - 1] || 0;
  const econParcelaFinal = jurosOrigAcum - jurosCParcAcum;

  let irTotalCFinal = 0;
  aportesMensais.forEach(ap => {
    const meses = N - ap.mes;
    irTotalCFinal += ap.valor * (Math.pow(1 + gm, meses) - 1) * irRate(meses * 30);
  });
  const rendInvC = (invC - basisC) - irTotalCFinal;
  const rendLiqC = econParcelaFinal + rendInvC; // ganho total do cenário C

  // Saldo devedor ao fim do período N (cenário original e amortizados)
  let saldoFimOrig = a.saldo, saldoFimB = saldoB, saldoFimC2 = saldoC;
  const afB = amortFixa, afC2 = amortFixaC;
  for (let m2 = 0; m2 < N; m2++) {
    saldoFimOrig = Math.max(0, saldoFimOrig - amortFixa);
    saldoFimB    = Math.max(0, saldoFimB    - afB);
    saldoFimC2   = Math.max(0, saldoFimC2   - afC2);
  }

  // Veredito: compara rendimento líquido de cada cenário
  const scores = { investir: rendLiqA, prazo: econPrazoFinal, parcela: rendLiqC };
  const winner = Object.entries(scores).sort((x, y) => y[1] - x[1])[0][0];
  const sorted = Object.values(scores).sort((x, y) => y - x);
  const diff   = sorted[0] - sorted[1];

  return {
    rendLiqA, econPrazoFinal, econParcelaFinal, rendInvC, rendLiqC,
    parcelasElim,
    parcelaOrigM1, parcelaNovM1,
    saldoFimOrig, saldoFimB, saldoFimC2,
    pathInvestir, pathPrazo, pathParcela,
    winner, diff,
    gm, N,
  };
}

// Handler dos inputs da aba amort.
function amortInput(el) {
  const key = el.dataset.aKey;
  const val = el.type === 'select-one' ? el.value : parseFloat(el.value);
  if (!key || (el.type !== 'select-one' && isNaN(val))) return;
  S.amort[key] = val;
  saveState();
  if (key === 'tipoInv') {
    const show = (id, visible) => { const d = document.getElementById(id); if (d) d.style.display = visible ? '' : 'none'; };
    show('amort-inv-cdi',    val === 'cdi');
    show('amort-inv-selic',  val === 'selic');
    show('amort-inv-pre',    val === 'pre');
    show('amort-inv-spread', val === 'ipca');
    show('amort-inv-ipca',   val === 'ipca');
  }
  _amortRefresh();
}

function _amortRefresh() {
  const wrap = document.getElementById('amort-results');
  if (wrap) wrap.innerHTML = _buildAmortResults();
  _amortDrawChart();
}

function _amortParamInput(key, label, val, min, max, step, unit) {
  return `
    <div class="sim-param-row">
      <span class="sim-param-label">${label}</span>
      <div class="sim-param-field">
        <input type="number" class="sim-num-input" value="${val}" min="${min}" max="${max}" step="${step}"
          data-a-key="${key}" oninput="amortInput(this)">
        <span class="sim-prod-unit">${unit}</span>
      </div>
    </div>`;
}

function _buildAmortTab() {
  const a = S.amort;
  const tipoOpts = ['cdi','selic','pre','ipca'].map(t => {
    const labels = { cdi: 'CDI (%)', selic: 'Selic', pre: 'Pré-fixado', ipca: 'IPCA+' };
    return `<option value="${t}" ${a.tipoInv === t ? 'selected' : ''}>${labels[t]}</option>`;
  }).join('');

  const showCDI      = a.tipoInv === 'cdi';
  const showInvRate  = a.tipoInv === 'pre';
  const showSpread   = a.tipoInv === 'ipca';
  const showIpca     = a.tipoInv === 'ipca';
  const showSelic    = a.tipoInv === 'selic';

  return `
    <div class="sim-layout">
      <div class="sim-params-panel card">
        <div class="sim-section-title">FINANCIAMENTO (SAC)</div>
        ${_amortParamInput('saldo',    'Saldo devedor',     a.saldo,    1000, 5000000, 1000, 'R$')}
        ${_amortParamInput('parcelas', 'Parcelas restantes', a.parcelas, 1,   600,     1,    'meses')}
        ${_amortParamInput('taxaMes',  'Taxa mensal (CET)',  a.taxaMes,  0.1,  5,      0.01, '% a.m.')}
        ${_amortParamInput('aporte',   'Valor do aporte',   a.aporte,   1000, 5000000, 1000, 'R$')}

        <div class="sim-section-title" style="margin-top:18px">INVESTIMENTO</div>
        <div class="sim-param-row">
          <span class="sim-param-label">Tipo</span>
          <div class="sim-param-field">
            <select class="sim-num-input" data-a-key="tipoInv" onchange="amortInput(this)" style="padding:4px 8px;cursor:pointer">
              ${tipoOpts}
            </select>
          </div>
        </div>
        <div id="amort-inv-cdi" ${!showCDI ? 'style="display:none"' : ''}>
          ${_amortParamInput('pctCDI', '% do CDI', a.pctCDI, 50, 200, 1, '% CDI')}
          ${_amortParamInput('cdi', 'CDI anual', a.cdi, 0.5, 30, 0.25, '% a.a.')}
        </div>
        <div id="amort-inv-selic" ${!showSelic ? 'style="display:none"' : ''}>
          ${_amortParamInput('selic', 'Selic', a.selic, 0.5, 30, 0.25, '% a.a.')}
        </div>
        <div id="amort-inv-pre" ${!showInvRate ? 'style="display:none"' : ''}>
          ${_amortParamInput('taxaInv', 'Taxa pré', a.taxaInv, 0.5, 30, 0.25, '% a.a.')}
        </div>
        <div id="amort-inv-spread" ${!showSpread ? 'style="display:none"' : ''}>
          ${_amortParamInput('spread', 'Spread (IPCA+)', a.spread, 0, 20, 0.25, '% a.a.')}
        </div>
        <div id="amort-inv-ipca" ${!showIpca ? 'style="display:none"' : ''}>
          ${_amortParamInput('ipca', 'IPCA projetado', a.ipca, 0, 20, 0.25, '% a.a.')}
        </div>

        <div class="sim-section-title" style="margin-top:18px">HORIZONTE</div>
        ${_amortParamInput('prazoMeses', 'Prazo da comparação', a.prazoMeses, 1, 360, 1, 'meses')}

        <div class="sim-footer-note" style="margin-top:12px">
          Sistema SAC · IR regressivo sobre rendimentos.<br>
          Cenário C reinveste o delta mensal liberado pela queda na parcela.
        </div>
      </div>
      <div class="sim-results-panel">
        <div id="amort-results">
          ${_buildAmortResults()}
        </div>
        <div class="card mt-16">
          <div class="card-title">Evolução mês a mês — ganho/economia acumulada (R$)</div>
          <div class="chart-wrap chart-med"><canvas id="ch-amort"></canvas></div>
        </div>
      </div>
    </div>`;
}

function _buildAmortResults() {
  const r = simAmort();
  const a = S.amort;

  const row = (label, val, cls) =>
    `<div class="qi-row"><span class="qi-label">${label}</span><span class="qi-val ${cls||''}">${val}</span></div>`;

  const winLabels = { investir: 'Investir', prazo: 'Amortizar (prazo)', parcela: 'Amortizar (parcela)' };
  const winIcons  = { investir: '📈', prazo: '🏦', parcela: '🏦' };
  const isAmort   = r.winner !== 'investir';

  const tipoLabel = { cdi: `${a.pctCDI}% CDI (CDI ${a.cdi}% a.a.)`, selic: `Selic ${a.selic}% a.a.`, pre: `Pré ${a.taxaInv}% a.a.`, ipca: `IPCA+${a.spread}% (IPCA ${a.ipca}%)` }[a.tipoInv];

  const cardInvestir = `
    <div class="sim-result-card ${r.winner === 'investir' ? 'card-winner' : ''}">
      <div class="src-label">📈 Investir</div>
      ${row('Aporte aplicado',      fmt(a.aporte))}
      ${row('Rendimento líquido',   fmt(r.rendLiqA), 'green')}
      ${row('Saldo devedor (fim)',   fmt(r.saldoFimOrig), 'red')}
      <div class="qi-divider"></div>
      ${row('Ganho líquido',        fmt(r.rendLiqA), r.winner === 'investir' ? 'accent bold' : 'bold')}
    </div>`;

  const cardPrazo = `
    <div class="sim-result-card ${r.winner === 'prazo' ? 'card-winner' : ''}">
      <div class="src-label">🏦 Amortizar — Reduz Prazo</div>
      ${row('Aporte abatido',       fmt(Math.min(a.aporte, a.saldo)))}
      ${row('Parcelas eliminadas',  r.parcelasElim > 0 ? r.parcelasElim + ' parcelas' : '—')}
      ${row('Juros economizados',   fmt(r.econPrazoFinal), 'green')}
      ${row('Saldo devedor (fim)',   fmt(r.saldoFimB), 'red')}
      <div class="qi-divider"></div>
      ${row('Ganho líquido',        fmt(r.econPrazoFinal), r.winner === 'prazo' ? 'accent bold' : 'bold')}
    </div>`;

  const cardParcela = `
    <div class="sim-result-card ${r.winner === 'parcela' ? 'card-winner' : ''}">
      <div class="src-label">🏦 Amortizar — Reduz Parcela</div>
      ${row('Aporte abatido',       fmt(Math.min(a.aporte, a.saldo)))}
      ${row('Nova parcela (mês 1)', fmt(r.parcelaNovM1) + '/mês')}
      ${row('Juros economizados',   fmt(r.econParcelaFinal), 'green')}
      ${row('Rendim. reinvestido',  fmt(r.rendInvC), 'green')}
      ${row('Saldo devedor (fim)',   fmt(r.saldoFimC2), 'red')}
      <div class="qi-divider"></div>
      ${row('Ganho líquido',        fmt(r.rendLiqC), r.winner === 'parcela' ? 'accent bold' : 'bold')}
    </div>`;

  return `
    <div class="sim-verdict ${isAmort ? 'verdict-quitar' : 'verdict-investir'}">
      <div class="verdict-icon">${winIcons[r.winner]}</div>
      <div class="verdict-body">
        <div class="verdict-title">${winLabels[r.winner]} é melhor por <strong>${fmt(r.diff)}</strong></div>
        <div class="verdict-detail">${tipoLabel} · horizonte ${a.prazoMeses} meses · CET ${a.taxaMes}% a.m.</div>
      </div>
    </div>
    <div class="sim-result-cards">${cardInvestir}${cardPrazo}${cardParcela}</div>
    <div class="sim-footer-note" style="margin-top:8px">
      Cenário B: juros economizados no período. Cenário C: inclui reinvestimento do delta mensal da parcela (IR por prazo de cada aporte).
    </div>`;
}

function _amortDrawChart() {
  if (activeCharts.amort) { activeCharts.amort.destroy(); delete activeCharts.amort; }
  const ctx = document.getElementById('ch-amort');
  if (!ctx) return;
  const r = simAmort();
  const N = r.N;
  const step = Math.max(1, Math.floor(N / 24));
  const labels = r.pathInvestir.map((_, i) => (i + 1) % step === 0 || i === N - 1 ? `M${i + 1}` : '');
  const datasets = [
    { label: 'Investir — rendim. líquido',        data: r.pathInvestir, borderColor: '#22c55e', backgroundColor: '#22c55e15', tension: 0.3, pointRadius: 0, borderWidth: 2 },
    { label: 'Amortizar prazo — jrs. econ.',       data: r.pathPrazo,    borderColor: '#4f8ef7', backgroundColor: '#4f8ef715', tension: 0.3, pointRadius: 0, borderWidth: 2 },
    { label: 'Amortizar parcela — rendim. líq.',   data: r.pathParcela,  borderColor: '#a78bfa', backgroundColor: '#a78bfa15', tension: 0.3, pointRadius: 0, borderWidth: 2 },
  ];
  activeCharts.amort = makeLineChart('ch-amort', { labels, datasets });
}

// Card "Rentabilidade Mensal": matriz mês×ano (heatmap) + resumo de meses +/−.
function _buildReturnsCard() {
  const { years, grid, maxAbs } = returnsMatrix();
  const sum = monthsSummary();
  const MESES = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

  const sumBlock = (label, o) => {
    const tot = o.pos + o.neg;
    const pPct = tot ? (o.pos / tot * 100) : 0;
    const nPct = tot ? (o.neg / tot * 100) : 0;
    return `
      <div class="rm-sum-block">
        <div class="rm-sum-label">${label}</div>
        <div class="rm-sum-row"><span class="rm-dot green"></span>Positivos<b>${o.pos}</b><span class="rm-sum-pct">${fmtPct(pPct)}</span></div>
        <div class="rm-sum-row"><span class="rm-dot red"></span>Negativos<b>${o.neg}</b><span class="rm-sum-pct">${fmtPct(nPct)}</span></div>
      </div>`;
  };

  const head = `<tr><th></th>${years.map(y => `<th>${y}</th>`).join('')}</tr>`;
  const rows = MESES.map((mn, mi) => {
    const cells = years.map(y => {
      const r = grid[y]?.[mi];
      if (r === undefined) return `<td></td>`;
      return `<td style="background-color:${heatColor(r, maxAbs)}">${fmtPct(r * 100)}</td>`;
    }).join('');
    return `<tr><th>${mn}</th>${cells}</tr>`;
  }).join('');

  return `
    <div class="card mt-16">
      <div class="card-title">Rentabilidade Mensal</div>
      <div class="rm-summary grid-3">
        ${sumBlock('Rentabilidade', sum.rent)}
        ${sumBlock('Patrimônio', sum.pat)}
        ${sumBlock('Aporte', sum.apo)}
      </div>
      <div class="table-wrap"><table class="returns-matrix"><thead>${head}</thead><tbody>${rows}</tbody></table></div>
      <div class="rm-legend"><span>− pior mês</span><div class="rm-legend-bar"></div><span>melhor mês +</span></div>
    </div>`;
}

function renderDashboard() {
  const el  = document.getElementById('page-dashboard');
  const w   = totalWealth();
  const fin = fiNumber();
  const pct = Math.min(100, (w / fin) * 100);
  const last = HISTORICAL[HISTORICAL.length-1];
  const prev = HISTORICAL[HISTORICAL.length-2];

  const basePath   = buildScenarioPaths(S.assumptions.projectionYears * 12).find(s => s.id === 'base');
  const fiResult   = basePath ? findFIDate(basePath.path) : null;

  const last12h = HISTORICAL.slice(-12).filter(h => h.rec > 0);
  const avgSavingsRate = last12h.length > 0
    ? last12h.reduce((s, h) => s + savingsRate(h), 0) / last12h.length
    : 0;

  const fiDate = fiResult
    ? (() => { const d = fiResult.date; return d.toLocaleDateString('pt-BR',{month:'short',year:'numeric'}); })()
    : '> horizonte';
  const fiYears = fiResult ? Math.floor(fiResult.months/12) : '—';
  const age = currentAge();

  // last 12 months chart data
  const last12 = HISTORICAL.slice(-12);

  el.innerHTML = `
    <div class="page-header">
      <div>
        <div class="page-title">Dashboard</div>
        <div class="page-subtitle">Visão geral do seu planejamento financeiro</div>
      </div>
    </div>

    <div class="kpi-grid">
      <div class="kpi">
        <div class="kpi-label">Patrimônio Total</div>
        <div class="kpi-value lg">${fmtK(last.pat)}</div>
        <div class="kpi-sub"><span class="${(last.pat - prev.pat) >= 0 ? 'badge-up' : 'badge-down'}">${(last.pat - prev.pat) >= 0 ? '↑ +' : '↓ -'}${fmtK(Math.abs(last.pat - prev.pat))}</span> vs mês anterior</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Patrimônio Líquido</div>
        <div class="kpi-value lg" style="color:var(--accent)">${fmtK(last.pl)}</div>
        <div class="kpi-sub"><span class="${(last.pl - prev.pl) >= 0 ? 'badge-up' : 'badge-down'}">${(last.pl - prev.pl) >= 0 ? '↑ +' : '↓ -'}${fmtK(Math.abs(last.pl - prev.pl))}</span> vs mês anterior</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Taxa de Poupança</div>
        <div class="kpi-value" style="color:${avgSavingsRate>=50?'var(--green)':avgSavingsRate>=30?'var(--yellow)':'var(--red)'}">${fmtPct(avgSavingsRate)}</div>
        <div class="kpi-sub">Média dos últimos 12 meses</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Independência Financeira</div>
        <div class="kpi-value" style="color:var(--yellow)">${fiDate}</div>
        <div class="kpi-sub">em ~${fiYears} anos · idade ${typeof fiYears==='number'?age+fiYears:'—'}</div>
      </div>
    </div>

    <div class="card mb-16">
      <div class="flex-between mb-8">
        <div class="card-title" style="margin-bottom:0">Progresso à Independência Financeira</div>
        <span style="font-size:13px;font-weight:700;color:var(--accent)">${fmtPct(pct)} · ${fmt(w)} / ${fmt(fin)}</span>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-bar" style="width:${pct}%;background:${pct>=100?'var(--green)':pct>=50?'var(--accent)':'var(--yellow)'}"></div>
      </div>
      <div class="flex-between mt-8 text-sm text-muted">
        <span>${w >= fin ? '✓ meta atingida' : 'Faltam ' + fmt(fin - w)}</span>
        <span>Meta FI: ${fmt(fin)} (${fmt(S.fi.targetMonthlyIncome)}/mês à ${fmtPct(S.fi.withdrawalRate)} a.a.)</span>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title">Patrimônio — Últimos 12 Meses</div>
        <div class="chart-wrap chart-med"><canvas id="ch-dash-pat"></canvas></div>
      </div>
      <div class="card">
        <div class="card-title">Alocação do Portfólio</div>
        <div class="chart-wrap chart-med"><canvas id="ch-dash-pie"></canvas></div>
      </div>
    </div>

    <div class="grid-2 mt-16">
      <div class="card">
        <div class="card-title">Receita vs Gastos — Últimos 12 Meses</div>
        <div class="chart-wrap chart-med"><canvas id="ch-dash-flow"></canvas></div>
      </div>
      <div class="card">
        <div class="card-title">Projeção Base — Próximos 10 Anos <span style="font-weight:400;font-size:11px;color:var(--text-dim)">· valores de hoje</span></div>
        <div style="font-size:11px;color:var(--text-dim);margin:-4px 0 8px">fontes:
          <a class="src-link" onclick="navigate('history');return false" href="#" title="Patrimônio inicial = último valor do Histórico">patrimônio inicial</a> ·
          <a class="src-link" onclick="navigate('portfolio');return false" href="#" title="Retorno ponderado dos ativos">retorno</a> ·
          <a class="src-link" onclick="navigate('cashflow');return false" href="#" title="Receitas e gastos (e seus crescimentos)">receitas/gastos</a> ·
          <a class="src-link" onclick="navigate('scenarios');return false" href="#" title="Premissas e cenário Base (anos de projeção, deltas)">premissas</a>
        </div>
        <div class="chart-wrap chart-med"><canvas id="ch-dash-proj"></canvas></div>
      </div>
    </div>

    ${_buildReturnsCard()}
  `;

  requestAnimationFrame(() => {
    // Patrimônio últimos 12m
    activeCharts.dashPat = makeLineChart('ch-dash-pat', {
      labels: last12.map(h => monthLabel(h.d)),
      datasets: [{ label:'Patrimônio', data: last12.map(h => h.pl), borderColor:'#4f8ef7', backgroundColor:'#4f8ef720', fill:true, tension:.4, pointRadius:3 }]
    });
    // Alocação
    const hasPort = S.portfolio.length > 0;
    const portTotal = hasPort ? S.portfolio.reduce((s,a)=>s+a.value,0) : 1;
    activeCharts.dashPie = makePieChart('ch-dash-pie',
      hasPort ? S.portfolio.map(a=>`${a.name}  ${fmtK(a.value)}  ${((a.value/portTotal)*100).toFixed(1)}%`) : ['Sem dados'],
      hasPort ? S.portfolio.map(a=>a.value) : [1],
      hasPort ? S.portfolio.map(a=>a.color) : ['#333']
    );
    // Receita vs gastos
    activeCharts.dashFlow = makeBarChart('ch-dash-flow',
      last12.map(h => monthLabel(h.d)),
      [
        { label:'Receita', data: last12.map(h=>h.rec), backgroundColor:'#22c55e55', borderColor:'#22c55e', borderWidth:1.5 },
        { label:'Gastos',  data: last12.map(h=>h.gas), backgroundColor:'#f8717155', borderColor:'#f87171', borderWidth:1.5 },
      ]
    );
    // Projeção base 10 anos
    if (basePath) {
      const projPts = basePath.path.filter((_,i) => i % 6 === 0);
      const projStart = projectionStart().date;
      const projLabels = projPts.map(p => {
        const d = new Date(projStart.getFullYear(), projStart.getMonth() + p.m, 1);
        return d.getMonth() === 0 ? String(d.getFullYear()) : '';
      });
      const projVals = projPts.map(p => p.w);
      const projMin  = Math.floor(Math.min(...projVals) * 0.95 / 100000) * 100000;
      const ctx2 = document.getElementById('ch-dash-proj');
      if (ctx2) {
        activeCharts.dashProj = new Chart(ctx2, {
          type:'line',
          data:{ labels: projLabels, datasets:[{ label:'Projeção', data: projVals, borderColor:'#4f8ef7', borderDash:[5,4], backgroundColor:'#4f8ef710', fill:true, tension:.4, pointRadius:0 }] },
          options:{
            responsive:true, maintainAspectRatio:false,
            plugins:{ legend:{ labels:{ color:'#8ca3c1', font:{size:11} } }, tooltip:{ callbacks:{ label:c=>` ${fmtK(c.parsed.y)}` } } },
            scales:{
              x:{ grid:{ color:'#1e2d4230' }, ticks:{ color:'#8ca3c1', font:{size:10}, maxTicksLimit:12 } },
              y:{ min: projMin, grid:{ color:'#1e2d4250' }, ticks:{ color:'#8ca3c1', font:{size:10}, callback:v=>fmtK(v) } }
            }
          }
        });
      }
    }
  });
}

// ── 8. LINHA DA VIDA ──────────────────────────────────────
function renderTimeline() {
  const el = document.getElementById('page-timeline');

  // Preserva estado dos controles ANTES de resetar o innerHTML —
  // sem isso os toggles voltam ao default a cada re-render.
  const st = renderTimeline._st = renderTimeline._st
    || { horizon: '20', metric: 'pl', sc: true, fi: true, ev: true, real: true };
  if (document.getElementById('tl-horizon')) {
    st.horizon = document.getElementById('tl-horizon').value;
    st.metric  = document.getElementById('tl-metric').value;
    st.sc   = document.getElementById('tl-scenarios').checked;
    st.fi   = document.getElementById('tl-fi-line').checked;
    st.ev   = document.getElementById('tl-events').checked;
    st.real = document.getElementById('tl-real').checked;
  }

  el.innerHTML = `
    <div class="page-header">
      <div>
        <div class="page-title">Linha da Vida</div>
        <div class="page-subtitle">Trajetória histórica + projeção futura do patrimônio</div>
      </div>
    </div>
    <div class="card mb-16">
      <div class="timeline-controls">
        <div class="ctrl-group">
          <span class="ctrl-label">Horizonte:</span>
          <select class="ctrl-select" id="tl-horizon" onchange="renderTimeline()">
            ${['10','20','30','40'].map(h => `<option value="${h}" ${st.horizon === h ? 'selected' : ''}>${h} anos</option>`).join('')}
          </select>
        </div>
        <div class="ctrl-group">
          <span class="ctrl-label">Exibir:</span>
          <select class="ctrl-select" id="tl-metric" onchange="renderTimeline()">
            <option value="pl" ${st.metric === 'pl' ? 'selected' : ''}>Patrimônio Líquido</option>
            <option value="pat" ${st.metric === 'pat' ? 'selected' : ''}>Patrimônio Total</option>
          </select>
        </div>
        <div class="ctrl-group">
          <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-muted);cursor:pointer">
            <input type="checkbox" id="tl-scenarios" onchange="renderTimeline()" ${st.sc ? 'checked' : ''}>
            Mostrar cenários
          </label>
          <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-muted);cursor:pointer">
            <input type="checkbox" id="tl-fi-line" onchange="renderTimeline()" ${st.fi ? 'checked' : ''}>
            Meta FI
          </label>
          <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-muted);cursor:pointer">
            <input type="checkbox" id="tl-events" onchange="renderTimeline()" ${st.ev ? 'checked' : ''}>
            Eventos
          </label>
          <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-muted);cursor:pointer" title="Projeção deflacionada pelo IPCA — valores em poder de compra de hoje">
            <input type="checkbox" id="tl-real" onchange="renderTimeline()" ${st.real ? 'checked' : ''}>
            Valores reais (IPCA)
          </label>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="openAddEvent()">+ Evento de Vida</button>
      </div>
      <div class="chart-wrap chart-tall"><canvas id="ch-timeline"></canvas></div>
    </div>

    <div class="card">
      <div class="card-title">Resumo Anual — Projeção Base</div>
      <div class="table-wrap" id="tl-table"></div>
    </div>
  `;

  const horizon  = parseInt(st.horizon || 20);
  const metric   = st.metric || 'pl';
  const showSc   = st.sc;
  const showFI   = st.fi;
  const months   = horizon * 12;

  // Deflator: projeção em poder de compra de hoje (m = meses no futuro)
  const ipcaM = Math.pow(1 + (S.assumptions.ipca || 5.5) / 100, 1/12);
  // A projeção já é real (valores de hoje). "Valores reais" = curva como está; desmarcar = mostra nominal (infla).
  const deflate = m => st.real ? 1 : Math.pow(ipcaM, m);

  const histLabels = HISTORICAL.map(h => h.d);
  const histVals   = HISTORICAL.map(h => metric === 'pl' ? h.pl : h.pat);

  const startDate = projectionStart().str;
  const projMonths = months;
  const stepProj   = Math.max(1, Math.floor(projMonths / 180));

  const scPaths = buildScenarioPaths(projMonths);
  const base    = scPaths.find(s => s.id === 'base');

  const projLabels = [];
  const projIndices = [];
  for (let m = 0; m < projMonths; m += stepProj) {
    projLabels.push(addMonths(startDate, m));
    projIndices.push(m);
  }

  const allLabels = [...histLabels, ...projLabels];
  const histLen   = histLabels.length;

  const datasets = [];

  // Historical
  datasets.push({
    label: 'Histórico',
    data: [...histVals, ...Array(projLabels.length).fill(null)],
    borderColor: '#4f8ef7',
    backgroundColor: '#4f8ef715',
    fill: true,
    borderWidth: 2,
    pointRadius: 0,
    tension: .4,
    order: 10,
  });

  // Base projection
  if (base) {
    const projData = projIndices.map(i => {
      const w = base.path[Math.min(i, base.path.length-1)]?.w;
      return w != null ? w * deflate(i) : null;
    });
    const connData = [...Array(histLen - 1).fill(null), histVals[histLen-1], ...projData];
    datasets.push({
      label: st.real ? 'Projeção Base (valores de hoje)' : 'Projeção Base (nominal)',
      data: connData,
      borderColor: '#4f8ef7',
      borderDash: [6, 4],
      borderWidth: 2,
      backgroundColor: 'transparent',
      pointRadius: 0,
      tension: .4,
      order: 9,
    });
  }

  // Scenario lines
  if (showSc) {
    scPaths.filter(s => s.id !== 'base').forEach(sc => {
      const projData = projIndices.map(i => {
        const w = sc.path[Math.min(i, sc.path.length-1)]?.w;
        return w != null ? w * deflate(i) : null;
      });
      const connData = [...Array(histLen - 1).fill(null), histVals[histLen-1], ...projData];
      datasets.push({
        label: sc.name,
        data: connData,
        borderColor: sc.color,
        borderDash: [4, 5],
        borderWidth: 1.5,
        backgroundColor: 'transparent',
        pointRadius: 0,
        tension: .4,
        order: 8,
      });
    });
  }

  // FI line
  const annotations = {};
  if (showFI) {
    annotations.fiLine = {
      type: 'line', yMin: fiNumber(), yMax: fiNumber(),
      borderColor: '#fbbf2488', borderWidth: 1.5, borderDash: [8, 5],
      label: { content: `Meta FI: ${fmtK(fiNumber())}`, enabled: true, position: 'end', color:'#fbbf24', backgroundColor:'transparent', font:{size:11} }
    };
  }

  // Today marker
  const todayIdx = histLabels.indexOf(HISTORICAL[HISTORICAL.length-1].d);
  if (todayIdx >= 0) {
    annotations.today = {
      type: 'line', xMin: todayIdx, xMax: todayIdx,
      borderColor: '#ffffff22', borderWidth: 1,
      label: { content: 'Hoje', enabled: true, position: 'start', color:'#8ca3c1', backgroundColor:'transparent', font:{size:10} }
    };
  }

  // Events
  if (showSc && S.events.length) {
    S.events.forEach((ev, i) => {
      const evDate = addMonths(startDate, ev.monthOffset);
      const idx = allLabels.indexOf(evDate);
      if (idx >= 0) {
        annotations[`ev${i}`] = {
          type: 'point', xValue: idx,
          yValue: (base?.path[ev.monthOffset]?.w ?? 0),
          backgroundColor: ev.impact > 0 ? '#22c55e' : '#f87171',
          radius: 5,
          label: { content: ev.name, enabled: true, position: 'top', font:{size:10} }
        };
      }
    });
  }

  requestAnimationFrame(() => {
    const ctx = document.getElementById('ch-timeline');
    if (!ctx) return;
    destroyChart('timeline');
    activeCharts.timeline = new Chart(ctx, {
      type: 'line',
      data: { labels: allLabels.map(l => { const [y,m] = l.split('-'); if (m==='01'||m==='06') return y; return ''; }), datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        interaction: { mode:'index', intersect:false },
        plugins: {
          legend: { labels: { color:'#8ca3c1', font:{size:11}, boxWidth:20 } },
          annotation: { annotations },
          tooltip: {
            callbacks: {
              label: ctx => ` ${ctx.dataset.label}: ${fmtK(ctx.parsed.y)}`
            }
          }
        },
        scales: {
          x: { grid:{color:'#1e2d4240'}, ticks:{color:'#8ca3c1',font:{size:10},maxRotation:0,autoSkip:true,maxTicksLimit:20} },
          y: { grid:{color:'#1e2d4260'}, ticks:{color:'#8ca3c1',font:{size:10},callback:v=>fmtK(v)} }
        }
      }
    });

    // Annual table
    if (base) {
      const rows = [];
      for (let y = 1; y <= horizon; y++) {
        const m = y * 12 - 1;
        const p = base.path[Math.min(m, base.path.length-1)];
        if (!p) continue;
        const fiPct = Math.min(100, (p.w / fiNumber()) * 100);
        const projYear = 2026 + y;
        const ageAtYear = projYear - S.profile.birthYear;
        rows.push(`
          <tr>
            <td class="bold">${projYear}</td>
            <td class="muted">${ageAtYear} anos</td>
            <td class="r accent">${fmt(p.w)}</td>
            <td class="r">${fmt(p.income)}</td>
            <td class="r">${fmt(p.expense)}</td>
            <td class="r ${p.savings>=0?'green':'red'}">${fmt(p.savings)}</td>
            <td><div style="display:flex;align-items:center;gap:6px">
              <div class="progress-bar-wrap" style="width:80px">
                <div class="progress-bar" style="width:${fiPct}%;background:${fiPct>=100?'var(--green)':'var(--accent)'}"></div>
              </div>
              <span style="font-size:11px;color:var(--text-muted)">${fmtPct(fiPct)}</span>
            </div></td>
          </tr>
        `);
      }
      document.getElementById('tl-table').innerHTML = `
        <table>
          <thead><tr>
            <th>Ano</th><th>Idade</th>
            <th class="r">Patrimônio</th><th class="r">Receita/mês</th>
            <th class="r">Gastos/mês</th><th class="r">Poupança/mês</th>
            <th>Progresso FI</th>
          </tr></thead>
          <tbody>${rows.join('')}</tbody>
        </table>
      `;
    }
  });
}

// ── 9. CENÁRIOS ───────────────────────────────────────────
function getHistoricalAverages() {
  const last6 = HISTORICAL.slice(-6);
  if (!last6.length) return { avgInc: 0, avgExp: 0, avgApo: 0, avgSavingsRate: 0 };
  const avgInc = last6.reduce((s, r) => s + (r.rec || 0), 0) / last6.length;
  const avgExp = last6.reduce((s, r) => s + (r.gas || 0), 0) / last6.length;
  const avgApo = last6.reduce((s, r) => s + (r.apo || 0), 0) / last6.length;
  const avgSavingsRate = avgInc > 0 ? ((avgInc - avgExp) / avgInc * 100) : 0;
  return { avgInc, avgExp, avgApo, avgSavingsRate };
}

function renderScenarios() {
  const el = document.getElementById('page-scenarios');

  const hist = getHistoricalAverages();
  const totalInc = S.incomes.filter(i => i.active).reduce((s, i) => s + i.amount, 0);
  const totalExp = S.expenses.filter(e => e.active).reduce((s, e) => s + e.amount, 0);

  const refHtml = `<div class="card mb-16" style="border-left:3px solid var(--accent)">
    <div class="card-title" style="margin-bottom:8px">Referência Histórica (últimos 6 meses) vs Modelo Atual</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;font-size:12px">
      <div>
        <div style="color:var(--text-muted);margin-bottom:2px">Receita real</div>
        <div style="font-weight:700;color:var(--green)">${fmt(hist.avgInc)}/mês</div>
        <div style="font-size:11px;color:var(--text-dim);margin-top:2px">Modelo: ${fmt(totalInc)} ${totalInc < hist.avgInc * 0.9 ? '<span style="color:var(--yellow)">⚠ abaixo</span>' : ''}</div>
      </div>
      <div>
        <div style="color:var(--text-muted);margin-bottom:2px">Gasto real</div>
        <div style="font-weight:700;color:var(--red)">${fmt(hist.avgExp)}/mês</div>
        <div style="font-size:11px;color:var(--text-dim);margin-top:2px">Modelo: ${fmt(totalExp)} ${totalExp < hist.avgExp * 0.9 ? '<span style="color:var(--yellow)">⚠ abaixo</span>' : ''}</div>
      </div>
      <div>
        <div style="color:var(--text-muted);margin-bottom:2px">Aporte real</div>
        <div style="font-weight:700;color:var(--accent)">${fmt(hist.avgApo)}/mês</div>
        <div style="font-size:11px;color:var(--text-dim);margin-top:2px">Modelo: ${fmt(totalInc - totalExp)}</div>
      </div>
      <div>
        <div style="color:var(--text-muted);margin-bottom:2px">Taxa de poupança</div>
        <div style="font-weight:700">${fmtPct(hist.avgSavingsRate)}</div>
        <div style="font-size:11px;color:var(--text-dim);margin-top:2px">Retorno: ${fmtPct(weightedReturn())} nominal · ${fmtPct(weightedReturnReal())} real</div>
      </div>
    </div>
  </div>`;

  el.innerHTML = `
    <div class="page-header">
      <div>
        <div class="page-title">Cenários</div>
        <div class="page-subtitle">Arraste os controles para ajustar as premissas — tudo em valores de hoje (real, acima da inflação)</div>
      </div>
    </div>
    ${refHtml}
    <details class="params-accordion card mb-16">
      <summary class="params-accordion-header">
        <span class="params-accordion-title">&#9881; Parâmetros Base</span>
        <span class="params-accordion-hint">Receita, gastos, macro, retorno por classe</span>
        <span class="params-accordion-arrow">&#9660;</span>
      </summary>
      <div class="params-accordion-body">${_buildParamsHTML()}</div>
    </details>
    <div class="sc-slider-grid" id="sc-cards-grid"></div>
    <div class="card mb-16">
      <div class="card-title">Projeção Comparativa de Patrimônio <span style="font-weight:400;font-size:11px;color:var(--text-dim)">· valores de hoje</span></div>
      <div class="chart-wrap chart-tall"><canvas id="ch-scenarios"></canvas></div>
    </div>
    <div class="card mb-16">
      <div class="card-title">Tabela Comparativa — A cada 5 Anos</div>
      <div class="table-wrap" id="sc-table"></div>
    </div>
    <div class="card">
      <div class="card-title">Projeção Detalhada — Mensal (10 anos) + Anual</div>
      <div class="sc-detail-tabs" id="sc-detail-tabs"></div>
      <div class="table-wrap sc-detail-wrap" id="sc-detail-table"></div>
    </div>
  `;

  requestAnimationFrame(() => {
    const months = S.assumptions.projectionYears * 12;
    const scPaths = buildScenarioPaths(months);
    _renderScCards(scPaths);
    _renderScChart(months, scPaths);
    _renderScTable(months, scPaths);
    _renderScDetailTabs(scPaths, 'base');
    _renderScDetailTable('base', scPaths);
  });
}

// crescimento médio (ponderado pelo valor) dos itens ativos — base p/ os deltas de renda/gasto
function avgGrowth(list) {
  const act = list.filter(x => x.active);
  const tot = act.reduce((s, x) => s + x.amount, 0);
  if (!tot) return 0;
  return act.reduce((s, x) => s + x.growthRate * x.amount, 0) / tot;
}
// valor final (absoluto) que a projeção usa, com o delta entre parênteses
function scValDisplay(field, val) {
  const base = field === 'retDelta' ? weightedReturnReal()
             : field === 'incDelta' ? avgGrowth(S.incomes)
             : avgGrowth(S.expenses);
  const abs = base + val;
  const sign = val >= 0 ? '+' : '';
  const n = v => v.toFixed(1).replace('.', ',');
  return `${n(abs)}% <span style="opacity:.55;font-weight:400">(${sign}${n(val)})</span>`;
}

function _scCardHTML(sc) {
  const months = S.assumptions.projectionYears * 12;
  const path = buildScenarioPaths(months).find(s => s.id === sc.id);
  const fi = path ? findFIDate(path.path) : null;
  const end = path ? path.path[path.path.length - 1] : null;
  const fiStr = fi
    ? fi.date.toLocaleDateString('pt-BR', {month:'short', year:'numeric'}) + ` (${Math.floor(fi.months/12)} anos)`
    : `> ${S.assumptions.projectionYears} anos`;
  const ageAtFI = fi ? (2026 + Math.floor(fi.months / 12)) - S.profile.birthYear : '—';
  const retR = 15, incR = 10, expR = 10;

  return `
    <div class="sc-card-new" style="border-top:3px solid ${sc.color}">
      <div class="sc-card-head">
        <span class="sc-dot" style="background:${sc.color}"></span>
        <span class="sc-card-title">${sc.name}</span>
        <button class="btn btn-ghost btn-sm" style="margin-left:auto;font-size:11px;padding:2px 8px" onclick="scReset('${sc.id}')" title="Voltar aos valores padrão deste cenário">↺ padrão</button>
      </div>

      <div class="sc-sliders">
        <div class="slider-group">
          <div class="slider-label-row">
            <span class="slider-lbl">Retorno real</span>
            <span class="slider-val ${sc.retDelta>=0?'green':'red'}" id="rv-${sc.id}">${scValDisplay('retDelta', +sc.retDelta)}</span>
          </div>
          <input type="range" class="sc-slider" min="${-retR}" max="${retR}" step="0.5"
            value="${sc.retDelta}" data-sc="${sc.id}" data-field="retDelta"
            oninput="scSliderInput(this)" onchange="scSliderCommit(this)">
        </div>
        <div class="slider-group">
          <div class="slider-label-row">
            <span class="slider-lbl">Renda</span>
            <span class="slider-val ${sc.incDelta>=0?'green':'red'}" id="iv-${sc.id}">${scValDisplay('incDelta', +sc.incDelta)}</span>
          </div>
          <input type="range" class="sc-slider" min="${-incR}" max="${incR}" step="0.5"
            value="${sc.incDelta}" data-sc="${sc.id}" data-field="incDelta"
            oninput="scSliderInput(this)" onchange="scSliderCommit(this)">
        </div>
        <div class="slider-group">
          <div class="slider-label-row">
            <span class="slider-lbl">Gastos</span>
            <span class="slider-val ${sc.expDelta>0?'red':sc.expDelta<0?'green':'muted'}" id="ev-${sc.id}">${scValDisplay('expDelta', +sc.expDelta)}</span>
          </div>
          <input type="range" class="sc-slider" min="${-expR}" max="${expR}" step="0.5"
            value="${sc.expDelta}" data-sc="${sc.id}" data-field="expDelta"
            oninput="scSliderInput(this)" onchange="scSliderCommit(this)">
        </div>
      </div>

      <div class="sc-results">
        <div class="sc-result-item">
          <div class="sc-result-label">Data FI</div>
          <div class="sc-result-value" id="fi-${sc.id}" style="color:${sc.color}">${fiStr}</div>
        </div>
        <div class="sc-result-item">
          <div class="sc-result-label">Idade FI</div>
          <div class="sc-result-value" id="age-${sc.id}">${ageAtFI}</div>
        </div>
        <div class="sc-result-item">
          <div class="sc-result-label">Patrim. ${S.assumptions.projectionYears}a</div>
          <div class="sc-result-value" id="pat-${sc.id}">${fmtK(end?.w||0)}</div>
        </div>
      </div>
    </div>
  `;
}

function _renderScCards(scPaths) {
  const grid = document.getElementById('sc-cards-grid');
  if (!grid) return;
  grid.innerHTML = S.scenarios.map(sc => _scCardHTML(sc)).join('');
}

function scSliderInput(el) {
  const scId = el.dataset.sc;
  const field = el.dataset.field;
  const val = +el.value;
  const disp = scValDisplay(field, val);

  const sc = S.scenarios.find(s => s.id === scId);
  if (!sc) return;
  sc[field] = val;

  if (field === 'retDelta') {
    const s = document.getElementById('rv-' + scId);
    if (s) { s.innerHTML = disp; s.className = 'slider-val ' + (val>=0?'green':'red'); }
  } else if (field === 'incDelta') {
    const s = document.getElementById('iv-' + scId);
    if (s) { s.innerHTML = disp; s.className = 'slider-val ' + (val>=0?'green':'red'); }
  } else {
    const s = document.getElementById('ev-' + scId);
    if (s) { s.innerHTML = disp; s.className = 'slider-val ' + (val>0?'red':val<0?'green':'muted'); }
  }

  clearTimeout(scSliderInput._t);
  scSliderInput._t = setTimeout(() => {
    const months = S.assumptions.projectionYears * 12;
    const scPaths = buildScenarioPaths(months);
    scPaths.forEach(sp => {
      const fi = findFIDate(sp.path);
      const end = sp.path[sp.path.length - 1];
      const fiStr = fi
        ? fi.date.toLocaleDateString('pt-BR', {month:'short', year:'numeric'}) + ` (${Math.floor(fi.months/12)} anos)`
        : `> ${S.assumptions.projectionYears} anos`;
      const ageAtFI = fi ? (2026 + Math.floor(fi.months/12)) - S.profile.birthYear : '—';
      const fiEl  = document.getElementById('fi-'  + sp.id);
      const ageEl = document.getElementById('age-' + sp.id);
      const patEl = document.getElementById('pat-' + sp.id);
      if (fiEl)  fiEl.textContent  = fiStr;
      if (ageEl) ageEl.textContent = ageAtFI;
      if (patEl) patEl.textContent = fmtK(end?.w||0);
    });
    _renderScChart(months, scPaths);
    _renderScTable(months, scPaths);
  }, 80);
}

function scSliderCommit() { saveState(); }

// Volta um cenário aos deltas padrão (definidos em DEFAULT_STATE).
function scReset(id) {
  const def = DEFAULT_STATE.scenarios.find(s => s.id === id);
  const sc  = S.scenarios.find(s => s.id === id);
  if (!def || !sc) return;
  sc.retDelta = def.retDelta; sc.incDelta = def.incDelta; sc.expDelta = def.expDelta;
  saveState();
  renderScenarios();
}

function _renderScChart(months, scPaths) {
  const step = Math.max(1, Math.floor(months / 120));
  const rawLabels = [];
  for (let m = 0; m <= months; m += step) rawLabels.push(2026 + Math.floor(m / 12));
  const labels = rawLabels.filter((v,i,a) => a.indexOf(v) === i);

  const datasets = scPaths.map(sc => ({
    label: sc.name,
    data: labels.map((_, i) => {
      const m = i * step;
      return sc.path[Math.min(m, sc.path.length-1)]?.w ?? null;
    }),
    borderColor: sc.color,
    backgroundColor: sc.color + '18',
    fill: sc.id === 'base',
    borderWidth: sc.id === 'base' ? 2.5 : 1.5,
    pointRadius: 0,
    tension: .4,
  }));

  const fin = fiNumber();
  const annotations = {
    fiLine: {
      type:'line', yMin:fin, yMax:fin,
      borderColor:'#fbbf2466', borderWidth:1.5, borderDash:[8,5],
      label:{content:`Meta FI: ${fmtK(fin)}`,enabled:true,position:'end',color:'#fbbf24',backgroundColor:'transparent',font:{size:11}}
    }
  };

  destroyChart('scenarios');
  const canvas = document.getElementById('ch-scenarios');
  if (!canvas) return;
  activeCharts.scenarios = new Chart(canvas, {
    type:'line',
    data:{ labels, datasets },
    options:{
      responsive:true, maintainAspectRatio:false,
      interaction:{ mode:'index', intersect:false },
      plugins:{
        legend:{ labels:{color:'#8ca3c1',font:{size:11}} },
        annotation:{ annotations },
        tooltip:{ callbacks:{ label:c=>` ${c.dataset.label}: ${fmtK(c.parsed.y)}` } }
      },
      scales:{
        x:{ grid:{color:'#1e2d4230'}, ticks:{color:'#8ca3c1',font:{size:10}} },
        y:{ grid:{color:'#1e2d4250'}, ticks:{color:'#8ca3c1',font:{size:10},callback:v=>fmtK(v)} }
      }
    }
  });
}

function _renderScTable(months, scPaths) {
  const years = [5,10,15,20,25,30].filter(y => y <= S.assumptions.projectionYears);
  const fin = fiNumber();
  const tableRows = years.map(y => {
    const m = y * 12 - 1;
    const cells = scPaths.map(sc => {
      const v = sc.path[Math.min(m, sc.path.length-1)]?.w || 0;
      const cls = v >= fin ? 'green' : v >= fin*0.7 ? 'accent' : '';
      return `<td class="r ${cls}">${fmt(v)}</td>`;
    }).join('');
    return `<tr><td class="bold">${2026+y}</td><td class="muted">${2026+y-S.profile.birthYear} anos</td>${cells}</tr>`;
  });

  const tableEl = document.getElementById('sc-table');
  if (!tableEl) return;
  tableEl.innerHTML = `
    <table>
      <thead><tr>
        <th>Ano</th><th>Idade</th>
        ${scPaths.map(s=>`<th class="r" style="color:${s.color}">${s.name}</th>`).join('')}
      </tr></thead>
      <tbody>${tableRows.join('')}</tbody>
    </table>
  `;
}

function _renderScDetailTabs(scPaths, activeId) {
  const el = document.getElementById('sc-detail-tabs');
  if (!el) return;
  el.innerHTML = scPaths.map(sc => `
    <button class="sc-tab ${sc.id === activeId ? 'active' : ''}"
      style="${sc.id === activeId ? `background:${sc.color}22;border-color:${sc.color};color:${sc.color}` : ''}"
      data-scid="${sc.id}" onclick="switchScenarioTab('${sc.id}')">
      ${sc.name}
    </button>`).join('');
}

function _renderScDetailTable(scId, scPaths) {
  const el = document.getElementById('sc-detail-table');
  if (!el) return;
  const sc = scPaths.find(s => s.id === scId);
  if (!sc) return;

  const fin = fiNumber();
  const path = sc.path;
  const monthNames = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
  let fiReached = false;
  const rows = [];

  for (let m = 0; m < path.length; m++) {
    const isMonthly = m < 120;
    if (!isMonthly && m % 12 !== 0) continue;

    const p = path[m];
    const absMonth = 4 + m; // 4 = May (0-indexed)
    const year  = 2026 + Math.floor(absMonth / 12);
    const month = absMonth % 12;
    const label = isMonthly
      ? `${monthNames[month]}/${String(year).slice(2)}`
      : String(year);

    const pct    = Math.min(100, (p.w / fin) * 100);
    const hitFI  = !fiReached && p.w >= fin;
    if (hitFI) fiReached = true;
    const rowStyle = hitFI ? ' class="fi-row"' : (fiReached ? ' style="opacity:.7"' : '');

    const retDisplay = isMonthly ? fmt(p.ret) : fmt(path.slice(m - 11, m + 1).reduce((s, x) => s + x.ret, 0));
    rows.push(`<tr${rowStyle}>
      <td class="muted" style="font-variant-numeric:tabular-nums">${label}${hitFI ? ' <span style="color:var(--green);font-size:10px">★ FI</span>' : ''}</td>
      <td class="r">${fmt(p.income)}</td>
      <td class="r red">${fmt(p.expense)}</td>
      <td class="r ${p.savings>=0?'green':'red'}">${fmt(p.savings)}</td>
      <td class="r" style="color:var(--cyan)">${retDisplay}</td>
      <td class="r accent">${fmt(p.w)}</td>
      <td class="r" style="font-size:11px;color:var(--text-muted)">${fmtPct(pct)}</td>
    </tr>`);
  }

  el.innerHTML = `
    <table>
      <thead><tr>
        <th>Período</th>
        <th class="r">Receita</th>
        <th class="r">Gastos</th>
        <th class="r">Poupança</th>
        <th class="r">Retorno</th>
        <th class="r">Patrimônio</th>
        <th class="r">% FI</th>
      </tr></thead>
      <tbody>${rows.join('')}</tbody>
    </table>`;
}

function switchScenarioTab(scId) {
  const months  = S.assumptions.projectionYears * 12;
  const scPaths = buildScenarioPaths(months);
  _renderScDetailTabs(scPaths, scId);
  _renderScDetailTable(scId, scPaths);
}

// ── 10. PATRIMÔNIO ────────────────────────────────────────
function renderPortfolio() {
  const el    = document.getElementById('page-portfolio');
  const total = S.portfolio.reduce((s,a)=>s+a.value,0);
  const wtdRet= weightedReturn();

  const rows = S.portfolio.map(a => {
    const pct = total > 0 ? (a.value/total)*100 : 0;
    return `
      <tr>
        <td><span class="color-dot" style="background:${a.color}"></span>${a.name}</td>
        <td class="muted">${a.cat.toUpperCase()}</td>
        <td class="r accent">${fmt(a.value)}</td>
        <td class="r muted">${fmtPct(pct)}</td>
        <td class="r">
          <input type="number" value="${a.ret}" step="0.1" min="0" max="50"
            onchange="updateAssetReturn('${a.id}',this.value)"
            style="background:var(--surface-3);border:1px solid var(--border-2);border-radius:4px;padding:3px 6px;color:var(--text);font-size:12px;width:70px;text-align:right">%
        </td>
        <td class="r green">${fmt(a.value * a.ret / 100 / 12)}/mês</td>
        <td class="r">
          <button class="btn btn-ghost btn-sm btn-icon" onclick="openEditAsset('${a.id}')">✎</button>
          <button class="btn btn-ghost btn-sm btn-icon" style="color:var(--red)" onclick="removeAsset('${a.id}')">✕</button>
        </td>
      </tr>
    `;
  }).join('');

  // ── Alocação alvo + bandas de rebalanceamento ──
  const targets = S.targetAllocation || {};
  const targetTotal = Object.values(targets).reduce((s, v) => s + v, 0);
  const hasTargets = targetTotal > 0;
  const band = S.rebalanceBand || { abs: 5, rel: 25 };
  const bandHalf = t => Math.min(band.abs, t * band.rel / 100);   // regra 5/25: o menor entre X pp e Y% do alvo

  let balanceRows = '', rebalCard = '', outCount = 0, turnover = 0;
  if (hasTargets && total > 0) {
    const analysis = S.portfolio.map(a => {
      const realPct = (a.value / total) * 100;
      const targetPct = targets[a.id] || 0;
      const delta = realPct - targetPct;
      const half = bandHalf(targetPct);
      const out = Math.abs(delta) > half + 1e-9;
      const targetValue = total * targetPct / 100;
      return { a, realPct, targetPct, delta, half, out, targetValue, trade: targetValue - a.value };
    });
    outCount = analysis.filter(x => x.out).length;
    turnover = analysis.filter(x => x.trade > 0).reduce((s, x) => s + x.trade, 0);

    balanceRows = analysis.map(x => {
      const a = x.a;
      const cls = x.out ? (x.delta > 0 ? 'red' : 'green') : 'text-muted';
      const arrow = x.out ? (x.delta > 0 ? '↑' : '↓') : '≈';
      const lo = Math.max(0, x.targetPct - x.half), hi = Math.min(100, x.targetPct + x.half);
      const badge = x.out ? '<span class="band-badge out">fora</span>' : '<span class="band-badge ok">dentro</span>';
      return `<div style="margin-bottom:10px">
        <div class="flex-between" style="font-size:12px;margin-bottom:3px">
          <span><span class="color-dot" style="background:${a.color}"></span>${a.name} ${badge}</span>
          <span class="${cls}" style="font-weight:600">${arrow} ${x.delta > 0 ? '+' : ''}${fmtPct(x.delta)} (${x.delta > 0 ? '+' : ''}${fmtK(a.value - x.targetValue)})</span>
        </div>
        <div style="position:relative;height:12px;background:var(--surface-3);border-radius:6px;overflow:hidden">
          <div style="position:absolute;height:100%;left:${lo}%;width:${Math.max(0, hi - lo)}%;background:var(--text);opacity:.12" title="Banda ${fmtPct(lo)}–${fmtPct(hi)}"></div>
          <div style="position:absolute;height:100%;width:${Math.min(100, x.realPct)}%;background:${a.color};border-radius:6px;opacity:0.7"></div>
          <div style="position:absolute;height:100%;left:${Math.min(98, x.targetPct)}%;width:2px;background:var(--text);border-radius:1px" title="Alvo ${fmtPct(x.targetPct)}"></div>
        </div>
        <div class="flex-between" style="font-size:10px;color:var(--text-dim);margin-top:2px">
          <span>Real ${fmtPct(x.realPct)}</span>
          <span>Banda ${fmtPct(lo)}–${fmtPct(hi)}</span>
          <span>Alvo ${fmtPct(x.targetPct)}</span>
        </div>
      </div>`;
    }).join('');

    if (outCount > 0) {
      const planRows = analysis
        .filter(x => Math.abs(x.trade) >= 1)
        .sort((p, q) => p.trade - q.trade)                         // vendas primeiro, depois compras
        .map(x => {
          const t = x.trade, act = t > 0 ? 'Comprar' : 'Vender', actCls = t > 0 ? 'green' : 'red';
          return `<tr${x.out ? '' : ' style="opacity:.5"'}>
            <td><span class="color-dot" style="background:${x.a.color}"></span>${x.a.name}${x.out ? '' : ' <span class="text-dim" style="font-size:10px">dentro</span>'}</td>
            <td class="r">${fmt(x.a.value)}</td>
            <td class="r ${actCls}" style="font-weight:700">${act} ${fmt(Math.abs(t))}</td>
            <td class="r">${fmt(x.targetValue)}</td>
          </tr>`;
        }).join('');
      const offNote = Math.abs(targetTotal - 100) > 0.5
        ? `<div class="text-muted" style="font-size:11px;margin-top:8px">⚠ Seus alvos somam ${fmtPct(targetTotal)}, não 100%. Ajuste em "Editar alvos" pro plano fechar em zero.</div>`
        : '';
      rebalCard = `<div class="card mb-16">
        <div class="flex-between mb-12">
          <div class="card-title" style="margin-bottom:0">Plano de Rebalanceamento</div>
          <span class="text-muted" style="font-size:12px">giro ${fmt(turnover)}</span>
        </div>
        <p style="font-size:12px;color:var(--text-muted);margin-bottom:10px">Trades pra voltar cada classe ao alvo, sem dinheiro novo — compras e vendas se anulam.</p>
        <div class="table-wrap"><table class="history-table">
          <thead><tr><th>Ativo</th><th class="r">Atual</th><th class="r">Ação</th><th class="r">Alvo</th></tr></thead>
          <tbody>${planRows}</tbody>
        </table></div>
        ${offNote}
      </div>`;
    }
  }

  // ── Aporte simulator ──
  let aporteHtml = '';
  if (hasTargets && total > 0) {
    aporteHtml = `<div class="card mt-16">
      <div class="card-title">Simulador de Aporte</div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
        <label style="font-size:12px;color:var(--text-muted);white-space:nowrap">Valor do aporte:</label>
        <input type="number" id="aporte-input" class="form-input" value="${S.lastAporte || 5000}" min="0" step="500"
          style="width:180px;font-size:14px;font-weight:700" onchange="renderAporteSimulation()">
        <button class="btn btn-primary btn-sm" onclick="renderAporteSimulation()">Calcular</button>
      </div>
      <div id="aporte-result"></div>
    </div>`;
  }

  el.innerHTML = `
    <div class="page-header">
      <div>
        <div class="page-title">Patrimônio</div>
        <div class="page-subtitle">Alocação por classe de ativo e retorno esperado</div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="openAddAsset()">+ Ativo</button>
    </div>

    <div class="kpi-grid-3 mb-16">
      <div class="kpi">
        <div class="kpi-label">Total do Portfólio</div>
        <div class="kpi-value">${fmt(total)}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Retorno Ponderado</div>
        <div class="kpi-value" style="color:var(--accent)">${fmtPct(wtdRet)} a.a.</div>
        <div class="kpi-sub">${fmtPct(wtdRet/12)} a.m.</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Renda Passiva Mensal</div>
        <div class="kpi-value" style="color:var(--green)">${fmt(total*wtdRet/100/12)}</div>
        <div class="kpi-sub">Se mantiver alocação atual</div>
      </div>
    </div>

    <div class="grid-2 mb-16">
      <div class="card">
        <div class="card-title">Ativos</div>
        <div class="table-wrap">
          <table>
            <thead><tr>
              <th>Ativo</th><th>Classe</th>
              <th class="r">Valor</th><th class="r">%</th>
              <th class="r">Retorno a.a.</th><th class="r">Renda Mensal</th>
              <th></th>
            </tr></thead>
            <tbody>${rows || '<tr><td colspan="7" class="muted" style="text-align:center;padding:20px">Nenhum ativo. Clique em + Ativo</td></tr>'}</tbody>
          </table>
        </div>
        ${total>0?`<div class="mt-12" style="font-size:12px;color:var(--text-muted);text-align:right;padding:4px 12px">
          Total: <strong style="color:var(--text)">${fmt(total)}</strong> · Retorno médio: <strong style="color:var(--accent)">${fmtPct(wtdRet)}</strong>
        </div>`:''}
      </div>
      <div class="card">
        <div class="card-title">Alocação</div>
        <div class="chart-wrap" style="height:300px"><canvas id="ch-port-pie"></canvas></div>
        ${renderAllocationBars(total)}
      </div>
    </div>

    ${hasTargets && total > 0 ? `<div class="card mb-16">
      <div class="flex-between mb-12">
        <div class="card-title" style="margin-bottom:0">Real vs. Planejado${outCount > 0 ? ` · <span style="color:var(--red)">${outCount} fora da banda</span>` : ` · <span style="color:var(--green)">tudo dentro</span>`}</div>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="text-dim" style="font-size:11px" title="Rebalanceia quando o desvio passa de X pontos percentuais OU Y% relativo ao alvo — o que disparar primeiro (regra 5/25)">banda</span>
          <input type="number" value="${band.abs}" min="1" max="50" step="1" onchange="updateBand('abs',this.value)" style="width:46px;text-align:right;background:var(--surface-3);border:1px solid var(--border-2);border-radius:4px;padding:2px 5px;color:var(--text);font-size:12px"><span class="text-dim" style="font-size:11px">pp</span>
          <input type="number" value="${band.rel}" min="1" max="100" step="1" onchange="updateBand('rel',this.value)" style="width:46px;text-align:right;background:var(--surface-3);border:1px solid var(--border-2);border-radius:4px;padding:2px 5px;color:var(--text);font-size:12px"><span class="text-dim" style="font-size:11px">%</span>
          <button class="btn btn-ghost btn-sm" style="margin-left:6px" onclick="openTargetModal()">Editar alvos</button>
        </div>
      </div>
      ${balanceRows}
    </div>
    ${rebalCard}` : `<div class="card mb-16" style="padding:24px;text-align:center">
      <p style="color:var(--text-muted);margin-bottom:8px">Defina uma alocação alvo para ver a comparação</p>
      <button class="btn btn-primary btn-sm" onclick="openTargetModal()">Definir Alvos</button>
    </div>`}

    ${aporteHtml}
  `;

  if (S.portfolio.length > 0) {
    requestAnimationFrame(() => {
      destroyChart('portPie');
      activeCharts.portPie = makePieChart(
        'ch-port-pie',
        S.portfolio.map(a=>a.name),
        S.portfolio.map(a=>a.value),
        S.portfolio.map(a=>a.color)
      );
      renderAporteSimulation();
    });
  }
}

function openTargetModal() {
  const targets = S.targetAllocation || {};
  const total = S.portfolio.reduce((s, a) => s + (targets[a.id] || 0), 0);
  const rows = S.portfolio.map(a => {
    const val = targets[a.id] || 0;
    return `<div class="form-group" style="margin-bottom:8px">
      <div style="display:flex;align-items:center;gap:8px">
        <span class="color-dot" style="background:${a.color}"></span>
        <label style="flex:1;font-size:13px;font-weight:600;color:var(--text)">${a.name}</label>
        <input type="number" class="form-input target-input" data-id="${a.id}" value="${val}" min="0" max="100" step="1"
          style="width:80px;text-align:right" oninput="updateTargetTotal()">
        <span style="font-size:12px;color:var(--text-dim)">%</span>
      </div>
    </div>`;
  }).join('');

  openModal('Alocação Alvo', `
    <p style="font-size:12px;color:var(--text-muted);margin-bottom:12px">Defina a % alvo para cada ativo. O total deve somar 100%.</p>
    ${rows}
    <div style="text-align:right;margin-top:8px;padding:8px 0;border-top:1px solid var(--border)">
      <span style="font-size:13px;font-weight:700">Total: <span id="target-total-label" style="color:${total === 100 ? 'var(--green)' : 'var(--red)'}">${total}%</span></span>
    </div>
    <div class="form-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveTargets()">Salvar</button>
    </div>
  `);
}

function updateTargetTotal() {
  let total = 0;
  document.querySelectorAll('.target-input').forEach(inp => { total += parseFloat(inp.value) || 0; });
  const label = document.getElementById('target-total-label');
  if (label) {
    label.textContent = total + '%';
    label.style.color = total === 100 ? 'var(--green)' : 'var(--red)';
  }
}

function updateBand(field, val) {
  if (!S.rebalanceBand) S.rebalanceBand = { abs: 5, rel: 25 };
  const n = parseFloat(val);
  if (!isNaN(n) && n > 0) { S.rebalanceBand[field] = n; saveState(); renderPortfolio(); }
}

function saveTargets() {
  if (!S.targetAllocation) S.targetAllocation = {};
  document.querySelectorAll('.target-input').forEach(inp => {
    const id = inp.dataset.id;
    const val = parseFloat(inp.value) || 0;
    S.targetAllocation[id] = val;
  });
  saveState(); closeModal(); renderPortfolio();
  showToast('Alvos salvos!');
}

function renderAporteSimulation() {
  const container = document.getElementById('aporte-result');
  if (!container) return;
  const input = document.getElementById('aporte-input');
  const aporte = parseFloat(input?.value) || 0;
  if (aporte <= 0) { container.innerHTML = ''; return; }

  S.lastAporte = aporte;
  const total = S.portfolio.reduce((s, a) => s + a.value, 0);
  const newTotal = total + aporte;
  const targets = S.targetAllocation || {};

  // Calculate ideal distribution: for each asset, how much it needs to reach target %
  const distribution = S.portfolio.map(a => {
    const targetPct = (targets[a.id] || 0) / 100;
    const idealValue = newTotal * targetPct;
    const deficit = idealValue - a.value;
    return { id: a.id, name: a.name, color: a.color, current: a.value, targetPct, idealValue, deficit: Math.max(0, deficit) };
  });

  // Distribute aporte proportionally to deficits
  const totalDeficit = distribution.reduce((s, d) => s + d.deficit, 0);
  let remaining = aporte;

  distribution.forEach(d => {
    if (totalDeficit > 0) {
      d.aporte = Math.min(remaining, Math.round(aporte * d.deficit / totalDeficit));
    } else {
      d.aporte = Math.round(aporte * (d.targetPct || 0));
    }
    remaining -= d.aporte;
  });
  // Distribute rounding remainder to largest deficit
  if (remaining > 0) {
    const largest = distribution.reduce((best, d) => d.deficit > best.deficit ? d : best, distribution[0]);
    largest.aporte += remaining;
  }

  const resultRows = distribution.filter(d => d.aporte > 0 || d.current > 0).map(d => {
    const newVal = d.current + d.aporte;
    const newPct = (newVal / newTotal) * 100;
    const tPct = d.targetPct * 100;
    const diffPct = newPct - tPct;
    const cls = Math.abs(diffPct) < 1.5 ? 'text-muted' : diffPct > 0 ? 'red' : 'green';
    return `<tr>
      <td><span class="color-dot" style="background:${d.color}"></span>${d.name}</td>
      <td class="r">${fmtPct(tPct)}</td>
      <td class="r ${d.aporte > 0 ? 'accent' : 'muted'}" style="font-weight:${d.aporte > 0 ? '700' : '400'}">${d.aporte > 0 ? fmt(d.aporte) : '—'}</td>
      <td class="r">${fmt(newVal)}</td>
      <td class="r ${cls}">${fmtPct(newPct)}</td>
    </tr>`;
  }).join('');

  container.innerHTML = `
    <div class="table-wrap">
      <table class="history-table">
        <thead><tr>
          <th>Ativo</th>
          <th class="r">Alvo</th>
          <th class="r">Aporte</th>
          <th class="r">Novo Valor</th>
          <th class="r">Nova %</th>
        </tr></thead>
        <tbody>${resultRows}</tbody>
        <tfoot><tr style="border-top:2px solid var(--border-2)">
          <td style="font-weight:700">Total</td>
          <td class="r" style="font-weight:700">100%</td>
          <td class="r accent" style="font-weight:700">${fmt(aporte)}</td>
          <td class="r" style="font-weight:700">${fmt(newTotal)}</td>
          <td class="r" style="font-weight:700">100%</td>
        </tr></tfoot>
      </table>
    </div>`;
}

function renderAllocationBars(total) {
  if (!total) return '';
  return `<div class="mt-12">${S.portfolio.map(a=>{
    const pct = (a.value/total)*100;
    return `<div style="margin-bottom:8px">
      <div class="flex-between mb-4 text-sm">
        <span><span class="color-dot" style="background:${a.color}"></span>${a.name}</span>
        <span class="text-muted">${fmtPct(pct)} · ${fmtK(a.value)}</span>
      </div>
      <div class="progress-bar-wrap"><div class="progress-bar" style="width:${pct}%;background:${a.color}"></div></div>
    </div>`;
  }).join('')}</div>`;
}

function updateAssetReturn(id, val) {
  const a = S.portfolio.find(x=>x.id===id);
  if (a) { a.ret = parseFloat(val)||0; saveState(); }
}

function openAddAsset() {
  openModal('Adicionar Ativo', assetForm());
}
function openEditAsset(id) {
  const a = S.portfolio.find(x=>x.id===id);
  if (a) openModal('Editar Ativo', assetForm(a));
}
function assetForm(a={}) {
  const cats = ['rf','rv','fii','intl','cash','prev','imovel','outro'];
  const colors = ['#4f8ef7','#22c55e','#fbbf24','#a78bfa','#64748b','#f97316','#22d3ee','#f472b6'];
  return `
    <div class="form-group">
      <label class="form-label">Nome</label>
      <input class="form-input" id="af-name" value="${a.name||''}" placeholder="Ex: Tesouro Selic, IVVB11...">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Classe</label>
        <select class="form-select" id="af-cat">
          ${cats.map(c=>`<option value="${c}" ${a.cat===c?'selected':''}>${c.toUpperCase()}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Cor</label>
        <select class="form-select" id="af-color">
          ${colors.map(c=>`<option value="${c}" ${a.color===c?'selected':''}>${c}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Valor Atual (R$)</label>
        <input class="form-input" id="af-value" type="number" value="${a.value||0}" min="0">
      </div>
      <div class="form-group">
        <label class="form-label">Retorno Esperado (% a.a.)</label>
        <input class="form-input" id="af-ret" type="number" value="${a.ret||10}" step="0.1" min="0" max="50">
      </div>
    </div>
    <div class="form-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveAsset('${a.id||''}')">Salvar</button>
    </div>
  `;
}
function saveAsset(id) {
  const obj = {
    name:  document.getElementById('af-name').value.trim(),
    cat:   document.getElementById('af-cat').value,
    color: document.getElementById('af-color').value,
    value: parseFloat(document.getElementById('af-value').value)||0,
    ret:   parseFloat(document.getElementById('af-ret').value)||0,
  };
  if (!obj.name) return;
  if (id) { const a = S.portfolio.find(x=>x.id===id); Object.assign(a, obj); }
  else { S.portfolio.push({ id: uid(), ...obj }); }
  saveState(); closeModal(); renderPortfolio();
}
function removeAsset(id) {
  S.portfolio = S.portfolio.filter(a=>a.id!==id);
  saveState(); renderPortfolio();
}

// ── 11. FLUXO DE CAIXA ────────────────────────────────────
function renderCashflow() {
  const el = document.getElementById('page-cashflow');
  const totalInc = S.incomes.filter(i=>i.active).reduce((s,i)=>s+i.amount,0);
  const totalExp = S.expenses.filter(e=>e.active).reduce((s,e)=>s+e.amount,0);
  const savings  = totalInc - totalExp;

  const incRows = S.incomes.map(i=>`
    <tr>
      <td><label class="toggle"><input type="checkbox" ${i.active?'checked':''} onchange="toggleCF('inc','${i.id}',this.checked)"><span class="toggle-slider"></span></label></td>
      <td class="${i.active?'':'muted'}">${i.name}</td>
      <td class="r green">${fmt(i.amount)}</td>
      <td class="r muted">${fmtPct(i.growthRate)} a.a.</td>
      <td class="r muted">${fmt(i.amount*12)}</td>
      <td>
        <button class="btn btn-ghost btn-sm btn-icon" onclick="openEditCF('inc','${i.id}')">✎</button>
        <button class="btn btn-ghost btn-sm btn-icon" style="color:var(--red)" onclick="removeCF('inc','${i.id}')">✕</button>
      </td>
    </tr>`).join('');

  const expRows = S.expenses.map(e=>`
    <tr>
      <td><label class="toggle"><input type="checkbox" ${e.active?'checked':''} onchange="toggleCF('exp','${e.id}',this.checked)"><span class="toggle-slider"></span></label></td>
      <td class="${e.active?'':'muted'}">${e.name}</td>
      <td class="r red">${fmt(e.amount)}</td>
      <td class="r muted">${fmtPct(e.growthRate)} a.a.</td>
      <td class="r muted">${fmt(e.amount*12)}</td>
      <td>
        <button class="btn btn-ghost btn-sm btn-icon" onclick="openEditCF('exp','${e.id}')">✎</button>
        <button class="btn btn-ghost btn-sm btn-icon" style="color:var(--red)" onclick="removeCF('exp','${e.id}')">✕</button>
      </td>
    </tr>`).join('');

  // Projection for next 24 months
  const projRows = [];
  for (let m = 0; m < 24; m++) {
    const y = m / 12;
    const inc = S.incomes.filter(i=>i.active).reduce((s,i)=>s+i.amount*Math.pow(1+i.growthRate/100,y),0);
    const exp = S.expenses.filter(e=>e.active).reduce((s,e)=>s+e.amount*Math.pow(1+e.growthRate/100,y),0);
    const sv = inc - exp;
    const label = monthLabel(addMonths(projectionStart().str, m));
    projRows.push(`<tr>
      <td>${label}</td>
      <td class="r green">${fmt(inc)}</td>
      <td class="r red">${fmt(exp)}</td>
      <td class="r ${sv>=0?'green':'red'}">${fmt(sv)}</td>
      <td class="r muted">${fmtPct(inc>0?(sv/inc)*100:0)}</td>
    </tr>`);
  }

  el.innerHTML = `
    <div class="page-header">
      <div><div class="page-title">Fluxo de Caixa</div>
        <div class="page-subtitle">Receitas e despesas em valores de hoje · crescimento real (acima da inflação)</div>
      </div>
    </div>

    <div class="kpi-grid mb-16">
      <div class="kpi">
        <div class="kpi-label">Receita Mensal</div>
        <div class="kpi-value" style="color:var(--green)">${fmt(totalInc)}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Gastos Mensais</div>
        <div class="kpi-value" style="color:var(--red)">${fmt(totalExp)}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Poupança Mensal</div>
        <div class="kpi-value" style="color:${savings>=0?'var(--green)':'var(--red)'}">${fmt(savings)}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Taxa de Poupança</div>
        <div class="kpi-value" style="color:${totalInc>0&&(savings/totalInc)>=.4?'var(--green)':'var(--yellow)'}">
          ${totalInc>0?fmtPct((savings/totalInc)*100):'—'}
        </div>
      </div>
    </div>

    <div class="grid-2 mb-16">
      <div class="card">
        <div class="flex-between mb-12">
          <div class="card-title" style="margin-bottom:0">Receitas</div>
          <button class="btn btn-primary btn-sm" onclick="openAddCF('inc')">+ Receita</button>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th></th><th>Nome</th><th class="r">Mensal</th><th class="r">Crescimento</th><th class="r">Anual</th><th></th></tr></thead>
            <tbody>${incRows || '<tr><td colspan="6" class="muted" style="text-align:center;padding:14px">Nenhuma receita</td></tr>'}</tbody>
          </table>
        </div>
      </div>
      <div class="card">
        <div class="flex-between mb-12">
          <div class="card-title" style="margin-bottom:0">Despesas</div>
          <button class="btn btn-primary btn-sm" onclick="openAddCF('exp')">+ Despesa</button>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th></th><th>Nome</th><th class="r">Mensal</th><th class="r">Crescimento</th><th class="r">Anual</th><th></th></tr></thead>
            <tbody>${expRows || '<tr><td colspan="6" class="muted" style="text-align:center;padding:14px">Nenhuma despesa</td></tr>'}</tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">Projeção de Caixa — Próximos 24 Meses</div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Mês</th><th class="r">Receita</th><th class="r">Gastos</th><th class="r">Poupança</th><th class="r">Taxa</th></tr></thead>
          <tbody>${projRows.join('')}</tbody>
        </table>
      </div>
    </div>
  `;
}

function toggleCF(type, id, val) {
  const arr = type==='inc' ? S.incomes : S.expenses;
  const item = arr.find(x=>x.id===id);
  if (item) { item.active = val; saveState(); renderCashflow(); }
}
function openAddCF(type) { openModal(type==='inc'?'Adicionar Receita':'Adicionar Despesa', cfForm(type)); }
function openEditCF(type, id) {
  const arr = type==='inc' ? S.incomes : S.expenses;
  const item = arr.find(x=>x.id===id);
  if (item) openModal(type==='inc'?'Editar Receita':'Editar Despesa', cfForm(type, item));
}
function cfForm(type, item={}) {
  return `
    <div class="form-group">
      <label class="form-label">Nome</label>
      <input class="form-input" id="cf-name" value="${item.name||''}">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Valor Mensal (R$)</label>
        <input class="form-input" id="cf-amount" type="number" value="${item.amount||0}" min="0">
      </div>
      <div class="form-group">
        <label class="form-label">Crescimento real (% a.a. acima da inflação)</label>
        <input class="form-input" id="cf-growth" type="number" value="${item.growthRate||0}" step="0.1">
        <div class="form-hint">${type==='inc'?'0 = sobe só com a inflação. Use &gt;0 só se esperar aumento acima dela (ex: promoção).':'0 = sobe só com a inflação. Use &gt;0 se esperar encarecer acima dela.'}</div>
      </div>
    </div>
    ${type==='inc' ? `<div class="form-group">
      <label style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text);cursor:pointer">
        <input type="checkbox" id="cf-work" ${item.work !== false ? 'checked' : ''}>
        Cessa na aposentadoria
      </label>
      <div class="form-hint">Marque para renda do trabalho (salário). Desmarque para renda passiva que continua na aposentadoria (aluguel, pensão).</div>
    </div>` : ''}
    <div class="form-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveCF('${type}','${item.id||''}')">Salvar</button>
    </div>
  `;
}
function saveCF(type, id) {
  const obj = {
    name:       document.getElementById('cf-name').value.trim(),
    amount:     parseFloat(document.getElementById('cf-amount').value)||0,
    growthRate: parseFloat(document.getElementById('cf-growth').value)||0,
    active:     true,
  };
  if (type === 'inc') obj.work = document.getElementById('cf-work')?.checked !== false;
  if (!obj.name) return;
  const arr = type==='inc' ? S.incomes : S.expenses;
  if (id) { Object.assign(arr.find(x=>x.id===id), obj); }
  else { arr.push({ id:uid(), ...obj }); }
  saveState(); closeModal(); renderCashflow();
}
function removeCF(type, id) {
  if (type==='inc') S.incomes  = S.incomes.filter(x=>x.id!==id);
  else              S.expenses = S.expenses.filter(x=>x.id!==id);
  saveState(); renderCashflow();
}

// ── 12. PREMISSAS ─────────────────────────────────────────
function _buildParamsHTML() {
  const A   = S.assumptions;
  const totalInc = S.incomes.filter(i=>i.active).reduce((s,i)=>s+i.amount,0);
  const totalExp = S.expenses.filter(e=>e.active).reduce((s,e)=>s+e.amount,0);

  const pSlider = (id, label, val, min, max, step, fmtFn) => `
    <div class="slider-group">
      <div class="slider-label-row">
        <span class="slider-lbl">${label}</span>
        <span class="slider-val" id="pv-${id}">${fmtFn(val)}</span>
      </div>
      <input type="range" class="sc-slider" min="${min}" max="${max}" step="${step}"
        value="${val}" data-key="${id}"
        oninput="assSliderInput(this)" onchange="assSliderCommit()">
    </div>`;

  const fmtPctAA  = v => (v>=0?'+':'')+v.toFixed(1)+'% a.a.';
  const fmtPctPos = v => v.toFixed(1)+'% a.a.';
  const fmtAnos   = v => v+' anos';
  const fmtAno    = v => String(v);
  const fmtMes    = v => 'R$ '+Math.round(v).toLocaleString('pt-BR')+'/mês';

  const retClasses = [
    { cat:'rf',    name:'Renda Fixa / CDI',    min:5,  max:25, step:0.5 },
    { cat:'rv',    name:'Ações / RV',           min:5,  max:30, step:0.5 },
    { cat:'fii',   name:'FIIs',                min:5,  max:20, step:0.5 },
    { cat:'cash',  name:'Caixa / RF Curto',    min:5,  max:20, step:0.5 },
    { cat:'intl',  name:'Internacional',        min:5,  max:30, step:0.5 },
    { cat:'prev',  name:'Previdência',          min:5,  max:20, step:0.5 },
    { cat:'imovel',name:'Imóveis',              min:3,  max:15, step:0.5 },
    { cat:'outro', name:'Outro',                min:0,  max:30, step:0.5 },
  ];

  const retSliders = retClasses.map(c => {
    const val = S.portfolio.find(a=>a.cat===c.cat)?.ret ?? getDefaultReturn(c.cat);
    return `
      <div class="slider-group">
        <div class="slider-label-row">
          <span class="slider-lbl">${c.name}</span>
          <span class="slider-val" id="rv-${c.cat}">${val.toFixed(1)}% a.a.</span>
        </div>
        <input type="range" class="sc-slider" min="${c.min}" max="${c.max}" step="${c.step}"
          value="${val}" data-cat="${c.cat}"
          oninput="assClassSliderInput(this)" onchange="assSliderCommit()">
      </div>`;
  }).join('');

  return `
    <div class="param-layout">
      <div class="param-panel">
        <div class="param-section-title">RENDA &amp; GASTOS</div>
        <div class="slider-group">
          <div class="slider-label-row">
            <span class="slider-lbl">Receita mensal inicial</span>
            <span class="slider-val green" id="pv-totalInc">${fmtMes(totalInc)}</span>
          </div>
          <input type="range" class="sc-slider" min="0" max="150000" step="500"
            value="${totalInc}" oninput="assIncSliderInput(this)" onchange="assIncSliderCommit(this)">
        </div>
        ${pSlider('incomeGrowth','Crescimento anual receita', A.incomeGrowth, -5, 15, 0.5, fmtPctAA)}
        <div class="slider-group" style="margin-top:8px">
          <div class="slider-label-row">
            <span class="slider-lbl">Gastos mensais iniciais</span>
            <span class="slider-val red" id="pv-totalExp">${fmtMes(totalExp)}</span>
          </div>
          <input type="range" class="sc-slider" min="0" max="80000" step="500"
            value="${totalExp}" oninput="assExpSliderInput(this)" onchange="assExpSliderCommit(this)">
        </div>
        ${pSlider('expenseGrowth','Crescimento anual gastos', A.expenseGrowth, -5, 15, 0.5, fmtPctAA)}
      </div>
      <div class="param-panel">
        <div class="param-section-title">PROJEÇÃO &amp; PERFIL</div>
        ${pSlider('projectionYears','Horizonte de projeção', A.projectionYears, 5, 40, 1, fmtAnos)}
        ${pSlider('birthYear','Ano de nascimento', S.profile.birthYear, 1960, 2000, 1, fmtAno)}
        ${pSlider('retirementAge','Aposentadoria (renda do trabalho cessa)', A.retirementAge, 40, 80, 1, v => 'aos '+v+' anos')}
        <div class="slider-group" style="margin-top:2px">
          <label style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text);cursor:pointer">
            <input type="checkbox" id="pv-retireAtFI" ${A.retireAtFI ? 'checked' : ''} onchange="assToggleRetireFI(this)">
            Aposentar ao atingir a FI
          </label>
          <div class="form-hint" style="margin-top:4px">A renda do trabalho cessa quando o patrimônio cruza a meta de FI — o que vier antes da idade acima. A curva para de subir nesse ponto.</div>
        </div>
        ${pSlider('incomeGrowthCapYears','Teto de crescimento da renda', A.incomeGrowthCapYears, 0, 40, 1, v => v>0 ? v+' anos' : 'sem limite')}
        <div class="param-section-title" style="margin-top:20px">MACRO</div>
        ${pSlider('selic','SELIC', A.selic, 5, 25, 0.5, fmtPctPos)}
        ${pSlider('ipca','IPCA',  A.ipca,  2, 20, 0.5, fmtPctPos)}
        ${pSlider('cdi', 'CDI',   A.cdi,   5, 25, 0.5, fmtPctPos)}
      </div>
    </div>
    <div class="param-panel-full" style="margin-top:12px">
      <div class="param-section-title">RETORNO ESPERADO POR CLASSE DE ATIVO</div>
      <div class="ret-slider-grid">${retSliders}</div>
    </div>`;
}

function renderAssumptions() {
  const el = document.getElementById('page-assumptions');
  el.innerHTML = `
    <div class="page-header">
      <div><div class="page-title">Premissas</div></div>
    </div>
    ${_buildParamsHTML()}`;
}

function assSliderInput(el) {
  const key = el.dataset.key;
  const val = +el.value;
  const span = document.getElementById('pv-' + key);
  if (span) {
    if (key === 'projectionYears') span.textContent = val + ' anos';
    else if (key === 'birthYear')  span.textContent = String(val);
    else if (key === 'retirementAge') span.textContent = 'aos ' + val + ' anos';
    else if (key === 'incomeGrowthCapYears') span.textContent = val > 0 ? val + ' anos' : 'sem limite';
    else span.textContent = (val >= 0 ? '+' : '') + val.toFixed(1) + '% a.a.';
  }
  if (key === 'birthYear') { S.assumptions.birthYear = val; S.profile.birthYear = val; }
  else if (key in S.assumptions) S.assumptions[key] = val;
}

function assIncSliderInput(el) {
  const val = +el.value;
  const span = document.getElementById('pv-totalInc');
  if (span) span.textContent = 'R$ ' + Math.round(val).toLocaleString('pt-BR') + '/mês';
}
function assIncSliderCommit(el) {
  const newTotal = +el.value;
  const active = S.incomes.filter(i => i.active);
  const oldTotal = active.reduce((s,i) => s + i.amount, 0);
  if (oldTotal > 0) {
    const scale = newTotal / oldTotal;
    active.forEach(i => { i.amount = Math.round(i.amount * scale); });
  } else if (active.length > 0) {
    active[0].amount = newTotal;
  }
  saveState();
}

function assExpSliderInput(el) {
  const val = +el.value;
  const span = document.getElementById('pv-totalExp');
  if (span) span.textContent = 'R$ ' + Math.round(val).toLocaleString('pt-BR') + '/mês';
}
function assExpSliderCommit(el) {
  const newTotal = +el.value;
  const active = S.expenses.filter(e => e.active);
  const oldTotal = active.reduce((s,e) => s + e.amount, 0);
  if (oldTotal > 0) {
    const scale = newTotal / oldTotal;
    active.forEach(e => { e.amount = Math.round(e.amount * scale); });
  } else if (active.length > 0) {
    active[0].amount = newTotal;
  }
  saveState();
}

function assClassSliderInput(el) {
  const cat = el.dataset.cat;
  const val = +el.value;
  const span = document.getElementById('rv-' + cat);
  if (span) span.textContent = val.toFixed(1) + '% a.a.';
  S.portfolio.filter(a => a.cat === cat).forEach(a => { a.ret = val; });
}

function assToggleRetireFI(el) {
  S.assumptions.retireAtFI = el.checked;
  assSliderCommit();
}

function assSliderCommit() {
  saveState();
  if (document.getElementById('page-scenarios')?.classList.contains('active')) {
    const months = S.assumptions.projectionYears * 12;
    const scPaths = buildScenarioPaths(months);
    _renderScCards(scPaths);
    _renderScChart(months, scPaths);
    _renderScTable(months, scPaths);
    const activeTab = document.querySelector('.sc-tab.active');
    const activeId = activeTab ? activeTab.dataset.sc : 'base';
    _renderScDetailTabs(scPaths, activeId);
    _renderScDetailTable(activeId, scPaths);
  }
}

function renderReturnRows() {
  const classes = [
    { cat:'rf',    name:'Renda Fixa',     ref:'CDI / IPCA+' },
    { cat:'rv',    name:'Ações / RV',     ref:'Ibovespa / Dividendos' },
    { cat:'fii',   name:'FIIs',           ref:'Dividend yield + valorização' },
    { cat:'intl',  name:'Internacional',  ref:'S&P500 BRL / ETFs' },
    { cat:'cash',  name:'Caixa / RF Curto',ref:'CDI' },
    { cat:'prev',  name:'Previdência',    ref:'RF + prêmio' },
    { cat:'imovel',name:'Imóveis',        ref:'Aluguel + IGPM' },
    { cat:'outro', name:'Outro',          ref:'—' },
  ];
  return classes.map(c => {
    const asset = S.portfolio.find(a=>a.cat===c.cat);
    const val = asset?.ret ?? getDefaultReturn(c.cat);
    return `
      <tr>
        <td class="bold">${c.cat.toUpperCase()}</td>
        <td>${c.name}</td>
        <td class="r"><input type="number" id="ret-${c.cat}" value="${val}" step="0.1" min="0" max="50" onchange="updateClassReturn('${c.cat}',this.value)"></td>
        <td class="muted text-sm">${c.ref}</td>
      </tr>
    `;
  }).join('');
}

function getDefaultReturn(cat) {
  const d = {rf:13,rv:12,fii:10,intl:15,cash:13.5,prev:10.5,imovel:8,outro:10};
  return d[cat]||10;
}
function updateClassReturn(cat, val) {
  S.portfolio.filter(a=>a.cat===cat).forEach(a=>{ a.ret = parseFloat(val)||0; });
  saveState();
}
function saveAssumptions() {
  const keys = ['selic','cdi','ipca','projectionYears','incomeGrowth','expenseGrowth','birthYear'];
  keys.forEach(k => {
    const el = document.getElementById('ass-'+k);
    if (el) S.assumptions[k] = parseFloat(el.value)||0;
  });
  S.profile.birthYear = S.assumptions.birthYear;
  S.scenarios.forEach(sc => {
    const r = document.getElementById('sc-ret-'+sc.id);
    const i = document.getElementById('sc-inc-'+sc.id);
    const e = document.getElementById('sc-exp-'+sc.id);
    if (r) sc.retDelta = parseFloat(r.value)||0;
    if (i) sc.incDelta = parseFloat(i.value)||0;
    if (e) sc.expDelta = parseFloat(e.value)||0;
  });
  saveState();
  renderAssumptions();
  showToast('Premissas salvas!');
}

// ── 12b. ANÁLISE DE GASTOS (MOBILLS) ──────────────────────

const SECAO_MAP = {
  // Alimentação
  'Mercado':'Alimentação','Lanches':'Alimentação','Almoço':'Alimentação','Almoco':'Alimentação','Janta':'Alimentação',
  // Casa
  'Internet':'Casa','Celesc':'Casa','Aluguel':'Casa','Condomínio':'Casa','Condominio':'Casa',
  'Petit/Eevee':'Casa','Outros Casa':'Casa','(-) AP':'Casa',
  // Família
  'Roupa':'Família','Brinquedos':'Família','Remedios':'Família','Remédios':'Família','Outros Familia':'Família',
  // Life / Educação
  'Education':'Life',
  // Lazer
  'Amusing':'Lazer','Mampituba':'Lazer','Cerveja':'Lazer','Bar':'Lazer','Outros lazer':'Lazer','Show/teatro/festa':'Lazer',
  // Transporte
  'Bus':'Transporte','Uber':'Transporte','Gasolina':'Transporte','Gasolina Moto':'Transporte',
  'Estacionamento e Outros':'Transporte','Carona':'Transporte',
  // Compras
  'Outros Compras':'Compras','Roupas':'Compras','Tenis':'Compras','Presente':'Compras',
  // Não Recorrentes (gastos eventuais, fora do consumo do mês)
  '(-) Outros':'Não Recorrentes',
  // GF
  'Bar GF':'GF','Festa GF':'GF','Sushi GF':'GF','Mercado GF':'GF','Bebida GF':'GF',
  'Janta GF':'GF','Presente GF':'GF','Almoço GF':'GF','Almoco GF':'GF','Outros GF':'GF',
  // Higiene
  'Desodorante':'Higiene','Sabonete':'Higiene','Gillete':'Higiene','Pasta de Dente':'Higiene',
  'Shampoo':'Higiene','Cabelereiro':'Higiene','Cotonete':'Higiene',
  'Sabao/Amaciante/Sabonete Liquido':'Higiene','Natura':'Higiene','Escova de dente':'Higiene',
  'Enxaguante Bucal':'Higiene','Desodorante Pe':'Higiene','Protetor Solar':'Higiene',
  // Saúde
  'Academia/Tenis':'Saúde','Vitaminas':'Saúde','Medico':'Saúde','Médico':'Saúde',
  'Unimed':'Saúde','Dentista':'Saúde',
  // Moto
  'IPVA':'Moto','Seguro Detran':'Moto','Manutencao':'Moto','Manutenção':'Moto',
  // Carro
  'Detran':'Carro','Multas':'Carro','Seguro':'Carro',
  // Taxes
  'Contabilidade':'Taxes','INSS/MEI':'Taxes','DAS/DARF':'Taxes',
  // Medicamentos
  'Medicamentos':'Medicamentos',
  // Celular
  'Celular':'Celular',
  // Financeiro
  'Tarifas Bancarias':'Financeiro','Manutencao Conta':'Financeiro',
  // Viagens
  'Passagens':'Viagens','Seguro Viagens':'Viagens','Hospedagem':'Viagens','Outros (Viagens)':'Viagens',
};
const SECAO_ORDER = [
  'Alimentação','Casa','Família','Life','Lazer','Transporte','Compras',
  'GF','Higiene','Saúde','Carro','Moto','Taxes','Não Recorrentes',
  'Medicamentos','Celular','Financeiro','Viagens','Outros',
];
function sortSecoes(entries) {
  return entries.slice().sort((a, b) => {
    const ia = SECAO_ORDER.indexOf(a[0]);
    const ib = SECAO_ORDER.indexOf(b[0]);
    if (ia === -1 && ib === -1) return 0;
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });
}

const SECAO_COLORS = {
  'Alimentação':'#f87171','Casa':'#4f8ef7','Família':'#ec4899','Life':'#06b6d4',
  'Lazer':'#38bdf8','Transporte':'#e879f9','Compras':'#f97316','GF':'#ff6b9d',
  'Higiene':'#a78bfa','Saúde':'#22c55e','Moto':'#94a3b8','Carro':'#64748b',
  'Taxes':'#fbbf24','Medicamentos':'#34d399','Celular':'#818cf8','Financeiro':'#fb923c',
  'Viagens':'#2dd4bf','Não Recorrentes':'#a16207','Outros':'#475569',
};

function getSecao(natureza) { return SECAO_MAP[natureza] || 'Outros'; }

function detectInsights(bySecMonthMap, secNames, months, byMonthMap) {
  const insights = [];
  const now = new Date();
  const curKey = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');
  const last3m = Array.from({length: 3}, (_, i) => addMonths(curKey, i - 2));
  const last6m = Array.from({length: 6}, (_, i) => addMonths(curKey, i - 5));
  const lastMonth = curKey;
  const prevMonth = addMonths(curKey, -1);

  secNames.forEach(sec => {
    const vals6 = last6m.map(m => bySecMonthMap[sec + '|' + m] || 0);
    const avg6 = vals6.reduce((a, b) => a + b, 0) / Math.max(1, vals6.length);
    const lastVal = bySecMonthMap[sec + '|' + lastMonth] || 0;

    if (avg6 > 0 && lastVal > avg6 * 1.4) {
      insights.push({ type: 'spike', severity: 'red', sec,
        text: `${sec} gastou ${fmt(lastVal)} em ${monthLabel(lastMonth)} — ${fmtPct((lastVal / avg6 - 1) * 100)} acima da média de 6 meses (${fmt(avg6)})` });
    }

    const vals3 = last3m.map(m => bySecMonthMap[sec + '|' + m] || 0).filter(v => v > 0);
    if (vals3.length >= 3) {
      const rising = vals3[2] > vals3[1] && vals3[1] > vals3[0];
      const pctChange = vals3[0] > 0 ? ((vals3[2] - vals3[0]) / vals3[0] * 100) : 0;
      if (rising && pctChange > 15) {
        insights.push({ type: 'trend_up', severity: 'yellow', sec,
          text: `${sec} subindo há 3 meses consecutivos (+${fmtPct(pctChange)} no período)` });
      }
      const falling = vals3[2] < vals3[1] && vals3[1] < vals3[0];
      const pctDrop = vals3[0] > 0 ? ((vals3[0] - vals3[2]) / vals3[0] * 100) : 0;
      if (falling && pctDrop > 15) {
        insights.push({ type: 'trend_down', severity: 'green', sec,
          text: `${sec} caindo há 3 meses consecutivos (-${fmtPct(pctDrop)} no período)` });
      }
    }
  });

  const totalLast = byMonthMap[lastMonth] || 0;
  const totalPrev = byMonthMap[prevMonth] || 0;
  if (totalPrev > 0 && totalLast > totalPrev * 1.2) {
    insights.push({ type: 'total_spike', severity: 'red', sec: 'Total',
      text: `Gasto total subiu ${fmtPct((totalLast / totalPrev - 1) * 100)} de ${monthLabel(prevMonth)} para ${monthLabel(lastMonth)}` });
  }

  // Pacing insight removed — dedicated pacing card in renderExpenses handles this with fixed/variable split

  insights.sort((a, b) => {
    const sev = { red: 0, yellow: 1, green: 2 };
    return (sev[a.severity] || 1) - (sev[b.severity] || 1);
  });
  return insights;
}

function calcAutoBudgets(bySecMonthMap, secNames, months) {
  const last3m = months.slice(-3);
  if (!last3m.length) return {};
  const auto = {};
  secNames.forEach(sec => {
    const vals = last3m.map(m => bySecMonthMap[sec + '|' + m] || 0).filter(v => v > 0);
    if (vals.length) {
      auto[sec] = Math.round(vals.reduce((a, b) => a + b, 0) / vals.length / 50) * 50;
    }
  });
  return auto;
}

function getEffectiveBudgets(bySecMonthMap, secNames, months) {
  const manual = S.budgets || {};
  if (Object.keys(manual).length > 0) return { budgets: manual, isAuto: false };
  return { budgets: calcAutoBudgets(bySecMonthMap, secNames, months), isAuto: true };
}

function openBudgetModal() {
  const secNames = Object.keys(SECAO_COLORS);
  const manual = S.budgets || {};
  const hasManual = Object.keys(manual).length > 0;

  let autoBudgets = {};
  if (!hasManual && MOBILLS.length) {
    const bySecMonthMap = {};
    MOBILLS.forEach(r => {
      const sec = getSecao(r.cat || 'Sem categoria');
      const key = sec + '|' + r.d;
      bySecMonthMap[key] = (bySecMonthMap[key] || 0) + Math.abs(r.val);
    });
    const allMonths = [...new Set(MOBILLS.map(r => r.d))].sort();
    autoBudgets = calcAutoBudgets(bySecMonthMap, secNames, allMonths);
  }

  const effective = hasManual ? manual : autoBudgets;

  const rows = secNames.map(sec => {
    const val = effective[sec] || '';
    const color = SECAO_COLORS[sec] || '#475569';
    return `<div class="form-group" style="margin-bottom:8px">
      <div style="display:flex;align-items:center;gap:8px">
        <span class="color-dot" style="background:${color}"></span>
        <label style="flex:1;font-size:13px;font-weight:600;color:var(--text)">${sec}</label>
        <input type="number" class="form-input budget-input" data-sec="${sec}" value="${val}" placeholder="Sem limite" style="width:140px;text-align:right">
      </div>
    </div>`;
  }).join('');

  const hint = !hasManual
    ? '<p style="font-size:11px;color:var(--yellow);margin-bottom:12px">Valores sugeridos com base na média dos últimos 3 meses. Ajuste e salve para personalizar.</p>'
    : '';

  openModal('Orçamento Mensal por Seção', `
    <p style="font-size:12px;color:var(--text-muted);margin-bottom:8px">Defina um limite mensal para cada seção. Deixe em branco para não rastrear.</p>
    ${hint}
    ${rows}
    <div class="form-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveBudgets()">Salvar</button>
    </div>
  `);
}

function saveBudgets() {
  if (!S.budgets) S.budgets = {};
  document.querySelectorAll('.budget-input').forEach(inp => {
    const sec = inp.dataset.sec;
    const val = parseFloat(inp.value);
    if (val > 0) S.budgets[sec] = val;
    else delete S.budgets[sec];
  });
  saveState();
  closeModal();
  renderExpenses();
  showToast('Orçamentos salvos!');
}

function toggleExpSection(secId) {
  const el = document.getElementById('exp-detail-' + secId);
  const arrow = document.getElementById('exp-arrow-' + secId);
  if (!el) return;
  const hidden = el.style.display === 'none';
  el.style.display = hidden ? 'block' : 'none';
  if (arrow) arrow.textContent = hidden ? '▾' : '▸';
  if (hidden) {
    const chartId = 'ch-sec-' + secId;
    const ctx = document.getElementById(chartId);
    if (ctx && !activeCharts['sec_' + secId]) {
      const dataset = JSON.parse(ctx.dataset.values || '{}');
      if (dataset.labels) {
        activeCharts['sec_' + secId] = new Chart(ctx, {
          type: 'line',
          data: {
            labels: dataset.labels,
            datasets: [{
              label: dataset.secName || secId,
              data: dataset.data,
              borderColor: dataset.color || '#4f8ef7',
              backgroundColor: (dataset.color || '#4f8ef7') + '20',
              tension: .4, pointRadius: 3, borderWidth: 2, fill: true,
            }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${fmt(c.parsed.y)}` } } },
            scales: {
              x: { grid: { color: '#1e2d4230' }, ticks: { color: '#8ca3c1', font: { size: 10 } } },
              y: { grid: { color: '#1e2d4250' }, ticks: { color: '#8ca3c1', font: { size: 10 }, callback: v => fmtK(v) },
                beginAtZero: true }
            }
          }
        });
      }
    }
  }
}

let expFilter = { period: '6m', section: '' };

function togglePacingCat(cat, currentType) {
  if (!S.pacingOverrides) S.pacingOverrides = {};
  S.pacingOverrides[cat] = currentType === 'fixed' ? 'variable' : 'fixed';
  saveState();
  destroyCharts();
  renderExpenses();
}

function setExpFilter(key, val) {
  expFilter[key] = val;
  destroyCharts();
  renderExpenses();
}

function renderExpenses() {
  const el = document.getElementById('page-expenses');

  if (!MOBILLS.length) {
    el.innerHTML = `
      <div class="page-header"><div>
        <div class="page-title">Análise de Gastos</div>
        <div class="page-subtitle">Dados detalhados dos seus lançamentos</div>
      </div></div>
      <div class="card" style="padding:40px;text-align:center;color:var(--text-muted)">
        <p style="font-size:16px;margin-bottom:8px">Nenhum dado do Mobills encontrado.</p>
        <p style="font-size:13px">Clique em <strong>Sync Sheets</strong> para importar os dados da planilha.</p>
      </div>`;
    return;
  }

  const byNatMap = {}, bySecMap = {}, byMonthMap = {};
  const byNatMonthMap = {}, bySecMonthMap = {};
  let totalGastos = 0;

  MOBILLS.forEach(r => {
    const v = Math.abs(r.val);
    const nat = r.cat || 'Sem categoria';
    const sec = getSecao(nat);
    byNatMap[nat] = (byNatMap[nat] || 0) + v;
    bySecMap[sec] = (bySecMap[sec] || 0) + v;
    byMonthMap[r.d] = (byMonthMap[r.d] || 0) + v;
    byNatMonthMap[nat + '|' + r.d] = (byNatMonthMap[nat + '|' + r.d] || 0) + v;
    bySecMonthMap[sec + '|' + r.d] = (bySecMonthMap[sec + '|' + r.d] || 0) + v;
    totalGastos += v;
  });

  const months = Object.keys(byMonthMap).sort();
  const numMonths = months.length;
  const avgMensal = totalGastos / Math.max(1, numMonths);
  const secEntries = sortSecoes(Object.entries(bySecMap));
  const secNames = secEntries.map(e => e[0]);

  const now = new Date();
  const curMonthKey = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');
  const lastMonth = curMonthKey;
  const prevMonth = addMonths(curMonthKey, -1);
  const lastVal = byMonthMap[lastMonth] || 0;
  const prevVal = byMonthMap[prevMonth] || 0;
  const deltaPct = prevVal > 0 ? ((lastVal - prevVal) / prevVal * 100) : 0;
  const prev5m = Array.from({length: 5}, (_, i) => addMonths(curMonthKey, i - 5));
  const prev5withData = prev5m.filter(m => (byMonthMap[m] || 0) > 0);
  const avg6m = prev5withData.length > 0 ? prev5withData.reduce((s, m) => s + (byMonthMap[m] || 0), 0) / prev5withData.length : 0;
  const deltaVsAvg6 = avg6m > 0 ? (lastVal / avg6m - 1) * 100 : null;

  const prd = expFilter.period;
  let periodN = 6;
  if (prd === '3m') periodN = 3;
  else if (prd === '6m') periodN = 6;
  else if (prd === '12m') periodN = 12;
  else if (prd === 'ytd') periodN = now.getMonth() + 1;
  else if (prd === 'all') periodN = Math.max(months.length, 6);

  const last6m = Array.from({length: periodN}, (_, i) => addMonths(curMonthKey, i - periodN + 1));
  const chartMonths = Array.from({length: periodN}, (_, i) => addMonths(curMonthKey, i - periodN + 1));
  const last12m = chartMonths;
  const filteredSec = expFilter.section;

  const periodTotal = last6m.reduce((s, m) => s + (byMonthMap[m] || 0), 0);
  const periodMonthsWithData = last6m.filter(m => byMonthMap[m] > 0).length;
  const periodAvg = periodTotal / Math.max(1, periodMonthsWithData);

  const { budgets, isAuto: budgetsAuto } = getEffectiveBudgets(bySecMonthMap, secNames, months);
  const hasBudgets = Object.keys(budgets).length > 0;

  const totalBudget = Object.values(budgets).reduce((s, v) => s + v, 0);
  const budgetUsedPct = hasBudgets && totalBudget > 0 ? (lastVal / totalBudget * 100) : 0;

  const natsBySecao = {};
  Object.keys(byNatMap).forEach(nat => {
    const sec = getSecao(nat);
    if (!natsBySecao[sec]) natsBySecao[sec] = [];
    natsBySecao[sec].push(nat);
  });
  Object.values(natsBySecao).forEach(arr => arr.sort((a, b) => (byNatMap[b] || 0) - (byNatMap[a] || 0)));

  const insights = detectInsights(bySecMonthMap, secNames, months, byMonthMap);

  // ── KPIs ──
  let kpi4 = '';
  if (hasBudgets && totalBudget > 0) {
    const budgetColor = budgetUsedPct > 100 ? 'var(--red)' : budgetUsedPct > 85 ? 'var(--yellow)' : 'var(--green)';
    kpi4 = `<div class="kpi">
      <div class="kpi-label">Orçamento ${monthLabel(lastMonth)}</div>
      <div class="kpi-value" style="color:${budgetColor}">${fmtPct(budgetUsedPct)}</div>
      <div class="kpi-sub">${fmt(lastVal)} de ${fmt(totalBudget)}</div>
    </div>`;
  } else {
    kpi4 = `<div class="kpi">
      <div class="kpi-label">Maior Seção</div>
      <div class="kpi-value" style="color:${SECAO_COLORS[secNames[0]] || 'var(--text)'}">${secNames[0]}</div>
      <div class="kpi-sub">${fmtPct(secEntries[0][1] / totalGastos * 100)} do total</div>
    </div>`;
  }

  // ── YoY + Quarter comparison ──
  const yoyMonth = addMonths(curMonthKey, -12);
  const yoyVal = byMonthMap[yoyMonth] || 0;
  const yoyDelta = yoyVal > 0 ? ((lastVal - yoyVal) / yoyVal * 100) : 0;
  const curQ = Math.floor(now.getMonth() / 3);
  const curQMonths = Array.from({length: 3}, (_, i) => now.getFullYear() + '-' + String(curQ * 3 + i + 1).padStart(2, '0'));
  const prevQStart = curQ === 0 ? (now.getFullYear() - 1) + '-10' : now.getFullYear() + '-' + String((curQ - 1) * 3 + 1).padStart(2, '0');
  const prevQMonths = Array.from({length: 3}, (_, i) => addMonths(prevQStart, i));
  const curQTotal = curQMonths.reduce((s, m) => s + (byMonthMap[m] || 0), 0);
  const prevQTotal = prevQMonths.reduce((s, m) => s + (byMonthMap[m] || 0), 0);
  const qDelta = prevQTotal > 0 ? ((curQTotal - prevQTotal) / prevQTotal * 100) : 0;
  const qNames = ['Q1','Q2','Q3','Q4'];

  let comparisonHtml = '';
  if (yoyVal > 0 || prevQTotal > 0) {
    const yoyCls = yoyDelta <= 0 ? 'badge-up' : 'badge-down';
    const qCls = qDelta <= 0 ? 'badge-up' : 'badge-down';
    comparisonHtml = `<div class="grid-2 mb-16">
      ${yoyVal > 0 ? `<div class="card"><div class="card-title">Ano a Ano — ${monthLabel(lastMonth)}</div>
        <div style="display:flex;align-items:baseline;gap:12px">
          <span style="font-size:18px;font-weight:700">${fmt(lastVal)}</span>
          <span class="${yoyCls}" style="font-size:13px">${yoyDelta > 0 ? '↑' : '↓'} ${yoyDelta > 0 ? '+' : ''}${fmtPct(yoyDelta)}</span>
        </div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:4px">vs ${fmt(yoyVal)} em ${monthLabel(yoyMonth)}</div>
      </div>` : '<div></div>'}
      ${prevQTotal > 0 ? `<div class="card"><div class="card-title">${qNames[curQ]} vs ${qNames[curQ > 0 ? curQ - 1 : 3]} ${curQ === 0 ? now.getFullYear() - 1 : now.getFullYear()}</div>
        <div style="display:flex;align-items:baseline;gap:12px">
          <span style="font-size:18px;font-weight:700">${fmt(curQTotal)}</span>
          <span class="${qCls}" style="font-size:13px">${qDelta > 0 ? '↑' : '↓'} ${qDelta > 0 ? '+' : ''}${fmtPct(qDelta)}</span>
        </div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:4px">vs ${fmt(prevQTotal)} no trimestre anterior</div>
      </div>` : '<div></div>'}
    </div>`;
  }

  // ── Pacing card (fixed vs variable) ──
  const dayOfMonth = now.getDate();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const prev3m = Array.from({length: 3}, (_, i) => addMonths(curMonthKey, i - 3));
  const prev3avg = prev3m.reduce((s, m) => s + (byMonthMap[m] || 0), 0) / 3;

  // All known categories from the spreadsheet structure
  const allKnownCats = Object.keys(SECAO_MAP);
  const last4m = Array.from({length: 4}, (_, i) => addMonths(curMonthKey, i - 4));

  // Auto-detect recurring: appear in 3+ of last 4 months with consistent amounts
  const autoRecurring = new Set();
  allKnownCats.forEach(nat => {
    const vals = last4m.map(m => byNatMonthMap[nat + '|' + m] || 0).filter(v => v > 0);
    if (vals.length >= 3) {
      const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
      const maxDev = Math.max(...vals.map(v => Math.abs(v - avg)));
      if (avg > 0 && maxDev / avg < 0.35) autoRecurring.add(nat);
    }
  });

  // Apply manual overrides
  const overrides = S.pacingOverrides || {};
  const isFixed = (cat) => {
    if (overrides[cat] === 'fixed') return true;
    if (overrides[cat] === 'variable') return false;
    return autoRecurring.has(cat);
  };

  // Split current month items into fixed/variable
  const curMonthItems = MOBILLS.filter(r => r.d === curMonthKey);
  const curMonthCats = new Set(curMonthItems.map(r => r.cat));
  let fixedPaid = 0, variablePaid = 0;
  const fixedPaidList = [], variablePaidList = [];
  curMonthItems.forEach(r => {
    const v = Math.abs(r.val);
    if (isFixed(r.cat)) { fixedPaid += v; fixedPaidList.push({ cat: r.cat, val: v }); }
    else { variablePaid += v; variablePaidList.push({ cat: r.cat, val: v }); }
  });

  // Build complete lists with pending items (categories not yet seen this month)
  const fixedPendingList = [], variablePendingList = [];
  let fixedPending = 0, variablePendingEst = 0;
  allKnownCats.forEach(nat => {
    if (curMonthCats.has(nat)) return;
    const recentVals = last4m.map(m => byNatMonthMap[nat + '|' + m] || 0).filter(v => v > 0);
    if (!recentVals.length) return;
    const est = recentVals.reduce((a, b) => a + b, 0) / recentVals.length;
    if (isFixed(nat)) {
      fixedPending += est;
      fixedPendingList.push({ cat: nat, val: est });
    } else {
      variablePendingEst += est;
      variablePendingList.push({ cat: nat, val: est });
    }
  });

  // Project variable: use avg of last 3 months per category (not linear extrapolation)
  const prev3mForCat = Array.from({length: 3}, (_, i) => addMonths(curMonthKey, i - 3));
  const varCatProjections = {};
  let variableProjected = 0;

  // For variable categories WITH spending this month: project = max(paid, avg3m)
  const varPaidCats = new Set(variablePaidList.map(i => i.cat));
  varPaidCats.forEach(cat => {
    const paid = variablePaidList.filter(i => i.cat === cat).reduce((s, i) => s + i.val, 0);
    const avg3 = prev3mForCat.map(m => byNatMonthMap[cat + '|' + m] || 0).filter(v => v > 0);
    const hist = avg3.length ? avg3.reduce((a, b) => a + b, 0) / avg3.length : paid;
    const proj = Math.max(paid, hist);
    varCatProjections[cat] = proj;
    variableProjected += proj;
  });

  // For variable categories WITHOUT spending this month (pending): use avg
  variablePendingList.forEach(i => {
    varCatProjections[i.cat] = i.val;
    variableProjected += i.val;
  });

  const paceTotal = fixedPaid + fixedPending + variableProjected;
  const paceVsAvg = prev3avg > 0 ? (paceTotal / prev3avg - 1) * 100 : 0;
  const paceBudgetPct = hasBudgets && totalBudget > 0 ? (paceTotal / totalBudget * 100) : 0;

  // Aggregate lists by category for display (with projections)
  const aggList = (list) => {
    const map = {};
    list.forEach(i => { map[i.cat] = (map[i.cat] || 0) + i.val; });
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  };
  const fixedPaidAgg = aggList(fixedPaidList);
  const fixedPendingAgg = aggList(fixedPendingList);
  const variablePaidAgg = aggList(variablePaidList);
  const variablePendingAgg = aggList(variablePendingList);

  let pacingHtml = '';
  if (dayOfMonth > 1 && dayOfMonth < daysInMonth - 1 && lastVal > 0) {
    const paceColor = paceBudgetPct > 110 ? 'var(--red)' : paceBudgetPct > 90 ? 'var(--yellow)' : 'var(--green)';
    const mainColor = paceVsAvg > 10 ? 'var(--red)' : paceVsAvg < -10 ? 'var(--green)' : 'var(--yellow)';
    const budgetNote = hasBudgets && totalBudget > 0
      ? `<span style="margin-left:12px;color:${paceColor};font-weight:600">${fmtPct(paceBudgetPct)} do orçamento</span>` : '';

    const catLine = (items, color, type, projMode) => items.map(([c, v]) => {
      const escaped = c.replace(/'/g, "\\'");
      const proj = varCatProjections[c];
      const projLabel = projMode === 'variable' && proj && Math.abs(proj - v) > 1
        ? ` → ${fmt(proj)}` : '';
      const tooltip = projMode === 'variable' && proj
        ? `Pago: ${fmt(v)} · Projeção (média 3m): ${fmt(proj)}. Clique para mover para fixo`
        : projMode === 'pending'
        ? `Estimativa: ${fmt(v)} (média últimos meses). Clique para mover para ${type === 'fixed' ? 'variável' : 'fixo'}`
        : `Valor pago: ${fmt(v)} (fixo, não projeta). Clique para mover para variável`;
      return `<span class="exp-pacing-chip" onclick="togglePacingCat('${escaped}','${type}')" title="${tooltip}"><span style="color:${color};font-weight:600">${c}</span> <span style="color:var(--text-dim)">${fmt(v)}${projLabel}</span></span>`;
    }).join('');

    pacingHtml = `<div class="card mb-16" style="border-left:3px solid ${mainColor}">
      <div class="flex-between">
        <div style="flex:1">
          <div style="font-size:12px;color:var(--text-muted);margin-bottom:4px">Projeção do mês (dia ${dayOfMonth}/${daysInMonth})</div>
          <div style="font-size:20px;font-weight:700">${fmt(paceTotal)}${budgetNote}</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:4px">
            Gasto até agora: ${fmt(lastVal)} · Projeção: <span style="color:${mainColor};font-weight:600">${paceVsAvg > 0 ? '+' : ''}${fmtPct(paceVsAvg)}</span> vs média 3m
          </div>
          <div style="font-size:11px;color:var(--text-dim);margin-top:2px">
            Fixos pagos: ${fmt(fixedPaid)} · Fixos pendentes: ~${fmt(fixedPending)} · Variável projetado: ~${fmt(variableProjected)}
          </div>
          <details style="margin-top:8px">
            <summary style="font-size:11px;color:var(--accent);cursor:pointer;user-select:none">Ver classificação fixo/variável · clique num item para mover</summary>
            <div style="margin-top:8px;display:grid;grid-template-columns:1fr 1fr;gap:16px;font-size:11px">
              <div style="border-right:1px solid var(--border);padding-right:16px">
                <div style="font-weight:700;color:var(--green);margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px;font-size:10px">Fixos — ${fmt(fixedPaid + fixedPending)}</div>
                ${fixedPaidAgg.length ? `<div style="margin-bottom:4px"><span style="font-size:10px;color:var(--text-dim)">Pagos</span></div><div style="display:flex;flex-wrap:wrap;gap:3px;margin-bottom:8px">${catLine(fixedPaidAgg, 'var(--green)', 'fixed', 'fixed')}</div>` : ''}
                ${fixedPendingAgg.length ? `<div style="margin-bottom:4px"><span style="font-size:10px;color:var(--text-dim)">Pendentes (estimativa)</span></div><div style="display:flex;flex-wrap:wrap;gap:3px">${catLine(fixedPendingAgg, 'var(--yellow)', 'fixed', 'pending')}</div>` : ''}
                ${!fixedPaidAgg.length && !fixedPendingAgg.length ? '<span style="color:var(--text-dim)">Nenhum</span>' : ''}
              </div>
              <div>
                <div style="font-weight:700;color:var(--accent);margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px;font-size:10px">Variáveis — projetado ${fmt(variableProjected)}</div>
                ${variablePaidAgg.length ? `<div style="margin-bottom:4px"><span style="font-size:10px;color:var(--text-dim)">Gastos até agora</span></div><div style="display:flex;flex-wrap:wrap;gap:3px;margin-bottom:8px">${catLine(variablePaidAgg, 'var(--accent)', 'variable', 'variable')}</div>` : ''}
                ${variablePendingAgg.length ? `<div style="margin-bottom:4px"><span style="font-size:10px;color:var(--text-dim)">Esperados (sem lançamento ainda)</span></div><div style="display:flex;flex-wrap:wrap;gap:3px">${catLine(variablePendingAgg, 'var(--text-dim)', 'variable', 'pending')}</div>` : ''}
              </div>
            </div>
          </details>
        </div>
        <div style="text-align:right;flex-shrink:0;margin-left:16px">
          <div class="progress-bar-wrap" style="width:120px;height:8px">
            <div class="progress-bar" style="width:${Math.min(100, dayOfMonth / daysInMonth * 100)}%;background:${mainColor}"></div>
          </div>
          <div style="font-size:10px;color:var(--text-dim);margin-top:3px">${fmtPct(dayOfMonth / daysInMonth * 100)} do mês</div>
        </div>
      </div>
    </div>`;
  }

  // ── Filter bar ──
  const periods = [['3m','3M'],['6m','6M'],['12m','12M'],['ytd','YTD'],['all','Tudo']];
  const secOptions = secNames.map(s => `<option value="${s}" ${filteredSec === s ? 'selected' : ''}>${s}</option>`).join('');
  const filterBarHtml = `<div class="flex-between mb-16" style="gap:12px;flex-wrap:wrap">
    <div class="flex gap-8" style="align-items:center">
      ${periods.map(([v, l]) => `<button class="btn ${prd === v ? 'btn-primary' : 'btn-ghost'} btn-sm" onclick="setExpFilter('period','${v}')">${l}</button>`).join('')}
    </div>
    <div class="flex gap-8" style="align-items:center">
      <select class="ctrl-select" onchange="setExpFilter('section',this.value)" style="font-size:12px">
        <option value="">Todas as seções</option>
        ${secOptions}
      </select>
    </div>
  </div>`;

  // ── Insights HTML ──
  const insightIcons = { red: '⚠', yellow: '↗', green: '✓' };
  const insightColors = { red: 'var(--red)', yellow: 'var(--yellow)', green: 'var(--green)' };
  let insightsHtml = '';
  if (insights.length) {
    insightsHtml = `<div class="card mb-16 exp-insights-card">
      <div class="card-title">Insights Automáticos</div>
      <div class="exp-insights-list">
        ${insights.map(i => `<div class="exp-insight-item" style="border-left:3px solid ${insightColors[i.severity]}">
          <span style="color:${insightColors[i.severity]};font-size:14px;flex-shrink:0">${insightIcons[i.severity]}</span>
          <span style="font-size:12px;color:var(--text)">${i.text}</span>
        </div>`).join('')}
      </div>
    </div>`;
  }

  // ── Budget bars per section ──
  let budgetBarsHtml = '';
  if (hasBudgets) {
    const budgetRows = secEntries.filter(([sec]) => budgets[sec]).map(([sec]) => {
      const limit = budgets[sec];
      const spent = bySecMonthMap[sec + '|' + lastMonth] || 0;
      const pct = Math.min(150, spent / limit * 100);
      const secColor = SECAO_COLORS[sec] || '#475569';
      const barColor = pct > 100 ? 'var(--red)' : pct > 85 ? 'var(--yellow)' : secColor;
      const overBadge = pct > 100 ? `<span style="color:var(--red);font-size:11px;font-weight:700">+${fmt(spent - limit)}</span>` : '';
      return `<div class="exp-budget-row">
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3px">
          <span style="font-size:12px;font-weight:600;color:${secColor}">${sec}</span>
          <span style="font-size:11px;color:var(--text-muted)">${fmt(spent)} / ${fmt(limit)} ${overBadge}</span>
        </div>
        <div class="progress-bar-wrap" style="height:6px">
          <div class="progress-bar" style="width:${Math.min(100, pct)}%;background:${barColor}"></div>
        </div>
      </div>`;
    });
    if (budgetRows.length) {
      const autoTag = budgetsAuto ? '<span style="font-size:10px;color:var(--yellow);font-weight:600;letter-spacing:.3px;margin-left:6px">(BASE: MÉDIA 3M)</span>' : '';
      budgetBarsHtml = `<div class="card mb-16">
        <div class="flex-between mb-8">
          <div class="card-title" style="margin-bottom:0">Orçamento vs. Real — ${monthLabel(lastMonth)} ${autoTag}</div>
          <button class="btn btn-ghost btn-sm" onclick="openBudgetModal()">Editar</button>
        </div>
        <div class="exp-budget-list">${budgetRows.join('')}</div>
      </div>`;
    }
  }

  // ── Section cards (progressive disclosure) ──
  const displaySecEntries = filteredSec ? secEntries.filter(([s]) => s === filteredSec) : secEntries;
  const varBadge = d => d == null
    ? '<span style="font-size:12px;color:var(--text-dim)">—</span>'
    : `<span class="${d <= 0 ? 'badge-up' : 'badge-down'}" style="font-size:12px">${d > 0 ? '↑' : '↓'} ${d > 0 ? '+' : ''}${fmtPct(d)}</span>`;
  let sectionCardsHtml = displaySecEntries.map(([sec, total]) => {
    const secColor = SECAO_COLORS[sec] || '#475569';
    const avg = total / numMonths;
    const lastSec = bySecMonthMap[sec + '|' + lastMonth] || 0;
    const prevSec = bySecMonthMap[sec + '|' + prevMonth] || 0;
    const monthlyDelta = prevSec > 0 ? ((lastSec - prevSec) / prevSec * 100) : null;
    const budgetLimit = budgets[sec];
    const secId = sec.replace(/[^a-zA-Z]/g, '');

    let budgetBadge = '';
    if (budgetLimit) {
      const pct = lastSec / budgetLimit * 100;
      const bColor = pct > 100 ? 'tag-red' : pct > 85 ? 'tag-yellow' : 'tag-green';
      budgetBadge = `<span class="tag ${bColor}" style="margin-left:8px">${fmtPct(pct)} do budget</span>`;
    }

    const yoySec = bySecMonthMap[sec + '|' + yoyMonth] || 0;
    const yoyDelta = yoySec > 0 ? ((lastSec - yoySec) / yoySec * 100) : null;

    // variação anual: soma dos últimos 12 meses vs. os 12 meses anteriores
    const a12 = months.slice(-12), p12 = months.slice(-24, -12);
    const sum12  = a12.reduce((s, m) => s + (bySecMonthMap[sec + '|' + m] || 0), 0);
    const sumP12 = p12.reduce((s, m) => s + (bySecMonthMap[sec + '|' + m] || 0), 0);
    const annualDelta = sumP12 > 0 ? ((sum12 - sumP12) / sumP12 * 100) : null;

    const nats = natsBySecao[sec] || [];
    const natRows = nats.map(nat => {
      const natLast = byNatMonthMap[nat + '|' + lastMonth] || 0;
      const natAvg = last6m.reduce((s, m) => s + (byNatMonthMap[nat + '|' + m] || 0), 0) / last6m.length;
      return `<tr>
        <td style="padding-left:24px;color:var(--text-muted);font-size:12px">${nat}</td>
        <td class="r" style="font-size:12px">${fmt(natLast)}</td>
        <td class="r" style="font-size:12px">${fmt(natAvg)}</td>
      </tr>`;
    }).join('');

    const chartData = JSON.stringify({
      labels: last12m.map(m => monthLabel(m)),
      data: last12m.map(m => bySecMonthMap[sec + '|' + m] || 0),
      color: secColor,
      secName: sec
    });

    return `<div class="card mb-8 exp-section-card">
      <div class="exp-section-header" onclick="toggleExpSection('${secId}')" style="cursor:pointer">
        <div style="display:flex;align-items:center;gap:10px;flex:1">
          <span class="color-dot" style="background:${secColor}"></span>
          <span style="font-weight:700;color:${secColor}">${sec}</span>
          ${budgetBadge}
        </div>
        <div style="display:flex;align-items:center;gap:12px">
          <div style="text-align:right;width:120px">
            <div style="font-size:14px;font-weight:700;color:var(--text)">${fmt(lastSec)}</div>
            <div style="font-size:11px;color:var(--text-muted)">em ${monthLabel(lastMonth)}</div>
          </div>
          <div class="exp-var-col">${varBadge(yoyDelta)}</div>
          <div class="exp-var-col">${varBadge(annualDelta)}</div>
          <div class="exp-var-col">${varBadge(monthlyDelta)}</div>
          <span id="exp-arrow-${secId}" style="color:var(--text-muted);font-size:12px;width:14px;text-align:center">▸</span>
        </div>
      </div>
      <div id="exp-detail-${secId}" style="display:none;margin-top:12px;border-top:1px solid var(--border);padding-top:12px">
        <div class="grid-2" style="gap:12px">
          <div>
            <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);margin-bottom:6px">Subcategorias — ${monthLabel(lastMonth)}</div>
            <table class="history-table" style="font-size:12px">
              <thead><tr><th>Categoria</th><th class="r">${monthLabel(lastMonth)}</th><th class="r">Média 6m</th></tr></thead>
              <tbody>${natRows}</tbody>
            </table>
          </div>
          <div>
            <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);margin-bottom:6px">Evolução 12 Meses</div>
            <div class="chart-wrap" style="height:160px">
              <canvas id="ch-sec-${secId}" data-values='${chartData}'></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');

  // ── Inflação pessoal: 12m fechados vs 12m anteriores ───
  let personalInfl = null;
  {
    const closed = months.slice(0, -1); // exclui mês corrente (aberto)
    if (closed.length >= 24) {
      const sum = arr => arr.reduce((s, m) => s + (byMonthMap[m] || 0), 0);
      const a = sum(closed.slice(-12)), b = sum(closed.slice(-24, -12));
      if (b > 0) personalInfl = (a / b - 1) * 100;
    }
  }

  // ── Fixo vs variável (flag Recorrente do Mobills) ───────
  const hasFix = MOBILLS.some(r => r.fix === true);
  let fixSplit = null;
  if (hasFix) {
    const win = months.slice(-12);
    let fixo = 0, variavel = 0;
    MOBILLS.filter(r => win.includes(r.d)).forEach(r => {
      if (r.fix) fixo += Math.abs(r.val); else variavel += Math.abs(r.val);
    });
    const n = win.length || 1;
    const fixoAvg = fixo / n, varAvg = variavel / n;
    // Lean FI: patrimônio que cobre só os gastos fixos pela taxa de retirada
    const leanFI = (fixoAvg * 12) / (S.fi.withdrawalRate / 100);
    fixSplit = { fixoAvg, varAvg, pctFixo: (fixo + variavel) > 0 ? fixo / (fixo + variavel) * 100 : 0, leanFI, leanPct: Math.min(100, totalWealth() / leanFI * 100) };
  }

  const advancedHtml = `
    <div class="kpi-grid kpi-grid-3 mb-16">
      <div class="kpi">
        <div class="kpi-label">Inflação Pessoal — 12m</div>
        ${personalInfl !== null ? `
        <div class="kpi-value" style="color:${personalInfl <= (S.assumptions.ipca || 5.5) ? 'var(--green)' : 'var(--red)'}">${personalInfl >= 0 ? '+' : ''}${fmtPct(personalInfl)}</div>
        <div class="kpi-sub">vs IPCA ${fmtPct(S.assumptions.ipca || 5.5)} — ${personalInfl <= (S.assumptions.ipca || 5.5) ? 'sob controle' : 'lifestyle creep: seus gastos sobem acima da inflação'}</div>
        ` : `<div class="kpi-value" style="color:var(--text-dim)">—</div><div class="kpi-sub">precisa de 24+ meses fechados de dados</div>`}
      </div>
      ${fixSplit ? `
      <div class="kpi">
        <div class="kpi-label">Fixo vs Variável — média 12m</div>
        <div class="kpi-value" style="font-size:19px"><span style="color:var(--accent)">${fmt(fixSplit.fixoAvg)}</span> <span style="font-size:13px;color:var(--text-dim)">/</span> <span style="color:var(--yellow)">${fmt(fixSplit.varAvg)}</span></div>
        <div class="kpi-sub">${fmtPct(fixSplit.pctFixo)} dos gastos são recorrentes</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Lean FI — só os fixos</div>
        <div class="kpi-value" style="color:${fixSplit.leanPct >= 100 ? 'var(--green)' : 'var(--accent)'}">${fixSplit.leanPct >= 100 ? 'Atingido ✓' : fmtK(fixSplit.leanFI)}</div>
        <div class="kpi-sub">${fmtPct(fixSplit.leanPct)} coberto — patrimônio que banca os gastos fixos a ${fmtPct(S.fi.withdrawalRate)}</div>
      </div>` : `
      <div class="kpi" style="grid-column:span 2">
        <div class="kpi-label">Fixo vs Variável</div>
        <div class="kpi-value" style="font-size:15px;color:var(--text-muted)">Atualize o Apps Script</div>
        <div class="kpi-sub">o script da planilha precisa exportar a coluna Recorrente — re-cole o sheets-sync.gs e re-implante</div>
      </div>`}
    </div>`;

  el.innerHTML = `
    <div class="page-header">
      <div>
        <div class="page-title">Análise de Gastos</div>
        <div class="page-subtitle">${monthLabel(months[0])} — ${monthLabel(lastMonth)} · ${MOBILLS.length} lançamentos</div>
      </div>
      <div class="page-actions">
        <button class="btn btn-ghost btn-sm" onclick="openBudgetModal()">⚙ Orçamento</button>
      </div>
    </div>

    ${(window._mobillsDivergences || []).length ? `
    <div class="card mb-16" style="border-left:3px solid var(--yellow);padding:12px 16px">
      <div style="font-size:13px;color:var(--yellow);font-weight:600;margin-bottom:4px">⚠ Divergência entre Mobills e Histórico</div>
      <div style="font-size:12px;color:var(--text-muted)">
        ${window._mobillsDivergences.slice(0, 5).map(x =>
          `${monthLabel(x.d)}: Mobills ${fmt(x.mobills)} vs Histórico ${fmt(x.hist)} (${x.diff.toFixed(0)}% de diferença)`
        ).join(' · ')}
        ${window._mobillsDivergences.length > 5 ? ` · +${window._mobillsDivergences.length - 5} meses` : ''}
        — confira se há lançamentos faltando na planilha.
      </div>
    </div>` : ''}

    <div class="card mb-16" style="padding:10px 16px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <span style="font-size:12px;color:var(--text-muted);font-weight:600">Ignorado nos gastos:</span>
      ${(S.expenseExclude || []).length
        ? S.expenseExclude.map((e, i) => `<span class="exp-pacing-chip" style="cursor:default">${e} <span style="cursor:pointer;color:var(--red);font-weight:700;margin-left:2px" onclick="removeExpenseExclude(${i})" title="remover">✕</span></span>`).join('')
        : '<span style="font-size:12px;color:var(--text-dim)">nenhum</span>'}
      <button class="btn btn-ghost btn-sm" onclick="addExpenseExclude()">+ ignorar</button>
      <span style="font-size:11px;color:var(--text-dim);margin-left:auto">financiamentos, transferências e afins que não são consumo</span>
    </div>

    <div class="kpi-grid mb-16">
      <div class="kpi">
        <div class="kpi-label">Média Mensal (${prd.toUpperCase()})</div>
        <div class="kpi-value" style="color:var(--accent)">${fmt(periodAvg)}</div>
        <div class="kpi-sub">${periodMonthsWithData} meses com dados · Total ${fmtK(periodTotal)}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">${monthLabel(lastMonth)}</div>
        <div class="kpi-value">${fmt(lastVal)}</div>
        <div class="kpi-sub">
          <span class="${deltaPct <= 0 ? 'badge-up' : 'badge-down'}">${deltaPct <= 0 ? '↓' : '↑'} ${deltaPct > 0 ? '+' : ''}${fmtPct(deltaPct)}</span> vs ${monthLabel(prevMonth)}
          ${deltaVsAvg6 !== null ? ` · <span class="${deltaVsAvg6 <= 0 ? 'badge-up' : 'badge-down'}">${deltaVsAvg6 <= 0 ? '↓' : '↑'} ${deltaVsAvg6 > 0 ? '+' : ''}${fmtPct(deltaVsAvg6)}</span> vs média 6m` : ''}
        </div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Maior Seção</div>
        <div class="kpi-value" style="color:${SECAO_COLORS[secNames[0]] || 'var(--text)'};font-size:18px">${secNames[0]}</div>
        <div class="kpi-sub">${fmtPct(secEntries[0][1] / totalGastos * 100)} do total · ${fmt(secEntries[0][1] / numMonths)}/mês</div>
      </div>
      ${kpi4}
    </div>

    ${advancedHtml}

    ${filterBarHtml}

    ${pacingHtml}
    ${comparisonHtml}
    ${insightsHtml}
    ${budgetBarsHtml}

    <div class="card mb-16">
      <div class="card-title">Tendência Mensal — ${periodN} Meses</div>
      <div class="chart-wrap chart-med"><canvas id="ch-exp-main-trend"></canvas></div>
    </div>

    <div class="card mb-16">
      <div class="card-title">Composição por Seção — ${periodN} Meses</div>
      <div class="chart-wrap" style="height:260px"><canvas id="ch-exp-stacked"></canvas></div>
    </div>

    <div class="mb-16">
      <div class="flex-between mb-8" style="padding:0 24px">
        <div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted)">Seções de Gasto <span style="font-weight:400;text-transform:none;letter-spacing:0;color:var(--text-dim);font-size:11px">· clique para expandir</span></div>
        <div style="display:flex;align-items:center;gap:12px">
          <div class="exp-var-col exp-var-head" title="Variação vs. o mesmo mês do ano passado">Var. YoY</div>
          <div class="exp-var-col exp-var-head" title="Acumulado dos últimos 12 meses vs. os 12 meses anteriores">Var. anual</div>
          <div class="exp-var-col exp-var-head" title="Variação vs. o mês anterior">Var. mês</div>
          <span style="width:14px"></span>
        </div>
      </div>
      ${sectionCardsHtml}
    </div>

    <details class="card mb-16 params-accordion">
      <summary class="params-accordion-header">
        <span class="params-accordion-title">Tabela Detalhada — ${periodN} Meses</span>
        <span class="params-accordion-hint">Pivot por seção e categoria</span>
        <span class="params-accordion-arrow">▼</span>
      </summary>
      <div class="params-accordion-body" style="padding-top:12px">
        <div class="table-wrap">
          <table class="history-table">
            <thead><tr>
              <th colspan="2">Seção / Categoria</th>
              ${last6m.map(m => `<th class="r">${monthLabel(m)}</th>`).join('')}
              <th class="r">Média</th>
            </tr></thead>
            <tbody>${buildPivotRows(filteredSec ? displaySecEntries : secEntries, last6m, bySecMonthMap, natsBySecao, byNatMonthMap, byMonthMap)}</tbody>
          </table>
        </div>
      </div>
    </details>

    <details class="card params-accordion">
      <summary class="params-accordion-header">
        <span class="params-accordion-title">Gráficos Avançados</span>
        <span class="params-accordion-hint">Distribuição, composição e ranking</span>
        <span class="params-accordion-arrow">▼</span>
      </summary>
      <div class="params-accordion-body" style="padding-top:12px">
        <div class="grid-2">
          <div>
            <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);margin-bottom:8px">Distribuição por Seção</div>
            <div class="chart-wrap chart-med"><canvas id="ch-exp-pie"></canvas></div>
          </div>
          <div>
            <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);margin-bottom:8px">Ranking de Seções</div>
            <div class="chart-wrap chart-med"><canvas id="ch-exp-bar"></canvas></div>
          </div>
        </div>
      </div>
    </details>
  `;

  requestAnimationFrame(() => {
    // Stacked bar chart — composição por seção
    const stackCtx = document.getElementById('ch-exp-stacked');
    if (stackCtx) {
      activeCharts.expStacked = new Chart(stackCtx, {
        type: 'bar',
        data: {
          labels: chartMonths.map(m => monthLabel(m)),
          datasets: secNames.map(sec => ({
            label: sec,
            data: chartMonths.map(m => bySecMonthMap[sec + '|' + m] || 0),
            backgroundColor: SECAO_COLORS[sec] || '#475569',
            borderRadius: 2,
          }))
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: '#8ca3c1', font: { size: 10 }, boxWidth: 12 } },
            tooltip: {
              callbacks: {
                label: c => ` ${c.dataset.label}: ${fmt(c.parsed.y)}`,
                footer: items => ` Total: ${fmt(items.reduce((s, i) => s + i.parsed.y, 0))}`
              }
            }
          },
          scales: {
            x: { stacked: true, grid: { color: '#1e2d4220' }, ticks: { color: '#8ca3c1', font: { size: 10 } } },
            y: { stacked: true, grid: { color: '#1e2d4240' }, ticks: { color: '#8ca3c1', font: { size: 10 }, callback: v => fmtK(v) } }
          }
        }
      });
    }

    // Main trend chart (bar + line overlay)
    const mainCtx = document.getElementById('ch-exp-main-trend');
    if (mainCtx) {
      const budgetLine = hasBudgets && totalBudget > 0
        ? [{ type: 'line', yMin: totalBudget, yMax: totalBudget, borderColor: '#f8717188', borderWidth: 2, borderDash: [6, 4], label: { display: true, content: 'Orçamento ' + fmtK(totalBudget), position: 'end', color: '#f87171', font: { size: 10 } } }]
        : [];
      activeCharts.expMainTrend = new Chart(mainCtx, {
        type: 'bar',
        data: {
          labels: last12m.map(m => monthLabel(m)),
          datasets: [{
            label: 'Gastos', data: last12m.map(m => byMonthMap[m] || 0),
            backgroundColor: last12m.map(m => {
              const v = byMonthMap[m] || 0;
              if (hasBudgets && totalBudget > 0 && v > totalBudget) return '#f8717199';
              return m === lastMonth ? '#4f8ef7' : '#4f8ef744';
            }),
            borderColor: '#4f8ef7', borderWidth: 1, borderRadius: 4,
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: c => ` ${fmt(c.parsed.y)}` } },
            annotation: budgetLine.length ? { annotations: { budget: budgetLine[0] } } : {}
          },
          scales: {
            x: { grid: { color: '#1e2d4220' }, ticks: { color: '#8ca3c1', font: { size: 10 } } },
            y: { grid: { color: '#1e2d4240' }, ticks: { color: '#8ca3c1', font: { size: 10 }, callback: v => fmtK(v) }, beginAtZero: true }
          }
        }
      });
    }

    // Lazy-init for accordion charts
    const accDetails = el.querySelectorAll('details.params-accordion');
    accDetails.forEach(det => {
      det.addEventListener('toggle', () => {
        if (!det.open) return;
        setTimeout(() => {
          if (!activeCharts.expPie) {
            activeCharts.expPie = makePieChart('ch-exp-pie',
              secEntries.map(([s, v]) => `${s}  ${fmtK(v)}`),
              secEntries.map(([, v]) => v),
              secEntries.map(([s]) => SECAO_COLORS[s] || '#475569')
            );
          }
          if (!activeCharts.expBar) {
            const barCtx = document.getElementById('ch-exp-bar');
            if (barCtx) {
              activeCharts.expBar = new Chart(barCtx, {
                type: 'bar',
                data: {
                  labels: secEntries.map(([s]) => s),
                  datasets: [{ label: 'Total', data: secEntries.map(([, v]) => v), backgroundColor: secEntries.map(([s]) => SECAO_COLORS[s] || '#475569'), borderRadius: 4 }]
                },
                options: {
                  responsive: true, maintainAspectRatio: false, indexAxis: 'y',
                  plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${fmt(c.parsed.x)}` } } },
                  scales: {
                    x: { grid: { color: '#1e2d4230' }, ticks: { color: '#8ca3c1', font: { size: 10 }, callback: v => fmtK(v) } },
                    y: { grid: { display: false }, ticks: { color: '#e2e8f0', font: { size: 11 } } }
                  }
                }
              });
            }
          }
        }, 50);
      });
    });
  });
}

function buildPivotRows(secEntries, last6m, bySecMonthMap, natsBySecao, byNatMonthMap, byMonthMap) {
  let rows = '';
  secEntries.forEach(([sec]) => {
    const secTotal = last6m.reduce((s, m) => s + (bySecMonthMap[sec + '|' + m] || 0), 0);
    const secColor = SECAO_COLORS[sec] || '#475569';
    rows += `<tr style="background:${secColor}15">
      <td colspan="2" style="font-weight:700;color:${secColor};padding-left:8px">${sec}</td>
      ${last6m.map(m => `<td class="r" style="font-weight:700;color:${secColor}">${fmt(bySecMonthMap[sec + '|' + m] || 0)}</td>`).join('')}
      <td class="r" style="font-weight:700;color:${secColor}">${fmt(secTotal / last6m.length)}</td>
    </tr>`;
    (natsBySecao[sec] || []).forEach(nat => {
      rows += `<tr>
        <td></td><td style="padding-left:12px;color:var(--text-muted);font-size:12px">${nat}</td>
        ${last6m.map(m => `<td class="r" style="font-size:12px">${fmt(byNatMonthMap[nat + '|' + m] || 0)}</td>`).join('')}
        <td class="r" style="font-size:12px">${fmt(last6m.reduce((s, m) => s + (byNatMonthMap[nat + '|' + m] || 0), 0) / last6m.length)}</td>
      </tr>`;
    });
  });
  rows += `<tr style="background:var(--surface-3);border-top:2px solid var(--border-2)">
    <td colspan="2" style="font-weight:700;color:var(--text)">TOTAL</td>
    ${last6m.map(m => `<td class="r" style="font-weight:700;color:var(--text)">${fmt(byMonthMap[m] || 0)}</td>`).join('')}
    <td class="r" style="font-weight:700;color:var(--accent)">${fmt(last6m.reduce((s, m) => s + (byMonthMap[m] || 0), 0) / last6m.length)}</td>
  </tr>`;
  return rows;
}

// ── 13. INDEPENDÊNCIA FINANCEIRA ─────────────────────────
function renderFI() {
  const el    = document.getElementById('page-fi');
  const w     = totalWealth();
  const fin   = fiNumber();
  const pct   = Math.min(100, (w / fin) * 100);
  const base  = buildScenarioPaths(S.assumptions.projectionYears * 12).find(s=>s.id==='base');
  const fiRes = base ? findFIDate(base.path) : null;

  // Indicadores avançados
  // A projeção principal já é REAL (valores de hoje). Aqui calculamos a versão NOMINAL só p/ contraste.
  const fiNominal = findFIDate(projectPath(40 * 12, totalWealth(), weightedReturn(), S.assumptions.ipca, S.assumptions.ipca));
  const mc      = monteCarloFI(500, 40);                     // distribuição estocástica
  const rwM     = runwayMonths();
  const coastY  = coastFIYears();
  const cov     = passiveCoverage();
  const projStart = projectionStart().date;
  const mToDate = m => { const d = new Date(projStart); d.setMonth(d.getMonth() + m); return d; };
  const fmtMC   = m => { const d = mToDate(m); return d.toLocaleDateString('pt-BR', { month:'short', year:'numeric' }); };

  // Sensitivity table: FI date varying return
  const sensi = [-4,-2,0,2,4].map(d => {
    const baseRet = weightedReturnReal();
    const path = projectPath(S.assumptions.projectionYears*12, w, baseRet+d, 0, 0);
    const fi = findFIDate(path);
    return { delta:d, ret:baseRet+d, fi };
  });

  // Monthly savings sensitivity
  const sensiSavings = [-5000,-2500,0,2500,5000].map(d => {
    const incsCopy = S.incomes.map(i=>({...i, amount: i.amount + (i.id===S.incomes[0]?.id ? d : 0)}));
    const monthlyRate = Math.pow(1 + weightedReturnReal()/100, 1/12) - 1;
    const projMonths  = S.assumptions.projectionYears * 12;
    let wd = w;
    let fiM = null;
    for (let m = 0; m < projMonths; m++) {
      const y = m/12;
      const inc = incsCopy.filter(i=>i.active).reduce((s,i)=>s+i.amount*Math.pow(1+i.growthRate/100,y),0);
      const exp = S.expenses.filter(e=>e.active).reduce((s,e)=>s+e.amount*Math.pow(1+e.growthRate/100,y),0);
      wd = Math.max(0, wd + wd*monthlyRate + (inc-exp));
      if (!fiM && wd >= fin) { fiM = m; break; }
    }
    return { delta:d, months:fiM };
  });

  el.innerHTML = `
    <div class="page-header">
      <div><div class="page-title">Independência Financeira</div>
        <div class="page-subtitle">Quando e como você chegará à FI</div>
      </div>
    </div>

    <div class="grid-2 mb-16">
      <div class="card">
        <div class="card-title">Meta FI</div>

        <div class="slider-group mb-8">
          <div class="slider-label-row">
            <span class="slider-lbl">Renda mensal almejada</span>
            <span class="slider-val green" id="fi-inc-val">${fmt(S.fi.targetMonthlyIncome)}/mês</span>
          </div>
          <input type="range" class="sc-slider" min="1000" max="100000" step="500"
            value="${S.fi.targetMonthlyIncome}"
            oninput="fiSliderInput(this,'income')" onchange="fiSliderCommit()">
        </div>

        <div class="slider-group">
          <div class="slider-label-row">
            <span class="slider-lbl">Taxa de retirada segura</span>
            <span class="slider-val" id="fi-rate-val">${fmtPct(S.fi.withdrawalRate)}</span>
          </div>
          <input type="range" class="sc-slider" min="1" max="8" step="0.1"
            value="${S.fi.withdrawalRate}"
            oninput="fiSliderInput(this,'rate')" onchange="fiSliderCommit()">
        </div>

        <hr class="sep">

        <div class="fi-number" id="fi-num-display">${fmtK(fin)}</div>
        <div style="font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:12px">Número FI</div>

        <div class="fi-target-line"><span class="fi-label">Patrimônio atual</span><span class="fi-val" style="color:var(--accent)">${fmt(w)}</span></div>
        <div class="fi-target-line"><span class="fi-label">Falta atingir</span><span class="fi-val" id="fi-gap-val" style="color:var(--yellow)">${fmt(Math.max(0,fin-w))}</span></div>

        <div class="progress-bar-wrap mt-12">
          <div class="progress-bar" id="fi-prog-bar" style="width:${pct}%;background:${pct>=100?'var(--green)':pct>=50?'var(--accent)':'var(--yellow)'}"></div>
        </div>
        <div class="flex-between mt-8 text-sm text-muted">
          <span id="fi-prog-pct">${fmtPct(pct)} concluído</span>
          <span>${fmt(w)} / <span id="fi-prog-fin">${fmt(fin)}</span></span>
        </div>
      </div>
      <div class="card">
        <div class="card-title">Data Estimada da FI — Cenário Base</div>
        ${fiRes ? `
          <div style="font-size:42px;font-weight:800;color:var(--green);letter-spacing:-1px;margin-bottom:8px">
            ${fiRes.date.getFullYear()}
          </div>
          <div style="font-size:16px;color:var(--text-muted)">
            ${fiRes.date.toLocaleDateString('pt-BR',{month:'long',year:'numeric'})}
          </div>
          <div class="mt-12 grid-2" style="gap:12px">
            <div><div class="text-sm text-muted mb-4">Anos a partir de hoje</div><div style="font-size:22px;font-weight:700">${Math.floor(fiRes.months/12)} anos</div></div>
            <div><div class="text-sm text-muted mb-4">Sua idade na FI</div><div style="font-size:22px;font-weight:700">${fiRes.date.getFullYear() - S.profile.birthYear} anos</div></div>
            <div><div class="text-sm text-muted mb-4">Patrimônio na FI</div><div style="font-size:22px;font-weight:700;color:var(--accent)">${fmtK(fiRes.wealth)}</div></div>
            <div><div class="text-sm text-muted mb-4">Renda passiva mensal</div><div style="font-size:22px;font-weight:700;color:var(--green)">${fmt(fiRes.wealth * S.fi.withdrawalRate/100/12)}</div></div>
          </div>
        ` : `<div style="color:var(--text-muted);padding:20px 0">FI não atingida no horizonte de ${S.assumptions.projectionYears} anos. Aumente a poupança ou o horizonte.</div>`}
      </div>
    </div>

    <div class="kpi-grid mb-16">
      <div class="kpi">
        <div class="kpi-label">FI nominal (ilusão)</div>
        <div class="kpi-value" style="color:var(--purple)">${fiNominal ? fiNominal.date.toLocaleDateString('pt-BR',{month:'short',year:'numeric'}) : '> 40 anos'}</div>
        <div class="kpi-sub">${fiNominal && fiRes ? `parece ~${Math.max(0, Math.round((fiRes.months - fiNominal.months)/12))} ano(s) mais cedo em R$ futuros — o número real (acima) já desconta a inflação` : `em R$ futuros, sem descontar a inflação`}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Runway</div>
        <div class="kpi-value" style="color:var(--accent)">${(rwM/12).toFixed(1)} anos</div>
        <div class="kpi-sub">se a renda zerar hoje, a carteira banca ${Math.round(rwM)} meses de gastos</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Coast FI</div>
        <div class="kpi-value" style="color:${coastY !== null && coastY <= 20 ? 'var(--green)' : 'var(--yellow)'}">${coastY === 0 ? 'Atingido ✓' : coastY !== null ? coastY.toFixed(1) + ' anos' : '—'}</div>
        <div class="kpi-sub">${coastY === 0 ? 'juros sozinhos já sustentam a meta' : coastY !== null ? `sem nunca mais aportar, FI aos ${Math.round(currentAge() + coastY)} anos` : 'retorno real ≤ 0'}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Cobertura Renda Passiva</div>
        <div class="kpi-value" style="color:${cov.pct >= 100 ? 'var(--green)' : cov.pct >= 50 ? 'var(--accent)' : 'var(--yellow)'}">${fmtPct(cov.pct)}</div>
        <div class="kpi-sub">${fmt(cov.passiveMonthly)}/mês estimado vs ${fmt(cov.avgGas)} de gastos</div>
      </div>
    </div>

    ${mc ? `
    <div class="card mb-16">
      <div class="card-title">Monte Carlo — ${mc.sims} simulações com volatilidade da carteira (${fmtPct(portfolioVol())} a.a.)</div>
      <div class="grid-3" style="gap:14px">
        <div style="text-align:center;padding:14px;border-radius:var(--r-sm);background:var(--green-dim)">
          <div style="font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.6px;margin-bottom:6px">Otimista (P10)</div>
          <div style="font-size:22px;font-weight:700;color:var(--green)">${fmtMC(mc.p10)}</div>
          <div style="font-size:12px;color:var(--text-muted)">${(mc.p10/12).toFixed(1)} anos</div>
        </div>
        <div style="text-align:center;padding:14px;border-radius:var(--r-sm);background:var(--accent-dim)">
          <div style="font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.6px;margin-bottom:6px">Mediana (P50)</div>
          <div style="font-size:22px;font-weight:700;color:var(--accent)">${fmtMC(mc.p50)}</div>
          <div style="font-size:12px;color:var(--text-muted)">${(mc.p50/12).toFixed(1)} anos</div>
        </div>
        <div style="text-align:center;padding:14px;border-radius:var(--r-sm);background:var(--red-dim)">
          <div style="font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.6px;margin-bottom:6px">Conservador (P90)</div>
          <div style="font-size:22px;font-weight:700;color:var(--red)">${fmtMC(mc.p90)}</div>
          <div style="font-size:12px;color:var(--text-muted)">${(mc.p90/12).toFixed(1)} anos</div>
        </div>
      </div>
      <div class="mt-12 text-sm text-muted" style="text-align:center">
        Probabilidade de atingir a FI dentro do horizonte de ${S.assumptions.projectionYears} anos:
        <strong style="color:${mc.probInHorizon >= 80 ? 'var(--green)' : mc.probInHorizon >= 50 ? 'var(--yellow)' : 'var(--red)'}">${fmtPct(mc.probInHorizon)}</strong>
        · 80% dos cenários caem entre ${fmtMC(mc.p10)} e ${fmtMC(mc.p90)}
      </div>
    </div>` : ''}

    <div class="grid-2 mb-16">
      <div class="card">
        <div class="card-title">Sensibilidade — Retorno x Data FI</div>
        <div class="table-wrap">
          <table class="sensitivity">
            <thead><tr><th>Retorno a.a.</th><th>Delta</th><th>Data FI</th><th>Anos</th></tr></thead>
            <tbody>${sensi.map(s=>`
              <tr>
                <td class="bold">${fmtPct(s.ret)}</td>
                <td style="color:${s.delta>0?'var(--green)':s.delta<0?'var(--red)':'var(--text-muted)'}">${s.delta===0?'Base':(s.delta>0?'+':'')+s.delta+'%'}</td>
                <td class="${s.delta===0?'highlight':s.delta>0?'good':'bad'}">${s.fi?s.fi.date.getFullYear()+'/'+String(s.fi.date.getMonth()+1).padStart(2,'0'):'> horizonte'}</td>
                <td>${s.fi?Math.floor(s.fi.months/12):'—'}</td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
      <div class="card">
        <div class="card-title">Sensibilidade — Poupança Adicional x Data FI</div>
        <div class="table-wrap">
          <table class="sensitivity">
            <thead><tr><th>Δ Poupança/mês</th><th>Data FI</th><th>Anos</th></tr></thead>
            <tbody>${sensiSavings.map(s=>`
              <tr>
                <td class="${s.delta>0?'green':s.delta<0?'red':''}">${s.delta===0?'Atual':(s.delta>0?'+':'')+fmt(s.delta)}</td>
                <td class="${s.delta===0?'highlight':s.delta>0?'good':'bad'}">${s.months?2026+Math.floor(s.months/12)+'/'+(1+(s.months%12||0)).toString().padStart(2,'0'):'> horizonte'}</td>
                <td>${s.months?Math.floor(s.months/12):'—'}</td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">Projeção Rumo à FI — Cenário Base</div>
      <div class="chart-wrap chart-tall"><canvas id="ch-fi"></canvas></div>
    </div>
  `;

  if (base) {
    requestAnimationFrame(() => {
      const step   = Math.max(1, Math.floor(base.path.length/120));
      const pts    = base.path.filter((_,i)=>i%step===0);
      const fiStart = projectionStart().date;
      const labels = pts.map(p => { const d = new Date(fiStart.getFullYear(), fiStart.getMonth()+p.m, 1); return d.getFullYear()+(d.getMonth()===0?'':''); });
      destroyChart('fi');
      activeCharts.fi = new Chart(document.getElementById('ch-fi'), {
        type:'line',
        data:{
          labels,
          datasets:[
            { label:'Patrimônio Projetado', data:pts.map(p=>p.w), borderColor:'#4f8ef7', backgroundColor:'#4f8ef720', fill:true, tension:.4, pointRadius:0, borderWidth:2 },
            { label:'Meta FI', data:pts.map(()=>fin), borderColor:'#fbbf2466', borderDash:[8,5], borderWidth:1.5, pointRadius:0 },
          ]
        },
        options:{
          responsive:true, maintainAspectRatio:false,
          interaction:{mode:'index',intersect:false},
          plugins:{
            legend:{labels:{color:'#8ca3c1',font:{size:11}}},
            tooltip:{callbacks:{label:c=>` ${c.dataset.label}: ${fmtK(c.parsed.y)}`}}
          },
          scales:{
            x:{grid:{color:'#1e2d4230'},ticks:{color:'#8ca3c1',font:{size:10},maxTicksLimit:15}},
            y:{grid:{color:'#1e2d4250'},ticks:{color:'#8ca3c1',font:{size:10},callback:v=>fmtK(v)}}
          }
        }
      });
    });
  }
}

function fiSliderInput(el, type) {
  const val = +el.value;
  if (type === 'income') {
    S.fi.targetMonthlyIncome = val;
    const s = document.getElementById('fi-inc-val');
    if (s) s.textContent = fmt(val) + '/mês';
  } else {
    S.fi.withdrawalRate = val;
    const s = document.getElementById('fi-rate-val');
    if (s) s.textContent = fmtPct(val);
  }
  const fin = fiNumber();
  const w   = totalWealth();
  const pct = Math.min(100, (w / fin) * 100);
  const col = pct>=100?'var(--green)':pct>=50?'var(--accent)':'var(--yellow)';
  const nd = document.getElementById('fi-num-display');   if (nd) nd.textContent = fmtK(fin);
  const gv = document.getElementById('fi-gap-val');       if (gv) gv.textContent = fmt(Math.max(0,fin-w));
  const pb = document.getElementById('fi-prog-bar');      if (pb) { pb.style.width=pct+'%'; pb.style.background=col; }
  const pp = document.getElementById('fi-prog-pct');      if (pp) pp.textContent = fmtPct(pct)+' concluído';
  const pf = document.getElementById('fi-prog-fin');      if (pf) pf.textContent = fmt(fin);
  clearTimeout(fiSliderInput._t);
  fiSliderInput._t = setTimeout(() => renderFI(), 400);
}

function fiSliderCommit() { saveState(); }

function openFISettings() {
  openModal('Configurar Meta FI', `
    <div class="form-group">
      <label class="form-label">Renda Mensal na FI (R$)</label>
      <input class="form-input" id="fi-income" type="number" value="${S.fi.targetMonthlyIncome}" min="0">
      <div class="form-hint">Quanto você precisa por mês para viver sem trabalhar</div>
    </div>
    <div class="form-group">
      <label class="form-label">Taxa de Retirada Segura (% a.a.)</label>
      <input class="form-input" id="fi-rate" type="number" value="${S.fi.withdrawalRate}" step="0.1" min="1" max="10">
      <div class="form-hint">4% = Regra dos 4% (padrão). 3% = mais conservador.</div>
    </div>
    <div class="form-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveFISettings()">Salvar</button>
    </div>
  `);
}
function saveFISettings() {
  S.fi.targetMonthlyIncome = parseFloat(document.getElementById('fi-income').value)||25000;
  S.fi.withdrawalRate      = parseFloat(document.getElementById('fi-rate').value)||4;
  saveState(); closeModal(); renderFI();
}

// ── 14. HISTÓRICO ─────────────────────────────────────────
function renderHistory() {
  const el = document.getElementById('page-history');
  const last = HISTORICAL[HISTORICAL.length-1];
  const first = HISTORICAL[0];
  const years = (HISTORICAL.length) / 12;
  const cagr  = (Math.pow(last.pat/first.pat, 1/years)-1)*100;

  // Retorno realizado (TWR) vs CDI — separa esforço (aporte) de juros
  const twr12   = twr(12);
  const twrAll  = twr();
  const cdi12   = cdiAnnualized(12);
  const cdiAll  = cdiAnnualized();
  const alpha12 = twr12 - cdi12;
  const assumed = weightedReturn();

  el.innerHTML = `
    <div class="page-header">
      <div><div class="page-title">Histórico</div>
        <div class="page-subtitle">${monthLabel(first.d)} — ${monthLabel(last.d)} · ${HISTORICAL.length} meses</div>
      </div>
    </div>

    <div class="kpi-grid mb-16">
      <div class="kpi">
        <div class="kpi-label">Patrimônio Inicial</div>
        <div class="kpi-value">${fmt(first.pat)}</div>
        <div class="kpi-sub">${monthLabel(first.d)}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Patrimônio Atual</div>
        <div class="kpi-value">${fmt(last.pat)}</div>
        <div class="kpi-sub">${monthLabel(last.d)}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">CAGR do Patrimônio</div>
        <div class="kpi-value" style="color:var(--green)">${fmtPct(cagr)}</div>
        <div class="kpi-sub">inclui aportes — não é retorno</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Múltiplo</div>
        <div class="kpi-value" style="color:var(--accent)">${(last.pat/first.pat).toFixed(1)}x</div>
        <div class="kpi-sub">desde o início</div>
      </div>
    </div>

    <div class="kpi-grid mb-16">
      <div class="kpi">
        <div class="kpi-label">Retorno Realizado — 12m</div>
        <div class="kpi-value" style="color:${twr12 >= cdi12 ? 'var(--green)' : 'var(--red)'}">${fmtPct(twr12)}</div>
        <div class="kpi-sub">TWR: (Δpatrimônio − aporte) / patrimônio</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">CDI no Período — 12m</div>
        <div class="kpi-value" style="color:var(--text-muted)">${fmtPct(cdi12)}</div>
        <div class="kpi-sub">benchmark aproximado</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Alpha vs CDI — 12m</div>
        <div class="kpi-value" style="color:${alpha12 >= 0 ? 'var(--green)' : 'var(--red)'}">${alpha12 >= 0 ? '+' : ''}${fmtPct(alpha12)}</div>
        <div class="kpi-sub">desde o início: ${fmtPct(twrAll)} vs CDI ${fmtPct(cdiAll)}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Realizado vs Premissa</div>
        <div class="kpi-value" style="color:${twr12 >= assumed ? 'var(--green)' : 'var(--yellow)'}">${fmtPct(twr12)} <span style="font-size:14px;color:var(--text-dim)">vs ${fmtPct(assumed)}</span></div>
        <div class="kpi-sub">${twr12 >= assumed ? 'projeções conservadoras ✓' : 'projeções assumem mais do que a carteira entrega'}</div>
      </div>
    </div>

    <div class="card mb-16">
      <div class="card-title">Evolução do Patrimônio</div>
      <div class="chart-wrap chart-tall"><canvas id="ch-hist-pat"></canvas></div>
    </div>

    <div class="card mb-16">
      <div class="card-title">Retorno Realizado Anualizado (12m móveis) vs CDI</div>
      <div class="chart-wrap chart-med"><canvas id="ch-hist-twr"></canvas></div>
    </div>

    <div class="grid-2 mb-16">
      <div class="card">
        <div class="card-title">Receita vs Gastos Mensais</div>
        <div class="chart-wrap chart-med"><canvas id="ch-hist-flow"></canvas></div>
      </div>
      <div class="card">
        <div class="card-title">Taxa de Poupança Mensal</div>
        <div class="chart-wrap chart-med"><canvas id="ch-hist-savings"></canvas></div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">Dados Mensais Históricos</div>
      <div class="table-wrap">
        <table class="history-table">
          <thead><tr>
            <th>Mês</th>
            <th class="r">Patrimônio</th>
            <th class="r">PL</th>
            <th class="r">Receita</th>
            <th class="r">Gastos</th>
            <th class="r">Aporte</th>
            <th class="r">Taxa de Poupança</th>
          </tr></thead>
          <tbody>${[...HISTORICAL].reverse().map(h=>{
            const apo = h.apo ?? (h.rec - h.gas);
            const rate = savingsRate(h);
            return `<tr>
              <td class="muted">${monthLabel(h.d)}</td>
              <td class="r accent">${fmt(h.pat)}</td>
              <td class="r">${fmt(h.pl)}</td>
              <td class="r green">${fmt(h.rec)}</td>
              <td class="r red">${fmt(h.gas)}</td>
              <td class="r ${apo>=0?'green':'red'}">${fmt(apo)}</td>
              <td class="r ${rate>=40?'green':rate>=20?'yellow':'red'}">${fmtPct(rate)}</td>
            </tr>`;
          }).join('')}</tbody>
        </table>
      </div>
    </div>
  `;

  requestAnimationFrame(() => {
    const step = Math.max(1, Math.floor(HISTORICAL.length/60));
    const sampled = HISTORICAL.filter((_,i)=>i%step===0||i===HISTORICAL.length-1);
    const labels  = sampled.map(h=>monthLabel(h.d));

    destroyChart('histPat');
    activeCharts.histPat = new Chart(document.getElementById('ch-hist-pat'), {
      type:'line',
      data:{
        labels,
        datasets:[
          { label:'Patrimônio Total', data:sampled.map(h=>h.pat), borderColor:'#4f8ef7', backgroundColor:'#4f8ef720', fill:true, tension:.4, pointRadius:0, borderWidth:2 },
          { label:'Patrim. Líquido',  data:sampled.map(h=>h.pl),  borderColor:'#22c55e', backgroundColor:'transparent', tension:.4, pointRadius:0, borderWidth:1.5 },
        ]
      },
      options:{
        responsive:true, maintainAspectRatio:false,
        interaction:{mode:'index',intersect:false},
        plugins:{legend:{labels:{color:'#8ca3c1',font:{size:11}}},tooltip:{callbacks:{label:c=>` ${c.dataset.label}: ${fmtK(c.parsed.y)}`}}},
        scales:{x:{grid:{color:'#1e2d4230'},ticks:{color:'#8ca3c1',font:{size:10},maxTicksLimit:20}},y:{grid:{color:'#1e2d4250'},ticks:{color:'#8ca3c1',font:{size:10},callback:v=>fmtK(v)}}}
      }
    });

    destroyChart('histFlow');
    activeCharts.histFlow = makeBarChart('ch-hist-flow', labels, [
      { label:'Receita', data:sampled.map(h=>h.rec), backgroundColor:'#22c55e55', borderColor:'#22c55e', borderWidth:1 },
      { label:'Gastos',  data:sampled.map(h=>h.gas), backgroundColor:'#f8717155', borderColor:'#f87171', borderWidth:1 },
    ]);

    const savingsRates = sampled.map(h => savingsRate(h));
    destroyChart('histSavings');
    activeCharts.histSavings = new Chart(document.getElementById('ch-hist-savings'), {
      type:'bar',
      data:{
        labels,
        datasets:[{
          label:'Taxa de Poupança %',
          data:savingsRates,
          backgroundColor: savingsRates.map(v=>v>=50?'#22c55e66':v>=30?'#4f8ef766':'#f8717166'),
          borderColor:     savingsRates.map(v=>v>=50?'#22c55e':v>=30?'#4f8ef7':'#f87171'),
          borderWidth:1,
        }]
      },
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>` ${fmtPct(c.parsed.y)}`}}},
        scales:{x:{grid:{color:'#1e2d4220'},ticks:{color:'#8ca3c1',font:{size:10},maxTicksLimit:20}},y:{grid:{color:'#1e2d4240'},ticks:{color:'#8ca3c1',font:{size:10},callback:v=>fmtPct(v)}}}
      }
    });

    // TWR 12m móvel vs CDI — só a partir do 12º mês de dados
    const rs = realizedReturns();
    const twrSeries = [], cdiSeries = [], twrLabels = [];
    for (let i = 11; i < rs.length; i++) {
      const win = rs.slice(i - 11, i + 1);
      const acc = win.reduce((p, x) => p * (1 + x.r), 1);
      twrSeries.push((Math.pow(Math.max(acc, 0.01), 1) - 1) * 100);
      const cdiAcc = win.reduce((p, x) => {
        const y = parseInt(x.d.slice(0, 4));
        return p * Math.pow(1 + (CDI_YEARLY[y] ?? 10) / 100, 1/12);
      }, 1);
      cdiSeries.push((cdiAcc - 1) * 100);
      twrLabels.push(monthLabel(rs[i].d));
    }
    destroyChart('histTwr');
    activeCharts.histTwr = new Chart(document.getElementById('ch-hist-twr'), {
      type: 'line',
      data: {
        labels: twrLabels,
        datasets: [
          { label:'Retorno realizado 12m', data: twrSeries, borderColor:'#6395ff', backgroundColor:'#6395ff18', fill:true, tension:.3, pointRadius:0, borderWidth:2 },
          { label:'CDI 12m', data: cdiSeries, borderColor:'#8b94a7', borderDash:[6,4], tension:.3, pointRadius:0, borderWidth:1.5 },
        ]
      },
      options: {
        responsive:true, maintainAspectRatio:false,
        interaction:{mode:'index',intersect:false},
        plugins:{legend:{labels:{color:'#8ca3c1',font:{size:11}}},tooltip:{callbacks:{label:c=>` ${c.dataset.label}: ${fmtPct(c.parsed.y)}`}}},
        scales:{
          x:{grid:{color:'#1e2d4220'},ticks:{color:'#8ca3c1',font:{size:10},maxTicksLimit:18}},
          y:{grid:{color:'#1e2d4240'},ticks:{color:'#8ca3c1',font:{size:10},callback:v=>fmtPct(v)}}
        }
      }
    });
  });
}

// ── 15. EVENTOS DE VIDA ───────────────────────────────────
function openAddEvent() {
  openModal('Adicionar Evento de Vida', `
    <div class="form-group">
      <label class="form-label">Nome do Evento</label>
      <input class="form-input" id="ev-name" placeholder="Ex: Compra de imóvel, Herança, Troca de emprego...">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Data (meses a partir de hoje)</label>
        <input class="form-input" id="ev-months" type="number" value="12" min="0">
        <div class="form-hint">0 = agora, 12 = 1 ano, 60 = 5 anos</div>
      </div>
      <div class="form-group">
        <label class="form-label">Impacto no Patrimônio (R$)</label>
        <input class="form-input" id="ev-impact" type="number" value="0">
        <div class="form-hint">Positivo = entrada, Negativo = saída</div>
      </div>
    </div>
    <div class="form-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveEvent()">Adicionar</button>
    </div>
  `);
}
function saveEvent() {
  const name   = document.getElementById('ev-name').value.trim();
  const months = parseInt(document.getElementById('ev-months').value)||0;
  const impact = parseFloat(document.getElementById('ev-impact').value)||0;
  if (!name) return;
  S.events.push({ id:uid(), name, monthOffset:months, impact });
  saveState(); closeModal(); renderTimeline();
}

// ── 16. SCENARIO EDITOR ───────────────────────────────────
function openScenarioEditor() { navigate('assumptions'); }

// ── 17. CHARTS FACTORY ────────────────────────────────────
function makeLineChart(id, data) {
  const ctx = document.getElementById(id);
  if (!ctx) return null;
  return new Chart(ctx, {
    type:'line', data,
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{labels:{color:'#8ca3c1',font:{size:11}}},tooltip:{callbacks:{label:c=>` ${c.dataset.label}: ${fmtK(c.parsed.y)}`}}},
      scales:{
        x:{grid:{color:'#1e2d4230'},ticks:{color:'#8ca3c1',font:{size:10},maxTicksLimit:12}},
        y:{grid:{color:'#1e2d4250'},ticks:{color:'#8ca3c1',font:{size:10},callback:v=>fmtK(v)}}
      }
    }
  });
}

function makePieChart(id, labels, data, colors) {
  const ctx = document.getElementById(id);
  if (!ctx) return null;
  return new Chart(ctx, {
    type:'doughnut',
    data:{ labels, datasets:[{ data, backgroundColor:colors.map(c=>c+'cc'), borderColor:colors, borderWidth:1.5 }] },
    options:{
      responsive:true, maintainAspectRatio:false, cutout:'55%',
      plugins:{legend:{position:'right',labels:{color:'#8ca3c1',font:{size:11},padding:12}},tooltip:{callbacks:{label:c=>` ${c.label}: ${fmtK(c.raw)}`}}}
    }
  });
}

function makeBarChart(id, labels, datasets) {
  const ctx = document.getElementById(id);
  if (!ctx) return null;
  return new Chart(ctx, {
    type:'bar',
    data:{ labels, datasets },
    options:{
      responsive:true, maintainAspectRatio:false,
      interaction:{mode:'index',intersect:false},
      plugins:{legend:{labels:{color:'#8ca3c1',font:{size:11}}},tooltip:{callbacks:{label:c=>` ${c.dataset.label}: ${fmtK(c.parsed.y)}`}}},
      scales:{
        x:{grid:{color:'#1e2d4220'},ticks:{color:'#8ca3c1',font:{size:10},maxTicksLimit:15}},
        y:{grid:{color:'#1e2d4240'},ticks:{color:'#8ca3c1',font:{size:10},callback:v=>fmtK(v)}}
      }
    }
  });
}

function destroyChart(key) {
  if (activeCharts[key]) { try { activeCharts[key].destroy(); } catch(e){} delete activeCharts[key]; }
}

// ── 18. MODAL ─────────────────────────────────────────────
function openModal(title, html) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = html;
  document.getElementById('modal-overlay').classList.remove('hidden');
}
function closeModal() { document.getElementById('modal-overlay').classList.add('hidden'); }
function overlayClick(e) { if (e.target.id === 'modal-overlay') closeModal(); }

// ── 19. TOAST ─────────────────────────────────────────────
function showToast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {
    position:'fixed', bottom:'24px', right:'24px',
    background:'var(--surface-3)', border:'1px solid var(--border-2)',
    color:'var(--text)', padding:'10px 18px', borderRadius:'8px',
    fontSize:'13px', fontWeight:'600', zIndex:'9999',
    boxShadow:'0 4px 20px rgba(0,0,0,.5)', transition:'opacity .3s'
  });
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity='0'; setTimeout(()=>t.remove(),300); }, 2000);
}

// ── 20. IMPORT / EXPORT ───────────────────────────────────
function exportData() {
  const blob = new Blob([JSON.stringify(S, null, 2)], { type:'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `finplan-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
}
function triggerImport() { document.getElementById('import-file').click(); }
function importData(e) {
  const file = e.target.files[0];
  if (!file) return;
  const r = new FileReader();
  r.onload = ev => {
    try {
      S = deepMerge(DEFAULT_STATE, JSON.parse(ev.target.result));
      saveState();
      refreshMobillsFilter();
      renderPage(activePage);
      showToast('Dados importados!');
    } catch(err) { alert('Arquivo inválido.'); }
  };
  r.readAsText(file);
}

// ── 21. INIT ──────────────────────────────────────────────
function init() {
  loadState();
  refreshMobillsFilter();
  Chart.register(ChartAnnotation);
  renderPage('dashboard');

  // Restaura label do último sync
  const lastSync = localStorage.getItem('finplan_last_sync');
  if (lastSync) updateSyncBtn('ok', lastSync);

  // Sync automático silencioso (só se URL já estiver configurada)
  if (getSyncUrl()) {
    setTimeout(() => syncFromSheets(true), 1200);
  }
}

// Annotation plugin alias
const ChartAnnotation = window['chartjs-plugin-annotation'] || {};

document.addEventListener('DOMContentLoaded', init);
