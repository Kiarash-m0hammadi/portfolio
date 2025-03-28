'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '../../utils/motion';

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-4">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[20px] sm:text-[24px] md:text-[30px] text-white font-medium mt-[10px] text-center mb-[15px] leading-tight"
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[16px] sm:text-[18px] md:text-[20px] text-gray-200 mb-6 sm:mb-10 mt-[10px] text-center max-w-[600px]"
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  );
};

export default SkillText;
