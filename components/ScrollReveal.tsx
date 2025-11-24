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

    // Check if element is already in viewport
    const rect = element.getBoundingClientRect()
    const isInViewport = rect.top < window.innerHeight * 0.9

    // If already visible, don't animate
    if (isInViewport) {
      gsap.set(element, { opacity: 1, x: 0, y: 0 })
      return
    }

    // Define animation based on direction
    const animations: Record<string, any> = {
      left: { x: -100, opacity: 0 },
      right: { x: 100, opacity: 0 },
      up: { y: 100, opacity: 0 },
      down: { y: -100, opacity: 0 },
    }

    const fromVars = animations[direction]

    gsap.fromTo(
      element,
      {
        ...fromVars,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          toggleActions: "play none none none",
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

