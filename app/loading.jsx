'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#030014]">
      <div className="relative">
        <div className="relative w-28 h-28">
          {/* Outer rings */}
          <div className="absolute inset-0 border-4 border-purple-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-0 border-4 border-transparent border-l-cyan-500 rounded-full animate-pulse-slow"></div>

          {/* Inner rings */}
          <div className="absolute inset-4 border-4 border-purple-500/20 rounded-full"></div>
          <div className="absolute inset-4 border-4 border-transparent border-t-cyan-500 rounded-full animate-spin-slow delay-150"></div>
        </div>

        {/* Text and dots */}
        <div className="absolute top-32 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Loading
          </span>
          <div className="mt-4 flex space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse-slow" />
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse-slow delay-100" />
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse-slow delay-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
