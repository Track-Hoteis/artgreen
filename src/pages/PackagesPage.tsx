import { Link } from 'react-router-dom';
import { CalendarDays, ArrowRight } from 'lucide-react';

import PageHero from '@/components/PageHero';
import FadeInUp from '@/components/animations/FadeInUp';
import { SEO } from '@/components/SEO';
import { getActivePackages } from '@/data/packages';

export default function PackagesPage() {
  const activePackages = getActivePackages();

  return (
    <main className="bg-cream">
      <SEO
        title="Pacotes & Ofertas"
        description="Confira pacotes especiais e ofertas exclusivas na Pousada Art Green em Teresópolis. Experiências únicas na serra fluminense."
        url="/pacotes"
      />
      <PageHero
        title="pacotes & ofertas"
        image="https://lirp.cdn-website.com/8406003a/dms3rep/multi/opt/Banner+site+%2832%29-1920w.png"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Pacotes' },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <FadeInUp className="text-center mb-14">
            <p className="section-eyebrow">Pacotes Especiais</p>
            <h2 className="section-title">ofertas exclusivas</h2>
            <p className="text-text-medium max-w-2xl mx-auto mt-4 font-body">
              Confira nossos pacotes sazonais e viva experiências inesquecíveis
              na serra fluminense. Cada pacote foi pensado para oferecer momentos
              únicos de descanso, lazer e gastronomia.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activePackages.map((pkg, i) => (
              <FadeInUp key={pkg.id} delay={i * 0.08}>
                <Link
                  to={`/pacotes/${pkg.slug}`}
                  className="group block bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
                >
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <img
                      src={pkg.imageUrl}
                      alt={pkg.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 inline-flex text-[11px] uppercase tracking-[0.2em] font-medium text-white/90 bg-black/40 px-3 py-1.5 backdrop-blur-sm font-body">
                      {pkg.tag}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-2xl text-text-primary mb-2">
                      {pkg.title}
                    </h3>

                    <div className="flex items-center gap-2 text-accent text-sm font-body mb-3">
                      <CalendarDays size={14} />
                      <span>{pkg.dates}</span>
                    </div>

                    <p className="text-text-medium text-sm leading-relaxed font-body mb-5">
                      {pkg.description}
                    </p>

                    <span className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary uppercase tracking-wider group-hover:gap-3 transition-all">
                      Ver Detalhes
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </FadeInUp>
            ))}

            {activePackages.length === 0 && (
              <FadeInUp>
                <p className="text-text-medium text-center col-span-full font-body">
                  No momento, nao ha pacotes sazonais ativos.
                </p>
              </FadeInUp>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              não encontrou o pacote ideal?
            </h2>
            <p className="text-white/70 font-body mb-8 max-w-xl mx-auto">
              Entre em contato conosco e montamos um pacote personalizado para
              você e sua família.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://reservas.artgreenpousada.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-reserve inline-block"
              >
                Reservar Agora
              </a>
              <a
                href="https://wa.me/5521969688419"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-block"
              >
                Falar no WhatsApp
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
