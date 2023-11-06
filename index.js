const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Title:",
  },
  {
    type: "input",
    name: "desc",
    message: "Description:",
  },
  {
    type: "input",
    name: "install",
    message: "Installation Instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage Information:",
  },
  {
    type: "input",
    name: "username",
    message: "GitHub Username:",
  },
  {
    type: "input",
    name: "email",
    message: "Email:",
  },
  {
    type: "list",
    name: "license",
    message: "Select your License:",
    choices: ["MIT", "Apache", "GPL", "None"],
  },
  {
    type: "input",
    name: "contribute",
    message: "Contribution Guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Test Instructions:",
  },
];

function writeToFile(data) {
  fs.writeFile("./README.md", data, (err) =>
    err
      ? console.error(err)
      : console.log("Success! Check the assets folder for your new file!")
  );
}

function init() {
  console.log("Welcome to your README Creator! Please follow the prompts below");
  inquirer.prompt(questions).then((answers) => {
    console.log("Thank you!");
    let content = markdown.generateMarkdown(answers);
    writeToFile(content);
  });
}

init();
