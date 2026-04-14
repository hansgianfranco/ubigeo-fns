import { provincesMap } from "../internal/indexes";
import { safeUbigeo2 } from "../internal/safeCode";

export function getProvinces(departmentCode: unknown) {
  const code = safeUbigeo2(departmentCode);
  if (!code) return [];

  const provMap = provincesMap.get(code);
  if (!provMap) return [];

  return Array.from(provMap.entries()).map(([code, name]) => ({
    code,
    name,
  }));
}