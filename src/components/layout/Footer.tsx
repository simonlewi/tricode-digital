"use client";

import { SITE } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm text-text-tertiary">
          &copy; {new Date().getFullYear()} {SITE.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
