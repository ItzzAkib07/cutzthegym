import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import Dumbbell3D from './Dumbbell3D';
import FloatingParticles from './FloatingParticles';
import SceneFallback from './SceneFallback';

export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const checkMotion = (e) => setReducedMotion(e.matches);

    checkMobile();
    setReducedMotion(motionQuery.matches);

    window.addEventListener('resize', checkMobile);
    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', checkMotion);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener('change', checkMotion);
      }
    };
  }, []);

  if (reducedMotion) {
    return <SceneFallback />;
  }

  return (
    <div className="w-full h-full relative pointer-events-none">
      <Suspense fallback={<SceneFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 45 }}
          gl={{ antialias: !isMobile, alpha: true, powerPreference: 'high-performance' }}
          dpr={isMobile ? [1, 1] : [1, 1.5]}
          className="pointer-events-none"
        >
          {/* Ambient Studio Lighting */}
          <ambientLight intensity={0.6} />

          {/* Key Chrome Rim Light */}
          <directionalLight position={[5, 8, 5]} intensity={2.2} color="#FFFFFF" />

          {/* Warm Gold Fill Light */}
          <pointLight position={[-4, -3, 2]} intensity={2.5} color="#C9A04A" />

          {/* Overhead Accent Streak */}
          <spotLight
            position={[0, 6, 3]}
            angle={0.5}
            penumbra={1}
            intensity={3.0}
            color="#E6C36A"
          />

          <Float
            speed={isMobile ? 1 : 2}
            rotationIntensity={isMobile ? 0.3 : 0.6}
            floatIntensity={isMobile ? 0.4 : 0.8}
          >
            <Dumbbell3D />
          </Float>

          <FloatingParticles count={isMobile ? 24 : 50} />
        </Canvas>
      </Suspense>
    </div>
  );
}

