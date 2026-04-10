import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  UtensilsCrossed,
  Coffee,
  Wine,
  CalendarDays,
  Lamp,
  Mountain,
  Music,
} from 'lucide-react';

import FadeInUp from '@/components/animations/FadeInUp';
import ParallaxImage from '@/components/animations/ParallaxImage';
import VideoLazy from '@/components/VideoLazy';
import FoodGallerySection from '@/components/FoodGallerySection';
import { SEO } from '@/components/SEO';

const highlights = [
  {
    icon: <UtensilsCrossed size={28} />,
    title: 'Culinária Italiana Artesanal',
    description:
      'Pratos preparados com ingredientes frescos e técnica refinada, celebrando a tradição italiana.',
  },
  {
    icon: <Coffee size={28} />,
    title: 'Café da Manhã Incluso',
    description:
      'Um café da manhã completo e acolhedor para começar o dia com energia e sabor.',
  },
  {
    icon: <CalendarDays size={28} />,
    title: 'Jantar Especial',
    description:
      'Toda sexta e sábado, um jantar especial preparado com carinho pelo nosso chef.',
  },
  {
    icon: <Wine size={28} />,
    title: 'Degustação de Vinhos',
    description:
      'Experiências gastronômicas com nosso sommelier, harmonizando vinhos e queijos selecionados.',
  },
];

const gallery = [
  {
    src: '/gastronomia/IMG_4654.webp',
    alt: 'Duo de violoncelo e violino em frente ao restaurante Art Cucina ao entardecer',
  },
  {
    src: '/gastronomia/IMG_4649.webp',
    alt: 'Hóspede escolhendo rótulos na adega de vinhos do Art Cucina',
  },
  {
    src: '/gastronomia/IMG_4653.webp',
    alt: 'Saxofonista tocando música ao vivo dentro do restaurante Art Cucina',
    objectPosition: 'top',
  },
  {
    src: '/gastronomia/IMG_4655.webp',
    alt: 'Drink vermelho autoral com coco ralado e alecrim',
  },
  {
    src: '/gastronomia/IMG_4652.webp',
    alt: 'Parmegiana gratinada com spaghetti e taça de vinho tinto',
  },
  {
    src: '/gastronomia/IMG_4651.webp',
    alt: 'Spaghetti com queijo parmesão ralado servido na pedra-sabão',
  },
  {
    src: '/gastronomia/IMG_4650.webp',
    alt: 'Creme gratinado em ramequim com taça de vinho tinto',
  },
  {
    src: '/gastronomia/IMG_4648.webp',
    alt: 'Silhueta de saxofonista tocando ao pôr do sol na serra',
  },
  {
    src: '/gastronomia/IMG_4656.webp',
    alt: 'Saxofonista animando os hóspedes durante o jantar no Art Cucina',
    objectPosition: 'top',
  },
  {
    src: '/gastronomia/IMG_4657.webp',
    alt: 'Violoncelista sorrindo durante apresentação musical no restaurante',
  },
];

