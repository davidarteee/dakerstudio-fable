"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span";
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Reveal({ children, delay = 0, y = 24, className }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: EASE },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : y },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  };
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
