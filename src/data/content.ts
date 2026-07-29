import { Pillar, Specialty, ProcessStep, TargetCriterion, FAQItem } from '../types';

export const HERO_DATA = {
  title: "MEDICINA PARA A VIDA",
  subtitle: "Cuidado médico baseado em ciência, tempo e individualidade.",
  badges: ["Clínica Médica", "Medicina de Família", "Atendimento Domiciliar", "Itaperuna/RJ"],
  tagline: "Uma medicina que vai além do tratamento de sintomas.",
  paragraphs: [
    "Acredito que cada paciente possui uma história única, necessidades específicas e um contexto de vida que merece ser compreendido antes de qualquer diagnóstico.",
    "Meu compromisso é oferecer uma medicina baseada nas melhores evidências científicas, aliada a um olhar humano que respeita sua individualidade.",
    "Mais do que consultas, proponho um acompanhamento médico que promove prevenção, qualidade de vida e bem-estar em todas as fases da vida."
  ],
  ctaText: "Agendar Consulta",
};

export const ABOUT_DATA = {
  title: "Conheça a Dra. Maria Júlia Merhge",
  subtitle: "Ciência, experiência e um cuidado verdadeiramente individualizado.",
  paragraphs: [
    "Sou médica com atuação em Clínica Médica e Medicina de Família, dedicada ao acompanhamento integral da saúde do adulto e da família.",
    "Minha missão é oferecer uma medicina que una excelência técnica, atualização constante e uma relação médico-paciente baseada na confiança.",
    "Acredito que compreender a pessoa é tão importante quanto compreender a doença. Por isso, cada consulta é conduzida com tempo, escuta qualificada e decisões fundamentadas nas melhores evidências científicas.",
    "Esse é o conceito que norteia meu trabalho: Medicina para a Vida — um cuidado contínuo, personalizado e comprometido com a saúde em sua totalidade."
  ],
  location: "Itaperuna/RJ e região",
};

export const PILLARS_DATA: Pillar[] = [
  { id: "ciencia", title: "Ciência", description: "Condutas baseadas nas evidências científicas mais atuais, oferecendo segurança e precisão em cada decisão clínica.", iconName: "Microscope" },
  { id: "individualidade", title: "Individualidade", description: "Cada paciente possui necessidades, objetivos e histórias diferentes. O tratamento deve respeitar essa singularidade.", iconName: "UserCheck" },
  { id: "prevencao", title: "Prevenção", description: "A prevenção é uma das formas mais eficazes de preservar a saúde e proporcionar qualidade de vida a longo prazo.", iconName: "ShieldCheck" },
  { id: "acompanhamento", title: "Acompanhamento", description: "Mais do que tratar doenças, acompanho pessoas ao longo da vida, construindo uma relação de confiança e cuidado contínuo.", iconName: "HeartPulse" }
];

