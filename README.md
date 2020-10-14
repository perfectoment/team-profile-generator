# Team Profile Generator

I created a team profile generator that allows you, when prompting node.js, to create a webpage that automaticaly appends employee information with the answers to prompts. The user is asked if they want to add information for Engineers, Interns, and Managers, each with unquie questions and outputs. The information provided is then appended to cards on the webpage.


## Code Snippet for Team Profile Generator
```function firstQuestion(){
  return inquirer.prompt([
    {
      type: "list",
      message: "What is your employee's role?",
      name: "role",
      choices:["Manager", "Engineer", "Intern", "Quit"]
    },
    ])
    .then (function (data){
      if(data.role === "Manager"){
        managerQuestions();
      }
      if(data.role === "Intern"){
        internQuestions();
      }
      if(data.role === "Engineer"){
        engineerQuestions();
      }
      if(data.role === "Quit"){
        appendFileAsync("./output/team.html", render(employeeArray), "utf8");
        
      }
    })
  }   
  ```


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/)
* [Inquirer.js](https://www.npmjs.com/package/inquirer)

## Deployed Link

* [See video of it in action!](https://youtu.be/GAj4hFmotgs)


## Author

* **Ryan Nemec** 

- [Link to Portfolio Site](https://perfectoment.github.io/Ryan-Portfolio/)
- [Link to Github](https://github.com/perfectoment)
- [Link to LinkedIn](https://www.linkedin.com/in/ryan-nemec-5a6b3a66/)

