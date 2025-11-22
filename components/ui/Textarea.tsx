import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[180px] w-full rounded-lg border border-luxury-panel/60 bg-luxury-panel/30 px-5 py-4 text-sm text-luxury-text transition-all placeholder:text-luxury-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/50 focus-visible:ring-offset-0 focus-visible:border-gold/60 focus-visible:bg-luxury-panel/40 disabled:cursor-not-allowed disabled:opacity-50 hover:border-gold/20 hover:bg-luxury-panel/40 resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }

