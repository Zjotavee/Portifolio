import { motion } from 'motion/react';
import { MessageSquare, Map, PenTool, Rocket } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Conversa inicial',
    description: 'Entendemos seu negócio e o que você precisa para criar a melhor estratégia.',
    icon: MessageSquare,
  },
  {
    id: '02',
    title: 'Planejamento do site',
    description: 'Definimos a estrutura ideal para apresentar seu serviço de forma clara e eficiente.',
    icon: Map,
  },
  {
    id: '03',
    title: 'Design e desenvolvimento',
    description: 'Seu website começa a ganhar forma com design moderno e tecnologia de ponta.',
    icon: PenTool,
  },
  {
    id: '04',
    title: 'Publicação do site',
    description: 'Seu site entra no ar pronto para receber visitantes e gerar resultados para seu negócio.',
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-secondary-bg py-24 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-tech-blue/10 border border-tech-blue/20 rounded-full text-tech-blue text-xs font-bold tracking-widest uppercase mb-6"
          >
            Fluxo de Trabalho
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tighter text-dark-text"
          >
            Como funciona o <span className="text-tech-blue">processo</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-tech-blue/20 to-transparent z-0" />
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white border border-light-gray rounded-[2rem] flex items-center justify-center mb-8 shadow-sm group-hover:border-tech-blue group-hover:shadow-xl group-hover:shadow-tech-blue/5 transition-all duration-500">
                  <step.icon className="w-10 h-10 text-tech-blue" />
                </div>
                <span className="text-tech-blue font-black text-5xl opacity-10 mb-4 group-hover:opacity-20 transition-opacity">
                  {step.id}
                </span>
                <h4 className="text-xl font-bold text-dark-text mb-4 group-hover:text-tech-blue transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
