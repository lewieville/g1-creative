"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: "left" | "right" | "up" | "down" | "scale" | "fade"
  delay?: number
  className?: string
  stagger?: number
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  stagger = 0,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Check if element is already in viewport
    const rect = element.getBoundingClientRect()
    const isInViewport = rect.top < window.innerHeight * 0.9

    // Define animation based on direction - PROFESSIONAL ANIMATIONS
    const animations: Record<string, any> = {
      left: { x: -60, opacity: 0, scale: 0.95 },
      right: { x: 60, opacity: 0, scale: 0.95 },
      up: { y: 60, opacity: 0, scale: 0.95 },
      down: { y: -60, opacity: 0, scale: 0.95 },
      scale: { scale: 0.9, opacity: 0 },
      fade: { opacity: 0 },
    }

    const fromVars = animations[direction]

    // If already visible, animate in immediately with no scroll trigger
    if (isInViewport) {
      gsap.fromTo(
        element,
        fromVars,
        {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: delay,
          ease: "power3.out",
        }
      )
      return
    }

    // Professional scroll-triggered animation
    gsap.fromTo(
      element,
      fromVars,
      {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        delay,
        ease: "power3.out",
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
  }, [direction, delay, stagger])

  return (
    <div ref={elementRef} className={`h-full ${className}`}>
      {children}
    </div>
  )
}

