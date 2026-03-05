"use client";

import React, { useRef, useEffect, useState, createElement, useMemo, useCallback, memo } from "react";

export const Component = () => {
    return (
        <div className='bg-black h-screen w-screen flex justify-center items-center'>
            <VaporizeTextCycle
                texts={["21st.dev", "Is", "Cool"]}
                font={{ fontFamily: "Inter, sans-serif", fontSize: "70px", fontWeight: 600 }}
                color="rgb(255,255, 255)"
                spread={5}
                density={5}
                animation={{ vaporizeDuration: 2, fadeInDuration: 1, waitDuration: 0.5 }}
                direction="left-to-right"
                alignment="center"
                tag={Tag.H1}
            />
        </div>
    );
};

export enum Tag {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  P = "p",
}

type VaporizeTextCycleProps = {
  texts: string[];
  font?: { fontFamily?: string; fontSize?: string; fontWeight?: number };
  color?: string;
  spread?: number;
  density?: number;
  animation?: { vaporizeDuration?: number; fadeInDuration?: number; waitDuration?: number };
  direction?: "left-to-right" | "right-to-left";
  alignment?: "left" | "center" | "right";
  tag?: Tag;
};

type Particle = {
  x: number; y: number; originalX: number; originalY: number;
  color: string; opacity: number; originalAlpha: number;
  velocityX: number; velocityY: number; angle: number; speed: number;
  shouldFadeQuickly?: boolean;
};

type TextBoundaries = { left: number; right: number; width: number };

declare global {
  interface HTMLCanvasElement { textBoundaries?: TextBoundaries }
}

