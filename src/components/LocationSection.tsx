import { Car, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

import FadeInUp from '@/components/animations/FadeInUp';

const distances = [
  '500 m do Parque Municipal',
  '12 km do centro de Teresopolis',
  '105 km do Aeroporto do Galeao',
];

export default function LocationSection() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeInUp>
            <p className="section-eyebrow">Como chegar</p>
            <h2 className="section-title">Venha nos visitar</h2>

            <div className="bg-cream p-6 md:p-7 mb-6">
              <div className="flex items-start gap-3 mb-5">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-text-medium text-sm leading-relaxed">
                  Greenland, Estrada Rincao do Vovo, s/n - Prata, Teresopolis -
                  RJ, CEP 25980-010
                </p>
              </div>

              <div className="space-y-2 mb-6">
                {distances.map((item) => (
                  <p key={item} className="text-text-primary text-sm flex items-center gap-2">
                    <Car size={14} className="text-primary" /> {item}
                  </p>
                ))}
              </div>

              <div className="space-y-3 text-sm">
                <a
                  href="tel:+552127480222"
                  className="flex items-center gap-2 text-text-primary hover:text-primary transition-colors"
                >
                  <Phone size={14} className="text-primary" /> (21) 2748-0222
                </a>
                <a
                  href="https://wa.me/5521969688419"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-primary hover:text-primary transition-colors"
                >
                  <MessageCircle size={14} className="text-primary" /> (21)
                  96968-8419
                </a>
                <a
                  href="mailto:pousadaartgreen@gmail.com"
                  className="flex items-center gap-2 text-text-primary hover:text-primary transition-colors"
                >
                  <Mail size={14} className="text-primary" />
                  pousadaartgreen@gmail.com
                </a>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="overflow-hidden shadow-lg aspect-[4/3]">
              <iframe
                title="Localizacao Pousada Art Green"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.123!2d-43.0889!3d-22.4112!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI0JzQwLjMiUyA0M8KwMDUnMjAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
