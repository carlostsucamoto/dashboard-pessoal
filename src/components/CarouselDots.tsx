import React from 'react';

interface CarouselDotsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

export const CarouselDots: React.FC<CarouselDotsProps> = ({ total, current, onSelect }) => {
  const titles = ['Sobre mim', 'Projetos', 'Plano de Estudos', 'Ideias & Insights'];

  return (
    <div className="flex justify-center items-center gap-3 mt-8">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`cursor-pointer transition-all ${
            current === i
              ? 'w-8 h-2 rounded-full bg-indigo-500'
              : 'w-2 h-2 rounded-full bg-zinc-700 hover:bg-zinc-500'
          }`}
          title={titles[i] || `Slide ${i + 1}`}
        />
      ))}
    </div>
  );
};

