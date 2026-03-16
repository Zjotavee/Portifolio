import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useProjectStore } from '@/store/useProjectStore';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();
  const projects = useProjectStore((state) => state.projects);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-main-bg text-dark-text flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-bold font-display mb-4">Projeto não encontrado</h1>
          <Link to="/projects" className="text-tech-blue hover:underline transition-all">
            Voltar para projetos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-main-bg">
      <Navbar />
      
      <main className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <Link to="/projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-tech-blue mb-6 md:mb-8 transition-colors text-sm sm:text-base font-bold">
              <ArrowLeft className="w-4 h-4" />
              Voltar para Projetos
            </Link>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-display tracking-tighter text-dark-text mb-4 sm:mb-6 leading-tight">
              {project.title}
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mb-8 md:mb-12 leading-relaxed font-medium">
              {project.fullDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  Ver Website ao Vivo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  Código Fonte
                </a>
              )}
            </div>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="aspect-video rounded-[2.5rem] overflow-hidden mb-16 md:mb-24 border border-light-gray shadow-2xl shadow-tech-blue/5"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Details Grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 lg:gap-16 mb-16 md:mb-24">
            <div className="lg:col-span-2 space-y-12 md:space-y-20 order-2 lg:order-1">
              {project.clientDescription && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-dark-text mb-4 sm:mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-tech-blue rounded-full" />
                    O Cliente
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">{project.clientDescription}</p>
                </motion.section>
              )}

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-dark-text mb-4 sm:mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-tech-blue rounded-full" />
                  O Desafio
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">{project.problem}</p>
              </motion.section>

              {project.strategy && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-dark-text mb-4 sm:mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-tech-blue rounded-full" />
                    Estratégia Aplicada
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">{project.strategy}</p>
                </motion.section>
              )}

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-dark-text mb-4 sm:mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-tech-blue rounded-full" />
                  Resultados Obtidos
                </h2>
                <div className="p-8 bg-white border border-light-gray rounded-3xl shadow-sm">
                  <p className="text-base sm:text-lg text-dark-text leading-relaxed italic font-bold">"{project.results}"</p>
                </div>
              </motion.section>
            </div>

            <div className="space-y-8 md:space-y-12 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-3xl p-8 border border-light-gray shadow-sm"
              >
                <h3 className="text-lg sm:text-xl font-bold font-display text-dark-text mb-6">Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-4 py-2 text-xs sm:text-sm font-bold text-tech-blue bg-tech-blue/5 rounded-full border border-tech-blue/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-tech-blue/5 rounded-3xl p-8 border border-tech-blue/10"
              >
                <h3 className="text-lg sm:text-xl font-bold font-display text-tech-blue mb-4">Destaque do Projeto</h3>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tech-blue mt-1 shrink-0" />
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    Foco total em experiência do usuário e conversão de leads qualificados.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Gallery */}
          {project.galleryUrls && project.galleryUrls.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="mb-16 md:mb-24"
            >
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-dark-text mb-8 md:mb-12">Galeria do Projeto</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {project.galleryUrls.map((url, index) => (
                  <div key={index} className="aspect-video rounded-[2rem] overflow-hidden border border-light-gray shadow-lg group">
                    <img
                      src={url}
                      alt={`${project.title} gallery ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
