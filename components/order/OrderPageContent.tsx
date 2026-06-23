"use client";

import { useState } from "react";
import Link from "next/link";
import { BoxOrderForm } from "@/components/order/BoxOrderForm";
import { CakeOrderForm } from "@/components/order/CakeOrderForm";
import { useLanguage } from "@/lib/LanguageContext";

type Tab = "box" | "cake";

export function OrderPageContent() {
  const { t } = useLanguage();
  const f = t.orderForm;
  const [tab, setTab] = useState<Tab>("box");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg rounded-3xl border border-gold/30 bg-white px-6 py-10 text-center shadow-sm sm:px-8 sm:py-12">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15">
          <span className="text-2xl text-gold">✓</span>
        </div>
        <h2 className="font-serif text-2xl font-semibold text-chocolate sm:text-3xl">
          {f.successTitle}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-chocolate/70">{f.successMessage}</p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center rounded-full border-2 border-gold px-8 py-3 text-base font-medium text-gold transition-colors hover:bg-gold hover:text-cream"
        >
          {f.backHome}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-1 sm:px-0">
      <div className="text-center">
        <h1 className="font-serif text-3xl font-semibold text-chocolate sm:text-4xl md:text-5xl">
          {f.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-chocolate/70 sm:mt-4">{f.subtitle}</p>
      </div>

      <div className="mt-8 flex flex-col gap-2 rounded-2xl border border-chocolate/10 bg-white p-1.5 shadow-sm sm:mt-10 sm:flex-row sm:rounded-full">
        <button
          type="button"
          onClick={() => setTab("box")}
          className={`min-h-12 flex-1 rounded-xl px-4 py-3.5 text-base font-medium transition-colors sm:rounded-full ${
            tab === "box"
              ? "bg-chocolate text-cream shadow-sm"
              : "text-chocolate/70 hover:text-chocolate"
          }`}
        >
          {f.tabBox}
        </button>
        <button
          type="button"
          onClick={() => setTab("cake")}
          className={`min-h-12 flex-1 rounded-xl px-4 py-3.5 text-base font-medium transition-colors sm:rounded-full ${
            tab === "cake"
              ? "bg-chocolate text-cream shadow-sm"
              : "text-chocolate/70 hover:text-chocolate"
          }`}
        >
          {f.tabCake}
        </button>
      </div>

      <div className="mt-6 rounded-3xl border border-chocolate/10 bg-white p-4 shadow-sm sm:mt-8 sm:p-8 md:p-10">
        {tab === "box" ? (
          <BoxOrderForm onSuccess={() => setSubmitted(true)} />
        ) : (
          <CakeOrderForm onSuccess={() => setSubmitted(true)} />
        )}
      </div>

      <p className="mt-6 text-center text-sm leading-relaxed text-chocolate/50 sm:text-base">
        {f.note}
      </p>
    </div>
  );
}
