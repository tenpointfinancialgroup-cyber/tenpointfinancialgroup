"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import { GlowCard } from "@/components/ui/spotlight-card";
import { EtherealBeams } from "@/components/ui/ethereal-beams";
import { BookOpen, Users, Star, Shield } from "lucide-react";

const S = {
  white: "#ffffff",
  silver: "#c0c0c0",
  dim: "#888888",
  mute: "#444444",
  black: "#000000",
  border: "rgba(255,255,255,0.07)",
  borderM: "rgba(255,255,255,0.12)",
};

const values = [
  { title: "Education First", icon: BookOpen, desc: "We believe an informed client is a confident client. Every conversation starts with making sure you understand your options — no jargon, no pressure." },
  { title: "Integrity Always", icon: Shield, desc: "We are independent advisors. We are not beholden to any single carrier or product line. Our only obligation is to you and your best interest." },
  { title: "Family-Centered", icon: Users, desc: "We treat every client like family. That means honest conversations, long-term relationships, and guidance that goes beyond a single transaction." },
  { title: "Legacy-Driven", icon: Star, desc: "Everything we do is built around your future and the future of those you love. We think in generations, not quarters." },
];

const glowColors: Array<"purple" | "blue" | "green" | "orange"> = ["purple", "blue", "green", "orange"];

