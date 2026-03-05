'use client';

const PARTICLES = [
  { x:  5, y: 15, s: 1.5, d: 0.0, dur: 8  },
  { x: 15, y: 62, s: 1.0, d: 1.3, dur: 6  },
  { x: 28, y: 38, s: 2.0, d: 0.7, dur: 9  },
  { x: 42, y: 85, s: 1.0, d: 2.1, dur: 7  },
  { x: 55, y: 22, s: 1.5, d: 0.3, dur: 10 },
  { x: 68, y: 70, s: 1.0, d: 1.8, dur: 6  },
  { x: 78, y: 45, s: 1.5, d: 0.9, dur: 8  },
  { x: 92, y: 30, s: 2.0, d: 2.5, dur: 7  },
  { x:  8, y: 55, s: 1.0, d: 1.1, dur: 9  },
  { x: 22, y: 90, s: 1.5, d: 0.4, dur: 8  },
  { x: 35, y: 12, s: 1.0, d: 3.2, dur: 6  },
  { x: 48, y: 67, s: 2.0, d: 1.6, dur: 10 },
  { x: 62, y: 35, s: 1.0, d: 0.8, dur: 7  },
  { x: 75, y: 80, s: 1.5, d: 2.9, dur: 8  },
  { x: 88, y: 58, s: 2.0, d: 0.2, dur: 9  },
  { x:  3, y: 78, s: 1.0, d: 1.7, dur: 6  },
  { x: 18, y: 42, s: 1.5, d: 3.4, dur: 8  },
  { x: 32, y: 25, s: 2.0, d: 0.6, dur: 7  },
  { x: 45, y: 92, s: 1.0, d: 2.3, dur: 9  },
  { x: 58, y: 50, s: 1.5, d: 1.0, dur: 10 },
  { x: 72, y: 18, s: 1.0, d: 2.7, dur: 6  },
  { x: 85, y: 75, s: 1.5, d: 0.1, dur: 8  },
  { x: 95, y: 88, s: 2.0, d: 1.5, dur: 7  },
  { x: 10, y: 35, s: 1.0, d: 3.8, dur: 9  },
  { x: 24, y: 72, s: 1.5, d: 0.9, dur: 8  },
  { x: 38, y: 55, s: 1.0, d: 2.0, dur: 6  },
  { x: 52, y: 28, s: 2.0, d: 1.4, dur: 10 },
  { x: 65, y: 95, s: 1.0, d: 0.3, dur: 7  },
  { x: 79, y: 62, s: 1.5, d: 2.6, dur: 8  },
  { x: 90, y: 42, s: 1.0, d: 1.9, dur: 9  },
  { x:  7, y: 88, s: 1.5, d: 3.1, dur: 6  },
  { x: 20, y: 18, s: 2.0, d: 0.5, dur: 8  },
  { x: 33, y: 65, s: 1.0, d: 1.8, dur: 7  },
  { x: 47, y: 45, s: 1.5, d: 2.4, dur: 9  },
  { x: 60, y: 82, s: 1.0, d: 0.7, dur: 10 },
  { x: 73, y: 28, s: 1.5, d: 3.6, dur: 6  },
  { x: 83, y: 55, s: 2.0, d: 1.2, dur: 8  },
  { x: 97, y: 72, s: 1.0, d: 0.4, dur: 7  },
  { x: 13, y: 48, s: 1.5, d: 2.8, dur: 9  },
  { x: 27, y: 95, s: 1.0, d: 1.6, dur: 8  },
  { x: 40, y: 32, s: 1.5, d: 0.2, dur: 6  },
  { x: 50, y: 75, s: 1.0, d: 3.0, dur: 10 },
  { x: 63, y: 10, s: 2.0, d: 2.2, dur: 7  },
  { x: 77, y: 90, s: 1.0, d: 0.8, dur: 8  },
  { x: 87, y: 22, s: 1.5, d: 1.5, dur: 9  },
];

export default function GoldParticles() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.s}px`,
            height: `${p.s}px`,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.9)',
            boxShadow: `0 0 ${p.s * 6}px rgba(255, 255, 255, 0.6)`,
            animation: `whiteFloat ${p.dur}s ${p.d}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}
