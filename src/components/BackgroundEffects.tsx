import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects: React.FC = () => {
  const dots = useMemo(() => [...Array(10)].map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 2 + 1,
    delay: Math.random() * 5,
    x: [0, Math.random() * 20 - 10, 0],
    y: [0, Math.random() * 20 - 10, 0],
  })), []);

  const binaryColumns = useMemo(() => [...Array(8)].map((_, i) => ({
    id: i,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 10,
    text: Array.from({ length: 50 }).map(() => Math.round(Math.random())).join('')
  })), []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-30">
      {/* 1. Subtle Digital Grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* 2. Moving Scanning Line */}
      <motion.div
        animate={{ top: ['-10%', '110%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute left-0 w-full h-[1px] bg-green-500/10 shadow-[0_0_15px_rgba(0,255,65,0.2)]"
      />

      {/* 3. Random Glitch Dots */}
      <div className="absolute inset-0">
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.15, 0],
              x: dot.x,
              y: dot.y,
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
            }}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            style={{ top: dot.top, left: dot.left }}
          />
        ))}
      </div>

      {/* 4. Binary Stream (Lightweight) */}
      <div className="absolute inset-0 flex justify-around opacity-[0.02] overflow-hidden">
        {binaryColumns.map((col) => (
          <motion.div
            key={col.id}
            initial={{ y: -500 }}
            animate={{ y: [0, 1200] }}
            transition={{
              duration: col.duration,
              repeat: Infinity,
              ease: "linear",
              delay: col.delay
            }}
            className="text-green-500 font-mono text-[10px] break-all w-[10px] leading-tight"
          >
            {col.text}
          </motion.div>
        ))}
      </div>

      {/* 5. CRT Scanlines Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(transparent 50%, rgba(0, 255, 65, 0.01) 50%)',
          backgroundSize: '100% 4px',
          zIndex: 50,
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
