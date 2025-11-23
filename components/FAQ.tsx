"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  className?: string
}

export function FAQ({ items, className }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="glass-panel border border-gold/20 rounded-lg overflow-hidden"
            initial={false}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gold/5 transition-colors"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-luxury-text pr-4">{item.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <ChevronDown className="w-5 h-5 text-gold" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-luxury-muted leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

