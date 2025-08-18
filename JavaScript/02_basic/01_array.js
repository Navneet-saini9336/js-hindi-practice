// ==========================================================
// 📌 JavaScript Arrays - Interview Cheat Sheet
// ==========================================================

// 🔹 1. What is an Array?
// An array is an ordered collection of elements (indexed starting from 0).
// In JS, arrays are objects with special behaviors (dynamic, heterogeneous).

let arr = [1, 2, 3, "hello", true];
console.log("1. Array definition:", arr, "| typeof =", typeof arr); 
// Output: object ✅

// ==========================================================

// 🔹 2. Indexed Collection (Access by index)
let fruits = ["apple", "banana", "mango"];
console.log("2. First fruit:", fruits[0]); // apple
console.log("Last fruit:", fruits[fruits.length - 1]); // mango

// ==========================================================

// 🔹 3. Dynamic nature (can store any type, resizable)
let mixed = [1, "text", { a: 10 }, [2, 3]];
mixed.push("new");
console.log("3. Dynamic array:", mixed);

// ==========================================================

// 🔹 4. Common Methods
let nums = [10, 20, 30, 40];
nums.push(50);   // add at end
nums.pop();      // remove from end
nums.shift();    // remove from start
nums.unshift(5); // add at start
console.log("4. After push/pop/shift/unshift:", nums);

console.log("indexOf 20:", nums.indexOf(20)); // 2
console.log("includes 40:", nums.includes(40)); // true

console.log("slice(1,3):", nums.slice(1, 3)); // does not modify
nums.splice(2, 1); // removes 1 element at index 2
console.log("after splice(2,1):", nums);

// ==========================================================

// 🔹 5. Iteration (looping over arrays)
let numbers = [1, 2, 3, 4];

console.log("5. For loop:");
for (let i = 0; i < numbers.length; i++) console.log(numbers[i]);

console.log("forEach:");
numbers.forEach(n => console.log(n));

let doubled = numbers.map(n => n * 2); // map → returns new array
console.log("map (double):", doubled);

// ==========================================================

// 🔹 6. High-order Methods (important in interviews)
let moreNums = [1, 2, 3, 4, 5];
console.log("filter even:", moreNums.filter(n => n % 2 === 0)); // [2,4]
console.log("reduce sum:", moreNums.reduce((a, b) => a + b, 0)); // 15
console.log("find > 3:", moreNums.find(n => n > 3)); // 4
console.log("every > 0:", moreNums.every(n => n > 0)); // true
console.log("some > 4:", moreNums.some(n => n > 4)); // true

// ==========================================================

// 🔹 7. Spread & Rest Operators
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = [...arr1, ...arr2]; // spread merges arrays
console.log("7. Spread merge:", merged);

// Rest: collect remaining elements
let [first, ...rest] = merged;
console.log("Rest operator:", first, rest);

// ==========================================================

// 🔹 8. Destructuring (extract values into variables)
let colors = ["red", "green", "blue"];
let [c1, c2] = colors;
console.log("8. Destructuring:", c1, c2);

// ==========================================================

// 🔹 9. Special Cases
let sparse = [];
sparse[5] = "hi"; // empty slots
console.log("9. Sparse array:", sparse);

console.log("typeof [] =", typeof []); // object
console.log("Array.isArray([]) =", Array.isArray([])); // ✅ true

// ==========================================================

// 🔹 10. Gotchas
console.log("[1,2] == [1,2] ?", [1, 2] == [1, 2]); 
// false → arrays are reference types

console.log("[1,2] + [3,4] =", [1, 2] + [3, 4]); 
// "1,23,4" → converted to string

console.log("[...'abc'] =", [..."abc"]); 
// ['a','b','c'] → strings are iterable

// ==========================================================
// 📌 SUMMARY (Interview key points)
// - Arrays are objects, dynamic, heterogeneous.
// - Use Array.isArray() to check real array.
// - Common methods: push, pop, shift, unshift, slice, splice.
// - Iteration: for, forEach, map, filter, reduce, find, some, every.
// - Spread/rest operators useful for merge/copy/destructure.
// - Arrays are reference types → copied by reference not value.
// ==========================================================
