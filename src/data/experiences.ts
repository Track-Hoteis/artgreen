export interface Experience {
  id: number;
  icon: string;
  title: string;
  description: string;
  image: string;
  category?: string;
  detail?: string;
  longDescription?: string;
  tariffs?: Array<{ label: string; included: boolean }>;
  seasonBadge?: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    icon: 'waves',
    title: 'Piscinas',
    description:
      '3 piscinas: hidro aquecida, adulto/infantil com escorrega, piscina kids.',
    image:
      '/servicos/piscinas.webp',
    category: 'Diversão aquática',
    longDescription:
      'Mergulhe em três piscinas pensadas para todos os momentos: a hidromassagem aquecida para relaxar, a piscina adulto e infantil com escorregador para a diversão em família, e a piscina kids para os pequenos aproveitarem com segurança.',
  },
  {
    id: 2,
    icon: 'fish',
    title: 'Áreas ao ar livre',
    description: 'Momentos tranquilos e divertidos em família.',
    image: '/experiencias/ar-livre.webp',
    category: 'Natureza',
    longDescription:
      'Espaços amplos cercados pela natureza da serra, perfeitos para caminhadas leves, brincadeiras e momentos de contemplação.',
  },
  {
    id: 3,
    icon: 'horse',
    title: 'Passeio a Cavalo',
    description: 'Experiência única com a natureza serrana.',
    image:
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-18.jpg',
    category: 'Aventura',
    longDescription:
      'Percorra trilhas cercadas pela mata atlântica e paisagens da serra fluminense montado a cavalo. Uma experiência que conecta você à natureza de forma única e inesquecível.',
  },
  {
    id: 4,
    icon: 'music',
    title: 'Música ao Vivo',
    description: 'Sábado no almoço (voz e violão) e no jantar (violino e violoncelo).',
    image: '/musica-ao-vivo.webp',
    category: 'Entretenimento',
    detail: 'Sábado almoço e jantar',
    longDescription:
      'Deixe-se envolver pelas melodias de música ao vivo que preenchem o ambiente com elegância e emoção. Sábado no almoço, apresentação de voz e violão, e no jantar, violino e violoncelo.',
  },
  {
    id: 5,
    icon: 'bike',
    title: 'Passeio de Bicicleta',
    description: 'Bicicletas disponíveis para toda a família.',
    image: '/servicos/bicicletas.webp',
    category: 'Aventura',
    longDescription:
      'Bikes disponíveis para toda a família. Pedale pela ciclovia que contorna a área de lazer e aproveite o ar puro da serra.',
  },
  {
    id: 6,
    icon: 'gamepad2',
    title: 'Salão de Jogos',
    description: 'Toto, ping pong e sinuca.',
    image: '/servicos/salao-de-jogos.webp',
    category: 'Diversão',
    longDescription:
      'Um espaço completo para momentos de descontração com a família e amigos. Toto, ping pong e sinuca disponíveis o dia inteiro.',
  },
  {
    id: 7,
    icon: 'pawprint',
    title: 'Fazendinha',
    description: 'Interaja com os animais da nossa fazendinha.',
    image: '/experiencias/fazendinha.webp',
    category: 'Natureza',
    longDescription:
      'Um espaço encantador para aproximar crianças e adultos dos animais, com atividades leves e contato direto com a natureza. A fazendinha da Art Green é o lugar perfeito para momentos em família.',
  },
  {
    id: 8,
    icon: 'wine',
    title: 'Degustação de Vinhos',
    description: 'Evento Sazonal de Inverno.',
    image: '/experiencias/IMG_4388.JPG.webp',
    category: 'Gastronomia',
    detail: 'Incluso na pensão completa',
    longDescription:
      'Experiências sensoriais completas com harmonização de vinhos e queijos selecionados, guiadas pelo nosso sommelier.',
    tariffs: [
      { label: 'Tarifa Café da Manhã - Paga a Parte', included: true },
    ],
    seasonBadge: 'Evento Sazonal de Inverno',
  },
  {
    id: 9,
    icon: 'tv',
    title: 'Telão de LED',
    description: 'Entretenimento para toda a família.',
    image: '/servicos/telao-led.webp',
    category: 'Entretenimento',
    longDescription:
      'Telão de LED disponível para momentos de diversão e entretenimento para toda a família.',
  },
  {
    id: 10,
    icon: 'train',
    title: 'Passeio de Trenzinho',
    description: 'Diversão garantida para os pequenos e toda a família.',
    image: '/servicos/trenzinho.webp',
    category: 'Diversão',
    longDescription:
      'Passeio de trenzinho pela área da pousada, diversão garantida para crianças e adultos.',
  },
  {
    id: 11,
    icon: 'fish',
    title: 'Lago de Pesca',
    description: 'Pesca esportiva em meio à natureza.',
    image: '/servicos/lago-de-pesca.webp',
    category: 'Natureza',
    longDescription:
      'Lago de pesca para momentos de tranquilidade e diversão em contato com a natureza da serra.',
  },
  {
    id: 12,
    icon: 'flame',
    title: 'Fogueira',
    description: 'Noites aconchegantes ao redor da fogueira.',
    image: '/servicos/fogueira.webp',
    category: 'Lazer',
    longDescription:
      'Reúna a família e amigos ao redor da fogueira para noites inesquecíveis sob o céu estrelado da serra.',
  },
  {
    id: 13,
    icon: 'baby',
    title: 'Brinquedos',
    description: 'Área de brinquedos para as crianças.',
    image: '/servicos/brinquedos.webp',
    category: 'Diversão',
    longDescription:
      'Espaço com brinquedos para os pequenos se divertirem com segurança enquanto a família relaxa.',
  },
  {
    id: 14,
    icon: 'horse',
    title: 'Passeio de Charrete',
    description: 'Passeio encantador pela propriedade.',
    image: '/servicos/charrete.webp',
    category: 'Aventura',
    longDescription:
      'Passeio de charrete pela área da pousada, uma experiência encantadora para toda a família.',
  },
  {
    id: 15,
    icon: 'palmtree',
    title: 'Redário',
    description: 'Relaxe em nossas redes com vista para a natureza.',
    image: '/servicos/redario.webp',
    category: 'Lazer',
    longDescription:
      'Espaço com redes para relaxar e contemplar a paisagem serrana em total tranquilidade.',
  },
  {
    id: 16,
    icon: 'trophy',
    title: 'Campo de Futebol',
    description: 'Campo gramado para partidas em família.',
    image: '/servicos/campo-de-futebol.webp',
    category: 'Esporte',
    longDescription:
      'Campo de futebol gramado para reunir a família e os amigos em partidas divertidas.',
  },
  {
    id: 17,
    icon: 'droplets',
    title: 'Hidromassagem Aquecida',
    description: 'Relaxamento total com água aquecida.',
    image: '/servicos/hidromassagem.webp',
    category: 'Relaxamento',
    longDescription:
      'Hidromassagem aquecida para momentos de puro relaxamento em meio à serra fluminense.',
  },
  {
    id: 18,
    icon: 'tent',
    title: 'Cabana para Descanso',
    description: 'Espaço reservado para descanso e contemplação.',
    image: '/servicos/redario.webp',
    category: 'Lazer',
    longDescription:
      'Cabanas reservadas para descanso e contemplação da natureza em total privacidade.',
  },
  {
    id: 19,
    icon: 'champagne',
    title: 'Bolhas & Fiori',
    description: 'Experiência sensorial e harmonizada com espumantes e canapés e queijos selecionados com nosso sommelier.',
    image: '/Pacotes/IMG_4347.JPG.webp',
    category: 'Gastronomia',
    longDescription:
      'Experiência sensorial e harmonizada com espumantes e canapés e queijos selecionados com nosso sommelier.',
    tariffs: [
      { label: 'Tarifa Café da Manhã - Paga a Parte', included: true },
    ],
    seasonBadge: 'Evento Sazonal de Primavera e Verão',
  },
];
