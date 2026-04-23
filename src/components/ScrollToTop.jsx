import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    // run once initially
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[9999] p-3 rounded-full bg-primary text-white shadow-lg transition-all duration-300 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
}

export default ScrollToTop;