# 📦 Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project follows [Semantic Versioning](https://semver.org/).

---

## [1.2.0] - 2026-03-19

### ✨ Added
- getDepartments
- getProvinces
- getDistricts

### ⚡ Improved
- Optimized hierarchical lookups using Map (O(1))
- Better performance for forms and dependent selects

---

## [1.1.0] - 2026-03-18

### ✨ Added
- getUbigeoData
- parseUbigeo
- formatUbigeo
- isValidDepartment
- isValidProvince
- isValidDistrict

### ⚡ Improved
- Validation performance optimized using Set (O(1))

---

## [1.0.0] - 2026-03-17

### 🎉 Initial Release

### ✨ Added
- getDistrict
- getProvince
- getDepartment
- validateUbigeo

### ⚙️ Features
- JavaScript and TypeScript support
- ES Modules (ESM)
- Type definitions included (.d.ts)
- Tree-shaking support
- Optimized for Node.js and modern bundlers