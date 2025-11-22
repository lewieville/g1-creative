"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { isValidEmail } from "@/lib/utils"
import { trackFormSubmission } from "@/lib/analytics"

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
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-secondary-900 mb-2"
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
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-secondary-900 mb-2"
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
      </div>

      {/* Company and Phone */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-secondary-900 mb-2"
          >
            Company
          </label>
          <Input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company"
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-secondary-900 mb-2"
          >
            Phone
          </label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            disabled={status === "loading"}
          />
        </div>
      </div>

      {/* Service and Budget */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-secondary-900 mb-2"
          >
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="flex h-11 w-full rounded-lg border border-secondary-300 bg-white px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
            className="block text-sm font-medium text-secondary-900 mb-2"
          >
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="flex h-11 w-full rounded-lg border border-secondary-300 bg-white px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={status === "loading"}
          >
            <option value="">Select budget</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-20k">$10,000 - $20,000</option>
            <option value="20k-plus">$20,000+</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-secondary-900 mb-2"
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
          rows={6}
          disabled={status === "loading"}
        />
      </div>

      {/* Status messages */}
      {status === "success" && (
        <div className="rounded-lg bg-green-50 border border-green-200 p-4">
          <p className="text-sm text-green-800">
            Thank you for your message! We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-sm text-red-800">
            {errorMessage || "Something went wrong. Please try again."}
          </p>
        </div>
      )}

      {/* Submit button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

