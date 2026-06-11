import { animate, inView, scroll, stagger } from "https://cdn.jsdelivr.net/npm/motion@12.23.6/+esm";

const EASE = [0.22, 1, 0.36, 1];
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.getElementById("year").textContent = String(new Date().getFullYear());

if (reduced) {
  document.documentElement.classList.remove("motion-pending");
  return;
}

const motionPresets = {
  up: { opacity: [0, 1], y: [32, 0] },
  left: { opacity: [0, 1], x: [-36, 0] },
  right: { opacity: [0, 1], x: [36, 0] },
};

function revealOnView(selector, preset, amount = 0.25) {
  document.querySelectorAll(selector).forEach((el) => {
    inView(
      el,
      () => {
        animate(el, preset, { duration: 0.65, ease: EASE });
      },
      { amount }
    );
  });
}

// Hero parallax
const hero = document.querySelector(".hero");
const heroBg = document.querySelector(".hero-bg");
if (hero && heroBg) {
  scroll(animate(heroBg, { y: ["0%", "18%"], scale: [1.05, 1.12] }), {
    target: hero,
    offset: ["start start", "end start"],
  });
}

// Hero entrance stagger
const heroItems = document.querySelectorAll("[data-hero-item]");
if (heroItems.length) {
  animate(
    heroItems,
    { opacity: [0, 1], y: [28, 0] },
    { delay: stagger(0.14, { startDelay: 0.1 }), duration: 0.65, ease: EASE }
  );
  const heroAccent = document.querySelector(".hero-accent");
  if (heroAccent) {
    animate(heroAccent, { scaleX: [0, 1] }, { duration: 1.1, delay: 0.55, ease: EASE, transformOrigin: "left center" });
  }
}

// Glass card list stagger
const glassItems = document.querySelectorAll("[data-glass-item]");
if (glassItems.length) {
  animate(
    glassItems,
    { opacity: [0, 1], x: [16, 0] },
    { delay: stagger(0.12, { startDelay: 0.5 }), duration: 0.5, ease: EASE }
  );
}

// Scroll reveals
revealOnView('[data-motion="up"]', motionPresets.up);
revealOnView('[data-motion="left"]', motionPresets.left);
revealOnView('[data-motion="right"]', motionPresets.right);

// Stagger groups (pain cards, stats, steps)
document.querySelectorAll("[data-stagger-group]").forEach((group) => {
  const items = group.querySelectorAll("[data-stagger-item]");
  if (!items.length) return;
  inView(
    group,
    () => {
      animate(
        items,
        { opacity: [0, 1], y: [28, 0] },
        { delay: stagger(0.1), duration: 0.55, ease: EASE }
      );
    },
    { amount: 0.15 }
  );
});

// Draw lines (gold accent, timeline connector)
document.querySelectorAll("[data-draw-line]").forEach((el) => {
  inView(
    el,
    () => {
      animate(el, { scaleX: [0, 1] }, { duration: 1.1, ease: EASE });
    },
    { amount: 0.5 }
  );
});

// Timeline dots pop
document.querySelectorAll(".timeline-dot").forEach((dot) => {
  inView(
    dot,
    () => {
      animate(dot, { scale: [0, 1.2, 1] }, { duration: 0.45, ease: EASE });
    },
    { amount: 0.6 }
  );
});

// CTA glow drift
const glow = document.querySelector(".cta-glow");
if (glow) {
  animate(
    glow,
    { x: [0, 30, 0], y: [0, -20, 0] },
    { duration: 10, repeat: Infinity, ease: "easeInOut" }
  );
}

// Button hover spring (lightweight)
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    animate(btn, { y: -2 }, { type: "spring", stiffness: 420, damping: 24 });
  });
  btn.addEventListener("mouseleave", () => {
    animate(btn, { y: 0 }, { type: "spring", stiffness: 420, damping: 24 });
  });
});

document.documentElement.classList.remove("motion-pending");
