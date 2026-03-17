import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

import FadeInUp from '@/components/animations/FadeInUp';
import { packages } from '@/data/packages';

function getCardsPerView(width: number): 1 | 2 | 3 {
  if (width >= 1200) return 3;
  if (width >= 768) return 2;
  return 1;
}

export default function PackagesSection() {
  const [cardsPerView, setCardsPerView] = useState<1 | 2 | 3>(() =>
    typeof window === 'undefined' ? 1 : getCardsPerView(window.innerWidth),
  );
  const [currentSlide, setCurrentSlide] = useState<number>(cardsPerView);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const onResize = () => setCardsPerView(getCardsPerView(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const loopedPackages = useMemo(() => {
    if (!packages.length) return [];

    const head = packages.slice(0, cardsPerView);
    const tail = packages.slice(-cardsPerView);

    return [...tail, ...packages, ...head];
  }, [cardsPerView]);

  useEffect(() => {
    setIsTransitionEnabled(false);
    setCurrentSlide(cardsPerView);

    const frame = requestAnimationFrame(() => {
      setIsTransitionEnabled(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [cardsPerView]);

  useEffect(() => {
    const maxRealIndex = cardsPerView + packages.length - 1;
    const minRealIndex = cardsPerView;
    const isAfterTailClone = currentSlide > maxRealIndex;
    const isBeforeHeadClone = currentSlide < minRealIndex;

    if (!isAfterTailClone && !isBeforeHeadClone) return;

    const timer = window.setTimeout(() => {
      setIsTransitionEnabled(false);
      setCurrentSlide((prev) => {
        if (prev > maxRealIndex) return prev - packages.length;
        if (prev < minRealIndex) return prev + packages.length;
        return prev;
      });

      requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
      });
    }, 500);

    return () => window.clearTimeout(timer);
  }, [cardsPerView, currentSlide]);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const logicalSlide =
    ((currentSlide - cardsPerView) % packages.length + packages.length) % packages.length;
  const cardWidth = `${100 / cardsPerView}%`;

  return (
    <section id="pacotes" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <FadeInUp className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-eyebrow">Pacotes e Informativos</p>
          <h2 className="section-title">Ofertas Especiais</h2>
          <p className="section-subtitle mx-auto">
            Confira nossos pacotes exclusivos para viver experiencias
            inesqueciveis na serra.
          </p>
        </FadeInUp>

        <div className="relative">
          <button
            onClick={() => setCurrentSlide((prev) => prev - 1)}
            aria-label="Slide anterior"
            className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/95 shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => setCurrentSlide((prev) => prev + 1)}
            aria-label="Proximo slide"
            className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/95 shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          <div className="overflow-hidden">
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={(event) => {
                setIsPaused(true);
                touchStartX.current = event.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(event) => {
                const endX = event.changedTouches[0]?.clientX;
                const startX = touchStartX.current;

                if (typeof startX === 'number' && typeof endX === 'number') {
                  const delta = endX - startX;

                  if (Math.abs(delta) > 35) {
                    setCurrentSlide((prev) => (delta < 0 ? prev + 1 : prev - 1));
                  }
                }

                touchStartX.current = null;
                setIsPaused(false);
              }}
              className={`packages-track flex ${isTransitionEnabled ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${(currentSlide * 100) / cardsPerView}%)` }}
            >
              {loopedPackages.map((pkg, index) => (
                <div
                  key={`${pkg.id}-${index}`}
                  className="flex-shrink-0 px-3"
                  style={{ width: cardWidth }}
                >
                  <FadeInUp delay={(index % packages.length) * 0.04}>
                    <Link to={`/pacotes/${pkg.slug}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="group relative overflow-hidden bg-black w-full h-[410px] sm:h-[346px] md:h-[410px]"
                      >
                        <img
                          src={pkg.imageUrl}
                          alt={pkg.title}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                          <span className="text-xs uppercase tracking-widest font-medium text-white bg-primary px-3 py-1 rounded-full w-fit mb-3">
                            {pkg.tag}
                          </span>
                          <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
                          <p className="text-sm text-white/90 mb-3">{pkg.description}</p>
                          <span className="text-xs text-white/80">{pkg.dates}</span>
                        </div>

                        <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-white bg-black/75 px-4 py-2.5 hover:bg-primary transition-colors duration-300 backdrop-blur-sm">
                            Ver Detalhes
                            <ArrowUpRight size={14} />
                          </span>
                        </div>
                      </motion.div>
                    </Link>
                  </FadeInUp>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {packages.map((pkg, index) => (
            <button
              key={pkg.id}
              onClick={() => setCurrentSlide(cardsPerView + index)}
              aria-label={`Ir para slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === logicalSlide
                  ? 'w-6 bg-primary'
                  : 'w-2.5 bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
