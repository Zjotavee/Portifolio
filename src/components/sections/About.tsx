import { motion } from 'motion/react';
import { User, Heart, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-deep-black overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-tech-blue/20 blur-[80px] rounded-full animate-pulse" />
            <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://i.ibb.co/NnpqhYcL/Whats-App-Image-2026-03-16-at-14-29-13.jpg"
                alt="João Vitor Trajano de Lima"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-tech-blue text-sm font-bold tracking-widest uppercase mb-4">
                Sobre Mim
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold font-display tracking-tighter text-white mb-6">
                Meu nome é João Vitor Trajano de Lima.
              </h3>
            </div>

            <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-light">
              <p>
                Sou desenvolvedor de websites e designer especializado em experiência do usuário.
              </p>
              <p>
                Meu trabalho é transformar ideias em websites modernos, claros e eficientes, que ajudam empresas a se posicionarem melhor na internet.
              </p>
              <p>
                Acredito que um bom site precisa unir três coisas: <span className="text-white font-medium">design</span>, <span className="text-white font-medium">funcionalidade</span> e <span className="text-white font-medium">experiência do usuário</span>.
              </p>
              <p>
                Quando esses elementos trabalham juntos, o resultado é um site que realmente representa o seu negócio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-10 h-10 bg-tech-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <User className="w-5 h-5 text-tech-blue" />
                </div>
                <span className="text-white font-bold text-sm uppercase tracking-wider">Design</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-10 h-10 bg-tech-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5 text-tech-blue" />
                </div>
                <span className="text-white font-bold text-sm uppercase tracking-wider">Funcionalidade</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-10 h-10 bg-tech-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-5 h-5 text-tech-blue" />
                </div>
                <span className="text-white font-bold text-sm uppercase tracking-wider">Experiência</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
