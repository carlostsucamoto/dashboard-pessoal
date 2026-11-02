import React from 'react';
import { User, Code2, Calendar, Lightbulb } from 'lucide-react';

interface NavbarProps {
  currentSlide: number;
  onSelectSlide: (index: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentSlide, onSelectSlide }) => {
  const tabs = [
    { label: 'Sobre mim', icon: User },
    { label: 'Projetos', icon: Code2 },
    { label: 'Plano de Estudos', icon: Calendar },
    { label: 'Ideias & Insights', icon: Lightbulb }
  ];

  return (
    <nav className="mt-8 flex flex-wrap justify-center gap-3">
      {tabs.map((tab, idx) => {
        const Icon = tab.icon;
        const isActive = currentSlide === idx;
        return (
          <button
            key={tab.label}
            onClick={() => onSelectSlide(idx)}
            className={`nav-btn ${isActive ? 'active' : ''} px-6 py-3 rounded-xl text-xs sm:text-sm font-medium cursor-pointer flex items-center gap-2.5`}
          >
            <Icon className="w-4 h-4 opacity-75" />
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
};

