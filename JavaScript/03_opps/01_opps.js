 class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  drive() {
    console.log(`${this.color} ${this.brand} is driving`);
  }
}

const car1 = new Car("Toyota", "Red");
car1.drive();  // Red Toyota is driving
