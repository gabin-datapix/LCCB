"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  index?: number;
  color?: string;
  image?: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  index = 0,
  color = "#5A3921",
  image,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={href} className="group block h-full bg-white border border-[#D8C5A5]/60 hover:border-[#B8793E]/50 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden">
        {/* Image */}
        <div className="relative overflow-hidden h-64 lg:h-72">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
            />
          ) : (
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${color}40 0%, ${color} 100%)` }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/50 via-transparent to-transparent" />
          {/* Index number */}
          <div className="absolute top-5 right-5 font-serif text-4xl font-bold text-white/20 leading-none select-none">
            {String(index + 1).padStart(2, "0")}
          </div>
          {/* Arrow chip */}
          <div className="absolute bottom-5 right-5 w-9 h-9 bg-[#B8793E] flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight size={16} className="text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pb-7">
          <h3 className="font-serif text-xl text-[#111111] mb-3 group-hover:text-[#1F3A2E] transition-colors duration-300 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-[#8A8378] leading-relaxed font-sans line-clamp-3 mb-5">
            {description}
          </p>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-[#B8793E] font-sans">
            <span>Découvrir</span>
            <span className="w-6 h-px bg-[#B8793E] transition-all duration-300 group-hover:w-10" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
