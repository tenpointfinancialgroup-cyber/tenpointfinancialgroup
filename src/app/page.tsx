import Image from "next/image";
import Link from "next/link";
import { GLSLHills } from "@/components/ui/glsl-hills";
import { Spotlight } from "@/components/ui/spotlight";
import { VaporizeTextCycle } from "@/components/ui/vapour-text-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import { GradientButton } from "@/components/ui/gradient-button";
import { SpotlightButton } from "@/components/ui/spotlight-button";
import { GlowingShadow } from "@/components/ui/glowing-shadow";
import { FloatingPaths } from "@/components/ui/background-paths";
import { VercelV0Chat } from "@/components/ui/v0-ai-chat";
import {
  Shield,
  TrendingUp,
  FileText,
  Heart,
  Activity,
  PlusCircle,
  BarChart2,
  MinusCircle,
} from "lucide-react";

// ── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    num: "01",
    title: "Guaranteed Retirement Planning",
    desc: "Retirement shouldn't be a gamble. We build income strategies around guaranteed vehicles — fixed indexed annuities and structured plans that ensure you never outlive your money.",
    icon: Shield,
  },
  {
    num: "02",
    title: "Estate Planning & Trusts",
    desc: "A strong estate plan is the cornerstone of generational wealth. We help you establish the right trust structures and legal frameworks to ensure your assets pass seamlessly.",
    icon: FileText,
  },
  {
    num: "03",
    title: "Life Insurance",
    desc: "From term coverage to indexed universal life, we design life insurance solutions that do more than protect — they build cash value, reduce taxes, and fund your legacy.",
    icon: Heart,
  },
  {
    num: "04",
    title: "Long Term Care",
    desc: "One unexpected health event can unravel decades of savings. Our long-term care strategies protect your assets and preserve your independence when you need it most.",
    icon: Activity,
  },
  {
    num: "05",
    title: "Medicare Planning",
    desc: "Medicare is complex and the wrong choices are costly. We simplify your options across supplements, advantage plans, and Part D so you get the coverage you need.",
    icon: PlusCircle,
  },
  {
    num: "06",
    title: "Health Insurance",
    desc: "Whether you need an ACA marketplace plan, private coverage, or a group solution for your business, we find the right fit for your health needs and budget.",
    icon: BarChart2,
  },
  {
    num: "07",
    title: "Annuities",
    desc: "Fixed indexed annuities offer the rare combination of growth potential and principal protection. We match you with the right annuity to generate reliable income.",
    icon: TrendingUp,
  },
  {
    num: "08",
    title: "Debt Elimination",
    desc: "Debt is the enemy of wealth. We map out proven strategies to eliminate what you owe faster, freeing up cash flow you can redirect into building lasting financial security.",
    icon: MinusCircle,
  },
];


const stats = [
  { value: "1,000+", label: "Families Served" },
  { value: "30+", label: "Years Combined Experience" },
  { value: "49", label: "States Licensed" },
  { value: "$2B+", label: "Assets Protected" },
];

