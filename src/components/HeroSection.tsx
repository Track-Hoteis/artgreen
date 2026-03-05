import {
  CheckCircle2,
  ArrowUpRight,
  CalendarDays,
  Users,
  Baby,
  Search,
} from 'lucide-react';

function BookingFormContent() {
  return (
    <>
      <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-10 text-center lg:text-left whitespace-nowrap">
        Reservar Online
      </h3>

      <div className="space-y-5">
        <div className="flex flex-col">
          <label className="text-[11px] font-semibold text-white/50 uppercase tracking-widest mb-2 flex items-center gap-2">
            <CalendarDays size={13} />
            Check-In
          </label>
          <input
            type="date"
            className="w-full border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#B99B48]/60 transition-colors"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[11px] font-semibold text-white/50 uppercase tracking-widest mb-2 flex items-center gap-2">
            <CalendarDays size={13} />
            Check-Out
          </label>
          <input
            type="date"
            className="w-full border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#B99B48]/60 transition-colors"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[11px] font-semibold text-white/50 uppercase tracking-widest mb-2 flex items-center gap-2">
            <Users size={13} />
            Hóspedes
          </label>
          <select className="w-full border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#B99B48]/60 transition-colors appearance-none">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n} className="bg-[#1c1c1c] text-white">
                {n} {n === 1 ? 'hóspede' : 'hóspedes'}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-[11px] font-semibold text-white/50 uppercase tracking-widest mb-2 flex items-center gap-2">
            <Baby size={13} />
            Crianças
          </label>
          <select className="w-full border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#B99B48]/60 transition-colors appearance-none">
            {[0, 1, 2, 3, 4].map((n) => (
              <option key={n} value={n} className="bg-[#1c1c1c] text-white">
                {n} {n === 1 ? 'criança' : 'crianças'}
              </option>
            ))}
          </select>
        </div>

        <button className="btn-reserve w-full uppercase tracking-widest py-4 mt-2 flex items-center justify-center gap-2 text-xs md:text-sm">
          <Search size={15} />
          Reservar Agora
        </button>
      </div>
    </>
  );
}

export default function HeroSection() {
  return (
    <section className="pb-0 lg:pb-24 bg-primary lg:bg-[linear-gradient(to_bottom,_#2D5016_0%,_#2D5016_70%,_#ffffff_70%,_#ffffff_100%)]">
      <div>
        {/* ═══════════════════════════════════════════
            TOP CONTENT — 2-column grid
            ═══════════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-16 lg:pt-[120px] lg:pb-[120px]">
          <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-12">
            {/* Left — Badge + Headline */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 size={16} className="text-white/50" />
                <span className="text-white/70 text-xs font-semibold uppercase tracking-[0.2em]">
                  Teresópolis, RJ — Serra Fluminense
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] lg:leading-[1.08]">
                Um Lugar
                <br />
                Cheio de{' '}
                <span className="text-[#B99B48]">Paz</span>
              </h1>
            </div>

            {/* Right — Description + CTA */}
            <div className="lg:pl-12 xl:pl-20">
              <p className="text-white/75 text-base lg:text-lg leading-relaxed max-w-md mb-8">
                Descubra a tranquilidade da Pousada Art Green. Conforto,
                natureza e experiências inesquecíveis na serra fluminense.
              </p>

              <a
                href="https://wa.me/5521969688419"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-reserve inline-flex items-center gap-3 px-8 py-4 uppercase tracking-widest"
              >
                Reservar Agora
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            BOTTOM — Media (2/3) + Booking Form (1/3)
            Flush, no gap between them
            ═══════════════════════════════════════════ */}
        <div className="w-full px-3 lg:px-0">
          <div className="flex flex-col lg:flex-row items-stretch gap-3 lg:gap-0 lg:max-w-[1440px]">
            {/* ── Media (left 2/3) ── */}
            <div className="w-full lg:flex-[2] relative">
              <div className="aspect-video sm:h-[380px] md:h-[460px] lg:h-[560px] overflow-hidden bg-black">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="https://greenland.b-cdn.net/hero.mp4"
                  className="w-full h-full object-contain lg:object-cover"
                />
              </div>
            </div>

            {/* ── Booking Form (right 1/3) — dark ── */}
            <div className="hidden lg:block lg:w-[380px] lg:flex-shrink-0 bg-[#374E38]">
              <div className="h-full flex flex-col justify-center px-8 lg:px-10 py-10 lg:py-0">
                <BookingFormContent />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile booking — next fold */}
        <div className="lg:hidden px-3 pt-24">
          <div className="bg-[#374E38]">
            <div className="px-8 py-10">
              <BookingFormContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
