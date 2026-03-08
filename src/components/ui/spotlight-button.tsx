"use client";

import React, { useEffect, useRef, ReactNode } from "react";

interface SpotlightButtonProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "green" | "red" | "orange";
  size?: "sm" | "lg";
  disabled?: boolean;
}

const glowColorMap = {
  blue:   { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green:  { base: 120, spread: 200 },
  red:    { base: 0,   spread: 200 },
  orange: { base: 30,  spread: 200 },
};

const spotlightButtonStyles = `
  .spotlight-btn[data-glow]::before,
  .spotlight-btn[data-glow]::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: calc(var(--radius) * 1px);
    background-attachment: fixed;
    background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
    background-repeat: no-repeat;
    background-position: 50% 50%;
    mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
  }
  .spotlight-btn[data-glow]::before {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)),
      transparent 100%
    );
    filter: brightness(2);
  }
  .spotlight-btn[data-glow]::after {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(0 100% 100% / var(--border-light-opacity, 1)),
      transparent 100%
    );
  }
`;

export const SpotlightButton: React.FC<SpotlightButtonProps> = ({
  children,
  className = "",
  glowColor = "blue",
  size = "sm",
  disabled = false,
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;
    const syncPointer = (e: PointerEvent) => {
      requestAnimationFrame(() => {
        el.style.setProperty("--x", e.clientX.toFixed(2));
        el.style.setProperty("--xp", (e.clientX / window.innerWidth).toFixed(2));
        el.style.setProperty("--y", e.clientY.toFixed(2));
        el.style.setProperty("--yp", (e.clientY / window.innerHeight).toFixed(2));
      });
    };
    document.addEventListener("pointermove", syncPointer, { passive: true });
    return () => document.removeEventListener("pointermove", syncPointer);
  }, []);

  const { base, spread } = glowColorMap[glowColor];

  const inlineStyles: React.CSSProperties & Record<string, string | number> = {
    "--base": base,
    "--spread": spread,
    "--radius": "8",
    "--border": "1.5",
    "--size": "180",
    "--outer": "1",
    "--border-size": "calc(var(--border, 1.5) * 1px)",
    "--spotlight-size": "calc(var(--size, 180) * 1px)",
    "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / 0.08),
      transparent
    )`,
    backgroundColor: "rgba(10,10,10,0.9)",
    backgroundSize: "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
    backgroundPosition: "50% 50%",
    backgroundAttachment: "fixed",
    border: "var(--border-size) solid rgba(255,255,255,0.1)",
    position: "relative",
    touchAction: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: size === "lg" ? "1rem 2.25rem" : "0.55rem 1.4rem",
    ...(size === "lg" ? { minWidth: "132px" } : {}),
    borderRadius: size === "lg" ? "11px" : "8px",
    cursor: "pointer",
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 700,
    fontSize: size === "lg" ? "1rem" : "0.85rem",
    letterSpacing: "0.08em",
    color: "#ffffff",
    whiteSpace: "nowrap",
    transition: "opacity 0.2s",
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: spotlightButtonStyles }} />
      <button
        ref={btnRef}
        data-glow
        disabled={disabled}
        className={`spotlight-btn ${className}`}
        style={{ ...inlineStyles as React.CSSProperties, opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "pointer" }}
      >
        {children}
      </button>
    </>
  );
};
