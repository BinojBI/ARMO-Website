"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

interface CounterProps {
  value: number;
  direction?: "up" | "down";
}

export default function Counter({ value, direction = "up" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        // Formats to 1 decimal place if it's a float, otherwise an integer
        ref.current.textContent = Intl.NumberFormat("en-US", {
          minimumFractionDigits: value % 1 !== 0 ? 1 : 0,
          maximumFractionDigits: value % 1 !== 0 ? 1 : 0,
        }).format(Number(latest.toFixed(2)));
      }
    });
  }, [springValue, value]);

  return <span ref={ref} />;
}
