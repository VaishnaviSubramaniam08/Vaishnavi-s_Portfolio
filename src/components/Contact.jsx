import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Feel free to reach out for collaborations, opportunities, or just a friendly hello!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-4">
              <a 
                href="mailto:vaishnavisubramaniam247@gmail.com" 
                className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:border-primary transition-all group"
              >
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Email Me</p>
                  <p className="text-slate-900 dark:text-white font-semibold">vaishnavisubramaniam247@gmail.com</p>
                </div>
              </a>

              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/vaishnavi-s" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:border-blue-600 transition-all group"
                >
                  <div className="p-3 bg-blue-600/10 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">LinkedIn</p>
                    <p className="text-slate-900 dark:text-white font-semibold">Vaishnavi S</p>
                  </div>
                </a>
                <a 
                  href="https://github.com/Vaishnavi-S" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:border-slate-900 transition-all group"
                >
                  <div className="p-3 bg-slate-900/10 dark:bg-slate-100/10 rounded-xl text-slate-900 dark:text-slate-100 group-hover:bg-slate-900 dark:group-hover:bg-slate-100 group-hover:text-white dark:group-hover:text-slate-900 transition-all">
                    <Github size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">GitHub</p>
                    <p className="text-slate-900 dark:text-white font-semibold">Vaishnavi-S</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl"
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-transparent focus:border-primary rounded-xl focus:outline-none transition-all dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-transparent focus:border-primary rounded-xl focus:outline-none transition-all dark:text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Subject</label>
                <input 
                  type="text" 
                  placeholder="Inquiry about project"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-transparent focus:border-primary rounded-xl focus:outline-none transition-all dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-transparent focus:border-primary rounded-xl focus:outline-none transition-all dark:text-white resize-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
