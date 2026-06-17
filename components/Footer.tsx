"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-chocolate/10 bg-chocolate px-6 py-10 text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-serif text-xl font-semibold">Brigadoze</p>
        <p className="text-sm text-cream/60">
          {t.footer.rights.replace("{year}", String(year))}
        </p>
        <p className="text-sm text-cream/60">{t.footer.madeWith}</p>
      </div>
    </footer>
  );
}
