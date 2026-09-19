# Manual do Motor de Insights

Documentação da aba **Insights** do FinPlan Pro — o que ela calcula, de onde vêm os números e como adicionar ou ajustar regras. Público: você mesmo, no futuro, quando quiser evoluir isso.

A aba tem dois geradores: os **cards de insight** (seções 1 a 8 deste manual) e o **Relatório completo em PDF** (seções R1 a R9, no fim).

Localização no código: `src/app.js`, seção `── 20b. INSIGHTS ──` (procure por `computeInsights`). UI em `src/index.html` (nav + `#page-insights`) e `src/style.css` (`.insight-*`, `.ins-chip`).

## 1. Como funciona (visão geral)

Não tem IA nem chamada de rede. É uma função JS, `computeInsights()`, que:

1. Lê o estado atual do app (`HISTORICAL`, `S.portfolio`, `S.fi`, `S.amort`, `S.targetAllocation`, `S.protection`, `S.goals` etc.) — os mesmos dados que alimentam o Dashboard.
2. Roda ~23 blocos de regra independentes (`if`/threshold), cada um empurrando 0 ou 1 insight pra um array via `push(sev, tag, title, body, action)`.
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
**O que faz:** compara o patrimônio líquido (`pl`) de hoje com o de 12 meses atrás — **por calendário** (`addMonths(lastD, -12)`, com fallback pro registro mais próximo se houver lacuna no sync, não pela posição `-13` do array). Do delta total, calcula quanto veio de **aporte** (soma de `apoPLOf(h)` na mesma janela) e quanto veio de **rentabilidade** (o resto).
**Por que `apoPLOf` e não `apo`:** `apo` é o aporte TOTAL da planilha e pode incluir aporte em imóvel (colunas Aporte PL / Aporte Imóvel, quando existirem). Como `pl` exclui o imóvel, descontar o aporte total de um Δ que não inclui imóvel inventava "rentabilidade" negativa. `apoPLOf(h) = h.apoPL ?? h.apo` — usa o split quando existe, cai no total nos meses sem ele.
**Por que importa:** se >85% do crescimento é aporte, isso avisa que "o dinheiro não está trabalhando" — útil pra calibrar expectativa sobre o quanto a carteira em si está contribuindo.
**Severidade:** `warn` se rentabilidade < 0, senão `info`. Sem ação associada.

### 3.2 Taxa de poupança 12m
**O que faz:** `(receita − gasto) / receita` nos últimos 12 meses. Também recalcula excluindo "meses atípicos" de receita (ver 3.24) pra dar uma taxa "normalizada".
**Limiares:** ≥40% → `good` · ≥20% → `warn` · <20% → `bad`. (Mesma régua 40/20 usada no Dashboard, na tabela e no gráfico do Histórico — unificada.)
**Ação:** só aparece se <40%, sugerindo revisar os maiores grupos de gasto.

### 3.3 Inflação pessoal / lifestyle creep
**O que faz:** usa `inflacaoPessoal()` — crescimento do gasto recorrente médio dos últimos 12m vs os 12m anteriores (prefere a col. J da planilha; cai no gasto total se não houver 24 meses de dado recorrente). Compara com o IPCA das premissas.
**Por que importa:** é a deriva do *baseline* de gasto — diferente do spike (mês fora da curva). Se o gasto sobe em termos reais, o denominador da FI infla em silêncio: a meta de hoje não compra o padrão de vida de amanhã, e as projeções assumem gasto constante em termos reais.
**Limiares:** inflação pessoal > IPCA + 2pp → `warn` (mostra a meta equivalente em 5 anos se o ritmo continuar) · > IPCA → `info` · ≤ IPCA → nada.

### 3.4 Rentabilidade recente vs. CDI
**O que faz:** conta quantos meses seguidos (a partir do mais recente) a carteira rendeu negativo (`realizedReturns()`); compara TWR anualizado de 12m (`twr(12)`) contra CDI anualizado (`cdiAnnualized(12)`). O "resultado de mercado" do trimestre é `Δpl − apoPLOf(h)` sobre o **patrimônio líquido** (o de fato investido — `pat` incluiria o imóvel e poluiria a conta; aporte TOTAL também poluiria, se parte foi pra imóvel).
**Gatilho de alerta:** streak ≥ 3 meses negativos → `bad`, com o argumento de "não vender, mercado é assim, ficar de olho só se persistir vs CDI em 12m+".
**Caso contrário:** `good` se bateu o CDI em 12m, `warn` se ficou abaixo.
**Nota importante:** `realizedReturns()` **prefere a coluna Rentabilidade da planilha** (`h.rent`, sincronizada) e só recalcula `(Δpl − apoPLOf(h))/pl` nos meses sem essa coluna. Com sync em dia, streak/TWR/Alpha batem 1:1 com o heatmap e com a planilha.

### 3.5 Drawdown corrente
**O que faz:** acha o pico histórico do patrimônio investível (`pl`) e mede a distância do valor atual até ele. Se ≥5% abaixo do pico, mostra um `info` com contexto anti-pânico: a maior queda já atravessada (`maxDrawdownHist()`) e o lembrete de que a decisão errada em drawdown costuma ser vender.
**Não dispara** se o patrimônio está a menos de 5% do recorde (situação normal de acumulação).

### 3.6 Tendência de receita recorrente
**O que faz:** compara a média de receita dos últimos 3 meses com a média dos 9 meses anteriores a esses — **excluindo meses atípicos** dos dois lados (ver 3.24), pra não deixar um bônus disfarçar a tendência real.
**Gatilho:** queda ≥10% → `bad` ("linha mais importante a atacar"); alta ≥10% → `good`. Variação dentro de ±10% é ruído — nada é reportado.

### 3.7 Tendência de aportes
**O que faz:** compara aporte médio do último trimestre com a média de 12 meses.
**Gatilho:** trimestre <60% da média de 12m → `warn`, com nota de que parte disso pode ser sazonal (bônus concentrados) mas vale acompanhar junto com a receita.

### 3.8 Modelo vs. realidade — a poupança das projeções existe?
**O que faz:** compara a poupança que o **cadastro** assume (receita − gasto do Fluxo de Caixa — o número que alimenta data FI, cenários e Monte Carlo) com o **aporte real médio** de 12 meses (`apo` do histórico). Se divergem >20% pra qualquer lado, simula a data da meta com cada um (`_monthsToTarget`) e mostra as duas.
**Direções:** modelo > realidade ×1,2 → `warn` (projeções otimistas — a data exibida assume uma disciplina que não está acontecendo) · realidade > modelo ×1,25 → `info` (projeções conservadoras — a data real tende a ser melhor; atualize o cadastro).
**Por que importa:** é a reconciliação entre o mundo do cadastro e o mundo do histórico — sem ela, o número principal do app pode estar descolado da sua vida real sem ninguém avisar.

### 3.9 Meta FI — calibragem vs. gasto real
**O que faz:** compara `S.fi.targetMonthlyIncome` com o gasto médio real (últimos 12m). Se a meta for >1,8× o gasto real, calcula uma meta alternativa = gasto médio × 1,5 (arredondado pra R$500) e simula quantos meses faltam pra cada uma (`_monthsToTarget`).
**Por que 1,8× e 1,5×:** thresholds arbitrários — 1,8× dispara o alerta ("meta claramente descolada"), 1,5× é a sugestão de "folga generosa". Ajuste em `computeInsights()` se sua noção de razoável for outra.
**Caso não dispare:** mostra só o progresso normal (`info`).

### 3.10 Velocidade do plano — a derivada do progresso
**O que faz:** compara o % da meta FI de hoje com o de 12 meses atrás (`pl` de ambos ÷ Número FI) — "12 meses atrás" resolvido por calendário (mesmo padrão de 3.1), não pela posição `-13` do array. Mostra os pontos percentuais ganhos por ano e o **ETA empírico**: quanto falta ÷ quanto andou no último ano — extrapolação do que de fato aconteceu, sem premissa de retorno.
**Limiares:** avanço >0,5pp → `info` com o ritmo e o ETA · recuo >0,5pp → `info` com contexto ("um ano ruim não muda o plano; três seguidos mudam") · entre −0,5 e +0,5pp → nada (flat).
**Por que importa:** o Dashboard mostra a foto (% da meta); esta regra mostra o filme.

