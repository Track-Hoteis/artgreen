import { motion } from 'framer-motion';

import FadeInUp from '@/components/animations/FadeInUp';
import { experiences } from '@/data/experiences';

const experienceMedia = [
  {
    image:
      'https://lirp.cdn-website.com/8406003a/dms3rep/multi/opt/ag_area_lazer_ft-18-1920w.jpg',
    category: 'Lazer ao ar livre',
  },
  {
    image:
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-25.jpg',
    category: 'Experiencia rural',
  },
  {
    image:
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-34.jpg',
    category: 'Sabores selecionados',
  },
  {
    image:
      'https://irp.cdn-website.com/8406003a/dms3rep/multi/ag_area_lazer_ft-27.jpg',
    category: 'Diversao indoor',
  },
];

const serviceItems = [
  {
    title: 'Atendimento Premium',
    description: 'Equipe dedicada para personalizar sua estadia.',
  },
  {
    title: 'Estrutura Completa',
    description: 'Lazer, conforto e vivencias para todas as idades.',
  },
  {
    title: 'Natureza Viva',
    description: 'Paisagens verdes e atividades ao ar livre todos os dias.',
  },
  {
    title: 'Momentos em Familia',
    description: 'Programacao acolhedora para adultos e criancas.',
  },
];

export default function ExperiencesSection() {
  return (
    <section id="experiencias" className="py-20 md:py-28 bg-farmgreen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-14 md:mb-16">
          <FadeInUp className="lg:col-span-4">
            <p className="section-eyebrow">Servicos</p>
            <h2 className="section-title leading-tight">
              Enriquecendo sua estadia com experiencias exclusivas
            </h2>
            <a
              href="https://reservas.artgreenpousada.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-reserve"
            >
              Reservar Agora
            </a>
          </FadeInUp>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceItems.map((item, index) => (
              <FadeInUp key={item.title} delay={index * 0.06}>
                <article className="bg-white p-6 border border-primary/10 h-full">
                  <h3 className="font-display text-3xl text-text-primary mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-medium leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </FadeInUp>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.slice(0, 4).map((card, index) => (
            <FadeInUp key={card.id} delay={0.05 * index}>
              <motion.article
                whileHover={{ scale: 1.02, boxShadow: '0 14px 35px rgba(0,0,0,0.15)' }}
                transition={{ duration: 0.3 }}
                className="bg-white overflow-hidden h-full"
              >
                <img
                  src={experienceMedia[index].image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />
                <div className="px-6 py-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary-medium font-medium mb-2">
                    {experienceMedia[index].category}
                  </p>
                  <h3 className="font-display text-2xl text-text-primary mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-text-medium leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.article>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
