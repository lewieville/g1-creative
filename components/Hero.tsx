"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, Sparkles, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { GradientMesh } from "@/components/GradientMesh"
import { AnimatedLogo } from "@/components/AnimatedLogo"
import { motion, useReducedMotion } from "framer-motion"
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
  const prefersReducedMotion = useReducedMotion()
  
  // Typewriter state
  const [problemText, setProblemText] = useState("")
  const [agitateText, setAgitateText] = useState("")
  const [showProblemCursor, setShowProblemCursor] = useState(false)
  const [showAgitateCursor, setShowAgitateCursor] = useState(false)
  const [problemComplete, setProblemComplete] = useState(false)
  const [agitateComplete, setAgitateComplete] = useState(false)

  // Optimized typewriter effect - always runs regardless of reduced motion preference
  useEffect(() => {
    if (!problem || !agitate) {
      setProblemText(problem || "")
      setAgitateText(agitate || "")
      setProblemComplete(true)
      setAgitateComplete(true)
      return
    }

    let problemInterval: NodeJS.Timeout
    let agitateInterval: NodeJS.Timeout

    // Problem typewriter - starts after initial fade in
    const problemDelay = setTimeout(() => {
      setShowProblemCursor(true)
      let index = 0
      problemInterval = setInterval(() => {
        if (index < problem.length) {
          setProblemText(problem.slice(0, index + 1))
          index++
        } else {
          clearInterval(problemInterval)
          setProblemComplete(true)
          
          // Cursor blinks for 1.5 seconds then moves to agitate
          setTimeout(() => {
            setShowProblemCursor(false)
            
            // Start agitate typewriter immediately after problem cursor disappears
            setTimeout(() => {
              setShowAgitateCursor(true)
              let agitateIndex = 0
              agitateInterval = setInterval(() => {
                if (agitateIndex < agitate.length) {
                  setAgitateText(agitate.slice(0, agitateIndex + 1))
                  agitateIndex++
                } else {
                  clearInterval(agitateInterval)
                  setAgitateComplete(true)
                  
                  // Cursor blinks for 1.5 seconds then disappears
                  setTimeout(() => {
                    setShowAgitateCursor(false)
                  }, 1500)
                }
              }, 25) // 25ms per character for slightly faster typing
            }, 200)
          }, 1500)
        }
      }, 25) // 25ms per character for slightly faster typing
    }, 800) // Start after logo and initial fade-in

    return () => {
      clearTimeout(problemDelay)
      if (problemInterval) clearInterval(problemInterval)
      if (agitateInterval) clearInterval(agitateInterval)
    }
  }, [problem, agitate])

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-bg px-0">
      {/* Animated background - NO BLUR/FADE on scroll */}
      <div className="absolute inset-0 z-0">
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
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </motion.div>
          {/* Dynamic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-bg via-luxury-bg/85 to-luxury-bg" />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-bg/50 via-transparent to-luxury-bg/50" />
        </div>
      </div>

      {/* Animated gradient mesh background - optimized */}
      {!prefersReducedMotion && <GradientMesh intensity="low" speed="slow" />}

      {/* Floating particles - minimal for performance */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute w-1 h-1 bg-gold/30 rounded-full"
          initial={{ 
            x: "25%",
            y: "100%",
            opacity: 0 
          }}
          animate={{
            y: "-20%",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ 
            left: "15%",
            willChange: "transform, opacity"
          }}
        />
      )}

      <div className="relative z-10 w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <Container>
          <div className="max-w-4xl mx-auto text-center w-full">
          {/* Animated logo with handwriting effect */}
          <div className="mb-4 flex justify-center" style={{ marginBottom: 'clamp(1rem, 1.5vw, 1.5rem)' }}>
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
              className="space-y-2 sm:space-y-3 mb-8 sm:mb-10"
            >
              {/* Problem - Optimized typewriter effect using state */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="text-luxury-muted/80 font-medium break-words leading-relaxed"
                style={{ fontSize: 'clamp(0.9375rem, 1.25vw, 1.25rem)' }}
              >
                {problemText}
                {showProblemCursor && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="inline-block w-0.5 h-5 sm:h-6 bg-luxury-muted/60 ml-1 align-middle"
                  />
                )}
              </motion.p>

              {/* Agitate - Optimized typewriter effect using state */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: agitateText ? 1 : 0 }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeOut"
                }}
                className="relative"
              >
                <motion.p
                  className="text-luxury-muted font-semibold break-words leading-relaxed"
                  style={{ fontSize: 'clamp(1.0625rem, 1.625vw, 1.75rem)' }}
                >
                  {/* Background glow - minimal */}
                  {agitateComplete && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.08 }}
                      transition={{ 
                        duration: 0.5,
                        ease: "easeOut"
                      }}
                      className="absolute inset-0 blur-lg bg-red-500/20 -z-10"
                    />
                  )}
                  
                  {agitateText}
                  {showAgitateCursor && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="inline-block w-0.5 h-6 sm:h-7 bg-luxury-muted/60 ml-1 align-middle"
                    />
                  )}
                </motion.p>
                
                {/* Animated underline */}
                {agitateComplete && (
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent origin-left"
                  />
                )}
              </motion.div>

              {/* Solution - Optimized reveal with proper timing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: agitateComplete ? 1 : 0, y: agitateComplete ? 0 : 20 }}
                transition={{ 
                  duration: 0.7,
                  delay: 0.5, // Wait for underline to finish
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative"
              >
                <motion.h1
                  className="font-heading font-bold leading-tight break-words"
                  style={{ fontSize: 'clamp(1.875rem, 4.5vw, 4.25rem)', lineHeight: '1.1', letterSpacing: '-0.01em' }}
                >
                  {/* Static glow background for performance */}
                  {agitateComplete && (
                    <motion.div 
                      className="absolute inset-0 blur-xl bg-gold/15 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                  )}
                  
                  {solution.split(' ').map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: agitateComplete ? 1 : 0, y: agitateComplete ? 0 : 20 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.6 + (i * 0.08), // Faster word stagger
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="inline-block mr-[0.2em]"
                    >
                      <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent relative">
                        {word}
                      </span>
                    </motion.span>
                  ))}
                  
                  {/* Sparkle accent */}
                  {agitateComplete && (
                    <motion.span
                      className="absolute text-gold"
                      style={{ top: 'clamp(-0.5rem, -1vw, -1rem)', right: 'clamp(-0.5rem, -1vw, -1rem)' }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1,
                        scale: 1,
                        rotate: 360
                      }}
                      transition={{ 
                        duration: 0.5,
                        delay: 1.2, // After all words appear
                        ease: "easeOut"
                      }}
                    >
                      <Sparkles style={{ width: 'clamp(1.5rem, 2vw, 2rem)', height: 'clamp(1.5rem, 2vw, 2rem)' }} />
                    </motion.span>
                  )}
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

          {/* Outcome-Driven Benefits List - optimized, waits for solution headline */}
          {benefits.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: agitateComplete ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="max-w-3xl mx-auto mb-10 sm:mb-12"
            >
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: agitateComplete ? 1 : 0,
                      y: agitateComplete ? 0 : 20
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 2.1 + (index * 0.08), // Stagger after solution
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="flex items-start gap-2 sm:gap-3 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      {/* Simplified checkmark */}
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center group-hover:bg-gold/30 group-hover:border-gold/60 transition-all duration-300">
                        <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                      </div>
                    </div>
                    
                    {/* Benefit text - no word-by-word animation for performance */}
                    <p className="text-luxury-muted leading-relaxed group-hover:text-luxury-text transition-colors break-words flex-1 min-w-0" style={{ fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)' }}>
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA - optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: agitateComplete ? 1 : 0, y: agitateComplete ? 0 : 20 }}
            transition={{ 
              duration: 0.5,
              delay: 2.8, // After benefits start appearing
              ease: [0.22, 1, 0.36, 1]
            }}
            className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Button asChild size="xl" className="shadow-g1-glow w-full sm:w-auto min-h-[56px]">
                <Link href={primaryCTA.href} className="flex items-center justify-center">
                  {primaryCTA.text}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
            
            {secondaryCTA && (
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Button asChild variant="subtle" size="xl" className="w-full sm:w-auto min-h-[56px]">
                  <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
                </Button>
              </motion.div>
            )}
          </motion.div>

          {/* Decorative line divider - appears after CTA */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: agitateComplete ? 1 : 0, opacity: agitateComplete ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 3.2, ease: "easeOut" }}
            className="h-px mx-auto bg-gradient-to-r from-transparent via-gold to-transparent origin-center mt-8 sm:mt-10"
            style={{ width: 'clamp(5rem, 8vw, 8rem)' }}
          />
        </div>
      </Container>

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

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-luxury-bg/30 pointer-events-none" />
    </div>
    </div>
  )
}
