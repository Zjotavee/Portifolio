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
    <section className="bg-white py-24 md:py-32">
      <div className="section-container">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-tech-blue/10 border border-tech-blue/20 rounded-full text-tech-blue text-xs font-bold tracking-widest uppercase mb-6"
            >
              Público Ideal
            </motion.div>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tighter text-dark-text mb-8">
              Para quem esse <span className="text-tech-blue">serviço é ideal</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              Meu trabalho é focado em quem busca excelência e resultados reais através de uma presença digital sólida e profissional.
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
                className="flex items-center gap-4 p-6 bg-main-bg border border-light-gray rounded-2xl hover:border-tech-blue/30 hover:shadow-lg hover:shadow-tech-blue/5 transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-tech-blue shrink-0" />
                <span className="text-lg text-dark-text font-bold">{audience}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
