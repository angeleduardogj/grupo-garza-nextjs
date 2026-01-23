
import React, { useState, useRef, useEffect } from 'react';

interface ProjectCardProps {
  proyecto: {
    titulo: string;
    descripcion: string;
    imagenes: string[];
  };
  openLightbox: (images: string[], index: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ proyecto, openLightbox }) => {
  const thumbnails = proyecto.imagenes.slice(1);
  const showControls = thumbnails.length > 5;
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    if (!showControls) return;

    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollPrev(scrollLeft > 0);
        // Allow a small buffer (1px) for float calculation errors
        setCanScrollNext(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
      }
    };

    // Check initially
    checkScroll();

    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }

    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [showControls, thumbnails]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // item width 71.59 + gap 12 (0.75rem) = 83.59
      const scrollAmount = 83.59; 
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 lg:p-8 transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left: Image Collection */}
        <div className="grid gap-4 lg:col-span-2 h-fit">
          {/* Main Image */}
          {proyecto.imagenes.length > 0 && (
            <div
              className="cursor-pointer overflow-hidden rounded-lg shadow-sm group h-64 md:h-72 w-full"
              onClick={() => openLightbox(proyecto.imagenes, 0)}
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={proyecto.imagenes[0]}
                alt={`${proyecto.titulo} main`}
              />
            </div>
          )}

          {/* Thumbnails Carousel */}
          {thumbnails.length > 0 && (
            <div className="grid grid-cols-5 gap-3">
              {showControls ? (
                <>
                  {/* Left Arrow Slot */}
                  <div className="flex items-center justify-center h-[71.59px]">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        scroll('left');
                      }}
                      disabled={!canScrollPrev}
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-md transition-colors focus:outline-none shrink-0 ${
                        canScrollPrev
                          ? 'bg-[#FF5E14]/70 hover:bg-[#FF5E14] text-white cursor-pointer'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                      }`}
                      aria-label="Previous thumbnails"
                    >
                      <svg className="w-5 h-5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Scrollable Thumbnails Area */}
                  <div className="col-span-3 overflow-hidden">
                    <div 
                      ref={scrollRef}
                      className="flex gap-3 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] h-full items-center"
                    >
                      {thumbnails.map((img, i) => {
                        const realIndex = i + 1;
                        return (
                          <div
                            key={realIndex}
                            className="cursor-pointer overflow-hidden rounded-md shadow-sm group relative shrink-0"
                            style={{ width: '71.59px', height: '71.59px' }}
                            onClick={() => openLightbox(proyecto.imagenes, realIndex)}
                          >
                            <img
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              src={img}
                              alt={`${proyecto.titulo} thumbnail ${realIndex}`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Arrow Slot */}
                  <div className="flex items-center justify-center h-[71.59px]">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        scroll('right');
                      }}
                      disabled={!canScrollNext}
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-md transition-colors focus:outline-none shrink-0 ${
                        canScrollNext
                          ? 'bg-[#FF5E14]/70 hover:bg-[#FF5E14] text-white cursor-pointer'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                      }`}
                      aria-label="Next thumbnails"
                    >
                      <svg className="w-5 h-5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </>
              ) : (
                // Static Grid for <= 5 items
                thumbnails.map((img, i) => {
                  const realIndex = i + 1;
                  return (
                    <div
                      key={realIndex}
                      className="cursor-pointer overflow-hidden rounded-md shadow-sm group relative mx-auto"
                      style={{ width: '71.59px', height: '71.59px' }}
                      onClick={() => openLightbox(proyecto.imagenes, realIndex)}
                    >
                      <img
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        src={img}
                        alt={`${proyecto.titulo} thumbnail ${realIndex}`}
                      />
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>

        {/* Right: Description */}
        <div className="flex flex-col justify-start lg:col-span-3">
          <h3 className="text-xl font-semibold text-[#313238] mb-2 uppercase tracking-tight leading-7">
            {proyecto.titulo}
          </h3>
          <div className="w-24 h-1.5 bg-orange-600 mb-4 rounded-full"></div>
          <p className="text-gray-600 text-sm leading-relaxed text-justify">
            {proyecto.descripcion}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
