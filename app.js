const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employeeArray = [];

// function engineerQuestions(){
  // return inquirer.prompt([
  //   {
  //       type: "input",
  //       message: "What is their name?",
  //       name: "name"
  //     },
  //     {
  //       type: "input",
  //       message: "What is their id?",
  //       name: "id"
  //     },
  //     {
  //       type: "input",
  //       message: "What is their email address?",
  //       name: "email"
  //     },
  //     {
  //       type: "input",
  //       message: "What is their Github profile?",
  //       name: "github"
  //     },
     
  //     ])
  //     .then(function(data){
  //       Manager = data.role.choices[0];
  //       Engineer = data.role.choices[1];
  //       Intern = data.role.choices[2];
  //     }
  //     )
  //     .catch(function (error){
  //       console.log(error)
  //     })
// }

 function internQuestions(){
  return inquirer.prompt([
      {
        type: "input",
        message: "What is their name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is their id?",
        name: "id"
      },
      {
        type: "input",
        message: "What is their email address?",
        name: "email"
      },
      {
      type: "input",
      message: "What school are they attending?",
      name: "school"
      },
    
      ])
      .then(function(data){
       
      }
      )
 }
 function managerQuestions(){
  return inquirer.prompt([
    {
      type: "input",
      message: "What is their name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is their id?",
      name: "id"
    },
    {
      type: "input",
      message: "What is their email address?",
      name: "email"
    },
    {
     type: "input",
     message: "What is their office phone number?",
     name: "officeNumber"
   },
     
  ]).then(function(data){
      const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
      employeeArray.push(manager)
      console.log(render(employeeArray))
      // firstQuestion();
      })
       
}

function firstQuestion(){
  return inquirer.prompt([
    {
      type: "list",
      message: "What is thier role?",
      name: "role",
      choices:["Manager", "Engineer", "Intern", "Quit"]
    },
    ])
    .then (function (data){
      if(data.role === "Manager"){
        managerQuestions();
      }
    })
  }   

firstQuestion().then(response =>{
  render(employeeArray);
});

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
