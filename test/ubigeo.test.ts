import {
  parseUbigeo,
  validateUbigeo,
  isValidDepartment,
  isValidProvince,
  isValidDistrict,
  getDepartment,
  getProvince,
  getDistrict,
  getDepartments,
  getProvinces,
  getDistricts,
  getUbigeoData,
  formatUbigeo,
  searchByName
} from "../src/index";

describe("Ubigeo Functions", () => {
  const valid = "150131";

  describe("Core APIs", () => {
    it("should return correct names for a valid ubigeo", () => {
      expect(getDepartment(valid)).toBe("Lima");
      expect(getProvince(valid)).toBe("Lima");
      expect(getDistrict(valid)).toBe("San Isidro");
      expect(validateUbigeo(valid)).toBe(true);
    });

    it("should return null for non-existent ubigeos", () => {
      expect(getDepartment("999999")).toBeNull();
      expect(getProvince("999999")).toBeNull();
      expect(getDistrict("999999")).toBeNull();
      expect(validateUbigeo("999999")).toBe(false);
    });
  });

  describe("Input Safety", () => {
    it("should handle null, undefined, and weird types safely", () => {
      const badInputs = [null, undefined, {}, [], false];

      for (const v of badInputs) {
        expect(parseUbigeo(v)).toBeNull();
        expect(getDepartment(v)).toBeNull();
        expect(getProvince(v)).toBeNull();
        expect(getDistrict(v)).toBeNull();
      }
    });

    it("should handle empty and whitespace strings", () => {
      expect(getDepartment("")).toBeNull();
      expect(getProvince("   ")).toBeNull();
      expect(parseUbigeo("   ")).toBeNull();
    });

    it("should reject invalid formats", () => {
      const invalidCases = [
        "ABC123",
        "1501310", // 7 digits
        "15013",   // 5 digits
        "15 01 31",
        "15013a"
      ];

      for (const v of invalidCases) {
        expect(parseUbigeo(v)).toBeNull();
      }
    });

    it("should support numeric inputs gracefully", () => {
      expect(getDepartment(150131)).toBe("Lima");
      expect(getProvince(150131)).toBe("Lima");
      expect(getDistrict(150131)).toBe("San Isidro");
      expect(validateUbigeo(150131)).toBe(true);
      expect(parseUbigeo(150131)).toEqual({
        departmentCode: "15",
        provinceCode: "1501",
        districtCode: "150131",
      });

      // 0 padding for numbers
      expect(parseUbigeo(0)).toEqual({
        departmentCode: "00",
        provinceCode: "0000",
        districtCode: "000000",
      });
    });
  });

  describe("Validators", () => {
    it("should validate strict behavior", () => {
      expect(isValidDepartment("15")).toBe(true);
      expect(isValidProvince("1501")).toBe(true);
      expect(isValidDistrict("150131")).toBe(true);

      expect(isValidDepartment("99")).toBe(false);
      expect(isValidProvince("9999")).toBe(false);
      expect(isValidDistrict("999999")).toBe(false);

      expect(isValidDepartment("1")).toBe(false);
      expect(isValidProvince("150")).toBe(false);
      expect(isValidDistrict("15013")).toBe(false);
    });

    it("should handle zero codes as invalid in data but valid in parsing", () => {
      expect(validateUbigeo("000000")).toBe(false);
      expect(isValidDepartment("00")).toBe(false);
      expect(isValidProvince("0000")).toBe(false);
      expect(isValidDistrict("000000")).toBe(false);
    });
  });

  describe("Edge Cases", () => {
    it("should handle whitespace noise correctly", () => {
      expect(parseUbigeo(" 150131 ")).toEqual({
        departmentCode: "15",
        provinceCode: "1501",
        districtCode: "150131",
      });

      expect(parseUbigeo("\t150131")).toEqual({
        departmentCode: "15",
        provinceCode: "1501",
        districtCode: "150131",
      });

      expect(parseUbigeo("150131\n")).toEqual({
        departmentCode: "15",
        provinceCode: "1501",
        districtCode: "150131",
      });
    });

    it("should handle overflow digits", () => {
      expect(parseUbigeo("1501310")).toBeNull();
      expect(parseUbigeo("00150131")).toBeNull();
    });

    it("should handle mixed characters and internal spaces", () => {
      expect(parseUbigeo("15A131")).toBeNull();
      expect(parseUbigeo("ABCD12")).toBeNull();
      expect(validateUbigeo("15-0131")).toBe(false);
      expect(parseUbigeo("15 01 31")).toBeNull();
      expect(validateUbigeo("15 01 31")).toBe(false);
    });
  });

  describe("List APIs", () => {
    it("getDepartments should return the list of departments", () => {
      const deps = getDepartments();
      expect(Array.isArray(deps)).toBe(true);
      expect(deps.length).toBeGreaterThan(0);
      expect(deps.some((d) => d.code === "15" && d.name === "Lima")).toBe(true);
    });

    it("getProvinces should return the list of provinces", () => {
      const provs = getProvinces("15");
      expect(Array.isArray(provs)).toBe(true);
      expect(provs.length).toBeGreaterThan(0);
      expect(provs.some((p) => p.code === "1501" && p.name === "Lima")).toBe(true);

      const provsNum = getProvinces(15);
      expect(provsNum).toEqual(provs);
      
      expect(getProvinces("99")).toEqual([]);
    });

    it("getDistricts should return the list of districts", () => {
      const dists = getDistricts("1501");
      expect(Array.isArray(dists)).toBe(true);
      expect(dists.length).toBeGreaterThan(0);
      expect(dists.some((d) => d.code === "150131" && d.name === "San Isidro")).toBe(true);
      
      expect(getDistricts("9999")).toEqual([]);
    });
  });

  describe("Utility APIs", () => {
    it("getUbigeoData should return full data for a valid district", () => {
      const data = getUbigeoData("150131");
      expect(data).not.toBeNull();
      expect(data?.ubigeo).toBe("150131");
      expect(data?.district).toBe("San Isidro");
      expect(data?.province).toBe("Lima");
      expect(data?.department).toBe("Lima");
      expect(data?.population).toBeGreaterThan(0);
      expect(data?.area).toBeGreaterThan(0);

      expect(getUbigeoData("999999")).toBeNull();
    });

    it("formatUbigeo should correctly format the ubigeo", () => {
      expect(formatUbigeo("150131")).toBe("San Isidro, Lima, Lima");
      expect(formatUbigeo("150131", "short")).toBe("San Isidro, Lima");
      expect(formatUbigeo(150131)).toBe("San Isidro, Lima, Lima");

      expect(formatUbigeo("999999")).toBeNull();
      expect(formatUbigeo(null)).toBeNull();
    });
  });

  describe("Search API (searchByName)", () => {
    it("should return basic matches", () => {
      const r1 = searchByName("San Isidro");
      expect(Array.isArray(r1)).toBe(true);
      expect(r1.length).toBeGreaterThan(0);
      expect(r1.some((x) => x.district === "San Isidro")).toBe(true);
    });

    it("should be case insensitive", () => {
      const r1 = searchByName("lima");
      const r2 = searchByName("LIMA");
      expect(r1.length).toBeGreaterThan(0);
      expect(r2.length).toBeGreaterThan(0);
    });

    it("should handle accents correctly", () => {
      const r1 = searchByName("Chachapoyas");
      expect(Array.isArray(r1)).toBe(true);
      expect(r1.length).toBeGreaterThan(0);
      
      const r2 = searchByName("Áncash");
      expect(r2.length).toBeGreaterThan(0);
      expect(r2.some(x => x.department === "Ancash")).toBe(true);
    });

    it("should handle empty inputs safely", () => {
      expect(searchByName("")).toEqual([]);
      // @ts-expect-error testing invalid input
      expect(searchByName(null)).toEqual([]);
      // @ts-expect-error testing invalid input
      expect(searchByName(undefined)).toEqual([]);
    });

    it("should respect the limit option", () => {
      const r1 = searchByName("san", { limit: 5 });
      expect(r1.length).toBe(5);

      const r2 = searchByName("san", { limit: 10 });
      expect(r2.length).toBe(10);
    });
  });
});
