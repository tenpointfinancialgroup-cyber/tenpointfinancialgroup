"use client";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";

const S = {
  white: "#ffffff",
  silver: "#c0c0c0",
  dim: "#888888",
  mute: "#444444",
  black: "#000000",
  purple: "#9333ea",
  purpleDim: "rgba(147,51,234,0.15)",
  border: "rgba(255,255,255,0.07)",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, including:

• **Contact information** — name, email address, phone number, and mailing address when you fill out a contact form, request a consultation, or book an appointment.
• **Communication records** — messages, emails, and notes from consultations or correspondence with our team.
• **Financial information** — only what you voluntarily share during a consultation to help us provide guidance (we do not collect payment card information directly).
• **Usage data** — pages visited, time spent on our site, referring URLs, browser type, and device type, collected automatically via standard web analytics.
• **Cookies and tracking** — session cookies and analytics cookies used to improve site performance and understand how visitors use our website.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:

• Respond to your inquiries and schedule consultations.
• Provide financial education, guidance, and service recommendations.
• Send appointment confirmations, reminders, and follow-up communications.
• Send educational newsletters and marketing communications (only with your consent — you may opt out at any time).
• Improve our website, services, and client experience.
• Comply with applicable legal and regulatory obligations.
• Protect against fraud or unauthorized use of our services.`,
  },
  {
    title: "3. Text Message Communications (TCPA)",
    content: `By providing your phone number and opting in, you consent to receive text messages from Ten Point Financial Group, including appointment reminders, follow-ups, and educational content.

• Message frequency varies. Standard message and data rates may apply.
• You may opt out at any time by replying STOP to any message.
• For help, reply HELP or contact us at tenpointfinancialgroup@gmail.com.
• We do not share your phone number with third parties for their own marketing purposes.`,
  },
  {
    title: "4. How We Share Your Information",
    content: `We do not sell, rent, or trade your personal information. We may share it only in the following circumstances:

• **Service providers** — trusted third-party tools we use to operate our business, including GoHighLevel (CRM), Calendly (appointment scheduling), and email delivery services. These providers are contractually obligated to protect your data.
• **Legal requirements** — if required by law, court order, or government regulation.
• **Business transfers** — in connection with a merger, acquisition, or sale of assets, with equivalent privacy protections in place.
• **With your consent** — for any other purpose with your explicit authorization.`,
  },
  {
    title: "5. Cookies & Tracking Technologies",
    content: `Our website uses cookies to:

• Keep you logged in during a session.
• Remember your preferences.
• Analyze site traffic and performance (via Google Analytics or similar tools).

You may disable cookies in your browser settings. Note that some features of the site may not function properly without cookies. We do not use cookies to build advertising profiles or sell data to advertisers.`,
  },
  {
    title: "6. Data Retention",
    content: `We retain your personal information for as long as necessary to fulfill the purposes described in this policy, maintain our business records, and comply with legal obligations. When data is no longer needed, we securely delete or anonymize it.

Consultation records and financial guidance notes may be retained for up to 7 years to comply with applicable financial services regulations.`,
  },
  {
    title: "7. Your Rights & Choices",
    content: `You have the right to:

• **Access** — request a copy of the personal information we hold about you.
• **Correction** — request that we correct inaccurate or incomplete information.
• **Deletion** — request that we delete your personal data, subject to legal retention requirements.
• **Opt out** — unsubscribe from marketing emails at any time using the unsubscribe link in any email, or by contacting us directly.
• **Data portability** — request your data in a structured, machine-readable format.

To exercise any of these rights, contact us at tenpointfinancialgroup@gmail.com or call (586) 899-1003.`,
  },
  {
    title: "8. Security",
    content: `We take reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. This includes encrypted data transmission (HTTPS), access controls, and regular security reviews.

No method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.`,
  },
  {
    title: "9. Third-Party Links",
    content: `Our website may contain links to third-party websites, including Calendly for appointment booking. We are not responsible for the privacy practices of those sites. We encourage you to review the privacy policies of any third-party site you visit.`,
  },
  {
    title: "10. Children's Privacy",
    content: `Our services are intended for adults. We do not knowingly collect personal information from children under the age of 13. If you believe we have inadvertently collected information from a child, please contact us immediately and we will delete it.`,
  },
  {
    title: "11. Not Financial Advice",
    content: `The content on this website is provided for educational and informational purposes only. It does not constitute financial, investment, legal, or tax advice. Consult a qualified professional before making financial decisions. Ten Point Financial Group is an independent insurance and financial services agency.`,
  },
  {
    title: "12. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top of this page. We encourage you to review this policy periodically. Continued use of our website after changes are posted constitutes acceptance of the revised policy.`,
  },
  {
    title: "13. Contact Us",
    content: `If you have questions, concerns, or requests regarding this Privacy Policy, please contact us:

**Ten Point Financial Group**
Phone: (586) 899-1003
Email: tenpointfinancialgroup@gmail.com
Website: tenpointfinancialgroup.com`,
  },
];