function VaporizeTextCycleCore({
  texts = ["Next.js", "React"],
  font = { fontFamily: "sans-serif", fontSize: "50px", fontWeight: 400 },
  color = "rgb(255, 255, 255)",
  spread = 5,
  density = 5,
  animation = { vaporizeDuration: 2, fadeInDuration: 1, waitDuration: 0.5 },
  direction = "left-to-right",
  alignment = "center",
  tag = Tag.P,
}: VaporizeTextCycleProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const isInView = useIsInView(wrapperRef as React.RefObject<HTMLElement>);
  const lastFontRef = useRef<string | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animationState, setAnimationState] = useState<"static" | "vaporizing" | "fadingIn" | "waiting">("static");
  const vaporizeProgressRef = useRef(0);
  const fadeOpacityRef = useRef(0);
  const [wrapperSize, setWrapperSize] = useState({ width: 0, height: 0 });
  const transformedDensity = transformValue(density, [0, 10], [0.3, 1], true);

  const globalDpr = useMemo(() => (typeof window !== "undefined" ? window.devicePixelRatio * 1.5 || 1 : 1), []);

  const animationDurations = useMemo(() => ({
    VAPORIZE_DURATION: (animation.vaporizeDuration ?? 2) * 1000,
    FADE_IN_DURATION: (animation.fadeInDuration ?? 1) * 1000,
    WAIT_DURATION: (animation.waitDuration ?? 0.5) * 1000,
  }), [animation.vaporizeDuration, animation.fadeInDuration, animation.waitDuration]);

  const fontConfig = useMemo(() => {
    const fontSize = parseInt(font.fontSize?.replace("px", "") || "50");
    const VAPORIZE_SPREAD = calculateVaporizeSpread(fontSize);
    return { fontSize, MULTIPLIED_VAPORIZE_SPREAD: VAPORIZE_SPREAD * spread };
  }, [font.fontSize, spread]);

  const memoizedUpdateParticles = useCallback((particles: Particle[], vaporizeX: number, deltaTime: number) =>
    updateParticles(particles, vaporizeX, deltaTime, fontConfig.MULTIPLIED_VAPORIZE_SPREAD, animationDurations.VAPORIZE_DURATION, direction, transformedDensity),
    [fontConfig.MULTIPLIED_VAPORIZE_SPREAD, animationDurations.VAPORIZE_DURATION, direction, transformedDensity]);

  const memoizedRenderParticles = useCallback((ctx: CanvasRenderingContext2D, particles: Particle[]) =>
    renderParticles(ctx, particles, globalDpr), [globalDpr]);

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setAnimationState("vaporizing"), 0);
      return () => clearTimeout(t);
    } else {
      setAnimationState("static");
      if (animationFrameRef.current) { cancelAnimationFrame(animationFrameRef.current); animationFrameRef.current = null; }
    }
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;
    let lastTime = performance.now();
    let frameId: number;

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx || !particlesRef.current.length) { frameId = requestAnimationFrame(animate); return; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      switch (animationState) {
        case "static": memoizedRenderParticles(ctx, particlesRef.current); break;
        case "vaporizing": {
          vaporizeProgressRef.current += deltaTime * 100 / (animationDurations.VAPORIZE_DURATION / 1000);
          const tb = canvas.textBoundaries;
          if (!tb) break;
          const progress = Math.min(100, vaporizeProgressRef.current);
          const vaporizeX = direction === "left-to-right" ? tb.left + tb.width * progress / 100 : tb.right - tb.width * progress / 100;
          const allVaporized = memoizedUpdateParticles(particlesRef.current, vaporizeX, deltaTime);
          memoizedRenderParticles(ctx, particlesRef.current);
          if (vaporizeProgressRef.current >= 100 && allVaporized) {
            setCurrentTextIndex(prev => (prev + 1) % texts.length);
            setAnimationState("fadingIn");
            fadeOpacityRef.current = 0;
          }
          break;
        }
        case "fadingIn": {
          fadeOpacityRef.current += deltaTime * 1000 / animationDurations.FADE_IN_DURATION;
          ctx.save(); ctx.scale(globalDpr, globalDpr);
          particlesRef.current.forEach(p => {
            p.x = p.originalX; p.y = p.originalY;
            const opacity = Math.min(fadeOpacityRef.current, 1) * p.originalAlpha;
            ctx.fillStyle = p.color.replace(/[\d.]+\)$/, `${opacity})`);
            ctx.fillRect(p.x / globalDpr, p.y / globalDpr, 1, 1);
          });
          ctx.restore();
          if (fadeOpacityRef.current >= 1) {
            setAnimationState("waiting");
            setTimeout(() => { setAnimationState("vaporizing"); vaporizeProgressRef.current = 0; resetParticles(particlesRef.current); }, animationDurations.WAIT_DURATION);
          }
          break;
        }
        case "waiting": memoizedRenderParticles(ctx, particlesRef.current); break;
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => { if (frameId) cancelAnimationFrame(frameId); };
  }, [animationState, isInView, texts.length, direction, globalDpr, memoizedUpdateParticles, memoizedRenderParticles, animationDurations]);

  useEffect(() => {
    renderCanvas({ framerProps: { texts, font, color, alignment }, canvasRef: canvasRef as React.RefObject<HTMLCanvasElement>, wrapperSize, particlesRef, globalDpr, currentTextIndex, transformedDensity });
    const currentFont = font.fontFamily || "sans-serif";
    return handleFontChange({ currentFont, lastFontRef, canvasRef: canvasRef as React.RefObject<HTMLCanvasElement>, wrapperSize, particlesRef, globalDpr, currentTextIndex, transformedDensity, framerProps: { texts, font, color, alignment } });
  }, [texts, font, color, alignment, wrapperSize, currentTextIndex, globalDpr, transformedDensity]);

  useEffect(() => {
    const container = wrapperRef.current;
    if (!container) return;
    const ro = new ResizeObserver(entries => {
      for (const e of entries) setWrapperSize({ width: e.contentRect.width, height: e.contentRect.height });
      renderCanvas({ framerProps: { texts, font, color, alignment }, canvasRef: canvasRef as React.RefObject<HTMLCanvasElement>, wrapperSize: { width: container.clientWidth, height: container.clientHeight }, particlesRef, globalDpr, currentTextIndex, transformedDensity });
    });
    ro.observe(container);
    return () => ro.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperRef.current]);

  useEffect(() => {
    if (wrapperRef.current) {
      const r = wrapperRef.current.getBoundingClientRect();
      setWrapperSize({ width: r.width, height: r.height });
    }
  }, []);

  return (
    <div ref={wrapperRef} style={{ width: "100%", height: "100%", pointerEvents: "none" }}>
      <canvas ref={canvasRef} style={{ minWidth: "30px", minHeight: "20px", pointerEvents: "none" }} />
      <SeoElement tag={tag} texts={texts} />
    </div>
  );
}

const SeoElement = memo(({ tag = Tag.P, texts }: { tag: Tag; texts: string[] }) => {
  const safeTag = Object.values(Tag).includes(tag) ? tag : "p";
  return createElement(safeTag, { style: { position: "absolute", width: "0", height: "0", overflow: "hidden", userSelect: "none", pointerEvents: "none" } }, texts?.join(" ") ?? "");
});
SeoElement.displayName = "SeoElement";

function handleFontChange({ currentFont, lastFontRef, canvasRef, wrapperSize, particlesRef, globalDpr, currentTextIndex, transformedDensity, framerProps }: { currentFont: string; lastFontRef: React.MutableRefObject<string | null>; canvasRef: React.RefObject<HTMLCanvasElement>; wrapperSize: { width: number; height: number }; particlesRef: React.MutableRefObject<Particle[]>; globalDpr: number; currentTextIndex: number; transformedDensity: number; framerProps: VaporizeTextCycleProps }) {
  if (currentFont !== lastFontRef.current) {
    lastFontRef.current = currentFont;
    const id = setTimeout(() => { cleanup({ canvasRef, particlesRef }); renderCanvas({ framerProps, canvasRef, wrapperSize, particlesRef, globalDpr, currentTextIndex, transformedDensity }); }, 1000);
    return () => { clearTimeout(id); cleanup({ canvasRef, particlesRef }); };
  }
  return undefined;
}

