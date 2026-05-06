"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/content";
import ProjectCard from "@/components/ui/ProjectCard";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";

const FILTERS = [
  { id: "all", label: "Tous les projets" },
  { id: "ossature-bois", label: "Ossature bois" },
  { id: "charpente", label: "Charpente" },
  { id: "couverture", label: "Couverture" },
  { id: "menuiserie", label: "Menuiserie" },
  { id: "zinguerie", label: "Zinguerie" },
];

export default function RealisationsPage() {
  const [active, setActive] = useState("all");

  const filtered = PROJECTS.filter(
    (p) => active === "all" || p.type === active
  );

  const handleFilter = useCallback((id: string) => {
    setActive(id);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Nos réalisations"
        title="Des projets bois réalisés avec soin"
        subtitle="Extensions, charpentes, ossatures bois, menuiseries — chaque ouvrage témoigne de notre savoir-faire et de notre exigence."
        breadcrumb={[{ label: "Réalisations" }]}
      />

      <section className="py-24 px-6 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">

          {/* Filters */}
          <div className="mb-14">
            <p className="input-label mb-4">Filtrer par catégorie</p>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => handleFilter(f.id)}
                  className={`px-6 py-3 text-[11px] font-sans uppercase tracking-[0.12em] transition-all duration-300 border ${
                    active === f.id
                      ? "bg-[#1F3A2E] text-[#F5F1EA] border-[#1F3A2E]"
                      : "bg-white border-[#D8C5A5] text-[#8A8378] hover:border-[#1F3A2E] hover:text-[#111111] hover:bg-transparent"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <motion.p
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-[#8A8378] font-sans mb-10 tracking-wide"
          >
            {filtered.length} réalisation{filtered.length > 1 ? "s" : ""}
          </motion.p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="sync">
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  typeLabel={project.typeLabel}
                  location={project.location}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  index={i}
                />
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-[#8A8378] font-sans text-sm">Aucune réalisation dans cette catégorie pour le moment.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Note placeholder */}
      <section className="py-10 px-6 bg-[#D8C5A5]/20 border-t border-[#D8C5A5]/40">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-[#8A8378] font-sans text-center leading-relaxed">
            Les photos de réalisations seront ajoutées progressivement. Contactez-nous pour voir nos travaux ou visiter notre atelier.
          </p>
        </div>
      </section>

      <CTASection
        title="Vous avez un projet similaire ?"
        subtitle="Parlons-en. Nous vous accompagnons de l'étude à la réception."
        primaryCta={{ label: "Parler de mon projet", href: "/contact" }}
        secondaryCta={{ label: "Voir nos savoir-faire", href: "/savoir-faire" }}
      />
    </>
  );
}
