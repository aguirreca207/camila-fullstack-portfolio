import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background shadow-[0_18px_60px_rgba(67,184,186,0.22)] hover:scale-[1.02]",
        premium:
          "bg-[linear-gradient(135deg,#176A74,#43B8BA,#EB6E25)] text-white shadow-[0_18px_60px_rgba(67,184,186,0.28)] hover:scale-[1.02]",
        outline: "border border-[var(--border)] bg-surface/60 text-foreground backdrop-blur-xl hover:bg-surface",
        ghost: "text-foreground hover:bg-foreground/8"
      },
      size: {
        default: "h-11",
        lg: "h-13 px-7",
        icon: "h-11 w-11 px-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
