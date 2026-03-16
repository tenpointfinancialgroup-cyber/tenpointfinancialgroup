"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, Linkedin, Instagram, Facebook } from "lucide-react";

const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
  </svg>
);
import { SpotlightButton } from "@/components/ui/spotlight-button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: "sticky", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(10,10,10,0.97)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(12px)",
    }}>
      <div style={{
        maxWidth: "1280px", margin: "0 auto",
        padding: "0 2.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "120px",
      }}>

        {/* Logo + Brand */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "14px", textDecoration: "none", flexShrink: 0 }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "1.6rem", fontWeight: 700, letterSpacing: "0.06em", lineHeight: 1.2 }}>TEN POINT</div>
            <div style={{ fontFamily: "'Raleway', sans-serif", color: "#c0c0c0", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>Financial Group</div>
          </div>
        </Link>

        {/* Desktop Nav + Contact */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-nav">
          {[["Services", "/services"], ["About", "/about"], ["Education", "/education"], ["Contact", "/contact"]].map(([label, href]) => (
            <Link key={label} href={href} style={{
              fontFamily: "'Raleway', sans-serif", color: "#c0c0c0", textDecoration: "none",
              fontSize: "0.95rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
              transition: "color 0.2s", whiteSpace: "nowrap",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#c0c0c0")}
            >{label}</Link>
          ))}

          {/* Divider */}
          <div style={{ width: "1px", height: "28px", background: "rgba(255,255,255,0.12)" }} />

          {/* Contact Info */}
          <a href="tel:+15868991003" style={{
            display: "flex", alignItems: "center", gap: "0.4rem",
            fontFamily: "'Raleway', sans-serif", color: "#c0c0c0", textDecoration: "none",
            fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.06em", whiteSpace: "nowrap",
            transition: "color 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "#c0c0c0")}
          >
            <Phone size={13} strokeWidth={1.5} />
            +1 (586) 899-1003
          </a>

          <a href="mailto:tenpointfinancialgroup@gmail.com" style={{
            display: "flex", alignItems: "center", gap: "0.4rem",
            fontFamily: "'Raleway', sans-serif", color: "#c0c0c0", textDecoration: "none",
            fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.06em", whiteSpace: "nowrap",
            transition: "color 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "#c0c0c0")}
          >
            <Mail size={13} strokeWidth={1.5} />
            Email Us
          </a>

          {/* Social Links */}
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <a href="https://www.linkedin.com/company/ten-point-financial-group" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#c0c0c0", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#9333ea")}
              onMouseLeave={e => (e.currentTarget.style.color = "#c0c0c0")}
            >
              <Linkedin size={16} strokeWidth={1.5} />
            </a>
            <a href="https://twitter.com/tenpointfin" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#c0c0c0", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#9333ea")}
              onMouseLeave={e => (e.currentTarget.style.color = "#c0c0c0")}
            >
              <XIcon size={16} />
            </a>
            <a href="https://www.instagram.com/tenpointfinancialgroup.llc" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#c0c0c0", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#9333ea")}
              onMouseLeave={e => (e.currentTarget.style.color = "#c0c0c0")}
            >
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61570193537048" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#c0c0c0", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#9333ea")}
              onMouseLeave={e => (e.currentTarget.style.color = "#c0c0c0")}
            >
              <Facebook size={16} strokeWidth={1.5} />
            </a>
          </div>

          <Link href="/contact"><SpotlightButton glowColor="green">Get Started</SpotlightButton></Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{ display: "none", background: "none", border: "none", color: "#fff", fontSize: "1.5rem", cursor: "pointer" }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "1.5rem 2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {[["Services", "/services"], ["About", "/about"], ["Education", "/education"], ["Contact", "/contact"]].map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setMenuOpen(false)} style={{ color: "#c0c0c0", textDecoration: "none", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</Link>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <a href="tel:+15868991003" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#808080", textDecoration: "none", fontSize: "0.85rem" }}>
              <Phone size={14} strokeWidth={1.5} /> +1 (586) 899-1003
            </a>
            <a href="mailto:tenpointfinancialgroup@gmail.com" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#808080", textDecoration: "none", fontSize: "0.85rem" }}>
              <Mail size={14} strokeWidth={1.5} /> tenpointfinancialgroup@gmail.com
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
