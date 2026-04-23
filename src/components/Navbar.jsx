import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, Music, Volume2 } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // 🔥 Auto play (only once)
    const tryAutoPlay = () => {
      if (
        audioRef.current &&
        !isPlaying &&
        !userInteracted &&
        audioRef.current.readyState >= 2
      ) {
        audioRef.current.volume = 0.4;
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    };

    const handleCanPlay = () => tryAutoPlay();

    if (audioRef.current) {
      if (audioRef.current.readyState >= 2) {
        tryAutoPlay();
      } else {
        audioRef.current.addEventListener('canplay', handleCanPlay, {
          once: true,
        });
      }
    }

    // 🔥 fallback: start after user interaction
    const handleUserInteraction = () => {
      if (
        audioRef.current &&
        !isPlaying &&
        audioRef.current.readyState >= 2
      ) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    };

    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('keydown', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, {
      once: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []); // ✅ run only once

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Contact', to: 'contact' },
  ];

  // 🔥 Music toggle handler (shared)
  const toggleMusic = () => {
    if (!audioRef.current) return;

    setUserInteracted(true); // 🚀 prevents auto restart

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-darkNavy/80 backdrop-blur-md shadow-lg h-14 sm:h-16'
          : 'bg-transparent h-16 sm:h-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="home" smooth duration={500} className="cursor-pointer">
            <span className="text-lg sm:text-xl md:text-2xl font-bold font-display text-primary">
              VAISHNAVI S
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth
              duration={500}
              spy
              activeClass="text-primary"
              className="text-slate-600 dark:text-slate-300 hover:text-primary font-medium cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Dark Mode */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Music */}
          <button
            onClick={toggleMusic}
            className="p-2 rounded-full bg-gray-800 text-white hover:scale-110 transition shadow-lg"
          >
            {isPlaying ? <Volume2 size={20} /> : <Music size={20} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-gray-500 text-white"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMusic();
            }}
            className="p-2 rounded-full bg-gray-500 text-white shadow-lg"
          >
            {isPlaying ? <Volume2 size={20} /> : <Music size={20} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-darkNavy/95 transition ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-3 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Audio */}
      <audio ref={audioRef} loop>
        <source src="/music/background.wav" type="audio/wav" />
      </audio>
    </nav>
  );
};

export default Navbar;