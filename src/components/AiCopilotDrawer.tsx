import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import { MessageSquare, X } from 'lucide-react';

interface AiCopilotDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiCopilotDrawer: React.FC<AiCopilotDrawerProps> = ({ isOpen, onClose }) => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [responseText, setResponseText] = useState<string>('');
  const [isThinking, setIsThinking] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleAsk = (topic: string) => {
    setSelectedTopic(topic);
    setIsThinking(true);
    setResponseText('Pensando e sintetizando resposta...');

    setTimeout(() => {
      setResponseText(cvData.aiKnowledge[topic] || 'Informação não encontrada no currículo.');
      setIsThinking(false);
    }, 300);
  };

  const questions = [
    { key: 'salesforce', label: 'Como é a experiência com Salesforce?' },
    { key: 'projetos', label: 'Quais são os projetos de maior destaque?' },
    { key: 'java', label: 'Como é o domínio de Back-end com Java?' },
    { key: 'transicao', label: 'Como foi a transição para Tech e FIAP?' }
  ];

  return (
    <div className="mt-6 p-5 rounded-2xl bg-zinc-900/90 border border-indigo-500/30 transition-all text-left">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-500" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            Assistente do Portfólio
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-zinc-500 hover:text-zinc-300 text-xs cursor-pointer flex items-center gap-1"
        >
          <X className="w-3.5 h-3.5" /> fechar
        </button>
      </div>

      <p className="text-xs text-zinc-400 mt-2.5">
        Recrutador ou visitante? Clique em uma das perguntas rápidas abaixo para a IA responder baseada no currículo do Carlos:
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {questions.map((q) => (
          <button
            key={q.key}
            onClick={() => handleAsk(q.key)}
            className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
              selectedTopic === q.key
                ? 'bg-indigo-600 text-white border-indigo-500'
                : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border-zinc-700'
            }`}
          >
            {q.label}
          </button>
        ))}
      </div>

      {selectedTopic && (
        <div className="mt-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-xs leading-relaxed text-zinc-300 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 text-indigo-400 font-semibold mb-1">
            <MessageSquare className="w-3.5 h-3.5" />
            {isThinking ? 'Consultando histórico...' : 'Informação do perfil:'}
          </div>
          <p>{responseText}</p>
        </div>
      )}
    </div>
  );
};

