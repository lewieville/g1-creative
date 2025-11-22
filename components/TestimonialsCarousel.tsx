"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Testimonial } from "@/components/Testimonial"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "Working with Lewis was exceptional. He understood our vision for human-centered AI and delivered a platform that perfectly balances sophisticated technology with elegant design. The custom AI chat interface and real-time blockchain integration exceeded our expectations. The interactive character and smooth animations bring the whole experience to life.",
    author: {
      name: "Vince",
      title: "Founder",
      company: "MICO",
      image: "/images/testimonial-4.jpg",
    },
    rating: 5,
  },
  {
    quote:
      "Lewis built an incredible trading journal platform for CTR Trades that connects to a robust backend with multi-user database functionality. The landing page perfectly captures our brand, and the journal system has become essential for our trading community. The technical execution was flawless.",
    author: {
      name: "Andy",
      title: "Founder",
      company: "CTR Trades",
      image: "/images/andy.jpg",
    },
    rating: 5,
  },
  {
    quote:
      "The attention to detail and professionalism is unmatched. G1 Creative didn't just build us a website - they created a powerful marketing tool that drives real business results.",
    author: {
      name: "Emily Rodriguez",
      title: "Marketing Director",
      company: "GrowthLabs",
      image: "/images/testimonial-3.jpg",
    },
    rating: 5,
  },
]

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 8000) // Auto-rotate every 8 seconds

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <div className="relative">
      {/* Testimonials */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Navigation */}
      <div className="flex justify-center items-center gap-6 mt-12">
        <button
          onClick={goToPrevious}
          className="group relative w-12 h-12 rounded-full border border-gold/30 bg-luxury-panel/50 hover:bg-luxury-panel hover:border-gold transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
          <div className="absolute inset-0 rounded-full bg-gold/0 group-hover:bg-gold/10 transition-colors" />
        </button>

        {/* Enhanced Dots */}
        <div className="flex items-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={cn(
                "rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-luxury-surface",
                current === index
                  ? "w-10 h-2 bg-gold shadow-g1-glow"
                  : "w-2 h-2 bg-gold/30 hover:bg-gold/50"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="group relative w-12 h-12 rounded-full border border-gold/30 bg-luxury-panel/50 hover:bg-luxury-panel hover:border-gold transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
          <div className="absolute inset-0 rounded-full bg-gold/0 group-hover:bg-gold/10 transition-colors" />
        </button>
      </div>
    </div>
  )
}

