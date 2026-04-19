import React from 'react';
import { useLanguage } from '../lib/i18n';
import { TrendingDown, FishSymbol, HeartPulse, LocateFixed } from 'lucide-react';
import { motion } from 'motion/react';

export default function Impact() {
  const { t } = useLanguage();

  const impacts = [
    { icon: <TrendingDown strokeWidth={1.5} className="w-8 h-8 text-primary fill-secondary/20" />, value: "−15 à −22%", text: t('impact.card1'), desc: "Grâce au routage optimal hors courants marins défavorables." },
    { icon: <HeartPulse strokeWidth={1.5} className="w-8 h-8 text-primary fill-secondary/20" />, value: "100%", text: t('impact.card2'), desc: "Évitement strict des zones d'herbier pour jeter l'ancre." },
    { icon: <FishSymbol strokeWidth={1.5} className="w-8 h-8 text-primary fill-secondary/20" />, value: "Qualité", text: t('impact.card3'), desc: "Pas de pêche près des effluents phosphogypse de Ghannouch." },
    { icon: <LocateFixed strokeWidth={1.5} className="w-8 h-8 text-primary fill-secondary/20" />, value: "< 30 min", text: t('impact.card4'), desc: "Transmission satellitaire déconnectée vers la garde nationale." },
  ];

  return (
    <section id="impact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            L'Impact Territorial
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card glass border border-border p-8 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-muted/60 flex items-center justify-center mb-6 shadow-inner">
                {impact.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-3">{impact.value}</div>
              <h3 className="font-bold text-lg mb-3 text-secondary">{impact.text}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{impact.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
