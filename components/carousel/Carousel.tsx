'use client'
import { useEffect, useState } from "react";

interface CarouselProps {
  images?: string[];
  autoPlay?: boolean;
  intervalMs?: number;
}

const defaultImages = [
  "https://flowbite.com/docs/images/carousel/carousel-1.svg",
  "https://flowbite.com/docs/images/carousel/carousel-2.svg",
  "https://flowbite.com/docs/images/carousel/carousel-3.svg",
  "https://flowbite.com/docs/images/carousel/carousel-4.svg",
  "https://flowbite.com/docs/images/carousel/carousel-5.svg",
];

const Carousel = ({ images = defaultImages, autoPlay = true, intervalMs = 4000 }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = images.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);
  const goTo = (idx: number) => setCurrent(idx);

  useEffect(() => {
    if (!autoPlay || paused || total <= 1) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, intervalMs);
    return () => clearInterval(id);
  }, [autoPlay, paused, total, intervalMs]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-live="polite"
    >
      <div className="relative h-56 overflow-hidden rounded-md md:h-96">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, idx) => (
            <div key={src} className="relative w-full h-full flex-shrink-0">
              <img
                src={src}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`Slide ${idx + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Slide ${idx + 1}`}
            aria-current={current === idx}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-md ${current === idx ? "bg-white/90 ring-1 ring-white/70" : "bg-white/50 hover:bg-white/70"}`}
          />
        ))}
      </div>

      <button
        type="button"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/60 focus:outline-none transition-colors"
        onClick={prev}
        aria-label="Previous"
      >
        <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/60 focus:outline-none transition-colors"
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
