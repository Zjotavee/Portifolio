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
    <section id="process" className="bg-graphite">
      <div className="section-container">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-tech-blue text-sm font-bold tracking-widest uppercase mb-4"
          >
            Passo a Passo
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold font-display tracking-tighter text-white"
          >
            Como funciona o processo
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-tech-blue/30 to-transparent z-0" />
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-deep-black border border-white/10 rounded-3xl flex items-center justify-center mb-8 shadow-xl group hover:border-tech-blue/50 transition-colors">
                  <step.icon className="w-8 h-8 text-tech-blue" />
                </div>
                <span className="text-tech-blue font-black text-4xl opacity-20 mb-4">{step.id}</span>
                <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
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
