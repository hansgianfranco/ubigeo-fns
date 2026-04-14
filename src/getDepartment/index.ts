import { ubigeoMap } from "../internal/indexes";
import { safeUbigeo6 } from "../internal/safeCode";

export function getDepartment(ubigeo: unknown): string | null {
  const code = safeUbigeo6(ubigeo);
  if (!code) return null;

  return ubigeoMap.get(code)?.department ?? null;
}