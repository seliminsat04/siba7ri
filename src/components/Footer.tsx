import React from 'react';
import { useLanguage } from '../lib/i18n';
import { Anchor, Mail, FileText, ExternalLink } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground/60 py-12 md:py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-3 text-white font-bold group cursor-default">
             <div className="p-1 rounded-xl group-hover:scale-105 transition-transform duration-300 bg-white shadow-lg">
               <img 
                src="/Gemini_Generated_Image_4tck3u4tck3u4tck.png" 
                alt="SIBA7RI Logo" 
                className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-xl"
                referrerPolicy="no-referrer"
               />
             </div>
             <div className="flex flex-col text-left">
               <span className="text-xl leading-tight tracking-tight">SIBA7RI .AI</span>
               <span className="text-[10px] text-secondary font-medium tracking-widest uppercase">سيبحري .ذكاء</span>
             </div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs font-semibold uppercase tracking-wider text-primary-foreground/70">
             <a href="#" className="flex items-center gap-2 hover:text-white hover:-translate-y-0.5 transition-all duration-300">
               <FileText className="w-4 h-4" /> 
               <span>Pitch Deck</span>
             </a>
             <a href="#" className="flex items-center gap-2 hover:text-white hover:-translate-y-0.5 transition-all duration-300">
               <ExternalLink className="w-4 h-4" /> 
               <span>Architecture</span>
             </a>
             <a href="#" className="flex items-center gap-2 hover:text-white hover:-translate-y-0.5 transition-all duration-300 bg-white/5 py-2 px-4 rounded-xl hover:bg-white/10 border border-white/5">
               <Mail className="w-4 h-4" /> 
               <span>Contact</span>
             </a>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row flex-wrap items-center justify-center gap-3 md:gap-4 text-[10px] uppercase font-bold tracking-widest text-primary-foreground/50 text-center">
            <span className="hover:text-white transition-colors cursor-default">&copy; {new Date().getFullYear()} Guardian of the Gulf</span>
            <span className="hidden md:inline text-primary-foreground/20">•</span>
            <span className="hover:text-white transition-colors cursor-default">INSTM & DGPA Partner</span>
            <span className="hidden md:inline text-primary-foreground/20">•</span>
            <span className="text-secondary hover:text-secondary/80 transition-colors cursor-default">شفاء قابس بالذكاء الاصطناعي</span>
            <span className="hidden md:inline text-primary-foreground/20">•</span>
            <span className="hover:text-white transition-colors cursor-default">{t('footer.made')} 🇹🇳</span>
        </div>
      </div>
    </footer>
  );
}
