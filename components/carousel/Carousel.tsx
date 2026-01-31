'use client'
import { useEffect, useState, ReactNode } from "react";
import Image from "next/image";

export interface CarouselItem {
  src: string;
  title?: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  objectPosition?: string;
  component?: ReactNode;
  overlayClassName?: string;
}

const defaultItems: CarouselItem[] = [
  { 
    src: "https://res.cloudinary.com/drotzbucj/image/upload/v1768849187/Pag_indexFinal_02_vvv0uq.jpg",
    component: (
      <div className="max-w-2xl">
        <h2 className="text-3xl sm:text-5xl md:text-7xl leading-none tracking-tight font-light italic">
          <span className="block text-[#FF5E14] mb-2">EXPERTO</span>
          <span className="block text-[#313238] mb-2">EN CONSTRUCCIÓN</span>
          <span className="block text-[#FF5E14] mb-2">MANTENIMIENTO</span>
          <span className="block text-[#313238]">Y REMODELACIÓN</span>
        </h2>
      </div>
    ),
    alignment: "right",
    objectPosition: "0% 20%",
    //overlayClassName: "bg-gradient-to-l from-white/50 via-white/40 to-transparent"
    //overlayClassNamel "bg-gradient-to-r from-[#FF5E14]/20 to-transparent" // Ejemplo de uso
  },
  { src: "https://res.cloudinary.com/drotzbucj/image/upload/v1768849187/Pag_indexFinal_06_whdcli.jpg",
    component: (
      <div className="max-w-2xl">
        <h2 className="text-3xl sm:text-5xl md:text-7xl leading-none tracking-tight font-light italic">
          <span className="block text-[#FF5E14] mb-2">EFICIENCIA</span>
          <span className="block text-[#313238] mb-2">PRODUCTIVIDAD</span>
          <span className="block text-[#FF5E14] mb-2">SERVICIO</span>
        </h2>
      </div>
    ),
    alignment: "left", 
    objectPosition: "50% 20%",
    //overlayClassName: "bg-gradient-to-r from-white/50 via-white/40 to-transparent" 
  },
   { 
    src: "https://res.cloudinary.com/drotzbucj/image/upload/v1768849193/Pag_indexFinal_04_lsdiw7.jpg",
       component: (
      <div className="max-w-2xl">
        <h2 className="text-3xl sm:text-5xl md:text-7xl leading-none tracking-tight font-light italic">
          <span className="block text-[#FF5E14] mb-2">SOLUCIÓN</span>
          <span className="block text-[#313238] mb-2">A TUS</span>
          <span className="block text-[#FF5E14] mb-2">NECESIDADES</span>
        </h2>
      </div>
    ),
    alignment: "right",
    objectPosition: "50% 20%"
  },
    { src: "https://res.cloudinary.com/drotzbucj/image/upload/v1768849194/Pag_indexFinal_05_xo3yxp.jpg", 
      objectPosition: "50% 20%",
     component: (
      <div className="max-w-2xl">
        <h2 className="text-3xl sm:text-5xl md:text-7xl leading-none tracking-tight font-light italic">
          <span className="block text-[#FF5E14] mb-2">EXPERTO</span>
          <span className="block text-[#313238] mb-2">EN CONSTRUCCIÓN</span>
          <span className="block text-[#FF5E14] mb-2">MANTENIMIENTO</span>
          <span className="block text-[#313238]">Y REMODELACIÓN</span>
        </h2>
      </div>
    ),  alignment: "left", },
  { 
    src: "https://res.cloudinary.com/drotzbucj/image/upload/v1768849189/Pag_indexFinal_03_rhgmct.jpg",
      component: (
      <div className="max-w-2xl">
        <h2 className="text-3xl sm:text-5xl md:text-7xl leading-none tracking-tight font-light italic">
          <span className="block text-[#FF5E14] mb-2">EFICIENCIA</span>
          <span className="block text-[#313238] mb-2">PRODUCTIVIDAD</span>
          <span className="block text-[#FF5E14] mb-2">SERVICIO</span>
        </h2>
      </div>
    ),
    alignment: "right",
    objectPosition: "50% 20%"
  },
  { src: "https://res.cloudinary.com/drotzbucj/image/upload/v1768848875/Pag_indexFinal_07_lymamy.jpg", 
    objectPosition: "50% 20%",   component: (
      <div className="max-w-2xl">
        <h2 className="text-3xl sm:text-5xl md:text-7xl leading-none tracking-tight font-light italic">
          <span className="block text-[#FF5E14] mb-2">SOLUCIÓN</span>
          <span className="block text-[#313238] mb-2">A TUS</span>
          <span className="block text-[#FF5E14] mb-2">NECESIDADES</span>
        </h2>
      </div>
    ),   alignment: "left", },
  { src: "https://res.cloudinary.com/drotzbucj/image/upload/v1768848849/Pag_indexFinal_08_z7q6xt.jpg", 
    objectPosition: "50% 20%",
   component: (
      <div className="max-w-2xl">
        <h2 className="text-3xl sm:text-5xl md:text-7xl leading-none tracking-tight font-light italic">
          <span className="block text-[#FF5E14] mb-2">EXPERTO</span>
          <span className="block text-[#313238] mb-2">EN CONSTRUCCIÓN</span>
          <span className="block text-[#FF5E14] mb-2">MANTENIMIENTO</span>
          <span className="block text-[#313238]">Y REMODELACIÓN</span>
        </h2>
      </div>
    ),  alignment: "left",  },
  { src: "https://res.cloudinary.com/drotzbucj/image/upload/v1768849191/Pag_indexFinal_09_kucw3r.jpg", 
    objectPosition: "50% 20%", component: (
      <div className="max-w-2xl">
        <h2 className="text-3xl sm:text-5xl md:text-7xl leading-none tracking-tight font-light italic">
          <span className="block text-[#FF5E14] mb-2">EFICIENCIA</span>
          <span className="block text-[#313238] mb-2">PRODUCTIVIDAD</span>
          <span className="block text-[#FF5E14] mb-2">SERVICIO</span>
        </h2>
      </div>
    ),
    alignment: "left",  },
];

