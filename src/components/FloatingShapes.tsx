import { motion, useReducedMotion } from "motion/react";

export function FloatingShapes({ className = "" }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={"pointer-events-none absolute inset-0 overflow-hidden " + className} aria-hidden="true">
      <motion.div
        className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-(--color-accent)/10 blur-3xl"
        animate={shouldReduceMotion ? undefined : { y: [0, 22, 0], x: [0, -12, 0] }}
        transition={shouldReduceMotion ? undefined : { duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-28 top-1/3 h-64 w-64 rounded-full bg-(--color-gold)/7 blur-3xl"
        animate={shouldReduceMotion ? undefined : { y: [0, -18, 0], x: [0, 14, 0] }}
        transition={shouldReduceMotion ? undefined : { duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}