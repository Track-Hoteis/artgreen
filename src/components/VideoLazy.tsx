import { useEffect, useRef } from 'react';

type Props = React.VideoHTMLAttributes<HTMLVideoElement> & {
  lazySrc: string;
  /** rootMargin passed to IntersectionObserver (e.g. '0px 0px 300px 0px') */
  lazyRootMargin?: string;
  /** Start playback from this second once metadata is loaded */
  startAtSeconds?: number;
};

export default function VideoLazy({ lazySrc, lazyRootMargin = '0px 0px 300px 0px', startAtSeconds, ...props }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.muted = true;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!el.src) {
              el.src = lazySrc;
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

            el.play().catch(() => {});
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25, rootMargin: lazyRootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [lazyRootMargin, lazySrc, startAtSeconds]);

  return (
    <video ref={ref} {...props}>
      <track kind="captions" default />
    </video>
  );
}
