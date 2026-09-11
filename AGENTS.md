# AGENTS.md — Regras de Desenvolvimento & Governança de Agentes
## Projeto: BW Prime Fitness (Morro do Banco, Itanhangá - RJ)

Este documento estabelece as regras inegociáveis, padrões arquiteturais, diretrizes estéticas e governança de dados que todo agente de IA ou desenvolvedor deve seguir estritamente ao atuar no projeto **BW Prime Fitness**.

---

### 1. Identidade da Marca & Contexto do Negócio
- **Nome Oficial**: BW Prime Fitness
- **Localização Oficial**: Morro do Banco, Itanhangá — Rio de Janeiro / RJ
- **Ponto de Referência Oficial**: Próximo ao Expresso Pizza
- **Assinatura Obrigatória no Rodapé**: `PROJETO PRODUZIDO POR MONTANA`
- **Logo Oficial (Asset em Alta Resolução)**:
  `https://res.cloudinary.com/dhbrxzt5a/image/upload/v1788934582/7057b069-305e-4202-ade5-c384a205bade_1_bbhm9b.webp`
  *(Monograma 3D metálico dourado com chanfros polidos e acabamento escovado premium, contrastando com fundo preto puro).*

---

### 2. Diretrizes Estéticas & Filosofia Visual (Design Thinking)
- **Posicionamento**: Fitness de alto padrão, atmosfera sofisticada, sóbria e acolhedora.
- **Tríade Cromática Estrita**:
  1. **Preto Profundo (Base / Atmosfera)**: `#050505`, `#0A0A0A`, `#101010`, `#141414`.
  2. **Dourado Nobre (Acentos & Prestígio)**:
     - Dourado Primário: `#D4AF37`
     - Dourado Luminoso (Highlights): `#F5E296`, `#FFEAA7`
     - Dourado Escuro (Sombras de Chanfro): `#8C5E13`, `#5A3D0C`
     - Gradiente Metálico Oficial: `linear-gradient(135deg, #FFE8A3 0%, #D4AF37 40%, #AA7C11 75%, #634304 100%)`
     - Bordas de Pílulas e Cards: `rgba(212, 175, 55, 0.2)` a `rgba(212, 175, 55, 0.45)`.
  3. **Off-White (Tipografia & Legibilidade)**:
     - Texto Primário: `#F9F9FB`
     - Texto Secundário: `#A3A3B0`
     - Texto Muted / Kickers: `#71717A`
- **Regras Negativas Inegociáveis**:
  - **NÃO usar rosa** em nenhum detalhe, gradiente ou estado de hover.
  - **NÃO usar estética gamer** (proibido luzes neon saturadas em ciano/magenta, cantos cortados sci-fi, interfaces de HUD).
  - **NÃO usar fotografias genéricas como plano de fundo geral** nesta primeira versão. A atmosfera do site deve ser criada com fundos pretos graduados, vinhetas profundas e texturas sutis.
  - Qualquer foto de pessoa não oficial deve ser tratada como **placeholder explícito**. Proibido usar fotos aleatórias da internet.
- **Glassmorphism Moderado (Apple / iOS Inspired)**:
  - Usar `backdrop-filter: blur(12px)` a `blur(16px)` apenas em elementos flutuantes prioritários (Navbar, Cards selecionados do Wizard, Modais).
  - Sempre combinar o blur com fundo translúcido `rgba(18, 18, 18, 0.72)` e borda sutil de 1px `rgba(255, 255, 255, 0.08)`.
  - Nunca aninhar múltiplos elementos com blur em cascata para não causar gargalos de renderização na GPU móvel.

---

### 3. Integridade de Dados & Anti-Alucinação (Regra Crítica)
**É TERMINANTEMENTE PROIBIDO INVENTAR INFORMAÇÕES OPERACIONAIS**. O agente deve operar sob estrita verdade factual e sinalizar lacunas como placeholders aprováveis.

#### Dados Autorizados e Verificados:
- Reputação: "5 estrelas no Google" ou "Excelência avaliada no Google".
- Bairro/Cidade: Morro do Banco, Itanhangá - Rio de Janeiro / RJ.
- Ponto de Referência: Próximo ao Expresso Pizza.
- Modalidades nucleares: Musculação, Treino Funcional, Cardio, Peso Livre.

#### Dados Proibidos de Inventar (Manter como Placeholder/Lacuna):
- Nomes fictícios de professores, personais ou gerentes.
- Quantidade exata de alunos ativos (o dado "+1200 alunos" do print é referência visual e requer validação).
- Preços de mensalidades e planos (ex: R$ 89, R$ 120, etc. — proibido inventar valores).
- Grade horária detalhada (abertura, fechamento, aulas em horários específicos).
- Número exato de avaliações do Google (o dado "+500 avaliações" é referência visual).
- Depoimentos com histórias inventadas ou fotos falsas de clientes.
- Registros profissionais de classe (CREF).

---

### 4. Requisitos de Experiência do Usuário (Mobile-First & Desktop)
- **Fonte de Verdade Inicial**: Tela móvel de **390px** de largura.
- **Matriz de Responsividade Obrigatória**:
  - `360px`: Telas compactas (Android populares) — sem overflow horizontal, textos com corte ou escala adaptada.
  - `390px`: Padrão iOS / Mobile central.
  - `430px`: Mobile Pro Max.
  - `768px`: Tablets verticais.
  - `1024px`: Laptops compactos / iPads horizontais.
  - `1280px` & `1440px+`: Desktops e telas widescreen.
- **Desktop não é Mobile Esticado**:
  - No desktop, a navegação ganha ancoragem balanceada, os formulários ganham layouts de 2 colunas assimétricas com preview interativo ao lado, e a seção de equipe distribui cards com hover states de iluminação dourada e profundidade 3D.
- **Preloader & Transições Suaves**:
  - Animação de carregamento inicial leve com o monograma BW dourado pulsando e revelando a página.
  - Entrada sincronizada dos elementos no Hero com transições de surgimento orquestradas (`fade-up`, `stagger`).
  - Hero estruturado para acomodar vídeo em background em loop no futuro, logo atrás da tipografia monumental.
- **Hub Interativo "Encontre Seu Treino Ideal"**:
  - Wizard em 3 passos simples (1. Objetivo -> 2. Frequência -> 3. Preferência).
  - Cálculo instantâneo e transição suave para recomendação personalizada com CTAs de conversão direta.
- **Rollers Editoriais (4 a 5 faixas)**:
  - Faixas de marquee contínuas como divisores rítmicos de seções.
  - Palavras-chave: *DISCIPLINA, SAÚDE, EVOLUÇÃO, PERFORMANCE, RESULTADOS, ACOMPANHAMENTO, CONSISTÊNCIA, MOVIMENTO*.
  - Desaceleração ou pausa no hover/toque e respeito absoluto a `prefers-reduced-motion`.

---

### 5. Atribuição & Assinatura de Autoria
- No rodapé da página, em destaque secundário refinado e elegante:
  `PROJETO PRODUZIDO POR MONTANA`
  com tipografia condensada/mono, tracking amplo (+0.2em) e contraste suave.
