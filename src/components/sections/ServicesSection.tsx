"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { SERVICES } from "@/lib/constants";

export function ServicesSection() {
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
            eyebrow="Services"
            heading="What I Build"
            description="End-to-end engineering for products that need to scale. From infrastructure to interface."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
