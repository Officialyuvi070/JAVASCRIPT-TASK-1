// explain all the operators in Javascript

// 1. Arthmetic Operators

let num1 = 5 ;
let num2 = 7 ;
let num3 = 2 ;
let num4 = 9 ;
let num5 = 10 ;
let num6 = 20 ;

// Addition
let sum = num1 + num2;
console.log("Addition:", sum);

// Subtraction
let difference = num1 - num3;
console.log("Subtraction:", difference);

// Multiplication
let product = num1 * num4;
console.log("Multiplication:", product);

// Division
let quotient = num5 / num6;
console.log("Division:", quotient);

// Modulo (Remainder)
let remainder = num5 % num6;
console.log("Modulo:", remainder);

// Increment
num1++;
console.log("Increment:", num1);

// Decrement
num2--;
console.log("Decrement:", num2);
//--------------------------------------------------------------------------------------------------------------------------
// 2. Assignment Operator

// Initialize variables
let x = 8;
let y = 16;

// Addition assignment operator (+=)
x += y;
console.log("x after addition: " + x); // Output: 15

// Subtraction assignment operator (-=)
x -= 3;
console.log("x after subtraction: " + x); // Output: 12

// Multiplication assignment operator (*=)
x *= 2;
console.log("x after multiplication: " + x); // Output: 24

// Division assignment operator (/=)
x /= 4;
console.log("x after division: " + x); // Output: 6

// Modulus assignment operator (%=)
x %= 5;
console.log("x after modulus: " + x); // Output: 1

// Exponentiation assignment operator (**=)
x **= 3;
console.log("x after exponentiation: " + x); // Output: 1
//----------------------------------------------------------------------------------------------------------------------------
// 3. Comparison Operator

// Greater than (>)
var a = 10;
var b = 5;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is not greater than b");
}

// Less than (<)
var age = 18;
if (age < 18) {
  console.log("Your age is minimum");
} else {
  console.log("You are an adult");
}

// Greater than or equal to (>=)
var n1 = 10;
var n2 = 10;
if (x >= y) {
  console.log("n1 is greater than or equal to n2");
} else {
  console.log("n1 is less than n2");
}

// Less than or equal to (<=)
var temperature = 25;
if (temperature <= 0) {
  console.log("It's freezing");
} else {
  console.log("It's not freezing");
}

// Equal to (==)
var v1 = 5;
var v2 = 5;
if (v1 == v2) {
  console.log("x is equal to y");
} else {
  console.log("x is not equal to y");
}

// Not equal to (!=)
var a = 10;
var b = 20;
if (a != b) {
  console.log("a is not equal to b");
} else {
  console.log("a is equal to b");
}

// Strict equal to (===)
var c = 5;
var d = "5";
if (c === d) {
  console.log("c is strictly equal to d");
} else {
  console.log("c is not strictly equal to d");
}

// Strict not equal to (!==)
var p = 10;
var q = "10";
if (p !== q) {
  console.log("p is strictly not equal to q");
} else {
  console.log("p is strictly equal to q");
}
//-------------------------------------------------------------------------------------------------------------------------------
// 4. Logical Operators

// AND (&&) operator
let x1 = 5;
let x2 = 10;
let x3 = 15;

if (x1 < x2 && x2 < x3) {
  console.log("Both conditions are true");
} else {
  console.log("At least one condition is false");
}

// Logical OR (||) operator
let y1 = 5;
let y2 = 10;
let y3 = 15;

if (y1 > y2 || y2 < y3) {
  console.log("At least one condition is true");
} else {
  console.log("Both conditions are false");
}
// Logical NOT (!) operator
let isActive = true;

if (!isActive) {
  console.log("The variable is not active");
} else {
  console.log("The variable is active");
}
//---------------------------------------------------------------------------------------------------------------------------------
// 5. Bitwise Operator

// AND operator (&)
let A1 = 5;  // binary: 0101
let A2 = 3;  // binary: 0011
let resultAnd = A1 & A2;  // binary: 0001 (1 in decimal)
console.log("Bitwise AND:", resultAnd);

// OR operator (|)
let resultOr = A1 | A2;  // binary: 0111 (7 in decimal)
console.log("Bitwise OR:", resultOr);

// XOR operator (^)
let resultXor = A1 ^ A2;  // binary: 0110 (6 in decimal)
console.log("Bitwise XOR:", resultXor);

// NOT operator (~)
let resultNot = ~A1;  // binary: 1010 (inverted binary representation of 5)
console.log("Bitwise NOT:", resultNot);

// Left shift operator (<<)
let A3 = 10;  // binary: 1010
let shiftLeft = A3 << 2;  // binary: 101000 (40 in decimal)
console.log("Left Shift:", shiftLeft);

// Right shift operator (>>)
let shiftRight = A3 >> 1;  // binary: 0101 (5 in decimal)
console.log("Right Shift:", shiftRight);

// Zero-fill right shift operator (>>>)
let shiftZeroFill = A3 >>> 1;  // binary: 0101 (5 in decimal)
console.log("Zero-fill Right Shift:", shiftZeroFill);
//------------------------------------------------------------------------------------------------------------------------------------
// 6. Ternary Operator { Conditional (Ternary) Operator }

// In which Ternary operator the values of X and y taken form Assignment Operators you can see.
const result1 = x > y ? 'x is greater than y' : 'x is not greater than y';
console.log(result1);
//------------------------------------------------------------------------------------------------------------------------------------