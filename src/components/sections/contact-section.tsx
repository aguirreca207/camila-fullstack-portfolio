"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig } from "@/constants/site";

type FormState = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: ""
};

const projectTypes = [
  "Web app",
  "Landing page",
  "Dashboard",
  "SaaS",
  "E-commerce",
  "API / Backend",
  "UI redesign",
  "Otro"
];

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !form.name.trim() ||
      !/^\S+@\S+\.\S+$/.test(form.email) ||
      !form.projectType ||
      form.message.length < 18
    ) {
      toast.error("Completa nombre, email válido, tipo de proyecto y un mensaje con contexto.");
      return;
    }

    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setForm(initialState);
      toast.success("Solicitud preparada. Conecta tu proveedor de email en producción.");
    }, 850);
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-96 bg-[radial-gradient(circle,#EB6E2522,transparent_60%)]" />
      <div className="container-xl">
        <SectionHeading
          eyebrow="Contact"
          title="Construyamos una aplicación, landing o dashboard con una base técnica impecable."
          description="Cuéntame qué quieres crear, mejorar o lanzar. Puedo ayudarte con frontend, backend, UI, APIs y despliegue."
        />
        <div className="grid gap-5 lg:grid-cols-[.78fr_1fr]">
          <Card className="p-8">
            <Mail className="h-8 w-8 text-secondary" />
            <h3 className="mt-8 text-3xl font-semibold">Disponible para proyectos full stack.</h3>
            <p className="mt-4 leading-8 text-muted">
              Podemos construir una app desde cero, mejorar un producto existente, desarrollar una
              landing premium, crear un dashboard o colaborar en una arquitectura backend sólida.
            </p>
            <Button asChild className="mt-8" variant="outline">
              <Link href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </Card>
          <Card className="p-6 md:p-8">
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  aria-label="Nombre"
                  placeholder="Nombre"
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                />
                <Input
                  aria-label="Email"
                  placeholder="Email"
                  type="email"
                  value={form.email}
                  onChange={(event) => update("email", event.target.value)}
                />
              </div>
              <Input
                aria-label="Tipo de proyecto"
                placeholder="Tipo de proyecto"
                list="project-types"
                value={form.projectType}
                onChange={(event) => update("projectType", event.target.value)}
              />
              <datalist id="project-types">
                {projectTypes.map((type) => (
                  <option key={type} value={type} />
                ))}
              </datalist>
              <Input
                aria-label="Presupuesto"
                placeholder="Presupuesto estimado"
                value={form.budget}
                onChange={(event) => update("budget", event.target.value)}
              />
              <Textarea
                aria-label="Mensaje"
                placeholder="Qué estás construyendo, qué quieres mejorar y por qué ahora..."
                value={form.message}
                onChange={(event) => update("message", event.target.value)}
              />
              <Button type="submit" size="lg" variant="premium" disabled={loading}>
                <Send className="h-4 w-4" />
                {loading ? "Preparando..." : "Enviar solicitud"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
