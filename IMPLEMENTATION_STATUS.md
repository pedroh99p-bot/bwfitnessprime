# Estado da implementação — 10/09/2026

Este arquivo registra o estado entregue. VISUAL_AUDIT, PAGE_BLUEPRINT e IMPLEMENTATION_PLAN permanecem como referências de planejamento; exemplos históricos nesses documentos não são dados operacionais aprovados.

## Implementado

- Navbar com navegação desktop, menu mobile, redução ao scroll e anchors funcionais.
- Hero à esquerda, logo oficial otimizada, entradas coordenadas e selo Google reutilizável.
- Cinco rollers com pausa, observação de viewport e movimento reduzido.
- Finder de três etapas com seleção, voltar, progresso, preview desktop, três recomendações determinísticas, resultado, reset e WhatsApp personalizado.
- Estrutura com quatro abas acessíveis e modal de tour provisório.
- Equipe com carrossel, arraste e bottom sheet de perfil.
- Modalidades em carrossel manual, sem autoplay.
- Método editorial com linha de progresso ao scroll.
- Planos provisórios START, PRIME e PERFORMANCE, destaque Prime, carrossel mobile e três colunas desktop.
- Cinco slots de avaliações evidentes; autoplay lento, loop, pausa e arraste.
- Calculadora de IMC com campos numéricos, validação, indicador e aviso obrigatório.
- Google Maps carregado sob demanda, endereço e referência confirmados.
- Horários provisórios, FAQ animado por teclado, CTA final e rodapé MONTANA.
- Assistente com microbolha temporária, atalhos, teclado e safe area.
- Aviso de privacidade factual para esta versão, com documento institucional ainda pendente.
- Lint, checagem de tipos, testes Playwright e configuração de build.

## Decisões

O repositório remoto estava vazio e a branch original não possuía commits nem upstream; o pull não tinha histórico para incorporar. A implementação está em codex/complete-landing.

A configuração duplicada foi consolidada. Foram removidos nomes fictícios, depoimentos inventados, horários arbitrários, promessa de gratuidade, benefícios comerciais e endereço excessivamente preciso sem confirmação.

A regra do quiz usa objetivo, frequência e preferência. START é sugerido para saúde/bem-estar ou 2x/semana. PERFORMANCE exige 4x+, autonomia e objetivo de massa ou condicionamento. Os outros perfis retornam PRIME. Todos os resultados são explicitamente provisórios.

A logo mantém a URL oficial e a proporção original, com permissão restrita ao caminho Cloudinary da marca.

## Aguardando conteúdo da BW

- Fotos da academia, equipe e ponto de referência; vídeos do hero e tour.
- Nomes, funções, especialidades e CREF reais.
- Planos e benefícios aprovados, preços e condições.
- Grade horária e funcionamento em feriados.
- Cinco depoimentos reais e autorização de uso.
- Instagram e link oficial das avaliações.
- Número do imóvel ou pin compartilhado para precisão da entrada.
- Domínio definitivo e política de privacidade institucional.

## Limites

Nenhuma mensagem foi enviada pelo WhatsApp. Os testes conferem links e mensagens pré-preenchidas.
O mapa é uma busca da Rua Cinco de Janeiro, não um pin confirmado da entrada.
As capturas e métricas locais não substituem a verificação em dispositivos físicos nem dados de Core Web Vitals de usuários reais.