function cleanup({ canvasRef, particlesRef }: { canvasRef: React.RefObject<HTMLCanvasElement>; particlesRef: React.MutableRefObject<Particle[]> }) {
  const ctx = canvasRef.current?.getContext("2d");
  if (canvasRef.current && ctx) ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  if (particlesRef.current) particlesRef.current = [];
}

function renderCanvas({ framerProps, canvasRef, wrapperSize, particlesRef, globalDpr, currentTextIndex, transformedDensity }: { framerProps: VaporizeTextCycleProps; canvasRef: React.RefObject<HTMLCanvasElement>; wrapperSize: { width: number; height: number }; particlesRef: React.MutableRefObject<Particle[]>; globalDpr: number; currentTextIndex: number; transformedDensity: number }) {
  const canvas = canvasRef.current;
  if (!canvas || !wrapperSize.width || !wrapperSize.height) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const { width, height } = wrapperSize;
  canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
  canvas.width = Math.floor(width * globalDpr); canvas.height = Math.floor(height * globalDpr);
  const fontSize = parseInt(framerProps.font?.fontSize?.replace("px", "") || "50");
  const font = `${framerProps.font?.fontWeight ?? 400} ${fontSize * globalDpr}px ${framerProps.font?.fontFamily ?? "sans-serif"}`;
  const color = parseColor(framerProps.color ?? "rgb(153, 153, 153)");
  const textY = canvas.height / 2;
  const currentText = framerProps.texts[currentTextIndex] || "";
  const textX = framerProps.alignment === "center" ? canvas.width / 2 : framerProps.alignment === "left" ? 0 : canvas.width;
  const { particles, textBoundaries } = createParticles(ctx, canvas, currentText, textX, textY, font, color, framerProps.alignment || "left");
  particlesRef.current = particles;
  canvas.textBoundaries = textBoundaries;
}

function createParticles(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, text: string, textX: number, textY: number, font: string, color: string, alignment: "left" | "center" | "right") {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color; ctx.font = font; ctx.textAlign = alignment; ctx.textBaseline = "middle";
  ctx.imageSmoothingQuality = "high"; ctx.imageSmoothingEnabled = true;
  if ('fontKerning' in ctx) (ctx as any).fontKerning = "normal";
  if ('textRendering' in ctx) (ctx as any).textRendering = "geometricPrecision";
  const metrics = ctx.measureText(text);
  const textWidth = metrics.width;
  const textLeft = alignment === "center" ? textX - textWidth / 2 : alignment === "left" ? textX : textX - textWidth;
  const textBoundaries = { left: textLeft, right: textLeft + textWidth, width: textWidth };
  ctx.fillText(text, textX, textY);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  const currentDPR = canvas.width / parseInt(canvas.style.width);
  const sampleRate = Math.max(1, Math.round(currentDPR / 3));
  const particles: Particle[] = [];
  for (let y = 0; y < canvas.height; y += sampleRate) {
    for (let x = 0; x < canvas.width; x += sampleRate) {
      const idx = (y * canvas.width + x) * 4;
      if (data[idx + 3] > 0) {
        const originalAlpha = data[idx + 3] / 255 * (sampleRate / currentDPR);
        particles.push({ x, y, originalX: x, originalY: y, color: `rgba(${data[idx]}, ${data[idx+1]}, ${data[idx+2]}, ${originalAlpha})`, opacity: originalAlpha, originalAlpha, velocityX: 0, velocityY: 0, angle: 0, speed: 0 });
      }
    }
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  return { particles, textBoundaries };
}

function updateParticles(particles: Particle[], vaporizeX: number, deltaTime: number, MULTIPLIED_VAPORIZE_SPREAD: number, VAPORIZE_DURATION: number, direction: string, density: number) {
  let allVaporized = true;
  particles.forEach(p => {
    const shouldVaporize = direction === "left-to-right" ? p.originalX <= vaporizeX : p.originalX >= vaporizeX;
    if (shouldVaporize) {
      if (p.speed === 0) {
        p.angle = Math.random() * Math.PI * 2;
        p.speed = (Math.random() * 1 + 0.5) * MULTIPLIED_VAPORIZE_SPREAD;
        p.velocityX = Math.cos(p.angle) * p.speed;
        p.velocityY = Math.sin(p.angle) * p.speed;
        p.shouldFadeQuickly = Math.random() > density;
      }
      if (p.shouldFadeQuickly) {
        p.opacity = Math.max(0, p.opacity - deltaTime);
      } else {
        const dx = p.originalX - p.x, dy = p.originalY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const damp = Math.max(0.95, 1 - dist / (100 * MULTIPLIED_VAPORIZE_SPREAD));
        const rs = MULTIPLIED_VAPORIZE_SPREAD * 3;
        p.velocityX = (p.velocityX + (Math.random() - 0.5) * rs + dx * 0.002) * damp;
        p.velocityY = (p.velocityY + (Math.random() - 0.5) * rs + dy * 0.002) * damp;
        const maxV = MULTIPLIED_VAPORIZE_SPREAD * 2;
        const curV = Math.sqrt(p.velocityX ** 2 + p.velocityY ** 2);
        if (curV > maxV) { p.velocityX *= maxV / curV; p.velocityY *= maxV / curV; }
        p.x += p.velocityX * deltaTime * 20;
        p.y += p.velocityY * deltaTime * 10;
        p.opacity = Math.max(0, p.opacity - deltaTime * 0.25 * (2000 / VAPORIZE_DURATION));
      }
      if (p.opacity > 0.01) allVaporized = false;
    } else { allVaporized = false; }
  });
  return allVaporized;
}

function renderParticles(ctx: CanvasRenderingContext2D, particles: Particle[], globalDpr: number) {
  ctx.save(); ctx.scale(globalDpr, globalDpr);
  particles.forEach(p => {
    if (p.opacity > 0) { ctx.fillStyle = p.color.replace(/[\d.]+\)$/, `${p.opacity})`); ctx.fillRect(p.x / globalDpr, p.y / globalDpr, 1, 1); }
  });
  ctx.restore();
}

