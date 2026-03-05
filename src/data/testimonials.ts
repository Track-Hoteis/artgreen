export interface Testimonial {
  id: number;
  name: string;
  handle: string;
  rating: number;
  text: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jacqueline S.',
    handle: '@jacquesousasouza',
    rating: 5,
    text: 'Pense num lugar tranquilo com uma equipe muito acolhedora que te recebe de braços abertos. Me senti em casa, muito obrigada, em especial à Carol. Um show de lugar, um show de pessoas.',
    initials: 'JS',
  },
  {
    id: 2,
    name: 'Eliana Mitsuko',
    handle: '',
    rating: 5,
    text: 'A equipe do Art Green além de capacitados e competentes, todos são gentis, educados e muito atenciosos. O restaurante Art Cucina é um perfeito italiano: ambiente aconchegante, com excelentes pratos e vinhos. E o café da manhã então!!! Excelente!!!',
    initials: 'EM',
  },
  {
    id: 3,
    name: 'Itana Cabral',
    handle: '@itanacabral',
    rating: 5,
    text: 'Hotel Maravilhoso!!!! Vale super a pena levar a familia e as crianças amam os bichinhos e diversão!!! Minha filha amou. Vamos voltar mais vezes!!! A receptividade é impecável!!!',
    initials: 'IC',
  },
  {
    id: 4,
    name: 'Marcelo & Lucia',
    handle: '',
    rating: 5,
    text: 'Imagine um lugar deslumbrante, meticulosamente cuidado e planejado. Uma infinidade de atividades disponíveis: desde banhar-se em várias piscinas até simplesmente deitar à sombra contemplando a natureza ao redor.',
    initials: 'ML',
  },
  {
    id: 5,
    name: 'Ana Paula',
    handle: '@m.22paula',
    rating: 5,
    text: 'Lugar maravilhoso, super aconchegante, vale muito a pena passar um final de semana. Funcionários muito atenciosos e em especial a Carol super simpática, nota 10 para a pousada e para todos os funcionários.',
    initials: 'AP',
  },
];
