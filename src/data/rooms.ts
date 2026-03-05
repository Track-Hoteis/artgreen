export interface Room {
  id: number;
  name: string;
  tag: string;
  tagColor: string;
  description: string;
  capacity: string;
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
    features: [
      { icon: 'bed', label: 'Queen' },
      { icon: 'users', label: '5 pessoas' },
      { icon: 'home', label: 'Espaçosa' },
    ],
  },
];
