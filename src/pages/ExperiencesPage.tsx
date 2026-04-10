import { motion } from 'framer-motion';
import {
  Waves,
  Gamepad2,
  Music,
  Bike,
  Fish,
  PawPrint,
  Wine,
  TreePine,
  Check,
  Snowflake,
  GlassWater,
  Sun,
} from 'lucide-react';

import FadeInUp from '@/components/animations/FadeInUp';
import ParallaxImage from '@/components/animations/ParallaxImage';
import VideoLazy from '@/components/VideoLazy';
import { SEO } from '@/components/SEO';
import { experiences } from '@/data/experiences';

const iconMap: Record<string, React.ReactNode> = {
  waves: <Waves size={28} />,
  gamepad2: <Gamepad2 size={28} />,
  horse: <TreePine size={28} />,
  music: <Music size={28} />,
  bike: <Bike size={28} />,
  fish: <Fish size={28} />,
  pawprint: <PawPrint size={28} />,
  wine: <Wine size={28} />,
  champagne: <GlassWater size={28} />,
};

const iconMapSmall: Record<string, React.ReactNode> = {
  waves: <Waves size={20} />,
  gamepad2: <Gamepad2 size={20} />,
  horse: <TreePine size={20} />,
  music: <Music size={20} />,
  bike: <Bike size={20} />,
  fish: <Fish size={20} />,
  pawprint: <PawPrint size={20} />,
  wine: <Wine size={20} />,
  champagne: <GlassWater size={20} />,
};

