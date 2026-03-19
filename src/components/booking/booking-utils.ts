import { format } from 'date-fns';

export const BASE_URL =
  'https://reservas.artgreenpousada.com.br/hotels/HOTEL_OMNI_19674';

export const STATIC_PARAMS: Record<string, string> = {
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

export function buildBookingUrl(
  checkIn: string,
  checkOut: string,
  adults: number,
  childrenAges: number[],
) {
  let roomCode = `a${adults}`;
  for (const age of childrenAges) {
    roomCode += `c${age}`;
  }

  const params = new URLSearchParams();
  params.set('adults', String(adults));
  params.set('children', String(childrenAges.length));
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

export function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

export function tomorrowStr() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

export function formatDateRange(
  from: Date | undefined,
  to: Date | undefined,
): string {
  if (!from) return 'Selecione as datas';
  const f = format(from, 'dd/MM');
  if (!to) return `${f} – ...`;
  const t = format(to, 'dd/MM');
  return `${f} – ${t}`;
}

export function dateToStr(d: Date): string {
  return format(d, 'yyyy-MM-dd');
}
