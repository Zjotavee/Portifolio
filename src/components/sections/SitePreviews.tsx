import { motion } from 'motion/react';
import { useProjectStore } from '@/store/useProjectStore';
import { Eye, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SitePreviews() {
  const projects = useProjectStore((state) => state.projects);
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

  return (
    <section id="previews" className="bg-main-bg py-24 md:py-32 overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-tech-blue text-sm font-bold tracking-widest uppercase mb-4"
          >
            Portfólio Selecionado
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tighter text-dark-text mb-12"
          >
            Projetos que unem <span className="text-tech-blue">Design e Tecnologia</span>
          </motion.h3>

          {/* Intro Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-20 relative"
          >
            <div className="glass-container overflow-hidden aspect-video shadow-2xl shadow-tech-blue/5">
              <iframe
                src="https://player.vimeo.com/video/1174119390?autoplay=1&loop=1&muted=1&background=1&badge=0&autopause=0&player_id=0&app_id=58479"
                className="absolute top-0 left-0 w-full h-full rounded-[2rem]"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Portfolio Intro Video"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-light-gray hover:shadow-2xl hover:shadow-tech-blue/10 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                {/* Image with Zoom Effect */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-text/80 via-dark-text/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-white/70 mb-6 line-clamp-1 font-medium">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <Link 
                      to={`/project/${project.id}`}
                      className="px-6 py-3 bg-white text-dark-text rounded-full font-bold text-sm flex items-center gap-2 hover:bg-tech-blue hover:text-white transition-all duration-300"
                    >
                      <Eye className="w-4 h-4" />
                      Ver Detalhes
                    </Link>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white hover:text-dark-text transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/projects" className="btn-secondary inline-flex">
            Ver Todos os Projetos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
