import { useState, useCallback, useEffect } from 'react';
import FadeInUp from '@/components/animations/FadeInUp';

const mosaicImages = [
  { src: '/fazendinha (1).webp', alt: 'Fazendinha imagem 1' },
  { src: '/fazendinha (2).webp', alt: 'Fazendinha imagem 2' },
  { src: '/fazendinha (3).webp', alt: 'Fazendinha imagem 3' },
  { src: '/fazendinha (4).webp', alt: 'Fazendinha imagem 4' },
  { src: '/fazendinha (5).webp', alt: 'Fazendinha imagem 5' },
  { src: '/fazendinha (6).webp', alt: 'Fazendinha imagem 6' },
  { src: '/fazendinha (7).webp', alt: 'Fazendinha imagem 7' },
  { src: '/fazendinha (8).webp', alt: 'Fazendinha imagem 8' },
];

/* Column A (left):  images 0, 2, 4, 6  —  tall, short, tall, short */
/* Column B (right): images 1, 3, 5, 7  —  short, tall, short, tall */
const colA = [0, 2, 4, 6];
const colB = [1, 3, 5, 7];

function ImageModal({
  src,
  alt,
  onClose,
  onPrev,
  onNext,
}: {
  src: string;
  alt: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-label={alt}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
        aria-label="Fechar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
        aria-label="Foto anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
        aria-label="Próxima foto"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
      <img
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function MasonryItem({
  src,
  alt,
  tall,
  index,
  onClick,
}: {
  src: string;
  alt: string;
  tall: boolean;
  index: number;
  onClick: () => void;
}) {
  return (
    <FadeInUp delay={index * 0.05}>
      <article
        className={`group relative overflow-hidden cursor-pointer ${
          tall ? 'row-span-2' : ''
        }`}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); }
        }}
      >
        <img
          src={src}
          alt={alt}
          loading={index < 4 ? 'eager' : 'lazy'}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      </article>
    </FadeInUp>
  );
}

export default function FazendinhaSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = useCallback((index: number) => setSelectedIndex(index), []);
  const closeModal = useCallback(() => setSelectedIndex(null), []);
  const goPrev = useCallback(() => setSelectedIndex((i) => i !== null ? (i - 1 + mosaicImages.length) % mosaicImages.length : null), []);
  const goNext = useCallback(() => setSelectedIndex((i) => i !== null ? (i + 1) % mosaicImages.length : null), []);

  return (
    <section id="fazendinha" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <FadeInUp className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-eyebrow">Diversão para toda a família</p>
          <h2 className="section-title">Nossa Fazendinha</h2>
          <p className="section-subtitle mx-auto">
            Um espaço encantador para aproximar crianças e adultos dos animais,
            com atividades leves e contato direto com a natureza.
          </p>
        </FadeInUp>

        {/* Masonry: 2 columns on mobile, 3 on md, 4 on lg
            Using CSS columns for true masonry with vertical images */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [&>*]:mb-3 md:[&>*]:mb-4">
          {mosaicImages.map((img, index) => (
            <FadeInUp key={img.src} delay={index * 0.04} className="break-inside-avoid">
              <article
                className="group relative overflow-hidden cursor-pointer"
                onClick={() => openModal(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(index); }
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={index < 4 ? 'eager' : 'lazy'}
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </article>
            </FadeInUp>
          ))}
        </div>

        {selectedIndex !== null && (
          <ImageModal
            src={mosaicImages[selectedIndex].src}
            alt={mosaicImages[selectedIndex].alt}
            onClose={closeModal}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </div>
    </section>
  );
}
