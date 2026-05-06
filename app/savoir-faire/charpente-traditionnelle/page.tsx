import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Charpente traditionnelle sur mesure — Sautron, Nantes | LCCB",
  description:
    "LCCB conçoit et fabrique des charpentes traditionnelles sur mesure à Sautron. Rénovation, extension, surélévation, maison complète. Expertise compagnon depuis 2005.",
  openGraph: {
    title: "Charpente traditionnelle | LCCB",
    description: "Charpentes sur mesure, fabriquées en atelier à Sautron. Expertise compagnon.",
  },
});

const service = SERVICES.find((s) => s.id === "charpente-traditionnelle")!;

export default function CharpentePage() {
  return (
    <>
      <PageHero
        eyebrow="Charpente traditionnelle"
        title="L'art de la charpente, de la conception à la pose"
        subtitle={service.description}
        breadcrumb={[
          { label: "Savoir-faire", href: "/savoir-faire" },
          { label: "Charpente traditionnelle" },
        ]}
      />

      {/* Présentation */}
      <section className="py-24 px-6 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedReveal>
              <SectionTitle
                eyebrow="Notre approche"
                title="Fabrication sur mesure, expertise compagnon"
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
                  <h3 className="font-serif text-xl text-[#111111] mb-5">Avantages LCCB</h3>
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
                src="/images/charpente-interieure-apparente.png"
                alt="Charpente intérieure apparente LCCB"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Processus */}
      <section className="py-24 px-6 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle eyebrow="Processus" title="De l'étude à la pose" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "01", t: "Étude de faisabilité", d: "Analyse des contraintes techniques, du bâti existant et des objectifs du client." },
              { n: "02", t: "Plans et conception", d: "Modélisation 3D avec Cadwork, vérification des calculs de structure avec MDBAT." },
              { n: "03", t: "Fabrication en atelier", d: "Taillage et assemblage des pièces de bois dans nos ateliers de 650 m²." },
              { n: "04", t: "Transport et levage", d: "Livraison des éléments préfabriqués et pose par nos équipes qualifiées." },
            ].map((step, i) => (
              <AnimatedReveal key={step.n} delay={i * 0.1}>
                <div className="border-t-2 border-[#B8793E] pt-6">
                  <div className="font-serif text-3xl text-[#B8793E]/30 font-bold mb-3">{step.n}</div>
                  <h3 className="font-serif text-lg text-[#111111] mb-2">{step.t}</h3>
                  <p className="text-sm text-[#8A8378] font-sans leading-relaxed">{step.d}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Un projet de charpente ? Parlons-en."
        subtitle="De la rénovation d'une charpente existante à la construction d'un ouvrage complet, nous étudions chaque projet avec la même attention."
        primaryCta={{ label: "Demander une étude", href: "/contact" }}
      />
    </>
  );
}
