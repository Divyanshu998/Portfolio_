import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="relative mb-12 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-[#00ff88] text-center relative z-10"
          animate={{
            textShadow: [
              "0 0 5px #00ff88, 0 0 10px #00ff88",
              "0 0 10px #00ff88, 0 0 20px #00ff88",
              "0 0 5px #00ff88, 0 0 10px #00ff88"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          [ {title} ]
        </motion.h2>

        {/* Glitch layers */}
        <motion.div
          className="absolute inset-0 text-red-500 opacity-50 z-0 select-none hidden md:block"
          animate={{
            x: [-2, 2, -2],
            y: [1, -1, 1],
            opacity: [0, 0.4, 0]
          }}
          transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
        >
          [ {title} ]
        </motion.div>
        <motion.div
          className="absolute inset-0 text-blue-500 opacity-50 z-0 select-none hidden md:block"
          animate={{
            x: [2, -2, 2],
            y: [-1, 1, -1],
            opacity: [0, 0.4, 0]
          }}
          transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3.1 }}
        >
          [ {title} ]
        </motion.div>
      </motion.div>

      {/* Decorative bits */}
      <div className="flex gap-4 mt-2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -10]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.5
            }}
            className="text-[10px] font-mono text-[#00ff88]/40"
          >
            {Math.round(Math.random())}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionHeader;
