"use client";
import React from "react";
import Counter from "./Counter";
import { motion } from "framer-motion";

const stats = [
  { label: "EXPERIENCE FROM", value: 5, sub: "YEARS" },
  { label: "WORKING MORE THAN", value: 100, sub: "PROJECTS" },
  { label: "SERVICE PROVIDED", value: 1.2, sub: "MILLION" },
];

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-b from-[#12151F] to-[#10131d] py-24 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-2"
          >
            {/* Label in your Brand Blue */}
            <h3 className="text-gray-500 font-light tracking-widest text-sm md:text-base">
              {stat.label}
            </h3>

            {/* Counter Number */}
            <div className="text-white text-6xl md:text-5xl font-black font-poppins mt-3 mb-5">
              <Counter value={stat.value} />
            </div>

            {/* Sub-text */}
            <p className="text-gray-500 font-light tracking-[0.2em] text-xs md:text-sm uppercase">
              {stat.sub}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
