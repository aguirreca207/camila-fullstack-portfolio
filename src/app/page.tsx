import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { FloatingDock } from "@/components/layout/floating-dock";
import { ScrollProgress } from "@/components/animations/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <FloatingDock />
      <Footer />
    </>
  );
}
