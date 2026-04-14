import { ubigeoMap } from "../internal/indexes";
import { safeUbigeo6 } from "../internal/safeCode";

export function getUbigeoData(ubigeo: unknown) {
  const code = safeUbigeo6(ubigeo);
  if (!code) return null;

  return ubigeoMap.get(code) ?? null;
}