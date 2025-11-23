"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function AnimatedCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const magneticX = useMotionValue(0)
  const magneticY = useMotionValue(0)

  // Ultra-smooth spring animation for main cursor (higher FPS)
  const springConfig = { damping: 30, stiffness: 500, mass: 0.3 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  
  // Magnetic pull spring (slightly slower for smooth attraction)
  const magneticSpringConfig = { damping: 20, stiffness: 300, mass: 0.4 }
  const magneticXSpring = useSpring(magneticX, magneticSpringConfig)
  const magneticYSpring = useSpring(magneticY, magneticSpringConfig)

  // Slightly slower spring for trailing glow with smoother motion
  const glowSpringConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const glowX = useSpring(cursorX, glowSpringConfig)
  const glowY = useSpring(cursorY, glowSpringConfig)

  useEffect(() => {
    // Detect if PRIMARY input device is touch (mobile/tablet only)
    const checkTouchDevice = () => {
      const isTouchPrimary = window.matchMedia('(pointer: coarse)').matches
      setIsTouchDevice(isTouchPrimary)
    }
    
    checkTouchDevice()
    
    // Don't initialize cursor on touch devices
    if (isTouchDevice) return
    
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      
      // Calculate magnetic pull from buttons/links
      const buttons = document.querySelectorAll('button, a[href], [role="button"]')
      let closestDistance = Infinity
      let pullX = 0
      let pullY = 0
      
      buttons.forEach((button) => {
        const rect = button.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        const distanceX = e.clientX - centerX
        const distanceY = e.clientY - centerY
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        
        // Magnetic radius: 120px
        if (distance < 120 && distance < closestDistance) {
          closestDistance = distance
          // Pull strength increases as cursor gets closer
          const pullStrength = 0.4 * (1 - distance / 120)
          pullX = -distanceX * pullStrength
          pullY = -distanceY * pullStrength
        }
      })
      
      magneticX.set(pullX)
      magneticY.set(pullY)
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
  }, [cursorX, cursorY, magneticX, magneticY, isTouchDevice])

  // Don't render cursor on touch devices
  if (isTouchDevice) return null

  return (
    <>
      {/* Main cursor dot - ultra smooth with magnetic pull */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring + magneticXSpring,
          y: cursorYSpring + magneticYSpring,
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

