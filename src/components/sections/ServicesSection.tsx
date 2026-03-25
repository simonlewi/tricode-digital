"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { SERVICES } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export function ServicesSection() {
  const { t } = useLanguage();

  const services = SERVICES.map((s, i) => ({
    icon: s.icon,
    title: t.services.items[i].title,
    description: t.services.items[i].description,
  }));

  return (
    <section
      id="services"
      className="relative z-[5] py-32"
      style={{
        background: "rgba(10, 10, 20, 0.75)",
        backdropFilter: "blur(40px)",
        WebkitBackdropFilter: "blur(40px)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <ScrollReveal>
          <SectionHeader
            eyebrow={t.services.eyebrow}
            heading={t.services.heading}
            description={t.services.description}
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="mt-12 text-center text-sm text-text-tertiary">
            {t.services.engagement}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
