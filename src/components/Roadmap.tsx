import React from 'react';
import { useLanguage } from '../lib/i18n';
import { motion } from 'motion/react';
import { CheckCircle2, CircleDashed } from 'lucide-react';

export default function Roadmap() {
  const { t, dir } = useLanguage();

  const phases = [
    { key: 'roadmap.phase0', descKey: 'roadmap.desc0', status: 'done', year: '2023' },
    { key: 'roadmap.phase1', descKey: 'roadmap.desc1', status: 'active', year: '2026 (Q1-Q2)' },
    { key: 'roadmap.phase2', descKey: 'roadmap.desc2', status: 'upcoming', year: '2026 (Q3-Q4)' },
    { key: 'roadmap.phase3', descKey: 'roadmap.desc3', status: 'upcoming', year: '2027' },
    { key: 'roadmap.phase4', descKey: 'roadmap.desc4', status: 'upcoming', year: '2028+' },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-muted)_0%,_transparent_50%)] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20 lg:mb-32">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground tracking-tight">Roadmap</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[50%] left-0 right-0 h-1.5 bg-border rounded-full -translate-y-1/2 z-0">
             <div 
               className={`absolute top-0 bottom-0 ${dir === 'rtl' ? 'right-0' : 'left-0'} bg-gradient-to-r from-secondary to-primary/50 rounded-full`}
               style={{ width: '25%' }}
             ></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 relative z-10">
            {phases.map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center group"
              >
                {/* Connector Nodes (Desktop) */}
                <div className={`hidden lg:flex absolute top-1/2 ${dir === 'rtl' ? 'translate-x-1/2' : '-translate-x-1/2'} left-1/2 w-12 h-12 items-center justify-center z-10 transition-transform duration-500 group-hover:scale-125`}>
                   {phase.status === 'done' ? (
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,191,165,0.4)]">
                         <CheckCircle2 className="w-5 h-5" />
                      </div>
                   ) : phase.status === 'active' ? (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-[0_0_20px_rgba(30,58,95,0.4)] relative">
                         <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
                         <CircleDashed className="w-5 h-5 animate-spin-slow" />
                      </div>
                   ) : (
                      <div className="w-6 h-6 rounded-full bg-background border-4 border-border shadow-sm"></div>
                   )}
                </div>

                {/* Cards */}
                <div className={`w-full glass bg-card p-6 md:p-8 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-border group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 text-start relative z-20 ${i % 2 === 0 ? 'lg:-translate-y-24 group-hover:lg:-translate-y-28 lg:mb-24' : 'lg:translate-y-24 group-hover:lg:translate-y-20 lg:mt-24'} ${phase.status === 'active' ? 'border-primary/30 ring-1 ring-primary/20' : ''}`}>
                   
                   {/* Mobile/Tablet status indicator (hidden on large desktop where center nodes exist) */}
                   <div className="lg:hidden w-10 h-10 mb-4 rounded-full flex items-center justify-center bg-muted">
                        {phase.status === 'done' && <CheckCircle2 className="w-5 h-5 text-secondary" />}
                        {phase.status === 'active' && <CircleDashed className="w-5 h-5 text-primary animate-spin-slow" />}
                        {phase.status === 'upcoming' && <div className="w-3 h-3 rounded-full bg-border"></div>}
                   </div>

                   <span className={`inline-block px-4 py-1.5 text-xs font-bold rounded-full mb-5 ${phase.status === 'done' ? 'bg-secondary/10 text-secondary' : phase.status === 'active' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>{phase.year}</span>
                   <h3 className="font-bold text-xl text-foreground mb-3 leading-tight">{t(phase.key)}</h3>
                   <p className="text-sm text-muted-foreground leading-relaxed">{t(phase.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
