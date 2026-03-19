import { useState } from 'react';
import { Users, Search } from 'lucide-react';

import DateRangePicker from './DateRangePicker';
import ChildrenSelector from './ChildrenSelector';
import { buildBookingUrl, dateToStr } from './booking-utils';

interface BookingFormProps {
  variant: 'light' | 'dark';
  showTitle?: boolean;
}

export default function BookingForm({ variant, showTitle }: BookingFormProps) {
  const [from, setFrom] = useState<Date | undefined>(undefined);
  const [to, setTo] = useState<Date | undefined>(undefined);
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [childrenAges, setChildrenAges] = useState<number[]>([]);

  function handleDateSelect(range: { from?: Date; to?: Date }) {
    setFrom(range.from);
    setTo(range.to);
  }

  function handleChildrenCountChange(count: number) {
    setChildrenCount(count);
    setChildrenAges((prev) => {
      if (count > prev.length) {
        return [...prev, ...Array(count - prev.length).fill(0)];
      }
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
    if (!from || !to) return;
    const url = buildBookingUrl(
      dateToStr(from),
      dateToStr(to),
      adults,
      childrenAges,
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  const isLight = variant === 'light';

  const selectClass = isLight
    ? 'border border-gray-200 px-4 py-3 text-sm text-dark bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition w-full appearance-none cursor-pointer'
    : 'border border-white/20 px-4 py-3 text-sm text-white bg-transparent focus:outline-none focus:border-white transition w-full appearance-none cursor-pointer hero-select';

  return (
    <>
      {showTitle && (
        <h3 className="font-display text-3xl text-white text-center mb-8">
          Reserva
        </h3>
      )}

      {isLight ? (
        /* ── Light variant: horizontal grid ── */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <DateRangePicker
            from={from}
            to={to}
            onSelect={handleDateSelect}
            variant="light"
          />

          {/* Adults */}
          <div className="flex flex-col">
            <label className="text-xs font-semibold text-text-medium uppercase tracking-wide mb-2 flex items-center gap-1.5">
              <Users size={14} />
              Hóspedes
            </label>
            <select
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className={selectClass}
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'hóspede' : 'hóspedes'}
                </option>
              ))}
            </select>
          </div>

          <ChildrenSelector
            childrenCount={childrenCount}
            childrenAges={childrenAges}
            onChildrenCountChange={handleChildrenCountChange}
            onChildAgeChange={handleChildAge}
            variant="light"
          />

          <button
            onClick={handleSearch}
            disabled={!from || !to}
            className="btn-primary w-full py-3 gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Search size={16} />
            Buscar Disponibilidade
          </button>
        </div>
      ) : (
        /* ── Dark variant: vertical stacked ── */
        <div className="space-y-4">
          <DateRangePicker
            from={from}
            to={to}
            onSelect={handleDateSelect}
            variant="dark"
          />

          <div className="grid grid-cols-2 gap-3 items-end">
            {/* Adults */}
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 mb-2 flex items-center gap-1.5">
                <Users size={13} />
                Hóspedes
              </span>
              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className={selectClass}
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <ChildrenSelector
              childrenCount={childrenCount}
              childrenAges={childrenAges}
              onChildrenCountChange={handleChildrenCountChange}
              onChildAgeChange={handleChildAge}
              variant="dark"
            />
          </div>

          <button
            onClick={handleSearch}
            disabled={!from || !to}
            className="btn-reserve w-full text-center mt-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Reservar
          </button>
        </div>
      )}
    </>
  );
}
