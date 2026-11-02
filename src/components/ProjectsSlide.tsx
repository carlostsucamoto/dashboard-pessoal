import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { projectsData } from '../data/projectsData';
import { ExternalLink, History, Eye, X, Maximize2 } from 'lucide-react';

const LEGACY_HTML_CONTENT = `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Brainlist | Dashboard Pessoal</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
    :root {
      --cor-principal: #4c4cf8;
      --cor-fundo-card: #2a2a3d;
      --texto-padrao: #e2e8f0;
      --fonte-base: "Inter", sans-serif;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: linear-gradient(135deg, #1e1e2f, #2c2c3e);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 24px;
      font-family: var(--fonte-base);
      color: var(--texto-padrao);
    }
    header { text-align: center; margin-bottom: 28px; }
    h1 { font-size: 2.2rem; margin-bottom: 8px; color: #ffffff; }
    .subtitulo { opacity: 0.7; font-weight: normal; font-size: 14px; margin-bottom: 8px; }
    header p { opacity: 0.8; font-size: 14px; }
    nav ul { list-style: none; margin-top: 22px; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
    nav a {
      text-decoration: none; color: white; background-color: var(--cor-fundo-card);
      padding: 12px 20px; border-radius: 10px; min-width: 160px; text-align: center;
      transition: 0.2s; border: 1px solid rgba(255,255,255,0.08); display: block; font-size: 13px; font-weight: 500;
    }
    nav a:hover { background-color: var(--cor-principal); transform: translateY(-2px); }
    main { flex: 1; display: flex; justify-content: center; align-items: flex-start; padding: 20px 0; }
    section {
      background-color: var(--cor-fundo-card); padding: 32px 24px; border-radius: 16px;
      width: 100%; max-width: 520px; text-align: center; border: 1px solid rgba(255,255,255,0.06);
      box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    }
    footer { text-align: center; padding: 20px 0 0 0; opacity: 0.6; font-size: 12px; }
  </style>
</head>
<body>
  <header>
    <h1>Central de ideias</h1>
    <h2 class="subtitulo">Carlos Eduardo Tsucamoto Chiarelli</h2>
    <p>Um dashboard pessoal para organização de estudos, projetos, ideias e rotina.</p>
    <nav>
      <ul>
        <li><a href="/legacy/html/jogos.html" target="_blank">Backlog</a></li>
        <li><a href="/legacy/html/plano_de_estudos.html" target="_blank">Estudos</a></li>
        <li><a href="/legacy/html/projetos.html" target="_blank">Projetos</a></li>
        <li><a href="/legacy/html/sobre.html" target="_blank">Sobre mim</a></li>
        <li><a href="/legacy/html/ideias.html" target="_blank">Ideias</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <p>Escolha uma das seções acima para começar.</p>
    </section>
  </main>
  <footer>
    <small>© 2026 Carlos Eduardo Tsucamoto Chiarelli • Semana 1 ADS FIAP</small>
  </footer>
</body>
</html>`;

