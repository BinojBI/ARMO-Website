"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SERVICES_DATA = [
  {
    title: "Game Dev",
    description:
      "High-performance gameplay systems, multiplayer mechanics, and cross-platform game development using Unity, Unreal Engine, and Godot.",
    image: "/images/image1.jpg",
  },
  {
    title: "VR/AR",
    description:
      "Location-based AR applications, VR simulations, and immersive experiences using Unity AR Foundation and geospatial anchors.",
    image: "/images/image2.jpg",
  },
  {
    title: "3D Web",
    description:
      "Interactive 3D web experiences using Three.js, React Three Fiber, and Next.js for e-commerce and virtual showrooms.",
    image: "/images/image3.gif",
  },
  {
    title: "Optimization",
    description:
      "Code refactoring, profiling, and optimization for mobile and desktop platforms to ensure smooth user experiences.",
    image: "/images/image4.jpg",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES_DATA)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group flex flex-col space-y-4"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/5 bg-neutral-900 transition-all duration-500 group-hover:border-brandBlue/40 group-hover:shadow-[0_0_40px_rgba(147,220,255,0.15)]">
        {/* Placeholder for images - Ensure these exist in /public/images/ */}
        <div className="absolute inset-0 bg-neutral-800 animate-pulse group-hover:hidden" />
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
      </div>

      <div className="px-2">
        <h3 className="text-2xl font-bold text-white group-hover:text-brandBlue transition-colors font-poppins tracking-tight">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-gray-400 font-poppins leading-relaxed line-clamp-3">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    // Changed to bg-transparent to ensure we don't hide the absolute image
    <section
      id="services-section"
      className="relative py-32 px-8 md:px-20 min-h-screen flex items-center bg-transparent"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <Image
          src="/images/image5.png"
          alt="Section Background"
          fill
          className="object-cover opacity-20" // Slightly lower opacity helps content stand out
          priority
        />
        <div className="absolute inset-0 bg-[#050505]/40" />
      </div>

      {/* Brand Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brandBlue/10 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header - Fixed Alignment */}
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl font-black text-white uppercase tracking-[0.2em] font-poppins"
          >
            Seamless <span className="text-brandBlue">Solutions</span>
          </motion.p>
          <div className="h-1 w-20 bg-brandBlue mx-auto mt-4" />{" "}
          {/* Decorative line */}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
