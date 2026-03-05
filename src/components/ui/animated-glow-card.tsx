"use client";
import React from "react";

const animatedGlowCardStyles = `
  .card-canvas {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  .card-backdrop {
    position: absolute;
    inset: 0;
    border-radius: 14px;
    pointer-events: none;
    z-index: 0;
  }

  .glow-card {
    position: relative;
    z-index: 1;
    height: 100%;
    border-radius: 12px;
    background: rgba(8, 8, 18, 0.82);
    border: 1px solid rgba(255, 255, 255, 0.07);
    overflow: hidden;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
    backdrop-filter: blur(12px);
  }

  .border-element {
    position: absolute;
    pointer-events: none;
    z-index: 10;
  }

  .border-top {
    top: 0; left: 0;
    height: 2px; width: 100%;
    background: linear-gradient(90deg, transparent 0%, hsla(var(--agc-hue, 260), 80%, 72%, 0.95) 50%, transparent 100%);
    animation: agc-slide-right var(--agc-dur, 3.5s) ease-in-out infinite;
    filter: blur(1px);
  }

  .border-bottom {
    bottom: 0; left: 0;
    height: 2px; width: 100%;
    background: linear-gradient(90deg, transparent 0%, hsla(calc(var(--agc-hue, 260) + 25), 80%, 72%, 0.95) 50%, transparent 100%);
    animation: agc-slide-left var(--agc-dur, 3.5s) ease-in-out infinite;
    animation-delay: calc(var(--agc-dur, 3.5s) * 0.5);
    filter: blur(1px);
  }

  .border-left {
    left: 0; top: 0;
    width: 2px; height: 100%;
    background: linear-gradient(180deg, transparent 0%, hsla(calc(var(--agc-hue, 260) - 20), 80%, 72%, 0.95) 50%, transparent 100%);
    animation: agc-slide-down var(--agc-dur, 3.5s) ease-in-out infinite;
    animation-delay: calc(var(--agc-dur, 3.5s) * 0.25);
    filter: blur(1px);
  }

  .border-right {
    right: 0; top: 0;
    width: 2px; height: 100%;
    background: linear-gradient(180deg, transparent 0%, hsla(calc(var(--agc-hue, 260) + 10), 80%, 72%, 0.95) 50%, transparent 100%);
    animation: agc-slide-up var(--agc-dur, 3.5s) ease-in-out infinite;
    animation-delay: calc(var(--agc-dur, 3.5s) * 0.75);
    filter: blur(1px);
  }

  @keyframes agc-slide-right {
    0%   { transform: translateX(-110%); opacity: 0; }
    8%   { opacity: 1; }
    92%  { opacity: 1; }
    100% { transform: translateX(110%); opacity: 0; }
  }
  @keyframes agc-slide-left {
    0%   { transform: translateX(110%); opacity: 0; }
    8%   { opacity: 1; }
    92%  { opacity: 1; }
    100% { transform: translateX(-110%); opacity: 0; }
  }
  @keyframes agc-slide-down {
    0%   { transform: translateY(-110%); opacity: 0; }
    8%   { opacity: 1; }
    92%  { opacity: 1; }
    100% { transform: translateY(110%); opacity: 0; }
  }
  @keyframes agc-slide-up {
    0%   { transform: translateY(110%); opacity: 0; }
    8%   { opacity: 1; }
    92%  { opacity: 1; }
    100% { transform: translateY(-110%); opacity: 0; }
  }

  .card-content {
    position: relative;
    z-index: 2;
    height: 100%;
  }
`;

interface CardCanvasProps {
  children: React.ReactNode;
  className?: string;
}

const CardCanvas = ({ children, className = "" }: CardCanvasProps) => {
  return (
    <div className={`card-canvas ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: animatedGlowCardStyles }} />
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter width="3000%" x="-1000%" height="3000%" y="-1000%" id="unopaq">
          <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 3 0" />
        </filter>
      </svg>
      <div className="card-backdrop" />
      {children}
    </div>
  );
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** HSL hue (0–360) for the traveling border glow */
  hue?: number;
  /** Animation cycle duration in seconds */
  duration?: number;
}

const Card = ({ children, className = "", hue = 260, duration = 3.5 }: CardProps) => {
  return (
    <div
      className={`glow-card ${className}`}
      style={{
        "--agc-hue": hue,
        "--agc-dur": `${duration}s`,
      } as React.CSSProperties}
    >
      <div className="border-element border-left" />
      <div className="border-element border-right" />
      <div className="border-element border-top" />
      <div className="border-element border-bottom" />
      <div className="card-content">{children}</div>
    </div>
  );
};

export { CardCanvas, Card };
