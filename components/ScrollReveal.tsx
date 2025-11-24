"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  className?: string
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Start fully visible
    gsap.set(element, { opacity: 1, x: 0, y: 0 })

    // Check if element is in viewport
    const rect = element.getBoundingClientRect()
    const isInViewport = rect.top < window.innerHeight * 0.75

    // If already visible, skip animation
    if (isInViewport) {
      return
    }

    // Simple slide animations for elements below fold
    const animations: Record<string, any> = {
      left: { x: -30 },
      right: { x: 30 },
      up: { y: 30 },
      down: { y: -30 },
    }

    const fromVars = animations[direction]

    gsap.fromTo(
      element,
      { ...fromVars, opacity: 0.5 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [direction, delay])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

