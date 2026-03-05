import { useEffect, useMemo, useState } from 'react';
import {
  GlassWater,
  TreePine,
  Grape,
  Joystick,
  Sparkles,
  Waves,
  PawPrint,
} from 'lucide-react';

type ServiceCard = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
};

type ExperienceCard = {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  icon: React.ElementType;
};

function getCardsPerView(width: number): 1 | 2 | 3 {
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  return 1;
}

const serviceCards: ServiceCard[] = [
  {
    id: 1,
    title: 'Atendimento Premium',
    description: 'Equipe dedicada para tornar cada momento especial.',
    icon: Sparkles,
  },
  {
    id: 2,
    title: 'Estrutura Completa',
    description: 'Lazer, conforto e experiências para todas as idades.',
    icon: Waves,
  },
  {
    id: 3,
    title: 'Contato com a Natureza',
    description: 'Ambientes verdes e atividades ao ar livre.',
    icon: TreePine,
  },
  {
    id: 4,
    title: 'Momentos em Família',
    description: 'Vivências acolhedoras para casais e crianças.',
    icon: PawPrint,
  },
];

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    subtitle: 'Lazer ao Ar Livre',
    title: 'Piscinas',
    description: 'Piscinas para relaxar e aproveitar dias de sol com tranquilidade.',
    imageUrl:
      'https://lirp.cdn-website.com/8406003a/dms3rep/multi/opt/ag_area_lazer_ft-18-1920w.jpg',
    href: '#experiencias',
    icon: GlassWater,
  },
  {
    id: 2,
    subtitle: 'Experiência Rural',
    title: 'Fazendinha',
    description: 'Interação com animais em um espaço encantador para toda família.',
    imageUrl:
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-25.jpg',
    href: '#fazendinha',
    icon: TreePine,
  },
  {
    id: 3,
    subtitle: 'Sabores Selecionados',
    title: 'Degustação de Vinhos',
    description: 'Uma jornada de aromas e sabores para momentos inesquecíveis.',
    imageUrl:
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-34.jpg',
    href: '#gastronomia',
    icon: Grape,
  },
  {
    id: 4,
    subtitle: 'Diversão Indoor',
    title: 'Salão de Jogos',
    description: 'Ambiente descontraído para jogos e entretenimento em grupo.',
    imageUrl:
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-27.jpg',
    href: '#experiencias',
    icon: Joystick,
  },
];

export default function ExperiencesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState<1 | 2 | 3>(() =>
    typeof window === 'undefined' ? 1 : getCardsPerView(window.innerWidth)
  );

  useEffect(() => {
    const onResize = () => setCardsPerView(getCardsPerView(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const slides = useMemo<ExperienceCard[][]>(() => {
    const result: ExperienceCard[][] = [];
    for (let index = 0; index < experienceCards.length; index += cardsPerView) {
      result.push(experienceCards.slice(index, index + cardsPerView));
    }
    return result;
  }, [cardsPerView]);

  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, Math.max(slides.length - 1, 0)));
  }, [slides.length]);

  return (
    <section id="experiencias" className="py-20 md:py-28 bg-farmgreen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-14 md:mb-16">
          <div className="lg:col-span-4">
            <p className="section-eyebrow">Serviços</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight mb-8">
              <span className="block">Enriquecendo Sua Estadia</span>
              <span className="block">Com Serviços</span>
              <span className="block">Exclusivos</span>
            </h2>
            <a
              href="https://wa.me/5521969688419"
              target="_blank"
              rel="noreferrer"
              className="btn-reserve"
            >
              Reservar Agora
            </a>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceCards.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.id}
                  className="bg-white p-6 border border-primary/10"
                >
                  <span className="w-11 h-11 text-primary flex items-center justify-center mb-4">
                    <Icon size={28} strokeWidth={1.8} />
                  </span>
                  <h3 className="font-display text-3xl font-bold text-dark mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-medium leading-relaxed">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {slide.map((card) => {
                    const Icon = card.icon;
                    return (
                      <article key={card.id} className="bg-white shadow-md overflow-hidden">
                        <div className="relative">
                          <img
                            src={card.imageUrl}
                            alt={card.title}
                            loading="lazy"
                            className="w-full h-56 object-cover"
                          />
                          <span className="absolute left-6 bottom-0 translate-y-1/2 w-12 h-12 bg-primary text-white flex items-center justify-center shadow-md">
                            <Icon size={20} />
                          </span>
                        </div>

                        <div className="px-6 pb-6 pt-10">
                          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2">
                            {card.subtitle}
                          </p>
                          <h3 className="font-display text-2xl font-bold text-dark mb-2">
                            {card.title}
                          </h3>
                          <p className="text-sm text-text-medium leading-relaxed mb-5">
                            {card.description}
                          </p>
                          <a href={card.href} className="btn-primary">
                            Saiba Mais
                          </a>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
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
