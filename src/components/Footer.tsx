import { Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

import FadeInUp from '@/components/animations/FadeInUp';

const quickLinks = [
  { label: 'A Pousada', to: '/' },
  { label: 'Acomodações', to: '/acomodacoes' },
  { label: 'Experiências', to: '/experiencias' },
  { label: 'Pacotes', to: '/pacotes' },
  { label: 'Gastronomia', to: '/gastronomia' },
  { label: 'Contato', to: '/contato' },
];

const gallery = [
  '/galeria/galeria-1.webp',
  '/galeria/galeria-2.webp',
  '/galeria/galeria-3.webp',
  '/galeria/galeria-4.webp',
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white mobile-center-footer">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <FadeInUp>
            <div className="mb-4">
              <img
                src="/logo.webp"
                alt="Art Green"
                width={152}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Um refúgio acolhedor em meio à natureza da serra fluminense,
              com conforto, lazer e experiências inesquecíveis.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/artgreenpousada/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 bg-white/10 flex items-center justify-center hover:bg-primary-medium transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/5521969688419"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 bg-white/10 flex items-center justify-center hover:bg-primary-medium transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.05}>
            <h3 className="font-display text-xl mb-4">Links Rápidos</h3>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h3 className="font-display text-xl mb-4">Contato</h3>
            <div className="space-y-3 text-sm text-white/70">
              <p>
                Estrada Rincão do Vovô, s/n
                <br />
                Prata, Teresópolis - RJ
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
            <h3 className="font-display text-xl mb-4">Galeria</h3>
            <div className="grid grid-cols-2 gap-2">
              {gallery.map((image) => (
                <div key={image} className="aspect-square overflow-hidden">
                  <img
                    src={image}
                    alt="Galeria Art Green"
                    loading="lazy"
                    width={200}
                    height={200}
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
