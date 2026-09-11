# ASSET_REQUIREMENTS.md — Especificações Técnicas de Mídia & Ativos Visuais
## Projeto: BW Prime Fitness | Morro do Banco, Itanhangá - RJ
### Produzido por: MONTANA

---

## 1. Visão Geral dos Requisitos de Mídia

Para sustentar uma estética de **alto padrão (preto, dourado e off-white)** com velocidade de carregamento excepcional (Core Web Vitals e Lighthouse 95+), todos os arquivos visuais devem seguir os parâmetros técnicos rigorosos descritos neste manual.

---

## 2. Logomarca & Identidade Vetorial

### 2.1 Logo Oficial Principal (Já Fornecido)
- **URL Oficial (Cloudinary)**:
  `https://res.cloudinary.com/dhbrxzt5a/image/upload/v1788934582/7057b069-305e-4202-ade5-c384a205bade_1_bbhm9b.webp`
- **Características**: Monograma "BW" tridimensional chanfrado com acabamento escovado metálico dourado sobre fundo preto, com sub-assinatura "PRIME FITNESS".
- **Aplicações**:
  - Preloader de entrada (centralizado, com animação de luz).
  - Floating Navbar (desktop: versão completa horizontal; mobile: versão compacta).
  - Rodapé com assinatura Montana.

### 2.2 Conjunto de Ícones de Aplicação (Favicons & PWA)
- `favicon.ico` (16x16 e 32x32 para navegadores legados).
- `apple-touch-icon.png` (180x180 para atalho em iOS).
- `icon-192.png` e `icon-512.png` (para manifest WebApp).
- Monograma BW vetorizado em SVG com cor de preenchimento dourada (`#D4AF37`) para uso responsivo em resoluções ultra-densas (Retina / 4K).

---

## 3. Vídeo de Fundo do Hero (Background Video)

### 3.1 Parâmetros Técnicos de Codificação
- **Formatos Requeridos**:
  1. `hero-bg.webm` (Codec VP9 — menor tamanho e alta fidelidade em Chrome/Firefox).
  2. `hero-bg.mp4` (Codec H.264, perfil High, Level 4.0 — compatibilidade universal iOS/Safari).
- **Resolução & Proporções**:
  - Versão Desktop: `1920x1080` (Full HD 16:9).
  - Versão Mobile: `1080x1920` (Vertical 9:16 ou recorte inteligente centralizado de 1080p).
- **Taxa de Quadros (FPS)**: 24 fps a 30 fps (evitar 60fps para conter o consumo de bateria móvel).
- **Duração do Loop**: Entre 8 e 14 segundos contínuos (com transição imperceptível entre o fim e o início).
- **Tamanho Máximo do Arquivo**:
  - Mobile: Máximo **3.5 MB**.
  - Desktop: Máximo **6.5 MB**.
- **Canal de Áudio**: **SEM FAIXA DE ÁUDIO** (áudio stripado do contêiner para garantir reprodução automática sem bloqueio de políticas de autoplay de navegadores).
- **Atributos HTML Obrigatórios**:
  `<video autoPlay loop muted playsInline preload="none" poster="/assets/hero-poster.webp">`

### 3.2 Imagem Poster (Fallback Image)
- Frame estático escuro capturado do início do vídeo, comprimido em WebP (`hero-poster.webp`, < 60KB).
- Exibida enquanto o vídeo carrega ou quando o usuário estiver em modo de economia de dados (*Save-Data*) ou bateria fraca.

### 3.3 Direção de Arte do Vídeo
- Cenas lentas e cinematográficas (*slow motion*): halteres sendo erguidos, anilhas com detalhes dourados, silhuetas de treino focado, iluminação quente lateral (*rim light*) em ambiente escuro sofisticado.

---

## 4. Fotografia da Estrutura ("A Experiência BW")

### 4.1 Especificações das Imagens
- **Formato**: WebP / AVIF (com fallback JPG otimizado).
- **Dimensões**: `1600x1000px` (Desktop) e `800x500px` (Mobile).
- **Peso Máximo**: 90 KB por imagem.
- **Relação de Aspecto**: 16:10 ou 16:9 com cantos arredondados no container.

### 4.2 Tom Fotográfico & Iluminação
- Ambiente limpo, maquinário moderno e iluminação cênica (lâmpadas quentes/âmbar pontuais e LEDs indiretos).
- Sem flash branco direto de celular.
- 4 Categorias de Fotos Requeridas:
  1. *Musculação*: Linha de máquinas biomecânicas.
  2. *Cardio*: Esteiras e ergométricas com painel digital.
  3. *Treino Funcional*: Área aberta, pesos livres e espaço dinâmico.
  4. *Peso Livre*: Suportes organizados de halteres de alta qualidade.

---

## 5. Retratos da Equipe de Especialistas

### 5.1 Especificações dos Retratos
- **Formato**: WebP com fundo recortado ou fundo escuro de estúdio.
- **Dimensões**: `600x750px` (proporção 4:5 vertical).
- **Peso Máximo**: 45 KB por retrato.
- **Enquadramento**: Plano médio (busto para cima), olhar direto e expressão acolhedora/confiante.
- **Vestimenta Recomendada**: Camiseta preta lisa ou com o monograma BW Prime Fitness dourado no peito.

---

## 6. Iconografia & Elementos Gráficos

- **Biblioteca Recomendada**: `lucide-react` com customização de traço.
- **Espessura de Traço (Stroke Width)**: `1.75px` constante para todos os ícones.
- **Tamanhos Padrão**:
  - Micro-ícones de badges: `14px` a `16px`.
  - Ícones de botões e navegação: `18px` a `20px`.
  - Ícones de destaque de pilares: `24px` a `28px`.
- **Cores dos Ícones**:
  - Dourado metálico (`#D4AF37`) em caixas destacadas.
  - Off-white (`#E4E4E7`) em botões secundários e controles de formulário.

---

## 7. Tipografia & Webfonts

Para escapar de fontes genéricas (Inter, Roboto, Arial) e garantir elegância contemporânea de alto padrão:

1. **Display / Títulos Monumentais**:
   - **Família Escolhida**: *Syne* ou *Cabinet Grotesk* (pesos 700 e 800).
   - *Características*: Ampla personalidade, ângulos refinados e peso visual imponente em caixa alta para palavras-chave como `SEU TREINO.`, `SUA EVOLUÇÃO.`, `A EXPERIÊNCIA BW`.
2. **Body & Interface (Leitura Rápida & Conforto)**:
   - **Família Escolhida**: *Plus Jakarta Sans* ou *Outfit* (pesos 400, 500 e 600).
   - *Características*: Geometria equilibrada, excelente legibilidade em telas pequenas de smartphone (360px - 390px) e suporte a acentuação completa em português brasileiro.
3. **Kickers, Selos & Marquees (Técnica & Precisão)**:
   - **Família Escolhida**: *JetBrains Mono* ou *Space Grotesk* (peso 500, com tracking `0.25em`).
   - *Aplicação*: Overlines (`SAÚDE • DISCIPLINA • RESULTADOS`), indicadores de etapa do wizard e a assinatura `PROJETO PRODUZIDO POR MONTANA`.
4. **Otimização de Carregamento**:
   - Carregamento através de `next/font` com pré-carregamento de subset `latin` e exibição `font-display: swap` (elimina layout shifts e flash de texto invisível).
