import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Construction ossature bois — Nantes, Loire-Atlantique | LCCB",
  description:
    "LCCB fabrique en atelier des éléments d'ossature bois jusqu'à 12 m, avec bardage et isolation intégrés. Chantier propre, rapide. Extension, surélévation, maison neuve à Sautron.",
  openGraph: {
    title: "Construction ossature bois | LCCB",
    description: "Préfabrication ossature bois en atelier à Sautron. Murs jusqu'à 12m, bardage et isolation intégrés.",
  },
});

const service = SERVICES.find((s) => s.id === "ossature-bois")!;

export default function OssatureBoisPage() {
  return (
    <>
      <PageHero
        eyebrow="Construction ossature bois"
        title="Préfabrication de précision, chantier maîtrisé"
        subtitle={service.description}
        breadcrumb={[
          { label: "Savoir-faire", href: "/savoir-faire" },
          { label: "Construction ossature bois" },
        ]}
      />

      {/* Intro */}
      <section className="py-24 px-6 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedReveal>
              <SectionTitle
                eyebrow="Notre atelier ossature bois"
                title="Fabrication contrôlée, chantier optimisé"
                subtitle={service.longDescription}
              />
            </AnimatedReveal>

            <AnimatedReveal delay={0.15}>
              <div className="space-y-10">
                <div>
                  <h3 className="font-serif text-xl text-[#111111] mb-5">Types de projets</h3>
                  <ul className="space-y-3">
                    {service.projectTypes.map((type, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-[#8A8378] font-sans">
                        <span className="w-4 h-px bg-[#B8793E]" />
                        {type}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#111111] mb-5">Avantages de la préfabrication</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#8A8378] font-sans">
                        <span className="w-5 h-5 flex-shrink-0 border border-[#B8793E]/30 flex items-center justify-center mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B8793E]" />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedReveal>
            <div className="relative aspect-[21/9] overflow-hidden">
              <Image
                src="/images/chantier-ossature-bois-avec-plans-au-premier-plan.png"
                alt="Chantier ossature bois LCCB avec plans"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Feature highlight */}
      <section className="py-24 px-6 bg-[#1F3A2E]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              { title: "Jusqu'à 12 m de long", desc: "Notre table de montage permet de fabriquer des murs entiers d'un seul tenant, bardage et isolation intégrés." },
              { title: "Chantier propre", desc: "Les déchets sont traités en atelier. Le chantier est plus propre, plus sécurisé, moins bruyant pour le voisinage." },
              { title: "Délais réduits", desc: "La pose sur chantier est accélérée grâce à des éléments préfabriqués prêts à l'emploi et parfaitement dimensionnés." },
            ].map((feat, i) => (
              <AnimatedReveal key={feat.title} delay={i * 0.1}>
                <div className="border-t border-[#F5F1EA]/10 pt-8">
                  <h3 className="font-serif text-2xl text-[#F5F1EA] mb-4">{feat.title}</h3>
                  <p className="text-sm text-[#A7B89A] font-sans leading-relaxed">{feat.desc}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Architectes */}
      <section className="py-24 px-6 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedReveal>
              <div className="flex items-center gap-3 text-[#B8793E] text-xs tracking-[0.25em] uppercase font-sans mb-5">
                <span className="w-8 h-px bg-[#B8793E]" />
                Architectes & maîtres d&apos;œuvre
              </div>
              <h2 className="font-serif text-display-md text-[#111111] mb-6">
                Un partenaire technique pour vos projets architecturaux
              </h2>
              <p className="text-[#8A8378] font-sans text-base leading-relaxed">
                LCCB collabore régulièrement avec des architectes et maîtres d&apos;œuvre. Notre bureau d&apos;études maîtrise les logiciels CAO/DAO et peut intervenir dès la phase de conception pour optimiser les solutions constructives bois.
              </p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/bureau-detudes-conception-cao.png"
                  alt="Bureau d'études conception CAO LCCB"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Un projet en ossature bois ?"
        subtitle="Nous étudions votre projet avec votre architecte ou directement avec vous pour une construction ou une extension en ossature bois."
        primaryCta={{ label: "Parler de mon projet", href: "/contact" }}
        secondaryCta={{ label: "Découvrir l'atelier", href: "/atelier" }}
      />
    </>
  );
}
