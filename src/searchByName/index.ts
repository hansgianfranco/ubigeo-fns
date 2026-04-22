import { searchIndex } from "../internal/indexes";

export type SearchResult = {
  ubigeo: string;
  district: string;
  province: string;
  department: string;
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export function searchByName(
  query: string,
  options?: { limit?: number }
): SearchResult[] {
  if (typeof query !== "string") return [];

  const q = normalize(query);

  if (!q) return [];

  const results: SearchResult[] = [];
  const limit = options?.limit ?? 50;

  for (const item of searchIndex) {
    if (item.searchString.includes(q)) {
      results.push({
        ubigeo: item.data.ubigeo,
        district: item.data.district,
        province: item.data.province,
        department: item.data.department,
      });

      if (results.length >= limit) {
        break;
      }
    }
  }

  return results;
}