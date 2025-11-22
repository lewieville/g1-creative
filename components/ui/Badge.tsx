import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary-100 text-primary-800 border border-primary-200",
        secondary:
          "bg-secondary-100 text-secondary-800 border border-secondary-200",
        accent:
          "bg-accent-100 text-accent-800 border border-accent-200",
        success:
          "bg-green-100 text-green-800 border border-green-200",
        warning:
          "bg-yellow-100 text-yellow-800 border border-yellow-200",
        outline:
          "text-secondary-700 border border-secondary-300",
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

