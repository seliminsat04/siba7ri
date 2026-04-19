import React from 'react';
import { useLanguage } from '../lib/i18n';
import { Anchor, Building } from 'lucide-react';
import { motion } from 'motion/react';

export default function ForWhom() {
  const { t } = useLanguage();

  return (
    <section id="forwhom" className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* For Fishermen */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-10 text-primary-foreground shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 backdrop-blur-sm border border-white/20">
              <Anchor className="w-8 h-8 text-accent" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">{t('fishermen.title')}</h2>
            <p className="text-lg text-primary-foreground/90 font-medium mb-8 leading-relaxed">
              {t('fishermen.desc')}
            </p>
            
            <ul className="space-y-4 font-medium">
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl leading-none">•</span>
                <span>Mode "WhatsApp Bot" et commandes vocales (Darija)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl leading-none">•</span>
                <span>Cartographie 100% Hors-Ligne mise en cache au port</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl leading-none">•</span>
                <span>Alertes visuelles claires : Rouge, Jaune, Vert</span>
              </li>
            </ul>
          </motion.div>

          {/* For Institutions */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-background rounded-3xl p-10 border border-border shadow-xl relative"
          >
            <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-8 border border-border">
              <Building className="w-8 h-8 text-secondary" />
            </div>
            
            <h2 className="text-3xl font-bold text-foreground mb-4">{t('institutions.title')}</h2>
            <p className="text-lg text-muted-foreground font-medium mb-8 leading-relaxed">
              {t('institutions.desc')}
            </p>
            
            <ul className="space-y-4 font-medium text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl font-bold leading-none">✓</span>
                <span>Dashboard de supervision (DGPA, INSTM)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl font-bold leading-none">✓</span>
                <span>Régulation dynamique des quotas par zone</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl font-bold leading-none">✓</span>
                <span>Portail dédié au Haras Watani (Garde Nationale) pour l'acheminement des SOS</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
