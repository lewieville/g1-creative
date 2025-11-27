import type { Metadata } from "next"
import { Inter, Playfair_Display, Cinzel } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { StickyCTA } from "@/components/StickyCTA"
import { ClientLayout } from "@/components/ClientLayout"
import dynamic from "next/dynamic"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"
import { GA_TRACKING_ID } from "@/lib/analytics"

// Lazy load heavy components
const SocialProofTicker = dynamic(() => import("@/components/SocialProofTicker").then(mod => ({ default: mod.SocialProofTicker })), {
  ssr: false,
  loading: () => null,
})

const ChatWidget = dynamic(() => import("@/components/ChatWidget").then(mod => ({ default: mod.ChatWidget })), {
  ssr: false,
  loading: () => null,
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Reduced weights
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Reduced weights
  variable: "--font-playfair",
  display: "swap",
  preload: true,
})

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Reduced weights
  variable: "--font-cinzel",
  display: "swap",
  preload: false, // Less critical
})

export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: "G1 Creative - Award-Winning Web Design & Development Agency",
    description: "G1 Creative builds premium, custom-coded websites designed to convert. Fast, SEO-optimized and tailored for growth. Trusted by startups and small businesses. Find G1 Creative for expert web design and development.",
    url: "/",
  }),
  icons: {
    icon: [
      { url: '/g1-logo.png', sizes: 'any' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  // Performance optimizations
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://g1creative.com'),
  other: {
    'x-content-type-options': 'nosniff',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cinzel.variable}`}>
      <head>
        {/* Favicon links for better Google indexing */}
        <link rel="icon" type="image/png" sizes="32x32" href="/g1-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/g1-logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/g1-logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Resource hints for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Google Analytics - Deferred for better performance */}
        {GA_TRACKING_ID && (
          <>
            <script
              defer
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              defer
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans antialiased bg-luxury-bg text-luxury-text">
        <ClientLayout>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <StickyCTA />
          <SocialProofTicker />
          <ChatWidget />
        </ClientLayout>
      </body>
    </html>
  )
}

