import { data } from "../data/ubigeo";

export function getDistrict(ubigeo: string): string | null {
  const item = data.find((d) => d.ubigeo === ubigeo);
  return item ? item.district : null;
}