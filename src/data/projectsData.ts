import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'tokenpulse',
    title: 'TokenPulse — Monitor de Cotas IA',
    category: 'ia',
    badgeCategory: 'Cockpit IA',
    badgeCategoryColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    stack: 'React • TypeScript • Gemini API • SQLite',
    description: 'Cockpit para monitorar consumo de tokens em tempo real, consulta de cotas oficiais da Google Gemini API, analisador estático de pastas e proxy reverso local compatível com OpenAI.',
    image: '/Images/tokenpulse.jpg',
    link: 'https://github.com/carlostsucamoto',
    linkLabel: 'GitHub',
    extraMeta: 'Proxy :3001'
  },
  {
    id: 'financaspro',
    title: 'FinançasPRO — Gestão & Carteira',
    category: 'fullstack',
    badgeCategory: 'Full Stack',
    badgeCategoryColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    stack: 'Node.js • Chart.js • PWA • SQLite',
    description: 'Painel financeiro pessoal e carteira de ativos (Ações, FIIs e Renda Fixa) com acompanhamento de lucros, sincronização no celular via QR Code (Wi-Fi local) e modo privacidade.',
    image: '/Images/financaspro.png',
    link: 'https://github.com/carlostsucamoto',
    linkLabel: 'GitHub',
    extraMeta: 'PWA Mobile'
  },
  {
    id: 'pokecrowlers',
    title: 'PokéCrowlers — Roguelike RPG',
    category: 'games',
    badgeCategory: 'Game Dev',
    badgeCategoryColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    stack: 'TypeScript • Game Engine • Procedural 3D',
    description: 'Exploração procedural de masmorras em 3D e combates por turnos no universo Pokémon, com Pokédex, evolução de níveis, gerenciamento de equipe e save mobile.',
    image: '/Images/pokecrowler.jpg',
    link: 'https://github.com/carlostsucamoto',
    linkLabel: 'GitHub',
    extraMeta: 'Pallet Town 3D'
  },
  {
    id: 'triagem',
    title: 'Sistema de Triagem de Pacientes',
    category: 'fullstack',
    badgeCategory: 'Back-end',
    badgeCategoryColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    stack: 'Java OOP • Regras de Negócio',
    description: 'Simulação hospitalar com regras estritas para classificar prioridades de dor e sintomas clínicos com validação e arquitetura orientada a objetos (OOP).',
    image: '/Images/triagem.png',
    link: 'https://github.com/carlostsucamoto/Cadastro-e-triagem-de-pacientes',
    linkLabel: 'GitHub',
    extraMeta: 'Regras Clínicas'
  },
  {
    id: 'backlog',
    title: 'Backlog de Jogos & Sorteador',
    category: 'games',
    badgeCategory: 'Front-end',
    badgeCategoryColor: 'bg-zinc-800 text-zinc-300 border-zinc-700',
    stack: 'JS • LocalStorage • APIs',
    description: 'Dashboard interativo com filtros de status, persistência no LocalStorage, algoritmo de sorteio aleatório e integração com capas de jogos.',
    image: '/Images/backlog.png',
    link: 'https://github.com/carlostsucamoto/backlog-jogos-python',
    linkLabel: 'GitHub',
    extraMeta: 'Persistência Local'
  },
  {
    id: 'pedra-papel-tesoura',
    title: 'Pedra, Papel ou Tesoura',
    category: 'games',
    badgeCategory: 'Web Interativa',
    badgeCategoryColor: 'bg-zinc-800 text-zinc-300 border-zinc-700',
    stack: 'JavaScript DOM • Vercel',
    description: 'Lógica clássica com jogadas randômicas do computador e manipulação de DOM em tempo real hospedado na Vercel com feedback dinâmico.',
    image: '/Images/pedra-papel-tesoura.png',
    link: 'https://pedra-papel-ou-tesoura-git-main-carlostsucamotos-projects.vercel.app/',
    linkLabel: 'Vercel Demo',
    extraMeta: 'Deploy Vercel'
  },
  {
    id: 'adivinhe',
    title: 'Jogo de Adivinhação de Números',
    category: 'games',
    badgeCategory: 'Web Interativa',
    badgeCategoryColor: 'bg-zinc-800 text-zinc-300 border-zinc-700',
    stack: 'JavaScript • Random Engine • Vercel',
    description: 'Jogo com motor de geração aleatória, controle de tentativas e feedback reativo ao usuário hospedado na Vercel.',
    image: '/Images/adivinhe.png',
    link: 'https://quenumeroestoupensando.vercel.app/',
    linkLabel: 'Vercel Demo',
    extraMeta: 'Deploy Vercel'
  },
  {
    id: 'brainlist-v1',
    title: 'Brainlist v1.0 — Onde Tudo Começou',
    category: 'memorando',
    badgeCategory: 'Cápsula do Tempo',
    badgeCategoryColor: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    stack: 'HTML5 Puro • CSS3 • JS Vanilla',
    description: 'Dashboard original construído na primeira semana do curso de ADS na FIAP (Abril/2026). Preservado como memorando histórico da jornada e prova do salto evolutivo em engenharia de software.',
    image: '/Images/brainlist-legacy.svg',
    link: '/legacy/index.html',
    linkLabel: 'Abrir v1.0 Original',
    extraMeta: 'Semana 1 FIAP',
    isLegacy: true
  }
];

