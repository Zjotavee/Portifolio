import { Link } from 'react-router-dom';
import { Linkedin, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-light-gray py-12 md:py-20">
      <div className="section-container !py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link 
              to="/" 
              className="text-2xl sm:text-3xl font-bold font-display tracking-tighter text-dark-text group"
            >
              JOÃO<span className="text-tech-blue group-hover:text-tech-blue-hover transition-colors">VITOR</span>
            </Link>
            <p className="text-slate-500 text-sm max-w-xs font-medium">
              Especialista em criação de websites profissionais que ajudam negócios a crescer online.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center justify-center gap-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 border border-light-gray flex items-center justify-center text-slate-400 hover:text-white hover:bg-tech-blue hover:border-tech-blue transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 border border-light-gray flex items-center justify-center text-slate-400 hover:text-white hover:bg-tech-blue hover:border-tech-blue transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:hello@joaovitor.dev" className="w-10 h-10 rounded-full bg-slate-50 border border-light-gray flex items-center justify-center text-slate-400 hover:text-white hover:bg-tech-blue hover:border-tech-blue transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 font-semibold">
              <Link to="/admin" className="hover:text-tech-blue transition-colors">Admin</Link>
              <a href="/#about" className="hover:text-tech-blue transition-colors">Sobre</a>
              <a href="/projects" className="hover:text-tech-blue transition-colors">Projetos</a>
              <a href="/#contact" className="hover:text-tech-blue transition-colors">Contato</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-20 pt-8 border-t border-light-gray text-center">
          <p className="text-slate-400 text-[10px] uppercase tracking-[0.3em] font-bold">
            © {new Date().getFullYear()} João Vitor Trajano de Lima. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
