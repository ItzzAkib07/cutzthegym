import React, { useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingParticles({ count = 60 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 12;
      p[i * 3 + 1] = (Math.random() - 0.5) * 8;
      p[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return p;
  }, [count]);

  const pointsRef = React.useRef();

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          itemSize={3}
          array={points}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#E6C36A"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

