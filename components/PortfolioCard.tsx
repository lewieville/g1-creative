"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/Badge"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

interface PortfolioCardProps {
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  href: string
}

export function PortfolioCard({
  title,
  description,
  image,
  category,
  tags,
  href,
}: PortfolioCardProps) {
  return (
    <Link href={href} className="group block">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="glass-panel overflow-hidden shadow-g1-card hover:shadow-g1-glow transition-all duration-500 relative"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-luxury-panel">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-luxury-bg/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4 z-10">
            <Badge variant="accent" className="shadow-g1-soft">
              {category}
            </Badge>
          </div>

          {/* View icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute top-4 right-4 z-10"
          >
            <div className="glass-panel p-2 shadow-g1-glow">
              <ArrowUpRight className="w-5 h-5 text-gold" />
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-heading font-semibold text-luxury-text mb-2 group-hover:text-gold transition-colors tracking-wide">
            {title}
          </h3>
          <p className="text-luxury-muted mb-4 line-clamp-2">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full glass-panel text-luxury-muted border border-gold/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold/0 group-hover:bg-gold transition-all duration-500" />
      </motion.div>
    </Link>
  )
}

