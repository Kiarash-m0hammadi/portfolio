'use client';

import { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const windowHeight = scrollHeight - clientHeight;
      const progress = `${(scrollTop / windowHeight) * 100}%`;

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] sm:h-1 z-[60]">
      <div
        className="h-full bg-purple-500 transition-all duration-200"
        style={{
          width: scrollProgress,
          boxShadow: '0 0 8px rgba(168, 85, 247, 0.4)'
        }}
      />
    </div>
  );
};

export default ProgressBar;
