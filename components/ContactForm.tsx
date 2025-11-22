"use client"

import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { trackFormSubmission } from "@/lib/analytics"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { useEffect } from "react"

export function ContactForm() {
  const [state, handleSubmit] = useForm("mrbdaybo")

  // Track successful submission
  useEffect(() => {
    if (state.succeeded) {
      trackFormSubmission("contact")
    }
  }, [state.succeeded])

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 mt-6 sm:mt-8">
      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gold mb-2.5 tracking-wide"
        >
          Full Name *
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          placeholder="John Doe"
          disabled={state.submitting}
          className="h-[52px] sm:h-12 text-base"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </motion.div>

      {/* Email */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gold mb-2.5 tracking-wide"
        >
          Email Address *
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          placeholder="john@company.com"
          disabled={state.submitting}
          className="h-[52px] sm:h-12 text-base"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </motion.div>

      {/* Optional Details Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-xs text-luxury-muted/70 mb-4 uppercase tracking-wider">
          Optional Details
        </p>
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-luxury-muted/80 mb-2.5 tracking-wide"
            >
              Company <span className="text-luxury-muted/50 text-xs">(Optional)</span>
            </label>
            <Input
              type="text"
              id="company"
              name="company"
              placeholder="Your Company"
              disabled={state.submitting}
              className="opacity-90 h-[52px] sm:h-12 text-base"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-luxury-muted/80 mb-2.5 tracking-wide"
            >
              Phone <span className="text-luxury-muted/50 text-xs">(Optional)</span>
            </label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+1 (555) 123-4567"
              disabled={state.submitting}
              className="opacity-90 h-[52px] sm:h-12 text-base"
            />
          </div>
        </div>
      </motion.div>

      {/* Service and Budget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid sm:grid-cols-2 gap-5 sm:gap-6"
      >
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gold mb-2.5 tracking-wide"
          >
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            className="flex h-[52px] sm:h-12 w-full rounded-lg border border-luxury-panel/60 bg-luxury-panel/30 px-4 sm:px-5 py-3 text-base sm:text-sm text-luxury-text transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/50 focus-visible:ring-offset-0 focus-visible:border-gold/60 focus-visible:bg-luxury-panel/40 disabled:cursor-not-allowed disabled:opacity-50 hover:border-gold/20 hover:bg-luxury-panel/40"
            disabled={state.submitting}
          >
            <option value="">Select a service</option>
            <option value="web-design">Web Design</option>
            <option value="ecommerce">E-commerce</option>
            <option value="branding">Branding</option>
            <option value="maintenance">Website Maintenance</option>
            <option value="seo">SEO</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-gold mb-2.5 tracking-wide"
          >
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            className="flex h-[52px] sm:h-12 w-full rounded-lg border border-luxury-panel/60 bg-luxury-panel/30 px-4 sm:px-5 py-3 text-base sm:text-sm text-luxury-text transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/50 focus-visible:ring-offset-0 focus-visible:border-gold/60 focus-visible:bg-luxury-panel/40 disabled:cursor-not-allowed disabled:opacity-50 hover:border-gold/20 hover:bg-luxury-panel/40"
            disabled={state.submitting}
          >
            <option value="">Select budget</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-20k">$10,000 - $20,000</option>
            <option value="20k-plus">$20,000+</option>
          </select>
        </div>
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gold mb-2.5 tracking-wide"
        >
          Project Details *
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your project..."
          className="min-h-[200px] sm:min-h-[180px] text-base"
          disabled={state.submitting}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </motion.div>

      {/* Status messages with gold accents */}
      <AnimatePresence>
        {state.succeeded && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-panel border-gold/50 p-4 sm:p-4 shadow-g1-glow"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-sm text-luxury-muted leading-relaxed">
                Thank you for your message! We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </motion.div>
        )}

        {state.errors && Object.keys(state.errors).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-panel border-red-500/50 p-4 sm:p-4"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-400 leading-relaxed">
                Something went wrong. Please try again.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit button - Mobile optimized */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Button
          type="submit"
          size="lg"
          className="w-full shadow-g1-glow min-h-[56px] text-base font-semibold"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </Button>
      </motion.div>
    </form>
  )
}

