# VISUAL_AUDIT.md — Auditoria Visual & Engenharia Reversa de Referências
## Projeto: BW Prime Fitness | Morro do Banco, Itanhangá - RJ
### Produzido por: MONTANA

---

## 1. Visão Geral da Auditoria

Este documento realiza a engenharia reversa detalhada das referências visuais e mockups fornecidos para a concepção da landing page da **BW Prime Fitness**. A análise separa com precisão **linguagem visual / padrões de interface** de **conteúdo de negócio**, assegurando integridade e performance técnica máxima.

---

## 2. Auditoria Individual por Referência

---

### Referência 0: Logo Oficial da Marca
**Arquivo**: Monograma 3D em Alta Resolução (`media_1788934705126.png`)
**URL Cloudinary**: `https://res.cloudinary.com/dhbrxzt5a/image/upload/v1788934582/7057b069-305e-4202-ade5-c384a205bade_1_bbhm9b.webp`

- **O que aproveitar**:
  - A tipografia facetada e tridimensional do monograma "BW" com chanfros angulares polidos e textura sutil de metal escovado.
  - A assinatura inferior "PRIME FITNESS" com peso visual sólido, proporção geométrica e espaçamento generoso (*tracking* ampliado).
  - O contraste absoluto do dourado metálico radiante sobre o preto puro (`#000000`).
  - Utilização como elemento principal no Preloader e na Floating Navbar.
