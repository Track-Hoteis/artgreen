import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5521969688419"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-4 right-3 lg:bottom-6 lg:right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg lg:hover:scale-110 lg:hover:shadow-xl transition-all duration-300"
    >
      <MessageCircle size={28} />
    </a>
  );
}
