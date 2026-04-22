# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project follows [Semantic Versioning](https://semver.org/).

---

## [2.1.0] - 2026-04-22

### Added
- Exported TypeScript types `UbigeoData` and `SearchResult`
- `searchByName` now accepts an optional `limit` parameter for pagination/limiting results (default: 50)
- Support for numeric inputs in all public API functions (auto-converts and pads zeros automatically)

### Changed
- `formatUbigeo` now returns `null` instead of `""` when provided an invalid ubigeo to unify behavior across functions.

### Improved
- Massively improved performance of `searchByName` by pre-computing normalized search strings at startup
- Fixed ESLint configuration and exported strict explicit return types for all public module boundaries
- Migrated testing framework from Node.js native test runner to **Jest** with `ts-jest` for direct source code testing and accurate coverage reporting

---

## [2.0.1] - 2026-04-15
### Fixed
- Added missing export for `findByName` in package entrypoint

### Added
- `TESTING.md` with testing guide and coverage scope
- `RELEASE.md` with release process and publishing workflow
- `DATA_SOURCE.md` documenting official INEI (Peru) data source

### Changed
- Improved package public API consistency
- Standardized repository documentation structure
- Improved clarity of project maintainability and contribution flow
- Updated and cleaned project documentation files:
  - `CONTRIBUTING.md`
  - `CODE_OF_CONDUCT.md`
  - `SECURITY.md`

### Notes
- No breaking changes
- Fully backward compatible with 2.0.0

---

## [2.0.0] - 2026-04-13

### Added
- `searchByName` function for searching ubigeos by district, province, or department name
- Case-insensitive search support
- Support for user-friendly text queries focused on Peru geography

### Improved
- Migrated internal lookups from `Array.find()` to `Map` and `Set` (O(1) performance)
- Standardized input normalization across all public functions
- Improved robustness for edge cases (null, undefined, empty strings, invalid formats)
- Consistent validation behavior across all APIs

### Testing
- Expanded test coverage with Node.js native test runner
- Added edge-case validation:
  - null and undefined inputs
  - whitespace and malformed strings
  - invalid and overflow UBIGEO codes
  - non-string inputs (number, array, object)
- Improved reliability of validation and parsing logic

---

## [1.2.0] - 2026-03-19

### Added
- `getDepartments`
- `getProvinces`
- `getDistricts`

### Improved
- Optimized hierarchical lookups using `Map` (O(1))
- Better performance for form-dependent selects

---

## [1.1.0] - 2026-03-18

### Added
- `getUbigeoData`
- `parseUbigeo`
- `formatUbigeo`
- `isValidDepartment`
- `isValidProvince`
- `isValidDistrict`

### Improved
- Validation performance optimized using `Set` (O(1))

---

## [1.0.0] - 2026-03-17

### Initial Release

### Added
- `getDistrict`
- `getProvince`
- `getDepartment`
- `validateUbigeo`

### Features
- JavaScript and TypeScript support
- ES Modules (ESM)
- Type definitions included (.d.ts)
- Tree-shaking support
- Optimized for Node.js and modern bundlers