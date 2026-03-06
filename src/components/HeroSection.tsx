import { ArrowUpRight, Baby, CalendarDays, Users } from 'lucide-react';

import FadeInUp from '@/components/animations/FadeInUp';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function BookingFormContent() {
  return (
    <>
      <h3 className="font-display text-3xl text-white text-center mb-8">Reserva</h3>

      <div className="space-y-4">
        <label className="block text-[11px] uppercase tracking-[0.2em] text-white/60">
          <span className="mb-2 inline-flex items-center gap-2">
            <CalendarDays size={13} />
            Check-in
          </span>
          <Input type="date" className="hero-field" />
        </label>

        <label className="block text-[11px] uppercase tracking-[0.2em] text-white/60">
          <span className="mb-2 inline-flex items-center gap-2">
            <CalendarDays size={13} />
            Check-out
          </span>
          <Input type="date" className="hero-field" />
        </label>

        <div className="grid grid-cols-2 gap-3">
          <label className="block text-[11px] uppercase tracking-[0.2em] text-white/60">
            <span className="mb-2 inline-flex items-center gap-2">
              <Users size={13} />
              Hospedes
            </span>
            <Select defaultValue="2">
              <SelectTrigger className="hero-field">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <SelectItem key={n} value={`${n}`}>
                    {n}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </label>

          <label className="block text-[11px] uppercase tracking-[0.2em] text-white/60">
            <span className="mb-2 inline-flex items-center gap-2">
              <Baby size={13} />
              Criancas
            </span>
            <Select defaultValue="0">
              <SelectTrigger className="hero-field">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                {[0, 1, 2, 3, 4].map((n) => (
                  <SelectItem key={n} value={`${n}`}>
                    {n}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </label>
        </div>

        <a
          href="https://reservas.artgreenpousada.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-reserve w-full text-center mt-3"
        >
          Reservar
        </a>
      </div>
    </>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-[#374E38] pt-28 pb-0 lg:pt-32" id="inicio">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start pb-14 lg:pb-16">
          <FadeInUp>
            <p className="inline-flex items-center border border-white/20 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/75 mb-8">
              Teresopolis, RJ · Serra Fluminense
            </p>
            <h1 className="font-display text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              Descubra Seu Refugio
              <br />
              <span className="text-[#D5E5D1]">na Serra</span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.1} className="lg:pt-12 lg:pl-8">
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-lg mb-9">
              Sofisticacao, natureza e silencio na medida certa para voce viver
              dias de descanso profundo. Um destino exclusivo para casais,
              familias e experiencias memoraveis na montanha.
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
          {/* Video */}
          <FadeInUp className="min-w-0">
            <div className="relative overflow-hidden bg-black h-[280px] sm:h-[360px] md:h-[430px] lg:h-[520px] xl:h-[560px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              src="https://greenland.b-cdn.net/hero.mp4"
              className="w-full h-full object-cover"
            />
          </div>
          </FadeInUp>

          {/* Booking form */}
          <FadeInUp delay={0.12} className="mx-4 md:mx-8 lg:mx-0">
            <div className="bg-[#333333] h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-11 overflow-y-auto">
              <BookingFormContent />
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
