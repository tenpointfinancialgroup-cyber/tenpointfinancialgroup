import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Guaranteed Retirement Planning", icon: "◈", desc: "Retirement shouldn't be a gamble. We build income strategies around guaranteed vehicles — fixed indexed annuities and structured plans that ensure you never outlive your money." },
  { title: "Estate Planning & Trusts", icon: "◈", desc: "A strong estate plan is the cornerstone of generational wealth. We help you establish the right trust structures and legal frameworks to ensure your assets pass seamlessly to those you love." },
  { title: "Life Insurance", icon: "◈", desc: "From term coverage to indexed universal life, we design life insurance solutions that do more than protect — they build cash value, reduce taxes, and fund your legacy." },
  { title: "Long Term Care", icon: "◈", desc: "One unexpected health event can unravel decades of savings. Our long-term care strategies protect your assets and preserve your independence when you need it most." },
  { title: "Medicare Planning", icon: "◈", desc: "Medicare is complex and the wrong choices are costly. We simplify your options across supplements, advantage plans, and Part D so you get the coverage you need without overpaying." },
  { title: "Health Insurance", icon: "◈", desc: "Whether you need an ACA marketplace plan, private coverage, or a group solution for your business, we find the right fit for your health needs and your budget." },
  { title: "Annuities", icon: "◈", desc: "Fixed indexed annuities offer the rare combination of growth potential and principal protection. We match you with the right annuity to generate reliable income throughout retirement." },
  { title: "Debt Elimination", icon: "◈", desc: "Debt is the enemy of wealth. We map out proven strategies to eliminate what you owe faster, freeing up cash flow you can redirect into building lasting financial security." },
];

