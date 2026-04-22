import { data } from "../data/ubigeo";
import { UbigeoData } from "../types";

const ubigeoMap = new Map<string, UbigeoData>();

const departmentSet = new Set<string>();
const provinceSet = new Set<string>();
const districtSet = new Set<string>();

const departmentsMap = new Map<string, string>();
const provincesMap = new Map<string, Map<string, string>>();
const districtsMap = new Map<string, { code: string; name: string }[]>();

export const searchIndex: { data: UbigeoData; searchString: string }[] = [];

const normalizeForSearch = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

for (const item of data) {
  const depCode = item.ubigeo.slice(0, 2);
  const provCode = item.ubigeo.slice(0, 4);
  const distCode = item.ubigeo;

  ubigeoMap.set(distCode, item);

  departmentSet.add(depCode);
  provinceSet.add(provCode);
  districtSet.add(distCode);

  if (!departmentsMap.has(depCode)) {
    departmentsMap.set(depCode, item.department);
  }

  if (!provincesMap.has(depCode)) {
    provincesMap.set(depCode, new Map());
  }

  provincesMap.get(depCode)!.set(provCode, item.province);

  if (!districtsMap.has(provCode)) {
    districtsMap.set(provCode, []);
  }

  districtsMap.get(provCode)!.push({
    code: distCode,
    name: item.district,
  });

  const searchString = normalizeForSearch(
    `${item.district} ${item.province} ${item.department}`
  );

  searchIndex.push({
    data: item,
    searchString,
  });
}

export {
  ubigeoMap,
  departmentSet,
  provinceSet,
  districtSet,
  departmentsMap,
  provincesMap,
  districtsMap
};