### 3.11 Coast FI — aportar virou escolha?
**O que faz:** usa `coastFIYears()` (anos até a meta com **zero aporte novo**, só juro real composto). Se `idade atual + coastFIYears ≤ idade de aposentadoria`, dispara `good`: o plano já se sustenta sem aportes — aportar deixou de ser obrigação e virou acelerador.
**Por que importa:** muda o peso de decisões de vida (trocar de trabalho, reduzir ritmo). Não dispara se a meta já foi atingida (o 3.9 cobre) nem se coast passa da idade de aposentadoria.

### 3.12 Objetivos — quanto as metas empurram a FI
**O que faz:** se há metas cadastradas (Linha da Vida → Objetivos), roda `goalsFIImpact()` — a projeção base com e sem as saídas das metas — e mede o delta na data da FI.
**Limiares:** metas tiram a FI do horizonte → `warn` · empurram ≥6 meses → `info` com o delta · não atrasam nada → `good`. Entre 0 e 6 meses → nada (ruído).

### 3.13 Perfil de risco — Necessidade × Capacidade × Tolerância
**O que faz:** usa `riskProfile()` (mesma régua do card na aba Patrimônio): retorno real *necessário* pra bater a meta no prazo (`requiredRealReturn()`, busca binária sobre o fluxo atual), horizonte até aposentar (capacidade) e maior queda já vivida (tolerância comprovada, `maxDrawdownHist()`).
**Gatilhos:** necessidade **baixa** + >40% da carteira em ativos de risco (rv/fii/intl) → `warn` "quando você já ganhou o jogo, não precisa continuar apostando" · necessidade **alta** → `info` (o plano depende de retorno alto — aporte, prazo ou risco).

### 3.14 Proteção — gaps de seguro de vida e invalidez
**O que faz:** usa `protectionGaps()` (mesmo cálculo da aba Proteção): capital de vida needs-based (gasto anual × anos de dependência + financiamento não coberto por MIP − patrimônio − apólices) e gap de invalidez (renda − teto INSS, × 12 × anos até aposentar, − apólice).
**Gatilhos:** qualquer gap > 0 → `warn` com os valores ("o único cenário que zera o plano inteiro — e o mais barato de transferir") · gaps zerados com apólice cadastrada → `good`. O gap de vida só conta se `dependentes > 0`.
**Premissas editáveis** na aba Proteção (dependentes, anos, apólices, MIP, teto INSS).

### 3.15 Alocação vs. banda de rebalanceamento
**O que faz:** usa `S.targetAllocation` e `S.rebalanceBand` (regra 5/25, mesma da aba Patrimônio) pra achar classes fora da banda. Se houver, sugere direcionar aporte novo pra mais abaixo da meta e pausar na mais acima (sem vender, sem IR).
**Se nada estiver fora:** `good`, "nada a fazer".

### 3.16 Concentração em juros (sensibilidade à Selic)
**O que faz:** soma % da carteira em `rf` + `cash`. Se ≥55%, avisa que a projeção depende do CDI/Selic se manterem altos e sugere rodar o cenário Pessimista com CDI ~10%.

### 3.17 Concentração em posição única
**O que faz:** acha a maior posição entre os ativos com **risco idiossincrático** (exclui `rf`, `cash` e `imovel` — cestas diversificadas ou fora do investível). Se ela passa de 35% da carteira total → `warn`: "o drawdown que a posição pode ter é o drawdown que o plano vai ter".
**Ação:** direcionar aportes novos para outras classes até o peso voltar ao confortável.

### 3.18 Financiamento — amortizar vs. investir
**O que faz:** converte a taxa mensal do financiamento (`S.amort.taxaMes`) em taxa anual efetiva, compara com o melhor rendimento líquido comparável em renda fixa (CDB líquido de IR a 15%, ou LCI isenta a 95% do CDI — usa o maior).
**Gatilho:** spread (RF líquida − custo) < 1,5pp → `warn`, priorizar amortização. Spread maior → `info`, manter posição.
**Simplificação:** IR de 15% fixo pro CDB (prazo longo) — não simula a tabela regressiva completa.

### 3.19 Colchão / cobertura do gasto (runway)
**O que faz:** `runwayMonths()` = patrimônio investível ÷ gasto médio mensal (12m). Também calcula quanto do gasto o *rendimento real* esperado da carteira já paga (régua da perpetuidade).
**Limiares:** ≥60 meses → `good` · ≥24 → `info` · <24 → `warn`.

### 3.20 Receita dependente de eventos atípicos
**O que faz:** nos últimos 24 meses, identifica meses atípicos (ver 3.24) e calcula que % da receita total eles representam.
**Gatilho:** ≥2 meses atípicos **e** ≥20% da receita → `info`, listando os meses ("o plano funciona *se* eles continuarem").

### 3.21 Qualidade de dados — histórico desatualizado
**O que faz:** compara o último mês do `HISTORICAL` com o mês corrente. Se a diferença é ≥2 meses, `info`: "todos os insights desta página estão calculados sobre dados que param em [mês] — sincronize antes de decidir".
**Por que importa:** decisão sobre foto velha é decisão errada com confiança.

### 3.22 Qualidade de dados — Mobills × Histórico
**O que faz:** lê `window._mobillsDivergences` (preenchido no Sync por `validateMobillsVsHistorical()`: meses fechados onde a soma do Mobills diverge >15% do `gas` da planilha). Se houver divergência (e houver dados Mobills), `warn` com o pior mês.
**Por que importa:** quando as duas fontes discordam, a Análise de Gastos e o Histórico contam histórias diferentes — algum número está errado.

### 3.23 Qualidade de dados — tabela CDI desatualizada
**O que faz:** se o ano corrente não está em `CDI_YEARLY`, `info` avisando que anos ausentes caem no fallback de 10% a.a., distorcendo Alpha e comparações. (Antes esse aviso só existia aqui no manual — agora o app cobra sozinho.)

### 3.24 Detecção de "mês atípico" (usada em 3.2, 3.6 e 3.20)
```js
recMed = mediana(receita dos últimos 24 meses, excluindo zeros)
isOutlier(mês) = mês.rec > 1.8 × recMed
```
Separa receita recorrente de bônus/eventos pontuais (13º, prêmio, venda de ativo). **O multiplicador 1,8× é o mesmo em todo o código** — se mudar, mude nos três usos (ou extraia pra uma constante).

## 4. Funções auxiliares (não geram insight por si só)

| Função | O que faz |
|---|---|
| `_median(arr)` | mediana de um array numérico |
| `isOutlier(h)` | ver 3.24 |
| `_monthsToTarget(w0, sav, rAnnual, target)` | meses até `target` com aporte fixo e retorno real composto, cap 600 meses |
| `_fmtAnos(months)` | formata meses em texto ("~8 anos", "já atingida", "mais de 50 anos") |
| `apoPLOf(h)` | `h.apoPL ?? h.apo ?? 0` — aporte que foi pro patrimônio líquido (exclui imóvel). Fonte de verdade pra qualquer conta de "resultado de mercado" (`Δpl − aporte`); usar `h.apo` (total) nessas contas é o bug que já apareceu 4 vezes no código (3.1, 3.4, `_rpYearRows`, `realizedReturns()`) — se escrever uma regra nova que subtrai aporte de um Δ de `pl`, é `apoPLOf`, não `h.apo` |
| `savingsRateOf(h)` | `h.txp ?? savingsRate(h)` — taxa de poupança da planilha quando sincronizada, só recalcula se a célula estiver vazia. Mesmo princípio do `apoPLOf`: preferir a coluna já calculada na planilha a recalcular do zero |

