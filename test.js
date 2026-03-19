import { 
  getDistrict, 
  getProvince, 
  getDepartment, 
  validateUbigeo,
  getUbigeoData,
  parseUbigeo,
  formatUbigeo,
  isValidDepartment,
  isValidProvince,
  isValidDistrict

} from "./dist/index.js";

console.log(getDepartment("150131")); // Lima
console.log(getProvince("150131"));   // Lima
console.log(getDistrict("150131"));   // San Isidro
console.log(validateUbigeo("999999")); // false
console.log(getUbigeoData("150131")); // { ubigeo: '150131', district: 'San Isidro', province: 'Lima', department: 'Lima', population: '54,298', area: '11.10', lat: '-12.0989', lng: '-77.0344' }
console.log(formatUbigeo("150131"));    // San Isidro, Lima, Lima
console.log(formatUbigeo("150131", "short")); // San Isidro, Lima
console.log(parseUbigeo("150131"));   // { departmentCode: '15', provinceCode: '1501', districtCode: '150131' }
console.log(isValidDepartment("15"));   // true
console.log(isValidProvince("1501"));   // true
console.log(isValidDistrict("150131")); // true
console.log(parseUbigeo("123"));        // null
console.log(isValidDepartment("99"));   // false