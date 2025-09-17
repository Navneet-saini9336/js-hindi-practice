class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak();  // Dog barks
