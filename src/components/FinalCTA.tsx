import React from 'react';
import { useLanguage } from '../lib/i18n';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Anchor } from 'lucide-react';
import { motion } from 'motion/react';

export default function FinalCTA() {
  const { t, dir } = useLanguage();

  return (
    <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-bathymetric text-white opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-4 rounded-3xl inline-block mb-8 shadow-2xl">
            <img 
              src="/Gemini_Generated_Image_4tck3u4tck3u4tck.png" 
              alt="Logo" 
              className="w-24 h-24 object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            {t('cta.title')}
          </h2>
        </motion.div>

        <motion.div 
          className="bg-card text-card-foreground rounded-[24px] p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-border text-start max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="text-sm font-semibold">{t('cta.form.name')}</label>
                 <Input className="bg-background h-12 rounded-xl focus:ring-secondary/50 focus:border-secondary transition-colors" placeholder="Mohamed..." />
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-semibold">{t('cta.form.phone')}</label>
                 <Input className="bg-background h-12 rounded-xl focus:ring-secondary/50 focus:border-secondary transition-colors text-start" placeholder="2x xxx xxx" type="tel" dir="ltr" />
               </div>
            </div>
            
            <div className="space-y-2">
                 <label className="text-sm font-semibold">{t('cta.form.port')}</label>
                 <Input className="bg-background h-12 rounded-xl focus:ring-secondary/50 focus:border-secondary transition-colors" placeholder="Zarrat / Ghannouch / Gabès..." />
            </div>

            <div className="space-y-2">
                 <label className="text-sm font-semibold">{t('cta.form.role')}</label>
                 <Select>
                   <SelectTrigger className="w-full bg-background h-12 rounded-xl border-border focus:ring-secondary/50 focus:border-secondary transition-colors text-start">
                     <SelectValue placeholder="---" />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="fisherman" className="py-3">Pêcheur / صياد</SelectItem>
                     <SelectItem value="institution" className="py-3">Institution / إدارة</SelectItem>
                     <SelectItem value="investor" className="py-3">Investor / مستثمر</SelectItem>
                   </SelectContent>
                 </Select>
            </div>

            <div className="pt-6 grid sm:grid-cols-2 gap-4">
               <Button type="button" className="w-full h-auto min-h-[56px] py-3 text-sm sm:text-base font-bold bg-secondary hover:bg-secondary/90 text-white shadow-[0_10px_30px_rgba(0,191,165,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,191,165,0.4)] whitespace-normal break-words rounded-xl">
                 {t('cta.pwa')}
               </Button>
               <Button type="submit" variant="outline" className="w-full h-auto min-h-[56px] py-3 text-sm sm:text-base font-bold border-primary text-primary hover:bg-primary/5 whitespace-normal break-words">
                 {t('cta.pilot')}
               </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
