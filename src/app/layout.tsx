import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { siteConfig } from "@/constants/site";
import { Providers } from "@/components/layout/providers";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Full Stack Developer`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "Camila Andrea Aguirre",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "TypeScript",
    "TailwindCSS",
    "Portfolio Developer"
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} | Full Stack Developer`,
    description: siteConfig.description,
    images: ["/camila-portfolio-avatar.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Full Stack Developer`,
    description: siteConfig.description,
    images: ["/camila-portfolio-avatar.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#0B0F19",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="noise" />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
