import { Check } from 'lucide-react';
import { useCallback } from 'react';

const highlights = [
  'Culinária italiana artesanal',
  'Café da manhã incluso',
  'Jantar especial às sextas e sábados',
  'Degustação de vinhos e queijos',
];

export default function GastronomySection() {
  // Ref callback to force muted + play (workaround for React muted bug)
  const initVideo = useCallback((el: HTMLVideoElement | null) => {
    if (!el) return;
    el.muted = true;
    el.play().catch(() => {});
  }, []);

  return (
    <section id="gastronomia" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Vídeo — 3 cols */}
          <div className="lg:col-span-3">
            <div className="overflow-hidden shadow-lg">
              {/* Desktop */}
              <video
                ref={initVideo}
                autoPlay
                loop
                playsInline
                src="https://greenland.b-cdn.net/horizontal%20-%20camera%20-%20Teres%C3%B3polis_1.mp4"
                className="hidden lg:block w-full aspect-[16/10] object-cover"
              />
              {/* Mobile */}
              <video
                ref={initVideo}
                autoPlay
                loop
                playsInline
                src="https://greenland.b-cdn.net/WhatsApp%20Video%202026-02-26%20at%2010.55.57.mp4"
                className="block lg:hidden w-full aspect-[9/16] object-cover"
              />
            </div>
          </div>

          {/* Texto — 2 cols */}
          <div className="lg:col-span-2">
            <p className="section-eyebrow">Restaurante Art Cucina</p>
            <h2 className="section-title text-2xl md:text-3xl lg:text-4xl">
              Experiência Gastronômica em Um Ambiente Romântico
            </h2>
            <p className="text-text-medium leading-relaxed mb-6">
              Descubra a culinária que encanta no coração do Art Green! Nosso
              restaurante oferece uma experiência gastronômica única, onde
              sabores autênticos se encontram com um ambiente aconchegante.
              Culinária italiana, café da manhã excepcional e jantar especial aos
              sábados com violino e violoncelo.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-dark text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <button className="btn-primary">Ver Cardápio</button>
          </div>
        </div>
      </div>
    </section>
  );
}
