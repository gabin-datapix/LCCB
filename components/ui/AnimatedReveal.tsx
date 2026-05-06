"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  once?: boolean;
}

export default function AnimatedReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: AnimatedRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px 0px" });

  const initialY = direction === "up" ? 40 : 0;
  const initialX = direction === "left" ? -40 : direction === "right" ? 40 : 0;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: initialY, x: initialX }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: initialY, x: initialX }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
