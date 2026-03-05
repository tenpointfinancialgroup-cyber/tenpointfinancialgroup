"use client";
import Link from "next/link";
import { SpotlightButton } from "@/components/ui/spotlight-button";
import { BeamsBackground } from "@/components/ui/beams-background";
import { SparklesCore } from "@/components/ui/sparkles";
import { CardCanvas, Card } from "@/components/ui/animated-glow-card";
import {
  Shield, FileText, Heart, Activity,
  PlusCircle, BarChart2, TrendingUp, MinusCircle,
} from "lucide-react";

const S = {
  white: "#ffffff", silver: "#c0c0c0", dim: "#888888",
  mute: "#444444", black: "#000000",
  border: "rgba(255,255,255,0.07)", borderM: "rgba(255,255,255,0.12)",
};

const services = [
  { num: "01", title: "Debt Elimination",       icon: MinusCircle, hue: 265, duration: 3.2,
    desc: "Proven strategies to eliminate what you owe faster — freeing cash flow to redirect into lasting financial security." },
  { num: "02", title: "Estate Planning & Trusts", icon: FileText,   hue: 228, duration: 4.1,
    desc: "The right trust structures to pass assets seamlessly — avoiding probate and keeping your wishes exactly as intended." },
  { num: "03", title: "Guaranteed Retirement",  icon: Shield,      hue: 248, duration: 3.7,
    desc: "Income strategies built around guaranteed vehicles so you never outlive your money, regardless of market conditions." },
  { num: "04", title: "Long Term Care",         icon: Activity,    hue: 285, duration: 4.6,
    desc: "Protect your assets and preserve your independence when an unexpected health event threatens decades of savings." },
  { num: "05", title: "Life Insurance",         icon: Heart,       hue: 275, duration: 3.4,
    desc: "Solutions that go beyond protection — building cash value, reducing taxes, and funding the legacy you leave behind." },
  { num: "06", title: "Health Insurance",       icon: BarChart2,   hue: 220, duration: 5.0,
    desc: "ACA, private, or group coverage — we compare plans across all major carriers to find the right fit for your budget." },
  { num: "07", title: "Medicare",               icon: PlusCircle,  hue: 255, duration: 3.9,
    desc: "Simplified guidance across supplements, advantage plans, and Part D so you get coverage without overpaying." },
  { num: "08", title: "Alternative Services",   icon: TrendingUp,  hue: 238, duration: 4.4,
    desc: "Real estate, tax planning, property & casualty insurance, and Medicaid — additional strategies to round out your complete financial picture." },
];

