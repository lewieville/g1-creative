import { cn } from "@/lib/utils"
import { Container } from "./Container"

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerSize?: "sm" | "md" | "lg" | "xl" | "full"
  id?: string
  withDivider?: boolean
}

export function Section({
  children,
  className,
  containerSize = "xl",
  id,
  withDivider = false,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32 relative", className)}>
      {withDivider && (
        <div className="absolute top-0 left-0 right-0 gold-divider" />
      )}
      <Container size={containerSize}>{children}</Container>
    </section>
  )
}

