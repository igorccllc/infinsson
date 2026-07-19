# Manual do Motor de Insights

Documentação da aba **Insights** do FinPlan Pro — o que ela calcula, de onde vêm os números e como adicionar ou ajustar regras. Público: você mesmo, no futuro, quando quiser evoluir isso.

Localização no código: `src/app.js`, seção `── 20b. INSIGHTS ──` (procure por `computeInsights`). UI em `src/index.html` (nav + `#page-insights`) e `src/style.css` (`.insight-*`, `.ins-chip`).

## 1. Como funciona (visão geral)

Não tem IA nem chamada de rede. É uma função JS, `computeInsights()`, que:

1. Lê o estado atual do app (`HISTORICAL`, `S.portfolio`, `S.fi`, `S.amort`, `S.targetAllocation`, `S.protection`, `S.goals` etc.) — os mesmos dados que alimentam o Dashboard.
2. Roda ~20 blocos de regra independentes (`if`/threshold), cada um empurrando 0 ou 1 insight pra um array via `push(sev, tag, title, body, action)`.
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

Na ordem em que aparecem dentro de `computeInsights()`.

### 3.1 Patrimônio — decomposição do crescimento em 12m
**O que faz:** compara o patrimônio líquido (`pl`) de hoje com o de 12 meses atrás. Do delta total, calcula quanto veio de **aporte** (soma de `apo` em 12m) e quanto veio de **rentabilidade** (o resto).
**Por que importa:** se >85% do crescimento é aporte, isso avisa que "o dinheiro não está trabalhando" — útil pra calibrar expectativa sobre o quanto a carteira em si está contribuindo.
**Severidade:** `warn` se rentabilidade < 0, senão `info`. Sem ação associada.

### 3.2 Taxa de poupança 12m
**O que faz:** `(receita − gasto) / receita` nos últimos 12 meses. Também recalcula excluindo "meses atípicos" de receita (ver 3.21) pra dar uma taxa "normalizada".
**Limiares:** ≥40% → `good` · ≥20% → `warn` · <20% → `bad`. (Mesma régua 40/20 usada no Dashboard, na tabela e no gráfico do Histórico — unificada.)
**Ação:** só aparece se <40%, sugerindo revisar os maiores grupos de gasto.

### 3.3 Inflação pessoal / lifestyle creep
**O que faz:** usa `inflacaoPessoal()` — crescimento do gasto recorrente médio dos últimos 12m vs os 12m anteriores (prefere a col. J da planilha; cai no gasto total se não houver 24 meses de dado recorrente). Compara com o IPCA das premissas.
**Por que importa:** é a deriva do *baseline* de gasto — diferente do spike (mês fora da curva). Se o gasto sobe em termos reais, o denominador da FI infla em silêncio: a meta de hoje não compra o padrão de vida de amanhã, e as projeções assumem gasto constante em termos reais.
**Limiares:** inflação pessoal > IPCA + 2pp → `warn` (mostra a meta equivalente em 5 anos se o ritmo continuar) · > IPCA → `info` · ≤ IPCA → nada.

### 3.4 Rentabilidade recente vs. CDI
**O que faz:** conta quantos meses seguidos (a partir do mais recente) a carteira rendeu negativo (`realizedReturns()`); compara TWR anualizado de 12m (`twr(12)`) contra CDI anualizado (`cdiAnnualized(12)`).
**Gatilho de alerta:** streak ≥ 3 meses negativos → `bad`, com o argumento de "não vender, mercado é assim, ficar de olho só se persistir vs CDI em 12m+".
**Caso contrário:** `good` se bateu o CDI em 12m, `warn` se ficou abaixo.
**Nota importante:** `realizedReturns()` agora **prefere a coluna Rentabilidade da planilha** (`h.rent`, sincronizada) e só recalcula por `(Δpat − aporte)/pat` nos meses sem essa coluna. Ou seja: com sync em dia, o streak/TWR/Alpha batem 1:1 com o heatmap e com a planilha.

### 3.5 Drawdown corrente
**O que faz:** acha o pico histórico do patrimônio investível (`pl`) e mede a distância do valor atual até ele. Se ≥5% abaixo do pico, mostra um `info` com contexto anti-pânico: a maior queda já atravessada (`maxDrawdownHist()`) e o lembrete de que a decisão errada em drawdown costuma ser vender.
**Não dispara** se o patrimônio está a menos de 5% do recorde (situação normal de acumulação).

