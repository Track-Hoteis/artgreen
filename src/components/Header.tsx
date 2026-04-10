import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { label: 'Acomodações', to: '/acomodacoes' },
  { label: 'Experiências', to: '/experiencias' },
  { label: 'Gastronomia', to: '/gastronomia' },
  { label: 'Contato', to: '/contato' },
];

function useScrolled(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}

function usePastHero() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('inicio');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return pastHero;
}

export default function Header() {
  const scrolled = useScrolled();
  usePastHero();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [open, setOpen] = useState(false);

  const showReserveBtn = scrolled || !isHome;

  useEffect(() => {
    const closeOnHashChange = () => setOpen(false);
    window.addEventListener('hashchange', closeOnHashChange);
    return () => window.removeEventListener('hashchange', closeOnHashChange);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-[#374E38] py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
        <Link to="/" className="justify-self-start" aria-label="Art Green">
          <img
            src="/logo.webp"
            alt="Art Green"
            width={152}
            height={48}
            className="h-11 md:h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9 justify-self-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-body uppercase text-[15px] font-medium tracking-[0.08em] text-white/90 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div
          className={`hidden lg:flex items-center gap-4 justify-self-end transition-all duration-500 ease-out ${
            showReserveBtn
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <a
            href="https://www.instagram.com/artgreenpousada/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Art Green"
            className="text-white/80 hover:text-white transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://reservas.artgreenpousada.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-reserve"
          >
            Reservar Agora
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href="https://www.instagram.com/artgreenpousada/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Art Green"
            className="p-2 text-white/80 hover:text-white transition-colors"
          >
            <Instagram size={22} />
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2" aria-label="Abrir menu">
                <Menu size={26} className="text-white" />
              </button>
            </SheetTrigger>

          <SheetContent>
            <div className="mt-10 flex h-full flex-col">
              <div className="mb-10">
                <Link to="/" onClick={() => setOpen(false)}>
                  <img
                    src="/logo.webp"
                    alt="Art Green"
                    width={152}
                    height={48}
                    className="h-12 w-auto object-contain"
                  />
                </Link>
              </div>

              <nav className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="font-body text-xl uppercase tracking-wide text-white/90 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <a
                href="https://www.instagram.com/artgreenpousada/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 border border-white/20 px-6 py-3.5 text-white/90 hover:text-white hover:border-white/50 transition-colors mt-8 uppercase tracking-wider text-sm font-body font-medium"
              >
                <Instagram size={18} />
                Instagram
              </a>
              <a
                href="https://reservas.artgreenpousada.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-reserve mt-4 text-center"
              >
                Reservar Agora
              </a>
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  );
}