export const ProjectsSlide: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ia' | 'fullstack' | 'games' | 'memorando'>('all');
  const [isLegacyModalOpen, setIsLegacyModalOpen] = useState(false);

  const filteredProjects = projectsData.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  const filterButtons = [
    { key: 'all' as const, label: 'Todos (8)' },
    { key: 'ia' as const, label: 'IA & DevTools' },
    { key: 'fullstack' as const, label: 'Full Stack & Java' },
    { key: 'games' as const, label: 'Jogos & Web' },
    { key: 'memorando' as const, label: 'Cápsula / Memorando' }
  ];

  return (
    <div className="card-surface rounded-3xl p-6 sm:p-10 md:p-12 min-h-[540px] flex flex-col justify-between relative">
      {/* HEADER DO SLIDE COM FILTROS */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-zinc-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold text-white tracking-tight">Projetos Desenvolvidos</h3>
            <span className="text-xs px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono">
              8 Aplicações & Memorando
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Ferramentas de IA, sistemas full stack corporativos, back-end em Java, jogos e cápsula histórica
          </p>
        </div>

        {/* FILTROS RÁPIDOS */}
        <div className="flex flex-wrap gap-2 text-xs">
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setFilter(btn.key)}
              className={`proj-filter-btn ${
                filter === btn.key ? 'active-filter' : ''
              } px-3.5 py-1.5 rounded-lg font-medium cursor-pointer transition-all flex items-center gap-1.5`}
            >
              {btn.key === 'memorando' && <History className="w-3.5 h-3.5 text-amber-400" />}
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* GRID DE PROJETOS (3 COLUNAS NO DESKTOP COM SCROLL SUAVE) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-h-[540px] overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
        {filteredProjects.map((proj) => {
          const isLegacy = proj.isLegacy;
          return (
            <div
              key={proj.id}
              onClick={() => {
                if (isLegacy) {
                  setIsLegacyModalOpen(true);
                } else if (proj.link) {
                  window.open(proj.link, '_blank', 'noopener,noreferrer');
                }
              }}
              className={`p-4 rounded-2xl bg-zinc-900/40 border cursor-pointer ${
                isLegacy
                  ? 'border-amber-500/30 hover:border-amber-500/60 shadow-lg shadow-amber-950/20'
                  : 'border-zinc-800/80 hover:border-indigo-500/40'
              } flex flex-col justify-between transition-all group`}
            >
              <div>
                <div className="h-40 w-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 mb-3.5 relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  {proj.extraMeta && (
                    <span
                      className={`absolute top-2.5 right-2.5 text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm font-mono border ${
                        isLegacy
                          ? 'bg-amber-950/80 border-amber-500/40 text-amber-300'
                          : 'bg-zinc-950/80 border-zinc-700/80 text-zinc-300'
                      }`}
                    >
                      {proj.extraMeta}
                    </span>
                  )}
                  {isLegacy ? (
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-[2px]">
                      <Eye className="w-4 h-4 text-amber-400" />
                      Explorar Cápsula Interativa
                    </div>
                  ) : proj.link ? (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-medium text-xs backdrop-blur-[2px]">
                      <ExternalLink className="w-4 h-4 text-indigo-400" />
                      Acessar Projeto
                    </div>
                  ) : null}
                </div>

                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-[10px] px-2 py-0.5 rounded border font-medium ${proj.badgeCategoryColor}`}>
                    {proj.badgeCategory}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono truncate max-w-[150px]">
                    {proj.stack}
                  </span>
                </div>

                <h4
                  className={`font-bold text-base text-white transition-colors ${
                    isLegacy ? 'group-hover:text-amber-300' : 'group-hover:text-indigo-400'
                  }`}
                >
                  {proj.title}
                </h4>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed line-clamp-2">
                  {proj.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                {isLegacy ? (
                  <span className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5 font-medium">
                    <Eye className="w-3.5 h-3.5" />
                    Ver Memorial
                  </span>
                ) : (
                  <span className="text-zinc-500 text-[11px] font-mono">
                    {proj.extraMeta || 'Aplicação'}
                  </span>
                )}

                {proj.link ? (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`${
                      isLegacy
                        ? 'text-zinc-400 hover:text-white'
                        : 'text-indigo-400 hover:text-white'
                    } inline-flex items-center gap-1 text-xs font-medium`}
                  >
                    {proj.linkLabel || 'Acessar'}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-zinc-400 text-xs">Código Local</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL INTERATIVO VIA PORTAL (RENDERIZADO DIRETO NO BODY PARA EVITAR QUEBRAS DE TRANSFORM) */}
      {isLegacyModalOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
            onClick={() => setIsLegacyModalOpen(false)}
          >
            <div
              className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CABEÇALHO DO MODAL */}
              <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/60">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <History className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-white">Brainlist v1.0 — Cápsula do Tempo</h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono">
                        Semana 1 FIAP • Abril 2026
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400">
                      O dashboard original preservado exatamente como foi concebido no início da jornada
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="/legacy/index.html"
                    target="_blank"
                    rel="noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 border border-zinc-700 transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    Nova Aba
                  </a>
                  <button
                    onClick={() => setIsLegacyModalOpen(false)}
                    className="w-8 h-8 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* NARRATIVA DE REGISTRO HISTÓRICO */}
              <div className="px-6 py-3.5 bg-zinc-900/40 border-b border-zinc-800/80 text-xs text-zinc-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <History className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>
                    <strong className="text-white">Registro Histórico:</strong> Projeto inicial construído na primeira semana de graduação em ADS na FIAP em HTML/CSS puro, preservado como memorando do início dos estudos.
                  </span>
                </div>
                <span className="text-[11px] text-zinc-500 font-mono whitespace-nowrap">
                  Preservado em /legacy
                </span>
              </div>

              {/* BROWSER CHROME MOCKUP + IFRAME INTERATIVO */}
              <div className="p-4 sm:p-6 flex-1 overflow-hidden flex flex-col bg-zinc-950">
                <div className="rounded-2xl border border-zinc-800 overflow-hidden flex flex-col flex-1 bg-zinc-900 shadow-inner">
                  {/* BROWSER TOP BAR */}
                  <div className="px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    </div>
                    <div className="flex-1 max-w-md mx-auto text-center">
                      <div className="px-3 py-1 rounded-md bg-zinc-950/80 border border-zinc-800 text-[11px] font-mono text-zinc-400 truncate">
                        brainlist://legacy/index-original.html
                      </div>
                    </div>
                    <div className="w-10"></div>
                  </div>

                  {/* IFRAME LIVE VIEW COM SRCDOC EMBUTIDO */}
                  <div className="flex-1 min-h-[380px] sm:min-h-[460px] bg-zinc-950">
                    <iframe
                      srcDoc={LEGACY_HTML_CONTENT}
                      src="/legacy/index.html"
                      title="Brainlist v1.0 Original"
                      className="w-full h-full border-0 min-h-[380px] sm:min-h-[460px]"
                    />
                  </div>
                </div>
              </div>

              {/* RODAPÉ DO MODAL */}
              <div className="px-6 py-3.5 border-t border-zinc-800 bg-zinc-900/60 flex items-center justify-between text-xs">
                <span className="text-zinc-500">
                  Página 100% funcional: você pode navegar pelos botões do menu antigo acima.
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="/legacy/index.html"
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-400 hover:text-white inline-flex items-center gap-1 font-medium"
                  >
                    Abrir Dashboard Original em tela cheia
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setIsLegacyModalOpen(false)}
                    className="px-4 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};
