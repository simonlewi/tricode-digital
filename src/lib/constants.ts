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
    "Bespoke software solutions and technical strategy for high-growth products. Transforming complex challenges into elegant digital foundations.",
  cta: "View Services",
  ctaSecondary: "See Case Studies",
};

export const SERVICES = [
  {
    icon: "cloud" as const,
    title: "Cloud Infrastructure",
    description:
      "Your backend, built to survive traffic spikes and scale without drama. I set up AWS environments and CI/CD pipelines you won't have to babysit.",
  },
  {
    icon: "code" as const,
    title: "Custom Software",
    description:
      "Application development that fits how your business actually works — not a generic template. Fast, secure, and built to be maintained.",
  },
  {
    icon: "strategy" as const,
    title: "Technical Strategy",
    description:
      "Not sure what to build next, or whether your current setup will hold? I'll give you a straight answer and a plan to act on it.",
  },
  {
    icon: "shield" as const,
    title: "Architecture Audit",
    description:
      "I go through your existing stack and tell you what's holding you back — bottlenecks, security gaps, and what to fix first.",
  },
];

export const LEVELMIX = {
  title: "LevelMix",
  description:
    "A production SaaS for long-format audio normalization. Built from scratch as a solo developer — backend, frontend, infrastructure, payments, and deployment.",
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
