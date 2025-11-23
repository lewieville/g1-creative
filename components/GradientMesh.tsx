"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

interface GradientMeshProps {
  className?: string
  intensity?: "low" | "medium" | "high"
  speed?: "slow" | "medium" | "fast"
}

export function GradientMesh({ 
  className = "", 
  intensity = "medium",
  speed = "slow" 
}: GradientMeshProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const intensityMap = {
    low: "opacity-20",
    medium: "opacity-30",
    high: "opacity-40",
  }

  const speedMap = {
    slow: 20,
    medium: 15,
    fast: 10,
  }

  // Disable on mobile or reduced motion
  if (isMobile || prefersReducedMotion) {
    return null
  }

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Animated gradient mesh blob 1 - reduced blur on mobile */}
      <motion.div
        className={`absolute w-[600px] h-[600px] rounded-full ${isMobile ? 'blur-2xl' : 'blur-3xl'} ${intensityMap[intensity]}`}
        style={{
          background: "radial-gradient(circle, rgba(198, 166, 103, 0.4) 0%, rgba(225, 201, 143, 0.2) 50%, transparent 70%)",
          willChange: "transform",
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: speedMap[speed],
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated gradient mesh blob 2 - reduced blur on mobile */}
      <motion.div
        className={`absolute w-[500px] h-[500px] rounded-full ${isMobile ? 'blur-2xl' : 'blur-3xl'} ${intensityMap[intensity]}`}
        style={{
          background: "radial-gradient(circle, rgba(225, 201, 143, 0.3) 0%, rgba(198, 166, 103, 0.2) 50%, transparent 70%)",
          top: "60%",
          left: "70%",
          willChange: "transform",
        }}
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -70, 0],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{
          duration: speedMap[speed] + 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Animated gradient mesh blob 3 - reduced blur on mobile */}
      <motion.div
        className={`absolute w-[400px] h-[400px] rounded-full ${isMobile ? 'blur-2xl' : 'blur-3xl'} ${intensityMap[intensity]}`}
        style={{
          background: "radial-gradient(circle, rgba(198, 166, 103, 0.25) 0%, rgba(184, 149, 74, 0.15) 50%, transparent 70%)",
          top: "20%",
          left: "20%",
          willChange: "transform",
        }}
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: speedMap[speed] + 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Subtle connecting gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(198, 166, 103, 0.05) 0%, transparent 100%)",
        }}
      />
    </div>
  )
}


