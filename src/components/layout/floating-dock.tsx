"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navItems } from "@/data/portfolio";

export function FloatingDock() {
  return (
    <motion.nav
      className="fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 rounded-full border border-[var(--border)] bg-background/55 px-2 py-2 shadow-2xl backdrop-blur-2xl md:flex"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group relative grid h-11 w-11 place-items-center rounded-full text-muted transition hover:bg-foreground hover:text-background"
          aria-label={item.label}
        >
          <item.icon className="h-4 w-4" />
          <span className="pointer-events-none absolute bottom-14 rounded-full bg-foreground px-3 py-1 text-xs text-background opacity-0 transition group-hover:opacity-100">
            {item.label}
          </span>
        </Link>
      ))}
    </motion.nav>
  );
}
