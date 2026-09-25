import { Contact } from "@/components/contact";
import { services } from "@/lib/content";
export const metadata = { title: "Kontakt — Fillo projektin" };
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; concept?: string }>;
}) {
  const query = await searchParams;
  const service = query.service === "other" ? "other" : services.find((s) => s.slug === query.service)?.slug;
  return (
    <Contact
      key={`${service ?? "default"}-${query.concept ?? ""}`}
      initialService={service}
      concept={query.concept}
    />
  );
}
