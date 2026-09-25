import { concepts, type Concept } from "./showcase";
export type Locale = "sq" | "en";
export type Copy = { sq: string; en: string };
export const c = (sq: string, en: string): Copy => ({ sq, en });
export const projectTag = (tag: string): Copy => ({
  "Graphic design": c("Dizajn grafik", "Graphic design"),
  Management: c("Menaxhim social media", "Social media management"),
}[tag] ?? c(tag, tag));
export const services = [
  {
    "slug": "websites",
    "icon": "Monitor",
    "title": {
      "sq": "Website",
      "en": "Websites"
    },
    "description": {
      "sq": "Faqe të shpejta, të qarta dhe të menduara për klientët tuaj.",
      "en": "Fast, clear websites built around your customers."
    },
    "price": 490
  },
  {
    "slug": "logo-design",
    "icon": "PenTool",
    "title": {
      "sq": "Dizajn logoje",
      "en": "Logo design"
    },
    "description": {
      "sq": "Shenja origjinale që i japin biznesit tuaj një karakter të dallueshëm.",
      "en": "Original marks that give your business a distinctive character."
    },
    "price": 150
  },
  {
    "slug": "social-management",
    "icon": "MessageCircle",
    "title": {
      "sq": "Menaxhim social media",
      "en": "Social media management"
    },
    "description": {
      "sq": "Planifikim, publikim dhe kujdes i vazhdueshëm për komunitetin tuaj.",
      "en": "Planning, publishing and ongoing care for your community."
    },
    "price": 250
  },
  {
    "slug": "graphic-design",
    "icon": "Layers",
    "title": {
      "sq": "Dizajn grafik",
      "en": "Graphic design"
    },
    "description": {
      "sq": "Nga postimi te posteri: komunikim vizual i punuar për çdo format.",
      "en": "From posts to posters: visual communication crafted for every format."
    },
    "price": 60
  }
] as const;
export type ServiceSlug = (typeof services)[number]["slug"];
export interface Project {
  id: string;
  name: string;
  type: string;
  color: string;
  ink: string;
  category: Copy;
  title: Copy;
  description: Copy;
  tags: readonly string[];
  artworkKind?: string;
  service?: ServiceSlug;
}
export function conceptProject(b: Concept): Project {
  return {
    id: b.id,
    name: b.name,
    type: b.type,
    color: b.color,
    ink: b.ink,
    category: c(b.categorySq, b.category),
    title: c(b.sq, b.line),
    description: c(
      b.approachSq ??
        b.sq +
          " Identiteti ndërtohet rreth një shenje origjinale, tipografisë " +
          b.font +
          " dhe një palete të koordinuar. Përvoja digjitale dhe materialet e fushatës e zbatojnë të njëjtën ide në formate të ndryshme.",
      b.approach ??
        b.line +
          " An original mark, " +
          b.font +
          " typography, and a coordinated palette establish the identity. The digital experience and campaign materials carry that same idea across different formats.",
    ),
    tags: [
      "Logo",
      ...(b.web ? ["Website"] : []),
      
      ...(b.social ? ["Social media"] : []),
      ...(b.menu ? ["Menu"] : []),
      ...(b.poster ? ["Poster"] : []),
    ],
  };
}
export const projects: Project[] = concepts
  .filter((b) => b.brand)
  .map(conceptProject);
// Set verified studio contact destinations before launch. Never invent contact details.
export const contactDetails: {
  email: string | null;
  instagram: string | null;
  whatsapp: string | null;
} = { email: null, instagram: null, whatsapp: null };
export const pricing = {
  extraPage: 45,
  bilingual: 120,
  animations: 100,
  contactForm: 40,
  shop: 500,
  custom: 700,
  rangeMultiplier: 1.4,
};
