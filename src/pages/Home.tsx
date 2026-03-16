import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Loader from '@/components/layout/Loader';
import Navbar from '@/components/layout/Navbar';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FuturisticBackground from '@/components/layout/FuturisticBackground';
import Hero from '@/components/sections/Hero';
import Storytelling from '@/components/sections/Storytelling';
import WebsiteBorn from '@/components/sections/WebsiteBorn';
import About from '@/components/sections/About';
import WhatIDo from '@/components/sections/WhatIDo';
import ForWhom from '@/components/sections/ForWhom';
import Results from '@/components/sections/Results';
import Process from '@/components/sections/Process';
import ProjectGallery3D from '@/components/sections/ProjectGallery3D';
import Cta from '@/components/sections/Cta';
import Footer from '@/components/layout/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      {!isLoading && (
        <div className="relative bg-main-bg">
          <FuturisticBackground />
          <ScrollProgress />
          <Navbar />
          
          <main className="relative z-10">
            <Hero />
            <Storytelling />
            <WebsiteBorn />
            <WhatIDo />
            <ProjectGallery3D />
            <ForWhom />
            <Results />
            <Process />
            <About />
            <Cta />
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
}
