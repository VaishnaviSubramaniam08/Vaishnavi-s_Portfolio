import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import mit from "../assets/mit.jpeg";
import pick from "../assets/pick.png";
import coco from "../assets/hackvotrix.png";
import sdc from "../assets/sdc.png";
import co from "../assets/co.png";
import mca from "../assets/mca.png";
import idea from "../assets/idea.png";
import tech from "../assets/texh.png";
import n8n from "../assets/n8n.png";
import ear from "../assets/ear.png";
const Achievements = () => {
  const scrollRef = useRef(null);
  const isPaused = useRef(false);

  const achievements = [
    {
      title: "EAREYES 2K26",
      desc:  "2nd Prize- AI- Edu connect",
      img: ear,
    },
    {
      title: "MIT (Top 25)",
      desc: "Privacy-Preserving Visitor Management System",
      img: mit,
    },
     
    {
      title: "Hacksagon",
      desc: "1st Prize – AI Travel Planner",
      img: pick,
    },
    {
      title: "Hackvotrix’25",
      desc: "1st Place – Automated Coconut Sorting",
      img: coco,
    },
   
    {
      title: "Freelancing Club Hackathon",
      desc: "2nd Prize – Ticket Booking System",
      img:n8n,
    },
    {
      title: "Ideathon",
      desc: "3rd Place – LMS Idea",
      img: idea,
    },
    {
      title: "Ruby Year",
      desc: "2nd Place – Smart CO Detection System",
      img: co,
    },
    {
      title: "Vectors MCA Hackathon",
      desc: "2nd Prize – Green Lifestyle Tracker",
      img: mca,
    },
    
    {
      title: "Techno Fest LMS",
      desc: "Finalist – Strong Design & Presentation",
      img: tech,
    },
     {
      title: "SDC Fest",
      desc: "1st Place – Paper Presentation",
      img: sdc,
    },
  ];

  // Duplicate for infinite scroll
  const loopData = [...achievements, ...achievements];

  // Auto scroll
  useEffect(() => {
    let animationFrameId;

    const scroll = () => {
      if (!scrollRef.current) return;

      if (!isPaused.current) {
        scrollRef.current.scrollLeft += 0.5;
      }

      if (
        scrollRef.current.scrollLeft >=
        scrollRef.current.scrollWidth / 2
      ) {
        scrollRef.current.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Manual controls
  const scrollLeft = () => {
    isPaused.current = true;
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });

    setTimeout(() => (isPaused.current = false), 1200);
  };

  const scrollRight = () => {
    isPaused.current = true;
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });

    setTimeout(() => (isPaused.current = false), 1200);
  };

  return (
    // ✅ IMPORTANT FIX HERE
    <section
      id="achievements"
      className="py-20 bg-gray-50 dark:bg-darkNavy scroll-mt-24"
    >
     <div className="text-center mb-12">
  <h2 className="text-4xl font-bold text-white">
    Achievements
  </h2>

  <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded"></div>
</div>

      <div className="max-w-7xl mx-auto px-8 relative">

        {/* LEFT BUTTON */}
        <button
          onClick={scrollLeft}
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
          className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-full shadow hover:scale-110 transition"
        >
          <ChevronLeft />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollRight}
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
          className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-full shadow hover:scale-110 transition"
        >
          <ChevronRight />
        </button>

        {/* CAROUSEL */}
        <div
          ref={scrollRef}
          className="overflow-hidden"
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
        >
          <div className="flex gap-4 sm:gap-6 md:gap-8 w-max">
            {loopData.map((item, index) => (
              <div
                key={index}
                className="w-[280px] sm:w-[320px] md:w-[380px] h-[240px] sm:h-[280px] md:h-[340px] flex-shrink-0 relative rounded-2xl overflow-hidden shadow-lg group hover:scale-105 transition-all duration-300"
              >
                {/* IMAGE */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* TEXT */}
                <div className="absolute bottom-0 p-3 sm:p-4 md:p-5 text-white">
                  <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-200 mt-1 sm:mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;