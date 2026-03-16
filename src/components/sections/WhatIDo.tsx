import { motion } from 'motion/react';
import { Map, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Planejamento',
    description: 'Estratégia e estrutura focadas nos seus objetivos de negócio.',
    icon: Map,
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    title: 'Design UX/UI',
    description: 'Interfaces modernas, intuitivas e visualmente impactantes.',
    icon: PenTool,
    gradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    title: 'Desenvolvimento',
    description: 'Código limpo, rápido e otimizado para todos os dispositivos.',
    icon: Code,
    gradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    title: 'Website Pronto',
    description: 'Lançamento e suporte para garantir o sucesso do seu projeto.',
    icon: Rocket,
    gradient: 'from-orange-500/10 to-red-500/10',
  },
];

export default function WhatIDo() {
  return (
    <section id="services" className="bg-secondary-bg py-24 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-tech-blue text-sm font-bold tracking-widest uppercase mb-4"
          >
            Processo Criativo
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tighter text-dark-text mb-12"
          >
            Como eu crio <span className="text-tech-blue">Websites Profissionais</span>
          </motion.h3>

          {/* Central Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-20 relative"
          >
            <div className="glass-container overflow-hidden aspect-video shadow-2xl shadow-tech-blue/5">
              <iframe
                src="https://player.vimeo.com/video/1174119451?autoplay=1&loop=1&muted=1&background=1&badge=0&autopause=0&player_id=0&app_id=58479"
                className="absolute top-0 left-0 w-full h-full rounded-[2rem]"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Process Video"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`card-glass group relative overflow-hidden bg-gradient-to-br ${step.gradient}`}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <step.icon className="w-7 h-7 text-tech-blue" />
                </div>
                <h4 className="text-xl font-bold text-dark-text mb-4 group-hover:text-tech-blue transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
              
              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-tech-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
