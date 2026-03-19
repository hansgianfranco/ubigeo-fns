import { departmentsMap } from "../internal/maps";

export function getDepartments() {
  return Array.from(departmentsMap.entries()).map(([code, name]) => ({
    code,
    name,
  }));
}