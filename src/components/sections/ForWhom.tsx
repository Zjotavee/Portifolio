import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const audiences = [
  'Empresas que precisam de presença digital profissional',
  'Empreendedores que querem apresentar seus serviços online',
  'Profissionais que desejam um site moderno e confiável',
  'Negócios que querem melhorar sua imagem na internet',
];

export default function ForWhom() {
  return (
    <section className="bg-graphite">
      <div className="section-container">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-tech-blue text-sm font-bold tracking-widest uppercase mb-4">
              Público Ideal
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold font-display tracking-tighter text-white mb-8">
              Para quem esse serviço é ideal
            </h3>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Meu trabalho é focado em quem busca excelência e resultados reais através de uma presença digital sólida.
            </p>
          </motion.div>

          <div className="space-y-4">
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-deep-black/50 border border-white/5 rounded-2xl"
              >
                <CheckCircle2 className="w-6 h-6 text-tech-blue shrink-0" />
                <span className="text-lg text-slate-200 font-medium">{audience}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
