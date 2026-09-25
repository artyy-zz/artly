"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useReducedMotionPreference } from "@/lib/use-reduced-motion";

const artiSources = {
  idle: "/arti/arti-idle.png",
  wave: "/arti/arti-wave.png",
  thinking: "/arti/arti-thinking.png",
  phone: "/arti/arti-phone.png",
  laptop: "/arti/arti-laptop.png",
  designing: "/arti/arti-designing.png",
  pointing: "/arti/arti-pointing.png",
  celebrate: "/arti/arti-celebrate.png",
} as const;

export type ArtiPose = keyof typeof artiSources;

export function Arti({
  pose = "idle",
  size = 240,
  interactive = false,
  className = "",
  preload = false,
  label,
  sizes = "(max-width: 700px) 42vw, 280px",
}: {
  pose?: ArtiPose;
  size?: number | string;
  interactive?: boolean;
  className?: string;
  preload?: boolean;
  label?: string;
  sizes?: string;
}) {
  const reduced = useReducedMotionPreference();
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 90, damping: 24 });
  const rotateY = useSpring(tiltY, { stiffness: 90, damping: 24 });

  return (
    <div
      className={`arti ${interactive ? "arti-interactive" : ""} ${className}`}
      style={{ width: typeof size === "number" ? `${size}px` : size }}
      onPointerMove={(event) => {
        if (!interactive || reduced || event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        tiltX.set(-((event.clientY - rect.top) / rect.height - 0.5) * 4);
        tiltY.set(((event.clientX - rect.left) / rect.width - 0.5) * 5);
      }}
      onPointerLeave={() => {
        tiltX.set(0);
        tiltY.set(0);
      }}
    >
      <motion.div
        className="arti-depth"
        style={reduced ? undefined : { rotateX, rotateY }}
        animate={reduced ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="arti-direction">
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              className="arti-pose"
              key={pose}
              initial={reduced ? false : { opacity: 0, scale: 0.975, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, scale: 0.985, y: -3 }}
              transition={{
                duration: reduced ? 0 : 0.34,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src={artiSources[pose]}
                alt={label ?? ""}
                fill
                preload={preload}
                loading={preload ? undefined : "lazy"}
                sizes={sizes}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
      <span className="arti-shadow" aria-hidden="true" />
    </div>
  );
}
