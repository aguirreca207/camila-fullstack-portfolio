import { services } from "@/data/portfolio";
import { Reveal } from "@/components/animations/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";

export function ServicesSection() {
  return (
    <section id="services" className="section-pad">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Skills"
          title="Las capas técnicas y visuales que conecto para crear productos completos."
          description="Desde la interfaz hasta el backend, trabajo cada detalle para que la experiencia sea sólida, mantenible y lista para producción."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.07}>
              <Card className="group h-full overflow-hidden transition duration-500 hover:-translate-y-2 hover:border-secondary/45">
                <CardHeader>
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-secondary/12 text-secondary transition group-hover:scale-110 group-hover:bg-secondary group-hover:text-background">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-muted">{service.description}</p>
                  <p className="mt-8 rounded-full bg-foreground/8 px-4 py-2 text-sm font-semibold text-foreground">
                    {service.outcome}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
