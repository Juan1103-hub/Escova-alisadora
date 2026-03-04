import { useScroll, useSpring, motion } from 'motion/react';

import BackgroundGlow from './components/shared/BackgroundGlow';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import ProductIntro from './components/ProductIntro';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import Chatbot from './components/Chatbot';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="relative bg-slate-950 min-h-screen text-slate-200 selection:bg-fuchsia-500/30">
      {/* Barra de progresso de scroll */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 origin-left z-50" style={{ scaleX }} />

      <BackgroundGlow />

      <Hero />
      <PainPoints />
      <ProductIntro />
      <HowItWorks />
      <Benefits />
      <Comparison />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />

      <StickyCTA />
      <Chatbot />
    </div>
  );
}
