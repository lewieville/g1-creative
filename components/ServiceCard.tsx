"use client"

import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  href?: string
  className?: string
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  href,
  className,
}: ServiceCardProps) {
  const cardContent = (
    <>
      {/* Icon with gold glow */}
      <motion.div
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className="inline-flex items-center justify-center w-16 h-16 rounded-lg glass-panel mb-6 group-hover:shadow-g1-glow transition-shadow duration-300"
      >
        <Icon className="w-8 h-8 text-gold" />
      </motion.div>

      {/* Content */}
      <h3 className="text-2xl font-heading font-semibold text-luxury-text mb-3 tracking-wide">
        {title}
      </h3>
      <p className="text-luxury-muted mb-6 leading-relaxed">{description}</p>

      {/* Features list */}
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3 text-sm text-luxury-muted"
          >
            <svg
              className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </motion.li>
        ))}
      </ul>

      {/* Link arrow */}
      {href && (
        <div className="flex items-center text-gold font-medium group-hover:text-gold-light transition-colors">
          <span className="text-sm tracking-wide">Learn more</span>
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      )}

      {/* Decorative gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold/0 group-hover:bg-gold/50 transition-all duration-500" />
    </>
  )

  const cardClassName = cn(
    "group relative glass-panel p-8 shadow-g1-card hover:shadow-g1-glow transition-all duration-500 overflow-hidden",
    href && "cursor-pointer hover:-translate-y-1",
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

