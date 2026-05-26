import { experience } from "@/data/portfolio";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Experience"
          title="Evolución profesional enfocada en construir, iterar y lanzar software."
          description="Una trayectoria editable que puede crecer con roles, proyectos freelance, colaboraciones remotas y productos propios."
        />
        <div className="mx-auto max-w-4xl">
          {experience.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.08}>
              <div className="relative border-l border-[var(--border)] pb-12 pl-8 last:pb-0">
                <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-4 border-background bg-secondary shadow-[0_0_28px_#43B8BA]" />
                <p className="text-sm font-medium text-accent">{item.period}</p>
                <h3 className="mt-2 text-2xl font-semibold">{item.role}</h3>
                <p className="mt-1 text-sm text-muted">{item.company}</p>
                <p className="mt-4 max-w-2xl leading-8 text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
