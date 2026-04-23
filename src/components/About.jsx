import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { ABOUT_TEXT } from '../constants';
import profile from "./image.png";
const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <SectionTitle title="About Me" />
        
        <div className="mt-8 sm:mt-12 max-w-6xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Glassmorphism Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex justify-center order-1 lg:order-1"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="relative p-2 sm:p-3 rounded-2xl backdrop-blur-md bg-white/40 dark:bg-slate-800/40 border border-white/50 dark:border-slate-700/50 shadow-xl shadow-primary/10 overflow-hidden group max-w-sm mx-auto"
              >
                {/* Soft glowing background element within the card */}
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md pointer-events-none" />
                
                <img
                  src={profile}
                  alt="Vaishnavi S Profile"
                  className="w-full h-auto object-cover rounded-xl border border-primary/20 relative z-10"
                />
              </motion.div>
            </motion.div>

            {/* Right Column: About Text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-7 p-6 sm:p-8 md:p-10 bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-none order-2 lg:order-2"
            >
              <div className="space-y-4">
                {ABOUT_TEXT.map((line, index) => (
                  <p 
                    key={index} 
                    className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium"
                  >
                    {line}
                  </p>
                ))}
              </div>
              
              <div className="mt-8 sm:mt-10 flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-2xl sm:text-3xl font-bold text-primary">Pre-Final</span>
                  <span className="text-xs sm:text-sm text-slate-500 uppercase tracking-widest">Year CSE</span>
                </div>
                <div className="w-px h-12 bg-gray-200 dark:bg-gray-700 hidden sm:block" />
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-2xl sm:text-3xl font-bold text-primary">10+</span>
                  <span className="text-xs sm:text-sm text-slate-500 uppercase tracking-widest">Core Projects</span>
                </div>
                <div className="w-px h-12 bg-gray-200 dark:bg-gray-700 hidden sm:block" />
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-2xl sm:text-3xl font-bold text-primary">MERN</span>
                  <span className="text-xs sm:text-sm text-slate-500 uppercase tracking-widest">Specialization</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