Reaproveitadas do resto do app (não redefinidas): `realizedReturns()`, `twr()`, `cdiAnnualized()`, `runwayMonths()`, `weightedReturn()`, `weightedReturnReal()`, `investableWealth()`, `fiNumber()`, `fiRate()`, `currentAge()`, `inflacaoPessoal()`, `coastFIYears()`, `maxDrawdownHist()`, `riskProfile()` / `requiredRealReturn()`, `protectionGaps()`, `goalsFIImpact()`, `monthsBetween()`, `addMonths()`, `fmt()` / `fmtK()` / `fmtPct()`.

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
7. Depois de validar, rode `scripts/build.ps1` (a partir da raiz do projeto) pra regerar o `index.html` autocontido (PWA).

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
| Divergência modelo vs. realidade | bloco 3.8 | ±20% (ratio >1,2 ou <0,8) |
| Meta FI "descolada" do gasto real | bloco 3.9 | meta > 1,8× gasto; alternativa = 1,5× gasto |
| Movimento mínimo pra reportar velocidade | bloco 3.10 | ±0,5pp no ano |
| Delta mínimo das metas pra virar insight | bloco 3.12 | 6 meses |
| Risco "demais" com necessidade baixa | bloco 3.13 (`riskProfile`) | >40% em rv/fii/intl |
| Carteira "concentrada" em juro | bloco 3.16 | ≥55% em `rf`+`cash` |
| Posição única "concentrada" | bloco 3.17 | ≥35% da carteira |
| Spread mínimo pra preferir investir sobre amortizar | bloco 3.18 | 1,5pp |
| Runway bom/ok/curto | bloco 3.19 | 60 / 24 meses |
| Histórico "velho" | bloco 3.21 | ≥2 meses atrás do mês corrente |
| Divergência Mobills×Histórico | `validateMobillsVsHistorical` | >15% |
| Multiplicador de "mês atípico" | bloco 3.24 | 1,8× a mediana |

Não há testes automatizados desses limiares — a validação é o smoke-test manual (seção 5, passo 6).

## 7. Limitações conhecidas (para lembrar antes de "corrigir")

- **Não é IA.** Não generaliza, não aprende, não pondera fora das ~23 regras escritas. Padrão novo = regra nova.
- **CDI_YEARLY é tabela fixa** com o CDI médio por ano. Anos ausentes caem no fallback de 10% — e a regra 3.23 avisa quando o ano corrente falta.
- **`realizedReturns()` prefere a coluna Rentabilidade da planilha** (`rent`, quando sincronizada) e só recalcula `(Δpl − apoPLOf(h))/pl` — sobre o patrimônio líquido — nos meses sem ela. Sem sync, o recálculo carrega ruído do aporte (converge em janelas 12m+). Meses sem o split PL/Imóvel (`apoPL`) caem no aporte total como aproximação — se parte foi pra imóvel, esse mês específico ainda distorce.
- **IR do CDB no bloco 3.18 usa alíquota fixa de 15%**, não a tabela regressiva completa.
- **`_monthsToTarget` assume poupança e retorno constantes** — não usa o motor de cenários completo. É aproximação pra estimar o efeito de mudar a meta (3.8/3.9).
- **A régua de invalidez (3.14) não desconta a valor presente** — soma simples do gap até a aposentadoria, deliberadamente conservadora.
- **O ETA empírico da velocidade (3.10) extrapola um único ano** — um ano excepcional (pra cima ou pra baixo) distorce; leia junto com o card de Rentabilidade.
- **Tendências de receita/aporte comparam períodos curtos** — sensíveis a um mês fora da curva mesmo após excluir outliers.

## 8. Onde tudo mora (referência rápida)

| Arquivo | O quê |
|---|---|
| `src/app.js` → `── 20b. INSIGHTS ──` | `computeInsights()`, `renderInsights()`, `generateInsights()`, helpers `_median`/`_monthsToTarget`/`_fmtAnos`, tabela `INS_SEV` |
| `src/app.js` → `── 7. GASTOS — O QUE CRESCEU E O QUE CAIU ──` | `_rpSec6b()`; ordem canônica em `_RP_SECTIONS` + `_rpSecNo()` |
| `src/app.js` → `── 1a. CACHE DO HISTÓRICO ──` | `hydrateHistorical()` + `HISTORICAL_KEY`; o `pendingWrites.push` correspondente vive no `syncFromSheets()` |
| `src/app.js` → seção `5. HELPERS`/`5b. ANALYTICS` | `riskProfile`, `coastFIYears`, `inflacaoPessoal`, `maxDrawdownHist`, `goalsFIImpact`, `CDI_YEARLY` |
| `src/app.js` → seção `19c. PROTEÇÃO` | `protectionGaps()` (compartilhado com a aba Proteção) |
| `src/index.html` | item de menu "💡 Insights" + `<div id="page-insights">` |
| `src/style.css` | `.insights-hero`, `.insights-summary`, `.ins-chip`, `.insight-card`, `.insight-*` |
| `scripts/build.ps1` | depois de qualquer mudança em `src/`, rodar pra regerar o `index.html` autocontido (PWA) |

---

# Relatório completo (PDF)

A aba Insights tem dois geradores. O de cima são os **cards de insight** (documentados acima). O de baixo é o **Relatório completo**: um documento de 13 seções que abre em tela cheia para leitura e imprime em A4 — no diálogo de impressão, "Salvar como PDF".

Localização no código: `src/app.js`, seção `── 20c. RELATÓRIO COMPLETO ──`. CSS em `src/style.css`, bloco `RELATÓRIO (.rp-*)` no fim do arquivo.

## R1. Por que é um documento próprio e não a tela impressa

Imprimir as páginas do app não funciona, e não é por falta de esforço no CSS:

- **O app é 100% dark.** Navegador descarta background na impressão por padrão → texto `#ecf0f6` em papel branco fica invisível.
- **Três textos usam `background-clip:text` + `-webkit-text-fill-color:transparent`** (`.page-title`, `.fi-number`, `.brand-gem`). Sem o fundo pintado, o preenchimento transparente não vira nada: título em branco no papel.
- **O documento não rola** — `body{height:100vh;overflow:hidden}`, quem rola é `#main`. Impressão sai com uma tela só.
- **Só a página ativa existe** (`.page{display:none}`). Forçar `display:block` nas outras não resolve: os canvases delas nunca foram instanciados e `destroyCharts()` zera `activeCharts` a cada `navigate()`.
- **Canvas do Chart.js é bitmap** e não escuta `matchMedia('print')`: sobe escalado, borrado, e sem refluxo para a largura A4. As cores de eixo (`#8ca3c1`) e grade (`#1e2d42xx`) são hardcoded na fábrica e desaparecem no branco.
- **Tabelas com `thead` sticky e `max-height`** são clipadas na paginação.
- **Cor semântica que só existe no background** (heatmap, zebra, barras) morre sem `print-color-adjust`.

Daí as três regras do módulo:

1. **Tema claro próprio.** `.rp-doc` define seus próprios tokens (`--ink`, `--paper`, `--acc`, `--pos`, `--neg`, `--warn`) **e redefine os do app** (`--text`, `--text-muted`, `--text-dim`, `--surface*`, `--border*`, `--green`, `--red`, `--yellow`, `--accent`…) para valores de papel. Isso é obrigatório, não zelo: o CSS global tem seletores de **elemento** que alcançam dentro do documento, e o pior deles é `td { color: var(--text) }` — com `--text` valendo `#ecf0f6` (o quase-branco do tema escuro), toda célula de toda tabela saía com **1,14:1 de contraste sobre papel branco**, ou seja, invisível. Redefinir os tokens no escopo do `.rp-doc` mata a classe inteira de vazamento de uma vez, em vez de caçar seletor por seletor. Depois disso: célula 17,8:1, cabeçalho e texto secundário 5,4:1, verde 5,4:1, vermelho 6,5:1, célula de heatmap no pior caso 4,9:1 — tudo acima do mínimo de 4,5:1.
2. **Gráfico é SVG inline**, escrito à mão (`_rpSvgLine`, `_rpSvgBars`, `_rpSvgPair`). Vetor: imprime nítido em qualquer DPI, reflui na largura da folha, cor sob controle, zero dependência. Nenhum Chart.js no relatório.
3. **A âncora é o último mês COM DADO**, nunca `new Date()`. Relatório de mês fechado não pode falar de um mês que ainda não existe na planilha. (A tela de Gastos ancora no mês do calendário em três lugares — `detectInsights`, `buildGastosTabHtml`, o bloco de pacing — e por isso mistura dois meses quando o sync está atrasado. O relatório não repete isso.)

