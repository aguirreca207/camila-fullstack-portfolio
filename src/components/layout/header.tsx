"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/constants/site";
import { navItems } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-4 z-40 px-4 transition-all",
        scrolled ? "top-3" : "top-5"
      )}
    >
      <nav className="container-xl glass flex h-16 items-center justify-between rounded-full px-4">
        <Link href="#hero" className="flex items-center gap-3 font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background">
            {siteConfig.initials}
          </span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-muted transition hover:bg-foreground/8 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex" variant="premium">
            <Link href="#contact">Trabajemos juntos</Link>
          </Button>
          <Button className="md:hidden" variant="outline" size="icon" onClick={() => setOpen(!open)}>
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>
      {open && (
        <motion.div
          className="container-xl glass mt-3 rounded-[18px] p-3 md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-muted hover:bg-foreground/8 hover:text-foreground"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
