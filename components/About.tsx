"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl font-semibold text-chocolate md:text-4xl">
          {t.about.title}
        </h2>

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-4 text-chocolate/80 leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p className="text-chocolate/50 italic">{t.about.p3}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            {t.about.values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-caramel/30 bg-cream p-6 text-center md:text-left"
              >
                <h3 className="font-serif text-lg font-semibold text-gold">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-chocolate/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
