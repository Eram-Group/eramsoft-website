import Link from "next/link";
import type { Metadata } from "next";
import "../legal.css";

export const metadata: Metadata = {
  title: "Terms of Service | Eram Soft",
  description: "Terms and conditions for using Eram Soft services and platforms.",
};

export default function TermsOfServicePage() {
  return (
    <div className="legal-page">
      <div className="legal-glow legal-glow--1" aria-hidden="true" />
      <div className="legal-glow legal-glow--2" aria-hidden="true" />
      <div className="legal-streak" aria-hidden="true" />
      <div className="legal-noise" aria-hidden="true" />
      <div className="legal-dots" aria-hidden="true" />

      {/* Hero */}
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <span className="legal-label">Legal</span>
          <h1 className="legal-title">
            Terms of <span className="legal-title-accent">Service</span>
          </h1>
          <p className="legal-subtitle">
            Please read these terms carefully before using our services.
          </p>
          <div className="legal-meta">
            Last updated: March 1, 2026
          </div>
        </div>
      </section>

      <div className="legal-divider" />

      {/* Content — Single Glass Card */}
      <section className="legal-content">
        <div className="legal-glass-card">

          <div className="legal-section">
            <h2 className="legal-heading">1. Acceptance of Terms</h2>
            <p className="legal-text">
              By accessing or using the services provided by Eram Soft (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;),
              you agree to be bound by these Terms of Service. If you do not agree to these terms,
              please do not use our services.
            </p>
            <p className="legal-text">
              These terms apply to all visitors, users, and clients who access or use our
              software development services, mobile applications, web platforms, and any related services.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">2. Services Description</h2>
            <p className="legal-text">
              Eram Soft provides custom software development services including but not limited to:
            </p>
            <ul className="legal-list">
              <li>Mobile application development (iOS & Android)</li>
              <li>Web application development and design</li>
              <li>UI/UX design and consulting</li>
              <li>DevOps, cloud infrastructure, and deployment</li>
              <li>Software maintenance and technical support</li>
            </ul>
            <p className="legal-text">
              The scope of specific services will be defined in individual project agreements
              or statements of work between the Company and the client.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">3. Intellectual Property</h2>
            <p className="legal-text">
              Unless otherwise specified in a separate written agreement, all intellectual property
              rights in the deliverables created by Eram Soft shall be transferred to the client
              upon full payment. The Company retains the right to use general knowledge, skills,
              and experience gained during project execution.
            </p>
            <p className="legal-text">
              All content on the Eram Soft website, including but not limited to text, graphics,
              logos, and software, is the property of Eram Soft and is protected by applicable
              intellectual property laws.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">4. Payment Terms</h2>
            <p className="legal-text">
              Payment terms, milestones, and schedules will be outlined in each project&apos;s
              specific agreement. Unless otherwise stated:
            </p>
            <ul className="legal-list">
              <li>Invoices are due within 30 days of issuance</li>
              <li>Late payments may incur additional charges as specified in the agreement</li>
              <li>Project work may be paused if payments are overdue beyond the agreed terms</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">5. Confidentiality</h2>
            <p className="legal-text">
              Both parties agree to maintain the confidentiality of any proprietary or
              sensitive information shared during the course of engagement. This obligation
              extends beyond the termination of the business relationship unless the information
              becomes publicly available through no fault of the receiving party.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">6. Limitation of Liability</h2>
            <p className="legal-text">
              To the fullest extent permitted by law, Eram Soft shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, or any loss of
              profits or revenues, whether incurred directly or indirectly, or any loss of data,
              use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="legal-list">
              <li>Your use or inability to use our services</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any interruption or cessation of transmission to or from our services</li>
              <li>Any bugs, viruses, or similar issues transmitted through our services by third parties</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">7. Warranties & Disclaimers</h2>
            <p className="legal-text">
              Eram Soft warrants that all services will be performed in a professional and
              workmanlike manner consistent with industry standards. We provide a warranty
              period of 60 days after project delivery for bug fixes related to the agreed-upon
              specifications.
            </p>
            <p className="legal-text">
              Except as expressly stated herein, services are provided &quot;as is&quot; without any
              warranties of any kind, whether express or implied.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">8. Termination</h2>
            <p className="legal-text">
              Either party may terminate the engagement with 30 days&apos; written notice. In the
              event of termination, the client shall pay for all work completed up to the date
              of termination. Eram Soft will deliver all work-in-progress materials upon receiving
              final payment.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">9. Governing Law</h2>
            <p className="legal-text">
              These Terms of Service shall be governed by and construed in accordance with
              the laws of the jurisdiction in which Eram Soft operates, without regard to its
              conflict of law provisions.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">10. Changes to Terms</h2>
            <p className="legal-text">
              We reserve the right to modify these terms at any time. We will notify clients
              of any material changes via email or through our website. Continued use of our
              services after changes constitutes acceptance of the updated terms.
            </p>
          </div>

          <div className="legal-section legal-section--last">
            <h2 className="legal-heading">Contact</h2>
            <p className="legal-text">
              If you have questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:legal@eramsoft.com" className="legal-link">legal@eramsoft.com</a>.
            </p>
          </div>

          {/* Navigation */}
          <div className="legal-nav">
            <Link href="/privacy" className="legal-nav-link">
              <span className="legal-nav-label">Also read</span>
              <span className="legal-nav-title">Privacy Policy &rarr;</span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
