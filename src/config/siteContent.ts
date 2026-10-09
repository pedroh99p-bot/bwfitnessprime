import type {
  FAQItem,
  FacilityCategory,
  PlanItem,
  Review,
  Specialist,
  WizardQuestion,
} from "@/types/content";

// Single source of truth. Empty operational fields are deliberately NOT inferred.
export const BRAND_CONFIG = {
  name: "BW Prime Fitness",
  tagline: "Seu treino. Sua evolução.",
  logoUrl:
    "https://res.cloudinary.com/dhbrxzt5a/image/upload/v1788934582/7057b069-305e-4202-ade5-c384a205bade_1_bbhm9b.webp",
  location: {
    community: "Morro do Banco",
    district: "Itanhangá",
    city: "Rio de Janeiro",
    state: "RJ",
    reference: "Próximo ao Expresso Pizza",
    address: "Rua Cinco de Janeiro",
    postalCode: "22641-190",
    displayFull: "Morro do Banco, Itanhangá — Rio de Janeiro / RJ",
  },
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5521969017896",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
  googleMapsUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ||
    "https://www.google.com/maps/search/?api=1&query=Rua+Cinco+de+Janeiro+Itanhanga+Rio+de+Janeiro+RJ+22641-190",
  googleReviewsUrl: process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Rua+Cinco+de+Janeiro+Itanhanga+Rio+de+Janeiro+RJ+22641-190&output=embed",
  heroVideoUrl: "",
  tourVideoUrl: "",
  signature: "PROJETO PRODUZIDO POR MONTANA",
  productionUrl: "",
};
export const NAVIGATION = [
  { label: "Academia", href: "#estrutura" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Equipe", href: "#equipe" },
  { label: "Planos", href: "#planos" },
  { label: "Localização", href: "#localizacao" },
  { label: "FAQ", href: "#faq" },
];
export const ROLLERS = [
  ["DISCIPLINA", "SAÚDE", "EVOLUÇÃO", "PERFORMANCE", "CONSISTÊNCIA"],
  ["SEU OBJETIVO", "SUA ROTINA", "SEU TREINO", "SUA EVOLUÇÃO"],
  [
    "BW PRIME FITNESS",
    "MORRO DO BANCO",
    "ITANHANGÁ",
    "MOVIMENTO",
    "PERFORMANCE",
  ],
  ["ACOMPANHAMENTO", "RESULTADOS", "FORÇA", "CONSISTÊNCIA", "DISCIPLINA"],
  [
    "TREINE COM PROPÓSITO",
    "COMECE HOJE",
    "EVOLUA SEMPRE",
    "BW PRIME FITNESS",
    "MORRO DO BANCO",
  ],
];
export const CONTACT_MESSAGES = {
  hero: "Olá! Vim pelo site da BW Prime Fitness e gostaria de saber mais.",
  quiz: "Olá! Fiz o teste no site da BW Prime Fitness e gostaria de saber mais sobre minha recomendação.",
  plans: "Olá! Gostaria de conhecer melhor os planos da BW Prime Fitness.",
  assessment: "Olá! Gostaria de agendar uma avaliação na BW Prime Fitness.",
  location: "Olá! Gostaria de informações para chegar à BW Prime Fitness.",
  class:
    "Olá! Gostaria de consultar a disponibilidade de uma aula experimental na BW Prime Fitness.",
  team: "Olá! Gostaria de saber mais sobre o acompanhamento da equipe BW Prime Fitness.",
};
export const WIZARD_QUESTIONS: WizardQuestion[] = [
  {
    key: "goal",
    title: "Qual é o seu principal objetivo?",
    options: [
      {
        id: "emagrecer",
        title: "Emagrecer",
        description: "Perder gordura e ganhar mais disposição",
        iconName: "Flame",
      },
      {
        id: "ganhar_massa",
        title: "Ganhar massa",
        description: "Aumentar força e volume muscular",
        iconName: "Dumbbell",
      },
      {
        id: "condicionamento",
        title: "Condicionamento",
        description: "Mais resistência e performance",
        iconName: "Activity",
      },
      {
        id: "saude",
        title: "Saúde e bem-estar",
        description: "Qualidade de vida e mais energia",
        iconName: "Heart",
      },
    ],
  },
  {
    key: "frequency",
    title: "Quantas vezes por semana pretende treinar?",
    options: [
      {
        id: "2x",
        title: "2x por semana",
        description: "Um começo que cabe na rotina",
        iconName: "Calendar",
      },
      {
        id: "3x",
        title: "3x por semana",
        description: "Espaço para criar constância",
        iconName: "Calendar",
      },
      {
        id: "4x_plus",
        title: "4x ou mais",
        description: "Mais tempo dedicado ao treino",
        iconName: "Calendar",
      },
    ],
  },
  {
    key: "preference",
    title: "Como prefere treinar?",
    options: [
      {
        id: "acompanhamento",
        title: "Mais acompanhamento",
        description: "Quero orientação para encontrar meu ritmo",
        iconName: "Users",
      },
      {
        id: "autonomia",
        title: "Mais autonomia",
        description: "Gosto de conduzir minha rotina de treino",
        iconName: "ArrowUpRight",
      },
    ],
  },
];
export const PLANS_DATA: PlanItem[] = [
  {
    code: "START",
    description: "O primeiro passo para uma nova rotina.",
    price: null,
    benefits: [
      "Modalidades a confirmar",
      "Acompanhamento a confirmar",
      "Condições de adesão a confirmar",
    ],
  },
  {
    code: "PRIME",
    description: "Seu objetivo no centro da experiência.",
    price: null,
    benefits: [
      "Modalidades a confirmar",
      "Acompanhamento a confirmar",
      "Condições de adesão a confirmar",
    ],
  },
  {
    code: "PERFORMANCE",
    description: "Para quem quer ir além no próprio ritmo.",
    price: null,
    benefits: [
      "Modalidades a confirmar",
      "Acompanhamento a confirmar",
      "Condições de adesão a confirmar",
    ],
  },
];
export const FACILITY_CATEGORIES: FacilityCategory[] = [
  {
    id: "musculacao",
    name: "Musculação",
    iconName: "Dumbbell",
    objectives: ["Força", "Hipertrofia"],
    description: "Construa uma relação mais forte com o movimento.",
    photo: null,
  },
  {
    id: "cardio",
    name: "Cardio",
    iconName: "Activity",
    objectives: ["Resistência", "Energia"],
    description: "Encontre seu ritmo, um movimento de cada vez.",
    photo: null,
  },
  {
    id: "funcional",
    name: "Funcional",
    iconName: "Move",
    objectives: ["Mobilidade", "Condicionamento"],
    description: "Movimento que faz parte da sua vida.",
    photo: null,
  },
  {
    id: "pesos-livres",
    name: "Pesos livres",
    iconName: "Weight",
    objectives: ["Força", "Performance"],
    description: "Explore a força e o controle dos seus movimentos.",
    photo: null,
  },
];
export const SPECIALISTS: Specialist[] = [
  {
    id: "especialista-01",
    name: "ESPECIALISTA BW",
    role: "Especialidade a confirmar",
    badges: ["Hipertrofia", "Emagrecimento"],
    summary: "Apresentação do profissional a confirmar.",
    cref: null,
    photo: null,
  },
  {
    id: "especialista-02",
    name: "ESPECIALISTA BW",
    role: "Especialidade a confirmar",
    badges: ["Condicionamento", "Iniciantes"],
    summary: "Apresentação do profissional a confirmar.",
    cref: null,
    photo: null,
  },
  {
    id: "especialista-03",
    name: "ESPECIALISTA BW",
    role: "Especialidade a confirmar",
    badges: ["Hipertrofia", "Iniciantes"],
    summary: "Apresentação do profissional a confirmar.",
    cref: null,
    photo: null,
  },
];
export const REVIEWS: Review[] = Array.from({ length: 5 }, (_, i) => ({
  id: `review_0${i + 1}`,
  text: null,
  author: null,
}));
export const OPERATING_HOURS = [
  { day: "Segunda a sexta", hours: "--:-- às --:--" },
  { day: "Sábado", hours: "--:-- às --:--" },
  { day: "Domingo", hours: "--:-- às --:--" },
];
export const METHOD_STEPS = [
  {
    title: "Entendemos seu objetivo",
    text: "Toda evolução começa com uma conversa. O que você quer conquistar?",
  },
  {
    title: "Definimos seu caminho",
    text: "Seu objetivo e sua rotina ajudam a orientar o próximo passo.",
  },
  {
    title: "Acompanhamos sua evolução",
    text: "Um convite à constância, respeitando o seu ritmo.",
  },
];
export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Posso fazer aula experimental?",
    answer:
      "Consulte a equipe para confirmar a disponibilidade, o agendamento e as condições da aula experimental.",
  },
  {
    question: "Nunca treinei. Posso começar?",
    answer:
      "Você pode dar o primeiro passo conhecendo a academia. Converse com a equipe sobre seu objetivo e sobre a orientação indicada para começar.",
  },
  {
    question: "Tem professor disponível?",
    answer:
      "A composição da equipe e a disponibilidade de acompanhamento serão confirmadas pela BW. Consulte a recepção antes da sua visita.",
  },
  {
    question: "Como funcionam os planos?",
    answer:
      "Os planos apresentados são uma prévia. Nomes, valores, benefícios e condições comerciais ainda precisam de confirmação da academia.",
  },
  {
    question: "Quais são os horários?",
    answer:
      "A grade oficial ainda será informada. Confirme com a equipe os horários de funcionamento, inclusive em domingos e feriados.",
  },
  {
    question: "Posso conhecer a academia antes de me matricular?",
    answer:
      "Fale com a equipe para combinar sua visita. A BW fica no Morro do Banco, Itanhangá — RJ, próximo ao Expresso Pizza.",
  },
];
export function buildWhatsAppUrl(
  message: string,
  phone = BRAND_CONFIG.whatsappPhone,
): string | null {
  const digits = phone.replace(/\D/g, "");
  if (!/^55\d{10,11}$/.test(digits)) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
