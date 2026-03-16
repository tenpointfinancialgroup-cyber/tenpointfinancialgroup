"use client";
import Link from "next/link";
import { Phone, Mail, Linkedin, Instagram, Facebook } from "lucide-react";

const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
  </svg>
);

const headingStyle = {
  fontFamily: "'Raleway', sans-serif",
  color: "#fff",
  marginBottom: "1.2rem",
  fontSize: "1.1rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
};

const linkStyle = {
  fontFamily: "'Raleway', sans-serif",
  color: "#c0c0c0",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: 600,
  letterSpacing: "0.05em",
  transition: "color 0.2s",
  display: "block",
};

export default function Footer() {
  return (
    <footer style={{ background: "rgba(10,10,10,1)", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "3rem 2rem 1.5rem", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ marginBottom: "2rem", alignItems: "start" }}>

          {/* Col 1 — Brand */}
          <div>
            <div style={{ marginBottom: "1rem" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 700, letterSpacing: "0.06em", lineHeight: 1.2 }}>TEN POINT</div>
              <div style={{ fontFamily: "'Raleway', sans-serif", color: "#c0c0c0", fontSize: "clamp(0.65rem, 1.5vw, 0.9rem)", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>Financial Group</div>
            </div>
            <p style={{ fontFamily: "'Raleway', sans-serif", color: "#808080", fontSize: "clamp(0.75rem, 1.8vw, 0.95rem)", fontWeight: 400, lineHeight: 1.7, letterSpacing: "0.03em" }}>
              Building generational wealth through education, strategy, and trust.
            </p>
          </div>

          {/* Col 2 — Services (two sub-columns) */}
          <div>
            <h4 style={headingStyle}>Services</h4>
            <div style={{ display: "flex", gap: "2rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", flex: 1 }}>
                {["Debt Elimination", "Estate Planning", "Retirement Planning", "Long Term Care"].map(s => (
                  <Link key={s} href="/services" style={linkStyle}
                    onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#c0c0c0")}
                  >{s}</Link>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", flex: 1 }}>
                {["Life Insurance", "Health Insurance", "Medicare"].map(s => (
                  <Link key={s} href="/services" style={linkStyle}
                    onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#c0c0c0")}
                  >{s}</Link>
                ))}
              </div>
            </div>
          </div>

          {/* Col 3 — Contact & Social */}
          <div>
            <h4 style={headingStyle}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <a href="tel:+15868991003"
                style={{ ...linkStyle, display: "flex", alignItems: "center", gap: "0.5rem" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#c0c0c0")}
              >
                <Phone size={14} strokeWidth={1.5} style={{ flexShrink: 0 }} />
                +1 (586) 899-1003
              </a>
              <a href="mailto:tenpointfinancialgroup@gmail.com"
                style={{ ...linkStyle, display: "flex", alignItems: "center", gap: "0.5rem" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#c0c0c0")}
              >
                <Mail size={14} strokeWidth={1.5} style={{ flexShrink: 0 }} />
                tenpointfinancialgroup@gmail.com
              </a>
            </div>

            <h4 style={headingStyle}>Follow Us</h4>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              <a href="https://www.linkedin.com/company/ten-point-financial-group" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "4px", background: "rgba(255,255,255,0.08)", color: "#c0c0c0", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#9333ea"; e.currentTarget.style.color = "#ffffff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#c0c0c0"; }}
              >
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
              <a href="https://twitter.com/tenpointfin" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "4px", background: "rgba(255,255,255,0.08)", color: "#c0c0c0", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#9333ea"; e.currentTarget.style.color = "#ffffff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#c0c0c0"; }}
              >
                <XIcon size={18} />
              </a>
              <a href="https://www.instagram.com/tenpointfinancialgroup.llc" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "4px", background: "rgba(255,255,255,0.08)", color: "#c0c0c0", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#9333ea"; e.currentTarget.style.color = "#ffffff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#c0c0c0"; }}
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61570193537048" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "4px", background: "rgba(255,255,255,0.08)", color: "#c0c0c0", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#9333ea"; e.currentTarget.style.color = "#ffffff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#c0c0c0"; }}
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
          <p style={{ fontFamily: "'Raleway', sans-serif", color: "#555", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.04em" }}>© {new Date().getFullYear()} Ten Point Financial Group. All rights reserved.</p>
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
            <a href="/privacy-policy" style={{ fontFamily: "'Raleway', sans-serif", color: "#555", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.04em", textDecoration: "none" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#9333ea")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#555")}>
              Privacy Policy
            </a>
            <a href="/data-deletion" style={{ fontFamily: "'Raleway', sans-serif", color: "#555", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.04em", textDecoration: "none" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#9333ea")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#555")}>
              Data Deletion
            </a>
            <a href="/terms-of-service" style={{ fontFamily: "'Raleway', sans-serif", color: "#555", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.04em", textDecoration: "none" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#9333ea")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#555")}>
              Terms of Service
            </a>
            <p style={{ fontFamily: "'Raleway', sans-serif", color: "#555", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.04em" }}>Licensed in all US states except New York &amp; Puerto Rico.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