/* ------------------------------------------------------------------ */
/*  Helper: Full-Bleed Sticky Section (Pattern A)                     */
/* ------------------------------------------------------------------ */
function FullBleedExperience({ exp }: { exp: (typeof experiences)[number] }) {
  // Slideshow images for "Passeio a Cavalo"
  const horseTrekImages = ['/IMG_4662.webp', '/IMG_4661.webp', '/IMG_4660.webp'];
  const isHorseTrek = exp.title === 'Passeio a Cavalo';
  const images = isHorseTrek ? horseTrekImages : [exp.image];

  return (
    <section className="relative h-dvh overflow-hidden">
      {isHorseTrek ? (
        <>
          {/* Mobile: single center image */}
          <motion.img
            src={images[1]}
            alt={exp.title}
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 10, ease: 'easeOut' }}
            className="md:hidden absolute inset-0 w-full h-full object-cover"
          />
          {/* Desktop: 3-column grid */}
          <div className="hidden md:flex h-full">
            {images.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`${exp.title} - ${idx + 1}`}
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 10, ease: 'easeOut' }}
                className="w-1/3 h-full object-cover"
              />
            ))}
          </div>
        </>
      ) : (
        // Single image for other experiences
        <motion.img
          src={exp.image}
          alt={exp.title}
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <motion.div
        className="absolute bottom-16 left-8 md:left-16 max-w-lg z-10"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="w-14 h-14 rounded-full border-2 border-accent flex items-center justify-center text-white mb-5">
          {iconMap[exp.icon]}
        </div>
        <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
          {exp.title}
        </h2>
        <p className="text-white/80 font-body leading-relaxed text-base md:text-lg mb-4">
          {exp.longDescription || exp.description}
        </p>
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-body text-accent">
          <Check size={14} /> Incluso na estadia
        </span>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Helper: Split Screen Section (Pattern B)                          */
/* ------------------------------------------------------------------ */
function SplitExperience({
  exp,
  reversed = false,
}: {
  exp: (typeof experiences)[number];
  reversed?: boolean;
}) {
  return (
    <section className="py-0 lg:py-0">
      <div
        className={`grid lg:grid-cols-2 ${
          reversed ? '' : ''
        }`}
      >
        <div
          className={`flex items-center ${
            reversed ? 'lg:order-2' : ''
          }`}
        >
          <div className="px-6 md:px-12 lg:px-20 py-16 lg:py-24 max-w-xl mx-auto lg:mx-0">
            <FadeInUp>
              <div className="text-primary mb-5">
                {iconMap[exp.icon]}
              </div>
              {exp.category && (
                <p className="section-eyebrow">{exp.category}</p>
              )}
              <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
                {exp.title}
              </h2>
              <p className="text-text-medium font-body leading-relaxed mb-4">
                {exp.longDescription || exp.description}
              </p>
              {exp.seasonBadge && (
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-body font-medium mb-3 ${
                  exp.seasonBadge.includes('Inverno')
                    ? 'bg-blue-50 text-blue-700'
                    : 'bg-amber-50 text-amber-700'
                }`}>
                  {exp.seasonBadge.includes('Inverno') ? <Snowflake size={14} /> : <Sun size={14} />}
                  {exp.seasonBadge}
                </div>
              )}
              {exp.detail && (
                <p className="font-body italic text-accent text-sm">
                  {exp.detail}
                </p>
              )}
              {exp.tariffs && exp.tariffs.length > 0 && (
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-body text-primary-medium mb-3">
                    <Check size={14} /> Incluso na Estadia Pensão Completa
                  </div>
                  {exp.tariffs.map((tariff, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm font-body text-text-medium"
                    >
                      {tariff.included ? (
                        <Check size={16} className="text-accent" />
                      ) : (
                        <span className="w-4 h-4 border border-text-light rounded-sm" />
                      )}
                      <span>{tariff.label}</span>
                    </div>
                  ))}
                </div>
              )}
              {!exp.tariffs && (
                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-body text-primary-medium">
                    <Check size={14} /> Incluso na estadia
                  </span>
                </div>
              )}
            </FadeInUp>
          </div>
        </div>

        <div className={`${reversed ? 'lg:order-1' : ''}`}>
          {/* Desktop: parallax image */}
          <div className="hidden lg:block">
            <ParallaxImage
              src={exp.image}
              alt={exp.title}
              className="h-[600px] lg:h-[700px]"
              speed={0.12}
            />
          </div>
          {/* Mobile: static image */}
          <div className="lg:hidden">
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full h-[50vh] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ExperiencesPage() {
  // Map experiences by id for easy access
  const piscinas = experiences.find((e) => e.id === 1)!;
  const arLivre = experiences.find((e) => e.id === 2)!;
  const cavalo = experiences.find((e) => e.id === 3)!;
  const musica = experiences.find((e) => e.id === 4)!;
  const bikes = experiences.find((e) => e.id === 5)!;
  const jogos = experiences.find((e) => e.id === 6)!;
  const fazendinha = experiences.find((e) => e.id === 7)!;
  const vinhos = experiences.find((e) => e.id === 8)!;
  const bolhas = experiences.find((e) => e.id === 19)!;

  return (
    <main className="bg-cream">
      <SEO
        title="Experiências"
        description="Viva experiências únicas em Teresópolis: piscinas, passeios a cavalo, trilhas, música ao vivo e muito mais na Pousada Art Green."
        url="/experiencias"
      />
      {/* ============================================================ */}
      {/* 1. HERO CINEMATOGRÁFICO                                      */}
      {/* ============================================================ */}
      <section className="relative h-dvh overflow-hidden">
        <motion.img
          src="/experiencias/experiencias.webp"
          alt="Experiências Art Green"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />


        {/* Hero content */}
        <div
          className="absolute bottom-16 md:bottom-20 left-6 md:left-16 z-10 max-w-2xl"
        >
          <motion.p
            className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4 font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Lazer & Aventura
          </motion.p>
          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            viva cada momento
          </motion.h1>
          <motion.p
            className="text-white/70 font-body text-base md:text-lg max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Atividades inclusas na estadia para toda a família. Cada momento na
            Art Green é pensado para criar memórias especiais.
          </motion.p>
        </div>

        {/* Breadcrumbs and scroll indicator removed per design request */}
      </section>

      {/* ============================================================ */}
      {/* 2. TEXTO INTRODUTÓRIO                                        */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeInUp>
            <p className="section-eyebrow">Tudo incluso na sua estadia</p>
            <h2 className="section-title">
              cada detalhe pensado para criar memórias
            </h2>
            <div className="w-16 h-px bg-accent mx-auto my-6" />
            <p className="text-text-medium font-body leading-relaxed">
              Da piscina ao passeio a cavalo, da música ao vivo a degustação de
              vinhos — cada experiência foi desenhada para que você e sua família
              vivam momentos inesquecíveis na serra.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. PISCINAS — Pattern A (Full-Bleed Sticky)                  */}
      {/* ============================================================ */}
      <FullBleedExperience exp={piscinas} />

      {/* ============================================================ */}
      {/* EVENTOS SAZONAIS DE INVERNO                                   */}
      {/* ============================================================ */}
      <section className="bg-white">
        <SplitExperience exp={vinhos} reversed />
      </section>

      <section className="bg-cream">
        <SplitExperience exp={bolhas} />
      </section>

      {/* ============================================================ */}
      {/* 4. ÁREAS AO AR LIVRE + CICLOVIA — Pattern C (Offset Cards)   */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <FadeInUp className="text-center mb-12">
            <p className="section-eyebrow">Ao ar livre</p>
            <h2 className="section-title">natureza e aventura</h2>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1 — Áreas ao ar livre */}
            <FadeInUp>
              <div className="group relative h-[60vh] lg:h-[600px] overflow-hidden">
                <img
                  src={arLivre.image}
                  alt={arLivre.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-6 right-6 z-10">
                  <div className="text-white mb-3">
                    {iconMapSmall[arLivre.icon]}
                  </div>
                  <h3 className="font-display text-3xl text-white mb-2">
                    {arLivre.title}
                  </h3>
                  <p className="text-white/80 font-body text-sm leading-relaxed">
                    {arLivre.longDescription || arLivre.description}
                  </p>
                </div>
              </div>
            </FadeInUp>

            {/* Card 2 — Ciclovia (offset) */}
            <FadeInUp delay={0.15}>
              <div className="group relative h-[60vh] lg:h-[600px] overflow-hidden">
                <img
                  src={bikes.image}
                  alt={bikes.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-6 right-6 z-10">
                  <div className="text-white mb-3">
                    {iconMapSmall[bikes.icon]}
                  </div>
                  <h3 className="font-display text-3xl text-white mb-2">
                    {bikes.title}
                  </h3>
                  <p className="text-white/80 font-body text-sm leading-relaxed">
                    {bikes.longDescription || bikes.description}
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. PASSEIO A CAVALO — Pattern A (Full-Bleed Sticky)          */}
      {/* ============================================================ */}
      <FullBleedExperience exp={cavalo} />

      {/* ============================================================ */}
      {/* 6. MÚSICA AO VIVO — Vídeo                                   */}
      {/* ============================================================ */}
      <section className="bg-farmgreen">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center">
            <div className="px-6 md:px-12 lg:px-20 py-16 lg:py-24 max-w-xl mx-auto lg:mx-0">
              <FadeInUp>
                <div className="text-primary mb-5">
                  {iconMap[musica.icon]}
                </div>
                {musica.category && (
                  <p className="section-eyebrow">{musica.category}</p>
                )}
                <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
                  {musica.title}
                </h2>
                <p className="text-text-medium font-body leading-relaxed mb-4">
                  {musica.longDescription || musica.description}
                </p>
                {musica.detail && (
                  <p className="font-body italic text-accent text-sm">
                    {musica.detail}
                  </p>
                )}
                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-body text-primary-medium">
                    <Check size={14} /> Incluso na estadia
                  </span>
                </div>
              </FadeInUp>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 h-[50vh] lg:h-[700px]">
            <div className="overflow-hidden">
              <img
                src="/gastronomia/IMG_4654.webp"
                alt="Duo de violoncelo e violino ao entardecer"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src="/gastronomia/IMG_4653.webp"
                alt="Saxofonista tocando dentro do restaurante"
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'top' }}
              />
            </div>
            <div className="overflow-hidden">
              <img
                src="/gastronomia/IMG_4656.webp"
                alt="Saxofonista animando o jantar"
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'top' }}
              />
            </div>
            <div className="overflow-hidden">
              <img
                src="/gastronomia/IMG_4657.webp"
                alt="Violoncelista sorrindo durante apresentação"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. SALÃO DE JOGOS — Pattern D (Feature Section)              */}
      {/* ============================================================ */}
      <section className="bg-primary">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-6 md:px-12 lg:px-20 py-16 lg:py-24">
            <FadeInUp>
              <div className="text-white/60 mb-5">
                {iconMap[jogos.icon]}
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50 mb-3 font-body">
                {jogos.category}
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                {jogos.title}
              </h2>
              <p className="text-white/70 font-body leading-relaxed mb-8">
                {jogos.longDescription || jogos.description}
              </p>
              <ul className="space-y-3">
                {['Toto', 'Ping Pong', 'Sinuca'].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-white/80 font-body text-sm"
                  >
                    <Gamepad2 size={14} className="text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-body text-accent">
                  <Check size={14} /> Incluso na estadia
                </span>
              </div>
            </FadeInUp>
          </div>

          <FadeInUp>
            <div className="relative h-[50vh] lg:h-full min-h-[400px] overflow-hidden">
              <motion.img
                src={jogos.image}
                alt={jogos.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. FAZENDINHA — Enhanced                                     */}
      {/* ============================================================ */}
      {/* Full-bleed intro */}
      <section className="relative h-dvh overflow-hidden">
        <img
          src={fazendinha.image}
          alt={fazendinha.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-16 left-0 right-0 text-center z-10 px-6">
          <FadeInUp>
            <p className="section-eyebrow !text-white/60">
              Contato com a Natureza
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              nossa fazendinha
            </h2>
            <p className="text-white/70 font-body max-w-xl mx-auto leading-relaxed">
              {fazendinha.longDescription || fazendinha.description}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Badges strip */}
      <section className="bg-farmgreen py-8">
        <div className="max-w-4xl mx-auto px-4">
          <FadeInUp>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              {[
                'Interação com animais da fazenda',
                'Área segura para crianças',
                'Incluso na estadia',
              ].map((text) => (
                <span
                  key={text}
                  className="flex items-center gap-2 text-sm font-body text-primary"
                >
                  <PawPrint size={14} className="text-primary-medium" />
                  {text}
                </span>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. CTA IMERSIVO                                             */}
      {/* ============================================================ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/experiencias/venha.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 text-center px-6 py-20">
          <FadeInUp>
            <div className="w-16 h-px bg-accent mx-auto mb-8" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-5">
              venha viver tudo isso
            </h2>
            <p className="text-white/70 font-body mb-10 max-w-xl mx-auto leading-relaxed">
              Todas as experiências estão inclusas na sua reserva. Venha viver
              momentos inesquecíveis na serra.
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
