"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  typeLabel: string;
  location: string;
  description: string;
  tags?: string[];
  image?: string;
  index?: number;
  onClick?: () => void;
}

export default function ProjectCard({
  title,
  typeLabel,
  location,
  description,
  image,
  index = 0,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group cursor-pointer bg-white border border-[#D8C5A5]/60 hover:border-[#B8793E]/40 hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition-all duration-400 overflow-hidden"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#D8C5A5] to-[#8A8378]" />
        )}
        <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/15 transition-colors duration-500" />
        {/* Arrow */}
        <div className="absolute top-4 right-4 w-9 h-9 bg-[#F5F1EA] flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight size={15} className="text-[#111111]" />
        </div>
        {/* Type badge */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-[#111111]/60 to-transparent">
          <span className="text-[9px] tracking-[0.18em] uppercase text-[#F5F1EA]/90 font-sans">
            {typeLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-lg text-[#111111] mb-1.5 group-hover:text-[#1F3A2E] transition-colors duration-300 leading-snug">
          {title}
        </h3>
        <div className="flex items-center gap-1.5 text-[11px] text-[#8A8378] mb-3 font-sans">
          <MapPin size={10} className="text-[#B8793E]" />
          <span>{location}</span>
        </div>
        <p className="text-[13px] text-[#8A8378] leading-relaxed font-sans line-clamp-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
