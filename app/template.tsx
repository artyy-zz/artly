"use client";
import { useReducedMotionPreference } from "@/lib/use-reduced-motion";
import { motion } from "framer-motion";
export default function Template({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotionPreference();
  return (
    <motion.div
      className="page-transition"
      initial={reduced ? false : { opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduced ? 0 : 0.18 }}
    >
      {children}
    </motion.div>
  );
}
