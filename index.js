// Include packages to use in project
const inquirer = require("inquire");

// Set a list of prompts to to help the user to selecct a color and shape, provide text for the logo and save the generated SVG to a svg file
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
// Use the write file function and path to generate in a specified file location a file named logo.svg

// fs.writeFile(fileName, data)
// const fileName = 'logo.svg';
// const filePath = `./lib/`;
