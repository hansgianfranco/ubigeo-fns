import { data } from "../data/ubigeo.js";

export function getProvince(ubigeo: string): string | null {
  const item = data.find((d) => d.ubigeo === ubigeo);
  return item ? item.province : null;
}