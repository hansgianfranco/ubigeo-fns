import { provincesMap } from "../internal/maps";

export function getProvinces(departmentCode: string) {
  const provMap = provincesMap.get(departmentCode);

  if (!provMap) return [];

  return Array.from(provMap.entries()).map(([code, name]) => ({
    code,
    name,
  }));
}