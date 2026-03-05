import { useState, useEffect, useCallback } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';

const highlights = [
  'Todas as atividades sem custo extra',
  'Música ao vivo todos os fins de semana',
];

const carouselImages = [
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-06.jpg',
    alt: 'Acomodações Art Green',
  },
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/4F3A0831.JPG',
    alt: 'Vista aérea da pousada',
  },
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-25.jpg',
    alt: 'Área de lazer',
  },
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-34.jpg',
    alt: 'Atividades ao ar livre',
  },
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-27.jpg',
    alt: 'Natureza e paisagem',
  },
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-05.jpg',
    alt: 'Estrutura da pousada',
  },
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/IMG_6358.jpg',
    alt: 'Art Green Teresópolis',
  },
];

export default function AboutSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c === carouselImages.length - 1 ? 0 : c + 1)),
    [],
  );

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? carouselImages.length - 1 : c - 1)),
    [],
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="a-pousada" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="relative">
            <p className="section-eyebrow">Sobre a Pousada</p>
            <h2 className="section-title">Pousada Art Green</h2>
            <p className="text-text-medium leading-relaxed mb-8">
              Situado em Teresópolis, dentro do GreenLand Teresópolis, a Art
              Green oferece uma área de lazer de tirar o fôlego. Piscinas ao ar
              livre com escorregas, hidromassagem aquecida, área de brinquedos,
              salão de jogos, lago de pesca, lago de passeio, ciclovia,
              fazendinha com vários animais, passeio a cavalo, redário, gazebos
              e restaurante maravilhoso.
            </p>

            {/* Highlights */}
            <ul className="grid sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 bg-cream px-4 py-3"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-dark text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#acomodacoes" className="btn-primary">
              Saiba Mais
            </a>

            <div className="absolute -bottom-7 -left-6 w-14 h-14 rounded-full bg-accent/20 animate-float hidden lg:block" />
            <div className="absolute -bottom-2 right-6 w-28 h-28 rounded-full bg-primary/5 hidden lg:block" />
          </div>

          {/* Image carousel */}
          <div className="relative">
            <div className="overflow-hidden shadow-lg h-[50dvh] sm:h-[60dvh] lg:h-[80dvh] relative">
              {carouselImages.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === current ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              {/* Arrows */}
              <button
                onClick={prev}
                aria-label="Imagem anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm flex items-center justify-center text-dark hover:bg-white transition-colors z-10"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                aria-label="Próxima imagem"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm flex items-center justify-center text-dark hover:bg-white transition-colors z-10"
              >
                <ChevronRight size={20} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {carouselImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Ir para imagem ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-6 bg-white'
                        : 'w-2 bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
              {/* 6K card — overlays carousel */}
              <div className="absolute bottom-4 left-4 z-20 w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-white shadow-lg border border-primary/10 flex flex-col items-center justify-center text-center">
                <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-none">
                  6K+
                </p>
                <p className="text-[9px] sm:text-[10px] lg:text-xs uppercase tracking-[0.15em] text-text-medium mt-2 px-2">
                  Hóspedes Satisfeitos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
