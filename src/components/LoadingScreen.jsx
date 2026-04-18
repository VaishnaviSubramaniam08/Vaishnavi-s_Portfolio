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

  const particles = Array.from({ length: 15 });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[200] bg-[#0B1120] flex items-center justify-center overflow-hidden"
        >
          {/* Bird Animation Container */}
          <motion.div
            initial={{ x: "-20vw", y: "0vh" }}
            animate={{ 
              x: ["-20vw", "20vw", "70vw", "120vw"],
              y: ["0vh", "2vh", "-2vh", "0vh"],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 3.5, 
              ease: "linear",
            }}
            className="relative"
          >
            {/* Soft Glowing Trail */}
            <motion.div 
              className="absolute top-1/2 right-full h-[3px] w-48 bg-gradient-to-l from-primary/60 via-primary/20 to-transparent blur-[3px] -translate-y-1/2 origin-right"
              animate={{ opacity: [0, 1, 0], scaleX: [0.5, 1.5, 1] }}
              transition={{ duration: 3.5 }}
            />

            {/* Sparkle Particles */}
            {particles.map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-primary rounded-full blur-[1px]"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  x: [0, -30 - Math.random() * 60],
                  y: [0, (Math.random() - 0.5) * 50],
                  scale: [0, 1.5, 0]
                }}
                transition={{ 
                  duration: 1,
                  delay: (i * 0.1),
                  repeat: Infinity,
                  repeatDelay: 0.1
                }}
              />
            ))}

            <svg 
              width="140" 
              height="100" 
              viewBox="0 0 100 80" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]"
            >
              <g>
                {/* Dynamic Feather Layers */}
                <motion.path
                  d="M30 40 Q45 20 60 40"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 1, pathLength: 1 }}
                  transition={{ delay: 0.8, duration: 1.2 }}
                />
                <motion.path
                  d="M25 45 Q45 65 65 45"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 0.7, pathLength: 1 }}
                  transition={{ delay: 1.5, duration: 1.2 }}
                />

                {/* Main Wings */}
                <motion.g
                  animate={{ 
                    rotateZ: [-10, 10, -10],
                    y: [0, -5, 0]
                  }}
                  transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
                  style={{ originX: "50px", originY: "40px" }}
                >
                  <motion.path
                    d="M10 40 Q50 10 90 40"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    animate={{ 
                      scaleY: [1, -0.5, 1],
                      y: [0, 10, 0]
                    }}
                    transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
                    style={{ originX: "50px", originY: "40px" }}
                  />
                </motion.g>

                {/* Core Body */}
                <path
                  d="M35 40 L65 40"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M65 40 L72 36"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <circle cx="75" cy="35" r="2.5" fill="currentColor" />
              </g>
            </svg>
          </motion.div>

          {/* Premium Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="absolute bottom-24 flex flex-col items-center"
          >
            <p className="text-primary/80 font-display font-medium tracking-[0.4em] text-[10px] uppercase mb-4">
              Loading your experience
            </p>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-primary/60 blur-[1px]"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
