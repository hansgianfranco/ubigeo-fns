import test from "node:test";
import assert from "node:assert/strict";

import {
  parseUbigeo,
  validateUbigeo,
  isValidDepartment,
  isValidProvince,
  isValidDistrict,
  getDepartment,
  getProvince,
  getDistrict,
  searchByName
} from "../dist/index.js";

const valid = "150131";

test("valid ubigeo works", () => {
  assert.equal(getDepartment(valid), "Lima");
  assert.equal(getProvince(valid), "Lima");
  assert.equal(getDistrict(valid), "San Isidro");
  assert.equal(validateUbigeo(valid), true);
});

test("input safety (null, undefined, weird types)", () => {
  const badInputs = [null, undefined, {}, [], 0, false];

  for (const v of badInputs) {
    assert.equal(parseUbigeo(v), null);
    assert.equal(getDepartment(v), null);
    assert.equal(getProvince(v), null);
    assert.equal(getDistrict(v), null);
  }
});

test("empty and whitespace strings", () => {
  assert.equal(getDepartment(""), null);
  assert.equal(getProvince("   "), null);
  assert.equal(parseUbigeo("   "), null);
});

test("invalid formats", () => {
  const invalidCases = [
    "ABC123",
    "1501310",   // 7 digits
    "15013",     // 5 digits
    "15 01 31",
    "15013a"
  ];

  for (const v of invalidCases) {
    assert.equal(parseUbigeo(v), null);
  }
});

test("validators strict behavior", () => {
  assert.equal(isValidDepartment("15"), true);
  assert.equal(isValidProvince("1501"), true);
  assert.equal(isValidDistrict("150131"), true);

  assert.equal(isValidDepartment("99"), false);
  assert.equal(isValidProvince("9999"), false);
  assert.equal(isValidDistrict("999999"), false);

  assert.equal(isValidDepartment("1"), false);
  assert.equal(isValidProvince("150"), false);
  assert.equal(isValidDistrict("15013"), false);
});

test("edge case: zero codes", () => {
  assert.equal(validateUbigeo("000000"), false);
  assert.equal(isValidDepartment("00"), false);
  assert.equal(isValidProvince("0000"), false);
  assert.equal(isValidDistrict("000000"), false);
});

test("edge case: whitespace noise", () => {
  assert.deepStrictEqual(parseUbigeo(" 150131 "), {
    departmentCode: "15",
    provinceCode: "1501",
    districtCode: "150131",
  });

  assert.deepStrictEqual(parseUbigeo("\t150131"), {
    departmentCode: "15",
    provinceCode: "1501",
    districtCode: "150131",
  });

  assert.deepStrictEqual(parseUbigeo("150131\n"), {
    departmentCode: "15",
    provinceCode: "1501",
    districtCode: "150131",
  });
});

test("edge case: overflow digits", () => {
  assert.equal(parseUbigeo("1501310"), null);
  assert.equal(parseUbigeo("00150131"), null);
});

test("edge case: mixed characters", () => {
  assert.equal(parseUbigeo("15A131"), null);
  assert.equal(parseUbigeo("ABCD12"), null);
  assert.equal(validateUbigeo("15-0131"), false);
});

test("edge case: internal spaces", () => {
  assert.equal(parseUbigeo("15 01 31"), null);
  assert.equal(validateUbigeo("15 01 31"), false);
});

test("searchByName basic matches", () => {
  const r1 = searchByName("San Isidro");

  assert.ok(Array.isArray(r1));
  assert.ok(r1.length > 0);

  const hasSanIsidro = r1.some(
    (x) => x.district === "San Isidro"
  );

  assert.equal(hasSanIsidro, true);
});

test("searchByName case insensitive", () => {
  const r1 = searchByName("lima");
  const r2 = searchByName("LIMA");

  assert.equal(r1.length > 0, true);
  assert.equal(r2.length > 0, true);
});

test("searchByName handles accents", () => {
  const r1 = searchByName("Chachapoyas");

  assert.ok(Array.isArray(r1));
  assert.ok(r1.length > 0);
});

test("searchByName empty input", () => {
  assert.deepEqual(searchByName(""), []);
  assert.deepEqual(searchByName(null), []);
  assert.deepEqual(searchByName(undefined), []);
});