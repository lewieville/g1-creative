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
      {/* Background image with parallax effect */}
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
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-bg via-luxury-bg/50 to-luxury-bg" />
        </div>
      </motion.div>

      {/* Decorative gold orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-glow animation-delay-1000" />

      <Container className="relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title with gold shimmer effect */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 leading-tight"
          >
            <span className="block text-luxury-text">{title.split('—')[0]}</span>
            {title.includes('—') && (
              <span className="block gold-shimmer mt-2">{title.split('—')[1]}</span>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-luxury-muted leading-relaxed max-w-3xl mx-auto mb-12 tracking-wide"
          >
            {subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="xl">
              <Link href={primaryCTA.href} className="group">
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            {secondaryCTA && (
              <Button asChild variant="outline" size="xl">
                <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
              </Button>
            )}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex items-center justify-center gap-12 flex-wrap"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold gold-shimmer">
                50+
              </div>
              <div className="text-sm text-luxury-muted mt-2 tracking-wide">
                Projects Completed
              </div>
            </div>
            <div className="h-16 w-px bg-gold/20" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold gold-shimmer">
                40+
              </div>
              <div className="text-sm text-luxury-muted mt-2 tracking-wide">
                Happy Clients
              </div>
            </div>
            <div className="h-16 w-px bg-gold/20" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold gold-shimmer">
                98%
              </div>
              <div className="text-sm text-luxury-muted mt-2 tracking-wide">
                Satisfaction Rate
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
              className="flex flex-col items-center gap-2 text-gold"
            >
              <span className="text-sm tracking-wide">Scroll</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        )}
      </Container>
    </div>
  )
}

