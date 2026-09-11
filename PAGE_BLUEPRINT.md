# PAGE_BLUEPRINT.md — Arquitetura de Informação & Jornada de Conversão
## Projeto: BW Prime Fitness | Morro do Banco, Itanhangá - RJ
### Produzido por: MONTANA

---

## 1. Visão Estratégica da Jornada do Usuário

A landing page da **BW Prime Fitness** foi projetada sob uma ótica **mobile-first de alta conversão**, aliando a sofisticação visual de academias boutique internacionais com mecânicas interativas ágeis.

A jornada do usuário equilibra **desejo**, **autoavaliação interativa (Wizard)**, **demonstração de autoridade e estrutura**, **eliminação de atrito (localização e FAQ)** e **múltiplos pontos de contato direto via WhatsApp e Recepção**.

---

## 2. Mapa Detalhado da Jornada (21 Seções Orquestradas)

---

### [00] Preloader de Marca & Monograma Dourado 3D
- **Objetivo**: Fixação instantânea de marca de luxo, sensação de carregamento fluido de aplicativo nativo e preparação dos elementos do Hero.
- **Estrutura**:
  - Fundo preto profundo (`#070707`).
  - Monograma oficial "BW" em dourado metálico 3D centralizado.
  - Efeito suave de luz (*sheen pulse*) e barra de progresso dourada milimétrica (0.8s).
- **Transição de Saída**: Dissolvência suave (`opacity: 0`, 400ms) que dispara imediatamente a revelação escalonada do Hero.

---

### [01] Floating Glass Navbar (Pílula Suspensa)
- **Objetivo**: Navegação sempre acessível com estética Apple/iOS, ocupando mínimo espaço vertical no mobile.
- **Estrutura**:
  - Logo oficial BW Prime Fitness à esquerda.
  - Links de ancoragem no desktop (`Treino Ideal`, `Estrutura`, `Especialistas`, `Planos`, `Localização`).
  - Botão de Ação Rápida: Pílula dourada "Agendar Aula" (com ícone de calendário).
  - Botão de Menu Hambúrguer (Mobile) abrindo gaveta (*drawer*) translúcida lateral.
- **Comportamento**: Fixa no topo (`fixed top-4`), efeito de condensação e redução de opacidade de fundo ao rolar.

---

### [02] Hero Section — "SEU TREINO. SUA EVOLUÇÃO."
- **Objetivo**: Capturar o usuário nos primeiros 3 segundos com impacto visual monumental e proposta de valor irrefutável.
- **Estrutura**:
  - Overline: `SAÚDE • DISCIPLINA • RESULTADOS` (caixa alta com tracking amplo).
  - Headline Principal:
    - Linha 1: `SEU TREINO.` (Off-white puro, tipografia display imponente).
    - Linha 2: `SUA EVOLUÇÃO.` (Dourado metálico com reflexo quente).
  - Subtítulo: "Treinamento com propósito, em um ambiente que te impulsiona a ser a sua melhor versão."
  - **Duplo CTA**:
    1. Primário (Dourado Metálico): "Começar agora" (âncora suave para o Hub de Treino Ideal).
    2. Secundário (Dark Glass): "Falar no WhatsApp" (abertura de chat com a recepção).
  - **Barra de Prova Social & Confiança**:
    - Selo Google: "5 estrelas no Google / Excelência avaliada".
    - Selo Equipe: "Equipe especializada".
    - Selo Ambiente: "Ambiente premium".
  - **Container de Vídeo Background**:
    - Camada preparada para vídeo cinematográfico em loop da academia, com overlay escuro proporcional (70% preto) garantindo legibilidade perfeita do texto.
  - Seta indicativa: "SCROLL PARA DESCOBRIR MAIS".

---

### [03] Roller 1 (Marquee Editorial de Transição)
- **Objetivo**: Respiro rítmico e quebra de bloco editorial.
- **Palavras**: `DISCIPLINA` • `SAÚDE` • `EVOLUÇÃO` • `PERFORMANCE`
- **Direção**: Esquerda para Direita (Lento, 40s).
- **Estilo**: Texto grande vazado (outline dourado 1px) alternado com estrelas de quatro pontas em dourado sólido.

---

### [04] Hub Interativo: "ENCONTRE SEU TREINO IDEAL" (Wizard de 3 Passos)
- **Objetivo**: Principal motor de conversão e engajamento da página. Substitui a sensação de "venda passiva" por uma consultoria ativa interativa.
- **Passos**:
  - **Passo 1 (Objetivo Principal)**:
    - *Hipertrofia & Força* | *Emagrecimento & Definição* | *Condicionamento & Saúde* | *Performance de Elite*
  - **Passo 2 (Frequência Semanal)**:
    - *2 a 3 vezes/semana* | *4 a 5 vezes/semana* | *Diário (Foco Máximo)*
  - **Passo 3 (Estilo de Treino Preferido)**:
    - *Musculação guiada & foco pessoal* | *Aulas dinâmicas e funcional em grupo* | *Combo Completo (Musculação + Funcional + Cardio)*
