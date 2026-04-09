import { useCallback, useEffect, useRef, useState } from 'react';

const WORD_HEIGHT = 72; // px - height of each word slot
const WORD_HEIGHT_MOBILE = 52; // px

const sections = [
  {
    id: 'relaxar',
    word: 'relaxar',
    image: '/relaxar.webp',
    alt: 'Momento de relaxamento na pousada',
  },
  {
    id: 'sentir',
    word: 'sentir',
    image: '/sentir.webp',
    alt: 'Experiências sensoriais na natureza',
  },
];

const COOLDOWN_MS = 700;
const WHEEL_THRESHOLD = 50;
const TOUCH_THRESHOLD = 40;

export default function ImmersiveScrollSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomStarted, setZoomStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileSectionRef = useRef<HTMLDivElement>(null);

  const activeIndexRef = useRef(0);
  const isLockedRef = useRef(false);
  const cooldownRef = useRef(false);
  const deltaAccRef = useRef(0);
  const touchStartYRef = useRef(0);
  const exitingRef = useRef(false);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const goToIndex = useCallback((idx: number) => {
    if (idx < 0 || idx >= sections.length) return;
    activeIndexRef.current = idx;
    setActiveIndex(idx);
    cooldownRef.current = true;
    setTimeout(() => {
      cooldownRef.current = false;
    }, COOLDOWN_MS);
  }, []);

  // Get the active section ref (desktop or mobile)
  const getActiveSection = useCallback(() => {
    if (sectionRef.current && sectionRef.current.offsetParent !== null) {
      return sectionRef.current;
    }
    return mobileSectionRef.current;
  }, []);

  // Exit section: scroll programmatically past the section
  const exitSectionDown = useCallback(() => {
    const section = getActiveSection();
    if (!section) return;
    exitingRef.current = true;
    isLockedRef.current = false;
    const sectionEnd = section.offsetTop + section.offsetHeight;
    window.scrollTo({
      top: sectionEnd - window.innerHeight + 2,
      behavior: 'smooth',
    });
    setTimeout(() => {
      exitingRef.current = false;
    }, 1200);
  }, [getActiveSection]);

  const exitSectionUp = useCallback(() => {
    const section = getActiveSection();
    if (!section) return;
    exitingRef.current = true;
    isLockedRef.current = false;
    window.scrollTo({
      top: section.offsetTop - 2,
      behavior: 'smooth',
    });
    setTimeout(() => {
      exitingRef.current = false;
    }, 1200);
  }, [getActiveSection]);

  // Detect when section is in sticky position
  useEffect(() => {
    const checkLock = () => {
      if (exitingRef.current) return;

      const section = getActiveSection();
      if (!section) {
        isLockedRef.current = false;
        return;
      }

      const rect = section.getBoundingClientRect();

      // Section top is at or above viewport top, and section bottom is below viewport bottom
      if (rect.top <= 5 && rect.bottom - window.innerHeight > 5) {
        if (!isLockedRef.current) {
          isLockedRef.current = true;
          deltaAccRef.current = 0;

          // If entering from bottom (scrolling up), start at last tab
          // If entering from top (scrolling down), start at first tab
          // We detect by checking if activeIndex was already set
        }
      } else {
        isLockedRef.current = false;
      }
    };

    window.addEventListener('scroll', checkLock, { passive: true });
    checkLock();
    return () => window.removeEventListener('scroll', checkLock);
  }, [getActiveSection]);

  // Wheel event handler — ratchet behavior
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isLockedRef.current || exitingRef.current) return;

      const idx = activeIndexRef.current;

      // At first tab scrolling up — exit section upward
      if (idx === 0 && e.deltaY < 0) {
        deltaAccRef.current = 0;
        exitSectionUp();
        return;
      }

      // At last tab scrolling down — exit section downward
      if (idx === sections.length - 1 && e.deltaY > 0) {
        deltaAccRef.current = 0;
        exitSectionDown();
        return;
      }

      // Prevent default scroll — we handle tab changes
      e.preventDefault();

      if (cooldownRef.current) return;

      deltaAccRef.current += e.deltaY;

      if (Math.abs(deltaAccRef.current) >= WHEEL_THRESHOLD) {
        if (deltaAccRef.current > 0) {
          goToIndex(idx + 1);
        } else {
          goToIndex(idx - 1);
        }
        deltaAccRef.current = 0;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [goToIndex, exitSectionDown, exitSectionUp]);

  // Touch event handlers — mobile ratchet behavior
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isLockedRef.current || exitingRef.current) return;

      const idx = activeIndexRef.current;
      const deltaY = touchStartYRef.current - e.touches[0].clientY;

      // Allow natural scroll at boundaries
      if (idx === 0 && deltaY < -10) return;
      if (idx === sections.length - 1 && deltaY > 10) return;

      e.preventDefault();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isLockedRef.current || exitingRef.current) return;
      if (cooldownRef.current) return;

      const idx = activeIndexRef.current;
      const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;

      if (idx === 0 && deltaY < -TOUCH_THRESHOLD) {
        exitSectionUp();
        return;
      }

      if (idx === sections.length - 1 && deltaY > TOUCH_THRESHOLD) {
        exitSectionDown();
        return;
      }

      if (deltaY > TOUCH_THRESHOLD) {
        goToIndex(idx + 1);
      } else if (deltaY < -TOUCH_THRESHOLD) {
        goToIndex(idx - 1);
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goToIndex, exitSectionDown, exitSectionUp]);

  // Reset index when section is fully out of viewport
  useEffect(() => {
    const handleScroll = () => {
      const section = getActiveSection();
      if (!section) return;
      const rect = section.getBoundingClientRect();
      // Section is fully below viewport — reset to first
      if (rect.top > window.innerHeight + 100) {
        activeIndexRef.current = 0;
        setActiveIndex(0);
      }
      // Section is fully above viewport — set to last (for re-entry from bottom)
      if (rect.bottom < -100) {
        activeIndexRef.current = sections.length - 1;
        setActiveIndex(sections.length - 1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [getActiveSection]);

  // Preload images
  useEffect(() => {
    sections.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  // Trigger zoom animation after first paint
  useEffect(() => {
    const timeout = window.setTimeout(() => setZoomStarted(true), 40);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <section>
      {/* Desktop layout */}
      <div
        className="hidden lg:block"
        ref={sectionRef}
        style={{ height: '200vh' }}
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
                  Pensado para
                </p>

                {/* Word slot — one word at a time, sliding up/down */}
                <div className="relative" style={{ height: WORD_HEIGHT }}>
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
                        onClick={() => goToIndex(i)}
                        aria-hidden={i !== activeIndex ? true : undefined}
                        className="font-display italic text-5xl xl:text-6xl block cursor-pointer select-none"
                        style={{
                          color: '#746528',
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
                    onClick={() => goToIndex(i)}
                    className="h-[2px] rounded-full cursor-pointer"
                    style={{
                      width: i === activeIndex ? 24 : 8,
                      backgroundColor: i === activeIndex ? '#746528' : '#D1C9B5',
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

      {/* Mobile layout — slot animation (one word at a time) */}
      <div
        className="lg:hidden"
        ref={mobileSectionRef}
        style={{ height: '200vh' }}
      >
        <div className="sticky top-0 h-dvh relative overflow-hidden bg-black">
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

          {/* Text overlay — one word at a time (slot) */}
          <div className="absolute bottom-28 left-0 right-0 text-center px-6">
            <p
              className="font-body uppercase text-xs tracking-[0.3em] mb-3"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              Pensado para
            </p>

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
