import { useEffect, useRef } from 'react';

type Props = React.VideoHTMLAttributes<HTMLVideoElement> & {
  lazySrc: string;
  /** rootMargin passed to IntersectionObserver (e.g. '0px 0px 300px 0px') */
  lazyRootMargin?: string;
};

export default function VideoLazy({ lazySrc, lazyRootMargin = '0px 0px 300px 0px', ...props }: Props) {
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
            el.play().catch(() => {});
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25, rootMargin: lazyRootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [lazySrc]);

  return <video ref={ref} {...props} />;
}
