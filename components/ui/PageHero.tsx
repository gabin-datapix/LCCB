"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: BreadcrumbItem[];
  dark?: boolean;
  size?: "lg" | "md" | "sm";
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  dark = true,
  size = "md",
}: PageHeroProps) {
  const bg = dark ? "bg-[#1F3A2E]" : "bg-[#F5F1EA]";
  const textColor = dark ? "text-[#F5F1EA]" : "text-[#111111]";
  const subColor = dark ? "text-[#A7B89A]" : "text-[#8A8378]";
  const eyebrowColor = "text-[#B8793E]";
  const crumbColor = dark ? "text-[#F5F1EA]/40" : "text-[#8A8378]";

  const paddingMap = { lg: "pt-44 pb-28", md: "pt-40 pb-20", sm: "pt-36 pb-16" };

  return (
    <section className={`${bg} ${paddingMap[size]} px-6 relative overflow-hidden`}>
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`flex items-center gap-2 mb-8 text-xs font-sans ${crumbColor}`}
            aria-label="Fil d'Ariane"
          >
            <Link href="/" className="hover:text-[#B8793E] transition-colors">Accueil</Link>
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight size={10} />
                {item.href ? (
                  <Link href={item.href} className="hover:text-[#B8793E] transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className={dark ? "text-[#F5F1EA]/70" : "text-[#111111]"}>{item.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`flex items-center gap-3 mb-5 ${eyebrowColor} text-xs tracking-[0.25em] uppercase font-sans`}
          >
            <span className="w-8 h-px bg-[#B8793E]" />
            {eyebrow}
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`font-serif text-display-lg leading-tight max-w-4xl ${textColor}`}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`mt-6 text-base lg:text-lg leading-relaxed font-sans max-w-2xl ${subColor}`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
