import { useCallback, useEffect, useRef, useState } from 'react';

type Props = React.VideoHTMLAttributes<HTMLVideoElement> & {
  lazySrc: string;
  /** rootMargin passed to IntersectionObserver (e.g. '0px 0px 300px 0px') */
  lazyRootMargin?: string;
  /** Start playback from this second once metadata is loaded */
  startAtSeconds?: number;
};

const RETRY_DELAYS = [500, 1500];

export default function VideoLazy({
  lazySrc,
  lazyRootMargin = '0px 0px 900px 0px',
  startAtSeconds,
  autoPlay: _autoPlay,
  className,
  poster,
  ...props
}: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [showPlayBtn, setShowPlayBtn] = useState(false);
  const shouldPlayRef = useRef(false);
  const retryRef = useRef(0);

  // ── Attempt play with retry logic ──
  const attemptPlay = useCallback((el: HTMLVideoElement) => {
    const doPlay = () => {
      try {
        const p = el.play();
        if (p !== undefined) {
          p.then(() => {
            setShowPlayBtn(false);
          }).catch(() => {
            // Retry with increasing delays
            if (retryRef.current < RETRY_DELAYS.length) {
              const delay = RETRY_DELAYS[retryRef.current]!;
              retryRef.current += 1;
              setTimeout(() => doPlay(), delay);
            } else {
              // All retries exhausted — show play button for user gesture
              setShowPlayBtn(true);
            }
          });
        }
      } catch {
        setShowPlayBtn(true);
      }
    };
    doPlay();
  }, []);

  // ── Load + play once src is set (uses el.src, NOT <source> element) ──
  useEffect(() => {
    if (!loaded) return;
    const el = ref.current;
    if (!el) return;

    // Set src directly on element — more reliable than <source> on iOS Safari
    el.preload = 'auto';
    el.src = lazySrc;

    if (typeof startAtSeconds === 'number' && startAtSeconds > 0) {
      const setStart = () => { try { el.currentTime = startAtSeconds; } catch {} };
      if (el.readyState >= 1) setStart();
      else el.addEventListener('loadedmetadata', setStart, { once: true });
    }

    const tryPlay = () => attemptPlay(el);
    if (el.readyState >= 3) {
      tryPlay();
    } else {
      el.addEventListener('canplay', tryPlay, { once: true });
      el.addEventListener('loadeddata', tryPlay, { once: true });
    }

    // Show play button on stall/error
    const onStalled = () => setShowPlayBtn(true);
    const onError = () => setShowPlayBtn(true);
    el.addEventListener('stalled', onStalled, { once: true });
    el.addEventListener('error', onError, { once: true });

    return () => {
      el.removeEventListener('stalled', onStalled);
      el.removeEventListener('error', onError);
    };
  }, [loaded, lazySrc, startAtSeconds, attemptPlay]);

  // ── IntersectionObserver triggers lazy load ──
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Ensure muted + playsinline for Safari/iOS autoplay policy
    el.muted = true;
    el.defaultMuted = true;
    el.setAttribute('muted', '');
    el.setAttribute('playsinline', '');
    el.setAttribute('webkit-playsinline', '');

    // Resume playback when tab regains focus (Safari pauses background tabs)
    const onVisibility = () => {
      if (document.visibilityState === 'visible' && el.paused && el.readyState >= 2) {
        attemptPlay(el);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            shouldPlayRef.current = true;
            retryRef.current = 0;
            setLoaded(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.01, rootMargin: lazyRootMargin }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [lazyRootMargin, lazySrc, attemptPlay]);

  // ── Fallback: user gesture starts playback (guaranteed on iOS) ──
  const handleInteraction = useCallback(() => {
    const el = ref.current;
    if (el && el.paused && shouldPlayRef.current) {
      retryRef.current = 0;
      attemptPlay(el);
    }
  }, [attemptPlay]);

  return (
    <div className={`relative ${className ?? ''}`} style={{ lineHeight: 0 }}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        ref={ref}
        muted
        playsInline
        webkit-playsinline=""
        preload="none"
        poster={poster}
        onClickCapture={handleInteraction}
        onTouchStartCapture={handleInteraction}
        className="w-full h-full object-cover"
        {...props}
      >
        <track kind="captions" default />
      </video>

      {/* Play button fallback – shown when autoplay fails after retries */}
      {showPlayBtn && (
        <button
          type="button"
          aria-label="Reproduzir vídeo"
          onClick={handleInteraction}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/20"
        >
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm shadow-lg transition-transform active:scale-90">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#374E38] ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
