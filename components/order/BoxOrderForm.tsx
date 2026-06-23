"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import {
  BRIGADEIROS_PER_BOX,
  MAX_FLAVORS_PER_BOX,
  createEmptyBox,
  createEmptyBoxLine,
  getBoxTotal,
  resizeBoxes,
  type BoxConfig,
} from "@/lib/box-order";
import { brigadeiroFlavorIds, getFlavorLabel } from "@/lib/menu";
import { resolveOrderError } from "@/lib/order-errors";
import { getMinOrderDateStr, isOrderDateValid } from "@/lib/order-dates";
import type { BoxOrderPayload } from "@/lib/order";
import { getWhatsAppOrderUrl, validateOrderPayload } from "@/lib/order";
import {
  FormField,
  FormSelect,
  Stepper,
  formButtonClass,
  formInputClass,
} from "@/components/order/form-ui";

type BoxOrderFormProps = {
  onSuccess: () => void;
};

export function BoxOrderForm({ onSuccess }: BoxOrderFormProps) {
  const { t, locale } = useLanguage();
  const f = t.orderForm;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [boxCount, setBoxCount] = useState(1);
  const [boxes, setBoxes] = useState<BoxConfig[]>([createEmptyBox()]);
  const [activeBox, setActiveBox] = useState(0);
  const [comments, setComments] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [errorCode, setErrorCode] = useState<string | null>(null);

  const minDateStr = getMinOrderDateStr();
  const errorMessage = errorCode
    ? resolveOrderError(errorCode, f.errors as Record<string, string>)
    : "";

  const currentBox = boxes[activeBox] ?? createEmptyBox();
  const currentTotal = getBoxTotal(currentBox);

  function handleDateChange(value: string) {
    if (value && !isOrderDateValid(value)) {
      setErrorCode("dateMin");
      return;
    }
    setErrorCode(null);
    setPreferredDate(value);
  }

  function updateBoxCount(count: number) {
    const next = Math.min(50, Math.max(1, count));
    setBoxCount(next);
    setBoxes((prev) => resizeBoxes(prev, next));
    setActiveBox((prev) => Math.min(prev, next - 1));
  }

  function updateBox(index: number, updater: (box: BoxConfig) => BoxConfig) {
    setBoxes((prev) => prev.map((box, i) => (i === index ? updater(box) : box)));
  }

  function updateLine(boxIndex: number, lineIndex: number, patch: Partial<BoxConfig[number]>) {
    updateBox(boxIndex, (box) =>
      box.map((line, i) => (i === lineIndex ? { ...line, ...patch } : line)),
    );
  }

  function updateLineCount(boxIndex: number, lineIndex: number, newCount: number) {
    const box = boxes[boxIndex];
    if (!box) return;
    const line = box[lineIndex];
    const otherTotal = getBoxTotal(box) - (line?.flavorId ? line.count : 0);
    const maxForLine = BRIGADEIROS_PER_BOX - otherTotal;
    updateLine(boxIndex, lineIndex, {
      count: Math.min(Math.max(1, newCount), Math.max(1, maxForLine)),
    });
  }

  function updateLineFlavor(boxIndex: number, lineIndex: number, flavorId: string) {
    const box = boxes[boxIndex];
    if (!box) return;
    const line = box[lineIndex];
    const otherTotal = getBoxTotal(box) - (line?.flavorId ? line.count : 0);
    const maxForLine = BRIGADEIROS_PER_BOX - otherTotal;
    updateLine(boxIndex, lineIndex, {
      flavorId,
      count: Math.min(line?.count ?? 1, Math.max(1, maxForLine)),
    });
  }

  function addLine(boxIndex: number) {
    const box = boxes[boxIndex];
    if (!box || box.length >= MAX_FLAVORS_PER_BOX) return;
    if (currentTotal >= BRIGADEIROS_PER_BOX) return;
    updateBox(boxIndex, (prev) => [...prev, createEmptyBoxLine()]);
  }

  function removeLine(boxIndex: number, lineIndex: number) {
    updateBox(boxIndex, (box) => {
      if (box.length === 1) return [createEmptyBoxLine()];
      return box.filter((_, i) => i !== lineIndex);
    });
  }

  function getUsedFlavors(box: BoxConfig, excludeIndex: number) {
    return new Set(
      box
        .map((line, i) => (i !== excludeIndex ? line.flavorId : ""))
        .filter(Boolean),
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorCode(null);

    const payload: BoxOrderPayload = {
      type: "box",
      name,
      email,
      phone,
      boxCount,
      boxes,
      comments,
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

      <Stepper
        label={f.fields.quantity}
        value={boxCount}
        min={1}
        max={50}
        onChange={updateBoxCount}
      />

      <div className="rounded-2xl border border-chocolate/10 bg-cream/50 p-4 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-medium text-chocolate">{f.fields.flavors}</p>
            <p className="mt-1 text-sm text-chocolate/60">{f.boxHelp}</p>
          </div>
          <div
            className={`inline-flex self-start rounded-full px-4 py-2 text-sm font-semibold ${
              currentTotal > BRIGADEIROS_PER_BOX
                ? "bg-red-100 text-red-700"
                : "bg-gold/15 text-gold"
            }`}
          >
            {f.boxTotal
              .replace("{current}", String(currentTotal))
              .replace("{max}", String(BRIGADEIROS_PER_BOX))}
          </div>
        </div>

        {boxCount > 1 && (
          <div className="mt-5 -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {boxes.map((box, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveBox(index)}
                className={`shrink-0 rounded-full px-5 py-3 text-base font-medium transition-colors ${
                  activeBox === index
                    ? "bg-chocolate text-cream shadow-sm"
                    : "bg-white text-chocolate/70 ring-1 ring-chocolate/10"
                }`}
              >
                {f.boxLabel.replace("{n}", String(index + 1))} ({getBoxTotal(box)})
              </button>
            ))}
          </div>
        )}

        <div className="mt-5 space-y-4">
          {currentBox.map((line, lineIndex) => {
            const usedFlavors = getUsedFlavors(currentBox, lineIndex);
            const otherTotal =
              getBoxTotal(currentBox) - (line.flavorId ? line.count : 0);
            const maxForLine = BRIGADEIROS_PER_BOX - otherTotal;

            return (
              <div
                key={lineIndex}
                className="space-y-4 rounded-2xl border border-chocolate/10 bg-white p-4 shadow-sm"
              >
                <FormSelect
                  label={f.fields.flavorLine.replace("{n}", String(lineIndex + 1))}
                  value={line.flavorId}
                  onChange={(e) => updateLineFlavor(activeBox, lineIndex, e.target.value)}
                >
                  <option value="">{f.placeholders.selectFlavor}</option>
                  {brigadeiroFlavorIds.map((id) => (
                    <option key={id} value={id} disabled={usedFlavors.has(id)}>
                      {getFlavorLabel(id, locale)}
                    </option>
                  ))}
                </FormSelect>

                <Stepper
                  label={f.fields.flavorCount}
                  value={line.count}
                  min={1}
                  max={Math.max(1, maxForLine)}
                  disabled={!line.flavorId}
                  onChange={(v) => updateLineCount(activeBox, lineIndex, v)}
                />

                <button
                  type="button"
                  onClick={() => removeLine(activeBox, lineIndex)}
                  className={`${formButtonClass} w-full text-chocolate/70 hover:border-red-200 hover:text-red-600`}
                >
                  {f.removeFlavor}
                </button>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => addLine(activeBox)}
          disabled={
            currentBox.length >= MAX_FLAVORS_PER_BOX ||
            currentTotal >= BRIGADEIROS_PER_BOX
          }
          className="mt-5 w-full min-h-12 rounded-full border-2 border-gold px-5 py-3 text-base font-medium text-gold transition-colors hover:bg-gold hover:text-cream disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        >
          {f.addFlavor}
        </button>
      </div>

      <FormField label={f.fields.comments}>
        <textarea
          rows={4}
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder={f.placeholders.comments}
          className={`${formInputClass} min-h-[7rem] resize-y`}
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
