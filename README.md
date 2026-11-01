# ubigeo-fns

[![npm version](https://img.shields.io/npm/v/ubigeo-fns)](https://www.npmjs.com/package/ubigeo-fns)
[![npm downloads](https://img.shields.io/npm/dt/ubigeo-fns)](https://www.npmjs.com/package/ubigeo-fns)
[![bundle size](https://img.shields.io/bundlephobia/minzip/ubigeo-fns)](https://bundlephobia.com/package/ubigeo-fns)
[![license](https://img.shields.io/npm/l/ubigeo-fns)](LICENSE.md)

**Funciones utilitarias para trabajar con códigos UBIGEO del Perú en JavaScript y TypeScript.**  
Basado en datos oficiales del [INEI](https://www.inei.gob.pe/) — incluye coordenadas, población y área por distrito.

---

## Características

- 🔍 Consulta de **distrito, provincia y departamento** por código UBIGEO
- 📋 Listados jerárquicos: departamentos → provincias → distritos
- 📦 Información completa del ubigeo (coordenadas GPS, población, área en km²)
- ✅ Validación de códigos a nivel departamento, provincia y distrito
- 🖋️ Formateo de ubigeo en texto listo para UI (`"San Isidro, Lima, Lima"`)
- 🧩 Parseo de código UBIGEO en estructura jerárquica
- 🔎 Búsqueda por nombre con soporte de acentos y mayúsculas (`searchByName`)
- 🔢 Entrada flexible: acepta `string` o `number` en todas las funciones
- 📐 Códigos cortos: `getDepartment("15")` y `getProvince("1501")` funcionan directamente
- ⚡ Lookups O(1) con `Map` y `Set` internos
- 🌳 Tree-shakeable · Dual ESM + CJS · TypeScript incluido

## Casos de uso

- Formularios con selects encadenados (departamento → provincia → distrito)
- Validación de direcciones para facturación electrónica (SUNAT)
- Apps de delivery, logística y e-commerce
- Dashboards geográficos y mapas
- Normalización y enriquecimiento de datos de ubicación

---

## Instalación

```bash
npm install ubigeo-fns
# o con yarn
yarn add ubigeo-fns
# o con pnpm
pnpm add ubigeo-fns
```

---

## Uso rápido

```ts
import {
  getDepartment,
  getProvince,
  getDistrict,
  validateUbigeo,
  formatUbigeo,
  searchByName,
} from "ubigeo-fns";

const ubigeo = "150131";

// Consulta jerárquica
getDepartment(ubigeo); // "Lima"
getProvince(ubigeo);   // "Lima"
getDistrict(ubigeo);   // "San Isidro"

// Validación
validateUbigeo(ubigeo); // true
validateUbigeo("999999"); // false

// Formateo para UI
formatUbigeo(ubigeo);          // "San Isidro, Lima, Lima"
formatUbigeo(ubigeo, "short"); // "San Isidro, Lima"

// Búsqueda por nombre (insensible a mayúsculas y acentos)
searchByName("san isidro");        // [{ ubigeo: "150131", district: "San Isidro", ... }]
searchByName("san", { limit: 5 }); // primeros 5 resultados que contengan "san"
```

---

## API

### Consultas por código

```ts
getDepartment(ubigeo: unknown): string | null
getProvince(ubigeo: unknown):   string | null
getDistrict(ubigeo: unknown):   string | null
```

Aceptan un código UBIGEO de **2, 4 o 6 dígitos** (string o number).
Devuelven el nombre correspondiente o `null` si el código no existe.

```ts
getDepartment("150131"); // "Lima"  — desde código de 6 dígitos
getDepartment("15");     // "Lima"  — desde código de departamento
getDepartment(15);       // "Lima"  — número también es válido

getProvince("150131");   // "Lima"  — desde código de 6 dígitos
getProvince("1501");     // "Lima"  — desde código de provincia
```

---

### Listados jerárquicos

```ts
getDepartments():                   { code: string; name: string }[]
getProvinces(departmentCode: unknown): { code: string; name: string }[]
getDistricts(provinceCode: unknown):   { code: string; name: string }[]
```

```ts
getDepartments();    // [{ code: "01", name: "Amazonas" }, { code: "15", name: "Lima" }, ...]
getProvinces("15");  // [{ code: "1501", name: "Lima" }, { code: "1502", name: "Barranca" }, ...]
getDistricts("1501"); // [{ code: "150101", name: "Lima" }, { code: "150131", name: "San Isidro" }, ...]
```

---

### Información completa

```ts
getUbigeoData(ubigeo: unknown): UbigeoData | null
```

```ts
const data = getUbigeoData("150131");
// {
//   ubigeo:     "150131",
//   district:   "San Isidro",
//   province:   "Lima",
//   department: "Lima",
//   population: 60367,
//   area:       9.36,      // km²
//   lat:        -12.0989,
//   lng:        -77.0434
// }
```

---

### Parseo

```ts
parseUbigeo(ubigeo: unknown): { departmentCode: string; provinceCode: string; districtCode: string } | null
```

```ts
parseUbigeo("150131");
// { departmentCode: "15", provinceCode: "1501", districtCode: "150131" }

parseUbigeo("15013a"); // null — formato inválido
```

---

### Formateo

```ts
formatUbigeo(ubigeo: unknown, format?: "full" | "short"): string | null
```

| `format` | Resultado |
|---|---|
| `"full"` _(default)_ | `"San Isidro, Lima, Lima"` |
| `"short"` | `"San Isidro, Lima"` |

```ts
formatUbigeo("150131");          // "San Isidro, Lima, Lima"
formatUbigeo("150131", "short"); // "San Isidro, Lima"
formatUbigeo("999999");          // null
```

---

### Validación

```ts
validateUbigeo(code: unknown):    boolean  // valida código de 6 dígitos (distrito)
isValidDepartment(code: unknown): boolean  // valida código de 2 dígitos
isValidProvince(code: unknown):   boolean  // valida código de 4 dígitos
isValidDistrict(code: unknown):   boolean  // valida código de 6 dígitos
```

```ts
validateUbigeo("150131");    // true
validateUbigeo("999999");    // false
isValidDepartment("15");     // true
isValidProvince("1501");     // true
isValidDistrict("150131");   // true
```

---

### Búsqueda por nombre

```ts
searchByName(query: string, options?: { limit?: number }): SearchResult[]
```

- Insensible a mayúsculas/minúsculas
- Insensible a acentos (`"Ancash"` ≡ `"Áncash"`)
- Busca en distrito, provincia y departamento simultáneamente
- Límite por defecto: **50 resultados**

```ts
searchByName("chachapoyas");
// [{ ubigeo: "010101", district: "Chachapoyas", province: "Chachapoyas", department: "Amazonas" }]

searchByName("lima", { limit: 3 });
// Primeros 3 resultados que contienen "lima" en cualquier nivel
```

---

### Tipos TypeScript

```ts
import type { UbigeoData, SearchResult } from "ubigeo-fns";

interface UbigeoData {
  ubigeo:     string;  // Código UBIGEO de 6 dígitos
  district:   string;  // Nombre del distrito
  province:   string;  // Nombre de la provincia
  department: string;  // Nombre del departamento
  population: number;  // Población (fuente INEI)
  area:       number;  // Área en km²
  lat:        number;  // Latitud decimal
  lng:        number;  // Longitud decimal
}

interface SearchResult {
  ubigeo:     string;
  district:   string;
  province:   string;
  department: string;
}
```

---

## Imports por subpath

Para aplicaciones que requieren máxima granularidad en el tree-shaking, cada función está disponible como subpath independiente:

```ts
import { getDepartment }  from "ubigeo-fns/getDepartment";
import { getProvince }    from "ubigeo-fns/getProvince";
import { getDistrict }    from "ubigeo-fns/getDistrict";
import { getDepartments } from "ubigeo-fns/getDepartments";
import { getProvinces }   from "ubigeo-fns/getProvinces";
import { getDistricts }   from "ubigeo-fns/getDistricts";
import { getUbigeoData }  from "ubigeo-fns/getUbigeoData";
import { parseUbigeo }    from "ubigeo-fns/parseUbigeo";
import { formatUbigeo }   from "ubigeo-fns/formatUbigeo";
import { searchByName }   from "ubigeo-fns/searchByName";
import {
  validateUbigeo,
  isValidDepartment,
  isValidProvince,
  isValidDistrict,
} from "ubigeo-fns/validators";
```

---

## Nota sobre el tamaño del bundle

Este paquete incluye el dataset completo de ubigeos del Perú con datos geográficos (**~245 KB minificado**).  
Es la única dependencia real del paquete y es requerida por todas las funciones.

- ✅ **Node.js y backend**: uso directo sin consideraciones adicionales
- ✅ **Bundlers (Vite, Webpack, esbuild)**: el chunk de datos se comparte entre imports en ESM
- ⚠️ **Frontend con bundle crítico**: considera cargar el módulo de forma lazy si el tamaño es una restricción

---

## Desarrollo

```bash
# Instalar dependencias
npm install

# Build (ESM + CJS + tipos)
npm run build

# Tests
npm test

# Tests con cobertura
npm run test:coverage

# Linting
npm run lint
npm run lint:fix
```

---

## Documentación adicional

| Documento | Descripción |
|---|---|
| [CHANGELOG.md](CHANGELOG.md) | Historial de versiones |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Guía para contribuir |
| [TESTING.md](TESTING.md) | Alcance de las pruebas |
| [DATA_SOURCE.md](DATA_SOURCE.md) | Fuente y licencia de los datos |
| [SECURITY.md](SECURITY.md) | Política de seguridad |
| [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) | Código de conducta |

---

## Licencia

MIT © 2026 [Franco Caballero](https://francocaballero.dev)
