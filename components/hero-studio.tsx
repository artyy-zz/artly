"use client";
import { useReducedMotionPreference } from "@/lib/use-reduced-motion";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { c, projects } from "@/lib/content";
import { useSite } from "./providers";
import { Mockup } from "./mockup";
export function HeroStudio() {
  const { t } = useSite();
  const reduced = useReducedMotionPreference();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 80, damping: 24 });
  const rotateY = useSpring(y, { stiffness: 80, damping: 24 });
  const project = projects[0];
  return (
    <div
      className="hero-canvas"
      onPointerMove={(event) => {
        if (reduced || event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(-((event.clientY - rect.top) / rect.height - 0.5) * 3);
        y.set(((event.clientX - rect.left) / rect.width - 0.5) * 3);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div className="canvas-grid" />
      <div className="canvas-label">
        <span>
          {project.name} / {t(c("KONCEPT NGA ARTLY", "ARTLY CONCEPT"))}
        </span>
        <span>001 — {t(c("NJË BOTË VIZUALE", "A VISUAL WORLD"))}</span>
      </div>
      <span className="canvas-orbit" aria-hidden="true" />
      <motion.div
        className="studio-composition"
        style={reduced ? {} : { rotateX, rotateY }}
      >
        <motion.div
          className="studio-web"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0, rotate: reduced ? 0 : -3 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <Mockup
            project={project}
            priority
            sizes="(max-width: 700px) 65vw, 650px"
          />
          <span className="piece-label">
            02 / {t(c("PËRVOJA DIGJITALE", "DIGITAL EXPERIENCE"))}
          </span>
        </motion.div>
        <motion.div
          className="studio-identity"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, rotate: reduced ? 0 : -6 }}
          transition={{ duration: 0.5, delay: 0.16 }}
        >
          <Mockup project={project} variant="identity" />
          <span className="piece-label">
            01 / {t(c("IDENTITETI", "THE IDENTITY"))}
          </span>
        </motion.div>
        <motion.div
          className="studio-print"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0, rotate: reduced ? 0 : 7 }}
          transition={{ duration: 0.5, delay: 0.24 }}
        >
          <Mockup project={project} variant="social" />
        </motion.div>
        <motion.div
          className="studio-menu"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0, rotate: reduced ? 0 : 3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Mockup project={project} variant="menu" />
          <span className="piece-label">03 / PRINT & SOCIAL</span>
        </motion.div>
      </motion.div>
      <div className="canvas-bottom">
        <span>
          {t(
            c("NJË BRAND. ÇDO PIKË KONTAKTI.", "ONE BRAND. EVERY TOUCHPOINT."),
          )}
        </span>
        <ArrowUpRight size={18} />
      </div>
    </div>
  );
}
