import React from 'react';
import { useLanguage } from '../lib/i18n';
import { Droplet, Leaf, AlertTriangle, Radio } from 'lucide-react';
import { motion } from 'motion/react';

export default function Problem() {
  const { t } = useLanguage();

  const problems = [
    {
      icon: <Droplet className="w-8 h-8 text-destructive" />,
      text: t('problem.card1'),
      desc: "Navigation inefficace vers des zones déjà vides ou surpêchées.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-muted-foreground" />,
      text: t('problem.card2'),
      desc: "Ancrage destructif sur les herbiers vitaux pour la reproduction.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-destructive" />,
      text: t('problem.card3'),
      desc: "Manque d'anticipation des courants toxiques du pôle chimique.",
    },
    {
      icon: <Radio className="w-8 h-8 text-destructive" />,
      text: t('problem.card4'),
      desc: "Isolement total en cas de panne hors couverture 4G.",
    }
  ];

  return (
    <section id="problem" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-bathymetric text-white opacity-5 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t('problem.title')}
          </h2>
          <div className="w-24 h-1 bg-destructive mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group text-white"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500 pointer-events-none from-white to-transparent"></div>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 bg-white/10 text-white">
                {prob.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{prob.text}</h3>
              <p className="text-sm leading-relaxed text-white/70">{prob.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