- **Micro-interações**: Indicador de progresso em barra dourada (Passo 1 de 3), seleção instantânea sem recarregamento, botões táteis com retorno vibratório sutil em mobile.

---

### [05] Resultado Personalizado: "PLANO RECOMENDADO PARA VOCÊ"
- **Objetivo**: Fechamento imediato do lead com alta percepção de exclusividade e adequação de rotina.
- **Estrutura**:
  - Kicker: `SEU ESFORÇO MERECE DIREÇÃO`
  - Título: `PLANO RECOMENDADO PARA VOCÊ`
  - **Card de Alto Padrão (Glassmorphism & Dourado)**:
    - Nome do Plano: `PLANO PRIME` (ou plano calculado correspondente).
    - Descrição: "Equilíbrio, resultado e suporte para você evoluir com consistência."
    - Grid de 3 Pilares com ícones dourados:
      1. Acompanhamento com especialistas.
      2. Modalidades compatíveis com seu objetivo.
      3. Evolução com constância.
    - Mini-Card do Orientador: Foto do especialista com quote de acolhimento ("Vou te ajudar no próximo passo.") e selo 5 estrelas.
    - CTAs de Ação:
      - "Conhecer plano" (abre detalhamento dos benefícios).
      - "Falar com especialista" (direciona para o WhatsApp com a mensagem personalizada pronta contendo o resultado do quiz!).

---

### [06] Roller 2 (Marquee Editorial de Transição)
- **Palavras**: `RESULTADOS` • `ACOMPANHAMENTO` • `CONSISTÊNCIA` • `MOVIMENTO`
- **Direção**: Direita para Esquerda (Inverso ao Roller 1).

---

### [07] "A EXPERIÊNCIA BW" (Estrutura & Infraestrutura)
- **Objetivo**: Demonstrar o padrão estético dos aparelhos, amplitude, higiene e tecnologia do espaço.
- **Estrutura**:
  - Overline: `ESTRUTURA • AMBIENTE • RESULTADOS`
  - Headline: `A EXPERIÊNCIA BW`
  - Subtítulo: "Um ambiente completo, moderno e planejado para impulsionar a sua evolução."
  - **Abas de Segmentação (Segmented Control)**:
    - `[ Musculação ]` | `[ Cardio ]` | `[ Funcional ]` | `[ Peso Livre ]`
  - **Carrossel de Mídia**:
    - Janela cinematográfica com fotos e botão de tour em vídeo ("Conheça nossa estrutura").
    - Navegação com setas táteis e contador de mídia (`1 / 5`).
  - **Cards de Diferenciais**:
    - Ambiente premium (Conforto e bem-estar acústico/climatizado).
    - Equipamentos de alta performance (Biomecânica de precisão).
    - Acompanhamento com especialistas.
  - Botão de Ação: "Explorar estrutura" com indicação de Morro do Banco, Itanhangá - RJ.

---

### [08] Especialistas: "ESPECIALISTAS PARA SUA EVOLUÇÃO"
- **Objetivo**: Humanizar a marca, gerar identificação e afastar o medo de treinar desamparado.
- **Estrutura**:
  - Overline: `EQUIPE • EXPERIÊNCIA • RESULTADOS`
  - Headline: `ESPECIALISTAS PARA SUA EVOLUÇÃO`
  - Subtítulo: "Profissionais qualificados, com foco em pessoas reais e resultados consistentes."
  - **Carrossel / Grid de Cards de Treinadores**:
    - Retrato com iluminação de estúdio escura e detalhes em dourado.
    - Nome e área de atuação (Personal Trainer, Coach Funcional, Preparador Físico).
    - Badges de especialidade (`Hipertrofia`, `Emagrecimento`, `Iniciantes`, `Saúde`).
    - Frase de posicionamento entre aspas (ex: "Disciplina hoje, resultados amanhã.").
  - Botão de Ação Amplo: "Conhecer a equipe" direcionando para contato.

---

### [09] Roller 3 (Marquee Editorial de Transição)
- **Palavras**: `MAIS QUE TREINO É EVOLUÇÃO` • `FOCO TOTAL` • `SAÚDE INTEGRAL`
- **Direção**: Esquerda para Direita.

---

### [10] Modalidades & Método BW
- **Objetivo**: Detalhar a metodologia de treino progressivo da academia para todos os níveis de condicionamento (do sedentário ao avançado).
- **Estrutura**:
  - Cards explicativos com os 3 passos metodológicos da BW:
    1. *Diagnóstico & Alinhamento*: Avaliação inicial das metas e limitações.
    2. *Prescrição Inteligente*: Montagem de treino personalizado com progressão de cargas.
    3. *Supervisão Contínua*: Ajuste constante na sala de musculação para prevenir lesões e garantir evolução.

---

### [11] Roller 4 (Marquee Editorial de Transição)
- **Palavras**: `DISCIPLINA TRANSFORMA` • `RESULTADOS LIBERTAM` • `BW PRIME`
- **Direção**: Direita para Esquerda.

