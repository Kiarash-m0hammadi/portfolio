'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const ProjectCard = ({ src, title, description, iframeUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  const iframeMarkup = iframeUrl ? (
    <div className="relative w-full aspect-[16/9] bg-[#030014] overflow-hidden">
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isLoading ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="animate-pulse w-full h-full bg-purple-900/20"></div>
      </div>
      <iframe
        src={`${iframeUrl}?embed=true`}
        className={`w-full h-full transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          transform: 'scale(1)',
          transformOrigin: 'top center',
          pointerEvents: 'none'
        }}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
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
