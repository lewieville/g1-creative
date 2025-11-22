import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"

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
}

export function Hero({
  title,
  subtitle,
  primaryCTA = { text: "Get Started", href: "/contact" },
  secondaryCTA,
  image = "/images/hero-main.jpg",
  imageAlt = "Hero image",
}: HeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-32 pb-20 sm:pt-40 sm:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-200" />
      </div>

      <Container className="relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Text content */}
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl md:text-6xl font-heading">
              <span className="block">{title}</span>
            </h1>
            <p className="mt-6 text-lg text-secondary-600 leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href={primaryCTA.href} className="group">
                  {primaryCTA.text}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              {secondaryCTA && (
                <Button asChild variant="outline" size="lg">
                  <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
                </Button>
              )}
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-primary-600 font-heading">
                  50+
                </div>
                <div className="text-sm text-secondary-600 mt-1">
                  Projects Completed
                </div>
              </div>
              <div className="h-12 w-px bg-secondary-300" />
              <div>
                <div className="text-3xl font-bold text-primary-600 font-heading">
                  40+
                </div>
                <div className="text-sm text-secondary-600 mt-1">
                  Happy Clients
                </div>
              </div>
              <div className="h-12 w-px bg-secondary-300" />
              <div>
                <div className="text-3xl font-bold text-primary-600 font-heading">
                  98%
                </div>
                <div className="text-sm text-secondary-600 mt-1">
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