export const SPECIALTIES_DATA: Specialty[] = [
  {
    id: "clinica-medica", title: "Clínica Médica", subtitle: "Avaliação Completa da Saúde do Adulto",
    description: "Avaliação completa da saúde do adulto, investigação diagnóstica, tratamento de doenças agudas e crônicas, acompanhamento clínico e promoção da saúde.",
    highlights: ["Investigação diagnóstica minuciosa de sintomas complexos", "Manejo e controle de doenças crônicas (Hipertensão, Diabetes, Colesterol, etc.)", "Check-up preventivo individualizado e avaliação global da saúde", "Tratamento de quadros agudos com agilidade e rigor científico"],
    iconName: "Stethoscope"
  },
  {
    id: "medicina-familia", title: "Medicina de Família", subtitle: "Abordagem Integral e Humanizada",
    description: "Uma abordagem integral que considera o paciente em seu contexto de vida, promovendo um cuidado contínuo, preventivo e humanizado.",
    highlights: ["Acompanhamento em todas as fases da vida adulta e familiar", "Coordenação do cuidado e articulação com outras especialidades", "Compreensão dos fatores psicossociais e familiares da saúde", "Foco na prevenção primária e estilo de vida saudável"],
    iconName: "Users"
  },
  {
    id: "atendimento-domiciliar", title: "Atendimento Domiciliar", subtitle: "Cuidado Médico no Conforto da sua Casa",
    description: "Atendimento médico presencial diretamente na sua residência para pacientes com mobilidade reduzida, idosos ou que buscam praticidade e privacidade.",
    highlights: ["Avaliação clínica completa no conforto do ambiente familiar", "Plano terapêutico adaptado à realidade e rotina do lar", "Comodidade para idosos e pacientes em reabilitação", "Acompanhamento contínuo e acolhedor em Itaperuna/RJ e região"],
    iconName: "Home"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { number: 1, title: "Escuta Atenta", description: "Escuta atenta e acolhimento desde o primeiro momento, criando um ambiente seguro para compartilhar suas dúvidas." },
  { number: 2, title: "Avaliação Clínica Detalhada", description: "Exame clínico criterioso e análise completa do histórico de saúde, estilo de vida e exames prévios." },
  { number: 3, title: "Investigação Cuidadosa", description: "Análise minuciosa dos sintomas, histórico pessoal e identificação de potenciais fatores de risco." },
  { number: 4, title: "Explicação Clara", description: "Diálogo transparente sobre hipóteses diagnósticas e todas as opções terapêuticas disponíveis." },
  { number: 5, title: "Plano Personalizado", description: "Elaboração conjunta de um plano de tratamento adaptado à sua rotina e preferências." },
  { number: 6, title: "Orientações Preventivas", description: "Recomendações práticas voltadas à prevenção de doenças e ao ganho real de qualidade de vida." },
  { number: 7, title: "Acompanhamento Contínuo", description: "Suporte e reavaliações periódicas quando necessário para garantir a evolução positiva do seu bem-estar." }
];

export const MANIFESTO_DATA = {
  title: "Medicina para a Vida",
  paragraphs: [
    "A medicina evolui constantemente, mas alguns princípios permanecem essenciais.",
    "A verdadeira excelência está em unir conhecimento científico, atualização permanente e uma relação de confiança construída com cada paciente.",
    "Mais do que tratar doenças, acredito em cuidar de pessoas, compreender suas necessidades e desenvolver estratégias que promovam saúde, autonomia e bem-estar ao longo da vida.",
    "Essa é a essência da Medicina para a Vida."
  ]
};

export const TARGET_AUDIENCE: TargetCriterion[] = [
  { id: "1", text: "Atendimento médico personalizado com tempo dedicado exclusivamente a você." },
  { id: "2", text: "Acompanhamento contínuo da saúde e prevenção de doenças em longo prazo." },
  { id: "3", text: "Prevenção e promoção ativa da qualidade de vida e autonomia." },
  { id: "4", text: "Tratamento seguro e fundamentado de doenças agudas e crônicas." },
  { id: "5", text: "Uma médica que valoriza a escuta, o diálogo direto e decisões compartilhadas." }
];

export const FINAL_CTA_DATA = {
  title: "Agende sua consulta",
  subtitle: "Sua saúde merece um cuidado construído com ciência, tempo e confiança.",
  description: "Se você procura um acompanhamento médico que una conhecimento científico, atenção individualizada e compromisso genuíno com sua saúde, será um prazer recebê-lo em Itaperuna/RJ.",
  location: "Consultório em Itaperuna/RJ",
  buttonText: "Agendar Consulta via WhatsApp"
};

export const FAQS: FAQItem[] = [
  { question: "Onde são realizadas as consultas da Dra. Maria Júlia?", answer: "As consultas presenciais acontecem tanto em consultório médico localizado em Itaperuna/RJ quanto através de Atendimento Domiciliar na sua residência para sua maior comodidade." },
  { question: "Como funciona o Atendimento Domiciliar?", answer: "A consulta domiciliar leva toda a estrutura necessária para um exame físico minucioso e anamnese completa diretamente para a sua casa, ideal para idosos, pessoas com dificuldade de locomoção ou quem prefere atendimento privado." },
  { question: "Como funciona a consulta de primeira vez?", answer: "A consulta é conduzida sem pressa, com duração estendida para permitir uma anamnese detalhada, revisão de exames anteriores, exame físico completo e elaboração de um plano preventivo e terapêutico individualizado." },
  { question: "A Dra. Maria Júlia faz atendimento particular ou convênio?", answer: "Os atendimentos são prioritariamente particulares para garantir o tempo de consulta necessário e o alto nível de individualização do cuidado. É emitida nota fiscal e comprovante médico para solicitação de reembolso junto ao seu plano de saúde." },
  { question: "Como posso agendar minha consulta?", answer: "O agendamento pode ser realizado de forma rápida e prática diretamente através do nosso botão de WhatsApp nesta página, escolhendo a modalidade (Consultório ou Domiciliar), dia e turno de sua preferência." }
];
