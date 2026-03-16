import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useProjectStore } from '@/store/useProjectStore';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Projects() {
  const projects = useProjectStore((state) => state.projects);
  const [activeFilter, setActiveFilter] = useState('Todos');

  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach(p => p.technologies.forEach(t => techs.add(t)));
    return ['Todos', ...Array.from(techs).sort()];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Todos') return projects;
    return projects.filter(p => p.technologies.includes(activeFilter));
  }, [projects, activeFilter]);

  return (
    <div className="min-h-screen relative bg-deep-black">
      <Navbar />
      
      <main className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display tracking-tighter text-white mb-4 sm:mb-6">
              Todos os <span className="text-tech-blue">Projetos</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto md:mx-0">
              Uma visão completa dos websites e sistemas desenvolvidos, focados em performance, design e resultados.
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === tech
                    ? 'bg-tech-blue text-white shadow-lg shadow-tech-blue/20'
                    : 'bg-graphite text-slate-400 border border-white/5 hover:border-white/10 hover:text-white'
                }`}
              >
                {tech}
              </button>
            ))}
          </motion.div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-graphite/40 rounded-3xl overflow-hidden border border-white/5 hover:border-tech-blue/30 transition-all duration-500"
                >
                  <Link to={`/project/${project.id}`} className="block">
                    <div className="aspect-video overflow-hidden relative">
                      <div className="absolute inset-0 bg-deep-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2 sm:mb-3 group-hover:text-tech-blue transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-400 mb-4 sm:mb-6 line-clamp-2 leading-relaxed">
                        {project.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map(tech => (
                          <span key={tech} className="px-3 py-1 text-[10px] sm:text-xs font-medium text-tech-blue bg-tech-blue/10 rounded-full border border-tech-blue/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
