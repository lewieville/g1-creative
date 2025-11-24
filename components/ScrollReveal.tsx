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
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Check if element is already in viewport on mount
    const rect = element.getBoundingClientRect()
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
    
    if (isInViewport) {
      setIsVisible(true)
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
          onEnter: () => setIsVisible(true),
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [direction, delay])

  return (
    <div 
      ref={elementRef} 
      className={`h-full ${className}`}
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {children}
    </div>
  )
}

