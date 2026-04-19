import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "fr" | "en" | "ar";

type Translations = Record<string, Record<string, string>>;

const translations: Translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.problem": "Le Problème",
    "nav.solution": "الحل", // Wait, the prompt says the menu has mixed languages or is in the current language? "Menu (in current language)"
    "nav.howItWorks": "Comment ça marche",
    "nav.impact": "L'Impact",
    "nav.demo": "Démo",
    "nav.forFishermen": "Pour les pêcheurs",
    "nav.team": "Notre équipe",
    "nav.cta": "Installer la PWA",
    "hero.title": "SIBA7RI .AI : Le Golfe de Gabès n’est plus une zone aveugle.",
    "hero.subtitle": "Pour une pêche plus intelligente, plus sûre, plus gabésienne. SIBA7RI vous guide vers la meilleure zone atteignable.",
    "hero.trustline": "Satellite Copernicus • Bathymétrie offline • Équilibrage de flotte • SOS sans 4G",
    "hero.ctaPrimary": "Installer l’application PWA maintenant",
    "hero.ctaSecondary": "Rejoindre la beta",
    "hero.demoBtn": "Regarder la démo 3 minutes",
    "hero.socialProof": "Déjà testé par pêcheurs de Zarrat • Partenaire H12 Innovation 3.0",
    "problem.title": "Aujourd’hui, le pêcheur artisanal navigue à l’aveugle",
    "problem.card1": "30-40% de carburant perdu",
    "problem.card2": "Surconcentration et destruction des herbiers de Posidonie",
    "problem.card3": "Risque panaches chimiques Ghannouch ou zones protégées",
    "problem.card4": "Danger en mer sans SOS fiable",
    "solution.title": "Guardian of the Gulf redonne la vue au territoire",
    "solution.valueProp": "La meilleure zone, au bon moment, par la bonne route, sans danger ni saturation.",
    "how.layer1": "Satellite",
    "how.layer2": "Météo",
    "how.layer3": "Bathymétrie offline",
    "how.layer4": "Droit maritime",
    "how.layer5": "Profil bateau",
    "how.layer6": "Flotte active",
    "diff.title": "Nous n’organisons pas seulement le trajet. Nous organisons le territoire.",
    "tech.title": "Technologies propulsant Guardian of the Gulf",
    "diff.desc": "L'Anti-Greediness Fleet Load Balancer répartit la flotte pour éviter la surpêche sur une même zone.",
    "impact.card1": "−15 à −22% de carburant",
    "impact.card2": "Protection de la Posidonie",
    "impact.card3": "Réduction des poissons toxiques",
    "impact.card4": "SOS en 30 min via Haras Watani",
    "demo.button": "Simuler une recommandation depuis Zarrat",
    "demo.sos": "Test SOS Sat",
    "fishermen.title": "Pour les Pêcheurs",
    "fishermen.desc": "L'application fonctionne même sans internet. Simple, rapide, pensé pour la mer.",
    "institutions.title": "Pour les Institutions",
    "institutions.desc": "Gouvernance territoriale, données pour la DGPA, suivi des flottes et SOS en temps réel.",
    "team.title": "Notre équipe",
    "team.subtitle": "Des Tunisiens passionnés par la mer, la technologie et l’avenir de Gabès",
    "team.member1.role": "Développeur full-stack passionné par l’IA maritime",
    "team.member2.role": "Expert IA & Data, données satellites",
    "team.member3.role": "Expert Maritime & Local (Zarrat)",
    "team.member4.role": "Conseiller Environnement / H12",
    "team.member5.role": "Spécialiste Innovation & Partenariats",
    "team.member6.role": "Ingénieur Qualité / Stratégie",
    "roadmap.phase0": "Phase 0 : MVP",
    "roadmap.phase1": "Phase 1 : Tests",
    "roadmap.phase2": "Phase 2 : Optimisation",
    "roadmap.phase3": "Phase 3 : Déploiement Gabès",
    "roadmap.desc0": "Preuve de concept algorithmique, Moteur IA hors-ligne.",
    "roadmap.desc1": "Tests pilotes avec 5 bateaux à Zarrat, Calibration.",
    "roadmap.desc2": "Connexion SOS VHF/Sat, Dashboard DGPA en temps réel.",
    "roadmap.desc3": "Lancement officiel sur tout le Golfe de Gabès.",
    "roadmap.phase4": "Phase 4 : Expansion Méditerranée",
    "roadmap.desc4": "Adaptation du modèle pour d'autres zones protégées et déploiement régional.",
    "roadmap.quote": "Les technologies existent aujourd’hui. Le besoin est urgent.",
    "cta.title": "Prêt à guérir le Golfe avec nous ?",
    "cta.pwa": "Installer Guardian of the Gulf (PWA)",
    "cta.pilot": "Devenir pilote / partenaire / investisseur",
    "cta.form.name": "Nom",
    "cta.form.phone": "Téléphone",
    "cta.form.port": "Port (Ghannouch, Zarrat...)",
    "cta.form.role": "Je suis pêcheur / institution / investisseur",
    "footer.made": "Made with ❤️ in Tunis for Gabès",
  },
  en: {
    "nav.home": "Home",
    "nav.problem": "The Problem",
    "nav.solution": "Solution",
    "nav.howItWorks": "How it Works",
    "nav.impact": "Impact",
    "nav.demo": "Demo",
    "nav.forFishermen": "For Fishermen",
    "nav.team": "Team",
    "nav.cta": "Install PWA",
    "hero.title": "SIBA7RI .AI: The Gulf of Gabès is no longer a blind spot.",
    "hero.subtitle": "For a smarter, safer, more Gabes-centered fishing. SIBA7RI guides every artisanal fisherman to the best legal and safe zone.",
    "hero.trustline": "Copernicus Satellite • Offline Bathymetry • Fleet Load Balancing • Offline SOS",
    "hero.ctaPrimary": "Install PWA App Now",
    "hero.ctaSecondary": "Join the Beta",
    "hero.demoBtn": "Watch 3-minute demo",
    "hero.socialProof": "Already tested by Zarrat fishermen • H12 Innovation 3.0 Partner",
    "problem.title": "Today, artisanal fishermen navigate blindly",
    "problem.card1": "30-40% fuel wasted",
    "problem.card2": "Overconcentration and destruction of Posidonia seagrass",
    "problem.card3": "Risk of chemical plumes (Ghannouch) or protected zones",
    "problem.card4": "Danger at sea without reliable SOS",
    "solution.title": "Guardian of the Gulf restores vision to the territory",
    "solution.valueProp": "The best zone, at the right time, via the best route, safe and uncrowded.",
    "how.layer1": "Satellite",
    "how.layer2": "Weather",
    "how.layer3": "Offline Bathymetry",
    "how.layer4": "Maritime Law",
    "how.layer5": "Boat Profile",
    "how.layer6": "Active Fleet",
    "diff.title": "We don’t just route boats. We orchestrate the territory.",
    "tech.title": "Technologies Powering Guardian of the Gulf",
    "diff.desc": "The Anti-Greediness Fleet Load Balancer distributes the fleet to prevent overfishing in any single zone.",
    "impact.card1": "-15 to -22% fuel usage",
    "impact.card2": "Posidonia Protection",
    "impact.card3": "Reduction of toxic catches",
    "impact.card4": "30-min SOS via Haras Watani",
    "demo.button": "Simulate recommendation from Zarrat",
    "demo.sos": "Test Sat SOS",
    "fishermen.title": "For Fishermen",
    "fishermen.desc": "Works entirely offline. Simple, fast, and designed for the sea.",
    "institutions.title": "For Institutions",
    "institutions.desc": "Territorial governance, data for DGPA, fleet tracking, and real-time SOS.",
    "team.title": "The Team",
    "team.subtitle": "Tunisiens passionate about the sea, tech, and the future of Gabès",
    "team.member1.role": "Full-stack developer passionate about maritime AI",
    "team.member2.role": "AI & Data Expert, Satellite Data",
    "team.member3.role": "Maritime & Local Expert (Zarrat)",
    "team.member4.role": "Environment / H12 Advisor",
    "team.member5.role": "Innovation & Partnerships Specialist",
    "team.member6.role": "Quality / Strategy Engineer",
    "roadmap.phase0": "Phase 0: MVP",
    "roadmap.phase1": "Phase 1: Testing",
    "roadmap.phase2": "Phase 2: Optimization",
    "roadmap.phase3": "Phase 3: Gabès Deployment",
    "roadmap.desc0": "Algorithmic proof of concept, Offline AI Engine.",
    "roadmap.desc1": "Pilot testing with 5 boats in Zarrat, Calibration.",
    "roadmap.desc2": "VHF/Sat SOS connection, Real-time DGPA Dashboard.",
    "roadmap.desc3": "Official launch across the entire Gulf of Gabès.",
    "roadmap.phase4": "Phase 4: Mediterranean Expansion",
    "roadmap.desc4": "Adapting the model for other protected zones and regional scaling.",
    "roadmap.quote": "The technologies exist today. The need is urgent.",
    "cta.title": "Ready to heal the Gulf with us?",
    "cta.pwa": "Install Guardian of the Gulf (PWA)",
    "cta.pilot": "Become a pilot / partner / investor",
    "cta.form.name": "Name",
    "cta.form.phone": "Phone",
    "cta.form.port": "Port (Ghannouch, Zarrat...)",
    "cta.form.role": "I am a fisherman / institution / investor",
    "footer.made": "Made with ❤️ in Tunis for Gabès",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.problem": "المشكلة",
    "nav.solution": "الحل",
    "nav.howItWorks": "كيفاش يخدم",
    "nav.impact": "التأثير",
    "nav.demo": "تجربة",
    "nav.forFishermen": "للبحّارة",
    "nav.team": "فريقنا",
    "nav.cta": "حمل التطبيق",
    "hero.title": "SIBA7RI .AI : خليج قابس ما عادش منطقة عمياء.",
    "hero.subtitle": "من أجل صيد أذكى، أضمن، و أقرب لأولاد قابس. سيبحري يدلك يا بحّار على أحسن بلاصة فيها قسمك.",
    "hero.trustline": "أقمار كوبرنيكوس • خريطة قاع البحر بلاش إنترنت • توزيع المراكب • نداء استغاثة يعتق الروح",
    "hero.ctaPrimary": "حمل التطبيق توة",
    "hero.ctaSecondary": "أدخل معانا في التجربة",
    "hero.demoBtn": "طُل على التطبيق كيفاش يخدم",
    "hero.socialProof": "خدمو بيه بحّارة الزارات • شركاء H12 Innovation 3.0",
    "problem.title": "اليوم، البحار التونسي يرمي في الشباك و يمشي بالزّهر",
    "problem.card1": "30 لـ 40% خسارة في المازوط الماشي في الفارغ عالبحر",
    "problem.card2": "اكتظاظ و تدمير لعشبة البوزيدونيا (رية البحر)",
    "problem.card3": "خطر التلوث متاع المجمع الكيميائي بغنوش أو المحميات العسكرية",
    "problem.card4": "خطر التوهان في البحر بلاش SOS أو ريزو 4G",
    "solution.title": "حارس الخليج يضوّي الثنية و يرجع الرؤية لبحرنا",
    "solution.valueProp": "أحسن بلاصة، في الوقت المناسب، في الثنية الموجّهة، بلاش خطر أو زحمة.",
    "how.layer1": "أقمار صناعية",
    "how.layer2": "حالة الطقس و النّو",
    "how.layer3": "خريطة القاع بلاش انترنت",
    "how.layer4": "قانون الصيد البحري",
    "how.layer5": "حالة الفلوكة",
    "how.layer6": "شكون معاك في البحر",
    "diff.title": "أحنا ما ننظموش كان مسار الفلوكة، أحنا نعسّو على الخليج كامل باش يعيش.",
    "tech.title": "التكنولوجيا اللي تخدم في حارس الخليج",
    "diff.desc": "السيستام متاعنا يوزع المراكب باش نتفاداو الصيد المفرط في نفس البقعة و نحافظو على الثروة.",
    "impact.card1": "اقتصاد في المازوط 15-22%",
    "impact.card2": "حماية رية البحر (البوزيدونيا)",
    "impact.card3": "نبعدو على صيد الحوت المريض",
    "impact.card4": "تخليط الحرس الوطني في 30 دقيقة",
    "demo.button": "جرب التوجيه من مرسى الزارات",
    "demo.sos": "جرب تبعث نداء استغاثة",
    "fishermen.title": "لخواتنا البحّارة، ولاد البحر",
    "fishermen.desc": "يا خويا، التطبيق يخدم معاك حتى في الغريق بلاش إنترنت. حطينا يدينا مع بعضنا باش نعاونوك تجيب قسمك من غير ما تضيع المازوط، سريع و مخدوم على قياس الفلايك.",
    "institutions.title": "للمؤسسات و شركائنا",
    "institutions.desc": "حوكمة شفافة، معطيات دقيقة للإدارة العامة للصيد البحري، و إنقاذ أسرع للأرواح.",
    "team.title": "شكونا أحنا؟",
    "team.subtitle": "توانسة مغرومين بالبحر، التكنولوجيا، و قاعدين نبنيو في مستقبل خليج قابس",
    "team.member1.role": "مطور ذكاء اصطناعي بحري من الجنوب",
    "team.member2.role": "خبير بيانات و أقمار صناعية",
    "team.member3.role": "خبير بحري و ولد الزارات",
    "team.member4.role": "مستشار بيئي / H12",
    "team.member5.role": "أخصائي ابتكار وشراكات",
    "team.member6.role": "مهندس جودة واستراتيجية",
    "roadmap.phase0": "المرحلة الأولى: النسخة الأولية",
    "roadmap.phase1": "المرحلة 1: تجربة مع البحارة",
    "roadmap.phase2": "المرحلة 2: التحسين",
    "roadmap.phase3": "المرحلة 3: النشر في كل مراسي قابس",
    "roadmap.desc0": "إثبات الفكرة، وتجهيز الذكاء الاصطناعي باش يخدم بلاش إنترنت.",
    "roadmap.desc1": "تجارب حقيقية مع 5 فلايك في الزارات، وتعديل السيستام في البحر.",
    "roadmap.desc2": "ربط نداء الاستغاثة، وبناء منصة المراقبة للإدارة العامة بصفة حينية.",
    "roadmap.desc3": "الانطلاقة الرسمية في كامل مراسي وحوائص خليج قابس.",
    "roadmap.phase4": "المرحلة 4: التوسع في البحر الأبيض المتوسط",
    "roadmap.desc4": "تكييف نموذج الذكاء الاصطناعي مع مناطق محمية أخرى والانتشار الإقليمي.",
    "roadmap.quote": "التكنولوجيا موجودة ليوم. الاحتياج عاجل برشا و ما عادش فيها.",
    "cta.title": "جاهز باش تاقف معانا و نرجّعوا الروح لخليجنا؟",
    "cta.pwa": "حط تطبيق حارس الخليج في تليفونك",
    "cta.pilot": "ولي شريك / مستثمر / مجرب معانا",
    "cta.form.name": "الاسم",
    "cta.form.phone": "رقم التليفون",
    "cta.form.port": "المرسى (غنوش، الزارات...)",
    "cta.form.role": "أنا بحّار / مؤسسة / مستثمر",
    "footer.made": "تخدمت بالقلب في تونس على خاطر قابس و ولادها المستضعفين",
  }
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("appLang") as Language;
    if (saved && ["fr", "en", "ar"].includes(saved)) return saved;
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "ar") return "ar";
    if (browserLang === "en") return "en";
    return "fr";
  });

  useEffect(() => {
    localStorage.setItem("appLang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const t = (key: string) => {
    return translations[lang]?.[key] || translations["fr"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir: lang === "ar" ? "rtl" : "ltr" }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
