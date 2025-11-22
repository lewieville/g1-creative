"use client"

import Link from "next/link"
import { useState } from "react"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"

const navigation = {
  services: [
    { name: "Web Design", href: "/services#web-design" },
    { name: "E-commerce", href: "/services#ecommerce" },
    { name: "Branding", href: "/services#branding" },
    { name: "Maintenance", href: "/services#maintenance" },
    { name: "SEO", href: "/services#seo" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
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

    // Simulate API call - replace with actual newsletter service
    setTimeout(() => {
      setSubscribeStatus("success")
      setEmail("")
      setTimeout(() => setSubscribeStatus("idle"), 3000)
    }, 1000)
  }

  return (
    <footer className="bg-secondary-900 text-secondary-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand and newsletter */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
                G1
              </div>
              <span className="text-xl font-bold text-white font-heading">
                Creative
              </span>
            </Link>
            <p className="text-sm leading-6 text-secondary-300">
              Crafting exceptional digital experiences that drive results. Transform your business with award-winning web design and development.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-secondary-400 hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>

            {/* Newsletter signup */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold leading-6 text-white">
                Subscribe to our newsletter
              </h3>
              <p className="mt-2 text-sm leading-6 text-secondary-300">
                Get the latest news, tips, and exclusive offers.
              </p>
              <form onSubmit={handleSubscribe} className="mt-4 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <Input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-secondary-400"
                  disabled={subscribeStatus === "loading" || subscribeStatus === "success"}
                />
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <Button
                    type="submit"
                    disabled={subscribeStatus === "loading" || subscribeStatus === "success"}
                  >
                    {subscribeStatus === "success" ? "Subscribed!" : "Subscribe"}
                  </Button>
                </div>
              </form>
              {subscribeStatus === "success" && (
                <p className="mt-2 text-sm text-green-400">
                  Thank you for subscribing!
                </p>
              )}
            </div>
          </div>

          {/* Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Services
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-secondary-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-secondary-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Contact
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-start gap-2">
                    <Mail className="h-5 w-5 text-secondary-400 flex-shrink-0 mt-0.5" />
                    <a
                      href="mailto:lewis@g1creative.com"
                      className="text-sm leading-6 text-secondary-300 hover:text-white transition-colors"
                    >
                      lewis@g1creative.com
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-secondary-400 flex-shrink-0 mt-0.5" />
                    <a
                      href="tel:+15551234567"
                      className="text-sm leading-6 text-secondary-300 hover:text-white transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-secondary-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-6 text-secondary-300">
                      123 Design Street
                      <br />
                      Creative City, CC 12345
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-secondary-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-secondary-400 text-center">
            &copy; {new Date().getFullYear()} G1 Creative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

