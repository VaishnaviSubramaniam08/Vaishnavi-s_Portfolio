import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

const CATEGORIES = ['All', 'Full Stack', 'AI / ML', 'Frontend', 'Python', 'DevOps'];

const Projects = () => {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() =>
    active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active),
    [active]
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-darkNavy transition-colors duration-300">
      
      {/* Decorative Accents - Static for no-animation cursor experience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Unified Stats */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
                <SectionTitle
                    title="Featured Projects"
                    subtitle="A showcasing of technical architectures and user-centric solutions built across the full stack."
                />
            </div>
            
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 p-1.5 px-6 py-3 bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm"
            >
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-black text-primary">{PROJECTS.length}</span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold">Solutions</span>
                </div>
                <div className="w-px h-8 bg-slate-200 dark:bg-white/10" />
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-black text-emerald-500">
                        {PROJECTS.filter(p => p.category === 'Full Stack').length}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold">Full Stacks</span>
                </div>
            </motion.div>
        </div>

        {/* Categories - Stricly Blue/Green Theme */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-6 py-2 rounded-xl text-xs font-bold transition-all duration-300 border
                  ${isActive
                    ? 'text-white border-transparent shadow-lg shadow-primary/10 scale-105'
                    : 'text-slate-500 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-primary/30 hover:text-primary bg-white dark:bg-[#0B1120]'
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-xl bg-primary z-0 shadow-lg shadow-primary/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Project Grid - Staggered viewport entrance only */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer Link - Clean & Professional */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-20 text-center"
        >
          <a
            href="https://github.com/VaishnaviSubramaniam08"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:hover:shadow-white/20"
          >
            <GithubIcon />
            Repository Archive
            <ArrowRightIcon />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const GithubIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

export default Projects;
