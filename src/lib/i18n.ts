export type Locale = 'en' | 'sv';

export const translations = {
  en: {
    nav: {
      services: 'Services',
      work: 'Work',
      about: 'About',
      cta: "Let's Talk",
    },
    hero: {
      badge: 'Premium IT Consultancy',
      headline: 'Engineering',
      headlineAccent: 'Digital Excellence.',
      subline:
        'Bespoke software solutions and technical strategy for high-growth products. Transforming complex challenges into elegant digital foundations.',
      cta: 'View Services',
      ctaSecondary: 'See Case Studies',
    },
    services: {
      eyebrow: 'Services',
      heading: 'What I Build',
      description:
        'End-to-end engineering for products that need to scale. From infrastructure to interface.',
      items: [
        {
          title: 'Cloud Infrastructure',
          description:
            'Designing resilient, auto-scaling backend ecosystems that grow with your user base. Expert orchestration using AWS and modern CI/CD practices.',
        },
        {
          title: 'Custom Software',
          description:
            'High-performance application development tailored to your business logic. Built for speed, security, and maintainability.',
        },
        {
          title: 'Technical Strategy',
          description:
            'Bridging the gap between business goals and technical feasibility. Roadmap planning that aligns with long-term scaling objectives.',
        },
        {
          title: 'Architecture Audit',
          description:
            'Deep-dive analysis of your existing stack to identify bottlenecks, security vulnerabilities, and opportunities for optimization.',
        },
      ],
    },
    work: {
      eyebrow: 'Work',
      visitLive: 'Visit live site',
      screenshotSoon: 'Screenshot coming soon',
      description:
        'A production SaaS for DJ mix audio normalization. Built from scratch as a solo developer — backend, frontend, infrastructure, payments, and deployment.',
      highlights: [
        'Production SaaS with paying customers',
        '99.9% uptime',
        'Full-stack ownership from architecture to deployment',
      ],
    },
    about: {
      eyebrow: 'About',
      heading: 'Simon',
      bio1: 'Software engineer and cloud consultant based in Gothenburg, Sweden. I build products from the ground up — architecture, infrastructure, code, and design — with a focus on quality, simplicity, and ownership.',
      bio2: "Whether it's a production SaaS, a cloud migration, or a greenfield platform build, I bring senior-level thinking with hands-on execution. One person, full ownership.",
    },
    contact: {
      heading: "Let's work together",
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },

  sv: {
    nav: {
      services: 'Tjänster',
      work: 'Projekt',
      about: 'Om mig',
      cta: 'Kontakta mig',
    },
    hero: {
      badge: 'Premium IT-konsult',
      headline: 'Ingenjörskonst för',
      headlineAccent: 'Digital Excellens.',
      subline:
        'Skräddarsydda mjukvarulösningar och teknisk strategi för snabbväxande produkter. Transformerar komplexa utmaningar till eleganta digitala fundament.',
      cta: 'Visa tjänster',
      ctaSecondary: 'Se fallstudier',
    },
    services: {
      eyebrow: 'Tjänster',
      heading: 'Vad jag bygger',
      description:
        'Komplett ingenjörsarbete för produkter som behöver skalas. Från infrastruktur till gränssnitt.',
      items: [
        {
          title: 'Molninfrastruktur',
          description:
            'Designar motståndskraftiga, auto-skalande backend-ekosystem som växer med din användarbas. Expert på orkestrering med AWS och moderna CI/CD-metoder.',
        },
        {
          title: 'Skräddarsydd mjukvara',
          description:
            'Högpresterande applikationsutveckling anpassad till din affärslogik. Byggd för hastighet, säkerhet och underhållbarhet.',
        },
        {
          title: 'Teknisk strategi',
          description:
            'Överbryggar gapet mellan affärsmål och teknisk genomförbarhet. Vägplanering som stämmer överens med långsiktiga skalbarhetsmål.',
        },
        {
          title: 'Arkitekturrevision',
          description:
            'Djupgående analys av din befintliga stack för att identifiera flaskhalsar, säkerhetssårbarheter och optimeringsmöjligheter.',
        },
      ],
    },
    work: {
      eyebrow: 'Projekt',
      visitLive: 'Besök live-siten',
      screenshotSoon: 'Skärmbild kommer snart',
      description:
        'En produktions-SaaS för normalisering av DJ-mix-ljud. Byggd från grunden som soloutvecklare — backend, frontend, infrastruktur, betalningar och driftsättning.',
      highlights: [
        'Produktions-SaaS med betalande kunder',
        '99,9% drifttid',
        'Full-stack-ägarskap från arkitektur till driftsättning',
      ],
    },
    about: {
      eyebrow: 'Om mig',
      heading: 'Simon',
      bio1: 'Mjukvaruingenjör och molnkonsult baserad i Göteborg, Sverige. Jag bygger produkter från grunden — arkitektur, infrastruktur, kod och design — med fokus på kvalitet, enkelhet och ägarskap.',
      bio2: 'Oavsett om det är en produktions-SaaS, en molnmigrering eller en greenfield-plattformsbyggnad, bidrar jag med seniornivåtänkande med hands-on-genomförande. En person, fullt ägarskap.',
    },
    contact: {
      heading: 'Låt oss arbeta tillsammans',
    },
    footer: {
      rights: 'Alla rättigheter förbehållna.',
    },
  },
} as const;

export type Translations = {
  nav: { services: string; work: string; about: string; cta: string };
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    subline: string;
    cta: string;
    ctaSecondary: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    description: string;
    items: readonly { title: string; description: string }[];
  };
  work: {
    eyebrow: string;
    visitLive: string;
    screenshotSoon: string;
    description: string;
    highlights: readonly string[];
  };
  about: { eyebrow: string; heading: string; bio1: string; bio2: string };
  contact: { heading: string };
  footer: { rights: string };
};