- **O que não aproveitar**:
  - Evitar rasterizações estáticas pesadas em locais que exijam escalabilidade responsiva contínua (ex: rodapé ou marcas d'água sutis).
- **Componentes Identificáveis**:
  - `BrandLogo` (variante completa: Monograma + Wordmark).
  - `BrandMark` (apenas monograma BW para favicons, preloader e ícones de interface).
- **Comportamento Possível**:
  - Brilho metálico sutil no preloader com animação de luz varrendo a superfície chanfrada (*sheen shimmer*).
  - Escalonamento suave e retração na barra de navegação ao rolar a página.
- **Impacto Mobile (390px)**:
  - Altura otimizada entre 32px e 38px na barra fixa de navegação para não roubar espaço vertical precioso.
- **Adaptação Desktop (1280px - 1440px+)**:
  - Altura de 42px a 46px na Navbar com hover state apresentando reflexo dourado suave.
- **Inconsistências Identificadas**:
  - Em alguns mockups iniciais, o logo aparecia envolto em um aro circular dourado estilizado; a instrução do usuário define a logo 3D sem o aro circular externo como o ativo oficial definitivo.
- **Impacto de Performance**:
  - Utilizar formato WebP/AVIF com cache imutável via CDN Cloudinary. Peso inferior a 45KB.

---

### Referência 1: Hero Section — "SEU TREINO. SUA EVOLUÇÃO."
**Arquivo**: Mockup Hero (`media_1788934745827.jpg`)

- **O que aproveitar**:
  - **Floating Glass Navbar**: Barra arredondada tipo pílula suspensa (`backdrop-filter: blur`), borda refinada de 1px com brilho dourado sutil, CTA de ação rápida ("Agendar Aula") e botão de menu hambúrguer.
  - **Hierarquia Tipográfica do Headline**: Overline conceitual (`SAÚDE • DISCIPLINA • RESULTADOS`), primeira linha com impacto sóbrio em off-white (`SEU TREINO.`) e segunda linha em destaque monumental com gradiente dourado metálico (`SUA EVOLUÇÃO.`).
  - **Duplo CTA com Hierarquia Clara**:
    1. Primário: Botão dourado metálico com ícone de halteres e seta chevron ("Começar agora").
    2. Secundário: Botão dark glass com contorno dourado e ícone do WhatsApp ("Falar no WhatsApp").
  - **Barra de Confiança / Prova Social Inferior**: Micro-indicadores horizontais (Google, Equipe especializada, Ambiente premium).
  - **Slogans Editoriais de Fundo**: Tipografia vertical integrada à atmosfera ("DISCIPLINA TRANSFORMA RESULTADOS LIBERTAM", "MAIS QUE TREINO É EVOLUÇÃO").
- **O que não aproveitar**:
  - **Fotografia fotorrealista de academia como background geral**: Conforme diretriz estrita do usuário, a v1 não terá fotos no fundo. O fundo será construído com gradientes escuros, vinhetas sutis e um container preparado para o futuro vídeo em loop.
  - **Números fictícios inventados**: O print exibe "+500 avaliações", o que viola a regra de integridade de dados. Substituir por "5 estrelas no Google / Excelência avaliada".
- **Componentes Identificáveis**:
  - `FloatingNavbar`, `HeroSection`, `HeroHeadline`, `PrimaryGoldButton`, `GlassOutlineButton`, `TrustBadgesBar`, `FloatingAdvisorTrigger`.
- **Comportamento Possível**:
  - Transição de entrada (*fade-up* com escalonamento de 150ms) logo após o término do Preloader.
  - O botão primário recebe um efeito suave de pulso de luz (*subtle ambient glow*).
  - Indicador animado de scroll ("SCROLL PARA DESCOBRIR MAIS") que esmaece ao iniciar a rolagem.
- **Impacto Mobile (390px)**:
  - Altura calculada em `100dvh` (Dynamic Viewport Height) para garantir que toda a mensagem, CTAs e selos de confiança caibam acima da dobra sem corte indevido de botões.
- **Adaptação Desktop (1280px - 1440px+)**:
  - Layout assimétrico em duas colunas amplas ou centro monumental com maior respiro lateral.
  - O vídeo de fundo adquire formato panorâmico cinematográfico com degradê lateral para o preto do site.
- **Elementos Inconsistentes com o Branding**:
  - O avatar flutuante de suporte presente no mockup original requer alinhamento para não sobrepor botões principais em telas pequenas.
- **Impacto de Performance**:
  - Alto custo em potencial se o backdrop-filter for aplicado em áreas muito grandes. Deve ser restrito estritamente à pílula da Navbar e ao card do chat flutuante.

---

### Referência 2: Hub de Conversão — Resultado do Treino Ideal
**Arquivo**: Mockup Plano Recomendado (`media_1788934745838.jpg`)

- **O que aproveitar**:
  - **Conceito de Recomendação Personalizada**: A sensação de exclusividade gerada pelo título "PLANO RECOMENDADO PARA VOCÊ".
  - **Card de Alto Padrão (Glass Card)**: Moldura escura translúcida com borda dourada iluminada e raio de curvatura moderno (`rounded-2xl`).
  - **Estrutura de 3 Pilares com Ícones em Caixas Douradas**:
    1. Acompanhamento com especialistas (ícone de equipe).
    2. Modalidades compatíveis com seu objetivo (ícone de halteres).
    3. Evolução com constância (ícone de gráfico ascendente).
  - **Sub-card do Especialista / Orientador de Recepção**: Foto do profissional com citação de acolhimento ("Vou te ajudar no próximo passo.") e selo do Google (4,9 / 5 estrelas).
  - **Duplo CTA de Fechamento**: Botão dourado para "Conhecer plano" e botão de WhatsApp para contato imediato.
- **O que não aproveitar**:
  - Fundo fotográfico de pesos desfocados (substituir por atmosfera escura pura com brilho radial dourado no centro do card).
  - Nome de profissional ("Bruno") como definitivo sem validação cadastral (usar como referência ou placeholder estruturado).
- **Componentes Identificáveis**:
  - `WizardResultCard`, `PlanHeader`, `ThreePillarFeatureGrid`, `SpecialistQuoteBadge`, `ConversionActionButtons`.
- **Comportamento Possível**:
  - Transição de entrada com efeito de revelação triunfal (*zoom-fade* e micro-confetes dourados ou brilho luminoso).
  - O botão de WhatsApp deve injetar parâmetros na URL com o plano e o objetivo selecionados pelo usuário no Wizard!
- **Impacto Mobile (390px)**:
  - Disposição vertical harmônica, ícones alinhados em grid de 3 colunas compactas, botões ocupando 100% da largura com altura mínima de toque de 52px.
- **Adaptação Desktop (1280px - 1440px+)**:
  - Grid bento: à esquerda o resumo das respostas do usuário ("Seu Perfil de Treino"), e à direita o card monumental do Plano Recomendado com visualização expandida dos benefícios.
- **Elementos Inconsistentes com o Branding**:
  - Garantir que o texto de suporte mencione Morro do Banco / Itanhangá - RJ.
- **Impacto de Performance**:
  - Baixo impacto se o card usar `background: rgba(22, 22, 26, 0.75)` com gradiente de borda CSS puro em vez de filtros pesados de desfoque.

---

### Referência 3: Estrutura & Ambientes — "A EXPERIÊNCIA BW"
**Arquivo**: Mockup Estrutura (`media_1788934745834.jpg`)

- **O que aproveitar**:
  - **Abas de Filtragem de Modalidades (Segmented Control)**: Pílulas com ícone e texto: `Musculação`, `Cardio`, `Funcional`, `Peso livre`. Aba ativa com borda dourada e fundo escuro elevado.
  - **Card Central de Mídia da Estrutura**: Moldura arredondada generosa (`rounded-3xl`), borda dourada suave com luz no topo (*rim light*), setas de navegação lateral (`<` e `>`), contador de slides (`1 / 5`) e botão de vídeo play flutuante ("Conheça nossa estrutura").
  - **Tríade de Diferenciais da Infraestrutura**:
    1. Ambiente premium (Conforto e bem-estar).
    2. Equipamentos de alta performance.
    3. Acompanhamento com especialistas.
  - **Botão Amplo de Ação**: "Explorar estrutura" com ícone de pin/mapa.
- **O que não aproveitar**:
  - **INCONSISTÊNCIA GRAVÍSSIMA NO PRINT**: O print exibe a tag `BW PRIME FITNESS / SÃO PAULO - SP`. O negócio real situa-se no **Morro do Banco, Itanhangá - Rio de Janeiro / RJ**! Essa inconsistência deve ser corrigida imediatamente para a localização real com referência ao Expresso Pizza.
  - Fotos fotorrealistas de terceiros como background da página inteira. As fotos da estrutura devem ficar estritamente delimitadas dentro da janela do carrossel/player.
- **Componentes Identificáveis**:
  - `CategoryFilterTabs`, `StructureMediaShowcase`, `CarouselControls`, `VideoPlayTriggerModal`, `FeaturePillCard`, `LocationTagPill`.
- **Comportamento Possível**:
  - Clique nas abas filtra e transiciona suavemente os slides de imagem do carrossel.
  - Toque no botão de play abre um modal leve (*Lightbox*) com o vídeo tour da academia.
  - Suporte a arraste com o dedo (*touch swipe*) no carrossel mobile.
- **Impacto Mobile (390px)**:
  - Abas com rolagem horizontal livre sem barra feia de scroll (`no-scrollbar`). Card do carrossel com proporção 16:10 ou 4:3.
- **Adaptação Desktop (1280px - 1440px+)**:
  - Abas centralizadas com layout espaçoso. Carrossel com imagens em alta definição e efeito de zoom lento (*Ken Burns effect*) opcional.
- **Impacto de Performance**:
  - Carregamento postergado (*lazy loading*) de todas as imagens que não estiverem ativas no primeiro slide. Uso de formatos modernos WebP.

---

### Referência 4: Especialistas — "ESPECIALISTAS PARA SUA EVOLUÇÃO"
**Arquivo**: Mockup Equipe (`media_1788934745821.jpg`)

- **O que aproveitar**:
  - **Cards Verticais de Treinadores**: Retrato do profissional com iluminação dramática quente de fundo, camisa preta com logo dourado discreto.
  - **Estrutura de Conteúdo do Card**:
    - Nome do profissional e cargo em destaque (ex: "BRUNO W. / PERSONAL TRAINER").
    - Pílulas com especialidades/focos de atuação (ex: `Hipertrofia`, `Emagrecimento`, `Iniciantes`, `Condicionamento`, `Saúde`).
    - Frase de filosofia / citação pessoal entre aspas (ex: *"Disciplina hoje, resultados amanhã."*).
  - **Card em Destaque**: Borda dourada luminosa contínua e escala ligeiramente maior, indicando o profissional selecionado.
  - **Controles de Paginação**: Pontos de indicador (*dots*) e botão de avanço (`>`).
  - **Botão de Ação**: "Conhecer a equipe" em degradê dourado com ícone de grupo.
- **O que não aproveitar**:
  - **Dados e números inventados no rodapé do print**: "+1200 alunos", "4,9 avaliações". Estes dados são puramente especulativos no mockup e não devem ser exibidos como fatos sem validação expressa do cliente.
  - Nomes e fotos reais de terceiros sem cessão de imagem. Devem ser tratados como placeholders elegantes até o envio das fotos reais do time BW.
- **Componentes Identificáveis**:
  - `SpecialistsSection`, `CoachCard`, `SpecialtyBadge`, `CarouselTrack`, `CarouselDots`, `TeamCTAButton`.
- **Comportamento Possível**:
  - Navegação carrossel no mobile; no desktop, apresentação em grade elegante com efeito hover revelando a citação ou redes sociais profissionais.
- **Impacto Mobile (390px)**:
  - Card central focado ocupando cerca de 75% da largura da tela com o próximo card parcialmente visível na borda direita (*peek effect*) para convidar ao swipe.
- **Adaptação Desktop (1280px - 1440px+)**:
  - Grid de 3 ou 4 colunas simultâneas com respiro amplo, eliminando a necessidade de carrossel para quem tem tela larga.
- **Impacto de Performance**:
  - Otimização rigorosa das fotos dos treinadores (dimensões exatas de 400x500px, WebP, peso máximo de 35KB por imagem).

---

## 3. Síntese Comparativa: Referência Visual vs. Realidade do Negócio

| Elemento Visual no Print | Como Aparece no Mockup | Como Deve Ser no Projeto Real (BW Prime) |
| :--- | :--- | :--- |
| **Localização** | "São Paulo - SP" | **Morro do Banco, Itanhangá - Rio de Janeiro / RJ (Ref: Expresso Pizza)** |
| **Avaliação Google** | "4,9 no Google (+500 avaliações)" | **"5 estrelas no Google / Excelência avaliada" (sem número fictício)** |
| **Alunos** | "+1200 alunos" | **Placeholder ou omitido até confirmação real** |
| **Planos & Preços** | "Plano Prime" genérico | **Estrutura transparente com chamada para WhatsApp / Recepção** |
| **Background Geral** | Foto fotorrealista da academia desfocada | **Dark clean, gradientes atmosféricos pretos/dourados, sem fotos de fundo (exceto container futuro do vídeo do Hero)** |
| **Assinatura** | Não aparecia no print | **Obrigatório: PROJETO PRODUZIDO POR MONTANA** |
| **Paleta** | Preto e Dourado | **Preto + Dourado Metálico + Off-White (Zero rosa, Zero gamer)** |

---

## 4. Recomendações Críticas de Performance
1. **Controle de Backdrop-Filter**: Limitar o uso de desfoques pesados de CSS a no máximo 2 instâncias visíveis na tela ao mesmo tempo.
2. **Rollers em CSS Puro**: Marquees devem rodar através de `@keyframes` com `transform: translateX(-50%)` e `will-change: transform`, nunca via manipulação de estado React ou JavaScript a 60fps.
3. **Responsividade Mobile-First Estrita**: Todos os componentes devem nascer perfeitos em 390px de largura física antes de qualquer adaptação para desktop.
