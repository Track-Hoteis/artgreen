import FadeInUp from '@/components/animations/FadeInUp';

export default function VideoTransition() {
  return (
    <section aria-label="Video de transicao" className="bg-cream py-3 md:py-5">
      <div className="max-w-[1600px] mx-auto px-2 md:px-4">
        <FadeInUp>
          <div className="h-[300px] md:h-[360px] lg:h-[400px] overflow-hidden">
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
      </div>
    </section>
  );
}