// ── Color tokens ──────────────────────────────────────────────────────────────
const S = {
  white: "#ffffff",
  silver: "#c0c0c0",
  dim: "#888888",
  mute: "#444444",
  black: "#000000",
  soft: "#0a0a0a",
  mid: "#0f0f0f",
  border: "rgba(255,255,255,0.07)",
  borderM: "rgba(255,255,255,0.12)",
};

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: S.black,
        }}
      >
        {/* Marble background */}
        <Image
          src="/images/marble-dark.png"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.35, zIndex: 0 }}
          priority
        />

        {/* Dark vignette over marble */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 100%)", zIndex: 1 }} />

        {/* GLSL Hills overlay */}
        <div style={{ position: "absolute", inset: 0, zIndex: 2, mixBlendMode: "screen", opacity: 0.35 }}>
          <GLSLHills speed={0.3} cameraZ={125} planeSize={256} />
        </div>

        {/* Spotlight */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        {/* Hero content */}
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "2rem", maxWidth: "860px" }}>

          <p className="eyebrow" style={{ marginBottom: "1.2rem", fontSize: "1.65rem", letterSpacing: "0.25em" }}>Ten Point Financial Group</p>
          <div style={{ width: "320px", height: "1px", background: S.mute, margin: "0 auto 1.8rem" }} />

          {/* VaporText tagline */}
          <h1
            className="glow-text"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(4.5rem, 10.5vw, 8.25rem)",
              fontWeight: 600,
              color: S.white,
              lineHeight: 1.1,
              marginBottom: "2.4rem",
              letterSpacing: "-0.01em",
            }}
          >
            <VaporizeTextCycle
              texts={["Debt Elimination", "Estate Planning", "Retirement Planning", "Long Term Care"]}
              vaporizeDuration={3}
              fadeInDuration={1.5}
              waitDuration={2}
            />
          </h1>

          <p style={{
            color: S.dim,
            fontSize: "clamp(1.4rem, 2.25vw, 1.65rem)",
            lineHeight: 1.9,
            marginBottom: "3rem",
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 300,
            maxWidth: "540px",
            margin: "0 auto 3rem",
          }}>
            Planning for specific goals.<br />
            Providing clarity for uncertain times.<br />
            Being a resource for our community.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
            <Link href="/contact"><SpotlightButton glowColor="purple" size="lg">Schedule Consultation</SpotlightButton></Link>
            <Link href="/services"><SpotlightButton glowColor="blue" size="lg">Our Services</SpotlightButton></Link>
          </div>

        </div>

        {/* Stars — full width, bottom of hero, fading upward */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "300px", zIndex: 5, pointerEvents: "none",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 55%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 55%)",
        }}>
          <SparklesCore
            particleColor="#ffffff"
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={60}
          />
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "2.5rem", left: "50%",
          transform: "translateX(-50%)", zIndex: 10,
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        }}>
          <div style={{ width: "1px", height: "52px", background: "linear-gradient(180deg, rgba(255,255,255,0.5), transparent)" }} />
          <p className="eyebrow" style={{ color: "rgba(255,255,255,0.25)" }}>Scroll</p>
        </div>
      </section>

      {/* ── PAGE MARBLE WRAPPER: Stats → CTA ─────────────────────────── */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Image src="/images/marble-dark.png" alt="" fill style={{ objectFit: "cover", opacity: 0.35, zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 0 }} />

      {/* ── STATS BAR ────────────────────────────────────────────────── */}
      <section style={{
        position: "relative",
        background: S.black,
        padding: "3rem 2rem",
        borderBottom: `1px solid ${S.border}`,
      }}>
        {/* Gradient top line */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)", marginBottom: "3rem", marginTop: "-3rem" }} />
        <div style={{
          maxWidth: "1200px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          alignItems: "center",
        }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{
              textAlign: "center", padding: "0.5rem 1rem",
              borderRight: i < stats.length - 1 ? "2px solid rgba(255,255,255,0.2)" : "none",
            }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
                color: S.white,
                lineHeight: 1,
                marginBottom: "0.4rem",
                letterSpacing: "-0.02em",
              }}>{s.value}</p>
              <p className="eyebrow">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      {/* ── SHARED WRAPPER: What We Offer → Since Day One → Who We Are ── */}
      <div style={{ position: "relative", overflow: "hidden" }}>

        {/* FloatingPaths — top-anchored, fades out before reaching Who We Are */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: "62%",
          zIndex: 0,
          maskImage: "linear-gradient(135deg, black 35%, transparent 75%)",
          WebkitMaskImage: "linear-gradient(135deg, black 35%, transparent 75%)",
          pointerEvents: "none",
        }}>
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>

        {/* Sparkles — full height throughout wrapper */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
          <SparklesCore
            particleColor="#ffffff"
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={40}
          />
        </div>

        {/* ── SERVICES ──────────────────────────────────────────────── */}
        <section style={{ padding: "4rem 2rem 8rem", position: "relative" }}>
          <div style={{ position: "relative", zIndex: 1, maxWidth: "1260px", margin: "0 auto" }}>
            <div style={{ marginBottom: "3.5rem" }}>
              <Link href="/services" style={{ textDecoration: "none", display: "block" }}>
              <GlowingShadow>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "3fr 2fr",
                  gap: "3rem",
                  alignItems: "stretch",
                  width: "100%",
                }}>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <p className="eyebrow" style={{ marginBottom: "1.2rem", fontSize: "1.65rem", letterSpacing: "0.25em" }}>What We Offer</p>
                    <h2 style={{
                      fontFamily: "'Playfair Display', serif",
                      color: S.white,
                      fontSize: "clamp(2.6rem, 4.5vw, 3.8rem)",
                      lineHeight: 1.2,
                    }}>
                      Everything you need.<br />Nothing you don&apos;t.
                    </h2>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem", height: "100%" }}>
                    <p style={{ color: S.dim, fontSize: "1.8rem", lineHeight: 1.7, fontWeight: 300, textAlign: "center" }}>
                      Comprehensive financial planning across retirement, protection, and legacy — designed around your life, no cookie cutter approaches.
                    </p>
                    <GradientButton>Explore All Services</GradientButton>
                  </div>
                </div>
              </GlowingShadow>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CINEMATIC QUOTE — solid black strip floating above shared bg ── */}
        <div style={{
          position: "relative", zIndex: 2,
          height: "220px",
          display: "flex", alignItems: "center", justifyContent: "center",
          background: S.black,
        }}>
          <div style={{ textAlign: "center" }}>
            <p className="ornament" style={{ marginBottom: "1.8rem" }}>
              <span className="eyebrow" style={{ color: "rgba(255,255,255,0.3)", fontSize: "1.65rem", letterSpacing: "0.25em" }}>Since day one</span>
            </p>
            <h2
              className="glow-text"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: S.white,
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: 400,
                fontStyle: "italic",
                letterSpacing: "0.02em",
              }}
            >
              &ldquo;Built on trust. Driven by legacy.&rdquo;
            </h2>
          </div>
        </div>

      {/* ── MEET THE TEAM ──────────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem 8rem", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
            <SparklesCore
              particleColor="#ffffff"
              background="transparent"
              minSize={0.4}
              maxSize={1.2}
              particleDensity={40}
            />
          </div>
          <div style={{ position: "relative", zIndex: 2, maxWidth: "1100px", margin: "0 auto" }}>

            {/* Header — above both columns */}
            <div style={{ marginBottom: "4rem" }}>
              <p className="eyebrow" style={{ marginBottom: "1.2rem", fontSize: "1.65rem", letterSpacing: "0.25em" }}>Who We Are</p>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                color: S.white,
                fontSize: "clamp(2.25rem, 5.25vw, 4.125rem)",
                lineHeight: 1.1,
              }}>
                A family committed<br />to your family
              </h2>
            </div>

            {/* Two-column: photo + description */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "6rem",
              alignItems: "stretch",
            }}>
              {/* Photo + logo column */}
              <div style={{ display: "flex", flexDirection: "column" }}>

                {/* Photo box */}
                <div style={{ position: "relative", flexShrink: 0 }}>
                  {[
                    { top: "-10px", left: "-10px", borderTop: `1px solid ${S.borderM}`, borderLeft: `1px solid ${S.borderM}` },
                    { top: "-10px", right: "-10px", borderTop: `1px solid ${S.borderM}`, borderRight: `1px solid ${S.borderM}` },
                    { bottom: "-10px", left: "-10px", borderBottom: `1px solid ${S.borderM}`, borderLeft: `1px solid ${S.borderM}` },
                    { bottom: "-10px", right: "-10px", borderBottom: `1px solid ${S.borderM}`, borderRight: `1px solid ${S.borderM}` },
                  ].map((style, i) => (
                    <div key={i} style={{ position: "absolute", width: "28px", height: "28px", zIndex: 2, ...style }} />
                  ))}
                  <Image
                    src="/images/team.jpg"
                    alt="Anthony Buck — Ten Point Financial Group"
                    width={620} height={720}
                    style={{ width: "100%", height: "auto", objectFit: "cover", display: "block", filter: "grayscale(20%) contrast(1.05)" }}
                  />
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 3,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.9))",
                    padding: "3rem 1.8rem 1.8rem",
                  }}>
                    <p style={{ fontFamily: "'Playfair Display', serif", color: S.white, fontSize: "1.2rem", marginBottom: "0.2rem" }}>Anthony Buck</p>
                    <p className="eyebrow" style={{ color: S.dim }}>Founder &amp; Owner</p>
                  </div>
                </div>

                {/* Logo — vertically centered in remaining space below photo */}
                <div style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mixBlendMode: "screen",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                }}>
                  <Image
                    src="/images/logo-crest.png"
                    alt="Ten Point Financial Group"
                    width={500} height={500}
                    style={{ width: "75%", height: "auto", filter: "invert(1)", opacity: 0.88 }}
                  />
                </div>

              </div>

              {/* Description */}
              <div>
                <div style={{ width: "40px", height: "1px", background: S.mute, marginBottom: "1.8rem" }} />
                <p style={{ color: S.dim, fontSize: "clamp(1.4rem, 2.25vw, 1.65rem)", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.2rem" }}>
                  At Ten Point Financial Group, we believe financial planning is personal.
                  We&apos;re not just advisors — we&apos;re a family that understands what it means
                  to protect what matters most.
                </p>
                <p style={{ color: S.dim, fontSize: "clamp(1.4rem, 2.25vw, 1.65rem)", lineHeight: 1.8, fontWeight: 300, marginBottom: "2.5rem" }}>
                  Our mission is to educate, empower, and guide families across the country
                  toward financial security — from your first retirement conversation to the
                  legacy you leave behind.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "2.8rem" }}>
                  {[
                    "Licensed nationwide (excl. NY & Puerto Rico)",
                    "Specializing in retirement, protection & legacy",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "clamp(1.4rem, 2.25vw, 1.65rem)", color: S.silver, fontWeight: 300 }}>
                      <div style={{ width: "4px", height: "4px", background: S.mute, borderRadius: "50%", flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/about"><GradientButton>Learn Our Story</GradientButton></Link>
              </div>
            </div>
          </div>
        </section>

      </div>{/* end shared wrapper */}

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section style={{ position: "relative", padding: "8rem 2rem 10rem", overflow: "hidden", textAlign: "center" }}>

          {/* SparklesCore full-width */}
          <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
          <SparklesCore
            particleColor="#ffffff"
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={40}
          />
        </div>

        <div style={{ position: "relative", zIndex: 2, maxWidth: "680px", margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "1.2rem", fontSize: "1.65rem", letterSpacing: "0.25em" }}>Start the conversation</p>

          <h2
            className="glow-text"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: S.white,
              fontSize: "clamp(2.25rem, 5.25vw, 4.125rem)",
              lineHeight: 1.1,
              marginBottom: "1.8rem",
            }}
          >
            Your legacy<br />starts today
          </h2>

          <div className="ornament" style={{ marginBottom: "1.8rem" }}>
            <span style={{ display: "block", width: "4px", height: "4px", background: "rgba(255,255,255,0.2)", borderRadius: "50%" }} />
          </div>

          <p style={{
            color: S.dim,
            fontSize: "clamp(1.4rem, 2.25vw, 1.65rem)",
            lineHeight: 1.8,
            marginBottom: "3rem",
            fontWeight: 300,
          }}>
            Schedule a complimentary consultation and let us help you build a financial
            foundation that protects your family for generations to come.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact"><SpotlightButton glowColor="purple" size="lg">Book Free Consultation</SpotlightButton></Link>
            <Link href="tel:+15868991003"><SpotlightButton glowColor="blue" size="lg">Call Us Now</SpotlightButton></Link>
          </div>
        </div>
        </section>

      </div>{/* end page marble wrapper */}
    </>
  );
}