export default function About() {
  return (
    <div style={{ position: "relative", background: S.black }}>

      {/* ── FIXED BACKGROUND — sits behind all sections ───────────────── */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <EtherealBeams beamWidth={2.5} beamHeight={18} beamNumber={15} lightColor="#ffffff" speed={2.5} noiseIntensity={2} scale={0.15} rotation={43} />
      </div>
      <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "fixed", inset: 0, zIndex: 2, pointerEvents: "none" }}>
        <SparklesCore particleColor="#ffffff" background="transparent" minSize={0.4} maxSize={1.2} particleDensity={35} />
      </div>

      {/* ── WHAT WE STAND FOR ─────────────────────────────────────────── */}
      <section style={{ position: "relative", zIndex: 3, padding: "8rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "5rem", maxWidth: "600px" }}>
            <p className="eyebrow" style={{ marginBottom: "1.2rem", fontSize: "1.65rem", letterSpacing: "0.25em" }}>What We Stand For</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: S.white, fontSize: "clamp(2.25rem, 5.25vw, 4.125rem)", lineHeight: 1.1, marginBottom: "1.2rem" }}>
              Four Cornerstones<br />One Mission
            </h2>
            <p style={{ color: S.dim, fontSize: "clamp(1.4rem, 2.25vw, 1.65rem)", lineHeight: 1.8, fontWeight: 300, maxWidth: "440px" }}>
              Everything we do is grounded in these principles — built to serve your family, not just your finances.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-4">
            {[
              { word: "We Educate", icon: BookOpen, desc: "We teach you about the available strategies, tools and offer guidance on all your options. No cost, no obligation." },
              { word: "We Consult", icon: Users, desc: "We get to know your needs and goals first, then recommend strategies that fit your specific situation — no one size fits all here." },
              { word: "We Work With Everyone", icon: Star, desc: "We work with clients at all stages in life. Our clients are beginners looking to build wealth and those looking to preserve it." },
              { word: "We're Straightforward", icon: Shield, desc: "You'll get honest feedback and quick responses. We communicate thoroughly and efficiently and make sure someone's there by your side." },
            ].map((p, idx) => {
              const Icon = p.icon;
              const areas = ["md:[grid-area:1/1/2/7]", "md:[grid-area:1/7/2/13]", "md:[grid-area:2/1/3/7]", "md:[grid-area:2/7/3/13]"];
              const gc: Array<"purple" | "blue" | "green" | "orange"> = ["purple", "blue", "green", "orange"];
              return (
                <li key={p.word} className={`min-h-[14rem] list-none ${areas[idx]}`}>
                  <GlowCard glowColor={gc[idx]} customSize className="h-full">
                    <div className="relative flex h-full flex-col items-center gap-6">
                      <div className="flex flex-col items-center gap-4 w-full">
                        <div className="w-fit rounded-lg border-[0.75px] border-white/10 bg-white/5 p-2">
                          <Icon className="h-4 w-4 text-white/50" strokeWidth={1.4} />
                        </div>
                        <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-semibold leading-snug tracking-tight md:text-3xl text-white text-center">
                          {p.word}
                        </h3>
                        <p className="text-base leading-relaxed md:text-lg text-white/50 text-center">{p.desc}</p>
                      </div>
                    </div>
                  </GlowCard>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── HERO — Who We Are ─────────────────────────────────────────── */}
      <section style={{ position: "relative", zIndex: 3, display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem 2rem" }}>
        <div style={{ textAlign: "center", maxWidth: "820px" }}>
          <p className="eyebrow" style={{ marginBottom: "1.2rem", fontSize: "1.65rem", letterSpacing: "0.25em" }}>Who We Are</p>
          <div style={{ width: "280px", height: "1px", background: S.mute, margin: "0 auto 1.8rem" }} />
          <h1 className="glow-text" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 600, color: S.white, lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.01em" }}>
            A Family Built on Trust
          </h1>
          <p style={{ fontSize: "clamp(1.4rem, 2.25vw, 1.65rem)", color: S.dim, lineHeight: 1.8, fontWeight: 300, maxWidth: "560px", margin: "0 auto 2rem" }}>
            Ten Point Financial Group was founded on a simple belief: every American family deserves access to clear, honest, and comprehensive financial guidance.
          </p>
          <p style={{ fontSize: "clamp(1.4rem, 2.25vw, 1.65rem)", color: S.silver, lineHeight: 1.8, fontWeight: 300, maxWidth: "680px", margin: "0 auto", fontStyle: "italic" }}>
            At Ten Point Financial Group, our mission is to empower individuals, families, and businesses with clarity, confidence, and customized financial solutions. We begin by protecting what matters most — health and legacy — through expert guidance in financial services, ensuring our clients&apos; immediate needs are met with integrity and care.
          </p>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────────────── */}
      <section id="story" style={{ position: "relative", zIndex: 3, padding: "4rem 2rem 8rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "1.2rem", fontSize: "1.65rem", letterSpacing: "0.25em" }}>Our Story</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.25rem, 5.25vw, 4.125rem)", color: S.white, lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Built From Purpose,<br />Not Profit
          </h2>
          <div style={{ width: "40px", height: "1px", background: S.mute, marginBottom: "2rem" }} />
          <p style={{ fontSize: "clamp(1.4rem, 2.25vw, 1.65rem)", color: S.dim, lineHeight: 1.8, fontWeight: 300, marginBottom: "1.4rem" }}>
            Ten Point Financial Group was born from a desire to do things differently. Too many families are sold products they don&apos;t understand by advisors who prioritize commission over care. We set out to change that.
          </p>
          <p style={{ fontSize: "clamp(1.4rem, 2.25vw, 1.65rem)", color: S.dim, lineHeight: 1.8, fontWeight: 300, marginBottom: "1.4rem" }}>
            As an independent agency, we work with dozens of top-rated carriers — meaning we can find the right fit for your situation, not push a one-size-fits-all solution.
          </p>
          <p style={{ fontSize: "clamp(1.4rem, 2.25vw, 1.65rem)", color: S.dim, lineHeight: 1.8, fontWeight: 300 }}>
            Whether you&apos;re just starting to think about retirement, navigating Medicare for the first time, or building a legacy plan for your grandchildren — we are here for all of it.
          </p>
        </div>
      </section>

      {/* ── CORE VALUES ───────────────────────────────────────────────── */}
      <section style={{ position: "relative", zIndex: 3, padding: "4rem 2rem 8rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <p className="eyebrow" style={{ marginBottom: "1.2rem", fontSize: "1.65rem", letterSpacing: "0.25em" }}>What Drives Us</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.25rem, 5.25vw, 4.125rem)", color: S.white, lineHeight: 1.1 }}>
              Our Core Values
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-4">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <li key={v.title} className="min-h-[14rem] list-none">
                  <GlowCard glowColor={glowColors[idx]} customSize className="h-full">
                    <div className="relative flex h-full flex-col items-center gap-6">
                      <div className="flex flex-col items-center gap-4 w-full">
                        <div className="w-fit rounded-lg border-[0.75px] border-white/10 bg-white/5 p-2">
                          <Icon className="h-4 w-4 text-white/50" strokeWidth={1.4} />
                        </div>
                        <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-semibold leading-snug tracking-tight md:text-3xl text-white text-center">
                          {v.title}
                        </h3>
                        <p className="text-base leading-relaxed md:text-lg text-white/50 text-center">{v.desc}</p>
                      </div>
                    </div>
                  </GlowCard>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

    </div>
  );
}
