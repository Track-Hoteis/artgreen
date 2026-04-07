import { useParams, Link, Navigate } from 'react-router-dom';
import {
  CalendarDays,
  Check,
  Wine,
  UtensilsCrossed,
  Music,
  Sparkles,
  Egg,
  Baby,
  Mountain,
  Waves,
  TreePine,
  Coffee,
  TreeDeciduous,
} from 'lucide-react';

import PageHero from '@/components/PageHero';
import FadeInUp from '@/components/animations/FadeInUp';
import { SEO } from '@/components/SEO';
import { getActivePackages } from '@/data/packages';

const iconMap: Record<string, React.ReactNode> = {
  wine: <Wine size={22} />,
  utensils: <UtensilsCrossed size={22} />,
  music: <Music size={22} />,
  sparkles: <Sparkles size={22} />,
  egg: <Egg size={22} />,
  baby: <Baby size={22} />,
  mountain: <Mountain size={22} />,
  waves: <Waves size={22} />,
  trees: <TreeDeciduous size={22} />,
  coffee: <Coffee size={22} />,
  horse: <TreePine size={22} />,
};

export default function PackageDetailPage() {
  const activePackages = getActivePackages();
  const { slug } = useParams<{ slug: string }>();
  const pkg = activePackages.find((p) => p.slug === slug);

  if (!pkg) return <Navigate to="/pacotes" replace />;

  const otherPackages = activePackages.filter((p) => p.id !== pkg.id);

  const seoDescription = pkg.description.length > 160
    ? pkg.description.slice(0, 157) + '...'
    : pkg.description;

  return (
    <main className="bg-cream">
      <SEO
        title={pkg.title}
        description={seoDescription}
        image={pkg.imageUrl}
        url={`/pacotes/${pkg.slug}`}
      />
      <PageHero
        title={pkg.title}
        image={pkg.imageUrl}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Pacotes', to: '/pacotes' },
          { label: pkg.title },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
            {/* Left column */}
            <div>
              {/* Featured image */}
              <FadeInUp>
                <div className="overflow-hidden mb-10">
                  <img
                    src={pkg.imageUrl}
                    alt={pkg.title}
                    className="w-full h-[300px] md:h-[420px] object-cover object-center"
                  />
                </div>
              </FadeInUp>

              {/* Description */}
              <FadeInUp delay={0.1}>
                <div className="mb-10">
                  <h2 className="font-display text-3xl text-text-primary mb-4">
                    sobre o pacote
                  </h2>
                  <p className="text-text-medium font-body leading-relaxed">
                    {pkg.fullDescription}
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
                    {pkg.includes.map((item) => (
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
                <div>
                  <h2 className="font-display text-3xl text-text-primary mb-6">
                    destaques
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {pkg.highlights.map((h) => (
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
            </div>

            {/* Right column - Sidebar */}
            <div>
              <FadeInUp delay={0.1}>
                <div className="bg-white p-8 sticky top-24">
                  <span className="inline-flex text-[11px] uppercase tracking-[0.2em] font-medium text-white bg-primary px-3 py-1.5 font-body mb-4">
                    {pkg.tag}
                  </span>

                  <h3 className="font-display text-3xl text-text-primary mb-3">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center gap-2 text-accent text-sm font-body mb-6">
                    <CalendarDays size={16} />
                    <span>{pkg.dates}</span>
                  </div>

                  <p className="text-text-medium font-body text-sm leading-relaxed mb-8 border-t border-b border-gray-100 py-6">
                    {pkg.description}
                  </p>

                  <a
                    href={pkg.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-reserve w-full text-center block"
                  >
                    Reservar Este Pacote
                  </a>

                  <a
                    href="https://wa.me/5521969688419"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-dark w-full text-center block mt-3"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Other packages */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <FadeInUp>
            <h2 className="font-display text-3xl text-text-primary text-center mb-10">
              outros pacotes
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherPackages.map((p, i) => (
              <FadeInUp key={p.id} delay={i * 0.08}>
                <Link
                  to={`/pacotes/${p.slug}`}
                  className="group block bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute top-3 left-3 inline-flex text-[10px] uppercase tracking-[0.2em] font-medium text-white/90 bg-black/40 px-2.5 py-1 backdrop-blur-sm font-body">
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl text-text-primary mb-1">
                      {p.title}
                    </h3>
                    <p className="text-text-medium text-xs font-body">
                      {p.dates}
                    </p>
                  </div>
                </Link>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