### 3.6 Tendência de receita recorrente
**O que faz:** compara a média de receita dos últimos 3 meses com a média dos 9 meses anteriores a esses — **excluindo meses atípicos** dos dois lados (ver 3.21), pra não deixar um bônus disfarçar a tendência real.
**Gatilho:** queda ≥10% → `bad` ("linha mais importante a atacar"); alta ≥10% → `good`. Variação dentro de ±10% é ruído — nada é reportado.

### 3.7 Tendência de aportes
**O que faz:** compara aporte médio do último trimestre com a média de 12 meses.
**Gatilho:** trimestre <60% da média de 12m → `warn`, com nota de que parte disso pode ser sazonal (bônus concentrados) mas vale acompanhar junto com a receita.

### 3.8 Meta FI — calibragem vs. gasto real
**O que faz:** compara `S.fi.targetMonthlyIncome` com o gasto médio real (últimos 12m). Se a meta for >1,8× o gasto real, calcula uma meta alternativa = gasto médio × 1,5 (arredondado pra R$500) e simula quantos meses faltam pra cada uma (`_monthsToTarget`).
**Por que 1,8× e 1,5×:** thresholds arbitrários — 1,8× dispara o alerta ("meta claramente descolada"), 1,5× é a sugestão de "folga generosa". Ajuste em `computeInsights()` se sua noção de razoável for outra.
**Caso não dispare:** mostra só o progresso normal (`info`).

### 3.9 Coast FI — aportar virou escolha?
**O que faz:** usa `coastFIYears()` (anos até a meta com **zero aporte novo**, só juro real composto). Se `idade atual + coastFIYears ≤ idade de aposentadoria`, dispara `good`: o plano já se sustenta sem aportes — aportar deixou de ser obrigação e virou acelerador.
**Por que importa:** muda o peso de decisões de vida (trocar de trabalho, reduzir ritmo). Não dispara se a meta já foi atingida (o 3.8 cobre) nem se coast passa da idade de aposentadoria.

### 3.10 Objetivos — quanto as metas empurram a FI
**O que faz:** se há metas cadastradas (Linha da Vida → Objetivos), roda `goalsFIImpact()` — a projeção base com e sem as saídas das metas — e mede o delta na data da FI.
**Limiares:** metas tiram a FI do horizonte → `warn` · empurram ≥6 meses → `info` com o delta · não atrasam nada → `good`. Entre 0 e 6 meses → nada (ruído).

### 3.11 Perfil de risco — Necessidade × Capacidade × Tolerância
**O que faz:** usa `riskProfile()` (mesma régua do card na aba Patrimônio): retorno real *necessário* pra bater a meta no prazo (`requiredRealReturn()`, busca binária sobre o fluxo atual), horizonte até aposentar (capacidade) e maior queda já vivida (tolerância comprovada, `maxDrawdownHist()`).
**Gatilhos:** necessidade **baixa** + >40% da carteira em ativos de risco (rv/fii/intl) → `warn` "quando você já ganhou o jogo, não precisa continuar apostando" · necessidade **alta** → `info` (o plano depende de retorno alto — aporte, prazo ou risco).

### 3.12 Proteção — gaps de seguro de vida e invalidez
**O que faz:** usa `protectionGaps()` (mesmo cálculo da aba Proteção): capital de vida needs-based (gasto anual × anos de dependência + financiamento não coberto por MIP − patrimônio − apólices) e gap de invalidez (renda − teto INSS, × 12 × anos até aposentar, − apólice).
**Gatilhos:** qualquer gap > 0 → `warn` com os valores ("o único cenário que zera o plano inteiro — e o mais barato de transferir") · gaps zerados com apólice cadastrada → `good`. O gap de vida só conta se `dependentes > 0`.
**Premissas editáveis** na aba Proteção (dependentes, anos, apólices, MIP, teto INSS).

### 3.13 Alocação vs. banda de rebalanceamento
**O que faz:** usa `S.targetAllocation` e `S.rebalanceBand` (regra 5/25, mesma da aba Patrimônio) pra achar classes fora da banda. Se houver, sugere direcionar aporte novo pra mais abaixo da meta e pausar na mais acima (sem vender, sem IR).
**Se nada estiver fora:** `good`, "nada a fazer".

### 3.14 Concentração em juros (sensibilidade à Selic)
**O que faz:** soma % da carteira em `rf` + `cash`. Se ≥55%, avisa que a projeção depende do CDI/Selic se manterem altos e sugere rodar o cenário Pessimista com CDI ~10%.

