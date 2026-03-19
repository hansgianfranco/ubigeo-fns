# ubigeo-fns

[![npm version](https://img.shields.io/npm/v/ubigeo-fns)](https://www.npmjs.com/package/ubigeo-fns)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Downloads](https://img.shields.io/npm/dt/ubigeo-fns)](https://www.npmjs.com/package/ubigeo-fns)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/ubigeo-fns)
![Security](https://img.shields.io/badge/security-policy-blue)

**Funciones utilitarias para trabajar con ubigeos del Perú en JavaScript y TypeScript.**
Permite obtener distrito, provincia y departamento, validar códigos UBIGEO y trabajar con información geográfica completa (coordenadas, población, área) de manera sencilla.


## 🔹 Características

* Obtener **distrito, provincia y departamento** por código UBIGEO
* Acceder a **información completa del ubigeo** (coordenadas, población, área)
* Validar códigos UBIGEO a nivel de **departamento, provincia y distrito**
* Formatear ubigeos en texto listo para mostrar
* Parsear códigos UBIGEO en sus partes jerárquicas
* Búsquedas y validaciones optimizadas (**O(1)** con estructuras eficientes)
* Compatible con **JavaScript y TypeScript** (tipado incluido)
* Optimizado para **Node.js, React y bundlers modernos**
* Soporta **tree-shaking** y minificación


## 💡 Casos de uso

- Formularios con selección de ubigeo (departamento, provincia, distrito)
- Validación de direcciones en sistemas ERP
- Aplicaciones de delivery y logística
- Dashboards y análisis geográfico
- Integración con APIs de facturación electrónica


## ⚡ Instalación

```bash
npm install ubigeo-fns
# o usando yarn
yarn add ubigeo-fns
```


## 📦 Uso
Compatible con JavaScript y TypeScript. Los tipos se infieren automáticamente.
```ts
import {
  getDistrict,
  getProvince,
  getDepartment,
  getDepartments,
  getProvinces,
  getDistricts
  validateUbigeo,
  getUbigeoData,
  parseUbigeo,
  formatUbigeo,
  isValidDepartment,
  isValidProvince,
  isValidDistrict
} from "ubigeo-fns";

// Ejemplo básico
const ubigeo = "150131";

getDepartment(ubigeo); // Lima
getProvince(ubigeo);   // Lima
getDistrict(ubigeo);   // San Isidro

getDepartments(); // [{ code: "15", name: "Lima" }, ...]
getProvinces("15"); // [{ code: "1501", name: "Lima" }, ...]
getDistricts("1501"); // [{ code: "150131", name: "San Isidro" }, ...]

// Validación
validateUbigeo(ubigeo); // true

// Data completa
const data = getUbigeoData(ubigeo);

// Formato
formatUbigeo(ubigeo);         // "San Isidro, Lima, Lima"
formatUbigeo(ubigeo, "short");// "San Isidro, Lima"

// Parseo
parseUbigeo(ubigeo);
// { departmentCode: "15", provinceCode: "1501", districtCode: "150131" }

// Validaciones específicas
isValidDepartment("15");
isValidProvince("1501");
isValidDistrict("150131");
```
### 🧩 Tipos

```ts
interface UbigeoData {
  ubigeo: string;
  district: string;
  province: string;
  department: string;
  population: string;
  area: string;
  lat: string;
  lng: string;
}
```


## 🔧 Funciones disponibles

| Función               | Descripción                                | Parámetros                                   | Retorno              |
| --------------------- | ------------------------------------------ | -------------------------------------------- | -------------------- |
| `getDepartment()`     | Devuelve el nombre del departamento        | `ubigeo: string`                             | `string`             |
| `getProvince()`       | Devuelve el nombre de la provincia         | `ubigeo: string`                             | `string`             |
| `getDistrict()`       | Devuelve el nombre del distrito            | `ubigeo: string`                             | `string`             |
| `getDepartments()`   | Lista todos los departamentos             | -             | `{ code, name }[]` |
| `getProvinces()`     | Lista provincias por departamento         | `code: string`| `{ code, name }[]` |
| `getDistricts()`     | Lista distritos por provincia             | `code: string`| `{ code, name }[]` |
| `validateUbigeo()`    | Valida si el UBIGEO existe                 | `ubigeo: string`                             | `boolean`            |
| `getUbigeoData()`     | Devuelve toda la información del ubigeo    | `ubigeo: string`                             | `UbigeoData \| null` |
| `parseUbigeo()`       | Separa el ubigeo en códigos jerárquicos    | `ubigeo: string`                             | `object \| null`     |
| `formatUbigeo()`      | Devuelve el ubigeo formateado              | `ubigeo: string, format?: 'full' \| 'short'` | `string`             |
| `isValidDepartment()` | Valida si el código de departamento existe | `code: string`                               | `boolean`            |
| `isValidProvince()`   | Valida si el código de provincia existe    | `code: string`                               | `boolean`            |
| `isValidDistrict()`   | Valida si el código de distrito existe     | `code: string`                               | `boolean`            |

## ⚙️ Minificación y Build

El proyecto está preparado con `tsup`:

```bash
npm run build
```

* Genera `dist/` con módulos ESM y tipados TypeScript (`.d.ts`)
* Minificado para producción
* Listo para publicar en npm


## 📦 Changelog

### v1.2.0

✨ Nuevas funciones:
- getDepartments
- getProvinces
- getDistricts

⚡ Mejora:
- Acceso jerárquico optimizado con Map (O(1))
- Ideal para formularios y selects dependientes

---

### v1.1.0

✨ Nuevas funciones:
- getUbigeoData
- parseUbigeo
- formatUbigeo
- isValidDepartment
- isValidProvince
- isValidDistrict

⚡ Mejora:
- Validaciones optimizadas usando Set (O(1))

---

### v1.0.0

🎉 Lanzamiento inicial

✨ Funciones:
- getDistrict
- getProvince
- getDepartment
- validateUbigeo

⚙️ Características:
- Compatible con JavaScript y TypeScript
- Soporte para ES Modules (ESM)
- Tipado incluido (.d.ts)
- Optimizado para Node.js y bundlers
- Soporta tree-shaking


## 📝 Licencia

MIT © 2026 Franco Caballero
[LICENSE](LICENSE)


## 🌎 Enlaces

* GitHub: [https://github.com/hansgianfranco/ubigeo-fns](https://github.com/hansgianfranco/ubigeo-fns)
* npm: [https://www.npmjs.com/package/ubigeo-fns](https://www.npmjs.com/package/ubigeo-fns)
