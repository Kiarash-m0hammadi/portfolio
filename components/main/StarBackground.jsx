'use client';

import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import { useMouseMovement } from '../../utils/useMouseMovement';
import * as random from 'maath/random/dist/maath-random.esm';

const StarBackground = props => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  const { x, y } = useMouseMovement(0.0001);
  const baseRotationX = useRef(0);
  const baseRotationY = useRef(0);

  useFrame((state, delta) => {
    // Update base rotation
    baseRotationX.current -= delta / 10;
    baseRotationY.current -= delta / 15;

    // Cap mouse influence
    const maxInfluence = 0.9;
    const mouseX = Math.max(Math.min(x, maxInfluence), -maxInfluence);
    const mouseY = Math.max(Math.min(y, maxInfluence), -maxInfluence);

    // Apply combined rotation (base + subtle mouse influence)
    ref.current.rotation.x = baseRotationX.current + mouseY * 0.5;
    ref.current.rotation.y = baseRotationY.current + mouseX * 0.5;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="$fff"
          size={0.002}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[-20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
