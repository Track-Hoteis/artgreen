import FadeInUp from '@/components/animations/FadeInUp';

const dishes = [
  {
    src: '/gastronomia/IMG_4646.webp',
    alt: 'Sorrentino al pesto com parmesão — prato artesanal do Art Cucina',
    label: 'Sorrentino al Pesto',
    featured: true,
  },
  {
    src: '/gastronomia/IMG_4647.webp',
    alt: 'Drink autoral com frutas vermelhas e alecrim do Art Cucina',
    label: 'Drinks Autorais',
  },
  {
    src: '/gastronomia/IMG_4645.webp',
    alt: 'Garrafa de vinho D.V. Catena Malbec na mesa do Art Cucina',
    label: 'Rótulos Selecionados',
  },
  {
    src: '/gastronomia/IMG_4643.webp',
    alt: 'Peixe grelhado com nhoque dourado e manjericão fresco',
    label: 'Peixes & Frutos do Mar',
  },
  {
    src: '/gastronomia/IMG_4642.webp',
    alt: 'Pasta gratinada com molho e drink especial em jantar romântico',
    label: 'Massas Artesanais',
  },
  {
    src: '/gastronomia/IMG_5289.webp',
    alt: 'Ambiente sofisticado do restaurante Art Cucina na serra',
    label: 'Ambiente Sofisticado',
  },
];

function DishCard({ src, alt, label, className }: { src: string; alt: string; label: string; className?: string }) {
  return (
    <div className={`group relative overflow-hidden ${className ?? ''}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="absolute bottom-4 left-4 text-white font-display text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {label}
      </span>
    </div>
  );
}

export default function FoodGallerySection() {
  const [featured, ...rest] = dishes;

  return (
    <section aria-label="Pratos e drinks do Art Cucina" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeInUp className="text-center mb-14">
          <img src="/logo-artcucina.webp" alt="Art Cucina" className="h-20 md:h-28 mb-4 mx-auto" />
          <p className="section-eyebrow">Nosso Menu</p>
          <h2 className="section-title">gastronomia exclusiva</h2>
          <p className="text-text-medium max-w-2xl mx-auto mt-4 font-body">
            Pratos artesanais, drinks autorais e rótulos selecionados —
            cada detalhe pensado para tornar sua experiência inesquecível.
          </p>
          <div className="w-16 h-px bg-accent mx-auto mt-6" />
        </FadeInUp>

        {/*
          Desktop (lg): 3 cols × 3 explicit rows of 220px.
          Featured spans 2 cols + 2 rows = 220×2 + 16px gap = 456px.
          Bottom row: 3 remaining images.
          Tablet (sm): 2 cols, auto rows.
          Mobile: 1 col stack.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:[grid-template-rows:220px_220px_220px]">
          {/* Featured — 2 cols × 2 rows on desktop */}
          <FadeInUp className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <DishCard
              src={featured.src}
              alt={featured.alt}
              label={featured.label}
              className="h-[300px] sm:h-[380px] lg:h-full"
            />
          </FadeInUp>

          {/* Right column top */}
          <FadeInUp delay={0.06}>
            <DishCard
              src={rest[0].src}
              alt={rest[0].alt}
              label={rest[0].label}
              className="h-[260px] sm:h-[280px] lg:h-full"
            />
          </FadeInUp>

          {/* Right column bottom */}
          <FadeInUp delay={0.12}>
            <DishCard
              src={rest[1].src}
              alt={rest[1].alt}
              label={rest[1].label}
              className="h-[260px] sm:h-[280px] lg:h-full"
            />
          </FadeInUp>

          {/* Bottom row — 3 images */}
          {rest.slice(2).map((dish, i) => (
            <FadeInUp key={dish.src} delay={0.18 + i * 0.06}>
              <DishCard
                src={dish.src}
                alt={dish.alt}
                label={dish.label}
                className="h-[260px] sm:h-[280px] lg:h-full"
              />
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
