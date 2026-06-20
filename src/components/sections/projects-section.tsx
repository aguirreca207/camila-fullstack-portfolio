"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpenCheck,
  Check,
  ExternalLink,
  Github,
  MessageCircle,
  Sparkles,
  Smartphone,
  X,
  Zap
} from "lucide-react";
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
  "Mobile",
  "SaaS",
  "Dashboard",
  "Landing Page",
  "E-commerce",
  "Automation",
  "API"
] as const;

const voxoraFlow = [
  {
    title: "Álbumes",
    description: "Frases agrupadas por situaciones reales para estudiar con intención.",
    icon: BookOpenCheck
  },
  {
    title: "Práctica diaria",
    description: "Traducción, escritura, escucha y corrección flexible por sesión.",
    icon: Zap
  },
  {
    title: "Evaluación en chat",
    description: "Conversación guiada para usar lo aprendido en contexto.",
    icon: MessageCircle
  }
];

function VoxoraMark({ compact = false, feature = false }: { compact?: boolean; feature?: boolean }) {
  return (
    <span
      className={cn(
        "relative grid shrink-0 place-items-center overflow-hidden rounded-[10px] bg-[linear-gradient(135deg,#7DDCC7,#8ECDF8_52%,#E9D5FF)] shadow-[0_12px_24px_rgba(17,24,39,0.12)]",
        compact && "h-8 w-8",
        feature && "h-12 w-12 rounded-[13px]",
        !compact && !feature && "h-11 w-11"
      )}
    >
      <span className="absolute left-2 top-2 h-2.5 w-2.5 rounded-full bg-white/40" />
      <span className="relative grid h-[58%] w-[58%] place-items-center rounded-[8px] bg-white/90">
        <Check className={cn("text-[#111827]", compact ? "h-4 w-4" : "h-5 w-5")} strokeWidth={3} />
      </span>
      <Sparkles
        className={cn("absolute right-1.5 top-1.5 fill-[#FFD166] text-[#FFD166]", compact ? "h-3 w-3" : "h-4 w-4")}
      />
    </span>
  );
}

function ProjectPreview({ project, compact = false }: { project: Project; compact?: boolean }) {
  const isVoxora = project.title === "Voxora English";

  if (isVoxora) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-[#F2C98F]/70 bg-[#FFF7E8]",
          compact ? "mt-6 aspect-[16/9]" : "mb-7 aspect-[16/9]"
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,#7DDCC755,transparent_30%),radial-gradient(circle_at_86%_18%,#FF8FA344,transparent_28%),linear-gradient(135deg,#FFF7E8,#F8EDFF_58%,#EAF8FF)]" />
        <div className="absolute left-5 top-5 z-10 rounded-full border border-white/70 bg-white/85 px-3 py-1 text-xs font-semibold text-[#111827] shadow-sm backdrop-blur">
          Flutter Android
        </div>
        <div className="absolute right-5 top-5 z-10 rounded-full bg-[#111827] px-3 py-1 text-xs font-semibold text-white shadow-sm">
          Learning app
        </div>
        <div className="absolute inset-x-8 bottom-6 top-12 grid grid-cols-[0.82fr_1fr] items-end gap-5">
          <div className="hidden h-full flex-col justify-end gap-3 sm:flex">
            <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_18px_50px_rgba(17,24,39,0.12)]">
              <p className="text-xs font-semibold text-[#7C6F86]">Ruta de aprendizaje</p>
              <div className="mt-2 flex items-center gap-3">
                <VoxoraMark feature />
                <p className="text-2xl font-bold leading-tight text-[#111827]">
                  Voxora
                  <br />
                  English
                </p>
              </div>
              <p className="mt-2 text-xs leading-5 text-[#7C6F86]">
                Albums, practice, reading and chat evaluation in one daily flow.
              </p>
              <div className="mt-4 h-2 rounded-full bg-[#F3E7D7]">
                <div className="h-full w-[72%] rounded-full bg-[#7DDCC7]" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Lectura Viva", "Retos", "Voz US", "Chat"].map((item, index) => (
                <div
                  key={item}
                  className={cn(
                    "rounded-xl border border-white/70 px-3 py-2 text-xs font-semibold text-[#111827] shadow-sm",
                    index === 0 && "bg-[#E9D5FF]/80",
                    index === 1 && "bg-[#FFD166]/80",
                    index === 2 && "bg-[#7DDCC7]/80",
                    index === 3 && "bg-[#8ECDF8]/80"
                  )}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto h-[92%] w-[58%] min-w-[190px] max-w-[260px] overflow-hidden rounded-[32px] border-[10px] border-[#1F2937] bg-[#FFFBF5] shadow-[0_26px_70px_rgba(17,24,39,0.28)]">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} mobile preview`}
                fill
                className="object-cover object-top"
                sizes="260px"
              />
            ) : null}
            <div className="absolute inset-x-16 top-1 h-1.5 rounded-full bg-[#1F2937]" />
          </div>
        </div>
      </div>
    );
  }

  return project.image ? (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-[var(--border)] bg-foreground/5",
        compact ? "mt-6 aspect-[16/9]" : "mb-7 aspect-[16/9]"
      )}
    >
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        fill
        className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
        sizes={compact ? "(min-width: 768px) 768px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
      />
    </div>
  ) : null;
}

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
                  <ProjectPreview project={project} />
                  <div className="mb-10 flex items-start justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge>{project.category}</Badge>
                      <Badge>{project.status}</Badge>
                      <Badge>{project.year}</Badge>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-foreground text-background shadow-[0_16px_40px_rgba(67,184,186,0.18)] transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-accent group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
              data-lenis-prevent
              className="glass max-h-[86vh] w-full max-w-3xl touch-pan-y overflow-y-auto overscroll-contain rounded-[24px] p-7"
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
              <ProjectPreview project={selected} compact />
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
              {selected.title === "Voxora English" ? (
                <div className="mt-4 rounded-2xl border border-[#F2C98F]/60 bg-[#FFF7E8]/80 p-5 text-[#111827]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#7DDCC7]">
                      <Smartphone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">Caso de estudio móvil</p>
                      <p className="text-xs text-[#7C6F86]">
                        La demo vive como flujo Android: se muestra con mockup, arquitectura y recorrido de producto.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3 md:grid-cols-3">
                    {voxoraFlow.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div key={item.title} className="rounded-2xl border border-white/80 bg-white/70 p-4">
                          <Icon className="h-5 w-5 text-[#111827]" />
                          <p className="mt-3 text-sm font-semibold">{item.title}</p>
                          <p className="mt-2 text-xs leading-5 text-[#7C6F86]">{item.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
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
                ) : null}
                <Button asChild variant={selected.demoUrl ? "outline" : "premium"}>
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
