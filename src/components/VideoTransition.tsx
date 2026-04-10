import FadeInUp from '@/components/animations/FadeInUp';
import VideoLazy from '@/components/VideoLazy';

export default function VideoTransition() {
  return (
    <section aria-label="Vídeo de transição" className="bg-cream">
      <FadeInUp>
        <div className="relative w-full h-[40dvh] md:h-[60dvh] overflow-hidden">
          {/* Mobile: vertical 9:16 video */}
          <VideoLazy
            lazySrc="https://greenland.b-cdn.net/vertical%20artcucina.mp4"
            lazyRootMargin="0px 0px 1200px 0px"
            autoPlay
            loop
            playsInline
            className="block md:hidden w-full h-full object-cover"
          />
          {/* Desktop: horizontal video */}
          <VideoLazy
            lazySrc="https://greenland.b-cdn.net/transicao-desktop.mp4"
            lazyRootMargin="0px 0px 1200px 0px"
            autoPlay
            loop
            playsInline
            className="hidden md:block w-full h-full object-cover object-top"
          />
          <img
            src="/logo-artcucina.webp"
            alt="Art Cucina"
            className="absolute bottom-4 right-4 h-20 lg:h-28 opacity-60 pointer-events-none"
          />
        </div>
      </FadeInUp>
    </section>
  );
}
