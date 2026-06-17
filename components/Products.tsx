"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl font-semibold text-chocolate md:text-4xl">
          {t.products.title}
        </h2>
        <p className="mt-3 max-w-2xl text-chocolate/60">{t.products.subtitle}</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.products.items.map((item) => (
            <article
              key={item.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-chocolate/10 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-caramel/30 to-rose/20">
                <div className="h-20 w-20 rounded-full bg-chocolate shadow-inner transition-transform group-hover:scale-110" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-lg font-semibold text-chocolate">
                  {item.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-chocolate/70">
                  {item.desc}
                </p>
                <p className="mt-4 text-sm font-medium text-gold">{item.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
