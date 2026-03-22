"use client";

import { Cloud, Code, Compass, Shield } from "lucide-react";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  cloud: <Cloud className="h-10 w-10 text-accent-purple" />,
  code: <Code className="h-10 w-10 text-accent-purple" />,
  strategy: <Compass className="h-10 w-10 text-accent-purple" />,
  shield: <Shield className="h-10 w-10 text-accent-purple" />,
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group h-full rounded-xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:border-accent-purple/35 hover:bg-white/[0.06] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)]">
      <div className="mb-5">{iconMap[icon]}</div>
      <h4 className="mb-3 text-xl font-bold text-text-primary">{title}</h4>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
