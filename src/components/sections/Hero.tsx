import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-20 pb-10 overflow-hidden px-4 sm:px-6">
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6 md:mb-8 backdrop-blur-md"
          >
            <Globe className="w-4 h-4 text-tech-blue animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-slate-300 tracking-wide uppercase">
              Websites Profissionais • UX Design • Full-Stack
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tighter text-white mb-4 md:mb-6 leading-[1.1] max-w-5xl"
          >
            Criação de Websites Profissionais que Fazem seu <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-tech-blue-light">
              Negócio Crescer Online
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mb-8 md:mb-12 font-light px-2"
          >
            Eu ajudo empresas e profissionais a transformar ideias em websites modernos, rápidos e pensados para gerar resultados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col sm:flex-row items-center w-full sm:w-auto space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link
              to="/projects"
              className="btn-primary w-full sm:w-auto"
            >
              Ver Projetos
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <a
              href="#contact"
              className="btn-secondary w-full sm:w-auto"
            >
              Iniciar Meu Site
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-500 animate-bounce"
      >
        <span className="text-[10px] md:text-xs uppercase tracking-widest mb-1 md:mb-2">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
