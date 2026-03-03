"use client";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", topic: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#fff",
    padding: "0.9rem 1.1rem",
    fontFamily: "'Raleway', sans-serif",
    fontSize: "0.88rem",
    outline: "none",
    appearance: "none" as React.CSSProperties["appearance"],
  };

  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", padding: "8rem 2rem 6rem", overflow: "hidden", textAlign: "center" }}>
        <Image src="/images/marble.png" alt="" fill style={{ objectFit: "cover", opacity: 0.15 }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ color: "#808080", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem" }}>Get In Touch</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 600, marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Let&apos;s Start a Conversation
          </h1>
          <div style={{ width: "60px", height: "1px", background: "#c0c0c0", margin: "0 auto 1.5rem" }} />
          <p style={{ color: "#c0c0c0", fontSize: "1.05rem", lineHeight: 1.9 }}>
            Whether you&apos;re ready to build a plan or just have a few questions — we&apos;re here. No pressure, no commitment. Just an honest conversation.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section style={{ background: "#0d0d0d", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem" }}>

          {/* Contact Info */}
          <div>
            <p style={{ color: "#808080", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Contact Information</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginBottom: "1rem" }}>
              Reach Out Directly
            </h2>
            <div style={{ width: "50px", height: "1px", background: "#c0c0c0", marginBottom: "2rem" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              <div>
                <p style={{ color: "#606060", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Phone</p>
                <a href="tel:+15868991003" style={{ color: "#c0c0c0", textDecoration: "none", fontSize: "1.1rem", fontFamily: "'Raleway', sans-serif" }}>
                  (586) 899-1003
                </a>
              </div>
              <div>
                <p style={{ color: "#606060", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Email</p>
                <a href="mailto:tenpointfinancialgroup@gmail.com" style={{ color: "#c0c0c0", textDecoration: "none", fontSize: "0.95rem", fontFamily: "'Raleway', sans-serif", wordBreak: "break-all" }}>
                  tenpointfinancialgroup@gmail.com
                </a>
              </div>
              <div>
                <p style={{ color: "#606060", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Licensed In</p>
                <p style={{ color: "#808080", fontSize: "0.9rem", lineHeight: 1.7 }}>All US states except<br />New York &amp; Puerto Rico</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
                <div style={{ color: "#c0c0c0", fontSize: "2rem", marginBottom: "1.5rem" }}>◈</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "1.8rem", marginBottom: "1rem" }}>Message Received</h3>
                <div style={{ width: "40px", height: "1px", background: "#c0c0c0", margin: "0 auto 1.5rem" }} />
                <p style={{ color: "#808080", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Thank you for reaching out. We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                  <div>
                    <label style={{ color: "#606060", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>Full Name *</label>
                    <input name="name" required value={formData.name} onChange={handleChange} placeholder="Your name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ color: "#606060", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>Phone</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} placeholder="(000) 000-0000" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={{ color: "#606060", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>Email *</label>
                  <input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle} />
                </div>
                <div>
                  <label style={{ color: "#606060", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>Topic</label>
                  <select name="topic" value={formData.topic} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="" style={{ background: "#0d0d0d" }}>Select a topic...</option>
                    <option value="retirement" style={{ background: "#0d0d0d" }}>Retirement Planning</option>
                    <option value="estate" style={{ background: "#0d0d0d" }}>Estate Planning & Trusts</option>
                    <option value="life" style={{ background: "#0d0d0d" }}>Life Insurance</option>
                    <option value="ltc" style={{ background: "#0d0d0d" }}>Long Term Care</option>
                    <option value="medicare" style={{ background: "#0d0d0d" }}>Medicare</option>
                    <option value="health" style={{ background: "#0d0d0d" }}>Health Insurance</option>
                    <option value="annuity" style={{ background: "#0d0d0d" }}>Annuities</option>
                    <option value="debt" style={{ background: "#0d0d0d" }}>Debt Elimination</option>
                    <option value="other" style={{ background: "#0d0d0d" }}>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label style={{ color: "#606060", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us a little about your situation..." style={{ ...inputStyle, resize: "vertical" }} />
                </div>
                <button type="submit" style={{
                  background: "#fff", color: "#0a0a0a", padding: "1rem",
                  border: "none", fontFamily: "'Raleway', sans-serif",
                  fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase",
                  fontWeight: 600, cursor: "pointer", marginTop: "0.5rem",
                }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
