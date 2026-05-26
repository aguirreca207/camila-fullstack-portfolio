"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const x = useSpring(mouseX, { stiffness: 500, damping: 38 });
  const y = useSpring(mouseY, { stiffness: 500, damping: 38 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      mouseX.set(event.clientX - 14);
      mouseY.set(event.clientY - 14);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[70] hidden h-7 w-7 rounded-full border border-secondary/60 mix-blend-difference md:block"
      style={{ x, y }}
    />
  );
}
