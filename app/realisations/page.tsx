"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, ArrowUpRight, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/content";
import ProjectCard from "@/components/ui/ProjectCard";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";

const FILTERS = [
  { id: "all", label: "Tous les projets" },
  { id: "hors-norme", label: "Hors norme" },
  { id: "ossature-bois", label: "Ossature bois" },
  { id: "charpente", label: "Charpente" },
  { id: "couverture", label: "Couverture" },
  { id: "menuiserie", label: "Menuiserie" },
  { id: "zinguerie", label: "Zinguerie" },
];

// Separate featured from standard
const featuredProject = PROJECTS.find((p) => p.featured);
const standardProjects = PROJECTS.filter((p) => !p.featured);

export default function RealisationsPage() {
  const [active, setActive] = useState("all");

  const showFeatured = active === "all" || active === "hors-norme";
  const filtered = active === "hors-norme"
    ? []
    : standardProjects.filter((p) => active === "all" || p.type === active);

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

      <section className="py-24 px-6 md:px-12 lg:px-16 bg-[#F5F1EA]">
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

          {/* ── CARTE FEATURED ── */}
          <AnimatePresence>
            {showFeatured && featuredProject && (
              <motion.div
                key="featured"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="relative mb-10 overflow-hidden bg-[#0D1F17] group"
              >
                {/* Badge record */}
                <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
                  <span className="bg-[#B8793E] text-[#F5F1EA] text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 font-sans">
                    Record du monde
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
                  {/* Image */}
                  <div className="relative order-2 lg:order-1 min-h-[300px] lg:min-h-0 overflow-hidden">
                    <Image
                      src={featuredProject.image!}
                      alt={featuredProject.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D1F17]/60 hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F17]/80 to-transparent lg:hidden" />
                  </div>

                  {/* Contenu */}
                  <div className="order-1 lg:order-2 relative z-10 flex flex-col justify-between p-8 md:p-12 lg:p-14">
                    {/* Top */}
                    <div>
                      <div className="flex items-center gap-2 text-[10px] text-[#B8793E] uppercase tracking-[0.2em] font-sans mb-5">
                        <MapPin size={9} />
                        <span>{featuredProject.location}</span>
                        <span className="text-[#8A8378]/40 mx-1">·</span>
                        <span className="text-[#8A8378]">{featuredProject.typeLabel}</span>
                      </div>

                      <h2 className="font-serif text-display-sm text-[#F5F1EA] leading-tight mb-5">
                        {featuredProject.title}
                      </h2>

                      <p className="text-[#A7B89A] font-sans text-sm leading-relaxed mb-6 max-w-lg">
                        {featuredProject.longDescription}
                      </p>
                    </div>

                    {/* Chiffres clés */}
                    <div>
                      <div className="grid grid-cols-3 gap-px bg-[#F5F1EA]/8 mb-8">
                        {featuredProject.stats?.map((stat, i) => (
                          <div key={i} className="bg-[#0D1F17] px-4 py-4">
                            <span className="block font-serif text-lg text-[#B8793E] leading-none mb-1">
                              {stat.value}
                            </span>
                            <span className="block text-[9px] uppercase tracking-[0.15em] text-[#8A8378] font-sans">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex flex-wrap gap-3">
                        <a
                          href="https://www.leboisinternational.com/deuxieme-transformation/meuble/la-plus-grande-piece-dechecs-au-monde-visible-a-sautron-703789.php"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 bg-[#B8793E] hover:bg-[#F5F1EA] text-[#F5F1EA] hover:text-[#111111] px-6 py-3 text-[10px] uppercase tracking-[0.15em] font-sans transition-all duration-300"
                        >
                          Découvrir l&apos;article
                          <ExternalLink size={11} />
                        </a>
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-[#D8C5A5]/60 font-sans px-2">
                          <ArrowUpRight size={11} />
                          <span>Projet inauguré en 2022</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Count */}
          <motion.p
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-[#8A8378] font-sans mb-10 tracking-wide"
          >
            {(showFeatured ? 1 : 0) + filtered.length} réalisation{((showFeatured ? 1 : 0) + filtered.length) > 1 ? "s" : ""}
          </motion.p>

          {/* Grille standard */}
          {filtered.length > 0 && (
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
          )}

          {(showFeatured ? 1 : 0) + filtered.length === 0 && (
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

      {/* Note */}
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
