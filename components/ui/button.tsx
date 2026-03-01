import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        // ── shadcn base variants (remapped to CPSL tokens) ──────────────────
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:border-ring",
        destructive:
          "bg-destructive text-white shadow-sm hover:bg-destructive/90 focus-visible:ring-destructive/30",
        secondary:
          "border border-border bg-background shadow-xs hover:bg-secondary hover:text-secondary-foreground",
        ghost:
          "hover:bg-secondary hover:text-secondary-foreground",
        link:
          "text-primary underline-offset-4 hover:underline",

        // ── CPSL brand variants ──────────────────────────────────────────────
        /** Vivid purple CTA — use for primary conversion actions */
        "cpsl-purple":
          "bg-accent text-accent-foreground shadow-sm hover:bg-accent/90 focus-visible:ring-accent/40",
        /** Dark navy — primary action on light surfaces */
        "cpsl-navy":
          "bg-[#0A0E1A] text-white shadow-sm hover:bg-[#1E293B] focus-visible:ring-[#0A0E1A]/40",
        /** Ghost with blue border — secondary action */
        "cpsl-outline":
          "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground",
        /** Ghost with purple border — accent secondary */
        "cpsl-outline-purple":
          "border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-accent-foreground",
        /** Success green */
        "cpsl-success":
          "bg-[#00C853] text-white shadow-sm hover:bg-[#00A844] focus-visible:ring-[#00C853]/40",
        /** Live indicator style — pulsing red */
        "cpsl-live":
          "bg-[#FF1744] text-white shadow-sm hover:bg-[#D50000] animate-pulse focus-visible:ring-[#FF1744]/40",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs:    "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm:    "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg:    "h-11 rounded-md px-8 text-base has-[>svg]:px-5",
        xl:    "h-13 rounded-lg px-10 text-lg has-[>svg]:px-6",
        icon:    "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
        /** CPSL pill — used for tag-like CTA buttons */
        pill:  "h-9 px-5 rounded-full",
        "pill-sm": "h-7 px-4 rounded-full text-xs",
        "pill-lg": "h-11 px-7 rounded-full text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
