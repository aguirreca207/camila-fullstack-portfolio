"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { testimonials } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  return (
    <section id="testimonials" className="section-pad">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Social proof"
          title="Colaboradores que valoran código claro, buen diseño y comunicación precisa."
          description="La experiencia de trabajar con Camila se centra en resolver problemas, cuidar los detalles y avanzar con criterio técnico."
        />
        <Card className="mx-auto max-w-4xl overflow-hidden p-6 md:p-10">
          <div className="flex items-center justify-between gap-4">
            <Quote className="h-10 w-10 text-secondary" />
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setActive((active + 1) % testimonials.length)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="mt-10 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              “{testimonial.quote}”
            </p>
            <div className="mt-10">
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-muted">{testimonial.role}</p>
            </div>
          </motion.div>
        </Card>
      </div>
    </section>
  );
}
