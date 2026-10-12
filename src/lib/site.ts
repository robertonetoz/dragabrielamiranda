export const site = {
  name: "Dra. Gabriela Miranda",
  tagline: "Emagrecimento & Performance",
  crm: "CRM MG 73587",
  whatsappNumber: "5534997940116",
  whatsappDisplay: "(34) 99794-0116",
  instagram: "https://www.instagram.com/dra.gabriela.miranda/",
  instagramHandle: "@dra.gabriela.miranda",
  doctoralia:
    "https://www.doctoralia.com.br/gabriela-miranda-10/medico-clinico-geral-generalista/uberlandia?saasonly=true",
  maps: "https://www.google.com/maps/search/?api=1&query=Concept%20Clinic%2C%20Rua%20Oleg%C3%A1rio%20Maciel%2C%201132%2C%20Uberl%C3%A2ndia%20-%20MG",
  clinic: "Concept Clinic",
  street: "Rua Olegário Maciel, 1132",
  district: "Lídice",
  city: "Uberlândia",
  state: "MG",
  zip: "38400-086",
  reviewCount: 23,
};

export function whatsappLink(text: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const defaultWhatsappMessage =
  "Olá, Dra. Gabriela! Vim pelo site e gostaria de agendar uma consulta.";

export const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#consulta", label: "A consulta" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#consultorio", label: "Consultório" },
];

export type IconName = "balanca" | "musculo" | "metabolismo" | "hormonio" | "energia" | "intestino";

export const treatments: {
  icon: IconName;
  title: string;
  summary: string;
  conditions: string[];
}[] = [
  {
    icon: "balanca",
    title: "Emagrecimento e obesidade",
    summary: "Perder peso com saúde e manter o resultado, sem fórmulas prontas.",
    conditions: [
      "Emagrecimento",
      "Obesidade",
      "Sobrepeso",
      "Ganho de peso",
      "Compulsão alimentar",
      "Magreza",
    ],
  },
  {
    icon: "musculo",
    title: "Massa muscular e performance",
    summary: "Ganhar força, preservar músculo e render mais no treino e no dia a dia.",
    conditions: [
      "Ganho de massa muscular",
      "Hipertrofia",
      "Dificuldade de ganho de massa muscular",
      "Perda de força e massa muscular",
      "Sarcopenia",
      "Saúde física",
    ],
  },
  {
    icon: "metabolismo",
    title: "Saúde metabólica",
    summary: "Cuidar do que os exames mostram antes que vire um problema maior.",
    conditions: ["Síndrome metabólica", "Resistência à insulina", "Esteatose hepática", "Lipedema"],
  },
  {
    icon: "hormonio",
    title: "Fisiologia hormonal",
    summary: "Entender como seus hormônios influenciam peso, disposição e bem-estar.",
    conditions: ["Consulta de fisiologia hormonal", "Hipotireoidismo", "Distúrbios na libido"],
  },
  {
    icon: "energia",
    title: "Energia e nutrientes",
    summary: "Investigar o cansaço que não passa e corrigir o que está em falta.",
    conditions: [
      "Cansaço",
      "Falta de energia",
      "Deficiência de vitaminas",
      "Deficiência de vitamina D",
      "Deficiência de vitamina B12",
      "Deficiência de ácido fólico",
      "Deficiência de ácido ascórbico",
      "Deficiência de magnésio",
    ],
  },
  {
    icon: "intestino",
    title: "Saúde intestinal",
    summary: "Tratar o intestino como parte do seu metabolismo.",
    conditions: ["Disbiose intestinal", "Constipação"],
  },
];

/** Quantos grupos aparecem antes de "Ver todas as condições". */
export const treatmentsVisible = 5;

export const services = [
  "Consulta de emagrecimento",
  "Tratamento de obesidade",
  "Avaliação de performance esportiva",
  "Consulta com bioimpedância",
  "Check-up",
  "Consulta para reposição hormonal",
  "Implante hormonal subcutâneo",
  "Tratamento clínico de lipedema",
  "Consulta de retorno",
  "Teleconsulta",
];

export const education = [
  {
    place: "Universidade Federal de Uberlândia",
    title: "Medicina, Hospital de Clínicas da UFU",
    when: "2011 a 2017",
  },
  { place: "Sanar", title: "Pós-graduação em Obesidade e Emagrecimento", when: "" },
  {
    place: "Instituto CDT",
    title: "Pós-graduação em Nutrologia e Endocrinologia",
    when: "em curso",
  },
  {
    place: "UNINTER",
    title: "Pós-graduação em Gestão Hospitalar e MBA em Gestão Pública em Saúde",
    when: "2023 e 2025",
  },
  {
    place: "Grupo Brasileiro de Classificação de Risco",
    title: "Mestre GASU, Gestão Avançada de Serviços de Urgência",
    when: "2025",
  },
  {
    place: "Organização Nacional de Acreditação",
    title: "Avaliadora do Sistema Brasileiro de Acreditação",
    when: "2020",
  },
];

