# COMPONENT_INVENTORY.md — Catálogo & Especificação de Componentes
## Projeto: BW Prime Fitness | Morro do Banco, Itanhangá - RJ
### Produzido por: MONTANA

---

## 1. Visão Geral da Arquitetura de Componentes

O sistema de componentes da **BW Prime Fitness** foi projetado com base em princípios de **Atomic Design**, combinando primitivas acessíveis com organismos interativos de alto desempenho.

Todos os componentes são estritamente orientados a:
- **Mobile-first** (nativos e confortáveis ao toque em 390px).
- **Aceleração por hardware** (sem gargalos em transições).
- **Semântica HTML5 & WCAG 2.1 AA** (acessibilidade por teclado e leitores de tela).
- **Conformidade Estética**: Preto profundo (`#080808`), Dourado Nobre (`#D4AF37`) e Off-white (`#F8F8F8`). Sem rosa, sem estética gamer.

---

## 2. Primitivas & Átomos (UI Core)

### [A01] `ButtonPrimaryGold`
- **Descrição**: Botão de conversão principal com gradiente metálico dourado, chanfro de iluminação e borda refinada.
- **Props**: `children`, `iconLeft?`, `iconRight?`, `href?`, `onClick?`, `size?: 'sm' | 'md' | 'lg'`, `fullWidth?: boolean`.
- **Estados**:
  - *Default*: Fundo com gradiente dourado metálico (`--bw-gradient-gold`), texto escuro puro (`#120D02`) em peso 700, cantos `rounded-full`.
  - *Hover*: Gradiente amplificado em luminosidade (`--bw-gradient-gold-hover`), elevação `scale-[1.02]` e sombra dourada suave (`box-shadow: 0 0 20px rgba(212,175,55,0.3)`).
  - *Active / Focus-Visible*: Outline de 2px dourado claro com offset de 2px preto.
  - *Disabled*: Opacidade 50%, cursor não permitido.

---

### [A02] `ButtonGlassOutline`
- **Descrição**: Botão secundário de alta sofisticação com acabamento glass translúcido e contorno dourado ou off-white.
- **Props**: `children`, `iconLeft?`, `iconRight?`, `href?`, `onClick?`, `variant?: 'gold-border' | 'muted-border'`.
- **Estados**:
  - *Default*: Fundo `rgba(18, 18, 22, 0.7)`, borda de 1px `rgba(212, 175, 55, 0.35)`, texto off-white `#F8F8FA`.
  - *Hover*: Borda `rgba(212, 175, 55, 0.7)`, fundo ligeiramente iluminado.

---

### [A03] `PillBadge`
- **Descrição**: Etiquetas compactas para categorias, modalidades e especialidades de professores.
- **Props**: `label`, `icon?`, `active?: boolean`, `onClick?`, `variant?: 'gold' | 'dark' | 'outline'`.
- **Aplicações**: Tags de especialidades (`Hipertrofia`, `Emagrecimento`, `Iniciantes`) e abas do carrossel de estrutura.

---

### [A04] `GlassPanel`
- **Descrição**: Superfície base para cards e modais inspirada em interfaces Apple/iOS.
- **Props**: `children`, `className?`, `borderVariant?: 'gold' | 'subtle' | 'none'`, `intensity?: 'light' | 'regular'`.
- **Estilo**: `background: rgba(18, 18, 22, 0.75); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.08);`.

---

### [A05] `IconBox`
- **Descrição**: Container quadrado ou circular com borda dourada para abrigar ícones SVG padronizados (20px ou 24px) com traço de 1.75px.

---

### [A06] `AvatarBadge`
- **Descrição**: Retrato em miniatura com anel dourado e indicador de status online (ponto verde pulsante).

---

## 3. Moléculas Interativas

### [M01] `WizardStepIndicator`
- **Descrição**: Barra de progresso segmentada com 3 etapas do teste "Encontre seu Treino Ideal".
- **Props**: `currentStep: 1 | 2 | 3`, `totalSteps: 3`.
- **Estados**: Indicador de etapa concluída em dourado sólido; etapa atual pulsando; etapas futuras em cinza muted.

---

### [M02] `WizardOptionCard`
- **Descrição**: Cartão clicável para seleção de objetivos, frequência ou estilo de treino.
- **Props**: `title`, `description`, `icon`, `selected: boolean`, `onSelect: () => void`.
- **Estados**:
  - *Unselected*: Borda escura sutil, ícone off-white.
  - *Selected*: Borda dourada brilhante com glow perimetral de 2px, ícone dourado preenchido, checkmark visível no canto superior direito.

---

