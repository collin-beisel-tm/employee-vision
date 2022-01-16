// Add near the top of the file
const mysql = require('mysql2');
const inquirer = require("inquirer");
require("console.table");
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'test',
      database: 'employee_vision'
    },
    console.log('Using the Employee Vision database.')
  );

  // Start server after DB db
db.connect(err => {
  if (err) throw err;
  console.log('Welcome User!');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  
  initialPrompt();
 
});

function initialPrompt() {
  inquirer
  .prompt({
    type: "list",
    choices: [
      "View departments",
      "View roles",
      "View employees",
      "Add department",
      "Add role",
      "Add employee",
      "Update employee role",
      "Quit"
    ],
    message: "Use the arrow keys to select an action!",
    name: "option"
  })
  .then(function(choices) {

    switch (choices.option) {

      case "View departments":
      viewDepartment();
      break;
      case "View roles":
      viewRoles();
      break;
      case "View employees":
      viewEmployees();
      break;
      case "Add department":
        addDepartment();
        break;
      case "Add role":
        addRole();
        break;
      case "Add employee":
        addEmployee();
        break;
      case "Update employee role":
        updateEmployeesRole();
        break;
      default:
        exit();
    }
  });
}


//Functions

function viewDepartment() {
  db.query("SELECT * FROM departments", function(err, res) {
    if (err) throw err;
    console.table(res);
    initialPrompt();
  });
  }
  
  function viewRoles() {
    var query ="SELECT roles.title, roles.id, departments.dept_name, roles.salary FROM roles LEFT JOIN departments ON roles.dept_id = departments.id";
  db.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    initialPrompt();
  });
  }
  
  function viewEmployees() {
    var query = "SELECT e.id, e.first_name, e.last_name, r.title, d.dept_name, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employees e LEFT JOIN roles r ON e.roles_id = r.id LEFT JOIN departments d ON d.id  = r.dept_id LEFT JOIN employees m ON m.id = e.manager_id";
  db.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    initialPrompt();
  });
 }

function addDepartment() {


  inquirer.prompt({
    
      type: "input",
      message: "What is the name of the department?",
      name: "dept"

  }).then(function(answer){



      db.query("INSERT INTO departments (dept_name) VALUES (?)", [answer.dept] , function(err, res) {
          if (err) throw err;
          console.table(res)
          initialPrompt()
  })
  })
};


function addRole() {
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter a new role title?",
      name: "role"
    },
    {
      type: "input",
      message: "Enter the salary for this role?",
      name: "salary"
    },
    {
      type: "input",
      message: "Enter the dept ID?",
      name: "deptID"
    }
  ])
  .then(function(answer) {


    db.query("INSERT INTO roles (title, salary, departments_id) VALUES (?, ?, ?)", [answer.role, answer.salary, answer.deptID], function(err, res) {
      if (err) throw err;
      console.table(res);
      initialPrompt();
    });
  });
}

function addEmployee() {
inquirer
  .prompt([
    {
      type: "input",
      message: "What's the first name of the employee?",
      name: "firstName"
    },
    {
      type: "input",
      message: "What's the last name of the employee?",
      name: "lastName"
    },
    {
      type: "input",
      message: "What is the employee's role id number?",
      name: "rolesID"
    },
    {
      type: "input",
      message: "What is the id number of the manager this employee will report to?",
      name: "managerID"
    }
  ])
  .then(function(answer) {

    
    db.query("INSERT INTO employees (first_name, last_name, roles_id, manager_id) VALUES (?, ?, ?, ?)", [answer.firstName, answer.lastName, answer.rolesID, answer.managerID], function(err, res) {
      if (err) throw err;
      console.table(res);
      initialPrompt();
    });
  });
}


function updateEmployeesRole() {
inquirer
  .prompt([
    {
      type: "input",
      message: "Please enter the employee ID for the employee whos role you want to update?",
      name: "employeeUpdate"
    },

    {
      type: "input",
      message: "What will the new role ID be?",
      name: "updateRole"
    }
  ])
  .then(function(answer) {
    db.query('UPDATE employees SET roles_id=? WHERE id= ?',[answer.updateRole, answer.employeeUpdate],function(err, res) {
      if (err) throw err;
      console.table(res);
      initialPrompt();
    });
  });
}
        
function exit() {
  db.end();
  process.exit();
  }
