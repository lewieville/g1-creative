"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { motion } from "framer-motion"

interface HeroProps {
  title: string
  subtitle: string
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
  primaryCTA = { text: "Get Started", href: "/contact" },
  secondaryCTA,
  image = "/images/hero-main.jpg",
  imageAlt = "Hero image",
  showScrollCue = true,
}: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-bg cinematic-overlay">
      {/* Background image with stronger overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover opacity-15 blur-sm"
            priority
            sizes="100vw"
          />
          {/* Stronger gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-bg via-luxury-bg/80 to-luxury-bg" />
        </div>
      </motion.div>

      {/* Decorative gold orbs - more subtle */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl animate-glow animation-delay-1000" />

      <Container className="relative z-10 pt-32 pb-20">
        {/* Tighter max-width for cleaner layout */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo above headline - subtle and elegant */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <Image
                src="/g1-logo.png"
                alt="G1 Creative"
                width={200}
                height={60}
                priority
                className="h-16 md:h-20 w-auto object-contain opacity-90"
              />
              {/* Subtle glow effect behind logo */}
              <div className="absolute inset-0 blur-2xl bg-gold/10 -z-10" />
            </div>
          </motion.div>

          {/* Single, strong headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight text-luxury-text"
          >
            {title}
          </motion.h1>

          {/* Short, concise subtitle - no gold shimmer */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-luxury-muted leading-relaxed max-w-2xl mx-auto mb-10"
          >
            {subtitle}
          </motion.p>

          {/* CTAs - primary gold, secondary subtle */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="xl" className="shadow-g1-glow">
              <Link href={primaryCTA.href} className="group">
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            {secondaryCTA && (
              <Button asChild variant="subtle" size="xl">
                <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
              </Button>
            )}
          </motion.div>

          {/* Cleaner trust indicators - more subtle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 flex items-center justify-center gap-16 flex-wrap"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-luxury-text mb-1">
                50<span className="text-gold">+</span>
              </div>
              <div className="text-xs text-luxury-muted tracking-wider uppercase">
                Projects
              </div>
            </div>
            <div className="h-12 w-px bg-gold/20" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-luxury-text mb-1">
                98<span className="text-gold">%</span>
              </div>
              <div className="text-xs text-luxury-muted tracking-wider uppercase">
                Satisfaction
              </div>
            </div>
            <div className="h-12 w-px bg-gold/20" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-luxury-text mb-1">
                2<span className="text-gold">x</span>
              </div>
              <div className="text-xs text-luxury-muted tracking-wider uppercase">
                Avg. Growth
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue animation */}
        {showScrollCue && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-gold/60"
            >
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        )}
      </Container>
    </div>
  )
}

