import FadeInUp from '@/components/animations/FadeInUp';

const images = [
  { src: '/servicos/IMG_5282.webp', alt: 'Ambiente preparado para massagem' },
  { src: '/servicos/IMG_5281.webp', alt: 'Sessão de massagem terapêutica' },
  { src: '/servicos/IMG_5280.webp', alt: 'Massagem relaxante na suíte Art Green' },
  { src: '/servicos/IMG_5283.webp', alt: 'Massagem modeladora na pousada' },
  { src: '/servicos/IMG_5284.webp', alt: 'Experiência de bem-estar Art Green' },
];

const services = [
  { name: 'Massagem terapêutica (50min)', price: 'R$230,00' },
  { name: 'Massagem relaxante (50min)', price: 'R$200,00' },
  { name: 'Massagem modeladora (50min)', price: 'R$200,00' },
  { name: 'Massagem linfática (50min)', price: 'R$200,00' },
];

export default function MassageSection() {
  return (
    <section id="massagem" aria-label="Serviço de massagem" className="bg-white">
      <div className="grid lg:grid-cols-2">
        {/* ---------- Text ---------- */}
        <div className="flex items-center">
          <div className="px-6 md:px-12 lg:px-20 py-16 lg:py-24 max-w-xl mx-auto lg:mx-0">
            <FadeInUp>
              <p className="section-eyebrow">Serviço Extra</p>
              <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
                Massagem
              </h2>
              <p className="text-text-medium font-body leading-relaxed mb-8">
                No Art Green, o cuidado com o seu bem-estar vai até você.
                Oferecemos um serviço exclusivo de massagem realizado{' '}
                <strong className="text-text-primary">na sua suíte</strong>,
                proporcionando conforto, privacidade e uma experiência ainda mais
                relaxante. Para garantir o melhor atendimento, é necessário
                realizar o{' '}
                <strong className="text-text-primary">
                  agendamento com pelo menos 24 horas de antecedência
                </strong>.
              </p>

              <div className="space-y-4 mb-6" role="list" aria-label="Tabela de preços de massagem">
                {services.map((s) => (
                  <div
                    key={s.name}
                    role="listitem"
                    className="flex items-center justify-between border-b border-[#e5e0d8] pb-3"
                  >
                    <span className="font-body font-semibold text-text-primary text-sm md:text-base">
                      {s.name}
                    </span>
                    <span className="font-body text-primary-medium font-semibold text-sm md:text-base whitespace-nowrap ml-4">
                      {s.price}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs md:text-sm text-text-medium font-body italic leading-relaxed">
                A Massagem terapêutica inclui alongamentos, pistola massageadora,
                liberação miofascial, ventosaterapia e massoterapia.
              </p>
            </FadeInUp>
          </div>
        </div>

        {/* ---------- Vertical image gallery (scrollable strip) ---------- */}
        <div className="grid grid-cols-3 grid-rows-2 gap-1.5 h-[50vh] lg:h-[700px]">
          {/* Large featured image — spans 2 rows */}
          <div className="row-span-2 col-span-2 overflow-hidden">
            <img
              src={images[0].src}
              alt={images[0].alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Two stacked vertical thumbnails */}
          <div className="overflow-hidden">
            <img
              src={images[1].src}
              alt={images[1].alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={images[2].src}
              alt={images[2].alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
