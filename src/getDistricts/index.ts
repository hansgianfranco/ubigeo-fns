import { districtsMap } from "../internal/indexes";
import { safeUbigeo4 } from "../internal/safeCode";

export function getDistricts(
  provinceCode: unknown
): { code: string; name: string }[] {
  const code = safeUbigeo4(provinceCode);
  if (!code) return [];

  return districtsMap.get(code) ?? [];
}