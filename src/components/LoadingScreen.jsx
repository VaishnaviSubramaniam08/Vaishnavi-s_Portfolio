import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 4500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] bg-[#020617] flex items-center justify-center overflow-hidden"
        >
          {/* Tech Grid Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          <div className="relative flex flex-col items-center justify-center">
            
            {/* Spinning Rings Container */}
            <div className="relative w-64 h-64 flex items-center justify-center">
              
              {/* Ring 1 - Outer Blue (Clockwise) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full border-2 border-transparent border-t-[#0A84FF] border-b-[#0A84FF] rounded-full opacity-40 blur-[1px]"
              />

              {/* Ring 2 - Middle Green (Counter-clockwise) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 border-[3px] border-transparent border-l-[#22C55E] border-r-[#22C55E] rounded-full opacity-60"
              />

              {/* Ring 3 - Inner Segmented Blue */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(10,132,255,0.6)]">
                  <path
                    d="M 50,10 A 40,40 0 0,1 90,50"
                    fill="none"
                    stroke="#0A84FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 50,90 A 40,40 0 0,1 10,50"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>

              {/* Center Pulsing Glow */}
              <motion.div
                animate={{ 
                  scale: [1, 1.25, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-16 h-16 bg-[#0A84FF]/20 rounded-full blur-md"
              />

              {/* Center Dot */}
              <motion.div
                animate={{ 
                  scale: [1, 1.5, 1],
                  boxShadow: [
                    "0 0 0px #22C55E",
                    "0 0 20px #22C55E",
                    "0 0 0px #22C55E"
                  ]
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-5 h-5 bg-[#22C55E] rounded-full"
              />
            </div>

            {/* Loading Text & Progress Bar */}
            <div className="mt-12 flex flex-col items-center gap-4">
              <motion.div 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-3"
              >
                <span className="w-2 h-2 bg-[#22C55E] rounded-full shadow-[0_0_8px_#22C55E]" />
                <span className="text-[#0A84FF] font-mono text-xs tracking-[0.4em] uppercase font-bold">
                  Initializing Portfolio
                </span>
                <span className="w-2 h-2 bg-[#22C55E] rounded-full shadow-[0_0_8px_#22C55E]" />
              </motion.div>

              <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-[#0A84FF] via-[#22C55E] to-[#0A84FF]"
                />
              </div>

              <div className="flex gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">
                <span>Core</span>
                <span className="text-[#22C55E]">Loaded</span>
                <span className="opacity-40">/</span>
                <span className="text-[#0A84FF]">UI</span>
                <span className="text-[#22C55E]">Active</span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
