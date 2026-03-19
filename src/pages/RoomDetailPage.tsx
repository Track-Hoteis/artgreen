import { useParams, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
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
  X,
} from 'lucide-react';

import PageHero from '@/components/PageHero';
import FadeInUp from '@/components/animations/FadeInUp';
import { BookingFormContent } from '@/components/HeroSection';
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
  const room = rooms.find((r) => r.slug === slug && !r.hidden);
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!room) return <Navigate to="/acomodacoes" replace />;

  const relatedRooms = rooms.filter((r) => !r.hidden && r.id !== room.id).slice(0, 3);

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

      <section className="pt-16 md:pt-24 pb-8 md:pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-[1fr_460px] gap-6 lg:gap-7 items-start">
            {/* Left column - Gallery (stretches to match booking form height) */}
            <div className="lg:self-stretch flex flex-col">
              <div className="flex flex-col flex-1">
                <div className="relative overflow-hidden bg-black flex-1 min-h-[260px]">
                  <img
                    src={room.images[currentImage]}
                    alt={`${room.name} - Foto ${currentImage + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
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
                <div className="flex gap-2 mt-3">
                  {room.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`flex-1 aspect-[29/14] overflow-hidden border-2 transition-colors ${
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
              </div>
            </div>

            {/* Right column - Booking widget (same as home) */}
            <div className="bg-[#333333] px-10 py-11">
              <BookingFormContent />
            </div>
          </div>
        </div>
      </section>

      {/* Full-width content below */}
      <section className="pt-8 md:pt-10 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Description */}
          <FadeInUp>
            <div className="mb-14 text-center">
              <h2 className="font-display text-3xl text-text-primary mb-4">
                sobre a acomodação
              </h2>
              <p className="text-text-medium font-body leading-relaxed">
                {room.fullDescription}
              </p>
            </div>
          </FadeInUp>

          {/* Amenities Grid */}
          <FadeInUp>
            <div className="mb-14">
              <h2 className="font-display text-3xl text-text-primary mb-6 text-center">
                comodidades
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
          <FadeInUp>
            <div>
              <h2 className="font-display text-3xl text-text-primary mb-6 text-center">
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
                  className="group block overflow-hidden"
                >
                  <motion.article
                    whileHover={{ scale: 1.02, boxShadow: '0 20px 45px rgba(0,0,0,0.2)' }}
                    transition={{ duration: 0.35 }}
                    className="relative h-[360px] overflow-hidden bg-black"
                  >
                    <img
                      src={r.images[0]}
                      alt={r.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-[28%] bg-[rgba(82,97,78,0.95)] backdrop-blur-sm px-6 py-5 transition-all duration-500 group-hover:h-[90%]">
                      <h3 className="font-display text-white text-2xl leading-tight mb-3">
                        {r.name}
                      </h3>
                      <p className="text-white/85 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mb-4">
                        {r.description}
                      </p>
                      <p className="text-white/80 text-xs uppercase tracking-[0.12em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                        {r.amenities}
                      </p>
                    </div>
                  </motion.article>
                </Link>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image gallery */}
      <section>
        <div className="flex">
          {room.images.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="relative overflow-hidden flex-1 aspect-square group"
            >
              <img
                src={src}
                alt={`${room.name} - Foto ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white hover:text-white/70 transition-colors z-10"
            aria-label="Fechar"
          >
            <X size={32} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev === null ? null : prev === 0 ? room.images.length - 1 : prev - 1
              );
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev === null ? null : prev === room.images.length - 1 ? 0 : prev + 1
              );
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Próxima foto"
          >
            <ChevronRight size={24} />
          </button>
          <img
            src={room.images[lightboxIndex]}
            alt={`${room.name} - Foto ${lightboxIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
