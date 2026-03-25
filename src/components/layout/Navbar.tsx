"use client";

import { useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  const navLabels = [t.nav.services, t.nav.work, t.nav.about];

  return (
    <>
    <header
      className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 backdrop-blur-[20px]"
      style={{ background: "rgba(10,10,20,0.6)", padding: "0.4rem 0" }}
    >
      <nav
        className="mx-auto flex max-w-[1200px] items-center justify-between px-6 md:px-12 lg:px-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#hero" className="flex-shrink-0">
          <Image
            src="/logo.webp"
            alt="Tricode Digital"
            width={304}
            height={81}
            className="h-[81px] w-auto"
            style={{ width: 'auto' }}
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              {navLabels[i]}
            </a>
          ))}
          <LanguageToggle />
          <a
            href="#contact"
            className="rounded-full bg-accent-purple px-5 py-2.5 text-sm font-bold text-text-primary transition-opacity duration-200 hover:opacity-90"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

    </header>

      {/* Mobile overlay — rendered outside header to avoid stacking issues */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[101] flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ background: "#0A0A14" }}
        >
          <button
            className="absolute top-5 right-5 text-text-primary"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl font-medium text-text-secondary transition-colors hover:text-text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {navLabels[i]}
            </a>
          ))}
          <LanguageToggle />
          <a
            href="#contact"
            className="rounded-full bg-accent-purple px-8 py-4 text-xl font-bold text-text-primary"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </>
  );
}
