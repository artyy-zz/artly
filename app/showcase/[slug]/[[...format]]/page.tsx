import { notFound } from "next/navigation";
import { concepts, findConcept } from "@/lib/showcase";
import { WebsiteDesign } from "@/components/showcase/websites";
import {
  SocialDesign,
  MenuDesign,
  PosterDesign,
  IdentityBoard,
  CreativeDesign,
} from "@/components/showcase/artworks";
import "@/app/showcase.css";
import "@/app/artwork-designs.css";
export function generateStaticParams() {
  return concepts.flatMap((b) => [
    ...(b.web ? [{ slug: b.id, format: [] }] : []),
    ...(b.social ? [{ slug: b.id, format: ["social"] }] : []),
    ...(b.creative ? [{ slug: b.id, format: ["creative"] }] : []),
    ...(b.brand ? [{ slug: b.id, format: ["identity"] }] : []),
    ...(b.menu ? [{ slug: b.id, format: ["menu"] }] : []),
    ...(b.poster ? [{ slug: b.id, format: ["poster"] }] : []),
  ]);
}
export const dynamicParams = true;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return {
    title: `${findConcept(slug)?.name ?? "Design"} — Artly Concept`,
    robots: { index: false, follow: false },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; format?: string[] }>;
}) {
  const { slug, format } = await params;
  const b = findConcept(slug);
  if (!b || (format && format.length > 1)) notFound();
  const kind = format?.[0];
  if (!kind && b.web) return <WebsiteDesign b={b} />;
  if (kind === "social" && b.social) return <SocialDesign b={b} />;
  if (kind === "identity" && b.brand) return <IdentityBoard b={b} />;
  if (kind === "menu" && b.menu) return <MenuDesign b={b} />;
  if (kind === "poster" && b.poster) return <PosterDesign b={b} />;
  if (kind === "creative" && b.creative) return <CreativeDesign b={b} />;
  notFound();
}
