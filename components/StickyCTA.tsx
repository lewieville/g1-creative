"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 500px
      setVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-40 transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
    >
      <Button asChild size="lg" className="shadow-2xl group">
        <Link href="/contact" className="flex items-center gap-2">
          <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">Book a Call</span>
          <span className="sm:hidden">Contact</span>
        </Link>
      </Button>
    </div>
  )
}

