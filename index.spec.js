import { convertRomanNumeral, inputError, typeError } from "./index";

describe("Roman numeral parser", () => {
  describe("Input checks", () => {
    it("Throws an error when input is less than 1", () => {
      expect(() => convertRomanNumeral(0)).toThrow(inputError);
    });
    it("Throws an error when input is greater than 3999", () => {
      expect(() => convertRomanNumeral(4000)).toThrow(inputError);
    });
    it("Throws an error when input is not a number", () => {
      expect(() => convertRomanNumeral("A String")).toThrow(typeError);
    });
  });
  describe("Place value 1", () => {
    const tests = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    tests.forEach((numeral, i) =>
      it(`Expect ${i + 1} to equal ${numeral}`, () =>
        expect(convertRomanNumeral(i + 1)).toEqual(numeral))
    );
  });
  describe("Place value 10", () => {
    const tests = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    tests.forEach((numeral, i) =>
      it(`Expect ${(i + 1) * 10} to equal ${numeral}`, () =>
        expect(convertRomanNumeral((i + 1) * 10)).toEqual(numeral))
    );
  });
  describe("Place value 100", () => {
    const tests = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    tests.forEach((numeral, i) =>
      it(`Expect ${(i + 1) * 100} to equal ${numeral}`, () =>
        expect(convertRomanNumeral((i + 1) * 100)).toEqual(numeral))
    );
  });
  describe("Place value 1000", () => {
    const tests = ["M", "MM", "MMM"];
    tests.forEach((numeral, i) =>
      it(`Expect ${(i + 1) * 1000} to equal ${numeral}`, () =>
        expect(convertRomanNumeral((i + 1) * 1000)).toEqual(numeral))
    );
  });
  describe("Smoke test range of values", () => {
    const tests = [
      [68, "LXVIII"],
      [649, "DCXLIX"],
      [891, "DCCCXCI"],
      [2014, "MMXIV"],
      [3999, "MMMCMXCIX"]
    ];
    tests.forEach(([input, expected], i) =>
      it(`Expect ${input} to equal ${expected}`, () =>
        expect(convertRomanNumeral(input)).toEqual(expected))
    );
  });
});
