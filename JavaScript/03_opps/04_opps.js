class Bird {
  fly() {
    console.log("Some birds can fly");
  }
}
class Sparrow extends Bird {
  fly() {
    console.log("Sparrow flies high");
  }
}
class Penguin extends Bird {
  fly() {
    console.log("Penguin can't fly");
  }
}

const birds = [new Sparrow(), new Penguin()];
birds.forEach(b => b.fly());
// Sparrow flies high
// Penguin can't fly