export default function GastronomyPage() {
  const [heroImage, ...restImages] = gallery;
  const sideImages = restImages.slice(0, 4);
  const bottomImages = restImages.slice(4);

  const heroVideoRef = useRef<HTMLVideoElement>(null);

  // Safari/iOS autoplay fallback: programmatic play after mount
  useEffect(() => {
    const el = heroVideoRef.current;
    if (!el) return;
    el.muted = true;
    el.defaultMuted = true;
    el.setAttribute('muted', '');
    el.setAttribute('playsinline', '');
    el.setAttribute('webkit-playsinline', '');

    const tryPlay = () => {
      try {
        const p = el.play();
        if (p !== undefined) p.catch(() => {});
      } catch {}
    };

    if (el.readyState >= 3) {
      tryPlay();
    } else {
      el.addEventListener('canplay', tryPlay, { once: true });
      el.addEventListener('loadeddata', tryPlay, { once: true });
    }
  }, []);

  return (
    <main className="bg-cream">
      <SEO
        title="Gastronomia"
        description="Culinária italiana artesanal, café da manhã incluso e jantares especiais na Pousada Art Green em Teresópolis."
        url="/gastronomia"
      />
      {/* ============================================================ */}
      {/* 1. HERO CINEMATOGRÁFICO                                      */}
      {/* ============================================================ */}
      <section className="relative h-screen overflow-hidden bg-black">
        <video
          ref={heroVideoRef}
          autoPlay
          muted
          loop
          playsInline
          // @ts-expect-error webkit-playsinline is non-standard but needed for old iOS Safari
          webkit-playsinline=""
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://greenland.b-cdn.net/horizontal%20-%20camera%20-%20Teres%C3%B3polis_1.mp4" type="video/mp4" />
          <track kind="captions" default />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
          <motion.img
            src="/logo-artcucina-branca.png"
            alt="Art Cucina"
            className="h-20 md:h-28 lg:h-32 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          />
          <motion.h1
            className="font-display text-3xl md:text-4xl lg:text-5xl text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            culinaria italiana na serra
          </motion.h1>
          <motion.p
            className="text-white/60 font-body text-sm md:text-base mt-4 text-center max-w-md"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
          >
            Uma experiência gastronômica única em meio às montanhas de
            Teresópolis
          </motion.p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. APRESENTAÇÃO — A Alma do Restaurante                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text */}
            <FadeInUp>
              <img src="/logo-artcucina.webp" alt="Art Cucina" className="h-20 md:h-28 mb-4" />
              <p className="section-eyebrow">Restaurante</p>
              <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
                art cucina
              </h2>
              <p className="text-text-medium font-body leading-relaxed mb-6">
                No Art Cucina, cada prato celebra ingredientes frescos, técnica e
                afeto. Um convite para desacelerar e saborear momentos especiais
                em um cenário acolhedor da serra fluminense.
              </p>
              <p className="text-text-medium font-body leading-relaxed mb-8">
                Nosso restaurante combina a tradição da culinária italiana com o
                frescor dos ingredientes locais, criando uma experiência
                gastronômica única em meio às montanhas de Teresópolis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://reservas.artgreenpousada.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-reserve inline-block text-center"
                >
                  Reservar Estadia
                </a>
                <a
                  href="https://wa.me/552127480222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-dark inline-block text-center"
                >
                  Falar Conosco
                </a>
              </div>
            </FadeInUp>

            {/* Image with parallax */}
            <FadeInUp delay={0.1}>
              <div className="hidden lg:block">
                <ParallaxImage
                  src="/experiencias/venha.webp"
                  alt="Restaurante Art Cucina"
                  className="h-[500px]"
                  speed={0.1}
                />
              </div>
              <div className="lg:hidden overflow-hidden">
                <img
                  src="/experiencias/venha.webp"
                  alt="Restaurante Art Cucina"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. DESTAQUES GASTRONÔMICOS                                   */}
      {/* ============================================================ */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <FadeInUp className="text-center mb-14">
            <p className="section-eyebrow">Nossos Destaques</p>
            <h2 className="section-title">experiência gastronômica</h2>
            <div className="w-16 h-px bg-accent mx-auto mt-6" />
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <FadeInUp key={item.title} delay={i * 0.08}>
                <div className="bg-white p-8 text-center h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-xl text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-medium text-sm font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <FoodGallerySection />

      {/* ============================================================ */}
      {/* 4. VÍDEO IMERSIVO — "Um Sabor da Serra"                     */}
      {/* ============================================================ */}
      <section className="relative bg-stone-900">
        <div className="relative w-full h-[70vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">
            <VideoLazy
              lazySrc="https://greenland.b-cdn.net/transicao-desktop.mp4"
              lazyRootMargin="0px 0px 400px 0px"
              autoPlay
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white/30">
                um sabor da serra
              </h2>
            </div>
            <img
              src="/logo-artcucina.webp"
              alt="Art Cucina"
              className="absolute bottom-4 right-4 h-20 lg:h-28 opacity-50 pointer-events-none"
            />
          </div>
      </section>

      {/* ============================================================ */}
      {/* 5. O AMBIENTE — Split com vídeo vertical                     */}
      {/* ============================================================ */}
      <section className="bg-cream">
        <div className="grid lg:grid-cols-2">
          {/* Fotos do ambiente */}
          <FadeInUp className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 h-[460px] sm:h-[560px] lg:h-[700px]">
              <div className="overflow-hidden">
                <img
                  src="/gastronomia/IMG_4644.webp"
                  alt="Mesa posta elegante com taças de vinho no restaurante Art Cucina"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src="/gastronomia/IMG_4650.webp"
                  alt="Creme gratinado em ramequim com taça de vinho tinto"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src="/gastronomia/IMG_4651.webp"
                  alt="Spaghetti com queijo parmesão ralado servido na pedra-sabão"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src="/gastronomia/IMG_4649.webp"
                  alt="Hóspede escolhendo rótulos na adega de vinhos do Art Cucina"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeInUp>

          {/* Texto */}
          <div className="flex items-center order-1 lg:order-2">
            <div className="px-6 md:px-12 lg:px-20 py-16 lg:py-24 max-w-xl mx-auto lg:mx-0">
              <FadeInUp delay={0.1}>
                <p className="section-eyebrow">O Ambiente</p>
                <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
                  onde cada detalhe importa
                </h2>
                <p className="text-text-medium font-body leading-relaxed mb-8">
                  Um espaço pensado para envolver todos os sentidos. Iluminação
                  acolhedora, música suave e uma atmosfera que transforma cada
                  refeição em um momento especial. O Art Cucina é o cenário
                  perfeito para celebrar a vida.
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      icon: <Lamp size={18} />,
                      text: 'Ambiente romantico e acolhedor',
                    },
                    {
                      icon: <Mountain size={18} />,
                      text: 'Vista para a serra fluminense',
                    },
                    {
                      icon: <Music size={18} />,
                      text: 'Musica ao vivo nas sextas e sabados',
                    },
                  ].map((item) => (
                    <li
                      key={item.text}
                      className="flex items-center gap-3 text-text-primary font-body text-sm"
                    >
                      <span className="text-primary-medium">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. GALERIA — Mosaico Assimétrico                            */}
      {/* ============================================================ */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <FadeInUp className="text-center mb-12">
            <h2 className="section-title">galeria</h2>
            <div className="w-16 h-px bg-accent mx-auto mt-6" />
          </FadeInUp>

          <div className="space-y-3 md:space-y-4">
            {/* Top row: hero + 4 side images */}
            <div className="grid lg:grid-cols-12 gap-3 md:gap-4">
              <FadeInUp className="lg:col-span-7">
                <div className="group relative h-[250px] sm:h-[350px] lg:h-[500px] overflow-hidden">
                  <img
                    src={heroImage.src}
                    alt={heroImage.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </FadeInUp>

              <div className="lg:col-span-5 grid grid-cols-2 gap-3 md:gap-4 auto-rows-[120px] sm:auto-rows-[168px] lg:auto-rows-[242px]">
                {sideImages.map((img, i) => (
                  <FadeInUp key={img.src} delay={i * 0.05}>
                    <div className="group relative h-full overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
                      />
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>

            {/* Bottom rows */}
            {bottomImages.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {bottomImages.map((img, i) => (
                  <FadeInUp key={img.src} delay={0.1 + i * 0.05}>
                    <div className="group relative h-[220px] sm:h-[260px] overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
                      />
                    </div>
                  </FadeInUp>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6b. MÚSICA AO VIVO                                          */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <FadeInUp className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Music size={24} className="text-primary" />
              <p className="section-eyebrow !mb-0">Sábados especiais</p>
            </div>
            <h2 className="section-title">música ao vivo</h2>
            <p className="text-text-medium font-body leading-relaxed max-w-2xl mx-auto mt-4">
              Aos sábados, o Art Cucina ganha trilha sonora ao vivo com
              saxofone, violoncelo e violino, criando a atmosfera perfeita para
              almoço e jantar.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              { src: '/gastronomia/IMG_4654.webp', alt: 'Duo de violoncelo e violino ao entardecer' },
              { src: '/gastronomia/IMG_4653.webp', alt: 'Saxofonista tocando dentro do restaurante', objectPosition: 'top' },
              { src: '/gastronomia/IMG_4656.webp', alt: 'Saxofonista animando o jantar', objectPosition: 'top' },
              { src: '/gastronomia/IMG_4657.webp', alt: 'Violoncelista sorrindo durante apresentação' },
            ].map((img, i) => (
              <FadeInUp key={img.src} delay={i * 0.08}>
                <div className="group relative h-[200px] sm:h-[280px] lg:h-[360px] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
                  />
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. HORÁRIOS — Seção Escura Elegante                         */}
      {/* ============================================================ */}
      <section className="bg-primary py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-10">
              horarios
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-8 max-w-lg mx-auto">
              <div className="bg-white/10 p-8">
                <p className="font-body uppercase text-xs tracking-[0.2em] text-white/50 mb-3">
                  Café da Manhã
                </p>
                <p className="font-body font-semibold text-xl text-white mb-1">
                  7h30 às 10h00
                </p>
                <p className="text-white/50 text-sm font-body">
                  Incluso na estadia
                </p>
              </div>
              <div className="bg-white/10 p-8">
                <p className="font-body uppercase text-xs tracking-[0.2em] text-white/50 mb-3">
                  Jantar Especial
                </p>
                <p className="font-body font-semibold text-xl text-white mb-1">
                  19h00 às 22h00
                </p>
                <p className="text-white/50 text-sm font-body">
                  Sextas e sábados
                </p>
              </div>
            </div>
            <div className="w-16 h-px bg-accent mx-auto my-8" />
            <p className="text-white/50 text-sm font-body max-w-md mx-auto">
              O jantar está disponível para hóspedes e visitantes mediante
              reserva.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. CTA IMERSIVO FINAL                                       */}
      {/* ============================================================ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/gastronomia/IMG_4654.webp"
          alt=""
          role="presentation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6 py-20">
          <FadeInUp>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-5">
              reserve sua experiência gastronômica
            </h2>
            <p className="text-white/60 font-body mb-10 max-w-xl mx-auto leading-relaxed">
              Café da manhã incluso na estadia. Jantar especial toda sexta e
              sábado. Venha viver uma experiência única na serra.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://reservas.artgreenpousada.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-reserve"
              >
                Reservar Agora
              </a>
              <a
                href="https://wa.me/552127480222"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Falar Conosco
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
