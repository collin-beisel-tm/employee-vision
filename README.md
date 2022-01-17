# Employee Vision

 ![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

 ## Table of Contents
  * [Links](#links)
  * [Description](#app-descriptino)
  * [Technologies Used](#technologies-used)
  * [Why I Built](#why-did-i-build-this-project)
  * [What I learned](#what-did-i-learn)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [User Story](#User-Story)
  * [Acceptance Criteria](#acceptance-criteria)

![Main Menu Screenshot](https://github.com/collin-beisel-tm/employee-vision/blob/main/images/main-menu-screenshot.PNG)

## Links
 - Github Repo: https://github.com/collin-beisel-tm/employee-vision
 - Video Demo: https://drive.google.com/file/d/1JgJFIjzG1xw6OYAR2dVB2eqA3J-RU496/view?usp=sharing
## App Description

Employee Vision is a Node.js console application that allows it's users to interface with a MYSQL database that holds employee data. Small companies can use this application to keep track of their Employees, departments, and roles. This app was built as an assignment for SMU's Full Stack Web Development Bootcamp.

## Technologies used
- JavaScript
- Node.js
- Express.js
- MySQL2
- Inquirer.js
- Git/GitHub

## Why did I build this project?
I built this project as a bootcamp assignment. 

## What did I learn?
This project taught me how to use MySQL to create a database, tables, and modify them using a user friendly command line interface.

## Installation
 - Navigate to https://github.com/collin-beisel-tm/employee-vision
 - click the download/clone the package
 - Open with your favorite code editor
 - Run NPM i
 - update your mysql credentials in the connection section of the code
 - SOURCE your schema and seeds files
 - run npm start in your terminal
 - The app will start 
## license
MIT License

Copyright (c) [2021] [CollinBeisel]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
## User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database