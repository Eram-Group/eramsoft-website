import Link from "next/link";
import type { Metadata } from "next";
import "../legal.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Eram Soft",
  description: "How Eram Soft collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
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
            Privacy <span className="legal-title-accent">Policy</span>
          </h1>
          <p className="legal-subtitle">
            Your privacy matters. Here&apos;s how we handle your data.
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
            <h2 className="legal-heading">1. Information We Collect</h2>
            <p className="legal-text">
              Eram Soft (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects information in the
              following ways when you interact with our website and services:
            </p>
            <h3 className="legal-subheading">Personal Information</h3>
            <ul className="legal-list">
              <li>Name and contact details (email, phone number)</li>
              <li>Company name and job title</li>
              <li>Billing and payment information</li>
              <li>Communication records and project correspondence</li>
            </ul>
            <h3 className="legal-subheading">Automatically Collected Information</h3>
            <ul className="legal-list">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">2. How We Use Your Information</h2>
            <p className="legal-text">
              We use the collected information for the following purposes:
            </p>
            <ul className="legal-list">
              <li>To provide, maintain, and improve our services</li>
              <li>To communicate with you about projects, updates, and support</li>
              <li>To process payments and manage billing</li>
              <li>To send relevant marketing communications (with your consent)</li>
              <li>To comply with legal obligations and enforce our agreements</li>
              <li>To analyze website usage and improve user experience</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">3. Data Sharing & Third Parties</h2>
            <p className="legal-text">
              We do not sell your personal information to third parties. We may share your
              information only in the following circumstances:
            </p>
            <ul className="legal-list">
              <li><strong>Service Providers:</strong> Trusted partners who assist in delivering our services (hosting, analytics, payment processing)</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your data</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">4. Data Security</h2>
            <p className="legal-text">
              We implement industry-standard security measures to protect your personal
              information, including:
            </p>
            <ul className="legal-list">
              <li>SSL/TLS encryption for data in transit</li>
              <li>Encrypted storage for sensitive data at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication protocols</li>
              <li>Employee training on data protection best practices</li>
            </ul>
            <p className="legal-text">
              While we strive to protect your data, no method of electronic transmission or
              storage is 100% secure. We cannot guarantee absolute security but are committed
              to maintaining the highest practical standards.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">5. Cookies & Tracking</h2>
            <p className="legal-text">
              Our website uses cookies and similar tracking technologies to enhance your
              browsing experience. These include:
            </p>
            <ul className="legal-list">
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="legal-text">
              You can control cookie preferences through your browser settings. Disabling
              certain cookies may affect website functionality.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">6. Your Rights</h2>
            <p className="legal-text">
              Depending on your jurisdiction, you may have the following rights regarding
              your personal data:
            </p>
            <ul className="legal-list">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Request transfer of your data in a structured format</li>
              <li><strong>Objection:</strong> Object to processing of your personal data for specific purposes</li>
              <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications at any time</li>
            </ul>
            <p className="legal-text">
              To exercise any of these rights, please contact us at the email address below.
              We will respond to your request within 30 days.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">7. Data Retention</h2>
            <p className="legal-text">
              We retain personal information for as long as necessary to fulfill the purposes
              outlined in this policy, comply with legal obligations, resolve disputes, and
              enforce our agreements. Project-related data is typically retained for a minimum
              of 3 years after project completion.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">8. Children&apos;s Privacy</h2>
            <p className="legal-text">
              Our services are not directed to individuals under the age of 16. We do not
              knowingly collect personal information from children. If we become aware that
              we have collected data from a child, we will take steps to delete it promptly.
            </p>
          </div>

          <div className="legal-section">
            <h2 className="legal-heading">9. Changes to This Policy</h2>
            <p className="legal-text">
              We may update this Privacy Policy from time to time. We will notify you of
              significant changes by posting a notice on our website or sending an email.
              The &quot;Last updated&quot; date at the top of this page indicates the most recent revision.
            </p>
          </div>

          <div className="legal-section legal-section--last">
            <h2 className="legal-heading">Contact</h2>
            <p className="legal-text">
              For questions or concerns about this Privacy Policy or our data practices,
              contact us at{" "}
              <a href="mailto:privacy@eramsoft.com" className="legal-link">privacy@eramsoft.com</a>.
            </p>
          </div>

          {/* Navigation */}
          <div className="legal-nav">
            <Link href="/terms" className="legal-nav-link">
              <span className="legal-nav-label">Also read</span>
              <span className="legal-nav-title">Terms of Service &rarr;</span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
