import FadeInUp from '@/components/animations/FadeInUp';
import VideoLazy from '@/components/VideoLazy';

export default function VideoTransition() {
  return (
    <section aria-label="Vídeo de transição" className="bg-cream">
      <FadeInUp>
        <div className="relative w-full h-[40dvh] md:h-[60dvh] overflow-hidden">
          <VideoLazy
            lazySrc="https://greenland.b-cdn.net/horizontal%20-%20camera%20-%20Teres%C3%B3polis_1.mp4"
            lazyRootMargin="0px 0px 1200px 0px"
            poster="/gastronomia/IMG_4652.webp"
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover object-top"
          />
          <img
            src="/logo-artcucina.webp"
            alt="Art Cucina"
            className="absolute bottom-4 right-4 h-12 lg:h-16 opacity-60 pointer-events-none"
          />
        </div>
      </FadeInUp>
    </section>
  );
}
