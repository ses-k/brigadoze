"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-caramel/40" />
          <h2 className="font-serif text-3xl font-semibold text-chocolate md:text-4xl">
            {t.about.title}
          </h2>
          <span className="h-px flex-1 bg-caramel/40" />
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-caramel/25 bg-cream px-8 py-10 text-center shadow-sm md:px-12 md:py-14">
          <p className="text-lg leading-relaxed text-chocolate/80 md:text-xl">
            {t.about.p1}
          </p>
          <div className="mx-auto my-8 flex items-center justify-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="h-px w-16 bg-gold/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </div>
          <p className="text-lg leading-relaxed text-chocolate/80 md:text-xl">
            {t.about.p2}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {t.about.values.map((value, index) => (
            <div
              key={value.title}
              className="relative rounded-2xl border border-chocolate/8 bg-white p-8 text-center shadow-sm"
            >
              <span className="font-serif text-4xl font-bold text-gold/25">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-serif text-xl font-semibold text-chocolate">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-chocolate/65">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
