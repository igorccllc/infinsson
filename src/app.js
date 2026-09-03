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
let FINANCIAMENTO = JSON.parse(localStorage.getItem('finplan_financiamento') || 'null');   // espelho da aba Financiamento
let FLUXOGRID = JSON.parse(localStorage.getItem('finplan_fluxogrid') || 'null');            // espelho da aba Fluxo de Caixa (grade inteira)
let FLUXOBOLD = JSON.parse(localStorage.getItem('finplan_fluxobold') || 'null');            // negrito da col A por linha (macro-contas)
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
    preFixado:  13.5,   // taxa nominal fixa a.a. do pré-fixado
    eqRate:     14.95,  // taxa a converter (aba Rentabilidade Equivalente)
    eqPeriod:   'ano',  // período de entrada: 'ano' | 'mes'
    eqMeses:    25,     // prazo p/ cálculo do IR regressivo (líquido)
    stress:     {},     // % de choque por classe na aba Estresse de Carteira (ex: {rv:-30, fii:-15})
    selicDelta: -2,     // variacao da Selic em p.p. no Choque de Selic (negativo = corte)
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

  // Dívidas registradas (seção própria — não altera os simuladores)
  debts: [],

  // Objetivos (metas paralelas à FI): cada meta é uma saída futura em valores de hoje
  goals: [],

  // Proteção (seguros): dimensiona capital de vida e invalidez necessário
  protection: {
    dependentes:      1,       // nº de pessoas que dependem da sua renda
    anosDependencia:  20,      // por quantos anos a família precisa da reposição de renda
    seguroVida:       0,       // capital de seguro de vida JÁ contratado (R$)
    seguroInvalidez:  0,       // capital de seguro de invalidez JÁ contratado (R$)
    dividaCobertaMIP: null,    // saldo de dívida coberto por seguro prestamista (null = assume toda dívida ativa)
    tetoINSS:         8157,    // teto do benefício do INSS (R$/mês) — ajuste anual
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
  if (S.simulator.preFixado === undefined) { S.simulator.preFixado = 13.5; saveState(); }
  if (S.simulator.eqRate === undefined) { S.simulator.eqRate = 14.95; S.simulator.eqPeriod = 'ano'; saveState(); }
  if (S.simulator.eqMeses === undefined) { S.simulator.eqMeses = 25; saveState(); }
  if (S.simulator.stress === undefined) { S.simulator.stress = {}; saveState(); }
  if (S.simulator.selicDelta === undefined) { S.simulator.selicDelta = -2; saveState(); }
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
  // Migração: dívidas registradas.
  if (!Array.isArray(S.debts)) { S.debts = []; saveState(); }
  // Migração: metas / objetivos.
  if (!Array.isArray(S.goals)) { S.goals = []; saveState(); }
  // Migração: bloco de proteção (seguros).
  if (!S.protection) {
    S.protection = { dependentes: 1, anosDependencia: 20, seguroVida: 0, seguroInvalidez: 0, dividaCobertaMIP: null, tetoINSS: 8157 };
    saveState();
  }
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

// Perfil do último sync — preenchido por jsonpFetch/syncFromSheets, lido por syncReport().
const SYNC_PROF = {};

async function jsonpFetch(url) {
  // Tenta fetch direto (funciona com Apps Script "Anyone, even anonymous")
  const t0 = performance.now();
  const res = await fetch(url, { redirect: 'follow' });
  const t1 = performance.now();
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const text = await res.text();
  const t2 = performance.now();

  // ttfb ≈ tempo que o Apps Script levou pra montar a resposta (o gargalo tipico);
  // download = transferencia do corpo; bytes = tamanho cru do payload.
  SYNC_PROF.ttfb     = t1 - t0;
  SYNC_PROF.download = t2 - t1;
  SYNC_PROF.bytes    = text.length;

  const parse = () => {
    // Se vier JSON puro
    try { return JSON.parse(text); } catch (_) {}
    // Se vier JSONP wrappado: _fpSyncXXX({...})
    const m = text.match(/\w+\((\{[\s\S]*\})\)/);
    if (m) return JSON.parse(m[1]);
    throw new Error('Resposta inesperada do servidor: ' + text.slice(0, 120));
  };
  const data = parse();
  SYNC_PROF.parse = performance.now() - t2;
  return data;
}

// Relatorio do ultimo sync. Chame syncReport() no console.
function syncReport() {
  const p = SYNC_PROF;
  if (!p.ttfb) { console.log('[Sync] nenhum sync medido nesta sessao — clique em Sync Sheets primeiro.'); return; }
  const ms = n => (n == null ? '—' : Math.round(n) + ' ms');
  console.table({
    '1. Servidor (Apps Script montando a resposta)': { tempo: ms(p.ttfb) },
    '2. Download do payload':                        { tempo: ms(p.download) },
    '3. JSON.parse':                                 { tempo: ms(p.parse) },
    '4. Processamento no app':                        { tempo: ms(p.process) },
    '5. Render da pagina':                            { tempo: ms(p.render) },
    '6. Gravacao em localStorage (adiada)':           { tempo: ms(p.persist) },
    'TOTAL ate a tela pronta':                        { tempo: ms(p.totalToPaint) },
  });
  console.log('[Sync] payload:', (p.bytes / 1024).toFixed(0), 'KB  ·  linhas:', JSON.stringify(p.rows));
  if (p.server) { console.log('[Sync] custo por aba no Apps Script (ms):'); console.table(p.server); }
  else console.log('[Sync] o doGet nao devolve _timing — sem detalhe do servidor.');
  const worst = Math.max(p.ttfb, p.download, p.parse, p.process || 0, p.render || 0);
  if (worst === p.ttfb)     console.log('%c→ Gargalo: o SERVIDOR. O Apps Script demora pra montar a resposta. Corte o payload no doGet.', 'font-weight:bold');
  else if (worst === p.download) console.log('%c→ Gargalo: a REDE. O payload esta grande demais — pagine o mobills.', 'font-weight:bold');
  else                      console.log('%c→ Gargalo: o CLIENTE (parse/processamento/render).', 'font-weight:bold');
}

async function syncFromSheets(silent = false) {
  const url = getSyncUrl();
  if (!url) {
    if (!silent) promptSyncUrl();
    return;
  }

  updateSyncBtn('syncing');
  const tSync = performance.now();
  // Gravacoes em localStorage sao sincronas e travam a thread principal (caro no
  // iPhone, onde o mobills ja passa de centenas de KB). Enfileira aqui e grava
  // depois do render — a tela fica pronta antes do disco.
  const pendingWrites = [];
  try {
    const data = await jsonpFetch(url);
    if (data.error) throw new Error(data.error);
    const tProcess = performance.now();
    // Se o doGet devolver _timing (ms por aba), o relatorio mostra o custo servidor a servidor.
    SYNC_PROF.server = data._timing || null;

    console.log('[Sync] historical rows:', data.historical?.length);
    console.log('[Sync] portfolio:', JSON.stringify(data.portfolio));

    let changed = false;

    // ── Atualiza histórico ──────────────────────────────
    if (Array.isArray(data.historical) && data.historical.length > 0) {
      // Substitui o array global HISTORICAL
      HISTORICAL.length = 0;
      data.historical.forEach(r => {
        // Colunas de % vêm da planilha como fração (0,19) — normaliza p/ pontos percentuais (19,03).
        ['cres','rent','txp'].forEach(k => { if (typeof r[k] === 'number') r[k] *= 100; });
        HISTORICAL.push(r);
      });
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

    // ── Atualiza estrutura de Seções (aba Fluxo de Caixa, linha 23+) ──
    if (Array.isArray(data.fluxo) && data.fluxo.length > 0) {
      pendingWrites.push(['finplan_fluxo_secoes', data.fluxo]);
      const dyn = buildSecoesFromFluxo(data.fluxo);
      if (dyn) { SECAO_DYN = dyn; applySecaoColors(dyn.order); }
      console.log('[Sync] fluxo rows:', data.fluxo.length, '→ seções:', dyn ? dyn.order.join(', ') : '(agrupamento falhou — usando mapa fixo)');
      changed = true;
    }

    // ── Atualiza espelho da aba Financiamento ─────────────
    if (Array.isArray(data.financiamento) && data.financiamento.length > 0) {
      FINANCIAMENTO = data.financiamento;
      pendingWrites.push(['finplan_financiamento', FINANCIAMENTO]);
      console.log('[Sync] financiamento rows:', FINANCIAMENTO.length);
      changed = true;
    }

    // ── Atualiza espelho da grade Fluxo de Caixa ──────────
    if (Array.isArray(data.fluxoGrid) && data.fluxoGrid.length > 0) {
      FLUXOGRID = data.fluxoGrid;
      pendingWrites.push(['finplan_fluxogrid', FLUXOGRID]);
      console.log('[Sync] fluxoGrid rows:', FLUXOGRID.length);
      changed = true;
    }
    if (Array.isArray(data.fluxoBold) && data.fluxoBold.length > 0) {
      FLUXOBOLD = data.fluxoBold;
      pendingWrites.push(['finplan_fluxobold', FLUXOBOLD]);
      changed = true;
    }

    // ── Atualiza Mobills ──────────────────────────────────
    if (Array.isArray(data.mobills) && data.mobills.length > 0) {
      MOBILLS_RAW = data.mobills;
      pendingWrites.push(['finplan_mobills', MOBILLS_RAW]);
      refreshMobillsFilter();
      console.log('[Sync] mobills rows:', MOBILLS.length, '/', MOBILLS_RAW.length, 'brutos');
      changed = true;
      validateMobillsVsHistorical();
    }

    SYNC_PROF.process = performance.now() - tProcess;
    SYNC_PROF.rows = {
      historical: (data.historical || []).length,
      mobills:    (data.mobills || []).length,
      fluxoGrid:  (data.fluxoGrid || []).length,
      fluxo:      (data.fluxo || []).length,
      financ:     (data.financiamento || []).length,
    };

    const tRender = performance.now();
    if (changed) renderPage(activePage);
    SYNC_PROF.render = performance.now() - tRender;

    const now = new Date().toLocaleTimeString('pt-BR', { hour:'2-digit', minute:'2-digit' });
    localStorage.setItem('finplan_last_sync', now);
    updateSyncBtn('ok', now);
    SYNC_PROF.totalToPaint = performance.now() - tSync;

    // Persiste fora do caminho critico. Se o app morrer antes, o proximo sync
    // rebusca tudo — nao ha perda de dado que so exista aqui.
    if (changed) flushSyncWrites(pendingWrites);

  } catch (err) {
    console.error('Sync error:', err);
    updateSyncBtn('error');
    if (!silent) promptSyncUrl(err.message);
  }
}

// Grava o resultado do sync em localStorage depois que a tela ja pintou.
// Se o app for pra background antes de terminar, esvazia na hora (pagehide).
let _pendingFlush = null;
function flushSyncWrites(writes) {
  const doFlush = () => {
    if (!_pendingFlush) return;
    _pendingFlush = null;
    const t0 = performance.now();
    try {
      saveState();
      writes.forEach(([k, v]) => localStorage.setItem(k, JSON.stringify(v)));
    } catch (e) {
      // QuotaExceededError: o mobills cresceu alem do limite de ~5 MB do Safari.
      // A sessao atual segue correta (os dados estao em memoria); o que falha e a
      // persistencia entre aberturas. Avisa em vez de fingir que o sync deu erro.
      console.error('[Sync] falha ao persistir (' + e.name + '). ' +
        'Provavel estouro de cota do localStorage — corte o historico do mobills no doGet.', e);
      updateSyncBtn('error');
    }
    SYNC_PROF.persist = performance.now() - t0;
  };

  _pendingFlush = doFlush;
  // NAO usar requestAnimationFrame aqui: ele nao dispara em aba/app oculto, e o
  // sync automatico costuma terminar justamente com o app em background — a
  // gravacao nunca aconteceria. setTimeout dispara de qualquer forma; 50 ms da
  // a batida que o browser precisa pra pintar primeiro.
  setTimeout(doFlush, 50);
}
// Rede de seguranca: se o app for fechado ou escondido antes dos 50 ms, grava agora.
window.addEventListener('pagehide', () => { if (_pendingFlush) _pendingFlush(); });
document.addEventListener('visibilitychange', () => {
  if (document.hidden && _pendingFlush) _pendingFlush();
});

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

function projectPath(months, startWealth, annualReturn, incDelta, expDelta, extraFlows) {
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

    const extra = extraFlows ? (extraFlows[m] || 0) : 0;   // saídas de metas (item Objetivos)

    w = Math.max(0, w + ret + savings + evImpact + extra);
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

// ── Metas / Objetivos ─────────────────────────────────────
// Valor da meta na data-alvo, EM VALORES DE HOJE: o custo escala por inflacaoReal (acima do IPCA).
// Ex.: educação a +5% real dobra o custo real em ~14 anos, mesmo já descontada a inflação geral.
function goalValorNaData(g) {
  const off = Math.max(0, monthsBetween(projectionStart().str, g.dataAlvo));
  return g.valor * Math.pow(1 + (g.inflacaoReal || 0) / 100, off / 12);
}
// Mapa mês→saída (negativa) para injetar as metas no projectPath.
function goalFlows() {
  const start = projectionStart().str;
  const flows = {};
  for (const g of (S.goals || [])) {
    const off = monthsBetween(start, g.dataAlvo);
    if (off < 0) continue;
    flows[off] = (flows[off] || 0) - goalValorNaData(g);
  }
  return flows;
}
// FI sem e com as metas — o trade-off "custear os objetivos atrasa a FI em quanto?".
function goalsFIImpact() {
  const months = (S.assumptions.projectionYears || 30) * 12;
  const w0 = investableWealth(), base = weightedReturnReal();
  const sem = findFIDate(projectPath(months, w0, base, 0, 0));
  const com = findFIDate(projectPath(months, w0, base, 0, 0, goalFlows()));
  return { sem, com };
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
// Prioriza a taxa de poupança já calculada na planilha (h.txp) — é a fonte de verdade que o
// usuário confere lá; só recalcula (rec-gas)/rec quando a célula está vazia.
function savingsRateOf(h) {
  return h.txp ?? savingsRate(h);
}
// Aporte que de fato entrou no patrimônio líquido (pl) — exclui o que foi pra imóvel.
// "Resultado de mercado" é sempre Δpl − aporte; se o aporte usado inclui imóvel, o
// residual absorve esse valor como se fosse rentabilidade (negativa) que nunca existiu.
// Cai no aporte TOTAL nos meses sem o split (coluna nova, sem histórico retroativo).
function apoPLOf(h) {
  return h.apoPL ?? h.apo ?? 0;
}

// ── 5b. ANALYTICS ENGINE ──────────────────────────────────

// CDI médio anual aproximado (% a.a.) — benchmark histórico
const CDI_YEARLY = { 2017:9.9, 2018:6.4, 2019:5.9, 2020:2.8, 2021:4.4, 2022:12.4, 2023:13.0, 2024:10.9, 2025:14.7, 2026:13.6 };
// IPCA anual (%) — inflação oficial. 2025/2026 estimados. Usado p/ deflacionar o patrimônio.
const IPCA_YEARLY = { 2017:2.95, 2018:3.75, 2019:4.31, 2020:4.52, 2021:10.06, 2022:5.79, 2023:4.62, 2024:4.83, 2025:4.80, 2026:4.50 };

// Retorno mensal realizado da carteira. Fonte da verdade = coluna Rentabilidade da planilha
// (h.rent, já em % → ÷100), para o heatmap ficar IDÊNTICO à planilha. Só quando o mês não tem
// rentabilidade sincronizada é que cai no recálculo (Δpl - aporte)/pl anterior — sobre o
// patrimônio LÍQUIDO (o de fato investido); pat inclui imóvel e poluiria o retorno.
// O aporte do recálculo é sempre apoPLOf: aporte em imóvel não move o pl, então usar o
// aporte total inflava/inventava retorno negativo nos meses sem h.rent sincronizado — o
// mesmo bug que existia no Relatório e no Insights, só que na fonte que os dois consomem.
function realizedReturns() {
  const out = [];
  for (let i = 1; i < HISTORICAL.length; i++) {
    const prev = HISTORICAL[i-1], cur = HISTORICAL[i];
    if (cur.rent != null && cur.rent !== '') {
      out.push({ d: cur.d, r: cur.rent / 100 });
    } else if (prev.pl > 0 && cur.pl != null) {
      // recálculo SEMPRE sobre o líquido (pl) — nunca 'pat', que inclui o imóvel e distorce
      out.push({ d: cur.d, r: (cur.pl - prev.pl - apoPLOf(cur)) / prev.pl });
    }
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
  for (let i = 1; i < HISTORICAL.length; i++) {
    const a = HISTORICAL[i].apo || 0;   // começa no i=1 p/ alinhar com rentabilidade/patrimônio (que são variação)
    if (a > 0) apo.pos++; else if (a < 0) apo.neg++;
  }
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

// Calcula os produtos e retorna array pronto para tabela/gráfico.
function simulate() {
  const { valor, meses, cdi, ipca, selic, pctCDB, pctLCI, pctTSelic, spreadIPCA, preFixado } = S.simulator;
  const anos  = meses / 12;
  const dias  = meses * 30;
  const aliq  = irRate(dias);

  const produtos = [
    { key:'cdb',    nome:'CDB / RDB',        sub:`${pctCDB}% CDI`,          taxa: cdi * pctCDB / 100,                               isento: false },
    { key:'pre',    nome:'Pré-fixado',        sub:`${fmtPct(preFixado)} a.a.`, taxa: preFixado,                                       isento: false },
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

// Volatilidade anual estimada por classe (% a.a.) — para Monte Carlo.
// Cobre as 8 classes canônicas (assetForm) para não cair no fallback otimista de 10:
// 'intl' inclui o câmbio (S&P em BRL) e é a mais volátil; 'imovel' fica ilíquido/suavizado,
// mas entra só como catch-all (a FI roda sobre investável, que exclui imóvel).
const VOL_BY_CAT = { rf: 2.5, rv: 18, fii: 12, intl: 22, cash: 0.5, prev: 9, imovel: 10, outro: 12 };

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
  const w0 = investableWealth();
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

// Monte Carlo de DECUMULAÇÃO: o dinheiro dura depois da FI?
// Cada simulação: acumula (poupança projetada) até atingir a FI ou a idade de
// aposentadoria (o que vier primeiro); daí em diante saca a renda-alvo mensal
// (real) até a idade-horizonte. Sucesso = patrimônio nunca zera.
function monteCarloDecum(nSims = 500, horizonAge = 90) {
  const fiNum = fiNumber();
  const w0    = investableWealth();
  const muM   = Math.pow(1 + weightedReturnReal() / 100, 1/12) - 1;
  const volM  = (portfolioVol() / 100) / Math.sqrt(12);
  const A     = S.assumptions, age0 = currentAge();
  const retAge = A.retirementAge > 0 ? A.retirementAge : Infinity;
  const capY   = A.incomeGrowthCapYears > 0 ? A.incomeGrowthCapYears : Infinity;
  const saque  = S.fi.targetMonthlyIncome;
  const months = Math.max(12, Math.round((horizonAge - age0) * 12));

  // Poupança mensal na fase de acumulação (mesma lógica do monteCarloFI)
  const sav = [];
  for (let m = 0; m < months; m++) {
    const y = m / 12;
    const gY = Math.min(y, capY);
    const inc = S.incomes.filter(i => i.active).reduce((s, i) => s + i.amount * Math.pow(1 + i.growthRate/100, gY), 0);
    const exp = S.expenses.filter(e => e.active).reduce((s, e) => s + e.amount * Math.pow(1 + e.growthRate/100, y), 0);
    sav.push(inc - exp);
  }

  let ok = 0;
  const finals = [], ruinAges = [];
  for (let s = 0; s < nSims; s++) {
    let w = w0, retired = false, ruined = false;
    for (let m = 0; m < months; m++) {
      const age = age0 + m / 12;
      if (!retired && (w >= fiNum || age >= retAge)) retired = true;
      const flow = retired ? -saque : sav[m];
      w = w * (1 + muM + volM * randn()) + flow;
      if (w <= 0) { ruined = true; ruinAges.push(age); break; }
    }
    if (!ruined) { ok++; finals.push(w); }
  }

  finals.sort((a, b) => a - b);
  ruinAges.sort((a, b) => a - b);
  const q = (arr, p) => arr.length ? arr[Math.min(arr.length - 1, Math.floor(p * arr.length))] : null;
  return {
    successRate:   ok / nSims * 100,
    medianFinal:   q(finals, 0.5),
    p10Final:      q(finals, 0.10),
    medianRuinAge: q(ruinAges, 0.5),
    horizonAge, sims: nSims, saque,
  };
}

// Projeção em termos reais: desconta IPCA de retorno e crescimentos.
// Meta FI permanece em dinheiro de hoje.
function realBasePath(months) {
  const ipca = S.assumptions.ipca || 5.5;
  const realRet = ((1 + weightedReturn()/100) / (1 + ipca/100) - 1) * 100;
  return projectPath(months, investableWealth(), realRet, -ipca, -ipca);
}

// Runway: meses de gasto cobertos pelo patrimônio investível se a renda parar hoje.
// Base = investável (RV/FII entram — dá pra vender numa emergência; imóvel fica de fora, não é reserva).
function runwayMonths() {
  const liquid = investableWealth();
  const last12 = HISTORICAL.slice(-12);
  const avgGas = last12.reduce((s, h) => s + h.gas, 0) / Math.max(1, last12.length);
  return avgGas > 0 ? liquid / avgGas : 0;
}

// Coast FI: anos até a meta se parar de aportar hoje (juros reais sozinhos)
function coastFIYears() {
  const ipca = S.assumptions.ipca || 5.5;
  const rReal = (1 + weightedReturn()/100) / (1 + ipca/100) - 1;
  const w0 = investableWealth(), fin = fiNumber();
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

// Retorno real anual necessário p/ atingir a FI até a aposentadoria, dado o aporte atual.
// Busca binária; 0 se já atingiu; null se nem 30% real resolve (meta inatingível no prazo).
function requiredRealReturn() {
  const w0 = investableWealth(), target = fiNumber();
  if (w0 >= target) return 0;
  const n = Math.max(1, (S.assumptions.retirementAge || 60) - currentAge());
  const months = n * 12;
  const inc = S.incomes.filter(i => i.active).reduce((s, i) => s + i.amount, 0);
  const exp = S.expenses.filter(e => e.active).reduce((s, e) => s + e.amount, 0);
  const pmt = Math.max(0, inc - exp);
  const fv = rA => {
    const rm = Math.pow(1 + rA / 100, 1/12) - 1;
    let w = w0;
    for (let m = 0; m < months; m++) w = w * (1 + rm) + pmt;
    return w;
  };
  if (fv(30) < target) return null;
  let lo = -5, hi = 30;
  for (let i = 0; i < 60; i++) { const mid = (lo + hi) / 2; if (fv(mid) >= target) hi = mid; else lo = mid; }
  return (lo + hi) / 2;
}

// Maior queda pico-a-vale já vivida no patrimônio investível (pl) — tolerância a risco COMPROVADA.
// Usa só o líquido; meses sem pl são ignorados (cair no 'pat' misturaria o imóvel e falsearia a queda).
function maxDrawdownHist() {
  let peak = -Infinity, maxDD = 0;
  for (const h of HISTORICAL) {
    if (h.pl == null) continue;
    if (h.pl > peak) peak = h.pl;
    if (peak > 0) maxDD = Math.max(maxDD, (peak - h.pl) / peak);
  }
  return maxDD * 100;
}

// Perfil de risco: cruza Necessidade × Capacidade × Tolerância. A alocação deve respeitar a MENOR.
function riskProfile() {
  const w0 = investableWealth(), target = fiNumber();
  const reqReal = requiredRealReturn();
  const expReal = weightedReturnReal();
  const anos = Math.max(0, (S.assumptions.retirementAge || 60) - currentAge());
  const dd = maxDrawdownHist();
  const total = S.portfolio.reduce((s, a) => s + a.value, 0);
  const risco = S.portfolio.reduce((s, a) => s + (['rv', 'fii', 'intl'].includes(a.cat) ? a.value : 0), 0);
  const rvPct = total > 0 ? risco / total * 100 : 0;

  // Necessidade — quanto risco você PRECISA
  let nec, necLvl, necTxt;
  if (w0 >= target) { nec = 1; necLvl = 'baixa'; necTxt = 'Você já atingiu a meta — não precisa de risco nenhum.'; }
  else if (reqReal == null) { nec = 3; necLvl = 'alta'; necTxt = 'A meta não fecha nem com retorno alto no prazo — reveja aporte ou meta.'; }
  else if (reqReal <= 2) { nec = 1; necLvl = 'baixa'; necTxt = `Precisa de só ${fmtPct(reqReal)} real a.a. — folga sobre os ${fmtPct(expReal)} esperados.`; }
  else if (reqReal <= 5) { nec = 2; necLvl = 'média'; necTxt = `Precisa de ${fmtPct(reqReal)} real a.a. para bater a meta no prazo.`; }
  else { nec = 3; necLvl = 'alta'; necTxt = `Precisa de ${fmtPct(reqReal)} real a.a. — exige carteira agressiva ou mais aporte.`; }

  // Capacidade — quanto risco você PODE (horizonte)
  let cap, capLvl;
  if (anos >= 15) { cap = 3; capLvl = 'alta'; }
  else if (anos >= 7) { cap = 2; capLvl = 'média'; }
  else { cap = 1; capLvl = 'baixa'; }

  // Tolerância COMPROVADA — pelo maior tombo já vivido
  let tol, tolLvl, tolTxt;
  if (dd >= 20) { tol = 3; tolLvl = 'alta'; tolTxt = `Já viveu uma queda de ${fmtPct(dd)} e seguiu — tolerância comprovada.`; }
  else if (dd >= 8) { tol = 2; tolLvl = 'média'; tolTxt = `Maior queda vivida no patrimônio: ${fmtPct(dd)}.`; }
  else { tol = 2; tolLvl = 'não testada'; tolTxt = `Nunca passou por queda relevante (máx ${fmtPct(dd)}) — tolerância ainda não testada.`; }

  const minLvl = Math.min(nec, cap, tol);
  const rec = minLvl <= 1 ? 'conservadora' : (minLvl === 2 ? 'moderada' : 'arrojada');
  const overRisk = necLvl === 'baixa' && rvPct > 40;   // "ganhou o jogo" e ainda joga pesado

  return { reqReal, expReal, anos, dd, rvPct, necLvl, necTxt, capLvl, tolLvl, tolTxt, rec, overRisk, atingiu: w0 >= target };
}

// Inflação pessoal (INFORMATIVO — não entra em nenhuma projeção):
// crescimento dos gastos recorrentes (col. J da planilha) últimos 12m vs 12m anteriores.
// Cai nos gastos totais se a coluna ainda não tiver 24 meses de dados.
function inflacaoPessoal() {
  const wRec = HISTORICAL.filter(h => h.gasRec != null && h.gasRec > 0);
  let series, src;
  if (wRec.length >= 24) { series = wRec.map(h => h.gasRec); src = 'Gastos Recorrentes (planilha, col. J)'; }
  else if (HISTORICAL.length >= 24) { series = HISTORICAL.map(h => h.gas); src = 'Gastos Totais (histórico) — inclui não-recorrentes, mais ruidoso'; }
  else return null;
  const last12 = series.slice(-12).reduce((s, v) => s + v, 0);
  const prev12 = series.slice(-24, -12).reduce((s, v) => s + v, 0);
  if (prev12 <= 0) return null;
  return { pct: (last12 / prev12 - 1) * 100, avgLast12: last12 / 12, avgPrev12: prev12 / 12, src };
}

// ── 5c. DÍVIDAS — cronograma SAC/Price a partir do registro ──
function monthsBetween(fromYYYYMM, toYYYYMM) {
  const [y1, m1] = fromYYYYMM.split('-').map(Number);
  const [y2, m2] = toYYYYMM.split('-').map(Number);
  return (y2 - y1) * 12 + (m2 - m1);
}

// Cronograma mensal completo desde a data de referência até a quitação.
function debtSchedule(d) {
  const jm = d.taxaMes / 100;
  const n  = d.parcelas;
  const out = [];
  let saldo = d.saldo;
  if (d.sistema === 'price') {
    const P = jm > 0 ? saldo * jm / (1 - Math.pow(1 + jm, -n)) : saldo / n;
    for (let k = 0; k < n && saldo > 0.01; k++) {
      const juros = saldo * jm;
      const amort = Math.min(P - juros, saldo);
      out.push({ k, saldoIni: saldo, juros, amort, parcela: juros + amort, saldoFim: saldo - amort });
      saldo -= amort;
    }
  } else { // SAC
    const amortFixa = saldo / n;
    for (let k = 0; k < n && saldo > 0.01; k++) {
      const juros = saldo * jm;
      out.push({ k, saldoIni: saldo, juros, amort: amortFixa, parcela: amortFixa + juros, saldoFim: saldo - amortFixa });
      saldo -= amortFixa;
    }
  }
  return out;
}

// Posição atual da dívida: quantos meses se passaram desde dataRef.
function debtNow(d) {
  const now = new Date();
  const curKey = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');
  const sched = debtSchedule(d);
  const idx = Math.max(0, Math.min(monthsBetween(d.dataRef, curKey), sched.length));
  if (idx >= sched.length) {
    return { quitada: true, sched, idx, saldoAtual: 0, parcelaAtual: 0, jurosMes: 0, amortMes: 0, mesesRestantes: 0, jurosRestantes: 0 };
  }
  const cur = sched[idx];
  const jurosRestantes = sched.slice(idx).reduce((s, r) => s + r.juros, 0);
  return {
    quitada: false, sched, idx,
    saldoAtual: cur.saldoIni, parcelaAtual: cur.parcela,
    jurosMes: cur.juros, amortMes: cur.amort,
    mesesRestantes: sched.length - idx, jurosRestantes,
    quitacao: addMonths(d.dataRef, sched.length),
  };
}

// ── 5d. EXPLICADOR DE MÉTRICAS (ⓘ) ───────────────────────
// Cada entrada devolve a conta VIVA: termos com valores atuais e a fonte de cada um.
const METRIC_DOCS = {
  runway: () => {
    const liquid = investableWealth();
    const last12 = HISTORICAL.slice(-12);
    const avgGas = last12.reduce((s, h) => s + h.gas, 0) / Math.max(1, last12.length);
    return {
      title: 'Runway',
      what: 'Quantos meses o patrimônio investível banca seus gastos se a renda parar hoje.',
      calc: [
        ['Patrimônio investível (exclui imóvel; RV/FII entram)', fmt(liquid)],
        ['÷ Gasto médio 12m (Histórico, col. Gastos)', fmt(avgGas) + '/mês'],
        ['= Runway', Math.round(liquid / avgGas) + ' meses (' + (liquid / avgGas / 12).toFixed(1) + ' anos)'],
      ],
      ignores: 'Rendimento da carteira e inflação dos gastos — trata o dinheiro como caixa parado. O imóvel fica de fora (não é reserva).',
      assumes: 'Gasto mensal constante no nível da média dos últimos 12 meses.',
      sim: {
        inputs: [
          { key: 'gasto', label: 'Simular gasto mensal', value: Math.round(avgGas), step: 100, min: 0, unit: 'R$/mês' },
        ],
        recompute: v => {
          const g = v.gasto;
          if (!(g > 0)) return '<span style="color:var(--text-muted)">Informe um gasto válido.</span>';
          const m = liquid / g;
          return `${fmt(liquid)} ÷ ${fmt(g)}/mês = <b style="color:var(--accent);font-size:15px">${Math.round(m)} meses</b> <span style="color:var(--text-muted)">(${(m/12).toFixed(1)} anos)</span>`;
        },
      },
    };
  },
  coastfi: () => {
    const ipca = S.assumptions.ipca || 5.5;
    const rReal = ((1 + weightedReturn()/100) / (1 + ipca/100) - 1) * 100;
    return {
      title: 'Coast FI',
      what: 'Em quantos anos você chega à FI se NUNCA mais aportar — só juros compostos reais.',
      calc: [
        ['Patrimônio investível hoje', fmt(investableWealth())],
        ['Número FI (meta)', fmt(fiNumber())],
        ['Retorno real da carteira (premissa − IPCA)', fmtPct(rReal) + ' a.a.'],
        ['= ln(meta ÷ atual) ÷ ln(1 + retorno real)', (coastFIYears() ?? 0).toFixed(1) + ' anos'],
      ],
      ignores: 'Aportes futuros (é o ponto: zero contribuição) e volatilidade — usa retorno médio constante.',
      assumes: 'O retorno é a PREMISSA da carteira (aba Patrimônio), não o realizado.',
      sim: {
        inputs: [
          { key: 'atual', label: 'Simular patrimônio atual', value: Math.round(investableWealth()), step: 10000, min: 0, unit: 'R$' },
          { key: 'retorno', label: 'Simular retorno real', value: +rReal.toFixed(1), step: 0.5, unit: '% a.a.' },
        ],
        recompute: v => {
          const fin = fiNumber(), atual = v.atual, rr = v.retorno / 100;
          if (atual >= fin) return `Com ${fmtK(atual)} você já teria atingido a meta de ${fmtK(fin)}.`;
          if (rr <= 0) return `<span style="color:var(--red)">Retorno real ≤ 0 — nunca chega sozinho.</span>`;
          const anos = Math.log(fin / atual) / Math.log(1 + rr);
          return `ln(${fmtK(fin)} ÷ ${fmtK(atual)}) ÷ ln(1+${fmtPct(v.retorno)}) = <b style="color:var(--accent);font-size:15px">${anos.toFixed(1)} anos</b> <span style="color:var(--text-muted)">(aos ${Math.round(currentAge() + anos)} anos)</span>`;
        },
      },
    };
  },
  coverage: () => {
    const c = passiveCoverage();
    return {
      title: 'Cobertura Renda Passiva',
      what: 'Quanto dos seus gastos a renda estimada da carteira já paga hoje.',
      calc: [
        ['Renda passiva estimada (Σ ativo × retorno ÷ 12)', fmt(c.passiveMonthly) + '/mês'],
        ['÷ Gasto médio 12m (Histórico)', fmt(c.avgGas) + '/mês'],
        ['= Cobertura', fmtPct(c.pct)],
      ],
      ignores: 'IR sobre os rendimentos e a diferença entre retorno esperado e distribuído (nem todo retorno vira caixa).',
      assumes: 'Cada ativo rende exatamente o retorno cadastrado na aba Patrimônio.',
      sim: {
        inputs: [
          { key: 'gasto', label: 'Simular gasto mensal', value: Math.round(c.avgGas), step: 100, min: 0, unit: 'R$/mês' },
        ],
        recompute: v => {
          const g = v.gasto;
          if (!(g > 0)) return '<span style="color:var(--text-muted)">Informe um gasto válido.</span>';
          const pct = c.passiveMonthly / g * 100;
          return `${fmt(c.passiveMonthly)}/mês ÷ ${fmt(g)}/mês = <b style="color:${pct>=100?'var(--green)':pct>=50?'var(--accent)':'var(--yellow)'};font-size:15px">${fmtPct(pct)}</b> de cobertura`;
        },
      },
    };
  },
  finumber: () => {
    const isPerp = S.fi.mode === 'perpetuidade';
    return {
      title: 'Número FI',
      what: 'O patrimônio investível que sustenta sua renda-alvo sem trabalho.',
      calc: [
        ['Renda mensal almejada', fmt(S.fi.targetMonthlyIncome)],
        ['× 12 = necessidade anual', fmt(S.fi.targetMonthlyIncome * 12)],
        [isPerp ? '÷ Juro real esperado (modo perpetuidade)' : '÷ Taxa de retirada segura (regra dos 4%)', fmtPct(fiRate())],
        ['= Número FI', fmt(fiNumber())],
      ],
      ignores: 'IR sobre os saques — a renda-alvo é tratada como líquida.',
      assumes: isPerp
        ? 'Você vive só do juro real: o principal se preserva para sempre em valor de hoje. Juro maior assumido → precisa de MENOS principal (por isso a meta cai quando a taxa sobe).'
        : 'A taxa é a premissa de quanto dá pra sacar por ano sem quebrar — taxa maior exige MENOS patrimônio (meta cai), mas aumenta o risco de ruína. O contrapeso está no card Sobrevivência pós-FI.',
    };
  },
  fidate: () => {
    const inc = S.incomes.filter(i => i.active).reduce((s, i) => s + i.amount, 0);
    const exp = S.expenses.filter(e => e.active).reduce((s, e) => s + e.amount, 0);
    return {
      title: 'Data Estimada da FI (cenário base)',
      what: 'Primeiro mês em que o patrimônio projetado cruza o Número FI, numa simulação mês a mês determinística.',
      calc: [
        ['Ponto de partida (patrimônio investível)', fmt(investableWealth())],
        ['Retorno real (premissa carteira − IPCA)', fmtPct(weightedReturnReal()) + ' a.a.'],
        ['+ Poupança mensal (aba Fluxo de Caixa)', fmt(inc - exp) + '/mês (' + fmt(inc) + ' − ' + fmt(exp) + ')'],
        ['Meta: Número FI', fmt(fiNumber())],
      ],
      ignores: 'Volatilidade (é o caminho médio — veja o Monte Carlo para a dispersão) e os aportes reais do Histórico (usa o fluxo de caixa manual).',
      assumes: 'Poupança constante em termos reais e retorno igual à premissa todos os meses.',
    };
  },
  finominal: () => ({
    title: 'FI Nominal (ilusão)',
    what: 'A mesma projeção, mas SEM descontar a inflação — em reais futuros, que valem menos.',
    calc: [
      ['Retorno nominal da carteira', fmtPct(weightedReturn()) + ' a.a.'],
      ['IPCA (premissa)', fmtPct(S.assumptions.ipca) + ' a.a.'],
      ['Real usado na projeção oficial', fmtPct(weightedReturnReal()) + ' a.a.'],
    ],
    ignores: 'O poder de compra: R$ 7,5M em 2034 nominais compram menos que R$ 7,5M de hoje.',
    assumes: 'Existe só como contraste — a data oficial é a REAL, que já desconta a inflação.',
  }),
  montecarlo: () => ({
    title: 'Monte Carlo — chegada à FI',
    what: '500 simulações do caminho até a FI, cada mês sorteando um retorno em torno da média.',
    calc: [
      ['Retorno real médio (μ)', fmtPct(weightedReturnReal()) + ' a.a.'],
      ['Volatilidade da carteira (σ, por classe)', fmtPct(portfolioVol()) + ' a.a.'],
      ['P10/P50/P90', 'os meses em que 10%/50%/90% das simulações atingiram a meta'],
    ],
    ignores: 'Correlações entre classes (superestima um pouco o risco) e caudas gordas (usa distribuição normal — crashes reais são piores).',
    assumes: 'Poupança mensal igual à do cenário determinístico.',
  }),
  mcdecum: () => {
    const r = window._lastMcDecum;
    return {
      title: 'Sobrevivência pós-FI',
      what: 'A pergunta que importa: depois de parar de trabalhar, o dinheiro DURA? Cada simulação acumula até a FI (ou até a idade de aposentadoria) e depois saca a renda-alvo todo mês.',
      calc: [
        ['Saque mensal na aposentadoria (renda-alvo, real)', fmt(S.fi.targetMonthlyIncome)],
        ['Horizonte', 'até os ' + (r ? r.horizonAge : 90) + ' anos'],
        ['Retorno real μ ± σ', fmtPct(weightedReturnReal()) + ' ± ' + fmtPct(portfolioVol()) + ' a.a.'],
        ['= Taxa de sucesso', r ? fmtPct(r.successRate) + ' das ' + r.sims + ' simulações' : '—'],
      ],
      ignores: 'IR sobre saques, mudanças de gasto na velhice e flexibilidade (cortar gasto em ano ruim melhora muito o resultado real).',
      assumes: 'Saque fixo em valor de hoje, sem ajuste de comportamento — é o teste mais duro.',
      sim: {
        inputs: [
          { key: 'saque', label: 'Simular saque mensal', value: S.fi.targetMonthlyIncome, step: 500, min: 0, unit: 'R$/mês' },
          { key: 'horizonte', label: 'Simular até a idade', value: r ? r.horizonAge : 90, step: 1, min: currentAge() + 1, unit: 'anos' },
        ],
        recompute: v => {
          const saveInc = S.fi.targetMonthlyIncome;
          S.fi.targetMonthlyIncome = v.saque;
          const rr = monteCarloDecum(250, Math.round(v.horizonte));
          S.fi.targetMonthlyIncome = saveInc;   // nunca persiste — só simula
          const col = rr.successRate >= 90 ? 'var(--green)' : rr.successRate >= 75 ? 'var(--yellow)' : 'var(--red)';
          return `Sacando ${fmt(v.saque)}/mês até os ${Math.round(v.horizonte)} anos: <b style="color:${col};font-size:15px">${fmtPct(rr.successRate)}</b> de sucesso`;
        },
      },
    };
  },
  twr: () => ({
    title: 'Retorno Realizado (TWR)',
    what: 'O retorno REAL que sua carteira entregou, isolando o efeito dos aportes.',
    calc: [
      ['Cada mês: (Δpatrimônio − aporte) ÷ patrimônio anterior', 'coluna Rentabilidade do Histórico'],
      ['Compõe os últimos 12 meses e anualiza', fmtPct(twr(12)) + ' a.a.'],
      ['Desde o início', fmtPct(twr()) + ' a.a.'],
    ],
    ignores: 'Nada — mas depende da qualidade do "apo" da planilha: aporte mal medido distorce o retorno.',
    assumes: 'O aporte registrado no mês é todo o dinheiro novo que entrou.',
  }),
  alpha: () => ({
    title: 'Alpha vs CDI',
    what: 'Quanto sua carteira ganhou (ou perdeu) do benchmark mais básico do Brasil.',
    calc: [
      ['TWR 12m (realizado)', fmtPct(twr(12)) + ' a.a.'],
      ['− CDI no mesmo período', fmtPct(cdiAnnualized(12)) + ' a.a.'],
      ['= Alpha', fmtPct(twr(12) - cdiAnnualized(12))],
    ],
    ignores: 'Risco: bater o CDI tomando muito mais risco não é a mesma coisa que bater com pouco.',
    assumes: 'CDI anual por tabela fixa no código (2026 é estimativa).',
  }),
  cagr: () => {
    const last = HISTORICAL[HISTORICAL.length-1], first = HISTORICAL[0];
    const years = HISTORICAL.length / 12;
    return {
      title: 'CAGR do Patrimônio',
      what: 'Crescimento anual composto do patrimônio TOTAL — esforço (aportes) + juros juntos.',
      calc: [
        ['Patrimônio inicial (' + monthLabel(first.d) + ')', fmt(first.pat)],
        ['Patrimônio atual (' + monthLabel(last.d) + ')', fmt(last.pat)],
        ['(final ÷ inicial)^(1 ÷ ' + years.toFixed(1) + ' anos) − 1', fmtPct((Math.pow(last.pat/first.pat, 1/years) - 1) * 100)],
      ],
      ignores: 'NÃO é retorno de investimento — inclui todos os aportes. Para retorno puro, veja o TWR.',
      assumes: '',
    };
  },
  savingsrate: () => {
    const last3h = HISTORICAL.slice(-3).filter(h => h.rec > 0);
    const avg = last3h.length ? last3h.reduce((s, h) => s + savingsRateOf(h), 0) / last3h.length : 0;
    return {
      title: 'Taxa de Poupança',
      what: 'De tudo que entrou, quanto sobrou — mês a mês, depois média.',
      calc: [
        ['Cada mês: taxa da planilha (col. Taxa de Poupança)', 'recalcula (Receita−Gastos)÷Receita só se a célula estiver vazia'],
        ['Média dos últimos 3 meses', fmtPct(avg)],
      ],
      ignores: 'O "apo" no recálculo de fallback — de propósito: aporte inclui rendimento reinvestido e estouraria 100%.',
      assumes: 'Meses sem receita ficam de fora da média.',
    };
  },
  inflacao: () => {
    const inf = inflacaoPessoal();
    if (!inf) return { title: 'Inflação Pessoal', what: 'Sem dados suficientes (precisa de 24 meses).', calc: [], ignores: '', assumes: '' };
    return {
      title: 'Inflação Pessoal',
      what: 'Quanto o SEU custo de vida subiu, medido pelos seus próprios gastos — comparado ao IPCA.',
      calc: [
        ['Fonte', inf.src],
        ['Média mensal últimos 12m', fmt(inf.avgLast12)],
        ['÷ Média mensal 12m anteriores', fmt(inf.avgPrev12)],
        ['= Inflação pessoal', fmtPct(inf.pct) + ' vs IPCA ' + fmtPct(S.assumptions.ipca)],
      ],
      ignores: 'Mudanças de cesta: se seu padrão de consumo mudou (não só os preços), o número mistura as duas coisas.',
      assumes: 'INFORMATIVO — este número NÃO alimenta nenhuma projeção do app.',
    };
  },
};

function explainMetric(key) {
  const fn = METRIC_DOCS[key];
  if (!fn) return;
  const d = fn();
  window._metricSimKey = key;
  window._metricSimVals = {};
  if (d.sim) d.sim.inputs.forEach(inp => { window._metricSimVals[inp.key] = inp.value; });

  const simHtml = d.sim ? `
    <div style="background:var(--surface-2);border:1px solid var(--accent);border-radius:10px;padding:12px 16px;margin-bottom:14px">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--accent);margin-bottom:10px">🔧 Simular</div>
      ${d.sim.inputs.map(inp => `
        <div class="sim-param-row">
          <span class="sim-param-label">${inp.label}</span>
          <div class="sim-param-field">
            <input type="number" class="sim-num-input" value="${inp.value}" step="${inp.step ?? 1}" ${inp.min != null ? `min="${inp.min}"` : ''}
              oninput="metricSimInput('${key}','${inp.key}',this.value)">
            <span class="sim-prod-unit">${inp.unit || ''}</span>
          </div>
        </div>`).join('')}
      <div id="metric-sim-result" style="margin-top:10px;font-size:13px;color:var(--text)">${d.sim.recompute(window._metricSimVals)}</div>
    </div>` : '';

  openModal('ⓘ ' + d.title, `
    <p style="font-size:13px;color:var(--text);line-height:1.6;margin-bottom:14px">${d.what}</p>
    ${d.calc.length ? `<div style="background:var(--surface-2);border:1px solid var(--border);border-radius:10px;padding:12px 16px;margin-bottom:14px">
      ${d.calc.map(([l, v]) => `<div class="qi-row"><span class="qi-label">${l}</span><span class="qi-val">${v}</span></div>`).join('')}
    </div>` : ''}
    ${simHtml}
    ${d.ignores ? `<p style="font-size:12px;color:var(--text-muted);line-height:1.6;margin-bottom:8px"><b style="color:var(--yellow)">Não considera:</b> ${d.ignores}</p>` : ''}
    ${d.assumes ? `<p style="font-size:12px;color:var(--text-muted);line-height:1.6"><b style="color:var(--accent)">Premissa:</b> ${d.assumes}</p>` : ''}
  `);
}

// Recalcula o card "🔧 Simular" ao vivo, sem fechar o modal nem persistir nada no estado.
function metricSimInput(key, inputKey, val) {
  const v = parseFloat(val);
  if (isNaN(v)) return;
  window._metricSimVals[inputKey] = v;
  clearTimeout(metricSimInput._t);
  metricSimInput._t = setTimeout(() => {
    const d = METRIC_DOCS[key]?.();
    if (!d?.sim) return;
    const el = document.getElementById('metric-sim-result');
    if (el) el.innerHTML = d.sim.recompute(window._metricSimVals);
  }, 150);
}

function infoBtn(key) {
  return `<span class="info-btn" onclick="event.stopPropagation();explainMetric('${key}')" title="Como esse número é calculado?">ⓘ</span>`;
}

// ── 6. NAVEGAÇÃO ──────────────────────────────────────────
let activePage = 'dashboard';
let activeCharts = {};

function navigate(page) {
  // Aliases: Cenários, Fluxo de Caixa e Objetivos viraram abas da Linha da Vida.
  if (page === 'scenarios') { timelineTab = 'cenarios'; page = 'timeline'; }
  else if (page === 'cashflow') { timelineTab = 'caixa'; page = 'timeline'; }
  else if (page === 'objetivos') { timelineTab = 'objetivos'; page = 'timeline'; }
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
    portfolio:   renderPortfolio,
    assumptions: renderAssumptions,
    expenses:    renderExpenses,
    fi:          renderFI,
    history:     renderHistory,
    simulador:   renderSimulador,
    insights:    renderInsights,
    debts:       renderDebts,
    protection:  renderProtection,
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
  { id: 'equivalente',   label: 'Rentabilidade Equivalente' },
  { id: 'quitar',        label: 'Quitar vs Investir' },
  { id: 'amort',         label: 'Amortizar vs Investir (SAC)' },
  { id: 'estresse',      label: 'Estresse de Carteira' },
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
  if (activeCharts.sim)     { activeCharts.sim.destroy();     delete activeCharts.sim; }
  if (activeCharts.quitar)  { activeCharts.quitar.destroy();  delete activeCharts.quitar; }
  if (activeCharts.amort)   { activeCharts.amort.destroy();   delete activeCharts.amort; }
  if (activeCharts.estresse){ activeCharts.estresse.destroy();delete activeCharts.estresse; }
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
  } else if (id === 'equivalente') {
    el.innerHTML = _buildEquivalenteTab();
  } else if (id === 'amort') {
    el.innerHTML = _buildAmortTab();
    setTimeout(_amortDrawChart, 0);
  } else if (id === 'estresse') {
    el.innerHTML = _buildEstresseTab();
    setTimeout(_estresseDrawChart, 0);
  } else {
    el.innerHTML = _buildQuitarTab();
    setTimeout(_simDrawQuitarChart, 0);
  }
}

// ── RENTABILIDADE EQUIVALENTE — conversor de taxas + benchmark ──
function _buildEquivalenteTab() {
  const s = S.simulator;
  const isAno = s.eqPeriod === 'ano';
  return `
    <div class="sim-layout">
      <div class="sim-params-panel card">
        <div class="sim-section-title">TAXA A CONVERTER</div>
        <div class="fi-mode-toggle">
          <button class="fi-mode-btn ${isAno?'active':''}" onclick="eqSetPeriod('ano')">Anual</button>
          <button class="fi-mode-btn ${!isAno?'active':''}" onclick="eqSetPeriod('mes')">Mensal</button>
        </div>
        ${_eqInput('eqRate', isAno?'Taxa anual':'Taxa mensal', s.eqRate, 0.01, isAno?'% a.a.':'% a.m.')}
        ${_eqInput('eqMeses', 'Prazo (p/ IR)', s.eqMeses, 1, 'meses')}
        <div class="sim-section-title" style="margin-top:18px">BENCHMARKS</div>
        ${_eqInput('cdi',   'CDI anual',   s.cdi,   0.25, '% a.a.')}
        ${_eqInput('selic', 'Selic anual', s.selic, 0.25, '% a.a.')}
        <div class="sim-footer-note">
          Conversão por juro composto: mensal = (1 + anual)^(1/12) − 1.<br>
          % do CDI compara a taxa anual equivalente contra o CDI.
        </div>
      </div>
      <div class="sim-results-panel">
        <div id="eq-results">${_buildEqResults()}</div>
      </div>
    </div>`;
}

function _eqInput(key, label, val, step, unit) {
  return `
    <div class="sim-param-row">
      <span class="sim-param-label">${label}</span>
      <div class="sim-param-field">
        <input type="number" class="sim-num-input" value="${val}" step="${step}"
          data-eq-key="${key}" oninput="eqInput(this)">
        <span class="sim-prod-unit">${unit}</span>
      </div>
    </div>`;
}

function _buildEqResults() {
  const { eqRate, eqPeriod, cdi, selic } = S.simulator;
  const p2  = v => v.toFixed(2).replace('.', ',') + '%';
  const toM = a => (Math.pow(1 + a/100, 1/12) - 1) * 100;   // anual → mensal
  const toA = m => (Math.pow(1 + m/100, 12)   - 1) * 100;   // mensal → anual
  const isAno = eqPeriod === 'ano';

  const taxaAnual  = isAno ? eqRate : toA(eqRate);
  const taxaMensal = isAno ? toM(eqRate) : eqRate;
  const cdiM   = toM(cdi),  selicM = toM(selic);
  const pctCDI      = cdi > 0 ? taxaAnual / cdi * 100 : 0;
  const pctCDISelic = cdi > 0 ? selic / cdi * 100 : 0;

  const origLbl = isAno ? 'ao ano' : 'ao mês';
  const destLbl = isAno ? 'ao mês' : 'ao ano';
  const destVal = isAno ? taxaMensal : taxaAnual;

  const acimaSelic = taxaMensal > selicM + 1e-9;
  const acimaCDI   = taxaAnual  > cdi + 1e-9;

  // ── Rentabilidade líquida (IR regressivo sobre o ganho no período) ──
  const meses = Math.max(1, S.simulator.eqMeses || 25);
  const anos  = meses / 12;
  const dias  = meses * 30;
  const aliq  = irRate(dias);
  const fatorBruto  = Math.pow(1 + taxaAnual/100, anos);
  const ganhoBrutoP = (fatorBruto - 1) * 100;               // ganho bruto no período (%)
  const irP         = ganhoBrutoP * aliq;                   // IR sobre o ganho (%)
  const ganhoLiqP   = ganhoBrutoP - irP;                    // ganho líquido no período (%)
  const fatorLiq    = 1 + ganhoLiqP/100;
  const liqAnual    = (Math.pow(fatorLiq, 1/anos)  - 1) * 100;
  const liqMensal   = (Math.pow(fatorLiq, 1/meses) - 1) * 100;
  const liqPctCDI   = cdi > 0 ? liqAnual / cdi * 100 : 0;

  const row = (nome, a, m, pc, hl) => `
    <tr class="${hl ? 'sim-best' : ''}">
      <td><strong>${nome}</strong></td>
      <td class="r">${p2(a)}</td>
      <td class="r">${p2(m)}</td>
      <td class="r ${hl ? 'accent bold' : ''}">${pc.toFixed(0)}%</td>
    </tr>`;

  return `
    <div class="card">
      <div class="card-title">Conversão</div>
      <div class="eq-headline">${p2(eqRate)} <span>${origLbl}</span> = <b>${p2(destVal)}</b> <span>${destLbl}</span></div>
    </div>
    <div class="card mt-16">
      <div class="card-title">Rentabilidade Líquida (IR) — ${meses} meses</div>
      <div class="qi-row"><span class="qi-label">Alíquota de IR (${dias} dias)</span><span class="qi-val">${(aliq*100).toFixed(1).replace('.',',')}%</span></div>
      <div class="qi-row"><span class="qi-label">Ganho bruto no período</span><span class="qi-val green">${p2(ganhoBrutoP)}</span></div>
      <div class="qi-row"><span class="qi-label">IR sobre o ganho</span><span class="qi-val red">−${p2(irP)}</span></div>
      <div class="qi-row"><span class="qi-label">Ganho líquido no período</span><span class="qi-val bold">${p2(ganhoLiqP)}</span></div>
      <div class="qi-divider"></div>
      <div class="qi-row"><span class="qi-label">Taxa líquida anual equiv.</span><span class="qi-val accent bold">${p2(liqAnual)}</span></div>
      <div class="qi-row"><span class="qi-label">Taxa líquida mensal equiv.</span><span class="qi-val accent bold">${p2(liqMensal)}</span></div>
      <div class="qi-row"><span class="qi-label">Líquida vs CDI</span><span class="qi-val">${liqPctCDI.toFixed(0)}% do CDI</span></div>
      <div class="sim-footer-note" style="margin-top:8px">IR só incide em produtos tributados (CDB, pré, Tesouro). LCI/LCA e Poupança são isentos.</div>
    </div>
    <div class="sim-verdict ${acimaCDI ? 'verdict-investir' : 'verdict-quitar'}" style="margin-top:16px">
      <div class="verdict-icon">${acimaCDI ? '📈' : '📉'}</div>
      <div class="verdict-body">
        <div class="verdict-title">Equivale a ${pctCDI.toFixed(0)}% do CDI</div>
        <div class="verdict-detail">Sua taxa mensal (${p2(taxaMensal)}) está <strong>${acimaSelic ? 'acima' : 'abaixo'}</strong> da Selic mensal (${p2(selicM)}) e <strong>${acimaCDI ? 'acima' : 'abaixo'}</strong> do CDI (${p2(cdi)} a.a.).</div>
      </div>
    </div>
    <div class="card mt-16">
      <div class="card-title">Comparativo</div>
      <table>
        <thead><tr><th>Referência</th><th class="r">Anual</th><th class="r">Mensal</th><th class="r">% do CDI</th></tr></thead>
        <tbody>
          ${row('Sua taxa', taxaAnual, taxaMensal, pctCDI, true)}
          ${row('CDI',   cdi,   cdiM,   100,          false)}
          ${row('Selic', selic, selicM, pctCDISelic,  false)}
        </tbody>
      </table>
    </div>`;
}

function eqInput(el) {
  const key = el.dataset.eqKey;
  const v = parseFloat(el.value);
  if (!key || isNaN(v)) return;
  S.simulator[key] = v;
  saveState();
  const w = document.getElementById('eq-results');
  if (w) w.innerHTML = _buildEqResults();
}

function eqSetPeriod(p) {
  S.simulator.eqPeriod = p;
  saveState();
  renderSimTabContent('equivalente');   // rebuild: muda o rótulo/unidade do input
}

// ── ESTRESSE DE CARTEIRA — choque de % por classe, impacto no portfólio e na FI ──
const ESTRESSE_CLASSES = [
  { cat: 'rf',     name: 'Renda Fixa / CDI' },
  { cat: 'rv',     name: 'Ações / RV' },
  { cat: 'fii',    name: 'FIIs' },
  { cat: 'cash',   name: 'Caixa / RF Curto' },
  { cat: 'intl',   name: 'Internacional' },
  { cat: 'prev',   name: 'Previdência' },
  { cat: 'imovel', name: 'Imóveis' },
  { cat: 'outro',  name: 'Outro' },
];
const ESTRESSE_PRESETS = {
  leve:  { rf: 0,    cash: 0, rv: -15, fii: -10, intl: -15, prev: -5,  outro: -10, imovel: -3  },
  forte: { rf: -2,   cash: 0, rv: -45, fii: -30, intl: -40, prev: -15, outro: -30, imovel: -10 },
  juros: { rf: -3,   cash: 0, rv: -20, fii: -25, intl: -10, prev: -8,  outro: -15, imovel: -8  },
  zerar: { rf: 0,    cash: 0, rv: 0,   fii: 0,   intl: 0,   prev: 0,   outro: 0,   imovel: 0   },
};

// Calcula o efeito do choque atual (S.simulator.stress) sobre o portfólio e sobre a data de FI.
// Não altera S.portfolio — é só leitura/projeção.
function _estresseCompute() {
  const stress = S.simulator.stress || {};
  const totals = {};
  S.portfolio.forEach(a => { totals[a.cat] = (totals[a.cat] || 0) + a.value; });

  const rows = ESTRESSE_CLASSES
    .filter(c => (totals[c.cat] || 0) > 0)
    .map(c => {
      const atual = totals[c.cat];
      const pct = stress[c.cat] || 0;
      const novo = atual * (1 + pct / 100);
      return { cat: c.cat, label: c.name, atual, pct, novo, delta: novo - atual };
    });

  const totalAtual = rows.reduce((s, r) => s + r.atual, 0);
  const totalNovo  = rows.reduce((s, r) => s + r.novo, 0);
  const impacto    = totalNovo - totalAtual;
  const impactoPct = totalAtual > 0 ? impacto / totalAtual * 100 : 0;

  // Impacto na Independência Financeira: mesma base do resto do app (patrimônio investível, exclui imóvel).
  const investAtual = rows.filter(r => r.cat !== 'imovel').reduce((s, r) => s + r.atual, 0);
  const investNovo  = rows.filter(r => r.cat !== 'imovel').reduce((s, r) => s + r.novo, 0);
  const fin   = fiNumber();
  const sav   = S.incomes.filter(i => i.active).reduce((s, i) => s + i.amount, 0)
              - S.expenses.filter(e => e.active).reduce((s, e) => s + e.amount, 0);
  const rReal = weightedReturnReal();
  const mAtual = _monthsToTarget(investAtual, sav, rReal, fin);
  const mNovo  = _monthsToTarget(investNovo, sav, rReal, fin);

  let fiImpactText, fiImpactColor;
  if (mAtual == null) {
    fiImpactText = 'já fora do horizonte de 50 anos, mesmo sem o choque';
    fiImpactColor = 'var(--text-muted)';
  } else if (mNovo == null) {
    fiImpactText = 'sai do horizonte de 50 anos';
    fiImpactColor = 'var(--red)';
  } else {
    const d = mNovo - mAtual;
    fiImpactText = d === 0 ? 'sem impacto na data' : d > 0 ? `atrasa ${_fmtAnos(d)}` : `antecipa ${_fmtAnos(-d)}`;
    fiImpactColor = d > 0 ? 'var(--red)' : d < 0 ? 'var(--green)' : 'var(--text-muted)';
  }

  return { rows, totalAtual, totalNovo, impacto, impactoPct, investAtual, investNovo, fin, mAtual, mNovo, fiImpactText, fiImpactColor };
}

function _buildEstresseResults(r) {
  return `
    <div class="kpi-grid mb-16">
      <div class="kpi"><div class="kpi-label">Patrimônio atual</div><div class="kpi-value">${fmt(r.totalAtual)}</div></div>
      <div class="kpi"><div class="kpi-label">Patrimônio após o choque</div>
        <div class="kpi-value" style="color:${r.impacto >= 0 ? 'var(--green)' : 'var(--red)'}">${fmt(r.totalNovo)}</div></div>
      <div class="kpi"><div class="kpi-label">Impacto</div>
        <div class="kpi-value" style="color:${r.impacto >= 0 ? 'var(--green)' : 'var(--red)'}">${r.impacto >= 0 ? '+' : ''}${fmt(r.impacto)}</div>
        <div class="kpi-sub">${r.impactoPct >= 0 ? '+' : ''}${r.impactoPct.toFixed(1).replace('.', ',')}%</div></div>
      <div class="kpi"><div class="kpi-label">Impacto na Independência Financeira</div>
        <div class="kpi-value" style="font-size:16px;color:${r.fiImpactColor}">${r.fiImpactText}</div>
        <div class="kpi-sub">${r.mAtual == null ? 'mais de 50 anos' : _fmtAnos(r.mAtual)} → ${r.mNovo == null ? 'mais de 50 anos' : _fmtAnos(r.mNovo)}</div></div>
    </div>
    <div class="table-wrap"><table class="history-table">
      <thead><tr><th>Classe</th><th class="r">Valor atual</th><th class="r">Choque</th><th class="r">Após o choque</th><th class="r">Variação</th></tr></thead>
      <tbody>${r.rows.map(row => `<tr>
        <td>${row.label}</td>
        <td class="r">${fmt(row.atual)}</td>
        <td class="r muted">${row.pct >= 0 ? '+' : ''}${row.pct}%</td>
        <td class="r ${row.delta >= 0 ? 'green' : 'red'}">${fmt(row.novo)}</td>
        <td class="r ${row.delta >= 0 ? 'green' : 'red'}">${row.delta >= 0 ? '+' : ''}${fmt(row.delta)}</td>
      </tr>`).join('')}</tbody>
      <tfoot><tr style="border-top:2px solid var(--border-2)">
        <td class="bold">Total</td><td class="r bold">${fmt(r.totalAtual)}</td><td></td>
        <td class="r bold">${fmt(r.totalNovo)}</td>
        <td class="r bold ${r.impacto >= 0 ? 'green' : 'red'}">${r.impacto >= 0 ? '+' : ''}${fmt(r.impacto)}</td>
      </tr></tfoot>
    </table></div>`;
}

function _buildEstresseTab() {
  if (!S.portfolio.some(a => a.value > 0)) {
    return `<div class="card" style="padding:40px;text-align:center;color:var(--text-muted)">
      <p style="font-size:15px;margin-bottom:8px">Nenhum ativo cadastrado na carteira ainda.</p>
      <p style="font-size:13px">Cadastre seus ativos na aba Patrimônio para simular um choque de mercado aqui.</p>
    </div>`;
  }
  const stress = S.simulator.stress || {};
  const totals = {};
  S.portfolio.forEach(a => { totals[a.cat] = (totals[a.cat] || 0) + a.value; });
  const classes = ESTRESSE_CLASSES.filter(c => (totals[c.cat] || 0) > 0);

  const inputRows = classes.map(c => `
    <div class="sim-param-row">
      <span class="sim-param-label">${c.name} <span class="text-dim" style="font-size:11px">(${fmt(totals[c.cat])})</span></span>
      <div class="sim-param-field">
        <input type="number" class="sim-num-input" value="${stress[c.cat] || 0}" step="1"
          data-stress-cat="${c.cat}" oninput="estresseInput(this)">
        <span class="sim-prod-unit">%</span>
      </div>
    </div>`).join('');

  return `
    <div class="sim-layout">
      <div class="sim-params-panel card">
        <div class="sim-section-title">CHOQUE POR CLASSE (%)</div>
        <div class="sim-footer-note" style="margin-bottom:12px">Valor negativo = queda. Ex: -30 numa classe que vale R$100.000 vira R$70.000.</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px">
          <button class="btn btn-secondary btn-sm" onclick="estressePreset('leve')" title="RV/FII/Intl ~-15%">Correção leve</button>
          <button class="btn btn-secondary btn-sm" onclick="estressePreset('forte')" title="RV -45%, FII -30%, Intl -40%">Crash forte</button>
          <button class="btn btn-secondary btn-sm" onclick="estressePreset('juros')" title="Juros sobem, marcação a mercado cai">Choque de juros</button>
          <button class="btn btn-ghost btn-sm" onclick="estressePreset('zerar')">↺ Zerar</button>
        </div>
        ${inputRows}
      </div>
      <div class="sim-results-panel">
        <div id="estresse-results">${_buildEstresseResults(_estresseCompute())}</div>
      </div>
    </div>
    <div class="card mt-16">
      <div class="card-title">Antes × Depois por Classe</div>
      <div class="chart-wrap chart-med"><canvas id="ch-estresse"></canvas></div>
    </div>
    ${_buildSelicShockCard()}
    <details class="card mt-16">
      <summary style="cursor:pointer;font-weight:600">ⓘ O que entra em cada classe do choque</summary>
      <div style="font-size:13px;color:var(--text-dim);margin-top:10px;line-height:1.6">
        <p><b>Ações / RV</b> agrupa Ações, Fundos de Ações, Cripto e Multimercado (quando existir) — todos levam o mesmo % de choque, mesmo que na vida real cripto caia muito mais forte que ações e multimercado tenha beta bem menor. É uma simplificação proposital do modelo, não um erro.</p>
        <p><b>FIIs</b>, <b>Renda Fixa / CDI</b>, <b>Caixa / RF Curto</b>, <b>Internacional</b>, <b>Previdência</b> e <b>Imóveis</b> são classes isoladas — cada uma leva só o próprio %.</p>
        <p>O impacto na data de FI usa o patrimônio investível (mesma base do resto do app: RV/FII/Intl entram, Imóvel fica de fora).</p>
      </div>
    </details>`;
}

function estresseInput(el) {
  const cat = el.dataset.stressCat;
  if (!cat) return;
  const v = parseFloat(el.value);
  if (!S.simulator.stress) S.simulator.stress = {};
  S.simulator.stress[cat] = isNaN(v) ? 0 : v;
  saveState();
  _estresseRefresh();
}

function estressePreset(name) {
  const p = ESTRESSE_PRESETS[name];
  if (!p) return;
  S.simulator.stress = { ...p };
  saveState();
  renderSimTabContent('estresse');   // rebuild total: os valores dos inputs mudam
}

function _estresseRefresh() {
  const wrap = document.getElementById('estresse-results');
  if (wrap) wrap.innerHTML = _buildEstresseResults(_estresseCompute());
  _estresseDrawChart();
}

function _estresseDrawChart() {
  const ctx = document.getElementById('ch-estresse');
  if (!ctx) return;
  if (activeCharts.estresse) { activeCharts.estresse.destroy(); delete activeCharts.estresse; }
  const r = _estresseCompute();
  activeCharts.estresse = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: r.rows.map(row => row.label),
      datasets: [
        { label: 'Atual', data: r.rows.map(row => row.atual), backgroundColor: '#4f8ef788', borderColor: '#4f8ef7', borderWidth: 1, borderRadius: 4 },
        { label: 'Após o choque', data: r.rows.map(row => row.novo), backgroundColor: r.rows.map(row => row.delta >= 0 ? '#22c55e88' : '#f8717188'), borderColor: r.rows.map(row => row.delta >= 0 ? '#22c55e' : '#f87171'), borderWidth: 1, borderRadius: 4 },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#8ca3c1', font: { size: 11 } } },
        tooltip: { callbacks: { label: c => ` ${c.dataset.label}: ${fmt(c.parsed.y)}` } },
      },
      scales: {
        x: { grid: { color: '#1e2d4220' }, ticks: { color: '#8ca3c1', font: { size: 10 } } },
        y: { grid: { color: '#1e2d4240' }, ticks: { color: '#8ca3c1', font: { size: 10 }, callback: v => fmtK(v) } },
      },
    },
  });
}

// ── CHOQUE DE SELIC ───────────────────────────────────────
// Simplificação assumida: toda a Renda Fixa + Caixa é tratada como pós-fixada (Selic/CDI),
// com repasse proporcional — a carteira é majoritariamente %CDI, então ret × (CDI_novo/CDI_atual).
// Um corte de Selic NÃO mexe no saldo de hoje: mexe no carrego. O que se desloca é o retorno
// esperado e, por tabela, a data de FI. O ganho de marcação a mercado de pré/IPCA+ fica de fora.
const SELIC_RF_CATS = ['rf', 'cash'];
const _selicTx = v => v.toFixed(2).replace('.', ',') + '%';
const _selicPP = v => (v >= 0 ? '+' : '−') + Math.abs(v).toFixed(2).replace('.', ',') + ' p.p.';

function _selicShockCompute() {
  const d      = S.simulator.selicDelta || 0;
  const selic0 = S.assumptions.selic || 13.75;
  const cdi0   = S.assumptions.cdi   || 13.65;
  const selic1 = Math.max(0, selic0 + d);
  const cdi1   = Math.max(0, cdi0 + d);
  const fator  = cdi0 > 0 ? cdi1 / cdi0 : 1;

  const total = S.portfolio.reduce((s, a) => s + a.value, 0);
  const rows = S.portfolio
    .filter(a => SELIC_RF_CATS.includes(a.cat) && a.value > 0)
    .map(a => {
      const retNovo = a.ret * fator;
      return { name: a.name, value: a.value, ret: a.ret, retNovo,
               dRet: retNovo - a.ret, dRenda: a.value * (retNovo - a.ret) / 100 };
    })
    .sort((x, y) => y.value - x.value);

  const rfValor = rows.reduce((s, r) => s + r.value, 0);
  const rfShare = total > 0 ? rfValor / total * 100 : 0;
  const dRenda  = rows.reduce((s, r) => s + r.dRenda, 0);

  // Retorno ponderado: mesma base do resto do app (weightedReturn — carteira inteira).
  const retAntes  = total > 0 ? S.portfolio.reduce((s, a) => s + a.ret * (a.value / total), 0) : 0;
  const retDepois = total > 0 ? S.portfolio.reduce((s, a) =>
        s + (SELIC_RF_CATS.includes(a.cat) ? a.ret * fator : a.ret) * (a.value / total), 0) : 0;

  const ipca   = S.assumptions.ipca || 5.5;
  const real   = r => ((1 + r / 100) / (1 + ipca / 100) - 1) * 100;
  const invest = S.portfolio.reduce((s, a) => s + (a.cat === 'imovel' ? 0 : a.value), 0);
  const fin    = fiNumber();
  const sav    = S.incomes.filter(i => i.active).reduce((s, i) => s + i.amount, 0)
               - S.expenses.filter(e => e.active).reduce((s, e) => s + e.amount, 0);
  const mAntes  = _monthsToTarget(invest, sav, real(retAntes),  fin);
  const mDepois = _monthsToTarget(invest, sav, real(retDepois), fin);

  let fiText, fiColor;
  if (mAntes == null && mDepois == null) { fiText = 'fora do horizonte de 50 anos nos dois cenários'; fiColor = 'var(--text-muted)'; }
  else if (mDepois == null)              { fiText = 'sai do horizonte de 50 anos'; fiColor = 'var(--red)'; }
  else if (mAntes == null)               { fiText = 'volta pro horizonte de 50 anos'; fiColor = 'var(--green)'; }
  else {
    const dm = mDepois - mAntes;
    fiText  = dm === 0 ? 'sem impacto na data' : dm > 0 ? `atrasa ${_fmtAnos(dm)}` : `antecipa ${_fmtAnos(-dm)}`;
    fiColor = dm > 0 ? 'var(--red)' : dm < 0 ? 'var(--green)' : 'var(--text-muted)';
  }

  return { d, selic0, selic1, cdi0, cdi1, fator, rows, rfValor, rfShare, dRenda,
           retAntes, retDepois, realAntes: real(retAntes), realDepois: real(retDepois),
           mAntes, mDepois, fiText, fiColor };
}

function _buildSelicShockResults(r) {
  const cor = r.dRenda === 0 ? 'var(--text-muted)' : r.dRenda < 0 ? 'var(--red)' : 'var(--green)';
  const sgn = v => (v >= 0 ? '+' : '');
  return `
    <div class="kpi-grid mb-16">
      <div class="kpi"><div class="kpi-label">Selic</div>
        <div class="kpi-value" style="font-size:16px">${_selicTx(r.selic0)} → ${_selicTx(r.selic1)}</div>
        <div class="kpi-sub">${_selicPP(r.d)} · CDI ${_selicTx(r.cdi0)} → ${_selicTx(r.cdi1)}</div></div>
      <div class="kpi"><div class="kpi-label">Renda anual da parcela pós-fixada</div>
        <div class="kpi-value" style="color:${cor}">${sgn(r.dRenda)}${fmt(r.dRenda)}</div>
        <div class="kpi-sub">sobre ${fmt(r.rfValor)} · ${r.rfShare.toFixed(0)}% da carteira</div></div>
      <div class="kpi"><div class="kpi-label">Retorno ponderado</div>
        <div class="kpi-value" style="font-size:16px;color:${cor}">${_selicTx(r.retAntes)} → ${_selicTx(r.retDepois)}</div>
        <div class="kpi-sub">real ${_selicTx(r.realAntes)} → ${_selicTx(r.realDepois)} a.a.</div></div>
      <div class="kpi"><div class="kpi-label">Impacto na Independência Financeira</div>
        <div class="kpi-value" style="font-size:16px;color:${r.fiColor}">${r.fiText}</div>
        <div class="kpi-sub">${_fmtAnos(r.mAntes)} → ${_fmtAnos(r.mDepois)}</div></div>
    </div>
    ${r.rows.length ? `<div class="table-wrap"><table class="history-table">
      <thead><tr><th>Ativo tratado como pós-fixado</th><th class="r">Valor</th><th class="r">Retorno hoje</th><th class="r">Após o corte</th><th class="r">Δ renda / ano</th></tr></thead>
      <tbody>${r.rows.map(x => `<tr>
        <td>${x.name}</td>
        <td class="r">${fmt(x.value)}</td>
        <td class="r muted">${_selicTx(x.ret)}</td>
        <td class="r ${x.dRet >= 0 ? 'green' : 'red'}">${_selicTx(x.retNovo)}</td>
        <td class="r ${x.dRenda >= 0 ? 'green' : 'red'}">${sgn(x.dRenda)}${fmt(x.dRenda)}</td>
      </tr>`).join('')}</tbody>
      <tfoot><tr style="border-top:2px solid var(--border-2)">
        <td class="bold">Total</td><td class="r bold">${fmt(r.rfValor)}</td><td></td><td></td>
        <td class="r bold ${r.dRenda >= 0 ? 'green' : 'red'}">${sgn(r.dRenda)}${fmt(r.dRenda)}</td>
      </tr></tfoot>
    </table></div>` : `<div class="sim-footer-note">Nenhum ativo em Renda Fixa ou Caixa na carteira.</div>`}`;
}

function _buildSelicShockCard() {
  const d = S.simulator.selicDelta || 0;
  return `
    <div class="card mt-16">
      <div class="card-title">Choque de Selic</div>
      <div class="sim-footer-note" style="margin-bottom:14px">
        Simplificação assumida: <b>toda a Renda Fixa e o Caixa são tratados como pós-fixados</b>, com repasse
        proporcional ao CDI. Na prática, prefixado e IPCA+ <b>subiriam de preço</b> num corte — esse ganho de marcação
        não entra aqui, então o número abaixo é o pior caso, só o lado do carrego. Independente do choque por classe acima.
      </div>
      <div style="display:flex;gap:18px;align-items:center;flex-wrap:wrap;margin-bottom:18px">
        <div class="sim-param-row" style="margin:0;flex:0 0 auto">
          <span class="sim-param-label">Variação da Selic</span>
          <div class="sim-param-field">
            <input type="number" class="sim-num-input" value="${d}" step="0.25" min="-14" max="14"
              id="selic-delta-input" oninput="selicShockInput(this)">
            <span class="sim-prod-unit">p.p.</span>
          </div>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <button class="btn btn-secondary btn-sm" onclick="selicShockPreset(-0.5)">−0,50</button>
          <button class="btn btn-secondary btn-sm" onclick="selicShockPreset(-1)">−1,00</button>
          <button class="btn btn-secondary btn-sm" onclick="selicShockPreset(-2)">−2,00</button>
          <button class="btn btn-secondary btn-sm" onclick="selicShockPreset(-4)">−4,00</button>
          <button class="btn btn-ghost btn-sm" onclick="selicShockPreset(0)">↺ Zerar</button>
        </div>
      </div>
      <div id="selic-shock-results">${_buildSelicShockResults(_selicShockCompute())}</div>
      <div class="sim-footer-note" style="margin-top:14px">
        O patrimônio de hoje não muda — corte de Selic não mexe no saldo, mexe no quanto ele rende daqui pra frente.
        Por isso a linha que importa é a da Independência Financeira, não a do patrimônio.
      </div>
    </div>`;
}

function _selicShockRefresh() {
  const wrap = document.getElementById('selic-shock-results');
  if (wrap) wrap.innerHTML = _buildSelicShockResults(_selicShockCompute());
}

function selicShockInput(el) {
  const v = parseFloat(el.value);
  S.simulator.selicDelta = isNaN(v) ? 0 : v;
  saveState();
  _selicShockRefresh();
}

function selicShockPreset(v) {
  S.simulator.selicDelta = v;
  saveState();
  const inp = document.getElementById('selic-delta-input');
  if (inp) inp.value = v;
  _selicShockRefresh();
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
        ${_simProductRow('pre',    'Pré-fixado',        null,        'preFixado',  sim.preFixado,  '% a.a.')}
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

// Decomposição do patrimônio: quanto veio de aporte (bolso) vs rendimento (juros).
// pat[m] = aporteAcum[m] + rendAcum[m]  (por construção).
function aporteRendimentoSeries() {
  const labels = [], aporte = [], rend = [], pat = [];
  let aAcum = 0, rAcum = 0, crossMonth = null;
  let last12A = 0, last12R = 0;
  const n = HISTORICAL.length;
  for (let i = 0; i < n; i++) {
    const h = HISTORICAL[i];
    const apo = h.apo ?? 0;
    let rMes;
    if (i === 0) { aAcum = apo; rAcum = h.pat - apo; rMes = rAcum; }
    else { rMes = (h.pat - HISTORICAL[i - 1].pat) - apo; aAcum += apo; rAcum += rMes; }
    if (!crossMonth && rAcum > aAcum) crossMonth = h.d;
    if (i >= n - 12) { last12A += apo; last12R += rMes; }
    labels.push(h.d); aporte.push(aAcum); rend.push(rAcum); pat.push(h.pat);
  }
  const curPat = pat[n - 1], curA = aporte[n - 1], curR = rend[n - 1];
  return {
    labels, aporte, rend, pat, crossMonth,
    curPat, curA, curR,
    aPct: curPat ? curA / curPat * 100 : 0,
    rPct: curPat ? curR / curPat * 100 : 0,
    last12A, last12R,
  };
}

function _buildAporteRendimentoCard() {
  if (!HISTORICAL || HISTORICAL.length < 3) return '';
  const s = aporteRendimentoSeries();
  const first = HISTORICAL[0];
  const crossed = !!s.crossMonth;
  const l12Total = s.last12A + s.last12R;
  const l12rPct = l12Total > 0 ? s.last12R / l12Total * 100 : 0;

  const insight = crossed
    ? `🎯 Em <b style="color:var(--text)">${monthLabel(s.crossMonth)}</b> seus juros acumulados passaram a valer mais que tudo que você já aportou. De lá pra cá, seu dinheiro trabalha mais do que você.`
    : `Seus juros já são <b style="color:var(--green)">${fmtPct(s.rPct)}</b> do patrimônio. Quando passarem de 50%, seu dinheiro terá construído mais que o seu bolso.`;

  return `
    <div class="card mt-16">
      <div class="flex-between mb-8">
        <div class="card-title" style="margin-bottom:0">Aporte vs Rendimento — de onde veio seu patrimônio</div>
        <span style="font-size:11px;color:var(--text-dim)">desde ${monthLabel(first.d)}</span>
      </div>

      <div class="ar-split">
        <div>
          <div class="ar-lbl" style="color:var(--accent)">● Você aportou</div>
          <div class="ar-val">${fmt(s.curA)}</div>
          <div class="ar-sub">${fmtPct(s.aPct)} do patrimônio</div>
        </div>
        <div style="text-align:right">
          <div class="ar-lbl" style="color:var(--green)">Juros geraram ●</div>
          <div class="ar-val" style="color:var(--green)">${fmt(s.curR)}</div>
          <div class="ar-sub">${fmtPct(s.rPct)} do patrimônio</div>
        </div>
      </div>
      <div class="ar-bar">
        <div style="width:${s.aPct}%;background:var(--accent)"></div>
        <div style="width:${s.rPct}%;background:var(--green)"></div>
      </div>

      <div class="chart-wrap chart-med mt-12"><canvas id="ch-aporte-rend"></canvas></div>

      <div class="ar-insight">${insight}</div>
      <div style="font-size:12px;color:var(--text-muted);margin-top:8px">
        Nos últimos 12 meses: <b style="color:var(--green)">${fmt(s.last12R)} de juros</b> vs <b style="color:var(--accent)">${fmt(s.last12A)} de aporte</b>
        — ${fmtPct(l12rPct)} do crescimento recente veio do dinheiro trabalhando.
      </div>
    </div>`;
}

function _drawAporteRendChart() {
  const ctx = document.getElementById('ch-aporte-rend');
  if (!ctx) return;
  destroyChart('aporteRend');
  const s = aporteRendimentoSeries();
  const step = Math.max(1, Math.floor(s.labels.length / 60));
  const idx = s.labels.map((_, i) => i).filter(i => i % step === 0 || i === s.labels.length - 1);
  activeCharts.aporteRend = new Chart(ctx, {
    type: 'line',
    data: {
      labels: idx.map(i => monthLabel(s.labels[i])),
      datasets: [
        { label: 'Aporte acumulado', data: idx.map(i => s.aporte[i]), borderColor: '#4f8ef7', backgroundColor: '#4f8ef755', fill: true, tension: .3, pointRadius: 0, borderWidth: 1.5 },
        { label: 'Rendimento acumulado', data: idx.map(i => s.rend[i]), borderColor: '#22c55e', backgroundColor: '#22c55e55', fill: true, tension: .3, pointRadius: 0, borderWidth: 1.5 },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
      plugins: { legend: { labels: { color: '#8ca3c1', font: { size: 11 } } }, tooltip: { callbacks: { label: c => ` ${c.dataset.label}: ${fmtK(c.parsed.y)}` } } },
      scales: {
        x: { stacked: true, grid: { color: '#1e2d4230' }, ticks: { color: '#8ca3c1', font: { size: 10 }, maxTicksLimit: 12 } },
        y: { stacked: true, grid: { color: '#1e2d4250' }, ticks: { color: '#8ca3c1', font: { size: 10 }, callback: v => fmtK(v) } }
      }
    }
  });
}

// Patrimônio deflacionado: expressa todo o histórico em reais de HOJE, usando IPCA_YEARLY.
function patrimonioRealSeries() {
  const n = HISTORICAL.length;
  const idx = [];
  let acc = 1;
  for (let i = 0; i < n; i++) {
    const y = parseInt(HISTORICAL[i].d.slice(0, 4), 10);
    const mRate = Math.pow(1 + (IPCA_YEARLY[y] ?? 4.5) / 100, 1 / 12) - 1;
    if (i > 0) acc *= (1 + mRate);   // índice de preços acumulado mês a mês
    idx.push(acc);
  }
  const idxNow = idx[n - 1];
  const nominal = HISTORICAL.map(h => h.pat);
  const real = HISTORICAL.map((h, i) => h.pat * (idxNow / idx[i]));   // traz o passado p/ reais de hoje
  const years = n / 12;
  const nomMult = nominal[n - 1] / nominal[0];
  const realMult = real[n - 1] / real[0];
  return {
    nominal, real,
    nomMult, realMult,
    nomCAGR: (Math.pow(nomMult, 1 / years) - 1) * 100,
    realCAGR: (Math.pow(realMult, 1 / years) - 1) * 100,
    inflAcum: (idxNow / idx[0] - 1) * 100,
    nomStart: nominal[0], realStart: real[0], curPat: nominal[n - 1],
  };
}

function _buildPatrimonioRealCard() {
  if (!HISTORICAL || HISTORICAL.length < 13) return '';
  const s = patrimonioRealSeries();
  const first = HISTORICAL[0];
  return `
    <div class="card mb-16">
      <div class="flex-between mb-8">
        <div class="card-title" style="margin-bottom:0">Patrimônio Real — em reais de hoje</div>
        <span style="font-size:11px;color:var(--text-dim)">deflacionado pelo IPCA</span>
      </div>
      <div class="ar-split">
        <div>
          <div class="ar-lbl" style="color:var(--text-muted)">Início · ${monthLabel(first.d)}</div>
          <div class="ar-val" style="color:var(--text)">${fmt(s.nomStart)}</div>
          <div class="ar-sub">nominal — valia ${fmt(s.realStart)} em R$ de hoje</div>
        </div>
        <div style="text-align:right">
          <div class="ar-lbl" style="color:var(--green)">Crescimento REAL</div>
          <div class="ar-val" style="color:var(--green)">${s.realMult.toFixed(1)}×</div>
          <div class="ar-sub">nominal aparenta ${s.nomMult.toFixed(1)}×</div>
        </div>
      </div>
      <div class="chart-wrap chart-med mt-12"><canvas id="ch-hist-real"></canvas></div>
      <div class="ar-insight">
        A inflação acumulou <b style="color:var(--text)">${fmtPct(s.inflAcum)}</b> no período. Descontando ela, seu poder de compra cresceu
        <b style="color:var(--green)">${s.realMult.toFixed(1)}×</b> — não os ${s.nomMult.toFixed(1)}× que o número nominal sugere.
        CAGR real <b style="color:var(--green)">${fmtPct(s.realCAGR)}</b> vs ${fmtPct(s.nomCAGR)} nominal.
      </div>
      <div style="font-size:11px;color:var(--text-dim);margin-top:8px">IPCA por tabela anual (2025/2026 estimados). A linha "Real" traz cada mês do passado para o poder de compra de hoje; por isso encontra a nominal só no presente.</div>
    </div>`;
}

function _drawHistRealChart() {
  const ctx = document.getElementById('ch-hist-real');
  if (!ctx) return;
  destroyChart('histReal');
  const s = patrimonioRealSeries();
  const step = Math.max(1, Math.floor(HISTORICAL.length / 60));
  const idx = HISTORICAL.map((_, i) => i).filter(i => i % step === 0 || i === HISTORICAL.length - 1);
  activeCharts.histReal = new Chart(ctx, {
    type: 'line',
    data: {
      labels: idx.map(i => monthLabel(HISTORICAL[i].d)),
      datasets: [
        { label: 'Real (poder de compra em R$ de hoje)', data: idx.map(i => s.real[i]), borderColor: '#22c55e', backgroundColor: '#22c55e20', fill: true, tension: .4, pointRadius: 0, borderWidth: 2 },
        { label: 'Nominal (valor da época)', data: idx.map(i => s.nominal[i]), borderColor: '#64748b', backgroundColor: 'transparent', tension: .4, pointRadius: 0, borderWidth: 1.5, borderDash: [5, 4] },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
      plugins: { legend: { labels: { color: '#8ca3c1', font: { size: 11 } } }, tooltip: { callbacks: { label: c => ` ${c.dataset.label}: ${fmtK(c.parsed.y)}` } } },
      scales: {
        x: { grid: { color: '#1e2d4230' }, ticks: { color: '#8ca3c1', font: { size: 10 }, maxTicksLimit: 12 } },
        y: { grid: { color: '#1e2d4250' }, ticks: { color: '#8ca3c1', font: { size: 10 }, callback: v => fmtK(v) } }
      }
    }
  });
}

// Lifestyle creep: a taxa de poupança se manteve conforme a renda cresceu?
// Médias anuais (mês a mês é ruidoso demais). "Creep marginal" = quanto da renda
// extra virou gasto ao comparar o 1º ano completo com o último.
function lifestyleCreepData() {
  const byYear = {};
  HISTORICAL.forEach(h => {
    const y = h.d.slice(0, 4);
    (byYear[y] = byYear[y] || { rec: 0, gas: 0, n: 0 });
    byYear[y].rec += (h.rec || 0); byYear[y].gas += (h.gas || 0); byYear[y].n++;
  });
  const years = Object.keys(byYear).sort().filter(y => byYear[y].n >= 6);   // ignora anos parciais
  if (years.length < 2) return null;
  const rows = years.map(y => {
    const b = byYear[y];
    const rec = b.rec / b.n, gas = b.gas / b.n;
    return { y, rec, gas, sr: rec > 0 ? (rec - gas) / rec * 100 : 0, parcial: b.n < 12 };
  });
  const first = rows[0], last = rows[rows.length - 1];
  const dRec = last.rec - first.rec, dGas = last.gas - first.gas;
  const creepPct = dRec > 0 ? dGas / dRec * 100 : 0;   // % da renda extra que virou gasto
  return {
    rows, first, last,
    recMult: first.rec > 0 ? last.rec / first.rec : 0,
    gasMult: first.gas > 0 ? last.gas / first.gas : 0,
    creepPct, savedPct: 100 - creepPct,
  };
}

function _buildLifestyleCard() {
  const d = lifestyleCreepData();
  if (!d) return '';
  const creepBad = d.creepPct > 60;   // >60% da renda extra indo pra gasto = alerta
  const col = creepBad ? 'var(--red)' : d.creepPct > 40 ? 'var(--yellow)' : 'var(--green)';
  const veredito = creepBad
    ? 'boa parte dos seus aumentos foi absorvida por mais gasto — atenção ao lifestyle creep.'
    : d.creepPct > 40
      ? 'você segurou razoavelmente o padrão de vida conforme a renda subiu.'
      : 'disciplina forte: a maior parte de cada aumento virou poupança, não estilo de vida.';

  return `
    <div class="card mb-16">
      <div class="flex-between mb-8">
        <div class="card-title" style="margin-bottom:0">Lifestyle Creep — a renda subiu; e o padrão de vida?</div>
        <span style="font-size:11px;color:var(--text-dim)">médias anuais · ${d.first.y}–${d.last.y}</span>
      </div>
      <div class="ar-split">
        <div>
          <div class="ar-lbl" style="color:var(--accent)">Renda cresceu</div>
          <div class="ar-val">${d.recMult.toFixed(1)}×</div>
          <div class="ar-sub">${fmt(d.first.rec)} → ${fmt(d.last.rec)}/mês</div>
        </div>
        <div style="text-align:center">
          <div class="ar-lbl" style="color:var(--red)">Gasto cresceu</div>
          <div class="ar-val" style="color:var(--red)">${d.gasMult.toFixed(1)}×</div>
          <div class="ar-sub">${fmt(d.first.gas)} → ${fmt(d.last.gas)}/mês</div>
        </div>
        <div style="text-align:right">
          <div class="ar-lbl" style="color:${col}">Cada R$1 extra virou</div>
          <div class="ar-val" style="color:${col}">${fmtPct(d.savedPct)}</div>
          <div class="ar-sub">poupança · ${fmtPct(d.creepPct)} gasto</div>
        </div>
      </div>
      <div class="chart-wrap chart-med mt-12"><canvas id="ch-hist-creep"></canvas></div>
      <div class="ar-insight">
        Comparando ${d.first.y} com ${d.last.y}, de cada <b>R$1</b> a mais de renda mensal,
        <b style="color:${col}">${fmt(d.savedPct/100)}</b> virou poupança e ${fmt(d.creepPct/100)} virou gasto — ${veredito}
        Taxa de poupança foi de <b>${fmtPct(d.first.sr)}</b> (${d.first.y}) para <b style="color:${col}">${fmtPct(d.last.sr)}</b> (${d.last.y}).
      </div>
    </div>`;
}

function _drawLifestyleChart() {
  const ctx = document.getElementById('ch-hist-creep');
  if (!ctx) return;
  destroyChart('creep');
  const d = lifestyleCreepData();
  if (!d) return;
  activeCharts.creep = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: d.rows.map(r => r.y + (r.parcial ? '*' : '')),
      datasets: [
        { type: 'bar', label: 'Renda média/mês', data: d.rows.map(r => Math.round(r.rec)), backgroundColor: '#4f8ef755', borderColor: '#4f8ef7', borderWidth: 1, yAxisID: 'y' },
        { type: 'bar', label: 'Gasto médio/mês', data: d.rows.map(r => Math.round(r.gas)), backgroundColor: '#f8717155', borderColor: '#f87171', borderWidth: 1, yAxisID: 'y' },
        { type: 'line', label: 'Taxa de poupança', data: d.rows.map(r => +r.sr.toFixed(1)), borderColor: '#22c55e', backgroundColor: 'transparent', borderWidth: 2, tension: .3, pointRadius: 3, yAxisID: 'y1' },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { labels: { color: '#8ca3c1', font: { size: 11 } } },
        tooltip: { callbacks: { label: c => ` ${c.dataset.label}: ${c.dataset.yAxisID === 'y1' ? c.parsed.y.toFixed(0) + '%' : fmtK(c.parsed.y)}` } }
      },
      scales: {
        x: { grid: { color: '#1e2d4230' }, ticks: { color: '#8ca3c1', font: { size: 10 } } },
        y: { grid: { color: '#1e2d4250' }, ticks: { color: '#8ca3c1', font: { size: 10 }, callback: v => fmtK(v) } },
        y1: { position: 'right', min: 0, max: 100, grid: { drawOnChartArea: false }, ticks: { color: '#22c55e', font: { size: 10 }, callback: v => v + '%' } }
      }
    }
  });
}

// Marcos de patrimônio de 100k em 100k: quando cada um foi atingido e quanto levou.
function _buildMilestonesCard() {
  if (!HISTORICAL || HISTORICAL.length < 2) return '';
  const step = 100000;
  const curPat = HISTORICAL[HISTORICAL.length - 1].pat;
  const startD = HISTORICAL[0].d;

  const fmtDur = m => {
    if (m <= 0) return '—';
    const y = Math.floor(m / 12), mo = m % 12;
    return (y ? y + 'a' : '') + (y && mo ? ' ' : '') + (mo || !y ? mo + 'm' : '');
  };

  const rows = [];
  let prevD = startD, prevDelta = null;
  for (let t = step; t <= curPat; t += step) {
    const h = HISTORICAL.find(x => x.pat >= t);
    if (!h) continue;
    const delta = monthsBetween(prevD, h.d);
    rows.push({
      t, d: h.d,
      fromStart: monthsBetween(startD, h.d),
      delta,
      faster: prevDelta != null && delta < prevDelta,
      slower: prevDelta != null && delta > prevDelta,
    });
    prevD = h.d; prevDelta = delta;
  }
  if (!rows.length) return '';

  const maxDelta = Math.max(...rows.map(r => r.delta), 1);
  const fastest = rows.reduce((a, b) => b.delta < a.delta ? b : a);
  const slowest = rows.reduce((a, b) => b.delta > a.delta ? b : a);

  // Próximo marco (ainda não atingido)
  const nextT = (Math.floor(curPat / step) + 1) * step;
  const progress = (curPat - (nextT - step)) / step * 100;

  const list = rows.map(r => {
    const w = Math.max(5, r.delta / maxDelta * 100);
    const col = r.faster ? 'var(--green)' : r.slower ? 'var(--yellow)' : 'var(--text-dim)';
    return `
      <div class="ms-row">
        <div class="ms-val">${fmtK(r.t)}</div>
        <div class="ms-date">${monthLabel(r.d)}</div>
        <div class="ms-track">
          <div class="ms-bar" style="width:${w}%;background:${col}"></div>
          <span class="ms-dur">${fmtDur(r.delta)}${r.faster ? ' ↓' : r.slower ? ' ↑' : ''}</span>
        </div>
      </div>`;
  }).join('');

  return `
    <div class="card mt-16">
      <div class="flex-between mb-4">
        <div class="card-title" style="margin-bottom:0">Marcos de Patrimônio</div>
        <span style="font-size:11px;color:var(--text-dim)">de 100 em 100 mil · patrimônio total</span>
      </div>
      <div style="font-size:12px;color:var(--text-muted);margin-bottom:6px">
        Cada barra = tempo desde o marco anterior. Mais curta = veio mais rápido:
        <b style="color:var(--green)">o mais veloz foi ${fmtK(fastest.t)}</b> (${fmtDur(fastest.delta)}),
        o mais lento ${fmtK(slowest.t)} (${fmtDur(slowest.delta)}).
      </div>
      <div style="display:flex;gap:16px;flex-wrap:wrap;font-size:11px;color:var(--text-dim);margin-bottom:12px">
        <span><span class="ms-dot" style="background:var(--green)"></span> mais rápido que o anterior</span>
        <span><span class="ms-dot" style="background:var(--yellow)"></span> mais lento que o anterior</span>
        <span><span class="ms-dot" style="background:var(--text-dim)"></span> 1º marco (sem base de comparação)</span>
      </div>
      <div class="ms-list">${list}</div>
      <div class="mt-12" style="padding:12px 14px;background:var(--surface-2);border:1px solid var(--border);border-radius:10px">
        <div class="flex-between" style="margin-bottom:6px">
          <span style="font-size:12px;color:var(--text-muted)">Próximo marco: <b style="color:var(--text)">${fmtK(nextT)}</b></span>
          <span style="font-size:12px;color:var(--yellow)">faltam ${fmt(nextT - curPat)}</span>
        </div>
        <div class="progress-bar-wrap"><div class="progress-bar" style="width:${progress}%;background:var(--accent)"></div></div>
        <div style="font-size:11px;color:var(--text-dim);margin-top:4px">${fmtPct(progress)} do caminho · atual ${fmt(curPat)}</div>
      </div>
    </div>`;
}

function renderDashboard() {
  const el  = document.getElementById('page-dashboard');
  const w   = investableWealth();
  const fin = fiNumber();
  const pct = Math.min(100, (w / fin) * 100);
  const last = HISTORICAL[HISTORICAL.length-1];
  // Mês anterior pelo CALENDÁRIO (addMonths), não pela posição no array — se um mês ficou sem
  // patrimônio preenchido na planilha, extractHistorical descarta a linha e o índice -2 pularia
  // 2+ meses, comparando "vs mês anterior" com um período que na verdade é mais longo.
  const prevKey = addMonths(last.d, -1);
  const prev = HISTORICAL.find(h => h.d === prevKey) || HISTORICAL[HISTORICAL.length-2];
  const prevGapMonths = prev ? monthsBetween(prev.d, last.d) : null;
  const prevLabel = prev ? (prevGapMonths === 1 ? 'mês anterior' : `${monthLabel(prev.d)} (${prevGapMonths} meses atrás)`) : 'mês anterior';

  const basePath   = buildScenarioPaths(S.assumptions.projectionYears * 12).find(s => s.id === 'base');
  const fiResult   = basePath ? findFIDate(basePath.path) : null;

  const last3h = HISTORICAL.slice(-3).filter(h => h.rec > 0);
  const avgSavingsRate = last3h.length > 0
    ? last3h.reduce((s, h) => s + savingsRateOf(h), 0) / last3h.length
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
        <div class="kpi-sub">${prev
          ? `<span class="${(last.pat - prev.pat) >= 0 ? 'badge-up' : 'badge-down'}">${(last.pat - prev.pat) >= 0 ? '↑ +' : '↓ -'}${fmtK(Math.abs(last.pat - prev.pat))}</span> vs ${prevLabel}`
          : 'sem mês anterior para comparar'}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Patrimônio Líquido</div>
        <div class="kpi-value lg" style="color:var(--accent)">${fmtK(last.pl)}</div>
        <div class="kpi-sub">${prev
          ? `<span class="${(last.pl - prev.pl) >= 0 ? 'badge-up' : 'badge-down'}">${(last.pl - prev.pl) >= 0 ? '↑ +' : '↓ -'}${fmtK(Math.abs(last.pl - prev.pl))}</span> vs ${prevLabel}`
          : 'sem mês anterior para comparar'}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Taxa de Poupança ${infoBtn('savingsrate')}</div>
        <div class="kpi-value" style="color:${avgSavingsRate>=40?'var(--green)':avgSavingsRate>=20?'var(--yellow)':'var(--red)'}">${fmtPct(avgSavingsRate)}</div>
        <div class="kpi-sub">Média dos últimos 3 meses</div>
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
        <span>Meta FI: ${fmt(fin)} (${fmt(S.fi.targetMonthlyIncome)}/mês à ${fmtPct(fiRate())} a.a.)</span>
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
          <a class="src-link" onclick="navigate('scenarios');return false" href="#" title="Receitas e gastos (e seus crescimentos) — cadastro na aba Cenários">receitas/gastos</a> ·
          <a class="src-link" onclick="navigate('scenarios');return false" href="#" title="Premissas e cenário Base (anos de projeção, deltas)">premissas</a>
        </div>
        <div class="chart-wrap chart-med"><canvas id="ch-dash-proj"></canvas></div>
      </div>
    </div>

    ${_buildReturnsCard()}
    ${_buildAporteRendimentoCard()}
    ${_buildMilestonesCard()}
  `;

  requestAnimationFrame(() => {
    _drawAporteRendChart();
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
let timelineTab = 'projecao';   // 'projecao' = gráfico/tabela · 'objetivos' = metas
function setTimelineTab(t) { timelineTab = t; destroyCharts(); renderTimeline(); }

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

  const headerHtml = `<div class="page-header"><div>
      <div class="page-title">Linha da Vida</div>
      <div class="page-subtitle">Trajetória histórica + projeção futura do patrimônio</div>
    </div></div>`;
  const tabsHtml = `<div class="tabs" style="margin-bottom:16px">
    <button class="tab-btn ${timelineTab === 'cenarios' ? 'active' : ''}" onclick="setTimelineTab('cenarios')">Cenários</button>
    <button class="tab-btn ${timelineTab === 'projecao' ? 'active' : ''}" onclick="setTimelineTab('projecao')">Projeção</button>
    <button class="tab-btn ${timelineTab === 'caixa' ? 'active' : ''}" onclick="setTimelineTab('caixa')">Fluxo de Caixa</button>
    <button class="tab-btn ${timelineTab === 'objetivos' ? 'active' : ''}" onclick="setTimelineTab('objetivos')">Objetivos</button>
  </div>`;

  if (timelineTab === 'cenarios') {
    el.innerHTML = headerHtml + tabsHtml + '<div id="sc-body"></div>';
    renderScenarios();
    return;
  }
  if (timelineTab === 'caixa') {
    el.innerHTML = headerHtml + tabsHtml + _fluxoCaixaBody();
    return;
  }
  if (timelineTab === 'objetivos') {
    el.innerHTML = headerHtml + tabsHtml + _objetivosBody();
    return;
  }

  el.innerHTML = headerHtml + tabsHtml + `
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

  // Metas (Objetivos) — marcos na trajetória, sempre visíveis quando há metas.
  // Posiciona pelo índice projetado mais próximo (robusto a horizontes que pulam meses, stepProj>1).
  if (S.goals && S.goals.length && base) {
    S.goals.forEach((g, i) => {
      const off = monthsBetween(startDate, g.dataAlvo);
      if (off < 0 || off >= projMonths) return;
      const idx = histLen + Math.round(off / stepProj);
      if (idx < 0 || idx >= allLabels.length) return;
      const w = base.path[Math.min(off, base.path.length - 1)]?.w;
      annotations[`goal${i}`] = {
        type: 'point', xValue: idx,
        yValue: (w != null ? w * deflate(off) : 0),
        backgroundColor: '#a78bfa', borderColor: '#fff', borderWidth: 1, radius: 6,
        label: { content: '◈ ' + g.name, enabled: true, position: 'bottom', color: '#a78bfa', backgroundColor: 'transparent', font: { size: 10 } }
      };
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
  // Agora é a aba "Cenários" dentro da Linha da Vida (renderiza em #sc-body).
  const el = document.getElementById('sc-body') || document.getElementById('page-scenarios');
  if (!el) return;

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
    <div class="page-subtitle" style="margin:-4px 0 14px">Arraste os controles para ajustar as premissas — tudo em valores de hoje (real, acima da inflação). Os cenários alimentam as linhas da aba Projeção.</div>
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

  // ── Perfil de risco (Necessidade × Capacidade × Tolerância) ──
  const rp = riskProfile();
  const dimBlock = (title, sub, lvl, txt) => `
    <div style="background:var(--surface-2);border-radius:8px;padding:12px">
      <div style="font-size:11px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.03em">${title}</div>
      <div style="font-size:10px;color:var(--text-dim);margin-bottom:6px">${sub}</div>
      <div style="font-size:16px;font-weight:700;text-transform:capitalize">${lvl}</div>
      <div style="font-size:11px;color:var(--text-muted);margin-top:4px;line-height:1.4">${txt}</div>
    </div>`;
  const riskCard = `<div class="card mb-16">
    <div class="card-title">Perfil de Risco — Necessidade × Capacidade × Tolerância</div>
    <p style="font-size:12px;color:var(--text-muted);margin-bottom:12px">A alocação deve respeitar a <b>menor</b> das três. Recomendação: <b style="color:var(--accent);text-transform:capitalize">${rp.rec}</b>.</p>
    <div class="kpi-grid-3" style="gap:12px">
      ${dimBlock('Necessidade', 'risco que você PRECISA', rp.necLvl, rp.necTxt)}
      ${dimBlock('Capacidade', 'risco que você PODE', rp.capLvl, `Horizonte de ${rp.anos} anos até aposentar.`)}
      ${dimBlock('Tolerância', 'risco que você AGUENTA', rp.tolLvl, rp.tolTxt)}
    </div>
    ${rp.overRisk
      ? `<div class="form-hint" style="margin-top:12px;color:var(--yellow)">⚠ Você tem <b>${fmtPct(rp.rvPct)}</b> em ativos de risco (RV/FII/internacional), mas sua necessidade de retorno é baixa. <b>Quando você já ganhou o jogo, não precisa continuar apostando</b> — considere reduzir risco e travar o resultado.</div>`
      : `<div class="form-hint" style="margin-top:12px">Hoje: <b>${fmtPct(rp.rvPct)}</b> da carteira em ativos de risco (RV/FII/internacional).</div>`}
  </div>`;

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

    ${riskCard}

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

// ── 11. FLUXO DE CAIXA / CADASTRO ─────────────────────────
// Cadastro de receitas e despesas (editores). Vive na aba Cenários (Linha da Vida),
// pois é onde as premissas do fluxo são configuradas.
function _cadastroBody() {
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

  return `<div class="grid-2 mb-16">
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
  </div>`;
}

// Aba "Fluxo de Caixa" (Linha da Vida): só os KPIs iniciais + a projeção mensal (60 meses),
// que torna VISÍVEL a evolução da poupança quando receita e gasto crescem em ritmos diferentes.
function _fluxoCaixaBody() {
  const totalInc = S.incomes.filter(i=>i.active).reduce((s,i)=>s+i.amount,0);
  const totalExp = S.expenses.filter(e=>e.active).reduce((s,e)=>s+e.amount,0);
  const savings  = totalInc - totalExp;

  const projRows = [];
  let sav0 = null;
  for (let m = 0; m < 60; m++) {
    const y = m / 12;
    const inc = S.incomes.filter(i=>i.active).reduce((s,i)=>s+i.amount*Math.pow(1+i.growthRate/100,y),0);
    const exp = S.expenses.filter(e=>e.active).reduce((s,e)=>s+e.amount*Math.pow(1+e.growthRate/100,y),0);
    const sv = inc - exp;
    if (m === 0) sav0 = sv;
    const delta = sv - sav0;   // variação da poupança vs hoje — deixa a "depreciação" explícita
    const label = monthLabel(addMonths(projectionStart().str, m));
    const yearMark = (m % 12 === 0);   // destaca o início de cada ano de projeção
    projRows.push(`<tr${yearMark ? ' style="background:var(--surface-2)"' : ''}>
      <td>${label}</td>
      <td class="r green">${fmt(inc)}</td>
      <td class="r red">${fmt(exp)}</td>
      <td class="r ${sv>=0?'green':'red'}">${fmt(sv)}</td>
      <td class="r muted">${fmtPct(inc>0?(sv/inc)*100:0)}</td>
      <td class="r ${delta<0?'red':delta>0?'green':'muted'}">${m===0?'—':(delta>=0?'+':'−')+fmt(Math.abs(delta))}</td>
    </tr>`);
  }

  return `
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

    <div class="card">
      <div class="flex-between mb-8">
        <div class="card-title" style="margin-bottom:0">Projeção de Caixa — Próximos 60 Meses</div>
        <span style="font-size:11px;color:var(--text-dim)">valores de hoje · Δ = variação da poupança vs. o mês atual · edite receitas/despesas na aba Cenários</span>
      </div>
      <div class="table-wrap hist-data-wrap">
        <table class="history-table">
          <thead><tr><th>Mês</th><th class="r">Receita</th><th class="r">Gastos</th><th class="r">Poupança</th><th class="r">Taxa</th><th class="r">Δ Poupança</th></tr></thead>
          <tbody>${projRows.join('')}</tbody>
        </table>
      </div>
    </div>
  `;
}

function toggleCF(type, id, val) {
  const arr = type==='inc' ? S.incomes : S.expenses;
  const item = arr.find(x=>x.id===id);
  if (item) { item.active = val; saveState(); renderTimeline(); }
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
  saveState(); closeModal(); renderTimeline();
}
function removeCF(type, id) {
  if (type==='inc') S.incomes  = S.incomes.filter(x=>x.id!==id);
  else              S.expenses = S.expenses.filter(x=>x.id!==id);
  saveState(); renderTimeline();
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
        <div class="slider-group" style="margin-top:8px">
          <div class="slider-label-row">
            <span class="slider-lbl">Gastos mensais iniciais</span>
            <span class="slider-val red" id="pv-totalExp">${fmtMes(totalExp)}</span>
          </div>
          <input type="range" class="sc-slider" min="0" max="80000" step="500"
            value="${totalExp}" oninput="assExpSliderInput(this)" onchange="assExpSliderCommit(this)">
        </div>
        <div class="form-hint" style="margin-top:8px">Ajuste os totais de receita e gasto pelos controles acima (em valores de hoje). A projeção mês a mês da poupança fica na aba <b>Fluxo de Caixa</b>.</div>
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
  if (document.getElementById('sc-body')) {   // aba Cenários (dentro da Linha da Vida) está aberta
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
  const ord = SECAO_DYN ? [...SECAO_DYN.order, 'Outros'] : SECAO_ORDER;
  return entries.slice().sort((a, b) => {
    const ia = ord.indexOf(a[0]);
    const ib = ord.indexOf(b[0]);
    if (ia === -1 && ib === -1) return 0;
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });
}

function hexToRgba(hex, alpha) {
  if (!hex || hex[0] !== '#') return hex; // já é var(--x) ou similar — usa como está
  const n = hex.length === 4
    ? hex.slice(1).split('').map(c => parseInt(c + c, 16))
    : [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
  return `rgba(${n[0]},${n[1]},${n[2]},${alpha})`;
}

const SECAO_COLORS = {
  'Alimentação':'#f87171','Casa':'#4f8ef7','Família':'#ec4899','Life':'#06b6d4',
  'Lazer':'#38bdf8','Transporte':'#e879f9','Compras':'#f97316','GF':'#ff6b9d',
  'Higiene':'#a78bfa','Saúde':'#22c55e','Moto':'#94a3b8','Carro':'#64748b',
  'Taxes':'#fbbf24','Medicamentos':'#34d399','Celular':'#818cf8','Financeiro':'#fb923c',
  'Viagens':'#2dd4bf','Não Recorrentes':'#a16207','Outros':'#475569',
};

/* ── Seções dinâmicas: espelham a aba "Fluxo de Caixa" da planilha (linha 23+) ──
 * O sync manda as linhas cruas (nome + bold); linhas em negrito são seções,
 * as demais são categorias da seção corrente. Se não houver dados (ou o
 * agrupamento falhar), cai no SECAO_MAP hardcoded acima.                    */
let SECAO_DYN = null;   // { map:{cat→sec}, order:[secs], normIdx:{catNormalizada→sec} }

function normCat(s) {
  return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim();
}

function buildSecoesFromFluxo(rows) {
  const map = {}, order = [], normIdx = {};
  const skip = /^(total|totais|m[eé]dia|%|receita)/i;
  let cur = null;
  for (const row of rows || []) {
    const name = String(row.name || '').trim();
    if (!name || skip.test(name)) continue;
    if (row.bold) {
      cur = name;
      if (!order.includes(name)) order.push(name);
    } else if (cur) {
      map[name] = cur;
      normIdx[normCat(name)] = cur;
    }
  }
  return order.length ? { map, order, normIdx } : null;
}

function applySecaoColors(order) {
  const palette = ['#f87171','#4f8ef7','#ec4899','#06b6d4','#38bdf8','#e879f9','#f97316','#a78bfa',
                   '#22c55e','#fbbf24','#94a3b8','#fb923c','#2dd4bf','#ff6b9d','#34d399','#818cf8','#a16207','#64748b'];
  order.forEach((s, i) => { if (!SECAO_COLORS[s]) SECAO_COLORS[s] = palette[i % palette.length]; });
}

function loadSecoesDyn() {
  try {
    const raw = localStorage.getItem('finplan_fluxo_secoes');
    if (!raw) return;
    SECAO_DYN = buildSecoesFromFluxo(JSON.parse(raw));
    if (SECAO_DYN) applySecaoColors(SECAO_DYN.order);
  } catch (e) { SECAO_DYN = null; }
}

function getSecao(natureza) {
  if (SECAO_DYN) {
    return SECAO_DYN.map[natureza]
        || SECAO_DYN.normIdx[normCat(natureza)]
        || SECAO_MAP[natureza]
        || 'Outros';
  }
  return SECAO_MAP[natureza] || 'Outros';
}

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

let expFilter = { period: '6m', section: '', refMonth: '' };   // refMonth '' = mês corrente
let expTab = 'overview';
let expAdvPeriod = 'mensal';   // escopo do ranking/distribuição em Gráficos Avançados: 'mensal' | 'trimestre' | 'ano'
let expSecSort = 'default';    // ordenação das Seções de Gasto: 'default' | 'mes' | 'yoy' | 'anual' (maior variação primeiro)
let expMetFilter = 'all';      // filtro de mês da aba Método de Pagamento: 'all' ou 'YYYY-MM'
let expMetDrill = null;        // método clicado na aba Método de Pagamento — mostra as transações dele

function setExpMetFilter(v) {
  expMetFilter = v;
  expMetDrill = null;   // troca de mês invalida o drill-down aberto (transações eram de outro período)
  destroyCharts();
  renderExpenses();
}

function setExpMetDrill(name) {
  expMetDrill = (expMetDrill === name) ? null : name;   // clicar de novo no mesmo método fecha
  renderExpenses();
}

function setExpSecSort(v) {
  expSecSort = v;
  destroyCharts();
  renderExpenses();
}

// Meses incluídos no escopo atual dos Gráficos Avançados, ancorados no mês de referência da página.
function _expAdvPeriodMonths() {
  const now = new Date();
  const realCurKey = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');
  const ref = (expFilter && expFilter.refMonth) || realCurKey;
  if (expAdvPeriod === 'trimestre') return Array.from({ length: 3 }, (_, i) => addMonths(ref, i - 2));
  if (expAdvPeriod === 'ano')       return Array.from({ length: 12 }, (_, i) => addMonths(ref, i - 11));
  return [ref];   // mensal
}

function _expAdvScopeLabel() {
  const m = _expAdvPeriodMonths();
  return m.length === 1 ? monthLabel(m[0]) : `${monthLabel(m[0])} – ${monthLabel(m[m.length - 1])}`;
}

// Total por seção dentro do escopo, do MAIOR gasto para o menor.
function _expAdvSecEntries() {
  const win = _expAdvPeriodMonths();
  const map = {};
  MOBILLS.forEach(r => {
    if (!win.includes(r.d)) return;
    const sec = getSecao(r.cat || 'Sem categoria');
    map[sec] = (map[sec] || 0) + Math.abs(r.val);
  });
  return Object.entries(map).sort((a, b) => b[1] - a[1]);
}

function _buildExpAdvFilterBar() {
  const opts = [['mensal', 'Mês'], ['trimestre', 'Trimestre'], ['ano', 'Ano']];
  return opts.map(([v, l]) => `<button class="btn ${expAdvPeriod === v ? 'btn-primary' : 'btn-ghost'} btn-sm" onclick="setExpAdvPeriod('${v}')">${l}</button>`).join('');
}

function setExpAdvPeriod(p) {
  expAdvPeriod = p;
  const bar = document.getElementById('exp-adv-filter');
  if (bar) bar.innerHTML = _buildExpAdvFilterBar();
  const lbl = document.getElementById('exp-adv-scope-label');
  if (lbl) lbl.textContent = _expAdvScopeLabel();
  _drawExpAdvCharts();
}

// Recria só os 2 gráficos do acordeão (sem re-render da página — preserva scroll e o accordion aberto).
function _drawExpAdvCharts() {
  const entries = _expAdvSecEntries();
  destroyChart('expPie'); destroyChart('expBar');
  const pieCtx = document.getElementById('ch-exp-pie');
  if (pieCtx && entries.length) {
    activeCharts.expPie = makePieChart('ch-exp-pie',
      entries.map(([s, v]) => `${s}  ${fmtK(v)}`),
      entries.map(([, v]) => v),
      entries.map(([s]) => SECAO_COLORS[s] || '#475569')
    );
  }
  const barCtx = document.getElementById('ch-exp-bar');
  if (barCtx && entries.length) {
    activeCharts.expBar = new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: entries.map(([s]) => s),
        datasets: [{ label: 'Total', data: entries.map(([, v]) => v), backgroundColor: entries.map(([s]) => SECAO_COLORS[s] || '#475569'), borderRadius: 4 }]
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
let expGastosQuery = '';
let expGastosNameQuery = '';

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

function setExpTab(tab) {
  expTab = tab;
  destroyCharts();
  renderExpenses();
}

function setGastosQuery(q) {
  expGastosQuery = q;
  destroyCharts();
  renderExpenses();
  const inp = document.getElementById('gastos-search-input');
  if (inp) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
}

function setGastosNameQuery(q) {
  expGastosNameQuery = q;
  destroyCharts();
  renderExpenses();
  const inp = document.getElementById('gastos-name-input');
  if (inp) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
}

// Aba "Método de Pagamento": distribuição por método (cartão, pix, ifood...), filtrável por mês.
// Usa MOBILLS_RAW (não MOBILLS) — de propósito ignora "Ignorado nos gastos" (ex: (-) AP):
// essa exclusão é sobre O QUE conta como gasto de consumo, não sobre COMO você pagou.
function buildMetodoTabHtml() {
  const MET_PALETTE = ['#4f8ef7', '#22c55e', '#f97316', '#a78bfa', '#ec4899', '#fbbf24', '#22d3ee', '#64748b', '#f87171', '#34d399'];

  const allMonths = [...new Set(MOBILLS_RAW.map(r => r.d))].sort().reverse();
  const filterMonth = allMonths.includes(expMetFilter) ? expMetFilter : 'all';
  const rows = filterMonth === 'all' ? MOBILLS_RAW : MOBILLS_RAW.filter(r => r.d === filterMonth);

  const monthOptions = `<option value="all" ${filterMonth === 'all' ? 'selected' : ''}>Todos os meses (${MOBILLS_RAW.length} lançamentos)</option>` +
    allMonths.map(m => `<option value="${m}" ${filterMonth === m ? 'selected' : ''}>${monthLabel(m)}</option>`).join('');

  const filterHtml = `<div class="card mb-16" style="padding:14px 16px;display:flex;align-items:center;gap:10px;flex-wrap:wrap">
    <span style="font-size:12px;color:var(--text-muted);font-weight:600">Filtrar por mês:</span>
    <select class="ctrl-select" style="font-size:13px" onchange="setExpMetFilter(this.value)">${monthOptions}</select>
    <span style="font-size:11px;color:var(--text-dim);margin-left:auto">${rows.length} lançamento(s) no período selecionado${(S.expenseExclude || []).length ? ' · inclui itens ignorados nos gastos (' + S.expenseExclude.join(', ') + ')' : ''}</span>
  </div>`;

  const hasMetodoData = rows.some(r => r.met && String(r.met).trim());
  if (!hasMetodoData) {
    return { html: filterHtml + `<div class="card mb-16" style="padding:20px;text-align:center;color:var(--text-muted)">
      <p style="font-size:13px">Nenhum lançamento com a coluna <b>Método</b> preenchida ${filterMonth === 'all' ? 'ainda' : 'neste mês'}. Preencha na planilha (cartão, pix, ifood...) e clique em <strong>↻ Sync Sheets</strong> para ver a distribuição aqui.</p>
    </div>`, chartData: null };
  }

  const byMet = {}, countMet = {};
  rows.forEach(r => {
    const met = (r.met && String(r.met).trim()) || 'Não informado';
    byMet[met] = (byMet[met] || 0) + Math.abs(r.val);
    countMet[met] = (countMet[met] || 0) + 1;
  });
  const entries = Object.entries(byMet).sort((a, b) => b[1] - a[1]);
  const total = entries.reduce((s, e) => s + e[1], 0);
  const colors = {};
  entries.forEach(([name], i) => { colors[name] = name === 'Não informado' ? '#475569' : MET_PALETTE[i % MET_PALETTE.length]; });

  const naoInformadoVal = byMet['Não informado'] || 0;
  const comMetodo = entries.filter(([n]) => n !== 'Não informado');
  const maisUsado = comMetodo[0] || entries[0];

  const kpiHtml = `<div class="kpi-grid mb-16">
    <div class="kpi"><div class="kpi-label">Total no período</div><div class="kpi-value" style="color:var(--accent)">${fmt(total, 2)}</div></div>
    <div class="kpi"><div class="kpi-label">Métodos distintos</div><div class="kpi-value">${comMetodo.length}</div></div>
    <div class="kpi"><div class="kpi-label">Mais usado</div><div class="kpi-value" style="color:${colors[maisUsado[0]]};font-size:18px">${maisUsado[0]}</div>
      <div class="kpi-sub">${fmtPct(total > 0 ? maisUsado[1] / total * 100 : 0)} do período</div></div>
    <div class="kpi"><div class="kpi-label">Sem método informado</div><div class="kpi-value" style="color:${naoInformadoVal > 0 ? 'var(--yellow)' : 'var(--green)'}">${fmt(naoInformadoVal, 2)}</div>
      <div class="kpi-sub">${fmtPct(total > 0 ? naoInformadoVal / total * 100 : 0)} do período</div></div>
  </div>`;

  const esc = s => String(s).replace(/'/g, "\\'");
  const drillAtivo = entries.some(([n]) => n === expMetDrill) ? expMetDrill : null;

  const listHtml = entries.map(([name, val]) => {
    const pct = total > 0 ? val / total * 100 : 0;
    const ativo = name === drillAtivo;
    return `<div style="margin-bottom:10px;cursor:pointer;${ativo ? 'outline:1.5px solid ' + colors[name] + ';border-radius:6px;padding:4px 6px;margin:-4px -6px 6px' : ''}" onclick="setExpMetDrill('${esc(name)}')" title="Clique para ver as transações">
      <div class="flex-between mb-4 text-sm">
        <span><span class="color-dot" style="background:${colors[name]}"></span>${name}</span>
        <span class="text-muted">${fmtPct(pct)} · ${fmt(val, 2)}</span>
      </div>
      <div class="progress-bar-wrap"><div class="progress-bar" style="width:${pct}%;background:${colors[name]}"></div></div>
    </div>`;
  }).join('');

  const chartCard = `<div class="card mb-16">
    <div class="card-title">Distribuição por Método — ${filterMonth === 'all' ? 'Todo o período' : monthLabel(filterMonth)}</div>
    <div class="grid-2">
      <div class="chart-wrap chart-med"><canvas id="ch-exp-met-pie"></canvas></div>
      <div style="align-self:center">${listHtml}</div>
    </div>
    ${naoInformadoVal > 0 ? `<div class="form-hint" style="margin-top:4px">Lançamentos sem <b>Método</b> preenchido na planilha entram em "Não informado" — vale revisar os mais antigos conforme o hábito de preencher a coluna pega.</div>` : ''}
  </div>`;

  const tableRows = entries.map(([name, val]) => {
    const pct = total > 0 ? val / total * 100 : 0;
    const ativo = name === drillAtivo;
    return `<tr style="cursor:pointer;${ativo ? 'background:var(--surface-2)' : ''}" onclick="setExpMetDrill('${esc(name)}')" title="Clique para ver as transações">
      <td><span class="color-dot" style="background:${colors[name]}"></span>${name}${ativo ? ' <span class="text-dim" style="font-size:10px">▾</span>' : ''}</td>
      <td class="r">${fmt(val, 2)}</td>
      <td class="r muted">${fmtPct(pct)}</td>
      <td class="r muted">${countMet[name]}</td>
    </tr>`;
  }).join('');
  const tableCard = `<div class="card mb-16">
    <div class="card-title">Valores Exatos por Modalidade <span style="font-weight:400;font-size:11px;color:var(--text-dim)">· clique numa linha para ver as transações</span></div>
    <div class="table-wrap"><table class="history-table">
      <thead><tr><th>Método</th><th class="r">Valor gasto</th><th class="r">% do período</th><th class="r">Lançamentos</th></tr></thead>
      <tbody>${tableRows}</tbody>
      <tfoot><tr style="border-top:2px solid var(--border-2)"><td class="bold">Total</td><td class="r bold">${fmt(total, 2)}</td><td class="r bold">100,0%</td><td class="r bold">${rows.length}</td></tr></tfoot>
    </table></div>
  </div>`;

  // Drill-down: transações do método clicado, dentro do mesmo filtro de mês da aba
  let drillCard = '';
  if (drillAtivo) {
    const txs = rows
      .filter(r => ((r.met && String(r.met).trim()) || 'Não informado') === drillAtivo)
      .slice()
      .sort((a, b) => (b.dt || '').localeCompare(a.dt || ''));
    const fmtDia = dt => { const m = String(dt || '').match(/^(\d{4})-(\d{2})-(\d{2})/); return m ? `${m[3]}/${m[2]}/${m[1]}` : (dt || '—'); };
    const txRows = txs.map(r => `<tr>
      <td>${fmtDia(r.dt)}</td>
      <td>${r.name || '<span class="muted">—</span>'}</td>
      <td class="muted">${r.cat || '—'}</td>
      <td class="r red">${fmt(Math.abs(r.val), 2)}</td>
    </tr>`).join('');
    drillCard = `<div class="card mb-16">
      <div class="flex-between mb-8">
        <div class="card-title" style="margin-bottom:0">Transações — ${drillAtivo}</div>
        <button class="btn btn-ghost btn-sm" onclick="setExpMetDrill('${esc(drillAtivo)}')">✕ fechar</button>
      </div>
      <div class="table-wrap" style="max-height:400px;overflow:auto"><table class="history-table">
        <thead><tr><th>Data</th><th>Nome</th><th>Categoria</th><th class="r">Valor</th></tr></thead>
        <tbody>${txRows}</tbody>
        <tfoot><tr style="border-top:2px solid var(--border-2)"><td class="bold" colspan="3">Total — ${txs.length} lançamento(s)</td><td class="r bold">${fmt(byMet[drillAtivo], 2)}</td></tr></tfoot>
      </table></div>
    </div>`;
  }

  return {
    html: filterHtml + kpiHtml + chartCard + tableCard + drillCard,
    chartData: { labels: entries.map(e => e[0]), data: entries.map(e => e[1]), colors: entries.map(([name]) => colors[name]) },
  };
}

function buildGastosTabHtml() {
  const allNaturezas = [...new Set(MOBILLS.map(r => r.cat || '').filter(Boolean))].sort();
  const allNomes = [...new Set(MOBILLS.map(r => r.name || '').filter(Boolean))].sort();
  const searchHtml = `<div class="card mb-16" style="padding:16px">
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
      <div style="flex:1;min-width:220px">
        <input type="text" id="gastos-name-input" class="form-input"
          placeholder="Nome do lançamento… ex: Mercado Angeloni, iFood"
          value="${expGastosNameQuery.replace(/"/g, '&quot;')}"
          list="gastos-nome-list"
          oninput="setGastosNameQuery(this.value)"
          style="width:100%;font-size:14px">
        <datalist id="gastos-nome-list">
          ${allNomes.map(n => `<option value="${n}">`).join('')}
        </datalist>
      </div>
      ${expGastosNameQuery ? `<button class="btn btn-ghost btn-sm" onclick="setGastosNameQuery('')">✕</button>` : ''}
      <div style="flex:1;min-width:220px">
        <input type="text" id="gastos-search-input" class="form-input"
          placeholder="Natureza… ex: Cabelereiro, Mercado, Uber"
          value="${expGastosQuery.replace(/"/g, '&quot;')}"
          list="gastos-nat-list"
          oninput="setGastosQuery(this.value)"
          style="width:100%;font-size:14px">
        <datalist id="gastos-nat-list">
          ${allNaturezas.map(n => `<option value="${n}">`).join('')}
        </datalist>
      </div>
      ${expGastosQuery ? `<button class="btn btn-ghost btn-sm" onclick="setGastosQuery('')">✕</button>` : ''}
    </div>
    <div style="font-size:11px;color:var(--text-dim);margin-top:8px">${allNaturezas.length} naturezas · ${allNomes.length} nomes — busca parcial em cada campo; os dois juntos combinam (E lógico)</div>
  </div>`;

  const qNat  = expGastosQuery.trim().toLowerCase();
  const qName = expGastosNameQuery.trim().toLowerCase();

  if (!qNat && !qName) {
    return {
      html: searchHtml + `<div style="text-align:center;padding:60px 0;color:var(--text-muted)">
        <div style="font-size:13px;color:var(--text-dim)">Digite uma natureza ou um nome acima para ver o histórico, gráfico e insights</div>
      </div>`,
      chartData: null
    };
  }

  const isExactNat = qNat && allNaturezas.some(n => n.toLowerCase() === qNat);
  const matched = MOBILLS.filter(r => {
    const natOk  = !qNat  || (r.cat  && (isExactNat ? r.cat.toLowerCase()  === qNat  : r.cat.toLowerCase().includes(qNat)));
    const nameOk = !qName || (r.name && r.name.toLowerCase().includes(qName));
    return natOk && nameOk;
  });

  if (!matched.length) {
    const termos = [qNat && `natureza "${expGastosQuery}"`, qName && `nome "${expGastosNameQuery}"`].filter(Boolean).join(' e ');
    return {
      html: searchHtml + `<div style="text-align:center;padding:60px 0;color:var(--text-muted)">
        Nenhuma transação encontrada para ${termos}
      </div>`,
      chartData: null
    };
  }

  const byMonthG = {};
  matched.forEach(r => { byMonthG[r.d] = (byMonthG[r.d] || 0) + Math.abs(r.val); });
  const sortedMonths = Object.keys(byMonthG).sort();
  const totalAcc = matched.reduce((s, r) => s + Math.abs(r.val), 0);
  const monthsWithData = sortedMonths.length;
  const avgPerMonth = totalAcc / Math.max(1, monthsWithData);
  const totalMobillsMonths = [...new Set(MOBILLS.map(r => r.d))].length;
  const avgAllMonths = totalAcc / Math.max(1, totalMobillsMonths);
  const matchedNats = [...new Set(matched.map(r => r.cat))].sort();
  const sortedDesc = matched.slice().sort((a, b) => (b.dt || b.d).localeCompare(a.dt || a.d));
  const lastTx = sortedDesc[0];

  const now = new Date();
  const curKey = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');

  // Trend: last 3 months
  const last3Keys = Array.from({length: 3}, (_, i) => addMonths(curKey, i - 2));
  const last3Vals = last3Keys.map(m => byMonthG[m] || 0);
  let trendHtml = '';
  if (last3Vals[0] > 0 && last3Vals[1] > 0 && last3Vals[2] > 0) {
    if (last3Vals[2] > last3Vals[1] && last3Vals[1] > last3Vals[0]) {
      const pct = (last3Vals[2] - last3Vals[0]) / last3Vals[0] * 100;
      trendHtml = `<div class="exp-insight-item" style="border-left:3px solid var(--yellow)">
        <span style="color:var(--yellow);font-size:14px;flex-shrink:0">↗</span>
        <span style="font-size:12px;color:var(--text)">Alta nos últimos 3 meses: ${monthLabel(last3Keys[0])} → ${monthLabel(last3Keys[2])} (+${fmtPct(pct)})</span>
      </div>`;
    } else if (last3Vals[2] < last3Vals[1] && last3Vals[1] < last3Vals[0]) {
      const pct = (last3Vals[0] - last3Vals[2]) / last3Vals[0] * 100;
      trendHtml = `<div class="exp-insight-item" style="border-left:3px solid var(--green)">
        <span style="color:var(--green);font-size:14px;flex-shrink:0">↘</span>
        <span style="font-size:12px;color:var(--text)">Queda nos últimos 3 meses: ${monthLabel(last3Keys[0])} → ${monthLabel(last3Keys[2])} (-${fmtPct(pct)})</span>
      </div>`;
    }
  }

  // Spike vs 5m avg
  const last6Keys = Array.from({length: 6}, (_, i) => addMonths(curKey, i - 5));
  const prev5Vals = last6Keys.slice(0, 5).filter(m => byMonthG[m]).map(m => byMonthG[m]);
  const avg5 = prev5Vals.length ? prev5Vals.reduce((a, b) => a + b, 0) / prev5Vals.length : 0;
  const lastMonthVal = byMonthG[last6Keys[5]] || 0;
  let spikeHtml = '';
  if (avg5 > 0 && lastMonthVal > avg5 * 1.4) {
    spikeHtml = `<div class="exp-insight-item" style="border-left:3px solid var(--red)">
      <span style="color:var(--red);font-size:14px;flex-shrink:0">⚠</span>
      <span style="font-size:12px;color:var(--text)">${monthLabel(last6Keys[5])}: ${fmt(lastMonthVal)} — ${fmtPct((lastMonthVal / avg5 - 1) * 100)} acima da média dos 5 meses anteriores (${fmt(avg5)})</span>
    </div>`;
  }

  // Seasonality: month-over-month same month last year
  const sameMonthLastYear = addMonths(curKey, -12);
  const lyVal = byMonthG[sameMonthLastYear] || 0;
  let yoyHtml = '';
  if (lyVal > 0 && lastMonthVal > 0) {
    const pct = (lastMonthVal - lyVal) / lyVal * 100;
    const cls = pct > 0 ? 'var(--red)' : 'var(--green)';
    yoyHtml = `<div class="exp-insight-item" style="border-left:3px solid ${cls}">
      <span style="color:${cls};font-size:14px;flex-shrink:0">${pct > 0 ? '↑' : '↓'}</span>
      <span style="font-size:12px;color:var(--text)">Ano a ano: ${fmt(lastMonthVal)} em ${monthLabel(curKey)} vs ${fmt(lyVal)} em ${monthLabel(sameMonthLastYear)} (${pct > 0 ? '+' : ''}${fmtPct(pct)})</span>
    </div>`;
  }

  const insightsHtml = (trendHtml || spikeHtml || yoyHtml) ? `
    <div class="card mb-16">
      <div class="card-title">Insights</div>
      <div class="exp-insights-list">${trendHtml}${spikeHtml}${yoyHtml}</div>
    </div>` : '';

  const fmtDia = r => {
    const m = String(r.dt || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
    return m ? `${m[3]}/${m[2]}/${m[1]}` : monthLabel(r.d);   // fallback p/ dados antigos sem dia
  };
  const txRows = sortedDesc.map(r => `<tr>
    <td style="color:var(--text-muted);font-size:12px;white-space:nowrap">${fmtDia(r)}</td>
    <td style="color:var(--text);font-size:12px">${r.name || '—'}</td>
    <td style="color:var(--text-muted);font-size:12px">${r.cat || '—'}</td>
    <td class="r" style="color:var(--red);font-weight:600">${fmt(Math.abs(r.val))}</td>
  </tr>`).join('');

  const html = searchHtml + `
    <div class="kpi-grid mb-16" style="grid-template-columns:repeat(5,1fr)">
      <div class="kpi">
        <div class="kpi-label">Total Acumulado</div>
        <div class="kpi-value" style="color:var(--accent)">${fmt(totalAcc)}</div>
        <div class="kpi-sub">${matched.length} lançamento${matched.length !== 1 ? 's' : ''} em ${monthsWithData} ${monthsWithData === 1 ? 'mês' : 'meses'}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Média (meses c/ gasto)</div>
        <div class="kpi-value">${fmt(avgPerMonth)}</div>
        <div class="kpi-sub">${monthsWithData} de ${totalMobillsMonths} meses</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Média Geral</div>
        <div class="kpi-value" style="color:var(--text-muted)">${fmt(avgAllMonths)}</div>
        <div class="kpi-sub">todos os ${totalMobillsMonths} meses do histórico</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Último Lançamento</div>
        <div class="kpi-value" style="font-size:18px">${monthLabel(lastTx.d)}</div>
        <div class="kpi-sub">${fmt(Math.abs(lastTx.val))} · ${lastTx.cat}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Natureza${matchedNats.length !== 1 ? 's' : ''}</div>
        <div class="kpi-value" style="font-size:18px;color:var(--text-muted)">${matchedNats.length}</div>
        <div class="kpi-sub" style="font-size:11px">${matchedNats.slice(0, 3).join(' · ')}${matchedNats.length > 3 ? '…' : ''}</div>
      </div>
    </div>

    ${insightsHtml}

    <div class="card mb-16">
      <div class="card-title">Evolução Mensal</div>
      <div class="chart-wrap chart-med"><canvas id="ch-gastos-trend"></canvas></div>
    </div>

    <div class="card mb-16">
      <div class="card-title">Histórico — ${matched.length} lançamento${matched.length !== 1 ? 's' : ''}</div>
      <div class="table-wrap">
        <table class="history-table">
          <thead><tr>
            <th>Dia</th><th>Nome</th><th>Natureza</th><th class="r">Valor</th>
          </tr></thead>
          <tbody>${txRows}</tbody>
        </table>
      </div>
    </div>
  `;

  return { html, chartData: { sortedMonths, byMonthG, curKey } };
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
  const realCurKey = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');
  const curMonthKey = expFilter.refMonth || realCurKey;   // mês de referência escolhido pelo usuário
  const isCurrentMonth = curMonthKey === realCurKey;
  const lastMonth = curMonthKey;
  const prevMonth = addMonths(curMonthKey, -1);
  const lastVal = byMonthMap[lastMonth] || 0;
  const prevVal = byMonthMap[prevMonth] || 0;
  const deltaPct = prevVal > 0 ? ((lastVal - prevVal) / prevVal * 100) : 0;
  const prev5m = Array.from({length: 5}, (_, i) => addMonths(curMonthKey, i - 5));
  const prev5withData = prev5m.filter(m => (byMonthMap[m] || 0) > 0);
  const avg6m = prev5withData.length > 0 ? prev5withData.reduce((s, m) => s + (byMonthMap[m] || 0), 0) / prev5withData.length : 0;
  const deltaVsAvg6 = avg6m > 0 ? (lastVal / avg6m - 1) * 100 : null;

  // "Maior Seção" = maior gasto POR VALOR no mês de referência (não a 1ª da ordem fixa,
  // nem a média de todo o histórico). Cai no total geral se o mês não tiver dados.
  const secMonthDesc = secNames
    .map(s => [s, bySecMonthMap[s + '|' + curMonthKey] || 0])
    .filter(e => e[1] > 0)
    .sort((a, b) => b[1] - a[1]);
  const bySecValueDesc = Object.entries(bySecMap).sort((a, b) => b[1] - a[1]);
  const topSecIsMonth = secMonthDesc.length > 0;
  const topSec = topSecIsMonth ? secMonthDesc[0] : (bySecValueDesc[0] || ['—', 0]);
  const topSecBase = topSecIsMonth ? (lastVal || topSec[1]) : (totalGastos || topSec[1]);
  const topSecScope = topSecIsMonth ? `no mês` : `do total`;

  const prd = expFilter.period;
  let periodN = 6;
  if (prd === '3m') periodN = 3;
  else if (prd === '6m') periodN = 6;
  else if (prd === '12m') periodN = 12;
  else if (prd === 'ytd') periodN = parseInt(curMonthKey.split('-')[1], 10);
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
      <div class="kpi-label">Maior Seção ${topSecIsMonth ? '· ' + monthLabel(lastMonth) : ''}</div>
      <div class="kpi-value" style="color:${SECAO_COLORS[topSec[0]] || 'var(--text)'}">${topSec[0]}</div>
      <div class="kpi-sub">${fmt(topSec[1])} · ${fmtPct(topSecBase > 0 ? topSec[1] / topSecBase * 100 : 0)} ${topSecScope}</div>
    </div>`;
  }

  // ── YoY + Quarter comparison ──
  const yoyMonth = addMonths(curMonthKey, -12);
  const yoyVal = byMonthMap[yoyMonth] || 0;
  const yoyDelta = yoyVal > 0 ? ((lastVal - yoyVal) / yoyVal * 100) : 0;
  const [refY, refM] = curMonthKey.split('-').map(Number);   // trimestre segue o mês de referência
  const curQ = Math.floor((refM - 1) / 3);
  const curQMonths = Array.from({length: 3}, (_, i) => refY + '-' + String(curQ * 3 + i + 1).padStart(2, '0'));
  const prevQStart = curQ === 0 ? (refY - 1) + '-10' : refY + '-' + String((curQ - 1) * 3 + 1).padStart(2, '0');
  const prevQMonths = Array.from({length: 3}, (_, i) => addMonths(prevQStart, i));
  const curQTotal = curQMonths.reduce((s, m) => s + (byMonthMap[m] || 0), 0);
  const prevQTotal = prevQMonths.reduce((s, m) => s + (byMonthMap[m] || 0), 0);
  const qDelta = prevQTotal > 0 ? ((curQTotal - prevQTotal) / prevQTotal * 100) : 0;
  const qNames = ['Q1','Q2','Q3','Q4'];

  // ── Inflação pessoal (informativo — não entra em projeções) ──
  const infP = inflacaoPessoal();
  const inflacaoHtml = infP ? `<div class="card mb-16" style="padding:14px 18px;display:flex;align-items:center;gap:16px;flex-wrap:wrap">
    <div>
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--text-dim)">Inflação Pessoal — 12m vs 12m anteriores ${infoBtn('inflacao')}</div>
      <div style="display:flex;align-items:baseline;gap:12px;margin-top:4px">
        <span style="font-size:22px;font-weight:700;color:${infP.pct > S.assumptions.ipca ? 'var(--red)' : 'var(--green)'}">${infP.pct >= 0 ? '+' : ''}${fmtPct(infP.pct)}</span>
        <span style="font-size:13px;color:var(--text-muted)">vs IPCA ${fmtPct(S.assumptions.ipca)} — seu custo de vida ${infP.pct > S.assumptions.ipca ? 'sobe MAIS rápido que' : 'acompanha'} a inflação oficial</span>
      </div>
    </div>
    <div style="margin-left:auto;font-size:11px;color:var(--text-dim);text-align:right">
      ${fmt(infP.avgPrev12)}/mês → ${fmt(infP.avgLast12)}/mês<br>informativo — não altera projeções
      ${infP.src.startsWith('Gastos Totais') ? `<br><span style="color:var(--yellow)">⚠ col. J ainda não tem 24m — usando Gastos Totais</span>` : ''}
    </div>
  </div>` : '';

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
      ${prevQTotal > 0 ? `<div class="card"><div class="card-title">${qNames[curQ]} vs ${qNames[curQ > 0 ? curQ - 1 : 3]} ${curQ === 0 ? refY - 1 : refY}</div>
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
  if (isCurrentMonth && dayOfMonth > 1 && dayOfMonth < daysInMonth - 1 && lastVal > 0) {   // projeção só faz sentido p/ mês em andamento
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

  // ── Seletor de mês de referência (header — afeta a página inteira) ──
  const monthOptions = [...months].reverse()
    .map(m => `<option value="${m}" ${curMonthKey === m && expFilter.refMonth ? 'selected' : ''}>${monthLabel(m)}</option>`).join('');
  const monthSelectHtml = `<select class="ctrl-select" onchange="setExpFilter('refMonth',this.value)" style="font-size:13px" title="Mês de referência das análises">
    <option value="">Mês atual (${monthLabel(realCurKey)})</option>
    ${monthOptions}
  </select>`;

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

  // Pré-computa as 3 variações de cada seção (necessário tanto pro card quanto pra ordenação abaixo).
  const enrichedSecs = displaySecEntries.map(([sec, total]) => {
    const lastSec = bySecMonthMap[sec + '|' + lastMonth] || 0;
    const prevSec = bySecMonthMap[sec + '|' + prevMonth] || 0;
    const monthlyDelta = prevSec > 0 ? ((lastSec - prevSec) / prevSec * 100) : null;
    const yoySec = bySecMonthMap[sec + '|' + yoyMonth] || 0;
    const yoyDelta = yoySec > 0 ? ((lastSec - yoySec) / yoySec * 100) : null;
    // variação anual: soma dos últimos 12 meses vs. os 12 meses anteriores
    const a12 = months.slice(-12), p12 = months.slice(-24, -12);
    const sum12  = a12.reduce((s, m) => s + (bySecMonthMap[sec + '|' + m] || 0), 0);
    const sumP12 = p12.reduce((s, m) => s + (bySecMonthMap[sec + '|' + m] || 0), 0);
    const annualDelta = sumP12 > 0 ? ((sum12 - sumP12) / sumP12 * 100) : null;
    return { sec, total, lastSec, monthlyDelta, yoyDelta, annualDelta };
  });

  // Ordena pela MAIOR variação da coluna escolhida — do aumento mais forte pra queda mais forte
  // (sinal importa: +25, +10, −15 — não por módulo). 'default' mantém a ordem das seções.
  const sortKeyBySec = { mes: 'monthlyDelta', yoy: 'yoyDelta', anual: 'annualDelta' };
  const sortedSecs = expSecSort === 'default' ? enrichedSecs : enrichedSecs.slice().sort((a, b) => {
    const ka = a[sortKeyBySec[expSecSort]], kb = b[sortKeyBySec[expSecSort]];
    if (ka == null && kb == null) return 0;
    if (ka == null) return 1;
    if (kb == null) return -1;
    return kb - ka;
  });

  let sectionCardsHtml = sortedSecs.map(({ sec, total, lastSec, monthlyDelta, yoyDelta, annualDelta }) => {
    const secColor = SECAO_COLORS[sec] || '#475569';
    const budgetLimit = budgets[sec];
    const secId = sec.replace(/[^a-zA-Z]/g, '');

    let budgetBadge = '';
    if (budgetLimit) {
      const pct = lastSec / budgetLimit * 100;
      const bColor = pct > 100 ? 'tag-red' : pct > 85 ? 'tag-yellow' : 'tag-green';
      budgetBadge = `<span class="tag ${bColor}" style="margin-left:8px">${fmtPct(pct)} do budget</span>`;
    }

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
          <div class="exp-var-col">${varBadge(monthlyDelta)}</div>
          <div class="exp-var-col">${varBadge(yoyDelta)}</div>
          <div class="exp-var-col">${varBadge(annualDelta)}</div>
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
    // Lean FI: patrimônio que cobre só os gastos fixos pela taxa de retirada ativa
    const leanFI = (fixoAvg * 12) / (fiRate() / 100);
    fixSplit = { fixoAvg, varAvg, pctFixo: (fixo + variavel) > 0 ? fixo / (fixo + variavel) * 100 : 0, leanFI, leanPct: Math.min(100, investableWealth() / leanFI * 100) };
  }

  const advancedHtml = `
    <div class="kpi-grid kpi-grid-2 mb-16">
      ${fixSplit ? `
      <div class="kpi">
        <div class="kpi-label">Fixo vs Variável — média 12m</div>
        <div class="kpi-value" style="font-size:19px"><span style="color:var(--accent)">${fmt(fixSplit.fixoAvg)}</span> <span style="font-size:13px;color:var(--text-dim)">/</span> <span style="color:var(--yellow)">${fmt(fixSplit.varAvg)}</span></div>
        <div class="kpi-sub">${fmtPct(fixSplit.pctFixo)} dos gastos são recorrentes</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Lean FI — só os fixos</div>
        <div class="kpi-value" style="color:${fixSplit.leanPct >= 100 ? 'var(--green)' : 'var(--accent)'}">${fixSplit.leanPct >= 100 ? 'Atingido ✓' : fmtK(fixSplit.leanFI)}</div>
        <div class="kpi-sub">${fmtPct(fixSplit.leanPct)} coberto — patrimônio que banca os gastos fixos a ${fmtPct(fiRate())}</div>
      </div>` : `
      <div class="kpi" style="grid-column:span 2">
        <div class="kpi-label">Fixo vs Variável</div>
        <div class="kpi-value" style="font-size:15px;color:var(--text-muted)">Atualize o Apps Script</div>
        <div class="kpi-sub">o script da planilha precisa exportar a coluna Recorrente — re-cole o sheets-sync.gs e re-implante</div>
      </div>`}
    </div>`;

  const gastosResult = expTab === 'gastos' ? buildGastosTabHtml() : null;
  const gastosHtml = gastosResult ? gastosResult.html : '';
  const gastosChartData = gastosResult ? gastosResult.chartData : null;

  const metodoResult = expTab === 'metodo' ? buildMetodoTabHtml() : null;
  const metodoHtml = metodoResult ? metodoResult.html : '';
  const metodoChartData = metodoResult ? metodoResult.chartData : null;

  el.innerHTML = `
    <div class="page-header">
      <div>
        <div class="page-title">Análise de Gastos</div>
        <div class="page-subtitle">${monthLabel(months[0])} — ${monthLabel(lastMonth)} · ${MOBILLS.length} lançamentos</div>
      </div>
      <div class="page-actions" style="align-items:center">
        ${monthSelectHtml}
        <button class="btn btn-ghost btn-sm" onclick="openBudgetModal()">⚙ Orçamento</button>
      </div>
    </div>

    <div class="tabs" style="margin-bottom:16px">
      <button class="tab-btn ${expTab === 'overview' ? 'active' : ''}" onclick="setExpTab('overview')">Visão Geral</button>
      <button class="tab-btn ${expTab === 'gastos' ? 'active' : ''}" onclick="setExpTab('gastos')">Gastos</button>
      <button class="tab-btn ${expTab === 'metodo' ? 'active' : ''}" onclick="setExpTab('metodo')">Método de Pagamento</button>
    </div>

    ${expTab === 'gastos' ? gastosHtml : expTab === 'metodo' ? metodoHtml : `
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
        <div class="kpi-label">Maior Seção ${topSecIsMonth ? '· ' + monthLabel(lastMonth) : ''}</div>
        <div class="kpi-value" style="color:${SECAO_COLORS[topSec[0]] || 'var(--text)'};font-size:18px">${topSec[0]}</div>
        <div class="kpi-sub">${fmt(topSec[1])} · ${fmtPct(topSecBase > 0 ? topSec[1] / topSecBase * 100 : 0)} ${topSecScope}</div>
      </div>
      ${kpi4}
    </div>

    ${advancedHtml}

    ${filterBarHtml}

    ${pacingHtml}
    ${comparisonHtml}
    ${inflacaoHtml}
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
      <div class="flex-between mb-8" style="padding:0 24px;flex-wrap:wrap;gap:8px">
        <div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted)">Seções de Gasto <span style="font-weight:400;text-transform:none;letter-spacing:0;color:var(--text-dim);font-size:11px">· clique para expandir</span></div>
        <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
          <select class="ctrl-select" style="font-size:12px" onchange="setExpSecSort(this.value)" title="Ordenar seções pela maior variação (em módulo)">
            <option value="default" ${expSecSort === 'default' ? 'selected' : ''}>Ordem padrão</option>
            <option value="mes"   ${expSecSort === 'mes'   ? 'selected' : ''}>Maior variação — mês</option>
            <option value="yoy"   ${expSecSort === 'yoy'   ? 'selected' : ''}>Maior variação — YoY</option>
            <option value="anual" ${expSecSort === 'anual' ? 'selected' : ''}>Maior variação — anual</option>
          </select>
          <div class="exp-var-col exp-var-head ${expSecSort === 'mes' ? 'exp-var-active' : ''}" title="Variação vs. o mês anterior">Var. mês</div>
          <div class="exp-var-col exp-var-head ${expSecSort === 'yoy' ? 'exp-var-active' : ''}" title="Variação vs. o mesmo mês do ano passado">Var. YoY</div>
          <div class="exp-var-col exp-var-head ${expSecSort === 'anual' ? 'exp-var-active' : ''}" title="Acumulado dos últimos 12 meses vs. os 12 meses anteriores">Var. anual</div>
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
        <div class="flex-between mb-12" style="flex-wrap:wrap;gap:8px">
          <div style="font-size:11px;color:var(--text-dim)">Escopo: <b style="color:var(--text-muted)" id="exp-adv-scope-label">${_expAdvScopeLabel()}</b></div>
          <div id="exp-adv-filter" style="display:flex;gap:6px">${_buildExpAdvFilterBar()}</div>
        </div>
        <div class="grid-2">
          <div>
            <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);margin-bottom:8px">Distribuição por Seção</div>
            <div class="chart-wrap chart-med"><canvas id="ch-exp-pie"></canvas></div>
          </div>
          <div>
            <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);margin-bottom:8px">Ranking de Seções — maior para menor</div>
            <div class="chart-wrap chart-med"><canvas id="ch-exp-bar"></canvas></div>
          </div>
        </div>
      </div>
    </details>
    `}
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

    // Pizza — distribuição por método de pagamento (aba Método) — tooltip com valor EXATO, sem abreviar
    const metPieCtx = document.getElementById('ch-exp-met-pie');
    if (metodoChartData && metPieCtx) {
      destroyChart('expMetPie');
      activeCharts.expMetPie = new Chart(metPieCtx, {
        type: 'doughnut',
        data: {
          labels: metodoChartData.labels,
          datasets: [{ data: metodoChartData.data, backgroundColor: metodoChartData.colors.map(c => c + 'cc'), borderColor: metodoChartData.colors, borderWidth: 1.5 }],
        },
        options: {
          responsive: true, maintainAspectRatio: false, cutout: '55%',
          plugins: {
            legend: { position: 'right', labels: { color: '#8ca3c1', font: { size: 11 }, padding: 12 } },
            tooltip: { callbacks: { label: c => ` ${c.label}: ${fmt(c.raw, 2)}` } },
          },
        },
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

    // Lazy-init for accordion charts (Gráficos Avançados: ranking maior→menor por escopo mês/trimestre/ano)
    const accDetails = el.querySelectorAll('details.params-accordion');
    accDetails.forEach(det => {
      det.addEventListener('toggle', () => {
        if (!det.open) return;
        setTimeout(() => {
          if (!activeCharts.expPie && !activeCharts.expBar) _drawExpAdvCharts();
        }, 50);
      });
    });

    // Gastos tab — evolução mensal da natureza buscada
    if (gastosChartData) {
      const { sortedMonths: gMonths, byMonthG, curKey: gCurKey } = gastosChartData;
      const gastosCtx = document.getElementById('ch-gastos-trend');
      if (gastosCtx) {
        activeCharts.gastosTrack = new Chart(gastosCtx, {
          type: 'bar',
          data: {
            labels: gMonths.map(m => monthLabel(m)),
            datasets: [{
              label: 'Valor',
              data: gMonths.map(m => byMonthG[m] || 0),
              backgroundColor: gMonths.map(m => m === gCurKey ? '#4f8ef7' : '#4f8ef744'),
              borderColor: '#4f8ef7', borderWidth: 1, borderRadius: 4,
            }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: { callbacks: { label: c => ` ${fmt(c.parsed.y)}` } }
            },
            scales: {
              x: { grid: { color: '#1e2d4220' }, ticks: { color: '#8ca3c1', font: { size: 10 } } },
              y: { grid: { color: '#1e2d4240' }, ticks: { color: '#8ca3c1', font: { size: 10 }, callback: v => fmtK(v) }, beginAtZero: true }
            }
          }
        });
      }
    }
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
  const w     = investableWealth();
  const fin   = fiNumber();
  const pct   = Math.min(100, (w / fin) * 100);
  const base  = buildScenarioPaths(S.assumptions.projectionYears * 12).find(s=>s.id==='base');
  const fiRes = base ? findFIDate(base.path) : null;

  // Indicadores avançados
  // A projeção principal já é REAL (valores de hoje). Aqui calculamos a versão NOMINAL só p/ contraste.
  const fiNominal = findFIDate(projectPath(40 * 12, investableWealth(), weightedReturn(), S.assumptions.ipca, S.assumptions.ipca));
  const mc      = monteCarloFI(500, 40);                     // distribuição estocástica
  const mcd     = monteCarloDecum(500, 90);                  // sobrevivência pós-FI
  window._lastMcDecum = mcd;                                 // usado pelo explicador ⓘ
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

  // Sensibilidade da TAXA DE RETIRADA: o trade-off central do FIRE.
  // Taxa maior → meta menor e FI mais cedo, porém menor sobrevivência pós-FI.
  let sensiRate = null;
  if (S.fi.mode === 'swr') {
    const saveRate = S.fi.withdrawalRate;
    sensiRate = [3, 3.5, 4, 4.5, 5, 6].map(rt => {
      S.fi.withdrawalRate = rt;                     // fiNumber()/findFIDate leem daqui
      const path = projectPath(S.assumptions.projectionYears * 12, investableWealth(), weightedReturnReal(), 0, 0);
      const fiR  = findFIDate(path);
      const mcdR = monteCarloDecum(300, 90);
      return {
        rt,
        meta: (S.fi.targetMonthlyIncome * 12) / (rt / 100),
        anos: fiR ? fiR.months / 12 : null,
        succ: mcdR.successRate,
        atual: Math.abs(rt - saveRate) < 0.01,
      };
    });
    S.fi.withdrawalRate = saveRate;                 // restaura sem salvar
  }

  el.innerHTML = `
    <div class="page-header">
      <div><div class="page-title">Independência Financeira</div>
        <div class="page-subtitle">Quando e como você chegará à FI</div>
      </div>
    </div>

    <div class="grid-2 mb-16">
      <div class="card">
        <div class="card-title">Meta FI ${infoBtn('finumber')}</div>

        <div class="fi-mode-toggle">
          <button class="fi-mode-btn ${S.fi.mode==='swr'?'active':''}" onclick="fiSetMode('swr')">Regra dos 4%</button>
          <button class="fi-mode-btn ${S.fi.mode==='perpetuidade'?'active':''}" onclick="fiSetMode('perpetuidade')">Perpetuidade real</button>
        </div>

        <div class="slider-group mb-8">
          <div class="slider-label-row">
            <span class="slider-lbl">Renda mensal almejada</span>
            <span class="slider-val green" id="fi-inc-val">${fmt(S.fi.targetMonthlyIncome)}/mês</span>
          </div>
          <input type="range" class="sc-slider" min="1000" max="100000" step="500"
            value="${S.fi.targetMonthlyIncome}"
            oninput="fiSliderInput(this,'income')" onchange="fiSliderCommit()">
        </div>

        ${S.fi.mode === 'swr' ? `
        <div class="slider-group">
          <div class="slider-label-row">
            <span class="slider-lbl">Taxa de retirada segura</span>
            <span class="slider-val" id="fi-rate-val">${fmtPct(S.fi.withdrawalRate)}</span>
          </div>
          <input type="range" class="sc-slider" min="1" max="8" step="0.1"
            value="${S.fi.withdrawalRate}"
            oninput="fiSliderInput(this,'rate')" onchange="fiSliderCommit()">
          <div class="fi-mode-note">Quanto você assume que pode sacar do patrimônio por ano. <b>Taxa maior → meta MENOR e FI mais cedo, porém mais risco de o dinheiro acabar</b> — veja a tabela de trade-off e a Sobrevivência pós-FI abaixo.</div>
        </div>
        ` : `
        <div class="slider-group">
          <div class="slider-label-row">
            <span class="slider-lbl">Juro real esperado</span>
            <span class="slider-val" id="fi-rate-val">${fmtPct(S.fi.realRate)}</span>
          </div>
          <input type="range" class="sc-slider" min="2" max="9" step="0.1"
            value="${S.fi.realRate}"
            oninput="fiSliderInput(this,'realrate')" onchange="fiSliderCommit()">
          <div class="fi-mode-note">Vive só do juro real: o principal se preserva em valor de hoje, indefinidamente. Sua carteira rende <b>${fmtPct(weightedReturnReal())} real</b> hoje. Risco: o juro real pode cair e forçar reinvestir a menos.</div>
        </div>
        `}

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
        <div class="card-title">Data Estimada da FI — Cenário Base ${infoBtn('fidate')}</div>
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
            <div><div class="text-sm text-muted mb-4">Renda passiva mensal</div><div style="font-size:22px;font-weight:700;color:var(--green)">${fmt(fiRes.wealth * fiRate()/100/12)}</div></div>
          </div>
        ` : `<div style="color:var(--text-muted);padding:20px 0">FI não atingida no horizonte de ${S.assumptions.projectionYears} anos. Aumente a poupança ou o horizonte.</div>`}
      </div>
    </div>

    <div class="card mb-16">
      <div class="card-title">Como a meta é calculada</div>
      <div class="eq-headline" style="font-size:19px">
        ${fmt(S.fi.targetMonthlyIncome)}<span>/mês</span> × 12 = ${fmtK(S.fi.targetMonthlyIncome * 12)}<span>/ano</span> ÷ <b>${fmtPct(fiRate())}</b> = <b>${fmtK(fin)}</b>
      </div>
      <div class="grid-2 mt-12" style="gap:12px">
        <div class="concept-block">
          <div class="cb-title" style="color:var(--green)">Renda almejada — "quanto eu saco"</div>
          <div class="cb-text">O valor em R$ que o patrimônio precisa te pagar todo mês, para sempre, em dinheiro de hoje. Aumentou a renda → a meta <b>sobe</b>.</div>
        </div>
        ${S.fi.mode === 'swr' ? `
        <div class="concept-block">
          <div class="cb-title" style="color:var(--accent)">Taxa de retirada — "quão duro o pote trabalha"</div>
          <div class="cb-text">A fração do patrimônio que você assume poder sacar por ano sem quebrar. Taxa maior → o mesmo saque cabe num pote <b>menor</b> (meta cai), mas o risco de o dinheiro acabar <b style="color:var(--red)">sobe</b> — veja o Trade-off e a Sobrevivência pós-FI abaixo.</div>
        </div>` : `
        <div class="concept-block">
          <div class="cb-title" style="color:var(--accent)">Juro real esperado — "o pote nunca encolhe"</div>
          <div class="cb-text">Você vive só do rendimento acima da inflação; o principal se preserva para sempre. Juro maior assumido → cada real trabalha mais → meta <b>menor</b>. O risco aqui é o juro real cair e te obrigar a reinvestir a menos.</div>
        </div>`}
      </div>
    </div>

    <div class="kpi-grid mb-16">
      <div class="kpi">
        <div class="kpi-label">FI nominal (ilusão) ${infoBtn('finominal')}</div>
        <div class="kpi-value" style="color:var(--purple)">${fiNominal ? fiNominal.date.toLocaleDateString('pt-BR',{month:'short',year:'numeric'}) : '> 40 anos'}</div>
        <div class="kpi-sub">${fiNominal && fiRes ? `parece ~${Math.max(0, Math.round((fiRes.months - fiNominal.months)/12))} ano(s) mais cedo em R$ futuros — o número real (acima) já desconta a inflação` : `em R$ futuros, sem descontar a inflação`}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Runway ${infoBtn('runway')}</div>
        <div class="kpi-value" style="color:var(--accent)">${(rwM/12).toFixed(1)} anos</div>
        <div class="kpi-sub">se a renda zerar hoje, o patrimônio investível banca ${Math.round(rwM)} meses de gastos</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Coast FI ${infoBtn('coastfi')}</div>
        <div class="kpi-value" style="color:${coastY !== null && coastY <= 20 ? 'var(--green)' : 'var(--yellow)'}">${coastY === 0 ? 'Atingido ✓' : coastY !== null ? coastY.toFixed(1) + ' anos' : '—'}</div>
        <div class="kpi-sub">${coastY === 0 ? 'juros sozinhos já sustentam a meta' : coastY !== null ? `sem nunca mais aportar, FI aos ${Math.round(currentAge() + coastY)} anos` : 'retorno real ≤ 0'}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Cobertura Renda Passiva ${infoBtn('coverage')}</div>
        <div class="kpi-value" style="color:${cov.pct >= 100 ? 'var(--green)' : cov.pct >= 50 ? 'var(--accent)' : 'var(--yellow)'}">${fmtPct(cov.pct)}</div>
        <div class="kpi-sub">${fmt(cov.passiveMonthly)}/mês estimado vs ${fmt(cov.avgGas)} de gastos</div>
      </div>
    </div>

    ${mcd ? `
    <div class="card mb-16">
      <div class="card-title">Sobrevivência pós-FI — o dinheiro dura? ${infoBtn('mcdecum')}</div>
      <div class="grid-3" style="gap:14px;align-items:center">
        <div style="text-align:center;padding:14px;border-radius:var(--r-sm);background:${mcd.successRate >= 90 ? 'var(--green-dim)' : mcd.successRate >= 75 ? 'var(--accent-dim)' : 'var(--red-dim)'}">
          <div style="font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.6px;margin-bottom:6px">Taxa de Sucesso</div>
          <div style="font-size:30px;font-weight:800;color:${mcd.successRate >= 90 ? 'var(--green)' : mcd.successRate >= 75 ? 'var(--yellow)' : 'var(--red)'}">${fmtPct(mcd.successRate)}</div>
          <div style="font-size:11px;color:var(--text-muted)">dos cenários, o dinheiro dura até os ${mcd.horizonAge}</div>
        </div>
        <div style="text-align:center;padding:14px">
          <div style="font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.6px;margin-bottom:6px">Patrimônio aos ${mcd.horizonAge} (mediana)</div>
          <div style="font-size:22px;font-weight:700;color:var(--accent)">${mcd.medianFinal != null ? fmtK(mcd.medianFinal) : '—'}</div>
          <div style="font-size:11px;color:var(--text-muted)">P10: ${mcd.p10Final != null ? fmtK(mcd.p10Final) : '—'}</div>
        </div>
        <div style="text-align:center;padding:14px">
          <div style="font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.6px;margin-bottom:6px">Quando falha, falha aos</div>
          <div style="font-size:22px;font-weight:700;color:var(--red)">${mcd.medianRuinAge != null ? Math.round(mcd.medianRuinAge) + ' anos' : 'nunca'}</div>
          <div style="font-size:11px;color:var(--text-muted)">idade mediana da ruína (${(100 - mcd.successRate).toFixed(0)}% dos casos)</div>
        </div>
      </div>
      <div class="mt-12 text-sm text-muted" style="text-align:center">
        Aposenta ao atingir a FI (ou aos ${S.assumptions.retirementAge}) e saca ${fmt(mcd.saque)}/mês em valores de hoje, sem cortar gasto em ano ruim — o teste mais duro.
      </div>
    </div>` : ''}

    ${mc ? `
    <div class="card mb-16">
      <div class="card-title">Monte Carlo — chegada à FI (${mc.sims} simulações, vol. ${fmtPct(portfolioVol())} a.a.) ${infoBtn('montecarlo')}</div>
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

    ${sensiRate ? `
    <div class="card mb-16">
      <div class="card-title">Trade-off da Taxa de Retirada — meta menor ≠ plano melhor</div>
      <div class="table-wrap">
        <table class="sensitivity">
          <thead><tr><th>Taxa</th><th class="r">Meta FI</th><th class="r">Anos até a FI</th><th class="r">Sucesso pós-FI (até os 90)</th></tr></thead>
          <tbody>${sensiRate.map(s => `
            <tr class="${s.atual ? 'sim-best' : ''}">
              <td class="bold">${fmtPct(s.rt)}${s.atual ? ' <span class="sim-badge">atual</span>' : ''}</td>
              <td class="r">${fmtK(s.meta)}</td>
              <td class="r">${s.anos != null ? s.anos.toFixed(1) : '> horizonte'}</td>
              <td class="r" style="color:${s.succ >= 90 ? 'var(--green)' : s.succ >= 75 ? 'var(--yellow)' : 'var(--red)'};font-weight:700">${fmtPct(s.succ)}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="text-sm text-muted mt-8">Taxa maior = meta menor e FI mais cedo, porém <b style="color:var(--red)">maior risco de o dinheiro acabar</b>. A taxa é a premissa de quanto dá pra sacar do patrimônio por ano — agressividade, não rendimento.</div>
    </div>` : ''}

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

function fiSetMode(mode) {
  S.fi.mode = mode;
  saveState();
  renderFI();
}

function fiSliderInput(el, type) {
  const val = +el.value;
  if (type === 'income') {
    S.fi.targetMonthlyIncome = val;
    const s = document.getElementById('fi-inc-val');
    if (s) s.textContent = fmt(val) + '/mês';
  } else if (type === 'realrate') {
    S.fi.realRate = val;
    const s = document.getElementById('fi-rate-val');
    if (s) s.textContent = fmtPct(val);
  } else {
    S.fi.withdrawalRate = val;
    const s = document.getElementById('fi-rate-val');
    if (s) s.textContent = fmtPct(val);
  }
  const fin = fiNumber();
  const w   = investableWealth();
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
let historyTab = 'overview';
let fluxoView = 'mes';   // 'mes' = colunas mensais · 'ano' = só Total/Média por ano
let fluxoCollapsed = new Set();   // nomes de macro-contas recolhidas (some ao trocar de aba/recarregar)
let histSort = { col: 'd', dir: 'desc' };   // ordenação da tabela "Dados Mensais Históricos"
function setHistoryTab(t) { historyTab = t; destroyCharts(); renderHistory(); }
function setHistSort(col) {
  if (histSort.col === col) histSort.dir = histSort.dir === 'asc' ? 'desc' : 'asc';
  else histSort = { col, dir: 'desc' };   // nova coluna começa do maior p/ o menor (ex.: meses de mais gasto)
  const card = document.getElementById('hist-table-card');
  if (card) card.innerHTML = _buildHistTableCard();
}

// Tabela "Dados Mensais Históricos" com coluna Mês fixa e ordenação por qualquer coluna.
function _buildHistTableCard() {
  const COLS = [
    { key: 'd',      label: 'Mês' },
    { key: 'pat',    label: 'Patrimônio' },
    { key: 'pl',     label: 'PL' },
    { key: 'cres',   label: 'Crescimento' },
    { key: 'apo',    label: 'Aporte' },
    { key: 'rent',   label: 'Rentabilidade' },
    { key: 'rate',   label: 'Taxa de Poupança' },
    { key: 'rec',    label: 'Receita' },
    { key: 'gas',    label: 'Gastos Totais' },
    { key: 'gasRec', label: 'Gastos Recorrentes' },
    { key: 'gasNRec',label: 'Gastos Não-Rec.' },
    { key: 'taxes',  label: 'Taxes' },
  ];
  // Enriquece cada mês com aporte e taxa efetivos (mesma lógica de exibição)
  const data = HISTORICAL.map(h => ({ ...h, apo: h.apo ?? (h.rec - h.gas), rate: h.txp ?? savingsRate(h) }));
  const dir = histSort.dir === 'asc' ? 1 : -1;
  data.sort((a, b) => {
    if (histSort.col === 'd') return dir * String(a.d).localeCompare(String(b.d));
    const av = a[histSort.col], bv = b[histSort.col];
    const aN = (av == null || isNaN(av)), bN = (bv == null || isNaN(bv));
    if (aN && bN) return 0;
    if (aN) return 1;            // nulos sempre no fim, independthe da direção
    if (bN) return -1;
    return dir * (av - bv);
  });

  const arrow = c => histSort.col === c ? (histSort.dir === 'asc' ? ' ▲' : ' ▼') : '';
  const head = COLS.map(c =>
    `<th class="${c.key === 'd' ? '' : 'r'} hist-sortable" onclick="setHistSort('${c.key}')" title="Ordenar por ${c.label}">${c.label}${arrow(c.key)}</th>`
  ).join('');

  const pp   = v => (v == null || isNaN(v)) ? '<span class="muted">—</span>' : (v >= 0 ? '+' : '') + v.toFixed(2).replace('.', ',') + '%';
  const rr   = v => (v == null || isNaN(v)) ? '<span class="muted">—</span>' : fmt(v);
  const sign = v => (v == null || isNaN(v)) ? '' : (v >= 0 ? 'green' : 'red');

  const rows = data.map(h => `<tr>
    <td class="muted">${monthLabel(h.d)}</td>
    <td class="r accent">${fmt(h.pat)}</td>
    <td class="r">${fmt(h.pl)}</td>
    <td class="r ${sign(h.cres)}">${pp(h.cres)}</td>
    <td class="r ${h.apo >= 0 ? 'green' : 'red'}">${fmt(h.apo)}</td>
    <td class="r ${sign(h.rent)}">${pp(h.rent)}</td>
    <td class="r ${h.rate >= 40 ? 'green' : h.rate >= 20 ? 'yellow' : 'red'}">${fmtPct(h.rate)}</td>
    <td class="r green">${fmt(h.rec)}</td>
    <td class="r red">${fmt(h.gas)}</td>
    <td class="r">${rr(h.gasRec)}</td>
    <td class="r">${rr(h.gasNRec)}</td>
    <td class="r">${rr(h.taxes)}</td>
  </tr>`).join('');

  return `
    <div class="card-title">Dados Mensais Históricos <span style="font-weight:400;font-size:11px;color:var(--text-dim)">· clique num cabeçalho para ordenar</span></div>
    <div class="table-wrap hist-data-wrap">
      <table class="history-table">
        <thead><tr>${head}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}
function setFluxoView(v) { fluxoView = v; renderHistory(); }
function toggleFluxoSection(name) {
  if (fluxoCollapsed.has(name)) fluxoCollapsed.delete(name); else fluxoCollapsed.add(name);
  renderHistory();
}

// Espelho da aba "Fluxo de Caixa": grade inteira, com toggle mês/ano.
function _buildFluxoGridTab() {
  if (!FLUXOGRID || !FLUXOGRID.length) {
    return `<div class="card" style="padding:40px;text-align:center;color:var(--text-muted)">
      <p style="font-size:15px;margin-bottom:8px">Aba "Fluxo de Caixa" ainda não sincronizada.</p>
      <p style="font-size:13px">Atualize o Apps Script (Deploy > nova versão) e clique em <strong>↻ Sync Sheets</strong>.</p>
    </div>`;
  }
  const isDate = v => /^\d{4}-\d{2}-\d{2}$/.test(String(v ?? ''));
  const MES = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];

  // cabeçalho = linha com mais células de data (os meses)
  let hIdx = 0, best = -1;
  FLUXOGRID.slice(0, 15).forEach((row, i) => {
    const c = row.filter(isDate).length;
    if (c > best) { best = c; hIdx = i; }
  });
  const header = FLUXOGRID[hIdx] || [];
  const nCols = header.length;

  // classifica cada coluna (a partir da 2ª): mês (data) ou resumo (Total/Média)
  const colKind = header.map((h, j) => {
    if (j === 0) return 'label';
    if (isDate(h)) return 'mes';
    return String(h ?? '').trim() !== '' ? 'resumo' : 'vazio';
  });
  const hasResumo = colKind.includes('resumo');

  const visibleCols = [];
  for (let j = 0; j < nCols; j++) {
    if (j === 0) { visibleCols.push(j); continue; }
    if (colKind[j] === 'vazio') continue;
    if (fluxoView === 'mes' && colKind[j] === 'mes') visibleCols.push(j);
    else if (fluxoView === 'ano' && colKind[j] === 'resumo') visibleCols.push(j);
    else if (!hasResumo) visibleCols.push(j);   // sem colunas de resumo: mostra tudo
  }

  const fmtHead = (h, kind) => {
    if (kind === 'mes' && isDate(h)) { const [y, m] = String(h).split('-'); return MES[+m - 1] + '/' + y.slice(2); }
    return String(h ?? '') || '—';
  };
  const fmtCell = v => {
    if (typeof v === 'number') return v.toLocaleString('pt-BR', { maximumFractionDigits: 0 });
    const s = String(v ?? '');
    const m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    return m ? `${MES[+m[2] - 1]}/${m[1].slice(2)}` : s;
  };

  // Super-grupos: a planilha já tem "Total Receitas" e "Total Gastos" como macro-contas de
  // topo (negrito), cada uma com sub-seções também em negrito prefixadas "(+)"/"(-)":
  //   Total Receitas → (+) Total Receitas Ativas, (+) Total Receitas Passivas, (+) Total Proventos
  //   Total Gastos   → (-) Gastos, (-) Gastos Não Recorrentes, (-) Impostos
  // Não sintetizamos nada: só herdamos a cor do grupo (verde/vermelho) por toda a árvore,
  // e o "(-) AP" fica isolado em amarelo. O agrupamento/colapso de cada macro-conta continua.
  const stripSign = s => String(s ?? '').replace(/^\(\+\)\s*|^\(-\)\s*/, '').trim();
  const FLUXO_SUPERGRUPO = {
    'total receitas': 'receitas', 'total receitas ativas': 'receitas',
    'total receitas passivas': 'receitas', 'total proventos': 'receitas',
    'total gastos': 'gastos', 'gastos': 'gastos',
    'gastos nao recorrentes': 'gastos', 'impostos': 'gastos',
  };
  const FLUXO_TOPO = { 'total receitas': true, 'total gastos': true };
  const FLUXO_SUPERGRUPO_COR = { receitas: '#22c55e', gastos: '#f87171' };
  const FLUXO_AP_COR = '#eab308';
  const resolveGrupo = label => {
    const n = normCat(stripSign(label));
    if (n === 'ap') return 'ap';
    return FLUXO_SUPERGRUPO[n] || null;
  };
  const isTopo = label => !!FLUXO_TOPO[normCat(stripSign(label))];
  const colorForGrupo = (label, grupo) => {
    if (grupo === 'ap') return FLUXO_AP_COR;
    if (grupo) return FLUXO_SUPERGRUPO_COR[grupo];
    return SECAO_COLORS[label] || null;
  };

  // corpo = linhas depois do cabeçalho com rótulo na 1ª coluna (carrega o índice original
  // p/ consultar o negrito da col A = macro-conta/seção). Hierarquia de negrito com 2 níveis:
  // "Total Receitas/Gastos" (topo) → "(+)/(-) ..." (seção) → categorias (detalhe). Recolher o
  // topo esconde a seção inteira; recolher uma seção esconde só suas categorias.
  const esc = s => String(s).replace(/'/g, "\\'");
  const bold = Array.isArray(FLUXOBOLD) ? FLUXOBOLD : [];
  const body = [];
  let curColor = null, curTop = null, curSection = null;
  for (let i = hIdx + 1; i < FLUXOGRID.length; i++) {
    const label = String(FLUXOGRID[i][0] ?? '').trim();
    if (label === '') continue;
    const section = !!bold[i];
    const topo = section && isTopo(label);
    if (section) {
      curColor = colorForGrupo(label, resolveGrupo(label));
      if (topo) { curTop = label; curSection = null; }
      else curSection = label;
    }
    // pula linha se a seção-mãe estiver recolhida, ou (p/ não-topo) se o topo-mãe estiver recolhido
    if (!topo && curTop && fluxoCollapsed.has(curTop)) continue;
    if (!section && curSection && fluxoCollapsed.has(curSection)) continue;
    body.push({ cells: FLUXOGRID[i], section, topo, color: curColor, toggleKey: section ? label : (curSection || curTop) });
  }

  const toggle = `<div class="fi-mode-toggle" style="max-width:240px;margin-bottom:14px">
    <button class="fi-mode-btn ${fluxoView === 'mes' ? 'active' : ''}" onclick="setFluxoView('mes')">Mês a mês</button>
    <button class="fi-mode-btn ${fluxoView === 'ano' ? 'active' : ''}" onclick="setFluxoView('ano')" ${hasResumo ? '' : 'disabled title="planilha sem colunas de Total/Média"'}>Por ano</button>
  </div>`;

  const rowHtml = ({ cells, section, topo, color, toggleKey }) => {
    const hasColor = !!color;
    const alpha = topo ? .28 : section ? .16 : .06;
    const bg = hasColor ? hexToRgba(color, alpha) : '';
    const borderColor = hasColor ? (topo || section ? color : hexToRgba(color, .55)) : 'transparent';
    const borderW = topo ? 5 : section ? 4 : 3;
    const collapsed = section && fluxoCollapsed.has(toggleKey);
    const caret = section ? `<span class="fx-caret">${collapsed ? '▸' : '▾'}</span>` : '';
    const trAttrs = section ? ` onclick="toggleFluxoSection('${esc(toggleKey)}')" style="cursor:pointer"` : '';
    const rowCls = topo ? 'fx-top' : section ? 'fx-section' : 'fx-detail';
    // A 1ª coluna é fixa (sticky): o fundo precisa ser OPACO, senão as colunas que passam por
    // baixo ao rolar vazam através do tint semi-transparente. Compõe o tint sobre o --surface sólido.
    const firstBg = hasColor ? `linear-gradient(${bg}, ${bg}), var(--surface)` : 'var(--surface)';
    return `<tr class="${rowCls}"${trAttrs}>${visibleCols.map((j, idx) => {
      const v = cells[j];
      const isNum = typeof v === 'number';
      const cls = `${j > 0 ? 'r ' : ''}${!section && colKind[j] === 'resumo' ? 'accent ' : ''}${isNum && v < 0 ? 'red' : ''}`.trim();
      const style = idx === 0 ? `background:${firstBg};border-left:${borderW}px solid ${borderColor}` : `background:${bg}`;
      const content = idx === 0 ? `${caret}${fmtCell(v)}` : fmtCell(v);
      return `<td class="${cls}" style="${style}">${content}</td>`;
    }).join('')}</tr>`;
  };

  return `<div class="card">
    <div class="flex-between mb-8">
      <div class="card-title" style="margin-bottom:0">Fluxo de Caixa — ${body.length} linhas</div>
      <span style="font-size:11px;color:var(--text-dim)">espelho da planilha · verde = receita · vermelho = gasto · amarelo = (-) AP</span>
    </div>
    ${toggle}
    <div class="table-wrap fluxo-grid-wrap" style="max-height:600px;overflow:auto">
      <table>
        <thead><tr>${visibleCols.map(j => `<th class="${colKind[j] === 'resumo' ? 'accent' : ''} ${j > 0 ? 'r' : ''}">${fmtHead(header[j], colKind[j])}</th>`).join('')}</tr></thead>
        <tbody>${body.map(rowHtml).join('')}</tbody>
      </table>
    </div>
  </div>`;
}

function renderHistory() {
  const el = document.getElementById('page-history');
  const last = HISTORICAL[HISTORICAL.length-1];
  const first = HISTORICAL[0];
  const years = (HISTORICAL.length) / 12;
  const cagr  = (Math.pow(last.pat/first.pat, 1/years)-1)*100;

  const tabsHtml = `<div class="tabs" style="margin-bottom:16px">
    <button class="tab-btn ${historyTab === 'overview' ? 'active' : ''}" onclick="setHistoryTab('overview')">Visão Geral</button>
    <button class="tab-btn ${historyTab === 'fluxo' ? 'active' : ''}" onclick="setHistoryTab('fluxo')">Fluxo de Caixa</button>
  </div>`;
  const headerHtml = (sub) => `<div class="page-header"><div>
      <div class="page-title">Histórico</div><div class="page-subtitle">${sub}</div>
    </div></div>`;

  if (historyTab === 'fluxo') {
    el.innerHTML = headerHtml('Espelho da aba Fluxo de Caixa da planilha') + tabsHtml + _buildFluxoGridTab();
    return;
  }

  // Retorno realizado (TWR) vs CDI — separa esforço (aporte) de juros
  const twr12   = twr(12);
  const twrAll  = twr();
  const cdi12   = cdiAnnualized(12);
  const cdiAll  = cdiAnnualized();
  const alpha12 = twr12 - cdi12;
  const assumed = weightedReturn();

  el.innerHTML = `
    ${headerHtml(`${monthLabel(first.d)} — ${monthLabel(last.d)} · ${HISTORICAL.length} meses`)}
    ${tabsHtml}

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
        <div class="kpi-label">CAGR do Patrimônio ${infoBtn('cagr')}</div>
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
        <div class="kpi-label">Retorno Realizado — 12m ${infoBtn('twr')}</div>
        <div class="kpi-value" style="color:${twr12 >= cdi12 ? 'var(--green)' : 'var(--red)'}">${fmtPct(twr12)}</div>
        <div class="kpi-sub">TWR: (Δpatrimônio − aporte) / patrimônio</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">CDI no Período — 12m</div>
        <div class="kpi-value" style="color:var(--text-muted)">${fmtPct(cdi12)}</div>
        <div class="kpi-sub">benchmark aproximado</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Alpha vs CDI — 12m ${infoBtn('alpha')}</div>
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

    ${_buildPatrimonioRealCard()}

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

    ${_buildLifestyleCard()}

    <div class="card" id="hist-table-card">${_buildHistTableCard()}</div>
  `;

  requestAnimationFrame(() => {
    _drawHistRealChart();
    _drawLifestyleChart();
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

    const savingsRates = sampled.map(h => savingsRateOf(h));
    destroyChart('histSavings');
    activeCharts.histSavings = new Chart(document.getElementById('ch-hist-savings'), {
      type:'bar',
      data:{
        labels,
        datasets:[{
          label:'Taxa de Poupança %',
          data:savingsRates,
          backgroundColor: savingsRates.map(v=>v>=40?'#22c55e66':v>=20?'#4f8ef766':'#f8717166'),
          borderColor:     savingsRates.map(v=>v>=40?'#22c55e':v>=20?'#4f8ef7':'#f87171'),
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

// ── 19b. DÍVIDAS ──────────────────────────────────────────
let debtsTab = 'overview';
function setDebtsTab(t) { debtsTab = t; destroyCharts(); renderDebts(); }

function renderDebts() {
  const el = document.getElementById('page-debts');
  const debts = S.debts || [];

  const tabsHtml = `<div class="tabs" style="margin-bottom:16px">
    <button class="tab-btn ${debtsTab === 'overview' ? 'active' : ''}" onclick="setDebtsTab('overview')">Visão Geral</button>
    <button class="tab-btn ${debtsTab === 'fin' ? 'active' : ''}" onclick="setDebtsTab('fin')">Financiamento — Histórico</button>
  </div>`;
  const headerHtml = (sub) => `
    <div class="page-header"><div>
      <div class="page-title">Financiamento</div>
      <div class="page-subtitle">${sub}</div>
    </div>
    <div class="page-actions"><button class="btn btn-primary btn-sm" onclick="openDebtModal()">+ Novo financiamento</button></div>
    </div>`;

  if (debtsTab === 'fin') {
    el.innerHTML = headerHtml('Espelho da aba Financiamento da planilha') + tabsHtml + _buildFinHistTab();
    return;
  }

  if (!debts.length) {
    el.innerHTML = headerHtml('Registre financiamentos e acompanhe saldo, juros e quitação') + tabsHtml + `
      <div class="card" style="padding:40px;text-align:center;color:var(--text-muted)">
        <p style="font-size:16px;margin-bottom:8px">Nenhum financiamento registrado.</p>
        <p style="font-size:13px">Cadastre o financiamento uma vez — o saldo evolui sozinho mês a mês pelo cronograma (SAC ou Price).</p>
      </div>`;
    return;
  }

  const infos = debts.map(d => ({ d, now: debtNow(d) }));
  const ativos = infos.filter(x => !x.now.quitada);
  const saldoTotal   = ativos.reduce((s, x) => s + x.now.saldoAtual, 0);
  const parcelaTotal = ativos.reduce((s, x) => s + (x.d.parcelaReal || x.now.parcelaAtual), 0);
  const jurosMesTot  = ativos.reduce((s, x) => s + x.now.jurosMes, 0);
  const jurosRestTot = ativos.reduce((s, x) => s + x.now.jurosRestantes, 0);

  const cards = infos.map(({ d, now }) => {
    if (now.quitada) {
      return `<div class="card mb-16" style="opacity:.65">
        <div class="flex-between"><div class="card-title" style="margin-bottom:0">${d.name} <span class="sim-badge" style="background:rgba(34,197,94,.15);color:var(--green)">Quitada</span></div>
        <div><button class="btn btn-ghost btn-sm" onclick="openDebtModal('${d.id}')">✎</button>
        <button class="btn btn-ghost btn-sm" onclick="deleteDebt('${d.id}')">✕</button></div></div>
      </div>`;
    }
    const base = d.valorTotal || d.saldo;
    const pctPago = (1 - now.saldoAtual / base) * 100;
    const encargos = d.parcelaReal ? d.parcelaReal - now.parcelaAtual : 0;
    const parcelaExibida = d.parcelaReal || now.parcelaAtual;
    return `<div class="card mb-16">
      <div class="flex-between mb-8">
        <div class="card-title" style="margin-bottom:0">${d.name}
          <span style="font-size:11px;color:var(--text-dim);font-weight:400;margin-left:8px">${d.sistema.toUpperCase()} · ${d.taxaMes.toFixed(2).replace('.',',')}% a.m.</span>
        </div>
        <div><button class="btn btn-ghost btn-sm" onclick="openDebtModal('${d.id}')">✎ Editar</button>
        <button class="btn btn-ghost btn-sm" onclick="deleteDebt('${d.id}')">✕</button></div>
      </div>
      <div class="kpi-grid" style="margin-bottom:12px">
        <div class="kpi"><div class="kpi-label">Saldo devedor hoje</div><div class="kpi-value" style="color:var(--red)">${fmt(now.saldoAtual)}</div>
          <div class="kpi-sub">de ${fmt(d.saldo)} em ${monthLabel(d.dataRef)}</div></div>
        <div class="kpi"><div class="kpi-label">Parcela do mês</div><div class="kpi-value">${fmt(parcelaExibida)}</div>
          <div class="kpi-sub">${fmt(now.jurosMes)} juros + ${fmt(now.amortMes)} amortização${d.parcelaReal ? (encargos >= 0
            ? ` + <span style="color:var(--yellow)">${fmt(encargos)} encargos</span> (seguros/taxas/TR)`
            : ` <span style="color:var(--text-dim)">(teórica ${fmt(now.parcelaAtual)} — banco recalculou abaixo)</span>`) : ''}</div></div>
        <div class="kpi"><div class="kpi-label">Quitação</div><div class="kpi-value" style="color:var(--accent)">${monthLabel(now.quitacao)}</div>
          <div class="kpi-sub">${now.mesesRestantes} parcelas restantes</div></div>
        <div class="kpi"><div class="kpi-label">Juros até o fim</div><div class="kpi-value" style="color:var(--yellow)">${fmt(now.jurosRestantes)}</div>
          <div class="kpi-sub">se nada for amortizado</div></div>
      </div>
      <div class="progress-bar-wrap"><div class="progress-bar" style="width:${pctPago}%;background:var(--green)"></div></div>
      <div class="text-sm text-muted mt-8">${fmtPct(pctPago)} do principal quitado</div>
    </div>`;
  }).join('');

  const kpiTotaisHtml = ativos.length > 1 ? `
    <div class="kpi-grid mb-16">
      <div class="kpi"><div class="kpi-label">Saldo devedor total</div><div class="kpi-value" style="color:var(--red)">${fmt(saldoTotal)}</div></div>
      <div class="kpi"><div class="kpi-label">Parcelas do mês</div><div class="kpi-value">${fmt(parcelaTotal)}</div></div>
      <div class="kpi"><div class="kpi-label">Juros embutidos no mês</div><div class="kpi-value" style="color:var(--yellow)">${fmt(jurosMesTot)}</div>
        <div class="kpi-sub">${parcelaTotal > 0 ? fmtPct(jurosMesTot / parcelaTotal * 100) + ' da parcela é juro' : ''}</div></div>
      <div class="kpi"><div class="kpi-label">Juros até quitar tudo</div><div class="kpi-value" style="color:var(--yellow)">${fmt(jurosRestTot)}</div>
        <div class="kpi-sub">custo futuro total do financiamento</div></div>
    </div>` : '';

  el.innerHTML = headerHtml(`${ativos.length} ativa(s) · saldo evolui pelo cronograma desde o registro`) + tabsHtml + `
    ${kpiTotaisHtml}

    ${cards}

    ${ativos.length ? (() => {
      const yearly = _debtsYearlyRows(ativos);
      const valorTotalBase = ativos.reduce((s, x) => s + (x.d.valorTotal || x.d.saldo), 0);
      return `<div class="card">
      <div class="card-title">Projeção do Saldo Devedor</div>
      <div class="chart-wrap chart-med"><canvas id="ch-debts"></canvas></div>
      <div class="table-wrap mt-12">
        <table>
          <thead><tr>
            <th>Fim de</th>
            <th class="r">Saldo remanescente</th>
            <th class="r">↓ Redução no ano</th>
            <th class="r">Juros pagos no ano</th>
            <th class="r">% quitado</th>
          </tr></thead>
          <tbody>${yearly.map(r => `
            <tr>
              <td class="bold">${r.ano}</td>
              <td class="r red">${fmt(r.saldo)}</td>
              <td class="r green">−${fmt(r.reducao)}</td>
              <td class="r yellow">${fmt(r.juros)}</td>
              <td class="r muted">${fmtPct((1 - r.saldo / valorTotalBase) * 100)}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
    })() : ''}
  `;

  setTimeout(_debtsDrawChart, 0);
}

// Saldo devedor total (todas as dívidas ativas) daqui a m meses
function _debtsTotalAt(infos, m) {
  return infos.reduce((s, x) => {
    const i = x.now.idx + m;
    return s + (i < x.now.sched.length ? x.now.sched[i].saldoIni : 0);
  }, 0);
}

// Linhas ano a ano: saldo ao fim de cada dezembro + redução e juros pagos no ano
function _debtsYearlyRows(infos) {
  const maxMonths = Math.max(...infos.map(x => x.now.mesesRestantes));
  const now = new Date();
  const curKey = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');
  const curMonthNum = now.getMonth() + 1; // 1-12
  const rows = [];
  let prevM = 0;
  // primeiro marco: dezembro deste ano; depois de 12 em 12
  for (let m = 12 - curMonthNum; prevM < maxMonths; m += 12) {
    const mEnd = Math.min(m, maxMonths);
    const juros = infos.reduce((s, x) =>
      s + x.now.sched.slice(x.now.idx + prevM, x.now.idx + mEnd).reduce((a, r) => a + r.juros, 0), 0);
    const saldoIniAno = _debtsTotalAt(infos, prevM);
    const saldoFimAno = _debtsTotalAt(infos, mEnd);
    rows.push({
      ano: addMonths(curKey, mEnd).split('-')[0],
      saldo: saldoFimAno,
      reducao: saldoIniAno - saldoFimAno,
      juros,
    });
    prevM = mEnd;
    if (mEnd >= maxMonths) break;
  }
  return rows;
}

function _debtsDrawChart() {
  if (activeCharts.debts) { activeCharts.debts.destroy(); delete activeCharts.debts; }
  const ctx = document.getElementById('ch-debts');
  if (!ctx) return;
  const infos = (S.debts || []).map(d => ({ d, now: debtNow(d) })).filter(x => !x.now.quitada);
  if (!infos.length) return;
  const maxMonths = Math.max(...infos.map(x => x.now.mesesRestantes));
  const labels = [], totals = [], radii = [];
  const now = new Date();
  const curKey = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');
  const curMonthNum = now.getMonth() + 1;
  for (let m = 0; m <= maxMonths; m++) {
    const isDez = (m + curMonthNum) % 12 === 0;                // marcos em dezembro de cada ano
    labels.push(isDez || m === 0 || m === maxMonths ? monthLabel(addMonths(curKey, m)) : '');
    radii.push(isDez || m === maxMonths ? 3.5 : 0);
    totals.push(+_debtsTotalAt(infos, m).toFixed(2));
  }
  activeCharts.debts = makeLineChart('ch-debts', {
    labels,
    datasets: [{ label: 'Saldo devedor total', data: totals, borderColor: '#f87171', backgroundColor: '#f8717115',
      tension: .3, pointRadius: radii, pointHoverRadius: 5, pointBackgroundColor: '#f87171', borderWidth: 2, fill: true }],
  });
}

// Espelho da aba "Financiamento" da planilha (grade crua vinda do sync).
function _buildFinHistTab() {
  if (!FINANCIAMENTO || !FINANCIAMENTO.length) {
    return `<div class="card" style="padding:40px;text-align:center;color:var(--text-muted)">
      <p style="font-size:15px;margin-bottom:8px">Dados da aba "Financiamento" ainda não sincronizados.</p>
      <p style="font-size:13px">Atualize o Apps Script (Deploy > nova versão) e clique em <strong>↻ Sync Sheets</strong>.</p>
    </div>`;
  }
  const norm = s => String(s ?? '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  // Cabeçalho = linha que contém "Data" + (saldo/juros/amortização) — pula linhas de metadados antes dela
  let hIdx = FINANCIAMENTO.findIndex(r => {
    const cells = r.map(norm);
    return cells.some(c => c === 'data' || c === 'datas') &&
           cells.some(c => /saldo|juros|amortiza|parcela|valor/.test(c));
  });
  // linha de metadados acima do cabeçalho (ex: "assinado | data | valor financiado")
  const meta = hIdx > 0 ? FINANCIAMENTO.slice(0, hIdx).filter(r => r.some(c => c !== '' && c != null)) : [];
  if (hIdx < 0) hIdx = FINANCIAMENTO.findIndex(r => r.some(c => c !== '' && c != null));
  if (hIdx < 0) return `<div class="card" style="padding:30px;text-align:center;color:var(--text-muted)">Aba vazia.</div>`;
  const headers = FINANCIAMENTO[hIdx].map(h => String(h ?? ''));
  const body = FINANCIAMENTO.slice(hIdx + 1).filter(r => r.some(c => c !== '' && c != null));
  // esconde colunas 100% vazias
  const used = headers.map((h, i) => h.trim() !== '' || body.some(r => r[i] !== '' && r[i] != null));

  const fmtDate = v => { const m = String(v ?? '').match(/^(\d{4})-(\d{2})-(\d{2})$/); return m ? `${m[3]}-${m[2]}-${m[1]}` : String(v ?? ''); };
  const metaHtml = meta.length ? `<div style="font-size:12px;color:var(--text-muted);margin-bottom:10px">${
    meta.map(r => r.filter(c => c !== '' && c != null).map(c => `<b style="color:var(--text)">${fmtDate(c)}</b>`).join(' · ')).join('<br>')
  }</div>` : '';

  // Classifica a cor de cada coluna pelo cabeçalho (sem acento, minúsculo)
  const colorFor = h => {
    const n = norm(h);
    if (/restante/.test(n))                              return 'accent'; // meses restantes → azul
    if (/valor|amortiza|remanescente/.test(n))           return 'green';  // valor, amortização, saldo remanescente
    if (/juros|seguro|taxa|correcao/.test(n))            return 'red';    // juros, seguro, taxas, correção monetária
    return '';
  };
  const colClass = headers.map(colorFor);
  // Colunas de taxa/percentual (CET) — Sheets guarda formato % como fração (0.0097 = 0,97%)
  const isPctCol = headers.map(h => /cet|%/.test(norm(h)));

  // Data YYYY-MM-DD → DD-MM-YYYY
  const fmtCell = (v, i) => {
    if (typeof v === 'number') {
      if (isPctCol[i]) return (v * 100).toLocaleString('pt-BR', { maximumFractionDigits: 2 }) + '%';
      return v.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    }
    const s = String(v ?? '');
    const m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    return m ? `${m[3]}-${m[2]}-${m[1]}` : s;
  };

  return `<div class="card">
    <div class="flex-between mb-8">
      <div class="card-title" style="margin-bottom:0">Aba "Financiamento" — ${body.length} linhas</div>
      <span style="font-size:11px;color:var(--text-dim)">espelho da planilha · atualiza no Sync</span>
    </div>
    ${metaHtml}
    <div class="table-wrap fin-hist-wrap" style="max-height:560px;overflow:auto">
      <table>
        <thead><tr>${headers.map((h, i) => used[i] ? `<th class="${colClass[i]}">${h || '—'}</th>` : '').join('')}</tr></thead>
        <tbody>${body.map(r => `<tr>${r.map((c, i) => {
          if (!used[i]) return '';
          const alignR = typeof c === 'number' ? 'r ' : '';
          return `<td class="${alignR}${colClass[i]}">${fmtCell(c, i)}</td>`;
        }).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
  </div>`;
}

function openDebtModal(id) {
  const d = id ? S.debts.find(x => x.id === id) : null;
  const now = new Date();
  const curKey = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');
  openModal(d ? 'Editar Financiamento' : 'Novo Financiamento', `
    <div class="form-group"><label class="form-label">Nome</label>
      <input class="form-input" id="debt-name" value="${d ? d.name : 'Financiamento AP'}"></div>
    <div class="grid-2" style="gap:12px">
      <div class="form-group"><label class="form-label">Saldo devedor (R$)</label>
        <input class="form-input" id="debt-saldo" type="number" value="${d ? d.saldo : 370000}" min="0" step="1000"></div>
      <div class="form-group"><label class="form-label">Na data de</label>
        <input class="form-input" id="debt-dataref" type="month" value="${d ? d.dataRef : curKey}"></div>
      <div class="form-group"><label class="form-label">Taxa mensal (% a.m., CET)</label>
        <input class="form-input" id="debt-taxa" type="number" value="${d ? d.taxaMes : 0.97}" min="0" step="0.01"></div>
      <div class="form-group"><label class="form-label">Parcelas restantes (na data)</label>
        <input class="form-input" id="debt-parcelas" type="number" value="${d ? d.parcelas : 169}" min="1" step="1"></div>
      <div class="form-group"><label class="form-label">Valor total financiado (R$) — opcional</label>
        <input class="form-input" id="debt-valor-total" type="number" value="${d && d.valorTotal ? d.valorTotal : ''}" min="0" step="1000" placeholder="ex: 508000"></div>
    </div>
    <div class="grid-2" style="gap:12px">
      <div class="form-group"><label class="form-label">Sistema de amortização</label>
        <select class="form-input" id="debt-sistema">
          <option value="sac" ${!d || d.sistema === 'sac' ? 'selected' : ''}>SAC — parcela decrescente</option>
          <option value="price" ${d && d.sistema === 'price' ? 'selected' : ''}>Price — parcela fixa</option>
        </select></div>
      <div class="form-group"><label class="form-label">Parcela atual (R$) — opcional</label>
        <input class="form-input" id="debt-parcela-real" type="number" value="${d && d.parcelaReal ? d.parcelaReal : ''}" min="0" step="0.01" placeholder="o que você paga de fato"></div>
    </div>
    <div class="form-hint" style="margin-bottom:14px">O saldo informado é o da data escolhida — o app evolui o cronograma sozinho a partir dela.
      Se a parcela real difere da teórica (seguros MIP/DFI, taxa de administração, TR), informe-a: o app usa o valor real e mostra a diferença como encargos.
      Informe o valor total financiado (o valor original, na assinatura do contrato) para o % quitado ser calculado sobre o financiamento inteiro — sem ele, o app usa o saldo atual como base (e o % começa em 0%, o que subestima o quanto já foi pago).</div>
    <div class="form-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveDebt('${d ? d.id : ''}')">Salvar</button>
    </div>
  `);
}

function saveDebt(id) {
  const obj = {
    name:     document.getElementById('debt-name').value.trim() || 'Financiamento',
    saldo:    parseFloat(document.getElementById('debt-saldo').value) || 0,
    dataRef:  document.getElementById('debt-dataref').value || addMonths('2026-01', 0),
    taxaMes:  parseFloat(document.getElementById('debt-taxa').value) || 0,
    parcelas: parseInt(document.getElementById('debt-parcelas').value, 10) || 1,
    sistema:  document.getElementById('debt-sistema').value,
    parcelaReal: parseFloat(document.getElementById('debt-parcela-real').value) || null,
    valorTotal: parseFloat(document.getElementById('debt-valor-total').value) || null,
  };
  if (obj.saldo <= 0) { showToast('Informe o saldo devedor.'); return; }
  if (id) {
    const i = S.debts.findIndex(x => x.id === id);
    if (i >= 0) S.debts[i] = { ...S.debts[i], ...obj };
  } else {
    S.debts.push({ id: uid(), ...obj });
  }
  saveState(); closeModal(); renderDebts();
}

function deleteDebt(id) {
  if (!confirm('Excluir este financiamento?')) return;
  S.debts = S.debts.filter(x => x.id !== id);
  saveState(); renderDebts();
}

// ── 19c. PROTEÇÃO (SEGUROS) ───────────────────────────────
// Dimensiona o capital de seguro de VIDA (needs-based) e o gap de INVALIDEZ vs teto do INSS.
// Não altera nenhum outro número do app — é uma seção própria de gestão de risco.
function updateProtection(field, value) {
  const p = S.protection;
  if (value === '' && field === 'dividaCobertaMIP') p[field] = null;
  else p[field] = parseFloat(value) || 0;
  saveState();
  renderProtection();
}

// Cálculo compartilhado dos gaps de proteção (usado pela aba Proteção e pelo motor de Insights)
function protectionGaps() {
  const p = S.protection;
  const last12 = HISTORICAL.slice(-12);
  const gastoMensal = last12.length ? last12.reduce((s, h) => s + h.gas, 0) / last12.length : 0;
  const gastoAnual  = gastoMensal * 12;
  const rendaMensal = S.incomes.filter(i => i.active).reduce((s, i) => s + i.amount, 0);
  const patLiquido  = investableWealth();
  const dividaTotal = (S.debts || []).reduce((s, d) => { const n = debtNow(d); return s + (n.quitada ? 0 : n.saldoAtual); }, 0);
  const anosApos = Math.max(0, (S.assumptions.retirementAge || 60) - currentAge());

  // Seguro de VIDA (needs-based)
  const reposicao = gastoAnual * p.anosDependencia;
  const dividaCoberta = p.dividaCobertaMIP != null ? p.dividaCobertaMIP : dividaTotal;
  const dividaDescoberta = Math.max(0, dividaTotal - dividaCoberta);
  const necessidadeVida = reposicao + dividaDescoberta;
  const recursosVida = patLiquido + p.seguroVida;
  const faltaVida = Math.max(0, necessidadeVida - recursosVida);
  const sobraVida = Math.max(0, recursosVida - necessidadeVida);

  // INVALIDEZ (gap vs teto do INSS)
  const gapMensal = Math.max(0, rendaMensal - p.tetoINSS);
  const necessidadeInval = gapMensal * 12 * anosApos;
  const faltaInval = Math.max(0, necessidadeInval - p.seguroInvalidez);

  return { gastoMensal, gastoAnual, rendaMensal, patLiquido, dividaTotal, anosApos,
           reposicao, dividaCoberta, dividaDescoberta, necessidadeVida, recursosVida, faltaVida, sobraVida,
           gapMensal, necessidadeInval, faltaInval };
}

function renderProtection() {
  const el = document.getElementById('page-protection');
  const p = S.protection;
  const { gastoAnual, rendaMensal, patLiquido, dividaTotal, anosApos,
          reposicao, dividaCoberta, dividaDescoberta, necessidadeVida, recursosVida, faltaVida, sobraVida,
          gapMensal, necessidadeInval, faltaInval } = protectionGaps();

  const linha = (label, valor, cls) => `<tr><td>${label}</td><td class="r ${cls || ''}">${valor}</td></tr>`;

  el.innerHTML = `
    <div class="page-header">
      <div>
        <div class="page-title">Proteção</div>
        <div class="page-subtitle">Quanto de seguro protege o plano da família se a sua renda parar — por morte ou invalidez</div>
      </div>
    </div>

    <div class="kpi-grid mb-16">
      <div class="kpi">
        <div class="kpi-label">Seguro de vida a contratar</div>
        <div class="kpi-value lg" style="color:${faltaVida > 0 ? 'var(--red)' : 'var(--green)'}">${faltaVida > 0 ? fmtK(faltaVida) : '✓ coberto'}</div>
        <div class="kpi-sub">${faltaVida > 0 ? `necessidade ${fmtK(necessidadeVida)} − recursos ${fmtK(recursosVida)}` : `você tem ${fmtK(sobraVida)} de folga`}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Seguro de invalidez a contratar</div>
        <div class="kpi-value lg" style="color:${faltaInval > 0 ? 'var(--red)' : 'var(--green)'}">${faltaInval > 0 ? fmtK(faltaInval) : '✓ coberto'}</div>
        <div class="kpi-sub">${faltaInval > 0 ? `gap de ${fmt(gapMensal)}/mês por ${anosApos} anos` : 'sem gap acima do teto do INSS'}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Renda a proteger</div>
        <div class="kpi-value">${fmt(rendaMensal)}<span style="font-size:12px;color:var(--text-dim)">/mês</span></div>
        <div class="kpi-sub">${p.dependentes} dependente(s) · ${p.anosDependencia} anos de dependência</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Teto do INSS</div>
        <div class="kpi-value">${fmt(p.tetoINSS)}<span style="font-size:12px;color:var(--text-dim)">/mês</span></div>
        <div class="kpi-sub">o que o INSS paga no máximo — o resto é com você</div>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title">Necessidade de Seguro de Vida</div>
        <div class="table-wrap"><table>
          <tbody>
            ${linha('Reposição de renda da família', fmt(reposicao), 'red')}
            <tr><td style="padding-left:16px;color:var(--text-dim);font-size:12px" colspan="2">${fmt(gastoAnual)}/ano × ${p.anosDependencia} anos de dependência</td></tr>
            ${linha('+ Financiamento não coberto por seguro', fmt(dividaDescoberta), 'red')}
            <tr><td style="padding-left:16px;color:var(--text-dim);font-size:12px" colspan="2">financiamento total ${fmt(dividaTotal)} − ${fmt(dividaCoberta)} coberto por MIP</td></tr>
            ${linha('− Patrimônio líquido da família', fmt(patLiquido), 'green')}
            ${linha('− Seguro de vida já contratado', fmt(p.seguroVida), 'green')}
            <tr style="border-top:2px solid var(--border-2)"><td class="bold">= Falta contratar</td><td class="r bold" style="color:${faltaVida > 0 ? 'var(--red)' : 'var(--green)'}">${faltaVida > 0 ? fmt(faltaVida) : 'coberto ✓'}</td></tr>
          </tbody>
        </table></div>
        <div class="form-hint" style="margin-top:10px">Se você faltar, a família precisa deste capital para quitar o financiamento e manter o padrão de vida pelos anos de dependência. O MIP do financiamento já o extingue na morte — por isso entra creditado.</div>
      </div>

      <div class="card">
        <div class="card-title">Cobertura de Invalidez</div>
        <div class="table-wrap"><table>
          <tbody>
            ${linha('Sua renda mensal', fmt(rendaMensal), '')}
            ${linha('− Teto do INSS (auxílio/aposentadoria)', fmt(p.tetoINSS), 'green')}
            ${linha('= Gap mensal descoberto', fmt(gapMensal), 'red')}
            ${linha('× 12 meses × anos até aposentar', anosApos + ' anos', '')}
            ${linha('= Capital para cobrir o gap', fmt(necessidadeInval), 'red')}
            ${linha('− Seguro de invalidez já contratado', fmt(p.seguroInvalidez), 'green')}
            <tr style="border-top:2px solid var(--border-2)"><td class="bold">= Falta contratar</td><td class="r bold" style="color:${faltaInval > 0 ? 'var(--red)' : 'var(--green)'}">${faltaInval > 0 ? fmt(faltaInval) : 'coberto ✓'}</td></tr>
          </tbody>
        </table></div>
        <div class="form-hint" style="margin-top:10px">Invalidez é mais provável que a morte na fase de trabalho e pior: você perde a renda e ainda cria despesa. O INSS cobre só até o teto — o gap acima disso é 100% seu. Estimativa sem desconto a valor presente (conservadora).</div>
      </div>
    </div>

    <div class="card mt-16">
      <div class="card-title">Premissas da Proteção</div>
      <div class="grid-2" style="gap:12px">
        <div class="form-group"><label class="form-label">Nº de dependentes</label>
          <input class="form-input" type="number" min="0" step="1" value="${p.dependentes}" onchange="updateProtection('dependentes', this.value)"></div>
        <div class="form-group"><label class="form-label">Anos de dependência</label>
          <input class="form-input" type="number" min="0" step="1" value="${p.anosDependencia}" onchange="updateProtection('anosDependencia', this.value)"></div>
        <div class="form-group"><label class="form-label">Seguro de vida já contratado (R$)</label>
          <input class="form-input" type="number" min="0" step="1000" value="${p.seguroVida}" onchange="updateProtection('seguroVida', this.value)"></div>
        <div class="form-group"><label class="form-label">Seguro de invalidez já contratado (R$)</label>
          <input class="form-input" type="number" min="0" step="1000" value="${p.seguroInvalidez}" onchange="updateProtection('seguroInvalidez', this.value)"></div>
        <div class="form-group"><label class="form-label">Financiamento coberto por MIP (R$)</label>
          <input class="form-input" type="number" min="0" step="1000" value="${dividaCoberta}" placeholder="padrão: todo financiamento ativo" onchange="updateProtection('dividaCobertaMIP', this.value)"></div>
        <div class="form-group"><label class="form-label">Teto do INSS (R$/mês)</label>
          <input class="form-input" type="number" min="0" step="1" value="${p.tetoINSS}" onchange="updateProtection('tetoINSS', this.value)"></div>
      </div>
      <div class="form-hint" style="margin-top:8px">Renda a proteger e gasto da família vêm do que o app já tem (cadastro de receitas e histórico de gastos). Ajuste o teto do INSS conforme o ano.</div>
    </div>
  `;
}

// ── 19d. OBJETIVOS (metas paralelas à FI) — subseção da Linha da Vida ──
function _objetivosBody() {
  const goals = (S.goals || []).slice().sort((a, b) => String(a.dataAlvo).localeCompare(String(b.dataAlvo)));
  const age = currentAge();
  const addBtn = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
    <span style="font-size:13px;color:var(--text-muted)">Metas paralelas à FI — cada uma vira um marco na Projeção e mostra quanto empurra a data da independência.</span>
    <button class="btn btn-primary btn-sm" onclick="openGoalModal()">+ Nova meta</button></div>`;

  if (!goals.length) {
    return addBtn + `
      <div class="card" style="padding:40px;text-align:center;color:var(--text-muted)">
        <p style="font-size:16px;margin-bottom:8px">Nenhuma meta cadastrada.</p>
        <p style="font-size:13px">Cadastre objetivos com data (educação dos filhos, imóvel, sabático, troca de carro). Cada um consome patrimônio na data, aparece como marco na aba Projeção e o app mostra o impacto na sua FI.</p>
      </div>`;
  }

  const { sem, com } = goalsFIImpact();
  const fiFmt = r => r ? r.date.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' }) + ` · idade ${age + Math.floor(r.months / 12)}` : '> horizonte';
  let impactoTxt, impactoCor;
  if (sem && com) {
    const dm = com.months - sem.months;
    if (dm <= 0) { impactoTxt = 'as metas cabem sem atrasar a FI'; impactoCor = 'var(--green)'; }
    else { const a = Math.floor(dm / 12), me = dm % 12; impactoTxt = `as metas empurram a FI em ${a > 0 ? a + ' ano(s)' : ''}${a > 0 && me > 0 ? ' e ' : ''}${me > 0 ? me + ' mes(es)' : ''}`.trim(); impactoCor = 'var(--yellow)'; }
  } else if (sem && !com) { impactoTxt = 'com as metas, a FI sai do horizonte de projeção'; impactoCor = 'var(--red)'; }
  else { impactoTxt = 'FI fora do horizonte mesmo sem as metas'; impactoCor = 'var(--red)'; }

  const totalHoje = goals.reduce((s, g) => s + g.valor, 0);
  const prioBadge = p => {
    const c = p === 'alta' ? 'var(--red)' : p === 'baixa' ? 'var(--text-dim)' : 'var(--yellow)';
    return `<span class="sim-badge" style="background:${c}22;color:${c}">${p || 'média'}</span>`;
  };

  const rows = goals.map(g => {
    const naData = goalValorNaData(g);
    const off = Math.max(0, monthsBetween(projectionStart().str, g.dataAlvo));
    const escala = naData > g.valor;
    return `<tr>
      <td class="bold">${g.name} ${prioBadge(g.prioridade)}</td>
      <td>${monthLabel(g.dataAlvo)}<span class="text-dim" style="font-size:11px"> · em ${Math.floor(off / 12)}a ${off % 12}m</span></td>
      <td class="r">${fmt(g.valor)}</td>
      <td class="r ${escala ? 'yellow' : 'muted'}">${fmt(naData)}${(g.inflacaoReal || 0) !== 0 ? `<span class="text-dim" style="font-size:11px"> (+${g.inflacaoReal}%/a real)</span>` : ''}</td>
      <td class="r">
        <button class="btn btn-ghost btn-sm btn-icon" onclick="openGoalModal('${g.id}')">✎</button>
        <button class="btn btn-ghost btn-sm btn-icon" style="color:var(--red)" onclick="deleteGoal('${g.id}')">✕</button>
      </td>
    </tr>`;
  }).join('');

  return addBtn + `
    <div class="card mb-16">
      <div class="card-title">Impacto na Independência Financeira</div>
      <div class="kpi-grid-3" style="gap:12px">
        <div class="kpi"><div class="kpi-label">FI sem as metas</div><div class="kpi-value" style="color:var(--accent)">${fiFmt(sem)}</div></div>
        <div class="kpi"><div class="kpi-label">FI com as metas</div><div class="kpi-value" style="color:${impactoCor}">${fiFmt(com)}</div></div>
        <div class="kpi"><div class="kpi-label">Efeito das metas</div><div class="kpi-value" style="color:${impactoCor};font-size:16px">${impactoTxt}</div></div>
      </div>
      <div class="form-hint" style="margin-top:10px">Cada meta é uma saída de caixa na data-alvo, em valores de hoje. A projeção base (real) consome esse valor e a data da FI é recalculada. Não altera o Número FI nem o dashboard — é uma análise do trade-off.</div>
    </div>

    <div class="card">
      <div class="card-title">Metas</div>
      <div class="table-wrap"><table>
        <thead><tr><th>Meta</th><th>Quando</th><th class="r">Valor hoje</th><th class="r">Custo na data</th><th></th></tr></thead>
        <tbody>${rows}</tbody>
      </table></div>
    </div>
  `;
}

function openGoalModal(id) {
  const g = id ? S.goals.find(x => x.id === id) : null;
  const nextYear = projectionStart().str.slice(0, 4);
  openModal(g ? 'Editar Meta' : 'Nova Meta', `
    <div class="form-group"><label class="form-label">Nome da meta</label>
      <input class="form-input" id="goal-name" value="${g ? g.name : ''}" placeholder="Ex: Faculdade da Maria"></div>
    <div class="grid-2" style="gap:12px">
      <div class="form-group"><label class="form-label">Valor hoje (R$)</label>
        <input class="form-input" id="goal-valor" type="number" min="0" step="1000" value="${g ? g.valor : 100000}"></div>
      <div class="form-group"><label class="form-label">Data-alvo</label>
        <input class="form-input" id="goal-data" type="month" value="${g ? g.dataAlvo : (Number(nextYear) + 5) + '-01'}"></div>
      <div class="form-group"><label class="form-label">Inflação real (% a.a. acima do IPCA)</label>
        <input class="form-input" id="goal-inflacao" type="number" step="0.5" value="${g ? (g.inflacaoReal || 0) : 0}" placeholder="educação ~5"></div>
      <div class="form-group"><label class="form-label">Prioridade</label>
        <select class="form-input" id="goal-prio">
          <option value="alta" ${g && g.prioridade === 'alta' ? 'selected' : ''}>Alta</option>
          <option value="media" ${!g || g.prioridade === 'media' ? 'selected' : ''}>Média</option>
          <option value="baixa" ${g && g.prioridade === 'baixa' ? 'selected' : ''}>Baixa</option>
        </select></div>
    </div>
    <div class="form-hint" style="margin-bottom:14px">Tudo em valores de hoje. "Inflação real" é o quanto o custo sobe <b>acima</b> da inflação geral — educação e saúde correm ~4-6% acima do IPCA; a maioria das metas é 0.</div>
    <div class="form-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveGoal('${g ? g.id : ''}')">Salvar</button>
    </div>
  `);
}

function saveGoal(id) {
  const obj = {
    name:        document.getElementById('goal-name').value.trim() || 'Meta',
    valor:       parseFloat(document.getElementById('goal-valor').value) || 0,
    dataAlvo:    document.getElementById('goal-data').value || projectionStart().str,
    inflacaoReal: parseFloat(document.getElementById('goal-inflacao').value) || 0,
    prioridade:  document.getElementById('goal-prio').value,
  };
  if (obj.valor <= 0) { showToast('Informe o valor da meta.'); return; }
  if (id) {
    const i = S.goals.findIndex(x => x.id === id);
    if (i >= 0) S.goals[i] = { ...S.goals[i], ...obj };
  } else {
    S.goals.push({ id: uid(), ...obj });
  }
  saveState(); closeModal(); timelineTab = 'objetivos'; renderTimeline();
}

function deleteGoal(id) {
  if (!confirm('Excluir esta meta?')) return;
  S.goals = S.goals.filter(x => x.id !== id);
  saveState(); timelineTab = 'objetivos'; renderTimeline();
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

// ── 20b. INSIGHTS ─────────────────────────────────────────
// Motor de insights: regras determinísticas sobre HISTORICAL + estado atual.
// Recalcula tudo a cada clique — sempre reflete o último sync.

function _median(arr) {
  if (!arr.length) return 0;
  const s = [...arr].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

// Meses até atingir `target` com aporte mensal fixo e retorno real (% a.a.). null = >50 anos.
function _monthsToTarget(w0, sav, rAnnual, target) {
  if (w0 >= target) return 0;
  const rm = Math.pow(1 + rAnnual / 100, 1 / 12) - 1;
  let w = w0;
  for (let m = 1; m <= 600; m++) {
    w = w * (1 + rm) + sav;
    if (w >= target) return m;
  }
  return null;
}

function _fmtAnos(months) {
  if (months === null) return 'mais de 50 anos';
  if (months === 0) return 'já atingida';
  const y = months / 12;
  if (y < 1) return `${months} meses`;
  return `~${(y < 3 ? y.toFixed(1) : String(Math.round(y))).replace('.', ',')} anos`;
}

function computeInsights() {
  const ins = [];
  const push = (sev, tag, title, body, action) => ins.push({ sev, tag, title, body, action });

  const last12 = HISTORICAL.slice(-12);
  const last24 = HISTORICAL.slice(-24);
  const recMed = _median(last24.map(h => h.rec).filter(v => v > 0));
  const isOutlier = h => recMed > 0 && h.rec > 1.8 * recMed;   // mês de receita atípica (bônus, venda...)

  const rec12 = last12.reduce((s, h) => s + h.rec, 0);
  const gas12 = last12.reduce((s, h) => s + h.gas, 0);
  const apo12 = last12.reduce((s, h) => s + (h.apo || 0), 0);
  const avgGas = gas12 / Math.max(1, last12.length);
  const totalPort = S.portfolio.reduce((s, a) => s + a.value, 0);
  const age = currentAge();

  // ── Patrimônio: decomposição do crescimento em 12m (aporte vs rentabilidade)
  // "Ano atrás" por calendário, não pela posição -13 do array — mesmo fix do Relatório (_rpSec1):
  // um gap no sync desalinha a posição do "mês certo" e o aporte somado (últimas 12 linhas)
  // deixa de cobrir a mesma janela do Δpl, e o erro cai inteiro em "rentabilidade".
  const lastH = HISTORICAL[HISTORICAL.length - 1];
  const yearAgoKey = lastH ? addMonths(lastH.d, -12) : null;
  const beforeLast = HISTORICAL.filter(h => h.d < (lastH ? lastH.d : ''));
  const yearAgo = lastH ? (HISTORICAL.find(h => h.d === yearAgoKey) ||
    beforeLast.slice().sort((a, b) => Math.abs(monthsBetween(a.d, yearAgoKey)) - Math.abs(monthsBetween(b.d, yearAgoKey)))[0] ||
    null) : null;
  if (lastH && yearAgo && yearAgo.pl > 0) {
    const yearAgoMonths = monthsBetween(yearAgo.d, lastH.d);
    const apoJanela = HISTORICAL.filter(h => h.d > yearAgo.d && h.d <= lastH.d).reduce((s, h) => s + apoPLOf(h), 0);
    const d = lastH.pl - yearAgo.pl;
    const rentab = d - apoJanela;
    const pctApo = d !== 0 ? Math.min(100, Math.max(0, apoJanela / d * 100)) : 0;
    const janelaTxt = yearAgoMonths === 12 ? '12 meses' : `${yearAgoMonths} meses (lacuna no sync)`;
    push(rentab < 0 ? 'warn' : 'info', 'Patrimônio',
      `Patrimônio investido: ${fmtK(lastH.pl)} (${d >= 0 ? '+' : '−'}${fmtK(Math.abs(d))} em ${janelaTxt})`,
      `Desse crescimento, <b>${fmtK(apoJanela)}</b> veio de aporte e <b>${rentab >= 0 ? '' : '−'}${fmtK(Math.abs(rentab))}</b> de rentabilidade` +
      (d > 0 && pctApo >= 85
        ? ` — ou seja, <b>${fmtPct(pctApo)}</b> do avanço foi você depositando dinheiro, não o dinheiro trabalhando. Em 12 meses a carteira rendeu abaixo da inflação.`
        : '.'),
      null);
  }

  // ── Taxa de poupança 12m
  if (rec12 > 0) {
    const sr = (rec12 - gas12) / rec12 * 100;
    const norm = last12.filter(h => !isOutlier(h));
    const recN = norm.reduce((s, h) => s + h.rec, 0);
    const gasN = norm.reduce((s, h) => s + h.gas, 0);
    const srEx = recN > 0 ? (recN - gasN) / recN * 100 : sr;
    const sev = sr >= 40 ? 'good' : sr >= 20 ? 'warn' : 'bad';
    push(sev, 'Poupança',
      `Taxa de poupança de ${fmtPct(sr)} nos últimos 12 meses`,
      `Você recebeu <b>${fmtK(rec12)}</b> e gastou <b>${fmtK(gas12)}</b> (média de ${fmt(avgGas)}/mês). ` +
      (Math.abs(srEx - sr) > 1 ? `Tirando os meses atípicos de receita, a taxa segue em <b>${fmtPct(srEx)}</b>. ` : '') +
      (sr >= 40
        ? 'Nesse nível, quem constrói o patrimônio é o aporte — o retorno da carteira é coadjuvante e sua margem de erro é enorme.'
        : sr >= 20
          ? 'Bom patamar, mas cada ponto a mais de poupança encurta a data da independência mais que qualquer otimização de carteira.'
          : 'Abaixo de 20%, o plano fica dependente do retorno da carteira — o lado da equação que você não controla.'),
      sr < 40 ? 'Revisar os maiores grupos na Análise de Gastos e definir um teto mensal.' : null);
  }

  // ── Inflação pessoal / lifestyle creep (deriva do baseline de gasto)
  const infP = inflacaoPessoal();
  if (infP && isFinite(infP.pct)) {
    const ipca = S.assumptions.ipca || 5.5;
    const realCreep = infP.pct - ipca;
    if (realCreep > 2) {
      const metaFutura = S.fi.targetMonthlyIncome * Math.pow(1 + realCreep / 100, 5);
      push('warn', 'Inflação Pessoal',
        `Seu custo de vida sobe ${fmtPct(infP.pct)} a.a. — ${fmtPct(realCreep)} acima do IPCA`,
        `Gasto ${infP.src.includes('Recorrentes') ? 'recorrente' : 'total'} médio foi de ${fmt(infP.avgPrev12)}/mês para <b>${fmt(infP.avgLast12)}/mês</b> em 12 meses. Isso é o denominador da FI inflando em silêncio: se o ritmo continuar, a meta de ${fmt(S.fi.targetMonthlyIncome)}/mês vale <b>${fmt(metaFutura)}/mês</b> em poder de compra daqui a 5 anos — e o Número FI cresce junto. As projeções assumem gasto constante em termos reais; o seu não está sendo.`,
        'Identificar na Análise de Gastos quais seções puxam a deriva — spike é evento, deriva é hábito.');
    } else if (infP.pct > ipca) {
      push('info', 'Inflação Pessoal',
        `Inflação pessoal de ${fmtPct(infP.pct)} a.a. — pouco acima do IPCA (${fmtPct(ipca)})`,
        `Gasto ${infP.src.includes('Recorrentes') ? 'recorrente' : 'total'} médio: ${fmt(infP.avgPrev12)} → <b>${fmt(infP.avgLast12)}/mês</b>. Dentro do tolerável, mas vale acompanhar: a premissa das projeções é gasto constante em termos reais.`,
        null);
    }
  }

  // ── Rentabilidade recente vs CDI
  const rs = realizedReturns();
  if (rs.length >= 6) {
    let streak = 0;
    for (let i = rs.length - 1; i >= 0 && rs[i].r < 0; i--) streak++;
    // Resultado de mercado SEMPRE sobre o patrimônio LÍQUIDO (pl). Nunca 'pat' (inclui imóvel);
    // meses sem pl são pulados — cair no pat mistura o valor do imóvel e estoura a variação.
    // Aporte também precisa ser só o que foi pra pl (apoPLOf) — aporte em imóvel não move o
    // pl, então descontar o aporte total inflava a "perda" de mercado artificialmente.
    let gain3 = 0;
    const n3 = Math.min(3, HISTORICAL.length - 1);
    for (let i = HISTORICAL.length - n3; i < HISTORICAL.length; i++) {
      const cur = HISTORICAL[i], prev = HISTORICAL[i - 1];
      if (cur.pl == null || prev.pl == null) continue;
      gain3 += cur.pl - prev.pl - apoPLOf(cur);
    }
    const t12 = twr(12), c12 = cdiAnnualized(12);
    const rvPct = totalPort > 0
      ? S.portfolio.filter(a => a.cat === 'rv' || a.cat === 'fii').reduce((s, a) => s + a.value, 0) / totalPort * 100
      : 0;
    if (streak >= 3) {
      push('bad', 'Rentabilidade',
        `Carteira no vermelho há ${streak} meses seguidos`,
        `Resultado de mercado de <b>−${fmtK(Math.abs(gain3))}</b> no último trimestre. Nos 12 meses, a carteira rendeu <b>${fmtPct(t12)} a.a.</b> vs. CDI de ${fmtPct(c12)}. Com ${fmtPct(rvPct)} em renda variável + FIIs, meses negativos são o preço da posição — o erro seria mudar de estratégia por causa deles. O que merece olhar é o desvio vs. CDI se persistir por mais de 12 meses.`,
        'Não vender posição em baixa; reavaliar a carteira só se o desvio vs. CDI persistir em janela de 12m+.');
    } else if (t12 >= c12) {
      push('good', 'Rentabilidade',
        `Carteira bateu o CDI nos últimos 12 meses`,
        `<b>${fmtPct(t12)} a.a.</b> vs. CDI de ${fmtPct(c12)} na mesma janela. Último trimestre: ${gain3 >= 0 ? '+' : '−'}${fmtK(Math.abs(gain3))} de resultado de mercado.`,
        null);
    } else {
      push('warn', 'Rentabilidade',
        `Carteira abaixo do CDI nos últimos 12 meses`,
        `<b>${fmtPct(t12)} a.a.</b> vs. CDI de ${fmtPct(c12)}. Com ${fmtPct(rvPct)} em RV + FIIs, janelas curtas abaixo do CDI são esperadas — mas vale acompanhar se o gap fecha nos próximos trimestres.`,
        null);
    }
  }

  // ── Drawdown corrente (distância do pico histórico) — sempre sobre o líquido (pl)
  if (HISTORICAL.length >= 12 && lastH.pl != null) {
    let peakV = -Infinity, peakD = null;
    for (const h of HISTORICAL) {
      if (h.pl == null) continue;
      if (h.pl > peakV) { peakV = h.pl; peakD = h.d; }
    }
    const curV = lastH.pl;
    const ddCur = peakV > 0 ? (peakV - curV) / peakV * 100 : 0;
    if (ddCur >= 5) {
      const ddMax = maxDrawdownHist();
      push('info', 'Drawdown',
        `Patrimônio ${fmtPct(ddCur)} abaixo do pico (${monthLabel(peakD)})`,
        `Pico de <b>${fmtK(peakV)}</b> vs. ${fmtK(curV)} hoje. Contexto anti-pânico: a maior queda que você já atravessou foi <b>${fmtPct(ddMax)}</b> — e seguiu o plano. Drawdown é o preço de ter ativos que rendem acima do CDI; a decisão errada aqui costuma ser vender.`,
        null);
    }
  }

  // ── Tendência de receita (ex-meses atípicos)
  const recentR = last12.slice(-3).filter(h => !isOutlier(h) && h.rec > 0);
  const beforeR = last12.slice(0, 9).filter(h => !isOutlier(h) && h.rec > 0);
  if (recentR.length >= 2 && beforeR.length >= 4) {
    const aR = recentR.reduce((s, h) => s + h.rec, 0) / recentR.length;
    const aB = beforeR.reduce((s, h) => s + h.rec, 0) / beforeR.length;
    const dPct = (aR - aB) / aB * 100;
    if (dPct <= -10) {
      push('bad', 'Receita',
        `Receita recorrente em queda: ${fmtPct(Math.abs(dPct))} abaixo da média anterior`,
        `Média de <b>${fmt(aR)}/mês</b> no último trimestre vs. ${fmt(aB)} nos meses anteriores (sem contar bônus/eventos). É a receita que sustenta o aporte — e o aporte é o motor do plano. Essa é a linha mais importante a atacar agora.`,
        'Investigar e reverter a queda de receita recorrente — nenhuma otimização de carteira compensa essa linha.');
    } else if (dPct >= 10) {
      push('good', 'Receita',
        `Receita recorrente em alta: +${fmtPct(dPct)} vs. média anterior`,
        `Média de <b>${fmt(aR)}/mês</b> no último trimestre vs. ${fmt(aB)} antes. Se sustentar, vale atualizar a renda no Fluxo de Caixa para as projeções acompanharem.`,
        null);
    }
  }

  // ── Tendência de aportes
  const avgApo3 = last12.slice(-3).reduce((s, h) => s + (h.apo || 0), 0) / 3;
  const avgApo12 = apo12 / Math.max(1, last12.length);
  if (avgApo12 > 0 && avgApo3 < avgApo12 * 0.6) {
    push('warn', 'Aportes',
      `Aportes desaceleraram: ${fmtK(avgApo3)}/mês no trimestre vs. ${fmtK(avgApo12)} na média de 12m`,
      `Parte disso é natural (os aportes gordos vêm de meses de bônus), mas se a queda for estrutural, a data da FI estica. Acompanhe junto com a linha de receita.`,
      null);
  }

  // ── Modelo vs. realidade: a poupança que as projeções assumem existe de fato?
  const modelSav = S.incomes.filter(i => i.active).reduce((s, i) => s + i.amount, 0)
                 - S.expenses.filter(e => e.active).reduce((s, e) => s + e.amount, 0);
  if (modelSav > 0 && avgApo12 > 0 && HISTORICAL.length >= 12) {
    const ratio = modelSav / avgApo12;
    if (ratio > 1.2 || ratio < 0.8) {
      const otimista = ratio > 1.2;
      const fin0 = fiNumber(), w0 = investableWealth(), rR0 = weightedReturnReal();
      const mModel = _monthsToTarget(w0, modelSav, rR0, fin0);
      const mReal  = _monthsToTarget(w0, avgApo12, rR0, fin0);
      push(otimista ? 'warn' : 'info', 'Modelo vs Real',
        otimista
          ? `As projeções assumem ${fmt(modelSav)}/mês de poupança — sua realidade média é ${fmt(avgApo12)}`
          : `Você aporta mais do que o modelo assume: ${fmt(avgApo12)}/mês real vs. ${fmt(modelSav)} no cadastro`,
        `O cadastro do Fluxo de Caixa (que alimenta data FI, cenários e Monte Carlo) prevê sobra de <b>${fmt(modelSav)}/mês</b>; o aporte real médio de 12 meses foi <b>${fmt(avgApo12)}/mês</b>. Com a poupança do modelo, a meta chega em <b>${_fmtAnos(mModel)}</b>; com a realidade, em <b>${_fmtAnos(mReal)}</b>. ${otimista
          ? 'As projeções estão mais otimistas que a sua vida real — ou o cadastro se ajusta, ou o comportamento.'
          : 'As projeções estão conservadoras — a data real tende a ser <b>melhor</b> que a exibida. Bom problema, mas vale atualizar o cadastro para o plano refletir a verdade.'}`,
        otimista ? 'Atualizar receitas/gastos no Fluxo de Caixa para bater com a realidade — ou tratar a diferença como meta de aporte.' : null);
    }
  }

  // ── Meta FI: calibragem vs. gasto real
  const fin = fiNumber();
  const w = investableWealth();
  if (fin > 0 && w > 0) {
    const pct = w / fin * 100;
    const sav = S.incomes.filter(i => i.active).reduce((s, i) => s + i.amount, 0)
              - S.expenses.filter(e => e.active).reduce((s, e) => s + e.amount, 0);
    const rReal = weightedReturnReal();
    const mCur = _monthsToTarget(w, sav, rReal, fin);
    const ageAt = m => (m === null ? '—' : age + Math.round(m / 12));
    if (avgGas > 0 && S.fi.targetMonthlyIncome > avgGas * 1.8) {
      const altMonthly = Math.ceil(avgGas * 1.5 / 500) * 500;   // gasto real + 50% de folga
      const altFin = altMonthly * 12 / (fiRate() / 100);
      const mAlt = _monthsToTarget(w, sav, rReal, altFin);
      push('warn', 'Meta FI',
        `Sua meta de FI está ${fmtPct(S.fi.targetMonthlyIncome / avgGas * 100 - 100)} acima do seu gasto real`,
        `A meta de <b>${fmt(S.fi.targetMonthlyIncome)}/mês</b> pede <b>${fmtK(fin)}</b> — você está em <b>${fmtPct(pct)}</b> e, no ritmo atual, chega em <b>${_fmtAnos(mCur)}</b> (idade ${ageAt(mCur)}). Mas seu gasto médio é ${fmt(avgGas)}/mês: uma meta com 50% de folga (<b>${fmt(altMonthly)}/mês</b>) pede ${fmtK(altFin)} e chegaria em <b>${_fmtAnos(mAlt)}</b> (idade ${ageAt(mAlt)}). A pergunta que o número não responde: ${fmt(S.fi.targetMonthlyIncome)} é plano de vida (casa, filhos, padrão) ou número redondo que ficou aí?`,
        'Decidir se a renda-alvo da FI reflete o custo de vida planejado — ajustar na aba Independência FI.');
    } else {
      push('info', 'Meta FI',
        `Progresso à independência: ${fmtPct(pct)} da meta de ${fmtK(fin)}`,
        `No ritmo atual de poupança e retorno real de ${fmtPct(weightedReturnReal())} a.a., a meta chega em <b>${_fmtAnos(mCur)}</b> (idade ${ageAt(mCur)}).`,
        null);
    }
  }

  // ── Velocidade do plano: progresso à FI hoje vs. 12 meses atrás (derivada, não a foto) — sobre o líquido (pl)
  // Mesmo fix de calendário do card "Patrimônio" e do Relatório: posição no array falha com gap no sync.
  const h12Key = lastH ? addMonths(lastH.d, -12) : null;
  const h12Candidates = HISTORICAL.filter(h => h.d < (lastH ? lastH.d : ''));
  const h12 = lastH ? (HISTORICAL.find(h => h.d === h12Key) ||
    h12Candidates.slice().sort((a, b) => Math.abs(monthsBetween(a.d, h12Key)) - Math.abs(monthsBetween(b.d, h12Key)))[0] ||
    null) : null;
  if (h12 && fin > 0 && lastH.pl != null && h12.pl > 0) {
    const plNow = lastH.pl;
    const pl12 = h12.pl;
    const pctNow = plNow / fin * 100, pct12 = pl12 / fin * 100;
    const ppAno = pctNow - pct12;
    if (ppAno > 0.5) {
      const anosRestantes = (fin - plNow) / (plNow - pl12);
      push('info', 'Velocidade',
        `Você avançou ${ppAno.toFixed(1).replace('.', ',')}pp rumo à FI nos últimos 12 meses (${fmtPct(pct12)} → ${fmtPct(pctNow)})`,
        `O patrimônio investível cresceu <b>${fmtK(plNow - pl12)}</b> no ano. Régua empírica — só o que de fato aconteceu, extrapolado sem premissa de retorno: nesse ritmo, a meta de ${fmtK(fin)} chega em <b>~${anosRestantes.toFixed(1).replace('.', ',')} anos</b>.`,
        null);
    } else if (ppAno < -0.5) {
      push('info', 'Velocidade',
        `Progresso à FI recuou ${Math.abs(ppAno).toFixed(1).replace('.', ',')}pp em 12 meses (${fmtPct(pct12)} → ${fmtPct(pctNow)})`,
        `O patrimônio investível caiu ${fmtK(Math.abs(plNow - pl12))} no ano — normalmente é mercado, não comportamento (confira o card de Rentabilidade). Um ano ruim não muda o plano; três seguidos mudam.`,
        null);
    }
  }

  // ── Coast FI: aportar já virou escolha?
  const cyIns = coastFIYears();
  if (cyIns != null && cyIns > 0) {
    const coastAge = Math.ceil(age + cyIns);
    const retAge = S.assumptions.retirementAge || 60;
    if (coastAge <= retAge) {
      push('good', 'Coast FI',
        `Se parar de aportar hoje, a FI chega aos ${coastAge} anos — antes da sua aposentadoria (${retAge})`,
        `Só o juro real composto sobre os ${fmtK(investableWealth())} atuais alcança a meta em ~${cyIns.toFixed(1).replace('.', ',')} anos. <b>Aportar deixou de ser obrigação e virou acelerador</b>: cada aporte antecipa a data, mas o plano já se sustenta sem ele. Isso muda o peso de decisões como trocar de trabalho ou reduzir ritmo.`,
        null);
    }
  }

  // ── Objetivos: quanto as metas empurram a FI
  if ((S.goals || []).length) {
    const gi = goalsFIImpact();
    if (gi.sem && !gi.com) {
      push('warn', 'Objetivos',
        'Com as metas cadastradas, a FI sai do horizonte de projeção',
        `Sem as metas, a FI chegaria em ${gi.sem.date.getFullYear()}. Custeando todas (${S.goals.length} meta(s)), o patrimônio não recupera dentro do horizonte de ${S.assumptions.projectionYears} anos. Ou as metas encolhem, ou o aporte cresce, ou a FI espera.`,
        'Revisar valores e prioridades na Linha da Vida → Objetivos.');
    } else if (gi.sem && gi.com) {
      const dm = gi.com.months - gi.sem.months;
      if (dm >= 6) {
        const a = Math.floor(dm / 12), me = dm % 12;
        push('info', 'Objetivos',
          `Suas metas empurram a FI em ${a > 0 ? a + ' ano(s)' : ''}${a > 0 && me > 0 ? ' e ' : ''}${me > 0 ? me + ' mês(es)' : ''}`,
          `FI sem as metas: <b>${gi.sem.date.getFullYear()}</b> · com as metas: <b>${gi.com.date.getFullYear()}</b>. Esse é o preço, em tempo, dos objetivos cadastrados — não é bom nem ruim, é o trade-off explícito. Detalhe por meta na Linha da Vida → Objetivos.`,
          null);
      } else if (dm <= 0) {
        push('good', 'Objetivos',
          'As metas cadastradas cabem sem atrasar a FI',
          `Custear ${S.goals.length} meta(s) não move a data da independência — a folga de poupança absorve as saídas.`,
          null);
      }
    }
  }

  // ── Perfil de risco: Necessidade × Capacidade × Tolerância
  if (totalPort > 0) {
    const rp = riskProfile();
    if (rp.overRisk) {
      push('warn', 'Risco',
        `Você toma mais risco do que precisa (${fmtPct(rp.rvPct)} em ativos de risco)`,
        `Sua necessidade de retorno é baixa (${rp.reqReal != null ? 'precisa de só ' + fmtPct(rp.reqReal) + ' real a.a.' : 'meta já atingida'}), mas a carteira está agressiva. <b>Quando você já ganhou o jogo, não precisa continuar apostando</b> — reduzir RV trava o resultado e diminui o risco de sequência perto da FI. Detalhe na aba Patrimônio.`,
        'Avaliar reduzir a fatia de RV/FII e travar o resultado, já que o plano não depende de retorno alto.');
    } else if (rp.necLvl === 'alta') {
      push('info', 'Risco',
        `O plano depende de retorno alto (${rp.reqReal != null ? 'precisa de ' + fmtPct(rp.reqReal) + ' real a.a.' : 'meta difícil no prazo'})`,
        `A necessidade de retorno está alta em relação ao horizonte e ao aporte. Ou aumenta o aporte, ou estende o prazo, ou aceita mais risco — mas mais risco perto da meta é justamente o que a régua Capacidade × Tolerância manda evitar. Recomendação de perfil: <b>${rp.rec}</b>.`,
        null);
    }
  }

  // ── Proteção: gaps de seguro de vida e invalidez
  if (S.protection) {
    const pg = protectionGaps();
    const gaps = [];
    if (S.protection.dependentes > 0 && pg.faltaVida > 0) gaps.push(`<b>${fmtK(pg.faltaVida)}</b> de seguro de vida (a família precisa de ${fmtK(pg.necessidadeVida)} e tem ${fmtK(pg.recursosVida)})`);
    if (pg.faltaInval > 0) gaps.push(`<b>${fmtK(pg.faltaInval)}</b> de cobertura de invalidez (gap de ${fmt(pg.gapMensal)}/mês acima do teto do INSS por ${pg.anosApos} anos)`);
    if (gaps.length) {
      push('warn', 'Proteção',
        `Falta${gaps.length > 1 ? 'm' : ''} ${gaps.length > 1 ? 'duas coberturas' : 'cobertura'} de seguro no plano`,
        `${gaps.join('. ')}. Morte ou invalidez é o único cenário que zera o plano inteiro que o resto do app modela — e é o mais barato de transferir. Premissas ajustáveis na aba Proteção.`,
        'Cotar seguro de vida resgatável não — term life puro — e cobertura de invalidez no valor do gap.');
    } else if (S.protection.dependentes > 0 && (S.protection.seguroVida > 0 || S.protection.seguroInvalidez > 0)) {
      push('good', 'Proteção',
        'Coberturas de seguro dimensionadas para o plano',
        `Vida e invalidez cobertos pela régua da aba Proteção (patrimônio + apólices ≥ necessidade). Revise quando a renda ou os dependentes mudarem.`,
        null);
    }
  }

  // ── Alocação vs. meta (bandas de rebalanceamento)
  const targets = S.targetAllocation || {};
  if (totalPort > 0 && Object.keys(targets).length) {
    const band = S.rebalanceBand || { abs: 5, rel: 25 };
    const rows = S.portfolio.filter(a => targets[a.id] != null && a.cat !== 'imovel').map(a => {
      const cur = a.value / totalPort * 100, tgt = targets[a.id];
      const dev = cur - tgt;
      const out = Math.abs(dev) >= band.abs || (tgt > 0 && Math.abs(dev) / tgt * 100 >= band.rel);
      return { a, cur, tgt, dev, out };
    });
    const outs = rows.filter(r => r.out);
    if (outs.length && rows.length) {
      const under = rows.reduce((m, r) => r.dev < m.dev ? r : m);
      const over = rows.reduce((m, r) => r.dev > m.dev ? r : m);
      const gap = Math.abs(under.dev) / 100 * totalPort;
      push('warn', 'Alocação',
        `${outs.length} classe${outs.length > 1 ? 's' : ''} fora da banda de rebalanceamento`,
        outs.map(r => `<b>${r.a.name}</b>: ${fmtPct(r.cur)} vs. meta ${fmtPct(r.tgt)} (${r.dev > 0 ? '+' : ''}${r.dev.toFixed(1).replace('.', ',')}pp)`).join(' · ') +
        `. O jeito barato de corrigir é com aporte novo, sem girar carteira nem pagar imposto: direcione os próximos aportes para <b>${under.a.name}</b> (faltam ~${fmtK(gap)} para a meta) e segure aportes novos em <b>${over.a.name}</b>. Se alguma meta nunca é perseguida (ex.: uma classe que você não pretende encher), ajuste o alvo — meta ignorada é só ruído no rebalanceador.`,
        `Direcionar aportes para ${under.a.name} (~${fmtK(gap)}) e pausar aportes em ${over.a.name}.`);
    } else if (rows.length) {
      push('good', 'Alocação',
        'Carteira dentro das bandas de rebalanceamento',
        `Nenhuma classe desvia mais que ${band.abs}pp (ou ${band.rel}% relativo) da meta. Nada a fazer — mexer agora seria custo sem benefício.`,
        null);
    }
  }

  // ── Concentração em juros (sensibilidade à Selic)
  if (totalPort > 0) {
    const rfPct = S.portfolio.filter(a => a.cat === 'rf' || a.cat === 'cash')
      .reduce((s, a) => s + a.value, 0) / totalPort * 100;
    if (rfPct >= 55) {
      push('info', 'Carteira',
        `${fmtPct(rfPct)} da carteira indexada a juros`,
        `Suas projeções assumem CDI a ${fmtPct(S.assumptions.cdi)} — se a Selic normalizar para 9–10%, o retorno de mais da metade da carteira cai junto e a data da FI estica. O plano está sensível a uma variável que você não controla.`,
        'Rodar o cenário Pessimista com CDI ~10% e ver quanto a data da FI se move.');
    }
  }

  // ── Concentração em posição única (só ativos com risco idiossincrático — rf/cash são cestas diversificadas)
  if (totalPort > 0) {
    const riskAssets = S.portfolio.filter(a => !['rf', 'cash', 'imovel'].includes(a.cat));
    const biggest = riskAssets.reduce((m, a) => (!m || a.value > m.value) ? a : m, null);
    if (biggest) {
      const pctBig = biggest.value / totalPort * 100;
      if (pctBig >= 35) {
        push('warn', 'Carteira',
          `${fmtPct(pctBig)} da carteira numa única posição de risco (${biggest.name})`,
          `${fmtK(biggest.value)} concentrados em <b>${biggest.name}</b>. Acima de 35%, o resultado do plano passa a depender de um único ativo — diversificação nas outras classes não compensa concentração aqui. O drawdown que a posição pode ter é o drawdown que o plano vai ter.`,
          `Direcionar aportes novos para outras classes até ${biggest.name} voltar a um peso confortável.`);
      }
    }
  }

  // ── Financiamento: amortizar vs. investir
  const am = S.amort;
  if (am && am.saldo > 0 && am.taxaMes > 0) {
    const finRate = (Math.pow(1 + am.taxaMes / 100, 12) - 1) * 100;
    const cdi = am.cdi || S.assumptions.cdi || 13.65;
    const cdbLiq = cdi * (am.pctCDI || 100) / 100 * 0.85;   // IR 15% (prazo longo)
    const lciLiq = cdi * 0.95;                              // LCI ~95% CDI, isenta
    const best = Math.max(cdbLiq, lciLiq);
    const spread = best - finRate;
    if (spread < 1.5) {
      push('warn', 'Financiamento',
        'Amortizar o financiamento ganha do investimento em risco ajustado',
        `Saldo de <b>${fmtK(am.saldo)}</b> a ${fmtPct(am.taxaMes)} a.m. (<b>${fmtPct(finRate)} a.a.</b>). A melhor renda fixa líquida comparável rende ~${fmtPct(best)} — spread de só ${fmtPct(spread)}. Amortizar é retorno garantido, isento e sem marcação a mercado; e a assimetria joga a favor: se a Selic cair, o CDI cai junto, mas o custo do financiamento é fixo.`,
        'Priorizar amortização SAC com caixa disponível — simular na aba Simulador (Amortização).');
    } else {
      push('info', 'Financiamento',
        'Manter o financiamento e investir ainda compensa',
        `Custo do financiamento de ${fmtPct(finRate)} a.a. vs. ~${fmtPct(best)} líquido na renda fixa — spread de ${fmtPct(spread)} a favor de investir. Reavalie a cada corte de Selic: o custo é fixo, o CDI não.`,
        null);
    }
  }

  // ── Colchão e cobertura do gasto
  const run = runwayMonths();
  if (run > 0 && avgGas > 0) {
    const realMonthly = totalPort * (weightedReturnReal() / 100) / 12;
    const covReal = realMonthly / avgGas * 100;
    push(run >= 60 ? 'good' : run >= 24 ? 'info' : 'warn', 'Colchão',
      `${Math.round(run)} meses de gasto cobertos pela carteira`,
      `No gasto médio de ${fmt(avgGas)}/mês, o patrimônio investível banca <b>${(run / 12).toFixed(1).replace('.', ',')} anos</b> sem nenhuma renda. Em termos reais (acima da inflação), o rendimento esperado da carteira já paga <b>${fmtPct(covReal)}</b> do seu gasto médio atual` +
      (covReal >= 80 ? ' — pela régua da perpetuidade, você está muito perto da FI do seu padrão de vida de hoje.' : '.'),
      null);
  }

  // ── Receita dependente de eventos
  const outMonths = last24.filter(isOutlier);
  const rec24 = last24.reduce((s, h) => s + h.rec, 0);
  if (outMonths.length >= 2 && rec24 > 0) {
    const share = outMonths.reduce((s, h) => s + h.rec, 0) / rec24 * 100;
    if (share >= 20) {
      push('info', 'Receita',
        `${outMonths.length} meses atípicos concentram ${fmtPct(share)} da receita de 2 anos`,
        `(${outMonths.map(h => monthLabel(h.d)).join(', ')}). Bônus e eventos bancam os aportes gordos — o plano funciona <i>se</i> eles continuarem. Vale olhar as projeções também num cenário sem esses eventos.`,
        null);
    }
  }

  // ── Qualidade de dados: histórico desatualizado
  {
    const lastD = lastH.d;                        // "YYYY-MM" do último mês sincronizado
    const nowD = new Date();
    const curKey = nowD.getFullYear() + '-' + String(nowD.getMonth() + 1).padStart(2, '0');
    const atras = monthsBetween(lastD, curKey);
    if (atras >= 2) {
      push('info', 'Dados',
        `Histórico parado em ${monthLabel(lastD)} — ${atras} meses atrás`,
        `Todos os insights desta página estão calculados sobre dados que param em <b>${monthLabel(lastD)}</b>. Antes de tomar decisão com base neles, sincronize a planilha.`,
        'Clicar em ↻ Sync Sheets e gerar os insights de novo.');
    }
  }

  // ── Qualidade de dados: Mobills × Histórico divergindo
  const divs = window._mobillsDivergences;
  if (MOBILLS.length && Array.isArray(divs) && divs.length) {
    const worst = divs.reduce((m, d) => d.diff > m.diff ? d : m);
    push('warn', 'Dados',
      `Mobills e Histórico divergem em ${divs.length} mês(es) fechado(s)`,
      `Pior caso: <b>${monthLabel(worst.d)}</b> — planilha ${fmt(worst.hist)} vs. Mobills ${fmt(worst.mobills)} (${fmtPct(worst.diff)} de diferença). Quando as duas fontes discordam, a Análise de Gastos e o Histórico contam histórias diferentes — e algum número está errado.`,
      'Conferir lançamentos faltantes ou duplicados nos meses divergentes (ou ajustar os termos excluídos na Análise de Gastos).');
  }

  // ── Qualidade de dados: tabela CDI desatualizada
  const anoAtual = new Date().getFullYear();
  if (!(anoAtual in CDI_YEARLY)) {
    push('info', 'Dados',
      `Tabela de CDI sem o ano de ${anoAtual}`,
      `O benchmark (CDI_YEARLY, no código) vai até ${Math.max(...Object.keys(CDI_YEARLY).map(Number))} — anos ausentes caem num fallback de 10% a.a., o que distorce o Alpha e a comparação com o CDI. Atualize a tabela com o CDI médio do ano.`,
      null);
  }

  return ins;
}

const INS_SEV = {
  bad:  { labels: ['alerta', 'alertas'],                     color: '#f87171', icon: '&#9650;' },
  warn: { labels: ['ponto de atenção', 'pontos de atenção'], color: '#fbbf24', icon: '&#9679;' },
  good: { labels: ['ponto forte', 'pontos fortes'],          color: '#34d399', icon: '&#10003;' },
  info: { labels: ['observação', 'observações'],             color: '#6395ff', icon: '&#9670;' },
};

function renderInsights() {
  const el = document.getElementById('page-insights');
  el.innerHTML = `
    <div class="page-header">
      <div>
        <div class="page-title">Insights</div>
        <div class="page-subtitle">Diagnóstico automático dos seus números — histórico, carteira, alocação e metas</div>
      </div>
    </div>
    <div class="card insights-hero mb-16">
      <div>
        <div class="card-title" style="margin-bottom:4px">Relatório de insights</div>
        <div class="text-sm text-muted">Analisa os mesmos dados do dashboard e aponta o que está forte, o que pede atenção e o que fazer. Tudo roda no navegador — nada sai daqui.</div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <a class="btn btn-ghost" href="INSIGHTS.md" target="_blank" rel="noopener" title="Documentação das regras usadas para gerar os insights">&#128220; Manual</a>
        <button class="btn btn-primary" onclick="generateInsights()">&#9889; Gerar insights</button>
      </div>
    </div>
    <div class="card insights-hero mb-16">
      <div>
        <div class="card-title" style="margin-bottom:4px">Relatório completo &middot; PDF</div>
        <div class="text-sm text-muted">Um documento de 13 seções para ler de cabo a rabo: patrimônio e trajetória, resultado vs. CDI, aportes, fluxo de caixa, <b>gastos categorizados</b>, <b>balanceamento da carteira</b>, independência financeira, objetivos, dívidas, proteção e o diagnóstico. Abre para leitura na tela e imprime em A4 — no diálogo de impressão, escolha <b>Salvar como PDF</b>.</div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="openReport()">&#128196; Gerar relatório</button>
      </div>
    </div>
    <div id="insights-report"></div>`;
}

// Cada tag de insight → seção do app onde aquele dado vive (clicar no card navega até lá)
const INS_TAG_NAV = {
  'Patrimônio': 'history', 'Poupança': 'history', 'Rentabilidade': 'history',
  'Drawdown': 'history', 'Receita': 'history', 'Aportes': 'history', 'Dados': 'history',
  'Inflação Pessoal': 'expenses',
  'Modelo vs Real': 'scenarios',
  'Meta FI': 'fi', 'Velocidade': 'fi', 'Coast FI': 'fi', 'Colchão': 'fi',
  'Objetivos': 'objetivos',
  'Risco': 'portfolio', 'Carteira': 'portfolio', 'Alocação': 'portfolio',
  'Financiamento': 'debts', 'Proteção': 'protection',
};
const INS_NAV_LABEL = {
  history: 'Histórico', expenses: 'Análise de Gastos', scenarios: 'Cenários', fi: 'Independência FI',
  objetivos: 'Objetivos', portfolio: 'Patrimônio', debts: 'Financiamento', protection: 'Proteção',
};

function generateInsights() {
  const box = document.getElementById('insights-report');
  if (!box) return;
  const order = ['bad', 'warn', 'good', 'info'];
  const ins = computeInsights().sort((a, b) => order.indexOf(a.sev) - order.indexOf(b.sev));
  const counts = order.map(s => ({ s, n: ins.filter(i => i.sev === s).length })).filter(x => x.n);
  const actions = ins.filter(i => i.action);
  const ts = new Date().toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

  box.innerHTML = `
    <div class="insights-summary">
      ${counts.map(c => {
        const sv = INS_SEV[c.s];
        return `<span class="ins-chip" style="color:${sv.color};border-color:${sv.color}55;background:${sv.color}14">${sv.icon} ${c.n} ${sv.labels[c.n > 1 ? 1 : 0]}</span>`;
      }).join('')}
      <span class="ins-chip" style="color:var(--text-dim)">gerado em ${ts}</span>
    </div>
    ${ins.map(i => {
      const dest = INS_TAG_NAV[i.tag];
      const attrs = dest
        ? ` insight-clickable" style="border-left-color:${INS_SEV[i.sev].color}" onclick="navigate('${dest}')" title="Abrir ${INS_NAV_LABEL[dest] || dest}"`
        : `" style="border-left-color:${INS_SEV[i.sev].color}"`;
      return `
      <div class="card insight-card${attrs}>
        <div class="insight-head">
          <span class="insight-tag" style="color:${INS_SEV[i.sev].color};background:${INS_SEV[i.sev].color}1c">${i.tag}</span>
          <span class="insight-title">${i.title}</span>
          ${dest ? `<span class="insight-goto">${INS_NAV_LABEL[dest] || dest} ↗</span>` : ''}
        </div>
        <div class="insight-body">${i.body}</div>
      </div>`;
    }).join('')}
    ${actions.length ? `
      <div class="card insight-card" style="border-left-color:var(--accent-2)">
        <div class="insight-head">
          <span class="insight-tag" style="color:var(--accent-2);background:rgba(139,92,246,.14)">Plano de ação</span>
          <span class="insight-title">Por onde começar</span>
        </div>
        <ol class="insight-actions">${actions.map(a => `<li>${a.action}</li>`).join('')}</ol>
      </div>` : ''}`;
}

// ── 20c. RELATÓRIO COMPLETO (leitura + PDF) ───────────────
// Um documento, não um dashboard: monta um contexto único a partir das MESMAS
// funções que alimentam as outras páginas, renderiza HTML em tema claro (.rp-*)
// e imprime via window.print() — o navegador salva em PDF.
//
// Três regras que o resto do app não segue e aqui são obrigatórias:
//  1. A âncora do relatório é o ÚLTIMO MÊS COM DADO (nunca new Date()): relatório
//     de mês fechado não pode falar de um mês que ainda não existe na planilha.
//  2. Nada de canvas: gráfico é SVG inline — vetor, imprime nítido, tema próprio.
//  3. Todo texto que vem da planilha/Mobills passa por _rpEsc().
//
// Documentado em INSIGHTS.md, seção "Relatório completo".

// ── Formatadores locais ───────────────────────────────────
function _rpEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
// Texto redigido pelo app que embute <b>/<i> de propósito MAS interpola dado bruto
// (nome de ativo, categoria) sem escapar — computeInsights() e riskProfile() fazem isso.
// Escapa tudo e devolve só a whitelist: sem atributo, sem <script>, mantendo a ênfase.
function _rpSafeHtml(s) {
  return _rpEsc(s).replace(/&lt;([/]?)(b|i|br)&gt;/gi, '<$1$2>');
}
// número puro pt-BR (sem R$)
function _rpN(v, d = 0) {
  if (v == null || !isFinite(v)) return '—';
  return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: d, maximumFractionDigits: d }).format(v);
}
// R$ com sinal explícito (o fmtK do app não trata negativo)
function _rpMoneyS(v) {
  if (v == null || !isFinite(v)) return '—';
  return (v < 0 ? '−' : '+') + fmt(Math.abs(v));
}
function _rpKS(v) {
  if (v == null || !isFinite(v)) return '—';
  return (v < 0 ? '−' : '+') + fmtK(Math.abs(v));
}
// fmtK que aceita negativo (o do app cai em fmt e sai "R$ -50.000")
function _rpK(v) {
  if (v == null || !isFinite(v)) return '—';
  return (v < 0 ? '−' : '') + fmtK(Math.abs(v));
}
// % com sinal — entrada em PONTOS PERCENTUAIS
function _rpPctS(v, d = 1) {
  if (v == null || !isFinite(v)) return '—';
  return (v < 0 ? '−' : '+') + Math.abs(v).toFixed(d).replace('.', ',') + '%';
}
// Diferença entre duas taxas: p.p., não %. Usado em alpha, desvio de alocação,
// spread de financiamento e creep de inflação.
function _rpPP(v, d = 1) {
  if (v == null || !isFinite(v)) return '—';
  return (v < 0 ? '−' : '+') + Math.abs(v).toFixed(d).replace('.', ',') + ' p.p.';
}
// % sem sinal, tolerante a null (fmtPct do app quebra com null)
function _rpPct(v, d = 1) {
  if (v == null || !isFinite(v)) return '—';
  return v.toFixed(d).replace('.', ',') + '%';
}
function _rpX(v, d = 2) {
  if (v == null || !isFinite(v)) return '—';
  return v.toFixed(d).replace('.', ',') + '×';
}
// classe de cor por sinal
function _rpCls(v, invert) {
  if (v == null || !isFinite(v) || v === 0) return 'rp-dim';
  const good = invert ? v < 0 : v > 0;
  return good ? 'rp-pos' : 'rp-neg';
}
// meses → "3 anos e 2 meses"
function _rpDur(m) {
  if (m == null || !isFinite(m)) return '—';
  m = Math.round(m);
  if (m <= 0) return 'agora';
  const y = Math.floor(m / 12), r = m % 12;
  const py = y === 1 ? '1 ano' : y + ' anos';
  const pm = r === 1 ? '1 mês' : r + ' meses';
  if (!y) return pm;
  if (!r) return py;
  return py + ' e ' + pm;
}
// Date → "Mmm/AA" no mesmo formato do monthLabel
function _rpDateLabel(dt) {
  if (!(dt instanceof Date) || isNaN(dt)) return '—';
  return monthLabel(dt.getFullYear() + '-' + String(dt.getMonth() + 1).padStart(2, '0'));
}
function _rpMedian(arr) {
  const s = arr.filter(v => v != null && isFinite(v)).sort((a, b) => a - b);
  if (!s.length) return 0;
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}
function _rpSum(arr) { return arr.reduce((s, v) => s + (isFinite(v) ? v : 0), 0); }
function _rpAvg(arr) { return arr.length ? _rpSum(arr) / arr.length : 0; }

// ── Blocos de markup ──────────────────────────────────────
function _rpKpi(label, value, sub, cls) {
  return `<div class="rp-kpi"><div class="rp-kpi-l">${label}</div>` +
    `<div class="rp-kpi-v${cls ? ' ' + cls : ''}">${value}</div>` +
    (sub ? `<div class="rp-kpi-s">${sub}</div>` : '') + `</div>`;
}
function _rpKpis(items, cols) {
  if (!items.length) return '';
  const c = cols === 3 ? ' rp-kpis-3' : cols === 2 ? ' rp-kpis-2' : '';
  return `<div class="rp-kpis${c}">${items.join('')}</div>`;
}
// barra proporcional numa célula. pct em 0..100 (satura em 100, mas o rótulo é livre)
function _rpBar(pct, kind) {
  const p = Math.max(0, Math.min(100, isFinite(pct) ? pct : 0));
  return `<span class="rp-b${kind ? ' ' + kind : ''}"><i style="width:${p.toFixed(1)}%"></i></span>`;
}
function _rpCall(kind, title, body) {
  return `<div class="rp-call${kind ? ' ' + kind : ''}">` +
    (title ? `<span class="rp-call-t">${title}</span>` : '') + body + `</div>`;
}
function _rpEmpty(txt) { return `<div class="rp-empty">${txt}</div>`; }
function _rpH3(t) { return `<div class="rp-h3">${t}</div>`; }
function _rpP(t) { return `<p class="rp-p">${t}</p>`; }
function _rpTable(head, body, foot, cls) {
  if (!body) return '';
  return `<div class="rp-tw"><table class="rp-t${cls ? ' ' + cls : ''}">` +
    `<thead><tr>${head}</tr></thead><tbody>${body}</tbody>` +
    (foot ? `<tfoot><tr>${foot}</tr></tfoot>` : '') + `</table></div>`;
}
// cor de fundo do heatmap adaptada ao papel branco (o heatColor() do app
// foi calibrado para fundo escuro)
function _rpHeatBg(r, maxAbs) {
  if (r == null || !isFinite(r)) return '';
  const rgb = r >= 0 ? '15,122,79' : '179,38,30';
  const a = (0.07 + Math.min(1, Math.abs(r) / (maxAbs || 0.01)) * 0.40).toFixed(3);
  return `background:rgba(${rgb},${a})`;
}

// ── Gráficos: SVG inline ──────────────────────────────────
const _RP_PAL = ['#1f4fd8', '#0f7a4f', '#b3261e', '#8a6100', '#6d28d9', '#0e7490'];

function _rpNice(max, min) {
  const span = (max - min) || Math.abs(max) || 1;
  const step = Math.pow(10, Math.floor(Math.log10(span / 3)));
  const mult = [1, 2, 2.5, 5, 10].find(m => span / (step * m) <= 4) || 10;
  const s = step * mult;
  return { lo: Math.floor(min / s) * s, hi: Math.ceil(max / s) * s, step: s };
}

/* Linhas/áreas. opts:
 *   series: [{name, color, data:[num|null], area?:bool, dash?:bool}]
 *   labels: [str] (mesmo comprimento das séries)
 *   h: altura do viewBox (default 190) · fmtY: formatador do eixo Y
 *   baseline: valor de uma linha horizontal de referência · baselineLabel
 *   zero: força incluir o 0 no eixo                                          */
function _rpSvgLine(opts) {
  const S = opts.series.filter(s => s && s.data && s.data.some(v => v != null && isFinite(v)));
  if (!S.length) return '';
  const labels = opts.labels || [];
  const n = Math.max(...S.map(s => s.data.length));
  if (n < 2) return '';
  const W = 860, H = opts.h || 190;
  const PL = 56, PR = 10, PT = 12, PB = 24;
  const iw = W - PL - PR, ih = H - PT - PB;
  const fy = opts.fmtY || fmtK;

  let vals = S.flatMap(s => s.data).filter(v => v != null && isFinite(v));
  if (opts.baseline != null && isFinite(opts.baseline)) vals.push(opts.baseline);
  if (opts.zero) vals.push(0);
  const sc = _rpNice(Math.max(...vals), Math.min(...vals));
  const rng = (sc.hi - sc.lo) || 1;
  const X = i => PL + (n === 1 ? iw / 2 : (i / (n - 1)) * iw);
  const Y = v => PT + ih - ((v - sc.lo) / rng) * ih;

  // grade + eixo Y
  let g = '';
  for (let v = sc.lo; v <= sc.hi + sc.step * 0.001; v += sc.step) {
    const y = Y(v).toFixed(1);
    g += `<line x1="${PL}" y1="${y}" x2="${W - PR}" y2="${y}" stroke="#dfe3ea" stroke-width="1"/>` +
         `<text x="${PL - 6}" y="${y}" text-anchor="end" dominant-baseline="middle" font-size="9" fill="#626b7b">${_rpEsc(fy(v))}</text>`;
  }
  // rótulos X (no máximo 8)
  let xs = '';
  const every = Math.max(1, Math.ceil(n / 8));
  for (let i = 0; i < n; i += every) {
    if (!labels[i]) continue;
    xs += `<text x="${X(i).toFixed(1)}" y="${H - 6}" text-anchor="middle" font-size="9" fill="#626b7b">${_rpEsc(labels[i])}</text>`;
  }
  if (labels[n - 1] && (n - 1) % every !== 0) {
    xs += `<text x="${X(n - 1).toFixed(1)}" y="${H - 6}" text-anchor="end" font-size="9" fill="#626b7b">${_rpEsc(labels[n - 1])}</text>`;
  }
  // linha de referência
  let base = '';
  if (opts.baseline != null && isFinite(opts.baseline)) {
    const y = Y(opts.baseline).toFixed(1);
    base = `<line x1="${PL}" y1="${y}" x2="${W - PR}" y2="${y}" stroke="#14181f" stroke-width="1" stroke-dasharray="4 3"/>` +
      (opts.baselineLabel ? `<text x="${W - PR - 2}" y="${(Y(opts.baseline) - 4).toFixed(1)}" text-anchor="end" font-size="9" font-weight="700" fill="#14181f" stroke="#ffffff" stroke-width="3" paint-order="stroke">${_rpEsc(opts.baselineLabel)}</text>` : '');
  }
  // séries
  let paths = '';
  S.forEach((s, si) => {
    const col = s.color || _RP_PAL[si % _RP_PAL.length];
    let d = '', open = false, first = -1, lastI = -1;
    s.data.forEach((v, i) => {
      if (v == null || !isFinite(v)) { open = false; return; }
      d += (open ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1) + ' ';
      if (!open && first < 0) first = i;
      lastI = i; open = true;
    });
    if (!d) return;
    if (s.area && first >= 0) {
      paths += `<path d="${d}L${X(lastI).toFixed(1)} ${Y(sc.lo).toFixed(1)} L${X(first).toFixed(1)} ${Y(sc.lo).toFixed(1)} Z" fill="${col}" fill-opacity=".10" stroke="none"/>`;
    }
    paths += `<path d="${d}" fill="none" stroke="${col}" stroke-width="${s.width || 1.8}"` +
      (s.dash ? ' stroke-dasharray="5 3"' : '') + ' stroke-linejoin="round" stroke-linecap="round"/>';
  });

  const leg = S.length > 1 || opts.forceLegend
    ? `<div class="rp-leg">${S.map((s, si) => `<span><i style="background:${s.color || _RP_PAL[si % _RP_PAL.length]}"></i>${_rpEsc(s.name || '')}</span>`).join('')}</div>`
    : '';
  return `<div class="rp-fig"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${_rpEsc(opts.alt || 'gráfico')}">` +
    g + base + paths + xs + `</svg>${leg}` +
    (opts.cap ? `<div class="rp-fig-cap">${opts.cap}</div>` : '') + `</div>`;
}

/* Barras verticais (uma série). opts:
 *   values:[num] · labels:[str] · color · h · fmtY · avg (linha de média) · avgLabel */
function _rpSvgBars(opts) {
  const v = (opts.values || []).map(x => (x != null && isFinite(x)) ? x : 0);
  if (!v.length) return '';
  const W = 860, H = opts.h || 170;
  const PL = 56, PR = 10, PT = 12, PB = 24;
  const iw = W - PL - PR, ih = H - PT - PB;
  const fy = opts.fmtY || fmtK;
  const pool = v.concat([0]);
  if (opts.avg != null && isFinite(opts.avg)) pool.push(opts.avg);
  const sc = _rpNice(Math.max(...pool), Math.min(...pool));
  const rng = (sc.hi - sc.lo) || 1;
  const Y = x => PT + ih - ((x - sc.lo) / rng) * ih;
  const bw = iw / v.length;
  const gap = Math.min(3, bw * 0.22);

  let g = '';
  for (let x = sc.lo; x <= sc.hi + sc.step * 0.001; x += sc.step) {
    const y = Y(x).toFixed(1);
    g += `<line x1="${PL}" y1="${y}" x2="${W - PR}" y2="${y}" stroke="#dfe3ea" stroke-width="1"/>` +
         `<text x="${PL - 6}" y="${y}" text-anchor="end" dominant-baseline="middle" font-size="9" fill="#626b7b">${_rpEsc(fy(x))}</text>`;
  }
  const y0 = Y(Math.max(sc.lo, Math.min(sc.hi, 0)));
  let bars = '';
  v.forEach((x, i) => {
    const yv = Y(x);
    const top = Math.min(yv, y0), hh = Math.max(0.8, Math.abs(yv - y0));
    const col = x < 0 ? (opts.negColor || '#b3261e') : (opts.color || '#1f4fd8');
    bars += `<rect x="${(PL + i * bw + gap / 2).toFixed(1)}" y="${top.toFixed(1)}" width="${Math.max(0.6, bw - gap).toFixed(1)}" height="${hh.toFixed(1)}" fill="${col}" fill-opacity=".85"/>`;
  });
  bars += `<line x1="${PL}" y1="${y0.toFixed(1)}" x2="${W - PR}" y2="${y0.toFixed(1)}" stroke="#c3c9d4" stroke-width="1"/>`;

  let avg = '';
  if (opts.avg != null && isFinite(opts.avg)) {
    const y = Y(opts.avg).toFixed(1);
    avg = `<line x1="${PL}" y1="${y}" x2="${W - PR}" y2="${y}" stroke="#14181f" stroke-width="1" stroke-dasharray="4 3"/>` +
      (opts.avgLabel ? `<text x="${W - PR - 2}" y="${(Y(opts.avg) - 4).toFixed(1)}" text-anchor="end" font-size="9" font-weight="700" fill="#14181f" stroke="#ffffff" stroke-width="3" paint-order="stroke">${_rpEsc(opts.avgLabel)}</text>` : '');
  }
  let xs = '';
  const labels = opts.labels || [];
  const every = Math.max(1, Math.ceil(v.length / 12));
  for (let i = 0; i < v.length; i += every) {
    if (!labels[i]) continue;
    xs += `<text x="${(PL + i * bw + bw / 2).toFixed(1)}" y="${H - 6}" text-anchor="middle" font-size="9" fill="#626b7b">${_rpEsc(labels[i])}</text>`;
  }
  return `<div class="rp-fig"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${_rpEsc(opts.alt || 'gráfico de barras')}">` +
    g + bars + avg + xs + `</svg>` +
    (opts.cap ? `<div class="rp-fig-cap">${opts.cap}</div>` : '') + `</div>`;
}

/* Barras horizontais agrupadas — atual vs alvo da carteira. rows:[{label,a,b}] */
function _rpSvgPair(rows, opts) {
  if (!rows || !rows.length) return '';
  opts = opts || {};
  const W = 860, rowH = 22, PT = 16, PB = 8, PL = 150, PR = 46;
  const H = PT + PB + rows.length * rowH;
  const iw = W - PL - PR;
  const max = Math.max(...rows.flatMap(r => [r.a || 0, r.b || 0]), 1);
  let out = '';
  rows.forEach((r, i) => {
    const y = PT + i * rowH;
    const wa = (r.a || 0) / max * iw, wb = (r.b || 0) / max * iw;
    out += `<text x="${PL - 8}" y="${y + rowH / 2}" text-anchor="end" dominant-baseline="middle" font-size="10" fill="#14181f">${_rpEsc(r.label)}</text>` +
      `<rect x="${PL}" y="${y + 3}" width="${Math.max(0, wa).toFixed(1)}" height="7" fill="${opts.colorA || '#1f4fd8'}" fill-opacity=".9"/>` +
      `<rect x="${PL}" y="${y + 12}" width="${Math.max(0, wb).toFixed(1)}" height="7" fill="#9aa3b2" fill-opacity=".75"/>` +
      `<text x="${W - PR + 4}" y="${y + rowH / 2}" dominant-baseline="middle" font-size="9.5" fill="#495261">${_rpEsc(_rpPct(r.a))}</text>`;
  });
  return `<div class="rp-fig"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${_rpEsc(opts.alt || 'alocação atual vs alvo')}">${out}</svg>` +
    `<div class="rp-leg"><span><i style="background:${opts.colorA || '#1f4fd8'}"></i>${_rpEsc(opts.nameA || 'Atual')}</span>` +
    `<span><i style="background:#9aa3b2"></i>${_rpEsc(opts.nameB || 'Alvo')}</span></div>` +
    (opts.cap ? `<div class="rp-fig-cap">${opts.cap}</div>` : '') + `</div>`;
}

// ── Contexto compartilhado ────────────────────────────────
// Tudo que mais de uma seção precisa. Calculado uma vez por relatório.
function _rpCtx() {
  const H = HISTORICAL;
  const last = H[H.length - 1] || { d: '—', pat: 0, pl: 0, rec: 0, gas: 0, apo: 0 };
  const lastD = last.d;
  const now = new Date();
  const realKey = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');

  const L12 = H.slice(-12), L24 = H.slice(-24);
  const rec12 = _rpSum(L12.map(h => h.rec)), gas12 = _rpSum(L12.map(h => h.gas));
  const apo12 = _rpSum(L12.map(h => h.apo || 0));
  const recMed24 = _rpMedian(L24.map(h => h.rec).filter(v => v > 0));

  // Carteira
  const pRows = (S.portfolio || []).map(a => ({ ...a }));
  const pTotal = _rpSum(pRows.map(a => a.value));
  const target = S.targetAllocation || {};
  const band = S.rebalanceBand || { abs: 5, rel: 25 };

  // Mobills — a agregação que renderExpenses mantém como variável local.
  // Aqui é recalculada e ancorada no último mês COM DADO do Mobills.
  const mb = { ok: false, rows: [], raw: MOBILLS_RAW || [], months: [], secOrder: [] };
  if (MOBILLS && MOBILLS.length) {
    mb.ok = true;
    mb.rows = MOBILLS;
    const bySec = {}, byNat = {}, byMonth = {}, bySecMonth = {}, byNatMonth = {}, natCount = {}, natLast = {};
    const natSec = {};
    MOBILLS.forEach(r => {
      const v = Math.abs(r.val || 0);
      const nat = r.cat || 'Sem categoria';
      const sec = getSecao(nat);
      natSec[nat] = sec;
      bySec[sec] = (bySec[sec] || 0) + v;
      byNat[nat] = (byNat[nat] || 0) + v;
      byMonth[r.d] = (byMonth[r.d] || 0) + v;
      bySecMonth[sec + '|' + r.d] = (bySecMonth[sec + '|' + r.d] || 0) + v;
      byNatMonth[nat + '|' + r.d] = (byNatMonth[nat + '|' + r.d] || 0) + v;
      natCount[nat] = (natCount[nat] || 0) + 1;
      if (!natLast[nat] || r.d > natLast[nat]) natLast[nat] = r.d;
    });
    mb.months = Object.keys(byMonth).sort();
    mb.lastD = mb.months[mb.months.length - 1];
    mb.bySec = bySec; mb.byNat = byNat; mb.byMonth = byMonth;
    mb.bySecMonth = bySecMonth; mb.byNatMonth = byNatMonth;
    mb.natCount = natCount; mb.natLast = natLast; mb.natSec = natSec;
    mb.total = _rpSum(Object.values(byMonth));
    mb.secOrder = sortSecoes(Object.entries(bySec)).map(e => e[0]);
    mb.win = k => {                       // janela de k meses terminando no último mês com dado
      const out = [];
      for (let i = k - 1; i >= 0; i--) out.push(addMonths(mb.lastD, -i));
      return out;
    };
    mb.secIn = (sec, months) => _rpSum(months.map(m => mb.bySecMonth[sec + '|' + m] || 0));
    mb.natIn = (nat, months) => _rpSum(months.map(m => mb.byNatMonth[nat + '|' + m] || 0));
    mb.totIn = months => _rpSum(months.map(m => mb.byMonth[m] || 0));
    mb.hasFix = MOBILLS.some(r => r.fix === true);
  }

  return {
    now, stamp: now.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    H, last, lastD, realKey,
    stale: monthsBetween(lastD, realKey),
    age: currentAge(),
    L12, L24,
    rec12, gas12, apo12,
    avgRec: rec12 / Math.max(1, L12.length),
    avgGas: gas12 / Math.max(1, L12.length),
    avgApo: apo12 / Math.max(1, L12.length),
    recMed24,
    isOutlier: h => recMed24 > 0 && h.rec > 1.8 * recMed24,
    plNow: last.pl || 0,
    patNow: last.pat || 0,
    invest: investableWealth(),
    fin: fiNumber(),
    fiR: fiRate(),
    port: { rows: pRows, total: pTotal, target, band },
    mb,
    ipca: (S.assumptions && S.assumptions.ipca) || 5.5,
  };
}


// ── Agregação anual do histórico (não existe pronta no app) ──
// Por ano civil: patrimônio no fim, Δ do líquido, aporte, resultado de mercado
// (Δpl − aporte), receita/gasto médios e taxa de poupança do ano.
function _rpYearRows(c) {
  const byY = {};
  c.H.forEach(h => {
    const y = h.d.slice(0, 4);
    (byY[y] = byY[y] || []).push(h);
  });
  const years = Object.keys(byY).sort();
  const rs = realizedReturns();
  const retByY = {};
  rs.forEach(x => { const y = x.d.slice(0, 4); (retByY[y] = retByY[y] || []).push(x.r); });

  let prevPl = null;
  return years.map(y => {
    const ms = byY[y];
    const lastM = ms[ms.length - 1];
    const rec = _rpSum(ms.map(h => h.rec)), gas = _rpSum(ms.map(h => h.gas));
    // apo = aporte TOTAL (exibido na coluna Aporte, inclui imóvel).
    // apoPL = só o que foi pra patrimônio líquido — é o que entra na conta de "resultado de
    // mercado" (mkt), porque dPl é sobre pl e aporte em imóvel nunca move o pl.
    const apo = _rpSum(ms.map(h => h.apo || 0));
    const apoPL = _rpSum(ms.map(apoPLOf));
    const dPl = prevPl == null ? null : (lastM.pl || 0) - prevPl;
    const mkt = dPl == null ? null : dPl - apoPL;
    const comp = (retByY[y] || []).reduce((p, r) => p * (1 + r), 1);
    const row = {
      y, n: ms.length, pat: lastM.pat || 0, pl: lastM.pl || 0,
      dPl, apo, mkt, rec, gas,
      recAvg: rec / ms.length, gasAvg: gas / ms.length, apoAvg: apo / ms.length,
      sr: rec > 0 ? (rec - gas) / rec * 100 : null,
      ret: (retByY[y] || []).length ? (comp - 1) * 100 : null,
      retN: (retByY[y] || []).length,
      cdi: CDI_YEARLY[Number(y)] != null ? CDI_YEARLY[Number(y)] : null,
      parcial: ms.length < 12,
    };
    prevPl = lastM.pl || 0;
    return row;
  });
}

// Drawdown corrente sobre o patrimônio líquido (pico histórico vs hoje)
function _rpDrawdownNow(c) {
  let peak = 0, peakD = null;
  c.H.forEach(h => { if ((h.pl || 0) > peak) { peak = h.pl || 0; peakD = h.d; } });
  const cur = c.plNow;
  return { peak, peakD, cur, pct: peak > 0 ? (peak - cur) / peak * 100 : 0 };
}

// Marcos de patrimônio de 100k em 100k (os dados do card do Dashboard são locais lá).
// Base = h.pat (patrimônio TOTAL), a mesma de _buildMilestonesCard: usar h.pl aqui
// atrasaria cada marco em meses e sumiria com os últimos, contradizendo a tela.
function _rpMilestones(c) {
  const out = [];
  let next = 100000, prevD = null;
  for (const h of c.H) {
    while ((h.pat || 0) >= next) {
      out.push({ v: next, d: h.d, gap: prevD ? monthsBetween(prevD, h.d) : null });
      prevD = h.d; next += 100000;
    }
  }
  return out;
}

// ═══════ 1. RETRATO DE HOJE ═══════
function _rpSec1(c) {
  const ins = c.insights || [];
  const nBad = ins.filter(i => i.sev === 'bad').length;
  const nWarn = ins.filter(i => i.sev === 'warn').length;
  const sr12 = c.rec12 > 0 ? (c.rec12 - c.gas12) / c.rec12 * 100 : null;
  const pctFI = c.fin > 0 ? c.invest / c.fin * 100 : 0;
  const run = runwayMonths();

  // ETA empírico: quanto falta ÷ quanto andou nos últimos 12 meses
  // "Ano atrás" por calendário, não pela posição -13 do array — um gap no sync (mês pulado)
  // faz a posição -13 apontar pra um mês que não é 12 atrás de verdade. Mesmo bug já corrigido
  // no card "vs mês anterior" do Dashboard. Sem match exato, usa o registro mais PRÓXIMO em
  // data do alvo (12 meses atrás) — não o mais recente antes de hoje — e assume a lacuna
  // real (yAgoMonths), não sempre "12".
  const yAgoKey = addMonths(c.lastD, -12);
  const before = c.H.filter(h => h.d < c.lastD);
  const yAgo = c.H.find(h => h.d === yAgoKey) ||
    before.slice().sort((a, b) => Math.abs(monthsBetween(a.d, yAgoKey)) - Math.abs(monthsBetween(b.d, yAgoKey)))[0] ||
    null;
  const yAgoMonths = yAgo ? monthsBetween(yAgo.d, c.lastD) : 12;
  const pp12 = (yAgo && c.fin > 0) ? (c.plNow - (yAgo.pl || 0)) / c.fin * 100 : null;
  const etaY = (pp12 && pp12 > 0.5) ? (100 - pctFI) / pp12 : null;

  // Data da FI no cenário base
  const paths = buildScenarioPaths((S.assumptions.projectionYears || 30) * 12);
  const base = paths.find(p => p.id === 'base') || paths[0];
  const fiB = base ? findFIDate(base.path) : null;

  const kpis = _rpKpis([
    _rpKpi('Patrimônio total', fmt(c.patNow), c.patNow !== c.plNow ? `líquido ${fmt(c.plNow)} na planilha · ${fmt(c.patNow - c.plNow)} em imóvel` : 'sem imóvel no total'),
    _rpKpi('Meta de independência', fmt(c.fin), `${_rpPct(pctFI)} concluído · renda-alvo ${fmt(S.fi.targetMonthlyIncome)}/mês a ${_rpPct(c.fiR)}`),
    _rpKpi('Taxa de poupança 12m', _rpPct(sr12), sr12 == null ? '—' : sr12 >= 40 ? 'acima de 40% — folga real' : sr12 >= 20 ? 'entre 20% e 40% — mediana' : 'abaixo de 20% — aperta o plano',
      sr12 == null ? '' : sr12 >= 40 ? 'rp-pos' : sr12 >= 20 ? 'rp-warn' : 'rp-neg'),
    _rpKpi('Colchão', `${Math.round(run)} meses`, `${(run / 12).toFixed(1).replace('.', ',')} anos de gasto médio (${fmt(c.avgGas)}/mês) sem nenhuma renda`),
    _rpKpi('Data projetada da FI', fiB ? _rpDateLabel(fiB.date) : 'fora do horizonte',
      fiB ? `aos ${fiB.date.getFullYear() - S.profile.birthYear} anos · ${_rpDur(fiB.months)} a partir de ${monthLabel(projectionStart().str)}` : `nem em ${S.assumptions.projectionYears} anos no cenário base`),
    _rpKpi('Ritmo do último ano', pp12 == null ? '—' : _rpPctS(pp12) + ' da meta',
      etaY ? `nesse passo, faltam ~${etaY.toFixed(0)} anos (extrapolação do realizado, sem premissa de retorno)` : 'sem avanço mensurável nos últimos 12 meses',
      _rpCls(pp12)),
    _rpKpi('Aporte médio 12m', fmt(c.avgApo), `${fmt(c.apo12)} no ano · receita média ${fmt(c.avgRec)}/mês`),
    _rpKpi('Diagnóstico', `${nBad + nWarn} ${nBad + nWarn === 1 ? 'ponto' : 'pontos'}`,
      `${nBad} ${nBad === 1 ? 'alerta' : 'alertas'} e ${nWarn} ${nWarn === 1 ? 'atenção' : 'atenções'} na seção 12`,
      nBad ? 'rp-neg' : nWarn ? 'rp-warn' : 'rp-pos'),
  ]);

  // Leitura em prosa — os mesmos números, encadeados.
  // Dois números diferentes andam por aqui e NÃO podem ter o mesmo nome:
  //   c.plNow  = coluna pl da planilha (série histórica; é dela que sai qualquer Δ)
  //   c.invest = investableWealth(), soma da carteira cadastrada ex-imóvel
  //              (é a base do % da meta, do Dashboard e da página FI)
  // Com sync em dia os dois batem. Quando não batem, o relatório diz.
  // Aporte somado na MESMA janela real do Δpl (não sempre "últimas 12 linhas do array") —
  // senão, se a janela tiver uma lacuna, o aporte soma meses que o Δpl não cobre (ou vice-versa)
  // e o "resultado de mercado" (que é só o resto: Δpl − aporte) absorve o erro inteiro.
  // Usa apoPLOf: aporte em imóvel não move o pl, então entrar com o aporte TOTAL também
  // inflava esse resto como se fosse rentabilidade perdida.
  const dPl12 = yAgo ? c.plNow - (yAgo.pl || 0) : null;
  const apoJanela = yAgo ? _rpSum(c.H.filter(h => h.d > yAgo.d && h.d <= c.lastD).map(apoPLOf)) : _rpSum(c.L12.map(apoPLOf));
  const mkt12 = dPl12 == null ? null : dPl12 - apoJanela;
  let lead = `Em ${monthLabel(c.lastD)} o patrimônio líquido da planilha está em <b>${fmt(c.plNow)}</b>`;
  if (dPl12 != null) {
    const janelaLabel = yAgoMonths === 12 ? '12 meses' : `${yAgoMonths} meses (lacuna no sync — não achei o mês exato 12 atrás)`;
    lead += `, ${dPl12 >= 0 ? 'um avanço de' : 'uma queda de'} <b>${fmt(Math.abs(dPl12))}</b> em ${janelaLabel} — ` +
      `<b>${fmt(apoJanela)}</b> de aporte e <b>${_rpMoneyS(mkt12)}</b> de resultado de mercado`;
    if (dPl12 > 0 && apoJanela / dPl12 >= 0.85) lead += `. Ou seja: ${_rpPct(apoJanela / dPl12 * 100)} do avanço foi você depositando dinheiro, não o dinheiro trabalhando`;
  }
  lead += `. A meta de independência é <b>${fmt(c.fin)}</b> e o patrimônio investível — a carteira cadastrada, sem o imóvel — está em <b>${fmt(c.invest)}</b>, ou <b>${_rpPct(pctFI)}</b> dela`;
  lead += etaY ? `, avançando ${_rpPct(pp12)} por ano.` : '.';

  // Reconciliação: planilha × cadastro. Divergir é sintoma — o sanity check do
  // sync rejeita o portfólio quando ele vem com valor estranho e mantém o antigo,
  // sem tocar no HISTORICAL, e aí os dois lados contam histórias diferentes.
  const gap = c.plNow > 0 ? Math.abs(c.invest - c.plNow) / c.plNow * 100 : 0;
  const recon = gap > 2
    ? _rpCall('warn', `Planilha e carteira cadastrada divergem em ${_rpPct(gap)}`,
        `A coluna <b>pl</b> da planilha marca ${fmt(c.plNow)} em ${monthLabel(c.lastD)}; a soma da aba Patrimônio (ex-imóvel) dá ${fmt(c.invest)} — <b>${fmt(Math.abs(c.invest - c.plNow))}</b> de diferença. ` +
        `Neste relatório, tudo que é <i>série no tempo</i> (trajetória, rentabilidade, aportes, velocidade) vem da planilha; tudo que é <i>meta</i> (% da FI, projeções, Monte Carlo) vem da carteira cadastrada. ` +
        `Enquanto as duas discordarem, os dois blocos falam de patrimônios ligeiramente diferentes.`)
    : '';

  let veredito = '';
  if (sr12 != null) {
    veredito = `A taxa de poupança de 12 meses é <b>${_rpPct(sr12)}</b>` +
      (sr12 >= 40 ? ' — é o que sustenta o ritmo, e é o número que você não deve deixar cair.'
        : sr12 >= 20 ? ' — funciona, mas é a alavanca mais barata que você tem: cada ponto aqui vale mais que qualquer escolha de ativo.'
        : ' — abaixo de 20%, o plano depende mais de rentabilidade do que de disciplina, e rentabilidade não se controla.');
  }

  return {
    id: 'retrato', title: 'Retrato de hoje', src: 'planilha + cadastro',
    html: (c.stale >= 2 ? _rpCall('warn', 'Os dados param em ' + monthLabel(c.lastD),
      `São <b>${c.stale} meses</b> de defasagem em relação a ${monthLabel(c.realKey)}. Todo número deste relatório — inclusive as projeções — está calculado sobre essa foto. Sincronize a planilha (↻ Sync Sheets) e gere de novo antes de decidir com base nele.`) : '') +
      kpis + _rpP(lead) + (veredito ? _rpP(veredito) : '') + recon,
  };
}

// ═══════ 2. PATRIMÔNIO — TRAJETÓRIA ═══════
function _rpSec2(c) {
  const yr = _rpYearRows(c);
  const real = HISTORICAL.length >= 13 ? patrimonioRealSeries() : null;
  const ar = HISTORICAL.length >= 3 ? aporteRendimentoSeries() : null;
  const dd = _rpDrawdownNow(c);
  const mdd = maxDrawdownHist();
  const ms = _rpMilestones(c);

  let html = '';

  html += _rpKpis([
    _rpKpi('Desde o início', fmt(c.patNow), real ? `${_rpX(real.nomMult)} nominal · ${_rpX(real.realMult)} em poder de compra` : `primeiro registro em ${monthLabel(c.H[0].d)}`),
    _rpKpi('Crescimento do saldo', real ? _rpPct(real.nomCAGR) + ' a.a.' : '—', 'CAGR do saldo — <b>inclui aporte</b>, não é retorno da carteira; o retorno está na seção 3'),
    _rpKpi('Crescimento real do saldo', real ? _rpPct(real.realCAGR) + ' a.a.' : '—', real ? `o mesmo CAGR já sem a inflação de ${_rpPct(real.inflAcum)} acumulada no período` : '', real && real.realCAGR > 0 ? 'rp-pos' : 'rp-neg'),
    _rpKpi('Maior queda já atravessada', _rpPct(mdd), dd.pct >= 5 ? `hoje ${_rpPct(dd.pct)} abaixo do pico de ${fmt(dd.peak)} (${monthLabel(dd.peakD)})` : 'hoje no topo histórico ou a menos de 5% dele'),
  ], 4);

  if (real) {
    const step = Math.max(1, Math.ceil(c.H.length / 90));
    const idx = c.H.map((_, i) => i).filter(i => i % step === 0 || i === c.H.length - 1);
    html += _rpSvgLine({
      series: [
        { name: 'Nominal (R$ da época)', color: '#1f4fd8', data: idx.map(i => real.nominal[i]), area: true },
        { name: 'Real (R$ de hoje, deflacionado por IPCA)', color: '#8a6100', data: idx.map(i => real.real[i]), dash: true },
      ],
      labels: idx.map(i => monthLabel(c.H[i].d)),
      h: 200, zero: true, alt: 'patrimônio nominal e real',
      cap: `Patrimônio total (inclui imóvel). A distância entre as duas curvas é o quanto a inflação comeu: ${_rpPct(real.inflAcum)} acumulados desde ${monthLabel(c.H[0].d)}.`,
    });
  }

  html += _rpH3('Ano a ano');
  html += _rpTable(
    `<th>Ano</th><th class="n">Patrimônio (fim)</th><th class="n">Investível</th><th class="n">Δ investível</th><th class="n">Aporte</th><th class="n">Mercado</th><th class="n">Receita/mês</th><th class="n">Gasto/mês</th><th class="n">Poupança</th>`,
    yr.map(r => `<tr>` +
      `<td class="lbl">${r.y}${r.parcial ? ` <span class="rp-dim">(${r.n}m)</span>` : ''}</td>` +
      `<td class="n">${fmt(r.pat)}</td><td class="n">${fmt(r.pl)}</td>` +
      `<td class="n ${_rpCls(r.dPl)}">${r.dPl == null ? '—' : _rpMoneyS(r.dPl)}</td>` +
      `<td class="n">${fmt(r.apo)}</td>` +
      `<td class="n ${_rpCls(r.mkt)}">${r.mkt == null ? '—' : _rpMoneyS(r.mkt)}</td>` +
      `<td class="n">${fmt(r.recAvg)}</td><td class="n">${fmt(r.gasAvg)}</td>` +
      `<td class="n">${_rpPct(r.sr)}</td></tr>`).join(''),
    null, 'rp-t-sm');
  html += `<p class="rp-note">“Mercado” é Δ investível − aporte: o que a carteira fez sozinha, sem o seu depósito. Anos parciais têm o nº de meses ao lado.</p>`;

  if (ar) {
    html += _rpH3('Bolso vs. juros');
    html += _rpKpis([
      _rpKpi('Aporte acumulado', fmt(ar.curA), `${_rpPct(ar.aPct)} do patrimônio atual`),
      _rpKpi('Rendimento acumulado', fmt(ar.curR), `${_rpPct(ar.rPct)} do patrimônio atual`, ar.curR > 0 ? 'rp-pos' : 'rp-neg'),
      _rpKpi('Nos últimos 12 meses', fmt(ar.last12A) + ' / ' + _rpK(ar.last12R), 'aporte / rendimento'),
      _rpKpi('Virada', ar.crossMonth ? monthLabel(ar.crossMonth) : 'ainda não',
        ar.crossMonth ? 'mês em que o rendimento acumulado passou o aporte acumulado' : 'o aporte acumulado ainda é maior que o rendimento acumulado'),
    ], 4);
    const stepA = Math.max(1, Math.ceil(ar.labels.length / 90));
    const idxA = ar.labels.map((_, i) => i).filter(i => i % stepA === 0 || i === ar.labels.length - 1);
    html += _rpSvgLine({
      series: [
        { name: 'Aporte acumulado', color: '#1f4fd8', data: idxA.map(i => ar.aporte[i]) },
        { name: 'Rendimento acumulado', color: '#0f7a4f', data: idxA.map(i => ar.rend[i]) },
      ],
      labels: idxA.map(i => monthLabel(ar.labels[i])),
      h: 190, zero: true, alt: 'aporte vs rendimento acumulados',
      cap: 'Por construção, as duas somadas dão o patrimônio. O cruzamento é o ponto em que o dinheiro passa a trabalhar mais que você.',
    });
  }

  if (ms.length) {
    const fast = ms.filter(m => m.gap != null).reduce((a, b) => (a && a.gap <= b.gap) ? a : b, null);
    const slow = ms.filter(m => m.gap != null).reduce((a, b) => (a && a.gap >= b.gap) ? a : b, null);
    html += _rpH3('Marcos de 100 mil — patrimônio total');
    html += _rpTable(
      `<th>Marco</th><th>Atingido em</th><th class="n">Meses desde o anterior</th>`,
      ms.slice(-12).map(m => `<tr><td class="lbl">${fmtK(m.v)}</td><td>${monthLabel(m.d)}</td><td class="n">${m.gap == null ? '—' : m.gap}</td></tr>`).join(''),
      null, 'rp-t-sm');
    if (fast && slow && fast !== slow) {
      // gap 0 = dois marcos cruzados no mesmo mês (o patrimônio saltou mais de
      // 100k de uma vez). "0 meses" lê como bug; dizer o que de fato aconteceu.
      const fastTxt = fast.gap === 0
        ? `<b>no mesmo mês</b> (${fmtK(fast.v)} — o patrimônio passou de um marco a outro de uma vez)`
        : `de <b>${fast.gap} ${fast.gap === 1 ? 'mês' : 'meses'}</b> (até ${fmtK(fast.v)})`;
      html += _rpP(`O salto mais rápido foi ${fastTxt} e o mais lento de <b>${slow.gap} meses</b> (até ${fmtK(slow.v)}). ` +
        `São ${ms.length} marcos em ${monthsBetween(c.H[0].d, c.lastD)} meses de histórico.` +
        (ms.length > 12 ? ' A tabela mostra os 12 últimos.' : ''));
    }
  }

  if (dd.pct >= 5) {
    html += _rpCall('warn', `Hoje ${_rpPct(dd.pct)} abaixo do pico`,
      `O topo foi <b>${fmt(dd.peak)}</b> em ${monthLabel(dd.peakD)}; hoje são ${fmt(dd.cur)}. Para referência, a maior queda que essa carteira já atravessou foi de <b>${_rpPct(mdd)}</b> — e ela voltou. A decisão errada em drawdown quase sempre é vender.`);
  }

  return { id: 'patrimonio', title: 'Patrimônio — trajetória', src: 'planilha (histórico)', html };
}

// ═══════ 3. RESULTADO — RENTABILIDADE ═══════
function _rpSec3(c) {
  const rs = realizedReturns();
  if (!rs.length) {
    return { id: 'resultado', title: 'Resultado — rentabilidade', src: 'planilha (histórico)',
      html: _rpEmpty('Sem série de rentabilidade: o histórico precisa de pelo menos dois meses de patrimônio líquido.') };
  }
  const mx = returnsMatrix();
  const sm = monthsSummary();
  const t12 = twr(12), c12 = cdiAnnualized(12);
  const t24 = twr(24), c24 = cdiAnnualized(24);
  const tAll = twr(), cAll = cdiAnnualized();
  const vol = portfolioVol();
  const assumed = weightedReturn();

  const best = rs.reduce((a, b) => b.r > a.r ? b : a);
  const worst = rs.reduce((a, b) => b.r < a.r ? b : a);
  // maior sequência negativa e a sequência corrente
  let cur = 0;
  for (let i = rs.length - 1; i >= 0 && rs[i].r < 0; i--) cur++;
  let maxNeg = 0, runNeg = 0;
  rs.forEach(x => { runNeg = x.r < 0 ? runNeg + 1 : 0; if (runNeg > maxNeg) maxNeg = runNeg; });

  let html = _rpKpis([
    _rpKpi('TWR 12 meses', _rpPct(t12) + ' a.a.', `CDI ${_rpPct(c12)} · alpha ${_rpPP(t12 - c12)}`, _rpCls(t12 - c12)),
    _rpKpi('TWR 24 meses', _rpPct(t24) + ' a.a.', `CDI ${_rpPct(c24)} · alpha ${_rpPP(t24 - c24)}`, _rpCls(t24 - c24)),
    _rpKpi('TWR desde o início', _rpPct(tAll) + ' a.a.', `CDI ${_rpPct(cAll)} · alpha ${_rpPP(tAll - cAll)} a.a. em ${rs.length} meses`, _rpCls(tAll - cAll)),
    _rpKpi('Realizado vs. premissa', _rpPP(t12 - assumed), `o cadastro assume ${_rpPct(assumed)} a.a. nominal; os últimos 12 meses entregaram ${_rpPct(t12)}`, _rpCls(t12 - assumed)),
    _rpKpi('Meses positivos', `${sm.rent.pos} / ${sm.rent.pos + sm.rent.neg}`, `${_rpPct(sm.rent.pos / Math.max(1, sm.rent.pos + sm.rent.neg) * 100)} dos meses fecharam no azul`),
    _rpKpi('Melhor mês', _rpPctS(best.r * 100), monthLabel(best.d), 'rp-pos'),
    _rpKpi('Pior mês', _rpPctS(worst.r * 100), monthLabel(worst.d), 'rp-neg'),
    _rpKpi('Volatilidade estimada', _rpPct(vol) + ' a.a.', 'média ponderada por classe, sem correlação — superestima o risco real'),
  ]);

  // Heatmap ano × mês
  const MN = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  html += _rpH3('Rentabilidade mês a mês');
  html += `<div class="rp-tw"><table class="rp-t rp-t-xs rp-heat">` +
    `<thead><tr><th>Ano</th>${MN.map(m => `<th class="c">${m}</th>`).join('')}<th class="n">Ano</th><th class="n">CDI</th></tr></thead><tbody>` +
    mx.years.map(y => {
      const g = mx.grid[y] || {};
      const comp = Object.values(g).reduce((p, r) => p * (1 + r), 1);
      const has = Object.keys(g).length;
      const yr = has ? (comp - 1) * 100 : null;
      const cdi = CDI_YEARLY[y] != null ? CDI_YEARLY[y] : null;
      return `<tr><td class="lbl">${y}</td>` +
        MN.map((_, i) => {
          const r = g[i];
          if (r == null) return `<td class="h z">·</td>`;
          return `<td class="h" style="${_rpHeatBg(r, mx.maxAbs)}">${(r * 100).toFixed(1).replace('.', ',')}</td>`;
        }).join('') +
        `<td class="n ${_rpCls(yr)}">${yr == null ? '—' : _rpPctS(yr)}</td>` +
        `<td class="n rp-dim">${cdi == null ? '—' : _rpPct(cdi)}</td></tr>`;
    }).join('') + `</tbody></table></div>`;
  html += `<p class="rp-note">Verde = mês positivo, vermelho = negativo; a intensidade é proporcional à magnitude. A coluna “Ano” compõe os meses do ano (não é média). ` +
    `Anos incompletos compõem só os meses existentes — não são comparáveis ao CDI cheio do ano.</p>`;

  html += _rpH3('Sequências');
  html += _rpP(`A maior sequência de meses negativos seguidos foi de <b>${maxNeg} ${maxNeg === 1 ? 'mês' : 'meses'}</b>. ` +
    (cur >= 3 ? `A carteira está <b>há ${cur} meses no vermelho</b> — o gatilho de atenção é 3. Em janela de 12 meses o TWR é ${_rpPct(t12)} contra ${_rpPct(c12)} de CDI: ${t12 >= c12 ? 'apesar da sequência, ainda está à frente do CDI' : 'está atrás do CDI, e é isso que vale acompanhar — não o mês'}.`
      : cur > 0 ? `Hoje são ${cur} ${cur === 1 ? 'mês' : 'meses'} negativos seguidos.`
      : 'O último mês fechou positivo.'));

  // Só anos de 12 meses compostos. Um ano parcial plotado como barra fica
  // indistinguível de um ano fechado ao lado, e ainda contamina a média.
  const anosT = _rpYearRows(c).filter(r => r.ret != null);
  const anos = anosT.filter(r => r.retN >= 12);
  const anosP = anosT.filter(r => r.retN < 12);
  if (anos.length >= 2) {
    html += _rpSvgBars({
      values: anos.map(r => r.ret), labels: anos.map(r => r.y),
      h: 170, color: '#1f4fd8', fmtY: v => _rpPct(v, 0),
      avg: _rpAvg(anos.map(r => r.ret)), avgLabel: 'média ' + _rpPct(_rpAvg(anos.map(r => r.ret))),
      alt: 'retorno por ano civil',
      cap: 'Retorno composto por ano civil, só de anos completos. Barras vermelhas são anos negativos; a tracejada é a média simples dos anos.' +
        (anosP.length ? ` Fora do gráfico: ${anosP.map(r => `<b>${r.y}</b> com ${_rpPctS(r.ret)} em ${r.retN} ${r.retN === 1 ? 'mês' : 'meses'}`).join(', ')} — parcial, não comparável.` : ''),
    });
  }

  html += _rpCall(t12 >= c12 ? 'pos' : 'warn', t12 >= c12 ? `Batendo o CDI em 12 meses por ${_rpPP(t12 - c12)}` : `Abaixo do CDI em 12 meses por ${_rpPP(t12 - c12)}`,
    `Em 12 meses a carteira rendeu <b>${_rpPct(t12)} a.a.</b> contra <b>${_rpPct(c12)}</b> do CDI. Desde o início são ${_rpPct(tAll)} contra ${_rpPct(cAll)} — ` +
    `alpha de ${_rpPP(tAll - cAll)} ao ano na janela de ${rs.length} meses, que é a que importa. ` +
    (rs.filter(x => x.d.slice(0, 4) === String(new Date().getFullYear())).length === 0 && !(new Date().getFullYear() in CDI_YEARLY)
      ? `<i>Atenção: a tabela CDI_YEARLY não tem o ano corrente — anos ausentes caem num fallback de 10% a.a. e distorcem o alpha.</i>` : ''));

  return { id: 'resultado', title: 'Resultado — rentabilidade', src: 'planilha (col. Rentabilidade) + CDI_YEARLY', html };
}

// ═══════ 4. APORTES ═══════
function _rpSec4(c) {
  const yr = _rpYearRows(c);
  const apos12 = c.L12.map(h => h.apo || 0);
  const apos24 = c.L24.map(h => h.apo || 0);
  const med12 = _rpMedian(apos12);
  const q = c.H.slice(-3).map(h => h.apo || 0);
  const qAvg = _rpAvg(q);
  const negs = c.L24.filter(h => (h.apo || 0) < 0);
  const bestM = c.L24.reduce((a, b) => (b.apo || 0) > (a.apo || 0) ? b : a, c.L24[0]);

  // Modelo vs realidade: a poupança que as projeções assumem existe de fato?
  const inc = _rpSum((S.incomes || []).filter(i => i.active !== false).map(i => i.amount || 0));
  const exp = _rpSum((S.expenses || []).filter(e => e.active !== false).map(e => e.amount || 0));
  const modelSav = inc - exp;
  const rReal = weightedReturnReal();
  const mMod = _monthsToTarget(c.invest, modelSav, rReal, c.fin);
  const mReal = _monthsToTarget(c.invest, c.avgApo, rReal, c.fin);
  const ratio = c.avgApo > 0 ? modelSav / c.avgApo : null;

  let html = _rpKpis([
    _rpKpi('Aporte 12 meses', fmt(c.apo12), `média de ${fmt(c.avgApo)}/mês · mediana ${fmt(med12)}`),
    _rpKpi('Aporte 24 meses', fmt(_rpSum(apos24)), `média de ${fmt(_rpAvg(apos24))}/mês`),
    _rpKpi('Último trimestre', fmt(qAvg) + '/mês', c.avgApo > 0 ? `${_rpPct(qAvg / c.avgApo * 100)} da média de 12 meses` : '—',
      c.avgApo > 0 && qAvg < c.avgApo * 0.6 ? 'rp-warn' : ''),
    _rpKpi('Maior aporte em 24m', fmt(bestM.apo || 0), monthLabel(bestM.d)),
  ], 4);

  html += _rpSvgBars({
    values: apos24, labels: c.L24.map(h => monthLabel(h.d)),
    h: 180, color: '#0f7a4f', avg: _rpAvg(apos24), avgLabel: 'média ' + fmtK(_rpAvg(apos24)),
    alt: 'aporte mensal nos últimos 24 meses',
    cap: 'Aporte mensal dos últimos 24 meses. Barras vermelhas são meses de retirada líquida — resgate, não depósito.',
  });

  html += _rpH3('Aporte por ano');
  html += _rpTable(
    `<th>Ano</th><th class="n">Aporte total</th><th class="n">Média/mês</th><th class="n">% da receita</th><th class="n">Meses de retirada</th><th class="n">Resultado de mercado</th>`,
    yr.map(r => {
      const nneg = c.H.filter(h => h.d.slice(0, 4) === r.y && (h.apo || 0) < 0).length;
      return `<tr><td class="lbl">${r.y}${r.parcial ? ` <span class="rp-dim">(${r.n}m)</span>` : ''}</td>` +
        `<td class="n">${fmt(r.apo)}</td><td class="n">${fmt(r.apoAvg)}</td>` +
        `<td class="n">${r.rec > 0 ? _rpPct(r.apo / r.rec * 100) : '—'}</td>` +
        `<td class="n ${nneg ? 'rp-neg' : 'rp-dim'}">${nneg || '—'}</td>` +
        `<td class="n ${_rpCls(r.mkt)}">${r.mkt == null ? '—' : _rpMoneyS(r.mkt)}</td></tr>`;
    }).join(''),
    `<td>Total</td><td class="n">${fmt(_rpSum(yr.map(r => r.apo)))}</td><td class="n">—</td><td class="n">—</td>` +
    `<td class="n">${c.H.filter(h => (h.apo || 0) < 0).length}</td><td class="n">—</td>`,
    'rp-t-sm');
  html += `<p class="rp-note">“% da receita” usa o aporte como está na planilha — ele inclui rendimento reinvestido, então pode passar de 100% e não é taxa de poupança. A taxa honesta está na seção 5.</p>`;

  html += _rpH3('O que as projeções assumem vs. o que acontece');
  html += _rpTable(
    `<th>Origem</th><th class="n">Aporte mensal</th><th class="n">Meses até a meta</th><th class="n">Chega em</th>`,
    `<tr><td class="lbl">Cadastro (Fluxo de Caixa)</td><td class="n">${fmt(modelSav)}</td>` +
    `<td class="n">${mMod == null ? '> 600' : mMod}</td><td class="n">${_fmtAnos(mMod)}</td></tr>` +
    `<tr><td class="lbl">Realizado (média 12m do histórico)</td><td class="n">${fmt(c.avgApo)}</td>` +
    `<td class="n">${mReal == null ? '> 600' : mReal}</td><td class="n">${_fmtAnos(mReal)}</td></tr>`,
    null, 'rp-t-sm');
  html += _rpP(`O cadastro assume receita de ${fmt(inc)} menos gasto de ${fmt(exp)} = <b>${fmt(modelSav)}/mês</b> de poupança, e é esse número que alimenta a data da FI, os cenários e o Monte Carlo. ` +
    `O histórico mostra <b>${fmt(c.avgApo)}/mês</b> de aporte real nos últimos 12 meses` +
    (ratio == null ? '.' : ratio > 1.2 ? ` — o modelo é <b>${_rpX(ratio, 1)} mais otimista</b> que a realidade, e a data projetada assume uma disciplina que não está acontecendo. Vale corrigir o cadastro ou o hábito.`
      : ratio < 0.8 ? ` — o modelo é <b>conservador</b>: você aporta mais do que ele supõe, então a data real tende a ser melhor que a exibida. Vale atualizar o cadastro.`
      : ' — as duas fontes concordam dentro de 20%, o que é o que se espera de um plano calibrado.'));

  if (negs.length) {
    html += _rpCall('warn', `${negs.length} ${negs.length === 1 ? 'mês' : 'meses'} de retirada líquida em 24 meses`,
      `${negs.map(h => `${monthLabel(h.d)} (${_rpMoneyS(h.apo)})`).join(', ')}. Retirada não é necessariamente erro — mas entra no cálculo do aporte médio e puxa a projeção para baixo.`);
  }
  if (c.avgApo > 0 && qAvg < c.avgApo * 0.6) {
    html += _rpCall('warn', 'O último trimestre aportou menos de 60% da média anual',
      `${fmt(qAvg)}/mês contra ${fmt(c.avgApo)}/mês de média em 12 meses. Parte disso pode ser sazonal — bônus concentrados em poucos meses fazem a média subir e o trimestre “normal” parecer fraco. Vale olhar junto com a tendência de receita na seção 5.`);
  }

  return { id: 'aportes', title: 'Aportes', src: 'planilha (col. Aporte) + cadastro', html };
}

// ═══════ 5. FLUXO DE CAIXA ═══════
function _rpSec5(c) {
  const sr12 = c.rec12 > 0 ? (c.rec12 - c.gas12) / c.rec12 * 100 : null;
  const outs = c.L24.filter(c.isOutlier);
  const rec24 = _rpSum(c.L24.map(h => h.rec));
  const outShare = rec24 > 0 ? _rpSum(outs.map(h => h.rec)) / rec24 * 100 : 0;
  const norm = c.L12.filter(h => !c.isOutlier(h));
  const recN = _rpSum(norm.map(h => h.rec)), gasN = _rpSum(norm.map(h => h.gas));
  const srN = recN > 0 ? (recN - gasN) / recN * 100 : null;
  const infP = inflacaoPessoal();
  const lc = lifestyleCreepData();

  // Tendência de receita: média dos 3 últimos vs os 9 anteriores, ex-atípicos
  const l3 = c.H.slice(-3).filter(h => !c.isOutlier(h));
  const p9 = c.H.slice(-12, -3).filter(h => !c.isOutlier(h));
  const a3 = _rpAvg(l3.map(h => h.rec)), a9 = _rpAvg(p9.map(h => h.rec));
  const trend = a9 > 0 ? (a3 / a9 - 1) * 100 : null;

  let html = _rpKpis([
    _rpKpi('Receita média 12m', fmt(c.avgRec), `${fmt(c.rec12)} no ano · mediana de 24m em ${fmt(c.recMed24)}/mês`),
    _rpKpi('Gasto médio 12m', fmt(c.avgGas), `${fmt(c.gas12)} no ano`),
    _rpKpi('Taxa de poupança 12m', _rpPct(sr12), srN != null ? `${_rpPct(srN)} excluindo meses atípicos de receita` : '—',
      sr12 == null ? '' : sr12 >= 40 ? 'rp-pos' : sr12 >= 20 ? 'rp-warn' : 'rp-neg'),
    _rpKpi('Inflação pessoal', infP ? _rpPct(infP.pct) + ' a.a.' : '—',
      infP ? `IPCA das premissas: ${_rpPct(c.ipca)} · ${_rpEsc(infP.src)}` : 'precisa de 24 meses de histórico',
      infP ? (infP.pct > c.ipca + 2 ? 'rp-neg' : infP.pct > c.ipca ? 'rp-warn' : 'rp-pos') : ''),
  ], 4);

  html += _rpH3('Últimos 12 meses, mês a mês');
  html += _rpTable(
    `<th>Mês</th><th class="n">Receita</th><th class="n">Gasto</th><th class="n">Sobra</th><th class="n">Taxa de poupança</th><th class="n">Aporte</th><th class="n">Investível</th><th class="c">Atípico</th>`,
    c.L12.map(h => {
      const sob = h.rec - h.gas;
      const sr = savingsRateOf(h);
      return `<tr><td class="lbl">${monthLabel(h.d)}</td>` +
        `<td class="n">${fmt(h.rec)}</td><td class="n">${fmt(h.gas)}</td>` +
        `<td class="n ${_rpCls(sob)}">${_rpMoneyS(sob)}</td>` +
        `<td class="n">${_rpBar(sr, sr >= 40 ? 'pos' : sr >= 20 ? 'warn' : 'neg')} ${_rpPct(sr)}</td>` +
        `<td class="n">${fmt(h.apo || 0)}</td><td class="n">${fmt(h.pl || 0)}</td>` +
        `<td class="c">${c.isOutlier(h) ? '●' : ''}</td></tr>`;
    }).join(''),
    `<td>12 meses</td><td class="n">${fmt(c.rec12)}</td><td class="n">${fmt(c.gas12)}</td>` +
    `<td class="n ${_rpCls(c.rec12 - c.gas12)}">${_rpMoneyS(c.rec12 - c.gas12)}</td>` +
    `<td class="n">${_rpPct(sr12)}</td><td class="n">${fmt(c.apo12)}</td><td class="n">—</td><td class="c">${outs.filter(h => c.L12.includes(h)).length}</td>`,
    'rp-t-sm');
  html += `<p class="rp-note">Taxa de poupança = (receita − gasto) ÷ receita, preferindo a coluna da planilha quando ela existe. “Atípico” marca mês com receita acima de 1,8× a mediana de 24 meses — bônus, 13º, venda de ativo.</p>`;

  html += _rpSvgLine({
    series: [
      { name: 'Receita', color: '#1f4fd8', data: c.L24.map(h => h.rec) },
      { name: 'Gasto', color: '#b3261e', data: c.L24.map(h => h.gas), area: true },
    ],
    labels: c.L24.map(h => monthLabel(h.d)), h: 185, zero: true,
    alt: 'receita e gasto nos últimos 24 meses',
    cap: 'A área entre as curvas é a sobra do mês. Os picos de receita são os meses atípicos.',
  });

  if (trend != null) {
    html += _rpH3('Tendência de receita recorrente');
    html += _rpP(`Média dos 3 últimos meses (excluindo atípicos): <b>${fmt(a3)}/mês</b> contra <b>${fmt(a9)}/mês</b> nos 9 meses anteriores — ` +
      `<b class="${_rpCls(trend)}">${_rpPctS(trend)}</b>. ` +
      (trend <= -10 ? 'Queda de dois dígitos na receita recorrente é a linha mais importante a atacar: ela é o numerador da poupança e o denominador de tudo mais.'
        : trend >= 10 ? 'Alta de dois dígitos na receita recorrente — se o gasto não acompanhar, a taxa de poupança sobe sozinha.'
        : 'Variação dentro de ±10% é ruído, não tendência.'));
  }

  if (infP) {
    const eq = S.fi.targetMonthlyIncome * Math.pow(1 + (infP.pct - c.ipca) / 100, 5);
    html += _rpH3('Inflação pessoal vs. IPCA');
    html += _rpP(`O gasto recorrente médio subiu <b>${_rpPct(infP.pct)}</b> nos últimos 12 meses contra os 12 anteriores ` +
      `(${fmt(infP.avgPrev12)}/mês → ${fmt(infP.avgLast12)}/mês). Fonte: ${_rpEsc(infP.src)}. ` +
      `O IPCA das premissas é ${_rpPct(c.ipca)}.` +
      (infP.pct > c.ipca + 2
        ? ` São <b>${_rpPP(infP.pct - c.ipca)} de creep real</b>: mantido esse ritmo por 5 anos, a renda-alvo de ${fmt(S.fi.targetMonthlyIncome)}/mês equivale a <b>${fmt(eq)}/mês</b> de hoje. As projeções assumem gasto constante em termos reais — se o padrão de vida sobe, a meta de hoje não compra o padrão de amanhã.`
        : infP.pct > c.ipca ? ' O gasto sobe um pouco acima da inflação, mas dentro do ruído.'
        : ' O gasto sobe abaixo da inflação: em termos reais, o padrão de vida está estável ou caindo.'));
  }

  if (lc && lc.rows.length >= 2) {
    html += _rpH3('Receita e gasto por ano');
    html += _rpTable(
      `<th>Ano</th><th class="n">Receita/mês</th><th class="n">Gasto/mês</th><th class="n">Taxa de poupança</th>`,
      lc.rows.map(r => `<tr><td class="lbl">${r.y}${r.parcial ? ' <span class="rp-dim">(parcial)</span>' : ''}</td>` +
        `<td class="n">${fmt(r.rec)}</td><td class="n">${fmt(r.gas)}</td>` +
        `<td class="n">${_rpBar(r.sr, r.sr >= 40 ? 'pos' : r.sr >= 20 ? 'warn' : 'neg')} ${_rpPct(r.sr)}</td></tr>`).join(''),
      null, 'rp-t-sm');
    html += _rpP(`De ${lc.first.y} a ${lc.last.y} a receita multiplicou por <b>${_rpX(lc.recMult)}</b> e o gasto por <b>${_rpX(lc.gasMult)}</b>. ` +
      (lc.gasMult < lc.recMult ? 'A receita cresceu mais rápido que o gasto — é assim que a taxa de poupança sobe.' : 'O gasto cresceu mais rápido que a receita — é a definição de lifestyle creep.'));
  }

  if (outs.length >= 2 && outShare >= 20) {
    html += _rpCall('warn', `${outs.length} meses atípicos concentram ${_rpPct(outShare)} da receita de 2 anos`,
      `${outs.map(h => `${monthLabel(h.d)} (${fmt(h.rec)})`).join(', ')}. Bônus e eventos pontuais bancam os aportes gordos — o plano funciona <i>se</i> eles continuarem. ` +
      `Excluindo esses meses, a taxa de poupança de 12 meses é ${_rpPct(srN)} em vez de ${_rpPct(sr12)}.`);
  }

  return { id: 'fluxo', title: 'Fluxo de caixa', src: 'planilha (histórico) + cadastro', html };
}


// ═══════ 6. GASTOS CATEGORIZADOS ═══════
// Espelha a Análise de Gastos, mas ancorada no último mês COM DADO do Mobills
// (a tela ancora no mês do calendário, e num relatório de mês fechado isso
// mistura dois meses diferentes na mesma página).
function _rpSec6(c) {
  const mb = c.mb;
  const SRC = 'Mobills (via sync)';
  if (!mb.ok) {
    return { id: 'gastos', title: 'Gastos categorizados', src: SRC,
      html: _rpEmpty('<b>Sem dados de Mobills.</b> Esta seção depende dos lançamentos individuais que vêm no Sync Sheets. ' +
        'Sincronize a planilha (↻ Sync Sheets) e gere o relatório de novo — o resto do relatório não depende disso, ' +
        'porque gasto agregado por mês vem da coluna Gasto do histórico.') };
  }

  const ref = mb.lastD;
  const w1 = [ref], w3 = mb.win(3), w6 = mb.win(6), w12 = mb.win(12);
  const yoyM = addMonths(ref, -12);
  const tot12 = mb.totIn(w12);
  const tot1 = mb.byMonth[ref] || 0;
  const nMonths = mb.months.length;
  const nNat = Object.keys(mb.byNat).length;
  const secs = mb.secOrder;

  // Orçamento: reusa a mesma resolução da tela (manual > automático dos 3 últimos meses)
  const eb = getEffectiveBudgets(mb.bySecMonth, secs, mb.months);
  const budgets = eb.budgets || {};
  // Object.values, nao secs: a tela soma TODAS as chaves do orcamento, inclusive
  // secoes orcadas que nao tiveram lancamento nenhum. Somar so as presentes daria
  // um 'Uso' inflado que nao bate com a Analise de Gastos.
  const totalBudget = _rpSum(Object.values(budgets));

  let html = '';

  html += _rpKpis([
    _rpKpi('Gasto em 12 meses', fmt(tot12), `média de ${fmt(tot12 / Math.max(1, w12.filter(m => mb.byMonth[m]).length))}/mês nos ${w12.filter(m => mb.byMonth[m]).length} meses com lançamento`),
    _rpKpi('Mês de referência', monthLabel(ref), `${fmt(tot1)} · último mês com lançamento no Mobills`),
    _rpKpi('Cobertura', `${nMonths} ${nMonths === 1 ? 'mês' : 'meses'}`, `${_rpN(mb.rows.length)} lançamentos de ${monthLabel(mb.months[0])} a ${monthLabel(ref)}`),
    _rpKpi('Granularidade', `${secs.length} seções`, `${nNat} categorias distintas${mb.natSec ? '' : ''}`),
  ], 4);

  // Avisos de escopo — o que está fora da conta e por quê
  const excl = S.expenseExclude || [];
  const nExcl = (mb.raw.length || 0) - mb.rows.length;
  if (excl.length || nExcl > 0) {
    html += _rpCall('', 'O que está fora desta conta',
      (excl.length ? `Termos ignorados nos gastos: <b>${excl.map(_rpEsc).join('</b>, <b>')}</b>. ` : '') +
      (nExcl > 0 ? `São <b>${_rpN(nExcl)} lançamentos</b> excluídos de ${_rpN(mb.raw.length)} brutos — financiamento, transferências e afins que não são consumo. ` : '') +
      `A seção Método de Pagamento usa o total bruto de propósito, então o total dela não bate com o desta.`);
  }

  // ── Por seção ─────────────────────────────────────────
  html += _rpH3('Por seção');
  // Os 6 meses ANTERIORES ao de referência. A janela não pode conter o próprio
  // mês julgado: com ele dentro, um mês que dobrou aparece como +71% em vez de
  // +100%, e o gatilho de alerta de 1,4× vira 1,52× na prática.
  const wPrev6 = mb.win(7).slice(0, 6);
  const secRows = secs.map(s => {
    const m1 = mb.bySecMonth[s + '|' + ref] || 0;
    const a3 = mb.secIn(s, w3) / 3;
    const prevMs = wPrev6.filter(m => (mb.bySecMonth[s + '|' + m] || 0) > 0);
    const a6 = prevMs.length ? mb.secIn(s, prevMs) / prevMs.length : 0;
    const t12 = mb.secIn(s, w12), a12 = t12 / 12;
    const yoy = mb.bySecMonth[s + '|' + yoyM] || 0;
    return {
      s, m1, a3, a6, a12, t12,
      share: tot12 > 0 ? t12 / tot12 * 100 : 0,
      dAvg6: a6 > 0 ? (m1 / a6 - 1) * 100 : null,
      dYoy: yoy > 0 ? (m1 / yoy - 1) * 100 : null,
      bud: budgets[s] || null,
      use: budgets[s] > 0 ? m1 / budgets[s] * 100 : null,
    };
  });
  const maxShare = Math.max(...secRows.map(r => r.share), 1);
  html += _rpTable(
    `<th>Seção</th><th class="n">${monthLabel(ref)}</th><th class="n">Média 3m</th><th class="n">Média 6m ant.</th><th class="n">Média 12m</th>` +
    `<th class="n">Total 12m</th><th class="n">% do total</th><th class="n">vs. 6m ant.</th><th class="n">vs. ${monthLabel(yoyM)}</th>` +
    `<th class="n">Orçamento</th><th class="n">Uso</th>`,
    secRows.map(r => `<tr>` +
      `<td class="lbl">${_rpEsc(r.s)}</td>` +
      `<td class="n">${fmt(r.m1)}</td><td class="n">${fmt(r.a3)}</td><td class="n">${fmt(r.a6)}</td><td class="n">${fmt(r.a12)}</td>` +
      `<td class="n">${fmt(r.t12)}</td>` +
      `<td class="n">${_rpBar(r.share / maxShare * 100)} ${_rpPct(r.share)}</td>` +
      `<td class="n ${_rpCls(r.dAvg6, true)}">${r.dAvg6 == null ? '—' : _rpPctS(r.dAvg6, 0)}</td>` +
      `<td class="n ${_rpCls(r.dYoy, true)}">${r.dYoy == null ? '—' : _rpPctS(r.dYoy, 0)}</td>` +
      `<td class="n rp-dim">${r.bud ? fmt(r.bud) : '—'}</td>` +
      `<td class="n">${r.use == null ? '—' : `${_rpBar(r.use, r.use > 100 ? 'neg' : r.use > 85 ? 'warn' : 'pos')} ${_rpPct(r.use, 0)}`}</td>` +
      `</tr>`).join(''),
    `<td>Total</td><td class="n">${fmt(tot1)}</td><td class="n">${fmt(mb.totIn(w3) / 3)}</td><td class="n">${fmt(mb.totIn(w6) / 6)}</td>` +
    `<td class="n">${fmt(tot12 / 12)}</td><td class="n">${fmt(tot12)}</td><td class="n">100,0%</td><td class="n">—</td><td class="n">—</td>` +
    `<td class="n">${totalBudget ? fmt(totalBudget) : '—'}</td>` +
    `<td class="n">${totalBudget ? _rpPct(tot1 / totalBudget * 100, 0) : '—'}</td>`,
    'rp-t-sm');
  html += `<p class="rp-note">Variações em verde são queda de gasto (bom), em vermelho alta. ` +
    `“Média 6m ant.” e “vs. 6m ant.” usam os <b>6 meses anteriores</b> a ${monthLabel(ref)}, dividindo pelos meses com lançamento — o mês julgado fica fora da própria base. ` +
    `(A tela usa os 5 anteriores e chama de “média 6m”; daí a pequena diferença.) ` +
    (eb.isAuto ? `O orçamento é <b>automático</b> — média dos 3 últimos meses com dado, arredondada a R$ 50. Defina o seu na Análise de Gastos → Orçamento para trocar a régua.`
      : `Orçamento definido manualmente na Análise de Gastos; o total inclui seções orçadas sem lançamento no mês.`) + `</p>`;

  // ── Matriz seção × mês ────────────────────────────────
  html += _rpH3(`Seção × mês — últimos ${w12.length} meses`);
  // Normaliza por LINHA: a cor responde ao mês fora da curva DAQUELA seção.
  // Global não serve — uma seção grande apaga a variação de todas as outras.
  const rowMax = {};
  secs.forEach(s => { rowMax[s] = Math.max(...w12.map(m => mb.bySecMonth[s + '|' + m] || 0), 1); });
  const totMax = Math.max(...w12.map(m => mb.byMonth[m] || 0), 1);
  html += `<div class="rp-tw"><table class="rp-t rp-t-xs rp-heat">` +
    `<thead><tr><th>Seção</th>${w12.map(m => `<th class="c">${monthLabel(m)}</th>`).join('')}<th class="n">Total</th></tr></thead><tbody>` +
    secRows.map(r => `<tr><td class="lbl">${_rpEsc(r.s)}</td>` +
      w12.map(m => {
        const v = mb.bySecMonth[r.s + '|' + m] || 0;
        if (!v) return `<td class="h z">·</td>`;
        return `<td class="h" style="${_rpHeatBg(-v / rowMax[r.s], 1)}">${_rpN(Math.round(v / 100) / 10, 1)}</td>`;
      }).join('') +
      `<td class="n">${fmt(r.t12)}</td></tr>`).join('') +
    `<tr class="grp"><td>Total</td>${w12.map(m => `<td class="h" style="${_rpHeatBg(-(mb.byMonth[m] || 0) / totMax, 1)}">${_rpN(Math.round((mb.byMonth[m] || 0) / 100) / 10, 1)}</td>`).join('')}` +
    `<td class="n">${fmt(tot12)}</td></tr>` +
    `</tbody></table></div>`;
  html += `<p class="rp-note">Valores em <b>milhares de reais</b> (3,2 = R$ 3.200). A intensidade do vermelho é relativa ao <b>maior mês daquela própria linha</b> — serve para achar o mês fora da curva de cada seção, não para comparar seções entre si (para isso, a coluna Total).</p>`;

  html += _rpSvgBars({
    values: mb.win(Math.min(24, nMonths)).map(m => mb.byMonth[m] || 0),
    labels: mb.win(Math.min(24, nMonths)).map(m => monthLabel(m)),
    h: 175, color: '#b3261e', avg: tot12 / 12, avgLabel: 'média 12m ' + fmtK(tot12 / 12),
    alt: 'gasto total por mês',
    cap: 'Gasto total por mês (já sem os termos ignorados). A tracejada é a média dos últimos 12 meses.',
  });

  // ── Categorias individuais ────────────────────────────
  html += _rpH3('Categorias — as 25 maiores em 12 meses');
  const natRows = Object.keys(mb.byNat)
    .map(nat => ({
      nat, sec: mb.natSec[nat] || 'Outros',
      t12: mb.natIn(nat, w12),
      m1: mb.byNatMonth[nat + '|' + ref] || 0,
      n: mb.natCount[nat] || 0,
      last: mb.natLast[nat],
    }))
    .filter(r => r.t12 > 0)
    .sort((a, b) => b.t12 - a.t12);
  const top = natRows.slice(0, 25);
  const maxNat = Math.max(...top.map(r => r.t12), 1);
  html += _rpTable(
    `<th>Categoria</th><th>Seção</th><th class="n">Total 12m</th><th class="n">% do total</th><th class="n">Média/mês</th>` +
    `<th class="n">${monthLabel(ref)}</th><th class="n">Lançamentos</th><th class="n">Último</th>`,
    top.map(r => `<tr><td class="lbl">${_rpEsc(r.nat)}</td><td class="rp-dim">${_rpEsc(r.sec)}</td>` +
      `<td class="n">${_rpBar(r.t12 / maxNat * 100)} ${fmt(r.t12)}</td>` +
      `<td class="n">${_rpPct(tot12 > 0 ? r.t12 / tot12 * 100 : 0)}</td>` +
      `<td class="n">${fmt(r.t12 / 12)}</td><td class="n">${fmt(r.m1)}</td>` +
      `<td class="n rp-dim">${r.n}</td><td class="n rp-dim">${monthLabel(r.last)}</td></tr>`).join(''),
    null, 'rp-t-sm');
  if (natRows.length > 25) {
    const rest = _rpSum(natRows.slice(25).map(r => r.t12));
    html += _rpP(`As 25 acima somam <b>${fmt(_rpSum(top.map(r => r.t12)))}</b> (${_rpPct(tot12 > 0 ? _rpSum(top.map(r => r.t12)) / tot12 * 100 : 0)} do total de 12 meses). ` +
      `As outras <b>${natRows.length - 25}</b> categorias somam ${fmt(rest)}.`);
  }

  // ── Fixo vs variável ──────────────────────────────────
  html += _rpH3('Fixo vs. variável');
  if (mb.hasFix) {
    let fixo = 0, vari = 0;
    const fixNat = {}, varNat = {};
    mb.rows.filter(r => w12.includes(r.d)).forEach(r => {
      const v = Math.abs(r.val || 0);
      if (r.fix) { fixo += v; fixNat[r.cat] = (fixNat[r.cat] || 0) + v; }
      else { vari += v; varNat[r.cat] = (varNat[r.cat] || 0) + v; }
    });
    const n = w12.length || 1;
    const fAvg = fixo / n, vAvg = vari / n;
    const pctFixo = (fixo + vari) > 0 ? fixo / (fixo + vari) * 100 : 0;
    const leanFI = c.fiR > 0 ? (fAvg * 12) / (c.fiR / 100) : null;
    const leanPct = leanFI > 0 ? c.invest / leanFI * 100 : null;
    html += _rpKpis([
      _rpKpi('Gasto fixo', fmt(fAvg) + '/mês', `${_rpPct(pctFixo)} do gasto total — recorrente, não some se você parar de trabalhar`),
      _rpKpi('Gasto variável', fmt(vAvg) + '/mês', `${_rpPct(100 - pctFixo)} do total — a parte compressível`),
      _rpKpi('Lean FI', leanFI == null ? '—' : fmt(leanFI), `patrimônio que banca só os fixos a ${_rpPct(c.fiR)}`),
      _rpKpi('Lean FI coberto', leanPct == null ? '—' : _rpPct(leanPct), leanPct >= 100 ? 'atingido — os fixos já estão pagos pela carteira' : `faltam ${fmt(Math.max(0, leanFI - c.invest))}`,
        leanPct >= 100 ? 'rp-pos' : ''),
    ], 4);
    const topFix = Object.entries(fixNat).sort((a, b) => b[1] - a[1]).slice(0, 8);
    const topVar = Object.entries(varNat).sort((a, b) => b[1] - a[1]).slice(0, 8);
    html += _rpTable(
      `<th>Maiores fixos (12m)</th><th class="n">Total</th><th class="n">/mês</th><th>Maiores variáveis (12m)</th><th class="n">Total</th><th class="n">/mês</th>`,
      Array.from({ length: Math.max(topFix.length, topVar.length) }, (_, i) => {
        const f = topFix[i], v = topVar[i];
        return `<tr><td class="lbl">${f ? _rpEsc(f[0]) : ''}</td><td class="n">${f ? fmt(f[1]) : ''}</td><td class="n">${f ? fmt(f[1] / n) : ''}</td>` +
          `<td class="lbl">${v ? _rpEsc(v[0]) : ''}</td><td class="n">${v ? fmt(v[1]) : ''}</td><td class="n">${v ? fmt(v[1] / n) : ''}</td></tr>`;
      }).join(''),
      null, 'rp-t-sm');
    html += `<p class="rp-note">Classificação pela flag <b>Recorrente</b> do Mobills, não por heurística. Médias dividem por ${n} meses da janela — mês sem lançamento dilui.</p>`;
  } else {
    html += _rpEmpty('A coluna <b>Recorrente</b> não está vindo no sync, então não há como separar fixo de variável (nem calcular o Lean FI). ' +
      'Re-cole o <code>sheets-sync.gs</code> na planilha e re-implante o Apps Script.');
  }

  // ── Método de pagamento ───────────────────────────────
  html += _rpH3('Método de pagamento');
  const byMet = {}, cntMet = {};
  (mb.raw || []).forEach(r => {
    const k = r.met || 'Não informado';
    byMet[k] = (byMet[k] || 0) + Math.abs(r.val || 0);
    cntMet[k] = (cntMet[k] || 0) + 1;
  });
  const mets = Object.entries(byMet).sort((a, b) => b[1] - a[1]);
  if (mets.length) {
    const totMet = _rpSum(mets.map(m => m[1]));
    html += _rpTable(
      `<th>Método</th><th class="n">Total (bruto)</th><th class="n">% do total</th><th class="n">Lançamentos</th><th class="n">Ticket médio</th>`,
      mets.map(([k, v]) => `<tr><td class="lbl">${_rpEsc(k)}</td>` +
        `<td class="n">${_rpBar(totMet > 0 ? v / mets[0][1] * 100 : 0)} ${fmt(v)}</td>` +
        `<td class="n">${_rpPct(totMet > 0 ? v / totMet * 100 : 0)}</td>` +
        `<td class="n rp-dim">${cntMet[k]}</td><td class="n">${fmt(v / cntMet[k], 2)}</td></tr>`).join(''),
      `<td>Total</td><td class="n">${fmt(totMet)}</td><td class="n">100,0%</td><td class="n">${_rpN(mb.raw.length)}</td><td class="n">${fmt(totMet / Math.max(1, mb.raw.length), 2)}</td>`,
      'rp-t-sm');
    html += `<p class="rp-note">Base bruta (${_rpN(mb.raw.length)} lançamentos, <b>inclui</b> os termos ignorados) e histórico inteiro, não 12 meses — é como a tela faz. Por isso o total aqui é maior que o de gasto.</p>`;
  } else {
    html += _rpEmpty('Nenhum lançamento com método de pagamento informado.');
  }

  // ── Alertas por seção (recalculados na âncora certa) ──
  const alerts = [];
  secRows.forEach(r => {
    if (r.a6 > 0 && r.m1 > r.a6 * 1.4) {
      alerts.push({ k: 'neg', t: `${r.s} estourou em ${monthLabel(ref)}`,
        b: `<b>${fmt(r.m1)}</b> contra média de ${fmt(r.a6)} nos 6 meses anteriores — <b>${_rpPctS(r.dAvg6, 0)}</b>.` });
    }
    const v3 = w3.map(m => mb.bySecMonth[r.s + '|' + m] || 0);
    if (v3.every(v => v > 0)) {
      const up = v3[2] > v3[1] && v3[1] > v3[0];
      const dn = v3[2] < v3[1] && v3[1] < v3[0];
      const ch = (v3[2] / v3[0] - 1) * 100;
      if (up && ch > 15) alerts.push({ k: 'warn', t: `${r.s} sobe há 3 meses seguidos`, b: `${_rpPctS(ch, 0)} no período (${fmt(v3[0])} → ${fmt(v3[2])}).` });
      if (dn && ch < -15) alerts.push({ k: 'pos', t: `${r.s} cai há 3 meses seguidos`, b: `${_rpPctS(ch, 0)} no período (${fmt(v3[0])} → ${fmt(v3[2])}).` });
    }
  });
  const prevM = addMonths(ref, -1);
  const pv = mb.byMonth[prevM] || 0;
  if (pv > 0 && tot1 > pv * 1.2) {
    alerts.unshift({ k: 'neg', t: `Gasto total subiu ${_rpPctS((tot1 / pv - 1) * 100, 0)} no mês`, b: `${fmt(pv)} em ${monthLabel(prevM)} → <b>${fmt(tot1)}</b> em ${monthLabel(ref)}.` });
  }
  if (alerts.length) {
    html += _rpH3('Movimentos que pedem olhar');
    html += alerts.slice(0, 10).map(a => _rpCall(a.k, _rpEsc(a.t), a.b)).join('');
    if (alerts.length > 10) html += _rpP(`<span class="rp-dim">e outros ${alerts.length - 10} movimentos menores.</span>`);
  }

  // ── Mobills × planilha ────────────────────────────────
  const histRef = c.H.find(h => h.d === ref);
  if (histRef) {
    const diff = histRef.gas > 0 ? Math.abs(tot1 - histRef.gas) / histRef.gas * 100 : null;
    const divs = window._mobillsDivergences;
    const nDiv = Array.isArray(divs) ? divs.length : null;
    html += _rpH3('Mobills × planilha');
    html += _rpP(`Em ${monthLabel(ref)} o Mobills soma <b>${fmt(tot1)}</b> e a coluna Gasto da planilha marca <b>${fmt(histRef.gas)}</b>` +
      (diff == null ? '.' : ` — ${_rpPct(diff)} de diferença.`) +
      (diff != null && diff > 15 ? ` Acima de 15% alguma das duas fontes está errada: lançamento faltando, duplicado, ou um termo que deveria estar na lista de ignorados.` : ' Dentro do esperado.') +
      (nDiv ? ` O validador do sync aponta <b>${nDiv} ${nDiv === 1 ? 'mês' : 'meses'}</b> fechado(s) com divergência acima de 15%.` :
        nDiv === 0 ? ' O validador do sync não encontrou nenhum mês fechado divergente.' : ''));
    if (Array.isArray(divs) && divs.length) {
      html += _rpTable(`<th>Mês</th><th class="n">Planilha</th><th class="n">Mobills</th><th class="n">Diferença</th>`,
        divs.slice().sort((a, b) => b.diff - a.diff).slice(0, 8)
          .map(d => `<tr><td class="lbl">${monthLabel(d.d)}</td><td class="n">${fmt(d.hist)}</td><td class="n">${fmt(d.mobills)}</td>` +
            `<td class="n rp-neg">${_rpPct(d.diff)}</td></tr>`).join(''),
        null, 'rp-t-sm');
    }
  }

  return { id: 'gastos', title: 'Gastos categorizados', src: SRC, html };
}


// Rótulos legíveis por classe de ativo (mesma tabela do simulador de estresse)
const _RP_CAT_LBL = {
  rf: 'Renda fixa', rv: 'Renda variável', fii: 'Fundos imobiliários', intl: 'Internacional',
  cash: 'Caixa', prev: 'Previdência', imovel: 'Imóvel', outro: 'Outros',
};

// ═══════ 7. CARTEIRA — COMPOSIÇÃO E BALANCEAMENTO ═══════
function _rpSec7(c) {
  const P = c.port;
  if (!P.rows.length || P.total <= 0) {
    return { id: 'carteira', title: 'Carteira — composição e balanceamento', src: 'cadastro (Patrimônio)',
      html: _rpEmpty('Nenhum ativo cadastrado na aba Patrimônio.') };
  }
  const total = P.total;
  const band = P.band;
  const bandHalf = t => Math.min(band.abs, t * band.rel / 100);   // regra 5/25, igual à da tela
  const tgtTotal = _rpSum(Object.values(P.target));
  const hasTgt = tgtTotal > 0;

  const an = P.rows.map(a => {
    const realPct = a.value / total * 100;
    const tPct = P.target[a.id] || 0;
    const delta = realPct - tPct;
    const half = bandHalf(tPct);
    return {
      a, realPct, tPct, delta, half,
      out: hasTgt && Math.abs(delta) > half + 1e-9,
      tVal: total * tPct / 100,
      trade: total * tPct / 100 - a.value,
      rel: tPct > 0 ? delta / tPct * 100 : null,
    };
  });
  const outN = an.filter(x => x.out).length;
  const turnover = _rpSum(an.filter(x => x.trade > 0).map(x => x.trade));

  // Por classe
  const byCat = {};
  P.rows.forEach(a => { byCat[a.cat] = (byCat[a.cat] || 0) + a.value; });
  const catRows = Object.entries(byCat).sort((x, y) => y[1] - x[1]);
  const rvShare = _rpSum(['rv', 'fii', 'intl'].map(k => byCat[k] || 0)) / total * 100;
  const jurosShare = _rpSum(['rf', 'cash'].map(k => byCat[k] || 0)) / total * 100;

  // Concentração idiossincrática: exclui cestas diversificadas e o que está fora do investível
  const idio = P.rows.filter(a => !['rf', 'cash', 'imovel'].includes(a.cat)).sort((x, y) => y.value - x.value);
  const top1 = idio[0];
  const top3 = _rpSum(idio.slice(0, 3).map(a => a.value));

  const wNom = weightedReturn(), wReal = weightedReturnReal(), vol = portfolioVol();

  let html = _rpKpis([
    _rpKpi('Carteira cadastrada', fmt(total), `${P.rows.length} ativos · investível ${fmt(c.invest)}`),
    _rpKpi('Retorno esperado', _rpPct(wNom) + ' a.a.', `${_rpPct(wReal)} real (descontado IPCA de ${_rpPct(c.ipca)}) — é essa taxa que roda nas projeções`),
    _rpKpi('Volatilidade estimada', _rpPct(vol) + ' a.a.', 'ponderada por classe, sem correlação'),
    _rpKpi('Fora da banda', hasTgt ? `${outN} de ${P.rows.length}` : '—',
      hasTgt ? `regra ${_rpN(band.abs)}/${_rpN(band.rel)} · giro de ${fmt(turnover)} para zerar` : 'sem alocação alvo definida',
      outN ? 'rp-warn' : 'rp-pos'),
  ], 4);

  html += _rpH3('Posição por ativo');
  html += _rpTable(
    `<th>Ativo</th><th>Classe</th><th class="n">Valor</th><th class="n">% atual</th><th class="n">% alvo</th>` +
    `<th class="n">Desvio</th><th class="n">Desvio rel.</th><th class="n">Banda</th><th class="c">Status</th><th class="n">Retorno</th>`,
    an.slice().sort((x, y) => y.a.value - x.a.value).map(x => `<tr>` +
      `<td class="lbl">${_rpEsc(x.a.name)}</td>` +
      `<td class="rp-dim">${_rpEsc(_RP_CAT_LBL[x.a.cat] || x.a.cat)}</td>` +
      `<td class="n">${fmt(x.a.value)}</td>` +
      `<td class="n">${_rpBar(x.realPct)} ${_rpPct(x.realPct)}</td>` +
      `<td class="n rp-dim">${hasTgt ? _rpPct(x.tPct) : '—'}</td>` +
      `<td class="n ${x.out ? (x.delta > 0 ? 'rp-neg' : 'rp-warn') : 'rp-dim'}">${hasTgt ? _rpPP(x.delta) : '—'}</td>` +
      `<td class="n rp-dim">${x.rel == null ? '—' : _rpPctS(x.rel, 0)}</td>` +
      `<td class="n rp-dim">${hasTgt ? `±${_rpPct(x.half)}` : '—'}</td>` +
      `<td class="c">${!hasTgt ? '—' : x.out ? '<b class="rp-neg">fora</b>' : '<span class="rp-pos">dentro</span>'}</td>` +
      `<td class="n rp-dim">${_rpPct(x.a.ret || 0)}</td></tr>`).join(''),
    `<td>Total</td><td></td><td class="n">${fmt(total)}</td><td class="n">100,0%</td>` +
    `<td class="n">${hasTgt ? _rpPct(tgtTotal) : '—'}</td><td class="n">—</td><td class="n">—</td><td class="n">—</td>` +
    `<td class="c">${hasTgt ? outN + ' fora' : '—'}</td><td class="n">${_rpPct(wNom)}</td>`,
    'rp-t-sm');
  html += `<p class="rp-note">Percentuais sobre a carteira <b>inteira</b> (inclui imóvel, se houver) — é a mesma base da aba Patrimônio. ` +
    `A banda é a regra ${_rpN(band.abs)}/${_rpN(band.rel)}: o menor entre ${_rpN(band.abs)} p.p. e ${_rpN(band.rel)}% do alvo.` +
    (hasTgt && Math.abs(tgtTotal - 100) > 0.5 ? ` <b class="rp-warn">Seus alvos somam ${_rpPct(tgtTotal)}, não 100% — o plano não fecha em zero.</b>` : '') + `</p>`;

  if (hasTgt) {
    html += _rpSvgPair(
      an.slice().sort((x, y) => y.realPct - x.realPct).map(x => ({ label: x.a.name, a: x.realPct, b: x.tPct })),
      { nameA: '% atual', nameB: '% alvo', alt: 'alocação atual vs alvo',
        cap: 'Barra azul é onde a carteira está; a cinza, onde o plano diz que deveria estar.' });
  }

  html += _rpH3('Por classe');
  html += _rpTable(
    `<th>Classe</th><th class="n">Valor</th><th class="n">% da carteira</th><th class="n">Ativos</th>`,
    catRows.map(([k, v]) => `<tr><td class="lbl">${_rpEsc(_RP_CAT_LBL[k] || k)}</td>` +
      `<td class="n">${fmt(v)}</td><td class="n">${_rpBar(v / total * 100)} ${_rpPct(v / total * 100)}</td>` +
      `<td class="n rp-dim">${P.rows.filter(a => a.cat === k).length}</td></tr>`).join(''),
    null, 'rp-t-sm');

  // ── Plano de rebalanceamento ──────────────────────────
  if (hasTgt && outN > 0) {
    html += _rpH3('Rebalanceamento — duas rotas');
    const trades = an.filter(x => Math.abs(x.trade) >= 1).sort((p, q) => p.trade - q.trade);
    html += _rpP('<b>Rota A — trades.</b> Voltar cada posição ao alvo sem dinheiro novo. Compras e vendas se anulam, mas venda com lucro gera IR e marcação a mercado.');
    html += _rpTable(
      `<th>Ativo</th><th class="n">Hoje</th><th class="n">Ação</th><th class="n">Fica em</th><th class="c">Estava</th>`,
      trades.map(x => `<tr><td class="lbl">${_rpEsc(x.a.name)}</td><td class="n">${fmt(x.a.value)}</td>` +
        `<td class="n ${x.trade > 0 ? 'rp-pos' : 'rp-neg'}">${x.trade > 0 ? 'Comprar' : 'Vender'} ${fmt(Math.abs(x.trade))}</td>` +
        `<td class="n">${fmt(x.tVal)}</td>` +
        `<td class="c rp-dim">${x.out ? 'fora' : 'dentro'}</td></tr>`).join(''),
      `<td>Giro</td><td class="n">—</td><td class="n">${fmt(turnover)}</td><td class="n">${fmt(total)}</td><td class="c">—</td>`,
      'rp-t-sm');

    // Rota B: aporte novo direcionado (deficit-proporcional, só compra) — mesma lógica do simulador
    const ap = Math.max(0, Math.round(c.avgApo));
    if (ap > 0) {
      const nt = total + ap;
      const dist = P.rows.map(a => {
        const tp = (P.target[a.id] || 0) / 100;
        return { a, tp, ideal: nt * tp, def: Math.max(0, nt * tp - a.value) };
      });
      const totDef = _rpSum(dist.map(d => d.def));
      let rem = ap;
      dist.forEach(d => {
        d.ap = totDef > 0 ? Math.min(rem, Math.round(ap * d.def / totDef)) : Math.round(ap * d.tp);
        rem -= d.ap;
      });
      if (rem > 0 && dist.length) {
        const big = dist.reduce((b, d) => d.def > b.def ? d : b, dist[0]);
        big.ap += rem;
      }
      html += _rpP(`<b>Rota B — aporte novo.</b> Direcionar o próximo aporte para quem está mais abaixo do alvo, sem vender nada: zero IR, zero marcação. ` +
        `Simulado com <b>${fmt(ap)}</b> (seu aporte médio de 12 meses).`);
      html += _rpTable(
        `<th>Ativo</th><th class="n">% alvo</th><th class="n">Aporte sugerido</th><th class="n">Fica com</th><th class="n">Nova %</th><th class="n">Desvio novo</th>`,
        dist.filter(d => d.ap > 0 || d.a.value > 0).sort((x, y) => y.ap - x.ap).map(d => {
          const nv = d.a.value + d.ap, np = nv / nt * 100, nd = np - d.tp * 100;
          return `<tr><td class="lbl">${_rpEsc(d.a.name)}</td><td class="n rp-dim">${_rpPct(d.tp * 100)}</td>` +
            `<td class="n ${d.ap > 0 ? 'rp-pos' : 'rp-dim'}">${d.ap > 0 ? fmt(d.ap) : '—'}</td>` +
            `<td class="n">${fmt(nv)}</td><td class="n">${_rpPct(np)}</td>` +
            `<td class="n rp-dim">${_rpPP(nd)}</td></tr>`;
        }).join(''),
        `<td>Total</td><td class="n">${_rpPct(tgtTotal)}</td><td class="n">${fmt(ap)}</td><td class="n">${fmt(nt)}</td><td class="n">100,0%</td><td class="n">—</td>`,
        'rp-t-sm');
      html += `<p class="rp-note">Rota B não zera o desvio de uma vez — ela corrige na direção certa a cada aporte. Com ${fmt(ap)}/mês, o desvio some em poucos meses sem custo fiscal.</p>`;
    }
  } else if (hasTgt) {
    html += _rpCall('pos', 'Carteira dentro das bandas', `Todas as ${P.rows.length} posições estão dentro da banda ${_rpN(band.abs)}/${_rpN(band.rel)}. Nada a fazer — rebalanceamento sem desvio é só custo.`);
  } else {
    html += _rpEmpty('Sem <b>alocação alvo</b> definida, não há como medir desvio nem montar plano de rebalanceamento. Defina em Patrimônio → Editar alvos.');
  }

  // ── Concentração ──────────────────────────────────────
  html += _rpH3('Concentração');
  const conc = [];
  if (top1) {
    const p1 = top1.value / total * 100;
    conc.push(`A maior posição com risco próprio é <b>${_rpEsc(top1.name)}</b>, com ${fmt(top1.value)} — <b>${_rpPct(p1)}</b> da carteira` +
      (p1 > 35 ? `. Acima de 35% numa posição única, o drawdown que ela puder ter é o drawdown que o plano vai ter.` : '.'));
    conc.push(`As três maiores somam ${fmt(top3)} (${_rpPct(top3 / total * 100)}).`);
  }
  conc.push(`Renda variável + FIIs + internacional: <b>${_rpPct(rvShare)}</b> da carteira.`);
  conc.push(`Renda fixa + caixa: <b>${_rpPct(jurosShare)}</b>` +
    (jurosShare >= 55 ? ` — com mais da metade em juros, a projeção depende de o CDI/Selic se manterem altos. Vale rodar o cenário pessimista com CDI perto de 10%.` : '.'));
  html += `<ul class="rp-ul">${conc.map(t => `<li>${t}</li>`).join('')}</ul>`;

  return { id: 'carteira', title: 'Carteira — composição e balanceamento', src: 'cadastro (Patrimônio)', html };
}

// ═══════ 8. INDEPENDÊNCIA FINANCEIRA ═══════
function _rpSec8(c) {
  const months = (S.assumptions.projectionYears || 30) * 12;
  const paths = buildScenarioPaths(months);
  const start = projectionStart();
  const pct = c.fin > 0 ? c.invest / c.fin * 100 : 0;
  const run = runwayMonths();
  const cov = passiveCoverage();
  const coast = coastFIYears();
  const rp = riskProfile();
  const mc = monteCarloFI(500, 40);
  const dec = monteCarloDecum(500, 90);

  const rows = paths.map(p => {
    const fi = findFIDate(p.path);
    return { p, fi };
  });
  const base = rows.find(r => r.p.id === 'base') || rows[0];

  let html = _rpKpis([
    _rpKpi('Número FI', fmt(c.fin), `${fmt(S.fi.targetMonthlyIncome)}/mês a ${_rpPct(c.fiR)} — modo ${S.fi.mode === 'perpetuidade' ? 'perpetuidade (vive do juro real)' : 'regra dos 4% (SWR)'}`),
    _rpKpi('Progresso', _rpPct(pct), `${fmt(c.invest)} de ${fmt(c.fin)} · faltam ${fmt(Math.max(0, c.fin - c.invest))}`),
    _rpKpi('Cobertura passiva', _rpPct(cov.pct), `o rendimento esperado paga ${_rpPct(cov.pct)} do gasto médio de ${fmt(cov.avgGas)}/mês`),
    _rpKpi('Colchão', `${Math.round(run)} meses`, `${(run / 12).toFixed(1).replace('.', ',')} anos sem nenhuma renda`,
      run >= 60 ? 'rp-pos' : run >= 24 ? '' : 'rp-warn'),
  ], 4);

  html += _rpH3('Data da FI por cenário');
  html += _rpTable(
    `<th>Cenário</th><th class="n">Retorno real</th><th class="n">Chega em</th><th class="n">Idade</th><th class="n">Prazo</th><th class="n">Patrimônio no cruzamento</th><th class="n">Renda passiva</th>`,
    rows.map(r => {
      const rr = weightedReturnReal() + (r.p.retDelta || 0);
      if (!r.fi) return `<tr><td class="lbl">${_rpEsc(r.p.name)}</td><td class="n">${_rpPct(rr)}</td>` +
        `<td class="n rp-neg" colspan="4">não atinge em ${S.assumptions.projectionYears} anos</td><td class="n">—</td></tr>`;
      return `<tr${r.p.id === 'base' ? ' class="grp"' : ''}><td class="lbl">${_rpEsc(r.p.name)}</td>` +
        `<td class="n">${_rpPct(rr)}</td>` +
        `<td class="n">${_rpDateLabel(r.fi.date)}</td>` +
        `<td class="n">${r.fi.date.getFullYear() - S.profile.birthYear} anos</td>` +
        `<td class="n">${_rpDur(r.fi.months)}</td>` +
        `<td class="n">${fmt(r.fi.wealth)}</td>` +
        `<td class="n">${fmt(r.fi.wealth * c.fiR / 100 / 12)}/mês</td></tr>`;
    }).join(''),
    null, 'rp-t-sm');
  html += `<p class="rp-note">Projeções em <b>valores de hoje</b> (retorno real, já sem inflação) a partir de ${monthLabel(start.str)}. ` +
    `Os cenários mexem em retorno, crescimento de receita e de gasto ao mesmo tempo — não são só variação de rentabilidade.</p>`;

  // Curva das projeções
  const step = Math.max(1, Math.ceil(months / 120));
  const idx = [];
  for (let i = 0; i < months; i += step) idx.push(i);
  html += _rpSvgLine({
    series: paths.map(p => ({
      name: p.name,
      color: p.id === 'base' ? '#1f4fd8' : p.id === 'otimista' ? '#0f7a4f' : '#b3261e',
      data: idx.map(i => p.path[i] ? p.path[i].w : null),
      dash: p.id !== 'base',
    })),
    labels: idx.map(i => String(start.date.getFullYear() + Math.floor((start.date.getMonth() + i) / 12))),
    h: 210, zero: true, baseline: c.fin, baselineLabel: 'meta ' + fmtK(c.fin),
    alt: 'projeção de patrimônio por cenário',
    cap: `Patrimônio projetado em R$ de hoje. A tracejada preta é o Número FI de ${fmt(c.fin)}.`,
  });

  html += _rpH3('Quando o plano deixa de depender de você');
  const items = [];
  if (coast === 0) items.push(`<b>Coast FI: atingido.</b> O patrimônio investível já passou o Número FI — aportar virou irrelevante para a meta.`);
  else if (coast == null) items.push(`<b>Coast FI: indefinido.</b> O retorno real esperado da carteira é zero ou negativo, então o patrimônio não cresce sozinho em poder de compra.`);
  else {
    const coastAge = Math.round(c.age + coast);
    items.push(`<b>Coast FI em ${coast.toFixed(1).replace('.', ',')} anos</b> (aos ${coastAge}): se você parasse de aportar hoje e só deixasse o juro real de ${_rpPct(weightedReturnReal())} compor, a meta seria atingida nessa idade. ` +
      (coastAge <= (S.assumptions.retirementAge || 60)
        ? `Como isso cabe antes dos ${S.assumptions.retirementAge || 60} anos, <b>aportar já é escolha, não obrigação</b> — o que muda o peso de decisões de carreira.`
        : `Ainda passa dos ${S.assumptions.retirementAge || 60} anos, então o aporte continua sendo parte necessária do plano.`));
  }
  // passiveCoverage() rende NOMINAL (usa a.ret de cada ativo, sem descontar IPCA).
  // É o número da tela, e fica; mas quem decide é o real — perpetuidade só se
  // sustenta se o principal acompanhar a inflação. Os dois, rotulados.
  const covReal = cov.avgGas > 0 ? c.port.total * (weightedReturnReal() / 100) / 12 / cov.avgGas * 100 : 0;
  items.push(`<b>Colchão:</b> ${Math.round(run)} meses de gasto médio cobertos pela carteira. ` +
    `O rendimento <b>nominal</b> esperado paga ${_rpPct(cov.pct)} do gasto de ${fmt(cov.avgGas)}/mês — é o número da aba Independência FI. ` +
    `Descontando o IPCA de ${_rpPct(c.ipca)}, o rendimento <b>real</b> paga <b>${_rpPct(covReal)}</b>` +
    (covReal >= 100 ? ' — pela régua da perpetuidade, o seu padrão de vida <b>de hoje</b> já está pago pela carteira sem consumir o principal; o que falta é a folga da renda-alvo que você cadastrou, maior que o seu gasto real.'
      : covReal >= 80 ? ' — pela régua da perpetuidade, você está muito perto da FI do seu padrão de vida atual.'
      : '. É o real que importa aqui: viver do nominal significa corroer o principal em poder de compra todo ano.'));
  if (rp.reqReal != null) {
    items.push(`<b>Retorno real necessário:</b> ${_rpPct(rp.reqReal)} a.a. para bater a meta até os ${S.assumptions.retirementAge || 60} anos, contra ${_rpPct(rp.expReal)} que a carteira promete. ` +
      (rp.reqReal <= rp.expReal ? 'A carteira atual dá conta com folga — o plano não exige heroísmo.' : 'A carteira atual não dá conta: ou sobe o aporte, ou estica o prazo, ou aumenta o risco.'));
  } else {
    items.push(`<b>Retorno real necessário:</b> nem 30% a.a. real fecha a meta no prazo até os ${S.assumptions.retirementAge || 60} anos com o aporte do cadastro. O que falta é aporte ou prazo, não rentabilidade.`);
  }
  html += `<ul class="rp-ul">${items.map(t => `<li>${t}</li>`).join('')}</ul>`;

  html += _rpH3('Monte Carlo');
  if (mc) {
    const dAt = m => new Date(start.date.getFullYear(), start.date.getMonth() + m, 1);
    const dt = m => _rpDateLabel(dAt(m));
    html += _rpTable(
      `<th>Percentil</th><th class="n">Prazo</th><th class="n">Chega em</th><th class="n">Idade</th>`,
      [['p10 — cenário bom', mc.p10], ['p50 — mediana', mc.p50], ['p90 — cenário ruim', mc.p90]]
        .map(([l, m]) => `<tr><td class="lbl">${l}</td><td class="n">${_rpDur(m)}</td><td class="n">${dt(m)}</td>` +
          `<td class="n">${dAt(m).getFullYear() - S.profile.birthYear} anos</td></tr>`).join(''),
      null, 'rp-t-sm');
    html += _rpP(`Em <b>${_rpPct(mc.probInHorizon)}</b> das ${_rpN(mc.sims)} simulações a meta é atingida dentro do horizonte de ${S.assumptions.projectionYears} anos. ` +
      `A simulação usa retorno real médio de ${_rpPct(weightedReturnReal())} com volatilidade de ${_rpPct(portfolioVol())} a.a. — <i>sem correlação entre classes</i>, o que superestima o risco e torna a dispersão mais larga do que a real.`);
  } else {
    html += _rpEmpty('Nenhuma das simulações atingiu a meta no horizonte — com o aporte e o retorno atuais, o Monte Carlo não encontra caminho.');
  }
  html += _rpP(`<b>E depois da FI?</b> Sacando ${fmt(dec.saque)}/mês corrigidos, o dinheiro dura até os ${dec.horizonAge} anos em <b>${_rpPct(dec.successRate)}</b> das ${_rpN(dec.sims)} simulações` +
    (dec.medianRuinAge != null ? `. Nos casos que falham, a mediana da ruína é aos <b>${Math.round(dec.medianRuinAge)} anos</b>` : ' — nenhuma simulação quebrou') +
    (dec.medianFinal != null ? `. Patrimônio mediano restante aos ${dec.horizonAge}: ${fmt(dec.medianFinal)} (p10: ${dec.p10Final != null ? fmt(dec.p10Final) : '—'}).` : '.'));

  html += _rpH3('Perfil de risco — necessidade × capacidade × tolerância');
  html += _rpTable(
    `<th>Dimensão</th><th class="c">Nível</th><th>Leitura</th>`,
    `<tr><td class="lbl">Necessidade</td><td class="c"><b>${_rpEsc(rp.necLvl)}</b></td><td>${_rpSafeHtml(rp.necTxt)}</td></tr>` +
    `<tr><td class="lbl">Capacidade</td><td class="c"><b>${_rpEsc(rp.capLvl)}</b></td><td>${rp.anos} anos até os ${S.assumptions.retirementAge || 60} — horizonte é o que permite atravessar queda sem vender.</td></tr>` +
    `<tr><td class="lbl">Tolerância</td><td class="c"><b>${_rpEsc(rp.tolLvl)}</b></td><td>${_rpSafeHtml(rp.tolTxt)}</td></tr>`,
    null, 'rp-t-sm');
  html += _rpCall(rp.overRisk ? 'warn' : '', `Perfil recomendado: ${rp.rec}`,
    `Vale o menor dos três — não adianta tolerância alta com capacidade baixa. Hoje a carteira tem <b>${_rpPct(rp.rvPct)}</b> em ativos de risco.` +
    (rp.overRisk ? ` Com necessidade <b>baixa</b> e mais de 40% em risco, você está correndo risco que o plano não pede: quando já ganhou o jogo, não precisa continuar apostando.` : ''));

  return { id: 'fi', title: 'Independência financeira', src: 'cadastro + projeção', html };
}

// ═══════ 9. OBJETIVOS ═══════
function _rpSec9(c) {
  const gs = S.goals || [];
  if (!gs.length) {
    return { id: 'objetivos', title: 'Objetivos', src: 'cadastro (Linha da Vida)',
      html: _rpEmpty('Nenhuma meta cadastrada. Metas paralelas à FI (entrada de imóvel, carro, viagem, MBA) entram como saída de caixa futura e mostram quanto empurram a data da independência — cadastre em Linha da Vida → Objetivos.') };
  }
  const start = projectionStart();
  const imp = goalsFIImpact();
  const rows = gs.slice().sort((a, b) => String(a.dataAlvo).localeCompare(String(b.dataAlvo)));
  const totHoje = _rpSum(rows.map(g => g.valor || 0));
  const totData = _rpSum(rows.map(g => goalValorNaData(g)));

  let html = _rpTable(
    `<th>Meta</th><th>Data-alvo</th><th class="n">Prazo</th><th class="n">Valor de hoje</th><th class="n">Custo na data</th><th class="c">Prioridade</th>`,
    rows.map(g => {
      const off = monthsBetween(start.str, g.dataAlvo);
      return `<tr><td class="lbl">${_rpEsc(g.name)}</td><td>${g.dataAlvo ? monthLabel(g.dataAlvo) : '—'}</td>` +
        `<td class="n">${off < 0 ? '<span class="rp-dim">passado</span>' : _rpDur(off)}</td>` +
        `<td class="n">${fmt(g.valor || 0)}</td><td class="n">${fmt(goalValorNaData(g))}</td>` +
        `<td class="c rp-dim">${_rpEsc(g.prioridade || '—')}</td></tr>`;
    }).join(''),
    `<td>Total</td><td></td><td class="n">—</td><td class="n">${fmt(totHoje)}</td><td class="n">${fmt(totData)}</td><td class="c">—</td>`,
    'rp-t-sm');
  html += `<p class="rp-note">“Custo na data” já está em <b>R$ de hoje</b>: só a inflação <i>real</i> da meta (acima do IPCA) escala o valor. Metas com data no passado são ignoradas na projeção.</p>`;

  if (imp.sem && imp.com) {
    const d = imp.com.months - imp.sem.months;
    html += _rpCall(d >= 6 ? 'warn' : 'pos', d >= 6 ? `As metas empurram a FI em ${_rpDur(d)}` : 'As metas praticamente não atrasam a FI',
      `Sem as metas, a independência chegaria em <b>${_rpDateLabel(imp.sem.date)}</b>. Com elas, <b>${_rpDateLabel(imp.com.date)}</b> — ${d <= 0 ? 'sem atraso mensurável' : _rpDur(d) + ' de diferença'}. ` +
      `Não é argumento para cancelar meta nenhuma; é o preço, explicitado. ${fmt(totData)} de saída futura custa ${_rpDur(d)} de liberdade.`);
  } else if (imp.sem && !imp.com) {
    html += _rpCall('neg', 'Com as metas, a FI sai do horizonte',
      `Sem elas a independência chegaria em <b>${_rpDateLabel(imp.sem.date)}</b>; com as ${rows.length} metas cadastradas (${fmt(totData)}) a projeção não alcança a meta dentro de ${S.assumptions.projectionYears} anos. ` +
      `Ou as metas encolhem, ou esticam no tempo, ou o aporte sobe.`);
  } else {
    html += _rpCall('neg', 'A FI não é atingida no horizonte nem sem as metas',
      `A projeção base não alcança ${fmt(c.fin)} em ${S.assumptions.projectionYears} anos, com ou sem os objetivos — o gargalo está no aporte ou na meta, não nas metas paralelas.`);
  }
  return { id: 'objetivos', title: 'Objetivos', src: 'cadastro (Linha da Vida)', html };
}

// ═══════ 10. DÍVIDAS E FINANCIAMENTO ═══════
function _rpSec10(c) {
  const debts = (S.debts || []);
  const infos = debts.map(d => ({ d, now: debtNow(d) })).filter(x => x.now && !x.now.quitada);
  const am = S.amort;
  let html = '';

  if (infos.length) {
    const saldo = _rpSum(infos.map(x => x.now.saldoAtual));
    const parc = _rpSum(infos.map(x => x.now.parcelaAtual));
    const juros = _rpSum(infos.map(x => x.now.jurosMes));
    const jurosRest = _rpSum(infos.map(x => x.now.jurosRestantes));
    const fim = infos.reduce((a, x) => (!a || x.now.quitacao > a) ? x.now.quitacao : a, null);

    html += _rpKpis([
      _rpKpi('Saldo devedor', fmt(saldo), `${infos.length} ${infos.length === 1 ? 'dívida ativa' : 'dívidas ativas'} · última quitação em ${fim ? monthLabel(fim) : '—'}`),
      _rpKpi('Parcela mensal', fmt(parc), `${fmt(juros)} de juros e ${fmt(parc - juros)} de amortização — ${_rpPct(parc > 0 ? juros / parc * 100 : 0)} da parcela é juro`),
      _rpKpi('Juros ainda a pagar', fmt(jurosRest), `${_rpPct(saldo > 0 ? jurosRest / saldo * 100 : 0)} do saldo atual, se levar até o fim`),
      _rpKpi('Peso na renda', c.avgRec > 0 ? _rpPct(parc / c.avgRec * 100) : '—', `da receita média de ${fmt(c.avgRec)}/mês`,
        c.avgRec > 0 && parc / c.avgRec > 0.3 ? 'rp-warn' : ''),
    ], 4);

    html += _rpTable(
      `<th>Dívida</th><th class="n">Saldo</th><th class="n">Parcela</th><th class="n">Juros/mês</th><th class="n">Amortização/mês</th><th class="n">Restam</th><th>Quitação</th><th class="n">Juros até o fim</th>`,
      infos.map(x => `<tr><td class="lbl">${_rpEsc(x.d.name || 'Dívida')}</td>` +
        `<td class="n">${fmt(x.now.saldoAtual)}</td><td class="n">${fmt(x.now.parcelaAtual)}</td>` +
        `<td class="n rp-neg">${fmt(x.now.jurosMes)}</td><td class="n">${fmt(x.now.amortMes)}</td>` +
        `<td class="n">${x.now.mesesRestantes}</td><td>${monthLabel(x.now.quitacao)}</td>` +
        `<td class="n">${fmt(x.now.jurosRestantes)}</td></tr>`).join(''),
      `<td>Total</td><td class="n">${fmt(saldo)}</td><td class="n">${fmt(parc)}</td><td class="n">${fmt(juros)}</td>` +
      `<td class="n">${fmt(parc - juros)}</td><td class="n">—</td><td>—</td><td class="n">${fmt(jurosRest)}</td>`,
      'rp-t-sm');
    html += `<p class="rp-note">Parcela <b>teórica</b> (juros + amortização), sem seguros, taxa de administração ou correção monetária/TR. Valores nominais, sem desconto a valor presente.</p>`;

    // Mesma base da aba Financiamento: valor contratado (valorTotal, ou o saldo
    // do cadastro quando ele nao foi informado) — nao o saldo de hoje, que faria
    // o '% quitado' comecar perto de zero mesmo com metade do financiamento pago.
    const baseTotal = _rpSum(infos.map(x => x.d.valorTotal || x.d.saldo || 0)) || saldo;
    const yrs = _debtsYearlyRows(infos);
    if (yrs && yrs.length) {
      html += _rpH3('Ano a ano');
      html += _rpTable(
        `<th>Ano</th><th class="n">Saldo no fim</th><th class="n">Abatido no ano</th><th class="n">Juros pagos</th><th class="n">% quitado</th>`,
        yrs.map(r => `<tr><td class="lbl">${r.ano}</td><td class="n">${fmt(r.saldo)}</td>` +
          `<td class="n rp-pos">−${fmt(r.reducao)}</td><td class="n rp-neg">${fmt(r.juros)}</td>` +
          `<td class="n">${_rpBar(baseTotal > 0 ? (1 - r.saldo / baseTotal) * 100 : 0)} ${_rpPct(baseTotal > 0 ? (1 - r.saldo / baseTotal) * 100 : 0, 0)}</td></tr>`).join(''),
        null, 'rp-t-sm');
      html += `<p class="rp-note">"% quitado" é sobre o <b>valor contratado</b> (${fmt(baseTotal)}), mesma base da aba Financiamento` +
        (infos.some(x => !x.d.valorTotal) ? ' — em dívida sem <i>valor total</i> cadastrado, o app usa o saldo do registro, o que subestima o já pago.' : '.') + '</p>';
    }
  } else if (debts.length) {
    html += _rpCall('pos', 'Todas as dívidas cadastradas estão quitadas', `${debts.length} ${debts.length === 1 ? 'registro' : 'registros'} em Financiamento, nenhum com saldo em aberto.`);
  } else {
    html += _rpEmpty('Nenhuma dívida cadastrada na aba Financiamento.');
  }

  // Amortizar vs investir — o espelho do simulador
  if (am && am.saldo > 0 && am.taxaMes > 0) {
    const finRate = (Math.pow(1 + am.taxaMes / 100, 12) - 1) * 100;
    const cdi = am.cdi || S.assumptions.cdi || 13.65;
    const cdbLiq = cdi * (am.pctCDI || 100) / 100 * 0.85;   // IR 15%, prazo longo
    const lciLiq = cdi * 0.95;                              // LCI ~95% do CDI, isenta
    const best = Math.max(cdbLiq, lciLiq);
    const spread = best - finRate;
    html += _rpH3('Amortizar ou investir?');
    html += _rpTable(
      `<th>Comparação</th><th class="n">Taxa a.a.</th><th>Natureza</th>`,
      `<tr><td class="lbl">Custo do financiamento</td><td class="n rp-neg">${_rpPct(finRate)}</td>` +
      `<td>${_rpPct(am.taxaMes)} a.m. sobre saldo de ${fmt(am.saldo)} — fixo, garantido, não some se a Selic cair</td></tr>` +
      `<tr><td class="lbl">CDB ${_rpN(am.pctCDI || 100)}% do CDI, líquido</td><td class="n">${_rpPct(cdbLiq)}</td><td>CDI de ${_rpPct(cdi)} menos IR de 15%</td></tr>` +
      `<tr><td class="lbl">LCI 95% do CDI, isenta</td><td class="n">${_rpPct(lciLiq)}</td><td>sem IR, mas com carência</td></tr>` +
      `<tr class="grp"><td>Spread a favor de investir</td><td class="n ${spread >= 1.5 ? 'rp-pos' : 'rp-neg'}">${_rpPP(spread)}</td>` +
      `<td>melhor renda fixa líquida (${_rpPct(best)}) menos o custo da dívida</td></tr>`,
      null, 'rp-t-sm');
    html += _rpCall(spread < 1.5 ? 'warn' : '',
      spread < 1.5 ? 'Amortizar ganha em risco ajustado' : 'Manter o financiamento e investir ainda compensa',
      spread < 1.5
        ? `O spread de ${_rpPP(spread)} não paga o risco. Amortizar é retorno garantido, isento e sem marcação a mercado — e a assimetria joga a favor: se a Selic cair, o CDI cai junto, mas o custo do financiamento é fixo.`
        : `Spread de ${_rpPP(spread)} a favor de investir. Reavalie a cada corte de Selic: o custo da dívida é fixo, o CDI não. Abaixo de 1,5 p.p. a conta vira.`);
    html += `<p class="rp-note">Simplificação: IR de 15% fixo no CDB (prazo acima de 2 anos) — não simula a tabela regressiva completa. Números do cadastro da aba Simulador → Amortização.</p>`;
  }

  return { id: 'dividas', title: 'Dívidas e financiamento', src: 'cadastro (Financiamento + Simulador)', html };
}

// ═══════ 11. PROTEÇÃO ═══════
function _rpSec11(c) {
  const g = protectionGaps();
  const pr = S.protection || {};
  const temApolice = (pr.seguroVida || 0) > 0 || (pr.seguroInvalidez || 0) > 0;

  let html = _rpKpis([
    _rpKpi('Gap de seguro de vida', fmt(g.faltaVida), pr.dependentes > 0 ? `${pr.dependentes} ${pr.dependentes === 1 ? 'dependente' : 'dependentes'} · ${pr.anosDependencia} anos de reposição de renda` : 'sem dependentes cadastrados — o gap de vida não se aplica',
      g.faltaVida > 0 ? 'rp-neg' : 'rp-pos'),
    _rpKpi('Gap de invalidez', fmt(g.faltaInval), `renda de ${fmt(g.rendaMensal)}/mês menos teto do INSS de ${fmt(pr.tetoINSS || 0)} = ${fmt(g.gapMensal)}/mês a repor por ${g.anosApos} anos`,
      g.faltaInval > 0 ? 'rp-neg' : 'rp-pos'),
    _rpKpi('Apólices já contratadas', fmt((pr.seguroVida || 0) + (pr.seguroInvalidez || 0)), `${fmt(pr.seguroVida || 0)} vida · ${fmt(pr.seguroInvalidez || 0)} invalidez`),
    _rpKpi('Patrimônio creditado', fmt(g.patLiquido), 'o investível já conta como recurso disponível para a família'),
  ], 4);

  html += _rpH3('Memória de cálculo — seguro de vida');
  html += _rpTable(
    `<th>Linha</th><th class="n">Valor</th><th>De onde vem</th>`,
    `<tr><td class="lbl">Reposição de renda</td><td class="n">${fmt(g.reposicao)}</td><td>gasto anual de ${fmt(g.gastoAnual)} × ${pr.anosDependencia} anos de dependência</td></tr>` +
    `<tr><td class="lbl">Dívida descoberta</td><td class="n">${fmt(g.dividaDescoberta)}</td><td>dívida ativa de ${fmt(g.dividaTotal)} menos ${fmt(g.dividaCoberta)} cobertos por seguro prestamista (MIP)</td></tr>` +
    `<tr class="grp"><td>Necessidade total</td><td class="n">${fmt(g.necessidadeVida)}</td><td>o que a família precisaria ter no dia seguinte</td></tr>` +
    `<tr><td class="lbl">(−) Patrimônio investível</td><td class="n">−${fmt(g.patLiquido)}</td><td>exclui imóvel: não se vende casa em luto</td></tr>` +
    `<tr><td class="lbl">(−) Seguro de vida já contratado</td><td class="n">−${fmt(pr.seguroVida || 0)}</td><td>cadastro da aba Proteção</td></tr>` +
    `<tr class="grp"><td>${g.faltaVida > 0 ? 'Falta contratar' : 'Sobra'}</td>` +
    `<td class="n ${g.faltaVida > 0 ? 'rp-neg' : 'rp-pos'}">${fmt(g.faltaVida > 0 ? g.faltaVida : g.sobraVida)}</td>` +
    `<td>${g.faltaVida > 0 ? 'capital adicional de seguro de vida' : 'a família já está coberta pelo patrimônio'}</td></tr>`,
    null, 'rp-t-sm');

  html += _rpH3('Memória de cálculo — invalidez');
  html += _rpTable(
    `<th>Linha</th><th class="n">Valor</th><th>De onde vem</th>`,
    `<tr><td class="lbl">Renda mensal ativa</td><td class="n">${fmt(g.rendaMensal)}</td><td>soma dos rendimentos ativos do cadastro</td></tr>` +
    `<tr><td class="lbl">(−) Teto do INSS</td><td class="n">−${fmt(pr.tetoINSS || 0)}</td><td>o que o benefício público cobre, no máximo</td></tr>` +
    `<tr><td class="lbl">Gap mensal</td><td class="n">${fmt(g.gapMensal)}</td><td>o que falta por mês</td></tr>` +
    `<tr class="grp"><td>Necessidade (× 12 × ${g.anosApos} anos)</td><td class="n">${fmt(g.necessidadeInval)}</td><td>até a idade de aposentadoria</td></tr>` +
    `<tr><td class="lbl">(−) Seguro de invalidez contratado</td><td class="n">−${fmt(pr.seguroInvalidez || 0)}</td><td>cadastro da aba Proteção</td></tr>` +
    `<tr class="grp"><td>${g.faltaInval > 0 ? 'Falta contratar' : 'Coberto'}</td>` +
    `<td class="n ${g.faltaInval > 0 ? 'rp-neg' : 'rp-pos'}">${fmt(g.faltaInval)}</td><td>capital adicional de invalidez</td></tr>`,
    null, 'rp-t-sm');

  if (g.faltaVida > 0 || g.faltaInval > 0) {
    html += _rpCall('warn', 'O único cenário que zera o plano inteiro',
      `Faltam <b>${fmt(g.faltaVida)}</b> de vida e <b>${fmt(g.faltaInval)}</b> de invalidez. ` +
      `Nada mais neste relatório tem esse poder de destruição: drawdown volta, gasto se corta, aporte se retoma — perda de renda permanente, não. ` +
      `É também o risco mais barato de transferir: o prêmio anual costuma ser fração de um aporte mensal.` +
      (pr.dependentes === 0 ? ` <i>Com zero dependentes cadastrados, o gap de vida é informativo — confira o número na aba Proteção.</i>` : ''));
  } else if (temApolice) {
    html += _rpCall('pos', 'Gaps zerados', 'Entre patrimônio e apólices, tanto o cenário de morte quanto o de invalidez estão cobertos pelas premissas cadastradas.');
  }
  html += `<p class="rp-note">Estimativa conservadora: não desconta a valor presente e não considera reserva do cônjuge, pensão ou benefício de empresa. Premissas editáveis na aba Proteção.</p>`;

  return { id: 'protecao', title: 'Proteção', src: 'cadastro (Proteção)', html };
}


// ═══════ 12. DIAGNÓSTICO AUTOMÁTICO ═══════
// Reusa o motor de insights inteiro (as ~23 regras documentadas em INSIGHTS.md),
// só reagrupa por severidade e junta o plano de ação.
function _rpSec12(c) {
  const order = ['bad', 'warn', 'good', 'info'];
  const ins = (c.insights || []).slice().sort((a, b) => order.indexOf(a.sev) - order.indexOf(b.sev));
  if (!ins.length) {
    return { id: 'diagnostico', title: 'Diagnóstico automático', src: 'motor de insights',
      html: _rpEmpty('Nenhuma regra do motor de insights disparou.') };
  }
  const LBL = {
    bad:  { t: 'Alertas', k: 'neg',  d: 'algo errado que pede ação' },
    warn: { t: 'Pontos de atenção', k: 'warn', d: 'vale olhar, não é emergência' },
    good: { t: 'Pontos fortes', k: 'pos', d: 'reforço positivo, sem ação' },
    info: { t: 'Observações', k: '', d: 'contexto neutro, sem julgamento' },
  };
  let html = '';
  const counts = order.map(s => ({ s, n: ins.filter(i => i.sev === s).length })).filter(x => x.n);
  html += _rpKpis(counts.map(x => _rpKpi(LBL[x.s].t, String(x.n), LBL[x.s].d,
    x.s === 'bad' ? 'rp-neg' : x.s === 'warn' ? 'rp-warn' : x.s === 'good' ? 'rp-pos' : '')), counts.length === 3 ? 3 : counts.length === 2 ? 2 : 4);

  order.forEach(sev => {
    const g = ins.filter(i => i.sev === sev);
    if (!g.length) return;
    html += _rpH3(LBL[sev].t);
    html += g.map(i => _rpCall(LBL[sev].k,
      `<span class="rp-call-tag">${_rpEsc(i.tag)}</span>${_rpSafeHtml(i.title)}`,
      _rpSafeHtml(i.body) + (i.action ? `<br><b>→ ${_rpSafeHtml(i.action)}</b>` : ''))).join('');
  });

  const acts = ins.filter(i => i.action);
  if (acts.length) {
    html += _rpH3('Plano de ação — por onde começar');
    html += `<ol class="rp-ul">${acts.map(a => `<li>${_rpSafeHtml(a.action)}</li>`).join('')}</ol>`;
  }
  return { id: 'diagnostico', title: 'Diagnóstico automático', src: 'motor de insights (INSIGHTS.md)', html };
}

// ═══════ 13. METODOLOGIA E QUALIDADE DOS DADOS ═══════
function _rpSec13(c) {
  const a = S.assumptions || {};
  let html = _rpP('Nada neste relatório vem de IA nem de chamada de rede: são as mesmas funções que alimentam as outras páginas do app, ' +
    'rodando sobre a última sincronização. Abaixo, de onde vem cada bloco, com que premissa, e o que não confiar.');

  html += _rpH3('Fontes');
  html += _rpTable(
    `<th>Bloco</th><th>Fonte</th><th>Base</th>`,
    [
      ['Patrimônio, receita, gasto, aporte, rentabilidade', 'planilha (aba Histórico)', `${c.H.length} meses, de ${monthLabel(c.H[0].d)} a ${monthLabel(c.lastD)}`],
      ['Gastos categorizados, método de pagamento, fixo/variável', 'Mobills (via sync)', c.mb.ok ? `${_rpN(c.mb.rows.length)} lançamentos em ${c.mb.months.length} meses (${_rpN(c.mb.raw.length)} brutos)` : 'indisponível'],
      ['Carteira, alocação alvo, retorno esperado', 'cadastro (aba Patrimônio)', `${c.port.rows.length} ativos, ${fmt(c.port.total)}`],
      ['Receita/gasto das projeções', 'cadastro (Fluxo de Caixa)', `${fmt(_rpSum((S.incomes || []).filter(i => i.active !== false).map(i => i.amount || 0)))}/mês de receita`],
      ['Estrutura de seções de gasto', c.mb.ok && SECAO_DYN ? 'planilha (aba Fluxo de Caixa, linha 23+)' : 'mapa fixo no código', SECAO_DYN ? `${SECAO_DYN.order.length} seções da planilha` : 'SECAO_MAP hardcoded'],
      ['Benchmark CDI e IPCA histórico', 'tabelas no código', `CDI ${Math.min(...Object.keys(CDI_YEARLY))}–${Math.max(...Object.keys(CDI_YEARLY).map(Number))}`],
    ].map(r => `<tr><td class="lbl">${r[0]}</td><td>${_rpEsc(r[1])}</td><td class="rp-dim">${r[2]}</td></tr>`).join(''),
    null, 'rp-t-sm');

  html += _rpH3('Premissas em vigor');
  html += _rpTable(
    `<th>Premissa</th><th class="n">Valor</th><th>Onde entra</th>`,
    [
      ['IPCA', _rpPct(a.ipca), 'converte retorno nominal em real; todas as projeções são em R$ de hoje'],
      ['CDI / Selic', `${_rpPct(a.cdi)} / ${_rpPct(a.selic)}`, 'simuladores de renda fixa e a conta de amortizar vs investir'],
      ['Retorno da carteira', `${_rpPct(weightedReturn())} nominal · ${_rpPct(weightedReturnReal())} real`, 'motor de projeção e Monte Carlo'],
      // Taxas EFETIVAS, item a item. S.assumptions.incomeGrowth/expenseGrowth são
      // campos mortos: projectPath() lê i.growthRate/e.growthRate, e não existe input
      // no DOM que grave aqueles dois — ficam congelados nos literais 5,0/5,5.
      ['Crescimento de receita', `${_rpPct(avgGrowth(S.incomes || []))} a.a.`, `média ponderada dos itens ativos do Fluxo de Caixa · congela após ${a.incomeGrowthCapYears} anos`],
      ['Crescimento de gasto', `${_rpPct(avgGrowth(S.expenses || []))} a.a.`, 'média ponderada dos itens ativos · sem teto, cresce por todo o horizonte'],
      ['Idade de aposentadoria', `${a.retirementAge} anos`, 'quando a renda do trabalho cessa na projeção'],
      ['Horizonte', `${a.projectionYears} anos`, 'limite de tudo que é projetado'],
      ['Renda-alvo da FI', `${fmt(S.fi.targetMonthlyIncome)}/mês`, `a ${_rpPct(c.fiR)} (${S.fi.mode === 'perpetuidade' ? 'perpetuidade' : 'regra dos 4%'}) → meta de ${fmt(c.fin)}`],
      ['Banda de rebalanceamento', `${_rpN(c.port.band.abs)} p.p. / ${_rpN(c.port.band.rel)}%`, 'define quem está fora do alvo'],
    ].map(r => `<tr><td class="lbl">${r[0]}</td><td class="n">${r[1]}</td><td class="rp-dim">${r[2]}</td></tr>`).join(''),
    null, 'rp-t-sm');

  html += _rpH3('O que não confiar');
  const caveats = [];
  if (c.stale >= 2) caveats.push(`<b>O histórico para em ${monthLabel(c.lastD)}</b>, ${c.stale} meses atrás. Tudo aqui — inclusive as datas projetadas — está calculado sobre essa foto.`);
  if (!(new Date().getFullYear() in CDI_YEARLY)) caveats.push(`<b>A tabela de CDI não tem ${new Date().getFullYear()}.</b> Anos ausentes caem num fallback de 10% a.a., o que distorce o alpha e a comparação com o CDI.`);
  if (c.mb.ok) {
    caveats.push(`<b>Gasto do Mobills usa valor absoluto.</b> Estorno e crédito inflam o gasto em vez de abater — a soma da seção 6 é gasto bruto, não líquido.`);
    caveats.push(`<b>Duas contas de gasto convivem.</b> A seção 5 usa a coluna Gasto da planilha; a seção 6 soma os lançamentos do Mobills. Elas divergem por construção, e a divergência está medida no fim da seção 6.`);
  } else {
    caveats.push(`<b>Sem dados de Mobills</b>, a seção de gastos categorizados está vazia e o Lean FI não pode ser calculado.`);
  }
  caveats.push(`<b>A idade está fixada em 2026</b> no código (<code>currentAge()</code> faz <code>2026 − ano de nascimento</code>). Vira erro de um ano a partir de 2027.`);
  caveats.push(`<b>O Monte Carlo não tem correlação entre classes:</b> soma as volatilidades ponderadas, o que superestima o risco da carteira e alarga a dispersão dos percentis.`);
  caveats.push(`<b>Proteção não desconta a valor presente</b> e ignora reserva do cônjuge, pensão e benefício de empresa — é estimativa conservadora, para cima.`);
  caveats.push(`<b>Aporte da planilha inclui rendimento reinvestido</b>, então não é taxa de poupança. A taxa honesta é (receita − gasto) ÷ receita, na seção 5.`);
  caveats.push(`<b>Projeções assumem gasto constante em termos reais.</b> Se a inflação pessoal roda acima do IPCA (seção 5), a meta de hoje não compra o padrão de vida de amanhã.`);
  if (!_rpSum(Object.values(c.port.target))) caveats.push(`<b>Sem alocação alvo definida</b>, não há medida de desvio nem plano de rebalanceamento.`);
  html += `<ul class="rp-ul">${caveats.map(t => `<li>${t}</li>`).join('')}</ul>`;

  html += `<div class="rp-foot">Relatório gerado localmente em ${c.stamp} pelo FinPlan Pro. ` +
    `Todo o cálculo roda no navegador — nenhum dado sai deste dispositivo. ` +
    `As regras do diagnóstico automático estão documentadas em INSIGHTS.md.</div>`;

  return { id: 'metodologia', title: 'Metodologia e qualidade dos dados', src: 'este documento', html };
}

// ── Montagem do documento ─────────────────────────────────
function buildReport() {
  const c = _rpCtx();
  try { c.insights = computeInsights(); } catch (e) { console.warn('[Relatório] insights falharam:', e); c.insights = []; }

  const builders = [_rpSec1, _rpSec2, _rpSec3, _rpSec4, _rpSec5, _rpSec6, _rpSec7, _rpSec8, _rpSec9, _rpSec10, _rpSec11, _rpSec12, _rpSec13];
  const secs = [];
  builders.forEach((fn, i) => {
    try {
      const s = fn(c);
      if (s) secs.push({ ...s, n: i + 1 });
    } catch (e) {
      console.error('[Relatório] seção ' + (i + 1) + ' falhou:', e);
      secs.push({ n: i + 1, id: 'erro-' + (i + 1), title: 'Seção ' + (i + 1) + ' — indisponível', src: '',
        html: _rpEmpty('Esta seção não pôde ser calculada: <b>' + _rpEsc(e && e.message ? e.message : String(e)) + '</b>. As outras seções não foram afetadas.') });
    }
  });

  const toc = `<div class="rp-toc"><div class="rp-toc-title">Neste relatório</div><ol>` +
    secs.map(s => `<li><span class="rp-toc-n">${s.n}.</span><a href="#rp-${s.id}">${_rpEsc(s.title)}</a></li>`).join('') +
    `</ol></div>`;

  const cover = `<div class="rp-cover">
    <div class="rp-eyebrow">FinPlan Pro · Relatório completo</div>
    <div class="rp-title">${_rpEsc(S.profile.name || 'Meu Planejamento')}</div>
    <div class="rp-sub">Patrimônio, resultado, aportes, gastos categorizados e balanceamento — os números até ${monthLabel(c.lastD)}.</div>
    <div class="rp-meta">
      <span>Dados até <b>${monthLabel(c.lastD)}</b></span>
      <span>Gerado em <b>${c.stamp}</b></span>
      <span>Idade <b>${c.age} anos</b></span>
      <span>Histórico de <b>${c.H.length} meses</b></span>
      <span>${c.mb.ok ? `Mobills com <b>${_rpN(c.mb.rows.length)} lançamentos</b>` : 'Sem dados de Mobills'}</span>
    </div>
  </div>`;

  const body = secs.map(s => `<section class="rp-sec" id="rp-${s.id}">
    <div class="rp-sec-head"><span class="rp-sec-n">${String(s.n).padStart(2, '0')}</span><span class="rp-sec-t">${_rpEsc(s.title)}</span>` +
    (s.src ? `<span class="rp-sec-src">${_rpEsc(s.src)}</span>` : '') + `</div>
    ${s.html}
  </section>`).join('');

  return cover + toc + body;
}

// ── Overlay: ler na tela e imprimir ───────────────────────
function openReport() {
  let ov = document.getElementById('rp-overlay');
  if (!ov) {
    ov = document.createElement('div');
    ov.id = 'rp-overlay';
    ov.className = 'rp-overlay';
    document.body.appendChild(ov);
  }
  ov.classList.remove('hidden');
  document.body.classList.add('rp-open');   // gate do @media print (ver style.css)
  ov.innerHTML = `<div class="rp-bar">
      <div><div class="rp-bar-title">Relatório completo</div><div class="rp-bar-sub">gerando…</div></div>
    </div>`;

  // Deixa o overlay pintar antes de rodar Monte Carlo e as agregações.
  // setTimeout, não requestAnimationFrame: rAF fica suspenso em aba oculta e o
  // relatório travaria em 'gerando…' para sempre.
  setTimeout(() => {
    let html, err = null;
    const t0 = performance.now();
    try { html = buildReport(); } catch (e) { err = e; console.error('[Relatório]', e); }
    const ms = Math.round(performance.now() - t0);

    ov.innerHTML = `<div class="rp-bar">
        <div>
          <div class="rp-bar-title">Relatório completo</div>
          <div class="rp-bar-sub">${err ? 'falhou' : 'pronto em ' + ms + ' ms · use “Salvar em PDF” e escolha Salvar como PDF no destino'}</div>
        </div>
        <div class="rp-bar-spacer"></div>
        <button class="btn btn-ghost btn-sm" onclick="closeReport()">&#10005; Fechar</button>
        <button class="btn btn-primary btn-sm" onclick="printReport()">&#128438; Salvar em PDF</button>
      </div>
      <div class="rp-doc" id="rp-doc">${err
        ? `<div class="rp-empty"><b>O relatório não pôde ser montado.</b><br>${_rpEsc(err && err.message ? err.message : String(err))}<br><br>Abra o console do navegador para o rastreamento completo.</div>`
        : html}</div>`;
    ov.scrollTop = 0;
    document.addEventListener('keydown', _rpKey);
  });
}

function closeReport() {
  const ov = document.getElementById('rp-overlay');
  if (ov) { ov.classList.add('hidden'); ov.innerHTML = ''; }
  document.body.classList.remove('rp-open');
  document.removeEventListener('keydown', _rpKey);
}
function _rpKey(e) { if (e.key === 'Escape') closeReport(); }

function printReport() {
  const ov = document.getElementById('rp-overlay');
  if (!ov || ov.classList.contains('hidden')) { openReport(); return; }
  // Safari/iOS em PWA standalone às vezes ignora print() no mesmo tick do clique
  setTimeout(() => {
    try { window.print(); }
    catch (e) { showToast('Seu navegador bloqueou a impressão — use o menu Compartilhar › Imprimir'); }
  }, 60);
}

// ── 21. INIT ──────────────────────────────────────────────
function init() {
  loadState();
  loadSecoesDyn();          // seções da aba Fluxo de Caixa (persistidas do último sync)
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
