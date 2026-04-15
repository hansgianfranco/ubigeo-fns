# Testing Guide

This project uses automated tests to ensure reliability and correctness of all UBIGEO utilities.

---

## ▶️ Run Tests

```bash
npm run test
````

---

## 📦 What is tested

We cover the following areas:

### ✔️ Core functions

* `validateUbigeo`
* `findByName`
* `getDepartments`
* `getProvinces`
* `getDistricts`

---

### ✔️ Edge cases

* null / undefined inputs
* empty strings
* invalid formats
* non-string inputs (number, object, array)
* malformed UBIGEO codes

---

### ✔️ Data integrity

* consistency between department/province/district hierarchy
* correct mapping of UBIGEO codes

---

## 🧠 Testing philosophy

We focus on:

* correctness over complexity
* predictable behavior
* robust validation

---

## 🚀 Goal

Maintain high reliability for production systems such as:

* government forms
* e-commerce checkout flows
* logistics and address validation systems