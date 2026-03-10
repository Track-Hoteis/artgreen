export interface Room {
  id: number;
  slug: string;
  name: string;
  tag: string;
  tagColor: string;
  description: string;
  fullDescription: string;
  capacity: string;
  size: string;
  price: number;
  amenities: string;
  features: { icon: string; label: string }[];
  images: string[];
  checkIn: string;
  checkOut: string;
  rules: string[];
}

export const rooms: Room[] = [
  {
    id: 1,
    slug: 'suite-standard',
    name: 'Suíte Standard',
    tag: 'Família',
    tagColor: 'bg-primary',
    description:
      'Suite de dois cômodos, ideal para famílias. Próxima ao lago principal e à piscina.',
    fullDescription:
      'A Suíte Standard oferece dois cômodos confortáveis, perfeita para famílias que buscam espaço e praticidade. Localizada próxima ao lago principal e à piscina, proporciona fácil acesso às principais áreas de lazer da pousada. Equipada com cama queen, ar-condicionado, frigobar e banheiro completo.',
    capacity: 'Até 5 pessoas',
    size: '35m²',
    price: 489,
    amenities: '35m² | Cama Queen | Ar-condicionado | Frigobar',
    features: [
      { icon: 'bed', label: 'Queen' },
      { icon: 'users', label: '5 pessoas' },
      { icon: 'snowflake', label: 'Ar condicionado' },
    ],
    images: [
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-06.jpg',
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-05.jpg',
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-25.jpg',
    ],
    checkIn: '14:00',
    checkOut: '12:00',
    rules: [
      'Check-in a partir das 14h',
      'Check-out até as 12h',
      'Café da manhã incluso',
      'Não é permitido fumar no quarto',
    ],
  },
  {
    id: 2,
    slug: 'suite-superior',
    name: 'Suíte Superior',
    tag: 'Vista Serrana',
    tagColor: 'bg-accent',
    description:
      '6 suítes únicas, cada uma com características próprias e vistas encantadoras da serra.',
    fullDescription:
      'São 6 suítes únicas, cada uma com características próprias e vistas encantadoras da serra fluminense. A Suíte Superior combina conforto e charme, com cama queen, vista serrana privilegiada, frigobar e proximidade ao restaurante Art Cucina. Ideal para quem busca tranquilidade com um toque especial.',
    capacity: '3 a 5 pessoas',
    size: '38m²',
    price: 569,
    amenities: '38m² | Cama Queen | Vista serrana | Frigobar',
    features: [
      { icon: 'bed', label: 'Queen' },
      { icon: 'users', label: '5 pessoas' },
      { icon: 'utensils', label: 'Próx. restaurante' },
    ],
    images: [
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-05.jpg',
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-06.jpg',
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-34.jpg',
    ],
    checkIn: '14:00',
    checkOut: '12:00',
    rules: [
      'Check-in a partir das 14h',
      'Check-out até as 12h',
      'Café da manhã incluso',
      'Não é permitido fumar no quarto',
    ],
  },
  {
    id: 3,
    slug: 'loft-arvore',
    name: 'Loft Árvore',
    tag: 'Pet Friendly',
    tagColor: 'bg-primary-medium',
    description:
      '32 m², dois cômodos, lareira externa, alguns com hidromassagem, cama king e varanda.',
    fullDescription:
      'O Loft Árvore é a escolha perfeita para quem viaja com pets. Com 32m², dois cômodos aconchegantes, lareira externa para noites frias na serra, alguns com hidromassagem, cama king e varanda com vista para a natureza. Um refúgio que combina conforto e contato direto com o verde.',
    capacity: 'Até 4 pessoas',
    size: '32m²',
    price: 649,
    amenities: '32m² | Cama King | Lareira externa | Hidromassagem',
    features: [
      { icon: 'bed', label: 'King' },
      { icon: 'pawprint', label: 'Aceita pets' },
      { icon: 'flame', label: 'Lareira' },
    ],
    images: [
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-34.jpg',
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-06.jpg',
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/IMG_6358.jpg',
    ],
    checkIn: '14:00',
    checkOut: '12:00',
    rules: [
      'Check-in a partir das 14h',
      'Check-out até as 12h',
      'Café da manhã incluso',
      'Pets são bem-vindos (consulte regras)',
      'Não é permitido fumar no quarto',
    ],
  },
  {
    id: 4,
    slug: 'chale-arvore',
    name: 'Chalé Árvore',
    tag: 'Casal',
    tagColor: 'bg-rose-600',
    description:
      'Dois pavimentos, charm, conforto e privacidade. Perfeito para casais ou pequenas famílias.',
    fullDescription:
      'O Chalé Árvore oferece dois pavimentos repletos de charme, conforto e privacidade. Perfeito para casais em busca de um refúgio romântico ou pequenas famílias que valorizam um espaço exclusivo. Com cama queen, vista para a natureza e a tranquilidade da serra fluminense ao redor.',
    capacity: 'Até 4 pessoas',
    size: '40m²',
    price: 729,
    amenities: '40m² | Cama Queen | Dois pavimentos | Vista natureza',
    features: [
      { icon: 'bed', label: 'Queen' },
      { icon: 'users', label: '4 pessoas' },
      { icon: 'leaf', label: 'Vista natureza' },
    ],
    images: [
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/IMG_6358.jpg',
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-27.jpg',
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-05.jpg',
    ],
    checkIn: '14:00',
    checkOut: '12:00',
    rules: [
      'Check-in a partir das 14h',
      'Check-out até as 12h',
      'Café da manhã incluso',
      'Não é permitido fumar no quarto',
    ],
  },
  {
    id: 5,
    slug: 'casa',
    name: 'Casa',
    tag: 'Grupos',
    tagColor: 'bg-amber-700',
    description:
      'Próxima à recepção, espaço, conforto e fácil acesso às áreas centrais da pousada.',
    fullDescription:
      'A Casa é a acomodação mais espaçosa da pousada, próxima à recepção e com fácil acesso às áreas centrais. Ideal para grupos e famílias maiores, oferece sala privativa, cama queen, ar-condicionado e todo o conforto necessário para uma estadia completa na serra.',
    capacity: 'Até 5 pessoas',
    size: '45m²',
    price: 839,
    amenities: '45m² | Cama Queen | Sala privativa | Ar-condicionado',
    features: [
      { icon: 'bed', label: 'Queen' },
      { icon: 'users', label: '5 pessoas' },
      { icon: 'home', label: 'Espaçosa' },
    ],
    images: [
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-27.jpg',
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-18.jpg',
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-06.jpg',
    ],
    checkIn: '14:00',
    checkOut: '12:00',
    rules: [
      'Check-in a partir das 14h',
      'Check-out até as 12h',
      'Café da manhã incluso',
      'Não é permitido fumar no quarto',
    ],
  },
];
