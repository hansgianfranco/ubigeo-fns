import { data } from "../data/ubigeo";

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

export function searchByName(query: string): SearchResult[] {
  if (typeof query !== "string") return [];

  const q = normalize(query);

  if (!q) return [];

  const results: SearchResult[] = [];

  for (const item of data) {
    if (
      normalize(item.district).includes(q) ||
      normalize(item.province).includes(q) ||
      normalize(item.department).includes(q)
    ) {
      results.push({
        ubigeo: item.ubigeo,
        district: item.district,
        province: item.province,
        department: item.department,
      });
    }
  }

  return results;
}