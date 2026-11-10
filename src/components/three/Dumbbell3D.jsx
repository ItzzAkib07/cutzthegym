import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Dumbbell3D({ pointer }) {
  const groupRef = useRef();

  // Procedural Materials
  const chromeMaterial = new THREE.MeshStandardMaterial({
    color: '#D6D6D6',
    metalness: 0.95,
    roughness: 0.18,
    envMapIntensity: 1.5,
  });

  const goldMaterial = new THREE.MeshStandardMaterial({
    color: '#C9A04A',
    metalness: 0.9,
    roughness: 0.22,
    envMapIntensity: 2.0,
  });

  const darkPlateMaterial = new THREE.MeshStandardMaterial({
    color: '#1a1a1a',
    metalness: 0.85,
    roughness: 0.35,
  });

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    // Gentle continuous floating oscillation
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.15;
    
    // Slow rotational tumble
    groupRef.current.rotation.y += delta * 0.35;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;

    // Subtle pointer parallax tilt
    if (state.pointer) {
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        state.pointer.x * 0.3,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef} scale={[1.1, 1.1, 1.1]} rotation={[0.4, 0.6, 0.2]}>
      {/* Central Handle Bar (Chrome) */}
      <mesh material={chromeMaterial} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.12, 0.12, 2.8, 32]} />
      </mesh>

      {/* Center Knurled Grip Ring */}
      <mesh material={chromeMaterial} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.13, 0.13, 1.4, 32]} />
      </mesh>

      {/* Left Side Inner Collar (Gold) */}
      <mesh material={goldMaterial} position={[-0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.22, 0.1, 32]} />
      </mesh>

      {/* Left Large Inner Plate */}
      <mesh material={darkPlateMaterial} position={[-1.0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.85, 0.85, 0.2, 32]} />
      </mesh>
      {/* Left Gold Trim on Inner Plate */}
      <mesh material={goldMaterial} position={[-1.0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.85, 0.03, 16, 32]} />
      </mesh>

      {/* Left Medium Middle Plate */}
      <mesh material={darkPlateMaterial} position={[-1.25, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.75, 0.75, 0.18, 32]} />
      </mesh>

      {/* Left Outer Small Plate */}
      <mesh material={darkPlateMaterial} position={[-1.48, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.65, 0.65, 0.15, 32]} />
      </mesh>

      {/* Left Outer Nut (Chrome & Gold) */}
      <mesh material={goldMaterial} position={[-1.6, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.22, 0.12, 6]} />
      </mesh>

      {/* Right Side Inner Collar (Gold) */}
      <mesh material={goldMaterial} position={[0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.22, 0.1, 32]} />
      </mesh>

      {/* Right Large Inner Plate */}
      <mesh material={darkPlateMaterial} position={[1.0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.85, 0.85, 0.2, 32]} />
      </mesh>
      {/* Right Gold Trim on Inner Plate */}
      <mesh material={goldMaterial} position={[1.0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.85, 0.03, 16, 32]} />
      </mesh>

      {/* Right Medium Middle Plate */}
      <mesh material={darkPlateMaterial} position={[1.25, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.75, 0.75, 0.18, 32]} />
      </mesh>

      {/* Right Outer Small Plate */}
      <mesh material={darkPlateMaterial} position={[1.48, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.65, 0.65, 0.15, 32]} />
      </mesh>

      {/* Right Outer Nut (Chrome & Gold) */}
      <mesh material={goldMaterial} position={[1.6, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.22, 0.12, 6]} />
      </mesh>
    </group>
  );
}

