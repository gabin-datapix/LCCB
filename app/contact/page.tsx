import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { COMPANY } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import ContactForm from "@/components/ui/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Contact LCCB — Charpentier bois à Sautron près de Nantes",
  description:
    "Contactez LCCB pour votre projet de charpente, ossature bois, couverture, menuiserie ou zinguerie à Sautron, Nantes et Loire-Atlantique. Étude de faisabilité gratuite.",
  openGraph: {
    title: "Contact | LCCB — Charpente & Concept Bois",
    description: "Demandez une étude de faisabilité pour votre projet bois. LCCB, Sautron (44880).",
  },
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlez-nous de votre projet"
        subtitle="Chaque projet mérite une attention particulière. Décrivez-nous votre besoin, nous vous répondrons rapidement pour en discuter."
        breadcrumb={[{ label: "Contact" }]}
        size="sm"
      />

      <section className="py-24 px-6 bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Form — 3/5 */}
            <div className="lg:col-span-3">
              <AnimatedReveal>
                <div className="mb-10">
                  <div className="flex items-center gap-3 text-[#B8793E] text-xs tracking-[0.25em] uppercase font-sans mb-3">
                    <span className="w-8 h-px bg-[#B8793E]" />
                    Formulaire de contact
                  </div>
                  <h2 className="font-serif text-2xl text-[#111111]">
                    Décrivez votre projet en quelques étapes
                  </h2>
                </div>
                <ContactForm />
              </AnimatedReveal>
            </div>

            {/* Info — 2/5 */}
            <div className="lg:col-span-2">
              <AnimatedReveal delay={0.2}>
                <div className="space-y-10">

                  {/* Coordonnées */}
                  <div>
                    <h3 className="font-serif text-xl text-[#111111] mb-6">Coordonnées</h3>
                    <ul className="space-y-5">
                      <li>
                        <a
                          href={`tel:${COMPANY.contact.phone.replace(/\s/g, "")}`}
                          className="flex items-start gap-4 group"
                        >
                          <div className="w-10 h-10 border border-[#D8C5A5] flex items-center justify-center shrink-0 group-hover:border-[#B8793E] transition-colors duration-300">
                            <Phone size={16} className="text-[#B8793E]" />
                          </div>
                          <div>
                            <p className="text-xs text-[#8A8378] font-sans mb-0.5">Téléphone fixe</p>
                            <p className="text-sm text-[#111111] font-sans">{COMPANY.contact.phone}</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href={`tel:${COMPANY.contact.mobile.replace(/\s/g, "")}`}
                          className="flex items-start gap-4 group"
                        >
                          <div className="w-10 h-10 border border-[#D8C5A5] flex items-center justify-center shrink-0 group-hover:border-[#B8793E] transition-colors duration-300">
                            <Phone size={16} className="text-[#B8793E]" />
                          </div>
                          <div>
                            <p className="text-xs text-[#8A8378] font-sans mb-0.5">Mobile</p>
                            <p className="text-sm text-[#111111] font-sans">{COMPANY.contact.mobile}</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href={`mailto:${COMPANY.contact.email}`}
                          className="flex items-start gap-4 group"
                        >
                          <div className="w-10 h-10 border border-[#D8C5A5] flex items-center justify-center shrink-0 group-hover:border-[#B8793E] transition-colors duration-300">
                            <Mail size={16} className="text-[#B8793E]" />
                          </div>
                          <div>
                            <p className="text-xs text-[#8A8378] font-sans mb-0.5">Email</p>
                            <p className="text-sm text-[#111111] font-sans">{COMPANY.contact.email}</p>
                          </div>
                        </a>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-10 h-10 border border-[#D8C5A5] flex items-center justify-center shrink-0">
                          <MapPin size={16} className="text-[#B8793E]" />
                        </div>
                        <div>
                          <p className="text-xs text-[#8A8378] font-sans mb-0.5">Adresse</p>
                          <address className="not-italic text-sm text-[#111111] font-sans leading-relaxed">
                            {COMPANY.address.street}<br />
                            {COMPANY.address.zipCode} {COMPANY.address.city}<br />
                            {COMPANY.address.region}
                          </address>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Horaires */}
                  <div className="border-t border-[#D8C5A5]/50 pt-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock size={14} className="text-[#B8793E]" />
                      <h3 className="font-serif text-lg text-[#111111]">Horaires d&apos;accueil</h3>
                    </div>
                    <div className="space-y-2 text-sm font-sans text-[#8A8378]">
                      <div className="flex justify-between">
                        <span>Lundi — Vendredi</span>
                        <span className="text-[#111111]">8h — 12h / 14h — 17h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Samedi</span>
                        <span className="text-[#111111]">Sur rendez-vous</span>
                      </div>
                    </div>
                  </div>

                  {/* Zone d'intervention */}
                  <div className="border-t border-[#D8C5A5]/50 pt-8">
                    <h3 className="font-serif text-lg text-[#111111] mb-4">Zone d&apos;intervention</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Sautron", "Nantes", "Loire-Atlantique", "Pays de la Loire", "Orvault", "Saint-Herblain", "Couëron"].map((zone) => (
                        <span key={zone} className="text-xs px-3 py-1.5 border border-[#D8C5A5] text-[#8A8378] font-sans">
                          {zone}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <div className="border-t border-[#D8C5A5]/50 pt-8">
                    <h3 className="font-serif text-lg text-[#111111] mb-4">Nous trouver</h3>
                    <div className="aspect-[4/3] bg-[#D8C5A5]/30 border border-[#D8C5A5] flex items-center justify-center relative overflow-hidden">
                      {/* Map placeholder — remplacer par un iframe Google Maps */}
                      <div className="text-center">
                        <MapPin size={24} className="text-[#B8793E] mx-auto mb-2" />
                        <p className="text-xs text-[#8A8378] font-sans">
                          52 rue de la Pépinière<br />
                          44880 Sautron
                        </p>
                        <a
                          href="https://maps.google.com/?q=52+rue+de+la+Pepiniere+44880+Sautron"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-3 text-xs text-[#B8793E] underline font-sans"
                        >
                          Ouvrir dans Google Maps →
                        </a>
                      </div>
                      {/* TODO: Remplacer par <iframe src="https://maps.google.com/maps?..." /> */}
                    </div>
                  </div>

                </div>
              </AnimatedReveal>
            </div>

          </div>
        </div>
      </section>

      {/* CTA téléphone */}
      <section className="py-14 px-6 bg-[#1F3A2E]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#A7B89A] font-sans text-sm mb-3">Vous préférez nous appeler directement ?</p>
          <a
            href={`tel:${COMPANY.contact.phone.replace(/\s/g, "")}`}
            className="font-serif text-3xl text-[#F5F1EA] hover:text-[#B8793E] transition-colors duration-300"
          >
            {COMPANY.contact.phone}
          </a>
        </div>
      </section>
    </>
  );
}
