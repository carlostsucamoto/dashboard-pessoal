export interface Project {
  id: string;
  title: string;
  category: 'ia' | 'fullstack' | 'games' | 'memorando';
  badgeCategory: string;
  badgeCategoryColor: string;
  stack: string;
  description: string;
  image: string;
  link?: string;
  linkLabel?: string;
  extraMeta?: string;
  isLegacy?: boolean;
}

export interface StudyTask {
  id: string;
  day: number;
  title: string;
  priority: 'Alta' | 'Média' | 'Baixa' | 'Sprint';
  completed: boolean;
  isAiGenerated?: boolean;
}

export interface IdeaItem {
  id: string;
  content: string;
  createdAt: string;
}

