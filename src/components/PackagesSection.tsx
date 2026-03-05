import { ArrowUpRight } from 'lucide-react';

const packages = [
  {
    id: 1,
    tag: 'Páscoa',
    title: 'Páscoa 2026',
    description: '02 – 05 de Abril (3 diárias)',
    imageUrl:
      'https://lirp.cdn-website.com/8406003a/dms3rep/multi/opt/Banner+site+%2834%29-1920w.png',
    href: 'https://reservas.artgreenpousada.com.br/',
  },
  {
    id: 2,
    tag: 'Experiência Única',
    title: 'Bolhas & Fiori',
    description: 'Evento Exclusivo para Adultos',
    imageUrl:
      'https://lirp.cdn-website.com/8406003a/dms3rep/multi/opt/Banner+site+%2833%29-1920w.png',
    href: 'https://reservas.artgreenpousada.com.br/',
  },
  {
    id: 3,
    tag: 'Feriado',
    title: 'Feriado de Tiradentes',
    description: 'Dias para desacelerar a dois',
    imageUrl:
      'https://lirp.cdn-website.com/8406003a/dms3rep/multi/opt/Banner+site+%2835%29-1920w.png',
    href: 'https://reservas.artgreenpousada.com.br/',
  },
];

export default function PackagesSection() {
  return (
    <section id="pacotes" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-eyebrow">Pacotes & Informativos</p>
          <h2 className="section-title">Ofertas Especiais</h2>
          <p className="section-subtitle mx-auto">
            Confira nossos pacotes exclusivos e aproveite experiências
            inesquecíveis na Pousada Art Green.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <a
              key={pkg.id}
              href={pkg.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden aspect-[3/4] bg-black"
            >
              <img
                src={pkg.imageUrl}
                alt={pkg.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-2">
                  {pkg.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-1">
                  {pkg.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">{pkg.description}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white border border-white/30 px-5 py-2.5 group-hover:bg-white group-hover:text-dark transition-all duration-300">
                  Cotação
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
