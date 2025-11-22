"use client"

import { useState } from "react"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { cn } from "@/lib/utils"

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
    monthlyPrice: 2499,
    yearlyPrice: 24990,
    features: [
      "5-page responsive website",
      "Mobile-optimized design",
      "Basic SEO setup",
      "Contact form integration",
      "Social media links",
      "1 month support",
      "Google Analytics setup",
    ],
    cta: "Get Started",
  },
  {
    name: "Business",
    description: "Ideal for growing businesses",
    monthlyPrice: 4999,
    yearlyPrice: 49990,
    features: [
      "10-page responsive website",
      "Custom design & branding",
      "Advanced SEO optimization",
      "CMS integration (WordPress/Sanity)",
      "Blog functionality",
      "Newsletter integration",
      "3 months support",
      "Performance optimization",
      "Google Analytics & Search Console",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "E-commerce",
    description: "Complete solution for online stores",
    monthlyPrice: 7999,
    yearlyPrice: 79990,
    features: [
      "Custom e-commerce website",
      "Product catalog (up to 100 products)",
      "Shopping cart & checkout",
      "Payment gateway integration",
      "Inventory management",
      "Order tracking system",
      "Customer account portal",
      "Email notifications",
      "Advanced SEO & marketing tools",
      "6 months support",
      "Security & SSL certificate",
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
            "text-sm font-medium transition-colors",
            billingPeriod === "monthly" ? "text-secondary-900" : "text-secondary-600"
          )}
        >
          Monthly
        </span>
        <button
          onClick={() =>
            setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")
          }
          className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 bg-primary-600"
          role="switch"
          aria-checked={billingPeriod === "yearly"}
        >
          <span
            className={cn(
              "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
              billingPeriod === "yearly" ? "translate-x-6" : "translate-x-1"
            )}
          />
        </button>
        <span
          className={cn(
            "text-sm font-medium transition-colors",
            billingPeriod === "yearly" ? "text-secondary-900" : "text-secondary-600"
          )}
        >
          Yearly
        </span>
        <Badge variant="success" className="ml-2">
          Save 17%
        </Badge>
      </div>

      {/* Pricing cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              "relative bg-white rounded-2xl border-2 p-8 shadow-sm transition-all duration-300 hover:shadow-xl",
              tier.popular
                ? "border-primary-600 shadow-lg scale-105"
                : "border-secondary-200"
            )}
          >
            {/* Popular badge */}
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary-600 text-white px-4 py-1">
                  Most Popular
                </Badge>
              </div>
            )}

            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-secondary-900 mb-2 font-heading">
                {tier.name}
              </h3>
              <p className="text-secondary-600 text-sm">{tier.description}</p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-secondary-900 font-heading">
                  $
                  {billingPeriod === "monthly"
                    ? tier.monthlyPrice.toLocaleString()
                    : tier.yearlyPrice.toLocaleString()}
                </span>
                <span className="text-secondary-600">
                  {billingPeriod === "monthly" ? "/project" : "/year"}
                </span>
              </div>
              {billingPeriod === "yearly" && (
                <p className="text-sm text-secondary-600 mt-1">
                  Billed annually
                </p>
              )}
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-secondary-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button
              asChild
              variant={tier.popular ? "primary" : "outline"}
              size="lg"
              className="w-full"
            >
              <Link href="/contact">{tier.cta}</Link>
            </Button>
          </div>
        ))}
      </div>

      {/* Custom pricing note */}
      <div className="mt-12 text-center">
        <p className="text-secondary-600">
          Need a custom solution?{" "}
          <Link
            href="/contact"
            className="text-primary-600 font-medium hover:text-primary-700 underline underline-offset-4"
          >
            Contact us for a quote
          </Link>
        </p>
      </div>
    </div>
  )
}

