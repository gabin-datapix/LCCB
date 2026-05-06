import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Zinguerie — Étanchéité & finitions toiture | LCCB Sautron",
  description:
    "Zinguerie de précision à Sautron : noues, chéneaux, gouttières, habillages zinc. Protection durable des points de jonction. LCCB, charpentier-couvreur depuis 2005.",
  openGraph: { title: "Zinguerie | LCCB — Charpente & Concept Bois" },
});

const service = SERVICES.find((s) => s.id === "zinguerie")!;

export default function ZingueriePage() {
  return (
    <>
      <PageHero
        eyebrow="Zinguerie"
        title="Étanchéité et finitions, sans compromis"
        subtitle={service.description}
        breadcrumb={[
          { label: "Savoir-faire", href: "/savoir-faire" },
          { label: "Zinguerie" },
        ]}
      />

      <section className="py-24 px-6 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedReveal>
              <SectionTitle
                eyebrow="Notre savoir-faire"
                title="La zinguerie, art de la précision"
                subtitle={service.longDescription}
              />
            </AnimatedReveal>
            <AnimatedReveal delay={0.15}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-xl text-[#111111] mb-5">Nos prestations</h3>
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
                  <h3 className="font-serif text-xl text-[#111111] mb-5">Points forts</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#8A8378] font-sans">
                        <span className="w-5 h-5 flex-shrink-0 border border-[#B8793E]/30 flex items-center justify-center mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B8793E]" />
                        </span>
                        {b}
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
                src="/images/zinguerie-detail-zinc.png"
                alt="Zinguerie détail zinc LCCB"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#D8C5A5]/20">
        <div className="max-w-4xl mx-auto">
          <AnimatedReveal>
            <div className="bg-[#F5F1EA] p-10 border-l-4 border-[#B8793E]">
              <p className="font-serif text-xl text-[#111111] leading-relaxed mb-4">
                &ldquo;La zinguerie assure la protection des points sensibles du bâtiment. LCCB façonne et pose les éléments nécessaires à l&apos;étanchéité, à l&apos;évacuation des eaux et à la durabilité des ouvrages.&rdquo;
              </p>
              <p className="text-sm text-[#8A8378] font-sans">— LCCB, charpentier-couvreur depuis 2005</p>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <CTASection
        title="Un projet de zinguerie ou de couverture ?"
        subtitle="Contactez-nous pour un diagnostic et un devis personnalisé."
        primaryCta={{ label: "Contacter LCCB", href: "/contact" }}
        secondaryCta={{ label: "Voir nos réalisations", href: "/realisations" }}
      />
    </>
  );
}
