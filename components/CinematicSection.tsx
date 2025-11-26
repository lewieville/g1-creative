"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { useState } from "react"
import FallingText from "./FallingText"

interface CinematicSectionProps {
  title: string
  subtitle?: string
  description: string
  image: string
  imageAlt: string
  reverse?: boolean
  children?: React.ReactNode
}

export function CinematicSection({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  reverse = false,
  children,
}: CinematicSectionProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Extract words to highlight (key words from the title)
  // For "Most websites fail in the first 8 seconds", highlight: websites, fail, first, 8, seconds
  const highlightWords = title === "Most websites fail in the first 8 seconds"
    ? ["websites", "fail", "first", "8", "seconds"]
    : title
        .split(' ')
        .filter(word => 
          word.length > 4 && 
          !['the', 'in', 'a', 'an', 'and', 'or', 'but'].includes(word.toLowerCase())
        )
        .map(word => word.replace(/[.,!?;:]/g, ''));

  return (
    <div className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
      <Container>
        <div
          className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
            reverse ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className={`space-y-6 ${reverse ? "lg:col-start-2" : ""}`}
          >
            {subtitle && (
              <span className="inline-block text-sm tracking-caps uppercase text-gold font-medium">
                {subtitle}
              </span>
            )}
            <div
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-luxury-text tracking-tight leading-tight min-h-[1.2em]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? (
                <FallingText
                  key={`falling-${isHovered}`}
                  text={title}
                  highlightWords={highlightWords}
                  trigger="hover"
                  backgroundColor="transparent"
                  wireframes={false}
                  gravity={0.56}
                  fontSize="clamp(2rem, 5vw, 3.75rem)"
                  mouseConstraintStiffness={0.9}
                  highlightClass="text-gold font-bold"
                />
              ) : (
                <h2>{title}</h2>
              )}
            </div>
            <p className="text-lg sm:text-xl text-luxury-muted leading-relaxed">
              {description}
            </p>
            {children && <div className="pt-4">{children}</div>}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className={`relative ${reverse ? "lg:col-start-1 lg:row-start-1" : ""}`}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-panel border border-gold/10">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg/50 to-transparent" />
            </div>

            {/* Decorative elements - reduced blur for performance */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gold/5 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </Container>

      {/* Gold divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </div>
  )
}

