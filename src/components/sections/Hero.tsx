import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden bg-main-bg">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-tech-blue/5 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] animate-blob animation-delay-2000" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Headline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-tech-blue/10 border border-tech-blue/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-tech-blue animate-pulse" />
              <span className="text-xs font-bold text-tech-blue tracking-wider uppercase">
                Especialista em Websites Profissionais
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-display tracking-tight text-dark-text mb-6 leading-[1.05]">
              Sistemas Digitais <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-accent">
                que Escalam.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 font-medium leading-relaxed">
              Transformo ideias complexas em produtos digitais modernos, rápidos e focados em resultados.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/projects" className="btn-primary w-full sm:w-auto">
                Ver Projetos
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#contact" className="btn-secondary w-full sm:w-auto">
                Iniciar Projeto
              </a>
            </div>
          </motion.div>

          {/* Right Side: Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="relative"
          >
            <div className="glass-container relative z-10 overflow-hidden aspect-video shadow-2xl shadow-tech-blue/10">
              <iframe
                src="https://player.vimeo.com/video/1174119412?autoplay=1&loop=1&muted=1&background=1&badge=0&autopause=0&player_id=0&app_id=58479"
                className="absolute top-0 left-0 w-full h-full rounded-[2rem]"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Hero Video"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-tech-blue/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
