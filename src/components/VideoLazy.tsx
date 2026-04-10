import { useCallback, useEffect, useRef, useState } from 'react';

type Props = React.VideoHTMLAttributes<HTMLVideoElement> & {
  lazySrc: string;
  /** rootMargin passed to IntersectionObserver (e.g. '0px 0px 300px 0px') */
  lazyRootMargin?: string;
  /** Start playback from this second once metadata is loaded */
  startAtSeconds?: number;
};

/** Safari-safe play(): older Safari may return undefined instead of a Promise */
function safePlay(el: HTMLVideoElement) {
  try {
    const p = el.play();
    if (p !== undefined) p.catch(() => {});
  } catch {
    /* ignore – play() threw synchronously (rare) */
  }
}

export default function VideoLazy({ lazySrc, lazyRootMargin = '0px 0px 900px 0px', startAtSeconds, autoPlay: _autoPlay, ...props }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const shouldPlayRef = useRef(false);

  // ── Second effect: once React has rendered the <source>, load + play ──
  useEffect(() => {
    if (!activeSrc) return;
    const el = ref.current;
    if (!el) return;

    el.preload = 'auto';
    try { el.load(); } catch {}

    if (typeof startAtSeconds === 'number' && startAtSeconds > 0) {
      const setStart = () => { try { el.currentTime = startAtSeconds; } catch {} };
      if (el.readyState >= 1) setStart();
      else el.addEventListener('loadedmetadata', setStart, { once: true });
    }

    const tryPlay = () => safePlay(el);
    if (el.readyState >= 3) {
      tryPlay();
    } else {
      el.addEventListener('canplay', tryPlay, { once: true });
      el.addEventListener('loadeddata', tryPlay, { once: true });
    }
  }, [activeSrc, startAtSeconds]);

  // ── First effect: IntersectionObserver triggers lazy load ──
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
        safePlay(el);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            shouldPlayRef.current = true;
            setActiveSrc(prev => prev || lazySrc);
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
  }, [lazyRootMargin, lazySrc]);

  // ── Fallback: if autoplay silently fails, start on first user touch/click ──
  const handleInteraction = useCallback(() => {
    const el = ref.current;
    if (el && el.paused && shouldPlayRef.current) {
      safePlay(el);
    }
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video
      ref={ref}
      muted
      playsInline
      // @ts-expect-error webkit-playsinline is non-standard but needed for old iOS
      webkit-playsinline=""
      preload="none"
      onClickCapture={handleInteraction}
      onTouchStartCapture={handleInteraction}
      {...props}
    >
      {activeSrc && <source src={activeSrc} type="video/mp4" />}
      <track kind="captions" default />
    </video>
  );
}
