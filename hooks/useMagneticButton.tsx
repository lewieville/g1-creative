"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
  radius?: number
}

export function useMagneticButton(strength = 0.3, radius = 100) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const [isActive, setIsActive] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 15, stiffness: 150 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const mouseX = e.clientX
      const mouseY = e.clientY
      
      const distanceX = mouseX - centerX
      const distanceY = mouseY - centerY
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
      
      if (distance < radius) {
        setIsActive(true)
        // Calculate pull strength based on distance (closer = stronger)
        const pullStrength = strength * (1 - distance / radius)
        
        // Pull cursor toward button center
        const pullX = -distanceX * pullStrength
        const pullY = -distanceY * pullStrength
        
        x.set(pullX)
        y.set(pullY)
      } else {
        setIsActive(false)
        x.set(0)
        y.set(0)
      }
    }

    const handleMouseLeave = () => {
      setIsActive(false)
      x.set(0)
      y.set(0)
    }

    window.addEventListener("mousemove", handleMouseMove)
    button.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      button.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [strength, radius, x, y])

  return {
    buttonRef,
    x: xSpring,
    y: ySpring,
    isActive,
  }
}

export function MagneticButton({ 
  children, 
  className = "", 
  strength = 0.3,
  radius = 100 
}: MagneticButtonProps) {
  const { buttonRef, x, y, isActive } = useMagneticButton(strength, radius)

  return (
    <motion.button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      className={className}
      style={{
        x,
        y,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}

export function MagneticLink({ 
  children, 
  className = "", 
  href,
  strength = 0.3,
  radius = 100 
}: MagneticButtonProps & { href: string }) {
  const { buttonRef, x, y, isActive } = useMagneticButton(strength, radius)

  return (
    <motion.a
      ref={buttonRef as React.RefObject<HTMLAnchorElement>}
      href={href}
      className={className}
      style={{
        x,
        y,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  )
}

