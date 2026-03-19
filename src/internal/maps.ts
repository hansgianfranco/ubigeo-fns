import { data } from "../data/ubigeo";

const departmentsMap = new Map<string, string>();
const provincesMap = new Map<string, Map<string, string>>();
const districtsMap = new Map<string, { code: string; name: string }[]>();

for (const item of data) {
  const depCode = item.ubigeo.slice(0, 2);
  const provCode = item.ubigeo.slice(0, 4);
  const distCode = item.ubigeo;

  if (!departmentsMap.has(depCode)) {
    departmentsMap.set(depCode, item.department);
  }

  if (!provincesMap.has(depCode)) {
    provincesMap.set(depCode, new Map());
  }
  const provMap = provincesMap.get(depCode)!;
  if (!provMap.has(provCode)) {
    provMap.set(provCode, item.province);
  }

  if (!districtsMap.has(provCode)) {
    districtsMap.set(provCode, []);
  }
  districtsMap.get(provCode)!.push({
    code: distCode,
    name: item.district,
  });
}

export { departmentsMap, provincesMap, districtsMap };