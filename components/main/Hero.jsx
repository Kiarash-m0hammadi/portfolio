'use client';

import React from 'react';
import HeroContent from '../sub/HeroContent';

const Hero = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-0 sm:top-[-20%] md:top-[-340px] h-screen sm:h-[120vh] md:h-full w-full left-0 z-[1] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
