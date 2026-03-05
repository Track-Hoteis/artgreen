import { Instagram, MessageCircle } from 'lucide-react';

const quickLinks = [
  { label: 'A Pousada', href: '#a-pousada' },
  { label: 'Acomodações', href: '#acomodacoes' },
  { label: 'Experiências', href: '#experiencias' },
  { label: 'Pacotes', href: '#pacotes' },
  { label: 'Gastronomia', href: '#gastronomia' },
  { label: 'Fazendinha', href: '#fazendinha' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Col 1 — Logo + Description + Social */}
          <div>
            <div className="mb-4">
              <h3 className="font-display text-2xl font-bold">Art Green</h3>
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                Pousada
              </p>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Um refúgio acolhedor em meio à natureza da serra fluminense.
              Conforto, lazer e experiências inesquecíveis para toda a família.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/pousadaartgreen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-medium transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/5521969688419"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-medium transition-colors"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Col 2 — Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 text-sm hover:text-white md:hover:translate-x-1 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Contato
            </h4>
            <div className="space-y-3 text-sm text-white/70 break-words">
              <p>
                Greenland, Estrada Rincão do Vovo, s/n
                <br />
                Prata, Teresópolis — RJ
                <br />
                CEP 25980-010
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
                <a href="mailto:pousadaartgreen@gmail.com" className="hover:text-white transition-colors break-all">
                  pousadaartgreen@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-5 text-center text-white/50 text-xs">
          © 2025 Pousada Art Green. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
