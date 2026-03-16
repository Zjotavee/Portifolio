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
    <section className="bg-deep-black relative overflow-hidden">
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
            className="text-3xl sm:text-4xl md:text-6xl font-bold font-display tracking-tighter text-white"
          >
            O que você recebe ao criar seu site comigo
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-graphite/30 border border-white/5 rounded-3xl flex flex-col items-center text-center group hover:bg-graphite/50 transition-all"
            >
              <div className="w-16 h-16 bg-tech-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <result.icon className="w-8 h-8 text-tech-blue" />
              </div>
              <h4 className="text-xl font-bold text-white leading-tight">
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
