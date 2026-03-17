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
    tag: 'Experiencia Exclusiva',
    title: 'Bolhas & Fiori',
    description: 'Evento especial para adultos',
    fullDescription:
      'Uma experiencia exclusiva para adultos na Pousada Art Green. O evento Bolhas & Fiori combina gastronomia refinada, espumantes selecionados e um cenario encantador em meio a serra fluminense. Uma noite inesquecivel com musica ao vivo, degustacao e momentos de pura sofisticacao.',
    dates: 'Consulte datas disponiveis',
    imageUrl: '/Pacotes/IMG_4347.JPG.jpeg',
    href: 'https://reservas.artgreenpousada.com.br/',
    includes: [
      'Espumantes e vinhos selecionados',
      'Jantar especial preparado pelo chef',
      'Musica ao vivo',
      'Decoracao tematica exclusiva',
      'Hospedagem com cafe da manha',
    ],
    highlights: [
      { icon: 'wine', label: 'Espumantes' },
      { icon: 'utensils', label: 'Jantar especial' },
      { icon: 'music', label: 'Musica ao vivo' },
      { icon: 'sparkles', label: 'Exclusivo adultos' },
    ],
  },
  {
    id: 2,
    slug: 'pascoa-2026',
    tag: 'Pacote de Pascoa',
    title: 'Pascoa 2026',
    description: '02 a 05 de abril',
    fullDescription:
      'Celebre a Pascoa em familia na serra fluminense. O pacote inclui hospedagem com pensao completa, atividades tematicas para criancas e adultos, caca aos ovos na fazendinha, oficina de chocolates e programacao especial de lazer. Uma Pascoa inesquecivel em contato com a natureza.',
    dates: '02 a 05 de Abril de 2026',
    imageUrl: '/Pacotes/Título.png',
    href: 'https://reservas.artgreenpousada.com.br/hotels/HOTEL_OMNI_19674#adults=2&children=0&clientId=19b9aba4-a5a9-4f9b-bb84-a5ff66a6b4ae&clientName=Motor%20Niara&contentType=property&destinationCountry=BR&destinationName=Pousada%20Art%20Green&enablePromoCode=true&endDate=2026-04-05&hotelIds[]=HOTEL_OMNI_19674&personName=&propertyId=793cabb9-2843-4bc6-8afd-d8cbd4df535d&rooms[]=a2&startDate=2026-04-02',
    includes: [
      'Hospedagem com pensao completa',
      'Cafe da manha, almoco e jantar',
      'Caca aos ovos na fazendinha',
      'Oficina de chocolates',
      'Programacao de lazer completa',
      'Musica ao vivo',
    ],
    highlights: [
      { icon: 'egg', label: 'Caca aos ovos' },
      { icon: 'utensils', label: 'Pensao completa' },
      { icon: 'baby', label: 'Programacao kids' },
      { icon: 'music', label: 'Musica ao vivo' },
    ],
  },
  {
    id: 3,
    slug: 'tiradentes-2026',
    tag: 'Feriado',
    title: 'Feriado de Tiradentes',
    description: 'Dias para desacelerar na serra',
    fullDescription:
      'Aproveite o feriado de Tiradentes para desacelerar na serra fluminense. Dias de descanso com acesso completo as areas de lazer, piscinas, fazendinha, lago de pesca e muito mais. O pacote inclui hospedagem com cafe da manha e programacao especial de atividades ao ar livre.',
    dates: '19 a 21 de Abril de 2026',
    imageUrl: '/Pacotes/Título (1).png',
    href: 'https://reservas.artgreenpousada.com.br/hotels/HOTEL_OMNI_19674?locate=pt-BR&currencyId=16&destinationName=&mysite=ob&startDate=2026-04-19&endDate=2026-04-21&adults=1&children=0&ag=&childrenAges=&promoCode=',
    includes: [
      'Hospedagem com cafe da manha',
      'Acesso completo as areas de lazer',
      'Piscinas e hidromassagem',
      'Atividades ao ar livre',
      'Fazendinha e lago de pesca',
    ],
    highlights: [
      { icon: 'mountain', label: 'Serra fluminense' },
      { icon: 'waves', label: 'Piscinas' },
      { icon: 'trees', label: 'Natureza' },
      { icon: 'coffee', label: 'Cafe incluso' },
    ],
  },
  {
    id: 4,
    slug: 'dia-do-trabalhador-2026',
    tag: 'Feriado',
    title: 'Dia do Trabalhador',
    description: '01 a 03 de maio',
    fullDescription:
      'Descanse de verdade no feriado do Dia do Trabalhador. Tres dias na serra com todo o conforto e lazer que a Art Green oferece. Piscinas, passeios a cavalo, fazendinha, lago de pesca e gastronomia afetiva no restaurante Art Cucina. O descanso que voce merece.',
    dates: '01 a 03 de Maio de 2026',
    imageUrl: '/Pacotes/Título (2).png',
    href: 'https://reservas.artgreenpousada.com.br/hotels/HOTEL_OMNI_19674?locate=pt-BR&currencyId=16&destinationName=&mysite=ob&startDate=2026-05-01&endDate=2026-05-03&adults=2&children=0&ag=&childrenAges=&promoCode=',
    includes: [
      'Hospedagem com cafe da manha',
      'Acesso completo as areas de lazer',
      'Passeio a cavalo',
      'Piscinas e hidromassagem',
      'Fazendinha e lago de pesca',
    ],
    highlights: [
      { icon: 'horse', label: 'Passeio a cavalo' },
      { icon: 'waves', label: 'Piscinas' },
      { icon: 'utensils', label: 'Art Cucina' },
      { icon: 'coffee', label: 'Cafe incluso' },
    ],
  },
];
