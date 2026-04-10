import { useEffect, useRef, useState } from 'react';

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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Ensure muted + playsinline for Safari/iOS autoplay policy
    el.muted = true;
    el.defaultMuted = true;
    el.setAttribute('muted', '');
    el.setAttribute('playsinline', '');
    el.setAttribute('webkit-playsinline', '');

    const playWhenReady = () => {
      if (el.readyState >= 3) {
        safePlay(el);
        return;
      }

      const tryPlay = () => safePlay(el);
      // Safari sometimes fires 'loadeddata' but not 'canplay'; listen to both
      el.addEventListener('canplay', tryPlay, { once: true });
      el.addEventListener('loadeddata', tryPlay, { once: true });
    };

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
            if (!activeSrc) {
              el.preload = 'auto';
              // Use <source> element via React state (better Safari compat than el.src)
              setActiveSrc(lazySrc);
              // Fallback: also set src directly in case React render hasn't flushed yet
              if (!el.querySelector('source[src]')) {
                el.src = lazySrc;
              }
              try {
                el.load();
              } catch {}
            }

            if (typeof startAtSeconds === 'number' && startAtSeconds > 0) {
              const setStartTime = () => {
                try {
                  el.currentTime = startAtSeconds;
                } catch {}
              };

              if (el.readyState >= 1) {
                setStartTime();
              } else {
                el.addEventListener('loadedmetadata', setStartTime, { once: true });
              }
            }

            playWhenReady();
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
  }, [lazyRootMargin, lazySrc, startAtSeconds, activeSrc]);

  return (
    <video ref={ref} muted playsInline preload="none" {...props}>
      {activeSrc && <source src={activeSrc} type="video/mp4" />}
      <track kind="captions" default />
    </video>
  );
}
