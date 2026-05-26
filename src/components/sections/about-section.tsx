import { stats } from "@/data/portfolio";
import { Reveal } from "@/components/animations/reveal";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-xl">
        <SectionHeading
          eyebrow="About"
          title="Desarrollo productos que no solo funcionan: se sienten claros, rápidos y bien diseñados."
          description="Trabajo entre frontend, backend, UX/UI y arquitectura para convertir ideas en aplicaciones reales, escalables y listas para crecer."
        />
        <div className="grid gap-5 lg:grid-cols-[1fr_.82fr]">
          <Reveal>
            <Card className="h-full p-8 md:p-10">
              <p className="text-2xl leading-10 text-foreground md:text-3xl">
                Me gusta construir productos que no solo funcionan, sino que se sienten bien.
                Combino frontend, backend, diseño de interfaces y pensamiento de producto para
                crear soluciones completas, escalables y cuidadas en cada detalle.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-[var(--border)] p-5">
                    <p className="text-4xl font-semibold text-secondary">{stat.value}</p>
                    <p className="mt-2 text-sm text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.12}>
            <Card className="h-full p-8 md:p-10">
              <div className="space-y-8">
                {["Entender el producto", "Construir la arquitectura", "Pulir la experiencia"].map(
                  (item, index) => (
                    <div key={item} className="flex gap-5">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-foreground text-sm font-semibold text-background">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold">{item}</h3>
                        <p className="mt-2 text-sm leading-7 text-muted">
                          {index === 0 &&
                            "Aterrizo objetivos, usuarios, flujos y funcionalidades antes de escribir código."}
                          {index === 1 &&
                            "Diseño componentes, APIs, datos y estados para que el producto sea mantenible."}
                          {index === 2 &&
                            "Cuido performance, responsive, accesibilidad, microinteracciones y deploy."}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
