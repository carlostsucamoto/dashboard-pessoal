import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { AboutSlide } from './components/AboutSlide';
import { ProjectsSlide } from './components/ProjectsSlide';
import { StudySlide } from './components/StudySlide';
import { IdeasSlide } from './components/IdeasSlide';
import { CarouselLeftArrow, CarouselRightArrow } from './components/CarouselArrows';
import { CarouselDots } from './components/CarouselDots';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalSlides = 4;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="p-4 sm:p-8 md:p-10 flex flex-col items-center justify-between min-h-screen">
      <div className="w-full max-w-5xl xl:max-w-6xl flex flex-col items-center my-auto">
        {/* HEADER & NAVEGAÇÃO */}
        <Header />
        <Navbar currentSlide={currentSlide} onSelectSlide={setCurrentSlide} />

        {/* CARROSSEL PRINCIPAL (FLEXBOX SIDE-BY-SIDE) */}
        <main className="w-full flex items-center justify-between gap-3 sm:gap-6 mt-8">
          <CarouselLeftArrow onPrev={prevSlide} />

          <div className="overflow-hidden rounded-3xl flex-1 shadow-2xl">
            <div
              className="carousel-track flex w-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* SLIDE 0: SOBRE MIM */}
              <div className="w-full flex-shrink-0">
                <AboutSlide />
              </div>

              {/* SLIDE 1: PROJETOS */}
              <div className="w-full flex-shrink-0">
                <ProjectsSlide />
              </div>

              {/* SLIDE 2: PLANO DE ESTUDOS */}
              <div className="w-full flex-shrink-0">
                <StudySlide />
              </div>

              {/* SLIDE 3: CENTRAL DE IDEIAS */}
              <div className="w-full flex-shrink-0">
                <IdeasSlide />
              </div>
            </div>
          </div>

          <CarouselRightArrow onNext={nextSlide} />
        </main>

        {/* INDICADORES (DOTS) */}
        <CarouselDots
          total={totalSlides}
          current={currentSlide}
          onSelect={setCurrentSlide}
        />

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
};

export default App;

