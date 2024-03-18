/**
Icnludes function
Checks if the specified value exists in the given array.
Returns true if the value is found, and false otherwise.
Does not modify the original array.
 */
const myArray = [1, 2, 3, 4];
console.log(myArray.includes(3)); // Output: true
console.log(myArray.includes(5)); // Output: false


// Math.abs(x)Returns the absolute value of a number.
console.log(Math.abs(-1)); // Output: 1

// Math.ceil(x)Returns the smallest integer greater than or equal to a number.
console.log(Math.ceil(0.5)); // Output: 1

// Math.floor(x)Returns the largest integer less than or equal to a number.
console.log(Math.floor(0.5)); // Output: 0

// Math.max(x, y, z, ...)Returns the largest of zero or more numbers.
console.log(Math.max(1, 2, 3)); // Output: 3

// Math.min(x, y, z, ...)Returns the smallest of zero or more numbers.
console.log(Math.min(1, 2, 3)); // Output: 1

// Math.pow(x, y)Returns the base to the exponent power, that is, x^y.
console.log(Math.pow(2, 3)); // Output: 8

// Math.round(x)Returns the value of a number rounded to the nearest integer.
console.log(Math.round(0.5)); // Output: 1

// Math.sqrt(x)Returns the square root of a number.
console.log(Math.sqrt(4)); // Output: 2

// Math.trunc(x)Returns the integer part of a number by removing any fractional digits.
console.log(Math.trunc(0.5)); // Output: 0

// parseInt(string) or parseFloat(string)Parses a string and returns an integer or floating-point number.
const numString = "42";
const num = parseInt(numString);
console.log(num); // Output: 42

// parseFloat(string)Parses a string and returns a floating-point number.
const floatString = "3.14";
const float = parseFloat(floatString);
console.log(float); // Output: 3.14

// String.length    Returns the length of a string.
const str = "Hello, World!";
console.log(str.length); // Output: 13


// String.toUpperCase()   Returns the calling string value converted to uppercase.
const strUpperCase = "hello, world!";
console.log(str.toUpperCase()); // Output: HELLO, WORLD!


// String.toLowerCase()  Returns the calling string value converted to lowercase.
const strLowerCase = "HELLO, WORLD!";
console.log(strLowerCase.toLowerCase()); // Output: hello, world!
