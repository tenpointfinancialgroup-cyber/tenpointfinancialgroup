"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children?: React.ReactNode;
  className?: string;
}

export function LiquidButton({ href, children, className, ...props }: LiquidButtonProps) {
  const classes = cn(
    "relative inline-flex items-center justify-center px-8 py-3 overflow-hidden",
    "font-raleway text-[0.72rem] font-medium tracking-[0.2em] uppercase",
    "text-white border border-white/20 transition-all duration-300",
    "hover:border-white/40 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]",
    "active:scale-[0.98]",
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        <GlassFilter />
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      <GlassFilter />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

function GlassFilter() {
  return (
    <span
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)",
        backdropFilter: "blur(2px)",
      }}
    />
  );
}
