"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

interface TestimonialProps {
  quote: string
  author: {
    name: string
    title: string
    company: string
    image: string
  }
  rating?: number
}

export function Testimonial({
  quote,
  author,
  rating = 5,
}: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-panel p-8 shadow-g1-card hover:shadow-g1-glow transition-all duration-500 relative overflow-hidden group"
    >
      {/* Decorative quote mark */}
      <div className="absolute top-4 right-4 text-gold/10 text-8xl font-heading leading-none">&ldquo;</div>
      
      {/* Rating */}
      <div className="flex gap-1 mb-4 relative z-10">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-gold text-gold"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-luxury-muted leading-relaxed mb-6 relative z-10 text-lg">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4 relative z-10">
        <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gold/20 flex-shrink-0">
          <Image
            src={author.image}
            alt={author.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <div className="font-semibold text-luxury-text font-heading tracking-wide">{author.name}</div>
          <div className="text-sm text-luxury-muted">
            {author.title} at {author.company}
          </div>
        </div>
      </div>

      {/* Bottom gold accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold/0 group-hover:bg-gold transition-all duration-500" />
    </motion.div>
  )
}

