# Manual do Motor de Insights

Documentação da aba **Insights** do FinPlan Pro — o que ela calcula, de onde vêm os números e como adicionar ou ajustar regras. Público: você mesmo, no futuro, quando quiser evoluir isso.

Localização no código: `src/app.js`, seção `── 20b. INSIGHTS ──` (procure por `computeInsights`). UI em `src/index.html` (nav + `#page-insights`) e `src/style.css` (`.insight-*`, `.ins-chip`).

## 1. Como funciona (visão geral)

Não tem IA nem chamada de rede. É uma função JS, `computeInsights()`, que:

1. Lê o estado atual do app (`HISTORICAL`, `S.portfolio`, `S.fi`, `S.amort`, `S.targetAllocation` etc.) — os mesmos dados que alimentam o Dashboard.
2. Roda ~12 blocos de regra independentes (`if`/threshold), cada um empurrando 0 ou 1 insight pra um array via `push(sev, tag, title, body, action)`.
3. Devolve a lista. `generateInsights()` ordena por severidade e renderiza os cards + o card final de "Plano de ação" (junta o campo `action` de quem tiver).

Cada vez que você clica em **⚡ Gerar insights**, tudo é recalculado do zero — não fica nada em cache. Se você sincronizar a planilha (Sync Sheets) e gerar de novo, os números refletem o dado novo.

## 2. Anatomia de um insight

```js
push(sev, tag, title, body, action)
```

| Campo | O que é | Exemplo |
|---|---|---|
| `sev` | Severidade: `'bad'` `'warn'` `'good'` `'info'` — define cor e ordem | `'warn'` |
| `tag` | Categoria curta, aparece como chip no card | `'Meta FI'` |
| `title` | Título de uma linha, já com o número principal | `Sua meta de FI está 156% acima do seu gasto real` |
| `body` | Texto explicativo, HTML simples permitido (`<b>`, `<i>`) | frase com os números formatados |
| `action` | Recomendação de uma linha, ou `null` se não há ação | `'Ajustar a meta na aba Independência FI'` |

Severidades e cor:

| `sev` | Cor | Label (singular/plural) | Quando usar |
|---|---|---|---|
| `bad` | vermelho `#f87171` | alerta / alertas | algo errado que pede ação |
| `warn` | amarelo `#fbbf24` | ponto de atenção | vale olhar, não é emergência |
| `good` | verde `#34d399` | ponto forte | reforço positivo, sem ação |
| `info` | azul `#6395ff` | observação | contexto neutro, sem julgamento |

## 3. As regras, uma por uma

### 3.1 Patrimônio — decomposição do crescimento em 12m
**O que faz:** compara o patrimônio líquido (`pl`) de hoje com o de 12 meses atrás. Do delta total, calcula quanto veio de **aporte** (soma de `apo` em 12m) e quanto veio de **rentabilidade** (o resto).
**Por que importa:** se >85% do crescimento é aporte, isso avisa que "o dinheiro não está trabalhando" — útil pra calibrar expectativa sobre o quanto a carteira em si está contribuindo.
**Severidade:** `warn` se rentabilidade < 0, senão `info`.
**Sem ação associada** (é diagnóstico, não pede decisão).

### 3.2 Taxa de poupança 12m
**O que faz:** `(receita − gasto) / receita` nos últimos 12 meses. Também recalcula excluindo "meses atípicos" de receita (ver 3.9) pra dar uma taxa "normalizada".
**Limiares:** ≥50% → `good` · ≥30% → `warn` · <30% → `bad`.
**Ação:** só aparece se <50%, sugerindo revisar os maiores grupos de gasto.

