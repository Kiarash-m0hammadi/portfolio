'use client';

import Image from 'next/image';
import React from 'react';

const ProjectCard = ({ src, title, description }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="relative p-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-white mb-2">{title}</h1>
        <p className="mt-2 text-sm sm:text-base text-gray-300 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
