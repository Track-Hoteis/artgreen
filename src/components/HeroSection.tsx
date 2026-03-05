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

      {/* Bottom row: video bleeds left, form aligns with content container */}
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 pb-8 lg:pb-0">
        {/* Video — flush left on desktop, full-bleed mobile */}
        <FadeInUp className="lg:flex-1 min-w-0">
          <div className="relative overflow-hidden aspect-video lg:aspect-auto lg:h-full bg-black">
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

        {/* Form — fixed width, right-aligned with max-w-7xl content boundary */}
        <FadeInUp
          delay={0.12}
          className="mx-4 md:mx-8 lg:mx-0 lg:w-[380px] xl:w-[420px] flex-shrink-0 hero-form-align"
        >
          <div className="h-full bg-[#333333] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-11">
            <BookingFormContent />
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
