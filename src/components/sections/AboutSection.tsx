"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { Award } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-[5] py-32"
      style={{
        background: "rgba(10, 10, 20, 0.75)",
        backdropFilter: "blur(40px)",
        WebkitBackdropFilter: "blur(40px)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <SectionHeader eyebrow="About" heading="Simon" align="left" />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[40fr_60fr]">
          {/* Photo placeholder */}
          <ScrollReveal direction="left">
            <div className="aspect-square overflow-hidden rounded-2xl border border-border bg-bg-elevated/60 p-1">
              <Image
                src="/profile.webp"
                alt="Simon — Tricode Digital"
                width={1180}
                height={1475}
                quality={90}
                sizes="(max-width: 768px) 100vw, 40vw"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal direction="right">
            <div>
              <p className="text-lg leading-relaxed text-text-secondary">
                Full-stack engineer and technical consultant based in
                Gothenburg, Sweden. I build products from the ground up —
                architecture, infrastructure, code, and design — with a focus on
                quality, simplicity, and ownership.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                Whether it&apos;s a production SaaS, a cloud migration, or a
                greenfield platform build, I bring senior-level thinking with
                hands-on execution. One person, full ownership, no handoffs.
              </p>

              {/* Credentials */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg-elevated/60 px-4 py-2">
                  <Award className="h-4 w-4 text-accent-gold" />
                  <span className="text-sm font-medium text-text-primary">
                    AWS SAA-C03
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
