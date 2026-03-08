"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import VaporizeTextCycleDefault, { Tag } from "@/components/ui/vapour-text-effect";

export default function Education() {
  const [fontSize, setFontSize] = useState("80px");

  useEffect(() => {
    const calc = () => {
      const size = Math.min(120, Math.max(36, window.innerWidth * 0.13));
      setFontSize(`${Math.round(size)}px`);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#000000",
      }}
    >
      {/* Marble background */}
      <Image
        src="/images/marble-dark.png"
        alt=""
        fill
        style={{ objectFit: "cover", opacity: 0.35, zIndex: 0 }}
        priority
      />

      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1 }} />

      {/* Stars */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}>
        <SparklesCore
          particleColor="#ffffff"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={40}
        />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 3, width: "100%", maxWidth: "1200px", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <VaporizeTextCycleDefault
          texts={["Coming Soon"]}
          font={{
            fontFamily: "'Playfair Display', serif",
            fontSize: fontSize,
            fontWeight: 600,
          }}
          color="rgb(255, 255, 255)"
          spread={5}
          density={5}
          animation={{ vaporizeDuration: 2.5, fadeInDuration: 1.2, waitDuration: 1.5 }}
          direction="left-to-right"
          alignment="center"
          tag={Tag.H1}
        />
      </div>
    </section>
  );
}
