import { data } from "../data/ubigeo";

export function getDepartment(ubigeo: string): string | null {
  const item = data.find((d) => d.ubigeo === ubigeo);
  return item ? item.department : null;
}