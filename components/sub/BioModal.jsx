'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';

const BioModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-70"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative bg-[#030014] p-6 sm:p-8 rounded-lg border border-[#7042f88b] max-w-2xl w-full"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            About Me
          </h2>

          <div className="text-gray-300 space-y-4">
            <p className="leading-relaxed">
              Versatile Full Stack AI Engineer with 10+ years of programming experience in AI/ML,
              full-stack web development, and game development. Expert in rapid technology adoption
              and cross-domain problem-solving.
            </p>
            <p className="leading-relaxed">
              Combines technical expertise with an interdisciplinary background in Urban Planning
              for innovative solutions. Native-level English communication and proven ability to
              deliver scalable, impactful projects.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BioModal;
