import { Services } from "@/components/services";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({ title: "Shërbimet", description: "Website, dizajn logoje dhe dizajn grafik me social media nga Artly.", path: "/services" });
export default function Page() {
  return <Services />;
}
