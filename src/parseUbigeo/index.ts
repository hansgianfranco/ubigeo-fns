export function parseUbigeo(ubigeo: string) {
  if (!/^\d{6}$/.test(ubigeo)) return null;

  return {
    departmentCode: ubigeo.slice(0, 2),
    provinceCode: ubigeo.slice(0, 4),
    districtCode: ubigeo.slice(0, 6),
  };
}