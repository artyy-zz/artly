"use client";
import { useReducedMotionPreference } from "@/lib/use-reduced-motion";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
export function Button({
  children,
  href,
  secondary = false,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  secondary?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`button ${secondary ? "secondary" : "primary"} ${className}`}
    >
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotionPreference();
  return (
    <motion.div
      className={`reveal ${className}`}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: reduced ? 0 : 0.48,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
