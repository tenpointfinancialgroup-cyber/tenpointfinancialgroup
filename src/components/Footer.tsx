"use client";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

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
              <div style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "1.8rem", fontWeight: 700, letterSpacing: "0.06em", lineHeight: 1.2 }}>TEN POINT</div>
              <div style={{ fontFamily: "'Raleway', sans-serif", color: "#c0c0c0", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>Financial Group</div>
            </div>
            <p style={{ fontFamily: "'Raleway', sans-serif", color: "#808080", fontSize: "0.95rem", fontWeight: 400, lineHeight: 1.7, letterSpacing: "0.03em" }}>
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

          {/* Col 3 — Contact */}
          <div>
            <h4 style={headingStyle}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
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
          </div>

        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
          <p style={{ fontFamily: "'Raleway', sans-serif", color: "#555", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.04em" }}>© {new Date().getFullYear()} Ten Point Financial Group. All rights reserved.</p>
          <p style={{ fontFamily: "'Raleway', sans-serif", color: "#555", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.04em" }}>Licensed in all US states except New York & Puerto Rico.</p>
        </div>
      </div>
    </footer>
  );
}
