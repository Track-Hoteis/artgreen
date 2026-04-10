import { useCallback, useEffect, useRef, useState } from 'react';

type Props = React.VideoHTMLAttributes<HTMLVideoElement> & {
  lazySrc: string;
  /** rootMargin passed to IntersectionObserver (e.g. '0px 0px 300px 0px') */
  lazyRootMargin?: string;
  /** Start playback from this second once metadata is loaded */
  startAtSeconds?: number;
};

/**
 * Lazy-loaded video following the proven Bunny CDN pattern:
 * 1. IntersectionObserver watches a sentinel div
 * 2. When visible → mount a native <video autoPlay muted playsInline> with static <source>
 * 3. Let the browser handle playback — NO el.play() / el.load() / el.src
 * 4. Fallback play button if autoplay is blocked (Low Power Mode, etc.)
 */
export default function VideoLazy({
  lazySrc,
  lazyRootMargin = '0px 0px 900px 0px',
  startAtSeconds,
  className,
  poster,
  ...props
}: Props) {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [showPlayBtn, setShowPlayBtn] = useState(false);

  // ── IntersectionObserver on sentinel div ──
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || shouldRender) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldRender(true);
          obs.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: lazyRootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [lazyRootMargin, shouldRender]);

  // ── Once video mounts: handle startAtSeconds + detect stalled autoplay ──
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    // Optional start offset
    if (typeof startAtSeconds === 'number' && startAtSeconds > 0) {
      const setStart = () => {
        try { el.currentTime = startAtSeconds; } catch {}
      };
      if (el.readyState >= 1) setStart();
      else el.addEventListener('loadedmetadata', setStart, { once: true });
    }

    // If still paused after 4s, show play button (Low Power Mode, etc.)
    const stallTimer = setTimeout(() => {
      if (el.paused) setShowPlayBtn(true);
    }, 4000);

    // Hide play button once video actually plays
    const onPlaying = () => setShowPlayBtn(false);
    el.addEventListener('playing', onPlaying);

    return () => {
      clearTimeout(stallTimer);
      el.removeEventListener('playing', onPlaying);
    };
  }, [shouldRender, startAtSeconds]);

  // ── Manual play for fallback button ──
  const handlePlay = useCallback(() => {
    const el = videoRef.current;
    if (el && el.paused) {
      try {
        const p = el.play();
        if (p) p.then(() => setShowPlayBtn(false)).catch(() => {});
      } catch {}
    }
  }, []);

  return (
    <div
      ref={sentinelRef}
      className={`relative ${className ?? ''}`}
      style={{ lineHeight: 0 }}
    >
      {shouldRender && (
        <>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster={poster}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover pointer-events-none"
            style={{ minWidth: '100%', minHeight: '100%' }}
            {...props}
          >
            <source src={lazySrc} type="video/mp4" />
            <track kind="captions" default />
          </video>

          {/* Play button fallback – Low Power Mode, Data Saver, etc. */}
          {showPlayBtn && (
            <button
              type="button"
              aria-label="Reproduzir vídeo"
              onClick={handlePlay}
              className="absolute inset-0 z-10 flex items-center justify-center bg-black/20"
            >
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm shadow-lg transition-transform active:scale-90">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 text-[#374E38] ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}
        </>
      )}
    </div>
  );
}
