import { data } from "../data/ubigeo";

const districtSet = new Set(data.map(d => d.ubigeo));
const provinceSet = new Set(data.map(d => d.ubigeo.slice(0, 4)));
const departmentSet = new Set(data.map(d => d.ubigeo.slice(0, 2)));

export function validateUbigeo(code: string): boolean {
  return districtSet.has(code);
}

export function isValidDepartment(code: string): boolean {
  if (!/^\d{2}$/.test(code)) return false;
  return departmentSet.has(code);
}

export function isValidProvince(code: string): boolean {
  if (!/^\d{4}$/.test(code)) return false;
  return provinceSet.has(code);
}

export function isValidDistrict(code: string): boolean {
  if (!/^\d{6}$/.test(code)) return false;
  return districtSet.has(code);
}