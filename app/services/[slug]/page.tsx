import { notFound } from "next/navigation";
import { services } from "@/lib/content";
import { ServiceDetail } from "@/components/services";
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return {
    title: services.find((s) => s.slug === slug)?.title.sq ?? "Shërbimi",
  };
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