interface CarouselProps {
  items?: CarouselItem[];
  autoPlay?: boolean;
  intervalMs?: number;
  heightClass?: string;
}

const Carousel = ({ items = defaultItems, autoPlay = true, intervalMs = 4000, heightClass = "h-56 md:h-96" }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = items.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);
  const goTo = (idx: number) => setCurrent(idx);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prev();
      } else if (e.key === 'ArrowRight') {
        next();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [total]); // Solo depende de total para no recrear el listener constantemente, prev/next usan el estado funcional

  useEffect(() => {
    if (!autoPlay || paused || total <= 1) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, intervalMs);
    return () => clearInterval(id);
  }, [autoPlay, paused, total, intervalMs]);

  const getAlignmentClasses = (alignment?: 'left' | 'center' | 'right') => {
    switch (alignment) {
      case 'left':
        return 'items-start text-left pl-16 md:pl-20';
      case 'right':
        return 'items-end text-right pr-16 md:pr-20';
      case 'center':
      default:
        return 'items-center text-center px-16';
    }
  };

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-live="polite"
    >
      <div className={`relative overflow-hidden ${heightClass}`}>
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((item, idx) => (
            <div key={idx} className="relative w-full h-full flex-shrink-0">
              <img
                src={item.src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              {item.overlayClassName && (
                <div className={`absolute inset-0 pointer-events-none ${item.overlayClassName}`} />
              )}
              {(item.component || item.title || item.description) && (
                <div className={`absolute inset-0 flex flex-col justify-center ${getAlignmentClasses(item.alignment)}`}>
                  {item.component ? (
                    item.component
                  ) : (
                    <div className="max-w-3xl">
                      {item.title && <h2 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">{item.title}</h2>}
                      {item.description && <p className="text-white text-lg sm:text-xl md:text-2xl drop-shadow-md">{item.description}</p>}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {items.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Slide ${idx + 1}`}
            aria-current={current === idx}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-md transition-colors ${current === idx ? "bg-[#FF5E14]" : "bg-[#FF5E14]/40 hover:bg-[#FF5E14]/70"}`}
          />
        ))}
      </div>

      <button
        type="button"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#FF5E14]/70 hover:bg-[#FF5E14] focus:outline-none transition-colors"
        onClick={prev}
        aria-label="Previous"
      >
        <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#FF5E14]/70 hover:bg-[#FF5E14] focus:outline-none transition-colors"
        onClick={next}
        aria-label="Next"
      >
        <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default Carousel
