"use client";
import Navbar3D from "./components/navbar";
import HeroBackground3D from "./components/HeroBackground3D";
import StatsSection from "./components/StatsSection";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(currentScroll / totalHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="relative min-h-screen bg-[#181C2D] text-white overflow-hidden">
      {/* 3D Navigation Overlay - ensure it has a higher z-index */}
      <Navbar3D />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-start px-8 lg:px-20">
        {/* Full-page 3D Background */}
        <div className="absolute inset-0 z-0">
          <HeroBackground3D scrollProgress={scrollProgress} />
        </div>

        {/* Overlay Content: "WE MAKE GAMES" */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 text-left" // Ensure text is above 3D background
        >
          <h1 className="text-6xl md:text-8xl lg:text-[5rem] font-black tracking-tighter uppercase italic leading-none">
            ARMO
            <span className="text-[#93DCFF]"> STUDIO</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-lg font-mono">
            Crafting immersive experiences and pushing the boundaries of
            interactive entertainment.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-[#387498] text-white text-lg font-bold uppercase rounded-full shadow-lg hover:bg-[#93DCFF] transition-colors"
          >
            Explore Our Work
          </motion.button>
        </motion.div>
      </section>
      <StatsSection />
      {/* Placeholder for content below the hero */}
      <div className="relative z-10 h-[150vh] bg-neutral-900 flex items-center justify-center text-5xl font-bold">
        Scroll Down for More Content!
      </div>
    </main>
  );
}
