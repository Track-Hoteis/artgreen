import { useCallback, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import FadeInUp from '@/components/animations/FadeInUp';
import { experiences } from '@/data/experiences';

const serviceItems = [
  {
    title: 'Atendimento de Qualidade',
    description: 'Equipe dedicada para personalizar sua estadia.',
  },
  {
    title: 'Estrutura Completa',
    description: 'Lazer, conforto e vivências para todas as idades.',
  },
  {
    title: 'Natureza Viva',
    description: 'Paisagens verdes e atividades ao ar livre todos os dias.',
  },
  {
    title: 'Momentos em Família',
    description: 'Programação acolhedora para adultos e crianças.',
  },
];

function getCardsPerView(width: number): 1 | 2 | 3 | 4 {
  if (width >= 1200) return 4;
  if (width >= 900) return 3;
  if (width >= 600) return 2;
  return 1;
}

export default function ExperiencesSection() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [cardsPerView, setCardsPerView] = useState<1 | 2 | 3 | 4>(() =>
    typeof window === 'undefined' ? 1 : getCardsPerView(window.innerWidth),
  );

  useEffect(() => {
    const onResize = () => setCardsPerView(getCardsPerView(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const items = experiences;

  const loopedItems = useMemo(() => {
    if (!items.length) return [];
    const head = items.slice(0, cardsPerView);
    const tail = items.slice(-cardsPerView);
    return [...tail, ...items, ...head];
  }, [items, cardsPerView]);

  useEffect(() => {
    setIsTransitionEnabled(false);
    setCurrentSlide(cardsPerView);
    const frame = requestAnimationFrame(() => {
      setIsTransitionEnabled(true);
    });
    return () => cancelAnimationFrame(frame);
  }, [cardsPerView]);

  useEffect(() => {
    if (!items.length) return;
    const maxRealIndex = cardsPerView + items.length - 1;
    const minRealIndex = cardsPerView;
    const isAfterTailClone = currentSlide > maxRealIndex;
    const isBeforeHeadClone = currentSlide < minRealIndex;

    if (!isAfterTailClone && !isBeforeHeadClone) return;

    const timer = window.setTimeout(() => {
      setIsTransitionEnabled(false);
      setCurrentSlide((prev) => {
        if (prev > maxRealIndex) return prev - items.length;
        if (prev < minRealIndex) return prev + items.length;
        return prev;
      });
      requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
      });
    }, 500);

    return () => window.clearTimeout(timer);
  }, [currentSlide, cardsPerView, items.length]);

  const next = useCallback(() => setCurrentSlide((prev) => prev + 1), []);
  const prev = useCallback(() => setCurrentSlide((prev) => prev - 1), []);

  // Autoplay 5000ms
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const logicalSlide =
    items.length === 0
      ? 0
      : ((currentSlide - cardsPerView) % items.length + items.length) % items.length;

  const cardWidth = `${100 / cardsPerView}%`;

  return (
    <section id="experiencias" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-14 md:mb-16">
          <FadeInUp className="lg:col-span-4">
            <p className="section-eyebrow">Serviços</p>
            <h2 className="section-title leading-tight">
              Enriquecendo sua estadia com experiências exclusivas
            </h2>
            <a
              href="https://reservas.artgreenpousada.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-reserve"
            >
              Reservar Agora
            </a>
          </FadeInUp>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceItems.map((item, index) => (
              <FadeInUp key={item.title} delay={index * 0.06}>
                <article className="service-card">
                  <h3 className="font-display text-[29px] md:text-[29px] text-text-primary mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-medium leading-relaxed font-body">
                    {item.description}
                  </p>
                </article>
              </FadeInUp>
            ))}
          </div>
        </div>

        <div className="relative">
          <button
            onClick={prev}
            aria-label="Slide anterior"
            className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/95 shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            aria-label="Próximo slide"
            className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/95 shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          <div className="overflow-hidden">
            <div
              className={`flex ${isTransitionEnabled ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${(currentSlide * 100) / cardsPerView}%)` }}
            >
              {loopedItems.map((card, idx) => (
                <div
                  key={`${card.id}-${idx}`}
                  className="flex-shrink-0 px-3"
                  style={{ width: cardWidth }}
                >
                  <motion.article
                    whileHover={{ scale: 1.02, boxShadow: '0 14px 35px rgba(0,0,0,0.15)' }}
                    transition={{ duration: 0.3 }}
                    className="service-media-card group"
                  >
                    <div
                      className="h-[270px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${card.image})` }}
                      role="img"
                      aria-label={card.title}
                    />
                    <div className="service-media-card__content px-6 py-6">
                      <p className="service-media-card__category text-xs uppercase tracking-[0.2em] font-medium mb-2">
                        {card.category}
                      </p>
                      <h3 className="service-media-card__title font-display text-2xl mb-2">
                        {card.title}
                      </h3>
                      <p className="service-media-card__description text-sm leading-relaxed mb-6 font-body">
                        {card.description}
                      </p>
                      <a
                        href="https://reservas.artgreenpousada.com.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="service-media-card__button mt-auto"
                        aria-label={`Reservar ${card.title}`}
                      >
                        Reservar
                      </a>
                    </div>
                  </motion.article>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-0 mt-8 flex-wrap">
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentSlide(cardsPerView + index)}
              aria-label={`Ir para ${item.title}`}
              className="relative flex items-center justify-center min-w-[44px] min-h-[44px]"
            >
              <span className={`block h-2.5 rounded-full transition-all duration-300 ${
                index === logicalSlide
                  ? 'w-6 bg-primary'
                  : 'w-2.5 bg-primary/30 hover:bg-primary/50'
              }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