export default function Services() {
  return (
    <BeamsBackground intensity="medium" className="flex flex-col">

      {/* Single full-page starry overlay — fixed so it covers full viewport width/height */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 2 }}>
        <SparklesCore particleColor="#ffffff" background="transparent" minSize={0.4} maxSize={1.2} particleDensity={35} />
      </div>

      {/* ── HERO + SERVICES ───────────────────────────────────────────── */}
      <div style={{ position: "relative", zIndex: 3, padding: "8rem 2rem 6rem", maxWidth: "1260px", margin: "0 auto", width: "100%" }}>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="eyebrow" style={{ marginBottom: "1.2rem", fontSize: "1.65rem", letterSpacing: "0.25em" }}>What We Offer</p>
          <div style={{ width: "320px", height: "1px", background: S.mute, margin: "0 auto 1.8rem" }} />
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            fontWeight: 600, color: S.white, lineHeight: 1.1, marginBottom: "1.5rem",
          }}>
            Comprehensive<br />Financial Services
          </h1>
          <p style={{ color: S.dim, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", lineHeight: 1.8, fontWeight: 300, maxWidth: "520px", margin: "0 auto 2.5rem" }}>
            A full suite of services designed to protect your family, grow your wealth, and build a legacy that lasts.
          </p>
          <Link href="/contact">
            <SpotlightButton glowColor="blue" size="lg">Schedule Consultation</SpotlightButton>
          </Link>
        </div>

        {/* Top 4 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-4">
          {services.slice(0, 4).map((svc) => {
            const Icon = svc.icon;
            return (
              <CardCanvas key={svc.title} className="min-h-[14rem]">
                <Card hue={svc.hue} duration={svc.duration} className="p-8 md:p-12 h-full">
                  <div className="flex flex-col gap-6 h-full" style={{ margin: "1.25rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <h3 style={{
                        fontFamily: "'Playfair Display', serif",
                        color: S.white,
                        fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
                        lineHeight: 1.2,
                        fontWeight: 600,
                        maxWidth: "80%",
                      }}>{svc.title}</h3>
                      <div className="w-fit rounded-lg border border-white/10 bg-white/5 p-2 shrink-0">
                        <Icon className="h-4 w-4 text-white/50" strokeWidth={1.4} />
                      </div>
                    </div>
                    <div style={{ width: "32px", height: "1px", background: S.mute }} />
                    <p style={{ color: S.dim, fontSize: "clamp(1rem, 1.5vw, 1.125rem)", lineHeight: 1.8, fontWeight: 300 }}>{svc.desc}</p>
                  </div>
                </Card>
              </CardCanvas>
            );
          })}
        </div>

        {/* Bottom 4 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.slice(4).map((svc) => {
            const Icon = svc.icon;
            return (
              <CardCanvas key={svc.title} className="min-h-[14rem]">
                <Card hue={svc.hue} duration={svc.duration} className="p-8 md:p-12 h-full">
                  <div className="flex flex-col gap-6 h-full" style={{ margin: "1.25rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <h3 style={{
                        fontFamily: "'Playfair Display', serif",
                        color: S.white,
                        fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
                        lineHeight: 1.2,
                        fontWeight: 600,
                        maxWidth: "80%",
                      }}>{svc.title}</h3>
                      <div className="w-fit rounded-lg border border-white/10 bg-white/5 p-2 shrink-0">
                        <Icon className="h-4 w-4 text-white/50" strokeWidth={1.4} />
                      </div>
                    </div>
                    <div style={{ width: "32px", height: "1px", background: S.mute }} />
                    <p style={{ color: S.dim, fontSize: "clamp(1rem, 1.5vw, 1.125rem)", lineHeight: 1.8, fontWeight: 300 }}>{svc.desc}</p>
                  </div>
                </Card>
              </CardCanvas>
            );
          })}
        </div>{/* end bottom 4 */}
        </div>{/* end content above sparkles */}
      </div>{/* end hero+services outer */}

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", zIndex: 3, padding: "6rem 2rem 8rem", textAlign: "center" }}>
        <div style={{ position: "relative", zIndex: 1, maxWidth: "640px", margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "1.2rem", fontSize: "1.65rem", letterSpacing: "0.25em" }}>Not Sure Where to Start?</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: S.white, fontSize: "clamp(2.25rem, 5.25vw, 4.125rem)", lineHeight: 1.1, marginBottom: "1.8rem" }}>
            Let us find<br />the right fit
          </h2>
          <div style={{ width: "4px", height: "4px", background: "rgba(255,255,255,0.2)", borderRadius: "50%", margin: "0 auto 1.8rem" }} />
          <p style={{ color: S.dim, fontSize: "clamp(1.4rem, 2.25vw, 1.65rem)", lineHeight: 1.8, fontWeight: 300, marginBottom: "3rem" }}>
            Schedule a free consultation and we&apos;ll walk you through exactly which services fit your situation — no pressure, no commitment.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact"><SpotlightButton glowColor="purple" size="lg">Book Free Consultation</SpotlightButton></Link>
            <Link href="tel:+15868991003"><SpotlightButton glowColor="blue" size="lg">Call Us Now</SpotlightButton></Link>
          </div>
        </div>
      </section>
    </BeamsBackground>
  );
}
