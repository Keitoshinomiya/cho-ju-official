'use client';

import { useGLTF, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

interface ThreeModelProps {
  path: string;
  scale?: number;
  autoRotate?: boolean;
}

export default function ThreeModel({ path, scale = 1, autoRotate = false }: ThreeModelProps) {
  const { scene } = useGLTF(path); 
  
  const ref = useRef<Group>(null);

  useFrame(() => {
    if (autoRotate && ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={ref}>
      <Center>
        <primitive 
          object={scene} 
          scale={[scale, scale, scale]} 
        />
      </Center>
    </group>
  );
}
