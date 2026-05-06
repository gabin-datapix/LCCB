import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Savoir-faire bois : charpente, ossature bois, couverture | LCCB",
  description:
    "Découvrez les 5 savoir-faire de LCCB : charpente traditionnelle, construction ossature bois, couverture, menuiserie et zinguerie à Sautron, Nantes et en Loire-Atlantique.",
  openGraph: {
    title: "Savoir-faire bois | LCCB — Charpente & Concept Bois",
    description: "Charpente, ossature bois, couverture, menuiserie, zinguerie. Fabrication en atelier à Sautron.",
  },
});

const METHOD_STEPS = [
  { n: "01", title: "Écoute du besoin", desc: "Nous prenons le temps de comprendre votre projet, vos contraintes et vos objectifs." },
  { n: "02", title: "Étude de faisabilité", desc: "Analyse technique et budgétaire pour valider la faisabilité de votre projet avant tout engagement." },
  { n: "03", title: "Conception et plans", desc: "Élaboration des plans avec nos logiciels CAO/DAO (Cadwork), vérification de la résistance des matériaux." },
  { n: "04", title: "Fabrication en atelier", desc: "Préparation et fabrication des éléments dans nos ateliers de 650 m² à Sautron, dans des conditions optimales." },
  { n: "05", title: "Transport et pose", desc: "Livraison et pose par nos équipes, avec une organisation chantier propre et rigoureuse." },
  { n: "06", title: "Suivi de chantier", desc: "Renan assure le suivi et reste votre interlocuteur unique jusqu'à la réception des travaux." },
];

export default function SavoirFairePage() {
  return (
    <>
      <PageHero
        eyebrow="Nos métiers"
        title="Cinq savoir-faire bois, une seule exigence"
        subtitle="De la charpente traditionnelle à la zinguerie, LCCB maîtrise l'ensemble de la chaîne constructive bois, depuis l'étude jusqu'à la pose."
        breadcrumb={[{ label: "Savoir-faire" }]}
      />

      {/* Services grid */}
      <section className="py-24 px-6 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.longDescription}
                href={`/savoir-faire/${service.slug}`}
                index={i}
                color={service.color}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Full-width decorative image */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedReveal>
            <div className="relative aspect-[21/7] overflow-hidden">
              <Image
                src="/images/fond-plans-techniques-cao.png"
                alt="Plans techniques CAO LCCB"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-[#1F3A2E]/40" />
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Méthode de travail */}
      <section className="py-24 px-6 bg-[#1F3A2E]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <SectionTitle
              eyebrow="Notre méthode"
              title="Du premier échange à la réception"
              subtitle="Un processus structuré pour des projets maîtrisés de bout en bout."
              light
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {METHOD_STEPS.map((step, i) => (
              <AnimatedReveal key={step.n} delay={i * 0.1}>
                <div className="border border-[#F5F1EA]/10 p-8 hover:border-[#B8793E]/40 transition-colors duration-300">
                  <div className="font-serif text-4xl text-[#B8793E]/40 font-bold mb-4">{step.n}</div>
                  <h3 className="font-serif text-xl text-[#F5F1EA] mb-3">{step.title}</h3>
                  <p className="text-sm text-[#A7B89A] font-sans leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Arguments bois */}
      <section className="py-24 px-6 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionTitle
              eyebrow="Pourquoi le bois"
              title="Un matériau d'exception, écologique et durable"
              subtitle="Le bois est l'un des matériaux de construction les plus anciens et les plus performants. Chez LCCB, nous travaillons exclusivement avec des bois certifiés PEFC, issus de forêts gérées durablement."
            />
            <AnimatedReveal delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Longévité et solidité exceptionnelles",
                  "Excellente isolation thermique",
                  "Comportement sécurisant en cas d'incendie",
                  "Matériau écologique et renouvelable",
                  "Bois PEFC certifié",
                  "Économique sur la durée",
                  "Faible empreinte carbone",
                  "Confort thermique et acoustique",
                ].map((arg, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#8A8378] font-sans">
                    <Check size={14} className="text-[#B8793E] shrink-0" />
                    {arg}
                  </div>
                ))}
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Parlez-nous de votre projet bois"
        subtitle="Chaque projet commence par une étude de faisabilité gratuite. Contactez Renan directement."
        primaryCta={{ label: "Demander une étude", href: "/contact" }}
        secondaryCta={{ label: "Voir nos réalisations", href: "/realisations" }}
      />
    </>
  );
}
