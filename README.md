# Roman Numeral Converter

## Local Install

- Clone the repo - `git clone https://github.com/christoph-phillips/roman_numeral_converter.git`
- Install dependences `yarn`
- Run the test suite `yarn test`

## Approach

Firstly the input is checked that it is a number, and that its value is between 1 and 3999.

The input value is converted to a string, split, converted to numbers, and reversed. We can then convert each unit easily.

The `convertValueToNumeral` method is called on each item with the value and the base10 exponent (in this case the array index).

This method has a lookup called `baseTenNumerals` so we can find the equivalent roman numeral for one, five, and ten for the given exponent.

The correct value is returned by composing the numerals for one five and ten in the correct sequence.

This creates an array of numeral strings which is reversed and joined for the final solution.

## Testing

I'm using Jest as a test runner.

Please find tests in `index.spec.js`.

Some are programatically generated.

## Assumptions Made and Caveats

I assumed that the generator should not support values greater than 3999.

However, I wanted to make sure the generator would be extendable to include the values 5000, 10000, 50000, 100000 e.t.c. if need be. You could simply add those supported values into the lookup inside `convertValueToNumeral` method.

One caveat is that the file is written in ES6 with ES Module syntax. This means the test runner must use Babel to run the test suite.
