export const orderErrorCodes = [
  "invalid",
  "name",
  "email",
  "date",
  "dateMin",
  "minBoxes",
  "boxes",
  "boxEmpty",
  "maxFlavors",
  "duplicateFlavor",
  "flavors",
  "flavorCount",
  "boxTotalExceeded",
  "massa",
  "recheio",
  "size",
  "description",
  "minFlavors",
  "generic",
] as const;

export type OrderErrorCode = (typeof orderErrorCodes)[number];

export function resolveOrderError(
  code: string,
  messages: Record<string, string>,
): string {
  return messages[code] ?? messages.generic ?? code;
}
