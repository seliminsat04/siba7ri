import React from 'react';
import { useLanguage } from '../lib/i18n';
import { Button } from './ui/button';
import { PlayCircle, ShieldCheck, Map, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const { t, dir } = useLanguage();

  return (
    <section id="home" className="relative text-primary pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      {/* Background decoration representing map / intelligence */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-secondary/10 rounded-full blur-3xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/15 rounded-full blur-3xl opacity-60"></div>
        {/* Subtle grid and Bathymetric contour patterns */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="absolute inset-0 bg-bathymetric text-primary opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary-foreground font-semibold text-sm mb-6 border border-secondary/20 shadow-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary mr-2 (dir==='rtl'? 'ml-2 mr-0' : '') animate-pulse"></span>
              {t('hero.socialProof')}
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm font-medium text-foreground/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-1.5"><Map className="w-4 h-4 text-secondary" /> Copernicus Satellite</div>
            <div className="hidden md:block text-border">•</div>
            <div className="flex items-center gap-1.5"><Activity className="w-4 h-4 text-secondary" /> Offline Bathymetry</div>
            <div className="hidden md:block text-border">•</div>
            <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-secondary" /> Fleet Load Balancing</div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="w-full sm:w-auto h-auto min-h-[56px] py-3 px-8 text-lg bg-accent text-accent-foreground font-bold hover:bg-accent/90 rounded-lg shadow-xl glow-sm whitespace-normal break-words">
              {t('hero.ctaPrimary')}
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-auto min-h-[56px] py-3 px-8 text-lg bg-primary/10 border-primary text-primary font-bold hover:bg-primary/20 rounded-lg whitespace-normal break-words">
              {t('hero.ctaSecondary')}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex justify-center cursor-pointer group"
          >
            <div className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-semibold">
              <PlayCircle className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
              <span>{t('hero.demoBtn')}</span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard/Map Preview Graphic */}
        <motion.div 
          className="mt-16 sm:mt-24 w-full h-[450px] max-w-6xl mx-auto rounded-[32px] overflow-hidden bg-card relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Map layout pattern from Design HTML */}
          <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_70%_50%,_#E0F2F1_0%,_#B2DFDB_100%)]">
            <div className="w-full h-full relative opacity-80" style={{ background: 'linear-gradient(135deg, #F8F4ED 30%, transparent 30%)' }}></div>
            
            {/* Heatmap Zones */}
            <div className="absolute top-[35%] left-[25%] w-[200px] h-[150px] bg-[#8C7AA8] rounded-full blur-[40px] opacity-60"></div>
            <div className="absolute bottom-[15%] right-[15%] w-[300px] h-[250px] bg-[#00BFA5] rounded-full blur-[40px] opacity-60"></div>
            
            {/* Port Markers */}
            <div className="absolute top-[40%] left-[35%] w-3 h-3 bg-[#E07A5F] rounded-full border-2 border-white shadow-[0_0_10px_rgba(224,122,95,0.5)]">
               <div className="absolute top-[-25px] left-[-20px] whitespace-nowrap text-[10px] font-bold bg-white px-1.5 py-0.5 rounded shadow-sm text-foreground">GHANNOUCH (Pollution Alert)</div>
            </div>
            
            <div className="absolute top-[75%] left-[55%] w-3 h-3 bg-[#E07A5F] rounded-full border-2 border-white shadow-[0_0_10px_rgba(224,122,95,0.5)]">
               <div className="absolute bottom-[-25px] left-[-20px] whitespace-nowrap text-[10px] font-bold bg-white px-1.5 py-0.5 rounded shadow-sm text-foreground">ZARRAT (Safe Harbor)</div>
            </div>
          </div>
          
          {/* SOS button from Natural Tones Dashboard mapping */}
          <div className="absolute bottom-[100px] right-[40px] w-16 h-16 rounded-full bg-[#FF4B2B] text-white flex items-center justify-center font-black shadow-[0_10px_20px_rgba(255,75,43,0.3)] border-4 border-white cursor-pointer z-50 hover:scale-105 transition-transform">
            SOS
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 z-20 flex overflow-x-auto gap-3 scrollbar-hide md:grid md:grid-cols-4 md:gap-4 w-[calc(100%-32px)] snap-x">
            <div className="glass px-5 py-4 rounded-2xl flex flex-col justify-center snap-center min-w-[200px] md:min-w-0 transition-transform hover:-translate-y-1">
              <span className="text-[10px] font-bold text-muted-foreground uppercase opacity-80 mb-1 tracking-wider">Économie Carburant</span>
              <span className="text-2xl font-black text-[#00BFA5]">-22%</span>
            </div>
            <div className="glass px-5 py-4 rounded-2xl flex flex-col justify-center snap-center min-w-[200px] md:min-w-0 transition-transform hover:-translate-y-1">
              <span className="text-[10px] font-bold text-muted-foreground uppercase opacity-80 mb-1 tracking-wider">Posidonie Protégée</span>
              <span className="text-2xl font-black text-primary">+14%</span>
            </div>
            <div className="glass px-5 py-4 rounded-2xl flex flex-col justify-center snap-center min-w-[200px] md:min-w-0 transition-transform hover:-translate-y-1">
              <span className="text-[10px] font-bold text-muted-foreground uppercase opacity-80 mb-1 tracking-wider">Temps de Secours</span>
              <span className="text-2xl font-black text-primary">~30 min</span>
            </div>
            <div className="glass px-5 py-4 rounded-2xl flex flex-col justify-center snap-center min-w-[200px] md:min-w-0 transition-transform hover:-translate-y-1">
              <span className="text-[10px] font-bold text-muted-foreground uppercase opacity-80 mb-1 tracking-wider">Pêcheurs Actifs</span>
              <span className="text-2xl font-black text-primary">248</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
