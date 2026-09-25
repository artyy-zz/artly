"use client";
import { ArrowDown, Asterisk } from "lucide-react";
import { c, projects } from "@/lib/content";
import { useSite } from "./providers";
import { Button, Reveal } from "./ui";
import { HeroStudio } from "./hero-studio";
import { useState } from "react";
import type { Project } from "@/lib/content";
import { ProjectCard, ProjectDialog } from "./projects";
import {
  SectionHeading,
  ServiceGrid,
  Process,
  Pricing,
  ContactCTA,
} from "./sections";
export function Home() {
  const { t } = useSite();
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <Reveal>
            <div className="eyebrow">
              <span className="status-dot" />
              {t(c("STUDIO KREATIV DIGJITAL", "DIGITAL CREATIVE STUDIO"))}
            </div>
            <h1>
              {t(c("Ideja jote.", "Your idea."))}
              <br />
              {t(c("Ne e bëjmë", "We make it"))}
              <br />
              <span className="hero-artly">
                Artly
                <Asterisk aria-hidden="true" />
              </span>
            </h1>
            <p className="hero-description">
              {t(
                c(
                  "Website, logo, dizajn grafik dhe social media për biznese që duan të dallohen.",
                  "Websites, logos, graphic design, and social media for businesses that want to stand out.",
                ),
              )}
            </p>
            <div className="hero-buttons">
              <Button href="/contact">
                {t(c("Fillo projektin", "Start a project"))}
              </Button>
              <Button href="/portfolio" secondary>
                {t(c("Shiko punët tona", "Explore our work"))}
              </Button>
            </div>
            <div className="hero-footnote">
              <span className="tiny-cross">+</span>
              {t(
                c(
                  "Nga Kosova. Për ide pa kufij.",
                  "From Kosovo. For ideas without borders.",
                ),
              )}
            </div>
          </Reveal>
        </div>
        <HeroStudio />
      </section>
      <div className="hero-bottom container">
        <span>
          {t(
            c(
              "TI SJELL IDENË. NE I JAPIM FORMË.",
              "YOU BRING THE IDEA. WE GIVE IT FORM.",
            ),
          )}
        </span>
        <a href="#work">
          {t(c("Zbulo Artly", "Discover Artly"))}
          <ArrowDown size={14} />
        </a>
      </div>
      <div className="marquee" aria-label="Web, logos, social media, graphic design">
        <div>
          {[0, 1, 2, 3].map((i) => (
            <span key={i} aria-hidden={i > 0}>
              WEB <Asterisk /> LOGO <Asterisk /> SOCIAL MEDIA <Asterisk />{" "}
              DESIGN <Asterisk />
            </span>
          ))}
        </div>
      </div>
      <HomeSections />
    </>
  );
}
function HomeSections() {
  const { t } = useSite();
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <>
      <section id="work" className="section container">
        <SectionHeading
          number="01"
          kicker={c("PUNË TË PËRZGJEDHURA", "SELECTED WORK")}
          title={c("Ide që marrin formë.", "Ideas taking shape.")}
          href="/portfolio"
          linkText={c("Shiko të gjitha punët", "View all work")}
        />
        <div className="selected-grid">
          {projects.slice(0, 3).map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <ProjectCard
                project={project}
                index={i}
                variant={i === 2 ? "social" : "website"}
                onOpen={() => setSelected(project)}
              />
            </Reveal>
          ))}
        </div>
        <p className="work-note">
          {t(
            c(
              "Një shije e asaj që mund të krijojmë. Projekte konceptuale nga Artly.",
              "A taste of what we can create. Concept projects by Artly.",
            ),
          )}
        </p>
      </section>
      <section className="section services-section container">
        <SectionHeading
          number="02"
          kicker={c("ÇFARË KRIJOJMË", "WHAT WE CREATE")}
          title={c("Gjithçka për t’u dalluar.", "Everything to stand out.")}
          href="/services"
          linkText={c("Të gjitha shërbimet", "All services")}
        />
        <ServiceGrid preview />
      </section>
      <Process />
      <Pricing />
      <ContactCTA />
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
