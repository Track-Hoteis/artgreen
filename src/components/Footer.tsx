import { Instagram, MessageCircle } from 'lucide-react';

import FadeInUp from '@/components/animations/FadeInUp';

const quickLinks = [
  { label: 'A Pousada', href: '#a-pousada' },
  { label: 'Acomodacoes', href: '#acomodacoes' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Pacotes', href: '#pacotes' },
  { label: 'Gastronomia', href: '#gastronomia' },
  { label: 'Contato', href: '#contato' },
];

const gallery = [
  'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-25.jpg',
  'https://irp.cdn-website.com/8406003a/dms3rep/multi/4F3A0831.JPG',
  'https://irp.cdn-website.com/8406003a/dms3rep/multi/IMG_6358.jpg',
  'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-18.jpg',
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <FadeInUp>
            <div className="mb-4">
              <h3 className="font-display text-3xl">Art Green</h3>
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                Pousada
              </p>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Um refugio acolhedor em meio a natureza da serra fluminense,
              com conforto, lazer e experiencias inesqueciveis.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/pousadaartgreen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/10 flex items-center justify-center hover:bg-primary-medium transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/5521969688419"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 bg-white/10 flex items-center justify-center hover:bg-primary-medium transition-colors"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.05}>
            <h4 className="font-display text-xl mb-4">Links Rapidos</h4>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h4 className="font-display text-xl mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-white/70">
              <p>
                Greenland, Estrada Rincao do Vovo, s/n
                <br />
                Prata, Teresopolis - RJ
              </p>
              <p>
                <a href="tel:+552127480222" className="hover:text-white transition-colors">
                  (21) 2748-0222
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/5521969688419"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (21) 96968-8419
                </a>
              </p>
              <p>
                <a
                  href="mailto:pousadaartgreen@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  pousadaartgreen@gmail.com
                </a>
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <h4 className="font-display text-xl mb-4">Galeria</h4>
            <div className="grid grid-cols-2 gap-2">
              {gallery.map((image) => (
                <div key={image} className="aspect-square overflow-hidden">
                  <img
                    src={image}
                    alt="Galeria Art Green"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-5 text-center text-white/50 text-xs">
          © 2026 Pousada Art Green. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
