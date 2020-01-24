export const inputError = new Error(
  "Input provided was not between 1 and 3999"
);
export const typeError = new TypeError("Input provided was not a number");

function convertUnitValue(num, placeValue) {
  num = +num;
  const lookup = [["I", "V", "X"], ["X", "L", "C"], ["C", "D", "M"], ["M"]];
  const [one, five, ten] = lookup[placeValue];
  const numerals = {
    "0-3": one.repeat(num),
    "4": `${one}${five}`,
    "5": five,
    "6-8": `${five}${one.repeat(num % 5)}`,
    "9": `${one}${ten}`
  };
  return numerals[numerals[num] ? num : num < 4 ? "0-3" : "6-8"];
}

export function convertRomanNumeral(val) {
  if (isNaN(val)) throw typeError;
  if (val < 1 || val > 3999) throw inputError;
  return val
    .toString()
    .split("")
    .reverse()
    .map(convertUnitValue)
    .reverse()
    .join("");
}
