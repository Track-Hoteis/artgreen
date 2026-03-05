const mosaicImages = [
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-25.jpg',
    alt: 'Um ganso branco próximo à água',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-27.jpg',
    alt: 'Homem ao lado de um cavalo',
    span: '',
  },
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-34.jpg',
    alt: 'Cabra no campo gramado',
    span: '',
  },
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-06.jpg',
    alt: 'Pássaro amarelo na gaiola',
    span: '',
  },
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/4F3A0831.JPG',
    alt: 'Vista da área de lazer',
    span: 'md:col-span-2',
  },
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-05.jpg',
    alt: 'Mulher montada a cavalo',
    span: '',
  },
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/IMG_6358.jpg',
    alt: 'Cavalos no campo gramado',
    span: '',
  },
  {
    src: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-18.jpg',
    alt: 'Animais na fazendinha',
    span: '',
  },
];

export default function FazendinhaSection() {
  return (
    <section id="fazendinha" className="py-20 md:py-28 bg-farmgreen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-eyebrow">Diversão para Toda a Família</p>
          <h2 className="section-title">Nossa Fazendinha</h2>
          <p className="section-subtitle mx-auto">
            A nossa Fazendinha é um espaço encantador, onde você pode ver e
            interagir com diversos animais. Perfeita para todas as idades, essa
            experiência oferece momentos de diversão e conexão com a natureza.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {mosaicImages.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
