import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const BinaryRain: React.FC = () => {
  const columns = useMemo(() => Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: `${i * 4}%`,
    duration: Math.random() * 8 + 5,
    delay: Math.random() * 5,
    binary: Array.from({ length: 20 }).map(() => Math.round(Math.random()))
  })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.15]">
      {columns.map((col) => (
        <motion.div
          key={col.id}
          initial={{ y: -500 }}
          animate={{ y: ['0vh', '120vh'] }}
          transition={{ 
            duration: col.duration, 
            repeat: Infinity, 
            ease: "linear",
            delay: col.delay
          }}
          className="absolute text-green-500 font-mono text-[10px] whitespace-nowrap leading-none flex flex-col items-center"
          style={{ left: col.left }}
        >
          {col.binary.map((bit, j) => (
            <div key={j} className="my-1">{bit}</div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Cybersecurity Specialist 🛡️',
    'Ethical Hacker ⚔️',
    'Bug Bounty Hunter 🎯', 
    'AI Security Expert 🤖'
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let index = 0;
    
    if (isTyping) {
      const typeInterval = setInterval(() => {
        if (index <= currentRole.length) {
          setDisplayText(currentRole.slice(0, index));
          index++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }, 2000);
          clearInterval(typeInterval);
        }
      }, 80);
      
      return () => clearInterval(typeInterval);
    } else {
      const eraseInterval = setInterval(() => {
        if (displayText.length > 0) {
          setDisplayText(prev => prev.slice(0, -1));
        } else {
          clearInterval(eraseInterval);
        }
      }, 40);
      
      return () => clearInterval(eraseInterval);
    }
  }, [currentRoleIndex, isTyping, roles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <BinaryRain />
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-8"
        >
          <div className="border border-[#00ff88]/20 rounded-xl p-10 bg-black/60 backdrop-blur-xl max-w-5xl mx-auto shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <motion.pre 
              className="text-[#00ff88] text-[8px] md:text-[10px] mb-8 overflow-hidden leading-tight font-mono opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
{`
 ██████╗██╗   ██╗██████╗ ███████╗██████╗ ███████╗███████╗ ██████╗██╗   ██╗██████╗ ██╗████████╗██╗   ██╗
██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗██╔════╝██╔════╝██╔════╝██║   ██║██╔══██╗██║╚══██╔══╝╚██╗ ██╔╝
██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝███████╗█████╗  ██║     ██║   ██║██████╔╝██║   ██║    ╚████╔╝ 
██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗╚════██║██╔══╝  ██║     ██║   ██║██╔══██╗██║   ██║     ╚██╔╝  
╚██████╗   ██║   ██████╔╝███████╗██║  ██║███████║███████╗╚██████╗╚██████╔╝██║  ██║██║   ██║      ██║   
 ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝   ╚═╝      ╚═╝   
`}
            </motion.pre>
            
            <motion.h1 
              className="text-4xl md:text-7xl font-black mb-6 text-white tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <span className="text-[#00ff88]">CYBERSECURITY</span> SHINDE
            </motion.h1>
            
            <motion.div
              className="text-lg md:text-2xl mb-10 font-mono tracking-widest text-green-100/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <p className="mb-2">CTO at Incubator Pool | Secure System Architect</p>
              <p className="text-[#00ff88] font-bold text-sm bg-[#00ff88]/10 py-1 px-4 inline-block rounded-full border border-[#00ff88]/30">
                &gt; 2X National Hackathon Winner _
              </p>
            </motion.div>

            <motion.div
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <div className="bg-[#111] border border-[#00ff88]/30 rounded-md py-3 px-6 inline-flex items-center gap-3 shadow-[0_0_20px_rgba(0,255,136,0.1)]">
                <span className="text-[#00ff88] font-bold">root@cyber:~$ </span>
                <span className="text-white/90 font-mono">
                  {displayText}
                  <span className="inline-block w-2 h-5 bg-[#00ff88] ml-1 align-middle animate-pulse" />
                </span>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px #00ff41'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-green-400 text-green-400 px-8 py-3 rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 font-semibold"
            >
              [ EXPLORE_PORTFOLIO ]
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-green-400 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;