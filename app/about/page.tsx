"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Award, Users, Target, Heart, Code2, Sparkles, Coffee, Rocket, Mail, Handshake, MessageCircle, GraduationCap, Briefcase, ExternalLink, LucideIcon } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { GradientMesh } from "@/components/GradientMesh"


export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Split Screen Design */}
      <div className="min-h-screen bg-luxury-bg relative overflow-hidden flex items-center">
        <GradientMesh intensity="low" speed="slow" />
        
        <Container className="relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Personal Photo with artistic treatment */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-g1-glow ring-2 ring-gold/30 group">
                <Image
                  src="/images/lewis-personal.jpg"
                  alt="Lewis Miller - The person behind G1 Creative"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-transparent to-transparent opacity-40" />
              </div>
              
              {/* Decorative floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 w-32 h-32 bg-gold/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-gold/5 rounded-full blur-3xl"
              />
            </motion.div>

            {/* Right: Personal Introduction */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-sm font-medium"
              >
                <Handshake className="w-4 h-4" />
                <span>Nice to meet you</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-luxury-text leading-tight"
              >
                I'm Lewis Miller
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-4 text-lg md:text-xl text-luxury-muted leading-relaxed"
              >
                <p>
                  <span className="text-gold font-semibold">Real talk:</span> I'm not your typical web developer who hides behind jargon and corporate speak.
                </p>
                <p>
                  I'm a <span className="text-luxury-text font-medium">real person</span> who genuinely cares about helping businesses succeed online. Before I ever wrote a line of code for clients, I was in the trenches—running my own e-commerce store, learning what works (and what doesn't), and making plenty of mistakes along the way.
                </p>
                <p>
                  Now? I use everything I've learned to build websites that actually <span className="text-gold font-medium">turn visitors into customers</span>. No fluff, no BS—just results that matter to your business.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button asChild size="lg" className="shadow-g1-glow">
                  <Link href="/contact">Let's Work Together</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#story">Read My Story ↓</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* The Real Story Section */}
      <section id="story" className="bg-luxury-surface py-20 md:py-32 relative overflow-hidden">
        <div className="gold-divider absolute top-0 left-0 right-0" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-luxury-text mb-6">
                The Journey Behind the Work
              </h2>
              <p className="text-xl text-gold font-medium">
                Or: How I Learned to Stop Worrying and Love Web Development
              </p>
            </div>

            {/* Visual Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="relative max-w-4xl mx-auto">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/30 via-gold/20 to-gold/30 hidden md:block" />
                
                <div className="space-y-12">
                  {/* Timeline Item 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative flex items-start gap-6 md:gap-8"
                  >
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <GraduationCap className="w-7 h-7 text-gold" />
                      </div>
                    </div>
                    <div className="flex-grow pt-1">
                      <div className="glass-panel p-6 hover:shadow-g1-glow transition-all duration-500">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-gold font-semibold text-sm">2020-2022</span>
                          <span className="text-luxury-muted text-sm">•</span>
                          <span className="text-luxury-muted text-sm">Southern Virginia University</span>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-luxury-text mb-2">
                          Computer Science Student
                        </h3>
                        <p className="text-luxury-muted">
                          Pursuing my Bachelor's while building real businesses on the side
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Timeline Item 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative flex items-start gap-6 md:gap-8"
                  >
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <Sparkles className="w-7 h-7 text-gold" />
                      </div>
                    </div>
                    <div className="flex-grow pt-1">
                      <div className="glass-panel p-6 hover:shadow-g1-glow transition-all duration-500">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-gold font-semibold text-sm">2021-2022</span>
                          <span className="text-luxury-muted text-sm">•</span>
                          <span className="text-luxury-muted text-sm">Founder & Developer</span>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-luxury-text mb-2">
                          LEWON Styles
                        </h3>
                        <p className="text-luxury-muted">
                          Built my first e-commerce business from scratch—coded the website, managed marketing, learned what actually works
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Timeline Item 3 */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative flex items-start gap-6 md:gap-8"
                  >
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <Code2 className="w-7 h-7 text-gold" />
                      </div>
                    </div>
                    <div className="flex-grow pt-1">
                      <div className="glass-panel p-6 hover:shadow-g1-glow transition-all duration-500">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-gold font-semibold text-sm">2022-2023</span>
                          <span className="text-luxury-muted text-sm">•</span>
                          <span className="text-luxury-muted text-sm">IT Specialist</span>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-luxury-text mb-2">
                          Seed to Table
                        </h3>
                        <p className="text-luxury-muted">
                          Supported hardware and software systems, built custom computers, learned the importance of reliable infrastructure
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Timeline Item 4 */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative flex items-start gap-6 md:gap-8"
                  >
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <Briefcase className="w-7 h-7 text-gold" />
                      </div>
                    </div>
                    <div className="flex-grow pt-1">
                      <div className="glass-panel p-6 hover:shadow-g1-glow transition-all duration-500">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-gold font-semibold text-sm">2023-2024</span>
                          <span className="text-luxury-muted text-sm">•</span>
                          <span className="text-luxury-muted text-sm">CEO</span>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-luxury-text mb-2 flex items-center gap-2">
                          CTR Trades
                          <Link href="/portfolio/ctr-trades" className="text-gold hover:text-gold-light transition-colors">
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </h3>
                        <p className="text-luxury-muted mb-3">
                          Managed SEO strategies, built an engaged trading community, developed educational content that helped people succeed
                        </p>
                        <Link href="/portfolio/ctr-trades">
                          <Button variant="outline" size="sm" className="group">
                            View Case Study
                            <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-0.5 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>

                  {/* Timeline Item 5 */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative flex items-start gap-6 md:gap-8"
                  >
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold/50 flex items-center justify-center group-hover:bg-gold/30 transition-colors shadow-g1-glow">
                        <Rocket className="w-7 h-7 text-gold" />
                      </div>
                    </div>
                    <div className="flex-grow pt-1">
                      <div className="glass-panel p-6 hover:shadow-g1-glow transition-all duration-500 border border-gold/20">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-gold font-semibold text-sm">2024 - Present</span>
                          <span className="text-luxury-muted text-sm">•</span>
                          <span className="text-luxury-muted text-sm">Founder & Developer</span>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-luxury-text mb-2">
                          G1 Creative
                        </h3>
                        <p className="text-luxury-muted">
                          Building custom web solutions for businesses that want real results, not just pretty designs
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-8">
              {/* Story Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-panel p-8 md:p-10 hover:shadow-g1-glow transition-all duration-500 border-l-4 border-gold/50"
              >
                <h3 className="text-2xl font-heading font-bold text-luxury-text mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-gold" />
                  It Started with an Idea (And a Lot of Coffee)
                </h3>
                <p className="text-luxury-muted text-lg leading-relaxed">
                  My journey into web development didn't start in a classroom. It started with <span className="text-gold font-medium">LEWON Styles</span>—my first e-commerce business. I was a Computer Science student at Southern Virginia University, and instead of just learning theory, I dove headfirst into building something real. I coded the entire website from scratch, handled all the marketing, managed inventory, dealt with payment processors, and learned what makes people actually click &quot;Buy Now.&quot;
                </p>
                <p className="text-luxury-muted text-lg leading-relaxed mt-4">
                  That business taught me more than any textbook ever could: <span className="text-luxury-text font-semibold">technology is only valuable when it solves real problems</span>. A beautiful website means nothing if it doesn't convert. Fast load times don't matter if your messaging is off. I learned this the hard way—through late nights, failed campaigns, and countless A/B tests.
                </p>
              </motion.div>

              {/* Story Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-panel p-8 md:p-10 hover:shadow-g1-glow transition-all duration-500 border-l-4 border-gold/50"
              >
                <h3 className="text-2xl font-heading font-bold text-luxury-text mb-4 flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-gold" />
                  From IT Specialist to CEO
                </h3>
                <p className="text-luxury-muted text-lg leading-relaxed">
                  After LEWON Styles, I worked as an IT Specialist at Seed to Table, where I supported everything from hardware to software systems (and yes, I built custom computers on the side). Then I became CEO of <span className="text-gold font-medium">CTR Trades</span>, a trading education platform where I managed SEO strategies, built an engaged community of traders, and developed educational content that actually helped people succeed.
                </p>
                <p className="text-luxury-muted text-lg leading-relaxed mt-4">
                  Each role taught me something different. The common thread? <span className="text-luxury-text font-semibold">People don't care about your tech stack—they care about results</span>. They want websites that load fast, rank on Google, look professional, and most importantly, bring in customers.
                </p>
                <div className="mt-6">
                  <Link href="/portfolio/ctr-trades">
                    <Button variant="outline" size="sm" className="group">
                      View CTR Trades Case Study
                      <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Story Card 3 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-panel p-8 md:p-10 hover:shadow-g1-glow transition-all duration-500 border-l-4 border-gold/50"
              >
                <h3 className="text-2xl font-heading font-bold text-luxury-text mb-4 flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-gold" />
                  Why G1 Creative Exists
                </h3>
                <p className="text-luxury-muted text-lg leading-relaxed">
                  After years of building websites, managing businesses, and seeing what actually works, I realized something: most small businesses are stuck between two bad options. They can either pay $10,000+ for a big agency that treats them like just another client, or they can buy a $50 template that looks like everyone else's.
                </p>
                <p className="text-luxury-muted text-lg leading-relaxed mt-4">
                  <span className="text-gold font-semibold">G1 Creative exists to be the third option</span>—professional, custom web solutions at prices that make sense for growing businesses. You get direct access to me (no account managers, no middlemen), a website built specifically for your business, and the kind of attention to detail that comes from someone who's been in the trenches.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* What Drives Me Section */}
      <section className="bg-luxury-bg py-20 md:py-32 relative">
        <div className="gold-divider absolute top-0 left-0 right-0" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-luxury-text mb-6">
              What Actually Matters to Me
            </h2>
            <p className="text-xl text-luxury-muted">
              Beyond the code, beyond the pixels—here's what I truly care about
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Value Card 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 hover:shadow-g1-glow transition-all duration-500 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-xl group-hover:bg-gold/20 transition-colors">
                  <Heart className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-luxury-text mb-3">
                    Real Relationships
                  </h3>
                  <p className="text-luxury-muted leading-relaxed">
                    I don't want to be &quot;just another vendor.&quot; I want to understand your business, your challenges, and your goals. When you succeed, I succeed—and I take that seriously.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Value Card 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-panel p-8 hover:shadow-g1-glow transition-all duration-500 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-xl group-hover:bg-gold/20 transition-colors">
                  <Target className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-luxury-text mb-3">
                    Measurable Results
                  </h3>
                  <p className="text-luxury-muted leading-relaxed">
                    Pretty websites are great, but what really matters is the bottom line. More leads, more sales, more growth. That's what I optimize for.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Value Card 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel p-8 hover:shadow-g1-glow transition-all duration-500 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-xl group-hover:bg-gold/20 transition-colors">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-luxury-text mb-3">
                    Honest Communication
                  </h3>
                  <p className="text-luxury-muted leading-relaxed">
                    No tech jargon, no BS, no hiding behind &quot;best practices.&quot; I&apos;ll tell you what you need, what you don&apos;t, and why. Transparency builds trust.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Value Card 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-panel p-8 hover:shadow-g1-glow transition-all duration-500 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-xl group-hover:bg-gold/20 transition-colors">
                  <Coffee className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-luxury-text mb-3">
                    Continuous Learning
                  </h3>
                  <p className="text-luxury-muted leading-relaxed">
                    The web evolves daily. I&apos;m always learning new frameworks, studying conversion psychology, and staying ahead of trends—so your site stays competitive.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Skills/Expertise Section - More Personal Approach */}
      <section className="bg-luxury-surface py-20 md:py-32 relative">
        <div className="gold-divider absolute top-0 left-0 right-0" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-luxury-text mb-6">
              What I Bring to the Table
            </h2>
            <p className="text-xl text-luxury-muted">
              A full-stack skill set earned through real projects, real challenges, and real results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Skill Cards with Icons */}
            {[
              {
                icon: Code2,
                title: "Full-Stack Development",
                description: "React, Next.js, Node.js, Flutter, Dart—I speak fluent code. From simple landing pages to complex web apps, I build it all with clean, maintainable code."
              },
              {
                icon: Sparkles,
                title: "E-commerce Expertise",
                description: "I've built and run my own online store. I know inventory, payments, shipping, and most importantly—what makes people click 'Buy Now.'"
              },
              {
                icon: Target,
                title: "SEO & Digital Marketing",
                description: "I've managed SEO for real businesses and driven actual traffic. I know how to get your site found by the right people at the right time."
              },
              {
                icon: Sparkles,
                title: "UI/UX Design",
                description: "Clean, modern interfaces that people actually want to use. Every pixel serves a purpose—whether that's building trust or driving conversions."
              },
              {
                icon: Award,
                title: "Performance Optimization",
                description: "Slow websites lose customers. I optimize every aspect—from load times to animations—so your site feels lightning fast on any device."
              },
              {
                icon: Coffee,
                title: "Problem Solving",
                description: "Got a tricky technical challenge? That's where I thrive. I love finding creative solutions to complex problems—it's what gets me out of bed."
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-6 hover:shadow-g1-glow transition-all duration-500 border border-gold/10 hover:border-gold/30 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors flex-shrink-0">
                    <skill.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-luxury-text mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-luxury-muted text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Badge Cloud */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-luxury-muted mb-6">Technologies I work with daily:</p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["React", "Next.js", "TypeScript", "Node.js", "TailwindCSS", "Framer Motion", "Flutter", "Dart", "SEO", "Google Analytics", "Figma", "Git"].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 + (i * 0.05) }}
                  className="px-4 py-2 bg-gold/5 border border-gold/20 rounded-full text-sm text-luxury-text hover:bg-gold/10 hover:border-gold/40 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Why Work With Me - Personal Approach */}
      <section className="bg-luxury-bg py-20 md:py-32 relative">
        <div className="gold-divider absolute top-0 left-0 right-0" />
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left: Image/Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="glass-panel p-8 space-y-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-luxury-text">
                  Here&apos;s What You&apos;re Actually Getting
                </h2>
                <div className="space-y-4">
                  {[
                    "Direct access to me—no account managers or middlemen slowing things down",
                    "A partner who actually understands business, not just code",
                    "Custom solutions built for your specific goals and budget",
                    "Honest advice, even if it means talking you out of something unnecessary",
                    "Fast turnaround times (because I'm lean, not a massive agency)",
                    "Ongoing support after launch—I don't just disappear"
                  ].map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * i }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <p className="text-luxury-muted">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="glass-panel p-8 border-l-4 border-gold/50">
                <h3 className="text-2xl font-heading font-bold text-luxury-text mb-4 flex items-center gap-3">
                  <div className="p-2 bg-gold/10 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-gold" />
                  </div>
                  Let&apos;s Talk Like Humans
                </h3>
                <p className="text-luxury-muted leading-relaxed mb-4">
                  I know reaching out to a web developer can feel intimidating. Will they try to upsell me? Will they use tech jargon I don&apos;t understand? Will I just be another invoice number?
                </p>
                <p className="text-luxury-muted leading-relaxed">
                  <span className="text-luxury-text font-semibold">Here&apos;s my promise:</span> When you reach out, you&apos;re talking directly to me. No sales scripts, no pressure, no BS. Just an honest conversation about what you need and how I can help. If I&apos;m not the right fit, I&apos;ll tell you. If I can help, I&apos;ll show you exactly how.
                </p>
              </div>

              <div className="glass-panel p-8 border-l-4 border-gold/50">
                <h3 className="text-2xl font-heading font-bold text-luxury-text mb-4 flex items-center gap-3">
                  <div className="p-2 bg-gold/10 rounded-lg">
                    <Handshake className="w-5 h-5 text-gold" />
                  </div>
                  Building More Than Websites
                </h3>
                <p className="text-luxury-muted leading-relaxed">
                  At the end of the day, I&apos;m not here to just build you a website and disappear. I want to build a relationship. I want to see your business grow. I want to be the person you call when you need something tech-related, whether that&apos;s adding a new feature, troubleshooting an issue, or just getting advice.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Final CTA - Personal and Warm */}
      <section className="bg-luxury-surface py-20 md:py-32 relative overflow-hidden">
        <div className="gold-divider absolute top-0 left-0 right-0" />
        <GradientMesh intensity="medium" speed="medium" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl" />
                <div className="relative p-4 bg-gold/10 rounded-full border border-gold/30">
                  <Handshake className="w-12 h-12 text-gold" />
                </div>
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-luxury-text mb-6">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="text-xl text-luxury-muted mb-8 leading-relaxed">
              Whether you&apos;re launching a new business, revamping an existing site, or just have a question—I&apos;d love to hear from you. No pressure, no sales pitch. Just a real conversation about how I can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="xl" className="shadow-g1-glow">
                <Link href="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/services">See What I Offer</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-luxury-muted mt-8">
              <Coffee className="w-4 h-4 text-gold" />
              <span>Response time: Usually within 24 hours (often much faster)</span>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}

