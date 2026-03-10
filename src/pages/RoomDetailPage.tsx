import { useParams, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Bed,
  Users,
  Snowflake,
  Utensils,
  PawPrint,
  Flame,
  Leaf,
  Home,
  Maximize2,
  Clock,
  ChevronLeft,
  ChevronRight,
  Check,
} from 'lucide-react';

import PageHero from '@/components/PageHero';
import FadeInUp from '@/components/animations/FadeInUp';
import { rooms } from '@/data/rooms';

const iconMap: Record<string, React.ReactNode> = {
  bed: <Bed size={20} />,
  users: <Users size={20} />,
  snowflake: <Snowflake size={20} />,
  utensils: <Utensils size={20} />,
  pawprint: <PawPrint size={20} />,
  flame: <Flame size={20} />,
  leaf: <Leaf size={20} />,
  home: <Home size={20} />,
};

export default function RoomDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const room = rooms.find((r) => r.slug === slug);
  const [currentImage, setCurrentImage] = useState(0);

  if (!room) return <Navigate to="/acomodacoes" replace />;

  const relatedRooms = rooms.filter((r) => r.id !== room.id).slice(0, 3);

  const prevImage = () =>
    setCurrentImage((prev) =>
      prev === 0 ? room.images.length - 1 : prev - 1
    );
  const nextImage = () =>
    setCurrentImage((prev) =>
      prev === room.images.length - 1 ? 0 : prev + 1
    );

  return (
    <main className="bg-cream">
      <PageHero
        title={room.name}
        image={room.images[0]}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Acomodacoes', to: '/acomodacoes' },
          { label: room.name },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
            {/* Left column - Gallery + Details */}
            <div>
              {/* Image Gallery */}
              <FadeInUp>
                <div className="relative overflow-hidden mb-4 bg-black aspect-[16/10]">
                  <img
                    src={room.images[currentImage]}
                    alt={`${room.name} - Foto ${currentImage + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                    aria-label="Proxima foto"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
                <div className="flex gap-2">
                  {room.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`flex-1 aspect-[16/10] overflow-hidden border-2 transition-colors ${
                        i === currentImage
                          ? 'border-accent'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${room.name} - Miniatura ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </FadeInUp>

              {/* Description */}
              <FadeInUp delay={0.1}>
                <div className="mt-10">
                  <h2 className="font-display text-3xl text-text-primary mb-4">
                    sobre a acomodacao
                  </h2>
                  <p className="text-text-medium font-body leading-relaxed">
                    {room.fullDescription}
                  </p>
                </div>
              </FadeInUp>

              {/* Amenities Grid */}
              <FadeInUp delay={0.15}>
                <div className="mt-10">
                  <h2 className="font-display text-3xl text-text-primary mb-6">
                    comodidades
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {room.features.map((f) => (
                      <div
                        key={f.label}
                        className="flex items-center gap-3 bg-white p-4 text-text-primary"
                      >
                        <span className="text-accent">
                          {iconMap[f.icon]}
                        </span>
                        <span className="font-body text-sm">{f.label}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-3 bg-white p-4 text-text-primary">
                      <span className="text-accent">
                        <Maximize2 size={20} />
                      </span>
                      <span className="font-body text-sm">{room.size}</span>
                    </div>
                  </div>
                </div>
              </FadeInUp>

              {/* Rules */}
              <FadeInUp delay={0.2}>
                <div className="mt-10">
                  <h2 className="font-display text-3xl text-text-primary mb-6">
                    politicas
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 bg-white p-4">
                      <Clock size={20} className="text-accent shrink-0" />
                      <div>
                        <p className="font-body text-xs uppercase tracking-wider text-text-medium">
                          Check-in
                        </p>
                        <p className="font-body text-sm font-medium text-text-primary">
                          A partir das {room.checkIn}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4">
                      <Clock size={20} className="text-accent shrink-0" />
                      <div>
                        <p className="font-body text-xs uppercase tracking-wider text-text-medium">
                          Check-out
                        </p>
                        <p className="font-body text-sm font-medium text-text-primary">
                          Ate as {room.checkOut}
                        </p>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {room.rules.map((rule) => (
                      <li
                        key={rule}
                        className="flex items-center gap-2 text-text-medium font-body text-sm"
                      >
                        <Check size={14} className="text-primary shrink-0" />
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInUp>
            </div>

            {/* Right column - Booking sidebar */}
            <div>
              <FadeInUp delay={0.1}>
                <div className="bg-white p-8 sticky top-24">
                  <div className="mb-6">
                    <span
                      className={`${room.tagColor} text-white text-xs uppercase tracking-wider px-3 py-1 font-body font-medium`}
                    >
                      {room.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl text-text-primary mb-2">
                    {room.name}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="font-display text-4xl text-accent">
                      R${room.price}
                    </span>
                    <span className="text-text-medium font-body text-sm">
                      /noite
                    </span>
                  </div>

                  <div className="space-y-3 mb-8 border-t border-b border-gray-100 py-6">
                    <div className="flex items-center gap-3 text-sm font-body text-text-medium">
                      <Users size={16} className="text-accent" />
                      {room.capacity}
                    </div>
                    <div className="flex items-center gap-3 text-sm font-body text-text-medium">
                      <Maximize2 size={16} className="text-accent" />
                      {room.size}
                    </div>
                    <div className="flex items-center gap-3 text-sm font-body text-text-medium">
                      <Clock size={16} className="text-accent" />
                      Check-in {room.checkIn} / Check-out {room.checkOut}
                    </div>
                  </div>

                  <a
                    href="https://reservas.artgreenpousada.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-reserve w-full text-center block"
                  >
                    Reservar Agora
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

      {/* Related rooms */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <FadeInUp>
            <h2 className="font-display text-3xl text-text-primary text-center mb-10">
              outras acomodacoes
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedRooms.map((r, i) => (
              <FadeInUp key={r.id} delay={i * 0.08}>
                <Link
                  to={`/acomodacoes/${r.slug}`}
                  className="group block bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={r.images[0]}
                      alt={r.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span
                      className={`absolute top-4 left-4 ${r.tagColor} text-white text-xs uppercase tracking-wider px-3 py-1.5 font-body font-medium`}
                    >
                      {r.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between">
                      <h3 className="font-display text-xl text-text-primary">
                        {r.name}
                      </h3>
                      <span className="font-display text-xl text-accent shrink-0 ml-3">
                        R${r.price}
                        <span className="text-xs text-text-medium font-body">
                          /noite
                        </span>
                      </span>
                    </div>
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
