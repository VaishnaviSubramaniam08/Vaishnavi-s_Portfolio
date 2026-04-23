import React from 'react';
import { motion } from 'framer-motion';

// Defined skills with subtle initial rotations for organic layout
const FLOATING_SKILLS = [
  { name: "HTML", rotate: -5, yOffset: 10, icon: "html5/html5-original.svg" },
  { name: "CSS", rotate: 8, yOffset: -5, icon: "css3/css3-original.svg" },
  { name: "JAVASCRIPT", rotate: -12, yOffset: 15, icon: "javascript/javascript-original.svg" },
  { name: "REACT", rotate: 15, yOffset: -10, icon: "react/react-original.svg" },
  { name: "NODE.JS", rotate: -8, yOffset: 5, icon: "nodejs/nodejs-original.svg" },
  { name: "PYTHON", rotate: 10, yOffset: -15, icon: "python/python-original.svg" },
  { name: "PHP", rotate: -15, yOffset: 8, icon: "php/php-original.svg" },
  { name: "JAVA", rotate: 5, yOffset: -20, icon: "java/java-original.svg" },
  { name: "MYSQL", rotate: -10, yOffset: 12, icon: "mysql/mysql-original.svg" },
  { name: "MONGODB", rotate: 12, yOffset: -8, icon: "mongodb/mongodb-original.svg" },
  { name: "POSTGRESQL", rotate: -6, yOffset: 18, icon: "postgresql/postgresql-original.svg" },
  { name: "VS CODE", rotate: 14, yOffset: -12, icon: "vscode/vscode-original.svg" },
  { name: "GIT", rotate: -14, yOffset: 6, icon: "git/git-original.svg" },
  { name: "GITHUB", rotate: 9, yOffset: -20, icon: "github/github-original.svg", invertOnDark: true },
  { name: "DOCKER", rotate: -4, yOffset: 10, icon: "docker/docker-original.svg" },
  // { name: "Firebase", rotate: 9, yOffset: -6, icon: "firebase/firebase-plain.svg" },
{ name: "NETLIFY", rotate: -11, yOffset: 16, icon: "netlify/netlify-original.svg" },
{ name: "VERCEL", rotate: 6, yOffset: -14, icon: "vercel/vercel-original.svg", invertOnDark: true },
{ 
  name: "ELECTRON", 
  rotate: 8, 
  yOffset: -10, 
  icon: "electron/electron-original.svg" 
},
  { name: "PYTHON", rotate: 10, yOffset: -15, icon: "python/python-original.svg" },
  // { name: "Java", rotate: 5, yOffset: -20, icon: "java/java-original.svg" },
  { name: "C", rotate: -7, yOffset: 14, icon: "c/c-original.svg" },

  { name: "FIREBASE", rotate: 11, yOffset: -6, icon: "firebase/firebase-plain.svg" },
  { name: "TAILWIND", rotate: -9, yOffset: 16, icon: "tailwindcss/tailwindcss-original.svg" },

{ name: "DSA", rotate: -5, yOffset: 10, icon: "cplusplus/cplusplus-original.svg" },
{ name: "OOP", rotate: 8, yOffset: -12, icon: "java/java-original.svg" },
{ name: "DBMS", rotate: -9, yOffset: 15, icon: "mysql/mysql-original.svg" }

];

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-24 md:py-32 relative bg-slate-50 dark:bg-[#0B1120] transition-colors duration-300 overflow-hidden min-h-[60vh] sm:min-h-[80vh] flex flex-col justify-center">
      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 w-full">

        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white mb-3 sm:mb-4 tracking-tight leading-tight"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Mastery of modern web technologies floating seamlessly together.
          </motion.p>
        </div>

        {/* Floating Pills Container */}
        <div className="relative max-w-4xl mx-auto flex flex-wrap justify-center items-center content-center gap-x-1.5 sm:gap-x-2 md:gap-x-6 gap-y-4 sm:gap-y-5 md:gap-y-6 lg:gap-y-10 p-3 sm:p-4 md:p-6 lg:p-8 h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/30 backdrop-blur-3xl shadow-lg dark:shadow-[0_0_40px_rgba(0,0,0,0.3)]">
          {FLOATING_SKILLS.map((skill, index) => {
            // Calculate a randomized organic floating animation interval between 4s and 8s
            const duration = 4 + (index % 4);
            const delay = index * 0.2;

            return (
              <motion.div
                key={skill.name}
                className="relative flex items-center gap-1.5 sm:gap-2 md:gap-3 px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-3 rounded-full border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 backdrop-blur-md text-slate-800 dark:text-white font-sans font-bold tracking-widest text-[10px] sm:text-xs md:text-sm cursor-pointer whitespace-nowrap shadow-[0_0_10px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(255,255,255,0.02)] transition-colors min-h-[32px] sm:min-h-[36px] md:min-h-[44px]"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  rotate: skill.rotate,
                  y: skill.yOffset
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.8, ease: "easeOut", delay: delay * 0.5 }
                }}
                animate={{
                  y: [skill.yOffset, skill.yOffset - 12, skill.yOffset],
                  rotate: [skill.rotate, skill.rotate + 3, skill.rotate - 3, skill.rotate],
                  boxShadow: [
                    "0 0 15px rgba(255,255,255,0.02)",
                    "0 0 25px rgba(255,255,255,0.1)",
                    "0 0 15px rgba(255,255,255,0.02)"
                  ]
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: delay,
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: 0,
                  borderColor: "rgba(34,197,94,0.8)",
                  backgroundColor: "rgba(34,197,94,0.1)",
                  boxShadow: "0 0 30px rgba(34,197,94,0.6)",
                  color: "rgba(34,197,94,1)",
                  zIndex: 50,
                  transition: { duration: 0.3, repeat: 0 }
                }}
              >
                <img 
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`} 
                  alt={`${skill.name} icon`} 
                  className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 object-contain ${skill.invertOnDark ? 'dark:invert' : ''}`}
                />
                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
