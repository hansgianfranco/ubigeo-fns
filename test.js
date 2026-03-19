import { 
  getDistrict,
  getProvince,
  getDepartment,
  getDepartments,
  getProvinces,
  getDistricts,
  getUbigeoData,
  parseUbigeo,
  formatUbigeo,
  validateUbigeo,
  isValidDepartment,
  isValidProvince,
  isValidDistrict

} from "./dist/index.js";

const ubigeo = "150131";
console.log(getDepartment(ubigeo)); // "Lima"
console.log(getProvince(ubigeo)); // "Lima"
console.log(getDistrict(ubigeo)); // "San Isidro"
console.log(getDepartments()); // [{ code: "15", name: "Lima" }, ...]
console.log(getProvinces("15")); // [{ code: "1501", name: "Lima" }, ...]
console.log(getDistricts("1501")); // [{ code: "150131", name: "San Isidro" }, ...]
console.log(getUbigeoData(ubigeo)); // { ubigeo, district, province, department, lat, lng, ... }
console.log(formatUbigeo(ubigeo)); // "San Isidro, Lima, Lima"
console.log(formatUbigeo(ubigeo, "short")); // "San Isidro, Lima"
console.log(parseUbigeo(ubigeo)); // { departmentCode: "15", provinceCode: "1501", districtCode: "150131" }
console.log(validateUbigeo("999999")); // false
console.log(isValidDepartment("15")); // true
console.log(isValidProvince("1501")); // true
console.log(isValidDistrict("150131")); // true
console.log(parseUbigeo("123")); // null
console.log(isValidDepartment("99")); // false