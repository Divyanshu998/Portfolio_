import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from './SectionHeader';
import WindowContainer from './WindowContainer';

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
          <SectionHeader title="ABOUT_ME" />
          
          <WindowContainer title="terminal_about.sh" id="about" showControls={false}>
            <div className="p-6 min-h-[400px]">
              <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                {displayText}
                <span className="animate-pulse">█</span>
              </pre>
            </div>
          </WindowContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default About;