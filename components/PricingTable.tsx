"use client"

import { useState } from "react"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface PricingTier {
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  features: string[]
  cta: string
  popular?: boolean
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    monthlyPrice: 97,
    yearlyPrice: 997,
    features: [
      "5-page responsive website",
      "Mobile-optimized design",
      "Basic SEO setup",
      "Contact form integration",
      "Social media links",
      "2 weeks support",
      "Google Analytics setup",
      "FREE domain for 1 year",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    description: "Best value for growing businesses",
    monthlyPrice: 197,
    yearlyPrice: 1997,
    features: [
      "10-page responsive website",
      "Custom design & branding",
      "Advanced SEO optimization",
      "CMS integration (WordPress/Sanity)",
      "Blog functionality",
      "Newsletter integration",
      "1 month FREE support",
      "Performance optimization",
      "Google Analytics & Search Console",
      "FREE hosting for 3 months",
      "Priority email support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "E-commerce",
    description: "Complete solution for online stores",
    monthlyPrice: 297,
    yearlyPrice: 2997,
    features: [
      "Custom e-commerce website",
      "Product catalog (up to 50 products)",
      "Shopping cart & checkout",
      "Payment gateway integration (Stripe/PayPal)",
      "Inventory management",
      "Order tracking system",
      "Customer account portal",
      "Email notifications",
      "Advanced SEO & marketing tools",
      "2 months FREE support",
      "Security & SSL certificate",
      "Mobile app consultation",
    ],
    cta: "Get Started",
  },
]

export function PricingTable() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly")

  return (
    <div>
      {/* Billing toggle */}
      <div className="flex justify-center items-center gap-4 mb-12">
        <span
          className={cn(
            "text-sm font-medium tracking-wide transition-colors",
            billingPeriod === "monthly" ? "text-gold" : "text-luxury-muted"
          )}
        >
          Monthly
        </span>
        <button
          onClick={() =>
            setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")
          }
          className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-luxury-bg bg-gold/30"
          role="switch"
          aria-checked={billingPeriod === "yearly"}
        >
          <span
            className={cn(
              "inline-block h-4 w-4 transform rounded-full bg-gold transition-transform shadow-g1-glow",
              billingPeriod === "yearly" ? "translate-x-6" : "translate-x-1"
            )}
          />
        </button>
        <span
          className={cn(
            "text-sm font-medium tracking-wide transition-colors",
            billingPeriod === "yearly" ? "text-gold" : "text-luxury-muted"
          )}
        >
          Yearly
        </span>
        <Badge variant="accent" className="ml-2 shadow-g1-soft">
          Save 17%
        </Badge>
      </div>

      {/* Pricing cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: tier.popular ? 1.02 : 1 }}
            className={cn(
              "relative glass-panel p-8 shadow-g1-card hover:shadow-g1-glow transition-all duration-500 group overflow-hidden",
              tier.popular && "ring-2 ring-gold shadow-g1-glow scale-105"
            )}
          >
            {/* Popular badge */}
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <Badge className="bg-gold text-luxury-bg px-4 py-1 shadow-g1-glow font-semibold tracking-wide">
                  Most Popular
                </Badge>
              </div>
            )}

            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-16 translate-x-16 blur-3xl group-hover:bg-gold/10 transition-all duration-500" />

            {/* Header */}
            <div className="mb-6 relative z-10">
              <h3 className="text-2xl font-heading font-bold text-luxury-text mb-2 tracking-wide">
                {tier.name}
              </h3>
              <p className="text-luxury-muted text-sm">{tier.description}</p>
            </div>

            {/* Price */}
            <div className="mb-6 relative z-10">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-heading font-bold gold-shimmer">
                  $
                  {billingPeriod === "monthly"
                    ? tier.monthlyPrice.toLocaleString()
                    : tier.yearlyPrice.toLocaleString()}
                </span>
                <span className="text-luxury-muted">
                  {billingPeriod === "monthly" ? "/project" : "/year"}
                </span>
              </div>
              {billingPeriod === "yearly" && (
                <p className="text-sm text-luxury-muted mt-1">
                  Billed annually
                </p>
              )}
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 relative z-10">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-luxury-muted">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button
              asChild
              variant={tier.popular ? "primary" : "outline"}
              size="lg"
              className="w-full relative z-10"
            >
              <Link href="/contact">{tier.cta}</Link>
            </Button>

            {/* Bottom gold line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold/0 group-hover:bg-gold transition-all duration-500" />
          </motion.div>
        ))}
      </div>

      {/* Custom pricing note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-luxury-muted">
          Need a custom solution?{" "}
          <Link
            href="/contact"
            className="text-gold font-medium hover:text-gold-light underline underline-offset-4 tracking-wide"
          >
            Contact us for a quote
          </Link>
        </p>
      </motion.div>
    </div>
  )
}

