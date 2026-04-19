import React from 'react';
import { useLanguage } from '../lib/i18n';
import { Network, Moon } from 'lucide-react';
import { motion } from 'motion/react';

export default function Differentiator() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-foreground text-background overflow-hidden relative">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent text-accent-foreground mb-6 shadow-lg shadow-accent/20"
          >
            <Network className="w-8 h-8" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
            {t('diff.title')}
          </h2>
          <p className="text-xl text-border/80 font-light">
            {t('diff.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Anti-Greediness Fleet Load Balancer</h3>
            <p className="text-border/70 mb-8 leading-relaxed">
              Si 50 bateaux partent en mer, nous ne les envoyons pas tous vers le point le plus rentable. L'IA divise l'espace de navigation et assigne des routes exclusives pour prévenir l'épuisement des stocks et l'affrontement sur l'eau.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex flex-col w-12 h-12 rounded-full border border-destructive/50 bg-destructive/10 items-center justify-center text-destructive">
                  <span className="text-xs font-bold">Chaos</span>
                </div>
                <div className="flex-1 h-3 bg-muted/20 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-destructive/80"></div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col w-12 h-12 rounded-full border border-secondary/50 bg-secondary/10 items-center justify-center text-secondary">
                  <span className="text-xs font-bold">Optimal</span>
                </div>
                <div className="flex-1 h-3 bg-muted/20 rounded-full flex gap-1">
                  <div className="w-1/4 h-full bg-secondary/80 rounded-full"></div>
                  <div className="w-1/4 h-full bg-secondary/80 rounded-full"></div>
                  <div className="w-1/4 h-full bg-secondary/80 rounded-full"></div>
                  <div className="w-1/4 h-full bg-secondary/80 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 rounded-full border-2 border-accent/30 flex items-center justify-center bg-card/5 backdrop-blur-sm shadow-[0_0_60px_rgba(245,194,107,0.1)]">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-background/90 text-foreground px-4 py-1.5 rounded-full text-sm font-bold border border-white/20">
                <Moon className="w-4 h-4 text-accent" />
                Phase Lunaire
              </div>
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/20 flex flex-col items-center justify-center text-center p-6">
                <div className="text-4xl font-light text-white mb-2">91%</div>
                <div className="text-xs text-border/60 uppercase tracking-widest">Activité</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
