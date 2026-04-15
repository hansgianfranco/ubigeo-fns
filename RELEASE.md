# RELEASE.md


# Release Process

This project follows **Semantic Versioning (SemVer)**:

---

## Versioning rules

- **PATCH (2.0.x)** → bug fixes, internal improvements
- **MINOR (2.x.0)** → new features (backward compatible)
- **MAJOR (x.0.0)** → breaking changes

---

## How to release

### 1. Update version

```bash
npm version patch
# or
npm version minor
# or
npm version major
````

---

### 2. Run tests

```bash
npm run test
```

---

### 3. Build project

```bash
npm run build
```

---

### 4. Publish to npm

```bash
npm publish
```

---

## Checklist before release

* [ ] All tests passing
* [ ] CHANGELOG updated
* [ ] README updated if needed
* [ ] No broken exports
* [ ] Build output verified (`dist/`)

---

## Best practices

* Never publish untested code
* Always update CHANGELOG before release
* Avoid breaking changes in patch versions

