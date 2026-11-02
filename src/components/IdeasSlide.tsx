import React, { useState, useEffect } from 'react';
import { IdeaItem } from '../types';
import { Plus, X } from 'lucide-react';

const INITIAL_IDEAS: IdeaItem[] = [
  {
    id: '1',
    content: 'Integrar automações de dados no Salesforce Marketing Cloud com APIs em Node.js.',
    createdAt: new Date().toLocaleDateString('pt-BR')
  },
  {
    id: '2',
    content: 'Publicar o Backlog de Jogos como uma aplicação independente e linkar no portfólio.',
    createdAt: new Date().toLocaleDateString('pt-BR')
  }
];

export const IdeasSlide: React.FC = () => {
  const [ideas, setIdeas] = useState<IdeaItem[]>(() => {
    const saved = localStorage.getItem('brainlist_ideas');
    return saved ? JSON.parse(saved) : INITIAL_IDEAS;
  });

  const [inputVal, setInputVal] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('brainlist_ideas', JSON.stringify(ideas));
  }, [ideas]);

  const addIdea = () => {
    const val = inputVal.trim();
    if (!val) return;
    const newIdea: IdeaItem = {
      id: Date.now().toString(),
      content: val,
      createdAt: new Date().toLocaleDateString('pt-BR')
    };
    setIdeas((prev) => [newIdea, ...prev]);
    setInputVal('');
  };

  const removeIdea = (id: string) => {
    setIdeas((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className="card-surface rounded-3xl p-8 sm:p-12 min-h-[520px] flex flex-col justify-between">
      <div>
        <div className="border-b border-zinc-800 pb-5 mb-8 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Minhas Ideias & Insights
            </h3>
            <p className="text-sm text-zinc-400 mt-1">
              Captura rápida sem fricção para arquitetura de software, dados e estudos
            </p>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono">
            {ideas.length} {ideas.length === 1 ? 'anotação' : 'anotações'}
          </span>
        </div>

        {/* INPUT DE IDEIA */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Digite uma nova ideia..."
            className="flex-1 bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
            onKeyDown={(e) => {
              if (e.key === 'Enter') addIdea();
            }}
          />
          <button
            onClick={addIdea}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/20 cursor-pointer flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            Adicionar
          </button>
        </div>

        {/* LISTA DE IDEIAS */}
        <ul className="space-y-3 text-sm">
          {ideas.length === 0 ? (
            <li className="p-6 text-center text-zinc-500 rounded-xl border border-zinc-800/60 bg-zinc-900/20">
              Nenhuma ideia anotada ainda. Comece a digitar acima!
            </li>
          ) : (
            ideas.map((idea) => (
              <li
                key={idea.id}
                className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex items-center justify-between group hover:border-zinc-700 transition-all"
              >
                <span className="text-zinc-200">{idea.content}</span>
                <button
                  onClick={() => removeIdea(idea.id)}
                  className="text-zinc-500 hover:text-rose-400 transition-colors p-1.5 text-base cursor-pointer"
                  title="Remover anotação"
                >
                  <X className="w-4 h-4" />
                </button>
              </li>
            ))
          )}
        </ul>
      </div>

      <div className="mt-8 pt-5 border-t border-zinc-800/80 text-xs text-zinc-500 flex justify-between">
        <span>Persistência local ativa (LocalStorage)</span>
        <span>Pressione Enter para salvar rapidamente</span>
      </div>
    </div>
  );
};

