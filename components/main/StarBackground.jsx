'use client';

import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useMouseMovement } from '../../utils/useMouseMovement';
import * as random from 'maath/random/dist/maath-random.esm';

const StarLayer = ({ count, radius, size, color, rotationSpeedFactor, mouseInfluenceFactor }) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(count * 3), { radius: radius }));

  const { x, y } = useMouseMovement(0.0001);
  const baseRotationX = useRef(0);
  const baseRotationY = useRef(0);

  useFrame((state, delta) => {
    baseRotationX.current -= (delta / 10) * rotationSpeedFactor;
    baseRotationY.current -= (delta / 15) * rotationSpeedFactor;

    const maxInfluence = 0.9;
    const mouseX = Math.max(Math.min(x, maxInfluence), -maxInfluence);
    const mouseY = Math.max(Math.min(y, maxInfluence), -maxInfluence);

    ref.current.rotation.x = baseRotationX.current + mouseY * mouseInfluenceFactor;
    ref.current.rotation.y = baseRotationY.current + mouseX * mouseInfluenceFactor;
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const Stars = () => {
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Base Starfield (like original) */}
      <StarLayer
        count={5000}
        radius={1.2}
        size={0.002}
        color="#ffffff"
        rotationSpeedFactor={1}
        mouseInfluenceFactor={0.5}
      />
      {/* Faint, distant, slower stars */}
      <StarLayer
        count={3000}
        radius={1.5}
        size={0.0015}
        color="#aaccff"
        rotationSpeedFactor={0.7}
        mouseInfluenceFactor={0.3}
      />
      {/* Closer, larger, sparse "highlight" stars */}
      <StarLayer
        count={500}
        radius={1.0}
        size={0.004}
        color="#ffeeaa"
        rotationSpeedFactor={1.2}
        mouseInfluenceFactor={0.7}
      />
    </group>
  );
};

const StarBackground = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarBackground;
