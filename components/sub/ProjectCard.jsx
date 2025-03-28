'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const LoadingAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-[#030014]">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-4 border-purple-500/20 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full animate-spin-slow"></div>
      <div className="absolute inset-0 border-4 border-transparent border-l-cyan-500 rounded-full animate-pulse-slow"></div>
    </div>
    <div className="absolute mt-24 flex flex-col items-center">
      <span className="text-sm text-gray-400 animate-pulse-slow">Loading Preview</span>
      <div className="mt-2 flex space-x-1">
        <div className="w-1 h-1 bg-purple-500 rounded-full animate-pulse-slow"></div>
        <div className="w-1 h-1 bg-purple-500 rounded-full animate-pulse-slow delay-100"></div>
        <div className="w-1 h-1 bg-purple-500 rounded-full animate-pulse-slow delay-200"></div>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ src, title, description, iframeUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  const iframeMarkup = iframeUrl ? (
    <div className="relative w-full aspect-[16/9] bg-[#030014] overflow-hidden">
      {isLoading && <LoadingAnimation />}
      <iframe
        src={`${iframeUrl}?embed=true`}
        className={`w-full h-full transition-all duration-2000 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          transform: 'scale(1) translateZ(0)',
          transformOrigin: 'top center',
          pointerEvents: 'none'
        }}
        loading="lazy"
        onLoad={() => {
          // Add a small delay to ensure smooth transition
          setTimeout(() => setIsLoading(false), 800);
        }}
      />
    </div>
  ) : (
    <div className="aspect-[16/9] relative overflow-hidden">
      <Image src={src} alt={title} fill className="object-cover" />
    </div>
  );

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group hover:scale-105 transition-transform duration-300">
      {iframeMarkup}
      <div className="relative p-4 bg-[#0300145e] backdrop-blur-sm">
        <h1 className="text-xl sm:text-2xl font-semibold text-white mb-2">{title}</h1>
        <p className="mt-2 text-sm sm:text-base text-gray-300 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
