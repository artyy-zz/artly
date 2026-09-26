import { Contact } from "@/components/contact";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata({ title: "Kontakt", description: "Kontakto Artly direkt me telefon, WhatsApp ose Viber.", path: "/contact" });
export default function Page() {
  return <Contact />;
}
