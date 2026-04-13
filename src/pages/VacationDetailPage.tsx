import { useParams, Link, Navigate } from 'react-router-dom';
import {
  CalendarDays,
  Check,
  Wine,
  UtensilsCrossed,
  Music,
  Sparkles,
  Baby,
  Mountain,
  Waves,
  TreePine,
  Coffee,
  TreeDeciduous,
  Percent,
  Moon,
} from 'lucide-react';

import PageHero from '@/components/PageHero';
import FadeInUp from '@/components/animations/FadeInUp';
import { SEO } from '@/components/SEO';
import { vacations, buildBookingUrl } from '@/data/vacations';
import { experiences } from '@/data/experiences';

const iconMap: Record<string, React.ReactNode> = {
  wine: <Wine size={22} />,
  utensils: <UtensilsCrossed size={22} />,
  music: <Music size={22} />,
  sparkles: <Sparkles size={22} />,
  baby: <Baby size={22} />,
  mountain: <Mountain size={22} />,
  waves: <Waves size={22} />,
  trees: <TreeDeciduous size={22} />,
  coffee: <Coffee size={22} />,
  horse: <TreePine size={22} />,
};

const familyActivityIds = [1, 3, 5, 7, 10, 13];
const familyActivities = experiences.filter((e) =>
  familyActivityIds.includes(e.id),
);

export default function VacationDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const vacation = vacations.find((v) => v.slug === slug);

  if (!vacation) return <Navigate to="/ferias" replace />;

  const otherVacations = vacations.filter((v) => v.slug !== vacation.slug);

  return (
    <main className="bg-cream">
      <SEO
        title={vacation.title}
        description={vacation.description}
        image={vacation.imageUrl}
        url={`/ferias/${vacation.slug}`}
      />
      <PageHero
        title={vacation.title}
        image={vacation.imageUrl}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Férias', to: '/ferias' },
          { label: vacation.title },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
            {/* Left column */}
            <div>
              {/* Featured image */}
              <FadeInUp>
                <div className="overflow-hidden mb-10">
                  <img
                    src={vacation.imageUrl}
                    alt={`${vacation.title} na Art Green Teresópolis`}
                    className="w-full h-[300px] md:h-[420px] object-cover object-center"
                  />
                </div>
              </FadeInUp>

              {/* Description */}
              <FadeInUp delay={0.1}>
                <div className="mb-10">
                  <h2 className="font-display text-3xl text-text-primary mb-4">
                    sobre as férias
                  </h2>
                  <p className="text-text-medium font-body leading-relaxed">
                    {vacation.fullDescription}
                  </p>
                </div>
              </FadeInUp>

              {/* Includes */}
              <FadeInUp delay={0.15}>
                <div className="mb-10">
                  <h2 className="font-display text-3xl text-text-primary mb-6">
                    o que esta incluso
                  </h2>
                  <ul className="space-y-3">
                    {vacation.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-text-medium font-body text-sm"
                      >
                        <span className="w-6 h-6 bg-primary/10 flex items-center justify-center shrink-0">
                          <Check size={14} className="text-primary" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInUp>

              {/* Highlights */}
              <FadeInUp delay={0.2}>
                <div className="mb-10">
                  <h2 className="font-display text-3xl text-text-primary mb-6">
                    destaques
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {vacation.highlights.map((h) => (
                      <div
                        key={h.label}
                        className="bg-white p-5 text-center"
                      >
                        <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary">
                          {iconMap[h.icon] || <Sparkles size={22} />}
                        </div>
                        <p className="font-body text-sm text-text-primary font-medium">
                          {h.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>

              {/* Family activities */}
              <FadeInUp delay={0.25}>
                <div>
                  <h2 className="font-display text-3xl text-text-primary mb-6">
                    atividades para a família
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {familyActivities.map((exp) => (
                      <div
                        key={exp.id}
                        className="group relative overflow-hidden h-[140px] sm:h-[180px]"
                      >
                        <img
                          src={exp.image}
                          alt={`${exp.title} — atividade na Art Green`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2">
                          <h3 className="font-display text-sm text-white">
                            {exp.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>
            </div>

            {/* Right column - Sidebar with date options */}
            <div>
              <FadeInUp delay={0.1}>
                <div className="bg-white p-8 sticky top-24">
                  <span className="inline-flex text-[11px] uppercase tracking-[0.2em] font-medium text-white bg-primary px-3 py-1.5 font-body mb-4">
                    Até {Math.max(...vacation.dateOptions.map((o) => o.discount))}% OFF
                  </span>

                  <h3 className="font-display text-3xl text-text-primary mb-3">
                    {vacation.title}
                  </h3>

                  <p className="text-text-medium font-body text-sm leading-relaxed mb-6 border-b border-gray-100 pb-6">
                    Escolha a semana ideal para suas férias e reserve com
                    desconto exclusivo. Estadias de meio de semana com preços
                    especiais.
                  </p>

                  <p className="font-body text-xs uppercase tracking-[0.15em] font-medium text-text-primary mb-4">
                    Selecione sua semana
                  </p>

                  <div className="space-y-3">
                    {vacation.dateOptions.map((opt) => (
                      <a
                        key={opt.startDate}
                        href={buildBookingUrl(opt)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-4 border border-gray-200 p-4 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <CalendarDays
                              size={14}
                              className="text-accent shrink-0"
                            />
                            <span className="font-body text-sm font-medium text-text-primary">
                              {opt.label}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-text-medium font-body">
                            <span className="flex items-center gap-1">
                              <Moon size={12} />
                              {opt.nights} diárias
                            </span>
                          </div>
                        </div>
                        <span className="flex items-center gap-1 bg-primary text-white text-sm font-bold font-body px-3 py-2 shrink-0 group-hover/btn:bg-primary-dark transition-colors">
                          <Percent size={14} />
                          {opt.discount}% OFF
                        </span>
                      </a>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/552127480222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-dark w-full text-center block mt-6"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Other vacation periods */}
      {otherVacations.length > 0 && (
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <FadeInUp>
              <h2 className="font-display text-3xl text-text-primary text-center mb-10">
                outras temporadas
              </h2>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {otherVacations.map((v, i) => (
                <FadeInUp key={v.slug} delay={i * 0.08}>
                  <Link
                    to={`/ferias/${v.slug}`}
                    className="group block bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={v.imageUrl}
                        alt={`${v.title} na Art Green`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute top-3 left-3 inline-flex text-[10px] uppercase tracking-[0.2em] font-medium text-white/90 bg-black/40 px-2.5 py-1 backdrop-blur-sm font-body">
                        Até{' '}
                        {Math.max(...v.dateOptions.map((o) => o.discount))}%
                        OFF
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-xl text-text-primary mb-1">
                        {v.title}
                      </h3>
                      <p className="text-text-medium text-xs font-body">
                        {v.subtitle}
                      </p>
                    </div>
                  </Link>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
