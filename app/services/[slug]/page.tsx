import { notFound } from "next/navigation";
import { services } from "@/lib/content";
import { ServiceDetail } from "@/components/services";
import { pageMetadata } from "@/lib/metadata";
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return pageMetadata({ title: service.title.sq, description: service.description.sq, path: `/services/${service.slug}` });
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return <ServiceDetail slug={service.slug} />;
}
