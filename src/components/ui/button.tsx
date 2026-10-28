import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-[color,background-color,border-color,transform,box-shadow] duration-200 motion-reduce:transition-none active:scale-[0.98] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        /* Pełny button w kolorze motywu */
        wine: "bg-primary text-primary-foreground shadow-paper hover:bg-wine-deep active:bg-wine-deep",
        /* NOWY: Przezroczysty z pełną ramką i tekstem w kolorze primary */
        wineOutline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary/10 active:bg-primary/20",
        /* Cream pill on wine sections */
        cream:
          "bg-primary-foreground text-primary shadow-paper hover:bg-paper hover:shadow-lift focus-visible:ring-primary-foreground focus-visible:ring-offset-primary",
        outlineWine:
          "border border-primary/40 bg-transparent text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground",
        navLink:
          "bg-transparent text-foreground hover:text-primary underline-offset-8 hover:underline decoration-primary/40",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        pill: "min-h-11 rounded-full px-7 py-3 text-[0.6875rem] font-semibold uppercase tracking-[0.22em]",
        pillSm:
          "min-h-11 rounded-full px-5 py-2 text-[0.625rem] font-semibold uppercase tracking-[0.2em]",
        touch: "min-h-11 min-w-11 rounded-full p-0",
        nav: "min-h-11 px-2 text-[0.6875rem] font-semibold uppercase tracking-[0.2em]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