export const career = [
  {
    place: "UAI São Jorge e UAI Morumbi, Uberlândia",
    title: "Gerente médica",
    when: "2021 a 2026",
  },
  {
    place: "UCCI, Uberlândia",
    title: "Responsável técnica do Núcleo Interno de Regulação",
    when: "2026",
  },
  { place: "EEJ Auditoria em Saúde", title: "Auditoria médica", when: "2019 a 2022" },
  { place: "Algar", title: "Medicina do trabalho", when: "2018 a 2021" },
];

export const steps = [
  {
    icon: "conversa" as const,
    title: "Conversa sem pressa",
    text: "Começamos pela sua rotina, seu histórico de saúde e seus hábitos. Quero entender o que você já tentou e o que faz sentido para a sua vida.",
  },
  {
    icon: "exames" as const,
    title: "Exames laboratoriais",
    text: "Analiso os exames que você já tem e peço o que faltar para enxergar o quadro completo, do metabolismo aos hormônios.",
  },
  {
    icon: "bioimpedancia" as const,
    title: "Bioimpedância",
    text: "Nas consultas presenciais, avaliamos sua composição corporal. É ela, e não só o peso, que mostra a sua evolução a cada retorno.",
  },
  {
    icon: "plano" as const,
    title: "Plano que cabe na rotina",
    text: "Você sai com um tratamento personalizado, baseado em evidências e pensado para ser mantido no dia a dia.",
  },
];

export type Review = {
  name: string;
  text: string;
  date: string;
  context: string;
};

/**
 * Opiniões publicadas no perfil da Dra. Gabriela no Doctoralia, transcritas como estão lá.
 * "[…]" marca um trecho: o texto original continua no Doctoralia.
 */
export const reviews: Review[] = [
  {
    name: "Mara Angelica",
    text: "Atendimento personalizado, conversamos em detalhes sobre tudo da minha saúde! Agora seguir os próximos passos da doutora após os exames, na certeza que estarei no caminho certo para ter qualidade de vida!",
    date: "15 de julho de 2026",
    context: "Consulta de emagrecimento",
  },
  {
    name: "Whander",
    text: "Minha experiência com a Dra. Gabi transformou completamente a minha rotina e a minha saúde. Eu vinha de um histórico de cansaço extremo, sem energia para o dia a dia, e já tinha tentado outros tratamentos anteriores sem sucesso. O grande diferencial dela foi a abordagem: ela desenhou um plano terapêutico totalmente individualizado, com uma precisão cirúrgica. […]",
    date: "29 de maio de 2026",
    context: "Avaliação de performance esportiva",
  },
  {
    name: "Paula Soares",
    text: "A Dra Gabi além de muito profissional, competente, é atenciosa e humana, o que modifica o atendimento, e trás mais proximidade, o que facilita na execução do tratamento proposto.",
    date: "12 de julho de 2026",
    context: "Avaliação de performance esportiva",
  },
  {
    name: "Rosângela M. Resende",
    text: "Dr. GABRIELA super amável, interessada em todos os detalhes atendimento humanizado, confiável, amei o atendimento ela é nota 10000....",
    date: "4 de setembro de 2026",
    context: "Consulta de emagrecimento",
  },
  {
    name: "IG",
    text: "Atendimento impecável! A Dra Gabriela e uma ótima professional, educada e cuidadosa, que me fez sentir super acolhida e segura desde o primeiro minuto de consulta. Uma médica e pessoa maravilhosa!",
    date: "30 de maio de 2026",
    context: "Teleconsulta",
  },
  {
    name: "Daniel Lima",
    text: "Ótima profissional, super recomendo , muita atenciosa e com muita propriedade em suas análises e explicações",
    date: "1 de setembro de 2026",
    context: "Consulta de emagrecimento",
  },
  {
    name: "Lauro de Freitas",
    text: "Gostei muito do seu atendimento, muito atenciosa e explicativa! Obrigado",
    date: "26 de junho de 2026",
    context: "Consulta de emagrecimento",
  },
  {
    name: "Júlio Cesar",
    text: "Ótima profissional, ótimo atendimento, tudo perfeito, que Deus abençoe sempre",
    date: "12 de agosto de 2026",
    context: "Consulta de emagrecimento",
  },
  {
    name: "Igmg",
    text: "Excelente atendimento. Perfeita a consulta. médica profissional. Super indico.",
    date: "19 de setembro de 2026",
    context: "Concept Clinic",
  },
  {
    name: "Guilherme Yugue",
    text: "Profissional competente, pontual e muito atenciosa.",
    date: "22 de maio de 2026",
    context: "Consulta",
  },
];

export const mostMentioned = [
  "Atenciosa durante a consulta",
  "Explicações detalhadas",
  "Eficácia do tratamento",
];

export const instagramTopics = [
  "Vai desistir porque não emagreceu?",
  "O emagrecimento vai muito além da balança",
  "Coisas que você faz que atrapalham seu processo de emagrecimento",
  "5 verdades que ninguém quer ouvir, mas todo mundo precisa",
];
