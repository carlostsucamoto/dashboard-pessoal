export interface AiKnowledge {
  [key: string]: string;
}

export const cvData = {
  name: 'Carlos Eduardo Tsucamoto Chiarelli',
  role: 'Desenvolvedor Full Stack & Especialista em Dados e CRM',
  badge: 'Desenvolvedor Full Stack & Analista de Dados',
  location: 'Brooklin, São Paulo',
  email: 'caduchiarelli@hotmail.com',
  phone: '(11) 94212-1088',
  linkedin: 'https://www.linkedin.com/in/carlostsucamoto/',
  github: 'https://github.com/carlostsucamoto',
  cvPdfPath: '/curriculo-carlos-chiarelli.pdf',
  tags: ['Salesforce Marketing Cloud', 'FIAP ADS'],
  bio: [
    'Desenvolvedor com foco em aplicações web completas, atuando tanto no Back-end (Java, Python e SQL) quanto no Front-end com interfaces em React, TypeScript e Tailwind. Experiência prática na criação de APIs, modelagem de dados e regras de negócio.',
    'Atualmente atuo na WPP Commerce com Salesforce Marketing Cloud na conta Nestlé, trabalhando com automação de réguas de relacionamento, estruturação de dados em grande escala e segmentações via SQL.'
  ],
  skills: [
    'JavaScript',
    'Java',
    'Python',
    'SQL',
    'HTML',
    'React',
    'Node',
    'Manipulação de IA Generativa'
  ],
  aiKnowledge: {
    salesforce:
      'Na WPP Commerce (atendendo à conta global Nestlé), o Carlos atua com Salesforce Marketing Cloud (E-mail e WhatsApp), estruturando Data Extensions, consultas SQL e regras de segmentação para réguas de comunicação em grande escala.',
    projetos:
      'Os principais projetos incluem o TokenPulse (monitor de consumo de tokens e cotas da Gemini API), FinançasPRO (gestão financeira e carteira de ativos com PWA), PokéCrowlers (jogo procedural em 3D) e o Sistema de Triagem Hospitalar em Java.',
    java:
      'O case em Java é o Sistema de Triagem de Pacientes, uma aplicação orientada a objetos (OOP) que classifica prioridades clínicas de atendimento hospitalar com validações e estrutura modular.',
    transicao:
      'Carlos cursa Análise e Desenvolvimento de Sistemas na FIAP (conclusão em 2027) e realiza Iniciação Científica em Interface Neuromórfica para decodificação de bioestímulos.'
  } as AiKnowledge
};
