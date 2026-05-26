import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-12 w-full rounded-xl border border-[var(--border)] bg-background/40 px-4 text-sm outline-none transition focus:border-secondary focus:ring-4 focus:ring-secondary/10",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
