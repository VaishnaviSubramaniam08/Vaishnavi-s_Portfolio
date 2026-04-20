import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, Instagram } from 'lucide-react';

const FloatingSocialSidebar = () => {
  const socials = [
    { name: 'WhatsApp', icon: <MessageCircle size={22} />, href: 'https://wa.me/919626085336', color: 'text-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)]' },
    { name: 'LinkedIn', icon: <Linkedin size={22} />, href: 'https://linkedin.com/in/vaishnavisubramaniam231', color: 'text-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]' },
    { name: 'GitHub', icon: <Github size={22} />, href: 'https://github.com/VaishnaviSubramaniam08', color: 'text-slate-900 dark:text-white shadow-[0_0_20px_rgba(255,255,255,0.8)]' },
    { name: 'Email', icon: <Mail size={22} />, href: 'mailto:vaishnavisubramaniam247@gmail.com', color: 'text-red-400 shadow-[0_0_20px_rgba(248,113,113,0.8)]' },
    { name: 'Instagram', icon: <Instagram size={22} />, href: 'https://instagram.com/vaishnavisubramaniam', color: 'text-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.8)]' }
  ];

  return (
   <motion.div 
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
  className="fixed right-6 top-0 h-screen z-[100] hidden lg:flex items-center"
>
  <motion.div 
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="flex flex-col gap-6 p-4 rounded-full border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-[#0B1120]/60 backdrop-blur-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(34,197,94,0.15)]"
  >
    {socials.map((social) => (
      <motion.a
        key={social.name}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex justify-center items-center w-12 h-12 rounded-full text-slate-600 dark:text-slate-400 transition-colors duration-300 hover:bg-slate-200/50 dark:hover:bg-white/5"
        whileHover={{ scale: 1.25, y: -2 }}
        whileTap={{ scale: 0.95 }}
        title={social.name}
      >
        <span className={`relative z-10 transition-colors duration-300 group-hover:${social.color.split(' ')[0]}`}>
          {social.icon}
        </span>
      </motion.a>
    ))}
  </motion.div>
</motion.div>
  );
};

export default FloatingSocialSidebar;
