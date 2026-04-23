import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      "service_k3w7ldd",     // ✅ your service ID
      "template_xpz0zhb",    // ✅ your template ID
      form.current,
      "g_cPwLJlT7Sc2QfhI"      // ❗ replace this
    )
    .then(() => {
      alert("✅ Message sent successfully!");
      form.current.reset();
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      alert("❌ Failed to send message");
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Feel free to reach out for collaborations, opportunities, or just a friendly hello!"
        />

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 mt-8 sm:mt-12 items-start">

          {/* Contact Info (unchanged) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
              Contact Information
            </h3>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>

            <a href="mailto:vaishnavisubramaniam247@gmail.com" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white dark:bg-slate-800 rounded-2xl border shadow-sm">
              <Mail size={20} sm:size={24} />
              <span className="font-semibold text-sm sm:text-base break-words">vaishnavisubramaniam247@gmail.com</span>
            </a>

            <div className="flex gap-3 sm:gap-4">
              <a href="https://linkedin.com/in/vaishnavisubramaniam231" target="_blank" rel="noreferrer" className="p-2.5 sm:p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                <Linkedin size={20} sm:size={24} />
              </a>
              <a href="https://github.com/VaishnaviSubramaniam08" target="_blank" rel="noreferrer" className="p-2.5 sm:p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                <Github size={20} sm:size={24} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-6xl mx-auto p-6 sm:p-8 bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl"
          >
            {/* ✅ IMPORTANT: ref + sendEmail */}
            <form ref={form} onSubmit={sendEmail} className="space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label>Name</label>
                  <input 
                    type="text"
                    name="user_name"   // ✅ REQUIRED
                    placeholder="John Doe"
                    required
                    className="w-full px-3 sm:px-4 py-3 bg-gray-50 dark:bg-slate-900 rounded-xl text-sm sm:text-base min-h-[44px]"
                  />
                </div>

                <div className="space-y-2">
                  <label>Email</label>
                  <input 
                    type="email"
                    name="user_email"  // ✅ REQUIRED
                    placeholder="john@example.com"
                    required
                    className="w-full px-3 sm:px-4 py-3 bg-gray-50 dark:bg-slate-900 rounded-xl text-sm sm:text-base min-h-[44px]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label>Subject</label>
                <input 
                  type="text"
                  name="subject"      // ✅ REQUIRED
                  placeholder="Inquiry about project"
                  required
                  className="w-full px-3 sm:px-4 py-3 bg-gray-50 dark:bg-slate-900 rounded-xl text-sm sm:text-base min-h-[44px]"
                />
              </div>

              <div className="space-y-2">
                <label>Message</label>
                <textarea 
                  name="message"     // ✅ REQUIRED
                  rows="4"
                  placeholder="How can I help you?"
                  required
                  className="w-full px-3 sm:px-4 py-3 bg-gray-50 dark:bg-slate-900 rounded-xl text-sm sm:text-base resize-none min-h-[100px]"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full py-3 sm:py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 min-h-[48px] sm:min-h-[52px] text-sm sm:text-base"
              >
                {loading ? "Sending..." : "Send Message"}
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