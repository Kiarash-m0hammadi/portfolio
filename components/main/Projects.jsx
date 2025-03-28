'use client';

import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10 sm:py-20 px-4 sm:px-10"
      id="projects"
    >
      <h1 className="text-[28px] sm:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 sm:py-20 text-center">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 w-full max-w-[1200px]">
        {/* Peggy Gou Clone */}
        <a
          href="https://peggy-gou-clone.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="order-2 lg:order-1"
        >
          <ProjectCard
            title="Peggy Gou Clone"
            description="How's this for a change."
            iframeUrl="https://peggy-gou-clone.vercel.app/"
          />
        </a>

        {/* Paisana Clone with animated border */}
        <div className="relative group order-1 lg:order-2">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
          <a
            href="https://paisana-clone.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative bg-[#030014] rounded-lg"
          >
            <ProjectCard
              title="Paisana Clone"
              description="Look Matter, Motions Matter."
              iframeUrl="https://paisana-clone.vercel.app/"
            />
          </a>
        </div>

        {/* Neiropraktika */}
        <a
          href="https://neiropraktika.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="order-3"
        >
          <ProjectCard
            title="Neiropraktika"
            description="This could be your site!"
            iframeUrl="https://neiropraktika.vercel.app/"
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
