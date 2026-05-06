"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  className = "",
}: SectionTitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  const textColor = light ? "text-[#F5F1EA]" : "text-[#111111]";
  const subColor = light ? "text-[#A7B89A]" : "text-[#8A8378]";
  const eyebrowColor = light ? "text-[#B8793E]" : "text-[#B8793E]";
  const lineColor = light ? "bg-[#B8793E]" : "bg-[#B8793E]";
  const textAlign = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div ref={ref} className={`flex flex-col ${textAlign} ${className}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`text-xs tracking-[0.25em] uppercase font-sans mb-4 flex items-center gap-3 ${eyebrowColor}`}
        >
          <span className={`w-8 h-px ${lineColor}`} />
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`font-serif text-display-md leading-tight ${textColor}`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`mt-5 text-base leading-relaxed max-w-xl font-sans ${subColor}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
