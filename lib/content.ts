// Données centralisées LCCB

export const COMPANY = {
  name: "LCCB",
  fullName: "Leboucher Charpente & Concept Bois",
  legal: "SARL",
  founded: 2005,
  founder: "Renan Leboucher",
  address: {
    street: "52 rue de la Pépinière",
    zipCode: "44880",
    city: "Sautron",
    region: "Loire-Atlantique",
    country: "France",
  },
  contact: {
    phone: "02 51 71 82 17",
    mobile: "06 19 69 79 24",
    fax: "02 40 63 88 57",
    email: "contact@lccb-44.com",
    website: "www.lccb-44.com",
  },
  stats: [
    { value: "2005", label: "Année de création", suffix: "" },
    { value: "20", label: "Ans d'expérience", suffix: "ans" },
    { value: "11", label: "Personnes dans l'équipe", suffix: "pers." },
    { value: "4000", label: "m² de site de production", suffix: "m²" },
    { value: "650", label: "m² d'ateliers", suffix: "m²" },
    { value: "12", label: "m de longueur max des murs ossature bois", suffix: "m" },
  ],
  team: {
    size: 11,
    description: "Une équipe soudée, structurée autour de la transmission et de la qualité d'exécution.",
    members: [
      {
        name: "Renan Leboucher",
        role: "Gérant & Bureau d'études",
        description: "Après 10 ans de Tour de France compagnon, Renan fonde LCCB en 2005. Il assure la relation client, les études de faisabilité, les plans et le suivi chantier.",
      },
      {
        name: "Responsable administration",
        role: "Administration & Gestion",
        description: "Plus de 40 ans d'expérience dans la gestion d'entreprise artisanale.",
      },
      {
        name: "3 Chefs d'équipe",
        role: "Encadrement chantier",
        description: "Chaque chef supervise une équipe composée d'un ouvrier qualifié et d'un apprenti.",
      },
      {
        name: "3 Apprentis",
        role: "Formation en alternance",
        description: "LCCB forme en permanence trois apprentis, perpétuant la tradition de transmission du compagnonnage.",
      },
    ],
  },
  certifications: [
    { name: "PEFC", description: "Bois issu de forêts gérées durablement" },
    { name: "Garantie décennale", description: "Protection sur 10 ans de vos ouvrages" },
    { name: "Responsabilité civile", description: "Couverture complète de nos interventions" },
    { name: "Formation continue", description: "Équipe formée aux dernières techniques" },
    { name: "Matières premières sélectionnées", description: "Approvisionnement rigoureux et traçable" },
  ],
};

