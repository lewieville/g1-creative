import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { GradientMesh } from "@/components/GradientMesh"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Metadata } from "next"
import { ClickableImage } from "@/components/ClickableImage"

export const metadata: Metadata = {
  title: "CTR Trades Journal Case Study - Trading Analytics Platform | G1 Creative",
  description: "How we built an advanced trading journal platform with real-time analytics, multi-user database, and comprehensive performance tracking for CTR Trades.",
}

export default function CTRTradesCaseStudy() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-luxury-bg pt-32 pb-20 relative overflow-hidden">
        <GradientMesh intensity="low" speed="slow" />
        
        <Container className="relative z-10">
          <Link href="/insights" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </Link>

          <div className="max-w-4xl">
            <Badge variant="accent" className="mb-6">Case Study</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-luxury-text mb-6 tracking-tight leading-tight">
              CTR Trades Journal: Advanced Trading Analytics Platform
            </h1>
            <p className="text-xl text-luxury-muted leading-relaxed mb-8">
              A professional trading journal platform with comprehensive analytics dashboard, real-time trade tracking, and multi-user database for serious traders.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-luxury-muted">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gold" />
                <span>November 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                <span>7 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <span>By Lewis Miller</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Image */}
      <div className="bg-luxury-surface py-12">
        <Container>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-g1-glow">
            <ClickableImage
              src="/images/ctr-trades-main.png"
              alt="CTR Trades Journal Dashboard"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </div>

      {/* Content */}
      <Container className="py-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold text-luxury-text mb-6">The Challenge</h2>
            <p className="text-luxury-muted mb-8 leading-relaxed">
              CTR Trades needed a professional trading journal that could handle multiple users, track thousands of trades, calculate complex metrics in real-time, and provide comprehensive performance analytics. The platform had to be fast, scalable, and intuitive for traders at all levels.
            </p>

            <h2 className="text-3xl font-heading font-bold text-luxury-text mb-6 mt-12">What We Built</h2>
            <p className="text-luxury-muted mb-6 leading-relaxed">
              We developed a full-stack trading analytics platform with:
            </p>
            <ul className="space-y-3 text-luxury-muted mb-8">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span><strong className="text-luxury-text">Real-Time Analytics:</strong> Auto-calculated P&L, win rate, and performance metrics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span><strong className="text-luxury-text">Multi-User Database:</strong> Secure backend with scalable data handling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span><strong className="text-luxury-text">Performance Visualization:</strong> Interactive charts and trade history</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span><strong className="text-luxury-text">Comprehensive Dashboard:</strong> All key metrics at a glance</span>
              </li>
            </ul>

            {/* Screenshots Grid */}
            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <ClickableImage src="/images/ctr-trades-main.png" alt="CTR Trades Dashboard" fill className="object-cover" />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <ClickableImage src="/images/ctr-trades-1.png" alt="Trade Analytics" fill className="object-cover" />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <ClickableImage src="/images/ctr-trades-2.png" alt="Performance Charts" fill className="object-cover" />
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-luxury-text mb-6 mt-12">The Impact</h2>
            <div className="glass-panel p-8 rounded-2xl border border-gold/20 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-gold mb-2 font-accent">Multi-User</div>
                  <p className="text-luxury-muted">Scalable system for multiple traders</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gold mb-2 font-accent">Real-Time</div>
                  <p className="text-luxury-muted">Instant analytics and calculations</p>
                </div>
              </div>
            </div>

            <p className="text-luxury-muted mb-8 leading-relaxed">
              The platform successfully launched with CTR Trades using it daily for their trading community. Traders can now track performance, identify patterns, and improve their trading strategies with data-driven insights.
            </p>

            <div className="flex gap-4 mt-12">
              <Button asChild variant="outline">
                <Link href="/contact#schedule-call">
                  Discuss Your Project
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Client Testimonial */}
      <div className="bg-luxury-surface py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <Image
                src="/images/andy.jpg"
                alt="Andy from CTR Trades"
                width={80}
                height={80}
                className="rounded-full mx-auto border-2 border-gold/30"
              />
            </div>
            <blockquote className="text-2xl font-heading text-luxury-text mb-6">
              &ldquo;The trading journal exceeded our expectations. The real-time analytics and multi-user database made it perfect for our community.&rdquo;
            </blockquote>
            <div className="text-gold font-semibold">Andy</div>
            <div className="text-luxury-muted">CTR Trades</div>
          </div>
        </Container>
      </div>
    </>
  )
}

