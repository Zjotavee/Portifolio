import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import BackgroundEffects from './BackgroundEffects';

export default function FuturisticBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  useEffect(() => {
    setIsWebGLSupported(false);
  }, []);

  if (!isWebGLSupported) {
    return <BackgroundEffects />;
  }

  return <div ref={mountRef} className="fixed inset-0 z-0" />;
}
