import Image from "next/image";
import { logo } from "@/lib/showcase";
import concepts from "@/lib/logo-collection.json";
export const metadata = {
  title: "Identity collection — Artly Concepts",
  robots: { index: false, follow: false },
};
export default function Page() {
  return (
    <div
      className="identity-contact-sheet"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))",
        gap: 12,
        padding: 12,
        background: "#d9d5cd",
      }}
    >
      {concepts.map((b) => (
        <figure
          key={b.id}
          style={{ margin: 0, background: b.color, position: "relative" }}
        >
          <Image
            src={logo(b.id,"presentation")}
            alt={`${b.name} logo`}
            width={640}
            height={360}
            unoptimized
            style={{ width: "100%", height: "auto" }}
          />
        </figure>
      ))}
    </div>
  );
}
