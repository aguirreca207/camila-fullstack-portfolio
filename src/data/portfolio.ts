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
    category: "Full Stack",
    summary:
      "Aplicación web Django para gestión de mascotas, citas, tienda, servicios, adopciones, usuarios y panel administrativo.",
    impact: "Proyecto académico completo desplegado en Vercel con backend Django, SQLite, templates y módulos funcionales",
    problem:
      "El proyecto necesitaba centralizar servicios de mascotas en una plataforma clara: registro, perfil, tienda, citas, servicios y adopciones.",
    solution:
      "Desarrollé una aplicación Django con modelos, vistas, templates, autenticación, base SQLite, estáticos y despliegue serverless en Vercel.",
    features: ["Auth y perfil", "Gestión de mascotas", "Tienda y pedidos", "Citas y servicios", "Adopciones"],
    stack: ["Django", "Python", "SQLite", "HTML", "CSS", "JavaScript"],
    status: "Live",
    year: "2026",
    image: "/projects/mundo-mascotas-dashboard.jpg",
    demoUrl: "https://mundo-mascotas-frontend.vercel.app",
    githubUrl: "https://github.com/aguirreca207/mundo-mascotas-frontend"
  },
  {
    title: "Voxora English",
    category: "Mobile",
    summary:
      "Aplicación móvil Flutter para aprender inglés con álbumes de frases reales, práctica diaria, voz, lectura guiada, retos de memoria y evaluación en chat.",
    impact: "Producto móvil de portfolio con UX premium, arquitectura local, práctica interactiva y flujo real de aprendizaje",
    problem:
      "Los estudiantes hispanohablantes necesitan practicar inglés en contexto, no solo memorizar tarjetas aisladas o repetir frases sin seguimiento.",
    solution:
      "Construí una app Android con Flutter y Riverpod que organiza frases por álbum, genera sesiones de práctica, corrige respuestas de forma flexible, guarda progreso local y conecta lectura, retos y chat de evaluación.",
    features: [
      "Álbumes de conversación",
      "Práctica con voz y escritura",
      "Lectura Viva",
      "Retos por tiempo",
      "Corrección flexible",
      "Progreso local"
    ],
    stack: ["Flutter", "Dart", "Riverpod", "SharedPreferences", "Android", "Kotlin"],
    status: "Case study",
    year: "2026",
    image: "/projects/voxora-english-mobile.png",
    githubUrl: "https://github.com/aguirreca207/voxora-english"
  },
  {
    title: "Finora Analytics",
    category: "Full Stack",
    summary:
      "SaaS financiero full stack con autenticación, PostgreSQL real, métricas dinámicas, charts premium y demo pública.",
    impact: "Proyecto principal de portfolio con producto, diseño, backend, base de datos y deploy completo",
    problem:
      "Un dashboard financiero necesita presentar datos complejos de forma clara, confiable y visualmente premium.",
    solution:
      "Construí una aplicación completa con Next.js, Auth.js, Prisma, Supabase PostgreSQL, APIs protegidas y visualización interactiva.",
    features: ["Login real", "Supabase PostgreSQL", "APIs protegidas", "KPIs dinámicos", "Charts responsive"],
    stack: ["Next.js", "TypeScript", "Auth.js", "Prisma", "Supabase", "Recharts"],
    status: "Live",
    year: "2026",
    image: "/projects/finora-analytics-dashboard.jpg",
    demoUrl: "https://finora-analytics.vercel.app",
    githubUrl: "https://github.com/aguirreca207/finora-analytics"
  },
  {
    title: "ETIKA Flow AI",
    category: "SaaS",
    summary:
      "CRM full-stack premium para seguros e inmigracion con Auth.js, Neon PostgreSQL, Prisma, workflows reales, AI Copilot, documentos, tareas, automatizaciones y dashboard operacional.",
    impact: "Producto SaaS enterprise listo para entrevistas tecnicas y portfolio profesional",
    problem:
      "Equipos de seguros, ACA e inmigracion necesitan centralizar leads, clientes, documentos, tareas, seguimiento comercial, renovaciones y acciones de agentes sin depender de hojas de calculo.",
    solution:
      "Construí una plataforma Next.js full-stack con APIs protegidas, roles, base de datos real, pipeline persistente, Client 360, AI Copilot con fallback local, WhatsApp/Twilio-ready, Supabase Storage-ready y pruebas Playwright.",
    features: [
      "Auth y roles",
      "CRM pipeline",
      "Client 360",
      "AI Copilot",
      "Document Center",
      "Automations"
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Neon", "Auth.js", "OpenAI"],
    status: "Live",
    year: "2026",
    image: "/projects/etika-flow-ai-dashboard.png",
    demoUrl: "https://etika-flow-ai.vercel.app",
    githubUrl: "https://github.com/aguirreca207/etika-flow-ai"
  },
  {
    title: "AETHER AI",
    category: "SaaS",
    summary:
      "Sistema operativo de inteligencia artificial con command center, AI Copilot, módulos analíticos, memoria, voz y experiencia 3D futurista.",
    impact: "Proyecto insignia de portfolio para demostrar arquitectura frontend avanzada, producto AI, motion design y experiencia interactiva",
    problem:
      "Las experiencias AI suelen sentirse genéricas o desconectadas; el reto era crear una interfaz convincente, modular y visualmente memorable para explorar flujos inteligentes.",
    solution:
      "Construí una aplicación Next.js con App Router, TypeScript, módulos feature-based, estado global, API route para OpenAI con fallback local, React Three Fiber y animaciones premium.",
    features: ["AI Copilot", "Command center", "Voice interface", "Memory vault", "3D core", "Analytics modules"],
    stack: ["Next.js", "React", "TypeScript", "OpenAI", "Three.js", "Zustand"],
    status: "Case study",
    year: "2026",
    image: "/projects/aether-ai-preview-real.png",
    demoUrl: "https://aether-ai-portfolio-flagship-projec.vercel.app",
    githubUrl: "https://github.com/aguirreca207/Eether-ai"
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