function resetParticles(particles: Particle[]) {
  particles.forEach(p => { p.x = p.originalX; p.y = p.originalY; p.opacity = p.originalAlpha; p.speed = 0; p.velocityX = 0; p.velocityY = 0; });
}

function calculateVaporizeSpread(fontSize: number) {
  const size = typeof fontSize === "string" ? parseInt(fontSize as any) : fontSize;
  const pts = [{ size: 20, spread: 0.2 }, { size: 50, spread: 0.5 }, { size: 100, spread: 1.5 }];
  if (size <= pts[0].size) return pts[0].spread;
  if (size >= pts[pts.length - 1].size) return pts[pts.length - 1].spread;
  let i = 0;
  while (i < pts.length - 1 && pts[i + 1].size < size) i++;
  return pts[i].spread + (size - pts[i].size) * (pts[i + 1].spread - pts[i].spread) / (pts[i + 1].size - pts[i].size);
}

function parseColor(color: string) {
  const rgba = color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
  if (rgba) return `rgba(${rgba[1]}, ${rgba[2]}, ${rgba[3]}, ${rgba[4]})`;
  const rgb = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (rgb) return `rgba(${rgb[1]}, ${rgb[2]}, ${rgb[3]}, 1)`;
  return "rgba(0, 0, 0, 1)";
}

function transformValue(input: number, inputRange: number[], outputRange: number[], clamp = false): number {
  const progress = (input - inputRange[0]) / (inputRange[1] - inputRange[0]);
  let result = outputRange[0] + progress * (outputRange[1] - outputRange[0]);
  if (clamp) result = outputRange[1] > outputRange[0] ? Math.min(Math.max(result, outputRange[0]), outputRange[1]) : Math.min(Math.max(result, outputRange[1]), outputRange[0]);
  return result;
}

function useIsInView(ref: React.RefObject<HTMLElement>) {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([e]) => setIsInView(e.isIntersecting), { threshold: 0, rootMargin: '50px' });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isInView;
}

// Default export
export default VaporizeTextCycleCore;

// Named export — CSS-based text cycler that inherits parent font styling (used in homepage hero h1)
export function VaporizeTextCycle({
  texts,
  vaporizeDuration = 2,
  fadeInDuration = 1,
  waitDuration = 2,
}: {
  texts: string[];
  vaporizeDuration?: number;
  fadeInDuration?: number;
  waitDuration?: number;
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hold = waitDuration * 1000;
    const fadeOut = vaporizeDuration * 1000;
    const fadeIn = fadeInDuration * 1000;

    const cycle = () => {
      // fade out
      setVisible(false);
      setTimeout(() => {
        setIndex(prev => (prev + 1) % texts.length);
        // fade in
        setVisible(true);
      }, fadeOut);
    };

    const id = setTimeout(cycle, hold);
    return () => clearTimeout(id);
  }, [index, texts.length, vaporizeDuration, fadeInDuration, waitDuration]);

  return (
    <span
      style={{
        display: "inline-block",
        opacity: visible ? 1 : 0,
        transition: `opacity ${visible ? fadeInDuration : vaporizeDuration}s ease`,
      }}
    >
      {texts[index]}
    </span>
  );
}
