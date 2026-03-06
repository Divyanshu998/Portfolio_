import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, Users, Target, Code, Shield } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Achievements: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const achievements = [
    {
      id: 1,
      title: '2X National Hackathon Winner',
      description: 'Won first place in two prestigious national-level hackathons with innovative AI and cybersecurity solutions',
      icon: Trophy,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/50',
      glowColor: 'rgba(250, 204, 21, 0.3)'
    },
    {
      id: 2,
      title: 'CTO at Incubator Pool',
      description: 'Leading technology initiatives and driving innovation in AI and cybersecurity for a growing startup',
      icon: Code,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/50',
      glowColor: 'rgba(96, 165, 250, 0.3)'
    },
    {
      id: 3,
      title: 'Secretary, Coding Club TIT Bhopal',
      description: 'Leading and mentoring 200+ student developers, organizing workshops and coding competitions',
      icon: Users,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/50',
      glowColor: 'rgba(34, 197, 94, 0.3)'
    },
    {
      id: 4,
      title: 'Bug Bounty Hunter',
      description: 'Successfully identified and reported critical vulnerabilities in major platforms, earning recognition',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
      borderColor: 'border-red-400/50',
      glowColor: 'rgba(248, 113, 113, 0.3)'
    },
    {
      id: 5,
      title: 'AI Innovation Award',
      description: 'Recognized for developing cutting-edge AI solutions that solve real-world cybersecurity challenges',
      icon: Award,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/50',
      glowColor: 'rgba(168, 85, 247, 0.3)'
    },
    {
      id: 6,
      title: 'Forex Trading Success',
      description: 'Developed and implemented successful algorithmic trading strategies with consistent returns',
      icon: Target,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/50',
      glowColor: 'rgba(251, 146, 60, 0.3)'
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader title="ACHIEVEMENT_UNLOCKED" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 50, rotateX: 45 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="group"
                >
                  <div 
                    className={`${achievement.bgColor} border ${achievement.borderColor} rounded-lg p-6 h-full transition-all duration-300 hover:shadow-2xl cursor-pointer`}
                    style={{
                      boxShadow: `0 0 30px ${achievement.glowColor}`
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`${achievement.bgColor} ${achievement.borderColor} border rounded-full p-3 mr-4 group-hover:scale-110 transition-transform`}>
                        <IconComponent 
                          size={32} 
                          className={`${achievement.color}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold ${achievement.color} mb-1`}>
                          {achievement.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-green-300/80 leading-relaxed">
                      {achievement.description}
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-green-400/20">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-green-400/60 font-mono">
                          STATUS: ACHIEVED
                        </span>
                        <div className="flex space-x-1">
                          <div className={`w-2 h-2 ${achievement.bgColor} rounded-full animate-pulse`}></div>
                          <div className={`w-2 h-2 ${achievement.bgColor} rounded-full animate-pulse`} style={{ animationDelay: '0.2s' }}></div>
                          <div className={`w-2 h-2 ${achievement.bgColor} rounded-full animate-pulse`} style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 bg-black/60 border border-green-400/50 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-green-400 text-center mb-8">
              [ SYSTEM_STATS ]
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 1.4, type: "spring", stiffness: 100 }}
                  className="text-3xl md:text-4xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors"
                >
                  2+
                </motion.div>
                <div className="text-green-300/80 text-sm">Years of Experience</div>
              </div>
              
              <div className="group">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 1.6, type: "spring", stiffness: 100 }}
                  className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors"
                >
                  15+
                </motion.div>
                <div className="text-green-300/80 text-sm">Projects Completed</div>
              </div>
              
              <div className="group">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 1.8, type: "spring", stiffness: 100 }}
                  className="text-3xl md:text-4xl font-bold text-red-400 mb-2 group-hover:text-red-300 transition-colors"
                >
                  10+
                </motion.div>
                <div className="text-green-300/80 text-sm">Vulnerabilities Found</div>
              </div>
              
              <div className="group">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 2.0, type: "spring", stiffness: 100 }}
                  className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors"
                >
                  200+
                </motion.div>
                <div className="text-green-300/80 text-sm">Students Mentored</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;