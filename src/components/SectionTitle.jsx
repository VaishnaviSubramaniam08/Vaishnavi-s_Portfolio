import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
          {title}
        </h2>
        <div className="h-1.5 w-20 bg-primary mx-auto rounded-full mb-4" />
        {subtitle && (
          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default SectionTitle;