### 3.15 Concentração em posição única
**O que faz:** acha a maior posição entre os ativos com **risco idiossincrático** (exclui `rf`, `cash` e `imovel` — cestas diversificadas ou fora do investível). Se ela passa de 35% da carteira total → `warn`: "o drawdown que a posição pode ter é o drawdown que o plano vai ter".
**Ação:** direcionar aportes novos para outras classes até o peso voltar ao confortável.

### 3.16 Financiamento — amortizar vs. investir
**O que faz:** converte a taxa mensal do financiamento (`S.amort.taxaMes`) em taxa anual efetiva, compara com o melhor rendimento líquido comparável em renda fixa (CDB líquido de IR a 15%, ou LCI isenta a 95% do CDI — usa o maior).
**Gatilho:** spread (RF líquida − custo) < 1,5pp → `warn`, priorizar amortização. Spread maior → `info`, manter posição.
**Simplificação:** IR de 15% fixo pro CDB (prazo longo) — não simula a tabela regressiva completa.

### 3.17 Colchão / cobertura do gasto (runway)
**O que faz:** `runwayMonths()` = patrimônio investível ÷ gasto médio mensal (12m). Também calcula quanto do gasto o *rendimento real* esperado da carteira já paga (régua da perpetuidade).
**Limiares:** ≥60 meses → `good` · ≥24 → `info` · <24 → `warn`.

### 3.18 Receita dependente de eventos atípicos
**O que faz:** nos últimos 24 meses, identifica meses atípicos (ver 3.21) e calcula que % da receita total eles representam.
**Gatilho:** ≥2 meses atípicos **e** ≥20% da receita → `info`, listando os meses ("o plano funciona *se* eles continuarem").

### 3.19 Qualidade de dados — Mobills × Histórico
**O que faz:** lê `window._mobillsDivergences` (preenchido no Sync por `validateMobillsVsHistorical()`: meses fechados onde a soma do Mobills diverge >15% do `gas` da planilha). Se houver divergência (e houver dados Mobills), `warn` com o pior mês.
**Por que importa:** quando as duas fontes discordam, a Análise de Gastos e o Histórico contam histórias diferentes — algum número está errado.

### 3.20 Qualidade de dados — tabela CDI desatualizada
**O que faz:** se o ano corrente não está em `CDI_YEARLY`, `info` avisando que anos ausentes caem no fallback de 10% a.a., distorcendo Alpha e comparações. (Antes esse aviso só existia aqui no manual — agora o app cobra sozinho.)

### 3.21 Detecção de "mês atípico" (usada em 3.2, 3.6 e 3.18)
```js
recMed = mediana(receita dos últimos 24 meses, excluindo zeros)
isOutlier(mês) = mês.rec > 1.8 × recMed
```
Separa receita recorrente de bônus/eventos pontuais (13º, prêmio, venda de ativo). **O multiplicador 1,8× é o mesmo em todo o código** — se mudar, mude nos três usos (ou extraia pra uma constante).

## 4. Funções auxiliares (não geram insight por si só)

| Função | O que faz |
|---|---|
| `_median(arr)` | mediana de um array numérico |
| `isOutlier(h)` | ver 3.21 |
| `_monthsToTarget(w0, sav, rAnnual, target)` | meses até `target` com aporte fixo e retorno real composto, cap 600 meses |
| `_fmtAnos(months)` | formata meses em texto ("~8 anos", "já atingida", "mais de 50 anos") |

Reaproveitadas do resto do app (não redefinidas): `realizedReturns()`, `twr()`, `cdiAnnualized()`, `runwayMonths()`, `weightedReturn()`, `weightedReturnReal()`, `investableWealth()`, `fiNumber()`, `fiRate()`, `currentAge()`, `inflacaoPessoal()`, `coastFIYears()`, `maxDrawdownHist()`, `riskProfile()` / `requiredRealReturn()`, `protectionGaps()`, `goalsFIImpact()`, `fmt()` / `fmtK()` / `fmtPct()`.

## 5. Como adicionar uma regra nova

1. Abra `src/app.js`, ache `function computeInsights()`.
2. Escreva seu bloco em qualquer lugar do corpo da função, terminando com um ou mais `push(sev, tag, title, body, action)`. Copie o padrão de um bloco existente parecido (ex.: limiar simples tipo 3.7, ou comparação com benchmark tipo 3.4).
3. Use `fmt()`/`fmtK()`/`fmtPct()` pra formatar valores.
4. HTML permitido no `body`: só `<b>` e `<i>`.
5. Se a regra tiver recomendação concreta, preencha `action` — ela entra automática no card "Plano de ação".
6. Teste sem abrir o browser: um smoke-test que carrega `app.js` num contexto Node fake:
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
7. Depois de validar, rode `build.ps1` na raiz pra regerar o `index.html` autocontido (PWA).

