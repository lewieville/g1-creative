"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "G1 Creative"
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Typewriter effect
    let currentIndex = 0
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeInterval)
        // Wait a moment before starting exit animation
        setTimeout(() => {
          setIsComplete(true)
          setTimeout(onComplete, 800) // Give time for exit animation
        }, 300)
      }
    }, 100) // 100ms per character = ~1 second total

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typeInterval)
      clearInterval(cursorInterval)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-luxury-bg overflow-hidden"
        >
          {/* Animated background orbs */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl"
          />

          {/* Decorative corner lines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute top-8 left-8 w-20 h-px bg-gradient-to-r from-gold to-transparent origin-left"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="absolute top-8 left-8 w-px h-20 bg-gradient-to-b from-gold to-transparent origin-top"
          />

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute bottom-8 right-8 w-20 h-px bg-gradient-to-l from-gold to-transparent origin-right"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="absolute bottom-8 right-8 w-px h-20 bg-gradient-to-t from-gold to-transparent origin-bottom"
          />

          {/* Main content */}
          <div className="relative z-10 text-center">
            {/* Typewriter text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight">
                <span className="text-luxury-text">{text.split(" ")[0]}</span>
                {text.includes(" ") && (
                  <>
                    {" "}
                    <span className="gold-shimmer">{text.split(" ")[1]}</span>
                  </>
                )}
                <motion.span
                  animate={{ opacity: showCursor ? 1 : 0 }}
                  transition={{ duration: 0 }}
                  className="inline-block w-1 h-[0.9em] bg-gold ml-1 align-middle"
                />
              </h1>

              {/* Decorative underline that grows with text */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: text.length / fullText.length }}
                transition={{ duration: 0.3 }}
                className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mt-6 origin-center"
              />
            </motion.div>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-2 justify-center mt-12"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                  className="w-2 h-2 rounded-full bg-gold"
                />
              ))}
            </motion.div>

            {/* Percentage counter (subtle) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 text-xs tracking-[0.3em] text-luxury-muted uppercase"
            >
              <motion.span
                key={Math.floor((text.length / fullText.length) * 100)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {Math.floor((text.length / fullText.length) * 100)}%
              </motion.span>
            </motion.div>
          </div>

          {/* Particle effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight + 50,
                  opacity: 0,
                }}
                animate={{
                  y: -50,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: Math.random() * 2,
                  ease: "linear",
                }}
                className="absolute w-1 h-1 bg-gold/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Radial gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-luxury-bg/50 pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

