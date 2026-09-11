# IMPLEMENTATION_PLAN.md — Plano Estratégico de Implementação & Roadmap Técnico
## Projeto: BW Prime Fitness | Morro do Banco, Itanhangá - RJ
### Produzido por: MONTANA

---

## 1. Visão Arquitetural & Stack Tecnológica

O projeto da **BW Prime Fitness** será construído com uma stack de alta performance focada em experiência mobile nativa, renderização instantânea e excelência estética:

- **Framework**: **Next.js 14/15 (App Router)** com React 19 e TypeScript rigoroso.
- **Estilização & Design System**: **Tailwind CSS** com extensão de tokens para a paleta Preto Profundo (`#080808`), Dourado Nobre (`#D4AF37`) e Off-white (`#F8F8F8`).
- **Animações & Interações**:
  - CSS Keyframes acelerados por GPU para os Rollers/Marquees e efeitos contínuos de iluminação.
  - Framer Motion ou transições Tailwind para a máquina de estados do Wizard ("Encontre seu Treino Ideal") e revelação do Preloader.
- **Tipografia**: *Syne* / *Cabinet Grotesk* (Display imponente) + *Plus Jakarta Sans* (Body/UI refinado) via `next/font`.
- **Ícones**: `lucide-react` com customização de traço constante de 1.75px e preenchimento dourado.
- **Responsividade Obrigatória**: 360px, 390px (base inicial), 430px, 768px, 1024px, 1280px e 1440px+.

---

## 2. Fases Sequenciais de Execução (Roadmap)

---

### Fase 1: Fundação, Design Tokens & Configurações Base
- Inicialização do projeto Next.js com TypeScript e Tailwind CSS.
- Configuração de variáveis CSS (`:root`) para gradientes dourados, camadas de superfície e glassmorphism leve.
- Configuração das famílias tipográficas e suporte a `next/font`.
- Criação da camada de tipos (`types/content.ts`) e do arquivo central de dados com proteção anti-alucinação (`config/siteContent.ts`).

---

### Fase 2: Sistema de Preloader, Floating Navbar & Shell de Navegação
- **Preloader**: Monograma oficial BW em 3D metálico com animação de luz e esmaecimento fluido em 1s.
- **Floating Navbar**: Pílula suspensa de vidro fumê com logo oficial, botão dourado "Agendar Aula", links com âncora suave e menu gaveta mobile.
- **Widget Flutuante**: Indicador de suporte no canto inferior ("Posso ajudar?") com miniatura do consultor da academia.

---

### Fase 3: Hero Section & Container de Vídeo Assíncrono
- Montagem da tipografia em camadas: Overline, `SEU TREINO.` (off-white) e `SUA EVOLUÇÃO.` (dourado luminoso com brilho).
- Duplo CTA prioritário ("Começar agora" e "Falar no WhatsApp").
- Barra de selos de confiança (5 estrelas no Google, Equipe especializada, Ambiente premium).
- Container de vídeo de fundo otimizado com overlay escuro proporcional (70% preto) pronto para receber o asset de vídeo no futuro.
- Roller Editorial 1: Faixa contínua com `DISCIPLINA • SAÚDE • EVOLUÇÃO • PERFORMANCE`.

---

### Fase 4: Hub Interativo — "Encontre Seu Treino Ideal" (Wizard de 3 Passos)
- Implementação da máquina de estados do quiz interativo (Objetivo -> Frequência -> Estilo de treino).
- Transições animadas entre etapas com barra de progresso dourada.
- **Card de Resultado do Treino**:
  - Título do plano recomendado (`PLANO PRIME`).
  - Tríade de benefícios com ícones dourados em caixas de vidro.
  - Sub-card do especialista consultor com mensagem de acolhimento.
  - CTAs com montagem dinâmica do link de WhatsApp pré-formatado com o perfil escolhido pelo aluno.
- Roller Editorial 2: Faixa contínua com `RESULTADOS • ACOMPANHAMENTO • CONSISTÊNCIA • MOVIMENTO`.

---

