"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
  suffix?: string;
  light?: boolean;
  delay?: number;
}

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

export default function AnimatedCounter({ value, label, suffix = "", light = false, delay = 0 }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
  const [started, setStarted] = useState(false);

  const isNumeric = !isNaN(Number(value.replace(/\s/g, "")));
  const numericValue = isNumeric ? Number(value.replace(/\s/g, "")) : 0;

  useEffect(() => {
    if (isInView && !started) {
      const t = setTimeout(() => setStarted(true), delay * 1000);
      return () => clearTimeout(t);
    }
  }, [isInView, started, delay]);

  const count = useCountUp(numericValue, 2000, started);

  const textColor = light ? "text-[#F5F1EA]" : "text-[#111111]";
  const labelColor = light ? "text-[#A7B89A]" : "text-[#8A8378]";
  const accentColor = "text-[#B8793E]";
  const lineColor = light ? "bg-[#B8793E]/40" : "bg-[#B8793E]/20";

  return (
    <div ref={ref} className="flex flex-col">
      <div className={`font-serif text-5xl lg:text-6xl font-bold leading-none ${textColor}`}>
        {isNumeric ? (
          <>
            {count.toLocaleString("fr-FR")}
            {suffix && <span className={`text-3xl ml-1 ${accentColor}`}>{suffix}</span>}
          </>
        ) : (
          <>
            {value}
            {suffix && <span className={`text-3xl ml-1 ${accentColor}`}>{suffix}</span>}
          </>
        )}
      </div>
      <div className={`h-px ${lineColor} mt-4 mb-3 w-12`} />
      <p className={`text-sm font-sans leading-snug ${labelColor}`}>{label}</p>
    </div>
  );
}
