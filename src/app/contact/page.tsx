"use client";
import { useState, useEffect, memo } from "react";
import { SpotlightButton } from "@/components/ui/spotlight-button";
import { WavyBackground } from "@/components/ui/wavy-background";
import { SparklesCore } from "@/components/ui/sparkles";
import { Phone, Mail, MapPin } from "lucide-react";

const S = {
  white: "#ffffff", silver: "#c0c0c0", dim: "#888888",
  mute: "#444444", black: "#000000",
  border: "rgba(255,255,255,0.07)", borderM: "rgba(255,255,255,0.12)",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#0d0d0d",
  border: "1px solid rgba(255,255,255,0.1)",
  color: S.white,
  padding: "1.1rem 1.4rem",
  fontFamily: "'Raleway', sans-serif",
  fontSize: "1.2rem",
  fontWeight: 500,
  outline: "none",
  borderRadius: "4px",
  transition: "border-color 0.2s",
  colorScheme: "dark" as any,
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Raleway', sans-serif",
  color: S.dim,
  fontSize: "0.9rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  display: "block",
  marginBottom: "0.5rem",
  fontWeight: 700,
};

const ContactForm = memo(function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", topic: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Pre-fill topic from URL param e.g. /contact?topic=Medicare
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("topic");
    if (t) setFormData(prev => ({ ...prev, topic: t }));
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams(window.location.search);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source_page: params.get("from") || "contact" }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us directly at +1 (586) 899-1003.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "5rem 2rem", border: `1px solid ${S.border}`, background: "rgba(255,255,255,0.02)", borderRadius: "12px" }}>
        <div style={{ width: "4px", height: "4px", background: "rgba(255,255,255,0.3)", borderRadius: "50%", margin: "0 auto 2rem" }} />
        <h3 style={{ fontFamily: "'Playfair Display', serif", color: S.white, fontSize: "2rem", marginBottom: "1rem" }}>Message Received</h3>
        <div style={{ width: "40px", height: "1px", background: S.mute, margin: "0 auto 1.5rem" }} />
        <p style={{ color: S.dim, fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 300 }}>
          Thank you for reaching out. We&apos;ll be in touch with you soon!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input name="name" required value={formData.name} onChange={handleChange} placeholder="Your name" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Phone</label>
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="(000) 000-0000" style={inputStyle} />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Email *</label>
        <input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>Primary Goal</label>
        <select name="topic" value={formData.topic} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
          <option value="" style={{ background: "#0d0d0d" }}>Select a topic...</option>
          <option value="Debt Elimination" style={{ background: "#0d0d0d" }}>Debt Elimination</option>
          <option value="Estate Planning & Trusts" style={{ background: "#0d0d0d" }}>Estate Planning &amp; Trusts</option>
          <option value="Retirement Planning" style={{ background: "#0d0d0d" }}>Retirement Planning</option>
          <option value="Long Term Care" style={{ background: "#0d0d0d" }}>Long Term Care</option>
          <option value="Life Insurance" style={{ background: "#0d0d0d" }}>Life Insurance</option>
          <option value="Health Insurance" style={{ background: "#0d0d0d" }}>Health Insurance</option>
          <option value="Medicare" style={{ background: "#0d0d0d" }}>Medicare</option>
          <option value="General Inquiry" style={{ background: "#0d0d0d" }}>General Inquiry</option>
        </select>
      </div>
      <div>
        <label style={labelStyle}>Anything else you need help with?</label>
        <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us a little about your situation..." style={{ ...inputStyle, resize: "vertical" }} />
      </div>
      {error && (
        <p style={{ color: "#f87171", fontSize: "1rem", fontFamily: "'Raleway', sans-serif" }}>{error}</p>
      )}
      <SpotlightButton glowColor="purple" size="lg" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </SpotlightButton>
    </form>
  );
});

export default function Contact() {
  return (
    <div style={{ position: "relative", background: S.black }}>

      <div style={{ position: "fixed", inset: 0, zIndex: 2, pointerEvents: "none" }}>
        <SparklesCore particleColor="#ffffff" background="transparent" minSize={0.4} maxSize={1.2} particleDensity={35} />
      </div>

      <WavyBackground
        fixed
        colors={["#9333ea", "#7c3aed", "#6d28d9", "#4f46e5", "#3b82f6"]}
        blur={12}
        speed="slow"
        waveOpacity={0.45}
        backgroundFill="#000000"
        waveWidth={60}
      />

      <section style={{ position: "relative", zIndex: 3, minHeight: "55vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", padding: "6rem 2rem 4rem", maxWidth: "760px" }}>
          <p className="eyebrow" style={{ marginBottom: "1.2rem", fontSize: "1.65rem", letterSpacing: "0.25em" }}>Get In Touch</p>
          <div style={{ width: "320px", height: "1px", background: S.mute, margin: "0 auto 1.8rem" }} />
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 600, color: S.white, lineHeight: 1.1, marginBottom: "2rem" }}>
            Let&apos;s Start a<br />Conversation
          </h1>
          <p style={{ color: S.dim, fontSize: "clamp(1.4rem, 2.25vw, 1.65rem)", lineHeight: 1.9, fontWeight: 300, maxWidth: "520px", margin: "0 auto" }}>
            Whether you&apos;re ready to build a plan or just have a few questions — we&apos;re here. No pressure, no commitment.
          </p>
        </div>
      </section>

      <section style={{ position: "relative", zIndex: 3, padding: "6rem 2rem 8rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "5rem", alignItems: "start" }}>

          <div>
            <p className="eyebrow" style={{ marginBottom: "1.2rem", fontSize: "1.65rem", letterSpacing: "0.25em" }}>Contact Information</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: S.white, fontSize: "clamp(2.25rem, 5.25vw, 4.125rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Reach Out<br />Directly
            </h2>
            <div style={{ width: "40px", height: "1px", background: S.mute, marginBottom: "3rem" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.2rem" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "8px", border: `1px solid ${S.borderM}`, background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.2rem" }}>
                  <Phone size={20} strokeWidth={1.4} style={{ color: S.silver }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Raleway', sans-serif", color: S.dim, fontSize: "0.9rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.4rem", fontWeight: 700 }}>Phone</p>
                  <a href="tel:+15868991003" style={{ color: S.silver, textDecoration: "none", fontFamily: "'Raleway', sans-serif", fontSize: "1.55rem", fontWeight: 700 }}>
                    +1 (586) 899-1003
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.2rem" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "8px", border: `1px solid ${S.borderM}`, background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.2rem" }}>
                  <Mail size={20} strokeWidth={1.4} style={{ color: S.silver }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Raleway', sans-serif", color: S.dim, fontSize: "0.9rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.4rem", fontWeight: 700 }}>Email</p>
                  <a href="mailto:tenpointfinancialgroup@gmail.com" style={{ color: S.silver, textDecoration: "none", fontFamily: "'Raleway', sans-serif", fontSize: "1.35rem", fontWeight: 700, wordBreak: "break-all" }}>
                    tenpointfinancialgroup@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.2rem" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "8px", border: `1px solid ${S.borderM}`, background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.2rem" }}>
                  <MapPin size={20} strokeWidth={1.4} style={{ color: S.silver }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Raleway', sans-serif", color: S.dim, fontSize: "0.9rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.4rem", fontWeight: 700 }}>Licensed In</p>
                  <p style={{ color: S.silver, fontFamily: "'Raleway', sans-serif", fontSize: "1.35rem", fontWeight: 600, lineHeight: 1.6 }}>
                    All US states except<br />New York &amp; Puerto Rico
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}
