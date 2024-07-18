// This is where I would create shape classes

class Circle {
  constructor(color, radius) {
    this.color = color;
    this.radius = radius;
  }
  render() {
    return ` <circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
  }
  renderWithText(text, color) {
    return `${this.render()} <text x="150" y="115" font-size="50" text-anchor="middle" fill="${color}">${text}</text>`;
  }
}

class Triangle {
  constructor() {}
}

class Rectangle {
  constructor() {}
}
// You can split each of these into their own files for instance one for circle, square and triangle
// Must include classes for each shape as well including a test for each one
module.exports = { Circle, Triangle, Rectangle };
