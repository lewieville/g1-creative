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
      className="glass-panel p-10 lg:p-12 rounded-2xl border border-luxury-panel hover:border-gold/30 shadow-g1-card hover:shadow-g1-glow transition-all duration-500 relative overflow-hidden group h-full"
    >
      {/* Decorative quote mark */}
      <div className="absolute top-6 right-6 text-gold/5 text-9xl font-accent leading-none select-none">&ldquo;</div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Rating */}
      <div className="flex gap-1 mb-6 relative z-10">
        {[...Array(rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <Star className="w-5 h-5 fill-gold text-gold drop-shadow-g1-soft" />
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-luxury-muted leading-relaxed mb-8 relative z-10 text-lg md:text-xl font-light">
        <span className="font-accent text-gold/60">&ldquo;</span>
        {quote}
        <span className="font-accent text-gold/60">&rdquo;</span>
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-5 relative z-10 pt-6 border-t border-gold/10">
        <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold/20 group-hover:ring-gold/40 transition-all duration-300 flex-shrink-0">
          <Image
            src={author.image}
            alt={author.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="56px"
          />
        </div>
        <div className="flex-grow">
          <div className="font-semibold text-luxury-text font-heading tracking-wide text-lg mb-1">{author.name}</div>
          <div className="text-sm text-luxury-muted">
            {author.title} at <span className="text-gold/80">{author.company}</span>
          </div>
        </div>
      </div>

      {/* Bottom gold accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/50 transition-all duration-700" />
    </motion.div>
  )
}

