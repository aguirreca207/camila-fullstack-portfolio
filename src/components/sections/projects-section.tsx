"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { projects } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/sections/section-heading";
import { cn } from "@/lib/utils";

const filters = [
  "All",
  "Frontend",
  "Full Stack",
  "SaaS",
  "Dashboard",
  "Landing Page",
  "E-commerce",
  "Automation",
  "API"
] as const;

export function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visibleProjects = useMemo(
    () => projects.filter((project) => filter === "All" || project.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      <div className="absolute inset-x-0 top-20 -z-10 h-80 bg-[radial-gradient(circle,#43B8BA22,transparent_62%)]" />
      <div className="container-xl">
        <SectionHeading
          eyebrow="Projects"
          title="Proyectos pensados para mostrar código, criterio visual y producto."
          description="Una base editable para ir sumando aplicaciones reales, demos, repositorios y case studies a medida que Camila siga construyendo."
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={cn(
                "rounded-full border border-[var(--border)] px-4 py-2 text-sm text-muted transition",
                filter === item && "bg-foreground text-background"
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.button
                layout
                key={project.title}
                className="text-left"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                onClick={() => setSelected(project)}
              >
                <Card className="group h-full overflow-hidden p-7 transition duration-500 hover:-translate-y-1 hover:border-accent/50">
                  {project.image ? (
                    <div className="relative mb-7 aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--border)] bg-foreground/5">
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                  ) : null}
                  <div className="mb-10 flex items-start justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge>{project.category}</Badge>
                      <Badge>{project.status}</Badge>
                      <Badge>{project.year}</Badge>
                    </div>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-background transition group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <h3 className="text-3xl font-semibold tracking-normal">{project.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-muted">{project.summary}</p>
                  <p className="mt-8 text-2xl font-semibold text-secondary">{project.impact}</p>
                  <ul className="mt-5 grid gap-2 text-sm text-muted">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full bg-foreground/8 px-3 py-1 text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-background/70 p-5 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="glass max-h-[86vh] w-full max-w-3xl overflow-y-auto rounded-[24px] p-7"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>{selected.category}</Badge>
                  <Badge>{selected.status}</Badge>
                  <Badge>{selected.year}</Badge>
                </div>
                <Button
                  aria-label="Cerrar vista de proyecto"
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelected(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <h3 className="mt-6 text-4xl font-semibold">{selected.title}</h3>
              {selected.image ? (
                <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--border)] bg-foreground/5">
                  <Image
                    src={selected.image}
                    alt={`${selected.title} screenshot`}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 768px) 768px, 100vw"
                  />
                </div>
              ) : null}
              <p className="mt-4 leading-8 text-muted">{selected.summary}</p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-[var(--border)] p-5">
                  <p className="text-sm text-muted">Problema</p>
                  <p className="mt-2 text-sm leading-7">{selected.problem}</p>
                </div>
                <div className="rounded-2xl border border-[var(--border)] p-5">
                  <p className="text-sm text-muted">Solución técnica</p>
                  <p className="mt-2 text-sm leading-7">{selected.solution}</p>
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-[var(--border)] p-5">
                <p className="text-sm text-muted">Resultado / foco</p>
                <p className="mt-1 text-2xl font-semibold text-secondary">{selected.impact}</p>
              </div>
              <div className="mt-4 rounded-2xl border border-[var(--border)] p-5">
                <p className="text-sm text-muted">Features principales</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {selected.features.map((feature) => (
                    <span key={feature} className="rounded-full bg-foreground/8 px-3 py-2 text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {selected.stack.map((item) => (
                  <span key={item} className="rounded-full bg-foreground/8 px-3 py-1 text-xs">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {selected.demoUrl ? (
                  <Button asChild variant="premium">
                    <Link href={selected.demoUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Ver demo
                    </Link>
                  </Button>
                ) : (
                  <Button variant="premium" disabled>
                    <ExternalLink className="h-4 w-4" />
                    Demo próximamente
                  </Button>
                )}
                <Button asChild variant="outline">
                  <Link href={selected.githubUrl} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" />
                    Ver código
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
