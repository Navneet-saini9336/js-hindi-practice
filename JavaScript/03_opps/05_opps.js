class Shape {
  area() {
    throw new Error("area() must be implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const c = new Circle(5);
console.log(c.area());  // 78.54