export const SERVICES = [
  {
    id: "charpente-traditionnelle",
    slug: "charpente-traditionnelle",
    image: "/images/charpente-interieure-premium.png",
    title: "Charpente traditionnelle",
    shortTitle: "Charpente",
    tagline: "L'art du bois dans les règles de l'art",
    description:
      "De la rénovation d'une charpente existante à la création d'un ouvrage complet, LCCB conçoit et fabrique des charpentes traditionnelles sur mesure, adaptées aux contraintes techniques et esthétiques de chaque projet.",
    longDescription:
      "LCCB conçoit et fabrique des charpentes traditionnelles sur mesure pour les projets de rénovation, d'extension, de surélévation ou de construction complète. Chaque ouvrage est étudié en fonction des contraintes du chantier, du bâti existant et des objectifs du client. Le savoir-faire compagnon de Renan Leboucher, combiné aux outils de conception CAO/DAO, garantit des assemblages précis, durables et esthétiquement cohérents.",
    benefits: [
      "Étude de faisabilité incluse",
      "Fabrication sur mesure adaptée au chantier",
      "Maîtrise des techniques traditionnelles",
      "Précision des assemblages",
      "Solidité et durabilité garanties",
      "Expertise compagnon transmise",
    ],
    projectTypes: [
      "Extensions et agrandissements",
      "Surélévations",
      "Maisons complètes",
      "Rénovation de charpentes existantes",
      "Ouvrages sur mesure ambitieux",
    ],
    imagePlaceholder: "charpente-traditionnelle",
    color: "#5A3921",
  },
  {
    id: "ossature-bois",
    slug: "ossature-bois",
    image: "/images/chantier-ossature-bois-avec-plans-au-premier-plan.png",
    title: "Construction ossature bois",
    shortTitle: "Ossature bois",
    tagline: "Préfabrication de précision, chantier maîtrisé",
    description:
      "Grâce à son atelier dédié, LCCB fabrique des éléments d'ossature bois complets et précis, permettant de réduire les délais sur chantier tout en garantissant une qualité d'exécution constante.",
    longDescription:
      "Grâce à son atelier dédié à l'ossature bois, LCCB fabrique des éléments précis, propres et rapides à poser. Les murs peuvent être préparés jusqu'à 12 mètres de long, avec bardage et isolation intégrés, afin de limiter les délais et les nuisances sur chantier. LCCB intervient sur le neuf, la rénovation, les extensions et les surélévations, en collaboration étroite avec les architectes.",
    benefits: [
      "Murs fabriqués en atelier jusqu'à 12 m de long",
      "Bardage et isolation intégrés en atelier",
      "Chantier propre et rapide",
      "Déchets maîtrisés en atelier",
      "Meilleure précision d'exécution",
      "Collaboration avec votre architecte",
    ],
    projectTypes: [
      "Construction neuve",
      "Rénovation et réhabilitation",
      "Extensions et agrandissements",
      "Surélévations",
      "Maisons complètes ossature bois",
    ],
    imagePlaceholder: "ossature-bois",
    color: "#1F3A2E",
  },
  {
    id: "couverture",
    slug: "couverture",
    image: "/images/couverture-premium.png",
    title: "Couverture",
    shortTitle: "Couverture",
    tagline: "Protection durable, intervention maîtrisée",
    description:
      "LCCB intervient sur les travaux de couverture pour protéger durablement les bâtiments, assurer l'étanchéité des toitures et accompagner les projets de rénovation comme de construction.",
    longDescription:
      "La couverture est l'enveloppe protectrice de tout bâtiment. LCCB assure rénovation, remplacement et entretien de toitures avec réactivité et expertise. Chaque intervention commence par un diagnostic précis pour garantir une solution adaptée et durable. La bonne coordination avec les autres corps d'état fait partie de notre méthode de travail.",
    benefits: [
      "Diagnostic précis avant intervention",
      "Réactivité et délais maîtrisés",
      "Protection durable du bâtiment",
      "Coordination avec les autres corps d'état",
      "Conseils sur les matériaux adaptés",
    ],
    projectTypes: [
      "Rénovation de toiture",
      "Remplacement complet",
      "Entretien et réparations",
      "Étanchéité et isolation",
      "Couverture de construction neuve",
    ],
    imagePlaceholder: "couverture",
    color: "#8A8378",
  },
  {
    id: "menuiserie",
    slug: "menuiserie",
    image: "/images/menuiserie-interieure-escalier-sur-mesure.png",
    title: "Menuiserie",
    shortTitle: "Menuiserie",
    tagline: "Sur mesure, harmonie avec le bâti",
    description:
      "LCCB réalise des menuiseries intérieures et extérieures ainsi que du mobilier sur mesure, avec une attention particulière portée à l'intégration dans le bâti existant.",
    longDescription:
      "La menuiserie LCCB, c'est l'attention portée aux détails et à l'harmonie avec le bâti existant. Menuiseries extérieures (fenêtres, portes, volets) ou intérieures (aménagements, mobilier), chaque réalisation est conçue sur mesure pour s'intégrer parfaitement à l'architecture et aux souhaits du client.",
    benefits: [
      "Fabrication sur mesure",
      "Harmonie avec l'existant",
      "Finitions soignées",
      "Cohérence esthétique garantie",
      "Bois de qualité sélectionné",
    ],
    projectTypes: [
      "Menuiseries extérieures (fenêtres, portes, volets)",
      "Menuiseries intérieures (cloisons, aménagements)",
      "Mobilier sur mesure",
      "Éléments intégrés au bâti existant",
    ],
    imagePlaceholder: "menuiserie",
    color: "#B8793E",
  },
  {
    id: "zinguerie",
    slug: "zinguerie",
    image: "/images/zinguerie-detail-zinc.png",
    title: "Zinguerie",
    shortTitle: "Zinguerie",
    tagline: "Étanchéité et finitions, sans compromis",
    description:
      "La zinguerie assure la protection des points sensibles du bâtiment. LCCB façonne et pose les éléments nécessaires à l'étanchéité, à l'évacuation des eaux et à la durabilité des ouvrages.",
    longDescription:
      "La zinguerie est le complément naturel de la couverture. Elle assure l'étanchéité entre la toiture et les parties maçonnées, protège les façades et gère l'évacuation des eaux pluviales. LCCB maîtrise découpe, cintrage et façonnage pour des finitions précises et durables qui valorisent chaque ouvrage.",
    benefits: [
      "Étanchéité parfaite des points de jonction",
      "Protection durable des façades",
      "Finitions précises et soignées",
      "Savoir-faire technique reconnu",
      "Complément naturel de la couverture",
    ],
    projectTypes: [
      "Noues, faîtières et arêtiers",
      "Chéneaux et gouttières",
      "Habillages de façade",
      "Protection des points de jonction",
      "Éléments décoratifs en zinc",
    ],
    imagePlaceholder: "zinguerie",
    color: "#A7B89A",
  },
];