const pillars = [
  { word: "Education", desc: "Financial confidence comes from understanding. We take the time to explain every option clearly so you can make informed decisions at every stage of life." },
  { word: "Trust", desc: "We operate with complete transparency. No hidden agendas, no pressure — just honest guidance built on a foundation of integrity and accountability." },
  { word: "Guidance", desc: "You don't have to navigate this alone. We walk alongside you through every financial decision, from your first plan to the legacy you leave behind." },
  { word: "Legacy", desc: "Everything we do is designed with the future in mind — yours and your family's. We build strategies that create wealth meant to outlast generations." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{
        position: "relative", minHeight: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        <Image src="/images/marble.png" alt="marble background" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "2rem", maxWidth: "800px" }}>
          <Image src="/images/logo.png" alt="Ten Point Financial Group" width={180} height={180} style={{ objectFit: "contain", marginBottom: "2rem", mixBlendMode: "screen", filter: "contrast(1.3) brightness(1.1)" }} priority />
          <p style={{ fontFamily: "'Raleway', sans-serif", color: "#c0c0c0", fontSize: "0.85rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Ten Point Financial Group
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff", fontSize: "clamp(2.8rem, 6vw, 4.8rem)", fontWeight: 600, marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Building Legacies.<br />Protecting Families.
          </h1>
          <div style={{ width: "60px", height: "1px", background: "#c0c0c0", margin: "0 auto 1.5rem" }} />
          <p style={{ color: "#c0c0c0", fontSize: "1.15rem", lineHeight: 1.9, marginBottom: "2.5rem", fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}>
            We guide American families through the complexities of financial planning — from retirement and estate strategies to insurance and wealth protection.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{
              background: "#fff", color: "#0a0a0a", padding: "0.9rem 2.5rem",
              textDecoration: "none", fontFamily: "'Raleway', sans-serif",
              fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600,
            }}>Schedule a Consultation</Link>
            <Link href="/services" style={{
              background: "transparent", border: "1px solid rgba(255,255,255,0.4)", color: "#fff",
              padding: "0.9rem 2.5rem", textDecoration: "none", fontFamily: "'Raleway', sans-serif",
              fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase",
            }}>Our Services</Link>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section style={{ background: "#0d0d0d", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ color: "#808080", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem" }}>What We Stand For</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>Our Foundation</h2>
            <div style={{ width: "50px", height: "1px", background: "#c0c0c0", margin: "1rem auto 0" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "2rem" }}>
            {pillars.map(p => (
              <div key={p.word} className="pillar-card" style={{ textAlign: "center", padding: "2.5rem 1.5rem", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "1.4rem", marginBottom: "1rem" }}>{p.word}</h3>
                <div style={{ width: "30px", height: "1px", background: "#606060", margin: "0 auto 1rem" }} />
                <p style={{ color: "#808080", fontSize: "0.85rem", lineHeight: 1.8 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "6rem 2rem", position: "relative", overflow: "hidden" }}>
        <Image src="/images/marble.png" alt="" fill style={{ objectFit: "cover", opacity: 0.12 }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ color: "#808080", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem" }}>What We Offer</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>Our Services</h2>
            <div style={{ width: "50px", height: "1px", background: "#c0c0c0", margin: "1rem auto 0" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {services.map(s => (
              <div key={s.title} style={{
                padding: "2rem", border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(10,10,10,0.85)",
              }}>
                <div style={{ color: "#c0c0c0", fontSize: "1.2rem", marginBottom: "0.75rem" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "1.1rem", marginBottom: "0.75rem" }}>{s.title}</h3>
                <p style={{ color: "#808080", fontSize: "0.83rem", lineHeight: 1.8 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/services" style={{
              border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "0.85rem 2.5rem",
              textDecoration: "none", fontFamily: "'Raleway', sans-serif",
              fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase",
            }}>Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section style={{ background: "#0d0d0d", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <Image src="/images/team.jpg" alt="Anthony Buck - Ten Point Financial Group" width={620} height={700} style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.8))", padding: "2rem 1.5rem 1.5rem" }}>
              <p style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "1.2rem" }}>Anthony Buck</p>
              <p style={{ color: "#c0c0c0", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Owner</p>
            </div>
          </div>
          <div>
            <p style={{ color: "#808080", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Who We Are</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", marginBottom: "1rem" }}>A Family Committed to Your Family</h2>
            <div style={{ width: "50px", height: "1px", background: "#c0c0c0", marginBottom: "1.5rem" }} />
            <p style={{ color: "#808080", fontSize: "1rem", lineHeight: 1.9, marginBottom: "1.2rem" }}>
              At Ten Point Financial Group, we believe financial planning is personal. We&apos;re not just advisors — we&apos;re a family that understands what it means to protect what matters most.
            </p>
            <p style={{ color: "#808080", fontSize: "1rem", lineHeight: 1.9, marginBottom: "2rem" }}>
              Our mission is to educate, empower, and guide families across the country toward financial security — from your first retirement conversation to the legacy you leave behind.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
              {["Licensed nationwide (excl. NY & Puerto Rico)", "Independent, unbiased financial guidance", "Specializing in retirement, protection & legacy"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#c0c0c0", fontSize: "0.83rem" }}>
                  <span style={{ color: "#808080" }}>—</span> {item}
                </div>
              ))}
            </div>
            <Link href="/about" style={{
              border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "0.85rem 2rem",
              textDecoration: "none", fontFamily: "'Raleway', sans-serif",
              fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase",
            }}>Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ position: "relative", padding: "7rem 2rem", overflow: "hidden", textAlign: "center" }}>
        <Image src="/images/marble.png" alt="" fill style={{ objectFit: "cover", opacity: 0.2 }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "650px", margin: "0 auto" }}>
          <Image src="/images/logo.png" alt="" width={100} height={100} style={{ objectFit: "contain", marginBottom: "1.5rem", mixBlendMode: "screen", filter: "contrast(1.3) brightness(1.1)" }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", marginBottom: "1rem" }}>
            Your Legacy Starts Today
          </h2>
          <div style={{ width: "50px", height: "1px", background: "#c0c0c0", margin: "0 auto 1.5rem" }} />
          <p style={{ color: "#c0c0c0", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Schedule a complimentary consultation and let us help you build a financial foundation that protects your family for generations to come.
          </p>
          <Link href="/contact" style={{
            background: "#fff", color: "#0a0a0a", padding: "1rem 3rem",
            textDecoration: "none", fontFamily: "'Raleway', sans-serif",
            fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600,
          }}>Book Your Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