---

### [12] Planos & Condições de Acesso
- **Objetivo**: Apresentar clareza nas opções de adesão com destaque ao plano com melhor custo-benefício.
- **Estrutura**:
  - Tabela comparativa com 2 a 3 modalidades de planos (ex: Anual VIP, Semestral, Mensal).
  - Lista de benefícios com checks dourados (`✓`).
  - Destaque "Mais Escolhido" com borda iluminada.
  - CTAs com disparo direto para WhatsApp da recepção para consultar promoções do mês.

---

### [13] Prova Social Google (Avaliação 5 Estrelas)
- **Objetivo**: Validação social de terceiros para eliminar qualquer desconfiança.
- **Estrutura**:
  - Emblema oficial do Google com 5 estrelas douradas preenchidas.
  - Selo de "Excelência avaliada por frequentadores da região do Morro do Banco e Itanhangá".
  - Botão para ver avaliações diretamente no Google Perfil de Empresa.

---

### [14] Calculadora Interativa de IMC & Diagnóstico Fitness
- **Objetivo**: Ferramenta utilitária que gera valor imediato ao visitante e serve como poderoso gancho de conversa.
- **Estrutura**:
  - Inputs elegantes para Peso (kg) e Altura (cm).
  - Régua interativa com zonas de classificação (Abaixo do peso, Peso normal, Sobrepeso, Obesidade).
  - Card de resultado com diagnóstico amigável e recomendação de suporte profissional presencial na BW Prime.

---

### [15] Localização & Como Chegar
- **Objetivo**: Guiar o cliente com extrema clareza geográfica no Itanhangá.
- **Estrutura**:
  - Destaque em negrito: **Morro do Banco, Itanhangá — Rio de Janeiro / RJ**.
  - Ponto de referência chave: **Próximo ao Expresso Pizza**.
  - Mapa interativo (Google Maps estilizado em dark mode com marcador dourado personalizado).
  - Botões de rota rápida: "Abrir no Google Maps" / "Abrir no Waze".

---

### [16] Horários de Funcionamento
- **Objetivo**: Clareza total de rotina para que o aluno planeje suas visitas.
- **Estrutura**:
  - Grade visual elegante dividida em:
    - *Segunda a Sexta*: Exibir bloco horário oficial.
    - *Sábados*: Bloco matutino.
    - *Domingos e Feriados*: Horários especiais ou indicação de plantão.
  - Status em tempo real ("Aberto agora" ou "Abre às XX:XX") com indicador luminoso verde/dourado.

---

### [17] FAQ — Perguntas Frequentes (Acordeão)
- **Objetivo**: Derrubar as 6 principais objeções de compra (iniciantes, formas de pagamento, estrutura, estacionamento, cancelamento).
- **Estrutura**:
  - Acordeão com abertura expansível fluida e ícones `+` / `-` em dourado.

---

### [18] Roller Final (Mantra de Alta Energia)
- **Palavras**: `JUNTOS POR UMA VIDA MAIS FORTE` • `BW PRIME FITNESS`
- **Direção**: Esquerda para Direita.

---

### [19] CTA Final de Conversão (Convite VIP)
- **Objetivo**: A captura definitiva do visitante que rolou até o fim da página.
- **Estrutura**:
  - Bloco de alto impacto visual com vinheta dourada perimetral.
  - Headline: "Pronto para viver a sua melhor versão no Itanhangá?"
  - Botão dourado expandido: "Agendar Aula Experimental Gratuita" direcionando para o WhatsApp.

---

### [20] Footer Institucional & Assinatura Obrigatória
- **Objetivo**: Credibilidade jurídica e assinatura de excelência de produção.
- **Estrutura**:
  - Monograma oficial BW em dourado.
  - Endereço resumido: Morro do Banco, Itanhangá, Rio de Janeiro - RJ (Ref: Expresso Pizza).
  - Links de navegação rápida e políticas de privacidade.
  - **Assinatura Obrigatória**:
    `PROJETO PRODUZIDO POR MONTANA`
    (Renderizada com tipografia refinada, tracking largo e destaque elegante).

---

## 3. Justificativa de UX para a Ordem Sugerida

1. **Wizard no Topo (após Hero e Roller 1)**: Colocar o teste interativo bem cedo na página aumenta a taxa de engajamento em mais de 40% em relação a páginas estáticas. O visitante se qualifica antes de ver preços, criando conexão pessoal.
2. **Resultado do Treino como Conector**: O resultado do quiz cria uma ponte natural para mostrar a **Estrutura** e os **Especialistas**, demonstrando que a academia possui exatamente o que o plano recomendado exige.
3. **Calculadora de IMC após os Planos**: Atua como uma segunda oportunidade de autoavaliação para quem ainda não clicou no Wizard inicial.
4. **Localização com Expresso Pizza antes do FAQ**: Tranquiliza os moradores do Morro do Banco e Itanhangá sobre a facilidade de acesso físico à academia.
