// Include packages to use in project
const inquirer = require("inquire");

// Set a list of prompts to to help the user generate text, shapes, and color of the shapes
// Boiler plate code that can be adjusted
inquirer
  .prompt([
    // Pass prompts or questions here
  ])
  .then((answers) => {
    // any feedback validate answers
  })
  .catch((error) => {
    // Catch used to catch errors in code
    if (error) {
      // Prompt couldn't rendered
    } else {
      // Other errors
    }
  });
// Use the write file function and path to generate a the shapes in a specified location the file should be named logo.svg

// fs.writeFile(fileName, data)
// const fileName = 'logo.svg';
// const filePath = `./lib/`;
