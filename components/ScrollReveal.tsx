"use client"

import { useRef, useEffect, useState } from "react"
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
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Check if element is already in viewport
    const rect = element.getBoundingClientRect()
    const isInViewport = rect.top < window.innerHeight * 0.85

    // Simpler animations - just slide + fade, no scale to avoid complexity
    const animations: Record<string, any> = {
      left: { x: -40, opacity: 0 },
      right: { x: 40, opacity: 0 },
      up: { y: 40, opacity: 0 },
      down: { y: -40, opacity: 0 },
    }

    const fromVars = animations[direction]

    // If already visible, animate in immediately
    if (isInViewport) {
      setHasAnimated(true)
      gsap.fromTo(
        element,
        fromVars,
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: delay,
          ease: "power2.out",
        }
      )
      return
    }

    // Scroll-triggered animation
    gsap.fromTo(
      element,
      fromVars,
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
          onEnter: () => setHasAnimated(true),
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [direction, delay])

  return (
    <div ref={elementRef} className={`h-full ${className}`}>
      {children}
    </div>
  )
}

