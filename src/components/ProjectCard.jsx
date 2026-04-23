import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';

const CardGlint = () => (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            whileHover={{ x: '100%', opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
        />
    </div>
);

const ProjectCard = ({ project, index }) => {
    const { title, description, tech, features, github, live, icon, category, image } = project;
    const cardRef = useRef(null);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
            }}
            viewport={{ once: true }}
            className="group relative flex flex-col h-full rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-darkNavy/80 shadow-sm hover:shadow-2xl transition-all duration-300"
        >
            {/* Project Image Header */}
            <div className="relative h-40 sm:h-48 md:h-52 w-full overflow-hidden bg-slate-900">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                
                <CardGlint />

                {/* Overlay with Category - Strictly Blue/Green */}
                <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 z-10">
                    <span className="inline-flex items-center text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-primary/30 bg-primary/10 text-primary backdrop-blur-md">
                        {category}
                    </span>
                </div>

                {/* Floating Action Buttons */}
                <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 flex gap-1.5 sm:gap-2 z-10 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 transition-colors min-h-[32px] sm:min-h-[36px] min-w-[32px] sm:min-w-[36px] flex items-center justify-center"
                    >
                        <Github size={14} sm:size={16} />
                    </a>
                    {live !== '#' && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 transition-colors min-h-[32px] sm:min-h-[36px] min-w-[32px] sm:min-w-[36px] flex items-center justify-center"
                        >
                            <ExternalLink size={14} sm:size={16} />
                        </a>
                    )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
            </div>

            {/* Content Section */}
            <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <span className="text-lg sm:text-xl drop-shadow-md">{icon}</span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors duration-300">
                        {title}
                    </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 mb-3 sm:mb-4">
                    {description}
                </p>

                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 flex-grow">
                    {features.slice(0, 2).map((feat, i) => (
                        <div key={i} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium">
                            <ChevronRight size={10} sm:size={12} className="mt-0.5 shrink-0 text-emerald-500" />
                            <span className="line-clamp-1">{feat}</span>
                        </div>
                    ))}
                </div>

                {/* Tech Tags - Clean and Minimal */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-6">
                    {tech.slice(0, 4).map((t) => (
                        <span
                            key={t}
                            className={`text-[8px] sm:text-[9px] md:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/[0.05]`}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Footer CTA - Strictly Blue/Green Theme */}
                <div className="mt-auto pt-3 sm:pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between group/btn"
                    >
                        <span className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold text-slate-600 dark:text-slate-300 group-hover/btn:text-primary transition-colors uppercase tracking-wider">
                            Explore Source
                        </span>
                        <motion.div
                            whileHover={{ scale: 1.1, x: 2 }}
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover/btn:bg-emerald-500 group-hover/btn:text-white transition-all duration-300"
                        >
                            <ArrowRightIcon size={10} sm:size={14} />
                        </motion.div>
                    </a>
                </div>
            </div>

            {/* Subtle Hover Glow Overlay - Blue/Green */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.div>
    );
};

const ArrowRightIcon = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
);

export default ProjectCard;
