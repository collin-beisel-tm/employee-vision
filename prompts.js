const inquirer = require("inquirer");

function appWrapper() {

    function initialPrompt() {
        inquirer
        .prompt({
          type: "list",
          choices: [
            "Add department",
            "Add role",
            "Add employee",
            "View departments",
            "View roles",
            "View employees",
            "Update employee role",
            "Quit"
          ],
          message: "Use the arrow keys to select an action!",
          name: "option"
        })
        .then(function(result) {
    
          switch (result.option) {
            case "Add department":
              addDepartment();
              break;
            case "Add role":
              addRole();
              break;
            case "Add employee":
              addEmployee();
              break;
            case "View departments":
              viewDepartment();
              break;
            case "View roles":
              viewRoles();
              break;
            case "View employees":
              viewEmployees();
              break;
            case "Update employee role":
              updateEmployee();
              break;
            default:
              exit();
          }
        });
    }
    
    
    //Functions
    
    function addDepartment() {
    
    
        inquirer.prompt({
          
            type: "input",
            message: "What is the name of the department?",
            name: "dept"
      
        }).then(function(answer){
      
      
      
            db.query("INSERT INTO departments (name) VALUES (?)", [answer.dept] , function(err, res) {
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
            message: "Enter a new role?",
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
      
      
          db.query("INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)", [answer.role, answer.salary, answer.deptID], function(err, res) {
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
            name: "roleID"
          },
          {
            type: "input",
            message: "What is the id number of the manager this employee will report to?",
            name: "managerID"
          }
        ])
        .then(function(answer) {
      
          
          db.query("INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.firstName, answer.lastName, answer.roleID, answer.managerID], function(err, res) {
            if (err) throw err;
            console.table(res);
            initialPrompt();
          });
        });
      }
      
      
      function updateEmployee() {
      inquirer
        .prompt([
          {
            type: "input",
            message: "Which employee would you like to update?",
            name: "employeeUpdate"
          },
      
          {
            type: "input",
            message: "What will the new role be?",
            name: "updateRole"
          }
        ])
        .then(function(answer) {
          db.query('UPDATE employees SET role_id=? WHERE first_name= ?',[answer.updateRole, answer.employeeUpdate],function(err, res) {
            if (err) throw err;
            console.table(res);
            initialPrompt();
          });
        });
      }
      
      function viewDepartment() {
      db.query("SELECT * FROM departments", function(err, res) {
        if (err) throw err;
        console.table(res);
        initialPrompt();
      });
      }
      
      function viewRoles() {
      db.query("SELECT * FROM roles", function(err, res) {
        if (err) throw err;
        console.table(res);
        initialPrompt();
      });
      }
      
      function viewEmployees() {
      db.query("SELECT * FROM employees", function(err, res) {
        if (err) throw err;
        console.table(res);
        initialPrompt();
      });
     }
      
      function exit() {
      db.end();
      process.exit();
      }
}


module.exports = appWrapper();