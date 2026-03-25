"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechBadge } from "@/components/ui/TechBadge";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { LEVELMIX } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, CheckCircle } from "lucide-react";

export function CaseStudySection() {
  const { t } = useLanguage();

  return (
    <section id="work" className="relative z-[5] bg-bg-primary py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <SectionHeader eyebrow={t.work.eyebrow} heading={LEVELMIX.title} align="left" />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[55fr_45fr]">
          {/* Visual column */}
          <ScrollReveal direction="left">
            <div className="flex aspect-video items-center justify-center rounded-xl border border-border bg-bg-elevated/60">
              <div className="text-center">
                <p className="font-heading text-2xl font-bold text-text-primary">
                  {LEVELMIX.title}
                </p>
                <p className="mt-2 text-sm text-text-tertiary">
                  {t.work.screenshotSoon}
                </p>
                {LEVELMIX.url && (
                  <a
                    href={LEVELMIX.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-purple transition-colors hover:text-accent-orange"
                  >
                    {t.work.visitLive}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Text column */}
          <ScrollReveal direction="right">
            <div>
              <p className="text-lg leading-relaxed text-text-secondary">
                {t.work.description}
              </p>

              {/* Tech badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {LEVELMIX.techStack.map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>

              {/* Highlights */}
              <ul className="mt-8 space-y-3">
                {t.work.highlights.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-purple" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
