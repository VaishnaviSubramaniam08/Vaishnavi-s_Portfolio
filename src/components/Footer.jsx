import React from "react";
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-darkNavy transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">

          {/* LEFT SIDE */}
          <div className="text-center md:text-left">
            <span className="text-xl sm:text-2xl font-bold font-display text-primary">
              Vaishnavi S
            </span>

            <p className="mt-1 sm:mt-2 text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
              Pre-final Year CSE Student | Full Stack Developer
            </p>

            <p className="text-slate-400 dark:text-slate-500 text-[10px] sm:text-xs mt-1">
              Passionate about building scalable web applications and solving real-world problems.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-center md:items-end gap-4">

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 sm:gap-4">

              <a 
                href="https://github.com/VaishnaviSubramaniam08" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <Github size={16} sm:size={18} />
              </a>

              <a 
                href="https://linkedin.com/in/vaishnavisubramaniam231" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <Linkedin size={16} sm:size={18} />
              </a>

             <a 
  href="https://leetcode.com/u/vaishnavisubramaniam/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary transition flex items-center justify-center min-h-[44px] min-w-[44px]"
>
  <img 
    src="https://cdn.simpleicons.org/leetcode/ffffff" 
    alt="LeetCode"
    className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]"
  />
</a>

              <a 
                href="mailto:vaishnavisubramaniam247@gmail.com"
                className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <Mail size={16} sm:size={18} />
              </a>

            </div>

            {/* COPYRIGHT */}
            <p className="text-[10px] sm:text-xs text-slate-400 dark:text-slate-500">
              © {new Date().getFullYear()} Vaishnavi S. All rights reserved.
            </p>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;