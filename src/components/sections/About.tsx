import { motion } from 'motion/react';
import { User, Heart, Lightbulb } from 'lucide-react';
import PremiumMedia from '@/components/ui/PremiumMedia';

export default function About() {
  return (
    <section id="about" className="bg-main-bg overflow-hidden py-24 md:py-32">
      <div className="section-container">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-tech-blue/10 blur-[80px] rounded-full animate-pulse" />
            <PremiumMedia
              src="https://i.ibb.co/NnpqhYcL/Whats-App-Image-2026-03-16-at-14-29-13.jpg"
              alt="João Vitor Trajano de Lima"
              containerClassName="relative z-10 w-full h-full rounded-[2.5rem] border border-light-gray shadow-2xl"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block px-4 py-1.5 bg-tech-blue/10 border border-tech-blue/20 rounded-full text-tech-blue text-xs font-bold tracking-widest uppercase mb-6"
              >
                Sobre Mim
              </motion.div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tighter text-dark-text mb-6">
                João Vitor <br />
                <span className="text-tech-blue">Trajano de Lima.</span>
              </h3>
            </div>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                Sou desenvolvedor de websites e designer especializado em experiência do usuário.
              </p>
              <p>
                Meu trabalho é transformar ideias em websites modernos, claros e eficientes, que ajudam empresas a se posicionarem melhor na internet.
              </p>
              <p>
                Acredito que um bom site precisa unir três pilares: <span className="text-tech-blue font-bold">design</span>, <span className="text-tech-blue font-bold">funcionalidade</span> e <span className="text-tech-blue font-bold">experiência</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {[
                { icon: User, label: 'Design' },
                { icon: Heart, label: 'Foco' },
                { icon: Lightbulb, label: 'Inovação' }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                >
                  <div className="w-12 h-12 bg-white border border-light-gray rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-tech-blue group-hover:text-white transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-dark-text font-bold text-xs uppercase tracking-wider">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
