import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const steps = [
  { title: 'Wireframe', description: 'Estrutura e grid' },
  { title: 'Design', description: 'Cores e identidade' },
  { title: 'Código', description: 'Engenharia e lógica' },
  { title: 'Website Final', description: 'Produto pronto' },
];

export default function WebsiteBorn() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="h-[400vh] relative bg-secondary-bg py-24">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-4">Veja um Website Nascer</h2>
        <p className="text-slate-400 mb-16">Do conceito ao produto final.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl px-8">
          {steps.map((step, index) => {
            const opacity = useTransform(
              scrollYProgress,
              [index / steps.length, (index + 0.25) / steps.length, (index + 0.5) / steps.length],
              [0.2, 1, 0.2]
            );
            
            return (
              <motion.div
                key={index}
                style={{ opacity }}
                className="p-8 bg-main-bg border border-tech-gray rounded-[2rem] text-center"
              >
                <h3 className="text-2xl font-bold text-tech-blue mb-2">{step.title}</h3>
                <p className="text-slate-500">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
