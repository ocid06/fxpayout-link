'use client';

import { Globe } from 'lucide-react';

type LanguageOption = { code: string; label: string };

type Props = {
  locale: string;
  options: LanguageOption[];
  label: string;
  onSelect: (code: string) => void;
};

export function LanguageSwitcher({ locale, options, label, onSelect }: Props) {
  return (
    <div className="mt-6">
      <p className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
        <Globe className="h-4 w-4" aria-hidden="true" />
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.code}
            type="button"
            onClick={() => onSelect(option.code)}
            aria-pressed={option.code === locale}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              option.code === locale ? 'bg-white text-[#2343C4]' : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
