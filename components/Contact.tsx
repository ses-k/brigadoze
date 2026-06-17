"use client";

import { useLanguage } from "@/lib/LanguageContext";

const contactFields = ["instagram", "email", "phone", "address", "hours"] as const;

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl font-semibold text-chocolate md:text-4xl">
          {t.contact.title}
        </h2>
        <p className="mt-3 text-chocolate/60">{t.contact.subtitle}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contactFields.map((field) => {
            const value = t.contact[field];
            const isPlaceholder = value.startsWith("[");
            const isInstagram = field === "instagram";
            const isEmail = field === "email";
            const isPhone = field === "phone";

            return (
              <div
                key={field}
                className="rounded-2xl border border-caramel/20 bg-cream p-6"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-gold">
                  {t.contact.labels[field]}
                </p>
                {isInstagram ? (
                  <a
                    href={t.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block font-medium text-chocolate transition-colors hover:text-gold"
                  >
                    {value}
                  </a>
                ) : isEmail ? (
                  <a
                    href={`mailto:${value}`}
                    className="mt-2 block font-medium text-chocolate transition-colors hover:text-gold"
                  >
                    {value}
                  </a>
                ) : isPhone ? (
                  <a
                    href={`tel:${value.replace(/\s/g, "")}`}
                    className="mt-2 block font-medium text-chocolate transition-colors hover:text-gold"
                  >
                    {value}
                  </a>
                ) : (
                  <p
                    className={`mt-2 font-medium ${isPlaceholder ? "italic text-chocolate/50" : "text-chocolate"}`}
                  >
                    {value}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
