import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import FadeInUp from '@/components/animations/FadeInUp';
import { rooms } from '@/data/rooms';

type CarouselRoom = {
  id: number;
  slug: string;
  name: string;
  description: string;
  amenities: string;
  imageUrl: string;
  price: number;
};

function getCardsPerView(width: number): 1 | 2 | 3 {
  if (width >= 1200) return 3;
  if (width >= 768) return 2;
  return 1;
}

export default function RoomsSection() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [cardsPerView, setCardsPerView] = useState<1 | 2 | 3>(() =>
    typeof window === 'undefined' ? 1 : getCardsPerView(window.innerWidth),
  );

  useEffect(() => {
    const onResize = () => setCardsPerView(getCardsPerView(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const carouselRooms = useMemo<CarouselRoom[]>(() => {
    return rooms
      .filter((r) => !r.hidden)
      .map((room) => ({
      id: room.id,
      slug: room.slug,
      name: room.name,
      description: room.description,
      amenities: room.amenities,
      imageUrl: room.images[0],
      price: room.price,
    }));
  }, []);

  const loopedRooms = useMemo<CarouselRoom[]>(() => {
    if (!carouselRooms.length) return [];

    const head = carouselRooms.slice(0, cardsPerView);
    const tail = carouselRooms.slice(-cardsPerView);

    return [...tail, ...carouselRooms, ...head];
  }, [carouselRooms, cardsPerView]);

  useEffect(() => {
    setIsTransitionEnabled(false);
    setCurrentSlide(cardsPerView);

    const frame = requestAnimationFrame(() => {
      setIsTransitionEnabled(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [cardsPerView]);

  useEffect(() => {
    if (!carouselRooms.length) return;

    const maxRealIndex = cardsPerView + carouselRooms.length - 1;
    const minRealIndex = cardsPerView;
    const isAfterTailClone = currentSlide > maxRealIndex;
    const isBeforeHeadClone = currentSlide < minRealIndex;

    if (!isAfterTailClone && !isBeforeHeadClone) return;

    const timer = window.setTimeout(() => {
      setIsTransitionEnabled(false);
      setCurrentSlide((prev) => {
        if (prev > maxRealIndex) return prev - carouselRooms.length;
        if (prev < minRealIndex) return prev + carouselRooms.length;
        return prev;
      });

      requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
      });
    }, 500);

    return () => window.clearTimeout(timer);
  }, [currentSlide, cardsPerView, carouselRooms.length]);

  const logicalSlide =
    carouselRooms.length === 0
      ? 0
      : ((currentSlide - cardsPerView) % carouselRooms.length + carouselRooms.length) %
        carouselRooms.length;

  const cardWidth = `${100 / cardsPerView}%`;

  return (
    <section id="acomodacoes" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <FadeInUp className="text-center mb-10 md:mb-12">
          <p className="section-eyebrow">Nossas Acomodações</p>
          <h2 className="section-title">Suítes</h2>
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
            aria-label="Próximo slide"
            className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/95 shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          <div className="overflow-hidden">
            <div
              className={`flex rooms-track ${isTransitionEnabled ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${(currentSlide * 100) / cardsPerView}%)` }}
            >
              {loopedRooms.map((room, roomIndex) => (
                <div
                  key={`${room.id}-${roomIndex}`}
                  className="flex-shrink-0 px-3"
                  style={{ width: cardWidth }}
                >
                  <Link to={`/acomodacoes/${room.slug}`}>
                    <motion.article
                      whileHover={{ scale: 1.02, boxShadow: '0 20px 45px rgba(0,0,0,0.2)' }}
                      transition={{ duration: 0.35 }}
                      className="group relative h-[440px] md:h-[480px] overflow-hidden bg-black"
                    >
                      <img
                        src={room.imageUrl}
                        alt={room.name}
                        loading="lazy"
                        width={600}
                        height={480}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-x-0 bottom-0 h-[20%] bg-[rgba(82,97,78,0.95)] backdrop-blur-sm px-6 py-3 transition-all duration-500 group-hover:h-[90%]">
                        <h3 className="font-display text-white text-[24px] leading-tight mb-3">
                          {room.name}
                        </h3>
                        <p className="text-accent font-body text-sm font-semibold mb-2">
                          a partir de R$ {room.price.toLocaleString('pt-BR')}<span className="text-white/60 font-normal"> /noite</span>
                        </p>
                        <p className="text-white/85 text-sm leading-relaxed opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-24 transition-all duration-300 delay-100 mb-0 group-hover:mb-4">
                          {room.description}
                        </p>
                        <p className="text-white/80 text-xs uppercase tracking-[0.12em] opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-16 transition-all duration-300 delay-150">
                          {room.amenities}
                        </p>
                      </div>
                    </motion.article>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-0 mt-8">
          {carouselRooms.map((room, index) => (
            <button
              key={room.id}
              onClick={() => setCurrentSlide(cardsPerView + index)}
              aria-label={`Ir para slide ${index + 1}`}
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
