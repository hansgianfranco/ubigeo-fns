import { data } from "../data/ubigeo";

export function getProvince(ubigeo: string): string | null {
  const item = data.find((d) => d.ubigeo === ubigeo);
  return item ? item.province : null;
}