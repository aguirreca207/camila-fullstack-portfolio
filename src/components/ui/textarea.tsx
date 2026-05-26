import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-32 w-full resize-none rounded-xl border border-[var(--border)] bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-secondary focus:ring-4 focus:ring-secondary/10",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
