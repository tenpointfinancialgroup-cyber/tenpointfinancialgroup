"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(10,10,10,0.95)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(12px)",
    }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "0 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "80px",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <Image src="/images/logo.png" alt="Ten Point Financial Group" width={52} height={52} style={{ objectFit: "contain", mixBlendMode: "screen" }} />
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.05em", lineHeight: 1.2 }}>TEN POINT</div>
            <div style={{ fontFamily: "'Raleway', sans-serif", color: "#c0c0c0", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Financial Group</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="desktop-nav">
          {[["Services", "/services"], ["About", "/about"], ["Education", "/education"], ["Contact", "/contact"]].map(([label, href]) => (
            <Link key={label} href={href} style={{
              fontFamily: "'Raleway', sans-serif", color: "#c0c0c0", textDecoration: "none",
              fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#c0c0c0")}
            >{label}</Link>
          ))}
          <Link href="/contact" style={{
            background: "transparent", border: "1px solid rgba(255,255,255,0.3)",
            color: "#fff", padding: "0.5rem 1.5rem", fontSize: "0.75rem",
            letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none",
            fontFamily: "'Raleway', sans-serif", transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#0a0a0a"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }}
          >Get Started</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", color: "#fff", fontSize: "1.5rem", cursor: "pointer" }} className="mobile-menu-btn">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {[["Services", "/services"], ["About", "/about"], ["Education", "/education"], ["Contact", "/contact"]].map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setMenuOpen(false)} style={{ color: "#c0c0c0", textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
