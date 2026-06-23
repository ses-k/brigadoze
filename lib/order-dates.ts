export const MIN_ORDER_DAYS = 3;

export function getMinOrderDate(): Date {
  const minDate = new Date();
  minDate.setHours(0, 0, 0, 0);
  minDate.setDate(minDate.getDate() + MIN_ORDER_DAYS);
  return minDate;
}

export function getMinOrderDateStr(): string {
  const minDate = getMinOrderDate();
  const y = minDate.getFullYear();
  const m = String(minDate.getMonth() + 1).padStart(2, "0");
  const d = String(minDate.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function parseLocalDate(dateStr: string): Date {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function isOrderDateValid(dateStr: string): boolean {
  if (!dateStr) return false;
  const orderDate = parseLocalDate(dateStr);
  if (Number.isNaN(orderDate.getTime())) return false;
  return orderDate >= getMinOrderDate();
}