## R2. As 14 seções

| # | Seção | Responde | Fontes |
|---|---|---|---|
| 1 | Retrato de hoje | onde eu estou, em oito números e dois parágrafos | histórico + cadastro |
| 2 | Patrimônio — trajetória | como cheguei aqui, nominal e em poder de compra | `patrimonioRealSeries`, `aporteRendimentoSeries`, `maxDrawdownHist` |
| 3 | Resultado — rentabilidade | a carteira está trabalhando ou só recebendo depósito? | `twr`, `cdiAnnualized`, `returnsMatrix`, `monthsSummary`, `portfolioVol` |
| 4 | Aportes | quanto entra, com que regularidade, e o modelo bate com a realidade | histórico + `_monthsToTarget` |
| 5 | Fluxo de caixa | receita, gasto, taxa de poupança honesta, inflação pessoal | `savingsRateOf`, `inflacaoPessoal`, `lifestyleCreepData` |
| 6 | **Gastos categorizados** | para onde vai o dinheiro, por seção, categoria, método e recorrência | Mobills |
| 7 | **Gastos — o que cresceu e o que caiu** | de onde o gasto cresceu, por categoria, e o que isso custa no plano | Mobills |
| 8 | **Carteira — balanceamento** | quem está fora do alvo e como voltar (por trade ou por aporte) | `S.portfolio`, `S.targetAllocation`, `S.rebalanceBand` |
| 9 | Independência financeira | quando, com que probabilidade, o dinheiro dura, e o Coast FI em anos **e em reais** | `buildScenarioPaths`, `findFIDate`, `monteCarloFI`, `monteCarloDecum`, `coastFIYears`, `riskProfile` |
| 10 | Objetivos | quanto as metas custam em tempo de liberdade | `goalValorNaData`, `goalsFIImpact` |
| 11 | Dívidas e financiamento | saldo, juros, e amortizar vs. investir | `debtNow`/`_rpDebtNowReal`, `financiamentoReal`, `_debtsYearlyRows`, `S.amort` |
| 12 | Proteção | os dois gaps, com memória de cálculo linha a linha | `protectionGaps` |
| 13 | Diagnóstico automático | os insights da parte de cima, agrupados por severidade | `computeInsights` |
| 14 | Metodologia | de onde vem cada número, com que premissa, e o que não confiar | — |

Cada seção é uma função `_rpSecN(c)` que devolve `{id, title, src, html}`. `buildReport()` chama as 14 dentro de `try/catch` individual: **uma seção que explode não derruba o relatório** — ela vira um bloco de erro nomeado e as outras 13 saem normais.

A numeração vem da posição no array `builders`, e a lista `_RP_SECTIONS` declara a ordem canônica por id. É ela que `_rpSecNo('diagnostico')` consulta para escrever "ver seção N" na prosa, e `buildReport()` compara o que montou contra ela e reclama no console se divergir. **Inserir seção = mexer só no array de builders e em `_RP_SECTIONS`** — nenhuma referência cruzada precisa ser recontada à mão (foi assim que a seção 7 entrou sem transformar "seção 12" numa mentira).

## R3. O contexto compartilhado

`_rpCtx()` calcula uma vez o que mais de uma seção precisa e devolve num objeto `c`:

| Campo | O quê |
|---|---|
| `c.lastD` / `c.stale` | âncora do relatório e defasagem em meses vs. o mês do calendário |
| `c.L12` / `c.L24` | slices do histórico |
| `c.rec12` `gas12` `apo12` `avgRec` `avgGas` `avgApo` | somas e médias de 12 meses |
| `c.recMed24` / `c.isOutlier(h)` | mediana de receita de 24m e o teste de mês atípico (1,8×, mesma régua do motor de insights) |
| `c.plNow` `patNow` `invest` `fin` `fiR` | patrimônio líquido, total, investível, Número FI e taxa ativa |
| `c.port` | `{rows, total, target, band}` |
| `c.mb` | **toda a agregação do Mobills** (ver abaixo) |
| `c.insights` | `computeInsights()`, já calculado |

`c.mb` é o que `renderExpenses()` mantém como variável local e não exporta: `bySec`, `bySecMonth`, `byNat`, `byNatMonth`, `byMonth`, `natCount`, `natLast`, `natSec`, `secOrder`, mais os helpers `win(k)` (janela de k meses terminando no último com dado), `secIn`, `natIn`, `totIn`. Se a Análise de Gastos e o relatório divergirem, é aqui que se compara.

**Filtro de data:** `c.mb` só agrega lançamentos do Mobills com `d <= lastD` (o mês do HISTÓRICO, a âncora do relatório inteiro). Lançamento futuro no Mobills (conta recorrente já cadastrada com antecedência) é descartado ANTES de agregar — não só no cálculo do "mês de referência", mas em tudo: `byMonth`, `byNat`, `natLast` etc. Sem esse filtro, um único lançamento futuro bagunçava a Seção 6 inteira (mês de referência, janelas de 3/6/12m, "último lançamento" por categoria, e até fazia a comparação "Mobills × planilha" sumir silenciosamente, porque `c.H.find(h => h.d === ref)` nunca acha um mês futuro no histórico). Sem overlap entre Mobills e histórico (caso raro), cai em usar tudo sem filtrar, pra não quebrar a seção.

Quando `MOBILLS` está vazio, `c.mb.ok` é `false` e a seção 6 mostra um bloco de estado vazio — o resto do relatório não depende dela.

## R4. Formatadores próprios (e por quê)

Os do app não bastam:

| Novo | Por quê |
|---|---|
| `_rpEsc(s)` | **obrigatório** em todo texto de planilha/Mobills (nome de ativo, categoria, meta, dívida, método). Exceção: `computeInsights().body/title` e `riskProfile().necTxt/tolTxt` já vêm com `<b>`/`<i>` de propósito — esses não são escapados |
| `_rpK(v)` / `_rpKS(v)` | `fmtK()` do app não trata negativo: cai em `fmt()` e sai `R$ -50.000` |
| `_rpPct(v)` | `fmtPct()` do app quebra com `null` (`.toFixed` de null) |
| `_rpPctS(v)` | percentual com sinal explícito |
| **`_rpPP(v)`** | **diferença entre duas taxas é p.p., não %.** Alpha, desvio de alocação, spread de financiamento e creep de inflação usam este |
| `_rpSafeHtml(s)` | para texto **redigido pelo app** que embute `<b>`/`<i>` de propósito mas interpola dado bruto sem escapar — `computeInsights().title/body/action` e `riskProfile().necTxt/tolTxt`. Escapa tudo e devolve só a whitelist `<b> <i> <br>`: mantém a ênfase, mata atributo e `<script>`. **O mesmo furo existe em `generateInsights()` (a página de Insights renderiza `i.body` cru) — o relatório não o herda, a página ainda tem.** |
| `_rpDur(m)` | meses → "3 anos e 2 meses" |
| `_rpCls(v, invert)` | classe de cor por sinal; `invert` para métricas em que cair é bom (gasto) |

## R5. Onde o relatório calcula coisa nova

Quase tudo reusa função existente. As exceções, todas dentro do módulo:

