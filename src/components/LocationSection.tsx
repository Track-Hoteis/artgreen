import { MapPin, Phone, Mail, MessageCircle, Clock, Car } from 'lucide-react';

const distances = [
  { icon: MapPin, text: '500 m do Parque Municipal' },
  { icon: Car, text: '12 km do centro de Teresópolis' },
  { icon: Clock, text: '105 km do Aeroporto do Galeão' },
];

export default function LocationSection() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div>
            <p className="section-eyebrow">Como Chegar</p>
            <h2 className="section-title">Venha Nos Visitar</h2>

            {/* Address */}
            <div className="flex items-start gap-3 mb-6">
              <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
              <p className="text-text-medium text-sm leading-relaxed">
                Greenland, Estrada Rincão do Vovo, s/n — Prata, Teresópolis — RJ,
                CEP 25980-010
              </p>
            </div>

            {/* Distances */}
            <div className="space-y-3 mb-8">
              {distances.map((d) => (
                <div key={d.text} className="flex items-center gap-3">
                  <d.icon size={16} className="text-primary flex-shrink-0" />
                  <span className="text-text-medium text-sm">{d.text}</span>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="space-y-3 mb-8">
              <a
                href="tel:+552127480222"
                className="flex items-center gap-3 text-dark text-sm hover:text-primary transition-colors"
              >
                <Phone size={16} className="text-primary" />
                (21) 2748-0222
              </a>
              <a
                href="https://wa.me/5521969688419"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-dark text-sm hover:text-primary transition-colors"
              >
                <MessageCircle size={16} className="text-primary" />
                (21) 96968-8419
              </a>
              <a
                href="mailto:pousadaartgreen@gmail.com"
                className="flex items-center gap-3 text-dark text-sm hover:text-primary transition-colors"
              >
                <Mail size={16} className="text-primary" />
                pousadaartgreen@gmail.com
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden shadow-lg aspect-[4/3]">
            <iframe
              title="Localização Pousada Art Green"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.123!2d-43.0889!3d-22.4112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI0JzQwLjMiUyA0M8KwMDUnMjAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
