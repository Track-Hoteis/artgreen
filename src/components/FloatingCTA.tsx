import { useCallback, useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CalendarDays, X } from 'lucide-react';

import { BookingFormContent } from '@/components/HeroSection';

const RESERVE_HOST = 'reservas.artgreenpousada.com.br';
const MD_BREAKPOINT = 768;

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  /* Show floating button after scrolling past hero */
  useEffect(() => {
    const hero = document.getElementById('inicio');
    if (!hero) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.15 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  /* On mobile, intercept ALL reservation links and open the modal instead */
  const interceptReserveLinks = useCallback(
    (e: MouseEvent) => {
      if (window.innerWidth >= MD_BREAKPOINT) return;

      const anchor = (e.target as HTMLElement).closest?.('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;

      try {
        const url = new URL(anchor.href);
        if (url.hostname === RESERVE_HOST) {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }
      } catch {
        // ignore invalid URLs
      }
    },
    [],
  );

  useEffect(() => {
    document.addEventListener('click', interceptReserveLinks, true);
    return () => document.removeEventListener('click', interceptReserveLinks, true);
  }, [interceptReserveLinks]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          aria-label="Reservar agora"
          className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden btn-reserve shadow-2xl transition-all duration-300 ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <CalendarDays size={17} className="mr-2" />
          Reservar
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 mx-auto max-w-md bg-[#333333] px-6 py-8 shadow-2xl overflow-y-auto max-h-[90vh]">
          <Dialog.Close className="absolute right-4 top-4 text-white/70 hover:text-white transition-colors">
            <X size={20} />
            <span className="sr-only">Fechar</span>
          </Dialog.Close>
          <BookingFormContent />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
