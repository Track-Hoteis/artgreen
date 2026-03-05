import { useCallback, useEffect, useState } from 'react';

import FadeInUp from '@/components/animations/FadeInUp';

const highlights = [
  'Todas as atividades inclusas na estadia',
  'Musica ao vivo em fins de semana selecionados',
  'Experiencias para adultos e criancas',
  'Contato direto com a natureza da serra',
];

const carouselImages = [
  'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-06.jpg',
  'https://irp.cdn-website.com/8406003a/dms3rep/multi/4F3A0831.JPG',
  'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-25.jpg',
  'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-34.jpg',
  'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-27.jpg',
];

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
    <section id="a-pousada" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeInUp>
            <p className="section-eyebrow">Sobre a Pousada</p>
            <h2 className="section-title">Pousada Art Green</h2>
            <p className="text-text-medium leading-relaxed mb-8 max-w-xl">
              Situada em Teresopolis, dentro do complexo Greenland, a Art Green
              oferece estrutura completa para descansar com conforto, respirar
              ar puro e viver momentos memoraveis entre montanhas, lagos e
              gastronomia afetiva.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="text-text-primary text-sm md:text-base">
                  • {item}
                </li>
              ))}
            </ul>

            <a href="#acomodacoes" className="btn-primary">
              Saiba Mais
            </a>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="relative overflow-hidden shadow-lg h-[50dvh] sm:h-[60dvh] lg:h-[78dvh]">
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

              <div className="absolute bottom-4 left-4 z-20 w-32 h-32 md:w-36 md:h-36 bg-white border border-primary/10 flex flex-col items-center justify-center text-center shadow-lg">
                <p className="font-display text-3xl md:text-4xl font-bold text-primary leading-none">
                  6K+
                </p>
                <p className="text-[10px] uppercase tracking-[0.16em] text-text-medium mt-2 px-2">
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
