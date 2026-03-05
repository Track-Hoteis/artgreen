import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function TestimonialsSection() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-farmgreen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-12 md:mb-14">
          <div>
            <p className="section-eyebrow">O Que Dizem Sobre Nós</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight">
              Depoimentos dos Hóspedes
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <div className="text-center lg:text-right">
              <p className="font-display text-5xl lg:text-6xl font-bold leading-none">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </p>
              <p className="text-text-medium text-2xl -mt-1">Reviews ★★★★★</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredTestimonials.map((item) => (
            <article key={item.id} className="bg-white p-7 md:p-8 flex flex-col">
              <div className="flex items-center gap-1 mb-5 text-primary">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-primary text-primary"
                  />
                ))}
                <span className="text-lg md:text-xl text-primary ml-1">(4.5)</span>
              </div>

              <p className="text-text-medium text-base md:text-lg leading-relaxed mb-8 flex-1">
                {item.text}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full bg-primary/15 text-primary font-semibold flex items-center justify-center">
                  {item.initials}
                </div>
                <div>
                  <p className="font-display text-xl md:text-2xl font-bold text-dark leading-tight">
                    {item.name}
                  </p>
                  <p className="text-text-medium text-sm md:text-base mt-1">
                    {item.handle || 'Hóspede'}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
