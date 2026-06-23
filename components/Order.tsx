"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export function Order() {
  const { t } = useLanguage();

  return (
    <section id="order" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl font-semibold text-chocolate md:text-4xl">
          {t.order.title}
        </h2>

        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.order.steps.map((step, index) => (
            <li key={step.title} className="relative">
              <span className="font-serif text-5xl font-bold text-gold/30">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-serif text-lg font-semibold text-chocolate">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-chocolate/70">{step.desc}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 rounded-xl border border-gold/30 bg-gold/5 px-6 py-4 text-sm text-chocolate/70">
          {t.order.note}
        </p>

        <div className="mt-8 text-center">
          <Link
            href="/encomendar"
            className="inline-flex items-center justify-center rounded-full bg-chocolate px-8 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-chocolate/90"
          >
            {t.order.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
