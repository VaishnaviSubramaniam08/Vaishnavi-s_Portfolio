import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CoderBackground = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Coding symbols and keywords floating in the background
    const tags = [
      "HelloWorld",
  "</>",
  "{ code }",
  "[ array ]",
  "( function )",
  "=> arrow",
  "import",
  "const",
  "React",
  "let",
  "return",
  "async",
  "await",
  "npm"
];
    const newElements = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      symbol: tags[Math.floor(Math.random() * tags.length)],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      fontSize: `${Math.random() * 24 + 14}px`, // 14px to 38px
      duration: Math.random() * 15 + 15, // 15 to 30 seconds
      delay: Math.random() * 10,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute text-slate-300/30 dark:text-slate-600/20 font-mono font-bold select-none whitespace-nowrap"
          style={{ left: el.left, fontSize: el.fontSize }}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{
            y: ['110vh', '-10vh'],
            opacity: [0, 1, 1, 0],
            rotate: [0, Math.random() * 40 - 20]
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: 'linear',
          }}
        >
          {el.symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default CoderBackground;
