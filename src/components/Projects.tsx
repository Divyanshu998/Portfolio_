import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'CyberSec AI Assistant',
      shortDesc: 'AI-powered cybersecurity threat detection system',
      description: 'An advanced machine learning system that analyzes network traffic patterns and identifies potential security threats in real-time. Built with TensorFlow and deployed on AWS.',
      tech: ['Python', 'TensorFlow', 'Flask', 'AWS', 'Docker'],
      category: 'AI/Cybersecurity',
      status: 'Live',
      github: 'https://github.com/divyanshu',
      demo: 'https://demo.com',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
    },
    {
      id: 2,
      title: 'Bug Bounty Automation Tool',
      shortDesc: 'Automated vulnerability scanner for web applications',
      description: 'A comprehensive tool that automates the initial phases of bug bounty hunting, including subdomain enumeration, port scanning, and vulnerability assessment.',
      tech: ['Python', 'Bash', 'Nmap', 'Burp Suite API'],
      category: 'Cybersecurity',
      status: 'Live',
      github: 'https://github.com/divyanshu',
      demo: 'https://demo.com',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg'
    },
    {
      id: 3,
      title: 'Forex Trading Bot',
      shortDesc: 'ML-powered forex trading algorithm',
      description: 'An intelligent trading bot that uses machine learning algorithms to analyze market patterns and execute profitable trades automatically.',
      tech: ['Python', 'Pandas', 'MetaTrader API', 'TensorFlow'],
      category: 'FinTech/AI',
      status: 'Private',
      github: 'https://github.com/divyanshu',
      demo: null,
      image: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg'
    },
    {
      id: 4,
      title: 'Hackathon Management System',
      shortDesc: 'Full-stack platform for managing hackathon events',
      description: 'A comprehensive platform for organizing and managing hackathon events, featuring team registration, project submissions, judging systems, and real-time leaderboards.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Docker'],
      category: 'Web Development',
      status: 'Live',
      github: 'https://github.com/divyanshu',
      demo: 'https://demo.com',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg'
    },
    {
      id: 5,
      title: 'Smart Contract Auditor',
      shortDesc: 'Blockchain security analysis tool',
      description: 'An automated tool for auditing smart contracts, identifying common vulnerabilities and security issues in Solidity code.',
      tech: ['Python', 'Solidity', 'Web3.py', 'React'],
      category: 'Blockchain/Security',
      status: 'Beta',
      github: 'https://github.com/divyanshu',
      demo: 'https://demo.com',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg'
    },
    {
      id: 6,
      title: 'AI Code Reviewer',
      shortDesc: 'Machine learning code review assistant',
      description: 'An AI-powered tool that automatically reviews code for security vulnerabilities, performance issues, and best practices violations.',
      tech: ['Python', 'OpenAI API', 'FastAPI', 'React', 'Docker'],
      category: 'AI/Development',
      status: 'Development',
      github: 'https://github.com/divyanshu',
      demo: null,
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader title="PROJECT_ARCHIVE" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div 
                  className="bg-black/60 border border-green-400/50 rounded-lg overflow-hidden h-full transition-all duration-300 hover:border-green-400 hover:shadow-2xl"
                  style={{
                    boxShadow: '0 0 30px rgba(0, 255, 65, 0.1)'
                  }}
                >
                  <div className="h-48 bg-gray-900 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                        {project.title}
                      </h3>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        project.status === 'Live' ? 'bg-green-400/20 text-green-400' :
                        project.status === 'Beta' ? 'bg-yellow-400/20 text-yellow-400' :
                        project.status === 'Development' ? 'bg-blue-400/20 text-blue-400' :
                        'bg-red-400/20 text-red-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-green-300/80 text-sm mb-4 line-clamp-2">
                      {project.shortDesc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-green-400/10 text-green-400 text-xs rounded border border-green-400/30">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-green-400/10 text-green-400 text-xs rounded border border-green-400/30">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="text-green-400/60 text-sm font-mono">
                      {project.category}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-black border border-green-400 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-green-400/30">
              <h3 className="text-2xl font-bold text-green-400">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-green-400 hover:text-red-400 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <p className="text-green-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-green-400 font-semibold mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech: string) => (
                    <span key={tech} className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded border border-green-400/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-400/10 text-green-400 px-4 py-2 rounded border border-green-400/50 hover:bg-green-400/20 transition-colors"
                >
                  <Github size={20} />
                  Source Code
                </motion.a>
                
                {selectedProject.demo && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-red-400/10 text-red-400 px-4 py-2 rounded border border-red-400/50 hover:bg-red-400/20 transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;