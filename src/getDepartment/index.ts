import { ubigeoMap, departmentsMap } from "../internal/indexes";
import { safeUbigeo6, safeUbigeo2 } from "../internal/safeCode";

export function getDepartment(ubigeo: unknown): string | null {
  const code6 = safeUbigeo6(ubigeo);
  if (code6) {
    const res = ubigeoMap.get(code6);
    if (res) return res.department;
  }

  const code2 = safeUbigeo2(ubigeo);
  if (code2) return departmentsMap.get(code2) ?? null;

  return null;
}