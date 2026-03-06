import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

import FadeInUp from '@/components/animations/FadeInUp';

const packages = [
  {
    id: 1,
    tag: 'Experiencia Exclusiva',
    title: 'Bolhas & Fiori',
    description: 'Evento especial para adultos',
    imageUrl:
      'https://lirp.cdn-website.com/8406003a/dms3rep/multi/opt/Banner+site+%2832%29-1920w.png',
    href: 'https://reservas.artgreenpousada.com.br/',
  },
  {
    id: 2,
    tag: 'Pacote de Pascoa',
    title: 'Pascoa 2026',
    description: '02 a 05 de abril',
    imageUrl:
      'https://lirp.cdn-website.com/8406003a/dms3rep/multi/opt/Banner+site+%2833%29-1920w.png',
    href: 'https://reservas.artgreenpousada.com.br/hotels/HOTEL_OMNI_19674#adults=2&children=0&clientId=19b9aba4-a5a9-4f9b-bb84-a5ff66a6b4ae&clientName=Motor%20Niara&contentType=property&destinationCountry=BR&destinationName=Pousada%20Art%20Green&enablePromoCode=true&endDate=2026-04-05&hotelIds[]=HOTEL_OMNI_19674&personName=&propertyId=793cabb9-2843-4bc6-8afd-d8cbd4df535d&rooms[]=a2&startDate=2026-04-02',
  },
  {
    id: 3,
    tag: 'Feriado',
    title: 'Feriado de Tiradentes',
    description: 'Dias para desacelerar na serra',
    imageUrl:
      'https://lirp.cdn-website.com/8406003a/dms3rep/multi/opt/Banner+site+%2836%29-1920w.png',
    href: 'https://reservas.artgreenpousada.com.br/hotels/HOTEL_OMNI_19674?locate=pt-BR&currencyId=16&destinationName=&mysite=ob&startDate=2026-04-19&endDate=2026-04-21&adults=1&children=0&ag=&childrenAges=&promoCode=',
  },
  {
    id: 4,
    tag: 'Feriado',
    title: 'Dia do Trabalhador',
    description: '01 a 03 de maio',
    imageUrl:
      'https://lirp.cdn-website.com/8406003a/dms3rep/multi/opt/Banner+site+%2835%29-1920w.png',
    href: 'https://reservas.artgreenpousada.com.br/hotels/HOTEL_OMNI_19674?locate=pt-BR&currencyId=16&destinationName=&mysite=ob&startDate=2026-05-01&endDate=2026-05-03&adults=2&children=0&ag=&childrenAges=&promoCode=',
  },
];

function getCardsPerView(width: number): 1 | 2 | 3 {
  if (width >= 1200) return 3;
  if (width >= 768) return 2;
  return 2;
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
                    <motion.a
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                      href={pkg.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block h-[336px] md:h-[384px] lg:h-[432px] overflow-hidden bg-black"
                    >
                      <img
                        src={pkg.imageUrl}
                        alt={pkg.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

                      <div className="absolute left-4 top-4">
                        <span className="inline-flex text-[11px] uppercase tracking-[0.2em] font-medium text-white/90 bg-black/40 px-3 py-1.5 backdrop-blur-sm">
                          {pkg.tag}
                        </span>
                      </div>

                      <div className="absolute left-4 right-4 bottom-4">
                        <h3 className="font-display text-white text-2xl md:text-[2rem] leading-tight mb-1">
                          {pkg.title}
                        </h3>
                        <p className="text-white/85 text-sm mb-3">{pkg.description}</p>

                        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-white bg-black/65 px-4 py-2 group-hover:bg-primary transition-colors duration-300">
                          Cotacao
                          <ArrowUpRight size={14} />
                        </span>
                      </div>
                    </motion.a>
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
