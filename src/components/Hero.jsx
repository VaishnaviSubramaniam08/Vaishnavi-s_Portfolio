import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-scroll';
import profile from "./image.png";
import CoderBackground from './CoderBackground';
import resume from "../assets/resume.pdf";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Smooth Continuous Background Gradient */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-blue-50/50 to-white dark:from-slate-900 dark:to-[#0B1120]"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />

      {/* Coder Background (renders over gradient, but under content) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <CoderBackground />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Welcome to my portfolio
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Hi, I'm <span className="text-primary italic">Vaishnavi S</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-400 mb-8">
              Full Stack Developer | MERN | Java
            </h2>

            <p className="text-lg text-slate-500 dark:text-slate-400 mb-10">
              "I build scalable web applications and solve real-world problems"
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="projects" smooth={true} duration={500}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary text-white rounded-full flex items-center gap-2 shadow-lg shadow-primary/20"
                >
                  View Projects
                  <ArrowRight size={18} />
                </motion.button>
              </Link>

              <a href={resume}  download>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-3 border-2 border-primary text-primary rounded-full flex items-center gap-2"
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
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">

              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full h-full rounded-full p-2 bg-gradient-to-tr from-primary to-transparent shadow-[0_0_40px_rgba(34,197,94,0.3)]"
              >
                <img
                  src={profile}
                  alt="Vaishnavi S"
                  className="w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-900"
                />
              </motion.div>

              {/* Animated Rings behind image */}
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
              
              {/* Core Glow behind image */}
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-[60px] -z-10 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;