import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselArrowProps {
  onPrev: () => void;
  onNext: () => void;
}

export const CarouselLeftArrow: React.FC<{ onPrev: () => void }> = ({ onPrev }) => {
  return (
    <button
      onClick={onPrev}
      className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full card-surface hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all shadow-xl hover:scale-105 active:scale-95 border border-zinc-700/80 cursor-pointer"
      title="Anterior (←)"
    >
      <ChevronLeft className="w-5 h-5" />
    </button>
  );
};

export const CarouselRightArrow: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <button
      onClick={onNext}
      className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full card-surface hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all shadow-xl hover:scale-105 active:scale-95 border border-zinc-700/80 cursor-pointer"
      title="Próximo (→)"
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  );
};

