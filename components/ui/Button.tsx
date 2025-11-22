import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-luxury-bg disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        primary:
          "bg-gold text-luxury-bg hover:bg-gold-light font-semibold shadow-g1-soft hover:shadow-g1-glow transform hover:scale-[1.02] active:scale-[0.98]",
        outline:
          "border-2 border-gold text-gold hover:bg-gold hover:text-luxury-bg font-semibold",
        subtle:
          "text-luxury-muted hover:text-gold border border-luxury-panel hover:border-gold/50",
        ghost:
          "text-luxury-muted hover:text-gold hover:bg-luxury-panel",
        link: "text-gold underline-offset-4 hover:underline hover:text-gold-light",
      },
      size: {
        sm: "h-9 px-4 py-2 text-xs",
        md: "h-11 px-6 py-2.5 text-sm",
        lg: "h-12 px-8 py-3 text-base",
        xl: "h-14 px-10 py-3.5 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {/* Shimmer effect on hover */}
        <span className="absolute inset-0 bg-shimmer bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="relative z-10 flex items-center gap-2">{props.children}</span>
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

