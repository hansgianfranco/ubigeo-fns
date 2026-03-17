import { 
  getDistrict, 
  getProvince, 
  getDepartment, 
  validateUbigeo 
} from "./dist/index.js";

console.log(getDepartment("150131"));
console.log(getProvince("150131"));
console.log(getDistrict("150131"));
console.log(validateUbigeo("999999"));