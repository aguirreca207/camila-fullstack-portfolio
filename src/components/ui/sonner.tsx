"use client";

import { Toaster as Sonner } from "sonner";

export function Toaster() {
  return (
    <Sonner
      position="bottom-right"
      toastOptions={{
        style: {
          background: "rgba(17, 24, 39, 0.86)",
          color: "#F9FAFB",
          border: "1px solid rgba(249,250,251,.12)",
          backdropFilter: "blur(18px)"
        }
      }}
    />
  );
}
