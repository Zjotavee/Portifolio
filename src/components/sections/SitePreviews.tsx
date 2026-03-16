import { motion } from 'motion/react';
import { useProjectStore } from '@/store/useProjectStore';
import { Eye, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SitePreviews() {
  const projects = useProjectStore((state) => state.projects);
  const liveProjects = projects.filter(p => p.liveUrl);

  return (
    <section id="previews" className="bg-deep-black">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-tech-blue text-sm font-bold tracking-widest uppercase mb-4">
            Projetos Recentes
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold font-display tracking-tighter text-white">
            Websites em <span className="text-tech-blue">Funcionamento</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {liveProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-graphite/40 rounded-[2rem] overflow-hidden border border-white/5 hover:border-tech-blue/30 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-deep-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute top-6 right-6 z-20">
                  <div className="bg-deep-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">Live</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8 sm:p-10">
                <h4 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 group-hover:text-tech-blue transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 mb-8 line-clamp-2 leading-relaxed">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link 
                    to={`/project/${project.id}`}
                    className="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <Eye className="w-4 h-4" />
                    Ver Detalhes
                  </Link>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 bg-tech-blue hover:bg-tech-blue-light text-white rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Acessar Site
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
