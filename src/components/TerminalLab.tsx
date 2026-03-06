import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal as TerminalIcon, Shield, Code, Cpu, Globe, Database, Network, Boxes } from 'lucide-react';
import SectionHeader from './SectionHeader';
import WindowContainer from './WindowContainer';

interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'success';
  content: string;
}

const COMMANDS = {
  help: 'Show all available commands',
  whoami: 'Show my intro',
  skills: 'Show skill categories',
  projects: 'Show top projects',
  resume: 'Open resume link',
  contact: 'Show email + links',
  hack_me: 'Initialize CTF Challenge',
  clear: 'Clear screen'
};

const DATA = {
  whoami: "Divyanshu Shinde | Cybersecurity & AI Enthusiast from Bhopal, India. Passionate about building secure, intelligent systems and exploring the depths of cybersecurity.",
  skills: [
    { category: 'Programming', list: 'Python, JavaScript, TypeScript, Java, C++, Go' },
    { category: 'Web Dev', list: 'React.js, Node.js, Next.js, TailwindCSS, Express.js, MongoDB' },
    { category: 'AI/DS', list: 'TensorFlow, PyTorch, Pandas, NumPy, Scikit-learn, OpenCV' },
    { category: 'Security', list: 'Penetration Testing, Web App Security, Network Security, OWASP Top 10, Burp Suite, Metasploit' }
  ],
  projects: [
    'CyberSec AI Assistant - AI-powered threat detection',
    'Bug Bounty Automation - Automated vuln scanner',
    'Smart Contract Auditor - Blockchain security analysis',
    'AI Code Reviewer - ML-powered review assistant'
  ],
  contact: 'Email: Divyanshushinde103@gmail.com\nGitHub: https://github.com/divyanshu998\nLinkedIn: https://linkedin.com/in/divyanshu-shinde-15325b2b1/'
};

