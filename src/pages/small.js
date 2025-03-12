import React from "react";

function small() {
  return <div>small</div>;
}

export default small;

class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }

  greet() {
    console.log(`Model: ${this.model}, Rangi: ${this.color}`);
  }
}

const car1 = new Car("Tesla", "Qora");
car1.greet();

class Animals {
  constructor(dogs, cats) {
    this.dogs = dogs;
    this.cats = cats;
  }
  greet() {
    console.log(`Animals: ${this.dogs}, typeAnimal:${this.cats}`);
  }
}

const animals = new Animals("Lion", "Sheep");
animals.greet();
