// Add near the top of the file
const db = require('./db/connection');
const prompts = require("./prompts");
require("console.table");

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');

  initialPrompt();
});

//Functions

function addDepartment() {


  inquirer.prompt({
    
      type: "input",
      message: "What is the name of the department?",
      name: "deptName"

  }).then(function(answer){



      connection.query("INSERT INTO department (name) VALUES (?)", [answer.deptName] , function(err, res) {
          if (err) throw err;
          console.table(res)
          startScreen()
  })
  })
}