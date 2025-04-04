'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayIcon } from '@heroicons/react/24/solid';

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
  const [showPreview, setShowPreview] = useState(false);
  const [isIframeLoading, setIsIframeLoading] = useState(false);

  const handlePreviewClick = (e) => {
    e.stopPropagation();

    if (iframeUrl) {
      setShowPreview(true);
      setIsIframeLoading(true);
    }
  };

  const handleIframeLoad = () => {
    setTimeout(() => setIsIframeLoading(false), 500);
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group hover:scale-105 transition-transform duration-300 bg-[#030014]">
      <div className="relative w-full aspect-[16/9] bg-[#0c0a1d] overflow-hidden">
        <AnimatePresence>
          {!showPreview && (
            <motion.div
              key="placeholder"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              {/* ... (Placeholder content using src or generic) */}
              {src ? (
                  <Image
                    src={src}
                    alt={`${title} preview screenshot`} // More descriptive alt text
                    fill
                    className="object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#1a103c] to-[#0e0824]"></div>
                )}

              {iframeUrl && (
                 <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    // Pass the event to the handler
                    onClick={handlePreviewClick}
                    className="absolute z-10 flex items-center gap-2 py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] text-sm"
                    aria-label={`Load live preview for ${title}`}
                  >
                    <PlayIcon className="w-5 h-5"/>
                    View Live Preview
                 </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showPreview && iframeUrl && (
            <motion.div
              key="iframe"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              {isIframeLoading && <LoadingAnimation />}

              <iframe
                src={`${iframeUrl}?embed=true`}
                className={`w-full h-full transition-opacity duration-500 ${
                  isIframeLoading ? 'opacity-0 pointer-events-none' : 'opacity-100' // Prevent interaction during load fade
                }`}
                style={{
                  transform: 'scale(1) translateZ(0)',
                  transformOrigin: 'top center',
                }}
                loading="lazy"
                onLoad={handleIframeLoad}
                title={`${title} Live Preview`}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card Content */}
      <div className="relative p-4 bg-[#0300145e] backdrop-blur-sm mt-[-1px]">
        <h1 className="text-xl sm:text-2xl font-semibold text-white mb-2">{title}</h1>
        <p className="mt-2 text-sm sm:text-base text-gray-300 line-clamp-3">{description}</p>
        {/* Optional: Add a separate explicit link to open in new tab */}
        {/* <a href={iframeUrl} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 text-xs inline-flex items-center mt-1">
              Open Full Site <ExternalLinkIcon className="w-3 h-3 ml-1" />
           </a> */}
      </div>
    </div>
  );
};

export default ProjectCard;