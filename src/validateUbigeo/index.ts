import { data } from "../data/ubigeo.js";

export function validateUbigeo(code: string): boolean {
  return data.some((d) => d.ubigeo === code);
}