### 3.3 Rentabilidade recente vs. CDI
**O que faz:** conta quantos meses seguidos (a partir do mais recente) a carteira rendeu negativo (`realizedReturns()`); compara TWR anualizado de 12m (`twr(12)`) contra CDI anualizado (`cdiAnnualized(12)`).
**Gatilho de alerta:** streak ≥ 3 meses negativos → `bad`, com o argumento de "não vender, mercado é assim, ficar de olho só se persistir vs CDI em 12m+".
**Caso contrário:** `good` se bateu o CDI em 12m, `warn` se ficou abaixo.
**Depende de:** `realizedReturns()`, `twr()`, `cdiAnnualized()` — funções já existentes no motor, reaproveitadas (a tabela `CDI_YEARLY` no topo do arquivo tem o CDI médio por ano, seção `5b. ANALYTICS ENGINE`).

### 3.4 Tendência de receita recorrente
**O que faz:** compara a média de receita dos últimos 3 meses com a média dos 9 meses anteriores a esses — **excluindo meses atípicos** dos dois lados (ver 3.9), pra não deixar um bônus disfarçar a tendência real.
**Gatilho:** queda ≥10% → `bad` ("linha mais importante a atacar"); alta ≥10% → `good`.
**Sem gatilho:** nada é reportado (variação dentro de ±10% é ruído).

### 3.5 Tendência de aportes
**O que faz:** compara aporte médio do último trimestre com a média de 12 meses.
**Gatilho:** trimestre <60% da média de 12m → `warn`, com nota de que parte disso pode ser sazonal (bônus concentrados) mas vale acompanhar junto com a receita.

### 3.6 Meta FI — calibragem vs. gasto real
**O que faz:** compara `S.fi.targetMonthlyIncome` com o gasto médio real (`avgGas`, últimos 12m). Se a meta for >1,8× o gasto real, calcula uma meta alternativa = gasto médio × 1,5 (arredondado pra R$500) e simula quantos meses faltam pra cada uma (`_monthsToTarget`, um clone simplificado de `projectPath` — poupança mensal constante, juro real composto).
**Por que 1,8× e 1,5×:** são thresholds arbitrários que escolhi — 1,8× pra disparar o alerta ("a meta está claramente descolada"), 1,5× como sugestão de "folga generosa" sobre o gasto atual. **Ajuste esses dois números em `computeInsights()` se sua noção de "meta razoável" for outra.**
**Caso não dispare:** mostra só o progresso normal (`info`), sem a comparação alternativa.
**Ação:** decidir se a renda-alvo reflete um plano de vida real ou é número redondo.

### 3.7 Alocação vs. banda de rebalanceamento
**O que faz:** usa `S.targetAllocation` (meta % por ativo) e `S.rebalanceBand` (banda absoluta e relativa, mesma lógica da aba Patrimônio) pra achar quais classes estão fora da banda. Se houver, identifica a mais abaixo da meta e a mais acima, sugere direcionar aporte novo pra uma e pausar na outra (sem vender, sem gerar IR).
**Se nada estiver fora:** `good`, "nada a fazer".
**Depende de:** `S.targetAllocation`, `S.rebalanceBand` — os mesmos dados editáveis na aba Patrimônio.

### 3.8 Concentração em juros (sensibilidade à Selic)
**O que faz:** soma `%` da carteira em categorias `rf` + `cash`. Se ≥55%, avisa que a projeção depende de o CDI/Selic se manterem altos, e sugere rodar o cenário Pessimista com CDI ~10% pra medir o impacto.
**Threshold de 55%:** ajustável — é o ponto a partir do qual considero a carteira "concentrada" em juro.

### 3.9 Financiamento — amortizar vs. investir
**O que faz:** converte a taxa mensal do financiamento (`S.amort.taxaMes`) em taxa anual efetiva, compara com o melhor rendimento líquido comparável em renda fixa (CDB líquido de IR a 15%, ou LCI isenta a 95% do CDI — usa o maior dos dois).
**Gatilho:** spread (RF líquida − custo da dívida) < 1,5pp → `warn`, recomendando priorizar amortização. Spread maior → `info`, mantendo a posição.
**Simplificação assumida:** IR de 15% (prazo longo) fixo pro CDB — não simula a tabela regressiva completa. Se seu horizonte for curto, a conta fica otimista pro CDB; ajuste a alíquota no código se for o seu caso.

