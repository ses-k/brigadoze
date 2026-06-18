"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { siteImages } from "@/lib/images";

const navIds = ["about", "products", "flavors", "cakes", "order", "contact"] as const;

export function Header() {
  const { t, toggleLocale } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-chocolate/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <Image
            src={siteImages.logo.src}
            alt={siteImages.logo.alt}
            width={44}
            height={44}
            className="rounded-full ring-1 ring-chocolate/10"
          />
          <span className="font-serif text-2xl font-semibold tracking-tight text-chocolate">
            Brigadoze
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-medium text-chocolate/70 transition-colors hover:text-gold"
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggleLocale}
          className="rounded-full border border-chocolate/20 px-4 py-1.5 text-sm font-medium text-chocolate transition-colors hover:border-gold hover:text-gold"
          aria-label={`Switch to ${t.lang.switch}`}
        >
          {t.lang.switch}
        </button>
      </div>
    </header>
  );
}
