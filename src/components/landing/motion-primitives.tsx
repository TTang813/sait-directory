"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";
import { useRef, type CSSProperties, type ReactNode } from "react";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
};

export const fadeInItem: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

export const scaleInItem: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  amount?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  amount = 0.25,
}: RevealProps) {
  const reduced = useReducedMotion();

  const initial =
    direction === "left"
      ? { opacity: 0, x: -36 }
      : direction === "right"
        ? { opacity: 0, x: 36 }
        : direction === "scale"
          ? { opacity: 0, scale: 0.94 }
          : { opacity: 0, y: 32 };

  return (
    <motion.div
      className={className}
      initial={reduced ? false : initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.65, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: 0.06 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reduced ? undefined : fadeUpItem}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={
        reduced
          ? undefined
          : { y: -6, transition: { type: "spring", stiffness: 380, damping: 22 } }
      }
    >
      {children}
    </motion.div>
  );
}

export function MagneticButton({
  children,
  className,
  ...props
}: HTMLMotionProps<"a">) {
  const reduced = useReducedMotion();

  return (
    <motion.a
      className={className}
      whileHover={reduced ? undefined : { scale: 1.03 }}
      whileTap={reduced ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
      {...props}
    >
      {children}
    </motion.a>
  );
}

export function ParallaxHeroBg({
  imageUrl,
  children,
}: {
  imageUrl: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12]);

  return (
    <section ref={ref} className="relative min-h-[calc(100dvh-4rem)] flex items-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${imageUrl})`,
          y: reduced ? 0 : y,
          scale: reduced ? 1.05 : scale,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(11, 44, 95, 0.88) 0%, rgba(31, 33, 46, 0.78) 42%, rgba(31, 33, 46, 0.55) 100%)",
        }}
        aria-hidden
      />
      <motion.div
        className="absolute -right-24 top-1/4 h-72 w-72 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: "rgba(200, 164, 93, 0.18)" }}
        animate={reduced ? undefined : { opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      {children}
    </section>
  );
}

export function DrawLine({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? { scaleX: 1 } : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.1, ease: EASE_OUT }}
      style={{ transformOrigin: "left center", ...style }}
    />
  );
}
