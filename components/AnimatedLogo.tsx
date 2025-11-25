"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AnimatedLogoProps {
  href?: string
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "header" | "hero" | "footer"
  showOnLoad?: boolean
}

const sizeMap = {
  sm: { width: 120, height: 30, fontSize: 18 },
  md: { width: 180, height: 50, fontSize: 24 },
  lg: { width: 240, height: 60, fontSize: 32 },
  xl: { width: 300, height: 75, fontSize: 40 },
}

export function AnimatedLogo({
  href = "/",
  className,
  size = "md",
  variant = "header",
  showOnLoad = true,
}: AnimatedLogoProps) {
  const [hasAnimated, setHasAnimated] = useState(!showOnLoad)
  const [isHovered, setIsHovered] = useState(false)

  const dimensions = sizeMap[size]
  const glowIntensity = useMotionValue(0)
  const glowSpring = useSpring(glowIntensity, { damping: 20, stiffness: 300 })

  useEffect(() => {
    if (showOnLoad && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [showOnLoad, hasAnimated])

  useEffect(() => {
    if (isHovered) {
      glowIntensity.set(1)
    } else {
      glowIntensity.set(0)
    }
  }, [isHovered, glowIntensity])

  const glowOpacity = useTransform(glowSpring, [0, 1], [0, 0.6])
  const glowScale = useTransform(glowSpring, [0, 1], [1, 1.3])

  // Main logo with handwriting-style animation
  const LogoContent = (
    <motion.div
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={showOnLoad ? { opacity: 0, scale: 0.8 } : false}
      animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
    >
      {/* Main logo image */}
      <motion.div
        className="relative z-10"
        initial={showOnLoad ? { opacity: 0, scale: 0.9 } : false}
        animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 0.6,
          delay: showOnLoad ? 0.2 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          filter: isHovered ? "brightness(1.15) saturate(1.1)" : "brightness(1)",
        }}
      >
        <Image
          src="/g1-logo.png"
          alt="G1 Creative"
          width={dimensions.width}
          height={dimensions.height}
          priority={variant === "header"}
          style={variant === "hero" ? {
            height: 'clamp(3rem, 5vw, 5rem)',
            width: 'auto'
          } : undefined}
          className={cn(
            "h-auto w-auto object-contain transition-all duration-300",
            variant === "header" && "h-10 sm:h-12",
            variant === "hero" && "",
            variant === "footer" && "h-12"
          )}
        />
      </motion.div>

      {/* Animated glow effect on hover */}
      <motion.div
        className="absolute inset-0 -z-10 blur-2xl rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(198, 166, 103, 0.4) 0%, transparent 70%)",
          opacity: glowOpacity,
          scale: glowScale,
        }}
      />

      {/* Pulsing glow rings */}
      {isHovered && (
        <>
          <motion.div
            className="absolute inset-0 -z-10 blur-xl rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(198, 166, 103, 0.3) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 -z-10 blur-2xl rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(198, 166, 103, 0.2) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
        </>
      )}
    </motion.div>
  )

  if (href) {
    return (
      <Link href={href} className="group">
        {LogoContent}
      </Link>
    )
  }

  return LogoContent
}

