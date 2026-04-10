import { Instagram, Mail } from 'lucide-react';
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
                href="https://wa.me/552127480222"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 bg-white/10 flex items-center justify-center hover:bg-primary-medium transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 175.216 175.552"
                  className="w-[18px] h-[18px]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M87.882 14.139c-40.626 0-73.604 32.978-73.618 73.527a73.24 73.24 0 0 0 9.821 36.738L14.268 161.5l37.864-9.937a73.5 73.5 0 0 0 35.171 8.97h.031c40.589 0 73.588-32.98 73.6-73.529.007-19.636-7.629-38.104-21.498-51.985-13.869-13.882-32.312-21.524-51.554-21.88zm-.048 134.58h-.025a61.06 61.06 0 0 1-31.12-8.515l-2.232-1.325-23.139 6.069 6.173-22.548-1.455-2.313a60.97 60.97 0 0 1-9.349-32.591c.011-33.852 27.555-61.39 61.444-61.39 16.378.038 31.81 6.434 43.38 18.015 11.57 11.582 17.932 26.975 17.926 43.351-.013 33.856-27.559 61.396-61.403 61.396v-.149zm33.688-45.97c-1.846-.923-10.924-5.39-12.616-6.006-1.693-.616-2.924-.923-4.155.923-1.231 1.846-4.77 6.006-5.848 7.237-1.078 1.231-2.155 1.385-3.999.462-1.846-.923-7.791-2.871-14.84-9.153-5.485-4.89-9.189-10.932-10.267-12.778-1.078-1.846-.115-2.846.81-3.765.831-.826 1.846-2.155 2.77-3.231.923-1.078 1.231-1.846 1.846-3.078.616-1.231.308-2.309-.154-3.231-.462-.923-4.155-10.016-5.694-13.714-1.5-3.6-3.023-3.113-4.155-3.17l-3.539-.059a6.79 6.79 0 0 0-4.924 2.309c-1.693 1.846-6.463 6.314-6.463 15.408s6.617 17.869 7.54 19.1c.923 1.231 13.022 19.882 31.548 27.878 4.405 1.902 7.844 3.036 10.524 3.887 4.423 1.405 8.449 1.207 11.628.732 3.547-.53 10.924-4.466 12.462-8.778 1.539-4.312 1.539-8.009 1.078-8.778-.462-.77-1.693-1.231-3.539-2.154z" />
                </svg>
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
                <a href="https://wa.me/552127480222" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-3.5 h-3.5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M87.882 14.139c-40.626 0-73.604 32.978-73.618 73.527a73.24 73.24 0 0 0 9.821 36.738L14.268 161.5l37.864-9.937a73.5 73.5 0 0 0 35.171 8.97h.031c40.589 0 73.588-32.98 73.6-73.529.007-19.636-7.629-38.104-21.498-51.985-13.869-13.882-32.312-21.524-51.554-21.88zm-.048 134.58h-.025a61.06 61.06 0 0 1-31.12-8.515l-2.232-1.325-23.139 6.069 6.173-22.548-1.455-2.313a60.97 60.97 0 0 1-9.349-32.591c.011-33.852 27.555-61.39 61.444-61.39 16.378.038 31.81 6.434 43.38 18.015 11.57 11.582 17.932 26.975 17.926 43.351-.013 33.856-27.559 61.396-61.403 61.396v-.149zm33.688-45.97c-1.846-.923-10.924-5.39-12.616-6.006-1.693-.616-2.924-.923-4.155.923-1.231 1.846-4.77 6.006-5.848 7.237-1.078 1.231-2.155 1.385-3.999.462-1.846-.923-7.791-2.871-14.84-9.153-5.485-4.89-9.189-10.932-10.267-12.778-1.078-1.846-.115-2.846.81-3.765.831-.826 1.846-2.155 2.77-3.231.923-1.078 1.231-1.846 1.846-3.078.616-1.231.308-2.309-.154-3.231-.462-.923-4.155-10.016-5.694-13.714-1.5-3.6-3.023-3.113-4.155-3.17l-3.539-.059a6.79 6.79 0 0 0-4.924 2.309c-1.693 1.846-6.463 6.314-6.463 15.408s6.617 17.869 7.54 19.1c.923 1.231 13.022 19.882 31.548 27.878 4.405 1.902 7.844 3.036 10.524 3.887 4.423 1.405 8.449 1.207 11.628.732 3.547-.53 10.924-4.466 12.462-8.778 1.539-4.312 1.539-8.009 1.078-8.778-.462-.77-1.693-1.231-3.539-2.154z"/></svg>
                  (21) 2748-0222
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/5521969688419"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-3.5 h-3.5 shrink-0" fill="currentColor" aria-hidden="true"><path d="M87.882 14.139c-40.626 0-73.604 32.978-73.618 73.527a73.24 73.24 0 0 0 9.821 36.738L14.268 161.5l37.864-9.937a73.5 73.5 0 0 0 35.171 8.97h.031c40.589 0 73.588-32.98 73.6-73.529.007-19.636-7.629-38.104-21.498-51.985-13.869-13.882-32.312-21.524-51.554-21.88zm-.048 134.58h-.025a61.06 61.06 0 0 1-31.12-8.515l-2.232-1.325-23.139 6.069 6.173-22.548-1.455-2.313a60.97 60.97 0 0 1-9.349-32.591c.011-33.852 27.555-61.39 61.444-61.39 16.378.038 31.81 6.434 43.38 18.015 11.57 11.582 17.932 26.975 17.926 43.351-.013 33.856-27.559 61.396-61.403 61.396v-.149zm33.688-45.97c-1.846-.923-10.924-5.39-12.616-6.006-1.693-.616-2.924-.923-4.155.923-1.231 1.846-4.77 6.006-5.848 7.237-1.078 1.231-2.155 1.385-3.999.462-1.846-.923-7.791-2.871-14.84-9.153-5.485-4.89-9.189-10.932-10.267-12.778-1.078-1.846-.115-2.846.81-3.765.831-.826 1.846-2.155 2.77-3.231.923-1.078 1.231-1.846 1.846-3.078.616-1.231.308-2.309-.154-3.231-.462-.923-4.155-10.016-5.694-13.714-1.5-3.6-3.023-3.113-4.155-3.17l-3.539-.059a6.79 6.79 0 0 0-4.924 2.309c-1.693 1.846-6.463 6.314-6.463 15.408s6.617 17.869 7.54 19.1c.923 1.231 13.022 19.882 31.548 27.878 4.405 1.902 7.844 3.036 10.524 3.887 4.423 1.405 8.449 1.207 11.628.732 3.547-.53 10.924-4.466 12.462-8.778 1.539-4.312 1.539-8.009 1.078-8.778-.462-.77-1.693-1.231-3.539-2.154z"/></svg>
                  (21) 96968-8419
                </a>
              </p>
              <p>
                <a
                  href="mailto:pousadaartgreen@gmail.com"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail size={14} className="shrink-0" />
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
