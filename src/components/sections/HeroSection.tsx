"use client";

import { useEffect, useRef } from "react";
import { ParticleNetwork } from "@/components/canvas/ParticleNetwork";
import { GradientButton } from "@/components/ui/GradientButton";
import { HERO } from "@/lib/constants";
import { ChevronDown, ArrowRight } from "lucide-react";

export function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    function handleScroll() {
      const heroH = window.innerHeight;
      const progress = Math.min(window.scrollY / (heroH * 0.6), 1);

      if (bgRef.current) {
        bgRef.current.style.filter = `blur(${progress * 20}px)`;
        bgRef.current.style.transform = `scale(${1 + progress * 0.05})`;
      }

      if (contentRef.current) {
        const contentOpacity = Math.max(1 - progress * 1.5, 0);
        contentRef.current.style.opacity = String(contentOpacity);
        contentRef.current.style.transform = `translateY(${progress * -40}px)`;
      }

      if (indicatorRef.current) {
        indicatorRef.current.style.opacity = String(
          Math.max(1 - progress * 4, 0)
        );
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[700px] w-full items-center justify-start overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* Background layer — blurs on scroll */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 transition-[filter,transform] duration-[50ms] linear"
      >
        <ParticleNetwork />

        {/* Radial glows */}
        <div
          className="absolute -top-[10%] right-[15%] h-[600px] w-[600px] rounded-full opacity-35 pointer-events-none z-[1]"
          style={{
            background: "#4B1C64",
            filter: "blur(120px)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-[10%] -right-[5%] h-[500px] w-[500px] rounded-full opacity-[0.12] pointer-events-none z-[1]"
          style={{
            background: "#E88E40",
            filter: "blur(120px)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute right-[5%] top-[40%] h-[400px] w-[400px] rounded-full opacity-15 pointer-events-none z-[1]"
          style={{
            background: "#AD4158",
            filter: "blur(120px)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Bottom vignette */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(10,10,20,0.4) 70%, rgba(10,10,20,0.85) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content layer — fades on scroll, never blurs */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-[1200px] px-6 md:px-12 lg:px-16"
      >
        <div className="max-w-[560px]">
          {/* Badge */}
          <span
            className="mb-8 inline-block rounded-full border border-accent-purple/25 bg-accent-purple/10 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-accent-purple-light backdrop-blur-xl opacity-0 translate-y-5 animate-[fadeUp_0.7s_ease_0.3s_forwards]"
          >
            {HERO.badge}
          </span>

          {/* Headline */}
          <h1
            className="mb-6 font-heading text-[clamp(3rem,8vw,6.5rem)] font-black leading-[1.05] text-text-primary opacity-0 translate-y-[30px] animate-[fadeUp_0.8s_ease_0.5s_forwards]"
          >
            {HERO.headline}
            <br />
            <em className="italic text-accent-purple-light">{HERO.headlineAccent}</em>
          </h1>

          {/* Subline */}
          <p
            className="mb-10 max-w-[480px] text-lg leading-relaxed text-text-secondary opacity-0 translate-y-5 animate-[fadeUp_0.7s_ease_0.8s_forwards]"
          >
            {HERO.subline}
          </p>

          {/* Buttons */}
          <div
            className="flex flex-wrap gap-4 opacity-0 translate-y-5 animate-[fadeUp_0.7s_ease_1.1s_forwards]"
          >
            <GradientButton variant="primary" href="#services" size="lg">
              {HERO.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </GradientButton>
            <GradientButton variant="outline" href="#work" size="lg">
              {HERO.ctaSecondary}
            </GradientButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={indicatorRef}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 opacity-0 animate-[fadeUp_0.6s_ease_1.5s_forwards]"
      >
        <ChevronDown className="h-6 w-6 text-text-tertiary animate-[bounce_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