- **`_rpYearRows(c)`** — agregação por ano civil (patrimônio no fim, Δ investível, aporte total exibido, resultado de mercado = Δpl − apoPLOf, receita/gasto médios, taxa de poupança, retorno composto do ano). A coluna "Aporte" da tabela continua o total; só o "Mercado" usa o aporte-PL. Não existia: `lifestyleCreepData()` só dá receita/gasto.
- **`_rpDrawdownNow(c)`** — drawdown corrente (pico histórico de `pl` vs. hoje). O app só tinha o máximo histórico.
- **`_rpMilestones(c)`** — marcos de 100k em 100k. Os dados do card do Dashboard são locais lá.
- **Rota B do rebalanceamento** — distribuição déficit-proporcional só-compra, replicando `renderAporteSimulation()` (que lê o DOM e não devolve dado). Extraída em `_rpRotaBHtml(ap, rows, target, total, tgtTotal)`.
- **Alertas da seção 6** — as três regras de `detectInsights()` (spike vs. média 6m, tendência monotônica de 3 meses), reimplementadas na âncora do último mês com dado em vez de `new Date()`.
- **Custo efetivo do financiamento** — `(1+taxaMes)¹²−1` vs. melhor RF líquida, replicando a variável local do bloco 3.18 do motor de insights.
- **`_finGridLinhas()`** (`app.js`, perto de `debtNow`) — parser único do grid `FINANCIAMENTO` (espelho cru da aba "Financiamento" do sync, ver `_buildFinHistTab`): devolve TODAS as linhas com data (**qualquer** Natureza — "Parcela" e "Amortização" extraordinária), em ordem cronológica, já numéricas. Colunas esperadas: `Data, Natureza, Valor, Amortização, Juros, Seguro, Taxas, Correção Monetária, Saldo Remanescente, Meses Restantes`. `_finGridParcelas()` é um filtro em cima dele (só `natureza === 'parcela'`). Dois consumidores:
  - **`financiamentoReal()`** — usa `_finGridParcelas()` (só `natureza === 'parcela'`, exato) e pega a última linha. `_rpDebtNowReal(d, real)` usa `saldoAtual`/`parcelaAtual`/`jurosMes`/`amortMes`/`mesesRestantes` reais dali, e só reprojeta (via `debtSchedule`) `jurosRestantes`/`quitacao` daqui pra frente — a planilha não traz a taxa contratual, então taxa e sistema (SAC/Price) continuam vindo do cadastro (`S.debts`). Fica só em Parcela **de propósito, decisão explícita do usuário**: os cards do topo só fazem sentido em cima de uma parcela de verdade — uma linha de amortização extra (ou qualquer outra Natureza) não representa a mesma coisa e não deve virar "a posição atual".
  - **`financiamentoRealPorAno()`** — usa `_finGridLinhas()` **sem filtrar por Natureza nenhuma** — soma `amort`/`juros` de TODA linha com data, seja "Parcela", "Amortização", "Amortização - Parcela" ou qualquer outro rótulo que a planilha venha a ter. Saldo do ano = o da última linha de **qualquer tipo** naquele ano (se a última do ano foi uma amortização extra, é o saldo dela que vale, não o da última parcela). Ficar só em "Parcela" aqui foi um bug real: qualquer evento fora desse rótulo exato também reduz o saldo e ficava de fora da soma — "Abatido no ano" saía bem menor que a planilha. **Importante**: esse "soma tudo" é exclusivo da tabela Ano a Ano — os cards do topo (acima) continuam restritos a Parcela, de propósito, são coisas diferentes.
  - **`_schedYearRows()` → `_debtsYearlyRowsReal(x)`** — combina `financiamentoRealPorAno()` com a projeção teórica: anos já vividos = soma real; ano corrente = real (meses já pagos) **+** projeção do resto do ano (mesclados numa linha só); anos futuros = só projeção. `_schedYearRows` anda a partir do **mês da última parcela real** (`x.now.refMonth`), não de `new Date()` — importante porque o sync pode ficar defasado do calendário de hoje, e alinhar pelo calendário desalinharia o cronograma do ano que ele rotula. Antes disso tudo, a tabela era **só projeção pra frente** (nunca olhava pra trás) — anos já pagos simplesmente não apareciam.

  `_rpDebtNowReal`/`_debtsYearlyRowsReal` **só ativam com exatamente 1 dívida cadastrada** (`_rpSec10`: `debts.length === 1`) — com mais de uma, não há como saber a qual delas o único ledger da aba pertence (não existe coluna "qual dívida"), então cai no `debtNow()`/`_debtsYearlyRows()` teóricos pra todas. Quando ativo, a Seção 10 abre com um aviso "Posição real, não projeção" citando o mês da última parcela. **Cuidado ao adicionar contas nessa seção:** com dado real, "Valor" (parcela paga) pode não ser exatamente `Amortização + Juros` — pode incluir seguro/taxas/correção monetária do mês. Por isso o KPI/tabela somam `amortMes` direto, nunca `parcela − juros` (esse resíduo só era seguro quando a parcela era 100% teórica, por construção do `debtSchedule`).

### Campos editáveis (as únicas partes do relatório interativas de verdade)

Funcionam porque o relatório é **DOM vivo** no overlay, antes de imprimir — nenhum sobrevive ao PDF salvo (o PDF congela o valor que estava na tela no momento do print). Todos seguem o mesmo padrão: contexto puro (sem ler `S`/`HISTORICAL` de novo) guardado em `window._rp*` na hora de montar a seção, um `_rp*Html(...)` que devolve só o HTML do trecho, e um `_rp*Update()` ligado a `oninput`/`onclick` que substitui `innerHTML` de um container com `id` fixo.

| Onde | Campo | Recalcula | Handler |
|---|---|---|---|
| Seção 4 (Aportes) | Aporte mensal hipotético | Linha "Hipótese" da tabela modelo×realidade (`_monthsToTarget`) | `_rpAporteHypUpdate` — `oninput`, instantâneo |
| Seção 7 (Carteira) | Banda (p.p. e % do alvo) | KPI "Fora da banda" + tabela "Posição por ativo" | `_rpBandUpdate` — `oninput`, instantâneo. Rota A/B (abaixo) não dependem da banda, continuam corretas |
| Seção 8 (Independência FI) | Renda-alvo mensal e taxa de retirada | KPIs Número FI/Progresso + tabela "Data da FI por cenário" | `_rpFiUpdate` — botão **Recalcular** (não `oninput`: roda `buildScenarioPaths`+`findFIDate` por cenário, mais pesado). Muta `S.fi.*` temporariamente e restaura em `finally` no mesmo tick — nunca deixa o app com estado sujo. Gráfico de projeção e Monte Carlo **não** recalculam (ficam com a premissa original do cadastro) |
| Seção 10 (Dívidas) | Amortização extra hoje (+ qual dívida, se houver mais de uma) | KPIs "Meses economizados" / "Juros economizados" | `_rpAmortExtraUpdate` — `oninput`, instantâneo. Mantém a parcela atual fixa (regime "reduzir prazo") |

Nenhum desses toca `S` de propósito (exceto a Seção 8, que muta e desfaz na hora) — o objetivo é simular "e se", não editar o cadastro a partir do relatório.

## R6. Impressão

`@page { size: A4 portrait; margin: 13mm 12mm 14mm }`. O bloco `@media print`:

