import Image from "next/image";
import Link from "next/link";

const values = [
  { title: "Education First", desc: "We believe an informed client is a confident client. Every conversation starts with making sure you understand your options — no jargon, no pressure." },
  { title: "Integrity Always", desc: "We are independent advisors. We are not beholden to any single carrier or product line. Our only obligation is to you and your best interest." },
  { title: "Family-Centered", desc: "We treat every client like family. That means honest conversations, long-term relationships, and guidance that goes beyond a single transaction." },
  { title: "Legacy-Driven", desc: "Everything we do is built around your future and the future of those you love. We think in generations, not quarters." },
];

const licenses = [
  "Life & Health Insurance (Licensed in all US states except NY & Puerto Rico)",
  "Annuity Products & Fixed Indexed Annuities",
  "Medicare Supplements, Advantage Plans & Part D",
  "ACA Marketplace Health Insurance",
  "Long Term Care Planning",
  "Estate Planning Coordination",
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", padding: "8rem 2rem 6rem", overflow: "hidden", textAlign: "center" }}>
        <Image src="/images/marble.png" alt="" fill style={{ objectFit: "cover", opacity: 0.15 }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "750px", margin: "0 auto" }}>
          <p style={{ color: "#808080", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem" }}>Who We Are</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 600, marginBottom: "1.5rem", lineHeight: 1.2 }}>
            A Family Built on Trust
          </h1>
          <div style={{ width: "60px", height: "1px", background: "#c0c0c0", margin: "0 auto 1.5rem" }} />
          <p style={{ color: "#c0c0c0", fontSize: "1.05rem", lineHeight: 1.9 }}>
            Ten Point Financial Group was founded on a simple belief: every American family deserves access to clear, honest, and comprehensive financial guidance.
          </p>
        </div>
      </section>

      {/* STORY + PHOTO */}
      <section style={{ background: "#0d0d0d", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <Image src="/images/team.jpg" alt="Anthony Buck - Ten Point Financial Group" width={620} height={700} style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.85))", padding: "2rem 1.5rem 1.5rem" }}>
              <p style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "1.2rem" }}>Anthony Buck</p>
              <p style={{ color: "#c0c0c0", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Owner & Founder</p>
            </div>
          </div>
          <div>
            <p style={{ color: "#808080", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Our Story</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", marginBottom: "1rem" }}>
              Built From Purpose, Not Profit
            </h2>
            <div style={{ width: "50px", height: "1px", background: "#c0c0c0", marginBottom: "1.5rem" }} />
            <p style={{ color: "#808080", fontSize: "1rem", lineHeight: 1.9, marginBottom: "1.2rem" }}>
              Ten Point Financial Group was born from a desire to do things differently. Too many families are sold products they don't understand by advisors who prioritize commission over care. We set out to change that.
            </p>
            <p style={{ color: "#808080", fontSize: "1rem", lineHeight: 1.9, marginBottom: "1.2rem" }}>
              As an independent agency, we work with dozens of top-rated carriers — meaning we can find the right fit for your situation, not push a one-size-fits-all solution.
            </p>
            <p style={{ color: "#808080", fontSize: "1rem", lineHeight: 1.9, marginBottom: "2rem" }}>
              Whether you&apos;re just starting to think about retirement, navigating Medicare for the first time, or building a legacy plan for your grandchildren — we are here for all of it.
            </p>
            <Link href="/contact" style={{
              border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "0.85rem 2rem",
              textDecoration: "none", fontFamily: "'Raleway', sans-serif",
              fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase",
            }}>Schedule a Consultation</Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: "6rem 2rem", position: "relative", overflow: "hidden" }}>
        <Image src="/images/marble.png" alt="" fill style={{ objectFit: "cover", opacity: 0.1 }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ color: "#808080", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem" }}>What Drives Us</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>Our Core Values</h2>
            <div style={{ width: "50px", height: "1px", background: "#c0c0c0", margin: "1rem auto 0" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
            {values.map(v => (
              <div key={v.title} style={{ padding: "2.5rem 2rem", border: "1px solid rgba(255,255,255,0.07)", background: "rgba(10,10,10,0.85)" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "1.2rem", marginBottom: "0.75rem" }}>{v.title}</h3>
                <div style={{ width: "30px", height: "1px", background: "#606060", marginBottom: "1rem" }} />
                <p style={{ color: "#808080", fontSize: "0.88rem", lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LICENSES */}
      <section style={{ background: "#0d0d0d", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#808080", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Credentials</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", marginBottom: "1rem" }}>Licensed & Independent</h2>
          <div style={{ width: "50px", height: "1px", background: "#c0c0c0", margin: "0 auto 2.5rem" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", textAlign: "left", maxWidth: "600px", margin: "0 auto 3rem" }}>
            {licenses.map(l => (
              <div key={l} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", color: "#c0c0c0", fontSize: "0.9rem", lineHeight: 1.7 }}>
                <span style={{ color: "#606060", marginTop: "0.1rem", flexShrink: 0 }}>—</span>
                {l}
              </div>
            ))}
          </div>
          <Link href="/contact" style={{
            background: "#fff", color: "#0a0a0a", padding: "1rem 3rem",
            textDecoration: "none", fontFamily: "'Raleway', sans-serif",
            fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600,
          }}>Work With Us</Link>
        </div>
      </section>
    </>
  );
}
