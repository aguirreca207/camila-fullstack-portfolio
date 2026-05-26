import {
  ArrowUpRight,
  Code2,
  DatabaseZap,
  Gauge,
  LayoutDashboard,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import type { Experience, Project, Service, Testimonial } from "@/types/portfolio";

export const services: Service[] = [
  {
    title: "Frontend Development",
    description: "Interfaces modernas con React, Next.js, TailwindCSS y animaciones fluidas.",
    icon: Code2,
    outcome: "UI rápida y cuidada"
  },
  {
    title: "Backend Development",
    description: "APIs robustas, lógica de negocio, autenticación, integraciones y arquitectura server-side.",
    icon: ServerCog,
    outcome: "Sistemas confiables"
  },
  {
    title: "UI Engineering",
    description: "Componentes reutilizables, accesibilidad, estados de interfaz y microinteracciones premium.",
    icon: LayoutDashboard,
    outcome: "Diseño en código"
  },
  {
    title: "Full Product Builds",
    description: "MVPs, dashboards, SaaS, landing pages, plataformas web y herramientas internas.",
    icon: Rocket,
    outcome: "Del concepto al deploy"
  },
  {
    title: "Database & Architecture",
    description: "Modelado de datos, conexiones con bases de datos, escalabilidad y buenas prácticas.",
    icon: DatabaseZap,
    outcome: "Base técnica sólida"
  },
  {
    title: "Deployment & Performance",
    description: "Optimización, SEO técnico, Core Web Vitals y despliegues listos para producción.",
    icon: Gauge,
    outcome: "Experiencias veloces"
  }
];

export const projects: Project[] = [
  {
    title: "Mundo Mascotas",
    category: "Frontend",
    summary:
      "Frontend web para una plataforma de mascotas con estructura de tienda, adopciones y conexión con API.",
    impact: "Proyecto real publicado en GitHub con evolución funcional y arquitectura organizada",
    problem:
      "El proyecto necesitaba una interfaz clara para presentar productos, adopciones y contenido relacionado con mascotas.",
    solution:
      "Desarrollé la estructura frontend, páginas principales, organización de assets y conexión inicial con módulos de API/backend.",
    features: ["Home de tienda", "Sección de adopciones", "Estructura multipágina", "Integración API"],
    stack: ["HTML", "CSS", "JavaScript", "API", "GitHub"],
    status: "Case study",
    year: "2026",
    githubUrl: "https://github.com/aguirreca207/mundo-mascotas-frontend"
  },
  {
    title: "Finora Analytics",
    category: "Full Stack",
    summary: "Dashboard financiero full stack con métricas, filtros, autenticación y visualización de KPIs.",
    impact: "Panel listo para decisiones en tiempo real",
    problem: "Los datos financieros estaban dispersos entre hojas de cálculo y reportes manuales.",
    solution: "Construí una app centralizada con dashboard, API, estado de sesión y vistas filtrables.",
    features: ["Auth", "KPIs dinámicos", "Filtros por periodo", "Charts responsive"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS"],
    status: "Case study",
    year: "2026",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Reserva Studio",
    category: "SaaS",
    summary: "Plataforma de reservas para estudios creativos con calendario, disponibilidad y panel admin.",
    impact: "Flujo de reserva claro de punta a punta",
    problem: "El proceso de agenda dependía de mensajes manuales y confirmaciones repetidas.",
    solution: "Diseñé una experiencia self-service con backend para disponibilidad y gestión.",
    features: ["Calendario", "Panel admin", "Estados de reserva", "Emails transaccionales"],
    stack: ["React", "Next.js", "Supabase", "Server Actions", "Resend"],
    status: "In progress",
    year: "2026",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "TaskFlow OS",
    category: "Dashboard",
    summary: "SaaS de gestión de tareas con tableros, prioridades, perfiles y experiencia responsive.",
    impact: "Organización visual para equipos pequeños",
    problem: "Los equipos necesitaban un espacio simple para convertir ideas en tareas accionables.",
    solution: "Creé una interfaz tipo dashboard con CRUD, filtros y componentes reutilizables.",
    features: ["CRUD completo", "Kanban", "Búsqueda", "Modo oscuro"],
    stack: ["Next.js", "TypeScript", "Drizzle", "PostgreSQL", "Framer Motion"],
    status: "Case study",
    year: "2025",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Aurum Commerce",
    category: "E-commerce",
    summary: "E-commerce moderno con catálogo, detalle de producto, carrito y checkout preparado.",
    impact: "Experiencia de compra elegante y mobile-first",
    problem: "La marca necesitaba una tienda rápida, visual y fácil de administrar.",
    solution: "Construí una arquitectura modular para catálogo, carrito y páginas optimizadas.",
    features: ["Catálogo", "Carrito", "Product detail", "SEO técnico"],
    stack: ["Next.js", "Stripe", "Zustand", "TailwindCSS", "Vercel"],
    status: "Live",
    year: "2025",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Auth API Kit",
    category: "API",
    summary: "API de autenticación y usuarios con sesiones, roles, validaciones y rutas protegidas.",
    impact: "Base backend reutilizable para productos web",
    problem: "Cada nuevo MVP repetía la misma estructura de usuarios, sesiones y permisos.",
    solution: "Diseñé un starter backend limpio con endpoints tipados y validaciones consistentes.",
    features: ["JWT/session auth", "Roles", "Validación", "Rate limiting"],
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Zod", "REST API"],
    status: "Case study",
    year: "2025",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Velvet Landing",
    category: "Landing Page",
    summary: "Landing page premium para una marca digital con storytelling, animaciones y SEO.",
    impact: "Primera impresión visual de alto nivel",
    problem: "La marca necesitaba transmitir confianza y diferenciación desde el primer scroll.",
    solution: "Desarrollé una landing cinematográfica con copy, motion y componentes escalables.",
    features: ["Hero animado", "SEO", "Formulario", "Microinteracciones"],
    stack: ["Next.js", "Framer Motion", "TailwindCSS", "Lenis", "Vercel"],
    status: "Live",
    year: "2025",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];

export const experience: Experience[] = [
  {
    period: "2024 - Presente",
    company: "Freelance / Remote Projects",
    role: "Full Stack Developer",
    description: "Construcción de aplicaciones web completas con foco en experiencia, arquitectura y despliegue."
  },
  {
    period: "2021 - 2024",
    company: "Product & Web Builds",
    role: "Frontend Developer",
    description: "Desarrollo de interfaces modernas, sistemas de componentes y experiencias responsive."
  },
  {
    period: "2018 - 2021",
    company: "Independent Learning Lab",
    role: "Product Builder",
    description: "Proyectos propios para practicar backend, APIs, bases de datos, UI y buenas prácticas."
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Camila convirtió una idea ambigua en una interfaz clara, rápida y lista para presentar.",
    name: "María Torres",
    role: "Product Lead"
  },
  {
    quote:
      "Su criterio visual y técnico hace que el producto se sienta mucho más pulido desde la primera versión.",
    name: "Alejandro Ruiz",
    role: "Founder, Digital Studio"
  },
  {
    quote:
      "Comunica muy bien, resuelve problemas con calma y entrega código ordenado que se puede mantener.",
    name: "Laura Herrera",
    role: "Project Manager"
  }
];

export const stats = [
  { label: "Capas que construyo", value: "Full stack" },
  { label: "Stack principal", value: "Next.js" },
  { label: "Enfoque visual", value: "UI premium" },
  { label: "Entrega", value: "Deploy ready" }
];

export const navItems = [
  { label: "Inicio", href: "#hero", icon: Sparkles },
  { label: "Skills", href: "#services", icon: Workflow },
  { label: "Proyectos", href: "#projects", icon: ArrowUpRight },
  { label: "Contacto", href: "#contact", icon: ShieldCheck }
];
