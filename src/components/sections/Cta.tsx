import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Mail, MessageSquare } from 'lucide-react';

export default function Cta() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-deep-black relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display tracking-tighter text-white mb-8 leading-tight">
              Vamos construir algo <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-tech-blue-light">
                extraordinário?
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-slate-400 mb-12 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Se você precisa de um website profissional que transmita confiança e ajude seu negócio a crescer, estou pronto para ajudar.
            </p>
            
            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-4 text-slate-300 group">
                <div className="w-12 h-12 rounded-2xl bg-graphite border border-white/5 flex items-center justify-center group-hover:border-tech-blue/50 transition-colors">
                  <Mail className="w-5 h-5 text-tech-blue" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email</p>
                  <a href="mailto:hello@joaovitor.dev" className="text-lg hover:text-tech-blue transition-colors">
                    hello@joaovitor.dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-slate-300 group">
                <div className="w-12 h-12 rounded-2xl bg-graphite border border-white/5 flex items-center justify-center group-hover:border-tech-blue/50 transition-colors">
                  <MessageSquare className="w-5 h-5 text-tech-blue" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">WhatsApp</p>
                  <a href="#" className="text-lg hover:text-tech-blue transition-colors">
                    (85) 99999-9999
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full bg-graphite/50 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden shadow-2xl"
          >
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">Mensagem Enviada!</h3>
                <p className="text-slate-400">
                  Obrigado pelo contato. Retornarei o mais breve possível para discutirmos seu projeto.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-deep-black/50 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-tech-blue transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-deep-black/50 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-tech-blue transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="type" className="text-sm font-medium text-slate-400">Tipo de Projeto</label>
                  <select 
                    id="type" 
                    required
                    defaultValue=""
                    className="w-full bg-deep-black/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-tech-blue transition-all appearance-none"
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="website">Website Profissional</option>
                    <option value="system">Sistema Web</option>
                    <option value="saas">Aplicação SaaS</option>
                    <option value="uxui">UX/UI Design</option>
                    <option value="other">Outro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-400">Mensagem</label>
                  <textarea 
                    id="message" 
                    required
                    rows={4}
                    className="w-full bg-deep-black/50 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-tech-blue transition-all resize-none"
                    placeholder="Conte-me um pouco sobre o seu projeto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? 'Enviando...' : 'Quero criar meu site'}
                  {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-tech-blue/10 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}
