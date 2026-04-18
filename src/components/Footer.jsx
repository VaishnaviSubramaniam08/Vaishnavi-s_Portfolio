import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-darkNavy transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold font-display text-primary">Vaishh</span>
            <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm">
              Pre-final year CSE student & Full Stack Developer.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1.5">
              Built with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              © {new Date().getFullYear()} Vaishnavi S. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
