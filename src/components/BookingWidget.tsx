import { useState } from 'react';
import { CalendarDays, Users, Baby, Search } from 'lucide-react';

const BASE_URL =
  'https://reservas.artgreenpousada.com.br/hotels/HOTEL_OMNI_19674';

const STATIC_PARAMS = {
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
  const childrenCount = childrenAges.length;

  // rooms[] format: a{adults} + c{age} for each child
  let roomCode = `a${adults}`;
  for (const age of childrenAges) {
    roomCode += `c${age}`;
  }

  const params = new URLSearchParams();
  params.set('adults', String(adults));
  params.set('children', String(childrenCount));
  for (const age of childrenAges) {
    params.append('childrenAges[]', String(age));
  }
  for (const [key, value] of Object.entries(STATIC_PARAMS)) {
    params.set(key, value);
  }
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

const inputClass =
  'border border-gray-200 px-4 py-3 text-sm text-dark bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition w-full';

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState(todayStr);
  const [checkOut, setCheckOut] = useState(tomorrowStr);
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [childrenAges, setChildrenAges] = useState<number[]>([]);

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
    const url = buildBookingUrl(checkIn, checkOut, adults, childrenAges);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="booking" className="relative z-20 -mt-8 px-4 pb-12">
      <div className="max-w-5xl mx-auto bg-white shadow-xl p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          {/* Check-In */}
          <div className="flex flex-col">
            <label className="text-xs font-semibold text-text-medium uppercase tracking-wide mb-2 flex items-center gap-1.5">
              <CalendarDays size={14} />
              Check-In
            </label>
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
              className={inputClass}
            />
          </div>

          {/* Check-Out */}
          <div className="flex flex-col">
            <label className="text-xs font-semibold text-text-medium uppercase tracking-wide mb-2 flex items-center gap-1.5">
              <CalendarDays size={14} />
              Check-Out
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn || todayStr()}
              onChange={(e) => setCheckOut(e.target.value)}
              className={inputClass}
            />
          </div>

          {/* Hóspedes (adultos) */}
          <div className="flex flex-col">
            <label className="text-xs font-semibold text-text-medium uppercase tracking-wide mb-2 flex items-center gap-1.5">
              <Users size={14} />
              Hóspedes
            </label>
            <select
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className={inputClass}
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'hóspede' : 'hóspedes'}
                </option>
              ))}
            </select>
          </div>

          {/* Crianças */}
          <div className="flex flex-col">
            <label className="text-xs font-semibold text-text-medium uppercase tracking-wide mb-2 flex items-center gap-1.5">
              <Baby size={14} />
              Crianças
            </label>
            <select
              value={childrenCount}
              onChange={(e) =>
                handleChildrenCountChange(Number(e.target.value))
              }
              className={inputClass}
            >
              {[0, 1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'criança' : 'crianças'}
                </option>
              ))}
            </select>
          </div>

          {/* Button */}
          <button onClick={handleSearch} className="btn-primary w-full py-3 gap-2">
            <Search size={16} />
            Buscar Disponibilidade
          </button>
        </div>

        {/* Idade das crianças */}
        {childrenCount > 0 && (
          <div className="mt-4 flex flex-wrap gap-4">
            {childrenAges.map((age, i) => (
              <div key={i} className="flex flex-col">
                <label className="text-xs font-semibold text-text-medium uppercase tracking-wide mb-2">
                  Idade criança {i + 1}
                </label>
                <select
                  value={age}
                  onChange={(e) => handleChildAge(i, Number(e.target.value))}
                  className={inputClass + ' w-auto min-w-[120px]'}
                >
                  {Array.from({ length: 15 }, (_, a) => (
                    <option key={a} value={a}>
                      {a} {a === 1 ? 'ano' : 'anos'}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
