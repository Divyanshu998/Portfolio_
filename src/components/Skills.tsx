import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from './SectionHeader';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeTab, setActiveTab] = useState('programming');

  const skillCategories = {
    programming: {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95, icon: '🐍' },
        { name: 'JavaScript', level: 90, icon: '🟨' },
        { name: 'TypeScript', level: 85, icon: '🔷' },
        { name: 'Java', level: 80, icon: '☕' },
        { name: 'C++', level: 75, icon: '⚡' },
        { name: 'Go', level: 70, icon: '🐹' },
      ]
    },
    web: {
      title: 'Web Development',
      skills: [
        { name: 'React.js', level: 92, icon: '⚛️' },
        { name: 'Node.js', level: 88, icon: '🟢' },
        { name: 'Next.js', level: 85, icon: '▲' },
        { name: 'TailwindCSS', level: 90, icon: '🎨' },
        { name: 'Express.js', level: 87, icon: '🚀' },
        { name: 'MongoDB', level: 83, icon: '🍃' },
      ]
    },
    ai: {
      title: 'AI & Data Science',
      skills: [
        { name: 'TensorFlow', level: 88, icon: '🧠' },
        { name: 'PyTorch', level: 85, icon: '🔥' },
        { name: 'Pandas', level: 92, icon: '🐼' },
        { name: 'NumPy', level: 90, icon: '📊' },
        { name: 'Scikit-learn', level: 87, icon: '🔬' },
        { name: 'OpenCV', level: 80, icon: '👁️' },
      ]
    },
    security: {
      title: 'Cybersecurity',
      skills: [
        { name: 'Penetration Testing', level: 90, icon: '🛡️' },
        { name: 'Web App Security', level: 92, icon: '🌐' },
        { name: 'Network Security', level: 85, icon: '🔒' },
        { name: 'OWASP Top 10', level: 95, icon: '🎯' },
        { name: 'Burp Suite', level: 88, icon: '🔍' },
        { name: 'Metasploit', level: 83, icon: '⚔️' },
      ]
    },
    tools: {
      title: 'Other Tools',
      skills: [
        { name: 'Git', level: 93, icon: '📚' },
        { name: 'Docker', level: 87, icon: '🐳' },
        { name: 'Linux', level: 90, icon: '🐧' },
        { name: 'AWS', level: 82, icon: '☁️' },
        { name: 'Forex Trading', level: 78, icon: '📈' },
        { name: 'Leadership', level: 85, icon: '👥' },
      ]
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader title="SKILLS_MATRIX" />

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {Object.entries(skillCategories).map(([key, category]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-green-400 text-black border-green-400 shadow-lg shadow-green-400/50'
                    : 'bg-black/60 text-green-400 border-green-400/50 hover:border-green-400'
                }`}
              >
                {category.title}
              </motion.button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-black/60 border border-green-400/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-8 text-center">
                {skillCategories[activeTab as keyof typeof skillCategories].title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories[activeTab as keyof typeof skillCategories].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-400 font-semibold flex items-center gap-2">
                        <span>{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-green-300">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-black/80 rounded-full border border-green-400/30 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-green-400 to-red-400 shadow-lg"
                        style={{
                          boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)'
                        }}
                      />
                    </div>
                    
                    {/* Tooltip on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                      <div className="bg-black/90 border border-green-400/50 rounded px-3 py-1 text-sm text-green-300">
                        Proficiency: {skill.level}% | {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Learning'}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;