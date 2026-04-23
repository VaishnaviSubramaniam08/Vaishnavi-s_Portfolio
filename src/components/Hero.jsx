import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-scroll';
import profile from "./image.png";
import CoderBackground from './CoderBackground';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-blue-50/50 to-white dark:from-slate-900 dark:to-[#0B1120]"
      />

      {/* Coder Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <CoderBackground />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <span className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 sm:mb-6">
              Welcome to my portfolio
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Hi, I'm <span className="text-primary italic">Vaishnavi S</span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-400 mb-6 sm:mb-8">
              Full Stack Developer | MERN | Java
            </h2>

            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 mb-8 sm:mb-10">
              "I build scalable web applications and solve real-world problems"
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto">

              {/* View Projects */}
              <Link to="projects" smooth={true} duration={500}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-primary text-white rounded-full flex items-center justify-center gap-2 shadow-lg shadow-primary/20 min-h-[44px]"
                >
                  View Projects
                  <ArrowRight size={18} />
                </motion.button>
              </Link>

              {/* Download Resume */}
              <a href="/resume.pdf" download>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-primary text-primary rounded-full flex items-center justify-center gap-2 min-h-[44px]"
                >
                  Download Resume
                  <Download size={18} />
                </motion.button>
              </a>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">

              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full h-full rounded-full p-1.5 sm:p-2 bg-gradient-to-tr from-primary to-transparent shadow-[0_0_40px_rgba(34,197,94,0.3)]"
              >
                <img
                  src={profile}
                  alt="Vaishnavi S"
                  className="w-full h-full object-cover rounded-full border-3 sm:border-4 border-white dark:border-slate-900"
                />
              </motion.div>

              {/* Animated Rings */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/50 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ scale: 1.15 }}
              />
              <motion.div 
                className="absolute inset-0 rounded-full border border-primary/30 pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ scale: 1.25 }}
              />
              
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-[60px] -z-10 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;