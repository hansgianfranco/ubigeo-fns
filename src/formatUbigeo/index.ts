import { ubigeoMap } from "../internal/indexes";
import { safeUbigeo6 } from "../internal/safeCode";

export function formatUbigeo(
  ubigeo: unknown,
  format: "full" | "short" = "full"
) {
  const code = safeUbigeo6(ubigeo);
  if (!code) return "";

  const data = ubigeoMap.get(code);
  if (!data) return "";

  if (format === "short") {
    return `${data.district}, ${data.province}`;
  }

  return `${data.district}, ${data.province}, ${data.department}`;
}