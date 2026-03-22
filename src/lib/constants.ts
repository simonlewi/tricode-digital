export const SITE = {
  name: "Tricode Digital",
  domain: "tricode.digital",
  email: "tricodedigital@gmail.com",
  linkedin: "https://linkedin.com/in/simon-wilen/", // UPDATE
  github: "https://github.com/simonlewi", // UPDATE
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

export const HERO = {
  badge: "Premium IT Consultancy",
  headline: "Engineering",
  headlineAccent: "Digital Excellence.",
  subline:
    "Bespoke software architecture and technical strategy for high-growth products. Transforming complex challenges into elegant digital foundations.",
  cta: "View Services",
  ctaSecondary: "See Case Studies",
};

export const SERVICES = [
  {
    icon: "cloud" as const,
    title: "Cloud Infrastructure",
    description:
      "Designing resilient, auto-scaling backend ecosystems that grow with your user base. Expert orchestration using AWS and modern CI/CD practices.",
  },
  {
    icon: "code" as const,
    title: "Custom Software",
    description:
      "High-performance application development tailored to your business logic. Built for speed, security, and maintainability.",
  },
  {
    icon: "strategy" as const,
    title: "Technical Strategy",
    description:
      "Bridging the gap between business goals and technical feasibility. Roadmap planning that aligns with long-term scaling objectives.",
  },
  {
    icon: "shield" as const,
    title: "Architecture Audit",
    description:
      "Deep-dive analysis of your existing stack to identify bottlenecks, security vulnerabilities, and opportunities for optimization.",
  },
];

export const LEVELMIX = {
  title: "LevelMix",
  description:
    "A production SaaS for DJ mix audio normalization. Built from scratch as a solo developer — backend, frontend, infrastructure, payments, and deployment.",
  techStack: [
    "Go",
    "AWS S3",
    "Turso",
    "Redis",
    "Asynq",
    "Stripe",
    "Docker",
    "Hetzner",
  ],
  highlights: [
    "Production SaaS with paying customers",
    "99.9% uptime",
    "Full-stack ownership from architecture to deployment",
  ],
  url: "https://levelmix.io",
};
