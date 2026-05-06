import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { WORKSHOP, COMPANY } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Atelier bois à Sautron : fabrication charpente & ossature bois | LCCB",
  description:
    "Découvrez l'atelier LCCB : 650 m² de fabrication bois à Sautron. Scie numérique, table de montage ossature bois, pont roulant, logiciel Cadwork. Préfabrication de précision.",
  openGraph: {
    title: "Atelier bois à Sautron | LCCB",
    description: "650 m² d'ateliers, 4 000 m² de site, fabrication charpente et ossature bois à Sautron.",
  },
});

const ATELIER_STATS = [
  { value: "4000", label: "m² de site de production", suffix: "m²" },
  { value: "650", label: "m² d'ateliers spécialisés", suffix: "m²" },
  { value: "12", label: "m — longueur max des murs ossature bois", suffix: "m" },
  { value: "4", label: "véhicules de transport", suffix: "" },
];

export default function AtelierPage() {
  return (
    <>
      <PageHero
        eyebrow="L'atelier"
        title="Un atelier bois pensé pour la précision"
        subtitle="Implanté sur un site de 4 000 m² en zone artisanale de Sautron, LCCB dispose de bureaux en bois et de 650 m² d'ateliers dédiés à la fabrication et à l'assemblage des ouvrages."
        breadcrumb={[{ label: "L'atelier" }]}
      />

      {/* Intro site */}
      <section className="py-24 px-6 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedReveal>
              <SectionTitle
                eyebrow="Le site de Sautron"
                title="4 000 m² au service de vos projets"
                subtitle="Le site de LCCB, c'est bien plus qu'un atelier. C'est un outil de travail pensé pour maîtriser chaque étape de la fabrication, de la conception à la livraison sur chantier."
              />
              <div className="mt-8 p-6 bg-[#D8C5A5]/30 border-l-4 border-[#B8793E]">
                <p className="font-serif text-lg text-[#111111] leading-relaxed">
                  &ldquo;Les bureaux eux-mêmes sont construits en bois — un signe de notre conviction. Tout ce que nous fabriquons, nous l&apos;habitons.&rdquo;
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/atelier-bois-professionnel.png"
                  alt="Atelier bois LCCB à Sautron"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {ATELIER_STATS.map((stat, i) => (
              <AnimatedReveal key={stat.label} delay={i * 0.1}>
                <AnimatedCounter value={stat.value} label={stat.label} suffix={stat.suffix} light delay={i * 0.15} />
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deux ateliers */}
      <section className="py-24 px-6 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <SectionTitle
              eyebrow="Organisation"
              title="Deux ateliers spécialisés"
              subtitle="Chaque atelier est pensé pour une activité spécifique, garantissant des conditions de fabrication optimales."
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {WORKSHOP.ateliers.map((atelier, i) => (
              <AnimatedReveal key={atelier.name} delay={i * 0.15}>
                <div className="relative overflow-hidden">
                  <div className="relative aspect-[16/9] mb-6 overflow-hidden">
                    <Image
                      src={i === 0 ? "/images/detail-assemblage-bois.png" : "/images/chantier-ossature-bois-avec-plans-au-premier-plan.png"}
                      alt={atelier.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-[#111111]/20" />
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-3xl text-[#B8793E]/30 font-bold leading-none mt-1">0{i + 1}</span>
                    <div>
                      <h3 className="font-serif text-2xl text-[#111111] mb-3">{atelier.name}</h3>
                      <p className="text-sm text-[#8A8378] font-sans leading-relaxed">{atelier.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative divider */}
      <section className="py-0 relative h-48 overflow-hidden">
        <Image
          src="/images/fond-lignes-techniques-sur-vert-foret.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#1F3A2E]/60" />
      </section>

      {/* Équipements */}
      <section className="py-24 px-6 bg-[#1F3A2E]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <SectionTitle
              eyebrow="Équipements"
              title="Des outils à la hauteur de l'ambition"
              subtitle="LCCB investit dans des équipements qui permettent plus de précision, plus de rapidité et une meilleure maîtrise de chaque projet."
              light
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKSHOP.equipment.map((eq, i) => (
              <AnimatedReveal key={eq.name} delay={i * 0.08}>
                <div className="border border-[#F5F1EA]/10 p-6 hover:border-[#B8793E]/40 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#B8793E]" />
                    <h3 className="font-serif text-lg text-[#F5F1EA]">{eq.name}</h3>
                  </div>
                  <p className="text-sm text-[#A7B89A] font-sans leading-relaxed">{eq.description}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bénéfices pour le client */}
      <section className="py-24 px-6 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionTitle
              eyebrow="Pour vous, côté client"
              title="Ce que l'atelier change pour votre chantier"
              subtitle="Travailler avec une entreprise dotée d'un atelier de production performant, c'est bénéficier d'avantages concrets sur votre chantier."
            />
            <AnimatedReveal delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WORKSHOP.benefits.map((benefit, i) => (
                  <AnimatedReveal key={i} delay={i * 0.07}>
                    <div className="flex items-start gap-3 p-4 border border-[#D8C5A5]/50 hover:border-[#B8793E]/40 transition-colors duration-300">
                      <span className="w-5 h-5 flex-shrink-0 border border-[#B8793E]/30 flex items-center justify-center mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8793E]" />
                      </span>
                      <span className="text-sm text-[#8A8378] font-sans leading-relaxed">{benefit}</span>
                    </div>
                  </AnimatedReveal>
                ))}
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Venez visiter notre atelier"
        subtitle="Nous accueillons nos clients et partenaires architectes pour leur présenter notre outil de production et discuter de leurs projets."
        primaryCta={{ label: "Prendre contact", href: "/contact" }}
        secondaryCta={{ label: "Voir nos réalisations", href: "/realisations" }}
      />
    </>
  );
}
