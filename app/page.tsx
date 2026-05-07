"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, ExternalLink, ShieldCheck, Award, Leaf, Clock } from "lucide-react";
import { SERVICES, COMPANY, PROJECTS } from "@/lib/content";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import ProjectCard from "@/components/ui/ProjectCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import CTASection from "@/components/ui/CTASection";
import Button from "@/components/ui/Button";

const HERO_STATS = [
  { label: "Fondée en", value: "2005" },
  { label: "Atelier", value: "650 m²" },
  { label: "Garantie", value: "Décennale" },
  { label: "Site à", value: "Sautron" },
];

const CERTIF_ICONS = [
  { Icon: Leaf, name: "PEFC", desc: "Bois certifié issu de forêts gérées durablement" },
  { Icon: ShieldCheck, name: "Garantie décennale", desc: "Couverture complète 10 ans sur nos ouvrages" },
  { Icon: Award, name: "Responsabilité civile", desc: "Assurance professionnelle complète" },
  { Icon: Clock, name: "20 ans d'expérience", desc: "Expertise compagnon depuis 2005" },
];

const COUNTERS = [
  { value: "2005", label: "Année de création", suffix: "" },
  { value: "650", label: "m² d'ateliers", suffix: "m²" },
  { value: "4000", label: "m² de site", suffix: "m²" },
  { value: "11", label: "Collaborateurs", suffix: "" },
  { value: "12", label: "m — murs ossature bois", suffix: "m" },
];

