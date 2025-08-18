// ----------------------
// Date in JavaScript
// ----------------------
// JavaScript has a built-in Date object for working with dates & times.
// It stores date/time as milliseconds from 1 Jan 1970 (Unix Epoch).

// Current date & time
let now = new Date();
console.log("now -", now); 
// Example: 2025-08-17T10:30:45.123Z

// Specific date (year, month, day, hours, minutes, seconds, ms)
// Note: Month is 0-based → Jan = 0, Aug = 7
let myBirthday = new Date(2000, 7, 17, 9, 30, 0);
console.log("myBirthday -", myBirthday);
// Thu Aug 17 2000 09:30:00 GMT...

// Date from string
let fromString = new Date("2023-12-25");
console.log("fromString -", fromString);
// Mon Dec 25 2023 ...

// ----------------------
// Date methods
// ----------------------

console.log("Year -", now.getFullYear());    // e.g. 2025
console.log("Month -", now.getMonth() + 1);  // e.g. 8 (added +1 because 0-based)
console.log("Date -", now.getDate());        // e.g. 17
console.log("Day -", now.getDay());          // 0=Sunday, 6=Saturday
console.log("Hours -", now.getHours());      // 0-23
console.log("Minutes -", now.getMinutes());  // 0-59
console.log("Seconds -", now.getSeconds());  // 0-59
console.log("Milliseconds -", now.getMilliseconds());

// Timestamp (ms since 1 Jan 1970)
console.log("Timestamp -", now.getTime());

// ----------------------
// Formatting
// ----------------------

console.log("toDateString -", now.toDateString());
// Example: Sun Aug 17 2025

console.log("toTimeString -", now.toTimeString());
// Example: 10:35:12 GMT+0000 (Coordinated Universal Time)

console.log("toISOString -", now.toISOString());
// Example: 2025-08-17T10:35:12.345Z

console.log("toLocaleDateString -", now.toLocaleDateString());
// Example: 8/17/2025 (US format)

console.log("toLocaleTimeString -", now.toLocaleTimeString());
// Example: 10:35:12 AM

console.log("toLocaleString -", now.toLocaleString());
// Example: 8/17/2025, 10:35:12 AM


///////////////////////////

let myCreateDate =new Date("01-14-2023");

// console.log(myCreateDate.toLocalString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

