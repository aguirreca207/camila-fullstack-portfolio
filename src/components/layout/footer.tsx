import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { siteConfig } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-12">
      <div className="container-xl flex flex-col items-center justify-between gap-6 text-sm text-muted md:flex-row">
        <p>© 2026 {siteConfig.name}. Full stack development con diseño, código y producto.</p>
        <div className="flex items-center gap-3">
          <Link href={siteConfig.socials.linkedin} aria-label="LinkedIn" className="hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link href={siteConfig.socials.github} aria-label="GitHub" className="hover:text-foreground">
            <Github className="h-4 w-4" />
          </Link>
          <Link href={siteConfig.socials.x} aria-label="X" className="hover:text-foreground">
            <Twitter className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
