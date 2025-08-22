// index.js

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];

// ✅ Combine arrays with spread operator
const all_new_heros = [...marvel_heros, ...dc];
console.log("All Heroes:", all_new_heros);
// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// ✅ Flatten nested array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log("Flattened Array:", real_another_array);
// [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

// ✅ Array.from with a string (works because string is iterable)
console.log("Array.from on string:", Array.from("hitesh"));
// [ 'h', 'i', 't', 'e', 's', 'h' ]

// ✅ Example: create array from object with length
console.log(
  "Array.from with length:",
  Array.from({ length: 5 }, (_, i) => i + 1)
);
// [ 1, 2, 3, 4, 5 ]

// ✅ If you have separate scores, use Array.of (not Array.from)
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log("Array.of scores:", Array.of(score1, score2, score3));
// [ 100, 200, 300 ]
