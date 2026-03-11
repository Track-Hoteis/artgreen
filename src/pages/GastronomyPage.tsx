import { UtensilsCrossed, Coffee, Wine, CalendarDays } from 'lucide-react';

import PageHero from '@/components/PageHero';
import FadeInUp from '@/components/animations/FadeInUp';

const highlights = [
  {
    icon: <UtensilsCrossed size={28} />,
    title: 'Culinaria Italiana Artesanal',
    description:
      'Pratos preparados com ingredientes frescos e tecnica refinada, celebrando a tradicao italiana.',
  },
  {
    icon: <Coffee size={28} />,
    title: 'Cafe da Manha Incluso',
    description:
      'Um cafe da manha completo e acolhedor para comecar o dia com energia e sabor.',
  },
  {
    icon: <CalendarDays size={28} />,
    title: 'Jantar Especial',
    description:
      'Toda sexta e sabado, um jantar especial preparado com carinho pelo nosso chef.',
  },
  {
    icon: <Wine size={28} />,
    title: 'Degustacao de Vinhos',
    description:
      'Experiencias gastronomicas com nosso sommelier, harmonizando vinhos e queijos selecionados.',
  },
];

const gallery = [
  'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-25.jpg',
  'https://irp.cdn-website.com/8406003a/dms3rep/multi/4F3A0831.JPG',
  'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-06.jpg',
  'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-34.jpg',
  'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-18.jpg',
  'https://irp.cdn-website.com/8406003a/dms3rep/multi/IMG_6358.jpg',
];

export default function GastronomyPage() {
  return (
    <main className="bg-cream">
      <PageHero
        title="art cucina"
        image="https://irp.cdn-website.com/8406003a/dms3rep/multi/4F3A0831.JPG"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Gastronomia' },
        ]}
      />

      {/* About */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeInUp>
              <p className="section-eyebrow">Restaurante</p>
              <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
                art cucina
              </h2>
              <p className="text-text-medium font-body leading-relaxed mb-6">
                No Art Cucina, cada prato celebra ingredientes frescos, tecnica e
                afeto. Um convite para desacelerar e saborear momentos especiais
                em um cenario acolhedor da serra fluminense.
              </p>
              <p className="text-text-medium font-body leading-relaxed mb-8">
                Nosso restaurante combina a tradicao da culinaria italiana com o
                frescor dos ingredientes locais, criando uma experiencia
                gastronomica unica em meio as montanhas de Teresopolis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://reservas.artgreenpousada.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-reserve inline-block text-center"
                >
                  Reservar Estadia
                </a>
                <a
                  href="https://wa.me/5521969688419"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-dark inline-block text-center"
                >
                  Falar Conosco
                </a>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <div className="overflow-hidden">
                <img
                  src="https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-25.jpg"
                  alt="Restaurante Art Cucina"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <FadeInUp className="text-center mb-14">
            <p className="section-eyebrow">Nossos Destaques</p>
            <h2 className="section-title">experiencia gastronomica</h2>
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <FadeInUp key={item.title} delay={i * 0.08}>
                <div className="bg-white p-8 text-center h-full">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-5 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-xl text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-medium text-sm font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <FadeInUp className="text-center mb-10">
            <h2 className="section-title">um sabor da serra</h2>
          </FadeInUp>
          <FadeInUp>
            <div className="relative overflow-hidden bg-black aspect-video">
              <VideoLazy
                lazySrc="https://greenland.b-cdn.net/WhatsApp%20Video%202026-02-26%20at%2010.55.57.mp4"
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <FadeInUp className="text-center mb-10">
            <h2 className="section-title">galeria</h2>
          </FadeInUp>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {gallery.map((img, i) => (
              <FadeInUp key={i} delay={i * 0.05}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={img}
                    alt={`Art Cucina - Foto ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Hours + CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-8">
              horarios
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-10 max-w-lg mx-auto">
              <div className="bg-white/10 p-6">
                <p className="font-body uppercase text-xs tracking-wider text-white/60 mb-2">
                  Cafe da Manha
                </p>
                <p className="font-display text-xl text-white">
                  7h30 as 10h00
                </p>
                <p className="text-white/60 text-sm font-body mt-1">
                  Incluso na estadia
                </p>
              </div>
              <div className="bg-white/10 p-6">
                <p className="font-body uppercase text-xs tracking-wider text-white/60 mb-2">
                  Jantar Especial
                </p>
                <p className="font-display text-xl text-white">
                  19h00 as 22h00
                </p>
                <p className="text-white/60 text-sm font-body mt-1">
                  Sextas e sabados
                </p>
              </div>
            </div>
            <a
              href="https://reservas.artgreenpousada.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-reserve inline-block"
            >
              Reservar Agora
            </a>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
