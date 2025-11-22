"use client"

import { Button } from "@/components/ui/Button"
import Link from "next/link"

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
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Button asChild size={size} className={className} variant={variant}>
      <Link href={href} onClick={handleClick}>
        {children}
      </Link>
    </Button>
  )
}

