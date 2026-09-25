"use client";
import { useReducedMotionPreference } from "@/lib/use-reduced-motion";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCheck,
  Download,
  Camera,
  Mail,
  MessageCircle,
  RotateCcw,
} from "lucide-react";
import {
  c,
  contactDetails,
  projects,
  services,
} from "@/lib/content";
import { estimate, scopeOptions, websiteExtras, otherQuoteService, type QuoteServiceSlug } from "@/lib/estimator";
import { useSite } from "./providers";
import { Reveal } from "./ui";
import { serviceIcons } from "./sections";
import { ServiceVisual } from "./service-visual";
import { Arti } from "./arti";
type Details = {
  name: string;
  business: string;
  email: string;
  phone: string;
  description: string;
};
const emptyDetails: Details = {
  name: "",
  business: "",
  email: "",
  phone: "",
  description: "",
};
export function Contact({
  initialService,
  concept,
}: {
  initialService?: QuoteServiceSlug;
  concept?: string;
}) {
  const { t, locale } = useSite();
  const reduced = useReducedMotionPreference();
  const [service, setService] = useState<QuoteServiceSlug>(
    initialService ?? "websites",
  );
  const [scope, setScope] = useState(
    scopeOptions[initialService ?? "websites"][0].id,
  );
  const [step, setStep] = useState(initialService ? 1 : 0);
  const [pages, setPages] = useState(5);
  const [extras, setExtras] = useState<string[]>([]);
  const [requirements, setRequirements] = useState("");
  const [details, setDetails] = useState<Details>(emptyDetails);
  const [complete, setComplete] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const current = services.find((s) => s.slug === service) ?? otherQuoteService;
  const range = estimate({ service, scope, pages, extras });
  const selectedScope = scopeOptions[service].find((s) => s.id === scope)!;
  const selectedConcept =
    projects.find((p) => p.id === concept || p.name === concept) ??
    (concept && concept.length <= 80 ? { name: concept } : undefined);
  const steps = [
    c("Shërbimi", "Service"),
    c("Detajet", "Scope"),
    c("Kontakti", "Contact"),
    c("Përmbledhja", "Review"),
  ];
  const changeStep = (next: number) => {
    setStep(next);
    requestAnimationFrame(() => {
      titleRef.current?.focus({ preventScroll: true });
      document.getElementById("quote")?.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "start",
      });
    });
  };
  const chooseService = (value: QuoteServiceSlug) => {
    setService(value);
    setScope(scopeOptions[value][0].id);
    setExtras([]);
    setPages(5);
  };
  const rangeText = range.low === null ? t(c("Sipas projektit", "Quoted individually")) : `€${range.low.toLocaleString(locale === "sq" ? "de-DE" : "en-GB")} – €${range.high.toLocaleString(locale === "sq" ? "de-DE" : "en-GB")}${range.monthly ? t(c(" / muaj", " / month")) : ""}`;
  const summaryRows = [
    [t(c("Shërbimi", "Service")), t(current.title)],
    [t(c("Lloji", "Type")), t(selectedScope.label)],
    ...(service === "websites"
      ? [
          [t(c("Faqe", "Pages")), String(pages)],
          [
            t(c("Shtesat", "Extras")),
            websiteExtras
              .filter((x) => extras.includes(x.id))
              .map((x) => t(x.label))
              .join(", ") || t(c("Asnjë", "None")),
          ],
        ]
      : []),
    ...(selectedConcept
      ? [[t(c("Koncepti referues", "Reference concept")), selectedConcept.name]]
      : []),
    [t(c("Kërkesa shtesë", "Additional requirements")), requirements || "—"],
  ];
  function download() {
    const lines = [
      "ARTLY — " + t(c("PËRMBLEDHJE PROJEKTI", "PROJECT BRIEF")),
      "",
      ...summaryRows.map(([a, b]) => `${a}: ${b}`),
      "",
      `${t(c("Vlerësimi orientues", "Illustrative estimate"))}: ${rangeText}`,
      "",
      `${t(c("Emri", "Name"))}: ${details.name}`,
      `${t(c("Biznesi", "Business"))}: ${details.business}`,
      `Email: ${details.email}`,
      `${t(c("Telefoni", "Phone"))}: ${details.phone}`,
      `${t(c("Përshkrimi", "Description"))}: ${details.description}`,
      "",
      t(
        c(
          "Ky është një demonstrim. Asgjë nuk është dërguar. Çmimi final konfirmohet pas shqyrtimit të projektit.",
          "This is a demonstration. Nothing has been sent. The final price is confirmed after reviewing the project.",
        ),
      ),
    ];
    const url = URL.createObjectURL(
      new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" }),
    );
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "artly-project-brief.txt";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <>
      <section className="page-intro contact-intro container">
        <Reveal>
          <div className="eyebrow">
            ARTLY / {t(c("LE TË FLASIM", "LET’S TALK"))}
          </div>
          <h1>
            {t(c("Çdo gjë nis", "Everything starts"))}
            <br />
            <span>{t(c("me një ide.", "with an idea."))}</span>
          </h1>
          <p>
            {t(
              c(
                "Na trego çfarë ke në mendje. Ne e gjejmë formën e duhur.",
                "Tell us what you have in mind. We’ll find the right form.",
              ),
            )}
          </p>
        </Reveal>
      </section>
      <section
        id="quote"
        className={`quote-layout container ${complete ? "is-complete" : ""}`}
      >
        <div className="quote-main">
          {complete ? (
            <div className="quote-complete" role="status">
              <span className="complete-icon">
                <CheckCheck size={34} />
              </span>
              <div className="eyebrow">
                ARTLY / {t(c("IDEJA JOTE", "YOUR IDEA"))}
              </div>
              <h2>
                {t(
                  c(
                    "Përmbledhja jote është gati.",
                    "Your project brief is ready.",
                  ),
                )}
              </h2>
              <p>
                {t(
                  c(
                    "Ky është një demonstrim i formularit. Asgjë nuk është dërguar. Shkarko përmbledhjen për ta ruajtur në pajisjen tënde.",
                    "This is a form demonstration. Nothing has been sent. Download the brief to keep it on your device.",
                  ),
                )}
              </p>
              <button className="button primary" onClick={download}>
                {t(c("Shkarko përmbledhjen", "Download brief"))}
                <Download size={18} />
              </button>
              <button
                className="text-link"
                onClick={() => {
                  setComplete(false);
                  changeStep(3);
                }}
              >
                <ArrowLeft size={16} />
                {t(c("Kthehu te projekti", "Back to your project"))}
              </button>
              <button
                className="text-link"
                onClick={() => {
                  setComplete(false);
                  chooseService("websites");
                  setRequirements("");
                  setDetails(emptyDetails);
                  changeStep(0);
                }}
              >
                <RotateCcw size={16} />
                {t(c("Nis një projekt të ri", "Start a new project"))}
              </button>
            </div>
          ) : (
            <>
              <div className="quote-title">
                <div>
                  <span className="builder-kicker">
                    ARTLY / {t(c("PROJEKTI YT", "YOUR PROJECT"))}
                  </span>
                  <h2>{t(c("Ndërto projektin tënd", "Build your project"))}</h2>
                </div>
                <span>0{step + 1} / 04</span>
              </div>
              <ol className="quote-steps">
                {steps.map((label, i) => (
                  <li
                    key={label.en}
                    className={step === i ? "current" : step > i ? "done" : ""}
                  >
                    <button
                      disabled={i > step}
                      onClick={() => changeStep(i)}
                      aria-current={step === i ? "step" : undefined}
                      aria-label={`${i + 1}. ${t(label)}`}
                    >
                      <span>{step > i ? <Check size={12} /> : i + 1}</span>
                      {t(label)}
                    </button>
                  </li>
                ))}
              </ol>
              <motion.div
                className="quote-step-body"
                key={step}
                initial={reduced ? false : { opacity: 0.5, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduced ? 0 : 0.24 }}
              >
                <h3 ref={titleRef} tabIndex={-1}>
                  {t(
                    [
                      c("Çfarë do të krijojmë?", "What are we creating?"),
                      c(
                        "Le t’i japim pak më shumë formë.",
                        "Let’s give it a little more shape.",
                      ),
                      c(
                        "Kë kemi kënaqësinë të njohim?",
                        "Who do we have the pleasure of meeting?",
                      ),
                      c("Gjithçka në një vend.", "Everything in one place."),
                    ][step],
                  )}
                </h3>
                {step === 0 && (
                  <div className="quote-services">
                    {[...services, otherQuoteService].map((s) => {
                      const Icon = serviceIcons[s.icon];
                      return (
                        <button
                          key={s.slug}
                          className={s.slug === "other" ? "quote-other" : undefined}
                          aria-pressed={service === s.slug}
                          onClick={() => chooseService(s.slug)}
                        >
                          {s.slug !== "other" && <ServiceVisual service={s.slug} />}
                          <Icon size={23} />
                          <span>{t(s.title)}</span>
                          {s.slug === "other" && <small>{t(c("Na trego idenë tënde", "Tell us your idea"))}</small>}
                          {service === s.slug && <Check size={16} />}
                        </button>
                      );
                    })}
                  </div>
                )}
                {step === 1 && (
                  <>
                    <div className="selected-service">
                      <span>{t(current.title)}</span>
                      <button onClick={() => changeStep(0)}>
                        {t(c("Ndrysho", "Change"))}
                      </button>
                    </div>
                    <fieldset>
                      <legend>
                        {t(c("Zgjidh drejtimin", "Choose a direction"))}
                      </legend>
                      <div className="scope-options">
                        {scopeOptions[service].map((option) => (
                          <label
                            key={option.id}
                            className={scope === option.id ? "checked" : ""}
                          >
                            <input
                              type="radio"
                              name="scope"
                              value={option.id}
                              checked={scope === option.id}
                              onChange={() => {
                                setScope(option.id);
                                if (option.id === "landing") setPages(1);
                              }}
                            />
                            <span>{t(option.label)}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                    {service === "websites" && (
                      <>
                        <label className="page-count">
                          <span>
                            {t(c("Numri i faqeve", "Number of pages"))}
                            <small>
                              {t(
                                c(
                                  "5 faqe përfshihen në çmimin bazë",
                                  "5 pages included in the base price",
                                ),
                              )}
                            </small>
                          </span>
                          <select
                            aria-label={t(
                              c("Numri i faqeve", "Number of pages"),
                            )}
                            value={pages}
                            onChange={(e) => setPages(Number(e.target.value))}
                          >
                            {Array.from({ length: 50 }, (_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1}
                              </option>
                            ))}
                          </select>
                        </label>
                        <fieldset>
                          <legend>
                            {t(
                              c(
                                "Detajet që bëjnë diferencën",
                                "Details that make the difference",
                              ),
                            )}
                          </legend>
                          <div className="extras">
                            {websiteExtras.map((extra) => (
                              <label key={extra.id}>
                                <input
                                  type="checkbox"
                                  checked={extras.includes(extra.id)}
                                  onChange={(e) =>
                                    setExtras(
                                      e.target.checked
                                        ? [...extras, extra.id]
                                        : extras.filter((x) => x !== extra.id),
                                    )
                                  }
                                />
                                <span>{t(extra.label)}</span>
                                <small>+€{extra.price}</small>
                              </label>
                            ))}
                          </div>
                        </fieldset>
                      </>
                    )}
                    <label className="field">
                      <span>
                        {t(
                          c(
                            "Kërkesa shtesë ose të veçanta",
                            "Additional or custom requirements",
                          ),
                        )}
                      </span>
                      <textarea
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                        rows={3}
                        maxLength={3000}
                        placeholder={t(
                          c(
                            "Çfarë do ta bënte projektin tënd të veçantë?",
                            "What would make your project special?",
                          ),
                        )}
                      />
                    </label>
                  </>
                )}
                {step === 2 && (
                  <form
                    ref={formRef}
                    id="contact-details"
                    onSubmit={(e) => {
                      e.preventDefault();
                      changeStep(3);
                    }}
                  >
                    <div className="form-fields">
                      {(
                        [
                          {
                            key: "name",
                            label: c("Emri i plotë", "Full name"),
                            type: "text",
                            auto: "name",
                            required: true,
                          },
                          {
                            key: "business",
                            label: c("Emri i biznesit", "Business name"),
                            type: "text",
                            auto: "organization",
                            required: false,
                          },
                          {
                            key: "email",
                            label: c("Email", "Email"),
                            type: "email",
                            auto: "email",
                            required: true,
                          },
                          {
                            key: "phone",
                            label: c("Telefoni", "Phone"),
                            type: "tel",
                            auto: "tel",
                            required: false,
                          },
                        ] as const
                      ).map((field) => (
                        <label className="field" key={field.key}>
                          <span>
                            {t(field.label)}{" "}
                            {field.required
                              ? "*"
                              : `(${t(c("opsionale", "optional"))})`}
                          </span>
                          <input
                            type={field.type}
                            autoComplete={field.auto}
                            required={field.required}
                            maxLength={200}
                            value={details[field.key]}
                            onChange={(e) =>
                              setDetails({
                                ...details,
                                [field.key]: e.target.value,
                              })
                            }
                          />
                        </label>
                      ))}
                    </div>
                    <label className="field">
                      <span>
                        {t(
                          c(
                            "Na trego pak për projektin",
                            "Tell us a little about the project",
                          ),
                        )}
                      </span>
                      <textarea
                        value={details.description}
                        onChange={(e) =>
                          setDetails({
                            ...details,
                            description: e.target.value,
                          })
                        }
                        rows={4}
                        maxLength={4000}
                      />
                    </label>
                    <p className="form-note">
                      {t(
                        c(
                          "* Fusha të detyrueshme. Të dhënat mbeten në këtë faqe dhe nuk dërgohen askund.",
                          "* Required fields. Your details stay on this page and are not sent anywhere.",
                        ),
                      )}
                    </p>
                  </form>
                )}
                {step === 3 && (
                  <div className="review">
                    <dl>
                      {summaryRows.map(([label, value]) => (
                        <div key={label}>
                          <dt>{label}</dt>
                          <dd>{value}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="review-contact">
                      <strong>{details.name}</strong>
                      {details.business && <span>{details.business}</span>}
                      <span>{details.email}</span>
                      {details.phone && <span>{details.phone}</span>}
                      {details.description && <p>{details.description}</p>}
                      <button
                        className="text-link"
                        onClick={() => changeStep(2)}
                      >
                        {t(c("Ndrysho kontaktin", "Edit contact details"))}
                        <ArrowUpRight size={16} />
                      </button>
                    </div>
                    <div className="demo-notice">
                      {t(
                        c(
                          "Ky formular është demonstrim. Përfundimi krijon vetëm një përmbledhje lokale dhe nuk dërgon kërkesë te Artly.",
                          "This form is a demonstration. Finishing only creates a local brief and does not send a request to Artly.",
                        ),
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
              <div className="quote-navigation">
                {step > 0 ? (
                  <button
                    className="text-link"
                    onClick={() => changeStep(step - 1)}
                  >
                    <ArrowLeft size={16} />
                    {t(c("Kthehu", "Back"))}
                  </button>
                ) : (
                  <span className="form-note">
                    {t(
                      c(
                        "Hapi i parë drejt diçkaje të mirë.",
                        "The first step toward something good.",
                      ),
                    )}
                  </span>
                )}
                <button
                  className="button primary"
                  onClick={() => {
                    if (step === 2) {
                      formRef.current?.requestSubmit();
                      return;
                    }
                    if (step === 3) {
                      setComplete(true);
                      return;
                    }
                    changeStep(step + 1);
                  }}
                >
                  {t(
                    step === 3
                      ? c("Përfundo demonstrimin", "Finish demo")
                      : c("Vazhdo", "Continue"),
                  )}
                  <ArrowRight size={18} />
                </button>
              </div>
            </>
          )}
        </div>
        <aside className="quote-sidebar">
          <div className="estimate-card">
            <div className="eyebrow">
              <span className="status-dot" />
              {t(c("NJË IDE E INVESTIMIT", "AN IDEA OF YOUR INVESTMENT"))}
            </div>
            <div aria-live="polite" aria-atomic="true">
              <h3>{t(current.title)}</h3>
              <motion.strong
                className={`estimate-value ${service === "other" ? "estimate-custom" : ""}`}
                key={rangeText}
                initial={reduced ? false : { opacity: 0.5, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
              >
                {rangeText}
              </motion.strong>
            </div>
            <p>
              {t(
                c(
                  "Vlerësim fillestar orientues. Çmimi përfundimtar konfirmohet pas shqyrtimit të projektit.",
                  "An illustrative starting estimate. The final price is confirmed after reviewing your project.",
                ),
              )}
            </p>
            <div className="estimate-divider" />
            <span className="estimate-label">
              {t(c("PËRFSHIRË NË VLERËSIM", "IN YOUR ESTIMATE"))}
            </span>
            <ul>
              <li>
                <Check size={14} />
                {t(selectedScope.label)}
              </li>
              {service === "websites" && (
                <>
                  <li>
                    <Check size={14} />
                    {pages} {t(c("faqe", "pages"))}
                  </li>
                  {websiteExtras
                    .filter((x) => extras.includes(x.id))
                    .map((extra) => (
                      <li key={extra.id}>
                        <Check size={14} />
                        {t(extra.label)}
                      </li>
                    ))}
                </>
              )}
            </ul>
            {requirements && (
              <p className="custom-estimate-note">
                {t(
                  c(
                    "Kërkesat e veçanta vlerësohen veçmas pas shqyrtimit.",
                    "Custom requirements are priced separately after review.",
                  ),
                )}
              </p>
            )}
            <span className="placeholder-price">
              {t(
                c(
                  "Çmime shembull · jo ofertë detyruese",
                  "Example pricing · not a binding quote",
                ),
              )}
            </span>
          </div>
          <Arti
            pose={complete ? "celebrate" : "thinking"}
            size={210}
            className="quote-arti"
            interactive={!complete}
            label={t(
              complete
                ? c("Arti duke festuar përmbledhjen e përfunduar", "Arti celebrating the completed brief")
                : c("Arti duke menduar për projektin tënd", "Arti thinking about your project"),
            )}
          />
          <div className="contact-channels">
            <h3>
              {t(c("Më shumë mënyra për t’u lidhur.", "More ways to connect."))}
            </h3>
            {[
              {
                name: "Instagram",
                icon: Camera,
                url: contactDetails.instagram,
              },
              {
                name: "WhatsApp",
                icon: MessageCircle,
                url: contactDetails.whatsapp,
              },
              {
                name: "Email",
                icon: Mail,
                url: contactDetails.email
                  ? `mailto:${contactDetails.email}`
                  : null,
              },
            ].map(({ name, icon: Icon, url }) =>
              url ? (
                <a key={name} href={url} target="_blank" rel="noreferrer">
                  <Icon size={18} />
                  {name}
                  <ArrowUpRight size={16} />
                </a>
              ) : (
                <div key={name} className="contact-unconfigured">
                  <Icon size={18} />
                  <span>{name}</span>
                  <small>{t(c("Së shpejti", "Coming soon"))}</small>
                </div>
              ),
            )}
          </div>
        </aside>
      </section>
    </>
  );
}
