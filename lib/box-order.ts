import type { brigadeiroFlavorIds } from "./menu";

export const BRIGADEIROS_PER_BOX = 12;
export const MAX_FLAVORS_PER_BOX = 12;

export type BoxFlavorLine = {
  flavorId: string;
  count: number;
};

export type BoxConfig = BoxFlavorLine[];

export function createEmptyBoxLine(): BoxFlavorLine {
  return { flavorId: "", count: 1 };
}

export function createEmptyBox(): BoxConfig {
  return [createEmptyBoxLine()];
}

export function getBoxTotal(box: BoxConfig): number {
  return box.reduce((sum, line) => sum + (line.flavorId ? line.count : 0), 0);
}

export function getBoxFilledLines(box: BoxConfig): BoxFlavorLine[] {
  return box.filter((line) => line.flavorId && line.count > 0);
}

export function resizeBoxes(boxes: BoxConfig[], count: number): BoxConfig[] {
  if (count <= boxes.length) {
    return boxes.slice(0, count);
  }
  const next = [...boxes];
  while (next.length < count) {
    next.push(createEmptyBox());
  }
  return next;
}

export function isValidFlavorId(id: string): id is (typeof brigadeiroFlavorIds)[number] {
  return id.length > 0;
}
