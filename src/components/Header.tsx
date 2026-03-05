import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { label: 'Acomodações', href: '#acomodacoes' },
  { label: 'Experiências', href: '#experiencias' },
  { label: 'Gastronomia', href: '#gastronomia' },
  { label: 'Contato', href: '#contato' },
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

export default function Header() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnHashChange = () => setOpen(false);
    window.addEventListener('hashchange', closeOnHashChange);
    return () => window.removeEventListener('hashchange', closeOnHashChange);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#374E38] py-3 shadow-lg animate-[slideDown_0.4s_ease]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
        <a href="#" className="flex flex-col leading-tight justify-self-start">
          <span className="font-display text-2xl md:text-3xl font-bold text-white tracking-wide">
            Art Green
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.28em] font-medium text-white/70">
            Pousada
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9 justify-self-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display uppercase text-[15px] font-medium tracking-[0.08em] text-white/90 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block justify-self-end">
          <a
            href="https://reservas.artgreenpousada.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-reserve"
          >
            Reservar Agora
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="lg:hidden p-2" aria-label="Abrir menu">
              <Menu size={26} className="text-white" />
            </button>
          </SheetTrigger>

          <SheetContent>
            <div className="mt-10 flex h-full flex-col">
              <div className="mb-10">
                <p className="font-display text-2xl font-bold">Art Green</p>
                <p className="text-xs uppercase tracking-[0.25em] text-white/65">
                  Pousada
                </p>
              </div>

              <nav className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-xl uppercase tracking-wide text-white/90 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <a
                href="https://reservas.artgreenpousada.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-reserve mt-10 text-center"
              >
                Reservar Agora
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
