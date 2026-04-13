export interface Package {
  id: number;
  slug: string;
  tag: string;
  title: string;
  description: string;
  fullDescription: string;
  dates: string;
  imageUrl: string;
  href: string;
  startDate?: string;
  endDate?: string;
  includes: string[];
  highlights: { icon: string; label: string }[];
}

export const packages: Package[] = [
  {
    id: 1,
    slug: 'bolhas-fiori',
    tag: 'Experiência Exclusiva',
    title: 'Bolhas & Fiori',
    description: 'Evento especial para adultos',
    fullDescription:
      'Uma experiência exclusiva para adultos na Pousada Art Green. O evento Bolhas & Fiori combina gastronomia refinada, espumantes selecionados e um cenário encantador em meio à serra fluminense. Uma noite inesquecível com música ao vivo, degustação e momentos de pura sofisticação.',
    dates: 'Consulte datas disponiveis',
    imageUrl: '/Pacotes/IMG_4347.JPG.webp',
    href: 'https://reservas.artgreenpousada.com.br/',
    includes: [
      'Espumantes e vinhos selecionados',
      'Jantar especial preparado pelo chef',
      'Música ao vivo',
      'Decoração temática exclusiva',
      'Hospedagem com café da manhã',
    ],
    highlights: [
      { icon: 'wine', label: 'Espumantes' },
      { icon: 'utensils', label: 'Jantar especial' },
      { icon: 'music', label: 'Música ao vivo' },
      { icon: 'sparkles', label: 'Exclusivo adultos' },
    ],
  },
  {
    id: 3,
    slug: 'tiradentes-2026',
    tag: 'Feriado',
    title: 'Feriado de Tiradentes',
    description: 'Dias para desacelerar na serra',
    fullDescription:
      'Aproveite o feriado de Tiradentes para desacelerar na serra fluminense. Dias de descanso com acesso completo às áreas de lazer, piscinas, fazendinha, lago de pesca e muito mais. O pacote inclui hospedagem com café da manhã e programação especial de atividades ao ar livre.',
    dates: '19 a 21 de Abril de 2026',
    startDate: '2026-04-19',
    endDate: '2026-04-21',
    imageUrl: '/Pacotes/Título (1).webp',
    href: 'https://reservas.artgreenpousada.com.br/hotels/HOTEL_OMNI_19674?locate=pt-BR&currencyId=16&destinationName=&mysite=ob&startDate=2026-04-19&endDate=2026-04-21&adults=1&children=0&ag=&childrenAges=&promoCode=',
    includes: [
      'Hospedagem com café da manhã',
      'Café da manhã: 08h às 10h',
      'Jantar especial: 19h às 22:30h',
      'Acesso completo às áreas de lazer',
      'Piscinas e hidromassagem',
      'Atividades ao ar livre',
      'Fazendinha e lago de pesca',
    ],
    highlights: [
      { icon: 'mountain', label: 'Serra fluminense' },
      { icon: 'waves', label: 'Piscinas' },
      { icon: 'trees', label: 'Natureza' },
      { icon: 'coffee', label: 'Café incluso' },
    ],
  },
  {
    id: 4,
    slug: 'dia-do-trabalhador-2026',
    tag: 'Feriado',
    title: 'Dia do Trabalhador',
    description: 'Três dias de descanso na serra',
    fullDescription:
      'Descanse de verdade no feriado do Dia do Trabalhador. Três dias na serra com todo o conforto e lazer que a Art Green oferece. Piscinas, passeios a cavalo, fazendinha, lago de pesca e gastronomia afetiva no restaurante Art Cucina. O descanso que você merece.',
    dates: '01 a 03 de Maio de 2026',
    startDate: '2026-05-01',
    endDate: '2026-05-03',
    imageUrl: '/Pacotes/Título (2).webp',
    href: 'https://reservas.artgreenpousada.com.br/hotels/HOTEL_OMNI_19674?locate=pt-BR&currencyId=16&destinationName=&mysite=ob&startDate=2026-05-01&endDate=2026-05-03&adults=2&children=0&ag=&childrenAges=&promoCode=',
    includes: [
      'Hospedagem com café da manhã',
      'Acesso completo às áreas de lazer',
      'Passeio a cavalo',
      'Piscinas e hidromassagem',
      'Fazendinha e lago de pesca',
    ],
    highlights: [
      { icon: 'horse', label: 'Passeio a cavalo' },
      { icon: 'waves', label: 'Piscinas' },
      { icon: 'utensils', label: 'Art Cucina' },
      { icon: 'coffee', label: 'Café incluso' },
    ],
  },
  {
    id: 5,
    slug: 'dia-das-maes-2026',
    tag: '10% OFF',
    title: 'Dia das Mães',
    description: 'Brindes Especiais para elas',
    fullDescription:
      'Celebre o Dia das Mães na Art Green com um final de semana inesquecível. Surpreenda quem mais importa com brindes especiais, hospedagem com café da manhã e acesso completo às áreas de lazer. Uma homenagem em meio à serra fluminense.',
    dates: '08 a 10 de Maio de 2026',
    startDate: '2026-05-08',
    endDate: '2026-05-10',
    imageUrl: '/Pacotes/IMG_5260.JPG',
    href: 'https://reservas.artgreenpousada.com.br/hotels/HOTEL_OMNI_19674?locate=pt-BR&currencyId=16&destinationName=&mysite=ob&startDate=2026-05-08&endDate=2026-05-10&adults=2&children=0&ag=&childrenAges=&promoCode=14587',
    includes: [
      'Hospedagem com café da manhã',
      'Brindes especiais para as mães',
      'Acesso completo às áreas de lazer',
      'Piscinas e hidromassagem',
      '10% de desconto com código 14587',
    ],
    highlights: [
      { icon: 'sparkles', label: 'Brindes especiais' },
      { icon: 'coffee', label: 'Café incluso' },
      { icon: 'waves', label: 'Piscinas' },
      { icon: 'trees', label: 'Natureza' },
    ],
  },
  {
    id: 6,
    slug: 'dia-dos-namorados-2026',
    tag: '5% OFF',
    title: 'Dia dos Namorados',
    description: 'Programação especial',
    fullDescription:
      'Viva o Dia dos Namorados em um cenário romântico na serra fluminense. Programação especial para casais com hospedagem, café da manhã e momentos inesquecíveis no restaurante Art Cucina. O refúgio perfeito a dois.',
    dates: '12 a 14 de Junho de 2026',
    startDate: '2026-06-12',
    endDate: '2026-06-14',
    imageUrl: '/Pacotes/IMG_5261.webp',
    href: 'https://reservas.artgreenpousada.com.br/hotels/HOTEL_OMNI_19674?locate=pt-BR&currencyId=16&destinationName=&mysite=ob&startDate=2026-06-12&endDate=2026-06-14&adults=2&children=0&ag=&childrenAges=&promoCode=71532',
    includes: [
      'Hospedagem com café da manhã',
      'Programação especial para casais',
      'Acesso completo às áreas de lazer',
      'Jantar romântico no Art Cucina',
      '5% de desconto com código 71532',
    ],
    highlights: [
      { icon: 'wine', label: 'Jantar romântico' },
      { icon: 'music', label: 'Música ao vivo' },
      { icon: 'sparkles', label: 'Programação especial' },
      { icon: 'mountain', label: 'Serra fluminense' },
    ],
  },
];

function parseDateOnly(value?: string): number | null {
  if (!value) return null;
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date.getTime();
}

export function isPackageActive(pkg: Package, referenceDate = new Date()): boolean {
  const current = new Date(referenceDate);
  current.setHours(0, 0, 0, 0);

  const start = parseDateOnly(pkg.startDate);
  const end = parseDateOnly(pkg.endDate);

  if (start !== null && current.getTime() < start) return false;
  if (end !== null && current.getTime() > end) return false;
  return true;
}

export function getActivePackages(referenceDate = new Date()): Package[] {
  return packages.filter((pkg) => isPackageActive(pkg, referenceDate));
}
