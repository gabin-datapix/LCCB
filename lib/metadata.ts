import type { Metadata } from "next";
import { COMPANY } from "./content";

const baseUrl = "https://www.lccb-44.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "LCCB — Charpente & construction bois à Sautron près de Nantes",
    template: "%s | LCCB — Charpente & Concept Bois",
  },
  description:
    "Depuis 2005, LCCB conçoit, fabrique et pose des charpentes, ossatures bois, couvertures, menuiseries et ouvrages de zinguerie sur mesure à Sautron, Nantes et en Loire-Atlantique.",
  keywords: [
    "charpentier Sautron",
    "charpente Sautron",
    "charpentier Nantes",
    "construction bois Nantes",
    "ossature bois Nantes",
    "ossature bois Sautron",
    "extension bois Loire-Atlantique",
    "surélévation bois Nantes",
    "couverture Sautron",
    "menuiserie bois Nantes",
    "zinguerie Loire-Atlantique",
    "entreprise charpente Loire-Atlantique",
    "atelier bois Sautron",
    "LCCB",
    "Leboucher Charpente",
  ],
  authors: [{ name: "LCCB — Leboucher Charpente & Concept Bois" }],
  creator: "LCCB",
  publisher: "LCCB",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: baseUrl,
    siteName: "LCCB — Leboucher Charpente & Concept Bois",
    title: "LCCB — Charpente & construction bois à Sautron près de Nantes",
    description:
      "Depuis 2005, LCCB conçoit, fabrique et pose des charpentes, ossatures bois, couvertures, menuiseries et ouvrages de zinguerie sur mesure à Sautron, Nantes et en Loire-Atlantique.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LCCB — Charpente & construction bois",
    description: "Entreprise artisanale à Sautron, near Nantes. Charpente, ossature bois, couverture, menuiserie, zinguerie.",
  },
};

export function buildMetadata(overrides: Partial<Metadata>): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...(overrides.openGraph || {}),
    },
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.fullName,
  alternateName: COMPANY.name,
  description:
    "Entreprise artisanale spécialisée dans la charpente traditionnelle, la construction ossature bois, la couverture, la menuiserie et la zinguerie. Fondée en 2005 par Renan Leboucher, compagnon du Tour de France.",
  url: `https://${COMPANY.contact.website}`,
  telephone: COMPANY.contact.phone,
  email: COMPANY.contact.email,
  foundingDate: "2005",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 11 },
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.street,
    postalCode: COMPANY.address.zipCode,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.region,
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "47.2734",
    longitude: "-1.6618",
  },
  areaServed: [
    { "@type": "City", name: "Sautron" },
    { "@type": "City", name: "Nantes" },
    { "@type": "AdministrativeArea", name: "Loire-Atlantique" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Savoir-faire bois",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Charpente traditionnelle" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Construction ossature bois" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Couverture" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Menuiserie" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Zinguerie" } },
    ],
  },
};