export const WORKSHOP = {
  site: "4 000 m²",
  atelier: "650 m²",
  location: "Zone artisanale de Sautron",
  ateliers: [
    {
      name: "Atelier charpente & finition",
      description: "Dédié à la charpente traditionnelle, à la menuiserie, au façonnage et à la zinguerie.",
    },
    {
      name: "Atelier ossature bois",
      description: "Spécialisé dans la fabrication d'éléments d'ossature bois, avec table de montage permettant des murs jusqu'à 12 m de long.",
    },
  ],
  equipment: [
    {
      name: "Règle numérique",
      description: "Optimisation et précision des débits de bois.",
    },
    {
      name: "Scie déligneuse numérique",
      description: "Coupes précises et répétables pour une fabrication en série.",
    },
    {
      name: "Table de montage ossature bois",
      description: "Fabrication de murs jusqu'à 12 m de long, avec intégration du bardage et de l'isolation.",
    },
    {
      name: "Pont roulant",
      description: "Manutention sécurisée des éléments préfabriqués lourds.",
    },
    {
      name: "Cadwork (CAO/DAO)",
      description: "Logiciel de conception 3D spécialisé charpente, pour des plans précis et des études de faisabilité.",
    },
    {
      name: "MDBAT",
      description: "Vérification de la résistance des matériaux et des calculs de structure.",
    },
    {
      name: "4 véhicules de transport",
      description: "Livraison des éléments préfabriqués sur chantier. Partenaire transporteur pour les grandes pièces.",
    },
  ],
  benefits: [
    "Meilleure anticipation des contraintes chantier",
    "Plus grande précision d'exécution",
    "Chantier plus propre, moins de nuisances",
    "Délais de pose réduits",
    "Déchets traités et valorisés en atelier",
    "Sécurité renforcée sur le chantier",
    "Meilleure coordination avec les autres corps d'état",
  ],
};

