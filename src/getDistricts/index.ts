import { districtsMap } from "../internal/maps";

export function getDistricts(provinceCode: string) {
  return districtsMap.get(provinceCode) || [];
}