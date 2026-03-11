import { useEffect, useRef, useState } from 'react';

const WORD_HEIGHT = 72; // px - height of each word slot

const sections = [
  {
    id: 'relaxar',
    word: 'relaxar',
    image: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_acomodacoes_ft-06.jpg',
    alt: 'Momento de relaxamento na pousada',
  },
  {
    id: 'sentir',
    word: 'sentir',
    image: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-25.jpg',
    alt: 'Experiencias sensoriais na natureza',
  },
  {
    id: 'desconectar',
    word: 'desconectar',
    image: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-34.jpg',
    alt: 'Desconexao e tranquilidade',
  },
  {
    id: 'desacelerar',
    word: 'desacelerar',
    image: 'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-27.jpg',
    alt: 'Momentos de desaceleracao',
  },
];

const WORD_HEIGHT_MOBILE = 52; // px
const DESKTOP_SEGMENT_VH = 25;
const MOBILE_SEGMENT_VH = 25;
const LAST_SLIDE_HOLD_VH = 100;

export default function ImmersiveScrollSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomStarted, setZoomStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileSectionRef = useRef<HTMLDivElement>(null);

  // Scroll-based index detection (shared for both desktop and mobile)
  useEffect(() => {
    const handleScroll = () => {
      const desktopSegment = window.innerHeight * (DESKTOP_SEGMENT_VH / 100);
      const mobileSegment = window.innerHeight * (MOBILE_SEGMENT_VH / 100);

      // Desktop
      const desktop = sectionRef.current;
      if (desktop && desktop.offsetParent !== null) {
        const scrolled = -desktop.getBoundingClientRect().top;
        const idx = Math.min(sections.length - 1, Math.max(0, Math.floor(scrolled / desktopSegment)));
        setActiveIndex(idx);
        return;
      }

      // Mobile
      const mobile = mobileSectionRef.current;
      if (mobile) {
        const scrolled = -mobile.getBoundingClientRect().top;
        setActiveIndex(
          Math.min(sections.length - 1, Math.max(0, Math.floor(scrolled / mobileSegment)))
        );
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Preload images
  useEffect(() => {
    sections.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  // Trigger after first paint so the first active image animates from 1.2 -> 1.
  useEffect(() => {
    const timeout = window.setTimeout(() => setZoomStarted(true), 40);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <section>
      {/* Desktop layout — keep last slide visible for 100vh before exiting */}
      <div
        className="hidden lg:block"
        ref={sectionRef}
        style={{
          height: `${(sections.length - 1) * DESKTOP_SEGMENT_VH + LAST_SLIDE_HOLD_VH + 100}vh`,
        }}
      >
        <div className="sticky top-0 h-dvh flex">
          {/* Left column */}
          <div
            className="w-1/2 flex items-center justify-center"
            style={{ backgroundColor: '#F5F3EE' }}
          >
            <div className="flex flex-col items-start">
              <div className="flex items-baseline gap-5">
                <p
                  className="font-body uppercase text-sm tracking-[0.3em] shrink-0"
                  style={{ color: '#6B6B6B' }}
                >
                  Feito para
                </p>

                <div className="relative">
                  <div
                    className="flex flex-col"
                    style={{
                      transform: `translateY(-${activeIndex * WORD_HEIGHT}px)`,
                      transition: 'transform 700ms ease-out',
                    }}
                  >
                    {sections.map((s, i) => (
                      <span
                        key={s.id}
                        className="font-display italic text-5xl xl:text-6xl block"
                        style={{
                          color: '#9A8B55',
                          height: WORD_HEIGHT,
                          lineHeight: `${WORD_HEIGHT}px`,
                          opacity: i === activeIndex ? 1 : 0.3,
                          transition: 'opacity 700ms ease-out',
                        }}
                      >
                        {s.word}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress bars */}
              <div className="flex items-center gap-2 mt-6">
                {sections.map((s, i) => (
                  <div
                    key={s.id}
                    className="h-[2px] rounded-full"
                    style={{
                      width: i === activeIndex ? 24 : 8,
                      backgroundColor: i === activeIndex ? '#9A8B55' : '#D1C9B5',
                      transition: 'all 500ms ease-out',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right column — stacked images with crossfade + automatic zoom */}
          <div className="w-1/2 relative overflow-hidden">
            {sections.map((s, i) => {
              const isActive = i === activeIndex;
              const zoom = isActive ? (zoomStarted ? 1 : 1.2) : 1.2;
              return (
                <img
                  key={s.id}
                  src={s.image}
                  alt={s.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: `scale(${zoom})`,
                    transition: 'opacity 1000ms ease-out, transform 7000ms ease-out',
                  }}
                />
              );
            })}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Mobile layout — same sticky+crossfade pattern */}
      <div
        className="lg:hidden"
        ref={mobileSectionRef}
        style={{
          height: `${(sections.length - 1) * MOBILE_SEGMENT_VH + LAST_SLIDE_HOLD_VH + 100}vh`,
        }}
      >
        <div className="sticky top-0 h-dvh relative overflow-hidden">
          {/* Stacked images with crossfade */}
          {sections.map((s, i) => {
            const isActive = i === activeIndex;
            return (
              <img
                key={s.id}
                src={s.image}
                alt={s.alt}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'scale(1)' : 'scale(1.05)',
                  transition: 'all 1000ms ease-out',
                }}
              />
            );
          })}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Text overlay */}
          <div className="absolute bottom-16 left-0 right-0 text-center px-6">
            <p
              className="font-body uppercase text-xs tracking-[0.3em] mb-3"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              Feito para
            </p>

            {/* Animated word slot */}
            <div
              className="overflow-hidden relative mx-auto"
              style={{ height: WORD_HEIGHT_MOBILE }}
            >
              <div
                className="flex flex-col items-center"
                style={{
                  transform: `translateY(-${activeIndex * WORD_HEIGHT_MOBILE}px)`,
                  transition: 'transform 700ms ease-out',
                }}
              >
                {sections.map((s) => (
                  <span
                    key={s.id}
                    className="font-display italic text-4xl sm:text-5xl block"
                    style={{
                      color: '#FFFFFF',
                      height: WORD_HEIGHT_MOBILE,
                      lineHeight: `${WORD_HEIGHT_MOBILE}px`,
                    }}
                  >
                    {s.word}
                  </span>
                ))}
              </div>
            </div>

            {/* Progress bars */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {sections.map((s, j) => (
                <div
                  key={s.id}
                  className="h-[2px] rounded-full"
                  style={{
                    width: j === activeIndex ? 24 : 8,
                    backgroundColor:
                      j === activeIndex ? '#FFFFFF' : 'rgba(255,255,255,0.35)',
                    transition: 'all 500ms ease-out',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
