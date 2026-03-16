import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Loader from '@/components/layout/Loader';
import Navbar from '@/components/layout/Navbar';
import ScrollProgress from '@/components/layout/ScrollProgress';
import WebGLBackground from '@/components/layout/WebGLBackground';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import WhatIDo from '@/components/sections/WhatIDo';
import ForWhom from '@/components/sections/ForWhom';
import Results from '@/components/sections/Results';
import Process from '@/components/sections/Process';
import SitePreviews from '@/components/sections/SitePreviews';
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
        <div className="relative">
          <ScrollProgress />
          <WebGLBackground />
          <Navbar />
          
          <main>
            <Hero />
            <WhatIDo />
            <ForWhom />
            <Results />
            <Process />
            <SitePreviews />
            <About />
            <Cta />
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
}
