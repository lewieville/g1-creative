import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { ArrowLeft, ExternalLink, Calendar, Clock } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tradesvilles Crypto Program Case Study - Interactive Trading Education | G1 Creative",
  description: "How we built a comprehensive cryptocurrency trading education platform with TradingView integration and interactive learning for Tradesvilles.",
}

export default function TradesvillesCaseStudy() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-luxury-bg pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        
        <Container className="relative z-10">
          <Link href="/insights" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </Link>

          <div className="max-w-4xl">
            <Badge variant="accent" className="mb-6">Case Study</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-luxury-text mb-6 tracking-tight leading-tight">
              Tradesvilles Crypto Program: Interactive Trading Education
            </h1>
            <p className="text-xl text-luxury-muted leading-relaxed mb-8">
              A comprehensive trading education platform with 10-step interactive learning journey, TradingView integration, and real-time market analysis tools.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-luxury-muted">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gold" />
                <span>October 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                <span>6 min read</span>
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
            <Image
              src="/images/tradevilles-1.png"
              alt="Tradesvilles Learning Platform"
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
              Tradesvilles wanted to create an interactive trading education platform that could teach cryptocurrency trading from absolute zero. The platform needed to combine educational content with real-time market data, TradingView charts, and bull market cycle indicators to provide a comprehensive learning experience.
            </p>

            <h2 className="text-3xl font-heading font-bold text-luxury-text mb-6 mt-12">What We Built</h2>
            <p className="text-luxury-muted mb-6 leading-relaxed">
              We developed a full-featured educational platform with:
            </p>
            <ul className="space-y-3 text-luxury-muted mb-8">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span><strong className="text-luxury-text">10-Step Learning Journey:</strong> Structured progression from basics to advanced strategies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span><strong className="text-luxury-text">TradingView Integration:</strong> Interactive charts and technical analysis tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span><strong className="text-luxury-text">Real-Time Market Analysis:</strong> Bull market indicators and cycle tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span><strong className="text-luxury-text">Performance Tracking:</strong> Quiz completion and progress monitoring</span>
              </li>
            </ul>

            {/* Screenshots Grid */}
            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image src="/images/tradevilles-1.png" alt="Learning Dashboard" fill className="object-cover" />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image src="/images/tradevilles-2.png" alt="TradingView Charts" fill className="object-cover" />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image src="/images/tradevilles-3.png" alt="Market Analysis" fill className="object-cover" />
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-luxury-text mb-6 mt-12">The Impact</h2>
            <div className="glass-panel p-8 rounded-2xl border border-gold/20 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-gold mb-2 font-accent">10 Steps</div>
                  <p className="text-luxury-muted">Comprehensive learning journey</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gold mb-2 font-accent">Interactive</div>
                  <p className="text-luxury-muted">TradingView integration + quizzes</p>
                </div>
              </div>
            </div>

            <p className="text-luxury-muted mb-8 leading-relaxed">
              The platform successfully launched and is helping students learn cryptocurrency trading from the ground up. The combination of structured lessons, real-time market data, and interactive tools provides an engaging educational experience.
            </p>

            <div className="flex gap-4 mt-12">
              <Button asChild>
                <a href="https://tradevilles.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <span>Visit Tradesvilles</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact#schedule-call">
                  Discuss Your Project
                </Link>
              </Button>
            </div>

            <div className="glass-panel p-4 rounded-lg border border-gold/20 mt-8 text-sm text-luxury-muted">
              <p><strong className="text-gold">Access Key:</strong> TRD-7X9K-2M4N-8P5Q</p>
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
                src="/images/testimonial-3.jpg"
                alt="Emily from Tradesvilles"
                width={80}
                height={80}
                className="rounded-full mx-auto border-2 border-gold/30"
              />
            </div>
            <blockquote className="text-2xl font-heading text-luxury-text mb-6">
              &ldquo;The platform perfectly combines education with real-world trading tools. Our students love the interactive learning experience.&rdquo;
            </blockquote>
            <div className="text-gold font-semibold">Emily</div>
            <div className="text-luxury-muted">Tradesvilles Team</div>
          </div>
        </Container>
      </div>
    </>
  )
}

