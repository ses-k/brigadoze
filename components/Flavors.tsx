"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function Flavors() {
  const { t } = useLanguage();

  return (
    <section id="flavors" className="bg-chocolate px-6 py-20 text-cream md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl font-semibold md:text-4xl">{t.flavors.title}</h2>
        <p className="mt-3 max-w-2xl text-cream/60">{t.flavors.subtitle}</p>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.flavors.list.map((flavor, index) => (
            <li
              key={index}
              className="flex items-center gap-3 rounded-xl border border-cream/10 bg-cream/5 px-5 py-4 transition-colors hover:bg-cream/10"
            >
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
              <span className={flavor.startsWith("[") ? "italic text-cream/50" : ""}>
                {flavor}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
