import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { GitHubCalendar } from 'react-github-calendar';
import { Github, Code } from 'lucide-react';

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="py-24 relative bg-slate-50 dark:bg-[#0B1120] transition-colors duration-300 overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <SectionTitle 
          title="Coding Profiles" 
          subtitle="Real-time tracking of my problem-solving consistency, open-source activity, and technical momentum."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          {/* LeetCode Live Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col p-8 bg-white/50 dark:bg-slate-800/30 backdrop-blur-2xl rounded-3xl border border-gray-200 dark:border-slate-700/50 shadow-lg dark:shadow-[0_0_30px_rgba(249,115,22,0.05)] hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3.5 bg-orange-500/10 dark:bg-orange-950/30 rounded-2xl border border-orange-500/20 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
                <Code size={26} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">LeetCode Activity</h3>
                <a href="https://leetcode.com/u/vaishnavisubramaniam/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-orange-500/80 hover:text-orange-500 transition-colors">@vaishnavisubramaniam</a>
              </div>
            </div>
            
            <div className="w-full flex-grow flex items-center justify-center -mx-2 overflow-hidden rounded-xl border border-transparent dark:border-white/5 bg-transparent dark:bg-black/20 p-2">
              <img 
                src="https://leetcard.jacoblin.cool/vaishnavisubramaniam?theme=dark&font=Noto%20Sans&ext=heatmap" 
                alt="LeetCode Heatmap & Stats" 
                className="w-full h-auto object-contain drop-shadow-md"
                // On light mode we apply a filter so the dark-themed image fits slightly better, though it's naturally dark.
                style={{ filter: 'var(--tw-drop-shadow)' }}
              />
            </div>
          </motion.div>

          {/* GitHub Live Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col p-8 bg-white/50 dark:bg-slate-800/30 backdrop-blur-2xl rounded-3xl border border-gray-200 dark:border-slate-700/50 shadow-lg dark:shadow-[0_0_30px_rgba(34,197,94,0.05)] hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3.5 bg-slate-200 dark:bg-slate-950/40 rounded-2xl border border-slate-300 dark:border-white/10 text-slate-900 dark:text-slate-100 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <Github size={26} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">GitHub Contributions</h3>
                <a href="https://github.com/VaishnaviSubramaniam08" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">@VaishnaviSubramaniam08</a>
              </div>
            </div>

            {/* GitHub Primary Stats API */}
            <div className="w-full flex justify-center mb-6">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=VaishnaviSubramaniam08&show_icons=true&theme=transparent&hide_border=true&title_color=22c55e&text_color=94a3b8&icon_color=22c55e&text_bold=false" 
                alt="GitHub Profile Stats" 
                className="w-full object-contain pointer-events-none opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* React Github Calendar Custom Component */}
            <div className="w-full mt-auto p-4 md:p-6 overflow-hidden rounded-2xl border border-gray-200 dark:border-white/5 bg-white/60 dark:bg-black/30 shadow-inner">
              <div className="flex justify-center scale-[0.8] md:scale-100 origin-center text-slate-800 dark:text-slate-200">
                <GitHubCalendar 
                  username="VaishnaviSubramaniam08" 
                  colorScheme="dark"
                  hideTotalCount={true}
                  hideMonthLabels={false}
                  hideColorLegend={true}
                  theme={{
                    light: ['#f1f5f9', '#bbf7d0', '#86efac', '#4ade80', '#22c55e'],
                    dark: ['#1e293b', '#064e3b', '#065f46', '#047857', '#059669']
                  }}
                />
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
