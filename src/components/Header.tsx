import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#374E38] py-2 shadow-md' : 'bg-primary py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-display text-2xl md:text-3xl font-bold text-white">
            Art Green
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold text-white/70">
            Pousada
          </span>
        </a>

        {/* Desktop Nav — centered */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-80 text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right — CTA */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/5521969688419"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-reserve"
          >
            Reservar
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? (
            <X size={26} className="text-white" />
          ) : (
            <Menu size={26} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white shadow-lg border-t">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-dark text-sm font-medium py-3 border-b border-gray-100 last:border-0 hover:text-primary-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5521969688419"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-reserve mt-3 text-center"
            >
              Reservar
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
