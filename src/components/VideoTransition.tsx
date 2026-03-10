import FadeInUp from '@/components/animations/FadeInUp';

export default function VideoTransition() {
  return (
    <section aria-label="Video de transicao" className="hidden md:block bg-cream">
      <FadeInUp>
        <div className="w-full h-[300px] md:h-[360px] lg:h-[400px] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="https://greenland.b-cdn.net/horizontal%20-%20camera%20-%20Teres%C3%B3polis_1.mp4"
            className="w-full h-full object-cover"
          />
        </div>
      </FadeInUp>
    </section>
  );
}
