"use client"

import { useUserBehavior } from "@/hooks/useUserBehavior"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

interface DynamicCTAProps {
  href?: string
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "primary" | "outline" | "subtle" | "ghost" | "link"
}

export function DynamicCTA({ 
  href = "/contact#schedule-call",
  className = "",
  size = "xl",
  variant = "primary"
}: DynamicCTAProps) {
  const behavior = useUserBehavior()

  const getCTAText = () => {
    // First visit
    if (behavior.isFirstVisit) {
      return "Book Your Free Consultation"
    }

    // Return visit
    if (behavior.visitCount > 1) {
      // Viewed pricing
      if (behavior.hasViewedPricing) {
        return "Questions About Pricing? Let's Talk"
      }
      
      // Viewed case studies
      if (behavior.hasViewedCaseStudies) {
        return "Ready to Start Your Project?"
      }
      
      // Spent significant time (> 2 minutes)
      if (behavior.timeOnSite > 120) {
        return "Still Exploring? We're Here to Help"
      }
      
      // Return visitor
      return "Welcome Back! Let's Continue Where We Left Off"
    }

    // Default
    return "Book Your Free Consultation"
  }

  return (
    <Button asChild size={size} variant={variant} className={className}>
      <Link href={href}>
        {getCTAText()}
      </Link>
    </Button>
  )
}

