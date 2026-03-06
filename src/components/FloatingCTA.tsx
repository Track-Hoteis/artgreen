import { CalendarDays } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <a
      href="https://reservas.artgreenpousada.com.br/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar agora"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden btn-reserve shadow-2xl"
    >
      <CalendarDays size={17} className="mr-2" />
      Reservar
    </a>
  );
}
