import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayText, setDisplayText] = useState('');
  
  const aboutText = `> Initializing user profile...
> Loading personal data...
> Access granted!

Hey there! I'm Divyanshu Shinde, a passionate technologist who lives at the intersection of AI, cybersecurity, and innovation. As CTO at Incubator Pool, I lead cutting-edge projects that push the boundaries of what's possible.

My journey began with Python development, but quickly evolved into exploring the depths of cybersecurity through bug bounty hunting. The thrill of finding vulnerabilities and the satisfaction of securing systems drives my passion for ethical hacking.

When I'm not debugging code or hunting for bugs, you'll find me analyzing forex markets or developing AI solutions that solve real-world problems. My dual wins in national hackathons reflect my commitment to excellence and innovation.

As Secretary of the Coding Club at TIT Bhopal, I mentor aspiring developers and foster a community of learning and growth.

> Profile loaded successfully!
> Welcome to my digital realm...`;

  useEffect(() => {
    if (isInView) {
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index < aboutText.length) {
          setDisplayText(aboutText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
        }
      }, 30);
      
      return () => clearInterval(typeInterval);
    }
  }, [isInView, aboutText]);

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-400">
            [ ABOUT_ME ]
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-black/60 border border-green-400/50 rounded-lg p-8 shadow-2xl"
              style={{
                boxShadow: '0 0 50px rgba(0, 255, 65, 0.1)'
              }}
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-green-400 font-mono text-sm">
                  terminal_about.sh
                </div>
              </div>
              
              <div className="bg-black/80 rounded p-6 min-h-96">
                <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                  {displayText}
                  <span className="animate-pulse">█</span>
                </pre>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;