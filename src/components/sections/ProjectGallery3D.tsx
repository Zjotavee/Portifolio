import { motion } from 'motion/react';
import { useProjectStore } from '@/store/useProjectStore';
import { Link } from 'react-router-dom';

export default function ProjectGallery3D() {
  const projects = useProjectStore((state) => state.projects).slice(0, 3);

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold font-display text-white text-center mb-16">Showcase Digital</h2>
        <div className="flex items-center justify-center gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`w-64 h-96 bg-secondary-bg rounded-[2rem] border border-tech-gray p-4 flex flex-col items-center justify-center ${index === 1 ? 'z-20 scale-110' : 'z-10 rotate-y-12 opacity-50'}`}
              whileHover={{ scale: 1.1, rotateY: 0 }}
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-white font-bold">{project.title}</h3>
              <Link to={`/project/${project.id}`} className="mt-4 text-tech-blue font-bold">Ver Projeto</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
