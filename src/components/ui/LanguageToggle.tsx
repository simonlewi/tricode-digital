'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Locale } from '@/lib/i18n';

export function LanguageToggle() {
  const { locale, toggle } = useLanguage();

  const setLocale = (target: Locale) => {
    if (target !== locale) toggle();
  };

  return (
    <div
      className="relative flex items-center overflow-hidden rounded-full border border-white/10 bg-white/5 text-xs font-semibold"
      role="radiogroup"
      aria-label="Language"
    >
      {/* Sliding pill */}
      <div
        className="absolute top-0 left-0 h-full w-1/2 rounded-full bg-accent-purple transition-transform duration-200 ease-out"
        style={{ transform: locale === 'sv' ? 'translateX(100%)' : 'translateX(0)' }}
      />
      <button
        onClick={() => setLocale('en')}
        role="radio"
        aria-checked={locale === 'en'}
        className={`relative z-10 cursor-pointer px-3 py-1.5 transition-colors ${
          locale === 'en' ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLocale('sv')}
        role="radio"
        aria-checked={locale === 'sv'}
        className={`relative z-10 cursor-pointer px-3 py-1.5 transition-colors ${
          locale === 'sv' ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
        }`}
      >
        SV
      </button>
    </div>
  );
}
