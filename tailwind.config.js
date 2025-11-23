/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Luxury Black & Gold System
        primary: {
          50: '#FEF8ED',
          100: '#FDF1DB',
          200: '#FAE3B7',
          300: '#F8D593',
          400: '#F5C76F',
          500: '#C6A667',  // Main gold
          600: '#B8954A',
          700: '#9A7A3D',
          800: '#7C6030',
          900: '#5E4623',
          DEFAULT: '#C6A667',
          foreground: '#0B0B0B',
        },
        secondary: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#CFC7C0',  // Muted text
          300: '#999999',
          400: '#666666',
          500: '#333333',
          600: '#1A1A1A',  // Secondary panels
          700: '#111111',  // Charcoal surface
          800: '#0B0B0B',  // Primary black
          900: '#000000',
          DEFAULT: '#111111',
          foreground: '#FFFFFF',
        },
        gold: {
          light: '#E1C98F',
          DEFAULT: '#C6A667',
          dark: '#B8954A',
        },
        luxury: {
          bg: '#0B0B0B',
          surface: '#111111',
          panel: '#1A1A1A',
          text: '#FFFFFF',
          muted: '#CFC7C0',
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: '#C6A667',
          foreground: '#0B0B0B',
        },
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        accent: ['var(--font-cinzel)', 'Georgia', 'serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'g1-soft': '0 4px 20px rgba(198, 166, 103, 0.1)',
        'g1-glow': '0 0 30px rgba(198, 166, 103, 0.3)',
        'g1-card': '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
      letterSpacing: {
        'luxury': '0.05em',
        'wide': '0.1em',
        'caps': '0.3em',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "slide-up": {
          from: { transform: "translateY(20px)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "glow": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "shimmer": "shimmer 3s linear infinite",
        "glow": "glow 2s ease-in-out infinite",
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C6A667 0%, #E1C98F 50%, #C6A667 100%)',
        'shimmer': 'linear-gradient(90deg, transparent 0%, rgba(198, 166, 103, 0.3) 50%, transparent 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

