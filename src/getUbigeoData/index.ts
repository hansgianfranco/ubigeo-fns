import { ubigeoMap } from "../internal/indexes";
import { safeUbigeo6 } from "../internal/safeCode";
import { UbigeoData } from "../types";

export function getUbigeoData(ubigeo: unknown): UbigeoData | null {
  const code = safeUbigeo6(ubigeo);
  if (!code) return null;

  return ubigeoMap.get(code) ?? null;
}