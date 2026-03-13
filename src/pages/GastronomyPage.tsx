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

const highlights = [
  {
    icon: <UtensilsCrossed size={28} />,
    title: 'Culinaria Italiana Artesanal',
    description:
      'Pratos preparados com ingredientes frescos e tecnica refinada, celebrando a tradicao italiana.',
  },
  {
    icon: <Coffee size={28} />,
    title: 'Cafe da Manha Incluso',
    description:
      'Um cafe da manha completo e acolhedor para comecar o dia com energia e sabor.',
  },
  {
    icon: <CalendarDays size={28} />,
    title: 'Jantar Especial',
    description:
      'Toda sexta e sabado, um jantar especial preparado com carinho pelo nosso chef.',
  },
  {
    icon: <Wine size={28} />,
    title: 'Degustacao de Vinhos',
    description:
      'Experiencias gastronomicas com nosso sommelier, harmonizando vinhos e queijos selecionados.',
  },
];

const gallery = [
  {
    src: '/experiencias/venha.webp',
    alt: 'Restaurante Art Cucina',
  },
  {
    src: '/experiencias/ar-livre.webp',
    alt: 'Area ao ar livre',
  },
  {
    src: '/experiencias/ciclovia.webp',
    alt: 'Ciclovia',
  },
  {
    src: '/experiencias/fazendinha.webp',
    alt: 'Fazendinha',
  },
  {
    src: '/experiencias/salao.webp',
    alt: 'Salao de jogos',
  },
  {
    src: '/experiencias/vinhos.webp',
    alt: 'Degustacao de vinhos',
  },
];

export default function GastronomyPage() {
  const [heroImage, ...restImages] = gallery;
  const sideImages = restImages.slice(0, 4);
  const bottomImages = restImages.slice(4);

  return (
    <main className="bg-cream">
      {/* ============================================================ */}
      {/* 1. HERO CINEMATOGRÁFICO — Vídeo 100vh                       */}
      {/* ============================================================ */}
      <section className="relative h-dvh overflow-hidden">
        <VideoLazy
          lazySrc="https://greenland.b-cdn.net/horizontal%20-%20camera%20-%20Teres%C3%B3polis_1.mp4"
          autoPlay
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Fallback poster for mobile / slow connections */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
          style={{
            backgroundImage:
              'url(https://irp.cdn-website.com/8406003a/dms3rep/multi/4F3A0831.JPG)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />


        {/* Central content — Logo + subtitle */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
          <motion.img
            src="/logo-artcucina.png"
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
            Uma experiencia gastronomica unica em meio as montanhas de
            Teresopolis
          </motion.p>
        </div>

        {/* Breadcrumbs and scroll indicator removed per design request */}
      </section>

      {/* ============================================================ */}
      {/* 2. APRESENTAÇÃO — A Alma do Restaurante                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text */}
            <FadeInUp>
              <p className="section-eyebrow">Restaurante</p>
              <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
                art cucina
              </h2>
              <p className="text-text-medium font-body leading-relaxed mb-6">
                No Art Cucina, cada prato celebra ingredientes frescos, tecnica e
                afeto. Um convite para desacelerar e saborear momentos especiais
                em um cenario acolhedor da serra fluminense.
              </p>
              <p className="text-text-medium font-body leading-relaxed mb-8">
                Nosso restaurante combina a tradicao da culinaria italiana com o
                frescor dos ingredientes locais, criando uma experiencia
                gastronomica unica em meio as montanhas de Teresopolis.
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
                  href="https://wa.me/5521969688419"
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
            <h2 className="section-title">experiencia gastronomica</h2>
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

      {/* ============================================================ */}
      {/* 4. VÍDEO IMERSIVO — "Um Sabor da Serra"                     */}
      {/* ============================================================ */}
      <section className="relative bg-black">
        <FadeInUp>
          <div className="relative w-full aspect-video overflow-hidden">
            <VideoLazy
              lazySrc="https://greenland.b-cdn.net/horizontal%20-%20camera%20-%20Teres%C3%B3polis_1.mp4"
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white/30">
                um sabor da serra
              </h2>
            </div>
            <img
              src="/logo-artcucina.png"
              alt="Art Cucina"
              className="absolute bottom-4 right-4 h-10 lg:h-14 opacity-50 pointer-events-none"
            />
          </div>
        </FadeInUp>
      </section>

      {/* ============================================================ */}
      {/* 5. O AMBIENTE — Split com vídeo vertical                     */}
      {/* ============================================================ */}
      <section className="bg-cream">
        <div className="grid lg:grid-cols-2">
          {/* Vídeo vertical */}
          <FadeInUp>
            <div className="relative overflow-hidden h-[460px] sm:h-[560px] lg:h-[700px]">
              <VideoLazy
                lazySrc="https://greenland.b-cdn.net/vertical%20artcucina.mp4"
                autoPlay
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-center scale-[1.9]"
              />
            </div>
          </FadeInUp>

          {/* Texto */}
          <div className="flex items-center">
            <div className="px-6 md:px-12 lg:px-20 py-16 lg:py-24 max-w-xl mx-auto lg:mx-0">
              <FadeInUp delay={0.1}>
                <p className="section-eyebrow">O Ambiente</p>
                <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
                  onde cada detalhe importa
                </h2>
                <p className="text-text-medium font-body leading-relaxed mb-8">
                  Um espaco pensado para envolver todos os sentidos. Iluminacao
                  acolhedora, musica suave e uma atmosfera que transforma cada
                  refeicao em um momento especial. O Art Cucina e o cenario
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
                      />
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>

            {/* Bottom row */}
            {bottomImages.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {bottomImages.map((img, i) => (
                  <FadeInUp key={img.src} delay={0.1 + i * 0.05}>
                    <div className="group relative h-[220px] sm:h-[260px] overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                  Cafe da Manha
                </p>
                <p className="font-display text-2xl text-white mb-1">
                  7h30 as 10h00
                </p>
                <p className="text-white/50 text-sm font-body">
                  Incluso na estadia
                </p>
              </div>
              <div className="bg-white/10 p-8">
                <p className="font-body uppercase text-xs tracking-[0.2em] text-white/50 mb-3">
                  Jantar Especial
                </p>
                <p className="font-display text-2xl text-white mb-1">
                  19h00 as 22h00
                </p>
                <p className="text-white/50 text-sm font-body">
                  Sextas e sabados
                </p>
              </div>
            </div>
            <div className="w-16 h-px bg-accent mx-auto my-8" />
            <p className="text-white/50 text-sm font-body max-w-md mx-auto">
              O jantar esta disponivel para hospedes e visitantes mediante
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
          src="https://irp.cdn-website.com/8406003a/dms3rep/multi/4F3A0831.JPG"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6 py-20">
          <FadeInUp>
            <img
              src="/logo-artcucina.png"
              alt="Art Cucina"
              className="h-14 md:h-20 mx-auto mb-8 opacity-80"
            />
            <h2 className="font-display text-4xl md:text-5xl text-white mb-5">
              reserve sua experiencia gastronomica
            </h2>
            <p className="text-white/60 font-body mb-10 max-w-xl mx-auto leading-relaxed">
              Cafe da manha incluso na estadia. Jantar especial toda sexta e
              sabado. Venha viver uma experiencia unica na serra.
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
                href="https://wa.me/5521969688419"
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
