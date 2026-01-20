"use client";
import Image from "next/image";
import localFont from "next/font/local";
import Navbar3D from "./components/navbar";
import HeroBackground3D from "./components/HeroBackground3D";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BonfireVFX from "./components/BonfireVFX";

const LuckiestGuyRegular = localFont({
  src: "../public/fonts/LuckiestGuy-Regular.ttf",
  variable: "--font-custom",
});

const BubblegumSansRegular = localFont({
  src: "../public/fonts/BubblegumSans-Regular.ttf",
  variable: "--font-custom",
});

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
      <section className="relative w-full h-auto flex items-center justify-center px-8 lg:px-20 py-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* <HeroBackground3D scrollProgress={scrollProgress} /> */}
          <div className="absolute inset-0 z-20">
            <BonfireVFX />
          </div>
        </div>

        {/* Overlay Content: "WE MAKE GAMES" */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 text-center pt-20" // Ensure text is above 3D background
        >
          <h1
            className={`${LuckiestGuyRegular.className} text-6xl md:text-8xl lg:text-[5rem] font-black uppercase leading-none `}
          >
            ARMO
            <span className="text-[#93DCFF]"> STUDIO</span>
          </h1>
          <p
            className={`${BubblegumSansRegular.className} mt-4 text-lg md:text-xl text-gray-400 max-w-lg font-mono`}
          >
            Develop your next generation immersive experiences and pushing the
            boundaries of interactive entertainment.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const servicesSection =
                document.getElementById("services-section");
              servicesSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`${BubblegumSansRegular.className} mt-50 px-10 py-4 bg-gradient-to-t from-[#13364C] to-[#387498] text-white text-lg font-bold rounded-full shadow-[0_0_10px_rgba(147,220,255,0.3)] hover:shadow-[0_0_30px_rgba(147,220,255,0.5)] transition-all duration-300`}
          >
            Explore Our Work
          </motion.button>
        </motion.div>
      </section>
      <StatsSection />
      <ServicesSection />

      {/* About Us Section */}
      <section className="relative py-24 px-8 md:px-20 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Right Side: Typography */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-[0.2em] font-poppins">
                ABOUT ARMO
              </h2>
              {/* Red underline from template changed to brandBlue */}
              <div className="h-1 w-12 bg-brandBlue mb-12" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-md text-gray-400 font-poppins font-light leading-relaxed">
                One of the leading Game Development studios in the USA, Europe,
                UK & India. G Studio offers services for Games Art, Augmented
                Reality, Virtual Reality, and more.
              </p>

              <p className="text-md text-gray-400 font-poppins font-light leading-relaxed">
                If you need more informations about our internal technologies,
                don't hesitate to contact us.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full md:w-1/2"
          >
            {/* Decorative Dot Pattern (CSS-based) */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 z-0 opacity-20 group">
              <div className="grid grid-cols-6 gap-2">
                {[...Array(36)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-brandBlue"
                  />
                ))}
              </div>
            </div>

            {/* Main Image Container */}
            <div className="relative z-10 aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/image6.png" // Replace with your image path
                alt="Studio Concept Art"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
