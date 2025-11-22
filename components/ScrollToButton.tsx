"use client"

import { Button } from "@/components/ui/Button"

interface ScrollToButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "icon"
  variant?: "primary" | "outline" | "subtle" | "ghost" | "link"
}

export function ScrollToButton({
  href,
  children,
  className,
  size = "lg",
  variant = "outline",
}: ScrollToButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      // Extract ID from href (e.g., "#schedule-call" -> "schedule-call")
      const id = href.replace("#", "")
      
      if (id) {
        // Try getElementById first (most reliable for IDs)
        const element = document.getElementById(id)
        
        if (element) {
          // Calculate offset for fixed header
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        } else {
          // Fallback: try querySelector
          const fallbackElement = document.querySelector(href)
          if (fallbackElement) {
            const fallbackPosition = fallbackElement.getBoundingClientRect().top + window.pageYOffset - 80
            window.scrollTo({
              top: fallbackPosition,
              behavior: "smooth",
            })
          } else {
            console.warn(`Element with id "${id}" not found`)
          }
        }
      }
    }, 10)
  }

  return (
    <Button asChild size={size} className={className} variant={variant}>
      <a href={href} onClick={handleClick}>
        {children}
      </a>
    </Button>
  )
}

