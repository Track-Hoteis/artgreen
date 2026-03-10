import {
  Waves,
  Gamepad2,
  Music,
  Bike,
  Fish,
  PawPrint,
  Wine,
  TreePine,
} from 'lucide-react';

import PageHero from '@/components/PageHero';
import FadeInUp from '@/components/animations/FadeInUp';
import { experiences } from '@/data/experiences';

const iconMap: Record<string, React.ReactNode> = {
  waves: <Waves size={28} />,
  gamepad2: <Gamepad2 size={28} />,
  horse: <TreePine size={28} />,
  music: <Music size={28} />,
  bike: <Bike size={28} />,
  fish: <Fish size={28} />,
  pawprint: <PawPrint size={28} />,
  wine: <Wine size={28} />,
};

const experienceImages: Record<number, string> = {
  1: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-25.jpg',
  2: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-34.jpg',
  3: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-27.jpg',
  4: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-06.jpg',
  5: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-18.jpg',
  6: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/IMG_6358.jpg',
  7: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-05.jpg',
  8: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/4F3A0831.JPG',
};

export default function ExperiencesPage() {
  return (
    <main className="bg-cream">
      <PageHero
        title="experiencias"
        image="https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-25.jpg"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Experiencias' },
        ]}
      />

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <FadeInUp className="text-center mb-14">
            <p className="section-eyebrow">Lazer & Aventura</p>
            <h2 className="section-title">momentos inesqueciveis</h2>
            <p className="text-text-medium max-w-2xl mx-auto mt-4 font-body">
              Atividades inclusas na estadia para toda a familia. Da piscina ao
              passeio a cavalo, cada momento na Art Green e pensado para criar
              memorias especiais.
            </p>
          </FadeInUp>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, i) => (
              <FadeInUp key={exp.id} delay={i * 0.06}>
                <div className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={experienceImages[exp.id]}
                      alt={exp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-5 text-white">
                      {iconMap[exp.icon]}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-text-primary mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-text-medium text-sm leading-relaxed font-body">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Fazendinha Highlight */}
      <section className="py-16 bg-farmgreen">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeInUp>
              <div className="overflow-hidden">
                <img
                  src="https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-34.jpg"
                  alt="Fazendinha Art Green"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="section-eyebrow">Contato com a Natureza</p>
              <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
                nossa fazendinha
              </h2>
              <p className="text-text-medium font-body leading-relaxed mb-6">
                Um espaco encantador para aproximar criancas e adultos dos
                animais, com atividades leves e contato direto com a natureza.
                A fazendinha da Art Green e o lugar perfeito para momentos em
                familia, com animais doceis e um ambiente seguro e acolhedor.
              </p>
              <ul className="space-y-2 text-text-medium font-body text-sm">
                <li className="flex items-center gap-2">
                  <PawPrint size={14} className="text-primary" />
                  Interacao com animais da fazenda
                </li>
                <li className="flex items-center gap-2">
                  <PawPrint size={14} className="text-primary" />
                  Area ampla e segura para criancas
                </li>
                <li className="flex items-center gap-2">
                  <PawPrint size={14} className="text-primary" />
                  Incluso na estadia
                </li>
              </ul>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              reserve sua estadia
            </h2>
            <p className="text-white/70 font-body mb-8 max-w-xl mx-auto">
              Todas as experiencias estao inclusas na sua reserva. Venha viver
              momentos inesqueciveis na serra.
            </p>
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
