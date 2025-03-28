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
        <div className="w-full h-full">
          <ProjectCard
            src="/PlaceHolder.png"
            title="place holder"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <div className="w-full h-full">
          <a
            href="https://quote-generator-eight-delta.vercel.app/"
            className="block w-full h-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              src="/QuoteApp.png"
              title="Quote Generator"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </a>
        </div>
        <div className="w-full h-full">
          <ProjectCard
            src="/PlaceHolder.png"
            title="place holder"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
