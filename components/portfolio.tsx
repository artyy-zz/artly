"use client";

import { useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Code2,
  Command,
  Globe2,
  Layers3,
  MapPin,
  MousePointer2,
  PenTool,
  Plus,
  Sparkles,
} from "lucide-react";
import { c, type Project } from "@/lib/content";
import { portfolioProjects as projects } from "@/lib/curated";
import { useReducedMotionPreference } from "@/lib/use-reduced-motion";
import { Arti } from "./arti";
import { useSite } from "./providers";
import { Mockup } from "./mockup";
import { ProjectDialog } from "./projects";
import s from "./portfolio.module.css";

const disciplines = [
  {
    name: c("Websites", "Websites"),
    detail: c(
      "Nga ideja te website-i funksional.",
      "From an idea to a working website.",
    ),
    tags: c(
      "UI/UX · Responsive · Development",
      "UI/UX · Responsive · Development",
    ),
    icon: Code2,
    pose: "laptop",
    slug: "websites",
  },
  {
    name: c("Logo Design", "Logo Design"),
    detail: c(
      "Një shenjë. Një karakter i dallueshëm.",
      "One mark. A distinct personality.",
    ),
    tags: c(
      "Tipografi · Simbole · Identitet",
      "Typography · Symbols · Identity",
    ),
    icon: PenTool,
    pose: "designing",
    slug: "logo-design",
  },
  {
    name: c("Dizajn Grafik", "Graphic Design"),
    detail: c(
      "Ide që marrin formë, në çdo format.",
      "Ideas taking shape, in every format.",
    ),
    tags: c(
      "Social · Postera · Menu · Print",
      "Social · Posters · Menus · Print",
    ),
    icon: Layers3,
    pose: "designing",
    slug: "graphic-design",
  },
  {
    name: c("Menaxhim Social Media", "Social Media Management"),
    detail: c(
      "Përmbajtje me drejtim dhe vazhdimësi.",
      "Content with direction and consistency.",
    ),
    tags: c(
      "Strategji · Përmbajtje · Planifikim",
      "Strategy · Content · Planning",
    ),
    icon: Globe2,
    pose: "phone",
    slug: "social-management",
  },
] as const;
const technologies = [
  {
    name: "React",
    symbol: "⚛",
    tone: "#95def8",
    detail: c(
      "Ndërfaqe të ndërtuara me komponentë.",
      "Interfaces built with components.",
    ),
    group: "INTERFACE",
  },
  {
    name: "Next.js",
    symbol: "N",
    tone: "#f4f0ff",
    detail: c(
      "Nga faqja e parë te përvoja e plotë në web.",
      "From the first page to a complete web experience.",
    ),
    group: "FRAMEWORK",
  },
  {
    name: "TypeScript",
    symbol: "TS",
    tone: "#8aafff",
    detail: c(
      "Kod i strukturuar, me tipe të qarta.",
      "Structured code with clear types.",
    ),
    group: "LANGUAGE",
  },
  {
    name: "Tailwind CSS",
    symbol: "≈",
    tone: "#81e0d4",
    detail: c(
      "Sisteme vizuale që përshtaten në çdo ekran.",
      "Visual systems that adapt to every screen.",
    ),
    group: "STYLING",
  },
  {
    name: "HTML / CSS",
    symbol: "</>",
    tone: "#f3b995",
    detail: c(
      "Struktura, tipografia dhe detajet e ndërfaqes.",
      "Structure, typography, and interface details.",
    ),
    group: "FOUNDATION",
  },
  {
    name: "JavaScript",
    symbol: "JS",
    tone: "#efdd90",
    detail: c(
      "Ndërveprime që e bëjnë dizajnin të gjallë.",
      "Interactions that bring design to life.",
    ),
    group: "INTERACTION",
  },
  {
    name: "Git",
    symbol: "⑂",
    tone: "#f4a3a3",
    detail: c(
      "Versionim dhe përmirësim, hap pas hapi.",
      "Version control and improvement, step by step.",
    ),
    group: "WORKFLOW",
  },
  {
    name: "AI-assisted",
    symbol: "✧",
    tone: "#c9a6ff",
    detail: c(
      "Eksperimentim i shpejtë. Përzgjedhje me kujdes.",
      "Fast experimentation. Thoughtful selection.",
    ),
    group: "EXPLORATION",
  },
] as const;
const chapters = [
  { id: "craft", label: c("Çfarë bëj", "What I do") },
  { id: "toolkit", label: c("Mjetet", "Toolkit") },
  { id: "work", label: c("Projektet", "Projects") },
  { id: "about-arti", label: c("Pak për mua", "About me") },
];

