import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import FloatingSocialSidebar from './components/FloatingSocialSidebar';
import AnimatedBackground from './components/AnimatedBackground';
import { ChevronUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';
import Achievements from './components/Achievements';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <>
     <CustomCursor />
      <FloatingSocialSidebar />
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      <div className={`min-h-screen bg-slate-50 dark:bg-darkNavy text-slate-900 dark:text-white transition-colors duration-300 ${isLoading ? 'hidden' : 'block'}`}>
        <Navbar isDark={isDark} setIsDark={setIsDark} />

        <main className="relative overflow-hidden">


          {/* Enhanced Background Elements for Light Mode / Extra Glow */}
          <div className="absolute inset-0 pointer-events-none -z-10 bg-grid opacity-20" />

          <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-float lg:block hidden" />
          <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-float lg:block hidden" style={{ animationDelay: '2s' }} />

          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements /> 
          <CodingProfiles />
          <Contact />
        </main>

        <Footer />

        {/* Scroll to Top Button */}
        <button
          onClick={() => scroll.scrollToTop()}
          className={`fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg transition-all duration-300 z-50 hover:scale-110 active:scale-90 ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
            }`}
        >
          <ChevronUp size={24} />
        </button>

        {/* Animated background blobs (Global Logic) */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden hide-on-light">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] dark:block hidden" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] dark:block hidden" />
        </div>

        {/* Animated Canvas Background - particles, code rain & hexagons */}
        <div className="dark:block hidden">
          <AnimatedBackground />
        </div>
      </div>
    </>
  );
}

export default App;