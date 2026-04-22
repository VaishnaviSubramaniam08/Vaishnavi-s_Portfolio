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

const Achievements = () => {
  const scrollRef = useRef(null);
  const isPaused = useRef(false);

  const achievements = [
    {
      title: "MIT (Top 25)",
      desc: "Privacy-Preserving Visitor Management System",
      img: mit,
    },
    {
      title: "PickMyPlan",
      desc: "1st Prize – Freelancing Club Hackathon",
      img: pick,
    },
    {
      title: "Hackvotrix’25",
      desc: "1st Place – Automated Coconut Sorting",
      img: coco,
    },
    {
      title: "SDC Fest",
      desc: "1st Place – Paper Presentation",
      img: sdc,
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
      title: "Freelancing Club Hackathon",
      desc: "2nd Prize – Ticket Booking System",
      img: "https://via.placeholder.com/800x1000?text=Freelancing+2nd",
    },
    {
      title: "Techno Fest LMS",
      desc: "Finalist – Strong Design & Presentation",
      img: tech,
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
      <h2 className="text-4xl font-bold text-center text-primary mb-12">
        Achievements
      </h2>

      <div className="max-w-7xl mx-auto px-8 relative">

        {/* LEFT BUTTON */}
        <button
          onClick={scrollLeft}
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow hover:scale-110 transition"
        >
          <ChevronLeft />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollRight}
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow hover:scale-110 transition"
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
          <div className="flex gap-8 w-max">
            {loopData.map((item, index) => (
              <div
                key={index}
                className="w-[460px] h-[420px] flex-shrink-0 relative rounded-2xl overflow-hidden shadow-lg group hover:scale-105 transition-all duration-300"
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
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-200 mt-2">
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