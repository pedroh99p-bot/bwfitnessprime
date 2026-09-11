# Validação da entrega — 10/09/2026

## Resultado

- Lint: aprovado, sem warnings.
- TypeScript: aprovado.
- Build de produção Next.js 15.5.25: aprovado.
- Playwright: **12 testes aprovados** na execução final (57,9 s).
- npm audit: **0 vulnerabilidades**; audit de dependências de produção também sem ocorrências.

## Cobertura

- 360, 390, 430, 768, 1024, 1280 e 1440 px: capturas, imagens carregadas, links internos e ausência de overflow horizontal da página.
- Nenhuma exceção de página capturada nas sete larguras.
- Logo oficial carregando pelo otimizador Next/Image; corrigido o HTTP 400 da fundação.
- 24 combinações de respostas do quiz, com START, PRIME e PERFORMANCE alcançáveis.
- Voltar preserva respostas; reset limpa escolhas; avançar exige seleção.
- Mensagem do WhatsApp inclui recomendação e três respostas, com destino +5521969017896.
- Link do resultado alcança o card correspondente, inclusive dentro do carrossel mobile.
- Abas de estrutura operáveis por setas; menu e assistente navegam por anchors.
- Bottom sheet mantém foco com Tab, fecha com Escape e devolve foco ao disparador.
- IMC: cálculo conhecido, campos vazios/inválidos e vírgula decimal.
- FAQ via Enter e Espaço.
- Carrossel com mouse drag e teclas; pausa do autoplay.
- prefers-reduced-motion: rollers estáticos, avaliações paradas e animações reduzidas.
- axe-core: nenhuma violação WCAG A/AA detectada na varredura da página em 390 e 1440 px.

## Verificações adicionais

- Swipe por eventos de toque em emulação mobile: deslocamento horizontal confirmado.
- Loop contínuo das avaliações: confirmou a passagem do final para o início sem alcançar uma borda vazia.
- Google Maps carregou a Rua Cinco de Janeiro e mostrou o Expresso Pizza na região. A rota aponta a busca da rua, com número do imóvel a confirmar.
- Passagem visual: navbar, hero nas sete larguras; finder, estrutura, equipe, modalidades, planos, resultado e mapa em capturas dedicadas.
- Corrigidos durante QA: foco Tab no diálogo, acentos dos títulos dourados, sobreposição do assistente com a chamada de scroll e estado de carregamento do mapa.

## Observação local de performance

Em uma navegação local de produção com emulação mobile, sem limitação de rede/CPU:
- FCP: 284 ms.
- Último LCP observado antes da interação: 424 ms.
- CLS observado: 0.
- First Load JS informado pelo build: 126 kB.

São observações locais, não resultados Lighthouse nem Core Web Vitals de usuários reais. INP de campo e dispositivos físicos não foram medidos.
Não há promessa de uma nota de performance específica.

## Artefatos e limites

Capturas, traces e métricas estão em artifacts/qa, test-results e playwright-report e não são enviados ao Git.
Não foram enviadas mensagens ao WhatsApp; foram verificados URLs e textos pré-preenchidos.
A validação automatizada não certifica acessibilidade completa. A política institucional final, dados operacionais e mídias ainda dependem da BW.
