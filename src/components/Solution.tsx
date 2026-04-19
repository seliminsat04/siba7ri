import React from 'react';
import { useLanguage } from '../lib/i18n';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Solution() {
  const { t } = useLanguage();

  return (
    <section id="solution" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {t('solution.title')}
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-light mb-8 border-l-4 border-secondary pl-6">
              {t('solution.valueProp')}
            </p>
            <ul className="space-y-4 text-primary-foreground/80">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary w-6 h-6 flex-shrink-0" />
                <span className="text-lg">Intelligence Artificielle d'optimisation de route.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary w-6 h-6 flex-shrink-0" />
                <span className="text-lg">Intégration des données satellites en temps réel.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary w-6 h-6 flex-shrink-0" />
                <span className="text-lg">Respect des zones de reproduction et prévention de surpêche.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary-foreground/10 bg-white">
              <div className="bg-muted px-4 py-3 border-b flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                 <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="p-8 pb-0">
                 <div className="text-center mb-6 text-foreground">
                   <h4 className="font-bold text-xl">Score de Zone : 94%</h4>
                   <p className="text-sm text-muted-foreground">Oued Akarit - Zone 3</p>
                 </div>
                 {/* Decorative chart/graph */}
                 <div className="flex items-end justify-between gap-2 h-40">
                   {[40, 65, 45, 80, 55, 95, 85].map((h, i) => (
                     <div key={i} className="w-full bg-secondary/80 rounded-t-md" style={{ height: `${h}%` }}></div>
                   ))}
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
