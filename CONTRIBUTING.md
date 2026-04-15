# Contributing to ubigeo-fns

First of all, thank you for considering contributing to **ubigeo-fns** 🚀

We welcome any kind of contribution: bug reports, feature requests, documentation improvements, or code contributions.

---

## Project Setup

### 1. Fork the repository

Click the "Fork" button on GitHub and clone your fork:

```bash
git clone https://github.com/your-username/ubigeo-fns.git
cd ubigeo-fns
````

---

### 2. Install dependencies

```bash
npm install
```

or

```bash
pnpm install
```

---

### 3. Run the project

If the project includes build steps:

```bash
npm run build
```

For development:

```bash
npm run dev
```

---

## Branch Strategy

Use descriptive branch names:

* `feature/find-by-name`
* `fix/ubigeo-validation`
* `docs/readme-update`

Example:

```bash
git checkout -b feature/find-by-name
```

---

## Code Guidelines

Please follow these rules:

* Use **TypeScript strict mode**
* Keep functions small and reusable
* Avoid duplicating UBIGEO logic
* Prefer pure functions
* Maintain backward compatibility when possible

---

## Commit Convention

We use conventional commits:

```
feat: add findByName utility
fix: correct province lookup bug
docs: update README examples
refactor: simplify ubigeo parser
chore: update dependencies
```

---

## Testing

If tests are available:

```bash
npm run test
```

Make sure all tests pass before submitting a PR.

---

## Pull Request Process

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to your fork
5. Open a Pull Request

### PR Guidelines:

* Describe clearly what your PR does
* Include screenshots or examples if needed
* Link related issues if applicable

---

## Bug Reports

When reporting bugs, please include:

* Steps to reproduce
* Expected behavior
* Actual behavior
* Version of the package
* Environment (Node, browser, etc.)

---

## Feature Requests

We welcome feature ideas!

Please open an issue and describe:

* The problem you're trying to solve
* Suggested solution
* Possible alternatives

---

## Data Source

This project uses official UBIGEO data provided by **INEI (Peru)**.

---

## Code of Conduct

By participating, you agree to follow our Code of Conduct.

See: [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

---

## Thank You

Your contributions help improve tools for the entire developer community in Peru