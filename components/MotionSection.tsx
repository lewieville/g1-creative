"use client"

import { motion, useInView } from "framer-motion"
import { useRef, forwardRef } from "react"

interface MotionSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  preset?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale"
  id?: string
}

const presets = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
}

export const MotionSection = forwardRef<HTMLDivElement, MotionSectionProps>(
  function MotionSection(
    {
      children,
      className,
      delay = 0,
      preset = "fadeUp",
      id,
    },
    forwardedRef
  ) {
    const internalRef = useRef<HTMLDivElement>(null)
    const ref = (forwardedRef || internalRef) as React.RefObject<HTMLDivElement>
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
      <motion.div
        ref={ref}
        id={id}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={presets[preset]}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }
)

