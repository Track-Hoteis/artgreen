import { Link } from 'react-router-dom';
import {
  Bed,
  Users,
  Snowflake,
  Utensils,
  PawPrint,
  Flame,
  Leaf,
  Home,
} from 'lucide-react';

import PageHero from '@/components/PageHero';
import FadeInUp from '@/components/animations/FadeInUp';
import { rooms } from '@/data/rooms';

const iconMap: Record<string, React.ReactNode> = {
  bed: <Bed size={16} />,
  users: <Users size={16} />,
  snowflake: <Snowflake size={16} />,
  utensils: <Utensils size={16} />,
  pawprint: <PawPrint size={16} />,
  flame: <Flame size={16} />,
  leaf: <Leaf size={16} />,
  home: <Home size={16} />,
};

export default function AccommodationsPage() {
  return (
    <main className="bg-cream">
      <PageHero
        title="nossas acomodacoes"
        image="https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-06.jpg"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Acomodacoes' },
        ]}
      />

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <FadeInUp className="text-center mb-14">
            <p className="section-eyebrow">Conforto & Natureza</p>
            <h2 className="section-title">escolha sua acomodacao</h2>
            <p className="text-text-medium max-w-2xl mx-auto mt-4">
              Cada acomodacao foi pensada para oferecer o maximo de conforto em
              meio a natureza da serra fluminense.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.filter((r) => !r.hidden).map((room, i) => (
              <FadeInUp key={room.id} delay={i * 0.08} className="h-full">
                <Link
                  to={`/acomodacoes/${room.slug}`}
                  className="group flex flex-col h-full bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={room.images[0]}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-3">
                      <h3 className="font-display text-2xl text-text-primary">
                        {room.name}
                      </h3>
                    </div>

                    <p className="text-text-medium text-sm leading-relaxed mb-4 font-body">
                      {room.description}
                    </p>

                    <div className="flex items-center gap-4 text-text-medium text-xs font-body border-t border-gray-100 pt-4">
                      {room.features.map((f) => (
                        <span
                          key={f.label}
                          className="flex items-center gap-1.5"
                        >
                          {iconMap[f.icon]}
                          {f.label}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-5">
                      <span className="btn-outline-dark text-center block text-sm py-2.5">
                        Ver Detalhes
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              reserve sua estadia
            </h2>
            <p className="text-white/70 font-body mb-8 max-w-xl mx-auto">
              Garanta sua reserva e viva momentos inesqueciveis na serra
              fluminense.
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
