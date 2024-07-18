// This is where I would create shape classes
// Need to create a shape class and then you would extend Circle, Triangle, and Rectangle
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
  }
  // Goes into the svg.js because the text would be rendered in the svg
}

class Triangle extends Shape {
  render() {
    return `<polygon height="100%" width="100%" points="180, 10 10, 10 90, 180" fill="${this.color}" />`;
  }
}

class Rectangle extends Shape {
  render() {
    return `<rect x="50" height="200" width="200" fill="${this.color}" />`;
  }
}
// You can split each of these into their own files for instance one for circle, square and triangle
// Must include classes for each shape as well including a test for each one
// Using deconstruction to export all classes and constructors
module.exports = { Circle, Triangle, Rectangle };
