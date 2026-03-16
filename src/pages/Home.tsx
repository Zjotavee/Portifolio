import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Loader from '@/components/layout/Loader';
import Navbar from '@/components/layout/Navbar';
import ScrollProgress from '@/components/layout/ScrollProgress';
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
        <div className="relative bg-main-bg">
          <ScrollProgress />
          <Navbar />
          
          <main>
            <Hero />
            <WhatIDo />
            <SitePreviews />
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
