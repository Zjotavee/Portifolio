import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Projetos', path: '/projects' },
    { name: 'Serviços', path: '/#services' },
    { name: 'Processo', path: '/#process' },
    { name: 'Sobre', path: '/#about' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'py-3 md:py-4 bg-white/80 backdrop-blur-xl border-b border-light-gray'
          : 'py-5 md:py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl md:text-2xl font-bold font-display tracking-tighter text-dark-text z-[60] relative group"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          JOÃO<span className="text-tech-blue group-hover:text-tech-blue-hover transition-colors">VITOR</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.path.startsWith('/#') ? (
              <a
                key={link.name}
                href={link.path}
                className="text-sm font-semibold text-slate-600 hover:text-tech-blue transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-tech-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-semibold text-slate-600 hover:text-tech-blue transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-tech-blue transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          ))}
          <a
            href="/#contact"
            className="px-6 py-2.5 bg-tech-blue hover:bg-tech-blue-hover text-white text-sm font-bold rounded-full transition-all duration-300 shadow-lg shadow-tech-blue/20 hover:scale-105 active:scale-95"
          >
            Iniciar Projeto
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-[60] relative p-2 -mr-2 text-dark-text bg-white/50 rounded-full border border-light-gray"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center px-6"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-tech-blue/5 to-transparent pointer-events-none" />
            
            <div className="flex flex-col items-center space-y-8 w-full max-w-sm">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="w-full"
                >
                  {link.path.startsWith('/#') ? (
                    <a
                      href={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-center py-4 text-3xl font-bold font-display tracking-tight text-dark-text hover:text-tech-blue transition-colors border-b border-light-gray"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-center py-4 text-3xl font-bold font-display tracking-tight text-dark-text hover:text-tech-blue transition-colors border-b border-light-gray"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + navLinks.length * 0.1, duration: 0.5 }}
                className="w-full pt-4"
              >
                <a
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center py-5 bg-tech-blue text-white text-xl font-bold rounded-2xl"
                >
                  Iniciar Projeto
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
