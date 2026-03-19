import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'A pousada superou nossas expectativas. O ambiente e o atendimento tornaram nossa viagem inesquecível.',
    name: 'Mariana Souza',
    role: 'Hóspede',
  },
  {
    text: 'A reserva foi simples e a experiência foi impecável. Voltaremos com certeza na próxima temporada.',
    name: 'Carlos Mendes',
    role: 'Hóspede',
  },
  {
    text: 'Estrutura excelente para descansar em família, com contato com a natureza e muito conforto.',
    name: 'Fernanda Lima',
    role: 'Hóspede',
  },
  {
    text: 'Paisagem linda, quartos confortáveis e gastronomia de alto nível. Experiência completa na serra.',
    name: 'Rafael Duarte',
    role: 'Hóspede',
  },
  {
    text: 'Atendimento atencioso do início ao fim. Nos sentimos acolhidos em todos os detalhes da estadia.',
    name: 'Juliana Rocha',
    role: 'Hóspede',
  },
  {
    text: 'Ideal para desacelerar e aproveitar momentos especiais. Ambiente tranquilo e muito bem cuidado.',
    name: 'Bruno Almeida',
    role: 'Hóspede',
  },
  {
    text: 'A fazendinha e as áreas externas encantaram toda a família. Tudo muito bonito e organizado.',
    name: 'Patricia Nunes',
    role: 'Hóspede',
  },
  {
    text: 'Cada espaço da pousada transmite cuidado e qualidade. Foi uma viagem perfeita para descansar.',
    name: 'Camila Martins',
    role: 'Hóspede',
  },
  {
    text: 'Excelente custo-benefício para quem busca conforto, natureza e um atendimento realmente diferenciado.',
    name: 'Eduardo Silva',
    role: 'Hóspede',
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
              {props.testimonials.map(({ text, name, role }, i) => (
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
            className="mt-6 font-display text-4xl font-extrabold tracking-tight text-text-primary"
          >
            O que nossos hóspedes dizem
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-text-medium md:text-lg">
            Histórias reais de quem viveu dias especiais no Art Green.
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
