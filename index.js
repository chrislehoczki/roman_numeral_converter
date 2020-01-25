export default class RomanNumeralGenerator {
  generate(val) {
    if (isNaN(val)) throw new TypeError("Input provided was not a number");
    if (val < 1 || val > 3999)
      throw new Error("Input provided was not between 1 and 3999");
    return val
      .toString()
      .split("")
      .map(num => +num)
      .reverse()
      .map(this.convertDigitToNumeral)
      .reverse()
      .join("");
  }
  convertDigitToNumeral(digit, exponent) {
    const baseTenNumerals = [
      ["I", "V", "X"],
      ["X", "L", "C"],
      ["C", "D", "M"],
      ["M", null, null]
    ];
    const [one, five, ten] = baseTenNumerals[exponent];
    if (digit < 4) return one.repeat(digit);
    if (digit === 4) return `${one}${five}`;
    if (digit === 5) return five;
    if (digit > 5 && digit < 9) return `${five}${one.repeat(digit % 5)}`;
    if (digit === 9) return `${one}${ten}`;
  }
}