const RadarChart = () => {
  const categories = [
    { name: 'AI', value: 90, icon: Cpu },
    { name: 'Web', value: 85, icon: Globe },
    { name: 'Backend', value: 80, icon: Database },
    { name: 'Networking', value: 75, icon: Network },
    { name: 'Security', value: 95, icon: Shield },
    { name: 'Blockchain', value: 70, icon: Boxes }
  ];

  const size = 300;
  const center = size / 2;
  const radius = size * 0.4;

  const getPoint = (index: number, value: number) => {
    const angle = (index * (2 * Math.PI)) / categories.length - Math.PI / 2;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle)
    };
  };

  const polygonPoints = categories.map((cat, i) => {
    const p = getPoint(i, cat.value);
    return `${p.x},${p.y}`;
  }).join(' ');

  const gridLevels = [25, 50, 75, 100];

  return (
    <div className="flex flex-col items-center">
      <h4 className="text-green-400 font-bold mb-4 flex items-center gap-2">
        <TerminalIcon size={18} /> SKILL_RADAR.EXE
      </h4>
      <div className="relative w-[300px] h-[300px]">
        <svg width={size} height={size} className="overflow-visible">
          {/* Grid Circles */}
          {gridLevels.map((level) => (
            <polygon
              key={level}
              points={categories.map((_, i) => {
                const p = getPoint(i, level);
                return `${p.x},${p.y}`;
              }).join(' ')}
              fill="none"
              stroke="rgba(0, 255, 136, 0.1)"
              strokeWidth="1"
            />
          ))}
          
          {/* Axis Lines */}
          {categories.map((_, i) => {
            const p = getPoint(i, 100);
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={p.x}
                y2={p.y}
                stroke="rgba(0, 255, 136, 0.1)"
                strokeWidth="1"
              />
            );
          })}

          {/* Data Polygon */}
          <polygon
            points={polygonPoints}
            fill="rgba(0, 255, 136, 0.2)"
            stroke="#00ff88"
            strokeWidth="2"
            className="transition-all duration-1000"
          />

          {/* Points and Labels */}
          {categories.map((cat, i) => {
            const p = getPoint(i, 105);
            return (
              <g key={i}>
                <text
                  x={p.x}
                  y={p.y}
                  fill="#00ff88"
                  fontSize="10"
                  textAnchor="middle"
                  className="font-mono font-bold"
                >
                  {cat.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

const SkillHeatmap = () => {
  const intensities = useMemo(() => Array.from({ length: 7 * 20 }).map(() => [0.1, 0.2, 0.4, 0.6, 0.8, 1.0][Math.floor(Math.random() * 6)]), []);
  
  return (
    <div className="flex flex-col items-center mt-8 w-full">
      <h4 className="text-green-400 font-bold mb-4 flex items-center gap-2 text-sm">
        <Code size={16} /> ACTIVITY_HEATMAP.LOG
      </h4>
      <div className="grid grid-flow-col grid-rows-7 gap-1 overflow-x-auto max-w-full p-3 border border-green-400/20 rounded bg-black/40 scrollbar-hide">
        {intensities.map((intensity, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-sm transition-all duration-300 hover:scale-125"
            style={{
              backgroundColor: `rgba(0, 255, 136, ${intensity})`,
              boxShadow: intensity > 0.6 ? '0 0 5px rgba(0, 255, 136, 0.2)' : 'none'
            }}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-4 text-[9px] text-green-400/40 font-mono uppercase tracking-widest">
        <span>Less</span>
        {[0.1, 0.4, 0.7, 1.0].map((val) => (
          <div key={val} className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: `rgba(0, 255, 136, ${val})` }} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};

const TerminalLab: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'output', content: 'TERMINAL_LAB v1.0.4 - Secure System Access' },
    { type: 'output', content: 'System: Online | Security: High | Encryption: AES-256' },
    { type: 'output', content: 'Type "help" for a list of available commands.' },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const [command, ...args] = trimmedCmd.split(' ');
    
    setHistory(prev => [...prev, { type: 'input', content: `root@portfolio:~$ ${cmd}` }]);
    
    setIsTyping(true);
    
    try {
      // Internal commands (Fast response)
      if (command === 'help') {
        setHistory(prev => [...prev, { 
          type: 'output', 
          content: Object.entries(COMMANDS).map(([k, v]) => `${k.padEnd(10)} - ${v}`).join('\n') + 
          '\n\nTry other commands: status, ping, version, date, secret'
        }]);
        setIsTyping(false);
        return;
      }
      
      if (command === 'clear') {
        setHistory([]);
        setIsTyping(false);
        return;
      }

      // Backend-powered responses
      const response = await fetch('http://127.0.0.1:5000/api/terminal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command: cmd })
      });

      if (response.ok) {
        const data = await response.json();
        setHistory(prev => [...prev, { type: 'output', content: data.response }]);
      } else {
        // Fallback to local logic if backend is down
        handleLocalCommand(command, args, cmd);
      }
    } catch (err) {
      // Fallback to local logic if network fails
      handleLocalCommand(command, args, cmd);
    } finally {
      setIsTyping(false);
    }
  };

  const handleLocalCommand = (command: string, args: string[], cmd: string) => {
    switch (command) {
      case 'whoami':
        setHistory(prev => [...prev, { type: 'output', content: DATA.whoami }]);
        break;
      case 'skills':
        setHistory(prev => [...prev, { 
          type: 'output', 
          content: DATA.skills.map(s => `[${s.category}] ${s.list}`).join('\n') 
        }]);
        break;
      case 'projects':
        setHistory(prev => [...prev, { 
          type: 'output', 
          content: 'TOP_PROJECTS:\n' + DATA.projects.map(p => `• ${p}`).join('\n') 
        }]);
        break;
      case 'resume':
        setHistory(prev => [...prev, { type: 'success', content: 'Opening resume.pdf... (Access Granted)' }]);
        window.open('#', '_blank');
        break;
      case 'contact':
        setHistory(prev => [...prev, { type: 'output', content: DATA.contact }]);
        break;
      case 'hack_me':
        setHistory(prev => [
          ...prev, 
          { type: 'output', content: 'Initializing CTF Challenge...' },
          { type: 'output', content: 'Decrypt the hidden flag.' },
          { type: 'success', content: 'RkxBR3tZb3VfQXJlX0VsZXRlX0hhY2tlcn0=' }
        ]);
        break;
      case 'decode':
        if (args[0] === 'RkxBR3tZb3VfQXJlX0VsZXRlX0hhY2tlcn0=') {
          setHistory(prev => [...prev, { type: 'success', content: 'FLAG{You_Are_Elite_Hacker}' }]);
        } else {
          setHistory(prev => [...prev, { type: 'error', content: 'Decoding failed. Invalid string.' }]);
        }
        break;
      case '':
        break;
      default:
        setHistory(prev => [...prev, { type: 'error', content: `Command not found: ${command}. Type 'help' for assistance.` }]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <section id="terminal-lab" className="py-20 relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader title="TERMINAL_LAB" />

          <WindowContainer title="divyanshu@portfolio: /terminal_lab" id="terminal" showControls={false}>
            <div 
              onClick={() => inputRef.current?.focus()}
              className="bg-black/90 rounded-lg overflow-hidden cursor-text relative"
            >
              {/* Scanning Line Animation */}
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-[#00ff88]/20 z-20 pointer-events-none"
              />
              
              {/* Terminal Body */}
              <div 
                ref={scrollRef}
                className="h-[400px] overflow-y-auto p-4 font-mono text-sm space-y-2 scrollbar-thin scrollbar-thumb-[#00ff88]/30"
              >
                {history.map((line, i) => (
                  <div 
                    key={i} 
                    className={`whitespace-pre-wrap ${
                      line.type === 'input' ? 'text-white' : 
                      line.type === 'error' ? 'text-red-400' : 
                      line.type === 'success' ? 'text-[#00ff88] font-bold' : 
                      'text-[#00ff88]/80'
                    }`}
                  >
                    {line.content}
                  </div>
                ))}
                {isTyping && (
                  <div className="text-[#00ff88]/50 animate-pulse">Processing...</div>
                )}
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                  <span className="text-[#00ff88]">root@portfolio:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
                    placeholder="Enter command..."
                  />
                  <div className="w-2 h-5 bg-[#00ff88] animate-[blink_1s_infinite]" />
                </form>
              </div>
            </div>
          </WindowContainer>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-black/60 border border-[#00ff88]/20 rounded-xl p-8 backdrop-blur-sm"
            >
              <RadarChart />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="bg-black/60 border border-[#00ff88]/20 rounded-xl p-8 backdrop-blur-sm flex flex-col justify-center"
            >
              <SkillHeatmap />
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between text-xs text-green-400/60 font-mono">
                  <span>SYSTEM_LOAD</span>
                  <div className="w-2/3 h-1 bg-green-400/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '42%' } : {}}
                      className="h-full bg-[#00ff88]" 
                    />
                  </div>
                  <span>42%</span>
                </div>
                <div className="flex items-center justify-between text-xs text-green-400/60 font-mono">
                  <span>SECURITY_INDEX</span>
                  <div className="w-2/3 h-1 bg-green-400/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '98%' } : {}}
                      className="h-full bg-[#00ff88]" 
                    />
                  </div>
                  <span>98%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.05)_0%,transparent_70%)]" />
      </div>
    </section>
  );
};

export default TerminalLab;