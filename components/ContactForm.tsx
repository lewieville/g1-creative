"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { isValidEmail } from "@/lib/utils"
import { trackFormSubmission } from "@/lib/analytics"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, AlertCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  service: string
  budget: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    // Validation
    if (!isValidEmail(formData.email)) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address")
      return
    }

    try {
      // Submit to API route which proxies to Formspree
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        trackFormSubmission("contact")
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-8">
      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gold mb-2 tracking-wide"
        >
          Full Name *
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="John Doe"
          disabled={status === "loading"}
        />
      </motion.div>

      {/* Email */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gold mb-2 tracking-wide"
        >
          Email Address *
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="john@company.com"
          disabled={status === "loading"}
        />
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
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-luxury-muted/80 mb-2 tracking-wide"
            >
              Company <span className="text-luxury-muted/50 text-xs">(Optional)</span>
            </label>
            <Input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
              disabled={status === "loading"}
              className="opacity-90"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-luxury-muted/80 mb-2 tracking-wide"
            >
              Phone <span className="text-luxury-muted/50 text-xs">(Optional)</span>
            </label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              disabled={status === "loading"}
              className="opacity-90"
            />
          </div>
        </div>
      </motion.div>

      {/* Service and Budget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gold mb-2 tracking-wide"
          >
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="flex h-12 w-full rounded-lg border border-luxury-panel/60 bg-luxury-panel/30 px-5 py-3 text-sm text-luxury-text transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/50 focus-visible:ring-offset-0 focus-visible:border-gold/60 focus-visible:bg-luxury-panel/40 disabled:cursor-not-allowed disabled:opacity-50 hover:border-gold/20 hover:bg-luxury-panel/40"
            disabled={status === "loading"}
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
            className="block text-sm font-medium text-gold mb-2 tracking-wide"
          >
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="flex h-12 w-full rounded-lg border border-luxury-panel/60 bg-luxury-panel/30 px-5 py-3 text-sm text-luxury-text transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/50 focus-visible:ring-offset-0 focus-visible:border-gold/60 focus-visible:bg-luxury-panel/40 disabled:cursor-not-allowed disabled:opacity-50 hover:border-gold/20 hover:bg-luxury-panel/40"
            disabled={status === "loading"}
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
          className="block text-sm font-medium text-gold mb-2 tracking-wide"
        >
          Project Details *
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your project..."
          className="min-h-[180px]"
          disabled={status === "loading"}
        />
      </motion.div>

      {/* Status messages with gold accents */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-panel border-gold/50 p-4 shadow-g1-glow"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-sm text-luxury-muted">
                Thank you for your message! We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-panel border-red-500/50 p-4"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-400">
                {errorMessage || "Something went wrong. Please try again."}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Button
          type="submit"
          size="lg"
          className="w-full shadow-g1-glow"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>
      </motion.div>
    </form>
  )
}