## 6. Como ajustar um limiar existente

Todos os limiares estão **hardcoded dentro de `computeInsights()`** (ou nas funções auxiliares citadas). Pontos mais prováveis de tocar:

| O que | Onde | Valor atual |
|---|---|---|
| Corte "bom/atenção/ruim" da taxa de poupança | bloco 3.2 | 40% / 20% |
| Creep real que dispara alerta de inflação pessoal | bloco 3.3 | IPCA + 2pp |
| Streak de meses negativos (rentabilidade) | bloco 3.4 | 3 meses |
| Drawdown mínimo pra aparecer | bloco 3.5 | 5% abaixo do pico |
| Variação de receita que conta como tendência | bloco 3.6 | ±10% |
| Queda de aporte que dispara alerta | bloco 3.7 | trimestre <60% da média 12m |
| Meta FI "descolada" do gasto real | bloco 3.8 | meta > 1,8× gasto; alternativa = 1,5× gasto |
| Delta mínimo das metas pra virar insight | bloco 3.10 | 6 meses |
| Risco "demais" com necessidade baixa | bloco 3.11 (`riskProfile`) | >40% em rv/fii/intl |
| Carteira "concentrada" em juro | bloco 3.14 | ≥55% em `rf`+`cash` |
| Posição única "concentrada" | bloco 3.15 | ≥35% da carteira |
| Spread mínimo pra preferir investir sobre amortizar | bloco 3.16 | 1,5pp |
| Runway bom/ok/curto | bloco 3.17 | 60 / 24 meses |
| Divergência Mobills×Histórico | `validateMobillsVsHistorical` | >15% |
| Multiplicador de "mês atípico" | bloco 3.21 | 1,8× a mediana |

Não há testes automatizados desses limiares — a validação é o smoke-test manual (seção 5, passo 6).

## 7. Limitações conhecidas (para lembrar antes de "corrigir")

- **Não é IA.** Não generaliza, não aprende, não pondera fora das ~20 regras escritas. Padrão novo = regra nova.
- **CDI_YEARLY é tabela fixa** com o CDI médio por ano. Anos ausentes caem no fallback de 10% — e agora a regra 3.20 avisa quando o ano corrente falta.
- **`realizedReturns()` prefere a coluna Rentabilidade da planilha** (`rent`, quando sincronizada) e só recalcula `(Δpat − aporte)/pat` nos meses sem ela. Sem sync, o recálculo carrega ruído do aporte (converge em janelas 12m+).
- **IR do CDB no bloco 3.16 usa alíquota fixa de 15%**, não a tabela regressiva completa.
- **`_monthsToTarget` assume poupança e retorno constantes** — não usa o motor de cenários completo. É aproximação pra estimar o efeito de mudar a meta.
- **A régua de invalidez (3.12) não desconta a valor presente** — soma simples do gap até a aposentadoria, deliberadamente conservadora.
- **Tendências de receita/aporte comparam períodos curtos** — sensíveis a um mês fora da curva mesmo após excluir outliers.

## 8. Onde tudo mora (referência rápida)

| Arquivo | O quê |
|---|---|
| `src/app.js` → `── 20b. INSIGHTS ──` | `computeInsights()`, `renderInsights()`, `generateInsights()`, helpers `_median`/`_monthsToTarget`/`_fmtAnos`, tabela `INS_SEV` |
| `src/app.js` → seção `5. HELPERS`/`5b. ANALYTICS` | `riskProfile`, `coastFIYears`, `inflacaoPessoal`, `maxDrawdownHist`, `goalsFIImpact`, `CDI_YEARLY` |
| `src/app.js` → seção `19c. PROTEÇÃO` | `protectionGaps()` (compartilhado com a aba Proteção) |
| `src/index.html` | item de menu "💡 Insights" + `<div id="page-insights">` |
| `src/style.css` | `.insights-hero`, `.insights-summary`, `.ins-chip`, `.insight-card`, `.insight-*` |
| `build.ps1` | depois de qualquer mudança em `src/`, rodar pra regerar o `index.html` autocontido (PWA) |
