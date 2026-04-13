import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Palmtree, Users } from 'lucide-react';

import PageHero from '@/components/PageHero';
import FadeInUp from '@/components/animations/FadeInUp';
import { SEO } from '@/components/SEO';
import { vacations } from '@/data/vacations';
import { experiences } from '@/data/experiences';

const familyActivityIds = [1, 3, 5, 7, 10, 13];
const familyActivities = experiences.filter((e) =>
  familyActivityIds.includes(e.id),
);

export default function VacationsPage() {
  return (
    <main className="bg-cream">
      <SEO
        title="Férias na Serra"
        description="Férias em família na Pousada Art Green em Teresópolis. Descontos exclusivos em estadias de meio de semana em julho e janeiro."
        url="/ferias"
      />
      <PageHero
        title="férias na serra"
        image="/Pacotes/Título (1).webp"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Férias' },
        ]}
      />

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <FadeInUp className="text-center mb-14">
            <p className="section-eyebrow">Temporadas Especiais</p>
            <h2 className="section-title">férias com desconto exclusivo</h2>
            <p className="text-text-medium max-w-2xl mx-auto mt-4 font-body">
              Aproveite descontos de até 20% em estadias de meio de semana
              durante as férias escolares. Escolha a temporada ideal e garanta
              dias inesquecíveis na serra fluminense.
            </p>
          </FadeInUp>

          {/* Season cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vacations.map((v, i) => (
              <FadeInUp key={v.slug} delay={i * 0.08}>
                <Link
                  to={`/ferias/${v.slug}`}
                  className="group block bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
                >
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <img
                      src={v.imageUrl}
                      alt={`Férias de ${v.subtitle} na Art Green Teresópolis`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 inline-flex text-[11px] uppercase tracking-[0.2em] font-medium text-white/90 bg-black/40 px-3 py-1.5 backdrop-blur-sm font-body">
                      Até {Math.max(...v.dateOptions.map((o) => o.discount))}%
                      OFF
                    </span>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-display text-2xl md:text-3xl text-white mb-1">
                        {v.title}
                      </h3>
                      <p className="text-white/70 text-sm font-body">
                        {v.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-text-medium text-sm leading-relaxed font-body mb-5">
                      {v.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {v.dateOptions.map((opt) => (
                        <span
                          key={opt.startDate}
                          className="text-[11px] font-body font-medium bg-primary/10 text-primary px-3 py-1.5 uppercase tracking-wider"
                        >
                          {opt.discount}% OFF
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary uppercase tracking-wider group-hover:gap-3 transition-all">
                      Ver Datas e Preços
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Family activities */}
      <section className="py-16 md:py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <FadeInUp className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users size={24} className="text-primary" />
              <p className="section-eyebrow !mb-0">Para Toda a Família</p>
            </div>
            <h2 className="section-title">atividades para todas as idades</h2>
            <p className="text-text-medium max-w-2xl mx-auto mt-4 font-body">
              Na Art Green, cada membro da família encontra sua diversão.
              Confira o que espera por vocês durante as férias.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {familyActivities.map((exp, i) => (
              <FadeInUp key={exp.id} delay={i * 0.06}>
                <div className="group relative overflow-hidden h-[200px] sm:h-[260px]">
                  <img
                    src={exp.image}
                    alt={`${exp.title} — atividade para famílias na Art Green Teresópolis`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-display text-lg text-white">
                      {exp.title}
                    </h3>
                    <p className="text-white/70 text-xs font-body line-clamp-2">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: <Sun size={28} />,
                title: 'Desconto Exclusivo',
                text: 'Até 20% OFF em estadias de meio de semana durante as férias.',
              },
              {
                icon: <Palmtree size={28} />,
                title: 'Lazer Completo',
                text: 'Piscinas, fazendinha, cavalo, trenzinho e muito mais incluso.',
              },
              {
                icon: <Users size={28} />,
                title: 'Família Reunida',
                text: '3 a 4 diárias perfeitas para criar memórias inesquecíveis.',
              },
            ].map((item) => (
              <FadeInUp key={item.title}>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-xl text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-medium text-sm font-body leading-relaxed max-w-xs">
                    {item.text}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              garanta suas férias com desconto
            </h2>
            <p className="text-white/70 font-body mb-8 max-w-xl mx-auto">
              Escolha a temporada, selecione sua semana e reserve diretamente
              com desconto exclusivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ferias/julho-2026" className="btn-reserve inline-block">
                Férias de Julho
              </Link>
              <Link to="/ferias/janeiro-2027" className="btn-outline inline-block">
                Férias de Janeiro
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
