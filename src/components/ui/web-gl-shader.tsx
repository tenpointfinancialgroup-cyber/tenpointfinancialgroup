"use client";

import { useEffect, useRef } from "react";

interface WebGLShaderProps {
  distortion?: number;
  className?: string;
}

const vertexShaderSource = `
  attribute vec4 a_position;
  void main() {
    gl_Position = a_position;
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_distortion;

  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(noise(i), noise(i + vec2(1.0, 0.0)), u.x),
      mix(noise(i + vec2(0.0, 1.0)), noise(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float val = 0.0;
    float amp = 0.5;
    float freq = 1.0;
    for (int i = 0; i < 5; i++) {
      val += amp * smoothNoise(p * freq);
      amp *= 0.5;
      freq *= 2.1;
    }
    return val;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float t = u_time * 0.12;

    vec2 q = vec2(fbm(uv + t), fbm(uv + vec2(1.0)));
    vec2 r = vec2(fbm(uv + 4.0 * q + vec2(1.7, 9.2) + 0.15 * t), fbm(uv + 4.0 * q + vec2(8.3, 2.8) + 0.12 * t));

    float f = fbm(uv + u_distortion * r);

    vec3 dark  = vec3(0.0, 0.0, 0.0);
    vec3 mid   = vec3(0.08, 0.08, 0.10);
    vec3 light = vec3(0.18, 0.18, 0.22);

    vec3 col = mix(dark, mid, clamp(f * f * 2.0, 0.0, 1.0));
    col = mix(col, light, clamp(length(q), 0.0, 1.0));
    col = mix(col, vec3(0.25, 0.25, 0.28), clamp(f * 0.5, 0.0, 1.0));

    gl_FragColor = vec4(col, 1.0);
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

export function WebGLShader({ distortion = 0.02, className }: WebGLShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const vs = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    const program = gl.createProgram()!;
    gl.attachShader(program, vs!);
    gl.attachShader(program, fs!);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uRes = gl.getUniformLocation(program, "u_resolution");
    const uDist = gl.getUniformLocation(program, "u_distortion");

    let start = Date.now();
    const FRAME_INTERVAL = 1000 / 30; // cap at 30fps
    let lastFrameTime = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = (now: number) => {
      rafRef.current = requestAnimationFrame(render);
      if (now - lastFrameTime < FRAME_INTERVAL) return;
      lastFrameTime = now;
      const t = (Date.now() - start) / 1000;
      gl.uniform1f(uTime, t);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uDist, distortion);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [distortion]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
