import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Guaranteed Retirement Planning",
    desc: "Retirement shouldn't be a gamble. We build income strategies around guaranteed vehicles — fixed indexed annuities and structured plans that ensure you never outlive your money. We analyze your current savings, project your retirement income needs, and build a plan that guarantees your lifestyle is protected no matter how long you live.",
  },
  {
    title: "Estate Planning & Trusts",
    desc: "A strong estate plan is the cornerstone of generational wealth. We help you establish the right trust structures and legal frameworks to ensure your assets pass seamlessly to those you love — avoiding probate, minimizing taxes, and keeping your wishes exactly as intended.",
  },
  {
    title: "Life Insurance",
    desc: "From term coverage to indexed universal life, we design life insurance solutions that do more than protect — they build cash value, reduce taxes, and fund your legacy. We work with dozens of top-rated carriers to find the right policy at the right price for your unique situation.",
  },
  {
    title: "Long Term Care",
    desc: "One unexpected health event can unravel decades of savings. Our long-term care strategies protect your assets and preserve your independence when you need it most. We help you plan for the possibility of extended care without leaving your family to bear the financial burden.",
  },
  {
    title: "Medicare Planning",
    desc: "Medicare is complex and the wrong choices are costly. We simplify your options across supplements, advantage plans, and Part D so you get the coverage you need without overpaying. We guide you through your initial enrollment and are available every year during open enrollment to optimize your coverage.",
  },
  {
    title: "Health Insurance",
    desc: "Whether you need an ACA marketplace plan, private coverage, or a group solution for your business, we find the right fit for your health needs and your budget. As independent brokers, we compare plans across all major carriers so you're never locked into a single option.",
  },
  {
    title: "Annuities",
    desc: "Fixed indexed annuities offer the rare combination of growth potential and principal protection. We match you with the right annuity to generate reliable income throughout retirement — with upside tied to market indexes and a guaranteed floor that means you never lose what you've built.",
  },
  {
    title: "Debt Elimination",
    desc: "Debt is the enemy of wealth. We map out proven strategies to eliminate what you owe faster, freeing up cash flow you can redirect into building lasting financial security. From mortgage acceleration to structured payoff plans, we help you get out from under debt and stay there.",
  },
];

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", padding: "8rem 2rem 6rem", overflow: "hidden", textAlign: "center" }}>
        <Image src="/images/marble.png" alt="" fill style={{ objectFit: "cover", opacity: 0.15 }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "750px", margin: "0 auto" }}>
          <p style={{ color: "#808080", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem" }}>What We Offer</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 600, marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Comprehensive Financial Services
          </h1>
          <div style={{ width: "60px", height: "1px", background: "#c0c0c0", margin: "0 auto 1.5rem" }} />
          <p style={{ color: "#c0c0c0", fontSize: "1.05rem", lineHeight: 1.9 }}>
            We offer a full suite of financial planning services designed to protect your family, grow your wealth, and build a legacy that lasts.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ background: "#0d0d0d", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: "2px" }}>
            {services.map((s, i) => (
              <div key={s.title} style={{
                padding: "3rem 2.5rem",
                background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
                  <div style={{ color: "#c0c0c0", fontSize: "1.2rem", marginTop: "0.2rem", flexShrink: 0 }}>◈</div>
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "1.25rem", marginBottom: "0.75rem" }}>{s.title}</h3>
                    <p style={{ color: "#808080", fontSize: "0.9rem", lineHeight: 1.9 }}>{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", padding: "7rem 2rem", overflow: "hidden", textAlign: "center" }}>
        <Image src="/images/marble.png" alt="" fill style={{ objectFit: "cover", opacity: 0.18 }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "1rem" }}>
            Not Sure Where to Start?
          </h2>
          <div style={{ width: "50px", height: "1px", background: "#c0c0c0", margin: "0 auto 1.5rem" }} />
          <p style={{ color: "#c0c0c0", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Schedule a free consultation and we&apos;ll walk you through exactly which services fit your situation — no pressure, no commitment.
          </p>
          <Link href="/contact" style={{
            background: "#fff", color: "#0a0a0a", padding: "1rem 3rem",
            textDecoration: "none", fontFamily: "'Raleway', sans-serif",
            fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600,
          }}>Book a Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
