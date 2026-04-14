import { safeUbigeo6 } from "../internal/safeCode";

export function parseUbigeo(ubigeo: unknown) {
  const code = safeUbigeo6(ubigeo);
  if (!code) return null;

  return {
    departmentCode: code.slice(0, 2),
    provinceCode: code.slice(0, 4),
    districtCode: code
  };
}