import { getUbigeoData } from "../getUbigeoData";

export function formatUbigeo(
  ubigeo: string,
  format: 'full' | 'short' = 'full'
) {
  const data = getUbigeoData(ubigeo);
  if (!data) return '';

  if (format === 'short') {
    return `${data.district}, ${data.province}`;
  }

  return `${data.district}, ${data.province}, ${data.department}`;
}