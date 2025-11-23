"use client"

import { useEffect, useState, useRef } from "react"
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

// SVG path for "G1" - simplified geometric design
const g1Path = "M 20 10 L 20 40 L 50 40 L 50 10 Z M 25 15 L 45 15 M 25 25 L 45 25 M 25 35 L 45 35"

// SVG path for "Creative" text - stylized
const creativePath = "M 60 25 Q 65 20 70 25 T 80 25 M 90 20 L 90 30 M 100 20 L 100 30 L 110 20 L 110 30 M 120 25 Q 125 20 130 25 T 140 25 M 150 20 L 150 30 M 160 20 L 160 30 L 170 20 L 170 30"

export function AnimatedLogo({
  href = "/",
  className,
  size = "md",
  variant = "header",
  showOnLoad = true,
}: AnimatedLogoProps) {
  const [hasAnimated, setHasAnimated] = useState(!showOnLoad)
  const [isHovered, setIsHovered] = useState(false)
  const pathRef = useRef<SVGPathElement>(null)
  const [pathLength, setPathLength] = useState(0)

  const dimensions = sizeMap[size]
  const glowIntensity = useMotionValue(0)
  const glowSpring = useSpring(glowIntensity, { damping: 20, stiffness: 300 })

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength()
      setPathLength(length)
    }
  }, [])

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
      {/* Handwriting-style SVG overlay animation on load */}
      {showOnLoad && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-20"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <svg
            width={dimensions.width}
            height={dimensions.height}
            viewBox="0 0 200 50"
            className="absolute inset-0"
          >
            <motion.path
              ref={pathRef}
              d={g1Path}
              fill="none"
              stroke="#C6A667"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                hasAnimated
                  ? {
                      pathLength: 1,
                      opacity: [0, 1, 1, 0],
                    }
                  : {}
              }
              transition={{
                pathLength: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 2, times: [0, 0.3, 0.7, 1] },
              }}
            />
          </svg>
        </motion.div>
      )}

      {/* Main logo image with handwriting reveal effect */}
      <motion.div
        className="relative z-10"
        initial={showOnLoad ? { clipPath: "inset(0 100% 0 0)" } : false}
        animate={hasAnimated ? { clipPath: "inset(0 0% 0 0)" } : {}}
        transition={{
          duration: 1.5,
          delay: showOnLoad ? 0.3 : 0,
          ease: [0.4, 0, 0.2, 1],
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
          className={cn(
            "h-auto w-auto object-contain transition-all duration-300",
            variant === "header" && "h-10 sm:h-12",
            variant === "hero" && "h-10 sm:h-12 md:h-16 lg:h-20",
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

