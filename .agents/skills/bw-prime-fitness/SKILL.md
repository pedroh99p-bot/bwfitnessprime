---
name: bw-prime-fitness
description: >-
  Design system guidelines, conversion wizard state machine, marquee specs,
  and implementation runbook for BW Prime Fitness. Use when planning, scaffolding,
  or developing components, layouts, and copy for the BW Prime Fitness landing page.
---

# BW Prime Fitness — Skill & Design System Runbook

Esta skill orienta o desenvolvimento técnico e visual da landing page da **BW Prime Fitness** (Morro do Banco, Itanhangá - Rio de Janeiro / RJ), produzida por **MONTANA**.

---

## 1. Tokens de Design & Padrões Visuais

### Paleta de Cores
```css
:root {
  /* Fundo & Camadas */
  --bw-bg-root: #070707;
  --bw-bg-surface: #0E0E10;
  --bw-bg-surface-elevated: #151518;
  --bw-bg-glass: rgba(18, 18, 20, 0.72);
  --bw-bg-glass-card: rgba(22, 22, 26, 0.65);

  /* Acentos Dourados */
  --bw-gold-light: #F9E7A2;
  --bw-gold-primary: #D4AF37;
  --bw-gold-dark: #8E6516;
  --bw-gold-deep: #5A3F0B;
  --bw-gold-border: rgba(212, 175, 55, 0.28);
  --bw-gold-glow: rgba(212, 175, 55, 0.15);

  /* Gradiente Dourado Metálico */
  --bw-gradient-gold: linear-gradient(135deg, #FFEAA7 0%, #D4AF37 40%, #A67C1E 75%, #6B4E08 100%);
  --bw-gradient-gold-hover: linear-gradient(135deg, #FFF1BD 0%, #E2BE46 40%, #B88B27 75%, #7C5B0D 100%);

  /* Tipografia & Contraste */
  --bw-text-primary: #F8F8FA;
  --bw-text-secondary: #A0A0AB;
  --bw-text-muted: #6B6B76;
}
```

### Regras Estéticas Inegociáveis
1. **Sem rosa**: Proibido tons de magenta, rosa choque ou subtons rosados.
2. **Sem visual gamer**: Sem arestas cortadas angulares futuristas, sem LEDs neon azul/ciano, sem elementos de HUD.
3. **Sem backgrounds de fotos no site geral**: O fundo deve manter atmosfera escura, vinhetas sutis e profundidade por gradientes.
4. **Glassmorphism com Parcimônia**: Aplicar `backdrop-filter: blur(12px)` exclusivamente em containers flutuantes de alto valor (Navbar fixa, Card do plano recomendado, modais de conversão).

---

## 2. Orquestração do Preloader & Hero Entrance

### Ciclo de Vida do Preloader
1. **Montagem (0s - 0.8s)**: Tela escura `#070707` com o monograma oficial BW em dourado metálico surgindo com pulso de brilho suave e escala de `0.95` para `1.0`.
2. **Conclusão (0.8s - 1.2s)**: Fade-out suave (`opacity: 0`) e desativação de cliques (`pointer-events: none`).
3. **Gatilho do Hero (1.2s+)**: Entrada escalonada (*stagger*) dos elementos do Hero:
   - 1.2s: Badge superior (`SAÚDE • DISCIPLINA • RESULTADOS`).
   - 1.4s: Linha 1 do Headline (`SEU TREINO.`).
   - 1.6s: Linha 2 em Dourado Luminoso (`SUA EVOLUÇÃO.`).
   - 1.8s: Subtítulo descritivo.
   - 2.0s: Grupo de CTAs duplos (`Começar agora` / `Falar no WhatsApp`).
   - 2.2s: Barra de prova social e trust badges.
4. **Container de Vídeo Background**:
   - Elemento `<video>` posicionado como background do Hero, mudo (`muted`), em loop (`loop`), reprodução inline (`playsinline`), sob camada escura de overlay (`bg-black/70`) para preservar 100% de contraste textual.
   - Enquanto o arquivo de vídeo não é fornecido, manter o container com placeholder gradiente dark atmosférico estilizado pronto para receber a URL do vídeo.

---

## 3. Hub Interativo: "Encontre Seu Treino Ideal" (Wizard)

### Máquina de Estados (3 Passos + Recomendação)

```
[Etapa 1: Objetivo]
  ├── Hipertrofia & Massa Muscular
  ├── Emagrecimento & Definição
  ├── Condicionamento & Saúde Geral
  └── Performance & Alta Intensidade
           │
           ▼
[Etapa 2: Frequência Semanal]
  ├── 2 a 3 dias por semana (Rotina flexível)
  ├── 4 a 5 dias por semana (Frequência ideal)
  └── Todos os dias / Atleta (Foco total)
           │
           ▼
[Etapa 3: Preferência de Ambiente]
  ├── Musculação guiada & foco individual
  ├── Aulas dinâmicas, funcional & energia em grupo
  └── Experiência completa (Musculação + Cardio + Funcional)
           │
           ▼
[Resultado Dinâmico: Plano Recomendado]
  ├── Perfil 1 -> PLANO PRIME (Acesso total, musculação, funcional, suporte)
  ├── Perfil 2 -> PLANO EVOLUÇÃO (Foco em resultado guiado e acompanhamento)
  └── Perfil 3 -> PLANO FLEX (Para rotinas dinâmicas)
```

### Anatomia do Card de Resultado
- Kicker: `SEU PLANO`
- Título do Plano: Ex: `PLANO PRIME` em gradiente dourado metálico.
- Descritivo persuasivo alinhado às respostas dadas.
- 3 Pilares com ícones destacados em dourado.
- Sub-card do Especialista / Orientador de Recepção com quote personalizado.
- CTAs Diretos:
  - Primário: `Conhecer Plano` (Abre modal ou scroll para tabela de planos).
  - Secundário: `Falar com Especialista` (Dispara WhatsApp com mensagem pré-formatada trazendo as respostas do usuário!).

---

## 4. Sistema de Rollers / Marquees Editoriais

### Especificações Técnicas
- **Quantidade**: 4 a 5 faixas distribuídas na jornada da página.
- **Implementação**: CSS keyframes puro utilizando `transform: translate3d(...)` para aceleração por GPU.
- **Palavras Canônicas**:
  `DISCIPLINA` • `SAÚDE` • `EVOLUÇÃO` • `PERFORMANCE` • `RESULTADOS` • `ACOMPANHAMENTO` • `CONSISTÊNCIA` • `MOVIMENTO`
- **Estética Tipográfica**: Caixa alta, tracking extra largo (`tracking-[0.25em]`), alternância entre texto preenchido e texto outline dourado (`text-transparent [-webkit-text-stroke:1px_rgba(212,175,55,0.4)]`).
- **Interação & Acessibilidade**:
  - Pausa suave no hover (`animation-play-state: paused`).
  - Suporte obrigatório a `@media (prefers-reduced-motion: reduce)` exibindo faixa estática com texto espaçado.

---

## 5. Integridade de Dados & Anti-Alucinação

Ao compor qualquer texto ou componente, siga:
- **Localização**: Morro do Banco, Itanhangá — Rio de Janeiro / RJ.
- **Referência**: Próximo ao Expresso Pizza.
- **Google**: 5 estrelas / Excelência avaliada no Google.
- **Assinatura**: `PROJETO PRODUZIDO POR MONTANA` no rodapé.
- **Nunca inventar**: Preços em R$, nomes fictícios de personais, números não comprovados de alunos, horários não validados.