function Scene({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotionPreference();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const rotateY = useSpring(x, { stiffness: 55, damping: 22 });
  const rotateX = useSpring(y, { stiffness: 55, damping: 22 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], [24, -24]);
  return (
    <div
      ref={ref}
      className={`${s.scene} ${className}`}
      onPointerMove={(event) => {
        if (reduced || event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(((event.clientX - rect.left) / rect.width - 0.5) * 7);
        y.set(-((event.clientY - rect.top) / rect.height - 0.5) * 5);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        className={s.sceneInner}
        style={reduced ? undefined : { rotateX, rotateY, y: scrollY }}
      >
        {children}
      </motion.div>
    </div>
  );
}
function Chapter({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className={s.chapter}>
      <span>{number}</span>
      <i />
      {children}
    </div>
  );
}
function Screen({
  project,
  mobile = false,
  priority = false,
}: {
  project: Project;
  mobile?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={mobile ? s.phone : s.screen}>
      <div className={s.screenBar} aria-hidden="true">
        <i />
        <i />
        <i />
        <span>{project.name}</span>
      </div>
      <Mockup
        project={project}
        variant={mobile ? "website-mobile" : "website"}
        priority={priority}
        sizes={mobile ? "180px" : "(max-width: 700px) 85vw, 850px"}
      />
    </div>
  );
}

export function Portfolio() {
  const { t } = useSite();
  const [discipline, setDiscipline] = useState(0);
  const [technology, setTechnology] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);
  const [selected, setSelected] = useState<Project | null>(null);
  const project = projects[projectIndex],
    service = disciplines[discipline],
    tech = technologies[technology];
  const goProject = (delta: number) =>
    setProjectIndex(
      (index) => (index + delta + projects.length) % projects.length,
    );
  return (
    <>
      <div className={s.universe}>
        <section className={s.hero} aria-labelledby="universe-title">
          <div className={s.heroTop}>
            <span>ARTLY® / {t(c("HAPËSIRA KREATIVE", "CREATIVE SPACE"))}</span>
            <span>
              <i />{" "}
              {t(
                c(
                  "Nga Kosova, përtej kufijve.",
                  "From Kosovo, beyond borders.",
                ),
              )}
            </span>
          </div>
          <div className={s.heroCopy}>
            <h1 id="universe-title">
              {t(c("Ide. Kod.", "Ideas. Code."))}
              <br />
              <em>{t(c("Pak magji.", "A little magic."))}</em>
            </h1>
            <p>
              {t(c("Mirë se erdhe në botën time.", "Welcome to my world."))}
              <br />
              {t(
                c(
                  "Ku dizajni takohet me teknologjinë.",
                  "Where design meets technology.",
                ),
              )}
            </p>
          </div>
          <Scene className={s.heroScene}>
            <div className={s.heroWord} aria-hidden="true">
              arti<span>®</span>
            </div>
            <div className={s.floor} aria-hidden="true">
              <i />
              <i />
            </div>
            <button
              className={`${s.heroObject} ${s.heroWeb}`}
              onClick={() => setSelected(projects[0])}
              aria-label={`${t(c("Hap projektin", "Open project"))} ${projects[0].name}`}
            >
              <Screen project={projects[0]} priority />
              <span className={s.objectLabel}>
                01 / WEB <ArrowUpRight size={13} />
              </span>
            </button>
            <button
              className={`${s.heroObject} ${s.heroLogo}`}
              onClick={() => setSelected(projects[2])}
              aria-label={`${t(c("Hap projektin", "Open project"))} ${projects[2].name}`}
            >
              <Mockup
                project={projects[2]}
                variant="logo-light"
                sizes="260px"
              />
              <span className={s.objectLabel}>
                02 / IDENTITY <ArrowUpRight size={13} />
              </span>
            </button>
            <button
              className={`${s.heroObject} ${s.heroPrint}`}
              onClick={() => setSelected(projects[4])}
              aria-label={`${t(c("Hap projektin", "Open project"))} ${projects[4].name}`}
            >
              <Mockup project={projects[4]} sizes="230px" />
              <span className={s.objectLabel}>
                03 / PRINT <ArrowUpRight size={13} />
              </span>
            </button>
            <div className={s.heroArti}>
              <Arti
                pose="idle"
                size="100%"
                sizes="(max-width: 700px) 66vw, 500px"
                preload
                label={t(
                  c(
                    "Arti, në qendër të hapësirës krijuese",
                    "Arti, at the center of the creative space",
                  ),
                )}
              />
            </div>
            <span
              className={`${s.floatingToken} ${s.tokenCode}`}
              aria-hidden="true"
            >
              <Braces />
            </span>
            <span
              className={`${s.floatingToken} ${s.tokenPen}`}
              aria-hidden="true"
            >
              <PenTool />
            </span>
            <span className={s.cursorLabel} aria-hidden="true">
              <MousePointer2 size={18} /> Arti
            </span>
          </Scene>
          <div className={s.heroBottom}>
            <a href="#craft">
              {t(c("Hyr në hapësirë", "Enter the space"))}
              <ArrowDown size={16} />
            </a>
            <span>
              DESIGNER + DEVELOPER
              <br />
              <small>
                {t(
                  c("Një ide. Shumë dimensione.", "One idea. Many dimensions."),
                )}
              </small>
            </span>
          </div>
        </section>
        <nav
          className={s.sceneNav}
          aria-label={t(c("Brenda portfolios", "Inside the portfolio"))}
        >
          {chapters.map((item, index) => (
            <a href={`#${item.id}`} key={item.id}>
              <span>0{index + 1}</span>
              {t(item.label)}
            </a>
          ))}
        </nav>

        <section
          className={`${s.section} ${s.craft}`}
          id="craft"
          aria-labelledby="craft-title"
        >
          <div className={s.craftCopy}>
            <Chapter number="01">{t(c("ÇFARË BËJ", "WHAT I DO"))}</Chapter>
            <h2 id="craft-title">
              {t(c("Nga mendimi,", "From a thought,"))}
              <br />
              <em>{t(c("në përvojë.", "to an experience."))}</em>
            </h2>
            <p className={s.sectionHint}>
              {t(
                c(
                  "Zgjidh një drejtim. Shih ku të çon.",
                  "Choose a direction. See where it leads.",
                ),
              )}
            </p>
            <div className={s.disciplineDetail} aria-live="polite">
              <span className={s.tiny}>0{discipline + 1} / 04</span>
              <h3>{t(service.name)}</h3>
              <p>{t(service.detail)}</p>
              <span className={s.serviceTags}>{t(service.tags)}</span>
              <Link href={`/services/${service.slug}`} className={s.inlineLink}>
                {t(c("Eksploro shërbimin", "Explore service"))}
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <Scene className={s.craftScene}>
            <div className={s.orbit} aria-hidden="true" />
            <div className={s.craftArti}>
              <Arti
                pose={service.pose}
                size="100%"
                sizes="(max-width: 700px) 58vw, 370px"
              />
            </div>
            {disciplines.map((item, index) => (
              <button
                key={item.slug}
                className={`${s.discipline} ${s[`discipline${index}`]}`}
                aria-pressed={discipline === index}
                onClick={() => setDiscipline(index)}
              >
                <item.icon strokeWidth={1.2} />
                <span>{t(item.name)}</span>
                <Plus size={12} />
              </button>
            ))}
            <span className={s.sceneCoordinate} aria-hidden="true">
              CREATIVE MODE / 0{discipline + 1}
            </span>
          </Scene>
        </section>

        <section
          className={`${s.section} ${s.toolkit}`}
          id="toolkit"
          aria-labelledby="toolkit-title"
        >
          <div>
            <Chapter number="02">
              {t(c("ÇFARË DI & ÇFARË PËRDOR", "SKILLS & TOOLS"))}
            </Chapter>
            <h2 id="toolkit-title">
              {t(c("Pas magjisë,", "Behind the magic,"))}{" "}
              <em>{t(c("pak logjikë.", "a little logic."))}</em>
            </h2>
          </div>
          <div className={s.toolkitBody}>
            <Scene className={s.techScene}>
              <div className={s.techRing} aria-hidden="true" />
              <div
                className={`${s.techRing} ${s.techRingOuter}`}
                aria-hidden="true"
              />
              <div className={s.techArti}>
                <Arti
                  pose="laptop"
                  size="100%"
                  sizes="(max-width: 700px) 55vw, 350px"
                />
              </div>
              {technologies.map((item, index) => (
                <button
                  key={item.name}
                  className={`${s.techChip} ${s[`chip${index}`]}`}
                  aria-pressed={technology === index}
                  onClick={() => setTechnology(index)}
                  style={{ color: item.tone }}
                >
                  <b aria-hidden="true">{item.symbol}</b>
                  <span>{item.name}</span>
                </button>
              ))}
            </Scene>
            <div className={s.techInfo} aria-live="polite">
              <div className={s.terminalBar}>
                <Command size={16} />
                <span>arti / toolkit</span>
                <i />
              </div>
              <span className={s.tiny}>{tech.group}</span>
              <div
                className={s.techSymbol}
                style={{ color: tech.tone }}
                aria-hidden="true"
              >
                {tech.symbol}
              </div>
              <h3>{tech.name}</h3>
              <p>{t(tech.detail)}</p>
              <div className={s.techFoot}>
                <span>design</span>
                <Plus size={12} />
                <span>development</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${s.section} ${s.work}`}
          id="work"
          aria-labelledby="work-title"
        >
          <div className={s.workHeading}>
            <div>
              <Chapter number="03">
                {t(c("PROJEKTET E MIA", "SELECTED WORK"))}
              </Chapter>
              <h2 id="work-title">
                {t(c("Punë me", "Work with"))}{" "}
                <em>{t(c("karakter.", "character."))}</em>
              </h2>
            </div>
            <p>
              {t(
                c(
                  "Shtatë botë të ndryshme. Një sy për detajin.",
                  "Seven different worlds. One eye for detail.",
                ),
              )}
              <small>
                {t(
                  c(
                    "Projekte konceptuale të krijuara nga Artly.",
                    "Concept projects created by Artly.",
                  ),
                )}
              </small>
            </p>
          </div>
          <div
            className={s.projectIndex}
            aria-label={t(c("Zgjidh projektin", "Choose a project"))}
          >
            {projects.map((item, index) => (
              <button
                key={item.id}
                aria-pressed={projectIndex === index}
                onClick={() => setProjectIndex(index)}
              >
                <span>0{index + 1}</span>
                {item.name}
                <ArrowUpRight size={14} />
              </button>
            ))}
          </div>
          <Scene
            className={`${s.projectScene} ${s[`composition${projectIndex}`]}`}
          >
            <span className={s.projectGhost} aria-hidden="true">
              0{projectIndex + 1}
            </span>
            <div className={s.projectPlatform} aria-hidden="true" />
            <button
              className={s.projectObject}
              key={project.id}
              onClick={() => setSelected(project)}
              aria-label={`${t(c("Shiko projektin", "View project"))} ${project.name}`}
            >
              {!project.artworkKind ? (
                <>
                  <div className={s.projectDesktop}>
                    <Screen project={project} />
                  </div>
                  <div className={s.projectPhone}>
                    <Screen project={project} mobile />
                  </div>
                </>
              ) : (
                <>
                  <div className={s.projectArtwork}>
                    <Mockup
                      project={project}
                      sizes="(max-width: 700px) 80vw, 850px"
                    />
                  </div>
                  {project.artworkKind === "logo" && (
                    <div className={s.projectMark}>
                      <Mockup
                        project={project}
                        variant="logo-dark"
                        sizes="240px"
                      />
                    </div>
                  )}
                </>
              )}
            </button>
            <div className={s.projectArti}>
              <Arti
                pose={
                  projectIndex < 2
                    ? "pointing"
                    : projectIndex === 6
                      ? "phone"
                      : "designing"
                }
                size="100%"
                sizes="(max-width: 700px) 25vw, 250px"
              />
            </div>
            <span className={s.projectSceneLabel}>
              ARTLY STUDIO / {t(c("KONCEPT", "CONCEPT"))}
            </span>
          </Scene>
          <div className={s.projectCaption}>
            <div aria-live="polite">
              <span className={s.tiny}>{t(project.category)}</span>
              <h3>{project.name}</h3>
              <p>{t(project.title)}</p>
            </div>
            <div className={s.projectActions}>
              <button
                className={s.openProject}
                onClick={() => setSelected(project)}
              >
                {t(c("Brenda projektit", "Inside the project"))}
                <ArrowUpRight size={20} />
              </button>
              <div className={s.projectArrows}>
                <button
                  onClick={() => goProject(-1)}
                  aria-label={t(c("Projekti i mëparshëm", "Previous project"))}
                >
                  <ArrowLeft size={20} />
                </button>
                <span>0{projectIndex + 1} / 07</span>
                <button
                  onClick={() => goProject(1)}
                  aria-label={t(c("Projekti tjetër", "Next project"))}
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${s.section} ${s.about}`}
          id="about-arti"
          aria-labelledby="about-title"
        >
          <div className={s.aboutVisual}>
            <div className={s.profileOrbit} aria-hidden="true" />
            <Arti
              pose="thinking"
              size="100%"
              sizes="(max-width: 700px) 60vw, 400px"
            />
            <span className={s.profileTag}>
              <Sparkles size={14} />{" "}
              {t(c("Gjithmonë kurioz.", "Always curious."))}
            </span>
          </div>
          <div className={s.aboutCopy}>
            <Chapter number="04">
              {t(c("PAK PËR MUA", "A LITTLE ABOUT ME"))}
            </Chapter>
            <h2 id="about-title">
              Arti<span className={s.nameDot}>.</span>
            </h2>
            <p className={s.role}>Digital Creator / Developer / Designer</p>
            <div className={s.location}>
              <MapPin size={15} /> {t(c("Kosovë", "Kosovo"))}
            </div>
            <p className={s.aboutLine}>
              {t(
                c(
                  "Më pëlqen t’i lidh idetë e bukura me gjëra që funksionojnë.",
                  "I like connecting beautiful ideas with things that work.",
                ),
              )}
            </p>
            <div className={s.profileSkills}>
              {[
                "Web Development",
                "UI/UX",
                "Graphic Design",
                "AI-assisted workflows",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className={s.experience}>
              <span className={s.tiny}>
                {t(c("ÇFARË KAM NDËRTUAR", "WHAT I HAVE BUILT"))}
              </span>
              <p>
                {t(
                  c(
                    "Website responsive. Identitete vizuale. Fushata dhe materiale grafike.",
                    "Responsive websites. Visual identities. Campaigns and graphic materials.",
                  ),
                )}
              </p>
              <a href="#work" className={s.inlineLink}>
                {t(c("Shihe në projekte", "See it in the work"))}
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
        <section className={s.finale} aria-labelledby="finale-title">
          <div className={s.finaleGlow} aria-hidden="true" />
          <div className={s.finaleArti}>
            <Arti
              pose="wave"
              size="100%"
              sizes="(max-width: 700px) 44vw, 300px"
            />
          </div>
          <div>
            <span className={s.tiny}>
              {t(c("RADHËN E KA IDEJA JOTE", "YOUR IDEA IS NEXT"))}
            </span>
            <h2 id="finale-title">
              {t(c("E bëjmë", "Shall we make"))}
              <br />
              <em>{t(c("diçka të bukur?", "something great?"))}</em>
            </h2>
            <Link className={s.contactLink} href="/contact">
              {t(c("Le të flasim", "Let’s talk"))}
              <ArrowUpRight />
            </Link>
          </div>
          <span className={s.finaleSign}>ARTI / ARTLY®</span>
        </section>
      </div>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
