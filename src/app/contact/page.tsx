"use client";
import Script from "next/script";
import { WavyBackground } from "@/components/ui/wavy-background";
import { SparklesCore } from "@/components/ui/sparkles";
import { Phone, Mail, MapPin } from "lucide-react";

const S = {
  white: "#ffffff", silver: "#c0c0c0", dim: "#888888",
  mute: "#444444", black: "#000000",
  border: "rgba(255,255,255,0.07)", borderM: "rgba(255,255,255,0.12)",
};

export default function Contact() {
  return (
    <div style={{ position: "relative", background: S.black }}>

      {/* ── FIXED STARS ──────────────────────────────────────────────── */}
      <div style={{ position: "fixed", inset: 0, zIndex: 2, pointerEvents: "none" }}>
        <SparklesCore particleColor="#ffffff" background="transparent" minSize={0.4} maxSize={1.2} particleDensity={35} />
      </div>

      {/* ── SINGLE FIXED WAVY BACKGROUND ─────────────────────────────── */}
      <WavyBackground
        fixed
        colors={["#9333ea", "#7c3aed", "#6d28d9", "#4f46e5", "#3b82f6"]}
        blur={12}
        speed="slow"
        waveOpacity={0.45}
        backgroundFill="#000000"
        waveWidth={60}
      />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", zIndex: 3, minHeight: "55vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", padding: "6rem 2rem 4rem", maxWidth: "760px" }}>
          <p className="eyebrow" style={{ marginBottom: "1.2rem", fontSize: "1.65rem", letterSpacing: "0.25em" }}>Get In Touch</p>
          <div style={{ width: "320px", height: "1px", background: S.mute, margin: "0 auto 1.8rem" }} />
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            fontWeight: 600, color: S.white, lineHeight: 1.1, marginBottom: "2rem",
          }}>
            Let&apos;s Start a<br />Conversation
          </h1>
          <p style={{ color: S.dim, fontSize: "clamp(1.4rem, 2.25vw, 1.65rem)", lineHeight: 1.9, fontWeight: 300, maxWidth: "520px", margin: "0 auto" }}>
            Whether you&apos;re ready to build a plan or just have a few questions — we&apos;re here. No pressure, no commitment.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ──────────────────────────────────────────── */}
      <section style={{ position: "relative", zIndex: 3, padding: "6rem 2rem 8rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "5rem", alignItems: "start" }}>

          {/* Contact Info */}
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

          {/* GHL Form Embed */}
          <div>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/YSbC0cpJYL7no01HHMkS"
              style={{ width: "100%", height: "984px", border: "none", borderRadius: "3px" }}
              id="inline-YSbC0cpJYL7no01HHMkS"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-activation-type="alwaysActivated"
              data-deactivation-type="neverDeactivate"
              data-form-name="Tenpointfinancialgroup.com Form"
              data-height="984"
              data-layout-iframe-id="inline-YSbC0cpJYL7no01HHMkS"
              data-form-id="YSbC0cpJYL7no01HHMkS"
              title="Tenpointfinancialgroup.com Form"
            />
            <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
          </div>

        </div>
      </section>

    </div>
  );
}
