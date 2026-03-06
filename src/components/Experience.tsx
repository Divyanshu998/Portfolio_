import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, ChevronRight, Calendar, MapPin } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [expandedItems, setExpandedItems] = useState<number[]>([0]);

  const experiences = [
    {
      id: 0,
      title: 'Chief Technology Officer',
      company: 'Incubator Pool',
      duration: '2023 - Present',
      location: 'Remote',
      type: 'Full-time',
      description: 'Leading the technology vision and strategy for a fast-growing startup focused on AI and cybersecurity innovations.',
      achievements: [
        'Architected and implemented scalable AI-powered security solutions serving 10,000+ users',
        'Led a team of 8 developers and security researchers',
        'Increased system performance by 300% through optimization and cloud infrastructure improvements',
        'Established security protocols that reduced vulnerability incidents by 95%',
        'Developed automated testing frameworks that improved deployment speed by 60%'
      ],
      technologies: ['Python', 'TensorFlow', 'AWS', 'Docker', 'Kubernetes', 'React', 'Node.js'],
      color: 'border-green-400 bg-green-400/10',
      glowColor: 'rgba(34, 197, 94, 0.3)'
    },
    {
      id: 1,
      title: 'Secretary',
      company: 'Coding Club, TIT Bhopal',
      duration: '2022 - Present',
      location: 'Bhopal, India',
      type: 'Leadership Role',
      description: 'Managing and leading the coding club activities, organizing workshops, hackathons, and mentoring junior developers.',
      achievements: [
        'Grew club membership from 50 to 200+ active members',
        'Organized 5+ successful hackathons with 500+ total participants',
        'Conducted 20+ technical workshops on AI, cybersecurity, and web development',
        'Mentored 50+ students in competitive programming and project development',
        'Established partnerships with 3 major tech companies for internship opportunities'
      ],
      technologies: ['Leadership', 'Event Management', 'Python', 'JavaScript', 'Git'],
      color: 'border-blue-400 bg-blue-400/10',
      glowColor: 'rgba(96, 165, 250, 0.3)'
    },
    {
      id: 2,
      title: 'Freelance Bug Bounty Hunter',
      company: 'Various Platforms',
      duration: '2021 - Present',
      location: 'Remote',
      type: 'Freelance',
      description: 'Conducting security assessments and vulnerability research for various organizations and bug bounty platforms.',
      achievements: [
        'Discovered 25+ critical vulnerabilities across major platforms',
        'Earned $15,000+ in bug bounty rewards',
        'Achieved top 1% ranking on HackerOne platform',
        'Specialized in web application security and API testing',
        'Published security research papers on emerging threats'
      ],
      technologies: ['Burp Suite', 'OWASP', 'Python', 'Bash', 'Linux', 'Metasploit'],
      color: 'border-red-400 bg-red-400/10',
      glowColor: 'rgba(248, 113, 113, 0.3)'
    },
    {
      id: 3,
      title: 'Python Developer Intern',
      company: 'Tech Innovators Ltd.',
      duration: '2022 - 2023',
      location: 'Mumbai, India',
      type: 'Internship',
      description: 'Developed machine learning models and automated systems for business process optimization.',
      achievements: [
        'Built automated data processing pipeline handling 1M+ records daily',
        'Developed ML models with 92% accuracy for customer behavior prediction',
        'Reduced manual processing time by 80% through automation scripts',
        'Created REST APIs serving 100+ concurrent users',
        'Collaborated with cross-functional teams on 3 major projects'
      ],
      technologies: ['Python', 'Django', 'PostgreSQL', 'Pandas', 'Scikit-learn', 'Docker'],
      color: 'border-purple-400 bg-purple-400/10',
      glowColor: 'rgba(168, 85, 247, 0.3)'
    }
  ];

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader title="EXPERIENCE_LOG" />

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-400/30"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="relative mb-8"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-green-400 rounded-full border-4 border-black z-10 shadow-lg shadow-green-400/50"></div>

                  {/* Experience Card */}
                  <div className={`ml-20 border rounded-lg p-6 transition-all duration-300 cursor-pointer ${exp.color}`}
                       style={{ boxShadow: `0 0 30px ${exp.glowColor}` }}
                       onClick={() => toggleExpanded(exp.id)}>
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-green-400 mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg text-green-300 mb-2">
                          {exp.company}
                        </h4>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-green-400/80">
                          <span className="flex items-center gap-1">
                            <Calendar size={16} />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={16} />
                            {exp.location}
                          </span>
                          <span className="px-2 py-1 bg-green-400/20 rounded text-xs">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      
                      <motion.div
                        animate={{ rotate: expandedItems.includes(exp.id) ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-green-400 ml-4"
                      >
                        <ChevronRight size={24} />
                      </motion.div>
                    </div>

                    {/* Description */}
                    <p className="text-green-300/80 mb-4">
                      {exp.description}
                    </p>

                    {/* Expanded Content */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: expandedItems.includes(exp.id) ? 'auto' : 0,
                        opacity: expandedItems.includes(exp.id) ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {expandedItems.includes(exp.id) && (
                        <div className="border-t border-green-400/30 pt-4">
                          {/* Achievements */}
                          <div className="mb-6">
                            <h5 className="text-green-400 font-semibold mb-3">Key Achievements:</h5>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, achIndex) => (
                                <motion.li
                                  key={achIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: achIndex * 0.1 }}
                                  className="flex items-start gap-2 text-green-300/90"
                                >
                                  <span className="text-green-400 mt-1 text-xs">▶</span>
                                  {achievement}
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h5 className="text-green-400 font-semibold mb-3">Technologies Used:</h5>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <motion.span
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: techIndex * 0.05 }}
                                  className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded border border-green-400/50 hover:bg-green-400/30 transition-colors"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;