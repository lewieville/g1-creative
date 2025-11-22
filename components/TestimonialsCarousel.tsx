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
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-secondary-100 hover:bg-secondary-200 text-secondary-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                current === index
                  ? "bg-primary-600 w-8"
                  : "bg-secondary-300 hover:bg-secondary-400"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-secondary-100 hover:bg-secondary-200 text-secondary-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

