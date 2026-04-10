import { ArrowUpRight } from 'lucide-react';

import FadeInUp from '@/components/animations/FadeInUp';
import VideoLazy from '@/components/VideoLazy';
import BookingForm from '@/components/booking/BookingForm';

/* ── BookingFormContent (reused by FloatingCTA) ── */

export function BookingFormContent() {
  return <BookingForm variant="dark" showTitle />;
}

export default function HeroSection() {
  return (
    <section className="bg-[#374E38] pt-28 pb-0 lg:pt-32 relative z-20" id="inicio">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start pb-14 lg:pb-16">
          <FadeInUp>
            <p className="inline-flex items-center border border-white/20 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/90 mb-8">
              Teresópolis, RJ · Serra Fluminense
            </p>
            <h1 className="font-display text-white text-[2.05rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              Descubra Seu Refúgio
              <br />
              <span className="text-[#D5E5D1]">na Serra</span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.1} className="lg:pt-12 lg:pl-8">
            <p className="text-white/80 text-sm md:text-lg leading-relaxed max-w-lg mb-9">
              Sofisticação, natureza e silêncio na medida certa para você viver
              dias de descanso profundo. Um destino exclusivo para casais,
              famílias e experiências memoráveis na montanha.
            </p>
            <a
              href="https://reservas.artgreenpousada.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-reserve inline-flex items-center gap-2"
            >
              Reservar
              <ArrowUpRight size={16} />
            </a>
          </FadeInUp>
        </div>
      </div>

      {/* Bottom row: hotelhub-like proportions */}
      <div className="relative pb-8 lg:pb-0 lg:pr-[clamp(16px,3vw,64px)]">
        {/* Cream background bleeding up from the About section */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-cream pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_460px] gap-4 md:gap-6 lg:gap-7 items-start">
          {/* Video – matches booking form height on lg+ */}
          <FadeInUp className="min-w-0 lg:self-stretch">
            <div className="relative overflow-hidden bg-black h-[280px] sm:h-[360px] md:h-[430px] lg:h-full">
              <VideoLazy
                lazySrc="https://greenland.b-cdn.net/hero.mp4"
                autoPlay
                loop
                playsInline
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </FadeInUp>

          {/* Booking form – hidden on mobile, visible on lg+ */}
          <FadeInUp delay={0.12} className="hidden lg:block relative z-20">
            <div className="bg-[#333333] px-10 py-11">
              <BookingFormContent />
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