- Zera o que o app faz no shell: `html,body{height:auto;overflow:visible}`, `background-image:none`.
- **Esconde o app só quando o relatório está aberto**, via `body.rp-open` (classe posta por `openReport()`, removida por `closeReport()`). Sem esse gate, `.app{display:none}` valeria sempre no `@media print` e um <kbd>Ctrl+P</kbd> dado em qualquer outra tela imprimiria **uma folha em branco** — `.app` é a única árvore visível, e o overlay do relatório está `.hidden`.
- Tira o overlay do `position:fixed` (`position:static`) para ele paginar em vez de virar uma folha só.
- Reduz a escala tipográfica (documento cai para 9,4px; tabelas 8,6 / 7,9 / 7,2px conforme a densidade) e aperta o respiro horizontal das tabelas densas.
- `thead{display:table-header-group}` — cabeçalho repete em toda folha. `break-inside:avoid` em `tr`, `.rp-kpi`, `.rp-call`, `.rp-fig`. `break-after:avoid` em `.rp-sec-head` e `.rp-h3`, para não deixar título órfão no pé da página.
- `print-color-adjust:exact` **só onde a cor é dado**: heatmap, zebra, barras proporcionais, callouts, amostras de legenda (`.rp-leg i`) e os cartões de KPI. O `.rp-kpi` branco precisa estar na lista junto com o `.rp-kpis` cinza: com "Gráficos de plano de fundo" desmarcado (o default do Chrome), o pai forçado e o filho descartado fariam a tira inteira sair como um bloco cinza sólido.

**A largura é o que aperta, não a altura.** A folha não rola: o que passa de 186mm é cortado, sem aviso. A tabela mais larga (gastos por seção, 11 colunas) tem largura mínima de 639px contra 703px de área útil — 9% de folga, e ela não cresce mais com nome de seção comprido. O que destravou isso foi `white-space: normal` em `.rp-t tbody td`: **o app tem um `td { white-space: nowrap }` global** que travava todas as células, inclusive os rótulos de texto. Número continua `nowrap` (via `.rp-t .n`), rótulo quebra linha. Sem isso a mesma tabela media 695px — 8px de folga, e qualquer nome de seção vindo livre da planilha estourava.

O bloco responsivo do overlay é `@media screen and (max-width: 900px)` — o `screen and` é obrigatório. Sem media type a regra vale `all` e casaria também na impressão (A4 retrato = 703px), jogando os KPIs para 2 colunas e o índice para 1 no papel, o que engorda o PDF em cerca de uma folha inteira.

`printReport()` chama `window.print()` dentro de um `setTimeout(…, 60)`: Safari em PWA standalone às vezes ignora `print()` no mesmo tick do clique.

`openReport()` também usa `setTimeout` (não `requestAnimationFrame`) para montar o documento depois de pintar a barra: **rAF fica suspenso em aba oculta** e o relatório travaria em "gerando…" para sempre.

## R7. Testar sem abrir o browser

`buildReport()` não toca o DOM — é testável em Node. O smoke test cobre 8 cenários:

```
node scripts/smoke-relatorio.js full        # com Mobills, tudo cheio
node scripts/smoke-relatorio.js nomobills   # sem lançamentos → seção 6 degrada
node scripts/smoke-relatorio.js notargets   # sem alocação alvo → seção 7 sem plano
node scripts/smoke-relatorio.js shorthist   # 4 meses de histórico → sem 12m, sem 24m, sem YoY
node scripts/smoke-relatorio.js emptyport   # carteira vazia
node scripts/smoke-relatorio.js goals       # com metas cadastradas
node scripts/smoke-relatorio.js debts       # com dívida + seguro
node scripts/smoke-relatorio.js xss         # nomes com HTML dentro → o cenário falha se vazar cru
node scripts/smoke-relatorio.js histcache        # cache do histórico mais novo que o build → tem de reidratar
node scripts/smoke-relatorio.js histcache-velho  # cache mais velho que o build → tem de ser ignorado
node scripts/smoke-relatorio.js mobills14        # 14 meses de Mobills → seção 7 cai para a janela 6v6
node scripts/smoke-relatorio.js mobills4         #  4 meses → seção 7 vira estado vazio
```

O script vive em `scripts/smoke-relatorio.js`. Cada rodada grava um `out-<cenário>.html` autocontido (com o `style.css` inline) para abrir no browser, e falha se aparecer `NaN`, `undefined`, `Infinity`, `[object` ou `R$ -` no HTML. O esqueleto do stub de DOM está na seção 5.6 acima; o do relatório acrescenta `window.addEventListener`, `document.createElement`, `performance.now` e `requestAnimationFrame`.

Depois de validar: rodar `scripts/build.ps1` para regerar o `index.html` autocontido.

## R8. Limitações do relatório

- **O CAGR da seção 2 é crescimento de saldo, não retorno.** Inclui aporte — com o depósito inicial grande de 2017-12, dá 43% a.a. O retorno de verdade é o TWR da seção 3. O rótulo diz isso, mas vale lembrar.
- **Duas contas de gasto convivem:** seção 5 usa a coluna Gasto da planilha, seção 6 soma os lançamentos do Mobills. Divergem por construção; a divergência está medida no fim da seção 6.
- **Gasto do Mobills usa `Math.abs`** (como em todo o app): estorno e crédito inflam o gasto em vez de abater.
- **A seção Método de Pagamento usa `MOBILLS_RAW`** (inclui os termos ignorados) e o histórico inteiro, não 12 meses — é como a tela faz. Por isso o total dela não bate com o de gasto.
- **`currentAge()` tem 2026 hardcoded.** Vira erro de um ano a partir de 2027 — e o relatório avisa isso na seção 13.
- **Monte Carlo sem correlação entre classes** (herdado de `portfolioVol()`): superestima risco e alarga a dispersão dos percentis.
- **Impressão em PWA standalone no iOS é irregular.** O documento é legível em tela de qualquer forma; se `window.print()` não abrir, o caminho é Compartilhar › Imprimir.

### Onde o relatório diverge da tela — de propósito

Cinco pontos em que o número do relatório **não** é igual ao da aba correspondente. Todos deliberados, todos declarados no próprio documento:

| Métrica | A tela faz | O relatório faz | Por quê |
|---|---|---|---|
| Cobertura passiva (seção 8) | só o **nominal** de `passiveCoverage()` (usa `a.ret`, sem descontar IPCA) | mostra **os dois**, nominal e real, e usa o real para julgar | perpetuidade só se sustenta se o principal acompanhar a inflação; com a carteira atual a diferença é ~70 p.p. |
| "vs. média 6m" (seção 6) | média dos **5 meses anteriores** (o `deltaVsAvg6` chama de 6m) | média dos **6 anteriores**, sem o mês julgado, dividindo pelos meses com lançamento | com o próprio mês dentro da base, um gasto que dobrou aparece como +71% em vez de +100%, e o gatilho de 1,4× vira 1,52× na prática |
| Crescimento de receita/gasto (seção 13) | os campos `S.assumptions.incomeGrowth`/`expenseGrowth` | `avgGrowth()` sobre os `growthRate` dos itens ativos | aqueles dois campos são **código morto**: `projectPath()` lê `growthRate` item a item, e não existe input no DOM que grave os outros — ficam congelados em 5,0 / 5,5 |
| Marcos de 100 mil (seção 2) | `h.pat` | `h.pat` (era `h.pl`, corrigido) | usar `pl` atrasava cada marco em meses e sumia com os dois últimos |
| "% quitado" (seção 10) | sobre `valorTotal \|\| saldo` do cadastro | idem | usar o saldo de hoje faria o % começar perto de zero mesmo com metade paga |

E um ponto em que o relatório apenas **reconhece** a divergência em vez de escolher um lado: `pl` (coluna da planilha) × `investableWealth()` (soma da carteira cadastrada). Série no tempo vem de `pl`; meta e projeção vêm da carteira. Quando os dois passam de 2% de diferença, a seção 1 imprime um alerta explicando qual bloco usa qual base — divergir aí é sintoma, não detalhe: o sanity check do sync rejeita o portfólio quando ele vem estranho e mantém o antigo, sem tocar no `HISTORICAL`.

## R9. Onde mora

