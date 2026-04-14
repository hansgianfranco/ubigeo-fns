import { departmentsMap } from "../internal/indexes";

export function getDepartments() {
  return Array.from(departmentsMap.entries()).map(([code, name]) => ({
    code,
    name,
  }));
}