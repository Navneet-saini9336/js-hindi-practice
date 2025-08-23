//Objects destructuring and JSON API

// Object with course details
const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor: "hitesh"   // ✅ correct key spelling
}

// Destructuring object
// Here we are extracting 'courseInstructor' directly from the 'course' object
const { courseInstructor } = course;

console.log(courseInstructor); // Output: hitesh

// Destructuring with alias → rename 'courseInstructure' to 'instructor'
const { courseInstructure: instructor } = course2;

console.log(instructor); // Output: hitesh

/*
💡 Concept:
- Destructuring allows us to directly unpack values from objects into variables.
- If the object property name and variable name are the same → we can use direct destructuring.
- If the object property name is different, or too long → we can rename it using alias (key: newVariableName).
*/