import type { OrderErrorCode } from "./order-errors";
import { isOrderDateValid } from "./order-dates";
import type { Locale } from "./translations";
import {
  BRIGADEIROS_PER_BOX,
  type BoxConfig,
  type BoxFlavorLine,
  getBoxFilledLines,
  getBoxTotal,
} from "./box-order";
import {
  brigadeiroFlavorIds,
  cakeMassaIds,
  cakeRecheioIds,
  cakeSizeIds,
  getFlavorLabel,
  getMassaLabel,
  getRecheioLabel,
} from "./menu";

export const WHATSAPP_NUMBER = "351915492879";

export type BoxOrderPayload = {
  type: "box";
  name: string;
  email: string;
  phone: string;
  boxCount: number;
  boxes: BoxConfig[];
  comments: string;
  preferredDate: string;
  locale: Locale;
};

export type CakeOrderPayload = {
  type: "cake";
  name: string;
  email: string;
  phone: string;
  massa: string;
  recheio: string;
  size: string;
  description: string;
  preferredDate: string;
  locale: Locale;
};

export type OrderPayload = BoxOrderPayload | CakeOrderPayload;

const sizeLabelsPt: Record<(typeof cakeSizeIds)[number], string> = {
  "15cm": "15 cm",
  "20cm": "20 cm",
  "25cm": "25 cm",
  other: "Outro",
};

const sizeLabelsEn: Record<(typeof cakeSizeIds)[number], string> = {
  "15cm": "15 cm",
  "20cm": "20 cm",
  "25cm": "25 cm",
  other: "Other",
};

function labelSize(id: string, locale: Locale) {
  const labels = locale === "en" ? sizeLabelsEn : sizeLabelsPt;
  return labels[id as (typeof cakeSizeIds)[number]] ?? id;
}

function formatBoxLines(box: BoxConfig, locale: Locale): string[] {
  return getBoxFilledLines(box).map((line) => {
    const label = getFlavorLabel(line.flavorId as (typeof brigadeiroFlavorIds)[number], locale);
    return locale === "en"
      ? `  • ${label} × ${line.count}`
      : `  • ${label} × ${line.count}`;
  });
}

function contactLines(
  order: { name: string; phone: string; email: string; preferredDate: string },
  locale: Locale,
): string[] {
  const lines =
    locale === "en"
      ? [`Name: ${order.name}`, `Preferred date: ${order.preferredDate}`]
      : [`Nome: ${order.name}`, `Data pretendida: ${order.preferredDate}`];

  if (order.phone.trim()) {
    lines.splice(
      1,
      0,
      locale === "en" ? `Phone: ${order.phone}` : `Telefone: ${order.phone}`,
    );
  }
  if (order.email.trim()) {
    lines.push(locale === "en" ? `Email: ${order.email}` : `Email: ${order.email}`);
  }

  return lines;
}

function formatBoxOrderMessage(order: BoxOrderPayload): string[] {
  const locale = order.locale;
  const header =
    locale === "en"
      ? [
          "Hello Brigadoze! I'd like to order:",
          "",
          "*Brigadeiro Gift Box*",
          ...contactLines(order, locale),
          `Number of boxes: ${order.boxCount}`,
          "",
        ]
      : [
          "Olá Brigadoze! Gostava de encomendar:",
          "",
          "*Caixa de Brigadeiros*",
          ...contactLines(order, locale),
          `Quantidade de caixas: ${order.boxCount}`,
          "",
        ];

  const boxSections = order.boxes.flatMap((box, index) => {
    const total = getBoxTotal(box);
    const title =
      locale === "en"
        ? `Box ${index + 1} (${total}/${BRIGADEIROS_PER_BOX}):`
        : `Caixa ${index + 1} (${total}/${BRIGADEIROS_PER_BOX}):`;
    return [title, ...formatBoxLines(box, locale), ""];
  });

  const footer = order.comments
    ? [
        locale === "en"
          ? `Comments: ${order.comments}`
          : `Comentários: ${order.comments}`,
      ]
    : [];

  return [...header, ...boxSections, ...footer].filter((line, i, arr) => {
    if (line !== "") return true;
    return i > 0 && arr[i - 1] !== "";
  });
}

