// Recalcula a variação por categoria a partir do Mobills cru e confere contra
// o que a seção 7 do relatório afirma. Independente do código da seção.
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');   // script mora em scripts/ — raiz do projeto é um nível acima

// Reaproveita o seeder e os stubs do smoke test
const smoke = fs.readFileSync(path.join(ROOT, 'scripts/smoke-relatorio.js'), 'utf8');
const seeder = smoke.match(/function seedMobills\(\)\s*\{[\s\S]*?\n\}/)[0];
eval(seeder);
const rows = seedMobills();

const store = { finplan_mobills: JSON.stringify(rows) };
global.localStorage = { getItem: k => (k in store ? store[k] : null), setItem: (k,v)=>{store[k]=String(v)}, removeItem: k=>{delete store[k]} };
global.window = { addEventListener(){}, removeEventListener(){} };
global.navigator = { serviceWorker:{ addEventListener(){}, register(){return {then(){return {catch(){}}}}} } };
global.document = { addEventListener(){}, removeEventListener(){}, getElementById(){return null}, querySelector(){return null}, querySelectorAll(){return []}, createElement(){return {style:{},classList:{add(){},remove(){},contains(){return false}},appendChild(){},remove(){}}}, body:{appendChild(){}} };
global.performance = { now: () => 0 };
global.requestAnimationFrame = fn => fn();
global.Chart = function(){}; global.Chart.register = () => {};

const code = fs.readFileSync(path.join(ROOT, 'src/app.js'), 'utf8');
eval(code + ';global.__api={loadState,loadSecoesDyn,refreshMobillsFilter,_rpCtx,_rpSec6b,getSecao,addMonths};');
const api = global.__api;
api.loadState(); api.loadSecoesDyn(); api.refreshMobillsFilter();

const c = api._rpCtx();
const mb = c.mb;

// ── Recálculo independente, direto das linhas cruas ──
const excl = ['(-) AP'];   // S.expenseExclude default
const vivos = rows.filter(r => !excl.some(t => r.cat === t || r.cat.includes(t)));
const meses = [...new Set(vivos.map(r => r.d))].sort();
const k = meses.length >= 24 ? 12 : 6;
const ultimo = meses[meses.length - 1];
const janela = (fim, n) => { const o=[]; for (let i=n-1;i>=0;i--) o.push(api.addMonths(fim, -i)); return o; };
const recentes = janela(ultimo, k);
const anteriores = janela(ultimo, 2*k).slice(0, k);
const cvB = recentes.filter(m => vivos.some(r => r.d === m)).length;
const cvA = anteriores.filter(m => vivos.some(r => r.d === m)).length;

const soma = (nat, ms) => vivos.filter(r => r.cat === nat && ms.includes(r.d)).reduce((s,r)=>s+Math.abs(r.val),0);
const cats = [...new Set(vivos.map(r => r.cat))];
const meu = cats.map(nat => {
  const a = soma(nat, anteriores)/cvA, b = soma(nat, recentes)/cvB;
  return { nat, a, b, d: b-a };
}).filter(r => r.a>0 || r.b>0);

const totA = meu.reduce((s,r)=>s+r.a,0), totB = meu.reduce((s,r)=>s+r.b,0);
const dTot = totB - totA;
const somaD = meu.reduce((s,r)=>s+r.d,0);
const altas = meu.filter(r=>r.d>0.5).sort((x,y)=>y.d-x.d);
const quedas = meu.filter(r=>r.d<-0.5).sort((x,y)=>x.d-y.d);

// ── O que a seção afirma ──
const sec = api._rpSec6b(c);
const txt = sec.html.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g,' ').replace(/\s+/g,' ');
const num = s => { const m = txt.match(s); return m ? m[1] : null; };
const nb = t => String(t).replace(/ /g, ' ');
const brl = v => nb(new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0}).format(v));

console.log('=== janela ===');
console.log('  k =', k, '| recentes', recentes[0], '->', recentes[k-1], '(' + cvB + ' meses com dado)');
console.log('  anteriores', anteriores[0], '->', anteriores[k-1], '(' + cvA + ' meses com dado)');
console.log();
console.log('=== recalculo independente ===');
console.log('  media/mes antes :', brl(totA));
console.log('  media/mes agora :', brl(totB));
console.log('  delta           :', brl(dTot), '(' + ((totB/totA-1)*100).toFixed(1) + '%)');
console.log('  altas', altas.length, '| quedas', quedas.length);
console.log('  soma dos deltas :', brl(somaD));
console.log();
console.log('=== conferencias ===');
const c1 = Math.abs(somaD - dTot) < 0.01;
console.log(' ', c1 ? 'PASSOU' : 'FALHOU', '- soma dos deltas por categoria == delta total');
const secTotB = txt.match(/Gasto médio por mês\s+(R\$[^\s]+(?:\s\d+)?)/);
const c2 = txt.includes(brl(totB));
console.log(' ', c2 ? 'PASSOU' : 'FALHOU', '- a secao imprime a media/mes atual (' + brl(totB) + ')');
const c3 = txt.includes(brl(totA));
console.log(' ', c3 ? 'PASSOU' : 'FALHOU', '- a secao imprime a media/mes anterior (' + brl(totA) + ')');
const topNat = altas[0] ? altas[0].nat : null;
const c4 = topNat ? txt.includes(topNat) : true;
console.log(' ', c4 ? 'PASSOU' : 'FALHOU', '- a maior alta aparece no texto (' + topNat + ', ' + brl(altas[0].d) + '/mes)');
const c5 = quedas[0] ? txt.includes(quedas[0].nat) : true;
console.log(' ', c5 ? 'PASSOU' : 'FALHOU', '- a maior queda aparece (' + (quedas[0]?quedas[0].nat:'-') + ', ' + (quedas[0]?brl(quedas[0].d):'-') + '/mes)');
const c6 = txt.includes('12 contra 12') || txt.includes('6 contra 6');
console.log(' ', c6 ? 'PASSOU' : 'FALHOU', '- declara a janela usada');
// custo em patrimonio: dTot*12 / (fiRate/100)
const fiR = 4.0;
const custo = (dTot*12)/(fiR/100);
const c7 = dTot <= 0 || txt.includes(brl(custo));
console.log(' ', c7 ? 'PASSOU' : 'FALHOU', '- custo em patrimonio do creep (' + brl(custo) + ')');
console.log();
console.log('=== top 8 altas (recalculo) ===');
altas.slice(0,8).forEach(r => console.log('  ' + r.nat.padEnd(26) + brl(r.a).padStart(12) + ' -> ' + brl(r.b).padStart(12) + '  ' + brl(r.d).padStart(11) + '/mes'));
console.log('=== top 5 quedas ===');
quedas.slice(0,5).forEach(r => console.log('  ' + r.nat.padEnd(26) + brl(r.a).padStart(12) + ' -> ' + brl(r.b).padStart(12) + '  ' + brl(r.d).padStart(11) + '/mes'));

const todas = [c1,c2,c3,c4,c5,c6,c7];
console.log();
console.log(todas.every(Boolean) ? 'TODAS AS CONFERENCIAS PASSARAM' : 'HOUVE FALHA');
process.exitCode = todas.every(Boolean) ? 0 : 1;
