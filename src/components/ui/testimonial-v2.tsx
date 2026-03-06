import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'A pousada superou nossas expectativas. O ambiente e o atendimento tornaram nossa viagem inesquecivel.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Mariana Souza',
    role: 'Hospede',
  },
  {
    text: 'A reserva foi simples e a experiencia foi impecavel. Voltaremos com certeza na proxima temporada.',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Carlos Mendes',
    role: 'Hospede',
  },
  {
    text: 'Estrutura excelente para descansar em familia, com contato com a natureza e muito conforto.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Fernanda Lima',
    role: 'Hospede',
  },
  {
    text: 'Paisagem linda, quartos confortaveis e gastronomia de alto nivel. Experiencia completa na serra.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Rafael Duarte',
    role: 'Hospede',
  },
  {
    text: 'Atendimento atencioso do inicio ao fim. Nos sentimos acolhidos em todos os detalhes da estadia.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Juliana Rocha',
    role: 'Hospede',
  },
  {
    text: 'Ideal para desacelerar e aproveitar momentos especiais. Ambiente tranquilo e muito bem cuidado.',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Bruno Almeida',
    role: 'Hospede',
  },
  {
    text: 'A fazendinha e as areas externas encantaram toda a familia. Tudo muito bonito e organizado.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Patricia Nunes',
    role: 'Hospede',
  },
  {
    text: 'Cada espaco da pousada transmite cuidado e qualidade. Foi uma viagem perfeita para descansar.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Camila Martins',
    role: 'Hospede',
  },
  {
    text: 'Excelente custo-beneficio para quem busca conforto, natureza e um atendimento realmente diferenciado.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150',
    name: 'Eduardo Silva',
    role: 'Hospede',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

function TestimonialsColumn(props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: '-50%',
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="m-0 flex list-none flex-col gap-6 bg-transparent p-0 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? 'true' : 'false'}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow:
                      '0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                    transition: { type: 'spring', stiffness: 400, damping: 17 },
                  }}
                  whileFocus={{
                    scale: 1.03,
                    y: -8,
                    boxShadow:
                      '0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                    transition: { type: 'spring', stiffness: 400, damping: 17 },
                  }}
                  className="group w-full max-w-xs cursor-default select-none rounded-3xl border border-[#d4c8a7] bg-white p-8 shadow-lg shadow-black/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/40"
                >
                  <blockquote className="m-0 p-0">
                    <p className="m-0 font-body leading-relaxed text-text-medium">{text}</p>
                    <footer className="mt-6 flex items-center gap-3">
                      <img
                        width={42}
                        height={42}
                        src={image}
                        alt={`Avatar de ${name}`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-[#efe6cf] transition-all duration-300 ease-in-out group-hover:ring-accent/50"
                      />
                      <div className="flex flex-col">
                        <cite className="not-italic font-body text-lg leading-5 tracking-tight text-text-primary">
                          {name}
                        </cite>
                        <span className="mt-0.5 text-sm leading-5 tracking-tight text-text-medium">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
}

export default function TestimonialV2() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-cream py-20 md:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -1 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
        className="mx-auto max-w-7xl px-4"
      >
        <div className="mx-auto mb-12 flex max-w-[620px] flex-col items-center justify-center text-center md:mb-16">
          <div className="rounded-full border border-[#d4c8a7] bg-[#efe6cf]/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Depoimentos
          </div>

          <h2
            id="testimonials-heading"
            className="mt-6 font-display text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl"
          >
            O que nossos hospedes dizem
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-text-medium md:text-lg">
            Historias reais de quem viveu dias especiais no Art Green.
          </p>
        </div>

        <div
          className="mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
          role="region"
          aria-label="Depoimentos em rolagem"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </motion.div>
    </section>
  );
}
