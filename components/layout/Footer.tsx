import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { COMPANY, NAVIGATION, FOOTER_SERVICES } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1F3A2E] text-[#F5F1EA]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="font-serif text-3xl font-bold text-[#F5F1EA]">LCCB</div>
              <div className="text-[9px] tracking-[0.25em] uppercase text-[#A7B89A] mt-1">
                Leboucher Charpente & Concept Bois
              </div>
            </div>
            <p className="text-[#F5F1EA]/60 text-sm leading-relaxed mb-6">
              Entreprise artisanale fondée en 2005, spécialisée dans la charpente, l&apos;ossature bois et la couverture à Sautron, près de Nantes.
            </p>
            <div className="flex items-center gap-2 text-[#A7B89A] text-xs">
              <span className="w-8 h-px bg-[#B8793E]" />
              <span>Depuis 2005</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#A7B89A] mb-6 font-sans">
              Savoir-faire
            </h3>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-sm text-[#F5F1EA]/60 hover:text-[#F5F1EA] transition-colors duration-300 group"
                  >
                    <ArrowRight size={12} className="text-[#B8793E] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#A7B89A] mb-6 font-sans">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-[#F5F1EA]/60 hover:text-[#F5F1EA] transition-colors duration-300 group"
                  >
                    <ArrowRight size={12} className="text-[#B8793E] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#A7B89A] mb-6 font-sans">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${COMPANY.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-sm text-[#F5F1EA]/60 hover:text-[#F5F1EA] transition-colors duration-300"
                >
                  <Phone size={14} className="mt-0.5 text-[#B8793E] shrink-0" />
                  <span>{COMPANY.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.contact.mobile.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-sm text-[#F5F1EA]/60 hover:text-[#F5F1EA] transition-colors duration-300"
                >
                  <Phone size={14} className="mt-0.5 text-[#B8793E] shrink-0" />
                  <span>{COMPANY.contact.mobile}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="flex items-start gap-3 text-sm text-[#F5F1EA]/60 hover:text-[#F5F1EA] transition-colors duration-300"
                >
                  <Mail size={14} className="mt-0.5 text-[#B8793E] shrink-0" />
                  <span>{COMPANY.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#F5F1EA]/60">
                <MapPin size={14} className="mt-0.5 text-[#B8793E] shrink-0" />
                <address className="not-italic leading-relaxed">
                  {COMPANY.address.street}<br />
                  {COMPANY.address.zipCode} {COMPANY.address.city}
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Certifications strip */}
      <div className="border-t border-[#F5F1EA]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-wrap items-center gap-6">
          {["PEFC", "Garantie décennale", "Responsabilité civile"].map((cert) => (
            <span
              key={cert}
              className="text-[10px] tracking-[0.15em] uppercase text-[#A7B89A] flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-[#B8793E]" />
              {cert}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#F5F1EA]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#F5F1EA]/30 font-sans">
            © {year} LCCB — Leboucher Charpente & Concept Bois. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-xs text-[#F5F1EA]/30 hover:text-[#F5F1EA]/60 transition-colors font-sans">
              Mentions légales
            </Link>
            <Link href="/contact" className="text-xs text-[#F5F1EA]/30 hover:text-[#F5F1EA]/60 transition-colors font-sans">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
