import { motion } from 'motion/react';
import { ShieldCheck, Smartphone, Zap, TrendingUp, Monitor } from 'lucide-react';

const results = [
  {
    title: 'Website moderno e profissional',
    icon: Monitor,
  },
  {
    title: 'Design pensado para transmitir confiança',
    icon: ShieldCheck,
  },
  {
    title: 'Experiência otimizada para celular',
    icon: Smartphone,
  },
  {
    title: 'Carregamento rápido',
    icon: Zap,
  },
  {
    title: 'Estrutura pensada para crescimento do negócio',
    icon: TrendingUp,
  },
];

export default function Results() {
  return (
    <section className="bg-main-bg relative overflow-hidden py-24 md:py-32">
      <div className="section-container relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-tech-blue text-sm font-bold tracking-widest uppercase mb-4"
          >
            Benefícios
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tighter text-dark-text"
          >
            O que você recebe ao criar seu site comigo
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-white border border-light-gray rounded-[2.5rem] flex flex-col items-center text-center group hover:shadow-2xl hover:shadow-tech-blue/5 transition-all duration-500"
            >
              <div className="w-20 h-20 bg-tech-blue/5 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-tech-blue group-hover:text-white transition-all duration-500">
                <result.icon className="w-10 h-10 text-tech-blue group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-dark-text leading-tight group-hover:text-tech-blue transition-colors">
                {result.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tech-blue/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
