import { cn } from "@/lib/utils"
import { CSSProperties } from "react"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "full"
  style?: CSSProperties
}

const sizeClasses = {
  sm: "max-w-4xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full",
}

export function Container({
  children,
  className,
  size = "xl",
  style,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
      style={style}
    >
      {children}
    </div>
  )
}

