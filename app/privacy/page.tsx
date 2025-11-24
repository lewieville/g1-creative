import { Container } from "@/components/ui/Container"
import { MotionSection } from "@/components/MotionSection"
import { GradientMesh } from "@/components/GradientMesh"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"

export const metadata = generateSEOMetadata({
  title: "Privacy Policy | G1 Creative",
  description: "G1 Creative's Privacy Policy. Learn how we collect, use, and protect your personal information when you use our web design and development services.",
  url: "/privacy",
})

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-luxury-bg cinematic-overlay pt-32 pb-20 relative overflow-hidden">
        <GradientMesh intensity="low" speed="slow" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-luxury-text mb-6 tracking-wide leading-tight">
              Privacy Policy
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
                  Introduction
                </h2>
                <p>
                  G1 Creative ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://g1creative.com" className="text-gold hover:text-gold-light transition-colors">g1creative.com</a> and use our services.
                </p>
                <p>
                  Please read this Privacy Policy carefully. By accessing or using our website and services, you agree to be bound by the terms described in this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Information We Collect
                </h2>
                
                <h3 className="text-2xl font-heading font-semibold text-luxury-text mb-3 mt-6">
                  Personal Information
                </h3>
                <p>
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact us through our website forms or email</li>
                  <li>Schedule a consultation or request a quote</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Engage with our services</li>
                  <li>Communicate with us via phone, email, or other methods</li>
                </ul>
                <p className="mt-4">
                  This information may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Company name and business information</li>
                  <li>Project requirements and preferences</li>
                  <li>Payment information (processed securely through third-party payment processors)</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-2xl font-heading font-semibold text-luxury-text mb-3 mt-6">
                  Automatically Collected Information
                </h3>
                <p>
                  When you visit our website, we may automatically collect certain information about your device and browsing behavior, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Device identifiers</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  How We Use Your Information
                </h2>
                <p>We use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To respond to your inquiries, requests, and comments</li>
                  <li>To process transactions and send related information</li>
                  <li>To send you marketing communications (with your consent)</li>
                  <li>To personalize your experience on our website</li>
                  <li>To analyze website usage and trends</li>
                  <li>To detect, prevent, and address technical issues</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Information Sharing and Disclosure
                </h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-gold">Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as payment processing, email delivery, hosting, and analytics.</li>
                  <li><strong className="text-gold">Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities.</li>
                  <li><strong className="text-gold">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                  <li><strong className="text-gold">With Your Consent:</strong> We may share your information with your explicit consent or at your direction.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Cookies and Tracking Technologies
                </h2>
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
                <p>
                  We use cookies for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Essential website functionality</li>
                  <li>Analytics and performance monitoring</li>
                  <li>Personalization and user preferences</li>
                  <li>Marketing and advertising (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
                <p>
                  We use industry-standard security practices, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure hosting infrastructure</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Your Rights and Choices
                </h2>
                <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-gold">Access:</strong> Request access to your personal information</li>
                  <li><strong className="text-gold">Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong className="text-gold">Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong className="text-gold">Opt-Out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong className="text-gold">Data Portability:</strong> Request a copy of your data in a portable format</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at <a href="mailto:g1.creative.web@gmail.com" className="text-gold hover:text-gold-light transition-colors">g1.creative.web@gmail.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Children's Privacy
                </h2>
                <p>
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Third-Party Links
                </h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Changes to This Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
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

