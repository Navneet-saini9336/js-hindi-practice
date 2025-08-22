// index.js

// singleton example
// Object.create can be used to make objects, but here we use object literals

// Symbol key
const mySym = Symbol("key1");

// Object literal
const JsUser = {
    name: "Hitesh",
    "full name": "hitesh choudhary",
    [mySym]: "mykey1",  // using symbol as key
    age: 18,
    location: "Jaipur",
    email: "jitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
};

// Accessing properties
console.log("Email (dot):", JsUser.email);
console.log("Email (bracket):", JsUser["email"]);
console.log("Full name:", JsUser["full name"]);
console.log("Symbol value:", JsUser[mySym]);

// Modifying property
JsUser.email = "navneet@holistic.com";
console.log("Updated Email:", JsUser.email);

// Adding method BEFORE freeze
JsUser.greeting = function () {
    console.log("Hello JS User");
};

JsUser.greeting = function () {
    console.log(`Hello JS User , ${this.name}`);
};

// Freeze object (no more changes allowed)
Object.freeze(JsUser);

// Testing method
JsUser.greeting();


// 📌 SUMMARY (Interview key points)
// 1. Objects in JS can be created using literals or Object.create() (singleton).
// 2. Symbols can be used as unique keys in objects: [mySym]: "value".
// 3. Properties can be accessed via dot notation (obj.key) or bracket notation (obj["key"]).
// 4. Bracket notation is required for keys with spaces ("full name") or symbols.
// 5. Object.freeze(obj) makes the object immutable (no add/update/delete).
// 6. Methods can be added to objects as properties holding functions.
// 7. Always add/modify methods BEFORE freezing the object.
// 8. this keyword inside methods refers to the current object instance.
