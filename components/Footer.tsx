"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { AnimatedLogo } from "@/components/AnimatedLogo"
import { motion } from "framer-motion"

const navigation = {
  services: [
    { name: "Web Design & Development", href: "/services#web-design" },
    { name: "E-commerce Solutions", href: "/services#ecommerce" },
    { name: "Branding & UI/UX", href: "/services#branding" },
    { name: "SEO Optimization", href: "/services#seo" },
    { name: "Maintenance & Support", href: "/services#maintenance" },
  ],
  company: [
    { name: "Our Services", href: "/services" },
    { name: "Insights", href: "/insights" },
    { name: "Contact Us", href: "/contact" },
    { name: "Book Consultation", href: "/contact#schedule-call" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ],
}

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribeStatus("loading")

    setTimeout(() => {
      setSubscribeStatus("success")
      setEmail("")
      setTimeout(() => setSubscribeStatus("idle"), 3000)
    }, 1000)
  }

  return (
    <footer className="bg-luxury-surface border-t border-gold/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      
      {/* Gold divider line */}
      <div className="gold-divider" />
      
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand and newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <AnimatedLogo
              href="/"
              variant="footer"
              size="md"
              showOnLoad={false}
            />
            <p className="text-sm leading-6 text-luxury-muted">
              Crafting exceptional digital experiences that drive results. Transform your business with award-winning web design and development.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.2, color: "#C6A667" }}
                  className="text-luxury-muted hover:text-gold transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter signup */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold leading-6 text-gold tracking-wide">
                Subscribe to our newsletter
              </h3>
              <p className="mt-2 text-sm leading-6 text-luxury-muted">
                Get the latest news, tips, and exclusive offers.
              </p>
              <form onSubmit={handleSubscribe} className="mt-4 sm:flex sm:max-w-md gap-2">
                <Input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={subscribeStatus === "loading" || subscribeStatus === "success"}
                />
                <Button
                  type="submit"
                  size="md"
                  disabled={subscribeStatus === "loading" || subscribeStatus === "success"}
                  className="mt-2 sm:mt-0"
                >
                  {subscribeStatus === "success" ? "Subscribed!" : "Subscribe"}
                </Button>
              </form>
              {subscribeStatus === "success" && (
                <p className="mt-2 text-sm text-gold">
                  Thank you for subscribing!
                </p>
              )}
            </div>
          </motion.div>

          {/* Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-sm font-semibold leading-6 text-gold tracking-wide">
                  Services
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-luxury-muted hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-10 md:mt-0"
              >
                <h3 className="text-sm font-semibold leading-6 text-gold tracking-wide">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-luxury-muted hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-sm font-semibold leading-6 text-gold tracking-wide">
                  Contact
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-start gap-2">
                    <Mail className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <a
                      href="mailto:g1.creative.web@gmail.com"
                      className="text-sm leading-6 text-luxury-muted hover:text-gold transition-colors break-all"
                    >
                      g1.creative.web@gmail.com
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <a
                      href="tel:+12392554733"
                      className="text-sm leading-6 text-luxury-muted hover:text-gold transition-colors"
                    >
                      (239) 255-4733
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-6 text-luxury-muted">
                      Lexington, Virginia
                    </span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 md:mt-0"
              >
                <h3 className="text-sm font-semibold leading-6 text-gold tracking-wide">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-luxury-muted hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-gold/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-luxury-muted text-center">
            &copy; {new Date().getFullYear()} G1 Creative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

