//const tinderUser = new Object()


const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn =false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname: "patel"
        }
    }
}

// Example user object
const regularUser = {
  fullname: "John Doe"
};

// Accessing a property
console.log(regularUser.fullname); // John Doe

// Objects to merge
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// Merging obj1 and obj2 into a new object
// ✅ Important: "Object" is case-sensitive, use "Object.assign", not "object.assign"
const obj3 = Object.assign({}, obj1, obj2);

console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

/*
Explanation:
- Object.assign(target, ...sources)
  → Copies all properties from source objects into the target.
- If you pass obj1 as target → obj1 will be modified.
- Passing {} as target → creates a new object, keeping obj1 & obj2 unchanged.
*/
