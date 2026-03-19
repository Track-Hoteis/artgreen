import { MapPin, Phone, Mail, MessageCircle, Navigation } from 'lucide-react';

import PageHero from '@/components/PageHero';
import FadeInUp from '@/components/animations/FadeInUp';

const distances = [
  { label: 'Parque Municipal de Teresopolis', distance: '500m' },
  { label: 'Centro de Teresopolis', distance: '12km' },
  { label: 'Aeroporto do Galeao (GIG)', distance: '105km' },
];

export default function ContactPage() {
  return (
    <main className="bg-cream">
      <PageHero
        title="contato"
        image="https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-18.jpg"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contato' },
        ]}
      />

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <FadeInUp className="text-center mb-14">
            <p className="section-eyebrow">Fale Conosco</p>
            <h2 className="section-title">entre em contato</h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <FadeInUp>
              <div className="bg-white p-8 text-center h-full">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-5 text-primary">
                  <MapPin size={28} />
                </div>
                <h3 className="font-display text-xl text-text-primary mb-3">
                  endereco
                </h3>
                <p className="text-text-medium text-sm font-body leading-relaxed">
                  Greenland, Estrada Rincao do Vovo, s/n
                  <br />
                  Prata, Teresopolis - RJ
                  <br />
                  CEP 25980-010
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.08}>
              <div className="bg-white p-8 text-center h-full">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-5 text-primary">
                  <Phone size={28} />
                </div>
                <h3 className="font-display text-xl text-text-primary mb-3">
                  telefone
                </h3>
                <div className="space-y-2 text-text-medium text-sm font-body">
                  <p>
                    <a
                      href="tel:+552127480222"
                      className="hover:text-primary transition-colors"
                    >
                      (21) 2748-0222
                    </a>
                  </p>
                  <p className="flex items-center justify-center gap-1">
                    <MessageCircle size={14} />
                    <a
                      href="https://wa.me/5521969688419"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      (21) 96968-8419
                    </a>
                  </p>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.16}>
              <div className="bg-white p-8 text-center h-full">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-5 text-primary">
                  <Mail size={28} />
                </div>
                <h3 className="font-display text-xl text-text-primary mb-3">
                  email
                </h3>
                <p className="text-text-medium text-sm font-body">
                  <a
                    href="mailto:pousadaartgreen@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    pousadaartgreen@gmail.com
                  </a>
                </p>
              </div>
            </FadeInUp>
          </div>

          {/* Contact Form + Map */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Form */}
            <FadeInUp>
              <div className="bg-white p-8 md:p-10">
                <h3 className="font-display text-2xl text-text-primary mb-6">
                  envie uma mensagem
                </h3>
                <form
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.open(
                      'https://wa.me/5521969688419?text=Olá! Gostaria de mais informações sobre a Pousada Art Green.',
                      '_blank'
                    );
                  }}
                >
                  <div>
                    <label className="block font-body text-xs uppercase tracking-wider text-text-medium mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-200 px-4 py-3 font-body text-sm focus:border-primary focus:outline-none transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-xs uppercase tracking-wider text-text-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full border border-gray-200 px-4 py-3 font-body text-sm focus:border-primary focus:outline-none transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs uppercase tracking-wider text-text-medium mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        className="w-full border border-gray-200 px-4 py-3 font-body text-sm focus:border-primary focus:outline-none transition-colors"
                        placeholder="(21) 99999-9999"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-body text-xs uppercase tracking-wider text-text-medium mb-2">
                      Mensagem
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full border border-gray-200 px-4 py-3 font-body text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>
                  <button type="submit" className="btn-reserve w-full text-center">
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </FadeInUp>

            {/* Map */}
            <FadeInUp delay={0.1}>
              <div className="bg-white p-2 h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.5!2d-43.0889!3d-22.4112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI0JzQwLjMiUyA0M8KwMDUnMjAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1!5m2!1spt-BR!2sbr"
                  className="w-full h-full min-h-[400px] border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Pousada Art Green"
                />
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Distances */}
      <section className="py-12 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <FadeInUp className="text-center mb-8">
            <h3 className="font-display text-2xl text-text-primary">
              como chegar
            </h3>
          </FadeInUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {distances.map((d, i) => (
              <FadeInUp key={d.label} delay={i * 0.08}>
                <div className="flex items-center gap-3 bg-white p-5">
                  <Navigation size={18} className="text-accent shrink-0" />
                  <div>
                    <p className="font-body text-sm text-text-primary font-medium">
                      {d.distance}
                    </p>
                    <p className="font-body text-xs text-text-medium">
                      {d.label}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              reserve sua estadia
            </h2>
            <p className="text-white/70 font-body mb-8 max-w-xl mx-auto">
              Estamos prontos para recebe-lo. Reserve agora e viva a
              experiência Art Green.
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
