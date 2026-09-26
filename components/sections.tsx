"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { c, services, type Copy } from "@/lib/content";
import { useSite } from "./providers";
import { Button, Reveal } from "./ui";
import { ServiceVisual } from "./service-visual";
const capabilities = {
  websites: c("Strategji · UI/UX · Zhvillim · Responsive", "Strategy · UI/UX · Development · Responsive"),
  "logo-design": c("Drejtim · Simbol · Tipografi · Sistem", "Direction · Symbol · Typography · System"),
  "graphic-design": c("Përmbajtje · Menaxhim · Fushata · Print", "Content · Management · Campaigns · Print"),
} as const;
export function SectionHeading({
  number,
  kicker,
  title,
  description,
  href,
  linkText,
}: {
  number: string;
  kicker: Copy;
  title: Copy;
  description?: Copy;
  href?: string;
  linkText?: Copy;
}) {
  const { t } = useSite();
  return (
    <Reveal className="section-heading">
      <div>
        <div className="section-kicker">
          <span>{number} /</span>
          {t(kicker)}
        </div>
        <h2>{t(title)}</h2>
        {description && <p>{t(description)}</p>}
      </div>
      {href && linkText && (
        <Link className="text-link" href={href}>
          {t(linkText)}
          <ArrowUpRight size={17} />
        </Link>
      )}
    </Reveal>
  );
}
export function ServiceGrid({ preview = false }: { preview?: boolean }) {
  const { t } = useSite();
  return (
    <div className={`service-editorial ${preview ? "service-editorial-preview" : ""}`}>
      {services.map((service, i) => {
        return (
          <Reveal key={service.slug} delay={i * 0.035} className={`service-chapter service-chapter-${service.slug}`}>
            <Link
              href={`/services/${service.slug}`}
              className="service-chapter-link"
            >
              <div className="service-chapter-copy">
                <span className="service-chapter-number">0{i + 1} / 03</span>
                <h3>{t(service.title)}</h3>
                <p>{t(service.description)}</p>
                <small>{t(capabilities[service.slug])}</small>
                <span className="service-explore">
                  {t(c("Eksploro shërbimin", "Explore service"))}
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <ServiceVisual service={service.slug} />
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
export function Process() {
  const { t } = useSite();
  const steps = [
    [
      c("Na trego idenë", "Tell us your idea"),
      c(
        "Dëgjojmë, pyesim dhe kuptojmë çfarë të duhet.",
        "We listen, ask, and understand what you need.",
      ),
    ],
    [
      c("Ne e krijojmë", "We create it"),
      c(
        "Nga skica e parë te një drejtim me karakter.",
        "From the first sketch to a direction with character.",
      ),
    ],
    [
      c("E përsosim", "We refine it"),
      c(
        "Bashkëpunojmë për detajet që bëjnë diferencën.",
        "We collaborate on the details that make the difference.",
      ),
    ],
    [
      c("E publikojmë", "We launch it"),
      c(
        "Gati për botën. Me gjithçka në vendin e duhur.",
        "Ready for the world. With everything in its right place.",
      ),
    ],
  ];
  return (
    <section className="section process-section container">
      <SectionHeading
        number="03"
        kicker={c("PROCESI", "THE PROCESS")}
        title={c("Si funksionon?", "How does it work?")}
      />
      <div className="process-grid">
        {steps.map(([title, desc], i) => (
          <Reveal key={title.en} delay={i * 0.08}>
            <span className="process-number">
              0{i + 1}
              <span>↗</span>
            </span>
            <h3>{t(title)}</h3>
            <p>{t(desc)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
export function ContactCTA() {
  const { t } = useSite();
  return (
    <section className="cta-section container">
      <Reveal className="cta-inner">
        <div>
          <div className="eyebrow">
            <span className="status-dot" />
            {t(c("LE T’I JAPIM FORMË", "LET’S GIVE IT FORM"))}
          </div>
          <h2>
            {t(c("Ideja e radhës?", "The next big idea?"))}
            <br />
            <span>{t(c("Mund të jetë e jotja.", "It could be yours."))}</span>
          </h2>
          <Button href="/contact">
            {t(c("Diskutojmë projektin", "Let’s discuss your project"))}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
