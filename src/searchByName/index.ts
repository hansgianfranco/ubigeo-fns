import { getSearchIndex } from "../internal/indexes";
import { normalize } from "../internal/normalize";

export type SearchResult = {
  ubigeo: string;
  district: string;
  province: string;
  department: string;
};

export function searchByName(
  query: string,
  options?: { limit?: number }
): SearchResult[] {
  if (typeof query !== "string") return [];

  const q = normalize(query);

  if (!q) return [];

  const results: SearchResult[] = [];
  const limit = options?.limit ?? 50;
  const searchIndex = getSearchIndex();

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