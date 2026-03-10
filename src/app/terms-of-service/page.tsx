"use client";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";

const S = {
  white: "#ffffff",
  silver: "#c0c0c0",
  dim: "#888888",
  black: "#000000",
  purple: "#9333ea",
  purpleDim: "rgba(147,51,234,0.15)",
  border: "rgba(255,255,255,0.07)",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the website tenpointfinancialgroup.com (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site.\n\nThese Terms apply to all visitors, users, and others who access or use the Site. We reserve the right to update these Terms at any time. Continued use of the Site after changes are posted constitutes your acceptance of the revised Terms.`,
  },
  {
    title: "2. Not Financial, Legal, or Tax Advice",
    content: `The content on this Site is provided for **educational and informational purposes only**. Nothing on this Site constitutes financial, investment, insurance, legal, or tax advice.\n\nTen Point Financial Group is an independent insurance and financial services agency. Any information presented should not be relied upon as a substitute for professional advice tailored to your individual situation. Always consult a licensed financial, legal, or tax professional before making decisions.`,
  },
  {
    title: "3. Use of the Site",
    content: `You agree to use this Site only for lawful purposes and in a manner that does not infringe the rights of others. You agree not to:\n\n• Transmit any material that is unlawful, harmful, threatening, or otherwise objectionable.\n• Attempt to gain unauthorized access to any part of the Site or its related systems.\n• Use any automated tool, scraper, or bot to collect data from the Site.\n• Impersonate any person or entity or misrepresent your affiliation with any person or entity.\n• Upload or transmit viruses or any other malicious code.`,
  },
  {
    title: "4. Appointment Booking & Consultations",
    content: `Scheduling a consultation through our Site (via Calendly or any other method) does not create a client relationship or obligate Ten Point Financial Group to provide services. A formal client engagement is established only through a signed service agreement.\n\nConsultations are provided at no charge and are for informational purposes. We reserve the right to decline or reschedule appointments at our discretion.`,
  },
  {
    title: "5. Communications & SMS Consent",
    content: `By submitting your contact information on this Site, you consent to be contacted by Ten Point Financial Group via phone, email, or text message regarding our services and educational content.\n\nFor SMS/text communications:\n• Message frequency varies. Standard message and data rates may apply.\n• Reply STOP at any time to opt out of text messages.\n• Reply HELP for assistance, or contact us at tenpointfinancialgroup@gmail.com.\n\nWe do not share your contact information with third parties for their own marketing purposes.`,
  },
  {
    title: "6. Intellectual Property",
    content: `All content on this Site — including text, graphics, logos, images, and software — is the property of Ten Point Financial Group or its content suppliers and is protected by applicable intellectual property laws.\n\nYou may view and print pages from the Site for personal, non-commercial use only. You may not reproduce, distribute, modify, or create derivative works without our express written permission.`,
  },
  {
    title: "7. Third-Party Links & Services",
    content: `This Site may contain links to third-party websites or services, including Calendly for appointment scheduling. These links are provided for convenience only. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.\n\nWe encourage you to review the terms and privacy policies of any third-party service you use.`,
  },
  {
    title: "8. Disclaimers & Limitation of Liability",
    content: `This Site is provided on an "as is" and "as available" basis without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.\n\nTo the fullest extent permitted by law, Ten Point Financial Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Site or its content — even if we have been advised of the possibility of such damages.\n\nOur total liability to you for any claim arising from your use of the Site shall not exceed one hundred dollars ($100.00).`,
  },
  {
    title: "9. Indemnification",
    content: `You agree to indemnify, defend, and hold harmless Ten Point Financial Group and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in connection with your use of the Site or violation of these Terms.`,
  },
  {
    title: "10. Privacy",
    content: `Your use of this Site is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at tenpointfinancialgroup.com/privacy-policy to understand our practices.`,
  },
  {
    title: "11. Governing Law",
    content: `These Terms shall be governed by and construed in accordance with the laws of the State of Michigan, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Macomb County, Michigan.`,
  },
  {
    title: "12. Changes to These Terms",
    content: `We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Site. The "Last Updated" date at the top of this page will reflect the most recent revision. Your continued use of the Site after any changes constitutes acceptance of the new Terms.`,
  },
  {
    title: "13. Contact Us",
    content: `If you have questions about these Terms of Service, please contact us:\n\n**Ten Point Financial Group**\nPhone: +1 (586) 899-1003\nEmail: tenpointfinancialgroup@gmail.com\nWebsite: tenpointfinancialgroup.com`,
  },
];

function renderContent(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    if (!line.trim()) return <br key={i} />;
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} style={{ margin: "0 0 6px 0", color: "#c0c0c0", fontSize: "14px", lineHeight: "1.8" }}>
        {parts.map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={j} style={{ color: "#ffffff", fontWeight: 600 }}>{part.slice(2, -2)}</strong>
          ) : (
            part
          )
        )}
      </p>
    );
  });
}

export default function TermsOfService() {
  return (
    <div style={{ background: "#000000", minHeight: "100vh", paddingTop: "6rem" }}>

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

        {/* Header */}
        <div style={{ marginBottom: "3rem", borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "2rem" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#9333ea", marginBottom: "1rem" }}>
            Legal
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Terms of Service
          </h1>
          <p style={{ color: "#888888", fontSize: "13px", letterSpacing: "0.04em" }}>
            Last Updated: March 2026
          </p>
          <p style={{ color: "#c0c0c0", fontSize: "14px", lineHeight: 1.8, marginTop: "1.25rem", maxWidth: "680px" }}>
            Please read these Terms of Service carefully before using tenpointfinancialgroup.com.
            By accessing or using our Site, you agree to be bound by these Terms.
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {sections.map((section) => (
            <div key={section.title} style={{ borderLeft: "2px solid rgba(147,51,234,0.2)", paddingLeft: "1.5rem" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.85rem" }}>
                {section.title}
              </h2>
              <div>{renderContent(section.content)}</div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div style={{ marginTop: "4rem", padding: "1.5rem", background: "rgba(147,51,234,0.15)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: "4px" }}>
          <p style={{ color: "#c0c0c0", fontSize: "13px", lineHeight: 1.7 }}>
            <strong style={{ color: "#ffffff" }}>Questions about these Terms?</strong>{" "}
            Contact us at{" "}
            <a href="mailto:tenpointfinancialgroup@gmail.com" style={{ color: "#9333ea" }}>tenpointfinancialgroup@gmail.com</a>{" "}
            or call <a href="tel:+15868991003" style={{ color: "#9333ea" }}>+1 (586) 899-1003</a>.
            Also see our <a href="/privacy-policy" style={{ color: "#9333ea" }}>Privacy Policy</a> and{" "}
            <a href="/data-deletion" style={{ color: "#9333ea" }}>Data Deletion Instructions</a>.
          </p>
        </div>

      </div>
    </div>
  );
}
