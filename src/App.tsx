import React, { useState } from 'react';
import { LanguageProvider, useLanguage, Language } from './lib/i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Differentiator from './components/Differentiator';
import Impact from './components/Impact';
import Demo from './components/Demo';
import ForWhom from './components/ForWhom';
import TechStack from './components/TechStack';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function MainApp() {
  const { dir } = useLanguage();
  return (
    <div dir={dir} className={`min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden relative ${dir === 'rtl' ? 'font-arabic' : 'font-sans'}`}>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Differentiator />
        <Impact />
        <Demo />
        <ForWhom />
        <TechStack />
        <Team />
        <Roadmap />
        <FinalCTA />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
