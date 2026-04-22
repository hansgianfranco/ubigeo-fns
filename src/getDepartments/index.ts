import { departmentsMap } from "../internal/indexes";

export function getDepartments(): { code: string; name: string }[] {
  return Array.from(departmentsMap.entries()).map(([code, name]) => ({
    code,
    name,
  }));
}