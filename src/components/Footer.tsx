import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-10 text-center text-xs text-zinc-500">
      <small>
        © 2026 Carlos Eduardo Tsucamoto Chiarelli • Pressione{' '}
        <kbd className="px-2 py-0.5 rounded bg-zinc-800 font-mono text-[10px] text-zinc-400 border border-zinc-700">
          ←
        </kbd>{' '}
        e{' '}
        <kbd className="px-2 py-0.5 rounded bg-zinc-800 font-mono text-[10px] text-zinc-400 border border-zinc-700">
          →
        </kbd>{' '}
        para navegar
      </small>
    </footer>
  );
};

