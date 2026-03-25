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
      badge: 'AI-Augmented Consultant',
      headline: 'Engineering',
      headlineAccent: 'Digital Excellence.',
      subline:
        'Bespoke software solutions, handled by one person who sees the whole picture. Based in Gothenburg, working with clients across Sweden and internationally.',
      cta: 'View Services',
      ctaSecondary: 'See Case Studies',
    },
    services: {
      eyebrow: 'What I do',
      heading: 'Four things I\'m good at',
      description:
        'End-to-end engineering for products that need to scale. From infrastructure to interface.',
      engagement: 'Flexible engagement — project-based or hourly.',
      items: [
        {
          title: 'Cloud Infrastructure',
          description:
            'Your backend, built to survive traffic spikes and scale without drama. I set up AWS environments and CI/CD pipelines you won\'t have to babysit.',
        },
        {
          title: 'Custom Software',
          description:
            'Application development that fits how your business actually works — not a generic template. Fast, secure, and built to be maintained.',
        },
        {
          title: 'Technical Strategy',
          description:
            'Not sure what to build next, or whether your current setup will hold? I\'ll give you a straight answer and a plan to act on it.',
        },
        {
          title: 'Architecture Audit',
          description:
            'I go through your existing stack and tell you what\'s holding you back — bottlenecks, security gaps, and what to fix first.',
        },
      ],
    },
    work: {
      eyebrow: 'Real work',
      visitLive: 'Visit live site',
      screenshotSoon: 'Screenshot coming soon',
      description:
        'A production SaaS for long-format audio normalization. I built and own every part of it: backend in Go, AWS infrastructure, Stripe payments, and deployment. It\'s the clearest example of what I can do end-to-end for your product.',
      highlights: [
        'Live product with paying customers',
        'Solo-built from zero to production',
        'Full-stack ownership from architecture to deployment',
      ],
    },
    about: {
      eyebrow: 'Who you\'re working with',
      heading: 'Simon',
      bio1: 'I\'m Simon, an IT consultant based in Gothenburg. I build software end-to-end — from architecture to deployment — with a focus on systems that actually hold up in production. LevelMix is my most recent example.',
      bio2: "Whether it's a production SaaS, a cloud migration, or a greenfield platform build, I bring senior-level thinking with hands-on execution. One person, full ownership.",
      bio3: "I integrate AI across my entire workflow — from architecture and code to testing and documentation. It's how one person delivers with the speed and coverage of a full team."
    },
    contact: {
      eyebrow: 'Get in touch',
      heading: "Let's talk about your project",
      description: "Tell me what you're building and where you're stuck. I'll get back to you within one business day. No sales pitch — just a straight conversation about whether I can help.",
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
      badge: 'AI-förstärkt konsult',
      headline: 'Teknik\u00A0som',
      headlineAccent: 'Driver\u00A0tillväxt.',
      subline:
        'Skräddarsydda mjukvarulösningar, hanterat av en person som ser hela bilden. Baserad i Göteborg, jobbar med klienter i Sverige och internationellt.',
      cta: 'Visa tjänster',
      ctaSecondary: 'Se fallstudier',
    },
    services: {
      eyebrow: 'Vad jag bygger',
      heading: 'Fyra saker jag är bra på',
      description:
        'Komplett ingenjörsarbete för produkter som behöver skalas. Från infrastruktur till gränssnitt.',
      engagement: 'Flexibelt upplägg — projektbaserat eller per timme.',
      items: [
        {
          title: 'Molninfrastruktur',
          description:
            'Din backend, byggd för att klara trafikspikar och skala utan drama. Jag sätter upp AWS-miljöer och CI/CD-pipelines du inte behöver övervaka.',
        },
        {
          title: 'Skräddarsydd mjukvara',
          description:
            'Applikationsutveckling som passar hur ditt företag faktiskt fungerar — inte en generisk mall. Snabbt, säkert och byggt för att kunna underhållas.',
        },
        {
          title: 'Teknisk strategi',
          description:
            'Osäker på vad du ska bygga härnäst, eller om din nuvarande setup håller? Jag ger dig ett rakt svar och en plan att agera på.',
        },
        {
          title: 'Arkitekturrevision',
          description:
            'Jag går igenom din befintliga stack och berättar vad som håller dig tillbaka — flaskhalsar, säkerhetsluckor och vad du bör åtgärda först.',
        },
      ],
    },
    work: {
      eyebrow: 'I praktiken',
      visitLive: 'Besök live-siten',
      screenshotSoon: 'Skärmbild kommer snart',
      description:
        'En produktions-SaaS för normalisering av långformatsljud. Jag har byggt och äger varje del: backend i Go, AWS-infrastruktur, Stripe-betalningar och driftsättning. Det är det tydligaste exemplet på vad jag kan göra end-to-end för din produkt.',
      highlights: [
        'Produktions-SaaS med betalande kunder',
        'Solobyggd från noll till produktion',
        'Full-stack-ägarskap från arkitektur till driftsättning',
      ],
    },
    about: {
      eyebrow: 'Vem du jobbar med',
      heading: 'Simon',
      bio1: 'Mitt namn är Simon, jag är en IT-konsult baserad i Göteborg. Jag bygger mjukvara end-to-end — från arkitektur till driftsättning — med fokus på system som faktiskt håller i produktion. LevelMix är mitt senaste exempel.',
      bio2: 'Oavsett om det är en produktions-SaaS, en molnmigrering eller en greenfield-plattformsbyggnad, bidrar jag med seniornivåtänkande med hands-on-genomförande. En person, fullt ägarskap.',
      bio3: 'Jag använder AI genom hela mitt arbetsflöde — från arkitektur och kod till testning och dokumentation. Det är så en person kan leverera med samma hastighet och täckning som ett helt team.'
    },
    contact: {
      eyebrow: 'Kontakta mig',
      heading: 'Låt oss prata om ditt projekt',
      description: 'Berätta vad du bygger och var du har kört fast. Jag återkommer inom en arbetsdag. Ingen säljpitch — bara ett rakt samtal om huruvida jag kan hjälpa till.',
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
    engagement: string;
    items: readonly { title: string; description: string }[];
  };
  work: {
    eyebrow: string;
    visitLive: string;
    screenshotSoon: string;
    description: string;
    highlights: readonly string[];
  };
  about: { eyebrow: string; heading: string; bio1: string; bio2: string; bio3: string };
  contact: { eyebrow: string; heading: string; description: string };
  footer: { rights: string };
};
