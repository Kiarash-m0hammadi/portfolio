'use client';

import { useState, useEffect } from 'react';

export const useMouseMovement = (intensity = 0.05) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = e => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate offset from center
      const offsetX = (e.clientX - centerX) * intensity;
      const offsetY = (e.clientY - centerY) * intensity;

      setMousePosition({ x: offsetX, y: offsetY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [intensity]);

  return mousePosition;
};
