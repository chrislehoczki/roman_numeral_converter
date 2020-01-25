export const inputError = new Error(
  "Input provided was not between 1 and 3999"
);
export const typeError = new TypeError("Input provided was not a number");

const convertValueToNumeral = (val, exponent) => {
  const baseTenNumerals = [
    ["I", "V", "X"],
    ["X", "L", "C"],
    ["C", "D", "M"],
    ["M", null, null]
  ];
  const [one, five, ten] = baseTenNumerals[exponent];
  if (val < 4) return one.repeat(val);
  if (val === 4) return `${one}${five}`;
  if (val === 5) return five;
  if (val > 5 && val < 9) return `${five}${one.repeat(val % 5)}`;
  if (val === 9) return `${one}${ten}`;
};

export const convertRomanNumeral = val => {
  if (isNaN(val)) throw typeError;
  if (val < 1 || val > 3999) throw inputError;
  return val
    .toString()
    .split("")
    .map(num => +num)
    .reverse()
    .map(convertValueToNumeral)
    .reverse()
    .join("");
};