export function formatWhatsAppMessage(order: OrderPayload): string {
  if (order.type === "box") {
    return formatBoxOrderMessage(order).join("\n");
  }

  const locale = order.locale;
  const lines =
    locale === "en"
      ? [
          "Hello Brigadoze! I'd like to order:",
          "",
          "*Custom Cake*",
          ...contactLines(order, locale),
          `Sponge: ${getMassaLabel(order.massa as (typeof cakeMassaIds)[number], locale)}`,
          `Filling: ${getRecheioLabel(order.recheio as (typeof cakeRecheioIds)[number], locale)}`,
          `Size: ${labelSize(order.size, locale)}`,
          `Description: ${order.description}`,
        ]
      : [
          "Olá Brigadoze! Gostava de encomendar:",
          "",
          "*Bolo Personalizado*",
          ...contactLines(order, locale),
          `Massa: ${getMassaLabel(order.massa as (typeof cakeMassaIds)[number], locale)}`,
          `Recheio: ${getRecheioLabel(order.recheio as (typeof cakeRecheioIds)[number], locale)}`,
          `Tamanho: ${labelSize(order.size, locale)}`,
          `Descrição: ${order.description}`,
        ];

  return lines.join("\n");
}

export function getWhatsAppOrderUrl(order: OrderPayload): string {
  const message = formatWhatsAppMessage(order);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function validateBox(box: BoxConfig): OrderErrorCode | null {
  const filled = getBoxFilledLines(box);

  if (filled.length === 0) return "boxEmpty";
  if (filled.length > BRIGADEIROS_PER_BOX) return "maxFlavors";

  const flavorIds = filled.map((line) => line.flavorId);
  if (new Set(flavorIds).size !== flavorIds.length) return "duplicateFlavor";

  for (const line of filled) {
    if (!(brigadeiroFlavorIds as readonly string[]).includes(line.flavorId)) {
      return "flavors";
    }
    if (!Number.isInteger(line.count) || line.count < 1) {
      return "flavorCount";
    }
  }

  const total = getBoxTotal(box);
  if (total < 1) return "boxEmpty";
  if (total > BRIGADEIROS_PER_BOX) return "boxTotalExceeded";

  return null;
}

function normalizeBox(box: BoxConfig): BoxFlavorLine[] {
  return getBoxFilledLines(box);
}

export function validateOrderPayload(
  data: unknown,
): { ok: true; order: OrderPayload } | { ok: false; error: OrderErrorCode } {
  if (!data || typeof data !== "object") {
    return { ok: false, error: "invalid" };
  }

  const payload = data as Record<string, unknown>;
  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const phone = String(payload.phone ?? "").trim();
  const preferredDate = String(payload.preferredDate ?? "").trim();
  const locale: Locale = payload.locale === "en" ? "en" : "pt";

  if (!name) return { ok: false, error: "name" };
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "email" };
  }
  if (!preferredDate) return { ok: false, error: "date" };
  if (!isOrderDateValid(preferredDate)) {
    return { ok: false, error: "dateMin" };
  }

  if (payload.type === "box") {
    const boxCount = Number(payload.boxCount);
    const boxes = Array.isArray(payload.boxes) ? (payload.boxes as BoxConfig[]) : [];

    if (!Number.isInteger(boxCount) || boxCount < 1 || boxCount > 50) {
      return { ok: false, error: "minBoxes" };
    }
    if (boxes.length !== boxCount) {
      return { ok: false, error: "boxes" };
    }

    for (const box of boxes) {
      const boxError = validateBox(box);
      if (boxError) return { ok: false, error: boxError };
    }

    return {
      ok: true,
      order: {
        type: "box",
        name,
        email,
        phone,
        boxCount,
        boxes: boxes.map(normalizeBox),
        comments: String(payload.comments ?? "").trim(),
        preferredDate,
        locale,
      },
    };
  }

  if (payload.type === "cake") {
    const massa = String(payload.massa ?? "");
    const recheio = String(payload.recheio ?? "");
    const size = String(payload.size ?? "");
    const description = String(payload.description ?? "").trim();

    if (!(cakeMassaIds as readonly string[]).includes(massa)) {
      return { ok: false, error: "massa" };
    }
    if (!(cakeRecheioIds as readonly string[]).includes(recheio)) {
      return { ok: false, error: "recheio" };
    }
    if (!(cakeSizeIds as readonly string[]).includes(size)) {
      return { ok: false, error: "size" };
    }
    if (description.length < 10) {
      return { ok: false, error: "description" };
    }

    return {
      ok: true,
      order: {
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
      },
    };
  }

  return { ok: false, error: "invalid" };
}
