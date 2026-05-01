import { ubigeoMap, provinceNamesMap } from "../internal/indexes";
import { safeUbigeo6, safeUbigeo4 } from "../internal/safeCode";

export function getProvince(ubigeo: unknown): string | null {
  const code6 = safeUbigeo6(ubigeo);
  if (code6) {
    const res = ubigeoMap.get(code6);
    if (res) return res.province;
  }

  const code4 = safeUbigeo4(ubigeo);
  if (code4) return provinceNamesMap.get(code4) ?? null;

  return null;
}