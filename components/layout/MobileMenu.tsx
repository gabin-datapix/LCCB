"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { NAVIGATION, COMPANY, FOOTER_SERVICES } from "@/lib/content";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[60] transition-all duration-500 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#111111]/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#1F3A2E] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header panel */}
        <div className="flex items-center justify-between px-8 py-7 border-b border-[#F5F1EA]/10">
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl text-[#F5F1EA] font-bold">LCCB</span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#A7B89A]">
              Charpente & Concept Bois
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#F5F1EA]/60 hover:text-[#F5F1EA] transition-colors p-1"
            aria-label="Fermer le menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-8 py-10 flex flex-col gap-1" aria-label="Navigation mobile">
          {NAVIGATION.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="group flex items-center justify-between py-4 border-b border-[#F5F1EA]/10 text-[#F5F1EA]/80 hover:text-[#F5F1EA] transition-colors duration-300"
              style={{ transitionDelay: isOpen ? `${i * 50}ms` : "0ms" }}
            >
              <span className="font-sans text-base tracking-wide">{item.label}</span>
              <span className="text-[#B8793E] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </Link>
          ))}
        </nav>

        {/* CTA + contact */}
        <div className="px-8 py-8 border-t border-[#F5F1EA]/10 space-y-4">
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full text-center py-4 bg-[#B8793E] text-[#F5F1EA] font-sans text-sm tracking-wide hover:bg-[#F5F1EA] hover:text-[#111111] transition-colors duration-300"
          >
            Demander une étude
          </Link>
          <a
            href={`tel:${COMPANY.contact.phone.replace(/\s/g, "")}`}
            className="block text-center text-[#A7B89A] text-sm font-sans"
          >
            {COMPANY.contact.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
