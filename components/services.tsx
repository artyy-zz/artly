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
import { Arti, type ArtiPose } from "./arti";
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
                "Nga shenja e parë e brandit te përvoja e plotë digjitale. I lidhim të gjitha.",
                "From your first brand mark to your complete digital experience. We connect it all.",
              ),
            )}
          </p>
        </Reveal>
        <Arti pose="idle" size="clamp(180px, 20vw, 270px)" className="services-intro-arti" interactive />
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
  rowIndex,
  variant,
  onOpen,
}: {
  service: ServiceSlug;
  category: Copy;
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
    <section className="collection-row">
      <div className="collection-heading">
        <h2>
          {t(category)}
          <span>
            {getCollection(service, rowIndex).length}{" "}
            {t(c("koncepte", "concepts"))}
          </span>
        </h2>
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
  const cats = collectionRows[slug].map(row => row.title);
  const variant = slug === "websites" ? "website" : slug === "logo-design" ? "logo" : slug === "social-management" ? "campaign" : "social";
  const artiPose: ArtiPose = slug === "websites" ? "laptop" : slug === "social-management" ? "phone" : "designing";
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
            <Button href={`/contact?service=${slug}`}>
              {t(c("Fillo projektin", "Start a project"))}
            </Button>
            <span>
              {t(c("Çmime orientuese nga", "Illustrative prices from"))} €
              {service.price}
              {slug === "social-management" ? t(c("/muaj", "/month")) : ""}
            </span>
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
          <Arti pose={artiPose} size="clamp(145px, 17vw, 225px)" className="service-arti" interactive />
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
        {cats.map((category, i) => (
          <CollectionRow
            service={slug}
            key={category.en}
            category={category}
            rowIndex={i}
            variant={variant}
            onOpen={setSelected}
          />
        ))}
      </div>
      <ContactCTA />
      <ProjectDialog
        project={selected}
        service={slug}
        variant={variant}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
