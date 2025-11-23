"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Users, Palette, Code, Rocket, CheckCircle2 } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { cn } from "@/lib/utils"

interface TimelineItem {
  week: string
  title: string
  description: string
  icon: React.ElementType
  duration: string
}

const timelineItems: TimelineItem[] = [
  {
    week: "Week 1",
    title: "Discovery Call",
    description: "We'll discuss your goals, target audience, and vision. This is where we align on expectations and create a roadmap together.",
    icon: Users,
    duration: "1 week",
  },
  {
    week: "Weeks 2-3",
    title: "Design Phase",
    description: "Our designers create beautiful mockups and interactive prototypes. You'll review and provide feedback as we refine the vision.",
    icon: Palette,
    duration: "2 weeks",
  },
  {
    week: "Weeks 4-5",
    title: "Development",
    description: "We bring your designs to life with clean, efficient code. Your site is built with performance and SEO in mind from day one.",
    icon: Code,
    duration: "2 weeks",
  },
  {
    week: "Week 6",
    title: "Launch",
    description: "We handle all technical aspects of going live, provide training, and ensure everything runs smoothly. Your new website is ready!",
    icon: Rocket,
    duration: "1 week",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function ClientJourneyTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="bg-luxury-bg relative py-20 sm:py-24 md:py-28 lg:py-40 overflow-hidden">
      <div className="gold-divider" />
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-text mb-6 tracking-wide">
              Your Path to a Better Website
            </h2>
            <p className="text-xl text-luxury-muted leading-relaxed max-w-2xl mx-auto">
              A clear, transparent process from discovery to launch. No surprises, no hidden steps—just a straightforward journey to your new website.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/60 to-gold/30 hidden md:block" />

            {/* Timeline items */}
            <div className="space-y-12 md:space-y-16">
              {timelineItems.map((item, index) => {
                const Icon = item.icon
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={cn(
                      "relative flex items-start md:items-center gap-6 md:gap-8",
                      "md:flex-row",
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    )}
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        className="w-16 h-16 rounded-full glass-panel border-2 border-gold flex items-center justify-center bg-luxury-bg"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon className="w-7 h-7 text-gold" />
                      </motion.div>
                      {/* Pulse effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gold/20"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>

                    {/* Content card */}
                    <motion.div
                      className={cn(
                        "flex-1 glass-panel p-6 md:p-8 rounded-xl border border-gold/20",
                        "hover:border-gold/40 hover:shadow-g1-glow transition-all duration-300",
                        "md:max-w-[45%]"
                      )}
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-gold font-bold font-heading tracking-wide text-sm">
                          {item.week}
                        </span>
                        <span className="text-luxury-muted text-sm">•</span>
                        <span className="text-luxury-muted text-sm">{item.duration}</span>
                      </div>
                      <h3 className="text-2xl font-heading font-semibold text-luxury-text mb-3 tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-luxury-muted leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>

                    {/* Connecting line for mobile */}
                    {index < timelineItems.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-12 bg-gold/30 md:hidden" />
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 glass-panel px-6 py-4 rounded-lg border border-gold/20">
              <CheckCircle2 className="w-5 h-5 text-gold" />
              <span className="text-luxury-text font-medium">
                Total timeline: <span className="text-gold font-bold">6 weeks</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

