# ubigeo-fns

[![npm version](https://img.shields.io/npm/v/ubigeo-fns)](https://www.npmjs.com/package/ubigeo-fns)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Downloads](https://img.shields.io/npm/dt/ubigeo-fns)](https://www.npmjs.com/package/ubigeo-fns)

**Funciones utilitarias para trabajar con ubigeos del Perú en JavaScript y TypeScript.**
Permite obtener distrito, provincia, departamento y validar códigos UBIGEO de manera sencilla.

---

## 🔹 Características

* Obtener el **distrito** por código UBIGEO
* Obtener la **provincia** por código UBIGEO
* Obtener el **departamento** por código UBIGEO
* Validar si un **código UBIGEO es correcto**
* Compatible con **JavaScript y TypeScript**
* Optimizado para **Node, React y bundlers**
* Soporta **tree-shaking** y minificación

---

## ⚡ Instalación

```bash
npm install ubigeo-fns
# o usando yarn
yarn add ubigeo-fns
```

---

## 📦 Uso en JavaScript

```javascript
import { getDistrict, getProvince, getDepartment, validateUbigeo } from 'ubigeo-fns';

console.log(getDepartment("150131")); // Lima
console.log(getProvince("150131"));   // Lima
console.log(getDistrict("150131"));   // San Isidro
console.log(validateUbigeo("999999"));// false
```

---

## 📦 Uso en TypeScript

```ts
import { getDistrict, getProvince, getDepartment, validateUbigeo } from 'ubigeo-fns';

const departamento: string = getDepartment("150131");
const provincia: string = getProvince("150131");
const distrito: string = getDistrict("150131");
const esValido: boolean = validateUbigeo("999999");
```

---

## 🔧 Funciones disponibles

| Función            | Descripción                         | Parámetros       | Retorno   |
| ------------------ | ----------------------------------- | ---------------- | --------- |
| `getDistrict()`    | Devuelve el nombre del distrito     | `ubigeo: string` | `string`  |
| `getProvince()`    | Devuelve el nombre de la provincia  | `ubigeo: string` | `string`  |
| `getDepartment()`  | Devuelve el nombre del departamento | `ubigeo: string` | `string`  |
| `validateUbigeo()` | Valida si el UBIGEO existe          | `ubigeo: string` | `boolean` |

---

## ⚙️ Minificación y Build

El proyecto está preparado con `tsup`:

```bash
npm run build
```

* Genera `dist/` con módulos ESM y tipados TypeScript (`.d.ts`)
* Minificado para producción
* Listo para publicar en npm

---

## 📝 Licencia

MIT © 2026 Franco Caballero
[LICENSE](LICENSE)

---

## 🌎 Enlaces

* GitHub: [https://github.com/hansgianfranco/ubigeo-fns](https://github.com/hansgianfranco/ubigeo-fns)
* npm: [https://www.npmjs.com/package/ubigeo-fns](https://www.npmjs.com/package/ubigeo-fns)
