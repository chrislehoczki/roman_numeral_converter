# Roman Numeral Converter

## Local Install
- Clone the repo - `git clone https://github.com/christoph-phillips/roman_numeral_converter.git`
- Install dependences `yarn`
- Run the test suite `yarn test`

## Approach

Although the test asked for a `class`, it was unnecessary so I made a conversion `function`.

Firstly the input is checked that it is a number, and that its value is between 1 and 3999.

The array is converted to a string, split, and reversed.

Map is used to go through the place values 1, 10, 100, 1000.

The `convertUnitValue` function is called on each item.  

This has a lookup so we can find the equivalent roman numeral of a single unit, five units, and ten units.

We then compose our return values in an object based on whether the unit is 9, 5, 4, 0-3 or 6-8.

This creates an array of strings which is reversed and joined for the final solution.

## Testing

There is a small test suite using Jest as a test runner alongside the file containing the conversion function.
If you would like to run it, please install dependencies using `yarn`, and then run `yarn test`.

## Assumptions Made and Caveats

Firstly, I assumed that you wouldn’t mind if this was a function rather than a class.
I also assumed that the function should not support values greater than 3999.
However, I wanted to make sure the function would be extendable to include the values 5000, 10000, 50000, 100000 e.t.c. if need be. You could simply add those supported values into the lookup inside `convertUnitValue` function.

One caveat is that the file is written in ES6 with ES Module syntax. This means the test runner must use Babel to run the test suite.
