"use client";

import { useEffect, useRef, useCallback } from "react";

interface Color {
  r: number;
  g: number;
  b: number;
}

interface Cluster {
  x: number;
  y: number;
  radius: number;
  colorIdx: number;
}

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  color: Color;
  alpha: number;
  cluster: Cluster | null;
  isNode: boolean;
}

interface Pulse {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  from: { x: number; y: number; vx?: number; vy?: number; color: Color };
  to: { x: number; y: number; vx?: number; vy?: number; color: Color };
  progress: number;
  speed: number;
  length: number;
  lineWidth: number;
  glowWidth: number;
  colorFrom: Color;
  colorTo: Color;
  isStream: boolean;
}

const COLORS: Color[] = [
  { r: 124, g: 49, b: 178 },
  { r: 173, g: 65, b: 88 },
  { r: 232, g: 142, b: 64 },
  { r: 248, g: 180, b: 71 },
  { r: 250, g: 245, b: 239 },
];

const CONFIG = {
  particleCount: 140,
  clusterCount: 5,
  clusterRadius: 120,
  clusterGravity: 0.0003,
  connectionDist: 150,
  connectionDistCluster: 200,
  particleMinSize: 1,
  particleMaxSize: 3,
  baseSpeed: 0.12,
  mouseInfluenceRadius: 200,
  mouseRepelStrength: 0.08,
  pulseSpawnRate: 0.04,
  pulseSpeed: 2.0,
  pulseLength: 0.24,
  pulseLineWidth: 1.8,
  pulseGlowWidth: 8,
  pulseMaxActive: 30,
  streamSpawnInterval: 80,
  streamSpeed: 1.0,
  streamLength: 0.17,
  streamLineWidth: 2.2,
  streamGlowWidth: 14,
};

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<{
    W: number;
    H: number;
    dpr: number;
    particles: Particle[];
    clusters: Cluster[];
    pulses: Pulse[];
    mouse: { x: number; y: number };
    frameCount: number;
    rafId: number;
  }>({
    W: 0,
    H: 0,
    dpr: 1,
    particles: [],
    clusters: [],
    pulses: [],
    mouse: { x: -9999, y: -9999 },
    frameCount: 0,
    rafId: 0,
  });

  const generateClusters = useCallback((W: number, H: number): Cluster[] => {
    const positions = [
      { x: W * 0.5, y: H * 0.3 },
      { x: W * 0.62, y: H * 0.55 },
      { x: W * 0.74, y: H * 0.32 },
      { x: W * 0.83, y: H * 0.6 },
      { x: W * 0.92, y: H * 0.38 },
    ];
    return positions.slice(0, CONFIG.clusterCount).map((pos, i) => ({
      x: pos.x,
      y: pos.y,
      radius: CONFIG.clusterRadius + Math.random() * 60,
      colorIdx: i % COLORS.length,
    }));
  }, []);

  const createParticle = useCallback(
    (clusters: Cluster[], W: number, H: number): Particle => {
      const hasCluster = Math.random() < 0.6 && clusters.length > 0;
      const cluster = hasCluster
        ? clusters[Math.floor(Math.random() * clusters.length)]
        : null;

      let x: number, y: number;
      if (cluster) {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * cluster.radius;
        x = cluster.x + Math.cos(angle) * dist;
        y = cluster.y + Math.sin(angle) * dist;
      } else {
        x = Math.random() * W;
        y = Math.random() * H;
      }

      const colorIdx = cluster
        ? cluster.colorIdx
        : Math.floor(Math.random() * COLORS.length);
      const c = COLORS[colorIdx];
      const isNode = Math.random() < 0.08;

      return {
        x,
        y,
        originX: x,
        originY: y,
        vx: (Math.random() - 0.5) * CONFIG.baseSpeed * 2,
        vy: (Math.random() - 0.5) * CONFIG.baseSpeed * 2,
        size: isNode
          ? CONFIG.particleMaxSize + Math.random() * 2
          : CONFIG.particleMinSize +
            Math.random() * (CONFIG.particleMaxSize - CONFIG.particleMinSize),
        color: c,
        alpha: isNode ? 0.9 : 0.25 + Math.random() * 0.45,
        cluster,
        isNode,
      };
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const state = stateRef.current;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      state.dpr = Math.min(window.devicePixelRatio || 1, 2);
      state.W = parent.clientWidth;
      state.H = parent.clientHeight;
      canvas!.width = state.W * state.dpr;
      canvas!.height = state.H * state.dpr;
      canvas!.style.width = state.W + "px";
      canvas!.style.height = state.H + "px";
      ctx!.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);

      state.clusters = generateClusters(state.W, state.H);
      state.particles = [];
      for (let i = 0; i < CONFIG.particleCount; i++) {
        state.particles.push(
          createParticle(state.clusters, state.W, state.H)
        );
      }
      state.pulses = [];
    }

    function spawnPulse(
      fromP: { x: number; y: number; vx?: number; vy?: number; color: Color },
      toP: { x: number; y: number; vx?: number; vy?: number; color: Color },
      isStream: boolean
    ) {
      if (state.pulses.length >= CONFIG.pulseMaxActive) return;
      state.pulses.push({
        fromX: fromP.x,
        fromY: fromP.y,
        toX: toP.x,
        toY: toP.y,
        from: fromP,
        to: toP,
        progress: 0,
        speed: isStream ? CONFIG.streamSpeed : CONFIG.pulseSpeed,
        length: isStream ? CONFIG.streamLength : CONFIG.pulseLength,
        lineWidth: isStream ? CONFIG.streamLineWidth : CONFIG.pulseLineWidth,
        glowWidth: isStream ? CONFIG.streamGlowWidth : CONFIG.pulseGlowWidth,
        colorFrom: fromP.color || COLORS[0],
        colorTo: toP.color || COLORS[1],
        isStream,
      });
    }

    function spawnRandomPulses() {
      if (Math.random() < CONFIG.pulseSpawnRate) {
        const a =
          state.particles[Math.floor(Math.random() * state.particles.length)];
        let closest: Particle | null = null;
        let closestDist = Infinity;

        for (const b of state.particles) {
          if (a === b) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist =
            a.cluster && b.cluster
              ? CONFIG.connectionDistCluster
              : CONFIG.connectionDist;
          if (dist < maxDist && dist < closestDist) {
            closestDist = dist;
            closest = b;
          }
        }
        if (closest) {
          spawnPulse(a, closest, false);
        }
      }

      if (
        state.frameCount % CONFIG.streamSpawnInterval === 0 &&
        state.clusters.length >= 2
      ) {
        const idxA = Math.floor(Math.random() * state.clusters.length);
        let idxB = Math.floor(Math.random() * state.clusters.length);
        while (idxB === idxA)
          idxB = Math.floor(Math.random() * state.clusters.length);

        const cA = state.clusters[idxA];
        const cB = state.clusters[idxB];
        spawnPulse(
          { x: cA.x, y: cA.y, color: COLORS[cA.colorIdx] },
          { x: cB.x, y: cB.y, color: COLORS[cB.colorIdx] },
          true
        );
      }
    }

    function updatePulses() {
      for (let i = state.pulses.length - 1; i >= 0; i--) {
        const p = state.pulses[i];
        if (p.from.vx !== undefined) {
          p.fromX = p.from.x;
          p.fromY = p.from.y;
        }
        if (p.to.vx !== undefined) {
          p.toX = p.to.x;
          p.toY = p.to.y;
        }

        const dx = p.toX - p.fromX;
        const dy = p.toY - p.fromY;
        const totalDist = Math.sqrt(dx * dx + dy * dy);
        if (totalDist < 1) {
          state.pulses.splice(i, 1);
          continue;
        }

        p.progress += p.speed / totalDist;

        if (p.progress - p.length > 1) {
          state.pulses.splice(i, 1);
        }
      }
    }

    function drawPulses() {
      ctx!.lineCap = "round";

      for (const p of state.pulses) {
        const dx = p.toX - p.fromX;
        const dy = p.toY - p.fromY;

        const head = Math.min(p.progress, 1);
        const tail = Math.max(p.progress - p.length, 0);
        if (head <= tail) continue;

        const x1 = p.fromX + dx * tail;
        const y1 = p.fromY + dy * tail;
        const x2 = p.fromX + dx * head;
        const y2 = p.fromY + dy * head;

        const midT = (head + tail) / 2;
        const r = Math.round(
          p.colorFrom.r + (p.colorTo.r - p.colorFrom.r) * midT
        );
        const g = Math.round(
          p.colorFrom.g + (p.colorTo.g - p.colorFrom.g) * midT
        );
        const b = Math.round(
          p.colorFrom.b + (p.colorTo.b - p.colorFrom.b) * midT
        );

        const fadeIn = Math.min(head * 4, 1);
        const fadeOut = Math.min((1 - tail) * 4, 1);
        const fade = fadeIn * fadeOut;

        const alpha = (p.isStream ? 0.8 : 0.55) * fade;
        const grad = ctx!.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
        grad.addColorStop(0.08, `rgba(${r},${g},${b},${alpha})`);
        grad.addColorStop(0.92, `rgba(${r},${g},${b},${alpha})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);

        ctx!.beginPath();
        ctx!.moveTo(x1, y1);
        ctx!.lineTo(x2, y2);
        ctx!.strokeStyle = grad;
        ctx!.lineWidth = p.lineWidth;
        ctx!.stroke();
      }

      ctx!.lineCap = "butt";
    }

    function draw() {
      ctx!.clearRect(0, 0, state.W, state.H);

      // Connection lines
      for (let i = 0; i < state.particles.length; i++) {
        for (let j = i + 1; j < state.particles.length; j++) {
          const a = state.particles[i];
          const b = state.particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist =
            a.cluster && b.cluster
              ? CONFIG.connectionDistCluster
              : CONFIG.connectionDist;

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.2;
            const grad = ctx!.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(
              0,
              `rgba(${a.color.r},${a.color.g},${a.color.b},${opacity})`
            );
            grad.addColorStop(
              1,
              `rgba(${b.color.r},${b.color.g},${b.color.b},${opacity})`
            );

            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.strokeStyle = grad;
            ctx!.lineWidth = 0.6;
            ctx!.stroke();
          }
        }
      }

      // Particles
      for (const p of state.particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${p.color.r},${p.color.g},${p.color.b},${p.alpha})`;
        ctx!.fill();

        if (p.isNode) {
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
          const glow = ctx!.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            p.size * 4
          );
          glow.addColorStop(
            0,
            `rgba(${p.color.r},${p.color.g},${p.color.b},0.15)`
          );
          glow.addColorStop(
            1,
            `rgba(${p.color.r},${p.color.g},${p.color.b},0)`
          );
          ctx!.fillStyle = glow;
          ctx!.fill();
        }
      }

      // Backbone lines between adjacent clusters
      if (state.clusters.length >= 2) {
        for (let i = 0; i < state.clusters.length - 1; i++) {
          const cA = state.clusters[i];
          const cB = state.clusters[i + 1];
          const colA = COLORS[cA.colorIdx];
          const colB = COLORS[cB.colorIdx];
          const grad = ctx!.createLinearGradient(cA.x, cA.y, cB.x, cB.y);
          grad.addColorStop(
            0,
            `rgba(${colA.r},${colA.g},${colA.b},0.04)`
          );
          grad.addColorStop(
            1,
            `rgba(${colB.r},${colB.g},${colB.b},0.04)`
          );
          ctx!.beginPath();
          ctx!.moveTo(cA.x, cA.y);
          ctx!.lineTo(cB.x, cB.y);
          ctx!.strokeStyle = grad;
          ctx!.lineWidth = 0.8;
          ctx!.stroke();
        }
      }

      drawPulses();
    }

    function update() {
      for (const p of state.particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.cluster) {
          const dx = p.originX - p.x;
          const dy = p.originY - p.y;
          p.vx += dx * CONFIG.clusterGravity;
          p.vy += dy * CONFIG.clusterGravity;
        }

        const mdx = p.x - state.mouse.x;
        const mdy = p.y - state.mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < CONFIG.mouseInfluenceRadius && mDist > 0) {
          const force =
            (1 - mDist / CONFIG.mouseInfluenceRadius) *
            CONFIG.mouseRepelStrength;
          p.vx += (mdx / mDist) * force;
          p.vy += (mdy / mDist) * force;
        }

        p.vx *= 0.85;
        p.vy *= 0.85;

        const maxVel = 3;
        p.vx = Math.max(-maxVel, Math.min(maxVel, p.vx));
        p.vy = Math.max(-maxVel, Math.min(maxVel, p.vy));

        const margin = 20;
        if (p.x < -margin) {
          p.x = -margin;
          p.vx = Math.abs(p.vx) * 0.5;
        }
        if (p.x > state.W + margin) {
          p.x = state.W + margin;
          p.vx = -Math.abs(p.vx) * 0.5;
        }
        if (p.y < -margin) {
          p.y = -margin;
          p.vy = Math.abs(p.vy) * 0.5;
        }
        if (p.y > state.H + margin) {
          p.y = state.H + margin;
          p.vy = -Math.abs(p.vy) * 0.5;
        }
      }
    }

    function loop() {
      state.frameCount++;
      update();
      spawnRandomPulses();
      updatePulses();
      draw();
      state.rafId = requestAnimationFrame(loop);
    }

    resize();

    if (!prefersReduced) {
      loop();
    } else {
      draw();
    }

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      state.mouse.x = e.clientX - rect.left;
      state.mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      state.mouse.x = -9999;
      state.mouse.y = -9999;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(state.rafId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [generateClusters, createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
}
