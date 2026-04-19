import React from 'react';
import { useLanguage } from '../lib/i18n';

const techs = [
  { name: "Vapi.ai", desc: "Voice AI", img: "https://vapi.ai/brand/img/full-logo-square-5.svg" },
  { name: "Twilio", desc: "Communications", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRET-1MDr34rvdBdxZmuQg3gpDY-cl39ur0gQ&s" },
  { name: "Xarray", desc: "N-D Arrays", img: "https://docs.xarray.dev/en/stable/_static/logos/Xarray_Logo_RGB_Final.png" },
  { name: "Stormglass", desc: "Weather API", img: "https://stormglass.io/wp-content/uploads/2025/11/SG-logo-in-blue-circle.svg" },
  { name: "Copernicus", desc: "Marine Data", img: "https://www.mercator-ocean.eu/wp-content/uploads/2024/06/PoissonCopernicus_VerticleBlueHR.png" },
  { name: "Uvicorn", desc: "ASGI Server", img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdq2b6ajyjtnkjlfd2qr3.png" },
  { name: "Pydantic", desc: "Data Validation", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMVBR1uXF5b-IOSAoXgf6GBrHKUyRUPNsFeQ&s" },
  { name: "SQLite", desc: "Database", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpYnbJTvN4q7WinjryvgtBpR4S3HZ7OkoGg&s" },
  { name: "Groq", desc: "LPU Inference", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvKm8Rj0in6tfZZtOKe6hRVaYRmjTP4yNVlw&s" },
  { name: "Scikit-Learn", desc: "Machine Learning", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/960px-Scikit_learn_logo_small.svg.png" },
];

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-card border-y border-border overflow-hidden relative">
      <div className="container mx-auto px-4 mb-10 md:mb-16">
        <h2 className="text-center text-sm md:text-base font-bold uppercase tracking-widest text-muted-foreground opacity-80">
          {t('tech.title')}
        </h2>
      </div>

      {/* Floating Gradient Edges for seamless scroll fading */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Wrapper */}
      <div className="flex w-max animate-marquee-right hover-pause will-change-transform">
        
        {/* Set 1 */}
        <div className="flex items-center justify-around translate-x-0 w-screen sm:w-auto min-w-max">
          {techs.map((tech, i) => (
            <div 
              key={`set1-${i}`} 
              className="flex items-center gap-3 md:gap-4 glass px-5 md:px-8 py-3 md:py-4 rounded-2xl mx-3 md:mx-4 hover:bg-card/50 transition-colors shadow-sm cursor-default"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-background flex items-center justify-center overflow-hidden shadow-inner p-1">
                <img src={tech.img} alt={tech.name} className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="font-bold text-foreground text-sm md:text-lg whitespace-nowrap">{tech.name}</span>
                <span className="text-[10px] md:text-xs font-mono text-muted-foreground whitespace-nowrap">{tech.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Set 2 (Duplicate for continuous loop) */}
        <div className="flex items-center justify-around translate-x-0 w-screen sm:w-auto min-w-max">
          {techs.map((tech, i) => (
            <div 
              key={`set2-${i}`} 
              className="flex items-center gap-3 md:gap-4 glass px-5 md:px-8 py-3 md:py-4 rounded-2xl mx-3 md:mx-4 hover:bg-card/50 transition-colors shadow-sm cursor-default"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-background flex items-center justify-center overflow-hidden shadow-inner p-1">
                <img src={tech.img} alt={tech.name} className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="font-bold text-foreground text-sm md:text-lg whitespace-nowrap">{tech.name}</span>
                <span className="text-[10px] md:text-xs font-mono text-muted-foreground whitespace-nowrap">{tech.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
