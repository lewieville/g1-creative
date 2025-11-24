import { Container } from "@/components/ui/Container"
import { MotionSection } from "@/components/MotionSection"
import { GradientMesh } from "@/components/GradientMesh"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"

export const metadata = generateSEOMetadata({
  title: "Terms of Service | G1 Creative",
  description: "G1 Creative's Terms of Service. Read our terms and conditions for using our web design, development, and digital marketing services.",
  url: "/terms",
})

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-luxury-bg cinematic-overlay pt-32 pb-20 relative overflow-hidden">
        <GradientMesh intensity="low" speed="slow" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-luxury-text mb-6 tracking-wide leading-tight">
              Terms of Service
            </h1>
            <p className="text-xl text-luxury-muted leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </Container>
      </div>

      {/* Content Section */}
      <MotionSection className="bg-luxury-surface">
        <div className="gold-divider" />
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg prose-invert max-w-none">
            <div className="space-y-8 text-luxury-muted leading-relaxed">
              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Agreement to Terms
                </h2>
                <p>
                  These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") and G1 Creative ("we," "our," or "us") regarding your use of our website and services. By accessing or using our website at <a href="https://g1creative.com" className="text-gold hover:text-gold-light transition-colors">g1creative.com</a> or engaging our services, you agree to be bound by these Terms.
                </p>
                <p>
                  If you do not agree with any part of these Terms, you must not use our website or services. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Services Description
                </h2>
                <p>
                  G1 Creative provides web design, web development, e-commerce solutions, branding, UI/UX design, SEO optimization, and related digital marketing services (collectively, "Services"). The specific scope, deliverables, timeline, and pricing for each project will be outlined in a separate written agreement or proposal.
                </p>
                <p>
                  We reserve the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or discontinue any aspect of our Services at any time</li>
                  <li>Refuse service to anyone for any reason</li>
                  <li>Change pricing with reasonable notice</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Client Responsibilities
                </h2>
                <p>As a Client, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate, complete, and timely information necessary for project completion</li>
                  <li>Respond to requests for feedback, approvals, or information within agreed timeframes</li>
                  <li>Obtain all necessary licenses, permissions, and rights for content, images, and materials you provide</li>
                  <li>Ensure all provided content is legal, non-infringing, and does not violate any third-party rights</li>
                  <li>Make timely payments as specified in your project agreement</li>
                  <li>Maintain confidentiality of any proprietary information shared with you</li>
                  <li>Use delivered services and materials in accordance with these Terms and applicable laws</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Payment Terms
                </h2>
                <p>
                  Payment terms will be specified in your project agreement. Generally:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Projects typically require a deposit before work begins</li>
                  <li>Final payment is due upon project completion and delivery</li>
                  <li>Payment methods accepted include credit cards, bank transfers, and other agreed-upon methods</li>
                  <li>Late payments may incur interest charges or result in suspension of services</li>
                  <li>All fees are non-refundable unless otherwise specified in writing</li>
                </ul>
                <p className="mt-4">
                  If you dispute any charges, you must notify us in writing within 30 days of the charge date.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Intellectual Property Rights
                </h2>
                
                <h3 className="text-2xl font-heading font-semibold text-luxury-text mb-3 mt-6">
                  Client Content
                </h3>
                <p>
                  You retain all rights to content, materials, and intellectual property you provide to us. By providing such materials, you grant us a license to use, reproduce, and modify them solely for the purpose of providing our Services.
                </p>

                <h3 className="text-2xl font-heading font-semibold text-luxury-text mb-3 mt-6">
                  Deliverables
                </h3>
                <p>
                  Upon full payment, you will receive ownership rights to the final deliverables created specifically for your project. However:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We retain the right to use the work in our portfolio and for marketing purposes</li>
                  <li>We retain rights to any pre-existing code, templates, frameworks, or tools we developed</li>
                  <li>Third-party components, plugins, or services remain subject to their respective licenses</li>
                </ul>

                <h3 className="text-2xl font-heading font-semibold text-luxury-text mb-3 mt-6">
                  Our Intellectual Property
                </h3>
                <p>
                  All pre-existing materials, methodologies, tools, and know-how remain our exclusive property. You may not copy, modify, or distribute our proprietary materials without written permission.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Revisions and Changes
                </h2>
                <p>
                  The number of revisions included in your project will be specified in your project agreement. Additional revisions beyond the agreed scope may incur additional fees. We will make reasonable efforts to accommodate requested changes, but we reserve the right to charge for work that exceeds the original project scope.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Project Timeline
                </h2>
                <p>
                  Project timelines are estimates based on the information provided and are subject to change due to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Client response times and feedback delays</li>
                  <li>Scope changes or additional requirements</li>
                  <li>Unforeseen technical challenges</li>
                  <li>Third-party dependencies</li>
                  <li>Force majeure events</li>
                </ul>
                <p className="mt-4">
                  We will communicate any significant timeline changes and work with you to adjust schedules as needed.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Warranties and Disclaimers
                </h2>
                <p>
                  We warrant that our Services will be performed in a professional and workmanlike manner. However:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We do not guarantee specific results, such as increased traffic, sales, or rankings</li>
                  <li>We are not responsible for third-party services, platforms, or technologies</li>
                  <li>We do not warrant that our Services will be uninterrupted or error-free</li>
                  <li>We are not liable for delays caused by factors outside our reasonable control</li>
                </ul>
                <p className="mt-4">
                  EXCEPT AS EXPRESSLY SET FORTH HEREIN, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Limitation of Liability
                </h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, G1 CREATIVE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES, ARISING OUT OF OR RELATED TO THESE TERMS OR OUR SERVICES.
                </p>
                <p className="mt-4">
                  Our total liability for any claims arising from these Terms or our Services shall not exceed the total amount paid by you to us in the twelve (12) months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Indemnification
                </h2>
                <p>
                  You agree to indemnify, defend, and hold harmless G1 Creative and its officers, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising out of or related to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your use of our Services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Content or materials you provide to us</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Termination
                </h2>
                <p>
                  Either party may terminate a project agreement:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With written notice to the other party</li>
                  <li>Immediately upon material breach of these Terms by the other party</li>
                  <li>If the other party becomes insolvent or files for bankruptcy</li>
                </ul>
                <p className="mt-4">
                  Upon termination, you will pay for all work completed up to the termination date. We will deliver all completed work and materials, and you will have no further rights to incomplete work.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Confidentiality
                </h2>
                <p>
                  Both parties agree to maintain the confidentiality of proprietary information shared during the course of our engagement. This includes business strategies, technical information, financial data, and other sensitive materials. This obligation survives termination of our agreement.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Third-Party Services
                </h2>
                <p>
                  Our Services may integrate with or depend on third-party services, platforms, or technologies. We are not responsible for the availability, functionality, or terms of these third-party services. You are responsible for complying with their terms and conditions.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Dispute Resolution
                </h2>
                <p>
                  Any disputes arising from these Terms or our Services shall be resolved through good faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, conducted in Lexington, Virginia.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Governing Law
                </h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of Virginia, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Severability
                </h2>
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Entire Agreement
                </h2>
                <p>
                  These Terms, together with any project-specific agreements, constitute the entire agreement between you and G1 Creative regarding our Services and supersede all prior agreements and understandings.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Contact Information
                </h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 space-y-2">
                  <p><strong className="text-gold">G1 Creative</strong></p>
                  <p>Email: <a href="mailto:g1.creative.web@gmail.com" className="text-gold hover:text-gold-light transition-colors">g1.creative.web@gmail.com</a></p>
                  <p>Phone: <a href="tel:+12392554733" className="text-gold hover:text-gold-light transition-colors">(239) 255-4733</a></p>
                  <p>Location: Lexington, Virginia</p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </MotionSection>
    </>
  )
}

