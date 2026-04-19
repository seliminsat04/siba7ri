import React, { useState, useEffect } from 'react';
import { useLanguage } from '../lib/i18n';
import { Button } from './ui/button';
import { Play, Satellite, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MapContainer, TileLayer, CircleMarker, Popup, Circle, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Demo() {
  const { t, dir } = useLanguage();
  const [activeTab, setActiveTab] = useState<'map' | 'sos'>('map');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showRoute, setShowRoute] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fixed coordinates
  const PORT_ZARRAT: [number, number] = [33.619, 10.354];
  const PORT_GHANNOUCH: [number, number] = [33.933, 10.050];
  const POSIDONIA_CENTER: [number, number] = [33.8, 10.25];
  const FISHING_ZONE: [number, number] = [33.85, 10.45];

  // Calculated intelligent route bypassing the Posidonia field
  const optimalRoute: [number, number][] = [
    PORT_ZARRAT,
    [33.65, 10.4],
    [33.72, 10.43], // Detour east to avoid center grass
    [33.78, 10.46],
    FISHING_ZONE
  ];

  const simulateDemo = () => {
    setIsPlaying(true);
    setShowRoute(false);
    setProgress(0);
    
    // Simulate thinking/calculation
    setTimeout(() => {
        setIsPlaying(false);
        setShowRoute(true);
        
        // Animate the ship route drawing
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += 1;
            setProgress(currentProgress);
            if (currentProgress >= optimalRoute.length) {
                clearInterval(interval);
            }
        }, 500);
    }, 1500);
  };

  return (
    <section id="demo" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Démo Interactive
          </h2>
          <div className="flex justify-center gap-2">
             <button
                onClick={() => setActiveTab('map')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${activeTab === 'map' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
             >
                Heatmap & Routage
             </button>
             <button
                onClick={() => setActiveTab('sos')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${activeTab === 'sos' ? 'bg-destructive text-destructive-foreground' : 'bg-muted text-muted-foreground'}`}
             >
                SOS Hors Ligne
             </button>
          </div>
        </div>

        <div className="bg-card border border-border shadow-2xl rounded-3xl overflow-hidden relative min-h-[500px] flex flex-col z-0">
          <div className="bg-muted px-4 py-3 border-b border-border flex items-center justify-between relative z-20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="text-xs font-bold text-muted-foreground">Guardian PWA Preview</div>
            <div></div>
          </div>

          <div className="flex-1 relative bg-muted/30">
            {isMounted && (
              <div className="absolute inset-0 z-0">
                <MapContainer 
                  center={[33.82, 10.3]} 
                  zoom={10} 
                  style={{ height: "100%", width: "100%", zIndex: 0 }}
                  zoomControl={false}
                  attributionControl={false}
                >
                  <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                  />
                  
                  {/* Danger Zone: Ghannouch Pollution */}
                  <Circle 
                    center={PORT_GHANNOUCH} 
                    pathOptions={{ fillColor: '#E07A5F', color: 'transparent', fillOpacity: 0.3 }} 
                    radius={5000} 
                  />
                  <CircleMarker 
                    center={PORT_GHANNOUCH} 
                    pathOptions={{ color: '#E07A5F', fillColor: '#E07A5F', fillOpacity: 1 }} 
                    radius={5}
                  />

                  {/* Safe Harbor: Zarrat */}
                  <CircleMarker 
                    center={PORT_ZARRAT} 
                    pathOptions={{ color: '#00BFA5', fillColor: '#00BFA5', fillOpacity: 1 }} 
                    radius={5}
                  />
                  
                  {/* Posidonia Heatmap Polygon (Simulated as circle for preview) */}
                  <Circle 
                    center={POSIDONIA_CENTER} 
                    pathOptions={{ fillColor: '#F5C26B', color: 'transparent', fillOpacity: 0.2 }} 
                    radius={9000} 
                  >
                    <Popup className="font-bold text-accent-foreground text-xs uppercase text-center block">
                        Zone d'Herbiers<br/>(Résistance 80%)
                    </Popup>
                  </Circle>

                  {/* The AI Route */}
                  {showRoute && (
                    <Polyline 
                      positions={optimalRoute.slice(0, progress)} 
                      pathOptions={{ color: '#1E3A5F', weight: 4, dashArray: '10, 10', lineCap: 'round', lineJoin: 'round' }} 
                      className="animate-pulse"
                    />
                  )}
                  
                  {/* Target Fishing Zone */}
                  {showRoute && progress >= optimalRoute.length && (
                      <CircleMarker 
                        center={FISHING_ZONE} 
                        pathOptions={{ color: '#1E3A5F', fillColor: 'transparent', weight: 3 }} 
                        radius={15}
                      >
                         <Popup className="font-bold text-primary">Zone Optimale (Poissons Pélagiques)</Popup>
                      </CircleMarker>
                  )}
                </MapContainer>
              </div>
            )}
            
            <AnimatePresence mode="wait">
              {activeTab === 'map' && (
                <motion.div 
                  key="map"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute inset-0 p-6 flex flex-col justify-end items-center pointer-events-none z-10"
                >
                  <div className="bg-background/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl w-full max-w-sm mb-8 pointer-events-auto">
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Satellite className="w-5 h-5 text-secondary" /> Planifier Sortie
                    </h4>
                    <p className="text-sm text-muted-foreground mb-6">Position actuelle: Zarrat Port</p>
                    
                    <Button onClick={simulateDemo} className="w-full bg-secondary hover:bg-secondary/90 text-white flex items-center gap-2" disabled={isPlaying || showRoute}>
                      {isPlaying ? <span className="animate-pulse">Calcul multimode...</span> : (showRoute ? "Routage Actif" : <>{t('demo.button')} <Play className="w-4 h-4 ml-1" /></>)}
                    </Button>
                    
                    {isPlaying && (
                      <div className="absolute inset-0 bg-background/80 rounded-2xl flex items-center justify-center p-4">
                        <div className="w-10 h-10 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === 'sos' && (
                <motion.div 
                  key="sos"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute inset-0 p-6 flex flex-col justify-center items-center pointer-events-none z-10 bg-background/40 backdrop-blur-[2px]"
                >
                  <div className="bg-background p-8 rounded-3xl max-w-md w-full text-center shadow-2xl border border-destructive/20 relative overflow-hidden pointer-events-auto">
                    <div className="absolute top-0 left-0 w-full h-1 bg-destructive"></div>
                    <div className="w-20 h-20 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mx-auto mb-6">
                      <ShieldAlert className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Mode SOS Hors Ligne</h3>
                    <p className="text-muted-foreground text-sm mb-8">
                      Le système compresse votre position et état en un SMS binaire minimaliste (ex: <code>*SOS#33.8#10.1#ENG*</code>) qui sera capté par le premier relais satellitaire ou VHF disponible.
                    </p>
                    <Button variant="destructive" className="w-full text-lg h-auto min-h-[56px] py-3 shadow-lg glow-sm whitespace-normal break-words">
                      {t('demo.sos')}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
