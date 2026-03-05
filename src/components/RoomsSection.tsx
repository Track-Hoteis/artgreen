import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { rooms } from '../data/rooms';

type RoomMedia = {
  imageUrl: string;
  price: number;
};

type CarouselRoom = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

const roomMediaById: Record<number, RoomMedia> = {
  1: {
    price: 489,
    imageUrl:
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-06.jpg',
  },
  2: {
    price: 569,
    imageUrl:
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-05.jpg',
  },
  3: {
    price: 649,
    imageUrl:
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/4F3A0831.JPG',
  },
  4: {
    price: 729,
    imageUrl:
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/IMG_6358.jpg',
  },
  5: {
    price: 839,
    imageUrl:
      'https://lirp.cdn-website.com/8406003a/dms3rep/multi/opt/4F3A8835-1920w.JPG',
  },
};

function getCardsPerView(width: number): 1 | 2 | 3 {
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  return 1;
}

const brlFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
});

export default function RoomsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState<1 | 2 | 3>(() =>
    typeof window === 'undefined' ? 1 : getCardsPerView(window.innerWidth)
  );

  useEffect(() => {
    const onResize = () => setCardsPerView(getCardsPerView(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const carouselRooms = useMemo<CarouselRoom[]>(() => {
    const fallback = roomMediaById[1];

    return rooms.map((room) => {
      const media = roomMediaById[room.id] ?? fallback;

      return {
        id: room.id,
        name: room.name,
        imageUrl: media.imageUrl,
        price: media.price,
      };
    });
  }, []);

  const slides = useMemo<CarouselRoom[][]>(() => {
    const result: CarouselRoom[][] = [];

    for (let index = 0; index < carouselRooms.length; index += cardsPerView) {
      result.push(carouselRooms.slice(index, index + cardsPerView));
    }

    return result;
  }, [carouselRooms, cardsPerView]);

  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, Math.max(slides.length - 1, 0)));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.max(slides.length - 1, 0) : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="acomodacoes" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <p className="section-eyebrow">Nossas Acomodações</p>
          <h2 className="section-title">Quartos e Suítes</h2>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            aria-label="Slide anterior"
            className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/95 shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Próximo slide"
            className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/95 shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {slide.map((room) => (
                    <article
                      key={room.id}
                      className="relative h-[440px] md:h-[480px] lg:h-[520px] overflow-hidden"
                    >
                      <img
                        src={room.imageUrl}
                        alt={room.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute left-0 right-0 bottom-0 bg-primary px-6 py-5">
                        <span className="inline-flex border border-white/70 text-white text-sm font-semibold px-3 py-1.5 mb-3">
                          {brlFormatter.format(room.price)} / Noite
                        </span>
                        <h3 className="font-display text-white text-3xl leading-tight font-bold">
                          {room.name}
                        </h3>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
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
