"use client";
import { useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { c, projectTag, type Project } from "@/lib/content";
import { useSite } from "./providers";
import { Mockup } from "./mockup";
import { Button } from "./ui";
import { findConcept, preview } from "@/lib/showcase";
export function ProjectCard({
  project,
  onOpen,
  variant = "website",
  index = 0,
}: {
  project: Project;
  onOpen: () => void;
  variant?: string;
  index?: number;
}) {
  const { t } = useSite();
  return (
    <button
      className="project-card"
      onClick={onOpen}
      aria-label={`${t(c("Shiko projektin", "View project"))}: ${project.name}`}
    >
      <div
        className={`project-card-art art-${project.id}`}
        style={{ background: project.ink }}
      >
        <div className="project-card-top">
          <span>ARTLY {t(c("KONCEPT", "CONCEPT"))}</span>
          <span>0{index + 1}</span>
        </div>
        <div className="project-card-mock">
          <Mockup project={project} variant={variant} />
        </div>
        <div className="project-card-identity">
          <Mockup project={project} variant="identity" />
        </div>
        <span className="project-view">
          {t(c("Shiko projektin", "View project"))}
          <ArrowUpRight size={18} />
        </span>
      </div>
      <div className="project-card-info">
        <div>
          <h3>{project.name}</h3>
          <span>{t(project.category)}</span>
        </div>
        <ArrowUpRight size={20} />
      </div>
    </button>
  );
}
export function ProjectDialog({
  project,
  onClose,
  variant = "website",
}: {
  project: Project | null;
  onClose: () => void;
  variant?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const { t } = useSite();
  useEffect(() => {
    const dialog = ref.current;
    if (project && dialog) {
      dialog.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        dialog.close();
        document.body.style.overflow = previous;
      };
    }
  }, [project]);
  const concept = project ? findConcept(project.id) : undefined;
  const primary = project?.artworkKind ?? variant;
  return (
    <dialog
      ref={ref}
      className="project-dialog"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-labelledby="project-title"
    >
      {project && (
        <div className="dialog-inner">
          <button
            className="dialog-close icon-button"
            autoFocus
            onClick={onClose}
            aria-label={t(c("Mbyll projektin", "Close project"))}
          >
            <X />
          </button>
          <span className="eyebrow">
            ARTLY — {t(c("PROJEKT KONCEPTUAL", "CONCEPT PROJECT"))}
          </span>
          <h2 id="project-title">{project.name}</h2>
          <p>{t(project.description)}</p>
          <div className="dialog-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{t(projectTag(tag))}</span>
            ))}
          </div>
          <Mockup
            project={project}
            variant={primary}
            sizes="(max-width: 700px) 90vw, 980px"
          />
          {concept?.web && (
            <a
              className="text-link case-website-link"
              href={`/showcase/${project.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(
                c(
                  "Eksploro website-in e plotë",
                  "Explore the complete website",
                ),
              )}
              <ArrowUpRight size={18} />
            </a>
          )}
          {concept?.web && <div className="case-capture-links"><a className="text-link" href={preview(project.id,"website-full")} target="_blank" rel="noopener noreferrer">{t(c("Pamja e plotë e faqes", "Full-page capture"))} ↗</a><a className="text-link" href={preview(project.id,"website-mobile")} target="_blank" rel="noopener noreferrer">{t(c("Pamja mobile", "Mobile capture"))} ↗</a></div>}
          {concept?.web && <>
          <section className="case-section">
            <h3>
              {t(c("Ideja, në çdo format.", "The idea, in every format."))}
            </h3>
            <p>
              {t(project.title)}{" "}
              {t(
                c(
                  "Një markë imagjinare e zhvilluar nga Artly, nga identiteti te kompozimi, fotografia dhe materialet promovuese.",
                  "A fictional brand developed by Artly, from identity through composition, photography, and promotional materials.",
                ),
              )}
            </p>
            {concept?.brand && primary !== "brand" && (
              <Mockup
                project={project}
                variant="brand"
                sizes="(max-width: 700px) 90vw, 980px"
              />
            )}
            {concept && !concept.brand && primary !== "logo" && (
              <Mockup project={project} variant="logo" />
            )}
          </section>
          <section className="case-section">
            <h3>{t(c("Fushata & materialet", "Campaign & applications"))}</h3>
            <div className="dialog-grid">
              {concept?.social && primary !== "social" && primary !== "campaign" && (
                <div>
                  <Mockup project={project} variant="social" />
                  <span className="case-caption">
                    {t(c("Postim social · 4:5", "Social campaign · 4:5"))}
                  </span>
                </div>
              )}
              {concept?.menu && primary !== "menu" && (
                <div>
                  <Mockup project={project} variant="menu" />
                  <span className="case-caption">
                    {t(c("Menu · Dizajn për print", "Menu · Print design"))}
                  </span>
                </div>
              )}
              {concept?.poster && primary !== "poster" && (
                <div>
                  <Mockup project={project} variant="poster" />
                  <span className="case-caption">
                    {t(
                      c(
                        "Poster · Fushatë promovuese",
                        "Poster · Promotional campaign",
                      ),
                    )}
                  </span>
                </div>
              )}
              {(primary === "social" || primary === "campaign") &&
                !concept?.poster &&
                !concept?.menu && <Mockup project={project} variant="logo" />}
            </div>
          </section>
          {concept?.creative && primary !== "creative" && <section className="case-section"><h3>{t(c("Aplikimi i markës", "Brand application"))}</h3><Mockup project={project} variant="creative" sizes="(max-width:700px) 90vw, 980px" /></section>}
          </>}
          {primary === "logo" && !concept && <div className="dialog-grid"><Mockup project={project} variant="logo-dark"/><Mockup project={project} variant="logo-light"/></div>}
          <div className="dialog-footer">
            <p>
              {t(
                c(
                  "Markë imagjinare dhe demonstrim dizajni i krijuar nga Artly.",
                  "Fictional brand and design demonstration created by Artly.",
                ),
              )}
            </p>
            <Button href="/contact">
              {t(c("Dua diçka të tillë", "Create something like this"))}
            </Button>
          </div>
        </div>
      )}
    </dialog>
  );
}
