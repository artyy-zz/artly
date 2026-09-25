"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Asterisk, Menu, Moon, Sun, X } from "lucide-react";
import { useSite } from "./providers";
import { c, type Copy } from "@/lib/content";
import { Button } from "./ui";
export function Header() {
  const { t, locale, setLocale, theme, toggleTheme } = useSite();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const { scrollY } = useScroll();
  // Separate thresholds prevent scroll anchoring from repeatedly resizing the header.
  useMotionValueEvent(scrollY, "change", (value) =>
    setScrolled((previous) => (previous ? value > 12 : value > 48)),
  );
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuRef.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  const links = [
    ["/", c("Ballina", "Home")],
    ["/services", c("Shërbimet", "Services")],
    ["/portfolio", c("Portfolio", "Portfolio")],
    ["/contact", c("Kontakt", "Contact")],
  ] as const;
  return (
    <>
      <a className="skip-link" href="#main">
        {t(c("Kalo te përmbajtja", "Skip to content"))}
      </a>
      <header className={`header${scrolled ? " is-scrolled" : ""}`}>
        <Link
          href="/"
          className="wordmark"
          aria-label="Artly"
          onClick={() => setOpen(false)}
        >
          artly<span>®</span>
        </Link>
        <nav
          className="desktop-nav"
          aria-label={t(c("Navigimi kryesor", "Main navigation"))}
        >
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={
                (href === "/" ? pathname === href : pathname.startsWith(href))
                  ? "page"
                  : undefined
              }
              className={
                (href === "/" ? pathname === href : pathname.startsWith(href))
                  ? "active"
                  : ""
              }
            >
              {t(label)}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <div className="language-switch">
            <button
              aria-pressed={locale === "sq"}
              onClick={() => setLocale("sq")}
            >
              SQ
            </button>
            <span>/</span>
            <button
              aria-pressed={locale === "en"}
              onClick={() => setLocale("en")}
            >
              EN
            </button>
          </div>
          <button
            className="icon-button theme-toggle"
            onClick={toggleTheme}
            aria-label={t(
              theme === "dark"
                ? c("Aktivizo pamjen e çelët", "Switch to light mode")
                : c("Aktivizo pamjen e errët", "Switch to dark mode"),
            )}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button href="/contact" className="header-cta">
            {t(c("Fillo projektin", "Start a project"))}
          </Button>
          <button
            className="icon-button mobile-menu"
            ref={menuRef}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={t(
              open
                ? c("Mbyll menynë", "Close menu")
                : c("Hap menynë", "Open menu"),
            )}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label={t(c("Navigimi kryesor", "Main navigation"))}
          >
            {links.map(([href, label]) => (
              <Link
                href={href}
                key={href}
                aria-current={
                  (href === "/" ? pathname === href : pathname.startsWith(href))
                    ? "page"
                    : undefined
                }
                onClick={() => setOpen(false)}
              >
                {t(label)}
                <ArrowUpRight />
              </Link>
            ))}
            <Button href="/contact" onClick={() => setOpen(false)}>
              {t(c("Fillo projektin", "Start a project"))}
            </Button>
          </nav>
        )}
      </header>
    </>
  );
}
export function Footer() {
  const { t } = useSite();
  return (
    <footer className="footer container">
      <div className="footer-top">
        <Link href="/" className="wordmark">
          artly<span>®</span>
        </Link>
        <p>
          {t(
            c(
              "Ide të guximshme. Ekzekutim me kujdes.",
              "Bold ideas. Thoughtful execution.",
            ),
          )}
        </p>
        <span>{t(c("Kosovë → Kudo", "Kosovo → Everywhere"))}</span>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Artly.{" "}
          {t(c("Të gjitha të drejtat e rezervuara.", "All rights reserved."))}
        </span>
        <span>
          {t(
            c(
              "Krijuar me qëllim. Nga Artly.",
              "Made with intention. By Artly.",
            ),
          )}
        </span>
      </div>
    </footer>
  );
}
export function AssistantButton() {
  const { t } = useSite();
  const [open, setOpen] = useState(false);
  const [guide, setGuide] = useState(false);
  const options: [string, Copy][] = guide
    ? [
        ["websites", c("Dua të jem online", "I want to get online")],
        ["logo-design", c("Dua një logo të re", "I need a new logo")],
        [
          "social-management",
          c("Dua prezencë të rregullt", "I want a consistent presence"),
        ],
      ]
    : [
        ["websites", c("Dua një website", "I want a website")],
        ["graphic-design", c("Dua dizajn grafik", "I need graphic design")],
        [
          "social-management",
          c("Menaxhim social media", "Social media management"),
        ],
      ];
  return (
    <div className="assistant">
      {open && (
        <div className="assistant-panel">
          <div className="assistant-heading">
            <b>{t(c("Çfarë po mendon?", "What do you have in mind?"))}</b>
            <button
              className="icon-button"
              onClick={() => setOpen(false)}
              aria-label={t(c("Mbyll", "Close"))}
            >
              <X size={18} />
            </button>
          </div>
          <p>
            {t(c("Çdo gjë nis me një ide.", "Everything starts with an idea."))}
          </p>
          {options.map(([s, label]) => (
            <Link
              key={s}
              href={`/contact?service=${s}`}
              onClick={() => setOpen(false)}
            >
              {t(label)}
              <ArrowUpRight size={16} />
            </Link>
          ))}
          <button className="guide-button" onClick={() => setGuide(!guide)}>
            {t(
              guide
                ? c("← Kthehu", "← Go back")
                : c("Nuk e di çfarë më duhet", "I am not sure what I need"),
            )}
          </button>
        </div>
      )}
      <button
        className="assistant-trigger"
        aria-label={t(
          c("Asistenti i projektit Artly", "Artly project assistant"),
        )}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Asterisk size={28} />}
      </button>
    </div>
  );
}
