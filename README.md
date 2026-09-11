# BW Prime Fitness

Landing page mobile first para a BW Prime Fitness, no Morro do Banco, Itanhangá — RJ.
Produção: **MONTANA**.

## Desenvolvimento

Requisitos: Node.js 20.19+ e npm.

```sh
npm ci
npm run dev
```

## Verificação e produção

```sh
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm test
npm start
```

Os testes de navegador iniciam a build de produção na porta 3100. Não é necessário iniciar outro servidor.
Capturas e relatórios são gravados em `artifacts/qa`, `test-results` e `playwright-report`, ignorados pelo Git.

## Organização

- `src/app/page.tsx`: composição da landing, renderizada inicialmente no servidor.
- `src/config/siteContent.ts`: única fonte de conteúdo, contatos e placeholders.
- `src/data/site.ts`: reexportação de compatibilidade, sem duplicar dados.
- `src/styles/tokens.ts`: tokens de marca; o layout expõe cores como variáveis CSS para Tailwind e estilos.
- `src/components/layout`: primitives preservadas e utilizadas nas seções.
- `src/components/ui`: botões, marca, mídia provisória, carrossel, diálogos, contato e animações.
- `src/lib/training.ts`: recomendação inicial, mensagem do quiz e cálculo de IMC.
- `tests/landing.spec.ts`: jornadas, responsividade, integridade, teclado e acessibilidade.

Next.js foi atualizado de 14 para **15.5.25** para corrigir vulnerabilidades reportadas pelo npm audit.
React 18 e Tailwind 3 foram preservados. Os carrosséis usam scroll nativo; não foi instalada biblioteca de carrossel.

## Dados confirmados nesta entrega

- WhatsApp: **+55 21 96901-7896**.
- Rua Cinco de Janeiro, Morro do Banco, Itanhangá, Rio de Janeiro — RJ.
- CEP **22641-190**.
- Próximo ao Expresso Pizza.
- Google: 5,0 / cinco estrelas, sem contagem de avaliações.

O mapa usa a busca da rua informada. Não afirma número do imóvel nem coordenadas da porta da academia.

## Dados editáveis

As variáveis de `.env.example` são públicas e opcionais. Copie para `.env.local` somente se precisar substituir os dados de configuração.
Em Next.js, valores `NEXT_PUBLIC_*` são incorporados durante a build; uma mudança requer nova build.

Sem URL de Instagram ou de avaliações, o respectivo link abre um aviso sobre o dado pendente.
Sem um telefone válido, os botões apresentam a mensagem para copiar, em vez de abrir conversa com número fictício.
O domínio definitivo só entra em canonical/metadata quando `NEXT_PUBLIC_SITE_URL` estiver configurado.

## Pendências reais

Fotos e vídeos oficiais; identificação, fotos, CREF e especialidades dos profissionais; nomes e condições finais dos planos; valores; benefícios; horários; depoimentos autorizados; perfil do Instagram; link oficial das avaliações Google; número do imóvel; domínio e URL futura da MONTANA; política institucional de privacidade.

START, PRIME e PERFORMANCE são propostas solicitadas para esta fase. Os cards deixam explícito que nomes, preços e benefícios estão pendentes.
O quiz sugere um ponto de partida para conversa, sem prescrever treino ou assegurar benefício comercial.
O IMC é calculado no navegador e acompanhado do aviso de que uma avaliação profissional considera outros fatores.

A entrega cobre implementação e envio ao GitHub. Não configura hospedagem de produção.
