import React, { useState, useEffect } from 'react';
import { useLanguage, Language } from '../lib/i18n';
import { Button } from './ui/button';
import { Globe, Menu, X, Anchor } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { t, lang, setLang, dir } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.problem', href: '#problem' },
    { key: 'nav.solution', href: '#solution' },
    { key: 'nav.howItWorks', href: '#how' },
    { key: 'nav.impact', href: '#impact' },
    { key: 'nav.demo', href: '#demo' },
    { key: 'nav.forFishermen', href: '#forwhom' },
    { key: 'nav.team', href: '#team' },
  ];

  const langs: { code: Language; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'عربي' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Island 1: The Brand Console */}
        <header
          className={`pointer-events-auto transition-all duration-500 rounded-3xl border flex items-center gap-4 px-4 py-3 shadow-2xl ${
            isScrolled 
              ? 'bg-background/95 backdrop-blur-2xl border-primary/20' 
              : 'bg-card/90 backdrop-blur-xl border-border/40'
          }`}
        >
          <a href="#home" className="flex items-center gap-3 group shrink-0">
            <div className="bg-white p-1 rounded-xl group-hover:scale-110 group-hover:rotate-2 transition-all duration-500 shadow-md border border-border/10">
              <img 
                src="/Gemini_Generated_Image_4tck3u4tck3u4tck.png" 
                alt="SIBA7RI Logo" 
                className="w-10 h-10 object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="font-bold leading-tight hidden xs:block">
              <div className="text-sm md:text-lg tracking-tight text-primary font-black uppercase">SIBA7RI</div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                <span className="text-[10px] text-muted-foreground font-bold tracking-widest uppercase">Maritime AI</span>
              </div>
            </div>
          </a>
        </header>

        {/* Island 2: The Navigation Dock (Desktop Only) */}
        <nav className={`hidden lg:flex items-center gap-1 px-4 py-2 rounded-full border shadow-xl pointer-events-auto transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-2xl border-primary/20' 
            : 'bg-card/90 backdrop-blur-xl border-border/40'
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-xs xl:text-sm font-bold text-primary/70 hover:text-secondary px-4 py-2 rounded-full transition-all relative group overflow-hidden"
            >
              <span className="relative z-10">{t(link.key)}</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Island 3: Control Center */}
        <div className={`pointer-events-auto transition-all duration-500 rounded-3xl border flex items-center gap-3 p-2 shadow-2xl ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-2xl border-primary/20' 
            : 'bg-card/90 backdrop-blur-xl border-border/40'
        }`}>
          <div className="hidden sm:flex items-center gap-1 bg-muted/50 p-1 rounded-2xl border border-border/50">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`transition-all text-[10px] font-black px-3 py-1.5 rounded-xl ${
                  lang === l.code ? 'bg-primary text-primary-foreground shadow-md' : 'text-primary/40 hover:text-primary'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          
          <Button className="hidden xs:flex bg-secondary text-primary-foreground hover:bg-secondary/90 shadow-lg rounded-2xl font-black text-xs uppercase tracking-widest px-6 py-3 h-auto">
            {t('nav.cta')}
          </Button>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden w-12 h-12 bg-primary text-white hover:bg-primary/90 rounded-2xl flex items-center justify-center transition-all shadow-lg active:scale-95 shrink-0"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-4 z-50 bg-card rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.2)] border border-border flex flex-col pointer-events-auto overflow-hidden"
          >
            <div className="p-6 flex justify-between items-center border-b border-border bg-muted/40 backdrop-blur-md">
              <div className="flex flex-col">
                <span className="font-black text-xs text-secondary tracking-[0.2em] uppercase mb-1">Navigation</span>
                <span className="font-bold text-xl text-primary flex items-center gap-2">
                   SIBA7RI .AI
                </span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="w-12 h-12 flex items-center justify-center bg-background rounded-2xl hover:bg-muted transition-all border border-border shadow-md active:scale-95">
                 <X className="w-6 h-6 text-foreground" />
              </button>
            </div>
            
            <div className="flex flex-col p-6 gap-8 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-5">
              <div className="space-y-3">
                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">Language / لغة</span>
                <div className="flex items-center gap-2 bg-muted/50 p-1.5 rounded-2xl border border-border/50">
                  {langs.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.code)}
                      className={`flex-1 py-3 text-xs font-black rounded-xl transition-all ${
                        lang === l.code ? 'bg-primary text-primary-foreground shadow-lg scale-[1.02]' : 'text-primary/40 hover:text-primary hover:bg-white/20'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3">
                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">Explore / استكشاف</span>
                <nav className="grid grid-cols-1 gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.key}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-bold py-4 px-5 bg-background border border-border rounded-2xl hover:border-secondary hover:translate-x-1 transition-all text-primary flex justify-between items-center group shadow-sm active:bg-secondary/5"
                    >
                      {t(link.key)}
                      <Anchor className="w-4 h-4 text-muted-foreground group-hover:text-secondary group-hover:rotate-12 transition-all" />
                    </a>
                  ))}
                </nav>
              </div>
              
              <Button className="w-full mt-4 bg-secondary text-primary-foreground hover:bg-secondary/90 rounded-2xl font-black text-lg py-8 shadow-[0_20px_40px_rgba(0,191,165,0.25)] h-auto group overflow-hidden">
                <span className="relative z-10">{t('nav.cta')}</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
