import { useCallback, useEffect, useState } from 'react';
import { Star } from 'lucide-react';

import FadeInUp from '@/components/animations/FadeInUp';

const highlights = [
  'Atividades inclusas na estadia',
  'Experiencias para toda a familia',
];

const carouselImages = [
  'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-06.jpg',
  'https://irp.cdn-website.com/8406003a/dms3rep/multi/4F3A0831.JPG',
  'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-25.jpg',
  'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-34.jpg',
  'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-27.jpg',
];

/* ── Decorative SVG shapes ─────────────────────────────── */

function DotGrid({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100"
      height="80"
      viewBox="0 0 100 80"
      fill="none"
      aria-hidden="true"
    >
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={10 + col * 20}
            cy={10 + row * 20}
            r="3"
            fill="#5A7A5C"
            opacity="0.35"
          />
        )),
      )}
    </svg>
  );
}

function LeafLine({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="60"
      height="120"
      viewBox="0 0 60 120"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M30 0 C30 40,5 50,5 80 C5 100,20 115,30 120 C40 115,55 100,55 80 C55 50,30 40,30 0Z"
        stroke="#5A7A5C"
        strokeWidth="1.5"
        fill="none"
        opacity="0.25"
      />
    </svg>
  );
}

function CornerShape({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="72"
        height="72"
        rx="4"
        stroke="#5A7A5C"
        strokeWidth="1.5"
        fill="none"
        opacity="0.2"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="flex-shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" stroke="#5A7A5C" strokeWidth="1.5" />
      <path d="M10 8l6 4-6 4V8z" fill="#5A7A5C" />
    </svg>
  );
}

/* ── Component ─────────────────────────────────────────── */

export default function AboutSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c === carouselImages.length - 1 ? 0 : c + 1)),
    [],
  );

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="a-pousada" className="relative -mt-12 md:-mt-16 pt-32 md:pt-44 pb-20 md:pb-28 bg-cream overflow-hidden z-10">
      {/* ── Decorative floating shapes ── */}
      <LeafLine className="absolute top-16 left-4 lg:left-12 bounce-animate pointer-events-none" />
      <DotGrid className="absolute bottom-20 left-1/2 -translate-x-1/2 lg:left-[42%] bounce-animate3 pointer-events-none" />
      <CornerShape className="absolute bottom-8 left-6 lg:left-16 bounce-animate2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Text column ── */}
          <FadeInUp>
            <p className="section-eyebrow flex items-center gap-2">
              <span className="text-primary-medium">→</span> Sobre a Pousada
            </p>

            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.15] mb-6 text-text-primary">
              Sua Porta de Entrada
              <br />
              para o Conforto e a
              <br />
              Natureza da Serra
            </h2>

            <p className="text-text-medium leading-relaxed mb-8 max-w-xl">
              Situada em Teresopolis, dentro do complexo Greenland, a Art Green
              oferece estrutura completa para descansar com conforto, respirar
              ar puro e viver momentos memoraveis entre montanhas, lagos e
              gastronomia afetiva.
            </p>

            {/* ── Two highlights side-by-side ── */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <PlayIcon />
                  <span className="text-text-primary text-sm md:text-base font-medium italic">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a href="#acomodacoes" className="btn-primary">
              Saiba Mais{' '}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </FadeInUp>

          {/* ── Image column ── */}
          <FadeInUp delay={0.15}>
            <div className="relative overflow-hidden shadow-lg h-[52dvh] sm:h-[60dvh] lg:h-[68dvh]">
              {carouselImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt="Ambiente da pousada"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === current ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              {/* ── Counter overlay (bottom-right, dark bg) ── */}
              <div className="absolute bottom-6 left-6 z-20 w-36 h-36 md:w-40 md:h-40 bg-primary/80 backdrop-blur-sm flex flex-col items-center justify-center text-center shadow-xl">
                <Star
                  size={30}
                  strokeWidth={1.75}
                  className="mb-2 text-white"
                  aria-hidden="true"
                />
                <p className="font-body text-3xl md:text-4xl font-bold text-white leading-none">
                  6k+
                </p>
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/80 mt-1.5 px-2">
                  Hospedes satisfeitos
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
