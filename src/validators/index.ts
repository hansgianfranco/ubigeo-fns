import { departmentSet, provinceSet, districtSet } from "../internal/indexes";
import { safeUbigeo2, safeUbigeo4, safeUbigeo6 } from "../internal/safeCode";

export function validateUbigeo(code: unknown): boolean {
  const c = safeUbigeo6(code);
  if (!c) return false;
  return districtSet.has(c);
}

export function isValidDepartment(code: unknown): boolean {
  const c = safeUbigeo2(code);
  if (!c) return false;
  return departmentSet.has(c);
}

export function isValidProvince(code: unknown): boolean {
  const c = safeUbigeo4(code);
  if (!c) return false;
  return provinceSet.has(c);
}

export function isValidDistrict(code: unknown): boolean {
  const c = safeUbigeo6(code);
  if (!c) return false;
  return districtSet.has(c);
}