### [M03] `MarqueeRoller`
- **Descrição**: Faixa editorial de texto infinito em movimento contínuo via CSS keyframes.
- **Props**: `items: string[]`, `direction?: 'left' | 'right'`, `speedSeconds?: number`, `pauseOnHover?: boolean`.
- **Acessibilidade**: Ativação automática de modo estático via `@media (prefers-reduced-motion: reduce)`.

---

### [M04] `CoachCard`
- **Descrição**: Card individual de especialista exibindo foto profissional, nome, cargo, badges de especialidade e quote.
- **Props**: `name`, `role`, `photoUrl`, `badges: string[]`, `quote`, `isActive?: boolean`.
- **Comportamento**: Elevação sutil e moldura dourada quando em foco.

---

### [M05] `AccordionItem`
- **Descrição**: Item retrátil para perguntas frequentes com animação de altura via CSS grid ou transition.
- **Props**: `question`, `answer`, `isOpen: boolean`, `onToggle: () => void`.
- **Acessibilidade**: `aria-expanded`, `aria-controls`, controle via teclado (Enter / Espaço).

---

### [M06] `FloatingAdvisorTrigger`
- **Descrição**: Botão flutuante no canto inferior direito ("Posso ajudar?") com miniatura do consultor da academia e indicador de disponibilidade.
- **Props**: `advisorName`, `avatarUrl`, `statusText`, `onClick`.

---

## 4. Organismos & Seções Complexas

### [O01] `PreloaderOverlay`
- **Função**: Controla a tela preta inicial com revelação do monograma oficial BW em dourado metálico, esmaecimento progressivo e liberação do scroll da página.
- **Estados**: `loading` -> `fading_out` -> `unmounted`.

---

### [O02] `FloatingNavbar`
- **Função**: Barra de topo flutuante com logo oficial, links desktop, botão "Agendar Aula" e menu gaveta mobile.
- **Comportamento**: Adiciona sombra e fundo glass ao detectar scroll maior que 20px.

---

### [O03] `HeroBanner`
- **Função**: Abertura monumental com overline, headlines em camadas, duplo CTA, selos de confiança e container preparado para o futuro vídeo em background com overlay escuro.

---

### [O04] `WizardInteractiveHub`
- **Função**: Motor do quiz em 3 passos com transição suave entre perguntas e cálculo do plano ideal.
- **Lógica de Estado**:
  - `step`: 1, 2, 3 ou 'result'.
  - `answers`: Armazena as escolhas para personalização da mensagem de WhatsApp.

---

### [O05] `WizardResultCard`
- **Função**: Apresenta o plano recomendado com os 3 pilares de benefícios, quote do consultor e botões de fechamento imediato.

---

### [O06] `StructureMediaShowcase`
- **Função**: Seção "A Experiência BW" com segmented control de modalidades (Musculação, Cardio, Funcional, Peso Livre), carrossel de fotos com contador (`1 / 5`) e botão de play de vídeo tour.

---

### [O07] `CoachesShowcase`
- **Função**: Carrossel móvel com pré-visualização do próximo card (*peek effect*) e grid responsivo em desktop para os treinadores.

---

### [O08] `BMICalculator`
- **Função**: Calculadora interativa de IMC com entradas numéricas de peso e altura, exibição de ponteiro em escala colorida e diagnóstico com convite para avaliação presencial.

---

### [O09] `LocationSection`
- **Função**: Apresentação visual da localização no Morro do Banco, Itanhangá - RJ, com destaque ao ponto de referência **Expresso Pizza**, mapa interativo e atalhos para Waze / Google Maps.

---

### [O10] `MontanaFooter`
- **Função**: Rodapé de encerramento com monograma BW, dados institucionais, políticas e a assinatura obrigatória e estilizada: `PROJETO PRODUZIDO POR MONTANA`.

---

## 5. Matriz de Estados & Interações dos Componentes

| Componente | Suporta Touch/Swipe | Suporta Teclado | Efeito Hover (Desktop) | Animação Reduzida |
| :--- | :---: | :---: | :---: | :---: |
| `ButtonPrimaryGold` | Sim | Sim (Enter/Space) | Glow + Scale 1.02 | Sem scale |
| `WizardOptionCard` | Sim | Sim (Setas/Space) | Borda dourada sutil | Transição instantânea |
| `MarqueeRoller` | Pausa no toque | N/A | Pausa no hover | Marquee estático |
| `StructureCarousel` | Arraste horizontal | Setas esq/dir | Zoom suave na foto | Sem zoom |
| `CoachesShowcase` | Arraste horizontal | Setas esq/dir | Iluminação perimetral | Sem animação |
| `AccordionItem` | Toque único | Enter/Space | Dourado no título | Expansão sem atraso |
