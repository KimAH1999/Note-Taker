var inquirer = require('inquirer');
inquirer
  .prompt([
      {
        type: "input",
        name:"question1",
        message: "Whats your name?"

      },
      {
        type: "input",
        name:"question2",
        message: "Whats your Age?"

      }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });