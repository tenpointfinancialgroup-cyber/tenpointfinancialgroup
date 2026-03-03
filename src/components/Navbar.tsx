"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
        height: "90px",
      }}>

        {/* Logo + Brand */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "14px", textDecoration: "none", flexShrink: 0 }}>
          <Image
            src="/images/logo.png"
            alt="Ten Point Financial Group"
            width={64} height={64}
            style={{ objectFit: "contain", mixBlendMode: "screen", filter: "contrast(1.3) brightness(1.1)" }}
          />
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "1.15rem", fontWeight: 600, letterSpacing: "0.06em", lineHeight: 1.2 }}>TEN POINT</div>
            <div style={{ fontFamily: "'Raleway', sans-serif", color: "#c0c0c0", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Financial Group</div>
          </div>
        </Link>

        {/* Desktop Nav + Contact */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-nav">
          {[["Services", "/services"], ["About", "/about"], ["Education", "/education"], ["Contact", "/contact"]].map(([label, href]) => (
            <Link key={label} href={href} style={{
              fontFamily: "'Raleway', sans-serif", color: "#c0c0c0", textDecoration: "none",
              fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase",
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
            fontFamily: "'Raleway', sans-serif", color: "#c0c0c0", textDecoration: "none",
            fontSize: "0.78rem", letterSpacing: "0.06em", whiteSpace: "nowrap",
            transition: "color 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "#c0c0c0")}
          >📞 (586) 899-1003</a>

          <a href="mailto:tenpointfinancialgroup@gmail.com" style={{
            fontFamily: "'Raleway', sans-serif", color: "#c0c0c0", textDecoration: "none",
            fontSize: "0.78rem", letterSpacing: "0.06em", whiteSpace: "nowrap",
            transition: "color 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "#c0c0c0")}
          >✉ tenpointfinancialgroup@gmail.com</a>
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
            <a href="tel:+15868991003" style={{ color: "#808080", textDecoration: "none", fontSize: "0.85rem" }}>📞 (586) 899-1003</a>
            <a href="mailto:tenpointfinancialgroup@gmail.com" style={{ color: "#808080", textDecoration: "none", fontSize: "0.85rem" }}>✉ tenpointfinancialgroup@gmail.com</a>
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
