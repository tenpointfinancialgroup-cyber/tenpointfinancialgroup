import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ten Point Financial Group | Building Generational Wealth",
  description: "Expert guidance in retirement planning, estate planning, life insurance, Medicare, and wealth protection for American families.",
  keywords: "retirement planning, estate planning, life insurance, Medicare, annuities, long term care, financial planning",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div style={{
          background: "#050505", borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "0.5rem 2rem", display: "flex", justifyContent: "flex-end",
          alignItems: "center", gap: "2rem", flexWrap: "wrap",
        }}>
          <a href="tel:+15868991003" style={{ color: "#808080", textDecoration: "none", fontFamily: "'Raleway', sans-serif", fontSize: "0.72rem", letterSpacing: "0.08em" }}>
            📞 +1 (586) 899-1003
          </a>
          <a href="mailto:tenpointfinancialgroup@gmail.com" style={{ color: "#808080", textDecoration: "none", fontFamily: "'Raleway', sans-serif", fontSize: "0.72rem", letterSpacing: "0.08em" }}>
            ✉ tenpointfinancialgroup@gmail.com
          </a>
        </div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