### Fase 5: Estrutura, Equipe & Modalidades
- **A Experiência BW**:
  - Abas de modalidades (Musculação, Cardio, Funcional, Peso Livre).
  - Carrossel de mídia com fotos, contador e modal de play de vídeo tour.
  - Cards de diferenciais da academia.
- **Especialistas para sua Evolução**:
  - Carrossel com visualização parcial (*peek*) no mobile e grid de 3 colunas no desktop.
  - Cards com badges de especialidades e frases inspiradoras.
- **Método BW**:
  - Tríade metodológica: Diagnóstico -> Prescrição -> Supervisão Contínua.
- Rollers Editoriais 3 e 4 atuando como respiros rítmicos.

---

### Fase 6: Planos, Prova Social, Calculadora de IMC & Localização
- **Planos**: Tabela comparativa com benefícios transparentes e chamada para a recepção.
- **Prova Social Google**: Emblema oficial 5 estrelas e depoimentos verificados.
- **Calculadora de IMC**: Inputs rápidos de peso e altura com régua interativa de classificação e gancho para início de treino.
- **Localização & Acesso**:
  - Morro do Banco, Itanhangá - Rio de Janeiro / RJ.
  - Destaque ao ponto de referência **Expresso Pizza**.
  - Mapa interativo dark mode e rotas rápidas para Waze e Google Maps.
- **Horários de Funcionamento**: Grade organizada (Seg-Sex, Sáb, Dom/Feriados) com selo de status ("Aberto agora").
- **FAQ**: Acordeão expansível com respostas para as 6 dúvidas mais comuns de novos alunos.

---

### Fase 7: Fechamento, Rodapé & Assinatura MONTANA
- Roller Final com o mantra da marca.
- CTA Final de Conversão: Convite VIP para aula experimental.
- Rodapé institucional completo com políticas, dados da unidade e a assinatura obrigatória:
  `PROJETO PRODUZIDO POR MONTANA`

---

### Fase 8: Testes de Responsividade, Acessibilidade & Performance
- Validação em tela de 360px, 390px, 430px, 768px, 1024px e 1440px+.
- Testes de Lighthouse (Performance 95+, Acessibilidade 100, SEO 100).
- Verificação do modo `prefers-reduced-motion` para usuários com sensibilidade a movimento.
- Verificação de navegação completa por teclado.

---

## 3. Matriz de Riscos & Estratégias de Mitigação

| Risco Técnico / Negócio | Gravidade | Estratégia de Mitigação |
| :--- | :---: | :--- |
| **Queda de FPS em dispositivos móveis devido a blur** | Alta | Usar `backdrop-filter: blur()` apenas na Navbar e no Card do Wizard. Todos os outros cards usarão `rgba` com bordas sólidas aceleradas por hardware. |
| **Bloqueio de autoplay no vídeo de fundo** | Média | Incluir atributos obrigatórios `muted`, `playsinline` e poster estático WebP escuro de alta fidelidade como fallback imediato. |
| **Alucinação de dados cadastrais ou preços** | Crítica | Todo o conteúdo sensível é mantido em constantes tipadas. Valores não informados são tratados como chamadas para WhatsApp ou recepção. |
| **Inconsistência geográfica herdada dos prints** | Alta | Bloqueio total de referências a "São Paulo - SP". O projeto é 100% ancorado no Morro do Banco, Itanhangá - RJ, com referência ao Expresso Pizza. |
| **Sobrecarga de Rollers simultâneos** | Média | Utilizar CSS puro sem re-render de JavaScript e pausar animações quando o elemento sair do viewport (`IntersectionObserver` ou `content-visibility: auto`). |

---

## 4. Dados Ainda Necessários para o Go-Live (Checklist do Cliente)

1. [ ] Logradouro exato e CEP no Morro do Banco, Itanhangá - RJ.
2. [ ] Número de WhatsApp oficial para recebimento dos leads.
3. [ ] Relação nominal e fotos reais dos professores/personais da unidade.
4. [ ] Nomes e valores oficiais dos planos comercializados.
5. [ ] Grade horária oficial de funcionamento da academia.
6. [ ] Arquivo de vídeo oficial para inserção no container de fundo do Hero.
7. [ ] Fotos reais da estrutura (Musculação, Cardio, Funcional e Peso Livre).
