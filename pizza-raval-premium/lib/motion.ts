/** Shared Framer Motion variants — keep the language consistent across sections. */

export const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.6, ease } },
};

export const stagger = (delayChildren = 0.05, staggerChildren = 0.05) => ({
  hidden: { opacity: 1 },
  show:   { opacity: 1, transition: { delayChildren, staggerChildren } },
});

export const maskReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  show:   { clipPath: "inset(0 0% 0 0)", transition: { duration: 1.1, ease } },
};

export const inViewProps = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.05, margin: "0px 0px -10% 0px" },
} as const;
