"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroScene } from "@/components/animations/hero-scene";
import { TypingText } from "@/components/animations/typing-text";
import { siteConfig } from "@/constants/site";

export function HeroSection() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-particle", {
        y: "random(-26, 26)",
        x: "random(-18, 18)",
        opacity: "random(0.28, 0.72)",
        duration: "random(2.8, 5.2)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.08
      });
    }, particlesRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-28 pt-32"
    >
      <HeroScene />
      <div className="grid-mask absolute inset-0 -z-20 opacity-50" />
      <div ref={particlesRef} className="absolute inset-0 -z-10">
        {Array.from({ length: 26 }).map((_, index) => (
          <span
            key={index}
            className="hero-particle absolute h-1.5 w-1.5 rounded-full bg-secondary/70 shadow-[0_0_24px_#43B8BA]"
            style={{
              left: `${8 + ((index * 37) % 86)}%`,
              top: `${12 + ((index * 23) % 74)}%`
            }}
          />
        ))}
      </div>

      <div className="container-xl grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge>Full Stack Developer / Product Builder</Badge>
          <h1 className="mt-6 max-w-5xl text-balance text-5xl font-semibold leading-[0.98] tracking-normal md:text-6xl xl:text-7xl">
            Construyo <TypingText /> full stack que combinan diseño, código y producto.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted md:text-xl">
            Soy Camila Andrea Aguirre, desarrolladora full stack enfocada en crear aplicaciones
            modernas, rápidas, escalables y visualmente impecables.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="premium">
              <Link href="#projects">
                <Code2 className="h-4 w-4" />
                Ver proyectos
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">
                Trabajemos juntos
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-4 text-muted">
            <Link href={siteConfig.socials.linkedin} aria-label="LinkedIn" className="hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href={siteConfig.socials.github} aria-label="GitHub" className="hover:text-foreground">
              <Github className="h-5 w-5" />
            </Link>
            <Link href={siteConfig.socials.x} aria-label="X" className="hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[460px] xl:max-w-[500px]"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-6 rounded-[42px] bg-[conic-gradient(from_180deg,#176A74,#43B8BA,#EB6E25,#176A74)] opacity-35 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[28px] p-3">
            <Image
              src="/camila-portfolio-avatar.png"
              alt="Retrato premium de Camila Andrea Aguirre como desarrolladora full stack"
              width={900}
              height={900}
              priority
              className="aspect-[4/5] w-full rounded-[22px] object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-black/42 p-4 text-white backdrop-blur-xl">
              <p className="text-sm text-white/70">Stack principal</p>
              <p className="mt-1 text-2xl font-semibold">React · Next.js · APIs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
