const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "username",
    },
    {
      type: "input",
      message: "What languages do you know?",
      name: "lang",
    },
    {
      type: "checkbox",
      message: "What is your preferred method of communication?",
      name: "communication",
      choices: ["phone", "message", "email"],
    },
  ])
  .then((response) => {
    let choicesStr = response.communication.join(",")
    let msg = `My Names is ${response.username} I write ${response.lang}, and my prefered method of communications are: ${choicesStr} \n`
    fs.writeFile(
      "lang.txt",
      msg,
      (err) => {
        if (err) throw err;
        console.log("Success! Saved!");
      }
    );
  });

