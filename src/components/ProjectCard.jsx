import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Globe } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all flex flex-col h-full"
    >
      <div className="relative overflow-hidden aspect-video bg-gray-100 dark:bg-gray-700">
        {/* Placeholder for project image */}
        <div className="absolute inset-0 flex items-center justify-center text-primary/20">
          <Globe size={48} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-darkNavy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <div className="flex gap-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors"
            >
              <Github size={20} />
            </a>
            {project.live !== "#" && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
          <span className="font-semibold text-primary">Problem:</span> {project.problem}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span 
              key={t}
              className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 bg-primary/5 text-primary border border-primary/10 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        <ul className="mt-auto space-y-1">
          {project.features.map((feature, i) => (
            <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
