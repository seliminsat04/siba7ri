import React from 'react';
import { useLanguage } from '../lib/i18n';
import { Satellite, CloudRain, MapPin, Scale, Ship, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function HowItWorks() {
  const { t } = useLanguage();

  const layers = [
    { icon: <Satellite strokeWidth={1.5} className="w-8 h-8 text-primary fill-secondary/20" />, key: 'how.layer1', desc: "Données Copernicus en temps réel" },
    { icon: <CloudRain strokeWidth={1.5} className="w-8 h-8 text-primary fill-secondary/20" />, key: 'how.layer2', desc: "Vents, houle et courants" },
    { icon: <MapPin strokeWidth={1.5} className="w-8 h-8 text-primary fill-secondary/20" />, key: 'how.layer3', desc: "Herbiers et profondeur intégrés" },
    { icon: <Scale strokeWidth={1.5} className="w-8 h-8 text-primary fill-secondary/20" />, key: 'how.layer4', desc: "Zones interdites et préservées" },
    { icon: <Ship strokeWidth={1.5} className="w-8 h-8 text-primary fill-secondary/20" />, key: 'how.layer5', desc: "Taille, puissance et équipement" },
    { icon: <Users strokeWidth={1.5} className="w-8 h-8 text-primary fill-secondary/20" />, key: 'how.layer6', desc: "Évitement par clustering" },
  ];

  return (
    <section id="how" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16">
          Architecturé sur 6 couches de données
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {layers.map((layer, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center p-6 bg-background rounded-2xl border border-border shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-muted/60 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 shadow-inner">
                {layer.icon}
              </div>
              <h3 className="font-bold text-foreground mb-2 text-sm">{t(layer.key)}</h3>
              <p className="text-xs text-muted-foreground">{layer.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
           {/* Abstract diagram representation */}
           <div className="bg-background rounded-[32px] p-8 md:p-12 border border-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl"></div>
              
              <div className="flex-1 text-start z-10">
                 <h4 className="text-2xl font-black mb-4 tracking-tight">Fusion Multimodale</h4>
                 <p className="text-muted-foreground leading-relaxed text-lg">
                   Notre moteur de décision fusionne les observations satellites avec le comportement physique du navire. Résultat : un polygone de navigation sécurisé, optimisé pour la capture tout en évitant les surcoûts en carburant.
                 </p>
              </div>
              <div className="flex-1 w-full justify-center flex z-10">
                 <div className="relative w-48 h-48 rounded-full border-4 border-dashed border-secondary/50 flex items-center justify-center animate-spin-slow">
                    <div className="w-32 h-32 rounded-full bg-muted/50 flex items-center justify-center border border-secondary shadow-lg shadow-secondary/20 backdrop-blur-sm shadow-inner">
                       <Ship strokeWidth={1.5} className="w-12 h-12 text-primary fill-secondary/20" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
