// This will have the SVG class which will the shape and the text

class SVG {
  constructor() {
    (this.text = ""), (this.shape = "");
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
  }
  setText(message, color) {
    if (message.length < 3) {
      throw new Error("You must enter more than 3 characters");
    }
    this.text = `<text x="150" y="115" font-size="50" text-anchor="middle" fill="${color}">
        ${message} </text>`;
  }
}

module.exports = SVG;
