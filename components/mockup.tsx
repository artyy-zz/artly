"use client";
import Image from "next/image";
import { type Project } from "@/lib/content";
import { preview, logo } from "@/lib/showcase";
export function Mockup({
  project,
  variant,
  sizes = "(max-width: 700px) 85vw, 600px",
  priority = false,
}: {
  project: Project;
  variant?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const chosen = variant ?? project.artworkKind ?? "website";
  const kind =
    chosen === "brand" ? "branding" : chosen === "planner" ? "campaign" : chosen;
  const src =
    (kind.startsWith("logo") || kind === "identity")
      ? logo(project.id,kind === "logo" ? "presentation" : kind === "logo-dark" ? "dark" : kind === "logo-light" ? "light" : "primary")
      : preview(project.id, kind);
  return (
    <div
      className={`mockup artwork-preview variant-${kind}`}
      style={{ background: project.color }}
    >
      <Image
        src={src}
        alt={`${project.name} — Artly Concept · ${kind}`}
        fill
        sizes={sizes}
        priority={priority}
        unoptimized={kind.startsWith("logo") || kind === "identity"}
      />
    </div>
  );
}
