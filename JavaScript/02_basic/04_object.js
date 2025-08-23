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
const regularUser1 = {
  fullname: "John Doe"
};

// Accessing a property
console.log(regularUser1.fullname); // John Doe

// Objects to merge
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// Merging obj1 and obj2 into a new object
// ✅ Important: "Object" is case-sensitive, use "Object.assign", not "object.assign"
// Using Object.assign
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// Using spread operator (cleaner way)
const obj5 = { ...obj1, ...obj2 };
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
      
    {
        id: 1,
        email: "h@gmail.com"
    },
    {

    },
    {

    },
 


]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'))






/*Explanation:
- Object.assign(target, ...sources)
  → Copies all properties from source objects into the target.
- If you pass obj1 as target → obj1 will be modified.
- Passing {} as target → creates a new object, keeping obj1 & obj2 unchanged.
*/

