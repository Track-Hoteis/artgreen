import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import FadeInUp from '@/components/animations/FadeInUp';

const packages = [
  {
    id: 1,
    tag: 'Pascoa',
    title: 'Pascoa 2026',
    description: '02 - 05 de Abril (3 diarias)',
    imageUrl:
      'https://lirp.cdn-website.com/8406003a/dms3rep/multi/opt/Banner+site+%2834%29-1920w.png',
    href: 'https://reservas.artgreenpousada.com.br/',
  },
  {
    id: 2,
    tag: 'Experiencia Unica',
    title: 'Bolhas & Fiori',
    description: 'Evento exclusivo para adultos',
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
        <FadeInUp className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-eyebrow">Pacotes e Informativos</p>
          <h2 className="section-title">Ofertas Especiais</h2>
          <p className="section-subtitle mx-auto">
            Confira nossos pacotes exclusivos para viver experiencias
            inesqueciveis na serra.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <FadeInUp key={pkg.id} delay={index * 0.06}>
              <motion.a
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-white/75 mb-2">
                    {pkg.tag}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-white leading-tight mb-1">
                    {pkg.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">{pkg.description}</p>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-white border border-white/40 px-5 py-2.5 group-hover:bg-white group-hover:text-dark transition-all duration-300">
                    Cotacao
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </motion.a>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
