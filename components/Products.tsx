"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { siteImages } from "@/lib/images";

export function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl font-semibold text-chocolate md:text-4xl">
          {t.products.title}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.products.items.map((item, index) => {
            const image = siteImages.products[index];

            return (
            <article
              key={item.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-chocolate/10 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <Image
                  src={image.src}
                  alt={item.name}
                  fill
                  className={`${image.fit === "contain" ? "object-contain p-3" : "object-cover"} transition-transform duration-500 group-hover:scale-105`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
