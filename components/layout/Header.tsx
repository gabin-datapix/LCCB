"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION, COMPANY } from "@/lib/content";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? "bg-transparent"
            : "bg-[#F5F1EA]/96 backdrop-blur-md border-b border-[#D8C5A5]/50 shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group" aria-label="LCCB — Retour à l'accueil">
            <span
              className={`font-serif text-2xl font-bold tracking-wide transition-colors duration-300 ${
                transparent ? "text-[#F5F1EA]" : "text-[#111111]"
              }`}
            >
              LCCB
            </span>
            <span
              className={`text-[9px] tracking-[0.25em] uppercase font-sans transition-colors duration-300 ${
                transparent ? "text-[#D8C5A5]" : "text-[#8A8378]"
              }`}
            >
              Leboucher Charpente & Concept Bois
            </span>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
            {NAVIGATION.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[11px] tracking-[0.12em] uppercase font-sans transition-colors duration-300 relative group ${
                    transparent
                      ? isActive
                        ? "text-[#F5F1EA]"
                        : "text-[#F5F1EA]/70 hover:text-[#F5F1EA]"
                      : isActive
                      ? "text-[#111111]"
                      : "text-[#111111]/60 hover:text-[#111111]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#B8793E] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            {transparent ? (
              <Button
                href="/contact"
                size="sm"
                className="hidden lg:inline-flex border border-[#F5F1EA]/40 bg-transparent text-[#F5F1EA] hover:bg-[#F5F1EA] hover:text-[#111111]"
              >
                Demander une étude
              </Button>
            ) : (
              <Button href="/contact" size="sm" className="hidden lg:inline-flex">
                Demander une étude
              </Button>
            )}

            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden flex flex-col gap-1.5 p-2 transition-colors duration-300 ${
                transparent ? "text-[#F5F1EA]" : "text-[#111111]"
              }`}
              aria-label="Ouvrir le menu"
              aria-expanded={mobileOpen}
            >
              <span className="block w-6 h-px bg-current" />
              <span className="block w-4 h-px bg-current ml-2" />
              <span className="block w-6 h-px bg-current" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