export const PROJECTS = [
  {
    id: 0,
    featured: true,
    title: "La plus grande pièce d'échecs du monde",
    type: "hors-norme",
    typeLabel: "Projet hors norme",
    location: "Sautron",
    description: "Fabrication d'un roi monumental en bois de près de 6,32 m de haut, conçu sur Cadwork et réalisé à partir de Douglas naturel.",
    longDescription: "Inaugurée à Sautron, cette pièce d'échecs monumentale représente un roi de près de 6,32 m de haut. Le projet a nécessité plus de 700 heures d'études et de conception numérique sur Cadwork, près de 4 tonnes de bois, 9,36 m³ de bois brut et 585 mètres linéaires de Douglas naturel. Réalisée en atelier avec une forte exigence technique, elle illustre la capacité de LCCB à mener des projets bois complexes, uniques et ambitieux.",
    tags: ["Record du monde", "Cadwork", "Douglas naturel"],
    image: "/images/piece-echec.png",
    stats: [
      { value: "6,32 m", label: "de hauteur" },
      { value: "≈ 4 t", label: "de bois" },
      { value: "700 h+", label: "d'études CAO" },
      { value: "9,36 m³", label: "de bois brut" },
      { value: "585 ml", label: "de Douglas naturel" },
      { value: "4 ans", label: "de projet" },
    ],
  },
  {
    id: 1,
    title: "Extension bois contemporaine",
    type: "ossature-bois",
    typeLabel: "Ossature bois",
    location: "Sautron",
    description: "Extension de 40 m² en ossature bois, bardage Douglas naturel, isolation intégrée en atelier.",
    tags: ["Extension", "Ossature bois"],
    image: "/images/extension-bois-contemporaine.png",
  },
  {
    id: 2,
    title: "Surélévation ossature bois",
    type: "ossature-bois",
    typeLabel: "Ossature bois",
    location: "Nantes",
    description: "Surélévation d'une maison de ville, deux niveaux en ossature bois préfabriquée.",
    tags: ["Surélévation", "Ossature bois"],
    image: "/images/surelevation-bois.png",
  },
  {
    id: 3,
    title: "Charpente traditionnelle rénovée",
    type: "charpente",
    typeLabel: "Charpente",
    location: "Orvault",
    description: "Remplacement complet d'une charpente ancienne, conservation de l'aspect traditionnel avec des matériaux durables.",
    tags: ["Charpente", "Rénovation"],
    image: "/images/charpente-interieure-apparente.png",
  },
  {
    id: 4,
    title: "Maison ossature bois",
    type: "ossature-bois",
    typeLabel: "Ossature bois",
    location: "Loire-Atlantique",
    description: "Construction complète d'une maison de 120 m² en ossature bois, isolation et bardage intégrés en atelier.",
    tags: ["Maison", "Ossature bois", "Neuf"],
    image: "/images/maison-bois-contemporaine.png",
  },
  {
    id: 5,
    title: "Rénovation de couverture",
    type: "couverture",
    typeLabel: "Couverture",
    location: "Couëron",
    description: "Remplacement complet d'une toiture ardoise, avec reprise de la charpente et travaux de zinguerie associés.",
    tags: ["Couverture", "Rénovation"],
    image: "/images/couverture-premium.png",
  },
  {
    id: 6,
    title: "Menuiserie intérieure sur mesure",
    type: "menuiserie",
    typeLabel: "Menuiserie",
    location: "Nantes",
    description: "Aménagement complet d'un intérieur : bibliothèque, rangements intégrés et meuble TV en chêne massif.",
    tags: ["Menuiserie", "Mobilier sur mesure"],
    image: "/images/menuiserie-interieure-escalier-sur-mesure.png",
  },
  {
    id: 7,
    title: "Zinguerie de finition",
    type: "zinguerie",
    typeLabel: "Zinguerie",
    location: "Sautron",
    description: "Pose de chéneaux, gouttières et habillages zinc sur une maison individuelle rénovée.",
    tags: ["Zinguerie", "Finition"],
    image: "/images/zinguerie-detail-zinc.png",
  },
  {
    id: 8,
    title: "Extension familiale",
    type: "ossature-bois",
    typeLabel: "Ossature bois",
    location: "Saint-Herblain",
    description: "Extension de 60 m² comprenant une cuisine ouverte et un salon, en ossature bois avec terrasse intégrée.",
    tags: ["Extension", "Ossature bois", "Terrasse"],
    image: "/images/extension-bois-terminee.png",
  },
];

export const WOOD_ARGUMENTS = [
  "Longévité et solidité exceptionnelles",
  "Forte résistance mécanique",
  "Excellentes performances d'isolation thermique",
  "Économies d'énergie sur la durée",
  "Comportement sécurisant en cas d'incendie : combustion lente, peu de gaz toxiques",
  "Matériau écologique et renouvelable",
  "Bois issu de filières certifiées PEFC",
  "Déchets réutilisés localement",
  "Économique sur le long terme",
];

export const NAVIGATION = [
  { label: "Savoir-faire", href: "/savoir-faire" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Atelier", href: "/atelier" },
  { label: "L'entreprise", href: "/entreprise" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_SERVICES = [
  { label: "Charpente traditionnelle", href: "/savoir-faire/charpente-traditionnelle" },
  { label: "Construction ossature bois", href: "/savoir-faire/ossature-bois" },
  { label: "Couverture", href: "/savoir-faire/couverture" },
  { label: "Menuiserie", href: "/savoir-faire/menuiserie" },
  { label: "Zinguerie", href: "/savoir-faire/zinguerie" },
];
