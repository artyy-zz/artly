import { Portfolio } from "@/components/portfolio";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({ title: "Portfolio", description: "Eksploro website, logo, fushata social media dhe materiale grafike të krijuara nga Artly.", path: "/portfolio" });
export default function Page() {
  return <Portfolio />;
}
