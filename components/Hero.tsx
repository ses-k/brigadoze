"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { siteImages } from "@/lib/images";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-16 md:pb-32 md:pt-24">
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-rose/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-caramel/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              {t.hero.tagline}
            </span>
            <span className="h-px w-12 bg-gold" />
          </div>

          <h1 className="font-serif text-5xl font-semibold leading-tight text-chocolate md:text-7xl">
            Brigadoze
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-chocolate/80 md:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.instagram.com/brigadoze/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-chocolate px-8 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-chocolate/90"
            >
              {t.hero.ctaInstagram}
            </a>
            <Link
              href="/encomendar"
              className="inline-flex items-center justify-center rounded-full border-2 border-gold px-8 py-3.5 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-cream"
            >
              {t.hero.ctaOrder}
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {siteImages.hero.map((image, index) => (
            <div
              key={image.src}
              className={`relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg ring-1 ring-chocolate/10 ${
                index === 1 ? "md:-mt-8" : index === 2 ? "md:mt-8" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 33vw, 200px"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
