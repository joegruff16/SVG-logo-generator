// Import classes to leverage for app logic
const SVG = require("./lib/svg");
const Shape = require("./lib/shapes");
// Include packages to use in project
const inquirer = require("inquirer");

// Set a list of prompts to to help the user to selecct a color and shape, provide text for the logo and save the generated SVG to a svg file
const start = async () => {
  // Below is what will display in the CLI to prompt the user.
  console.log(start);
  await inquirer
    .prompt([
      {
        name: "Add a shape",
        type: "list",
        message: "Pick a shape for your logo",
        choices: [
          "Circle",
          "Rectangle",
          "Triangle",
          "Exit", // Exit will become it's on function and not a while loop
        ],
      },
      {
        name: "Shape color",
        type: "input",
        message: "Enter a color with at least 3 characters",
      },
      {
        name: "Logo text",
        type: "input",
        message: "Enter text for your logo with at least 3 characters",
      },
      {
        name: "Text color",
        type: "input",
        message: "Enter a color with at least 3 characters",
      },
    ])
    .then(async (response) => {
      console.log(response);
      // This switch statement will allow the user to select an option and then execute the function that corresponds to that option
      switch (response.choice) {
        case "Add a shape":
          generateShape();
          break; // If you don't include a break it might execute another function or throw an error
        case "Shape color":
          Shape();
          break;
        case "Logo text":
          // addText();
          break;
        case "Text color":
          SVG();
        case "Exit":
          exit();
          break;
      }
    });
};

function generateShape(options) {
  let svg = "";

  switch (options.shape) {
    case "Circle":
      svg = `<circle cx="150" cy="100" r="100" />`;
      break;
    case "Rectangle":
      svg = `<rect x="50" height="200" width="200" />`;
      break;
    case "Triangle":
      svg = `<polygon height="100%" width="100%" points="180, 10 10, 10 90, 180" />`;
  }
}

start();

// Use the write file function and path to generate in a specified file location a file named logo.svg

// fs.writeFile(fileName, data)
// const fileName = 'logo.svg';
// const filePath = `./lib/`;
