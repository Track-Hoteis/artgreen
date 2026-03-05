export interface Room {
  id: number;
  name: string;
  tag: string;
  tagColor: string;
  description: string;
  capacity: string;
  amenities: string;
  features: { icon: string; label: string }[];
}

export const rooms: Room[] = [
  {
    id: 1,
    name: 'Suíte Standard',
    tag: 'Família',
    tagColor: 'bg-primary',
    description:
      'Suite de dois cômodos, ideal para famílias. Próxima ao lago principal e à piscina.',
    capacity: 'Até 5 pessoas',
    amenities: '35m2 | Cama Queen | Ar-condicionado | Frigobar',
    features: [
      { icon: 'bed', label: 'Queen' },
      { icon: 'users', label: '5 pessoas' },
      { icon: 'snowflake', label: 'Ar condicionado' },
    ],
  },
  {
    id: 2,
    name: 'Suíte Superior',
    tag: 'Vista Serrana',
    tagColor: 'bg-accent',
    description:
      '6 suítes únicas, cada uma com características próprias e vistas encantadoras da serra.',
    capacity: '3 a 5 pessoas',
    amenities: '38m2 | Cama Queen | Vista serrana | Frigobar',
    features: [
      { icon: 'bed', label: 'Queen' },
      { icon: 'users', label: '5 pessoas' },
      { icon: 'utensils', label: 'Próx. restaurante' },
    ],
  },
  {
    id: 3,
    name: 'Loft Árvore',
    tag: 'Pet Friendly',
    tagColor: 'bg-primary-medium',
    description:
      '32 m², dois cômodos, lareira externa, alguns com hidromassagem, cama king e varanda.',
    capacity: 'Até 4 pessoas',
    amenities: '32m2 | Cama King | Lareira externa | Hidromassagem',
    features: [
      { icon: 'bed', label: 'King' },
      { icon: 'pawprint', label: 'Aceita pets' },
      { icon: 'flame', label: 'Lareira' },
    ],
  },
  {
    id: 4,
    name: 'Chalé Árvore',
    tag: 'Casal',
    tagColor: 'bg-rose-600',
    description:
      'Dois pavimentos, charm, conforto e privacidade. Perfeito para casais ou pequenas famílias.',
    capacity: 'Até 4 pessoas',
    amenities: '40m2 | Cama Queen | Dois pavimentos | Vista natureza',
    features: [
      { icon: 'bed', label: 'Queen' },
      { icon: 'users', label: '4 pessoas' },
      { icon: 'leaf', label: 'Vista natureza' },
    ],
  },
  {
    id: 5,
    name: 'Casa',
    tag: 'Grupos',
    tagColor: 'bg-amber-700',
    description:
      'Próxima à recepção, espaço, conforto e fácil acesso às áreas centrais da pousada.',
    capacity: 'Até 5 pessoas',
    amenities: '45m2 | Cama Queen | Sala privativa | Ar-condicionado',
    features: [
      { icon: 'bed', label: 'Queen' },
      { icon: 'users', label: '5 pessoas' },
      { icon: 'home', label: 'Espaçosa' },
    ],
  },
];
