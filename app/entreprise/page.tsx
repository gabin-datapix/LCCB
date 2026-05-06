import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { COMPANY } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "L'entreprise LCCB — Charpentier bois à Sautron depuis 2005",
  description:
    "LCCB, fondée en 2005 par Renan Leboucher, compagnon du Tour de France. 11 personnes, 20 ans d'expérience, atelier de 650 m² à Sautron. Histoire, équipe et valeurs.",
  openGraph: {
    title: "L'entreprise LCCB | Charpente & Concept Bois",
    description: "Histoire, équipe et valeurs de LCCB, charpentier artisanal à Sautron depuis 2005.",
  },
});

const VALUES = [
  { title: "Transmission", desc: "3 apprentis formés en permanence. Le geste métier se transmet de compagnon à apprenti, depuis la création de l'entreprise." },
  { title: "Précision", desc: "Du bureau d'études à la pose, chaque étape est conduite avec le même souci du détail et de la qualité d'exécution." },
  { title: "Proximité", desc: "Renan reste l'interlocuteur principal du client, du premier échange jusqu'à la réception des travaux." },
  { title: "Confiance", desc: "Des engagements tenus : délais, budgets, qualité. Une relation durable avec particuliers, architectes et maîtres d'œuvre." },
  { title: "Modernité", desc: "CAO/DAO, Cadwork, préfabrication numérique — la tradition compagnon au service des outils d'aujourd'hui." },
  { title: "Durabilité", desc: "Bois certifié PEFC, déchets valorisés, filières responsables. Un engagement pour une construction respectueuse de l'environnement." },
];

