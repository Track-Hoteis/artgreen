import FadeInUp from '@/components/animations/FadeInUp';
import VideoLazy from '@/components/VideoLazy';

export default function VideoTransition() {
  return (
    <section aria-label="Vídeo de transição" className="bg-cream">
      <FadeInUp>
        <div className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
          <VideoLazy
            lazySrc="https://greenland.b-cdn.net/transicao-desktop.mp4"
            lazyRootMargin="0px 0px 1200px 0px"
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover"
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
