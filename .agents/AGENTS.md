# Agent Rules for ubigeo-fns

## Git, Versioning, and Release Guidelines

### 1. Semantic Versioning (SemVer)
- **PATCH (`v2.x.Y`)**: Bug fixes, performance tweaks, internal refactoring, non-breaking fixes.
- **MINOR (`v2.X.0`)**: New features, new exported functions, expanded runtime/bundler compatibility (e.g., dual CJS + ESM support).
- **MAJOR (`vX.0.0`)**: Breaking API contract changes.

### 2. Git Tag & Commit Formatting Rules
- **Tag Format**: Git tags MUST strictly follow the `vX.Y.Z` format (e.g., `v2.2.0`, `v2.3.0`).
- **Release Commits**: Release commits MUST follow conventional commits syntax: `chore: release vX.Y.Z`.
- **Feature Commits**: `feat: <description>` (e.g. `feat: add CJS support`).
- **Fix Commits**: `fix: <description>` (e.g. `fix: subpath export build`).

### 3. Mandatory Release Checklist
Before tagging or bumping a version:
1. Update `"version"` in `package.json`.
2. Update `CHANGELOG.md` following [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) (`## [X.Y.Z] - YYYY-MM-DD`).
3. Run and verify `npm test`, `npm run build`, and `npm run lint`.
4. Verify build output artifacts in `dist/`.
5. Commit with `chore: release vX.Y.Z` and tag as `vX.Y.Z`.
