import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-lg border border-luxury-panel/60 bg-luxury-panel/30 px-5 py-3 text-sm text-luxury-text transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-luxury-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/50 focus-visible:ring-offset-0 focus-visible:border-gold/60 focus-visible:bg-luxury-panel/40 disabled:cursor-not-allowed disabled:opacity-50 hover:border-gold/20 hover:bg-luxury-panel/40",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

