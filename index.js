// Include packages to use in project
const inquirer = require("inquirer");

// Set a list of prompts to to help the user to selecct a color and shape, provide text for the logo and save the generated SVG to a svg file
const start = async () => {
  // Below is what will display in the CLI to prompt the user.
  await inquirer
    // This will prompt the user in the CLI displaying all possibilities for logo customization
    .prompt([
      {
        name: "choice",
        type: "list",
        message: "Please make a selection to customize your logo",
        choices: [
          "Add a shape",
          "Select a color",
          "Add logo text",
          "Exit", // Exit will become it's on function and not a while loop
        ],
      },
    ])
    .then(async (response) => {
      console.log(response);
      // This switch statement will allow the user to select an option and then execute the function that corresponds to that option
      switch (response.choice) {
        case "Add a shape":
          addShape();
          break; // If you don't include a break it might execute another function or throw an error
        case "Select a color":
          selectColor();
          break;
        case "Add logo text":
          addText();
          break;
        case "Exit":
          exit(); // create a function with pool.end
          break;
      }
    });
};

start();

async function addShape() {
  // I can use a try catch to catch any errors within this function
  // There needs to be a way to retrieve each shape example file when a user makes a selection of the shape they want to use
  // It must be a file system method like a combo of read and write file
}

// Ths can be rinsed and reused in each functions logic if necessary
//  Begin writing logic for the app
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
