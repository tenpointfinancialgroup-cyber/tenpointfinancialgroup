"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "4rem 2rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
              <Image src="/images/logo.png" alt="Ten Point Financial Group" width={44} height={44} style={{ objectFit: "contain" }} />
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "0.95rem", fontWeight: 600 }}>TEN POINT</div>
                <div style={{ color: "#c0c0c0", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Financial Group</div>
              </div>
            </div>
            <p style={{ color: "#808080", fontSize: "0.85rem", lineHeight: 1.8, maxWidth: "260px" }}>
              Building generational wealth through education, strategy, and trust.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", marginBottom: "1.2rem", fontSize: "1rem" }}>Services</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["Retirement Planning", "Estate Planning", "Life Insurance", "Long Term Care", "Medicare", "Health Insurance", "Debt Elimination"].map(s => (
                <Link key={s} href="/services" style={{ color: "#808080", textDecoration: "none", fontSize: "0.82rem", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#c0c0c0")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#808080")}
                >{s}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", marginBottom: "1.2rem", fontSize: "1rem" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <a href="tel:5868991003" style={{ color: "#808080", textDecoration: "none", fontSize: "0.85rem" }}>📞 (586) 899-1003</a>
              <a href="mailto:tenpointfinancialgroup@gmail.com" style={{ color: "#808080", textDecoration: "none", fontSize: "0.85rem" }}>✉ tenpointfinancialgroup@gmail.com</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "#444", fontSize: "0.75rem" }}>© {new Date().getFullYear()} Ten Point Financial Group. All rights reserved.</p>
          <p style={{ color: "#444", fontSize: "0.75rem" }}>Licensed in all US states except New York & Puerto Rico.</p>
        </div>
      </div>
    </footer>
  );
}
