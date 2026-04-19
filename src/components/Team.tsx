import React from 'react';
import { useLanguage } from '../lib/i18n';
import { Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Team() {
  const { t } = useLanguage();

  const members = [
    {
      name: "Selim Manai",
      role: t('team.member1.role'),
      img: "https://media.licdn.com/dms/image/v2/D5603AQH_AQtCDYKbow/profile-displayphoto-shrink_800_800/B56ZSKrlGPGsAc-/0/1737493468476?e=1778112000&v=beta&t=vUwN-HotpYdvpY5Giw9xGe_DRe0kfcdcEQIxyfsVFI0"
    },
    {
      name: "Maryem Jlassi",
      role: t('team.member2.role'),
      img: "https://media.licdn.com/dms/image/v2/D4E03AQEF5nrj1kjL5A/profile-displayphoto-crop_800_800/B4EZm_qtDLIQAI-/0/1759857268708?e=1778112000&v=beta&t=EUwvGk_ppdhvUQASCSGXh4uUdHyC3gI2V3mbiuNZbPY"
    },
    {
      name: "Houssem Eddine",
      role: t('team.member3.role'),
      img: "https://media.licdn.com/dms/image/v2/D4D35AQH1Nwz6PfJvGA/profile-framedphoto-shrink_800_800/B4DZzbMVj2JIAg-/0/1773203970594?e=1777172400&v=beta&t=mFsVHHh6aPHgKUx_qPC-TdpJkk0TXoVDyiur8PmV4OQ"
    },
    {
      name: "Salma Souai",
      role: t('team.member4.role'),
      img: "https://media.licdn.com/dms/image/v2/D4E03AQHhL0rYHg9f4A/profile-displayphoto-crop_800_800/B4EZloEiHQHcAI-/0/1758387644067?e=1778112000&v=beta&t=aeD9tv3BiGPzkkk2IFWN3brS68pwVZpo68yefYHPWlQ"
    },
    {
      name: "Raif Guizani",
      role: t('team.member5.role'),
      img: "https://media.licdn.com/dms/image/v2/D4E03AQH7rBHRHfEJEQ/profile-displayphoto-crop_800_800/B4EZtP1IpoIMAM-/0/1766570892222?e=1778112000&v=beta&t=wKq3e5DpC4HrLX60eJs5VR4rO0wBkO2ZY1NRmrIfxu8"
    },
    {
      name: "Mohammed Sillini",
      role: t('team.member6.role'),
      img: "https://ui-avatars.com/api/?name=Mohammed+Sillini&background=1E3A5F&color=fff&size=256"
    }
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('team.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="w-full aspect-square rounded-[32px] overflow-hidden mb-6 bg-muted relative shadow-lg group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 transition-opacity duration-700"></div>
                <button className="absolute bottom-4 right-4 w-12 h-12 bg-background/90 backdrop-blur-md shadow-xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 translate-y-8 group-hover:translate-y-0">
                  <Linkedin className="w-5 h-5 text-primary" />
                </button>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-secondary font-semibold mb-3">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