### 3.10 Colchão / cobertura do gasto (runway)
**O que faz:** `runwayMonths()` (função já existente) = carteira líquida / gasto médio mensal. Também calcula quanto do gasto médio já é coberto pelo *rendimento real* esperado da carteira (`weightedReturnReal()`), ou seja, a régua de "perpetuidade" sem tocar o principal.
**Limiares:** ≥60 meses → `good` · ≥24 → `info` · <24 → `warn`.

### 3.11 Receita dependente de eventos atípicos
**O que faz:** nos últimos 24 meses, identifica meses atípicos (ver 3.9 abaixo... ) e calcula que % da receita total desses 24 meses eles representam.
**Gatilho:** ≥2 meses atípicos **e** eles somam ≥20% da receita total → `info`, listando os meses e avisando que o plano depende desses eventos continuarem.

### Detecção de "mês atípico" (usada em 3.4, 3.9/receita e 3.11)
```js
recMed = mediana(receita dos últimos 24 meses, excluindo zeros)
isOutlier(mês) = mês.rec > 1.8 × recMed
```
Serve pra separar receita recorrente de bônus/eventos pontuais (13º, prêmio, venda de ativo etc.) em três lugares diferentes do motor. **O multiplicador 1,8× é o mesmo em todo o código** — se mudar, mude nas três regras (ou extraia pra uma constante, ver seção 5).

## 4. Funções auxiliares (não geram insight por si só)

| Função | O que faz |
|---|---|
| `_median(arr)` | mediana de um array numérico |
| `isOutlier(h)` | ver acima |
| `_monthsToTarget(w0, sav, rAnnual, target)` | simula meses até `target` com aporte mensal fixo `sav` e retorno real anual `rAnnual` (composto), cap em 600 meses (50 anos) |
| `_fmtAnos(months)` | formata meses em texto ("~8 anos", "já atingida", "mais de 50 anos") |

Reaproveitadas do resto do app (não redefinidas): `realizedReturns()`, `twr()`, `cdiAnnualized()`, `runwayMonths()`, `weightedReturn()`, `weightedReturnReal()`, `investableWealth()`, `fiNumber()`, `fiRate()`, `currentAge()`, `fmt()` / `fmtK()` / `fmtPct()`.

## 5. Como adicionar uma regra nova

1. Abra `src/app.js`, ache `function computeInsights()`.
2. Escreva seu bloco em qualquer lugar do corpo da função, terminando com um ou mais `push(sev, tag, title, body, action)`. Copie o padrão de um bloco existente parecido com o que você quer (ex.: um bloco de "limiar simples" tipo 3.5, ou um "comparação com CDI" tipo 3.3).
3. Use `fmt()`/`fmtK()`/`fmtPct()` pra formatar valores — mantém consistência visual com o resto do app.
4. HTML permitido no `body`: só `<b>` e `<i>`. Não coloque tags que quebrem layout (o CSS de `.insight-body` já estiliza `b`).
5. Se a regra tiver uma recomendação concreta, preencha `action` — ela aparece automaticamente no card "Plano de ação" no fim da página.
6. Teste sem abrir o browser: há um script de smoke-test que carrega `app.js` num contexto Node fake (mock de `localStorage`/`document`) e imprime todos os insights no terminal. Pode recriar algo assim:
   ```js
   const fs = require('fs');
   const code = fs.readFileSync('src/app.js', 'utf8');
   global.localStorage = { _s:{}, getItem:k=>global.localStorage._s[k]??null, setItem:(k,v)=>{global.localStorage._s[k]=v;} };
   global.window = {}; global.navigator = {};
   global.document = { addEventListener:()=>{}, getElementById:()=>null, querySelectorAll:()=>[], querySelector:()=>null };
   global.Chart = function(){}; global.Chart.register = () => {};
   eval(code + '; global.__api = { loadState, computeInsights, refreshMobillsFilter };');
   global.__api.loadState(); global.__api.refreshMobillsFilter();
   console.log(global.__api.computeInsights());
   ```
