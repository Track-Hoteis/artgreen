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
    imageUrl: '/Pacotes/IMG_4347.JPG.jpeg',
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
    id: 2,
    slug: 'pascoa-2026',
    tag: 'Pacote de Páscoa',
    title: 'Páscoa 2026',
    description: '02 a 05 de abril',
    fullDescription:
      'Celebre a Páscoa em família na serra fluminense. O pacote inclui hospedagem com pensão completa, atividades temáticas para crianças e adultos, caça aos ovos na fazendinha, oficina de chocolates e programação especial de lazer. Uma Páscoa inesquecível em contato com a natureza.',
    dates: '02 a 05 de Abril de 2026',
    imageUrl: '/Pacotes/Título.png',
    href: 'https://reservas.artgreenpousada.com.br/hotels/HOTEL_OMNI_19674#adults=2&children=0&clientId=19b9aba4-a5a9-4f9b-bb84-a5ff66a6b4ae&clientName=Motor%20Niara&contentType=property&destinationCountry=BR&destinationName=Pousada%20Art%20Green&enablePromoCode=true&endDate=2026-04-05&hotelIds[]=HOTEL_OMNI_19674&personName=&propertyId=793cabb9-2843-4bc6-8afd-d8cbd4df535d&rooms[]=a2&startDate=2026-04-02',
    includes: [
      'Hospedagem com pensão completa',
      'Café da manhã, almoço, jantar e café da tarde',
      'Caça aos ovos na fazendinha',
      'Oficina de chocolates',
      'Programação de lazer completa',
      'Música ao vivo',
    ],
    highlights: [
      { icon: 'egg', label: 'Caça aos ovos' },
      { icon: 'utensils', label: 'Pensão completa' },
      { icon: 'baby', label: 'Programação kids' },
      { icon: 'music', label: 'Música ao vivo' },
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
    imageUrl: '/Pacotes/Título (1).png',
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
    description: '01 a 03 de maio',
    fullDescription:
      'Descanse de verdade no feriado do Dia do Trabalhador. Três dias na serra com todo o conforto e lazer que a Art Green oferece. Piscinas, passeios a cavalo, fazendinha, lago de pesca e gastronomia afetiva no restaurante Art Cucina. O descanso que você merece.',
    dates: '01 a 03 de Maio de 2026',
    imageUrl: '/Pacotes/Título (2).png',
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
];
