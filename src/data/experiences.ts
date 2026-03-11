export interface Experience {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    icon: 'waves',
    title: 'Piscinas',
    description:
      '3 piscinas: hidro aquecida, adulto/infantil com escorrega, piscina kids.',
  },
  {
    id: 6,
    icon: 'fish',
    title: 'Áreas ao ar livre',
    description: 'Momentos tranquilos e divertidos em família.',
  },
  {
    id: 3,
    icon: 'horse',
    title: 'Passeio a Cavalo',
    description: 'Experiência única com a natureza serrana.',
  },
  {
    id: 4,
    icon: 'music',
    title: 'Música ao Vivo',
    description: 'Violino e violoncelo toda sexta e sábado.',
  },
  {
    id: 5,
    icon: 'bike',
    title: 'Ciclovia & Bikes',
    description: 'Pedale ao redor de toda a área de lazer.',
  },
  {
    id: 2,
    icon: 'gamepad2',
    title: 'Salão de Jogos',
    description: 'Totó, ping pong e sinuca.',
  },
  {
    id: 7,
    icon: 'pawprint',
    title: 'Fazendinha',
    description: 'Interaja com os animais da nossa fazendinha.',
  },
  {
    id: 8,
    icon: 'wine',
    title: 'Degustação de Vinhos',
    description: 'Experiências gastronômicas com nosso sommelier.',
  },
];
