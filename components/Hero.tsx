"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, Sparkles, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface HeroProps {
  title?: string
  subtitle?: string
  problem?: string
  agitate?: string
  solution?: string
  benefits?: string[]
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  image?: string
  imageAlt?: string
  showScrollCue?: boolean
}

export function Hero({
  title,
  subtitle,
  problem,
  agitate,
  solution,
  benefits = [],
  primaryCTA = { text: "Get Started", href: "/contact" },
  secondaryCTA,
  image = "/images/hero-main.jpg",
  imageAlt = "Hero image",
  showScrollCue = true,
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-bg">
      {/* Animated background with parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="relative w-full h-full">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover opacity-20"
              priority
              sizes="100vw"
            />
          </motion.div>
          {/* Dynamic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-bg via-luxury-bg/85 to-luxury-bg" />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-bg/50 via-transparent to-luxury-bg/50" />
        </div>
      </motion.div>

      {/* Animated gold orbs with stagger */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl animate-glow"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl animate-glow"
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold/30 rounded-full"
          initial={{ 
            x: `${20 + (i * 10)}%`,
            y: "100%",
            opacity: 0 
          }}
          animate={{
            y: "-20%",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + (i * 0.5),
            delay: i * 0.3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ left: `${10 + (i * 11)}%` }}
        />
      ))}

      <Container className="relative z-10 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <motion.div 
          className="max-w-4xl mx-auto text-center px-4 sm:px-0"
          style={{ opacity }}
        >
          {/* Animated logo with bounce */}
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="mb-6 sm:mb-8 flex justify-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/g1-logo.png"
                alt="G1 Creative"
                width={200}
                height={60}
                priority
                className="h-12 sm:h-16 md:h-20 w-auto object-contain"
              />
              {/* Pulsing glow effect */}
              <motion.div
                className="absolute inset-0 blur-2xl bg-gold/20 -z-10 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Problem → Agitate → Solution Headline Structure */}
          {problem && agitate && solution ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6 sm:mb-8"
            >
              {/* Problem - Subtle, muted */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl text-luxury-muted/80 mb-3 sm:mb-4 font-medium"
              >
                {problem}
              </motion.p>

              {/* Agitate - Emphasized, creates tension */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl sm:text-2xl md:text-3xl text-luxury-muted mb-4 sm:mb-6 font-semibold"
              >
                {agitate}
              </motion.p>

              {/* Solution - Bold, gold accent, main headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight relative px-2 sm:px-0"
              >
                <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                  {solution}
                </span>
                
                {/* Sparkle accent - Hidden on small mobile */}
                <motion.span
                  className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 text-gold hidden sm:block"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1, 1, 0],
                    rotate: 0
                  }}
                  transition={{ 
                    duration: 2,
                    delay: 1.5,
                    times: [0, 0.2, 0.8, 1]
                  }}
                >
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
                </motion.span>
              </motion.h1>
            </motion.div>
          ) : title ? (
            /* Fallback to original title structure */
            <>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 sm:mb-6 leading-tight relative px-2 sm:px-0"
              >
                {title.split(" ").map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + (wordIndex * 0.1),
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="inline-block mr-2 sm:mr-3 md:mr-4"
                  >
                    <span className="bg-gradient-to-r from-luxury-text via-white to-luxury-text bg-clip-text text-transparent">
                      {word}
                    </span>
                  </motion.span>
                ))}
                
                {/* Sparkle accent - Hidden on small mobile */}
                <motion.span
                  className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 text-gold hidden sm:block"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1, 1, 0],
                    rotate: 0
                  }}
                  transition={{ 
                    duration: 2,
                    delay: 1.5,
                    times: [0, 0.2, 0.8, 1]
                  }}
                >
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
                </motion.span>
              </motion.h1>

              {/* Subtitle with fade and slide - Mobile optimized */}
              {subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="text-base sm:text-lg md:text-xl text-luxury-muted leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 px-4 sm:px-0"
                >
                  {subtitle}
                </motion.p>
              )}
            </>
          ) : null}

          {/* Outcome-Driven Benefits List */}
          {benefits.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="max-w-2xl mx-auto mb-8 sm:mb-10 px-4 sm:px-0"
            >
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-gold" />
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-luxury-muted leading-relaxed group-hover:text-luxury-text transition-colors">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA with magnetic hover effect - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6,
              delay: 1.3,
              type: "spring",
              stiffness: 200
            }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4 sm:px-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button asChild size="xl" className="shadow-g1-glow relative overflow-hidden group w-full sm:w-auto min-h-[56px]">
                <Link href={primaryCTA.href} className="relative z-10">
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-gold-light"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center justify-center">
                    {primaryCTA.text}
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.span>
                  </span>
                </Link>
              </Button>
            </motion.div>
            {secondaryCTA && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button asChild variant="subtle" size="xl" className="w-full sm:w-auto min-h-[56px]">
                  <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
                </Button>
              </motion.div>
            )}
          </motion.div>

          {/* Decorative line divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-12 sm:mt-16 h-px w-24 sm:w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </motion.div>

        {/* Enhanced scroll cue - Mobile optimized */}
        {showScrollCue && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-20 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1.5 sm:gap-2 cursor-pointer group"
            >
              <motion.span 
                className="text-[10px] sm:text-xs tracking-widest uppercase text-gold/70 group-hover:text-gold transition-colors text-center"
                whileHover={{ scale: 1.1 }}
              >
                Scroll
              </motion.span>
              <motion.div
                className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
              >
                <ChevronDown className="w-4 h-4 text-gold/70 group-hover:text-gold transition-colors" />
                <motion.div
                  className="absolute w-5 h-5 sm:w-6 sm:h-6 blur-md bg-gold/30 rounded-full"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </Container>

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-luxury-bg/30 pointer-events-none" />
    </div>
  )
}