7. Depois de validar, rode `build.ps1` na raiz do projeto pra regerar o `index.html` autocontido (PWA).

## 6. Como ajustar um limiar existente

Todos os limiares estão **hardcoded dentro de `computeInsights()`** (não há arquivo de config separado). Pontos mais prováveis de querer tocar:

| O que | Onde | Valor atual |
|---|---|---|
| Corte "bom/atenção/ruim" da taxa de poupança | bloco 3.2 | 50% / 30% |
| Streak de meses negativos que dispara alerta de rentabilidade | bloco 3.3 | 3 meses |
| Variação de receita que conta como tendência | bloco 3.4 | ±10% |
| Queda de aporte que dispara alerta | bloco 3.5 | trimestre <60% da média 12m |
| Meta FI "descolada" do gasto real | bloco 3.6 | meta > 1,8× gasto; alternativa = 1,5× gasto |
| Carteira "concentrada" em juro | bloco 3.8 | ≥55% em `rf`+`cash` |
| Spread mínimo pra preferir investir sobre amortizar | bloco 3.9 | 1,5pp |
| Runway bom/ok/curto | bloco 3.10 | 60 / 24 meses |
| Multiplicador de "mês atípico" | função `isOutlier` (repetida 1x, usada em 3 blocos) | 1,8× a mediana |

Não há testes automatizados desses limiares — a validação é o smoke-test manual (seção 5, passo 6) comparando o texto gerado com o que você julga razoável.

## 7. Limitações conhecidas (para lembrar antes de "corrigir")

- **Não é IA.** Não generaliza, não aprende com uso, não pondera coisas fora das ~12 regras escritas. Se um padrão novo importa, precisa de regra nova.
- **CDI_YEARLY é uma tabela fixa** (seção `5b`, no topo de `app.js`) com o CDI médio por ano até 2026. Anos futuros herdam o valor de 2026 (`?? 10` como fallback se o ano não estiver na tabela) — atualize a tabela conforme o tempo passa.
- **IR do CDB no bloco 3.9 usa alíquota fixa de 15%** (prazo longo), não a tabela regressiva completa.
- **`_monthsToTarget` assume poupança mensal constante e retorno real constante** — não usa o motor de cenários completo (`buildScenarioPaths`/`projectPath`, que já modela idade de aposentadoria, congelamento de crescimento de renda, eventos). É uma aproximação só pra estimar rapidamente o efeito de mudar a meta de FI.
- **Todos os "%" de mudança de tendência (receita, aporte) comparam períodos curtos** (trimestre vs. 9 meses, ou trimestre vs. média 12m) — sensível a um único mês fora da curva mesmo depois de excluir outliers extremos.

## 8. Onde tudo mora (referência rápida)

| Arquivo | O quê |
|---|---|
| `src/app.js` → `── 20b. INSIGHTS ──` | `computeInsights()`, `renderInsights()`, `generateInsights()`, helpers `_median`/`_monthsToTarget`/`_fmtAnos`, tabela `INS_SEV` (cores/labels) |
| `src/app.js` → `renderPage` (seção 6, Navegação) | registro da rota `insights: renderInsights` |
| `src/index.html` | item de menu "💡 Insights" + `<div id="page-insights">` |
| `src/style.css` | `.insights-hero`, `.insights-summary`, `.ins-chip`, `.insight-card`, `.insight-head`, `.insight-tag`, `.insight-title`, `.insight-body`, `.insight-actions` |
| `build.ps1` | depois de qualquer mudança em `src/`, rodar isso pra regerar o `index.html` autocontido usado pelo PWA |
