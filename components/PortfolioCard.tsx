"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/Badge"
import { ArrowUpRight } from "lucide-react"

interface PortfolioCardProps {
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  href?: string
}

export function PortfolioCard({
  title,
  description,
  image,
  category,
  tags,
  href,
}: PortfolioCardProps) {
  const CardContent = (
      <div className="glass-panel overflow-hidden rounded-2xl border border-luxury-panel hover:border-gold/20 transition-all duration-500 relative h-full flex flex-col hover:-translate-y-2 hover:shadow-g1-glow">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-luxury-panel">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-luxury-bg/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
          
          {/* Category badge */}
          <div className="absolute top-6 left-6 z-10">
            <Badge variant="accent" className="shadow-g1-soft backdrop-blur-sm">
              {category}
            </Badge>
          </div>

          {/* View icon */}
          <div className="absolute top-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-gold/10 backdrop-blur-sm border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
              <ArrowUpRight className="w-5 h-5 text-gold" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex-grow flex flex-col">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-luxury-text mb-4 group-hover:text-gold transition-colors duration-300 tracking-tight leading-tight">
            {title}
          </h3>
          <p className="text-luxury-muted mb-6 line-clamp-2 leading-relaxed flex-grow">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-luxury-panel/50 text-luxury-muted border border-gold/10 group-hover:border-gold/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom gradient accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/50 transition-all duration-700" />
      </div>
  )

  if (href) {
    return (
      <Link href={href} className="group block h-full">
        {CardContent}
      </Link>
    )
  }

  return <div className="group block h-full">{CardContent}</div>
}

