import React from 'react';
import { cvData } from '../data/cvData';

export const Header: React.FC = () => {
  return (
    <header className="text-center mb-8 w-full">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300 mb-3 shadow-sm">
        {cvData.badge}
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2.5">
        {cvData.name}
      </h1>
      <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
        Arquitetura de aplicações web completas, operações de CRM em escala global e resolução estruturada de problemas.
      </p>
    </header>
  );
};

