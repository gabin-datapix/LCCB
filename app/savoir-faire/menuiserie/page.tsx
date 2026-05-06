import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Menuiserie bois sur mesure — Nantes, Loire-Atlantique | LCCB",
  description:
    "Menuiseries intérieures et extérieures, mobilier sur mesure à Sautron et Nantes. Harmonie avec le bâti existant, finitions soignées. LCCB depuis 2005.",
  openGraph: { title: "Menuiserie bois sur mesure | LCCB" },
});

const service = SERVICES.find((s) => s.id === "menuiserie")!;

export default function MenuiseriePage() {
  return (
    <>
      <PageHero
        eyebrow="Menuiserie"
        title="Menuiserie sur mesure, harmonie avec le bâti"
        subtitle={service.description}
        breadcrumb={[
          { label: "Savoir-faire", href: "/savoir-faire" },
          { label: "Menuiserie" },
        ]}
      />

      <section className="py-24 px-6 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedReveal>
              <SectionTitle
                eyebrow="Notre approche"
                title="Chaque élément conçu pour s'intégrer"
                subtitle={service.longDescription}
              />
            </AnimatedReveal>
            <AnimatedReveal delay={0.15}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-xl text-[#111111] mb-5">Nos réalisations</h3>
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
                src="/images/menuiserie-interieure-escalier-sur-mesure.png"
                alt="Menuiserie intérieure escalier sur mesure LCCB"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: "Menuiseries extérieures", desc: "Fenêtres, portes, volets, portails — fabriqués sur mesure pour correspondre à l'architecture de votre maison." },
              { title: "Menuiseries intérieures", desc: "Cloisons, portes intérieures, placards, escaliers — pour aménager vos espaces avec cohérence." },
              { title: "Mobilier sur mesure", desc: "Bibliothèques, cuisines, dressings, meubles TV — conçus et fabriqués dans notre atelier." },
              { title: "Intégration harmonieuse", desc: "Chaque élément est pensé pour s'intégrer parfaitement au bâti existant, en termes de dimensions, de teintes et de style." },
            ].map((item, i) => (
              <AnimatedReveal key={item.title} delay={i * 0.08}>
                <div className="p-8 bg-[#F5F1EA] border-l-2 border-[#B8793E]">
                  <h3 className="font-serif text-xl text-[#111111] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#8A8378] font-sans leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Un projet de menuiserie sur mesure ?"
        subtitle="Nous concevons et fabriquons vos menuiseries en atelier pour une intégration parfaite."
        primaryCta={{ label: "Parler de mon projet", href: "/contact" }}
      />
    </>
  );
}