const IDENTITY_POINTS = [
  "Étude de faisabilité avant chaque projet",
  "Fabrication sur mesure en atelier propre",
  "Collaboration régulière avec les architectes",
  "Respect des budgets et des délais",
  "Garantie décennale et bois PEFC certifié",
];

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Réalisations sans la featured (pièce d'échecs)
  const previewProjects = PROJECTS.filter((p) => !p.featured).slice(0, 4);

  return (
    <>
      {/* ─── 1. HERO ─── */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[680px] flex flex-col justify-end overflow-hidden bg-[#1F3A2E]"
      >
        <motion.div className="absolute inset-0 will-change-transform" style={{ y: heroY }}>
          <Image
            src="/images/hero-chantier-levage-d-un-module-bois.png"
            alt="LCCB — Levage d'un module bois sur chantier"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F3A2E]/50 via-[#111111]/40 to-[#111111]/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/75 via-[#111111]/25 to-transparent" />
        </motion.div>

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8793E]/40 to-transparent" />

        <motion.div
          className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12 lg:px-16 pb-16 md:pb-20"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="block w-10 h-px bg-[#B8793E]" />
            <span className="text-[#B8793E] text-[11px] uppercase tracking-[0.3em] font-sans">
              Artisan charpentier — Sautron, Loire-Atlantique
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-display-xl text-[#F5F1EA] leading-[1.0] max-w-5xl mb-7"
          >
            Charpente &amp; construction<br className="hidden lg:block" /> bois sur mesure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="text-[#A7B89A] font-sans text-base lg:text-lg leading-relaxed max-w-2xl mb-10"
          >
            Depuis 2005, LCCB conçoit, fabrique et pose des ouvrages bois durables pour les
            particuliers, architectes et maîtres d&apos;œuvre à Sautron et en Loire-Atlantique.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-wrap items-center gap-4 mb-14"
          >
            <Button href="/contact" size="lg" className="bg-[#B8793E] hover:bg-[#F5F1EA] hover:text-[#111111]">
              Demander une étude
              <ArrowRight size={14} />
            </Button>
            <Button
              href="/realisations"
              size="lg"
              variant="secondary"
              className="border-[#F5F1EA]/30 text-[#F5F1EA] hover:bg-[#F5F1EA] hover:text-[#111111] hover:border-[#F5F1EA]"
            >
              Voir les réalisations
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="flex flex-wrap items-center gap-0 border-t border-[#F5F1EA]/10 pt-8"
          >
            {HERO_STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                <div className="pr-8 lg:pr-12">
                  <span className="block font-serif text-xl lg:text-2xl text-[#F5F1EA] leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-[#A7B89A] font-sans">
                    {stat.label}
                  </span>
                </div>
                {i < HERO_STATS.length - 1 && (
                  <div className="w-px h-8 bg-[#F5F1EA]/15 mr-8 lg:mr-12" />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="w-px h-14 bg-[#F5F1EA]/15 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-[#B8793E]"
              animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="text-[#F5F1EA]/25 text-[9px] tracking-[0.25em] uppercase rotate-90 origin-center font-sans mt-2">
            scroll
          </span>
        </motion.div>
      </section>

      {/* ─── 2. RÉALISATIONS PREVIEW ─── */}
      <section className="py-28 lg:py-36 px-8 md:px-12 lg:px-16 bg-[#D8C5A5]/15">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <SectionTitle
              eyebrow="Réalisations"
              title="Des projets bois, du simple au très ambitieux"
            />
            <AnimatedReveal delay={0.2}>
              <Button href="/realisations" variant="secondary" size="md" className="shrink-0">
                Voir toutes les réalisations
                <ArrowUpRight size={13} />
              </Button>
            </AnimatedReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {previewProjects.map((project, i) => (
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
          </div>
        </div>
      </section>

      {/* ─── 3. POSITIONNEMENT ─── */}
      <section className="py-28 lg:py-36 px-8 md:px-12 lg:px-16 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <AnimatedReveal>
              <SectionTitle
                eyebrow="Notre identité"
                title="L'exigence artisanale, la précision du bureau d'études"
                subtitle="LCCB associe le savoir-faire du compagnonnage, la rigueur du bureau d'études et la maîtrise de la fabrication en atelier pour accompagner des projets bois sur mesure du plus simple au plus ambitieux."
              />
              <div className="mt-10">
                <Button href="/entreprise" variant="ghost" size="md" className="text-[#B8793E] hover:text-[#1F3A2E]">
                  Découvrir notre histoire
                  <ArrowRight size={13} />
                </Button>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.15}>
              <div className="space-y-5">
                {IDENTITY_POINTS.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-8 h-8 flex-shrink-0 border border-[#B8793E]/30 flex items-center justify-center mt-0.5 group-hover:bg-[#B8793E]/5 transition-colors duration-300">
                      <span className="w-2 h-2 rounded-full bg-[#B8793E]" />
                    </div>
                    <span className="text-sm text-[#8A8378] font-sans leading-relaxed pt-1.5">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* ─── 3. SAVOIR-FAIRE ─── */}
      <section className="py-28 lg:py-36 px-8 md:px-12 lg:px-16 bg-[#D8C5A5]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <SectionTitle
              eyebrow="Savoir-faire"
              title="Cinq métiers du bois, une seule exigence"
              subtitle="De la charpente traditionnelle à la zinguerie, chaque prestation est conduite avec le même niveau de précision."
            />
            <AnimatedReveal delay={0.2}>
              <Button href="/savoir-faire" variant="secondary" size="md" className="shrink-0">
                Voir tous nos savoir-faire
                <ArrowUpRight size={13} />
              </Button>
            </AnimatedReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                href={`/savoir-faire/${service.slug}`}
                index={i}
                color={service.color}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. ATELIER ─── */}
      <section className="py-28 lg:py-36 px-8 md:px-12 lg:px-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start mb-24">
            <AnimatedReveal>
              <SectionTitle
                eyebrow="L'atelier"
                title="650 m² pour maîtriser chaque détail"
                subtitle="À Sautron, LCCB dispose d'un site de 4 000 m² et de deux ateliers spécialisés pour préparer, fabriquer et assembler les ouvrages bois dans des conditions optimales."
                light
              />
              <div className="mt-10">
                <Button
                  href="/atelier"
                  size="md"
                  variant="secondary"
                  className="border-[#B8793E]/50 text-[#F5F1EA] hover:bg-[#B8793E] hover:border-[#B8793E]"
                >
                  Découvrir l'atelier
                  <ArrowRight size={13} />
                </Button>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.15}>
              <ul className="space-y-4 mt-2">
                {[
                  "Murs ossature bois jusqu'à 12 m de long",
                  "Bardage et isolation intégrés en atelier",
                  "Scie déligneuse numérique et règle numérique",
                  "Table de montage ossature bois dédiée",
                  "Pont roulant pour la manutention sécurisée",
                  "Conception 3D via le logiciel Cadwork",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm text-[#A7B89A] font-sans py-3.5 border-b border-[#F5F1EA]/5">
                    <span className="w-6 h-px bg-[#B8793E] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedReveal>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 pt-16 border-t border-[#F5F1EA]/8">
            {COUNTERS.map((c, i) => (
              <AnimatedReveal key={c.label} delay={i * 0.1}>
                <AnimatedCounter value={c.value} label={c.label} suffix={c.suffix} light delay={i * 0.1} />
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. PROJET MANIFESTE : PIÈCE D'ÉCHECS ─── */}
      <section className="relative overflow-hidden bg-[#0D1F17]">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="/images/piece-echec.png"
            alt="La plus grande pièce d'échecs du monde — LCCB Sautron"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0D1F17]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F17]/90 via-[#0D1F17]/50 to-[#0D1F17]/60" />
        </div>

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize: "200px 200px" }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#B8793E]/60 via-[#B8793E]/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-28 lg:py-36">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-12"
          >
            <span className="block w-10 h-px bg-[#B8793E]" />
            <span className="text-[#B8793E] text-[10px] uppercase tracking-[0.3em] font-sans">
              Projet manifeste — Record du monde
            </span>
          </motion.div>

          {/* Grille 2 colonnes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-start">

            {/* Colonne gauche : texte */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-serif text-display-md text-[#F5F1EA] leading-[1.05] mb-7"
              >
                La plus grande pièce d&apos;échecs du monde,{" "}
                <em className="not-italic text-[#D8C5A5]">fabriquée à Sautron</em>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-[#A7B89A] font-sans text-base leading-relaxed mb-8"
              >
                Un projet hors norme où la conception numérique, le geste compagnon et la maîtrise du bois se rencontrent.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="space-y-4 mb-10"
              >
                <p className="text-[#D8C5A5]/80 font-sans text-sm leading-[1.85]">
                  Inaugurée à Sautron, près de Nantes, cette pièce monumentale représente un roi de près de 6,32 mètres de haut. Elle dépasse le précédent record détenu depuis 2018 par un club situé à Saint-Louis, aux États-Unis.
                </p>
                <p className="text-[#D8C5A5]/80 font-sans text-sm leading-[1.85]">
                  La pièce a nécessité une réflexion complexe sur les assemblages, les volumes coniques, la stabilité et la tenue de près de 4 tonnes de bois — plus de 700 heures d&apos;études sur Cadwork.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4"
              >
                <a
                  href="https://www.leboisinternational.com/deuxieme-transformation/meuble/la-plus-grande-piece-dechecs-au-monde-visible-a-sautron-703789.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#B8793E] hover:bg-[#F5F1EA] text-[#F5F1EA] hover:text-[#111111] px-7 py-3.5 text-[11px] uppercase tracking-[0.12em] font-sans font-medium transition-all duration-300"
                >
                  Découvrir l&apos;article
                  <ExternalLink size={13} />
                </a>
                <a
                  href="/realisations"
                  className="inline-flex items-center gap-3 border border-[#F5F1EA]/20 hover:border-[#B8793E]/60 text-[#D8C5A5] hover:text-[#F5F1EA] px-7 py-3.5 text-[11px] uppercase tracking-[0.12em] font-sans font-medium transition-all duration-300"
                >
                  Voir nos réalisations
                  <ArrowRight size={13} />
                </a>
              </motion.div>
            </div>

            {/* Colonne droite : vidéo YouTube */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-video shadow-[0_24px_80px_rgba(0,0,0,0.5)] overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/PtV7-RsOnuQ"
                  title="La plus grande pièce d'échecs du monde — LCCB Sautron"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <span className="absolute -top-3 -left-3 block w-8 h-8 border-t-2 border-l-2 border-[#B8793E]" />
              <span className="absolute -bottom-3 -right-3 block w-8 h-8 border-b-2 border-r-2 border-[#B8793E]" />
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 border-t border-[#F5F1EA]/8">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 divide-x divide-[#F5F1EA]/8">
              {[
                { value: "6,32 m", label: "de hauteur" },
                { value: "≈ 4 t", label: "de bois" },
                { value: "4 ans", label: "de projet" },
                { value: "700 h+", label: "d'études CAO" },
                { value: "9,36 m³", label: "de bois brut" },
                { value: "585 ml", label: "de Douglas naturel" },
                { value: "3 sem.", label: "de fabrication" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="py-8 px-5 first:pl-0 last:pr-0 text-center"
                >
                  <span className="block font-serif text-xl lg:text-2xl text-[#B8793E] leading-none mb-2">
                    {stat.value}
                  </span>
                  <span className="block text-[9px] uppercase tracking-[0.18em] text-[#8A8378] font-sans">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#B8793E]/40 via-[#B8793E]/10 to-transparent" />
      </section>

      {/* ─── 6. FONDATEUR + VIDÉO ─── */}
      <section className="py-28 lg:py-36 px-8 md:px-12 lg:px-16 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            {/* Photo équipe */}
            <AnimatedReveal direction="left">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/equipe-en-atelier-ou-chantier.png"
                  alt="Équipe LCCB en atelier — Sautron"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 via-transparent to-transparent" />
                <span className="absolute top-5 left-5 block w-10 h-10 border-t-2 border-l-2 border-[#B8793E]" />
                <span className="absolute bottom-5 right-5 block w-10 h-10 border-b-2 border-r-2 border-[#B8793E]" />
              </div>
            </AnimatedReveal>

            {/* Texte */}
            <AnimatedReveal direction="right">
              <div>
                <div className="flex items-center gap-3 text-[#B8793E] text-[11px] tracking-[0.3em] uppercase font-sans mb-6">
                  <span className="w-8 h-px bg-[#B8793E]" />
                  Le fondateur
                </div>
                <h2 className="font-serif text-display-md text-[#111111] leading-tight mb-8">
                  Une exigence héritée du compagnonnage
                </h2>
                <div className="space-y-5 text-[#8A8378] font-sans text-sm leading-relaxed mb-10">
                  <p>
                    Après 10 ans de Tour de France compagnon, Renan Leboucher fonde LCCB en 2005 à Sautron avec une conviction : associer le savoir-faire traditionnel aux outils de conception modernes.
                  </p>
                  <p>
                    Dès la création de l&apos;entreprise, il noue un partenariat avec un architecte et intègre la CAO/DAO dans son processus de travail — une démarche alors rare dans le secteur.
                  </p>
                  <p>
                    Aujourd&apos;hui, Renan est l&apos;interlocuteur principal de chaque client : bureau d&apos;études, plans, faisabilité et suivi de chantier.
                  </p>
                </div>

                <div className="flex items-center gap-8 mb-10 py-6 border-y border-[#D8C5A5]/60">
                  {[
                    { v: "10 ans", l: "Tour de France" },
                    { v: "2005", l: "Création LCCB" },
                    { v: "Cadwork", l: "Dès le début" },
                  ].map(({ v, l }, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="font-serif text-2xl text-[#111111] leading-none mb-1">{v}</span>
                      <span className="text-[11px] text-[#8A8378] font-sans uppercase tracking-[0.1em]">{l}</span>
                    </div>
                  ))}
                </div>

                <Button href="/entreprise" size="md">
                  L'histoire de LCCB
                  <ArrowRight size={13} />
                </Button>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* ─── 8. GARANTIES ─── */}
      <section className="py-28 lg:py-36 px-8 md:px-12 lg:px-16 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <SectionTitle
              eyebrow="Engagements"
              title="Des garanties solides pour des projets sereins"
              align="center"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIF_ICONS.map(({ Icon, name, desc }, i) => (
              <AnimatedReveal key={name} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center gap-5 p-8 bg-white border border-[#D8C5A5]/50 hover:border-[#B8793E]/40 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-400">
                  <div className="w-14 h-14 flex items-center justify-center border border-[#B8793E]/25 bg-[#B8793E]/5">
                    <Icon size={22} className="text-[#B8793E]" />
                  </div>
                  <div>
                    <p className="font-serif text-lg text-[#111111] mb-2">{name}</p>
                    <p className="text-[13px] text-[#8A8378] font-sans leading-relaxed">{desc}</p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. CTA FINAL ─── */}
      <CTASection
        title="Vous avez un projet bois, une extension ou une rénovation de toiture ?"
        subtitle="Chaque projet commence par une étude de faisabilité gratuite. Contactez Renan directement."
        primaryCta={{ label: "Demander une étude", href: "/contact" }}
        secondaryCta={{ label: "Voir nos savoir-faire", href: "/savoir-faire" }}
      />
    </>
  );
}
