"use client";

import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { SITE } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Linkedin, Github } from "lucide-react";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative z-[5] border-t border-border bg-bg-primary py-32"
    >
      <div className="mx-auto max-w-lg px-6 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-4xl font-bold text-text-primary md:text-5xl">
            {t.contact.heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-8 inline-flex items-center gap-3 text-xl font-medium text-text-secondary transition-colors duration-200 hover:text-accent-purple"
          >
            <Mail className="h-5 w-5" />
            {SITE.email}
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-3 text-text-tertiary transition-colors hover:bg-white/5 hover:text-text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-3 text-text-tertiary transition-colors hover:bg-white/5 hover:text-text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
