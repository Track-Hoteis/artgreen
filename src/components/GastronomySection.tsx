import FadeInUp from '@/components/animations/FadeInUp';
import VideoLazy from '@/components/VideoLazy';

const highlights = [
  'Culinária italiana artesanal',
  'Café da manhã incluso',
  'Opção de pensão completa',
  'Jantar especial às sextas e sábados',
  'Degustação de vinhos e queijos (evento sazonal de inverno, incluso na pensão completa)',
  'Música ao vivo sábado (almoço e jantar)',
];

export default function GastronomySection() {
  

  return (
    <section id="gastronomia" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <FadeInUp>
            <div className="relative overflow-hidden h-[460px] sm:h-[560px] lg:h-[620px]">
              <VideoLazy
                lazySrc="https://greenland.b-cdn.net/vertical%20artcucina.mp4"
                poster="/gastronomia/IMG_4655.webp"
                autoPlay
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-center scale-[1.9]"
              />
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <img src="/logo-artcucina.webp" alt="Art Cucina" className="h-10 md:h-12 mb-4" />
            <p className="section-eyebrow">Restaurante Art Cucina</p>
            <h2 className="section-title text-2xl md:text-3xl lg:text-4xl">
              Experiência gastronômica em ambiente romântico
            </h2>
            <p className="text-text-medium leading-relaxed mb-6">
              No Art Cucina, cada prato celebra ingredientes frescos, técnica e
              afeto. Um convite para desacelerar e saborear momentos especiais
              em um cenário acolhedor da serra fluminense.
            </p>

            <ul className="space-y-2 mb-8">
              {highlights.map((item) => (
                <li key={item} className="text-text-primary text-sm md:text-base">
                  • {item}
                </li>
              ))}
            </ul>

            <a href="#experiencias" className="btn-primary">
              Ver Experiência
            </a>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
