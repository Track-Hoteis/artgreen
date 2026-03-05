import FadeInUp from '@/components/animations/FadeInUp';

const mosaicImages = [
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-25.jpg',
    alt: 'Um ganso branco proximo a agua',
    featured: true,
  },
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-27.jpg',
    alt: 'Homem ao lado de um cavalo',
  },
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-34.jpg',
    alt: 'Cabra no campo gramado',
  },
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-06.jpg',
    alt: 'Passaro amarelo na gaiola',
  },
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/4F3A0831.JPG',
    alt: 'Vista da area de lazer',
    featured: true,
  },
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-05.jpg',
    alt: 'Mulher montada a cavalo',
  },
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/IMG_6358.jpg',
    alt: 'Cavalos no campo gramado',
  },
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-18.jpg',
    alt: 'Animais na fazendinha',
  },
];

function GalleryCard({
  src,
  alt,
  className,
  loading = 'lazy',
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}) {
  return (
    <article className={`group relative overflow-hidden bg-black ${className ?? ''}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
    </article>
  );
}

export default function FazendinhaSection() {
  const [heroImage, ...restImages] = mosaicImages;
  const sideImages = restImages.slice(0, 4);
  const bottomImages = restImages.slice(4);

  return (
    <section id="fazendinha" className="py-20 md:py-28 bg-farmgreen">
      <div className="max-w-7xl mx-auto px-4">
        <FadeInUp className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-eyebrow">Diversao para toda a familia</p>
          <h2 className="section-title">Nossa Fazendinha</h2>
          <p className="section-subtitle mx-auto">
            Um espaco encantador para aproximar criancas e adultos dos animais,
            com atividades leves e contato direto com a natureza.
          </p>
        </FadeInUp>

        <div className="space-y-3 md:space-y-4">
          <div className="grid lg:grid-cols-12 gap-3 md:gap-4">
            <FadeInUp className="lg:col-span-7">
              <GalleryCard
                src={heroImage.src}
                alt={heroImage.alt}
                loading="eager"
                className="h-[300px] sm:h-[380px] lg:h-[560px]"
              />
            </FadeInUp>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3 md:gap-4 auto-rows-[130px] sm:auto-rows-[170px] lg:auto-rows-[272px]">
              {sideImages.map((img, index) => (
                <FadeInUp key={img.src} delay={index * 0.05}>
                  <GalleryCard src={img.src} alt={img.alt} className="h-full" />
                </FadeInUp>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {bottomImages.map((img, index) => (
              <FadeInUp key={img.src} delay={0.1 + index * 0.05}>
                <GalleryCard
                  src={img.src}
                  alt={img.alt}
                  className="h-[220px] sm:h-[240px] lg:h-[260px]"
                />
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
