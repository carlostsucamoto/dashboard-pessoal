import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import { AiCopilotDrawer } from './AiCopilotDrawer';
import { Download, MessageSquareCode } from 'lucide-react';

export const AboutSlide: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <div className="card-surface rounded-3xl p-8 sm:p-12 md:p-16 min-h-[520px] flex flex-col justify-center">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        {/* FOTO DE PERFIL SÓBRIA */}
        <div className="relative group flex-shrink-0">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-700/80 shadow-2xl relative">
            <img
              src="/Images/eu.jpeg"
              alt={cvData.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* CONTEÚDO */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-2">
            <span className="text-xs px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono">
              {cvData.badge}
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono">
              {cvData.location}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mt-1">
            {cvData.name}
          </h2>
          <p className="text-sm text-zinc-400 mt-1.5 font-medium">
            {cvData.role}
          </p>

          <div className="mt-6 space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed sm:leading-8">
            <p>
              Desenvolvedor com foco em <strong>aplicações web completas</strong>, atuando tanto no Back-end (<strong>Java, Python e SQL</strong>) quanto no Front-end com interfaces em <strong>React, TypeScript e Tailwind</strong>. Experiência prática na criação de APIs, modelagem de dados e regras de negócio.
            </p>
            <p>
              Atualmente atuo na <strong>WPP Commerce</strong> com <strong>Salesforce Marketing Cloud</strong> na conta Nestlé, trabalhando com automação de réguas de relacionamento, estruturação de dados e segmentações via SQL.
            </p>
          </div>

          {/* COMPETÊNCIAS MONOCROMÁTICAS */}
          <div className="mt-8 pt-6 border-t border-zinc-800/80">
            <p className="text-xs text-zinc-400 uppercase tracking-wider font-semibold mb-3">
              Competências Técnicas Principais
            </p>
            <div className="flex flex-wrap gap-2.5 justify-center md:justify-start text-xs sm:text-sm font-mono">
              {cvData.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-200 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-all shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* BOTÕES: CV + LINKS + COPILOT */}
          <div className="mt-8 flex flex-wrap gap-3.5 justify-center md:justify-start text-sm font-medium">
            <a
              href={cvData.cvPdfPath}
              download="Curriculo-Carlos-Eduardo-Chiarelli.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20 inline-flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-white" />
              Baixar Currículo (PDF)
            </a>
            <a
              href={cvData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 transition-all border border-zinc-700 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={cvData.github}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 transition-all border border-zinc-700 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>

            <button
              onClick={() => setIsAiOpen(!isAiOpen)}
              className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-indigo-300 border border-indigo-500/30 hover:border-indigo-400 transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <MessageSquareCode className="w-4 h-4 text-indigo-400" />
              Pergunte à IA sobre mim
            </button>
          </div>

          {/* DRAWER DA IA */}
          <AiCopilotDrawer isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
        </div>
      </div>
    </div>
  );
};
