import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Square, X, Maximize2 } from 'lucide-react';

interface WindowContainerProps {
  title: string;
  children: React.ReactNode;
  id: string;
  showControls?: boolean;
}

const WindowContainer: React.FC<WindowContainerProps> = ({ title, children, id, showControls = true }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  if (isClosed && showControls) {
    return (
      <div className="flex justify-center py-4">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px #00ff88' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsClosed(false)}
          className="bg-[#00ff88]/10 border border-[#00ff88]/50 text-[#00ff88] px-4 py-1.5 rounded-md font-mono text-xs uppercase tracking-widest"
        >
          [ REOPEN_{id.toUpperCase()} ]
        </motion.button>
      </div>
    );
  }

  return (
    <motion.div
      layout
      className={`transition-all duration-300 ${
        isMaximized && showControls
          ? 'fixed inset-0 z-[9999] bg-black' 
          : 'relative max-w-5xl mx-auto my-8 w-full px-4'
      }`}
    >
      <div className={`
        bg-[#050505] border border-[#00ff88]/30 rounded-lg overflow-hidden flex flex-col
        ${isMaximized && showControls ? 'h-full rounded-none' : 'h-auto'}
        shadow-[0_0_40px_rgba(0,0,0,0.8)]
      `}>
        {/* Window Header */}
        <div className="bg-[#111] border-b border-[#00ff88]/20 px-4 py-2 flex items-center justify-between select-none">
          <div className="flex gap-2">
            {showControls ? (
              <>
                <button onClick={() => setIsClosed(true)} className="w-3 h-3 rounded-full bg-red-500/40 hover:bg-red-500 transition-colors" />
                <button onClick={() => setIsMinimized(!isMinimized)} className="w-3 h-3 rounded-full bg-yellow-500/40 hover:bg-yellow-500 transition-colors" />
                <button onClick={() => setIsMaximized(!isMaximized)} className="w-3 h-3 rounded-full bg-[#00ff88]/40 hover:bg-[#00ff88] transition-colors" />
              </>
            ) : (
              <>
                <div className="w-3 h-3 rounded-full bg-red-500/10" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/10" />
                <div className="w-3 h-3 rounded-full bg-[#00ff88]/10" />
              </>
            )}
          </div>
          
          <div className="text-[#00ff88]/70 text-[10px] font-mono uppercase tracking-[0.3em] font-bold">
            {title}
          </div>
          
          <div className="w-12" />
        </div>

        {/* Window Body */}
        {(!isMinimized || !showControls) && (
          <div className={`overflow-hidden ${isMaximized && showControls ? 'flex-1 overflow-y-auto custom-scrollbar' : ''}`}>
            <div className={isMaximized && showControls ? 'p-6 max-w-6xl mx-auto' : 'p-1'}>
              {children}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default WindowContainer;
