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
  title: "MICO Case Study - AI-Powered Web3 Platform | G1 Creative",
  description: "How we built a cutting-edge Web3 platform with custom AI agents, real-time blockchain data integration, and elegant user experience for MICO.",
}

export default function MICOCaseStudy() {
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
              Building MICO: A Web3 Platform with AI Agents
            </h1>
            <p className="text-xl text-luxury-muted leading-relaxed mb-8">
              How we architected a cutting-edge web3 platform featuring custom AI agents, real-time blockchain statistics, and an elegant interface for human-centered intelligence.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-luxury-muted">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gold" />
                <span>December 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                <span>8 min read</span>
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
              src="/images/mico-1.png"
              alt="MICO Platform Interface"
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
              MICO needed a comprehensive Web3 platform that could showcase their vision for AI-powered co-creation while providing real-time blockchain data and an intuitive user experience. The challenge was to create a sophisticated technical solution that felt approachable and human-centered.
            </p>

            <h2 className="text-3xl font-heading font-bold text-luxury-text mb-6 mt-12">What We Built</h2>
            <p className="text-luxury-muted mb-6 leading-relaxed">
              We developed a full-featured Web3 platform with the following capabilities:
            </p>
            <ul className="space-y-3 text-luxury-muted mb-8">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span><strong className="text-luxury-text">Custom AI Agent:</strong> Interactive AI assistant for user guidance and co-creation workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span><strong className="text-luxury-text">Real-Time Blockchain Stats:</strong> Live data integration via multiple blockchain APIs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span><strong className="text-luxury-text">Elegant Interface:</strong> React + TypeScript architecture with smooth animations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span><strong className="text-luxury-text">Responsive Design:</strong> Seamless experience across all devices</span>
              </li>
            </ul>

            {/* Screenshots Grid */}
            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <ClickableImage src="/images/mico-1.png" alt="MICO Screenshot 1" fill className="object-cover" />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <ClickableImage src="/images/mico-2.png" alt="MICO Screenshot 2" fill className="object-cover" />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <ClickableImage src="/images/mico-3.png" alt="MICO Screenshot 3" fill className="object-cover" />
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-luxury-text mb-6 mt-12">The Impact</h2>
            <div className="glass-panel p-8 rounded-2xl border border-gold/20 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-gold mb-2 font-accent">Custom AI</div>
                  <p className="text-luxury-muted">Interactive agent for user assistance</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gold mb-2 font-accent">Real-Time</div>
                  <p className="text-luxury-muted">Live blockchain data integration</p>
                </div>
              </div>
            </div>

            <p className="text-luxury-muted mb-8 leading-relaxed">
              The platform successfully launched with positive user feedback on both functionality and design. The AI agent provides seamless guidance while the real-time data keeps users informed of the latest blockchain activity.
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
                src="/images/testimonial-4.jpg"
                alt="Vince from MICO"
                width={80}
                height={80}
                className="rounded-full mx-auto border-2 border-gold/30"
              />
            </div>
            <blockquote className="text-2xl font-heading text-luxury-text mb-6">
              &ldquo;G1 Creative delivered exactly what we envisioned - a platform that combines cutting-edge technology with beautiful design.&rdquo;
            </blockquote>
            <div className="text-gold font-semibold">Vince</div>
            <div className="text-luxury-muted">MICO</div>
          </div>
        </Container>
      </div>
    </>
  )
}

