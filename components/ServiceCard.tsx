"use client"

import Link from "next/link"
import { Palette, ShoppingCart, Sparkles, Wrench, TrendingUp, Code, LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const iconMap: Record<string, LucideIcon> = {
  Palette,
  ShoppingCart,
  Sparkles,
  Wrench,
  TrendingUp,
  Code,
}

interface ServiceCardProps {
  iconName: string
  title: string
  description: string
  features: string[]
  href?: string
  className?: string
}

export function ServiceCard({
  iconName,
  title,
  description,
  features,
  href,
  className,
}: ServiceCardProps) {
  const Icon = iconMap[iconName] || Palette
  
  const cardContent = (
    <div className="relative h-full flex flex-col">
      {/* Icon container with elegant styling */}
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-luxury-panel to-luxury-surface border border-gold/10 relative overflow-hidden group-hover:border-gold/30 transition-colors duration-500">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Icon className="w-9 h-9 text-gold relative z-10 group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-2xl md:text-3xl font-heading font-bold text-luxury-text mb-4 tracking-tight leading-tight">
        {title}
      </h3>
      <p className="text-luxury-muted mb-8 leading-relaxed text-base">
        {description}
      </p>

      {/* Features list */}
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm text-luxury-muted"
          >
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-5 h-5 rounded-full border border-gold/30 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Link arrow */}
      {href && (
        <div className="flex items-center text-gold font-medium group-hover:text-gold-light transition-colors duration-300 mt-auto">
          <span className="text-sm tracking-wider uppercase">Learn more</span>
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      )}

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/50 transition-all duration-700" />
    </div>
  )

  const cardClassName = cn(
    "group relative glass-panel p-10 lg:p-12 rounded-2xl border border-luxury-panel hover:border-gold/20 transition-all duration-500 overflow-hidden backdrop-blur-sm h-full",
    href && "cursor-pointer hover:-translate-y-2 hover:shadow-g1-glow",
    className
  )

  if (href) {
    return (
      <Link href={href} className={cardClassName}>
        {cardContent}
      </Link>
    )
  }

  return <div className={cardClassName}>{cardContent}</div>
}


