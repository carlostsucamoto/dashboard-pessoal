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
    'Profissional com forte rigor analítico, focado na arquitetura e desenvolvimento de aplicações web completas. Atuo na entrega de código limpo integrando motores de Back-end (Java, Python e bancos SQL) à construção de interfaces modernas e responsivas no Front-end (React, JavaScript e Tailwind).',
    'Possuo domínio prático em arquitetura CRUD, estruturação de regras de negócio e manipulação de componentes visuais. Atualmente, atuo com operações de CRM e dados em escala global (Salesforce Marketing Cloud), aplicando automação de rotinas e eficiência na resolução estruturada de problemas complexos.'
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
      'Na WPP Commerce (atendendo à conta global Nestlé), o Carlos opera réguas de relacionamento em escala (E-mail e WhatsApp) no Salesforce Marketing Cloud, estruturando Data Extensions, regras de segmentação de dados e atuando na engenharia de requisitos com alto rigor analítico.',
    projetos:
      'Os projetos de maior destaque são: 1) TokenPulse (cockpit de cotas e proxy de IA integrando a Google Gemini API), 2) FinançasPRO (sistema financeiro e carteira de investimentos com PWA, Chart.js e Wi-Fi sync), 3) PokéCrowlers (RPG roguelike procedural em turnos) e 4) Sistema de Triagem Hospitalar (regras de negócio clínicas em Java OOP).',
    java:
      'O principal case em Java é o "Sistema de Triagem de Pacientes", uma aplicação orientada a objetos (OOP) que simula o fluxo hospitalar classificando prioridades clínicas conforme regras estritas de dor e sintomas com código limpo e arquitetura modular.',
    transicao:
      'Carlos cursa Análise e Desenvolvimento de Sistemas na FIAP (previsão dez/2027) e realiza Iniciação Científica em Interface Neuromórfica para decodificação de bioestímulos, unindo rigor analítico à engenharia de software full stack.'
  } as AiKnowledge
};

