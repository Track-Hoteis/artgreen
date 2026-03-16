import { useState } from 'react';
import { ArrowUpRight, Baby, CalendarDays, Users } from 'lucide-react';

import FadeInUp from '@/components/animations/FadeInUp';
import VideoLazy from '@/components/VideoLazy';

/* ── Booking URL builder ── */

const BASE_URL =
  'https://reservas.artgreenpousada.com.br/hotels/HOTEL_OMNI_19674';

const STATIC_PARAMS: Record<string, string> = {
  clientId: '19b9aba4-a5a9-4f9b-bb84-a5ff66a6b4ae',
  clientName: 'Motor Niara',
  contentType: 'property',
  destinationCountry: 'BR',
  destinationName: 'Pousada Art Green',
  enablePromoCode: 'true',
  'hotelIds[]': 'HOTEL_OMNI_19674',
  personName: '',
  propertyId: '793cabb9-2843-4bc6-8afd-d8cbd4df535d',
};

function buildBookingUrl(
  checkIn: string,
  checkOut: string,
  adults: number,
  childrenAges: number[],
) {
  let roomCode = `a${adults}`;
  if (childrenAges.length > 0) {
    roomCode += `c${childrenAges.join(',')}`;
  }

  const params = new URLSearchParams();
  params.set('adults', String(adults));
  params.set('children', String(childrenAges.length));
  for (const age of childrenAges) params.append('childrenAges[]', String(age));
  for (const [key, value] of Object.entries(STATIC_PARAMS)) params.set(key, value);
  params.set('endDate', checkOut);
  params.set('startDate', checkIn);
  params.append('rooms[]', roomCode);

  return `${BASE_URL}#${params.toString()}`;
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function tomorrowStr() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

/* ── BookingFormContent ── */

export function BookingFormContent() {
  const [checkIn, setCheckIn] = useState(todayStr);
  const [checkOut, setCheckOut] = useState(tomorrowStr);
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [childrenAges, setChildrenAges] = useState<number[]>([]);

  function handleChildrenCountChange(count: number) {
    setChildrenCount(count);
    setChildrenAges((prev) => {
      if (count > prev.length) return [...prev, ...Array(count - prev.length).fill(0)];
      return prev.slice(0, count);
    });
  }

  function handleChildAge(index: number, age: number) {
    setChildrenAges((prev) => {
      const next = [...prev];
      next[index] = age;
      return next;
    });
  }

  function handleSearch() {
    const url = buildBookingUrl(checkIn, checkOut, adults, childrenAges);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <h3 className="font-display text-3xl text-white text-center mb-8">Reserva</h3>

      <div className="space-y-4">
        {/* Check-in */}
        <label className="block text-[11px] uppercase tracking-[0.2em] text-white/60">
          <span className="mb-2 inline-flex items-center gap-2">
            <CalendarDays size={13} />
            Check-in
          </span>
          <input
            type="date"
            value={checkIn}
            min={todayStr()}
            onChange={(e) => {
              setCheckIn(e.target.value);
              if (e.target.value >= checkOut) {
                const next = new Date(e.target.value);
                next.setDate(next.getDate() + 1);
                setCheckOut(next.toISOString().slice(0, 10));
              }
            }}
            className="hero-field"
          />
        </label>

        {/* Check-out */}
        <label className="block text-[11px] uppercase tracking-[0.2em] text-white/60">
          <span className="mb-2 inline-flex items-center gap-2">
            <CalendarDays size={13} />
            Check-out
          </span>
          <input
            type="date"
            value={checkOut}
            min={checkIn || todayStr()}
            onChange={(e) => setCheckOut(e.target.value)}
            className="hero-field"
          />
        </label>

        {/* Adultos + Crianças */}
        <div className="grid grid-cols-2 gap-3">
          <label className="block text-[11px] uppercase tracking-[0.2em] text-white/60">
            <span className="mb-2 inline-flex items-center gap-2">
              <Users size={13} />
              Hospedes
            </span>
            <select
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="hero-field hero-select"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </label>

          <label className="block text-[11px] uppercase tracking-[0.2em] text-white/60">
            <span className="mb-2 inline-flex items-center gap-2">
              <Baby size={13} />
              Criancas
            </span>
            <select
              value={childrenCount}
              onChange={(e) => handleChildrenCountChange(Number(e.target.value))}
              className="hero-field hero-select"
            >
              {[0, 1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </label>
        </div>

        {/* Idade das crianças */}
        {childrenCount > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {childrenAges.map((age, i) => (
              <label key={i} className="block text-[11px] uppercase tracking-[0.2em] text-white/60">
                <span className="mb-2 inline-block">Idade criança {i + 1}</span>
                <select
                  value={age}
                  onChange={(e) => handleChildAge(i, Number(e.target.value))}
                  className="hero-field hero-select"
                >
                  {Array.from({ length: 15 }, (_, a) => (
                    <option key={a} value={a}>
                      {a} {a === 1 ? 'ano' : 'anos'}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>
        )}

        <button
          onClick={handleSearch}
          className="btn-reserve w-full text-center mt-3"
        >
          Reservar
        </button>
      </div>
    </>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-[#374E38] pt-28 pb-0 lg:pt-32 relative z-20" id="inicio">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start pb-14 lg:pb-16">
          <FadeInUp>
            <p className="inline-flex items-center border border-white/20 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/75 mb-8">
              Teresopolis, RJ · Serra Fluminense
            </p>
            <h1 className="font-display text-white text-[2.05rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              Descubra Seu Refugio
              <br />
              <span className="text-[#D5E5D1]">na Serra</span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.1} className="lg:pt-12 lg:pl-8">
            <p className="text-white/80 text-sm md:text-lg leading-relaxed max-w-lg mb-9">
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
          {/* Video – matches booking form height on lg+ */}
          <FadeInUp className="min-w-0 lg:self-stretch">
            <div className="relative overflow-hidden bg-black h-[280px] sm:h-[360px] md:h-[430px] lg:h-full">
              <VideoLazy
                lazySrc="https://greenland.b-cdn.net/hero.mp4"
                autoPlay
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
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
