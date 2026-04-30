import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '@/src/lib/i18n';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav_home'), to: '/' },
    { name: t('nav_about'), href: '#tentang' },
    { name: t('nav_services'), href: '#layanan' },
    { name: t('nav_portfolio'), href: '#portfolio' },
    { name: t('nav_contact'), href: '#kontak' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-[100] transition-all duration-500 border-b",
      scrolled ? "bg-surface/80 backdrop-blur-xl py-4 border-white/10" : "bg-transparent py-6 border-transparent"
    )}>
      <div className="max-w-[1440px] mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center font-display text-on-primary text-xl font-bold transition-transform group-hover:scale-110">H</div>
          <div className="text-lg font-bold tracking-widest text-white font-display uppercase leading-tight hidden sm:block">
            HUTAMA BANGUN KARYA
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link.to ? (
              <Link 
                key={link.name}
                to={link.to}
                className="font-display text-[11px] font-bold text-on-surface-variant hover:text-primary transition-colors tracking-widest uppercase relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ) : (
              <a 
                key={link.name}
                href={link.href}
                className="font-display text-[11px] font-bold text-on-surface-variant hover:text-primary transition-colors tracking-widest uppercase relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            )
          ))}
          
          <div className="flex items-center gap-2 border-l border-white/10 pl-8 ml-4">
            <button 
              onClick={() => setLanguage('id')}
              className={cn(
                "font-display text-[10px] font-bold tracking-widest uppercase transition-colors",
                language === 'id' ? "text-primary" : "text-on-surface-variant hover:text-white"
              )}
            >
              ID
            </button>
            <span className="text-white/20 text-[10px]">/</span>
            <button 
              onClick={() => setLanguage('en')}
              className={cn(
                "font-display text-[10px] font-bold tracking-widest uppercase transition-colors",
                language === 'en' ? "text-primary" : "text-on-surface-variant hover:text-white"
              )}
            >
              EN
            </button>
          </div>

          <button className="bg-primary-container text-on-primary-container px-6 py-2.5 font-display text-[11px] font-bold tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all rounded-full">
            {t('nav_consult')}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-6 lg:hidden">
           <button 
            onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
            className="text-on-surface-variant flex items-center gap-2 font-display text-[10px] font-bold tracking-widest uppercase"
          >
            <Globe className="w-4 h-4" />
            {language.toUpperCase()}
          </button>
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface border-b border-white/10 p-8 lg:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              link.to ? (
                <Link 
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-sm font-bold text-white tracking-widest uppercase hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-sm font-bold text-white tracking-widest uppercase hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              )
            ))}
            <button className="bg-primary text-on-primary px-6 py-4 font-display text-sm font-bold tracking-widest uppercase rounded-full">
              {t('nav_consult')}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
