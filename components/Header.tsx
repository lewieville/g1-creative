"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { AnimatedLogo } from "@/components/AnimatedLogo"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "What We Do", href: "/services" },
  { name: "Insights", href: "/insights" },
  { name: "Contact Us", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-panel shadow-g1-card"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:p-4 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <AnimatedLogo
            href="/"
            variant="header"
            size="md"
            className="-m-1.5 p-1.5"
            showOnLoad={true}
          />
        </div>

        {/* Mobile menu button - Enhanced tap target */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2 inline-flex items-center justify-center rounded-lg p-3 text-gold hover:text-gold-light transition-colors active:scale-95 min-w-[48px] min-h-[48px]"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <Menu className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative text-sm font-medium tracking-wide transition-colors py-2 group",
                pathname === item.href
                  ? "text-gold"
                  : "text-luxury-muted hover:text-gold"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-300",
                pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
          <Button asChild size="md">
            <Link href="/contact">Let&apos;s Talk</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/80 lg:hidden backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-luxury-surface px-6 py-6 sm:max-w-sm border-l border-gold/20"
            >
              <div className="flex items-center justify-between mb-8">
                <AnimatedLogo
                  href="/"
                  variant="header"
                  size="md"
                  className="-m-1.5 p-1.5"
                  showOnLoad={false}
                />
                <button
                  type="button"
                  className="-m-2 rounded-lg p-3 text-gold hover:text-gold-light transition-colors active:scale-95 min-w-[48px] min-h-[48px]"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-7 w-7" aria-hidden="true" />
                </button>
              </div>
              <div className="flow-root">
                <div className="-my-6 divide-y divide-luxury-panel/50">
                  <div className="space-y-1 py-6">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "-mx-3 block rounded-xl px-5 py-4 text-lg font-semibold leading-7 transition-all duration-300 min-h-[56px] flex items-center",
                            pathname === item.href
                              ? "text-gold bg-gold/10 border border-gold/20"
                              : "text-luxury-muted hover:text-gold hover:bg-luxury-panel border border-transparent"
                          )}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <div className="py-6">
                    <Button asChild size="lg" className="w-full min-h-[56px] text-base">
                      <Link href="/contact">Let&apos;s Talk</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

