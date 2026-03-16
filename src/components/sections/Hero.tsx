import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden bg-main-bg">
      {/* Background Animated Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(to right, #2A2A2A 1px, transparent 1px), linear-gradient(to bottom, #2A2A2A 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

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
              <span className="w-2 h-2 rounded-full bg-tech-cyan animate-pulse" />
              <span className="text-xs font-bold text-tech-cyan tracking-widest uppercase">
                Engenharia Digital de Elite
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-display tracking-tighter text-white mb-8 leading-[1.05]">
              Sistemas Digitais <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-tech-cyan">
                que Escalam.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 font-medium leading-relaxed">
              Transformo ideias complexas em produtos digitais futuristas, rápidos e focados em performance extrema.
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

          {/* Right Side: Video in Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="relative"
          >
            <div className="bg-secondary-bg/50 backdrop-blur-xl border border-tech-gray rounded-[2.5rem] p-4 shadow-2xl shadow-tech-blue/10 relative z-10">
              <div className="aspect-video overflow-hidden rounded-[2rem]">
                <iframe
                  src="https://player.vimeo.com/video/1174119412?autoplay=1&loop=1&muted=1&background=1&badge=0&autopause=0&player_id=0&app_id=58479"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title="Hero Video"
                />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-tech-blue/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-tech-cyan/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
