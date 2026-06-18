"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function Cakes() {
  const { t } = useLanguage();

  return (
    <section id="cakes" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl font-semibold text-chocolate md:text-4xl">
          {t.cakes.title}
        </h2>
        <p className="mt-3 max-w-2xl text-chocolate/60">{t.cakes.subtitle}</p>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-xl font-semibold text-gold">
              {t.cakes.massaTitle}
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.cakes.massa.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-caramel/25 bg-cream px-5 py-4"
                >
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-chocolate/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-gold">
              {t.cakes.recheioTitle}
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.cakes.recheios.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-caramel/25 bg-cream px-5 py-4"
                >
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-chocolate/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
