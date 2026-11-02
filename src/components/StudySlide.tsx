import React, { useState, useEffect } from 'react';
import { StudyTask } from '../types';
import { BookOpen, ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';

const INITIAL_TASKS: StudyTask[] = [
  {
    id: '1',
    day: 2,
    title: 'Estruturas de Dados Java (Listas & Pilhas)',
    priority: 'Alta',
    completed: true
  },
  {
    id: '2',
    day: 2,
    title: 'Exercícios de OOP: Herança e Polimorfismo',
    priority: 'Alta',
    completed: false
  },
  {
    id: '3',
    day: 2,
    title: 'Revisar arquitetura de componentes React & Tailwind',
    priority: 'Média',
    completed: false
  }
];

export const StudySlide: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(2);
  const [selectedDayName, setSelectedDayName] = useState<string>('Segunda-feira');
  const [isAiBarOpen, setIsAiBarOpen] = useState<boolean>(false);
  const [customTheme, setCustomTheme] = useState<string>('');
  const [newTaskInput, setNewTaskInput] = useState<string>('');

  const [tasks, setTasks] = useState<StudyTask[]>(() => {
    const saved = localStorage.getItem('brainlist_study_tasks');
    return saved ? JSON.parse(saved) : INITIAL_TASKS;
  });

  useEffect(() => {
    localStorage.setItem('brainlist_study_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const currentDayTasks = tasks.filter((t) => t.day === selectedDay);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const addTask = () => {
    const val = newTaskInput.trim();
    if (!val) return;
    const newTask: StudyTask = {
      id: Date.now().toString(),
      day: selectedDay,
      title: val,
      priority: 'Média',
      completed: false
    };
    setTasks((prev) => [newTask, ...prev]);
    setNewTaskInput('');
  };

  const generateAiStudy = (theme: string) => {
    if (!theme) return;
    const newAiTasks: StudyTask[] = [
      {
        id: Date.now().toString() + '-1',
        day: selectedDay,
        title: `Fundamentos e Setup de ${theme}`,
        priority: 'Alta',
        completed: false,
        isAiGenerated: true
      },
      {
        id: Date.now().toString() + '-2',
        day: selectedDay,
        title: `Construção de POC prática com ${theme}`,
        priority: 'Alta',
        completed: false,
        isAiGenerated: true
      },
      {
        id: Date.now().toString() + '-3',
        day: selectedDay,
        title: `Testes, refatoração e boas práticas em ${theme}`,
        priority: 'Média',
        completed: false,
        isAiGenerated: true
      }
    ];

    setTasks((prev) => [...newAiTasks, ...prev]);
    setIsAiBarOpen(false);
    setCustomTheme('');
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'Alta':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      case 'Média':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      default:
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
    }
  };

  return (
    <div className="card-surface rounded-3xl p-8 sm:p-12 min-h-[520px]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-800 pb-5 mb-8">
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Plano de Estudos & Calendário
          </h3>
          <p className="text-sm text-zinc-400 mt-1">
            Rotina estruturada de matérias da FIAP e cronograma de metas
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsAiBarOpen(!isAiBarOpen)}
            className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20 text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            Sugerir Trilha
          </button>
          <span className="text-xs px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono">
            Novembro 2026
          </span>
        </div>
      </div>

      {/* GERADOR DE IA */}
      {isAiBarOpen && (
        <div className="mb-6 p-4 rounded-2xl bg-zinc-900 border border-indigo-500/30 text-xs animate-in fade-in duration-200">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              Sugestão de Cronograma de Estudos
            </span>
            <button
              onClick={() => setIsAiBarOpen(false)}
              className="text-zinc-500 hover:text-zinc-300 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-zinc-400 mb-3">
            Escolha um tópico ou digite o que quer estudar para a IA popular seu calendário da semana:
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            {[
              'Spring Boot & APIs REST em Java',
              'React 19, Hooks Avançados e Tailwind',
              'Modelagem SQL e Otimização de Queries'
            ].map((theme) => (
              <button
                key={theme}
                onClick={() => generateAiStudy(theme)}
                className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 cursor-pointer"
              >
                {theme}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={customTheme}
              onChange={(e) => setCustomTheme(e.target.value)}
              placeholder="Ou digite outro tema (ex: Docker & CI/CD)..."
              className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
              onKeyDown={(e) => {
                if (e.key === 'Enter') generateAiStudy(customTheme);
              }}
            />
            <button
              onClick={() => generateAiStudy(customTheme)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-all cursor-pointer"
            >
              Gerar Metas
            </button>
          </div>
        </div>
      )}

      {/* CALENDÁRIO + METAS */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* CALENDÁRIO MENSAL */}
        <div className="md:col-span-5 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-white">Novembro 2026</span>
              <div className="flex items-center gap-1.5 text-zinc-400">
                <button className="p-1 hover:text-white rounded hover:bg-zinc-800">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-1 hover:text-white rounded hover:bg-zinc-800">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1.5 text-center text-[11px] text-zinc-500 font-semibold mb-2">
              <span>D</span><span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span>
            </div>

            <div className="grid grid-cols-7 gap-1.5 text-center text-xs sm:text-sm">
              {Array.from({ length: 28 }, (_, i) => i + 1).map((d) => {
                const dayOfWeekNames = [
                  'Domingo',
                  'Segunda-feira',
                  'Terça-feira',
                  'Quarta-feira',
                  'Quinta-feira',
                  'Sexta-feira',
                  'Sábado'
                ];
                const dayName = dayOfWeekNames[(d - 1) % 7];
                const isSelected = selectedDay === d;
                const hasTasks = tasks.some((t) => t.day === d);

                return (
                  <button
                    key={d}
                    onClick={() => {
                      setSelectedDay(d);
                      setSelectedDayName(dayName);
                    }}
                    className={`cal-day p-2.5 rounded-xl font-medium relative cursor-pointer ${
                      isSelected
                        ? 'active'
                        : 'text-zinc-300 hover:bg-zinc-800/60'
                    }`}
                  >
                    {d}
                    {hasTasks && !isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 absolute bottom-1 left-1/2 -translate-x-1/2" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-5 pt-3.5 border-t border-zinc-800 text-xs text-zinc-400 flex flex-wrap gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400" /> Alta Prioridade
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Média
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-400" /> FIAP Sprint
            </span>
          </div>
        </div>

        {/* METAS DO DIA */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs text-indigo-400 font-semibold uppercase tracking-wider">
                  Cronograma
                </span>
                <h4 className="text-lg font-bold text-white mt-0.5">
                  {selectedDayName}, {String(selectedDay).padStart(2, '0')} de Novembro
                </h4>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                {currentDayTasks.length} {currentDayTasks.length === 1 ? 'meta' : 'metas'}
              </span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm">
              {currentDayTasks.length === 0 ? (
                <li className="p-6 text-center text-zinc-500 rounded-xl border border-zinc-800/60 bg-zinc-900/20">
                  Nenhuma meta agendada para este dia. Adicione uma nova abaixo ou gere com IA!
                </li>
              ) : (
                currentDayTasks.map((t) => (
                  <li
                    key={t.id}
                    className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex items-center justify-between"
                  >
                    <label className="flex items-center gap-3.5 cursor-pointer text-zinc-200">
                      <input
                        type="checkbox"
                        checked={t.completed}
                        onChange={() => toggleTask(t.id)}
                        className="w-4 h-4 rounded bg-zinc-800 border-zinc-700 text-indigo-600 focus:ring-0 cursor-pointer"
                      />
                      <span className={t.completed ? 'line-through text-zinc-500' : ''}>
                        {t.title}
                      </span>
                    </label>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded border font-medium ${getPriorityBadge(
                        t.priority
                      )}`}
                    >
                      {t.priority}
                    </span>
                  </li>
                ))
              )}
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-800/80 flex gap-2.5">
            <input
              type="text"
              value={newTaskInput}
              onChange={(e) => setNewTaskInput(e.target.value)}
              placeholder="Adicionar nova meta para este dia..."
              className="flex-1 bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
              onKeyDown={(e) => {
                if (e.key === 'Enter') addTask();
              }}
            />
            <button
              onClick={addTask}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              Meta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

