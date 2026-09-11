# CONTENT_GAPS.md — Auditoria de Lacunas de Conteúdo & Integridade de Dados
## Projeto: BW Prime Fitness | Morro do Banco, Itanhangá - RJ
### Produzido por: MONTANA

---

## 1. Princípio da Verdade Factual & Anti-Alucinação

Para garantir que a landing page da **BW Prime Fitness** seja lançada com credibilidade profissional incontestável, este documento cataloga com rigor a separação entre:
1. **Dados Verificados & Aprovados** (fornecidos formalmente pelo cliente).
2. **Dados de Referência Visual** (presentes nos mockups, mas sem validação operacional).
3. **Lacunas Operacionais Pendentes** (informações reais necessárias para o go-live).
4. **Estratégia de Contingência / Placeholders Elegantes** (como a interface se comportará enquanto os dados finais são recolhidos).

---

## 2. Matriz Completa de Conteúdo & Status

| Item de Conteúdo | Status Atual | Fonte / Valor nos Mockups | Ação Requerida / Tratamento no Código |
| :--- | :---: | :--- | :--- |
| **Nome da Marca** | ✅ **Verificado** | "BW Prime Fitness" | Usar exatamente como fornecido. |
| **Logo Oficial** | ✅ **Verificado** | Cloudinary WebP 3D metálico | Usar URL oficial fornecida. |
| **Bairro & Cidade** | ✅ **Verificado** | "Morro do Banco, Itanhangá - RJ" | Usar em todos os pontos de contato e rodapé. |
| **Ponto de Referência** | ✅ **Verificado** | "Próximo ao Expresso Pizza" | Usar com destaque na seção de Localização. |
| **Assinatura de Autoria** | ✅ **Verificado** | "PROJETO PRODUZIDO POR MONTANA" | Inserção obrigatória no rodapé institucional. |
| **Reputação Google** | ✅ **Verificado** | 5 Estrelas no Google | Utilizar menção de excelência e badge de 5 estrelas. |
| **Endereço Completo (Rua/Nº/CEP)** | ⚠️ **Lacuna Real** | Mockup exibia erro: "São Paulo - SP" | Aguardando nome exato da rua e número no Morro do Banco. |
| **Número de WhatsApp Comercial** | ⚠️ **Lacuna Real** | Não fornecido | Utilizar link estruturado com variável de ambiente configurável (`NEXT_PUBLIC_WHATSAPP_NUMBER`). |
| **Equipe & Professores** | ⚠️ **Lacuna Real** | Mockup exibia: "Bruno W., Juliana S., Rafael C." | Tratar nomes e fotos como placeholders até envio da relação oficial da equipe BW. |
| **Número de Alunos Ativos** | ❌ **Não Autorizado** | Mockup exibia: "+1200 alunos" | Não inventar números. Substituir por cópia de impacto: "Comunidade focada em evolução". |
| **Quantidade de Reviews Google** | ❌ **Não Autorizado** | Mockup exibia: "+500 avaliações" | Não inventar quantidade. Usar: "Avaliado com nota máxima no Google". |
| **Planos & Mensalidades (R$)** | ⚠️ **Lacuna Real** | Mockup exibia: "Plano Prime" genérico | Apresentar categorias de planos sem cravar preços em R$ fictícios; direcionar para WhatsApp da recepção. |
| **Grade de Horários** | ⚠️ **Lacuna Real** | Não fornecido | Exibir estrutura organizada com placeholders inteligentes para Seg-Sex, Sáb e Dom/Feriados. |
| **Vídeo do Hero** | ⚠️ **Pendente** | Pendente de envio do arquivo de vídeo | Estruturar o container com background atmosférico dark pronto para receber o asset. |
| **Fotos Reais da Estrutura** | ⚠️ **Pendente** | Fotos de banco nos mockups | Usar mockups conceituais escuros de alta qualidade delimitados ao carrossel até envio dos cliques reais. |
| **Perguntas do FAQ** | ⚠️ **Requer Validação** | Padrões de mercado pré-redigidos | Redigir respostas institucionais sólidas sobre modalidades, planos e matrícula no Itanhangá. |

---

## 3. Detalhamento das Lacunas Críticas & Impacto

### 1. Dados de Localização Geográfica Exata
- **Contexto**: A academia está localizada no Morro do Banco, Itanhangá - RJ, tendo o Expresso Pizza como grande referência da comunidade.
- **O que falta**:
  - Logradouro exato (ex: Estrada da Barra da Tijuca, Rua X, nº Y).
  - CEP oficial.
  - Link direto de compartilhamento do Google Maps ou coordenadas de latitude/longitude para centralizar o mapa interativo.
- **Impacto**: Fundamental para que o mapa interativo e o botão "Como Chegar" tracem rotas corretas no Waze e Google Maps.

### 2. Contato Comercial & Roteamento de Mensagens do WhatsApp
- **Contexto**: O principal vetor de conversão da página é o direcionamento pós-Wizard para o WhatsApp com mensagens pré-formatadas.
- **O que falta**:
  - Número de telefone com DDD (21).
  - Mensagem padrão de saudação desejada pelo time de atendimento.
- **Estratégia de Contingência**:
  - Centralizar a montagem do link em uma função utilitária `createWhatsAppLink(phone, message)`.

### 3. Nomes, Fotos e Credenciais da Equipe
- **Contexto**: A seção "Especialistas para sua Evolução" possui alto poder de conexão emocional e humanização.
- **O que falta**:
  - Relação dos treinadores/professores reais que atendem na unidade do Morro do Banco.
  - Fotos reais de alta qualidade em uniforme da BW (ou fotos profissionais com camisa preta neutra).
  - Áreas de atuação reais de cada um.
- **Estratégia de Contingência**:
  - Manter os cards com estética elegante de placeholder ("Treinador Especialista", "Coach Funcional") sem prometer nomes ou certificações falsas.

### 4. Estrutura de Preços e Condições Comerciais
- **Contexto**: A seção de planos precisa demonstrar clareza de valor sem gerar divergências com a recepção presencial.
- **O que falta**:
  - Modalidades reais comercializadas (ex: Plano Mensal, Semestral, Anual, Recorrente no cartão de crédito, Matrícula isenta).
  - Valores oficiais de mensalidade.
- **Estratégia de Contingência**:
  - Exibir os benefícios estruturais de cada categoria de plano (Livre acesso, Musculação + Aulas, Acompanhamento) com o CTA "Consultar Condições Especiais na Recepção" ou "Falar com Consultor".

---

## 4. Diretrizes de Contingência para a Primeira Versão (v1)

1. **Nenhum campo com erro ou dado falso**: Todas as lacunas pendentes receberão textos elegantes e institucionais que soam intencionais e profissionais, nunca como "Lorem Ipsum" ou números inventados.
2. **Arquitetura modular orientada a dados**: Todo o conteúdo pendente ficará centralizado em arquivos de configuração (`src/config/siteContent.ts`), permitindo que a equipe do projeto atualize telefones, endereços e fotos em um único arquivo sem alterar a lógica dos componentes.
