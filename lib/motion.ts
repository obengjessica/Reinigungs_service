"use client";

import { useReducedMotion } from "framer-motion";

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export function useMotionSafe() {
  const prefersReducedMotion = useReducedMotion();
  return {
    prefersReducedMotion: Boolean(prefersReducedMotion),
    viewport: { once: true, amount: 0.2 as const },
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    instant: prefersReducedMotion
      ? { initial: false as const, animate: "visible" as const }
      : {},
  };
}
