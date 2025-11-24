"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function AnimatedCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const magneticX = useMotionValue(0)
  const magneticY = useMotionValue(0)
  
  // Use refs to cache button elements and avoid re-querying
  const buttonsRef = useRef<NodeListOf<Element> | null>(null)
  const rafIdRef = useRef<number | null>(null)
  const lastUpdateRef = useRef<number>(0)
  const throttleDelay = 32 // ~30fps for better performance
  const [enableMagnetic, setEnableMagnetic] = useState(true)

  // Simplified spring configs - less springs = better performance
  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  
  // Only use magnetic springs if enabled (disabled on low-end devices)
  const magneticSpringConfig = { damping: 20, stiffness: 200, mass: 0.6 }
  const magneticXSpring = useSpring(magneticX, magneticSpringConfig)
  const magneticYSpring = useSpring(magneticY, magneticSpringConfig)

  const combinedX = useTransform(
    [cursorXSpring, magneticXSpring],
    ([x, mx]: number[]) => (x ?? 0) + (enableMagnetic ? (mx ?? 0) : 0)
  )
  const combinedY = useTransform(
    [cursorYSpring, magneticYSpring],
    ([y, my]: number[]) => (y ?? 0) + (enableMagnetic ? (my ?? 0) : 0)
  )

  // Simplified glow - use same spring as cursor for better performance
  const glowX = cursorXSpring
  const glowY = cursorYSpring

  useEffect(() => {
    // Wait for page to be fully loaded before initializing cursor
    const initCursor = () => {
      // Check for touch devices
      const isTouchPrimary = window.matchMedia('(pointer: coarse)').matches
      setIsTouchDevice(isTouchPrimary)
      
      // Check for low-end devices (reduced motion or slow hardware)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4
      const isSlowConnection = (navigator as any).connection?.effectiveType === 'slow-2g' || (navigator as any).connection?.effectiveType === '2g'
      
      // Don't initialize on touch devices, reduced motion, or low-end devices
      if (isTouchPrimary || prefersReducedMotion || isLowEnd || isSlowConnection) {
        return
      }
      
      // Disable magnetic effect on mid-range devices for better performance
      if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 6) {
        setEnableMagnetic(false)
      }
      
      setIsReady(true)
    }
    
    // Wait for DOM and fonts to load
    if (document.readyState === 'complete') {
      initCursor()
    } else {
      window.addEventListener('load', initCursor, { once: true })
      return () => window.removeEventListener('load', initCursor)
    }
  }, [])
  
  useEffect(() => {
    if (!isReady || isTouchDevice) return
    
    // Cache button elements once
    const updateButtonsCache = () => {
      buttonsRef.current = document.querySelectorAll('button, a[href], [role="button"]')
    }
    updateButtonsCache()
    
    // Throttled update using requestAnimationFrame
    const updateMousePosition = (e: MouseEvent) => {
      const now = performance.now()
      
      // Throttle to ~60fps
      if (now - lastUpdateRef.current < throttleDelay) {
        return
      }
      
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
      
      rafIdRef.current = requestAnimationFrame(() => {
        lastUpdateRef.current = now
        
        // Update cursor position immediately (no calculation needed)
        cursorX.set(e.clientX)
        cursorY.set(e.clientY)
        
        // Only calculate magnetic pull if enabled and buttons exist (throttled)
        if (enableMagnetic && buttonsRef.current && buttonsRef.current.length > 0) {
          let closestDistance = Infinity
          let pullX = 0
          let pullY = 0
          
          // Limit check to first 5 buttons for better performance
          const maxButtons = Math.min(5, buttonsRef.current.length)
          
          for (let i = 0; i < maxButtons; i++) {
            const button = buttonsRef.current[i]
            const rect = button.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2
            
            const distanceX = e.clientX - centerX
            const distanceY = e.clientY - centerY
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
            
            if (distance < 100 && distance < closestDistance) {
              closestDistance = distance
              const pullStrength = 0.3 * (1 - distance / 100)
              pullX = -distanceX * pullStrength
              pullY = -distanceY * pullStrength
            }
          }
          
          magneticX.set(pullX)
          magneticY.set(pullY)
        } else if (!enableMagnetic) {
          magneticX.set(0)
          magneticY.set(0)
        }
      })
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

    // Update button cache on DOM changes (debounced)
    const observer = new MutationObserver(() => {
      updateButtonsCache()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    window.addEventListener("mousemove", updateMousePosition, { passive: true })
    document.addEventListener("mouseover", handleMouseOver, { passive: true })

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseover", handleMouseOver)
      observer.disconnect()
    }
  }, [cursorX, cursorY, magneticX, magneticY, isReady, isTouchDevice])

  // Don't render cursor on touch devices or until ready
  if (isTouchDevice || !isReady) return null

  return (
    <>
      {/* Main cursor dot - ultra smooth with magnetic pull */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: combinedX,
          y: combinedY,
          willChange: "transform",
          transform: "translateZ(0)", // GPU acceleration
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

      {/* Trailing glow effect - reduced blur for performance */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: glowX,
          y: glowY,
          willChange: "transform",
          transform: "translateZ(0)", // GPU acceleration
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 1.8 : 1,
            opacity: isHovering ? 0.25 : 0.12,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
          }}
        >
          <div className="w-8 h-8 rounded-full bg-gold blur-lg" />
        </motion.div>
      </motion.div>
    </>
  )
}

