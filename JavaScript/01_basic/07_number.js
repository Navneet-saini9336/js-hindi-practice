const score = 400;
console.log("score -", score); 
// 400 (primitive number)

const balance = new Number(1000);
console.log("balance -", balance); 
// [Number: 1000] (Number object wrapper)

console.log("balance.toString().length -", balance.toString().length); 
// "1000".length = 4

console.log("balance.toFixed(1) -", balance.toFixed(1)); 
// 1000.0 → fixed 1 decimal place

// Precision
const otherNumber = 1233.8966;
console.log("otherNumber.toPrecision(3) -", otherNumber.toPrecision(3));
// 1.23e+3 → 3 significant digits

// --- Extra examples ---

// Convert to exponential notation
console.log("otherNumber.toExponential(2) -", otherNumber.toExponential(2));
// 1.23e+3 → scientific notation with 2 decimals

// Format with commas (locale-based)
console.log("balance.toLocaleString() -", balance.toLocaleString());
// 1,000 (US locale formatting)

// Check if number is integer
console.log("Number.isInteger(score) -", Number.isInteger(score));
// true

console.log("Number.isInteger(12.5) -", Number.isInteger(12.5));
// false

// Check if value is NaN (Not a Number)
console.log("Number.isNaN('abc' / 2) -", Number.isNaN('abc' / 2));
// true

// Parse string to number
console.log("Number.parseInt('42px') -", Number.parseInt('42px'));
// 42

console.log("Number.parseFloat('3.14pi') -", Number.parseFloat('3.14pi'));
// 3.14
