export interface VacationDateOption {
  startDate: string;
  endDate: string;
  label: string;
  discount: number;
  promoCode: string;
  nights: number;
}

export interface VacationPeriod {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  includes: string[];
  highlights: { icon: string; label: string }[];
  dateOptions: VacationDateOption[];
}

const BOOKING_BASE =
  'https://reservas.artgreenpousada.com.br/hotels/HOTEL_OMNI_19674?locate=pt-BR&currencyId=16&destinationName=&mysite=ob';

export function buildBookingUrl(opt: VacationDateOption): string {
  return `${BOOKING_BASE}&startDate=${opt.startDate}&endDate=${opt.endDate}&adults=2&children=0&ag=&childrenAges=&promoCode=${opt.promoCode}`;
}

export const vacations: VacationPeriod[] = [
  {
    slug: 'julho-2026',
    title: 'Férias de Julho',
    subtitle: 'Julho 2026',
    description:
      'Férias em família na serra fluminense com até 20% de desconto em estadias de meio de semana.',
    fullDescription:
      'Traga a família para viver dias inesquecíveis na Art Green durante as férias de julho. Aproveite descontos exclusivos em estadias de 3 a 4 diárias no meio da semana. Piscinas, fazendinha, passeio a cavalo, trenzinho e muito mais em um cenário cercado pela natureza da serra fluminense. As crianças se divertem enquanto os pais relaxam — férias como devem ser.',
    imageUrl: '/Pacotes/Título (1).webp',
    includes: [
      'Hospedagem com café da manhã',
      'Acesso completo às áreas de lazer',
      'Piscinas e hidromassagem aquecida',
      'Fazendinha e lago de pesca',
      'Passeio a cavalo e charrete',
      'Passeio de trenzinho',
      'Campo de futebol e salão de jogos',
      'Redário e cabanas de descanso',
    ],
    highlights: [
      { icon: 'waves', label: 'Piscinas' },
      { icon: 'horse', label: 'Passeio a cavalo' },
      { icon: 'baby', label: 'Diversão infantil' },
      { icon: 'coffee', label: 'Café incluso' },
    ],
    dateOptions: [
      {
        startDate: '2026-07-07',
        endDate: '2026-07-10',
        label: '07 a 10 de Julho',
        discount: 20,
        promoCode: 'JULIO2026A',
        nights: 3,
      },
      {
        startDate: '2026-07-14',
        endDate: '2026-07-17',
        label: '14 a 17 de Julho',
        discount: 15,
        promoCode: 'JULIO2026B',
        nights: 3,
      },
      {
        startDate: '2026-07-21',
        endDate: '2026-07-24',
        label: '21 a 24 de Julho',
        discount: 10,
        promoCode: 'JULIO2026C',
        nights: 3,
      },
      {
        startDate: '2026-07-28',
        endDate: '2026-07-31',
        label: '28 a 31 de Julho',
        discount: 10,
        promoCode: 'JULIO2026D',
        nights: 3,
      },
    ],
  },
  {
    slug: 'janeiro-2027',
    title: 'Férias de Janeiro',
    subtitle: 'Janeiro 2027',
    description:
      'Comece o ano na serra com até 20% de desconto em estadias de meio de semana.',
    fullDescription:
      'As férias de janeiro são o momento perfeito para recarregar as energias em família. Na Art Green, cada dia é uma nova aventura: mergulhos na piscina, passeios a cavalo pela serra, diversão na fazendinha e noites ao redor da fogueira. Aproveite descontos exclusivos em estadias de 3 a 4 diárias no meio da semana e comece o ano com memórias inesquecíveis.',
    imageUrl: '/Pacotes/Título (2).webp',
    includes: [
      'Hospedagem com café da manhã',
      'Acesso completo às áreas de lazer',
      'Piscinas e hidromassagem aquecida',
      'Fazendinha e lago de pesca',
      'Passeio a cavalo e charrete',
      'Passeio de trenzinho',
      'Campo de futebol e salão de jogos',
      'Redário e cabanas de descanso',
    ],
    highlights: [
      { icon: 'waves', label: 'Piscinas' },
      { icon: 'horse', label: 'Passeio a cavalo' },
      { icon: 'baby', label: 'Diversão infantil' },
      { icon: 'coffee', label: 'Café incluso' },
    ],
    dateOptions: [
      {
        startDate: '2027-01-05',
        endDate: '2027-01-08',
        label: '05 a 08 de Janeiro',
        discount: 20,
        promoCode: 'JAN2027A',
        nights: 3,
      },
      {
        startDate: '2027-01-12',
        endDate: '2027-01-15',
        label: '12 a 15 de Janeiro',
        discount: 15,
        promoCode: 'JAN2027B',
        nights: 3,
      },
      {
        startDate: '2027-01-19',
        endDate: '2027-01-22',
        label: '19 a 22 de Janeiro',
        discount: 10,
        promoCode: 'JAN2027C',
        nights: 3,
      },
      {
        startDate: '2027-01-26',
        endDate: '2027-01-29',
        label: '26 a 29 de Janeiro',
        discount: 10,
        promoCode: 'JAN2027D',
        nights: 3,
      },
    ],
  },
];
