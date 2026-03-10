import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion Instructions | Ten Point Financial Group",
  description: "How to request deletion of your personal data from Ten Point Financial Group, including data collected via Facebook and Instagram.",
};

const S = {
  white: "#ffffff",
  silver: "#c0c0c0",
  dim: "#888888",
  black: "#000000",
  purple: "#9333ea",
  purpleDim: "rgba(147,51,234,0.15)",
  border: "rgba(255,255,255,0.07)",
  green: "#22c55e",
  greenDim: "rgba(34,197,94,0.1)",
};

const steps = [
  {
    num: "01",
    title: "Send a Deletion Request",
    body: `Email us at tenpointfinancialgroup@gmail.com with the subject line: **Data Deletion Request**\n\nInclude the following in your message:\n• Your full name\n• The email address or phone number associated with your account or inquiry\n• A brief description of the data you'd like deleted (e.g., "all data collected via Facebook")`,
  },
  {
    num: "02",
    title: "We Confirm Receipt",
    body: `We will acknowledge your request within **5 business days** and may ask for additional information to verify your identity and locate your records. We will never ask for your password or sensitive financial account numbers.`,
  },
  {
    num: "03",
    title: "Data Is Deleted",
    body: `Once verified, we will delete or anonymize your personal data from our systems within **30 days**, including records in our CRM (GoHighLevel), email lists, and any other internal databases.\n\nWe will send you a confirmation email when the deletion is complete.`,
  },
  {
    num: "04",
    title: "Exceptions",
    body: `Some data may be retained if required by law or regulation (for example, records subject to financial services compliance requirements). We will inform you of any such exceptions in our confirmation email.`,
  },
];

function renderBody(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    if (!line.trim()) return <br key={i} />;
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

export default function DataDeletion() {
  return (
    <div style={{ background: S.black, minHeight: "100vh", paddingTop: "6rem" }}>

      {/* Background gradient */}
      <div
        style={{
          position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(147,51,234,0.08) 0%, transparent 70%)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "780px", margin: "0 auto", padding: "4rem 2rem 6rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "3rem", borderBottom: `1px solid ${S.border}`, paddingBottom: "2rem" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: S.purple, marginBottom: "1rem" }}>
            Legal · Meta Compliance
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 5vw, 2.75rem)",
              fontWeight: 700,
              color: S.white,
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}
          >
            Data Deletion Instructions
          </h1>
          <p style={{ color: S.dim, fontSize: "13px", letterSpacing: "0.04em", marginBottom: "1.25rem" }}>
            Last Updated: March 2026
          </p>
          <p style={{ color: S.silver, fontSize: "14px", lineHeight: 1.8, maxWidth: "640px" }}>
            If you have used Facebook or Instagram to interact with Ten Point Financial Group — including
            clicking our ads, filling out a lead form, or connecting through Meta&apos;s platforms — you may
            have personal data on file with us. You have the right to request that this data be deleted.
            Follow the steps below.
          </p>
        </div>

        {/* Quick action box */}
        <div
          style={{
            background: S.greenDim,
            border: `1px solid rgba(34,197,94,0.25)`,
            borderRadius: "4px",
            padding: "1.25rem 1.5rem",
            marginBottom: "3rem",
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontSize: "1.25rem" }}>✉️</div>
          <div>
            <p style={{ color: S.white, fontSize: "14px", fontWeight: 700, marginBottom: "4px" }}>
              Fastest way to request deletion
            </p>
            <p style={{ color: S.silver, fontSize: "13px", lineHeight: 1.7 }}>
              Email{" "}
              <a
                href="mailto:tenpointfinancialgroup@gmail.com?subject=Data Deletion Request"
                style={{ color: S.green, fontWeight: 600 }}
              >
                tenpointfinancialgroup@gmail.com
              </a>{" "}
              with the subject line <strong style={{ color: S.white }}>&quot;Data Deletion Request&quot;</strong> and your name and contact info.
              We respond within 5 business days.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "3.5rem" }}>
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  border: `1px solid rgba(147,51,234,0.35)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: S.purple,
                }}
              >
                {step.num}
              </div>
              <div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: S.white,
                    marginBottom: "0.6rem",
                  }}
                >
                  {step.title}
                </h2>
                <div>{renderBody(step.body)}</div>
              </div>
            </div>
          ))}
        </div>

        {/* What data we may hold */}
        <div
          style={{
            borderLeft: `2px solid rgba(147,51,234,0.3)`,
            paddingLeft: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: S.white,
              marginBottom: "0.85rem",
            }}
          >
            What Data We May Hold From Meta Platforms
          </h2>
          <p style={{ color: S.silver, fontSize: "14px", lineHeight: 1.8, marginBottom: "8px" }}>
            When you interact with our Facebook or Instagram ads or pages, we may receive:
          </p>
          <ul style={{ paddingLeft: "0", listStyle: "none" }}>
            {[
              "Your name and contact information (if submitted via a Facebook Lead Ad form)",
              "Your Facebook User ID (used to match ad interactions)",
              "Interests and demographic data shared by Meta for ad targeting",
              "Pixel event data (pages visited on our website, if the Meta Pixel is active)",
            ].map((item, i) => (
              <li key={i} style={{ color: S.silver, fontSize: "14px", lineHeight: 1.8, display: "flex", gap: "8px", marginBottom: "4px" }}>
                <span style={{ color: S.purple, flexShrink: 0 }}>—</span>
                {item}
              </li>
            ))}
          </ul>
          <p style={{ color: S.dim, fontSize: "13px", lineHeight: 1.7, marginTop: "12px" }}>
            We do not sell this data. It is used solely to follow up on inquiries and provide our financial services.
          </p>
        </div>

        {/* Contact box */}
        <div
          style={{
            background: S.purpleDim,
            border: `1px solid rgba(147,51,234,0.2)`,
            borderRadius: "4px",
            padding: "1.5rem",
          }}
        >
          <p style={{ color: S.silver, fontSize: "13px", lineHeight: 1.7 }}>
            <strong style={{ color: S.white }}>Questions?</strong>{" "}
            Contact us at{" "}
            <a href="mailto:tenpointfinancialgroup@gmail.com" style={{ color: S.purple }}>
              tenpointfinancialgroup@gmail.com
            </a>{" "}
            or call{" "}
            <a href="tel:+15868991003" style={{ color: S.purple }}>
              (586) 899-1003
            </a>
            . For more information on how we handle your data, see our{" "}
            <a href="/privacy-policy" style={{ color: S.purple }}>
              Privacy Policy
            </a>
            .
          </p>
        </div>

      </div>
    </div>
  );
}
