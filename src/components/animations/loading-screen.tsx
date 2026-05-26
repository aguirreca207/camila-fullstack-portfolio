"use client";

import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-background">
      <motion.div
        className="relative h-28 w-28 rounded-full border border-secondary/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_28px_#EB6E25]" />
      </motion.div>
      <p className="absolute mt-44 text-xs font-medium uppercase tracking-[0.28em] text-muted">
        Loading signal
      </p>
    </div>
  );
}
