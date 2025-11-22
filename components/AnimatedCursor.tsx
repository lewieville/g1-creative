"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function AnimatedCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Ultra-smooth spring animation for main cursor (higher FPS)
  const springConfig = { damping: 30, stiffness: 500, mass: 0.3 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Slightly slower spring for trailing glow with smoother motion
  const glowSpringConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const glowX = useSpring(cursorX, glowSpringConfig)
  const glowY = useSpring(cursorY, glowSpringConfig)

  useEffect(() => {
    // Detect if device supports touch (mobile/tablet)
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      )
    }
    
    checkTouchDevice()
    
    // Don't initialize cursor on touch devices
    if (isTouchDevice) return
    
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.style.cursor === "pointer"
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [cursorX, cursorY])

  // Don't render cursor on touch devices
  if (isTouchDevice) return null

  return (
    <>
      {/* Main cursor dot - ultra smooth */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          willChange: "transform",
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 600,
            damping: 30,
          }}
        >
          <div className="w-4 h-4 rounded-full bg-gold border border-gold/50" />
        </motion.div>
      </motion.div>

      {/* Trailing glow effect - smooth follow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: glowX,
          y: glowY,
          willChange: "transform",
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 2 : 1,
            opacity: isHovering ? 0.3 : 0.15,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 30,
          }}
        >
          <div className="w-10 h-10 rounded-full bg-gold blur-xl" />
        </motion.div>
      </motion.div>
    </>
  )
}

