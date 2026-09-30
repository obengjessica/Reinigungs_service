"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "left" | "right" | "up";
};

export function Reveal({ children, className, delay = 0, from = "up" }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = from === "left" ? { x: -20 } : from === "right" ? { x: 20 } : { y: 20 };

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, ...offset }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.6,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}