import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Python Developer 🐍',
    'Bug Bounty Hunter 🎯', 
    'Forex Trader 📈',
    'AI Developer 🤖'
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let index = 0;
    
    if (isTyping) {
      const typeInterval = setInterval(() => {
        if (index < currentRole.length) {
          setDisplayText(currentRole.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }, 2000);
          clearInterval(typeInterval);
        }
      }, 100);
      
      return () => clearInterval(typeInterval);
    } else {
      const eraseInterval = setInterval(() => {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          clearInterval(eraseInterval);
        }
      }, 50);
      
      return () => clearInterval(eraseInterval);
    }
  }, [currentRoleIndex, isTyping, displayText, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="border border-green-400/30 rounded-lg p-8 bg-black/40 backdrop-blur-sm max-w-4xl mx-auto">
            <motion.pre 
              className="text-green-400 text-sm mb-6 overflow-x-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
{`
██████╗ ██╗██╗   ██╗██╗   ██╗ █████╗ ███╗   ██╗███████╗██╗  ██╗██╗   ██╗
██╔══██╗██║██║   ██║╚██╗ ██╔╝██╔══██╗████╗  ██║██╔════╝██║  ██║██║   ██║
██║  ██║██║██║   ██║ ╚████╔╝ ███████║██╔██╗ ██║███████╗███████║██║   ██║
██║  ██║██║╚██╗ ██╔╝  ╚██╔╝  ██╔══██║██║╚██╗██║╚════██║██╔══██║██║   ██║
██████╔╝██║ ╚████╔╝    ██║   ██║  ██║██║ ╚████║███████║██║  ██║╚██████╔╝
╚═════╝ ╚═╝  ╚═══╝     ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝
`}
            </motion.pre>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-green-400"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              DIVYANSHU SHINDE
            </motion.h1>
            
            <motion.div
              className="text-xl md:text-2xl mb-8 text-green-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <p className="mb-4">CTO at Incubator Pool | AI & Cybersecurity Enthusiast</p>
              <p className="text-red-400 font-bold">2X National Hackathon Winner</p>
            </motion.div>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <div className="bg-black/60 border border-green-400/50 rounded-lg p-4 inline-block">
                <span className="text-green-400">root@divyanshu:~$ </span>
                <span className="text-white">echo "</span>
                <span className="text-green-400">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
                <span className="text-white">"</span>
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