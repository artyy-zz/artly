"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  c,
  services,
  type Copy,
  type Project,
  type ServiceSlug,
} from "@/lib/content";
import { useSite } from "./providers";
import { Button, Reveal } from "./ui";
import { ServiceGrid, ContactCTA } from "./sections";
import { Mockup } from "./mockup";
import { ProjectDialog } from "./projects";
import { getCollection, collectionRows } from "@/lib/catalogue";
import { serviceVisuals } from "./service-visual";
export function Services() {
  const { t } = useSite();
  return (
    <>
      <section className="page-intro services-intro container">
        <Reveal>
          <div className="eyebrow">ARTLY / {t(c("SHËRBIMET", "SERVICES"))}</div>
          <h1>
            {t(c("Një studio.", "One studio."))}
            <br />
            <span>{t(c("Shumë mundësi.", "So many possibilities."))}</span>
          </h1>
          <p>
            {t(
              c(
                "Tre drejtime të qarta për një prezencë që funksionon dhe dallohet.",
                "Three clear directions for a presence that works and stands out.",
              ),
            )}
          </p>
        </Reveal>
        <span className="services-intro-count" aria-hidden="true">03</span>
      </section>
      <section className="container services-full">
        <ServiceGrid />
      </section>
      <ContactCTA />
    </>
  );
}
function CollectionRow({
  service,
  category,
  description,
  anchor,
  rowIndex,
  variant,
  onOpen,
}: {
  service: ServiceSlug;
  category: Copy;
  description?: Copy;
  anchor?: string;
  rowIndex: number;
  variant: string;
  onOpen: (p: Project) => void;
}) {
  const { t } = useSite();
  const ref = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState({ start: true, end: false });
  useEffect(() => {
    const track = ref.current;
    if (!track) return;
    const update = () =>
      setBounds({
        start: track.scrollLeft < 5,
        end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 5,
      });
    const resize = new ResizeObserver(update);
    resize.observe(track);
    track.addEventListener("scroll", update, { passive: true });
    return () => {
      resize.disconnect();
      track.removeEventListener("scroll", update);
    };
  }, []);
  return (
    <section className="collection-row" id={anchor}>
      <div className="collection-heading">
        <div>
          <h2>
            {t(category)}
            <span>
              {getCollection(service, rowIndex).length}{" "}
              {t(c("koncepte", "concepts"))}
            </span>
          </h2>
          {description && <p className="collection-description">{t(description)}</p>}
        </div>
        <div>
          <button
            className="icon-button"
            disabled={bounds.start}
            onClick={() =>
              ref.current?.scrollBy({
                left: -Math.max(300, ref.current.clientWidth * 0.8),
                behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
                  ? "instant"
                  : "smooth",
              })
            }
            aria-label={`${t(c("Më parë", "Previous"))}: ${t(category)}`}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            className="icon-button"
            disabled={bounds.end}
            onClick={() =>
              ref.current?.scrollBy({
                left: Math.max(300, ref.current.clientWidth * 0.8),
                behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
                  ? "instant"
                  : "smooth",
              })
            }
            aria-label={`${t(c("Më shumë", "Next"))}: ${t(category)}`}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <div ref={ref} className="collection-track">
        {getCollection(service, rowIndex).map((project, i) => {
          return (
            <button
              className={`collection-card thumbnail-${project.type} collection-${project.artworkKind ?? variant}`}
              key={`${rowIndex}-${i}`}
              onClick={() => onOpen(project)}
              aria-label={`${t(c("Shiko projektin", "View project"))}: ${project.name}, ${t(category)}, ${i + 1}`}
            >
              <Mockup
                project={project}
                variant={project.artworkKind ?? variant}
                sizes="(max-width: 600px) 78vw, 420px"
              />
              <div className="collection-info">
                <div>
                  <h3>
                    {project.name}{" "}
                    <small>/ {String(i + 1).padStart(2, "0")}</small>
                  </h3>
                  <p>{t(project.category)}</p>
                </div>
                <span>
                  <ArrowUpRight size={19} />
                </span>
              </div>
              <span className="collection-reveal">
                {t(c("Shiko projektin", "View project"))} ↗
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
export function ServiceDetail({ slug }: { slug: ServiceSlug }) {
  const { t } = useSite();
  const service = services.find((s) => s.slug === slug)!;
  const [selected, setSelected] = useState<Project | null>(null);
  const rows = collectionRows[slug];
  const variant = slug === "websites" ? "website" : slug === "logo-design" ? "logo" : "social";
  return (
    <>
      <section className="service-detail-intro container">
        <Reveal>
          <Link className="text-link back-link" href="/services">
            <ArrowLeft size={16} />
            {t(c("Të gjitha shërbimet", "All services"))}
          </Link>
          <div className="eyebrow">
            ARTLY / {t(c("KOLEKSIONI KREATIV", "CREATIVE COLLECTION"))}
          </div>
          <h1>
            {t(service.title)}
            <span className="accent">.</span>
          </h1>
          <p>{t(service.description)}</p>
          <div className="detail-actions">
            <Button href="/contact">
              {t(c("Na kontakto", "Contact us"))}
            </Button>
            <span>{t(c("Na trego çfarë ke në mendje.", "Tell us what you have in mind."))}</span>
          </div>
        </Reveal>
        <div className="detail-feature">
          <Mockup
            project={serviceVisuals[slug].project}
            variant={serviceVisuals[slug].variant}
            priority
          />
          <span>
            {t(c("Imagjino mundësitë.", "Imagine the possibilities."))}
          </span>
        </div>
      </section>
      <div className="collection-disclaimer container">
        <span className="status-dot" />
        {t(
          c(
            "Eksploro drejtime, jo kufizime. Të gjitha pamjet janë koncepte demonstruese nga Artly.",
            "Explore directions, not limitations. All previews are demonstration concepts by Artly.",
          ),
        )}
      </div>
      <div className="collections container">
        {rows.map((row, i) => (
          <CollectionRow
            service={slug}
            key={row.title.en}
            category={row.title}
            description={row.description}
            anchor={row.id}
            rowIndex={i}
            variant={variant}
            onOpen={setSelected}
          />
        ))}
      </div>
      <ContactCTA />
      <ProjectDialog
        project={selected}
        variant={variant}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
