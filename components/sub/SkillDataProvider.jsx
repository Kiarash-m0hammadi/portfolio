'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const SkillDataProvider = ({ src, width, height, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <div className="relative flex items-center justify-center">
        <Image
          src={src}
          width={width}
          height={height}
          alt="skill image"
          className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] object-contain"
        />
      </div>
    </motion.div>
  );
};

export default SkillDataProvider;