| Arquivo | O quê |
|---|---|
| `src/app.js` → `── 20c. RELATÓRIO COMPLETO ──` | formatadores `_rp*`, gráficos SVG, `_rpCtx()`, as 13 `_rpSecN()`, `buildReport()`, `openReport()`, `closeReport()`, `printReport()` |
| `src/app.js` → `renderInsights()` | o segundo card ("Relatório completo · PDF") com o botão `openReport()` |
| `src/style.css` → bloco `RELATÓRIO (.rp-*)` | tema claro do documento, `@page`, `@media print` |

---

# Cache do histórico — por que o app não abre mais com dado velho

**Sintoma.** Abrir o app mostrava a foto de patrimônio/receita/gasto/aporte do dia em que o `index.html` foi gerado, e só corrigia ~1,2s depois, quando o sync automático voltava. Quem abre o app diariamente e sincroniza a planilha duas vezes por mês esperava o sync todo dia para ver um número que já estava certo na véspera.

**Causa.** `HISTORICAL` era o único artefato do sync que **não era persistido**. O `syncFromSheets()` gravava tudo o mais em `localStorage` via `pendingWrites` — `finplan_mobills`, `finplan_financiamento`, `finplan_fluxogrid`, `finplan_fluxobold`, `finplan_fluxo_secoes` — e o portfólio ia junto no `S` pelo `saveState()`. O histórico só era substituído em memória (`HISTORICAL.length = 0; …push`), então morria no fim da sessão e o próximo boot caía no array `const` literal que o `build.ps1` congelou dentro do `app.js`.

Como praticamente tudo do app deriva do histórico — patrimônio, taxa de poupança, rentabilidade, TWR, aportes, insights, o relatório inteiro —, o efeito era a tela nascer errada e se corrigir sozinha na frente do usuário.

**Correção.** Seção `── 1a. CACHE DO HISTÓRICO ──`, logo abaixo do array:

- `syncFromSheets()` passou a empilhar `[HISTORICAL_KEY, HISTORICAL]` em `pendingWrites`, junto dos outros espelhos. Grava-se o array **já normalizado** — a conversão de `cres`/`rent`/`txp` de fração para pontos percentuais acontece uma única vez, no sync.
- `hydrateHistorical()` roda no momento em que o `app.js` é avaliado (antes de qualquer leitura), lê a chave e copia **literalmente** para dentro de `HISTORICAL`. Reidratar sem re-normalizar é o ponto crítico: normalizar de novo multiplicaria toda a rentabilidade por 100.
- `HISTORICAL_FROM_CACHE` guarda se o cache foi usado, para diagnóstico.

**Quatro travas**, todas cobertas por teste:

| Situação | O que acontece |
|---|---|
| JSON corrompido | `try/catch` → fica a foto do build |
| array vazio ou chave ausente | ignorado |
| linhas sem `d` no formato `YYYY-MM` | ignorado (valida todas antes de tocar o array) |
| cache **mais velho** que o embutido | ignorado — um `index.html` recém-gerado com dado mais fresco não pode ser arrastado de volta por um cache velho |

O custo é ~7,8 KB em `localStorage` para 103 meses.

**Efeito colateral bom.** Com histórico e Mobills os dois vindo do cache, a checagem de divergência entre as duas fontes passou a rodar no `init()` (`validateMobillsVsHistorical()`, dentro de `try/catch` para não travar o boot). Antes, `window._mobillsDivergences` ficava `undefined` até o primeiro sync, e o alerta "Mobills × Histórico divergem" e o bloco correspondente do relatório ficavam mudos em todo cold open.

**O que o sync automático virou.** Continua rodando (`setTimeout(…, 1200)` no `init()`, só se houver URL configurada), mas deixou de ser requisito para a tela estar certa — agora é atualização em segundo plano. O rótulo do botão (`✓ Sincronizado HH:MM`, restaurado de `finplan_last_sync`) passou a descrever de fato o dado que está na tela, não uma promessa.

---

# Seção 7 — Gastos: o que cresceu e o que caiu

A seção 6 mostra o retrato: quanto cada seção gasta hoje. A 7 mostra a **derivada por categoria individual** — de onde o gasto cresceu de verdade. Código em `src/app.js`, `_rpSec6b()` (o nome mantém a posição de origem: entrou depois da 6 e antes da carteira).

## V1. As duas escolhas que definem a seção

**Janela de 12 meses contra os 12 anteriores, não mês contra mês.** As duas janelas contêm os doze meses do calendário, então IPVA de janeiro, 13º, matrícula e viagem de julho aparecem nos dois lados e se cancelam: a comparação é **imune a sazonalidade**. O que sobra é deriva de padrão de vida. Mês contra mês, ou trimestre contra trimestre, mede calendário e chama de tendência.

Sem 24 meses de Mobills a seção cai para 6v6 e **avisa na cara** que ali parte de qualquer variação é sazonal, não tendência. Com menos de 3 meses com lançamento em algum dos lados, vira estado vazio dizendo o que falta. A troca é automática — quando o histórico chegar a 24 meses, a seção passa sozinha para 12v12.

**Ordenado por impacto em reais, não por percentual.** É a escolha que faz a seção valer algo. Uma categoria que foi de R$ 20 para R$ 60 subiu 200% e não muda nada no plano; outra que foi de R$ 1.500 para R$ 1.900 subiu 27% e custa R$ 4.800 por ano. Ranking por percentual enche a primeira tela de ruído — cafezinho, estacionamento, uma farmácia — e esconde as três linhas que de fato mexeram o orçamento. O percentual continua na tabela, como coluna, onde é contexto e não critério.

No dado atual isso aparece limpo: **Mercado (+5%) fica acima de Uber (+30%)**, porque são R$ 36 contra R$ 30 por mês.

## V2. O que a seção mostra

- **Quatro KPIs:** gasto médio/mês nas duas janelas, a variação em R$ e %, a variação **contra o IPCA** (gasto subindo 2% com IPCA em 5,5% é queda real de 3,4 p.p. — o sinal importa), e quantas categorias subiram, caíram, nasceram ou morreram.
- **Um veredito de concentração:** as altas somam X, as quedas devolvem Y, o líquido é Z. Se as três maiores altas respondem por ≥60% do aumento, o texto diz "concentrado — mexer em três linhas resolve"; abaixo disso, "difuso — é o padrão de vida inteiro subindo junto", que é o caso mais difícil e o que o leitor precisa ouvir.
- **O preço no plano.** O número que amarra esta seção ao resto do relatório: `Δ mensal × 12 ÷ taxa de retirada`. R$ 143/mês de gasto recorrente novo exigem **R$ 42.833 de patrimônio a mais** para serem bancados para sempre a 4%. É a tradução de creep em anos de trabalho, e o argumento mais forte do documento inteiro para cortar gasto fixo.
- **Maiores altas e maiores quedas**, até 15 cada: média/mês antes, agora, Δ/mês com barra, Δ%, e "Δ no ano" (o Δ × 12 — o que a mudança custa ou devolve em doze meses se ficar como está). Rodapé com o total de todas as altas e de todas as quedas, não só das 15 exibidas.
- **Consolidado por seção**, com a coluna "% do movimento" para localizar de qual seção veio a mexida.
- **Gráfico** com as 8 maiores altas e 8 maiores quedas no mesmo eixo — e aqui o vermelho/verde é **invertido** em relação ao resto do relatório, de propósito: nesta seção, cair é bom.

Categorias marcadas **novo** não existiam na janela anterior e **parou** deixaram de aparecer. Não têm variação percentual (dividir por zero), mas têm Δ em reais — e é por isso que ordenar por reais também as trata direito.

## V3. Duas armadilhas que a seção evita

**Dividir pela janela em vez dos meses com dado.** As médias dividem pelos meses **com lançamento** de cada janela, não por 12 fixo. Mês sem dado é lacuna de sync, não mês sem gasto: dividir por 12 quando só 9 meses têm lançamento inventaria uma queda de 25% que nunca aconteceu. As duas coberturas saem escritas no rodapé da seção.

