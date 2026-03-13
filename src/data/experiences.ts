export interface Experience {
  id: number;
  icon: string;
  title: string;
  description: string;
  image: string;
  category?: string;
  detail?: string;
  longDescription?: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    icon: 'waves',
    title: 'Piscinas',
    description:
      '3 piscinas: hidro aquecida, adulto/infantil com escorrega, piscina kids.',
    image:
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-34.jpg',
    category: 'Diversao aquatica',
    longDescription:
      'Mergulhe em tres piscinas pensadas para todos os momentos: a hidromassagem aquecida para relaxar, a piscina adulto e infantil com escorregador para a diversao em familia, e a piscina kids para os pequenos aproveitarem com seguranca.',
  },
  {
    id: 2,
    icon: 'fish',
    title: 'Areas ao ar livre',
    description: 'Momentos tranquilos e divertidos em familia.',
    image: '/experiencias/ar-livre.webp',
    category: 'Natureza',
    longDescription:
      'Espacos amplos cercados pela natureza da serra, perfeitos para caminhadas leves, brincadeiras e momentos de contemplacao.',
  },
  {
    id: 3,
    icon: 'horse',
    title: 'Passeio a Cavalo',
    description: 'Experiencia unica com a natureza serrana.',
    image:
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-18.jpg',
    category: 'Aventura',
    longDescription:
      'Percorra trilhas cercadas pela mata atlantica e paisagens da serra fluminense montado a cavalo. Uma experiencia que conecta voce a natureza de forma unica e inesquecivel.',
  },
  {
    id: 4,
    icon: 'music',
    title: 'Musica ao Vivo',
    description: 'Violino e violoncelo toda sexta e sabado.',
    image:
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-06.jpg',
    category: 'Entretenimento',
    detail: 'Toda sexta e sabado',
    longDescription:
      'Deixe-se envolver pelas melodias de violino e violoncelo ao vivo, que preenchem o ambiente com elegancia e emocao toda sexta e sabado a noite.',
  },
  {
    id: 5,
    icon: 'bike',
    title: 'Ciclovia & Bikes',
    description: 'Pedale ao redor de toda a area de lazer.',
    image: '/experiencias/ciclovia.webp',
    category: 'Aventura',
    longDescription:
      'Bikes disponiveis para toda a familia. Pedale pela ciclovia que contorna a area de lazer e aproveite o ar puro da serra.',
  },
  {
    id: 6,
    icon: 'gamepad2',
    title: 'Salao de Jogos',
    description: 'Toto, ping pong e sinuca.',
    image: '/experiencias/salao.webp',
    category: 'Diversao',
    longDescription:
      'Um espaco completo para momentos de descontracao com a familia e amigos. Toto, ping pong e sinuca disponiveis o dia inteiro.',
  },
  {
    id: 7,
    icon: 'pawprint',
    title: 'Fazendinha',
    description: 'Interaja com os animais da nossa fazendinha.',
    image: '/experiencias/fazendinha.webp',
    category: 'Natureza',
    longDescription:
      'Um espaco encantador para aproximar criancas e adultos dos animais, com atividades leves e contato direto com a natureza. A fazendinha da Art Green e o lugar perfeito para momentos em familia.',
  },
  {
    id: 8,
    icon: 'wine',
    title: 'Degustacao de Vinhos',
    description: 'Experiencias gastronomicas com nosso sommelier.',
    image: '/experiencias/vinhos.webp',
    category: 'Gastronomia',
    detail: 'Com nosso sommelier',
    longDescription:
      'Uma experiencia sensorial completa: harmonizacao de vinhos e queijos selecionados, guiada pelo nosso sommelier em um ambiente acolhedor e sofisticado.',
  },
];
