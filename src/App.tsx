import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <Contact />
      </main>
      
      <footer className="relative z-10 border-t border-green-400/20 bg-black/80 backdrop-blur-sm py-6">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400/60 text-sm"
          >
            © 2025 Divyanshu Shinde | Crafted with ❤️ and lots of ☕
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-green-400/40 text-xs mt-2"
          >
            📧 Divyanshushinde103@gmail.com
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default App;