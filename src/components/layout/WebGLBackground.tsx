import { useRef, useMemo, useState, useEffect, Component, ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

class ErrorBoundary extends Component<{ children: ReactNode; fallback: () => void }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.fallback();
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

function ParticleSwarm() {
  const ref = useRef<THREE.Points>(null);
  const count = 5000;
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 10 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.075;
      
      const mouseX = (state.pointer.x * Math.PI) / 10;
      const mouseY = (state.pointer.y * Math.PI) / 10;
      
      ref.current.rotation.x += (mouseY - ref.current.rotation.x) * 0.05;
      ref.current.rotation.y += (mouseX - ref.current.rotation.y) * 0.05;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function WebGLBackground() {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    const handleContextError = () => {
      setWebglSupported(false);
    };

    window.addEventListener('webglcontextcreationerror', handleContextError);
    
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
        
        if (!gl) return false;

        // Check if we can actually use the context
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
          const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
          if (renderer) {
            const r = renderer.toLowerCase();
            // Intel HD Graphics on old Direct3D9 drivers (as seen in the error) is extremely unstable
            if (r.includes('disabled') || (r.includes('intel') && r.includes('direct3d9'))) {
              return false;
            }
          }
        }

        // Functional check: try to create a buffer
        const buffer = gl.createBuffer();
        if (!buffer) return false;
        gl.deleteBuffer(buffer);

        return true;
      } catch (e) {
        return false;
      }
    };

    setWebglSupported(checkWebGL());

    return () => {
      window.removeEventListener('webglcontextcreationerror', handleContextError);
    };
  }, []);

  if (webglSupported === false) {
    return (
      <div className="fixed inset-0 z-[-1] bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_70%)] animate-pulse" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full animate-blob animation-delay-2000" />
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[1px]" />
      </div>
    );
  }

  // Render nothing while checking support to avoid flash of content
  if (webglSupported === null) return <div className="fixed inset-0 z-[-1] bg-slate-950" />;

  return (
    <div className="fixed inset-0 z-[-1] bg-slate-950 pointer-events-none">
      <ErrorBoundary fallback={() => setWebglSupported(false)}>
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 60 }}
          gl={{ antialias: false, powerPreference: "high-performance" }}
          onError={() => setWebglSupported(false)}
        >
          <color attach="background" args={['#020617']} />
          <ambientLight intensity={0.5} />
          <ParticleSwarm />
        </Canvas>
      </ErrorBoundary>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 pointer-events-none" />
    </div>
  );
}
