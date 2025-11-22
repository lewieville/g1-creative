"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we're already on the contact page, scroll to the scheduler
    if (pathname === "/contact") {
      e.preventDefault()
      setTimeout(() => {
        const element = document.getElementById("schedule-call")
        if (element) {
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    }
    // Otherwise, let Next.js Link handle navigation - hash will scroll automatically
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="fixed bottom-6 right-6 z-40"
        >
          <a
            href="/contact#schedule-call"
            onClick={handleClick}
            className="inline-flex items-center justify-center rounded-lg tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-luxury-bg disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group bg-gold text-luxury-bg hover:bg-gold-light font-semibold hover:shadow-g1-glow transform hover:scale-[1.02] active:scale-[0.98] h-12 px-8 py-3 text-base shadow-g1-glow group gap-2"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Phone className="w-5 h-5" />
            </motion.div>
            <span className="hidden sm:inline">Book a Call</span>
            <span className="sm:hidden">Contact</span>
          </a>
          
          {/* Pulsing ring effect */}
          <motion.div
            className="absolute inset-0 rounded-lg bg-gold"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

