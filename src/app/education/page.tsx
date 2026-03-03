import Image from "next/image";
import Link from "next/link";

const topics = [
  {
    category: "Retirement",
    articles: [
      { title: "What Is a Fixed Indexed Annuity?", desc: "FIAs offer market-linked growth with a guaranteed floor — meaning your principal is protected even when the market drops. Learn how they work and whether they belong in your retirement plan." },
      { title: "The 4% Rule — Does It Still Hold Up?", desc: "For decades, retirees were told they could safely withdraw 4% per year without running out of money. With inflation and longer lifespans, that rule deserves a second look." },
      { title: "Roth vs. Traditional IRA: Which Is Right for You?", desc: "Your tax situation today vs. in retirement determines which IRA structure saves you more money. We break down the comparison in plain English." },
    ],
  },
  {
    category: "Protection",
    articles: [
      { title: "Term vs. Whole vs. Indexed Universal Life", desc: "Life insurance isn't one-size-fits-all. Understanding the differences between term, whole life, and IUL can help you pick the right coverage for your family's needs." },
      { title: "Why Long Term Care Planning Can't Wait", desc: "70% of people over 65 will need some form of long-term care. The cost can be devastating without a plan. Learn your options before you need them." },
      { title: "Medicare Basics: Parts A, B, C & D Explained", desc: "Medicare is confusing by design. We break down what each part covers, what it costs, and the key decisions you'll face at age 65." },
    ],
  },
  {
    category: "Wealth & Legacy",
    articles: [
      { title: "How Trusts Work — and Why You Probably Need One", desc: "Trusts aren't just for the ultra-wealthy. A properly structured trust can protect your assets from probate, creditors, and unnecessary taxes — and ensure your wishes are honored." },
      { title: "Understanding the Estate Tax Exemption", desc: "The federal estate tax exemption is set to change in 2026. If you have a growing estate, understanding the exemption thresholds now could save your heirs hundreds of thousands of dollars." },
      { title: "Debt Payoff Strategies That Actually Work", desc: "Avalanche, snowball, or something else? We compare the most proven approaches to paying off debt faster — and explain which one tends to work best depending on your psychology and math." },
    ],
  },
];

export default function Education() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", padding: "8rem 2rem 6rem", overflow: "hidden", textAlign: "center" }}>
        <Image src="/images/marble.png" alt="" fill style={{ objectFit: "cover", opacity: 0.15 }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "750px", margin: "0 auto" }}>
          <p style={{ color: "#808080", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem" }}>Knowledge Center</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 600, marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Financial Education
          </h1>
          <div style={{ width: "60px", height: "1px", background: "#c0c0c0", margin: "0 auto 1.5rem" }} />
          <p style={{ color: "#c0c0c0", fontSize: "1.05rem", lineHeight: 1.9 }}>
            Confident financial decisions start with understanding. Browse our guides on retirement, protection, and legacy planning — written in plain language for real families.
          </p>
        </div>
      </section>

      {/* TOPICS */}
      {topics.map((topic, ti) => (
        <section key={topic.category} style={{ background: ti % 2 === 0 ? "#0d0d0d" : "#0a0a0a", padding: "5rem 2rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ marginBottom: "3rem" }}>
              <p style={{ color: "#808080", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Topic</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>{topic.category}</h2>
              <div style={{ width: "40px", height: "1px", background: "#c0c0c0", marginTop: "0.75rem" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {topic.articles.map(a => (
                <div key={a.title} style={{
                  padding: "2rem",
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.02)",
                }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "1.1rem", marginBottom: "0.75rem", lineHeight: 1.4 }}>{a.title}</h3>
                  <div style={{ width: "25px", height: "1px", background: "#505050", marginBottom: "0.9rem" }} />
                  <p style={{ color: "#808080", fontSize: "0.88rem", lineHeight: 1.85 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ position: "relative", padding: "7rem 2rem", overflow: "hidden", textAlign: "center" }}>
        <Image src="/images/marble.png" alt="" fill style={{ objectFit: "cover", opacity: 0.18 }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "1rem" }}>
            Have Questions? Let&apos;s Talk.
          </h2>
          <div style={{ width: "50px", height: "1px", background: "#c0c0c0", margin: "0 auto 1.5rem" }} />
          <p style={{ color: "#c0c0c0", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Education only goes so far. Schedule a free consultation and let us apply these concepts to your specific situation.
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
