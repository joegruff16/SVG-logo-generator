// Import classes to leverage for app logic
const SVG = require("./lib/svg");
const { Circle, Rectangle, Triangle } = require("./lib/shapes");

// Include packages to use in project
const inquirer = require("inquirer");
const fs = require("fs");

// Set a list of prompts to to help the user to selecct a color and shape, provide text for the logo and save the generated SVG to a svg file
const start = async () => {
  // Below is what will display in the CLI to prompt the user.
  console.log("Starting logo generator");
  const answers = await inquirer.prompt([
    {
      name: "shape",
      type: "list",
      message: "Pick a shape for your logo",
      choices: ["Circle", "Rectangle", "Triangle"],
    },
    {
      name: "color",
      type: "input",
      message: "Enter a color for your shape",
      validate: (input) => input.length >= 3,
    },
    {
      name: "text",
      type: "input",
      message: "Enter text for your logo with at least 3 characters",
      validate: (input) => input.length >= 3,
    },
    {
      name: "textColor",
      type: "input",
      message: "Enter a color with at least 3 characters",
      validate: (input) => input.length >= 3,
    },
  ]);

  function generateShape(options) {
    let svgHeader = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    let svgFooter = `</svg>`;
    let shapeSVG = "";

    if (!["Circle", "Rectangle", "Triangle"].includes(options.shape)) {
      return "Invalid shape type";
    }

    switch (options.shape) {
      case "Circle":
        shapeSVG = `<circle cx="150" cy="100" r="100" fill="${options.color}" />`;
        break;
      case "Rectangle":
        shapeSVG = `<rect x="50" height="200" width="200" fill="${options.color}" />`;
        break;
      case "Triangle":
        shapeSVG = `<polygon height="100%" width="100%" points="180, 10 10, 10 90, 180" fill="${options.color}" />`;
        break;
      default:
        throw new Error("Incorrect shape type");
    }

    // Add text for SVG
    let textSVG = `<text x="150" y="115" font-size="50" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>`;
    // Combine everything to form the complete svg file
    let svgContent = `${svgHeader}${shapeSVG}${textSVG}${svgFooter}`;
    return svgContent;
  }

  // Invoke generateShape
  const svgContent = generateShape({
    shape: answers.shape,
    color: answers.color,
  });
  // Use the write file function and path to generate in a specified file location a file named logo.svg
  const fileName = "logo.svg";
  const filePath = `./lib/${fileName}`;

  // Write SVG file to logo.svg using writefile
  fs.writeFile(filePath, svgContent, (err) => {
    if (err) throw err;
    if (svgContent === "Invalid shape type") {
      console.log("Invalid shape type, logo not generated.");
    } else {
      console.log("Generated logo.svg");
    }
  });
};
start();

// Define options for each shape
