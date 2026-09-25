import { c, pricing, services, type Copy, type ServiceSlug } from "./content";
export type ScopeOption = { id: string; label: Copy; extra: number };
export type QuoteServiceSlug = ServiceSlug | "other";
export const otherQuoteService = { slug: "other", title: c("Tjetër", "Other"), icon: "MessageCircle" } as const;
export const scopeOptions: Record<QuoteServiceSlug, ScopeOption[]> = {
  other: [{ id: "custom", label: c("Projekt i personalizuar", "Custom project"), extra: 0 }],
  websites: [
    {
      id: "business",
      label: c("Website biznesi", "Business website"),
      extra: 0,
    },
    {
      id: "shop",
      label: c("Dyqan online", "Online shop"),
      extra: pricing.shop,
    },
    { id: "landing", label: c("Landing page", "Landing page"), extra: 0 },
    {
      id: "custom",
      label: c("Website i personalizuar", "Custom website"),
      extra: pricing.custom,
    },
  ],
  "logo-design": [
    { id: "wordmark", label: c("Logo tipografike", "Wordmark"), extra: 0 },
    { id: "symbol", label: c("Simbol & emër", "Symbol & name"), extra: 70 },
    { id: "refresh", label: c("Rifreskim logoje", "Logo refresh"), extra: 30 },
  ],
  "social-management": [
    {
      id: "one",
      label: c("1 platformë · 8 postime/muaj", "1 platform · 8 posts/month"),
      extra: 0,
    },
    {
      id: "two",
      label: c("2 platforma · 12 postime/muaj", "2 platforms · 12 posts/month"),
      extra: 150,
    },
    {
      id: "three",
      label: c("3 platforma · 16 postime/muaj", "3 platforms · 16 posts/month"),
      extra: 300,
    },
  ],
  "graphic-design": [
    { id:"social", label:c("3 dizajne social media", "3 social media designs"), extra:30 },
    { id:"poster", label:c("Flyer / poster", "Flyer / poster"), extra:0 },
    { id:"menu", label:c("Menu njëfaqëshe", "Single-page menu"), extra:20 },
    { id:"promo", label:c("Material promocional", "Promotional material"), extra:40 },
    { id:"other", label:c("Dizajn tjetër vizual", "Other visual design"), extra:40 },
  ],
};
export const websiteExtras = [
  {
    id: "bilingual",
    label: c("Dy gjuhë (SQ / EN)", "Two languages (SQ / EN)"),
    price: pricing.bilingual,
  },
  {
    id: "animations",
    label: c("Animacione të personalizuara", "Custom animations"),
    price: pricing.animations,
  },
  {
    id: "contactForm",
    label: c("Formular kontakti", "Contact form"),
    price: pricing.contactForm,
  },
] as const;
export type EstimateInput = {
  service: QuoteServiceSlug;
  scope: string;
  pages: number;
  extras: string[];
};
export function estimate(input: EstimateInput) {
  if (input.service === "other") return { low: null, high: null, monthly: false };
  const service = services.find((s) => s.slug === input.service)!;
  const scope =
    scopeOptions[input.service].find((s) => s.id === input.scope) ??
    scopeOptions[input.service][0];
  const pages = Math.min(50, Math.max(1, Math.round(Number(input.pages) || 1)));
  const subtotal =
    service.price +
    scope.extra +
    (input.service === "websites"
      ? Math.max(0, pages - 5) * pricing.extraPage +
        websiteExtras
          .filter((e) => input.extras.includes(e.id))
          .reduce((sum, e) => sum + e.price, 0)
      : 0);
  return {
    low: subtotal,
    high: Math.ceil((subtotal * pricing.rangeMultiplier) / 10) * 10,
    monthly: input.service === "social-management",
  };
}
