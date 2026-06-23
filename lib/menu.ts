import type { Locale } from "./translations";

export const brigadeiroFlavorIds = [
  "bolo-bolacha",
  "pastel-de-nata",
  "coco",
  "salame",
  "quindim",
  "chocolate-branco",
  "moscatel",
  "limao",
  "churro",
  "amendoa",
  "morango",
  "chocolate",
  "oreo",
  "cafe",
  "maracuja",
  "doce-leite-coco-torrado",
  "tamara",
  "caramelo-salgado",
  "creme-brulee",
] as const;

export const cakeMassaIds = [
  "iogurte",
  "pao-de-lo",
  "chocolate",
  "cenoura",
  "red-velvet",
  "noz",
] as const;

export const cakeRecheioIds = [
  "doce-ovos",
  "brigadeiro-branco",
  "brigadeiro-chocolate",
  "chantilly-frutas",
  "caramelo-salgado",
  "doce-leite",
  "nutella",
] as const;

export const cakeSizeIds = ["15cm", "20cm", "25cm", "other"] as const;

type FlavorLabels = Record<(typeof brigadeiroFlavorIds)[number], { pt: string; en: string }>;
type MassaLabels = Record<(typeof cakeMassaIds)[number], { pt: string; en: string }>;
type RecheioLabels = Record<(typeof cakeRecheioIds)[number], { pt: string; en: string }>;

export const flavorLabels: FlavorLabels = {
  "bolo-bolacha": { pt: "Bolo de Bolacha", en: "Biscuit Cake" },
  "pastel-de-nata": { pt: "Pastel de Nata", en: "Pastel de Nata" },
  coco: { pt: "Côco", en: "Coconut" },
  salame: { pt: "Salame", en: "Chocolate Salami" },
  quindim: { pt: "Quindim", en: "Quindim" },
  "chocolate-branco": { pt: "Chocolate Branco", en: "White Chocolate" },
  moscatel: { pt: "Moscatel", en: "Moscatel" },
  limao: { pt: "Limão", en: "Lemon" },
  churro: { pt: "Churro", en: "Churro" },
  amendoa: { pt: "Amêndoa", en: "Almond" },
  morango: { pt: "Morango", en: "Strawberry" },
  chocolate: { pt: "Chocolate", en: "Chocolate" },
  oreo: { pt: "Oreo", en: "Oreo" },
  cafe: { pt: "Café", en: "Coffee" },
  maracuja: { pt: "Maracujá", en: "Passionfruit" },
  "doce-leite-coco-torrado": {
    pt: "Doce de Leite com Côco Torrado",
    en: "Condensed Milk with Toasted Coconut",
  },
  tamara: { pt: "Tâmara", en: "Date" },
  "caramelo-salgado": { pt: "Caramelo Salgado", en: "Salted Caramel" },
  "creme-brulee": { pt: "Crème Brûlée", en: "Crème Brûlée" },
};

export const massaLabels: MassaLabels = {
  iogurte: { pt: "Iogurte", en: "Yoghurt" },
  "pao-de-lo": { pt: "Pão-de-ló Tradicional", en: "Traditional Sponge Cake" },
  chocolate: { pt: "Chocolate", en: "Chocolate" },
  cenoura: { pt: "Cenoura", en: "Carrot" },
  "red-velvet": { pt: "Red Velvet", en: "Red Velvet" },
  noz: { pt: "Noz", en: "Walnut" },
};

export const recheioLabels: RecheioLabels = {
  "doce-ovos": { pt: "Doce de Ovos", en: "Egg Yolk Custard" },
  "brigadeiro-branco": { pt: "Brigadeiro Branco", en: "White Brigadeiro" },
  "brigadeiro-chocolate": { pt: "Brigadeiro de Chocolate", en: "Chocolate Brigadeiro" },
  "chantilly-frutas": { pt: "Chantilly com Frutas", en: "Whipped Cream with Fruit" },
  "caramelo-salgado": { pt: "Caramelo Salgado", en: "Salted Caramel" },
  "doce-leite": { pt: "Doce de Leite", en: "Dulce de Leche" },
  nutella: { pt: "Nutella", en: "Nutella" },
};

export function getFlavorLabel(id: (typeof brigadeiroFlavorIds)[number], locale: Locale) {
  return flavorLabels[id][locale];
}

export function getMassaLabel(id: (typeof cakeMassaIds)[number], locale: Locale) {
  return massaLabels[id][locale];
}

export function getRecheioLabel(id: (typeof cakeRecheioIds)[number], locale: Locale) {
  return recheioLabels[id][locale];
}