function renderContent(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    if (!line.trim()) return <br key={i} />;
    // Bold text wrapped in **
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} style={{ margin: "0 0 6px 0", color: S.silver, fontSize: "14px", lineHeight: "1.8" }}>
        {parts.map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={j} style={{ color: S.white, fontWeight: 600 }}>
              {part.slice(2, -2)}
            </strong>
          ) : (
            part
          )
        )}
      </p>
    );
  });
}

export default function PrivacyPolicy() {
  return (
    <div style={{ background: S.black, minHeight: "100vh", paddingTop: "6rem" }}>

      {/* Marble background */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
        <Image src="/images/marble-dark.png" alt="" fill style={{ objectFit: "cover", opacity: 0.35 }} priority />
      </div>

      {/* Dark overlay */}
      <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 1, pointerEvents: "none" }} />

      {/* Stars */}
      <div style={{ position: "fixed", inset: 0, zIndex: 2, pointerEvents: "none" }}>
        <SparklesCore particleColor="#ffffff" background="transparent" minSize={0.4} maxSize={1.2} particleDensity={40} />
      </div>

      <div style={{ position: "relative", zIndex: 3, maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem 6rem" }}>

        {/* ── Header ───────────────────────────────────────────────────────── */}
        <div style={{ marginBottom: "3rem", borderBottom: `1px solid ${S.border}`, paddingBottom: "2rem" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: S.purple, marginBottom: "1rem" }}>
            Legal
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: S.white,
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: S.dim, fontSize: "13px", letterSpacing: "0.04em" }}>
            Last Updated: March 2026
          </p>
          <p style={{ color: S.silver, fontSize: "14px", lineHeight: 1.8, marginTop: "1.25rem", maxWidth: "680px" }}>
            Ten Point Financial Group (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our website or engage with our services. Please read this policy carefully.
            By using our site, you agree to the practices described here.
          </p>
        </div>

        {/* ── Sections ─────────────────────────────────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {sections.map((section) => (
            <div
              key={section.title}
              style={{
                borderLeft: `2px solid ${S.purpleDim}`,
                paddingLeft: "1.5rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  color: S.white,
                  marginBottom: "0.85rem",
                  letterSpacing: "0.01em",
                }}
              >
                {section.title}
              </h2>
              <div>{renderContent(section.content)}</div>
            </div>
          ))}
        </div>

        {/* ── Footer note ──────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "4rem",
            padding: "1.5rem",
            background: S.purpleDim,
            border: `1px solid rgba(147,51,234,0.2)`,
            borderRadius: "4px",
          }}
        >
          <p style={{ color: S.silver, fontSize: "13px", lineHeight: 1.7 }}>
            <strong style={{ color: S.white }}>Questions about this policy?</strong>{" "}
            Contact us at{" "}
            <a href="mailto:tenpointfinancialgroup@gmail.com" style={{ color: S.purple }}>
              tenpointfinancialgroup@gmail.com
            </a>{" "}
            or call{" "}
            <a href="tel:+15868991003" style={{ color: S.purple }}>
              (586) 899-1003
            </a>
            . You can also{" "}
            <a href="https://calendly.com/tenpointfinancialgroup/anthonybuck" target="_blank" rel="noopener noreferrer" style={{ color: S.purple }}>
              book a call
            </a>{" "}
            to speak with us directly.
          </p>
        </div>

      </div>
    </div>
  );
}