export default function EntreprisePage() {
  return (
    <>
      <PageHero
        eyebrow="L'entreprise"
        title="Une entreprise bois à taille humaine depuis 2005"
        subtitle="Fondée par un compagnon du Tour de France, LCCB associe depuis 20 ans tradition artisanale et outils de conception modernes."
        breadcrumb={[{ label: "L'entreprise" }]}
      />

      {/* Histoire du fondateur */}
      <section className="py-24 px-6 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Portrait placeholder */}
            <AnimatedReveal direction="left">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/equipe-en-atelier-ou-chantier.png"
                  alt="Renan Leboucher — Fondateur LCCB"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="font-serif text-xl text-[#F5F1EA]">Renan Leboucher</p>
                  <p className="text-sm text-[#A7B89A] font-sans">Fondateur & Gérant</p>
                </div>
                <div className="absolute top-6 right-6 border border-[#B8793E] px-3 py-1.5 bg-[#111111]/40 backdrop-blur-sm">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8793E] font-sans">Compagnon du Tour de France</span>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal direction="right">
              <div>
                <div className="flex items-center gap-3 text-[#B8793E] text-xs tracking-[0.25em] uppercase font-sans mb-5">
                  <span className="w-8 h-px bg-[#B8793E]" />
                  L&apos;histoire
                </div>
                <h2 className="font-serif text-display-md text-[#111111] leading-tight mb-8">
                  De compagnon à chef d&apos;entreprise
                </h2>
                <div className="space-y-5 text-[#8A8378] font-sans text-sm leading-relaxed">
                  <p>
                    Renan Leboucher a réalisé 10 ans de Tour de France compagnon, acquérant une maîtrise complète des techniques de construction, de charpente et de couverture pratiquées en France et à l&apos;étranger.
                  </p>
                  <p>
                    En 2005, il crée LCCB à Sautron avec une vision claire : moderniser le métier de charpentier en intégrant les outils numériques de conception — CAO/DAO, Cadwork, calculs de résistance avec MDBAT — sans renoncer à l&apos;exigence artisanale du compagnonnage.
                  </p>
                  <p>
                    Dès le départ, il établit un partenariat avec un architecte, positionnant LCCB comme un interlocuteur technique capable d&apos;accompagner des projets ambitieux.
                  </p>
                  <p>
                    Aujourd&apos;hui, Renan est l&apos;interlocuteur principal de chaque client : bureau d&apos;études, plans, faisabilité, relation client, suivi de chantier. Une présence totale, du premier échange à la réception.
                  </p>
                </div>

                {/* Timeline */}
                <div className="mt-10 space-y-4">
                  {[
                    { year: "~1995", event: "Début du Tour de France compagnon" },
                    { year: "2005", event: "Création de LCCB à Sautron" },
                    { year: "2005", event: "Premier partenariat avec un architecte" },
                    { year: "Dès le début", event: "Intégration de Cadwork (CAO/DAO)" },
                    { year: "Aujourd'hui", event: "11 personnes, 4 000 m² de site" },
                  ].map((item) => (
                    <div key={item.event} className="flex items-start gap-4">
                      <span className="text-xs text-[#B8793E] font-sans shrink-0 w-24">{item.year}</span>
                      <div className="flex items-center gap-3 flex-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8793E] shrink-0" />
                        <span className="text-sm text-[#111111] font-sans">{item.event}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section className="py-24 px-6 bg-[#1F3A2E]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <SectionTitle
              eyebrow="L'équipe"
              title="11 personnes, une seule exigence"
              subtitle="Une équipe structurée, où chacun joue un rôle précis, de la gestion administrative au geste sur chantier."
              light
            />
          </div>

          {/* Stats équipe */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { value: "11", label: "Personnes dans l'équipe", suffix: "" },
              { value: "3", label: "Chefs d'équipe expérimentés", suffix: "" },
              { value: "3", label: "Apprentis formés en permanence", suffix: "" },
              { value: "40", label: "ans d'expérience — responsable admin", suffix: "ans" },
            ].map((stat, i) => (
              <AnimatedReveal key={stat.label} delay={i * 0.1}>
                <AnimatedCounter value={stat.value} label={stat.label} suffix={stat.suffix} light delay={i * 0.15} />
              </AnimatedReveal>
            ))}
          </div>

          {/* Team cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY.team.members.map((member, i) => (
              <AnimatedReveal key={member.name} delay={i * 0.1}>
                <div className="border border-[#F5F1EA]/10 p-6 hover:border-[#B8793E]/40 transition-colors duration-300">
                  <div className="w-12 h-12 bg-[#B8793E]/20 mb-4 flex items-center justify-center">
                    <span className="font-serif text-xl text-[#B8793E]">{member.name[0]}</span>
                  </div>
                  <h3 className="font-serif text-lg text-[#F5F1EA] mb-1">{member.name}</h3>
                  <p className="text-xs text-[#B8793E] font-sans tracking-wide mb-3">{member.role}</p>
                  <p className="text-sm text-[#A7B89A] font-sans leading-relaxed">{member.description}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 px-6 bg-[#F5F1EA] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <Image
            src="/images/texture-bois-premium.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            aria-hidden="true"
          />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="mb-16">
            <SectionTitle
              eyebrow="Nos valeurs"
              title="Ce qui nous guide au quotidien"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((v, i) => (
              <AnimatedReveal key={v.title} delay={i * 0.1}>
                <div className="border-t-2 border-[#B8793E]/30 pt-6 hover:border-[#B8793E] transition-colors duration-300">
                  <h3 className="font-serif text-xl text-[#111111] mb-3">{v.title}</h3>
                  <p className="text-sm text-[#8A8378] font-sans leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-24 px-6 bg-[#D8C5A5]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionTitle
              eyebrow="Garanties & engagements"
              title="Des engagements concrets pour chaque projet"
              subtitle="LCCB s'engage sur la qualité, la sécurité et le respect de l'environnement à chaque intervention."
            />
            <AnimatedReveal delay={0.15}>
              <div className="space-y-4">
                {COMPANY.certifications.map((cert, i) => (
                  <div key={cert.name} className="flex items-start gap-5 p-5 bg-[#F5F1EA] border border-[#D8C5A5]/60">
                    <span className="font-serif text-2xl text-[#B8793E]/30 font-bold shrink-0 leading-none mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-serif text-base text-[#111111] mb-1">{cert.name}</p>
                      <p className="text-sm text-[#8A8378] font-sans">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Rencontrons-nous autour de votre projet"
        subtitle="Parlons ensemble de votre projet. Renan vous reçoit à l'atelier ou se déplace pour vous rencontrer."
        primaryCta={{ label: "Contacter LCCB", href: "/contact" }}
        secondaryCta={{ label: "Découvrir l'atelier", href: "/atelier" }}
      />
    </>
  );
}
