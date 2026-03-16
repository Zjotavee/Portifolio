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
    <section id="contact" className="bg-main-bg relative overflow-hidden py-24 md:py-32">
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-tech-blue/10 border border-tech-blue/20 rounded-full text-tech-blue text-xs font-bold tracking-widest uppercase mb-6"
            >
              Contato
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-display tracking-tighter text-dark-text mb-8 leading-tight">
              Vamos construir algo <br className="hidden sm:block" />
              <span className="text-tech-blue">extraordinário?</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-12 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Se você precisa de um website profissional que transmita confiança e ajude seu negócio a crescer, estou pronto para ajudar.
            </p>
            
            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-4 text-dark-text group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-light-gray flex items-center justify-center group-hover:border-tech-blue/50 group-hover:bg-tech-blue/5 transition-all duration-300 shadow-sm">
                  <Mail className="w-5 h-5 text-tech-blue" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Email</p>
                  <a href="mailto:hello@joaovitor.dev" className="text-lg font-bold hover:text-tech-blue transition-colors">
                    hello@joaovitor.dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-dark-text group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-light-gray flex items-center justify-center group-hover:border-tech-blue/50 group-hover:bg-tech-blue/5 transition-all duration-300 shadow-sm">
                  <MessageSquare className="w-5 h-5 text-tech-blue" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">WhatsApp</p>
                  <a href="#" className="text-lg font-bold hover:text-tech-blue transition-colors">
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
            className="w-full bg-white p-8 md:p-12 rounded-[2.5rem] border border-light-gray relative overflow-hidden shadow-2xl shadow-tech-blue/5"
          >
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-dark-text mb-4">Mensagem Enviada!</h3>
                <p className="text-slate-600 font-medium">
                  Obrigado pelo contato. Retornarei o mais breve possível para discutirmos seu projeto.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-400">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-main-bg border border-light-gray rounded-2xl px-6 py-4 text-dark-text font-medium placeholder:text-slate-400 focus:outline-none focus:border-tech-blue focus:ring-4 focus:ring-tech-blue/5 transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-main-bg border border-light-gray rounded-2xl px-6 py-4 text-dark-text font-medium placeholder:text-slate-400 focus:outline-none focus:border-tech-blue focus:ring-4 focus:ring-tech-blue/5 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="type" className="text-xs font-bold uppercase tracking-widest text-slate-400">Tipo de Projeto</label>
                  <select 
                    id="type" 
                    required
                    defaultValue=""
                    className="w-full bg-main-bg border border-light-gray rounded-2xl px-6 py-4 text-dark-text font-medium focus:outline-none focus:border-tech-blue focus:ring-4 focus:ring-tech-blue/5 transition-all appearance-none"
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
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-400">Mensagem</label>
                  <textarea 
                    id="message" 
                    required
                    rows={4}
                    className="w-full bg-main-bg border border-light-gray rounded-2xl px-6 py-4 text-dark-text font-medium placeholder:text-slate-400 focus:outline-none focus:border-tech-blue focus:ring-4 focus:ring-tech-blue/5 transition-all resize-none"
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
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-tech-blue/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </section>
  );
}
