import { Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-primary text-white text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left — Contact */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+552127480222"
            className="flex items-center gap-2 hover:text-cream transition-colors"
          >
            <Phone size={14} />
            <span>(21) 2748-0222</span>
          </a>
          <a
            href="mailto:pousadaartgreen@gmail.com"
            className="flex items-center gap-2 hover:text-cream transition-colors"
          >
            <Mail size={14} />
            <span>pousadaartgreen@gmail.com</span>
          </a>
        </div>

        {/* Right — Social */}
        <div className="flex items-center gap-4 ml-auto">
          <a
            href="https://instagram.com/pousadaartgreen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-cream transition-colors"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://wa.me/5521969688419"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-cream transition-colors"
          >
            <MessageCircle size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
