"use client";
import { motion } from "framer-motion";
import React from "react";

const Spark = ({ index }: { index: number }) => {
  const duration = 1.5 + Math.random() * 2;
  const delay = Math.random() * 3;

  return (
    <motion.div
      initial={{ y: 0, x: 0, opacity: 0, scaleY: 1 }}
      animate={{
        y: [-20, -400], // Long vertical rise
        x: [0, (Math.random() - 0.5) * 100], // Slight wind drift
        opacity: [0, 1, 0.8, 0],
        scaleY: [1, 2.5, 1], // Stretches as it rises like the video
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeOut",
      }}
      className="absolute bottom-0 w-[2px] h-4 bg-orange-400"
      style={{
        left: `${Math.random() * 100}%`,
        filter: "blur(1px) brightness(2)",
        boxShadow: "0 0 8px #f59e0b",
      }}
    />
  );
};

export default function BonfireVFX() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Bottom Fire Glow - Matches the orange base in your video */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-64 bg-gradient-conic from-orange-600/40 via-transparent to-transparent blur-[100px] opacity-60" />

      {/* Sparks Layer */}
      <div className="relative w-full h-full">
        {[...Array(40)].map((_, i) => (
          <Spark key={i} index={i} />
        ))}
      </div>

      {/* Rising Smoke/Heat Haze (Subtle) */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-t from-orange-900/10 via-transparent to-transparent"
      />
    </div>
  );
}
