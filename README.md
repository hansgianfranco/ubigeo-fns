# ubigeo-fns

[![npm version](https://img.shields.io/npm/v/ubigeo-fns)](https://www.npmjs.com/package/ubigeo-fns)
[![npm downloads](https://img.shields.io/npm/dt/ubigeo-fns)](https://www.npmjs.com/package/ubigeo-fns)
[![bundle size](https://img.shields.io/bundlephobia/minzip/ubigeo-fns)](https://bundlephobia.com/package/ubigeo-fns)
![Security](https://img.shields.io/badge/security-policy-blue)
---

**Funciones utilitarias para trabajar con ubigeos del Perú en JavaScript y TypeScript.**  
Basado en datos oficiales del **INEI (Instituto Nacional de Estadística e Informática)**.

## 📊 Fuente de datos

Los datos de ubigeos incluidos en este paquete provienen del **INEI** (códigos de departamentos, provincias y distritos del Perú) y se complementan con información geográfica (coordenadas, población y área) extraída de fuentes oficiales.
Referencia: [INEI - Códigos de ubigeo](https://www.inei.gob.pe/)

## ✨ Características

- Obtener **distrito, provincia y departamento** por código UBIGEO
- Acceder a información completa del ubigeo (coordenadas, población, área)
- Validar códigos UBIGEO (departamento, provincia, distrito)
- Formatear ubigeos en texto listo para UI
- Parsear códigos UBIGEO en estructura jerárquica
- Búsqueda por nombre (`searchByName`) con coincidencia parcial
- Búsquedas optimizadas con estructuras **O(1)**
- Compatible con **JavaScript y TypeScript**
- Optimizado para **Node.js, React y bundlers modernos**
- Soporta **tree-shaking y minificación**

## 💡 Casos de uso

- Formularios con selects dependientes (departamento → provincia → distrito)
- Validación de direcciones en sistemas de facturación electrónica (Sunat)
- Apps de delivery y logística
- Dashboards geográficos
- Normalización de ubicaciones en Perú
- Sistemas de registro de personas y empresas


## ⚡ Instalación

```bash
npm install ubigeo-fns
# o usando yarn
yarn add ubigeo-fns
```


## 📦 Uso rápido
```ts
import {
  getDistrict,
  getProvince,
  getDepartment,
  validateUbigeo,
  formatUbigeo,
  searchByName
} from "ubigeo-fns";

// Obtener jerarquía geográfica
const ubigeo = "150131";

getDepartment(ubigeo); // "Lima"
getProvince(ubigeo);   // "Lima"
getDistrict(ubigeo);   // "San Isidro"

// Validar código
validateUbigeo(ubigeo); // true

// Formatear para UI
formatUbigeo(ubigeo);         // "San Isidro, Lima, Lima"
formatUbigeo(ubigeo, "short");// "San Isidro, Lima"

// Búsqueda por nombre
searchByName("San Isidro");   // [{ ubigeo: "150131", district: "San Isidro", ... }]
```


## 📚 API completa
```ts
import {
  getDistrict,
  getProvince,
  getDepartment,
  getDepartments,
  getProvinces,
  getDistricts,
  validateUbigeo,
  getUbigeoData,
  parseUbigeo,
  formatUbigeo,
  isValidDepartment,
  isValidProvince,
  isValidDistrict,
  searchByName
} from "ubigeo-fns";

// Obtener listas jerárquicas
getDepartments();   // [{ code: "15", name: "Lima" }, ...]
getProvinces("15"); // [{ code: "1501", name: "Lima" }, ...]
getDistricts("1501"); // [{ code: "150131", name: "San Isidro" }, ...]

// Información completa
const data = getUbigeoData("150131");
// {
//   ubigeo: "150131",
//   district: "San Isidro",
//   province: "Lima",
//   department: "Lima",
//   population: 60367,
//   area: 9.36,
//   lat: -12.0989,
//   lng: -77.0434
// }

// Parsear códigos
parseUbigeo("150131");
// { departmentCode: "15", provinceCode: "1501", districtCode: "150131" }

// Validaciones específicas
isValidDepartment("15");   // true
isValidProvince("1501");   // true
isValidDistrict("150131"); // true
```

### 🧩 Tipos TypeScript

```ts
interface UbigeoData {
  ubigeo: string;      // Código de 6 dígitos
  district: string;    // Nombre del distrito
  province: string;    // Nombre de la provincia
  department: string;  // Nombre del departamento
  population: number;  // Población (fuente: INEI)
  area: number;        // Área en km²
  lat: number;         // Latitud
  lng: number;         // Longitud
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
| `searchByName()`      | Búsqueda por nombre              | `name: string`             | `UbigeoData[]` |
| `isValidDepartment()` | Valida si el código de departamento existe | `code: string`                               | `boolean`            |
| `isValidProvince()`   | Valida si el código de provincia existe    | `code: string`                               | `boolean`            |
| `isValidDistrict()`   | Valida si el código de distrito existe     | `code: string`                               | `boolean`            |

## ⚙️ Desarrollo y build

El proyecto está preparado con `tsup` para builds optimizados:

```bash
npm run build
```

- Genera `dist/` con ESM + TypeScript types
- Minificado y optimizado
- Listo para publicar en npm

## ⚠️ Tamaño del bundle

Este paquete incluye el dataset completo de ubigeos con información geográfica (~245KB).

- Recomendado para Node.js, backend y aplicaciones empresariales
- Para aplicaciones frontend, considera lazy loading si el tamaño es crítico
- El tree-shaking es compatible, pero el dataset es compartido entre funciones

## 📦 Changelog

Ver [CHANGELOG.md](CHANGELOG.md) para el historial de versiones.


## 📝 Licencia

MIT © 2026 Franco Caballero
[LICENSE](LICENSE)


## 🌎 Enlaces

- GitHub: [https://github.com/hansgianfranco/ubigeo-fns](https://github.com/hansgianfranco/ubigeo-fns)
- npm: [https://www.npmjs.com/package/ubigeo-fns](https://www.npmjs.com/package/ubigeo-fns)
- INEI - Ubigeos: [https://www.inei.gob.pe](https://www.inei.gob.pe)
