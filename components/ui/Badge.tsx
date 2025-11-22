import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 tracking-wide",
  {
    variants: {
      variant: {
        default:
          "bg-gold/10 text-gold border border-gold/20",
        secondary:
          "bg-luxury-panel text-luxury-muted border border-luxury-panel",
        accent:
          "bg-gold text-luxury-bg border border-gold",
        success:
          "bg-green-500/10 text-green-400 border border-green-500/20",
        warning:
          "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
        outline:
          "text-luxury-muted border border-luxury-panel",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

