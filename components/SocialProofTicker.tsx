"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Eye, Calendar, CheckCircle2, TrendingUp } from "lucide-react"

const proofMessages = [
  {
    icon: Calendar,
    text: "Andy from CTR Trades just booked a consultation",
    type: "booking",
  },
  {
    icon: Eye,
    text: "5 people are viewing this page right now",
    type: "viewers",
  },
  {
    icon: CheckCircle2,
    text: "Vince at MICO completed his project launch",
    type: "success",
  },
  {
    icon: Calendar,
    text: "Emily from Tradesvilles scheduled a call",
    type: "booking",
  },
  {
    icon: TrendingUp,
    text: "142% average conversion increase for our clients",
    type: "stat",
  },
  {
    icon: Eye,
    text: "3 consultations booked this week",
    type: "activity",
  },
]

export function SocialProofTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show after 3 seconds
    const showTimer = setTimeout(() => setIsVisible(true), 3000)

    // Rotate messages every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % proofMessages.length)
    }, 5000)

    return () => {
      clearTimeout(showTimer)
      clearInterval(interval)
    }
  }, [])

  const currentMessage = proofMessages[currentIndex]
  const Icon = currentMessage.icon

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
          }}
          className="fixed bottom-6 left-6 z-[45] hidden md:block"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel px-4 py-3 rounded-lg border border-gold/20 shadow-g1-glow backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                {/* Animated icon */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex-shrink-0"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center relative overflow-hidden">
                    {/* Pulsing background */}
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-gold/30 rounded-full"
                    />
                    <Icon className="w-4 h-4 text-gold relative z-10" />
                  </div>
                </motion.div>

                {/* Message text */}
                <p className="text-sm font-medium text-luxury-text">
                  {currentMessage.text}
                </p>

                {/* Live indicator for certain types */}
                {(currentMessage.type === "viewers" || currentMessage.type === "activity") && (
                  <motion.div
                    animate={{
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex items-center gap-1.5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-xs text-luxury-muted">Live</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-luxury-panel border border-gold/20 flex items-center justify-center text-luxury-muted hover:text-gold hover:border-gold/40 transition-colors text-xs"
            aria-label="Close notification"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

