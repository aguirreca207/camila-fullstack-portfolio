"use client";

import { ThemeProvider } from "next-themes";
import { LenisProvider } from "@/components/animations/lenis-provider";
import { PageTransition } from "@/components/animations/page-transition";
import { CustomCursor } from "@/components/animations/custom-cursor";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LenisProvider>
        <PageTransition>{children}</PageTransition>
        <CustomCursor />
      </LenisProvider>
    </ThemeProvider>
  );
}
