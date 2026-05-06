import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Couverture — Rénovation & réparation toiture à Sautron | LCCB",
  description:
    "LCCB intervient sur la rénovation, le remplacement et l'entretien de toitures à Sautron, Nantes et en Loire-Atlantique. Réactivité, diagnostic précis, protection durable.",
  openGraph: {
    title: "Couverture | LCCB — Charpente & Concept Bois",
  },
});

const service = SERVICES.find((s) => s.id === "couverture")!;

export default function CouverturePage() {
  return (
    <>
      <PageHero
        eyebrow="Couverture"
        title="Protection durable de votre toiture"
        subtitle={service.description}
        breadcrumb={[
          { label: "Savoir-faire", href: "/savoir-faire" },
          { label: "Couverture" },
        ]}
      />

      <section className="py-24 px-6 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedReveal>
              <SectionTitle
                eyebrow="Notre savoir-faire"
                title="Chaque toiture mérite une intervention soignée"
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
                  <h3 className="font-serif text-xl text-[#111111] mb-5">Nos engagements</h3>
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
                src="/images/couverture-premium.png"
                alt="Couverture toiture LCCB"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#D8C5A5]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Diagnostic précis", desc: "Avant toute intervention, nous réalisons un diagnostic complet de l'état de votre toiture." },
              { title: "Intervention rapide", desc: "Nous sommes réactifs pour les réparations urgentes et limitons au maximum les risques d'infiltration." },
              { title: "Coordination globale", desc: "Notre expérience en charpente permet une coordination optimale entre couverture et structure bois." },
            ].map((item, i) => (
              <AnimatedReveal key={item.title} delay={i * 0.1}>
                <div className="p-8 bg-[#F5F1EA] border border-[#D8C5A5]/50">
                  <h3 className="font-serif text-xl text-[#111111] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#8A8378] font-sans leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Un problème de toiture ? Contactez-nous."
        subtitle="Diagnostic, devis et intervention dans les meilleurs délais."
        primaryCta={{ label: "Contacter LCCB", href: "/contact" }}
      />
    </>
  );
}
