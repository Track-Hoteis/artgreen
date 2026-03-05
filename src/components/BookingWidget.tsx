import { CalendarDays, Users, Baby, Search } from 'lucide-react';

export default function BookingWidget() {
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
              className="border border-gray-200 px-4 py-3 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
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
              className="border border-gray-200 px-4 py-3 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            />
          </div>

          {/* Hóspedes */}
          <div className="flex flex-col">
            <label className="text-xs font-semibold text-text-medium uppercase tracking-wide mb-2 flex items-center gap-1.5">
              <Users size={14} />
              Hóspedes
            </label>
            <select className="border border-gray-200 px-4 py-3 text-sm text-dark bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition">
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
            <select className="border border-gray-200 px-4 py-3 text-sm text-dark bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition">
              {[0, 1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'criança' : 'crianças'}
                </option>
              ))}
            </select>
          </div>

          {/* Button */}
          <button className="btn-primary w-full py-3 gap-2">
            <Search size={16} />
            Buscar Disponibilidade
          </button>
        </div>
      </div>
    </section>
  );
}
