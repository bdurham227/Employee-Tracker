const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Trojans1=",
  database: "employee_tracker_db",
});

connection.query = util.promisify(connection.query);

connection.connect((err) => {
  if (err) throw err;
  console.log(`Connected to ${connection.threadId}`);
  runSearch();
});

const runSearch = () => {
  inquirer
    .prompt([
      {
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "Find all Departments",
          "Find all Roles",
          "Find all Employees",
          "Edit Department",
          "Edit role",
          "Edit Employee",
          
          
        ],
      },
    ])
    .then((answers) => {
      switch (answers.action) {

        case "Find all Departments":
          findDepartments();
          break;

        case "Find all Roles":
          findRoles();
          break;

        case "Find all Employees":
          findEmployees();
          break;

        case "Edit Department":
          editDepartment();
          break;

        case "Edit Role":
          editRole();
          break;

        case "Edit Employee":
          editEmployee();
          break;
       
      }
    });
};

const findDepartments = async () => {
  console.log("----------");
  await connection.query(
    `SELECT
         id, 
         name AS Department 
     FROM departments`,
    (err, res) => {
      if (err) throw err;
      console.table(res);
      runSearch();
    }
  );
};

const findRoles = async () => {
  console.log("--------------");
  await connection.query(
    `SELECT 
        id AS 'Employee ID',
        title AS Position,
        salary,
        department_id AS 'Department ID'
    FROM roles;`,
    (err, res) => {
      if (err) throw err;
      console.table(res);
      runSearch();
    }
  );
};

const findEmployees = async () => {
  console.log("--------------------");
  await connection.query(
    `SELECT 
        e.id,
        CONCAT(e.first_name, ' ', e.last_name) AS 'Employee Name',
        CONCAT(m.first_name, ' ', m.last_name) AS 'Manager',
        r.salary,
        r.title,
        d.name AS 'Department',
        e.manager_id 
    FROM employees e
    LEFT JOIN employees m
    ON e.manager_id = m.role_id
    JOIN roles r
    ON e.role_id = r.id
    JOIN departments d
    ON r.department_id = d.id; `,

    (err, res) => {
      if (err) throw err;
      console.table(res);
      runSearch();
    }
  );
};

const editDepartment = async () => {
  console.log("-----------------");
  //
  await connection.query("");

  inquirer.prompt([
    {
      type: 'list',
      name: 'departments',
      message: 'What would you like to do?',
      choices: ['Remove Department', 'Update Department']
  }
]).then((answer) => {
    switch(answer.departments) {
      case 'Remove Department':
        removeDepartment();
        break;
      case 'Update Department':
        UpdateDepartment();
        break;
    }
})
    //need to build out SQL query
    //query is going to based off inquirer.prompt answer
    //if adding a new department build out sql query for adding
    //if updating a department build out sql query for updating
    //if removing a department build out sql query for deleting
    //--------------------------------------------------------
    //set up inquirer.prompt questions to add department
    //enter new department name
    //.then((answers))--run promise to then
    // run query for insert into departments
    //console.log
    //runSearch()
    //----------------------------
    //if deleting department set up inquirer.prompt()
    //run query to DELETE FROM departments WHERE id=?
    //console.log
    //runSearch()


};

const editEmployee = async () => {
  console.log("------------------");
  await connection.query("");

    inquirer.prompt([
      {
        type: 'list',
        name: 'employee',
        message: 'What would you like to do?',
        choices: ['Add an Employee', 'Update Employee', 'Remove Employee']
      }
    ]).then((answers) => {
      switch(answers.employee) {
          case 'Add an Employee':
            addEmployee();
            break;
          case 'Update Employee':
            updateEmployee();
            break;
          case 'Remove Employee':
            removeEmployee();
            break;
            
      }
    })
    //need to build out SQL query
    //query is going to based off inquirer.prompt answer
    //if adding a new employee build out sql query for adding
    //if updating a employee build out sql query for updating
    //if removing a employee build out sql query for deleting
    //--------------------------------------------------------
    //set up inquirer.prompt to adding/updating/removing
    //if adding .then((answers))
    //query INSERT INTO employees
    //IF updating .then((answers))
    //query UPDATE employees SET values WHERE
    //IF deleting employee .then((answers))
    //query DELETE FROM employees WHERE id=?
};
const editRole = async () => {
  console.log("------------------------");
  await connection.query("");

  inquirer.prompt([
    {
      type: 'list',
      name: 'roles',
      message: 'What would you like to do?',
      choices: ['Update Role', 'Remove Role'],
    }
  ]).then((answers) => {
    switch(answers.roles) {
        case 'Update Role':
          updateRole();
          break;
        case 'Remove Role':
          removeRole();
          break;
    }
  })
    //need to build out SQL query
    //query is going to based off inquirer.prompt answer
    //if adding a new role build out sql query for adding
    //if updating a role build out sql query for updating
    //if removing a role build out sql query for deleting
    //--------------------------------------------------
    //set up inquirer.prompt()
    //IF adding a new role .then((answers))
    //query INSERT INTO `roles` VALUES=?
    //IF updating roles .then((answers))
    //query UPDATE roles SET values=? WHERE values=?
    //IF deleting roles .then((answers))
    //query DELETE FROM roles WHERE id=?
};
console.log('-------------|||||---------------------------|||||---------------------')
// runSearch();