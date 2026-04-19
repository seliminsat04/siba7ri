import React from 'react';
import { useLanguage } from '../lib/i18n';
import { motion, useScroll, useSpring } from 'motion/react';
import { CheckCircle2, CircleDashed } from 'lucide-react';

export default function Roadmap() {
  const { t, dir } = useLanguage();
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const phases = [
    { key: 'roadmap.phase0', descKey: 'roadmap.desc0', status: 'done', year: '2023' },
    { key: 'roadmap.phase1', descKey: 'roadmap.desc1', status: 'active', year: '2026 (Q1-Q2)' },
    { key: 'roadmap.phase2', descKey: 'roadmap.desc2', status: 'upcoming', year: '2026 (Q3-Q4)' },
    { key: 'roadmap.phase3', descKey: 'roadmap.desc3', status: 'upcoming', year: '2027' },
    { key: 'roadmap.phase4', descKey: 'roadmap.desc4', status: 'upcoming', year: '2028+' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-muted)_0%,_transparent_50%)] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground tracking-tight">Roadmap</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full shadow-[0_0_15px_rgba(0,191,165,0.5)]"></div>
          </motion.div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line (Desktop) - Now Animated on Scroll */}
          <div className="hidden lg:block absolute top-[50%] left-0 right-0 h-1 bg-muted rounded-full -translate-y-1/2 z-0 overflow-hidden">
             <motion.div 
               className={`absolute top-0 bottom-0 ${dir === 'rtl' ? 'right-0 shadow-[-5px_0_15px_rgba(0,191,165,0.5)]' : 'left-0 shadow-[5px_0_15px_rgba(0,191,165,0.5)]'} bg-gradient-to-r from-secondary via-secondary to-primary rounded-full transition-opacity`}
               style={{ scaleX: pathLength, transformOrigin: dir === 'rtl' ? 'right' : 'left' }}
             ></motion.div>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 relative z-10"
          >
            {phases.map((phase, i) => (
              <motion.div 
                key={i}
                variants={cardVariants}
                className="relative flex flex-col items-center group"
              >
                {/* Connector Nodes (Desktop) */}
                <div className={`hidden lg:flex absolute top-1/2 ${dir === 'rtl' ? 'translate-x-1/2' : '-translate-x-1/2'} left-1/2 w-12 h-12 items-center justify-center z-10 transition-transform duration-500 group-hover:scale-125`}>
                   {phase.status === 'done' ? (
                      <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,191,165,0.6)] border-4 border-background">
                         <CheckCircle2 className="w-5 h-5" />
                      </div>
                   ) : phase.status === 'active' ? (
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-[0_0_20px_rgba(30,58,95,0.4)] relative border-4 border-background">
                         <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30"></div>
                         <CircleDashed className="w-6 h-6 animate-spin-slow" />
                      </div>
                   ) : (
                      <div className="w-7 h-7 rounded-full bg-background border-4 border-muted shadow-sm transition-colors group-hover:border-primary/40"></div>
                   )}
                </div>

                {/* Cards */}
                <div className={`w-full glass bg-card p-6 md:p-8 rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-border group-hover:shadow-[0_40px_80px_rgba(30,58,95,0.08)] transition-all duration-700 text-start relative z-20 ${i % 2 === 0 ? 'lg:-translate-y-28 group-hover:lg:-translate-y-32 lg:mb-24' : 'lg:translate-y-28 group-hover:lg:translate-y-24 lg:mt-24'} ${phase.status === 'active' ? 'border-primary/40 ring-2 ring-primary/5 bg-gradient-to-br from-card to-primary/5' : ''}`}>
                   
                   {/* Gradient glow for active phase */}
                   {phase.status === 'active' && (
                     <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-[28px] blur-xl opacity-50 -z-10 group-hover:opacity-100 transition-opacity"></div>
                   )}

                   {/* Mobile/Tablet status indicator */}
                   <div className="lg:hidden w-12 h-12 mb-6 rounded-2xl flex items-center justify-center bg-muted/50 border border-border">
                        {phase.status === 'done' && <CheckCircle2 className="w-6 h-6 text-secondary" />}
                        {phase.status === 'active' && <CircleDashed className="w-6 h-6 text-primary animate-spin-slow" />}
                        {phase.status === 'upcoming' && <div className="w-3 h-3 rounded-full bg-border shadow-sm"></div>}
                   </div>

                   <span className={`inline-block px-4 py-1.5 text-[10px] sm:text-xs font-black rounded-lg mb-5 uppercase tracking-widest ${phase.status === 'done' ? 'bg-secondary/15 text-secondary border border-secondary/20' : phase.status === 'active' ? 'bg-primary/15 text-primary border border-primary/20 animate-pulse' : 'bg-muted text-muted-foreground border border-border'}`}>{phase.year}</span>
                   <h3 className="font-black text-xl text-primary mb-3 leading-tight uppercase group-hover:text-secondary transition-colors">{t(phase.key)}</h3>
                   <p className="text-sm text-foreground/70 leading-relaxed font-medium">{t(phase.descKey)}</p>

                   {/* Decorative corner element */}
                   <div className="absolute bottom-4 right-4 text-[10px] font-black text-muted-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity">
                     PHASE_{i.toString().padStart(2, '0')}
                   </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-40 max-w-4xl mx-auto glass rounded-[32px] p-8 md:p-14 relative overflow-hidden text-center z-20 shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          <p className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground/90 tracking-tight leading-snug">
            "{t('roadmap.quote')}"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
