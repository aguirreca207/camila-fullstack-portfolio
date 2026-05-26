"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 22, mass: 0.2 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-1 origin-left bg-[linear-gradient(90deg,#176A74,#43B8BA,#EB6E25)]"
      style={{ scaleX, width: "100%" }}
    />
  );
}
