import { motion } from 'motion/react';
import { Globe, Layout, Zap, Code } from 'lucide-react';

const services = [
  {
    title: 'Criação de Websites Profissionais',
    description: 'Sites modernos, rápidos e adaptados para celular.',
    icon: Globe,
  },
  {
    title: 'Design focado no usuário',
    description: 'Estrutura pensada para que seus visitantes encontrem tudo com facilidade.',
    icon: Layout,
  },
  {
    title: 'Performance e velocidade',
    description: 'Websites rápidos que oferecem uma experiência fluida.',
    icon: Zap,
  },
  {
    title: 'Desenvolvimento completo',
    description: 'Todo o site é desenvolvido com tecnologia moderna e arquitetura profissional.',
    icon: Code,
  },
];

export default function WhatIDo() {
  return (
    <section id="services" className="bg-deep-black">
      <div className="section-container">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-tech-blue text-sm font-bold tracking-widest uppercase mb-4"
          >
            O que eu faço
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold font-display tracking-tighter text-white"
          >
            Como posso ajudar o seu negócio
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-glass group"
            >
              <div className="w-12 h-12 bg-tech-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-tech-blue/20 transition-colors">
                <service.icon className="w-6 h-6 text-tech-blue" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
