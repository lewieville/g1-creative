"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, Sparkles, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { GradientMesh } from "@/components/GradientMesh"
import { AnimatedLogo } from "@/components/AnimatedLogo"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useRef, useState, useEffect } from "react"

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
}Th

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
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-bg px-0">
      {/* Animated background with parallax - optimized for performance */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          y: prefersReducedMotion ? undefined : y,
          willChange: prefersReducedMotion ? undefined : "transform"
        }}
      >
        <div className="relative w-full h-full">
          <motion.div
            initial={prefersReducedMotion ? false : { scale: 1.2, opacity: 0 }}
            animate={prefersReducedMotion ? {} : { scale: 1, opacity: 1 }}
            transition={prefersReducedMotion ? {} : { duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: "transform, opacity" }}
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

      {/* Animated gradient mesh background - optimized */}
      {!prefersReducedMotion && <GradientMesh intensity="low" speed="slow" />}

      {/* Floating particles - optimized count for performance */}
      {!prefersReducedMotion && [...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold/30 rounded-full"
          initial={{ 
            x: `${20 + (i * 12)}%`,
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
          style={{ 
            left: `${10 + (i * 15)}%`,
            willChange: "transform, opacity"
          }}
        />
      ))}

      <div className="relative z-10 px-3 sm:px-4 md:px-6" style={{ paddingTop: 'clamp(5rem, 7vw, 7rem)', paddingBottom: 'clamp(3rem, 5vw, 5rem)' }}>
        <Container className="px-2 sm:px-5">
          <motion.div 
            className="max-w-4xl mx-auto text-center w-full"
            style={prefersReducedMotion ? {} : { opacity }}
          >
          {/* Animated logo with handwriting effect */}
          <div className="mb-6 flex justify-center" style={{ marginBottom: 'clamp(1.5rem, 2vw, 2rem)' }}>
            <AnimatedLogo
              variant="hero"
              size="lg"
              showOnLoad={!prefersReducedMotion}
            />
          </div>

          {/* Problem → Agitate → Solution Headline Structure with Advanced Animations */}
          {problem && agitate && solution ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8 sm:mb-12 space-y-8 sm:space-y-10"
            >
              {/* Problem - Typewriter effect with character-by-character reveal */}
              {prefersReducedMotion ? (
                <p className="text-luxury-muted/80 font-medium relative break-words px-4 sm:px-0 leading-relaxed" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.875rem)' }}>
                  {problem}
                </p>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="text-luxury-muted/80 font-medium relative break-words px-4 sm:px-0 leading-relaxed"
                  style={{ fontSize: 'clamp(1.125rem, 2vw, 1.875rem)' }}
                >
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      duration: 2,
                      delay: 0.7,
                      ease: "easeInOut"
                    }}
                    className="inline-block overflow-hidden break-words"
                  >
                    {problem.split('').map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.05,
                          delay: 0.7 + (i * 0.03),
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                  
                  {/* Blinking cursor */}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 0.8,
                      delay: 0.7,
                      repeat: 3,
                      ease: "linear"
                    }}
                    className="inline-block w-0.5 h-5 sm:h-6 bg-luxury-muted/60 ml-1 align-middle"
                  />
                </motion.p>
              )}

              {/* Agitate - Slide and scale with dramatic emphasis */}
              {prefersReducedMotion ? (
                <p className="text-luxury-muted font-semibold relative break-words px-4 sm:px-0 leading-relaxed" style={{ fontSize: 'clamp(1.375rem, 2.5vw, 2.5rem)' }}>
                  {agitate}
                </p>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 2.8,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative px-4 sm:px-0"
                >
                    <motion.p
                    className="text-luxury-muted font-semibold relative break-words leading-relaxed"
                    style={{ fontSize: 'clamp(1.375rem, 2.5vw, 2.5rem)' }}
                  >
                    {/* Background glow that pulses in */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: [0, 0.3, 0.15], scale: 1 }}
                      transition={{ 
                        duration: 1,
                        delay: 2.9,
                        ease: "easeOut"
                      }}
                      className="absolute inset-0 blur-2xl bg-red-500/10 -z-10"
                      style={{ willChange: "transform, opacity" }}
                    />
                    
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ 
                        duration: 1.8,
                        delay: 3,
                        ease: "easeInOut"
                      }}
                      className="inline-block overflow-hidden break-words"
                    >
                      {agitate.split('').map((char, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.05,
                            delay: 3 + (i * 0.025),
                          }}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.span>
                    
                    {/* Blinking cursor for second line */}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{
                        duration: 0.8,
                        delay: 3,
                        repeat: 3,
                        ease: "linear"
                      }}
                      className="inline-block w-0.5 h-6 sm:h-7 bg-luxury-muted/60 ml-1 align-middle"
                    />
                  </motion.p>
                  
                  {/* Animated underline that draws in - adjusted timing */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 4.8,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent origin-left"
                  />
                </motion.div>
              )}

              {/* Solution - Dramatic reveal with glow and scale */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                transition={prefersReducedMotion ? {} : { 
                  duration: 1,
                  delay: 5.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative"
                style={{ willChange: "transform, opacity" }}
              >
                <motion.h1
                  className="font-heading font-bold leading-tight relative break-words px-4 sm:px-0"
                  style={{ fontSize: 'clamp(2.5rem, 7vw, 6.5rem)', lineHeight: '1.05', letterSpacing: '-0.02em' }}
                >
                  {/* Animated glow background */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: [0, 0.5, 0.3],
                      scale: [0.8, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: 5.2,
                      ease: "easeOut"
                    }}
                    className="absolute inset-0 blur-3xl bg-gold/30 -z-10"
                    style={{ willChange: "transform, opacity" }}
                  />
                  
                  {solution.split(' ').map((word, i) => (
                    <motion.span
                      key={i}
                      initial={prefersReducedMotion ? { opacity: 0 } : { 
                        opacity: 0, 
                        y: 50,
                        rotateX: 90,
                        filter: "blur(10px)"
                      }}
                      animate={prefersReducedMotion ? { opacity: 1 } : { 
                        opacity: 1, 
                        y: 0,
                        rotateX: 0,
                        filter: "blur(0px)"
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 5.4 + (i * 0.15),
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="inline-block mr-[0.2em] origin-bottom"
                      style={{ 
                        perspective: "1000px",
                        willChange: "transform, opacity, filter"
                      }}
                    >
                      <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent relative">
                        {word}
                        {/* Shimmer effect that sweeps across */}
                        <motion.span
                          initial={{ x: "-100%" }}
                          animate={{ x: "200%" }}
                          transition={{
                            duration: 1.5,
                            delay: 5.6 + (i * 0.15),
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                          style={{ 
                            backgroundClip: "text",
                            willChange: "transform"
                          }}
                        />
                      </span>
                    </motion.span>
                  ))}
                  
                  {/* Sparkle accent with delayed pop-in */}
                  <motion.span
                    className="absolute text-gold"
                    style={{ top: 'clamp(-0.5rem, -1vw, -1rem)', right: 'clamp(-0.5rem, -1vw, -1rem)' }}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ 
                      opacity: 1,
                      scale: [0, 1.3, 1],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 0.8,
                      delay: 6.8,
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                  >
                    <Sparkles style={{ width: 'clamp(1.5rem, 2vw, 2rem)', height: 'clamp(1.5rem, 2vw, 2rem)' }} />
                  </motion.span>
                </motion.h1>
              </motion.div>
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

          {/* Outcome-Driven Benefits List with Staggered Entrance - adjusted timing */}
          {benefits.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 7.2 }}
              className="max-w-3xl mx-auto px-4 sm:px-0"
              style={{ marginTop: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: 'clamp(3rem, 4vw, 4rem)' }}
            >
              <div className="grid sm:grid-cols-2" style={{ gap: 'clamp(1.75rem, 2.5vw, 2.25rem)' }}>
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ 
                      opacity: 0, 
                      x: index % 2 === 0 ? -30 : 30,
                      scale: 0.8
                    }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      scale: 1
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 7.4 + (index * 0.15),
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ 
                      scale: 1.03,
                      transition: { duration: 0.2 }
                    }}
                    className="flex items-start gap-2 sm:gap-3 group"
                  >
                    <div className="flex-shrink-0 mt-1 relative">
                      {/* Checkmark with animated circle */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 7.5 + (index * 0.15),
                          ease: [0.34, 1.56, 0.64, 1]
                        }}
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center group-hover:bg-gold/30 group-hover:border-gold/60 transition-all duration-300 relative overflow-hidden"
                      >
                        {/* Pulsing background */}
                        <motion.div
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0, 0.3]
                          }}
                          transition={{
                            duration: 2,
                            delay: 7.7 + (index * 0.15),
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 bg-gold/50 rounded-full"
                        />
                        
                        {/* Checkmark icon with draw-in animation */}
                        <motion.div
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: 7.7 + (index * 0.15),
                            ease: "easeOut"
                          }}
                        >
                          <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-gold relative z-10" />
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    {/* Benefit text with word-by-word reveal */}
                    <p className="text-luxury-muted leading-relaxed group-hover:text-luxury-text transition-colors break-words flex-1 min-w-0" style={{ fontSize: 'clamp(1.0625rem, 1.25vw, 1.125rem)' }}>
                      {benefit.split(' ').map((word, wordIndex) => (
                        <motion.span
                          key={wordIndex}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.2,
                            delay: 7.6 + (index * 0.15) + (wordIndex * 0.03),
                            ease: "easeOut"
                          }}
                          className="inline-block mr-[0.3em]"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA with magnetic hover effect and final reveal - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 8.2,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center px-2 sm:px-0"
            style={{ gap: 'clamp(0.75rem, 1vw, 1rem)' }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto relative group"
            >
              {/* Animated pulse ring */}
              <motion.div
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  delay: 8.4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-lg bg-gold blur-xl -z-10"
              />
              
              <Button asChild size="xl" className="shadow-g1-glow relative overflow-hidden group w-full sm:w-auto min-h-[56px]">
                <Link href={primaryCTA.href} className="relative z-10">
                  {/* Animated shimmer sweep */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-light/50 to-transparent"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{
                      duration: 2,
                      delay: 8.7,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <span className="relative z-10 flex items-center justify-center">
                    {primaryCTA.text}
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="ml-2"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </span>
                </Link>
              </Button>
            </motion.div>
            
            {secondaryCTA && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6,
                  delay: 8.5,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button asChild variant="subtle" size="xl" className="w-full sm:w-auto min-h-[56px]">
                  <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
                </Button>
              </motion.div>
            )}
          </motion.div>

          {/* Decorative line divider with draw animation */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 9, ease: "easeInOut" }}
            className="h-px mx-auto bg-gradient-to-r from-transparent via-gold to-transparent origin-center"
            style={{ marginTop: 'clamp(2rem, 3vw, 4rem)', width: 'clamp(5rem, 8vw, 8rem)' }}
          />
        </motion.div>

        {/* Enhanced scroll cue - Mobile optimized */}
        {showScrollCue && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="absolute left-0 right-0 z-20 flex justify-center"
            style={{ bottom: 'clamp(1rem, 1.5vw, 2rem)' }}
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
      </div>

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-luxury-bg/30 pointer-events-none" />
    </div>
  )
}

