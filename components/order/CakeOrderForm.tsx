"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import {
  cakeMassaIds,
  cakeRecheioIds,
  cakeSizeIds,
  getMassaLabel,
  getRecheioLabel,
} from "@/lib/menu";
import { resolveOrderError } from "@/lib/order-errors";
import { getMinOrderDateStr, isOrderDateValid } from "@/lib/order-dates";
import type { CakeOrderPayload } from "@/lib/order";
import { getWhatsAppOrderUrl, validateOrderPayload } from "@/lib/order";
import { FormField, OptionPicker, formInputClass } from "@/components/order/form-ui";

type CakeOrderFormProps = {
  onSuccess: () => void;
};

export function CakeOrderForm({ onSuccess }: CakeOrderFormProps) {
  const { t, locale } = useLanguage();
  const f = t.orderForm;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [massa, setMassa] = useState("");
  const [recheio, setRecheio] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [errorCode, setErrorCode] = useState<string | null>(null);

  const minDateStr = getMinOrderDateStr();
  const errorMessage = errorCode
    ? resolveOrderError(errorCode, f.errors as Record<string, string>)
    : "";

  const sizeLabels: Record<(typeof cakeSizeIds)[number], string> = {
    "15cm": f.sizes["15cm"],
    "20cm": f.sizes["20cm"],
    "25cm": f.sizes["25cm"],
    other: f.sizes.other,
  };

  function handleDateChange(value: string) {
    if (value && !isOrderDateValid(value)) {
      setErrorCode("dateMin");
      return;
    }
    setErrorCode(null);
    setPreferredDate(value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorCode(null);

    const payload: CakeOrderPayload = {
      type: "cake",
      name,
      email,
      phone,
      massa,
      recheio,
      size,
      description,
      preferredDate,
      locale,
    };

    const result = validateOrderPayload(payload);
    if (!result.ok) {
      setErrorCode(result.error);
      return;
    }

    window.open(getWhatsAppOrderUrl(result.order), "_blank", "noopener,noreferrer");
    onSuccess();
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label={f.fields.name}>
          <input
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={formInputClass}
          />
        </FormField>

        <FormField label={f.fields.phone} optional={f.optional}>
          <input
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={formInputClass}
          />
        </FormField>

        <FormField label={f.fields.email} optional={f.optional}>
          <input
            type="text"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={formInputClass}
          />
        </FormField>

        <FormField label={f.fields.date} hint={f.dateHelp}>
          <input
            type="date"
            min={minDateStr}
            value={preferredDate}
            onChange={(e) => handleDateChange(e.target.value)}
            className={formInputClass}
          />
        </FormField>
      </div>

      <div className="space-y-8 rounded-2xl border border-chocolate/10 bg-cream/50 p-4 sm:p-6">
        <OptionPicker
          label={f.fields.massa}
          value={massa}
          onChange={setMassa}
          options={cakeMassaIds.map((id) => ({
            id,
            label: getMassaLabel(id, locale),
          }))}
        />

        <OptionPicker
          label={f.fields.recheio}
          value={recheio}
          onChange={setRecheio}
          options={cakeRecheioIds.map((id) => ({
            id,
            label: getRecheioLabel(id, locale),
          }))}
        />

        <OptionPicker
          label={f.fields.size}
          value={size}
          onChange={setSize}
          columns="2"
          options={cakeSizeIds.map((id) => ({
            id,
            label: sizeLabels[id],
          }))}
        />
      </div>

      <FormField label={f.fields.description}>
        <textarea
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={f.placeholders.description}
          className={`${formInputClass} min-h-[8rem] resize-y`}
        />
      </FormField>

      {errorMessage && (
        <p
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-base text-red-700"
          role="alert"
        >
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        className="w-full min-h-14 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#20bd5a] active:scale-[0.99]"
      >
        {f.submit}
      </button>
    </form>
  );
}