**Somar percentuais.** Os Δ em reais somam: o total das altas menos o total das quedas dá exatamente o Δ do gasto médio, e isso é conferido por teste (`scripts/verifica-variacao.js` recalcula tudo direto das linhas cruas do Mobills e compara com o que a seção afirma). Percentuais não somam, e é por isso que o consolidado por seção usa "% do movimento" — participação no Δ absoluto — em vez de tentar agregar variações relativas.

## V4. Testes

```
node scripts/smoke-relatorio.js mobills14   # 14 meses → janela 6v6 + aviso de sazonalidade
node scripts/smoke-relatorio.js mobills4    #  4 meses → estado vazio, sem tabelas
```

Os dois asserts escopam a checagem no bloco `id="rp-gastos-variacao"`, e não no relatório inteiro: frases como "12 contra 12" aparecem também no *aviso* do modo 6v6 ("insuficiente para 12 contra 12"), e "contra 6" aparece na seção 6 — checar no documento todo dá falso negativo.

---

# Coast FI — as duas formas da mesma equação

O relatório mostra o Coast FI de dois jeitos na seção 9, e é importante entender que **não são dois cálculos**: é uma equação só, resolvida para incógnitas diferentes.

```
Meta = Patrimônio × (1 + r)^t
```

| | Fixa | Resolve para | O que responde | Onde |
|---|---|---|---|---|
| `coastFIYears()` | o patrimônio que você tem | **t** = `ln(meta ÷ atual) ÷ ln(1+r)` | "meu dinheiro coasta em N anos" | KPI da página FI, motor de insights, seção 9 do relatório |
| `coastFITarget()` | os anos até aposentar | **W₀** = `meta ÷ (1+r)^t` | "bastaria ter R$ X hoje" | card de progresso do Dashboard, KPI da página FI, seção 9 do relatório |

As duas vivem lado a lado em `src/app.js` (~L1173) e compartilham `_coastRealRate()`. Nenhuma das três telas recalcula a fórmula por conta própria — foi justamente para evitar a terceira cópia divergir que a versão em valor virou função em vez de ficar inline no relatório.

A segunda é a forma canônica na literatura de FIRE — o "Coast FI number" costuma ser um **valor**, um limiar contra o qual você compara o que tem. A primeira é mais útil para responder "e daí?". O relatório mostra as duas porque elas dizem coisas diferentes ao leitor: uma dá uma data, a outra dá uma meta intermediária concreta e mais perto do que a FI.

## C1. O `r` é o mesmo nas duas

Isso não é detalhe. As duas chamam `_coastRealRate()`:

```js
rReal = (1 + weightedReturn()/100) / (1 + ipca/100) - 1   // Fisher exato
```

Se fossem taxas diferentes, o relatório poderia dizer "coasta em 25,6 anos" (ou seja, cabe nos 26 que faltam) e ao mesmo tempo "faltam R$ 40 mil para o limiar" — contradição na mesma página. Amarradas ao mesmo `r`, é impossível.

**Retorno real contra meta em R$ de hoje: as duas pontas na mesma moeda.** Boa parte das calculadoras de Coast FI da internet mistura retorno *nominal* com meta em valores de hoje, o que devolve um limiar otimista demais — o erro composto por 26 anos não é pequeno.

## C2. O invariante, e o teste que o trava

Estar acima do limiar em reais **tem** de ser equivalente a coastar em menos anos do que faltam:

```
W₀ ≥ meta ÷ (1+r)^t   ⟺   ln(meta ÷ W₀) ÷ ln(1+r) ≤ t
```

O cenário `full` do smoke test confere isso e mais um round-trip: reaplicar `ln(meta ÷ limiar) ÷ ln(1+r)` tem de devolver exatamente o `t` de partida.

```
coast FI: PASSOU — coasta em 25.55 anos, faltam 26 | limiar 1363827 vs 1405080
          | acima-em-reais=true acima-em-anos=true | t(limiar)=26.000
```

Se alguém mexer no `r` de um lado só, ou trocar `investableWealth()` por `currentWealth()` num dos dois, o teste quebra.

## C3. Onde a métrica aparece

| Tela | O que mostra |
|---|---|
| **Dashboard** → card "Progresso à Independência Financeira" | marcador verde na própria barra na posição do limiar, mais a linha com o valor e a distância. Ver o Coast FI na régua muda a leitura do progresso: ele é um marco bem mais perto que a FI. |
| **Independência FI** → KPI "Coast FI" | os anos (como sempre) e, embaixo, `Limiar: R$ X · já passou por / faltam R$ Y`. O ⓘ abre a memória de cálculo com as duas leituras lado a lado. |
| **Relatório** → seção 9 | tabela linha a linha (meta, anos, retorno real, limiar, patrimônio, gap, e em quantos anos coasta) mais o veredito em prosa — e as **quatro entradas são editáveis**, ver C4. |

## C4. O simulador embutido na seção 9

As quatro entradas da equação — meta, anos até aposentar, retorno real e patrimônio — são `<input type=number>` dentro da própria tabela do relatório. Mexer em qualquer uma recalcula o limiar, a diferença, o % e os anos, via `_rpCoastSim()`. `_rpCoastReset()` volta tudo.

**Por que recalcular em vez de remontar:** `buildReport()` leva ~100ms e devolve uma string nova, o que jogaria a rolagem para o topo a cada tecla. `_rpCoastSim()` escreve só nas células derivadas, por id.

**O campo guarda dois valores.** `data-real` é o que aparece (a taxa arredondada para 6,78%) e serve ao reset e à detecção de edição; `data-exact` é a taxa sem arredondamento. Enquanto o campo não é tocado, a conta usa o exato. Sem isso, o reset devolveria R$ 1.362.459 onde o relatório tinha aberto com R$ 1.363.827 — 0,1% de diferença, mas é o mesmo botão dando dois números, e é assim que um relatório perde a confiança do leitor.

**O documento continua um documento.** O campo é texto com sublinhado tracejado, não caixa de formulário (`.rp-in`), e na impressão vira número puro em tinta preta e negrito, sem borda — a barra de dica some (`.rp-simbar`).

**Simulação impressa é declarada.** O que estiver na tela sai no PDF, inclusive valores simulados. Por isso, assim que qualquer campo difere do real, o callout troca para "Simulação — não são os seus números atuais", e esse aviso **também é impresso**. Nenhum PDF simulado se passa pelo retrato verdadeiro.

Dez cenários foram varridos no browser (retorno pessimista, aposentar aos 50, meta maior e menor, dobro do patrimônio, retorno zero, retorno negativo, meta já atingida, zero anos) confirmando que o invariante de C2 continua valendo **sob simulação**: estar ≥ 100% do limiar segue equivalente a coastar em menos anos do que os disponíveis, em todos os casos aplicáveis, sem nenhum NaN. A linha "Coasta em" mostra isso ao leitor em texto — *"com 26 anos disponíveis, cabe — e é por isso que o patrimônio está acima do limiar"*.

## C5. Uma armadilha adormecida

`coastFIYears()` aplica `weightedReturn()` — que pondera sobre a carteira **inteira** — a um `w0` que é `investableWealth()`, e esse **exclui imóvel**. Ou seja: a taxa vem de um conjunto de ativos maior do que o principal ao qual ela é aplicada.

Hoje isso não causa erro nenhum: não há ativo com `cat: 'imovel'` em `S.portfolio` (a diferença entre `pat` e `pl` no histórico vive só na planilha, não na carteira cadastrada), então os dois conjuntos coincidem e a taxa é a mesma — 12,649% pelos dois caminhos.

**Mas passa a mentir no dia em que um imóvel for cadastrado na aba Patrimônio.** O `ret` dele diluiria a taxa aplicada a um patrimônio do qual ele não faz parte, e o Coast FI apareceria mais distante do que é. A correção seria ponderar `weightedReturn()` só sobre `cat !== 'imovel'` dentro de `coastFIYears()` — não foi feita porque `coastFIYears()` é compartilhada com a página Independência FI e com o motor de insights, e mudá-la muda aquelas telas também.
